export type TemplateData = object;

export type Helpers = {
    [key: string]: Function
}

export type Partials = {
    [key: string]: string
}

export interface IPluginOptions {
    helpers?: Helpers;
    partials?: Partials;
	templateData?: TemplateData;
}