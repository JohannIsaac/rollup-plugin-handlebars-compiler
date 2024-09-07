import path from 'path';
import { parse } from 'parse5';
import { extractAssets } from './extractAssets';

export interface ExtractParams {
  resolvePath?: boolean;
  html: string;
  htmlFilePath: string;
  partialPath: string;
  rootDir: string;
  externalAssets?: string | string[];
  absolutePathPrefix?: string;
  contextPath?: string;
}

export function extractModulesAndAssets(params: ExtractParams) {
  const { resolvePath, html, htmlFilePath, partialPath, rootDir, externalAssets, absolutePathPrefix, contextPath } = params;
  const htmlDir = path.dirname(htmlFilePath);
  const partialDir = path.dirname(partialPath);
  const document = parse(html);

  // extract functions mutate the AST
  const assets = extractAssets({
    resolvePath,
    document,
    htmlDir,
    partialDir,
    htmlFilePath,
    rootDir,
    externalAssets,
    absolutePathPrefix,
    contextPath
  })

  return assets;
}