import { Plugin } from 'rollup';

type CompileOptions = {
    data?: boolean;
    compat?: boolean;
    knownHelpers?: KnownHelpers;
    knownHelpersOnly?: boolean;
    noEscape?: boolean;
    strict?: boolean;
    assumeObjects?: boolean;
    preventIndent?: boolean;
    ignoreStandalone?: boolean;
    explicitPartialContext?: boolean;
};

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
    rootDir?: string;
    assets?: {
        resolve?: boolean | null;
        emit?: boolean | null;
        contextPath?: string;
    };
}

interface HandlebarsPluginOptions extends CompileOptions, IPluginOptions {
}

declare function handlebarsCompilerPlugin(handlebarsPluginOptions?: HandlebarsPluginOptions): Plugin;

export { handlebarsCompilerPlugin as default };
