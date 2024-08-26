import type { Plugin } from 'rollup';
import HandlebarsCompiler from './handlebars-compiler';

import { HandlebarsPluginOptions } from './types/plugin-options';
import path from 'path';

export default function handlebarsCompilerPlugin(handlebarsPluginOptions?: HandlebarsPluginOptions): Plugin {

	const compiler = new HandlebarsCompiler(handlebarsPluginOptions)

	return {
		name: 'handlebars-compiler',

		transform(source, id) {
			if (/\.(hbs|handlebars)/.test(id)) {
				const output = compiler.toEsm(source, id);
				const existingWatchFiles = this.getWatchFiles()
				const watchFiles = compiler.getWatchFiles(existingWatchFiles);
				watchFiles.forEach((file: string) => {
					this.addWatchFile(file)
				})
				return output;
			}

			return null;
		},
	};
}