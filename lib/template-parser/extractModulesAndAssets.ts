import path from 'path';
import { parse } from 'parse5';
import { extractAssets } from './extractAssets';
import { InputAsset } from './InputData';

export interface ExtractParams {
	partialIsRootRelative?: boolean,
	resolvePath?: boolean;
	template: string;
	templateFilepath: string;
	partialPath: string;
	rootDir: string;
	externalAssets?: string | string[];
	contextPath?: string;
	outputDir?: string
}

export function extractModulesAndAssets(params: ExtractParams) {
	const {
		partialIsRootRelative,
		resolvePath,
		template,
		templateFilepath,
		partialPath,
		rootDir,
		externalAssets,
		contextPath,
		outputDir
	} = params;
	
	const htmlDir = path.dirname(templateFilepath);
	const partialDir = path.dirname(partialPath);
	const document = parse(template);

	// extract functions mutate the AST
    let assets: InputAsset[]
    try {
        assets = extractAssets({
            partialIsRootRelative,
            resolvePath,
            document,
            htmlDir,
            partialDir,
            templateFilepath,
            rootDir,
            externalAssets,
            contextPath,
            outputDir
        })
    } catch (e) {
        console.error(e)
    }

	return assets;
}