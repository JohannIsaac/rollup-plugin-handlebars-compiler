import type { Plugin } from 'rollup';
import HandlebarsCompiler from './handlebars-compiler';
import { HandlebarsPluginOptions } from './types';

export default function handlebarsCompilerPlugin(handlebarsPluginOptions?: HandlebarsPluginOptions): Plugin {

	const compiler = new HandlebarsCompiler(handlebarsPluginOptions)

	return {
		name: 'handlebars-compiler',

		transform(source, id) {
			if (/\.(hbs|handlebars)/.test(id)) {
				// Get from cache when avalaible
				if (compiler.cache.has(id)) {
                    try {
                        return JSON.parse(compiler.cache.get(id));
                    } catch (e) {}
				}

				const output = compiler.toEsm(source, id);

				compiler.cache.set(id, JSON.stringify(output));

				return output;
			}

			return null;
		},
	};
}