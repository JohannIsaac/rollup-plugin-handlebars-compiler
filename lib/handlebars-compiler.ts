import * as ParsedOptions from './types/plugin-options/parsed';

import path from 'path';
import Handlebars from 'handlebars';

import { CompileResult, TemplateSpecification } from './types/handlebars';

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

	private getCompiledPartials(): CompiledData[] {
		const compiledPartials = [];
		for (const [partial, source] of this.partials) {
			const compiled = Handlebars.precompile(source, this.compileOptions);
			const compiledData: CompiledData = [partial, compiled]
			compiledPartials.push(compiledData);
		}
		return compiledPartials
	}

	private getTemplateSpecs(file: string): TemplateSpecification {
		const extname = path.extname(file)
		const name = path.basename(file);
		const basename = path.basename(file, extname)

        const compiledTemplateData = this.partials.find(([partial]) => {
			return partial === basename
		})
		if (!compiledTemplateData) {
			console.error('Error parsing template', file)
			return
		}
		const [templateName, compiledTemplate] = compiledTemplateData

		// Create a tree
        const precompileOptions: PrecompileOptions = Object.assign({}, this.compileOptions)
        precompileOptions.srcName = name
		const tree = Handlebars.parse(compiledTemplate, { srcName: name });
		const templateSpecs: TemplateSpecification = Handlebars.precompile(tree, precompileOptions);

        return templateSpecs
	}

	// Compile handlebars file to ESM
	compile(file: string): CompileResult {
		const compiledPartials = this.getCompiledPartials()
		const helpers = this.helpers
		const templateData = this.templateData

		const { code, map } = this.getTemplateSpecs(file)

		// Import this (partial) template and nested templates
		const body = `
			import Handlebars from 'handlebars/runtime.js';
			const template = Handlebars.template(${code});
			${helpers.map(([helper, fn]) => `Handlebars.registerHelper('${helper}', ${fn});`).join('\n')}
			${compiledPartials.map(([partial, compiled]) => `Handlebars.registerPartial('${partial}', Handlebars.template(${compiled}));`).join('\n')}
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