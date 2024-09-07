import { serialize } from 'parse5';
import fs from 'fs';
import { Document } from 'parse5/dist/tree-adapters/default.js';
import {
  findAssets,
  getAssetTagData,
  isHashedAsset,
  resolveAssetFilePath,
  createAssetPicomatchMatcher,
  resolveOutputPathFromRoot,
} from './utils';
import { InputAsset } from './InputData';

export interface ExtractAssetsParams {
  partialIsRootRelative?: boolean;
  resolvePath?: boolean;
  document: Document;
  htmlFilePath: string;
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
  const allAssets: InputAsset[] = [];
  const isExternal = createAssetPicomatchMatcher(params.externalAssets);

  for (const node of assetNodes) {
    const assetTagData = getAssetTagData(node);
    for (const sourcePath of assetTagData.paths) {
      if (isExternal(sourcePath)) continue;

      const filePath = resolveAssetFilePath(
        sourcePath,
        params.htmlDir,
        params.rootDir,
        params.absolutePathPrefix,
      );
      let outputFilePath: string
      if (params.resolvePath) {
        outputFilePath = resolveOutputPathFromRoot(
          sourcePath,
          params.partialIsRootRelative,
          params.htmlDir,
          params.partialDir,
          params.rootDir,
          params.contextPath,
          params.outputDir
        )
      } else {
        outputFilePath = sourcePath
      }
      const hashed = isHashedAsset(node);
      const alreadyHandled = allAssets.find(a => a.filePath === filePath && a.hashed === hashed);
      if (!alreadyHandled) {
        try {
          fs.accessSync(filePath);
        } catch (error) {
          const elStr = serialize(node);
          throw new Error(
            `Could not find ${filePath} referenced from HTML file ${params.htmlFilePath} from element ${elStr}.`,
          );
        }

        const content = fs.readFileSync(filePath);
        allAssets.push({ filePath, outputFilePath, hashed, content, assetTagData });
      }
    }
  }

  return allAssets;
}
