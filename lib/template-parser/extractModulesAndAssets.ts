import path from 'path';
import { parse } from 'parse5';
import { extractAssets } from './extractAssets';

export interface ExtractParams {
  html: string;
  htmlFilePath: string;
  partialPath: string;
  rootDir: string;
  externalAssets?: string | string[];
  absolutePathPrefix?: string;
  resolveRootDir?: string;
}

export function extractModulesAndAssets(params: ExtractParams) {
  const { html, htmlFilePath, partialPath, rootDir, externalAssets, absolutePathPrefix, resolveRootDir } = params;
  const htmlDir = path.dirname(htmlFilePath);
  const partialDir = path.dirname(partialPath);
  const document = parse(html);

  // extract functions mutate the AST
  const assets = extractAssets({
    document,
    htmlDir,
    partialDir,
    htmlFilePath,
    rootDir,
    externalAssets,
    absolutePathPrefix,
    resolveRootDir
  })

  return assets;
}