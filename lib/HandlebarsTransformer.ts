import path from 'path';
import StatementsProcessor from './StatementsProcessor';
import pluginOptions from './plugin-options';

import { HandlebarsPluginOptions } from './types/plugin-options';
import { CompileResult } from './types/Handlebars';
import HandlebarsCompiler from './HandlebarsCompiler';
import { SourceMap } from './SourceMap';
import { ImportsMap } from './ImportsMap';
import { AssetsMap } from './types/SourceMap';

export default class HandlebarsTransformer {
    handlebarsPluginOptions: HandlebarsPluginOptions
    cache: Map<string, string>
	files: string[]
	statementsProcessor: StatementsProcessor
	source: string
	file: string

    constructor(handlebarsPluginOptions: HandlebarsPluginOptions = {}, source: string, file: string) {
        this.handlebarsPluginOptions = handlebarsPluginOptions
        this.cache = new Map();
        this.files = [];
		this.source = StatementsProcessor.renameAllRootPathPartials(source)
		this.file = file
		this.statementsProcessor = this.getStatementsProcessor()
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
	transform(): CompileResult {
		
		const partialsSourceMap = new SourceMap(this.statementsProcessor.partials)
		const partialEntries = this.processPartialsSourceMap(this.source, partialsSourceMap)

		const importsMap = new ImportsMap(this.statementsProcessor.helpers)
		const imports = importsMap.getImports()
		const helperModules = importsMap.getHelperModules()

		const parsedOptions = pluginOptions.parse(this.handlebarsPluginOptions)
		parsedOptions.partials.push(...partialEntries)
		parsedOptions.imports.push(...imports)
		parsedOptions.helperModules.push(...helperModules)

		const compiler = new HandlebarsCompiler(parsedOptions)
		const data = compiler.compile(this.file)

		return data
	}

	getAssetsMap(): AssetsMap {
		const assetsMap = this.statementsProcessor.assets
		return assetsMap
	}

	private getStatementsProcessor() {
		const name = path.basename(this.file);

		const statementsProcessor = new StatementsProcessor({
			name,
			source: this.source,
			rootFile: this.file
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