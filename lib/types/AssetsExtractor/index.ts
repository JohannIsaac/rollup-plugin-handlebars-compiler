import { Attribute } from "parse5/dist/common/token";

interface ScriptModuleTag {
    importPath: string;
    attributes?: Attribute[];
    code?: string;
}

export interface AssetTagData {
  paths: string[],
  tagName: string,
  attr: string
}

export interface InputAsset {
  filepath: string;
  outputFilepath: string,
  hashed: boolean;
  content: Buffer;
  assetTagData: AssetTagData
}

export interface InputData {
  template: string;
  name: string;
  moduleImports: ScriptModuleTag[];
  inlineModules: ScriptModuleTag[];
  assets: InputAsset[];
  filepath?: string;
}
