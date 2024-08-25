import path from 'path';

import Handlebars from 'handlebars';

import type { CompilerResult, SourceDataMap } from './types'
import { HandlebarsPluginOptions, TemplateSpecification } from './types';
import PartialsProcessor from './partials-processor';
import OptionsProcessor from './options-processor';
import { SourceMapParser } from './source-map-parser';

export default class HandlebarsCompiler {
    handlebarsPluginOptions: HandlebarsPluginOptions
    cache: Map<string, string>
	watchFiles: string[]

    constructor(handlebarsPluginOptions: HandlebarsPluginOptions) {
        this.handlebarsPluginOptions = handlebarsPluginOptions
        this.cache = new Map();
        this.watchFiles = [];
    }

	getWatchFiles(existingWatchFiles: string[]): string[] {
		let files: Set<string> = new Set()
		this.watchFiles.forEach(file => {
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

		// Get nested partials
		const options = new OptionsProcessor(this.handlebarsPluginOptions)
		const partials = options.getPartials()

		const partialsProcessor = new PartialsProcessor(this.handlebarsPluginOptions)
		const partialsSourceMap = partialsProcessor.getSourceMap({
			name,
			source,
			rootFile: id
		});

		const parsedSourceMap = new SourceMapParser(partialsSourceMap)

		this.watchFiles = parsedSourceMap.getFiles(dir, extname)

		partials.push(...partialsSourceMap)
        const templateData = partials.find(([partial, source]) => {
			return partial === basename
		})
		
		const children = [];
		
		for (const [partial, source] of partials) {
			children.push(partialsProcessor.getCompiledPartial([partial, source]));
		}
		
		const helpers = options.getHelpers()

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