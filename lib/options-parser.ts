import { HandlebarsPluginOptions } from './types/plugin-options';
import type * as PluginOptions from './types/plugin-options/params'
import type * as ParsedOptions from './types/plugin-options/parsed'

export default { parse }

function parse(handlebarsPluginOptions: HandlebarsPluginOptions): ParsedOptions.IParsedOptions {
    const parsedOptions: ParsedOptions.IParsedOptions = {
        partials: getPartials(handlebarsPluginOptions.partials),
        helpers: getHelpers(handlebarsPluginOptions.helpers),
        templateData: getTemplateData(handlebarsPluginOptions.templateData)
    }
    return parsedOptions
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