import fs from 'fs';
import path from 'path';
import { serialize } from 'parse5';
import { Document } from 'parse5/dist/tree-adapters/default.js';
import { Element } from '@web/parse5-utils';

import {
    findAssets,
    getAssetTagData,
    isHashedAsset,
    createAssetPicomatchMatcher,
} from './utils';
import { InputAsset } from './InputData';

export interface ExtractAssetsParams {
    partialIsRootRelative?: boolean;
    resolvePath?: boolean;
    document: Document;
    templateFilepath: string;
    templateDir: string;
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
        params
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
    return !params.resolvePath ?
            sourcePath :
            resolveOutputPathFromRoot(
                sourcePath,
                params
            )
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

function resolveAssetFilepath(
	browserPath: string,
	params: ExtractAssetsParams
) {
	return path.join(
		browserPath.startsWith('/') ? params.rootDir : params.templateDir,
		browserPath.split('/').join(path.sep),
	);
}

function resolveOutputPathFromRoot(
	browserPath: string,
	params: ExtractAssetsParams
) {
	const absoluteFilepath = params.partialIsRootRelative ? path.join(params.rootDir, params.partialDir, browserPath) : path.join(params.templateDir, params.partialDir, browserPath)
	const _browserPath = browserPath.startsWith('/') ? browserPath : '/' + path.relative(params.rootDir, absoluteFilepath).replaceAll('\\', '/')
	const strippedRootDir = params.contextPath && path.normalize(params.contextPath.replace(/\/$/, '')).replaceAll('\\', '/')
	const strippedOutputDir = params.outputDir && path.normalize(params.outputDir.replace(/\/$/, '')).replaceAll('\\', '/')
	const parsedOutputDir = strippedOutputDir ? `${strippedOutputDir}/` : ''
	const _resolvedPathFromRoot = strippedRootDir ? _browserPath.replace(new RegExp(`^/${strippedRootDir}/`), `/${parsedOutputDir}`) : _browserPath
	return _resolvedPathFromRoot
}