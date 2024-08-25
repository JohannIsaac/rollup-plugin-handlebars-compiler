import type { SourceData, Helper } from './types';
import { HandlebarsPluginOptions } from './types';
export default class OptionsProcessor {
    handlebarsPluginOptions: HandlebarsPluginOptions;
    cache: Map<string, string>;
    watchFiles: string[];
    constructor(handlebarsPluginOptions: HandlebarsPluginOptions);
    getPartials(): SourceData[];
    getHelpers(): Helper[];
}
