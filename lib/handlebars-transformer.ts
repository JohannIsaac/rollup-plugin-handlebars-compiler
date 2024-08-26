import path from 'path';
import PartialsProcessor from './partials-processor';
import pluginOptions from './plugin-options';

import { HandlebarsPluginOptions } from './types/plugin-options';
import { CompileResult } from './types/handlebars';
import HandlebarsCompiler from './handlebars-compiler';
import { SourceMap } from './source-map';

export default class HandlebarsTransformer {
    handlebarsPluginOptions: HandlebarsPluginOptions
    cache: Map<string, string>
	files: string[]

    constructor(handlebarsPluginOptions: HandlebarsPluginOptions) {
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
		
		const partialsSourceMap = this.getPartialsSourceMap(source, file)
		const partialEntries = this.processPartialsSourceMap(source, partialsSourceMap)

		const parsedOptions = pluginOptions.parse(this.handlebarsPluginOptions)
		parsedOptions.partials.push(...partialEntries)

		const compiler = new HandlebarsCompiler(parsedOptions)
		const data = compiler.compile(file)

		return data
	}

	private getPartialsSourceMap(source: string, file: string) {
		const name = path.basename(file);

		const partialsProcessor = new PartialsProcessor(this.handlebarsPluginOptions)
		const partialsSourceMap = partialsProcessor.getSourceMap({
			name,
			source,
			rootFile: file
		});

		return partialsSourceMap
	}

	private processPartialsSourceMap(file: string, sourceMap: SourceMap) {
		
		const dir = path.dirname(file);
		const extname = path.extname(file)

		this.files = sourceMap.getFiles(dir, extname)
		const partialEntries = sourceMap.getEntries()
		return partialEntries

	}
}