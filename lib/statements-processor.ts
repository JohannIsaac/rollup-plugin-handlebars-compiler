import path from 'path';
import fs from 'fs';
import Handlebars from 'handlebars';

import { HandlebarsPluginOptions } from './types/plugin-options';
import type { PathMap, SourceDataMap } from './types/source-map';



interface TemplateData {
    name: string,
    source: string,
    rootFile: string
}

type ProcessResult = {
	partials: SourceDataMap,
	helpers: PathMap
}

export default class StatementsProcessor {
    handlebarsPluginOptions: HandlebarsPluginOptions
	partials: SourceDataMap
	helpers: PathMap

    constructor(templateData: TemplateData, handlebarsPluginOptions: HandlebarsPluginOptions = {}) {
        this.handlebarsPluginOptions = handlebarsPluginOptions

		const processResult = this.processStatements(templateData)
		this.partials = processResult.partials
		this.helpers = processResult.helpers
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
	private processStatements(templateData: TemplateData, partialsMap: SourceDataMap = new Map(), helpersMap: PathMap = new Map) {
		
		// If partials are detected, process each partial
		const { partials, helpers } = this.getAllStatements(templateData.source)
		if (helpers) helpers.forEach(helperPath => this.processHelper(helperPath, templateData, helpersMap))
		if (partials) partials.forEach(partialPath => this.processPartial(partialPath, templateData, partialsMap, helpersMap))
		
		// Add current template to source-map with re-written templateData.source
		// processPartial resolves partial instance paths for the templateData.source
		const extname = path.extname(templateData.name)
		const templateName = templateData.name.replace(new RegExp(`${extname}$`), '')
        partialsMap.set(templateName, templateData.source)

		const processResult: ProcessResult = {
			partials: partialsMap,
			helpers: helpersMap
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

	// Process a partial then recursively process further nested partials
	private processHelper(helperPath: string, templateData: TemplateData, helpersMap: PathMap): string {

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
	private processPartial(partialPath: string, templateData: TemplateData, partialsMap: SourceDataMap, helpersMap: PathMap): string {

		// Skip if partial does not exist
		const partialSource = this.resolvePartialSource(partialPath, templateData)
		if (!partialSource) return

		// Resolve the partial path relative to the root file
		const resolvedPartialPath = this.resolvePartialFilepath(partialPath, templateData)
		
		// Rewrite the original source to be passed to final source map
		templateData.source = this.renamePartialInstances(templateData.source, partialPath, resolvedPartialPath)

		// Get the nested partials
		const partialTemplateData: TemplateData = {
			name: resolvedPartialPath,
			source: partialSource,
			rootFile: templateData.rootFile
		}
		this.processStatements(partialTemplateData, partialsMap, helpersMap);
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
		const rootFileDirectory = path.dirname(templateData.rootFile)
		const currentFilepath = templateData.name
		const extname = path.extname(currentFilepath)

		const partialFilepath = path.normalize(`${partialPath}${extname}`)

		const relativeFileDirectory = path.dirname(currentFilepath)
		const relativePartialPath = path.join(relativeFileDirectory, partialFilepath)
		const partialAbsolutePath = path.resolve(rootFileDirectory, relativePartialPath)
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
		source = source.replaceAll(new RegExp(`(\\{\\{#?>(\\n|\\s)*)(${fromName})(?=[\\r\\n\\s\\}])`, 'g'), `$1${resolvedPartialName}`)
		return source
	}

	// Rewrite the original source to be passed to final source map
	private renameHelperInstances(source: string, fromName: string, resolvedPartialPath: string): string {
		const extname = path.extname(resolvedPartialPath)
		let resolvedPartialName = !extname ? resolvedPartialPath : resolvedPartialPath.replace(new RegExp(`${extname}$`), '')
		resolvedPartialName = this.escapePathName(resolvedPartialName)
		source = source.replaceAll(new RegExp(`(\\{\\{(?:\\n|\\s)*)(\\[?)${fromName}(\\]?)(?=[\\r\\n\\s\\}])`, 'g'), `$1$2${resolvedPartialName}$3`)
		return source
	}

	private escapePathName(pathname: string) {
		const escapedName = pathname.replace(/^\.\//, '').replace(/^\//, '__').replaceAll(/\.\.\//g, '_').replaceAll(/\\|\//g, '--')
		return escapedName
	}
}