import { InputAsset } from "../AssetsExtractor"

export type SourceFile = string
type AbsoluteSourceFile = SourceFile
type SourceContent = string

export type SourceData = [SourceFile, SourceContent]
export type SourceDataMap = Map<SourceFile, SourceContent>

export type PathMap = Map<SourceFile, AbsoluteSourceFile>
export type AssetsMap = Map<SourceFile, InputAsset>


type ModuleName = string
type ModulePath = string
export type ImportModule = {
    name: ModuleName,
    path: ModulePath
}

export type ImportsData = [ModuleName, ModulePath]
export type FileModule = [SourceFile, ModuleName]
