import path from 'path';
import Handlebars from 'handlebars';
import PartialsProcessor from './partials-processor';
import optionsParser from './options-parser';

import { HandlebarsPluginOptions } from './types/plugin-options';
import { TemplateSpecification } from './types/handlebars';

interface CompilerResult {
    code?: string;
    map?: string;
}

export default class HandlebarsCompiler {
    handlebarsPluginOptions: HandlebarsPluginOptions
    cache: Map<string, string>
	files: string[]

    constructor(handlebarsPluginOptions: HandlebarsPluginOptions) {
        this.handlebarsPluginOptions = handlebarsPluginOptions
        this.cache = new Map();
        this.files = [];
    }

	getWatchFiles(existingWatchFiles: string[]): string[] {
		const files: Set<string> = new Set()
		this.files.forEach(file => {
			if (!existingWatchFiles.includes(file)) {
				files.add(file)
			}
		})
		return Array.from(files)
	}

	// Convert to ESM and register partial
	toEsm(source: string, id: string): CompilerResult {
		const dir = path.dirname(id);
		const extname = path.extname(id)
		const name = path.basename(id);
		const basename = path.basename(id, extname);

		const parsedOptions = optionsParser.parse(this.handlebarsPluginOptions)

		// Get nested partials
		const partials = [...parsedOptions.partials]

		const partialsProcessor = new PartialsProcessor(this.handlebarsPluginOptions)
		const partialsSourceMap = partialsProcessor.getSourceMap({
			name,
			source,
			rootFile: id
		});

		this.files = partialsSourceMap.getFiles(dir, extname)

		const partialEntries = partialsSourceMap.getEntries()
		partials.push(...partialEntries)
        const compiledTemplate = partials.find(([partial]) => {
			return partial === basename
		})
		
		const children = [];
		
		for (const [partial, source] of partials) {
			children.push(partialsProcessor.getCompiledPartial([partial, source]));
		}
		
		const helpers = parsedOptions.helpers

		// Create a tree
		const tree = Handlebars.parse(compiledTemplate[1], { srcName: name });

        const precompileOptions: PrecompileOptions = Object.assign({}, this.handlebarsPluginOptions)
        precompileOptions.srcName = name
		const { code, map }: TemplateSpecification = Handlebars.precompile(tree, precompileOptions);

		const templateData = parsedOptions.templateData

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
				let templateData = Object.assign({}, ${JSON.stringify(templateData)}, data)
				return template(templateData, options)
			};
		`;

		return {
			code: body,
			map,
		};
	}
}