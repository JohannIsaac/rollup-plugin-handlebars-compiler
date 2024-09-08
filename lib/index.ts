import type { Plugin } from 'rollup';
import HandlebarsTransformer from './HandlebarsTransformer';

import { HandlebarsPluginOptions } from './types/plugin-options';
import { getPluginOptions } from './plugin-options';

export default function handlebarsCompilerPlugin(handlebarsPluginOptions: HandlebarsPluginOptions = {}): Plugin {

	let hbsTransformer: HandlebarsTransformer
		
	handlebarsPluginOptions = getPluginOptions(handlebarsPluginOptions)
	
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
				const outputFilepath = assetData.outputFilepath.replace(/^\//, '')
				this.emitFile({
					type: 'asset',
					fileName: outputFilepath,
					source: assetData.content
				})
			})
		}
	};
}