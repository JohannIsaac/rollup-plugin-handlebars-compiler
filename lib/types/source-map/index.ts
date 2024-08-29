export type SourceFile = string
type AbsoluteSourceFile = SourceFile
type SourceContent = string

export type SourceData = [SourceFile, SourceContent]
export type SourceDataMap = Map<SourceFile, SourceContent>

export type PathMap = Map<SourceFile, AbsoluteSourceFile>


type ModuleName = string
type ModulePath = string
export type ImportModule = {
    name: ModuleName,
    path: ModulePath
}

export type ImportsData = [ModuleName, ModulePath]
export type FileModule = [SourceFile, ModuleName]
