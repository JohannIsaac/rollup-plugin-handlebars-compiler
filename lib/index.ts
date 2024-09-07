import type { Plugin } from 'rollup';
import HandlebarsTransformer from './handlebars-transformer';

import { HandlebarsPluginOptions } from './types/plugin-options';

export default function handlebarsCompilerPlugin(handlebarsPluginOptions: HandlebarsPluginOptions = {}): Plugin {

	let hbsTransformer: HandlebarsTransformer
		
	if (!handlebarsPluginOptions) {
		handlebarsPluginOptions = {}
	}

	// rootDir defaults to process current working directory
	if (!handlebarsPluginOptions.rootDir) {
		handlebarsPluginOptions.rootDir = process.cwd()
	}

	// If emitAssets is not set, default to true
	if (typeof handlebarsPluginOptions.emitAssets !== 'boolean' && handlebarsPluginOptions.emitAssets !== null) {
		handlebarsPluginOptions.emitAssets = true
	}

	// Always resolve assets if emitAssets is set to true
	if (handlebarsPluginOptions.emitAssets) {
		handlebarsPluginOptions.resolveAssets = true
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
			if (!handlebarsPluginOptions.emitAssets || !hbsTransformer) return
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