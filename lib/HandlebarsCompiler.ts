import * as ParsedOptions from './types/plugin-options/parsed';

import path from 'path';
import Handlebars from 'handlebars';
import { js_beautify } from 'js-beautify';

import { CompileResult, TemplateSourceMap, TemplateSpecification } from './types/Handlebars';

type CompiledData = [string, TemplateSpecification]

// Need to manually set to export to package
export type CompileOptions = {
	data?: boolean;
	compat?: boolean;
	knownHelpers?: KnownHelpers;
	knownHelpersOnly?: boolean;
	noEscape?: boolean;
	strict?: boolean;
	assumeObjects?: boolean;
	preventIndent?: boolean;
	ignoreStandalone?: boolean;
	explicitPartialContext?: boolean;
}

export default class HandlebarsCompiler {
    compileOptions: CompileOptions
    partials: ParsedOptions.Partials
    helpers: ParsedOptions.Helpers
    templateData: ParsedOptions.TemplateData
	imports: ParsedOptions.Imports
	helperModules: ParsedOptions.HelperModules

    constructor(parsedOptions: ParsedOptions.IParsedOptions) {
        Object.entries(parsedOptions).forEach(([key, value]) => {
            this[key] = value
        })
    }

	private getCompiledPartials(file: string): CompiledData[] {
		const extname = path.extname(file)
		const basename = path.basename(file, extname)

        const partials = this.partials.filter(([partial]) => {
			return partial !== basename
		})

		const compiledPartials = [];
		for (const [partial, source] of partials) {
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
		const compiledPartials = this.getCompiledPartials(file)

		const code = this.getTemplateSpecs(file) as TemplateSourceMap

		// Import this (partial) template and nested templates
		let body = `
			import Handlebars from 'handlebars/runtime.js';
			${this.imports.map(([moduleName, importPath]) => `import ${moduleName} from '${importPath}'`).join('\n')}
			${this.helpers.map(([helper, fn]) => `Handlebars.registerHelper('${helper}', ${fn});`).join('\n')}
			${this.helperModules.map(([helper, moduleName]) => `Handlebars.registerHelper('${helper}', ${moduleName});`).join('\n')}
			${compiledPartials.map(([partial, compiled]) => `Handlebars.registerPartial('${partial}', Handlebars.template(${compiled}));`).join('\n')}
			const template = Handlebars.template(${code});
			export default (data, options) => {
				if (!data || typeof data !== 'object') {
					data = {}
				}
				let templateData = Object.assign({}, ${JSON.stringify(this.templateData)}, data)
				return template(templateData, options)
			};
		`;
		// Format JS body before passing
		body = js_beautify(body)

        return { code: body }
	}
}