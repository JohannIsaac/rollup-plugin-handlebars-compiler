import type { Plugin } from 'rollup';
interface HandlebarsPluginOptions extends CompileOptions {
    helpers?: object;
    partials?: object;
    templateData?: Object;
}
export default function handlebarsCompiler(handlebarsPluginOptions: HandlebarsPluginOptions): Plugin;
export {};
