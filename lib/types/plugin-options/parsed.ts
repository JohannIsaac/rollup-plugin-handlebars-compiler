import { SourceData } from "../source-map"

export type Helper = [string, Function]

export type Partials = SourceData[]
export type Helpers = Helper[]
export type TemplateData = object

export interface IParsedOptions {
    partials: SourceData[]
    helpers: Helpers
    templateData: TemplateData
    compileOptions: CompileOptions
}