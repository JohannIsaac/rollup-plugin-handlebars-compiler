import * as ParsedOptions from './types/plugin-options/parsed';

import path from 'path';
import Handlebars from 'handlebars';
import { js_beautify } from 'js-beautify';

import { CompileResult, TemplateSourceMap, TemplateSpecification } from './types/handlebars';

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
			const compiled = Handlebars.precompile(source, this.compileOptions) as string
			const compiledData: CompiledData = [partial, compiled]
			compiledPartials.push(compiledData);
		}
		return compiledPartials
	}

	private getTemplateSpecs(file: string): TemplateSpecification {
		const extname = path.extname(file)
		const basename = path.basename(file, extname)

        const compiledTemplateData = this.partials.find(([partial]) => {
			return partial === basename
		})
		if (!compiledTemplateData) {
			console.error('Error parsing template', file)
			return null
		}
		const [templateName, compiledTemplate] = compiledTemplateData

		// Create a tree
		const tree = Handlebars.parse(compiledTemplate);
		const templateSpecs: TemplateSpecification = Handlebars.precompile(tree, this.compileOptions) as string

        return templateSpecs
	}

	// Compile handlebars file to ESM
	compile(file: string): CompileResult {
		const compiledPartials = this.getCompiledPartials()
		const helpers = this.helpers
		const templateData = this.templateData

		const code = this.getTemplateSpecs(file) as TemplateSourceMap

		// Import this (partial) template and nested templates
		let body = `
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
		// Format JS body before passing
		body = js_beautify(body)

        return { code: body }
	}
}