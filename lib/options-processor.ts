import type { SourceData, Helper } from './types'
import { HandlebarsPluginOptions } from './types';

export default class OptionsProcessor {
    handlebarsPluginOptions: HandlebarsPluginOptions
    cache: Map<string, string>
	watchFiles: string[]

    constructor(handlebarsPluginOptions: HandlebarsPluginOptions) {
        this.handlebarsPluginOptions = handlebarsPluginOptions
        this.cache = new Map();
        this.watchFiles = [];
    }

	getPartials() {
		let partials: SourceData[] = []
		if (!this.handlebarsPluginOptions || !this.handlebarsPluginOptions.partials || typeof this.handlebarsPluginOptions.partials !== 'object') return partials
		partials = Object.entries(this.handlebarsPluginOptions.partials).filter(([partial, source]) => typeof source === 'string')
		return partials
	}

	getHelpers() {
		let helpers: Helper[] = []
		if (!this.handlebarsPluginOptions || !this.handlebarsPluginOptions.helpers || typeof this.handlebarsPluginOptions.helpers !== 'object') return helpers
		helpers = Object.entries(this.handlebarsPluginOptions.helpers).filter(([helper, fn]) => typeof fn === 'function')
		return helpers
	}

}