import fs from 'fs';
import path from 'path';
import { parse, serialize } from 'parse5';
import { Document } from 'parse5/dist/tree-adapters/default.js';
import { Element } from '@web/parse5-utils';

import {
    findAssets,
    getAssetTagData,
    isHashedAsset,
    createAssetPicomatchMatcher,
} from './utils';
import { InputAsset } from '../types/AssetsExtractor';
import { HandlebarsPluginOptions } from '../types/plugin-options';

interface NodeData {
    node: Element,
    filepath: string,
    sourcePath: string,
    outputFilepath: string,
}

interface Template {
	isRootRelative?: boolean,
	source: string;
	absolutePath: string;
	relativePath: string;
}

export class AssetsExtractor {
    handlebarsPluginOptions: HandlebarsPluginOptions;
    isRootRelative?: boolean;
    document: Document;
    absolutePath: string;
    templateDir: string;
    relativeDir: string;

    constructor(options: Template, handlebarsPluginOptions: HandlebarsPluginOptions = {}) {

        if (handlebarsPluginOptions) this.handlebarsPluginOptions = handlebarsPluginOptions

        if (options.isRootRelative) this.isRootRelative = options.isRootRelative

        if (options.source) {
            this.document = parse(options.source)
        }
        if (options.absolutePath) {
            this.absolutePath = options.absolutePath
            this.templateDir = path.dirname(options.absolutePath);
        }
        if (options.relativePath) {
            this.relativeDir = path.dirname(options.relativePath);
        }

    }

    getAssetsList(): InputAsset[] {
        const assetNodes = findAssets(this.document);
        const assetsDataList: InputAsset[] = [];
        assetNodes.forEach(node => this.getAssetsListFromNode(node, assetsDataList))
        return assetsDataList;
    }
    
    private getAssetsListFromNode(node: Element, assetsDataList: InputAsset[] = []) {
        const assetTagData = getAssetTagData(node);
        assetTagData.paths.forEach(sourcePath => this.getAssetsListFromPath(sourcePath, node, assetsDataList))
    }
    
    private getAssetsListFromPath(sourcePath: string, node: Element, assetsDataList: InputAsset[] = []) {
        sourcePath = sourcePath.trim()
        const isExternal = createAssetPicomatchMatcher(this.handlebarsPluginOptions.assets.external);
        
        const filepath = this.resolveAssetFilepath(sourcePath);
        const outputFilepath = this.resolveOutputPathFromRoot(sourcePath)
        
        const filepathRelativeToRoot = path.relative(this.handlebarsPluginOptions.rootDir, filepath)
        if (isExternal(filepathRelativeToRoot)) return;
    
        const assetData = this.getAssetsDataFromFilepath({
            filepath,
            sourcePath,
            outputFilepath,
            node,
        }, assetsDataList)

        if (!assetData) return
        assetsDataList.push(assetData);
    }
    
    private getAssetsDataFromFilepath(nodeData: NodeData, assetsDataList: InputAsset[] = []) {
        const assetTagData = getAssetTagData(nodeData.node);
        const tagDataOfAsset = Object.assign({}, assetTagData)
        tagDataOfAsset.paths = [nodeData.sourcePath]
    
        const hashed = isHashedAsset(nodeData.node);
        const alreadyHandled = assetsDataList.find(a => a.filepath === nodeData.filepath && a.hashed === hashed);
        if (alreadyHandled) return null
    
        try {
            fs.accessSync(nodeData.filepath);
        } catch (error) {
            const elStr = serialize(nodeData.node);
            throw new Error(
                `Could not find ${nodeData.filepath} referenced from HTML file ${this.absolutePath} from element ${elStr}.`,
            );
        }
    
        const content = fs.readFileSync(nodeData.filepath);
        const assetData = {
            filepath: nodeData.filepath,
            outputFilepath: nodeData.outputFilepath,
            hashed,
            content,
            assetTagData: tagDataOfAsset
        }
    
        return assetData
    }
    
    private resolveAssetFilepath(browserPath: string) {
        const projectRootDir = this.handlebarsPluginOptions.rootDir
        const templateDir = this.templateDir
        const rootDir = browserPath.startsWith('/') ? projectRootDir : templateDir
        return path.join(rootDir, browserPath.split('/').join(path.sep))
    }
    
    private resolveOutputPathFromRoot(browserPath: string) {

        if (!this.handlebarsPluginOptions.assets.resolve) return browserPath

        const assetPath = path.join(this.relativeDir, browserPath)
        const absoluteFilepath = this.isRootRelative ?
                                path.join(this.handlebarsPluginOptions.rootDir, assetPath) :
                                path.join(this.templateDir, assetPath)

        const _browserPath = browserPath.startsWith('/') ?
                            browserPath.replaceAll('\\', '/') :
                            '/' + path.relative(this.handlebarsPluginOptions.rootDir, absoluteFilepath).replaceAll('\\', '/')

        const strippedRootDir = this.handlebarsPluginOptions.assets.contextPath && path.normalize(this.handlebarsPluginOptions.assets.contextPath.replace(/\/$/, '')).replaceAll('\\', '/')
        const strippedOutputDir = !this.handlebarsPluginOptions.assets.outputDir ? '' : path.normalize(this.handlebarsPluginOptions.assets.outputDir.replace(/\/$/, '')).replaceAll('\\', '/')

        const parsedOutputDir = strippedOutputDir ? `${strippedOutputDir}/` : ''
        const _resolvedPathFromRoot = strippedRootDir ? _browserPath.replace(new RegExp(`^/${strippedRootDir}/`), `/${parsedOutputDir}`) : `${strippedOutputDir}${_browserPath}`
        const forceLeadingSlash = _resolvedPathFromRoot.startsWith('/') ? _resolvedPathFromRoot : `/${_resolvedPathFromRoot}`
        return forceLeadingSlash
    }
}