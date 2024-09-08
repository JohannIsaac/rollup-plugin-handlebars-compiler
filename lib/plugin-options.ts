import { CompileOptions } from './HandlebarsCompiler';
import { HandlebarsPluginOptions } from './types/plugin-options';
import type * as PluginOptions from './types/plugin-options/params'
import type * as ParsedOptions from './types/plugin-options/parsed'

export default { parse }

const pluginOptionsKeys = [
    'helpers',
    'partials',
    'templateData',
]

const preCompileOptions = [
    'srcName',
    'destName'
]

const defaultHandlebarsOptions = {
	rootDir: process.cwd(),
	assets: {
		emit: true,
		resolve: true
	}
}

export function getPluginOptions(handlebarsPluginOptions: HandlebarsPluginOptions = {}) {
	if (!handlebarsPluginOptions || typeof handlebarsPluginOptions !== 'object') {
		handlebarsPluginOptions = {}
	}

	handlebarsPluginOptions = Object.assign({}, defaultHandlebarsOptions, handlebarsPluginOptions)
		
	if (!handlebarsPluginOptions.assets || typeof handlebarsPluginOptions.assets !== 'object') {
		handlebarsPluginOptions.assets = {}
	}
	
	// If neither assets.emit or assets.resolved are defined, always resolve and emit assets
	if (
		typeof handlebarsPluginOptions.assets.emit === 'undefined' &&
		typeof handlebarsPluginOptions.assets.resolve === 'undefined'
	) {
		handlebarsPluginOptions.assets = Object.assign({}, defaultHandlebarsOptions.assets, handlebarsPluginOptions.assets)
	}

	// Always resolve assets if assets.emit is set to true
	if (handlebarsPluginOptions.assets.emit) {
		handlebarsPluginOptions.assets.resolve = true
	}

	return handlebarsPluginOptions
}

function parse(handlebarsPluginOptions: HandlebarsPluginOptions): ParsedOptions.IParsedOptions {
    const parsedOptions: ParsedOptions.IParsedOptions = {
        compileOptions: getCompileOptions(handlebarsPluginOptions),
        partials: getPartials(handlebarsPluginOptions.partials),
        helpers: getHelpers(handlebarsPluginOptions.helpers),
        templateData: getTemplateData(handlebarsPluginOptions.templateData),
        imports: [],
        helperModules: []
    }
    return parsedOptions
}

function getCompileOptions(handlebarsPluginOptions: HandlebarsPluginOptions): CompileOptions {
    const compileOptions = {}
    for (const [key, value] of Object.entries(handlebarsPluginOptions)) {
        if (pluginOptionsKeys.includes(key) || preCompileOptions.includes(key)) continue
        compileOptions[key] = value
    }
    return compileOptions
}

function getPartials(optionsPartials: PluginOptions.Partials) {
    const partials: ParsedOptions.Partials = []
    if (typeof optionsPartials !== 'object') {
        return partials
    }
    for (const [partial, source] of Object.entries(optionsPartials)) {
        if (typeof source === 'string') {
            partials.push([partial, source])
        }
    }
    return partials
}

function getHelpers(optionsHelpers: PluginOptions.Helpers) {
    const helpers: ParsedOptions.Helpers = []
    if (typeof optionsHelpers !== 'object') {
        return helpers
    }
    for (const [helper, fn] of Object.entries(optionsHelpers)) {
        if (typeof fn === 'function') {
            helpers.push([helper, fn])
        }
    }
    return helpers
}

function getTemplateData(optionsTemplateData: PluginOptions.TemplateData) {
    let tempalteData: ParsedOptions.TemplateData = {}
    if (typeof optionsTemplateData !== 'object') return tempalteData
    tempalteData = optionsTemplateData
    return tempalteData
}