import path from 'path';
import fs from 'fs';

import Handlebars from 'handlebars';

import type { SourceData, CompiledData, Helper } from './types'
import { HandlebarsPluginOptions, TemplateSpecification } from './types';

export default class HandlebarsCompiler {
    handlebarsPluginOptions: HandlebarsPluginOptions
    cache: Map<string, string>

    constructor(handlebarsPluginOptions: HandlebarsPluginOptions) {
        this.handlebarsPluginOptions = handlebarsPluginOptions
        this.cache = new Map();
    }

    static renamePartial(source: string, partialName: string, newPartialName: string) {
        source = source.replaceAll(new RegExp(`(\\{\\{>(\\n|\\s)*)(${partialName})`, 'g'), `$1${newPartialName} `)
        return source
    }

	static getPartialSource(partialPath: string, genesisFileDirectory: string, currentFile: string): string | undefined {
		const relativeFileDirectory = path.dirname(currentFile)
		const relativePartialPath = path.join(relativeFileDirectory, partialPath)
		const partialAbsolutePath = path.resolve(genesisFileDirectory, `${relativePartialPath}.hbs`)
		let partialSource: string | undefined
		try {
			partialSource = fs.readFileSync(partialAbsolutePath, 'utf-8');
		} catch (e) {
			const fileWithError = path.join(genesisFileDirectory, currentFile)
			console.error(`\x1b[31mPartial \x1b[1m${partialPath}\x1b[0m\x1b[31m does not exist\x1b[0m`)
			console.error(`\t\x1b[2mError in ${fileWithError}\x1b[0m`)
		}
		return partialSource
	}

    static ImportScanner = class extends Handlebars.Visitor {
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

	getCompiledPartial([partial, source]: SourceData) {
		const compiled = Handlebars.precompile(source, this.handlebarsPluginOptions);
        const compiledData: CompiledData = [partial, compiled]
		return compiledData;
	}

	// Recursive function for getting nested partials with pathname
	getPartialSources(name: string, source: string, genesisFileDirectory: string, list: SourceData[] = []) {
		const filename = `${name}.hbs`
		const relativeFileDirectory = path.dirname(name)

		const tree = Handlebars.parse(source);
		const scanner = new HandlebarsCompiler.ImportScanner();
		scanner.accept(tree);

		// Partials have been found
		if (scanner.partials.size) {
			for (const partialPath of scanner.partials) {

				// Check if partial name is already registered in handlebarsPluginOptions
				if (this.handlebarsPluginOptions.partials &&
					typeof this.handlebarsPluginOptions.partials === 'object' &&
					this.handlebarsPluginOptions.partials[partialPath]) {
					continue
				}

				const partialSource = HandlebarsCompiler.getPartialSource(partialPath, genesisFileDirectory, filename)
				// Skip if partial does not exist
				if (!partialSource) continue
				
                const partialName = path.join(relativeFileDirectory, partialPath).replaceAll('\\', '/')
                source = HandlebarsCompiler.renamePartial(source, partialPath, partialName)
				list = this.getPartialSources(partialName, partialSource, genesisFileDirectory, list);
			}
		}
        const sourceData: SourceData = [name, source]
        list.push(sourceData)

		return list;
	}

	getHelpers() {
		let helpers: Helper[] = []
		if (!this.handlebarsPluginOptions || !this.handlebarsPluginOptions.helpers || typeof this.handlebarsPluginOptions.helpers !== 'object') return helpers
		helpers = Object.entries(this.handlebarsPluginOptions.helpers).filter(([helper, fn]) => typeof fn === 'function')
		return helpers
	}

	getPartials() {
		let partials: SourceData[] = []
		if (!this.handlebarsPluginOptions || !this.handlebarsPluginOptions.partials || typeof this.handlebarsPluginOptions.partials !== 'object') return partials
		partials = Object.entries(this.handlebarsPluginOptions.partials).filter(([partial, source]) => typeof source === 'string')
		return partials
	}

	// Convert to ESM and register partial
	toEsm(source: string, id: string): TemplateSpecification {
		const dir = path.dirname(id);
		const name = path.basename(id, '.hbs');

		// Get nested partials
		const partials = this.getPartials()
		const partialsByPaths = this.getPartialSources(name, source, dir);
		partials.push(...partialsByPaths)
        const templateData = partials.find(([partial, source]) => partial === name)
		
		const children = [];
		
		for (const [partial, source] of partials) {
			children.push(this.getCompiledPartial([partial, source]));
		}
		
		const helpers = this.getHelpers()

		// Create a tree
		const tree = Handlebars.parse(templateData[1], { srcName: name });

        const precompileOptions: PrecompileOptions = Object.assign({}, this.handlebarsPluginOptions)
        precompileOptions.srcName = name
		const { code, map }: TemplateSpecification = Handlebars.precompile(tree, precompileOptions);

		let pluginTemplateData = {}
		if (this.handlebarsPluginOptions && this.handlebarsPluginOptions.templateData && typeof this.handlebarsPluginOptions.templateData === 'object') {
			pluginTemplateData = this.handlebarsPluginOptions.templateData
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
}