import { FileModule, ImportsData, SourceData } from "../source-map"

export type Helper = [string, Function]

export type Partials = SourceData[]
export type Helpers = Helper[]
export type TemplateData = object
export type Imports = ImportsData[]
export type HelperModules = FileModule[]

export interface IParsedOptions {
    partials: Partials
    helpers: Helpers
    templateData: TemplateData
    compileOptions: CompileOptions
    imports: Imports
    helperModules: HelperModules
}