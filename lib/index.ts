import type { Plugin } from 'rollup';
import HandlebarsTransformer from './handlebars-transformer';

import { HandlebarsPluginOptions } from './types/plugin-options';

const defaultHandlebarsOptions = {
	rootDir: process.cwd(),
	assets: {
		emit: true,
		resovle: true
	}
}

export default function handlebarsCompilerPlugin(handlebarsPluginOptions: HandlebarsPluginOptions = {}): Plugin {

	let hbsTransformer: HandlebarsTransformer
		
	if (!handlebarsPluginOptions || typeof handlebarsPluginOptions !== 'object') {
		handlebarsPluginOptions = {}
	}

	handlebarsPluginOptions = Object.assign({}, defaultHandlebarsOptions, handlebarsPluginOptions)
		
	if (!handlebarsPluginOptions.assets || typeof handlebarsPluginOptions.assets !== 'object') {
		handlebarsPluginOptions.assets = {}
	}

	// Always resolve assets if assets.emit is set to true
	if (handlebarsPluginOptions.assets.emit) {
		handlebarsPluginOptions.assets.resolve = true
	}
	
	return {
		name: 'handlebars-compiler',
		
		transform(source, id) {
			if (/\.(hbs|handlebars)/.test(id)) {
				hbsTransformer = new HandlebarsTransformer(handlebarsPluginOptions, source, id)
				const output = hbsTransformer.transform();
				const existingWatchFiles = this.getWatchFiles()
				const watchFiles = hbsTransformer.getWatchFiles(existingWatchFiles);
				watchFiles.forEach((file: string) => {
					this.addWatchFile(file)
				})
				return output;
			}

			return null;
		},

		renderStart() {
			if (!handlebarsPluginOptions.assets.emit || !hbsTransformer) return
			const assetsMap = hbsTransformer.getAssetsMap()
			Array.from(assetsMap).forEach(([absoluteFilepath, assetData]) => {
				const outputFilepath = assetData.outputFilePath.replace(/^\//, '')
				this.emitFile({
					type: 'asset',
					fileName: outputFilepath,
					source: assetData.content
				})
			})
		}
	};
}