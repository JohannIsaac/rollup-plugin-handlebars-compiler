import type { Plugin } from 'rollup';
import HandlebarsTransformer from './handlebars-transformer';

import { HandlebarsPluginOptions } from './types/plugin-options';

export default function handlebarsCompilerPlugin(handlebarsPluginOptions?: HandlebarsPluginOptions): Plugin {

	const hbsTransformer = new HandlebarsTransformer(handlebarsPluginOptions)

	return {
		name: 'handlebars-compiler',

		transform(source, id) {
			if (/\.(hbs|handlebars)/.test(id)) {
				const output = hbsTransformer.transform(source, id);
				const existingWatchFiles = this.getWatchFiles()
				const watchFiles = hbsTransformer.getWatchFiles(existingWatchFiles);
				watchFiles.forEach((file: string) => {
					this.addWatchFile(file)
				})
				return output;
			}

			return null;
		},
	};
}