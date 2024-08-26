import * as ParsedOptions from './types/plugin-options/parsed';

import path from 'path';
import Handlebars from 'handlebars';

import { CompileResult, TemplateSpecification } from './types/handlebars';
import { SourceData } from './types/source-map';

type CompiledData = [string, TemplateSpecification]

export default class HandlebarsCompiler {
    compileOptions: CompileOptions
    partials: ParsedOptions.Partials
    helpers: ParsedOptions.Helpers
    templateData: ParsedOptions.TemplateData

    constructor(parsedOptions: ParsedOptions.IParsedOptions) {
        Object.entries(parsedOptions).forEach(([key, value]) => {
            this[key] = value
        })
    }

	getCompiledPartial([partial, source]: SourceData) {
		const compiled = Handlebars.precompile(source, this.compileOptions);
        const compiledData: CompiledData = [partial, compiled]
		return compiledData;
	}

	// Convert to ESM and register partial
	getTemplateSpecs(id: string): CompileResult {
		const extname = path.extname(id)
		const name = path.basename(id);
		const basename = path.basename(id, extname)

        const compiledTemplateData = this.partials.find(([partial]) => {
			return partial === basename
		})
		if (!compiledTemplateData) {
			console.error('Error parsing template', id)
			return
		}
		const [templateName, compiledTemplate] = compiledTemplateData
		
		const children = [];
		
		for (const [partial, source] of this.partials) {
			children.push(this.getCompiledPartial([partial, source]));
		}
		
		const helpers = this.helpers

		// Create a tree
		const tree = Handlebars.parse(compiledTemplate, { srcName: name });

        const precompileOptions: PrecompileOptions = Object.assign({}, this.compileOptions)
        precompileOptions.srcName = name
		const { code, map }: TemplateSpecification = Handlebars.precompile(tree, precompileOptions);

		const templateData = this.templateData

		// Import this (partial) template and nested templates
		const body = `
			import Handlebars from 'handlebars/runtime.js';
			const template = Handlebars.template(${code});
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

        return { code: body, map }
	}
}