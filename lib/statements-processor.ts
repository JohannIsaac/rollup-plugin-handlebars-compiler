import path from 'path';
import fs from 'fs';
import Handlebars from 'handlebars';

import { HandlebarsPluginOptions } from './types/plugin-options';
import type { AssetsMap, PathMap, SourceDataMap } from './types/source-map';
import { extractModulesAndAssets } from './template-parser/extractModulesAndAssets';
import { InputAsset } from './template-parser/InputData';
import { sourceAttributesByTag } from './template-parser/utils';

export const ROOT_PARTIAL_KEY = '_ROOT_/'



interface TemplateData {
    name: string,
    source: string,
    rootFile: string
}

type ProcessResult = {
	partials: SourceDataMap,
	helpers: PathMap,
	assets: AssetsMap
}

export default class StatementsProcessor {
    handlebarsPluginOptions: HandlebarsPluginOptions
	partials: SourceDataMap
	helpers: PathMap
	assets: AssetsMap

    constructor(templateData: TemplateData, handlebarsPluginOptions: HandlebarsPluginOptions = {}) {
        this.handlebarsPluginOptions = handlebarsPluginOptions

		const processResult = this.processStatements(templateData)
		this.partials = processResult.partials
		this.helpers = processResult.helpers
		this.assets = processResult.assets
    }

	static renameAllRootPathPartials(source: string) {
		return source.replaceAll(new RegExp(`(\\{\\{#?>(\\n|\\s)*)\\/`, 'gms'), `$1${ROOT_PARTIAL_KEY}`)
	}

    static ImportScanner = class extends Handlebars.Visitor {
        partials: Set<string>;
        helpers: Set<string>;
    
        constructor() {
            super();
            this.partials = new Set<string>();
            this.helpers = new Set<string>();
        }
    
        PartialStatement(partial: hbs.AST.PartialStatement): void {
            if (partial.name?.type === 'PathExpression') {
                this.partials.add(partial.name.original);
                return super.PartialStatement(partial);
            } else {
                throw new Error('Dynamic partial resolution is not supported');
            }
        }
    
        MustacheStatement(mustache: hbs.AST.MustacheStatement): void {
            if (mustache.path.type === 'PathExpression') {
				const path = mustache.path as hbs.AST.PathExpression
                this.helpers.add(path.original);
                return super.MustacheStatement(mustache);
            } else {
                throw new Error('Dynamic helper resolution is not supported');
            }
        }
    }



	// Recursive function for getting nested partials with pathname
	private processStatements(templateData: TemplateData, partialsMap: SourceDataMap = new Map(), helpersMap: PathMap = new Map(), assetsMap: AssetsMap = new Map()) {
		
		// If partials are detected, process each partial
		templateData.source = StatementsProcessor.renameAllRootPathPartials(templateData.source)
		const { partials, helpers } = this.getAllStatements(templateData.source)
		const assets = this.getAllAssets(templateData)
		if (assets) assets.forEach(assetData => this.processAsset(assetData, templateData, assetsMap))
		if (helpers) helpers.forEach(helperPath => this.processHelper(helperPath, templateData, helpersMap))
		if (partials) partials.forEach(partialPath => this.processPartial(partialPath, templateData, partialsMap, helpersMap, assetsMap))
		
		// Add current template to source-map with re-written templateData.source
		// processPartial resolves partial instance paths for the templateData.source
		const extname = path.extname(templateData.name)
		const templateName = templateData.name.replace(new RegExp(`${extname}$`), '')
        partialsMap.set(templateName, templateData.source)

		const processResult: ProcessResult = {
			partials: partialsMap,
			helpers: helpersMap,
			assets: assetsMap
		}

		return processResult;

	}

	private getAllStatements(source: string) {
		const tree = Handlebars.parse(source);
		const scanner = new StatementsProcessor.ImportScanner();
		scanner.accept(tree);
		const partials = !!scanner.partials.size && scanner.partials
		const helpers = !!scanner.helpers.size && scanner.helpers
		return { partials, helpers};
	}

	private getAllAssets(templateData: TemplateData) {
		const partialIsRootRelative = templateData.name.startsWith(ROOT_PARTIAL_KEY)
		const rootDir = partialIsRootRelative ? this.handlebarsPluginOptions.rootDir : path.dirname(templateData.rootFile)
		const templateName = partialIsRootRelative ? templateData.name.replace(ROOT_PARTIAL_KEY, '') : templateData.name
		const absoluteTemplatePath = path.join(rootDir, templateName)
		const resolvePath = this.handlebarsPluginOptions.assets.resolve
		return extractModulesAndAssets({
			partialIsRootRelative,
			resolvePath,
			html: templateData.source,
			htmlFilePath: absoluteTemplatePath,
			partialPath: templateName,
			rootDir: this.handlebarsPluginOptions.rootDir,
			contextPath: this.handlebarsPluginOptions.assets.contextPath
		})
	}

	// Process a partial then recursively process further nested partials
	private processAsset(assetData: InputAsset, templateData: TemplateData, assetsMap: AssetsMap) {
		templateData.source = this.renameAssetSources(templateData.source, assetData)
		const newAssetData = Object.assign({}, assetData)
		delete newAssetData.assetTagData
		assetsMap.set(assetData.filePath, newAssetData)
	}

	// Process a partial then recursively process further nested partials
	private processHelper(helperPath: string, templateData: TemplateData, helpersMap: PathMap) {

		// Skip if helper does not exist
		const helperResolved = this.resolveHelper(helperPath, templateData)
		if (!helperResolved) return

		// Resolve the helper path relative to the root file
		const resolvedHelperPath = this.resolveHelperFilepath(helperPath, templateData)

		
		// Rewrite the original source to be passed to final source map
		const extname = path.extname(resolvedHelperPath)
		let escapedHelperName = !extname ? resolvedHelperPath : resolvedHelperPath.replace(new RegExp(`${extname}$`), '')
		escapedHelperName = this.escapePathName(escapedHelperName)
		templateData.source = this.renameHelperInstances(templateData.source, helperPath, escapedHelperName)

		const rootFileDirectory = path.dirname(templateData.rootFile)
		const absoluteHelperDirectory = path.join(rootFileDirectory, resolvedHelperPath)
		const importDirectory = absoluteHelperDirectory.replaceAll('\\', '/')
		helpersMap.set(escapedHelperName, importDirectory)
	}

	// Process a partial then recursively process further nested partials
	private processPartial(partialPath: string, templateData: TemplateData, partialsMap: SourceDataMap, helpersMap: PathMap, assetsMap: AssetsMap) {

		const isRootPath = partialPath.startsWith(ROOT_PARTIAL_KEY)
		const parsedPartialPath = isRootPath ? partialPath.replace(ROOT_PARTIAL_KEY, '/') : partialPath
		// Skip if partial does not exist
		const partialSource = this.resolvePartialSource(parsedPartialPath, templateData)
		if (!partialSource) return

		// Resolve the partial path relative to the root file
		const resolvedPartialPath = isRootPath ? partialPath : this.resolvePartialFilepath(partialPath, templateData)
		
		// Rewrite the original source to be passed to final source map
		templateData.source = this.renamePartialInstances(templateData.source, partialPath, resolvedPartialPath)

		// Get the nested partials
		const partialTemplateData: TemplateData = {
			name: resolvedPartialPath,
			source: partialSource,
			rootFile: templateData.rootFile
		}
		this.processStatements(partialTemplateData, partialsMap, helpersMap, assetsMap);
	}





	// Process a partial then recursively process further nested partials
	private resolvePartialSource(partialPath: string, templateData: TemplateData): string {

		// Check if partial name is already registered in handlebarsPluginOptions
		if (this.handlebarsPluginOptions.partials &&
			typeof this.handlebarsPluginOptions.partials === 'object' &&
			this.handlebarsPluginOptions.partials[partialPath]) {
			return
		}

		const partialSource = this.getPartialSource(partialPath, templateData)
		return partialSource
	}

	// Process a partial then recursively process further nested partials
	private resolveHelper(helperPath: string, templateData: TemplateData): boolean {

		// Check if partial name is already registered in handlebarsPluginOptions
		if (this.handlebarsPluginOptions.helpers &&
			typeof this.handlebarsPluginOptions.helpers === 'object' &&
			this.handlebarsPluginOptions.helpers[helperPath]) {
			return false
		}

		const partialSource = this.checkIfHelperExists(helperPath, templateData)
		return partialSource
	}

	private getPartialSource(partialPath: string, templateData: TemplateData) {
		const isRootPath = partialPath.startsWith('/')
		const rootFileDirectory = isRootPath ? this.handlebarsPluginOptions.rootDir : path.dirname(templateData.rootFile)
		const currentFilepath = templateData.name
		const extname = path.extname(currentFilepath)

		const relativeFileDirectory = path.dirname(currentFilepath)
		const relativePartialPath = isRootPath ? partialPath.replace(/^\//, '') : path.join(relativeFileDirectory, partialPath)
		const fullRelativePartialPath = path.normalize(`${relativePartialPath}${extname}`)

		const partialAbsolutePath = path.resolve(rootFileDirectory, fullRelativePartialPath)
		let partialSource: string | undefined
		try {
			partialSource = fs.readFileSync(partialAbsolutePath, 'utf-8');
		} catch (e) {
			// const fileWithError = path.join(rootFileDirectory, currentFilepath)
			// console.error(`\x1b[31mPartial \x1b[1m${partialAbsolutePath}\x1b[0m\x1b[31m does not exist\x1b[0m`)
			// console.error(`\t\x1b[2mError in ${fileWithError}\x1b[0m`)
		}
		return partialSource
	}

	private checkIfHelperExists(helperPath: string, templateData: TemplateData) {
		const rootFileDirectory = path.dirname(templateData.rootFile)
		const currentFilepath = templateData.name
		const extname = '.js'

		const helperFilepath = path.normalize(`${helperPath}${extname}`)

		const relativeFileDirectory = path.dirname(currentFilepath)
		const relativePartialPath = path.join(relativeFileDirectory, helperFilepath)
		const absoluteFilepath = path.resolve(rootFileDirectory, relativePartialPath)
		let helperExists: boolean = false
		try {
			helperExists = fs.existsSync(absoluteFilepath);
		} catch (e) {
			// const fileWithError = path.join(rootFileDirectory, currentFilepath)
			// console.error(`\x1b[31mPartial \x1b[1m${partialAbsolutePath}\x1b[0m\x1b[31m does not exist\x1b[0m`)
			// console.error(`\t\x1b[2mError in ${fileWithError}\x1b[0m`)
		}
		return helperExists
	}



	private resolvePartialFilepath(partialPath: string, templateData: TemplateData) {
		const extname = path.extname(templateData.name)
		const fileDirectory = path.dirname(templateData.name)
		const partialFilepath = path.normalize(`${partialPath}${extname}`)
		// Process partials with paths nested to the current filepath
		const nestedPartialFilePath = path.join(fileDirectory, partialFilepath).replaceAll('\\', '/')
		return nestedPartialFilePath
	}

	private resolveHelperFilepath(partialPath: string, templateData: TemplateData) {
		const extname = '.js'
		const fileDirectory = path.dirname(templateData.name)
		const partialFilepath = path.normalize(`${partialPath}${extname}`)
		// Process partials with paths nested to the current filepath
		const nestedPartialFilePath = path.join(fileDirectory, partialFilepath).replaceAll('\\', '/')
		return nestedPartialFilePath
	}

	// Rewrite the original source to be passed to final source map
	private renamePartialInstances(source: string, fromName: string, resolvedPartialPath: string): string {
		const extname = path.extname(resolvedPartialPath)
		const resolvedPartialName = !extname ? resolvedPartialPath : resolvedPartialPath.replace(new RegExp(`${extname}$`), '')
		source = source.replaceAll(new RegExp(`(\\{\\{#?>(\\n|\\s)*)(${fromName})(?=[\\r\\n\\s\\}])`, 'gms'), `$1${resolvedPartialName}`)
		return source
	}

	// Rewrite the original source to be passed to final source map
	private renameHelperInstances(source: string, fromName: string, resolvedPartialPath: string): string {
		const extname = path.extname(resolvedPartialPath)
		let resolvedPartialName = !extname ? resolvedPartialPath : resolvedPartialPath.replace(new RegExp(`${extname}$`), '')
		resolvedPartialName = this.escapePathName(resolvedPartialName)
		source = source.replaceAll(new RegExp(`(\\{\\{(?:\\n|\\s)*)(\\[?)${fromName}(\\]?)(?=[\\r\\n\\s\\}])`, 'gms'), `$1$2${resolvedPartialName}$3`)
		return source
	}

	// Rewrite the original source to be passed to final source map
	private renameAssetSources(source: string, assetData: InputAsset) {
		if (!assetData || !assetData.assetTagData) return source
		const resolvedPath = assetData.outputFilePath
		const paths = assetData.assetTagData.paths
		const tag = assetData.assetTagData.tagName
		const attributes = sourceAttributesByTag[tag]
		for (let path of paths) {
			for (let attr of attributes) {
				source = source.replaceAll(new RegExp(`\\b(${attr}="[^"]*?)(${path}\\b(,?))`, 'gms'), `$1${resolvedPath}$3`)
			}
		}
		return source
	}

	private escapePathName(pathname: string) {
		const escapedName = pathname.replace(/^\.\//, '').replace(/^\//, '__').replaceAll(/\.\.\//g, '_').replaceAll(/\\|\//g, '--')
		return escapedName
	}
}