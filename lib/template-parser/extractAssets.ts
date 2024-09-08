import { serialize } from 'parse5';
import fs from 'fs';
import { Document } from 'parse5/dist/tree-adapters/default.js';
import {
    findAssets,
    getAssetTagData,
    isHashedAsset,
    resolveAssetFilepath,
    createAssetPicomatchMatcher,
    resolveOutputPathFromRoot,
} from './utils';
import { InputAsset } from './InputData';
import { Element } from '@web/parse5-utils';

export interface ExtractAssetsParams {
    partialIsRootRelative?: boolean;
    resolvePath?: boolean;
    document: Document;
    templateFilepath: string;
    htmlDir: string;
    partialDir: string;
    rootDir: string;
    externalAssets?: string | string[];
    absolutePathPrefix?: string;
    contextPath?: string;
    outputDir?: string
}

export function extractAssets(params: ExtractAssetsParams): InputAsset[] {
    const assetNodes = findAssets(params.document);
    const assetsDataList: InputAsset[] = [];

    assetNodes.forEach(node => getAssetsListFromNode(
        node,
        params,
        assetsDataList
    ))

    return assetsDataList;
}

function getAssetsListFromNode(
    node: Element,
    params: ExtractAssetsParams,
    assetsDataList: InputAsset[] = []
) {
    const assetTagData = getAssetTagData(node);
    assetTagData.paths.forEach(sourcePath => getAssetsListFromPath(
        sourcePath,
        node,
        params,
        assetsDataList
    ))
}

function getAssetsListFromPath(
    sourcePath: string,
    node: Element,
    params: ExtractAssetsParams,
    assetsDataList: InputAsset[] = []
) {
    sourcePath = sourcePath.trim()
    const isExternal = createAssetPicomatchMatcher(params.externalAssets);
    if (isExternal(sourcePath)) return;

    const filepath = resolveAssetFilepath(
        sourcePath,
        params.htmlDir,
        params.rootDir,
    );
    const outputFilepath = getOutputFilepath(sourcePath, params)

    const assetData = getAssetsDataFromFilepath(
        filepath,
        sourcePath,
        outputFilepath,
        node,
        params,
        assetsDataList
    )
    assetsDataList.push(assetData);
}

function getOutputFilepath(
    sourcePath: string,
    params: ExtractAssetsParams,
) {
    let outputFilepath: string
    if (params.resolvePath) {
        outputFilepath = resolveOutputPathFromRoot(
            sourcePath,
            params.partialIsRootRelative,
            params.htmlDir,
            params.partialDir,
            params.rootDir,
            params.contextPath,
            params.outputDir
        )
    } else {
        outputFilepath = sourcePath
    }
    return outputFilepath
}

function getAssetsDataFromFilepath(
    filepath: string,
    sourcePath: string,
    outputFilepath: string,
    node: Element,
    params: ExtractAssetsParams,
    assetsDataList: InputAsset[] = []
) {
    const assetTagData = getAssetTagData(node);
    const tagDataOfAsset = Object.assign({}, assetTagData)
    tagDataOfAsset.paths = [sourcePath]

    const hashed = isHashedAsset(node);
    const alreadyHandled = assetsDataList.find(a => a.filepath === filepath && a.hashed === hashed);
    if (alreadyHandled) return null

    try {
        fs.accessSync(filepath);
    } catch (error) {
        const elStr = serialize(node);
        throw new Error(
            `Could not find ${filepath} referenced from HTML file ${params.templateFilepath} from element ${elStr}.`,
        );
    }

    const content = fs.readFileSync(filepath);
    const assetData = {
        filepath,
        outputFilepath,
        hashed,
        content,
        assetTagData: tagDataOfAsset
    }

    return assetData
}