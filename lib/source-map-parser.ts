import path from 'path'
import { SourceDataMap } from './types';

export class SourceMapParser {
    sourceMap: SourceDataMap

    constructor(sourceMap: SourceDataMap) {
        this.sourceMap = sourceMap
    }

    getFiles(directory: string, extname: string): string[] {
        let filepaths = Array.from(this.sourceMap.keys())
        let absoluteFilepaths = filepaths.map((filepath) => {
            const dir = path.dirname(filepath);
            const name = path.basename(filepath, extname);
            const absoluteFilepath = path.join(dir, name)
            return path.join(directory, absoluteFilepath)
        })
        let uniqueFiles = [...new Set(absoluteFilepaths)]
        return uniqueFiles
    }
}