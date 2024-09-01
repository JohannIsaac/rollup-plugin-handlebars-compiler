import { CompileOptions } from "../../handlebars-compiler";
import { IPluginOptions } from "./params";

export interface HandlebarsPluginOptions extends CompileOptions, IPluginOptions  {
}