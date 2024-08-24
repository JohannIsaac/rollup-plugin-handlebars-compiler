import path from 'path';
import fs from 'fs';

import Handlebars from 'handlebars';

import type { Plugin } from 'rollup';

interface ImportScanner {
    partials: Set<string>;
    helpers: Set<string>;
	[key: string]: any;
}

class ImportScanner extends Handlebars.Visitor implements ImportScanner {
    partials: Set<string>;
    helpers: Set<string>;

	constructor() {
		super();
		this.partials = new Set<string>();
		this.helpers = new Set<string>();
	}

	PartialStatement(partial: hbs.AST.PartialStatement): void {
		if (partial.name && partial.name.type === 'PathExpression') {
            this.partials.add(partial.name.original);
            return super.PartialStatement(partial);
		} else {
			throw new Error('Dynamic partial resolution is not supported');
        }
	}
}

interface HandlebarsPluginOptions extends CompileOptions {
    helpers?: object;
    partials?: object;
	templateData?: Object;
}

interface TemplateSpecification {
    code?: string;
    map?: string;
    [key: string | number]: any;
}

interface TransformResult {
    code?: string;
    map?: string;
    [key: string | number]: any;
}

type SourceData = [string, string]
type CompiledData = [string, TemplateSpecification]

type Helper = [string, Function]

export default function handlebarsCompiler(handlebarsPluginOptions: HandlebarsPluginOptions): Plugin {

	// Template cache
	const cache: Map<string, string> = new Map();

	function getCompiledPartial([partial, source]: SourceData) {
		const compiled = Handlebars.precompile(source, handlebarsPluginOptions);
        let compiledData: CompiledData = [partial, compiled]
		return compiledData;
	}

    function renamePartial(source: string, partialName: string, newPartialName: string) {
        source = source.replaceAll(new RegExp(`(\\{\\{>(\\n|\\s)*)(${partialName})`, "g"), `$1${newPartialName} `)
        return source
    }

	function getPartialSource(partialPath: string, genesisFileDirectory: string, currentFile: string): string | undefined {
		let relativeFileDirectory = path.dirname(currentFile)
		let relativePartialPath = path.join(relativeFileDirectory, partialPath)
		let partialAbsolutePath = path.resolve(genesisFileDirectory, `${relativePartialPath}.hbs`)
		let partialSource: string | undefined
		try {
			partialSource = fs.readFileSync(partialAbsolutePath, 'utf-8');
		} catch (e) {
			let fileWithError = path.join(genesisFileDirectory, currentFile)
			console.error(`\x1b[31mPartial \x1b[1m${partialPath}\x1b[0m\x1b[31m does not exist\x1b[0m`)
			console.error(`\t\x1b[2mError in ${fileWithError}\x1b[0m`)
		}
		return partialSource
	}

	// Recursive function for getting nested partials with pathname
	function getPartialSources(name: string, source: string, genesisFileDirectory: string, list: SourceData[] = []) {
		let filename = `${name}.hbs`
		let relativeFileDirectory = path.dirname(name)

		const tree = Handlebars.parse(source);
		const scanner = new ImportScanner();
		scanner.accept(tree);

		// Partials have been found
		if (scanner.partials.size) {
			for (const partialPath of scanner.partials) {

				// Check if partial name is already registered in handlebarsPluginOptions
				if (handlebarsPluginOptions.partials &&
					typeof handlebarsPluginOptions.partials === 'object' &&
					handlebarsPluginOptions.partials[partialPath]) {
					continue
				}

				let partialSource = getPartialSource(partialPath, genesisFileDirectory, filename)
				// Skip if partial does not exist
				if (!partialSource) continue
				
                let partialName = path.join(relativeFileDirectory, partialPath).replaceAll("\\", '/')
                source = renamePartial(source, partialPath, partialName)
				list = getPartialSources(partialName, partialSource, genesisFileDirectory, list);
			}
		}
        let sourceData: SourceData = [name, source]
        list.push(sourceData)

		return list;
	}

	function getHelpers() {
		let helpers: Helper[] = []
		if (!handlebarsPluginOptions || !handlebarsPluginOptions.helpers || typeof handlebarsPluginOptions.helpers !== 'object') return helpers
		helpers = Object.entries(handlebarsPluginOptions.helpers).filter(([helper, fn]) => typeof fn === 'function')
		return helpers
	}

	function getPartials() {
		let partials: SourceData[] = []
		if (!handlebarsPluginOptions || !handlebarsPluginOptions.partials || typeof handlebarsPluginOptions.partials !== 'object') return partials
		partials = Object.entries(handlebarsPluginOptions.partials).filter(([partial, source]) => typeof source === 'string')
		return partials
	}

	// Convert to ESM and register partial
	function toEsm(source: string, id: string) {
		const dir = path.dirname(id);
		const name = path.basename(id, '.hbs');

		// Get nested partials
		const partials = getPartials()
		const partialsByPaths = getPartialSources(name, source, dir);
		partials.push(...partialsByPaths)
        let templateData = partials.find(([partial, source]) => partial === name)
		
		const children = [];
		
		for (const [partial, source] of partials) {
			children.push(getCompiledPartial([partial, source]));
		}
		
		const helpers = getHelpers()

		// Create a tree
		const tree = Handlebars.parse(templateData[1], { srcName: name });

        let precompileOptions: PrecompileOptions = Object.assign({}, handlebarsPluginOptions)
        precompileOptions.srcName = name
		const { code, map }: TemplateSpecification = Handlebars.precompile(tree, precompileOptions);

		let pluginTemplateData = {}
		if (handlebarsPluginOptions && handlebarsPluginOptions.templateData && typeof handlebarsPluginOptions.templateData === 'object') {
			pluginTemplateData = handlebarsPluginOptions.templateData
		}

		// Import this (partial) template and nested templates
		const body = `
			import Handlebars from 'handlebars/runtime.js';
			const template = Handlebars.template(${code});
			Handlebars.registerPartial('${name}', template);
			${helpers.map(([helper, fn]) => `Handlebars.registerHelper('${helper}', ${fn});`).join('\n')}
			${children.map(([partial, compiled]) => `Handlebars.registerPartial('${partial}', Handlebars.template(${compiled}));`).join('\n')}
			export default (data, options) => {
				if (!data || typeof data !== 'object') {
					data = {}
				}
				let templateData = Object.assign({}, ${JSON.stringify(pluginTemplateData)}, data)
				return template(templateData, options)
			};
		`;

		return {
			code: body,
			map,
		};
	}

	return {
		name: 'handlebars-template',

		transform(source, id) {
			if (/\.(hbs|handlebars)/.test(id)) {
				// Get from cache when avalaible
				if (cache.has(id)) {
                    try {
                        return JSON.parse(cache.get(id));
                    } catch (e) {}
				}

				const output = toEsm(source, id);

				cache.set(id, JSON.stringify(output));

				return output;
			}

			return null;
		},
	};
}