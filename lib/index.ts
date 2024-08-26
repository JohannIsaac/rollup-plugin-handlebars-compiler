import type { Plugin } from 'rollup';
import HandlebarsCompiler from './handlebars-compiler';

import { HandlebarsPluginOptions } from './types/plugin-options';
import path from 'path';

export default function handlebarsCompilerPlugin(handlebarsPluginOptions?: HandlebarsPluginOptions): Plugin {

	const compiler = new HandlebarsCompiler(handlebarsPluginOptions)

	let changes = {}

	return {
		name: 'handlebars-compiler',

		watchChange(id, change) {
			for (let storedId in changes) {
				if (storedId !== id) {
					delete changes[storedId]
				}
			}
			changes[id] = change
		},

		transform(source, id) {
			if (/\.(hbs|handlebars)/.test(id)) {
				const output = compiler.toEsm(source, id);
				const existingWatchFiles = this.getWatchFiles()
				const watchFiles = compiler.getWatchFiles(existingWatchFiles);
				watchFiles.forEach((file: string) => {
					this.addWatchFile(file)
					let changeData = Object.entries(changes).find(([id, change]) => {
						return path.normalize(file) === path.normalize(id)
					})
					if (!changeData) return
				})
				return output;
			}

			return null;
		},
	};
}