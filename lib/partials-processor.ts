import path from 'path';
import fs from 'fs';

import Handlebars from 'handlebars';

import type { CompiledData, SourceData, SourceDataMap, TemplateData } from './types'
import { HandlebarsPluginOptions } from './types';

export default class PartialsProcessor {
    handlebarsPluginOptions: HandlebarsPluginOptions

    constructor(handlebarsPluginOptions: HandlebarsPluginOptions) {
        this.handlebarsPluginOptions = handlebarsPluginOptions
    }

    static renamePartial(source: string, partialName: string, newPartialName: string) {
        source = source.replaceAll(new RegExp(`(\\{\\{>(\\n|\\s)*)(${partialName})`, 'g'), `$1${newPartialName} `)
        return source
    }

	static getPartialSource(partialPath: string, currentFilepath: string, genesisFileDirectory: string): string | undefined {
		const relativeFileDirectory = path.dirname(currentFilepath)
		const relativePartialPath = path.join(relativeFileDirectory, partialPath)
		const partialAbsolutePath = path.resolve(genesisFileDirectory, relativePartialPath)
		let partialSource: string | undefined
		try {
			partialSource = fs.readFileSync(partialAbsolutePath, 'utf-8');
		} catch (e) {
			const fileWithError = path.join(genesisFileDirectory, currentFilepath)
			console.error(`\x1b[31mPartial \x1b[1m${partialAbsolutePath}\x1b[0m\x1b[31m does not exist\x1b[0m`)
			console.error(`\t\x1b[2mError in ${fileWithError}\x1b[0m`)
		}
		return partialSource
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
            if (partial.name && partial.name.type === 'PathExpression') {
                this.partials.add(partial.name.original);
                return super.PartialStatement(partial);
            } else {
                throw new Error('Dynamic partial resolution is not supported');
            }
        }
    }



    getCompiledPartial([partial, source]: SourceData) {
		const compiled = Handlebars.precompile(source, this.handlebarsPluginOptions);
        const compiledData: CompiledData = [partial, compiled]
		return compiledData;
	}



    getFilesFromSourceMap(directory: string, extname: string, sourceMap: SourceDataMap): string[] {
		let filepaths = Array.from(sourceMap.keys())
		let absoluteFilepaths = filepaths.map((filepath) => {
			const dir = path.dirname(filepath);
			const name = path.basename(filepath, extname);
			const absoluteFilepath = path.join(dir, name)
			return path.join(directory, absoluteFilepath)
		})
		let uniqueFiles = [...new Set(absoluteFilepaths)]
		return uniqueFiles
	}



	// Recursive function for getting nested partials with pathname
	getSourceMap(templateData: TemplateData, sourceMap: SourceDataMap = new Map): SourceDataMap {
		const extname = path.extname(templateData.name)
		const templateName = templateData.name.replace(new RegExp(`${extname}$`), '')

		const tree = Handlebars.parse(templateData.source);
		const scanner = new PartialsProcessor.ImportScanner();
		scanner.accept(tree);

		this.processPartials(scanner.partials, templateData, sourceMap)
        sourceMap.set(templateName, templateData.source)

		return sourceMap;
	}

	processPartials(partials: Set<string>, templateData: TemplateData, sourceMap: SourceDataMap = new Map): void {
		// Partials have been found
		if (partials.size) {
			for (const partialPath of partials) {
				this.processPartial(partialPath, templateData, sourceMap)
			}
		}
	}

	// Process a partial then recursively process further nested partials
	processPartial(partialPath: string, templateData: TemplateData, sourceMap: SourceDataMap = new Map): string {

		// Check if partial name is already registered in handlebarsPluginOptions
		if (this.handlebarsPluginOptions.partials &&
			typeof this.handlebarsPluginOptions.partials === 'object' &&
			this.handlebarsPluginOptions.partials[partialPath]) {
			return
		}

		const rootFileDirectory = path.dirname(templateData.rootFile)
		const extname = path.extname(templateData.name)
		const fileDirectory = path.dirname(templateData.name)

		const partialFilepath = path.normalize(`${partialPath}${extname}`)
		const partialSource = PartialsProcessor.getPartialSource(partialFilepath, templateData.name, rootFileDirectory)
		// Skip if partial does not exist
		if (!partialSource) return
		
		// Process partials with paths nested to the current filepath
		const nestedPartialFilePath = path.join(fileDirectory, partialFilepath).replaceAll('\\', '/')
		const nestedPartialName = nestedPartialFilePath.replace(new RegExp(`${extname}$`), '')
		
		// Rewrite the original source to be passed to final source map
		templateData.source = PartialsProcessor.renamePartial(templateData.source, partialPath, nestedPartialName)

		// Get the nested partials
		const partialData: TemplateData = {
			name: nestedPartialFilePath,
			source: partialSource,
			rootFile: templateData.rootFile
		}
		this.getSourceMap(partialData, sourceMap);
	}
}