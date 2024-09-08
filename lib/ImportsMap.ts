import path from 'path'
import { FileModule, ImportModule, ImportsData, PathMap, SourceFile } from './types/source-map'

export class ImportsMap {
    constructor(paths: PathMap) {
        const filepaths = Array.from(paths)
        filepaths.forEach(([escapedName, absoluteFilepath]) => {
            const name = this.camelizeFilepath(escapedName)
            const path = absoluteFilepath
            const module: ImportModule = { name, path }
            this[escapedName] = module
        })
    }

    private camelizeFilepath(filepath: string) {
        const extname = path.extname(filepath)
        return filepath
            .replace(new RegExp(`${extname}$`), '')
            .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
                return index === 0 ? word.toLowerCase() : word.toUpperCase();
            })
            .replace(/\W+/g, '');
    }

    getImports(): ImportsData[] {
        const importsData = Object.entries(this)
        const imports = importsData.map(([filepath, module]: [SourceFile, ImportModule]) => [module.name, module.path] as ImportsData)
        return imports
    }

    getHelperModules(): FileModule[] {
        const importsData = Object.entries(this)
        const imports = importsData.map(([filepath, module]: [string, ImportModule]) => [filepath, module.name] as FileModule)
        return imports
    }
}