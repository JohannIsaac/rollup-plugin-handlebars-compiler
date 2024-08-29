import path from 'path';
import StatementsProcessor from './statements-processor';
import pluginOptions from './plugin-options';

import { HandlebarsPluginOptions } from './types/plugin-options';
import { CompileResult } from './types/handlebars';
import HandlebarsCompiler from './handlebars-compiler';
import { SourceMap } from './source-map';
import { ImportsMap } from './imports-map';

export default class HandlebarsTransformer {
    handlebarsPluginOptions: HandlebarsPluginOptions
    cache: Map<string, string>
	files: string[]

    constructor(handlebarsPluginOptions: HandlebarsPluginOptions = {}) {
        this.handlebarsPluginOptions = handlebarsPluginOptions
        this.cache = new Map();
        this.files = [];
    }

	getWatchFiles(existingWatchFiles: string[]): string[] {
		const files: Set<string> = new Set()
		this.files.forEach(file => {
			if (!existingWatchFiles.includes(file)) {
				files.add(file)
			}
		})
		return Array.from(files)
	}

	// Convert to ESM and register partial
	transform(source: string, file: string): CompileResult {
		
		const statementsProcessor = this.getStatementsProcessor(source, file)
		const partialsSourceMap = new SourceMap(statementsProcessor.partials)
		const partialEntries = this.processPartialsSourceMap(source, partialsSourceMap)

		const importsMap = new ImportsMap(statementsProcessor.helpers)
		const imports = importsMap.getImports()
		const helperModules = importsMap.getHelperModules()

		const parsedOptions = pluginOptions.parse(this.handlebarsPluginOptions)
		parsedOptions.partials.push(...partialEntries)
		parsedOptions.imports.push(...imports)
		parsedOptions.helperModules.push(...helperModules)

		const compiler = new HandlebarsCompiler(parsedOptions)
		const data = compiler.compile(file)

		return data
	}

	private getStatementsProcessor(source: string, file: string) {
		const name = path.basename(file);

		const statementsProcessor = new StatementsProcessor({
			name,
			source,
			rootFile: file
		}, this.handlebarsPluginOptions)

		return statementsProcessor
	}

	private processPartialsSourceMap(file: string, sourceMap: SourceMap) {
		
		const dir = path.dirname(file);
		const extname = path.extname(file)

		this.files = sourceMap.getFiles(dir, extname)
		const partialEntries = sourceMap.getEntries()
		return partialEntries

	}
}