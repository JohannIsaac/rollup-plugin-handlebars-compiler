import path from 'path'
import { SourceData, SourceDataMap } from './types/SourceMap'

export class SourceMap {
    constructor(map: SourceDataMap) {
        const sources = Array.from(map)
        sources.forEach(([filename, source]: SourceData) => {
            this[filename] = source
        })
    }

    getFiles(directory: string, extname: string): string[] {
        const filepaths = Array.from(Object.keys(this))
        const absoluteFilepaths = filepaths.map((filepath) => {
            const dir = path.dirname(filepath);
            const basename = path.basename(filepath);
            const name = `${basename}${extname}`
            const absoluteFilepath = path.join(dir, name)
            return path.join(directory, absoluteFilepath)
        })
        const uniqueFiles = [...new Set(absoluteFilepaths)]
        return uniqueFiles
    }

    getEntries(): SourceData[] {
        const entries = Object.entries(this)
        return entries
    }
}