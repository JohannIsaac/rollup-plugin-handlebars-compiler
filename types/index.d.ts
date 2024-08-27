import { Plugin } from 'rollup';

type TemplateData = object;
type Helpers = {
    [key: string]: Function;
};
type Partials = {
    [key: string]: string;
};
interface IPluginOptions {
    helpers?: Helpers;
    partials?: Partials;
    templateData?: TemplateData;
}

interface HandlebarsPluginOptions extends CompileOptions, IPluginOptions {
}

declare function handlebarsCompilerPlugin(handlebarsPluginOptions?: HandlebarsPluginOptions): Plugin;

export { handlebarsCompilerPlugin as default };
