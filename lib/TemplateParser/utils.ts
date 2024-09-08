import path from 'path';
import picomatch from 'picomatch';
import { findElements, getTagName, getAttribute } from '@web/parse5-utils';

import { Document, Element } from 'parse5/dist/tree-adapters/default.js';
import { AssetTagData } from './InputData';

const hashedLinkRels = ['stylesheet'];
const linkRels = [...hashedLinkRels, 'icon', 'manifest', 'apple-touch-icon', 'mask-icon'];

function getSrcSetUrls(srcset: string) {
	if (!srcset) {
		return [];
	}
	const srcsetParts = srcset.includes(',') ? srcset.split(',') : [srcset];
	const urls = srcsetParts
		.map(url => url.trim())
		.map(url => (url.includes(' ') ? url.split(' ')[0] : url));
	return urls;
}

function extractFirstUrlOfSrcSet(node: Element) {
	const srcset = getAttribute(node, 'srcset');
	if (!srcset) {
		return '';
	}
	const urls = getSrcSetUrls(srcset);
	return urls[0];
}

export function resolveAssetFilepath(
	browserPath: string,
	htmlDir: string,
	projectRootDir: string
) {
	return path.join(
		browserPath.startsWith('/') ? projectRootDir : htmlDir,
		browserPath.split('/').join(path.sep),
	);
}

function getSourceAttribute(node: Element) {
	switch (getTagName(node)) {
		case 'img': {
			return 'src';
		}
		case 'audio': {
			return 'src';
		}
		case 'video': {
			return 'src';
		}
		case 'source': {
			return getAttribute(node, 'src') ? 'src' : 'srcset';
		}
		case 'link': {
			return 'href';
		}
		case 'script': {
			return 'src';
		}
		case 'meta': {
			return 'content';
		}
		default:
			throw new Error(`Unknown node with tagname ${getTagName(node)}`);
	}
}

function isAsset(node: Element) {
	let path = '';
	const tagName = getTagName(node)
	switch (tagName) {
		case 'img':
			path = getAttribute(node, 'src') ?? '';
			break;
		case 'audio':
			path = getAttribute(node, 'src') ?? '';
			break;
		case 'video':
			path = getAttribute(node, 'src') ?? '';
			break;
		case 'source':
			if (getAttribute(node, 'src')) {
				path = getAttribute(node, 'src') ?? '';
			} else {
				path = extractFirstUrlOfSrcSet(node) ?? '';
			}
			break;
		case 'link':
			if (linkRels.includes(getAttribute(node, 'rel') ?? '')) {
				path = getAttribute(node, 'href') ?? '';
			}
			break;
		case 'meta':
			if (getAttribute(node, 'property') === 'og:image' && getAttribute(node, 'content')) {
				path = getAttribute(node, 'content') ?? '';
			}
			break;
		case 'script':
			if (getAttribute(node, 'type') !== 'module' && getAttribute(node, 'src')) {
				path = getAttribute(node, 'src') ?? '';
			}
			break;
		default:
			return false;
	}
	if (!path) {
		return false;
	}
	try {
		new URL(path);
		return false;
	} catch (e) {
		return true;
	}
}

export function resolveOutputPathFromRoot(
	browserPath: string,
	partialIsRootRelative: boolean,
	htmlDir: string,
	partialDir: string,
	projectRootDir: string,
	contextPath?: string,
	outputDir?: string
) {
	const absoluteFilepath = partialIsRootRelative ? path.join(projectRootDir, partialDir, browserPath) : path.join(htmlDir, partialDir, browserPath)
	const _browserPath = browserPath.startsWith('/') ? browserPath : '/' + path.relative(projectRootDir, absoluteFilepath).replaceAll('\\', '/')
	const strippedRootDir = contextPath && path.normalize(contextPath.replace(/\/$/, '')).replaceAll('\\', '/')
	const strippedOutputDir = outputDir && path.normalize(outputDir.replace(/\/$/, '')).replaceAll('\\', '/')
	const parsedOutputDir = strippedOutputDir ? `${strippedOutputDir}/` : ''
	const _resolvedPathFromRoot = strippedRootDir ? _browserPath.replace(new RegExp(`^/${strippedRootDir}/`), `/${parsedOutputDir}`) : _browserPath
	return _resolvedPathFromRoot
}

export const sourceAttributesByTag = {
	'img': ['src'],
	'audio': ['src'],
	'video': ['src'],
	'source': ['src', 'srcset'],
	'link': ['href'],
	'script': ['src'],
	'meta': ['content'],
}

export function isHashedAsset(node: Element) {
	switch (getTagName(node)) {
		case 'img':
			return true;
		case 'audio':
			return true;
		case 'video':
			return true;
		case 'source':
			return true;
		case 'script':
			return true;
		case 'link':
			return hashedLinkRels.includes(getAttribute(node, 'rel')!);
		case 'meta':
			return true;
		default:
			return false;
	}
}

export function getAssetTagData(node: Element): AssetTagData {
	const key = getSourceAttribute(node);
	const tagName = getTagName(node)

	const src = getAttribute(node, key);
	if (typeof key !== 'string' || src === '') {
		throw new Error(`Missing attribute ${key} in element`);
	}

	let paths: string[] = [];
	if (src) {
		paths = key !== 'srcset' ? [src] : getSrcSetUrls(src);
	}

	return { paths, tagName, attr: key };
}

export function findAssets(document: Document) {
	return findElements(document, isAsset);
}

// picomatch follows glob spec and requires "./" to be removed for the matcher to work
// it is safe, because with or without it resolves to the same file
// read more: https://github.com/micromatch/picomatch/issues/77
const removeLeadingSlash = (str: string) => (str.startsWith('./') ? str.slice(2) : str);
export function createAssetPicomatchMatcher(glob?: string | string[]) {
	return picomatch(glob || [], { format: removeLeadingSlash });
}
