export type SourceData = [string, string];
export type CompiledData = [string, TemplateSpecification];
export type Helper = [string, () => {}];
export interface HandlebarsPluginOptions extends CompileOptions {
    helpers?: object;
    partials?: object;
    templateData?: object;
}
export interface TemplateSpecification {
    code?: string;
    map?: string;
    [key: string | number]: any;
}
