import { SourceDataMap } from './types';
export declare class SourceMapParser {
    sourceMap: SourceDataMap;
    constructor(sourceMap: SourceDataMap);
    getFiles(directory: string, extname: string): string[];
}
