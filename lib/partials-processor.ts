import path from 'path';
import fs from 'fs';
import Handlebars from 'handlebars';

import { SourceMap } from './source-map';

import { HandlebarsPluginOptions } from './types/plugin-options';
import type { SourceDataMap } from './types/source-map';



interface TemplateData {
    name: string,
    source: string,
    rootFile: string
}

export default class PartialsProcessor {
    handlebarsPluginOptions: HandlebarsPluginOptions

    constructor(handlebarsPluginOptions: HandlebarsPluginOptions) {
        this.handlebarsPluginOptions = handlebarsPluginOptions
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
    }



    getSourceMap(templateData: TemplateData) {
        const map = this.getMap(templateData)
        const sourceMap = new SourceMap(map)
        return sourceMap
    }



	// Recursive function for getting nested partials with pathname
	private getMap(templateData: TemplateData, sourceMap: SourceDataMap = new Map()): SourceDataMap {
		
		// If partials are detected, process each partial
		const partials = this.getAllPartials(templateData.source)
		if (partials) partials.forEach(partialPath => this.processPartial(partialPath, templateData, sourceMap))
		
		// Add current template to source-map with re-written templateData.source
		// processPartial resolves partial instance paths for the templateData.source
		const extname = path.extname(templateData.name)
		const templateName = templateData.name.replace(new RegExp(`${extname}$`), '')
        sourceMap.set(templateName, templateData.source)

		return sourceMap;

	}

	private getAllPartials(source: string): Set<string> {
		const tree = Handlebars.parse(source);
		const scanner = new PartialsProcessor.ImportScanner();
		scanner.accept(tree);
		const partials = !!scanner.partials.size && scanner.partials
		return partials;
	}

	// Process a partial then recursively process further nested partials
	private processPartial(partialPath: string, templateData: TemplateData, sourceMap: SourceDataMap): string {

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
		this.getMap(partialTemplateData, sourceMap);
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



	private resolvePartialFilepath(partialPath: string, templateData: TemplateData) {
		const extname = path.extname(templateData.name)
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
		source = source.replaceAll(new RegExp(`(\\{\\{#?>(\\n|\\s)*)(${fromName})`, 'g'), `$1${resolvedPartialName} `)
		return source
	}
}