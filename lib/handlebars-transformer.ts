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
	transform(source: string, id: string): CompileResult {
		
		const partialsSourceMap = this.getPartialsSourceMap(source, id)
		const partialEntries = this.processPartialsSourceMap(source, partialsSourceMap)

		const parsedOptions = pluginOptions.parse(this.handlebarsPluginOptions)
		parsedOptions.partials.push(...partialEntries)

		const compiler = new HandlebarsCompiler(parsedOptions)
		const data = compiler.getTemplateSpecs(id)

		return data
	}

	private getPartialsSourceMap(source: string, id: string) {
		const name = path.basename(id);

		const partialsProcessor = new PartialsProcessor(this.handlebarsPluginOptions)
		const partialsSourceMap = partialsProcessor.getSourceMap({
			name,
			source,
			rootFile: id
		});

		return partialsSourceMap
	}

	private processPartialsSourceMap(id: string, sourceMap: SourceMap) {
		
		const dir = path.dirname(id);
		const extname = path.extname(id)

		this.files = sourceMap.getFiles(dir, extname)
		const partialEntries = sourceMap.getEntries()
		return partialEntries

	}
}