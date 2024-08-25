import type { CompilerResult } from './types';
import { HandlebarsPluginOptions } from './types';
export default class HandlebarsCompiler {
    handlebarsPluginOptions: HandlebarsPluginOptions;
    cache: Map<string, string>;
    watchFiles: string[];
    constructor(handlebarsPluginOptions: HandlebarsPluginOptions);
    getWatchFiles(existingWatchFiles: string[]): string[];
    toEsm(source: string, id: string): CompilerResult;
}
