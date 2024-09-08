import path from 'path';
import fs from 'fs';
import Handlebars from 'handlebars';
import picomatch from 'picomatch';
import { getTagName, getAttribute, findElements } from '@web/parse5-utils';
import { parse as parse$1, serialize } from 'parse5';
import { js_beautify } from 'js-beautify';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var hashedLinkRels = ['stylesheet'];
var linkRels = __spreadArray(__spreadArray([], __read(hashedLinkRels), false), ['icon', 'manifest', 'apple-touch-icon', 'mask-icon'], false);
function getSrcSetUrls(srcset) {
    if (!srcset) {
        return [];
    }
    var srcsetParts = srcset.includes(',') ? srcset.split(',') : [srcset];
    var urls = srcsetParts
        .map(function (url) { return url.trim(); })
        .map(function (url) { return (url.includes(' ') ? url.split(' ')[0] : url); });
    return urls;
}
function extractFirstUrlOfSrcSet(node) {
    var srcset = getAttribute(node, 'srcset');
    if (!srcset) {
        return '';
    }
    var urls = getSrcSetUrls(srcset);
    return urls[0];
}
function getSourceAttribute(node) {
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
            throw new Error("Unknown node with tagname ".concat(getTagName(node)));
    }
}
function isAsset(node) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    var path = '';
    var tagName = getTagName(node);
    switch (tagName) {
        case 'img':
            path = (_a = getAttribute(node, 'src')) !== null && _a !== void 0 ? _a : '';
            break;
        case 'audio':
            path = (_b = getAttribute(node, 'src')) !== null && _b !== void 0 ? _b : '';
            break;
        case 'video':
            path = (_c = getAttribute(node, 'src')) !== null && _c !== void 0 ? _c : '';
            break;
        case 'source':
            if (getAttribute(node, 'src')) {
                path = (_d = getAttribute(node, 'src')) !== null && _d !== void 0 ? _d : '';
            }
            else {
                path = (_e = extractFirstUrlOfSrcSet(node)) !== null && _e !== void 0 ? _e : '';
            }
            break;
        case 'link':
            if (linkRels.includes((_f = getAttribute(node, 'rel')) !== null && _f !== void 0 ? _f : '')) {
                path = (_g = getAttribute(node, 'href')) !== null && _g !== void 0 ? _g : '';
            }
            break;
        case 'meta':
            if (getAttribute(node, 'property') === 'og:image' && getAttribute(node, 'content')) {
                path = (_h = getAttribute(node, 'content')) !== null && _h !== void 0 ? _h : '';
            }
            break;
        case 'script':
            if (getAttribute(node, 'type') !== 'module' && getAttribute(node, 'src')) {
                path = (_j = getAttribute(node, 'src')) !== null && _j !== void 0 ? _j : '';
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
    }
    catch (e) {
        return true;
    }
}
var sourceAttributesByTag = {
    'img': ['src'],
    'audio': ['src'],
    'video': ['src'],
    'source': ['src', 'srcset'],
    'link': ['href'],
    'script': ['src'],
    'meta': ['content'],
};
function isHashedAsset(node) {
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
            return hashedLinkRels.includes(getAttribute(node, 'rel'));
        case 'meta':
            return true;
        default:
            return false;
    }
}
function getAssetTagData(node) {
    var key = getSourceAttribute(node);
    var tagName = getTagName(node);
    var src = getAttribute(node, key);
    if (typeof key !== 'string' || src === '') {
        throw new Error("Missing attribute ".concat(key, " in element"));
    }
    var paths = [];
    if (src) {
        paths = key !== 'srcset' ? [src] : getSrcSetUrls(src);
    }
    return { paths: paths, tagName: tagName, attr: key };
}
function findAssets(document) {
    return findElements(document, isAsset);
}
// picomatch follows glob spec and requires "./" to be removed for the matcher to work
// it is safe, because with or without it resolves to the same file
// read more: https://github.com/micromatch/picomatch/issues/77
var removeLeadingSlash = function (str) { return (str.startsWith('./') ? str.slice(2) : str); };
function createAssetPicomatchMatcher(glob) {
    return picomatch(glob || [], { format: removeLeadingSlash });
}

var AssetsExtractor = /** @class */ (function () {
    function AssetsExtractor(options, handlebarsPluginOptions) {
        if (handlebarsPluginOptions === void 0) { handlebarsPluginOptions = {}; }
        if (handlebarsPluginOptions)
            this.handlebarsPluginOptions = handlebarsPluginOptions;
        if (options.isRootRelative)
            this.isRootRelative = options.isRootRelative;
        if (options.source) {
            this.document = parse$1(options.source);
        }
        if (options.absolutePath) {
            this.absolutePath = options.absolutePath;
            this.templateDir = path.dirname(options.absolutePath);
        }
        if (options.relativePath) {
            this.relativeDir = path.dirname(options.relativePath);
        }
    }
    AssetsExtractor.prototype.getAssetsList = function () {
        var _this = this;
        var assetNodes = findAssets(this.document);
        var assetsDataList = [];
        assetNodes.forEach(function (node) { return _this.getAssetsListFromNode(node, assetsDataList); });
        return assetsDataList;
    };
    AssetsExtractor.prototype.getAssetsListFromNode = function (node, assetsDataList) {
        var _this = this;
        if (assetsDataList === void 0) { assetsDataList = []; }
        var assetTagData = getAssetTagData(node);
        assetTagData.paths.forEach(function (sourcePath) { return _this.getAssetsListFromPath(sourcePath, node, assetsDataList); });
    };
    AssetsExtractor.prototype.getAssetsListFromPath = function (sourcePath, node, assetsDataList) {
        if (assetsDataList === void 0) { assetsDataList = []; }
        sourcePath = sourcePath.trim();
        var isExternal = createAssetPicomatchMatcher(this.handlebarsPluginOptions.assets.external);
        var filepath = this.resolveAssetFilepath(sourcePath);
        var outputFilepath = this.resolveOutputPathFromRoot(sourcePath);
        var filepathRelativeToRoot = path.relative(this.handlebarsPluginOptions.rootDir, filepath);
        if (isExternal(filepathRelativeToRoot))
            return;
        var assetData = this.getAssetsDataFromFilepath({
            filepath: filepath,
            sourcePath: sourcePath,
            outputFilepath: outputFilepath,
            node: node,
        }, assetsDataList);
        if (!assetData)
            return;
        assetsDataList.push(assetData);
    };
    AssetsExtractor.prototype.getAssetsDataFromFilepath = function (nodeData, assetsDataList) {
        if (assetsDataList === void 0) { assetsDataList = []; }
        var assetTagData = getAssetTagData(nodeData.node);
        var tagDataOfAsset = Object.assign({}, assetTagData);
        tagDataOfAsset.paths = [nodeData.sourcePath];
        var hashed = isHashedAsset(nodeData.node);
        var alreadyHandled = assetsDataList.find(function (a) { return a.filepath === nodeData.filepath && a.hashed === hashed; });
        if (alreadyHandled)
            return null;
        try {
            fs.accessSync(nodeData.filepath);
        }
        catch (error) {
            var elStr = serialize(nodeData.node);
            throw new Error("Could not find ".concat(nodeData.filepath, " referenced from HTML file ").concat(this.absolutePath, " from element ").concat(elStr, "."));
        }
        var content = fs.readFileSync(nodeData.filepath);
        var assetData = {
            filepath: nodeData.filepath,
            outputFilepath: nodeData.outputFilepath,
            hashed: hashed,
            content: content,
            assetTagData: tagDataOfAsset
        };
        return assetData;
    };
    AssetsExtractor.prototype.resolveAssetFilepath = function (browserPath) {
        var projectRootDir = this.handlebarsPluginOptions.rootDir;
        var templateDir = this.templateDir;
        var rootDir = browserPath.startsWith('/') ? projectRootDir : templateDir;
        return path.join(rootDir, browserPath.split('/').join(path.sep));
    };
    AssetsExtractor.prototype.resolveOutputPathFromRoot = function (browserPath) {
        if (!this.handlebarsPluginOptions.assets.resolve)
            return browserPath;
        var assetPath = path.join(this.relativeDir, browserPath);
        var absoluteFilepath = this.isRootRelative ?
            path.join(this.handlebarsPluginOptions.rootDir, assetPath) :
            path.join(this.templateDir, assetPath);
        var _browserPath = browserPath.startsWith('/') ?
            browserPath.replaceAll('\\', '/') :
            '/' + path.relative(this.handlebarsPluginOptions.rootDir, absoluteFilepath).replaceAll('\\', '/');
        var strippedRootDir = this.handlebarsPluginOptions.assets.contextPath && path.normalize(this.handlebarsPluginOptions.assets.contextPath.replace(/\/$/, '')).replaceAll('\\', '/');
        var strippedOutputDir = !this.handlebarsPluginOptions.assets.outputDir ? '' : path.normalize(this.handlebarsPluginOptions.assets.outputDir.replace(/\/$/, '')).replaceAll('\\', '/');
        var parsedOutputDir = strippedOutputDir ? "".concat(strippedOutputDir, "/") : '';
        var _resolvedPathFromRoot = strippedRootDir ? _browserPath.replace(new RegExp("^/".concat(strippedRootDir, "/")), "/".concat(parsedOutputDir)) : "".concat(strippedOutputDir).concat(_browserPath);
        var forceLeadingSlash = _resolvedPathFromRoot.startsWith('/') ? _resolvedPathFromRoot : "/".concat(_resolvedPathFromRoot);
        return forceLeadingSlash;
    };
    return AssetsExtractor;
}());

var ROOT_PATH_KEY = '__ROOT__/';
// Regex for whitespace in group
var gws = '\\r|\\n|\\s';
// Regex for whitespace in character class
var cws = '\\r\\n\\s';
var StatementsProcessor = /** @class */ (function () {
    function StatementsProcessor(templateData, handlebarsPluginOptions) {
        if (handlebarsPluginOptions === void 0) { handlebarsPluginOptions = {}; }
        this.handlebarsPluginOptions = handlebarsPluginOptions;
        var processResult = this.processStatements(templateData);
        this.partials = processResult.partials;
        this.helpers = processResult.helpers;
        this.assets = processResult.assets;
    }
    StatementsProcessor.renameAllRootPathPartials = function (source) {
        return source.replaceAll(new RegExp("(\\{\\{#?>(".concat(gws, ")*)\\/"), 'gms'), "$1".concat(ROOT_PATH_KEY));
    };
    // Recursive function for getting nested partials with pathname
    StatementsProcessor.prototype.processStatements = function (templateData, partialsMap, helpersMap, assetsMap) {
        var _this = this;
        if (partialsMap === void 0) { partialsMap = new Map(); }
        if (helpersMap === void 0) { helpersMap = new Map(); }
        if (assetsMap === void 0) { assetsMap = new Map(); }
        // If partials are detected, process each partial
        templateData.source = StatementsProcessor.renameAllRootPathPartials(templateData.source);
        var _a = this.getAllStatements(templateData.source), partials = _a.partials, helpers = _a.helpers;
        var assets = this.getAllAssets(templateData);
        if (assets)
            assets.forEach(function (assetData) { return _this.processAsset(assetData, templateData, assetsMap); });
        if (helpers)
            helpers.forEach(function (helperPath) { return _this.processHelper(helperPath, templateData, helpersMap); });
        if (partials)
            partials.forEach(function (partialPath) { return _this.processPartial(partialPath, templateData, partialsMap, helpersMap, assetsMap); });
        // Add current template to source-map with re-written templateData.source
        // processPartial resolves partial instance paths for the templateData.source
        var extname = path.extname(templateData.name);
        var templateName = templateData.name.replace(new RegExp("".concat(extname, "$")), '');
        partialsMap.set(templateName, templateData.source);
        var processResult = {
            partials: partialsMap,
            helpers: helpersMap,
            assets: assetsMap
        };
        return processResult;
    };
    StatementsProcessor.prototype.getAllStatements = function (source) {
        var tree = Handlebars.parse(source);
        var scanner = new StatementsProcessor.ImportScanner();
        scanner.accept(tree);
        var partials = !!scanner.partials.size && scanner.partials;
        var helpers = !!scanner.helpers.size && scanner.helpers;
        return { partials: partials, helpers: helpers };
    };
    StatementsProcessor.prototype.getAllAssets = function (templateData) {
        var isRootRelative = templateData.name.startsWith(ROOT_PATH_KEY);
        var rootDir = isRootRelative ? this.handlebarsPluginOptions.rootDir : path.dirname(templateData.rootFile);
        var templateName = isRootRelative ? templateData.name.replace(ROOT_PATH_KEY, '') : templateData.name;
        var absoluteTemplatePath = path.join(rootDir, templateName);
        var extractor = new AssetsExtractor({
            isRootRelative: isRootRelative,
            source: templateData.source,
            absolutePath: absoluteTemplatePath,
            relativePath: templateName
        }, this.handlebarsPluginOptions);
        var assetList = extractor.getAssetsList();
        return assetList;
    };
    // Process a partial then recursively process further nested partials
    StatementsProcessor.prototype.processAsset = function (assetData, templateData, assetsMap) {
        templateData.source = this.renameAssetSources(templateData.source, assetData);
        var newAssetData = Object.assign({}, assetData);
        delete newAssetData.assetTagData;
        assetsMap.set(assetData.filepath, newAssetData);
    };
    // Process a partial then recursively process further nested partials
    StatementsProcessor.prototype.processHelper = function (helperPath, templateData, helpersMap) {
        // Skip if helper does not exist
        var helperResolved = this.resolveHelper(helperPath, templateData);
        if (!helperResolved)
            return;
        // Resolve the helper path relative to the root file
        var resolvedHelperPath = this.resolveHelperFilepath(helperPath, templateData);
        // Rewrite the original source to be passed to final source map
        var extname = path.extname(resolvedHelperPath);
        var escapedHelperName = !extname ? resolvedHelperPath : resolvedHelperPath.replace(new RegExp("".concat(extname, "$")), '');
        escapedHelperName = this.escapePathName(escapedHelperName);
        templateData.source = this.renameHelperInstances(templateData.source, helperPath, escapedHelperName);
        var rootFileDirectory = path.dirname(templateData.rootFile);
        var absoluteHelperDirectory = path.join(rootFileDirectory, resolvedHelperPath);
        var importDirectory = absoluteHelperDirectory.replaceAll('\\', '/');
        helpersMap.set(escapedHelperName, importDirectory);
    };
    // Process a partial then recursively process further nested partials
    StatementsProcessor.prototype.processPartial = function (partialPath, templateData, partialsMap, helpersMap, assetsMap) {
        var partialIsRootRelative = partialPath.startsWith(ROOT_PATH_KEY);
        var parsedPartialPath = partialIsRootRelative ? partialPath.replace(ROOT_PATH_KEY, '/') : partialPath;
        // Skip if partial does not exist
        var partialSource = this.resolvePartialSource(parsedPartialPath, templateData);
        if (!partialSource)
            return;
        // Resolve the partial path relative to the root file
        var resolvedPartialPath = partialIsRootRelative ? partialPath : this.resolvePartialFilepath(partialPath, templateData);
        // Rewrite the original source to be passed to final source map
        templateData.source = this.renamePartialInstances(templateData.source, partialPath, resolvedPartialPath);
        var extname = path.extname(templateData.name);
        var partialTemplateName = resolvedPartialPath.replace(new RegExp("\\.\\w+$"), '') + extname;
        // Get the nested partials
        var partialTemplateData = {
            name: partialTemplateName,
            source: partialSource,
            rootFile: templateData.rootFile
        };
        this.processStatements(partialTemplateData, partialsMap, helpersMap, assetsMap);
    };
    // Process a partial then recursively process further nested partials
    StatementsProcessor.prototype.resolvePartialSource = function (partialPath, templateData) {
        // Check if partial name is already registered in handlebarsPluginOptions
        if (this.handlebarsPluginOptions.partials &&
            typeof this.handlebarsPluginOptions.partials === 'object' &&
            this.handlebarsPluginOptions.partials[partialPath]) {
            return;
        }
        var partialSource = this.getPartialSource(partialPath, templateData);
        return partialSource;
    };
    // Process a partial then recursively process further nested partials
    StatementsProcessor.prototype.resolveHelper = function (helperPath, templateData) {
        // Check if helper name is already registered in handlebarsPluginOptions
        if (this.handlebarsPluginOptions.helpers &&
            typeof this.handlebarsPluginOptions.helpers === 'object' &&
            this.handlebarsPluginOptions.helpers[helperPath]) {
            return false;
        }
        var helperSource = this.checkIfHelperExists(helperPath, templateData);
        return helperSource;
    };
    StatementsProcessor.prototype.getPartialSource = function (partialPath, templateData) {
        var partialIsRootRelative = partialPath.startsWith('/');
        var rootFileDirectory = partialIsRootRelative ? this.handlebarsPluginOptions.rootDir : path.dirname(templateData.rootFile);
        // Get template path according to whether it is root relative or not
        var templatePath = templateData.name;
        var templateIsRootRelative = templatePath.startsWith(ROOT_PATH_KEY);
        var currentFilepath = templateIsRootRelative ?
            path.join(this.handlebarsPluginOptions.rootDir, templatePath.replace(ROOT_PATH_KEY, '')) :
            templatePath;
        var extname = path.extname(currentFilepath);
        var relativeFileDirectory = path.dirname(currentFilepath);
        var relativePartialPath = partialIsRootRelative ? partialPath.replace('/', '') : path.join(relativeFileDirectory, partialPath);
        var fullRelativePartialPath = path.normalize("".concat(relativePartialPath).concat(extname));
        var partialAbsolutePath = path.resolve(rootFileDirectory, fullRelativePartialPath);
        var partialSource;
        try {
            partialSource = fs.readFileSync(partialAbsolutePath, 'utf-8');
        }
        catch (e) { }
        return partialSource;
    };
    StatementsProcessor.prototype.checkIfHelperExists = function (helperPath, templateData) {
        var rootFileDirectory = path.dirname(templateData.rootFile);
        var currentFilepath = templateData.name;
        var extname = '.js';
        var helperFilepath = path.normalize("".concat(helperPath).concat(extname));
        var relativeFileDirectory = path.dirname(currentFilepath);
        var relativeHelperPath = path.join(relativeFileDirectory, helperFilepath);
        var absoluteFilepath = path.resolve(rootFileDirectory, relativeHelperPath);
        var helperExists = false;
        try {
            helperExists = fs.existsSync(absoluteFilepath);
        }
        catch (e) { }
        return helperExists;
    };
    StatementsProcessor.prototype.resolvePartialFilepath = function (partialPath, templateData) {
        var extname = path.extname(templateData.name);
        var fileDirectory = path.dirname(templateData.name);
        var partialFilepath = path.normalize("".concat(partialPath).concat(extname));
        // Process partials with paths nested to the current filepath
        var nestedPartialFilepath = path.join(fileDirectory, partialFilepath).replaceAll('\\', '/');
        return nestedPartialFilepath;
    };
    StatementsProcessor.prototype.resolveHelperFilepath = function (helperPath, templateData) {
        var extname = '.js';
        var fileDirectory = path.dirname(templateData.name);
        var helperFilepath = path.normalize("".concat(helperPath).concat(extname));
        // Process partials with paths nested to the current filepath
        var nestedPartialFilepath = path.join(fileDirectory, helperFilepath).replaceAll('\\', '/');
        return nestedPartialFilepath;
    };
    // Rewrite the original source to be passed to final source map
    StatementsProcessor.prototype.renamePartialInstances = function (source, fromName, resolvedPartialPath) {
        var extname = path.extname(resolvedPartialPath);
        var resolvedPartialName = !extname ? resolvedPartialPath : resolvedPartialPath.replace(new RegExp("".concat(extname, "$")), '');
        source = source.replaceAll(new RegExp("(\\{\\{#?>(".concat(gws, ")*)(").concat(fromName, ")(?=[").concat(cws, "\\}])"), 'gms'), "$1".concat(resolvedPartialName));
        return source;
    };
    // Rewrite the original source to be passed to final source map
    StatementsProcessor.prototype.renameHelperInstances = function (source, fromName, resolvedHelperPath) {
        var extname = path.extname(resolvedHelperPath);
        var resolvedHelperName = !extname ? resolvedHelperPath : resolvedHelperPath.replace(new RegExp("".concat(extname, "$")), '');
        resolvedHelperName = this.escapePathName(resolvedHelperName);
        source = source.replaceAll(new RegExp("(\\{\\{(?:".concat(gws, ")*)(\\[?)").concat(fromName, "(\\]?)(?=[").concat(cws, "\\}])"), 'gms'), "$1$2".concat(resolvedHelperName, "$3"));
        return source;
    };
    // Rewrite the original source to be passed to final source map
    StatementsProcessor.prototype.renameAssetSources = function (source, assetData) {
        var e_1, _a, e_2, _b;
        if (!assetData || !assetData.assetTagData)
            return source;
        var resolvedPath = assetData.outputFilepath;
        var paths = assetData.assetTagData.paths;
        var tag = assetData.assetTagData.tagName;
        var attributes = sourceAttributesByTag[tag];
        try {
            for (var paths_1 = __values(paths), paths_1_1 = paths_1.next(); !paths_1_1.done; paths_1_1 = paths_1.next()) {
                var path_1 = paths_1_1.value;
                path_1 = path_1.trim();
                path_1 = path_1.replaceAll('.', '\\.');
                try {
                    for (var attributes_1 = (e_2 = void 0, __values(attributes)), attributes_1_1 = attributes_1.next(); !attributes_1_1.done; attributes_1_1 = attributes_1.next()) {
                        var attr = attributes_1_1.value;
                        source = source.replaceAll(new RegExp("\\b(".concat(attr, "(?:").concat(gws, ")*=(?:").concat(gws, ")*\"(?:").concat(gws, ")*[^\"]*?)(").concat(path_1, "\\b(,?))"), 'gms'), "$1".concat(resolvedPath, "$3"));
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (attributes_1_1 && !attributes_1_1.done && (_b = attributes_1.return)) _b.call(attributes_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (paths_1_1 && !paths_1_1.done && (_a = paths_1.return)) _a.call(paths_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return source;
    };
    StatementsProcessor.prototype.escapePathName = function (pathname) {
        var escapedName = pathname.replace(/^\.\//, '').replace(/^\//, '__').replaceAll(/\.\.\//g, '_').replaceAll(/\\|\//g, '--');
        return escapedName;
    };
    StatementsProcessor.ImportScanner = /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super.call(this) || this;
            _this.partials = new Set();
            _this.helpers = new Set();
            return _this;
        }
        class_1.prototype.PartialStatement = function (partial) {
            var _a;
            if (((_a = partial.name) === null || _a === void 0 ? void 0 : _a.type) === 'PathExpression') {
                this.partials.add(partial.name.original);
                return _super.prototype.PartialStatement.call(this, partial);
            }
            else {
                throw new Error('Dynamic partial resolution is not supported');
            }
        };
        class_1.prototype.MustacheStatement = function (mustache) {
            if (mustache.path.type === 'PathExpression') {
                var path_2 = mustache.path;
                this.helpers.add(path_2.original);
                return _super.prototype.MustacheStatement.call(this, mustache);
            }
            else {
                throw new Error('Dynamic helper resolution is not supported');
            }
        };
        return class_1;
    }(Handlebars.Visitor));
    return StatementsProcessor;
}());

var pluginOptions = { parse: parse };
var pluginOptionsKeys = [
    'helpers',
    'partials',
    'templateData',
];
var preCompileOptions = [
    'srcName',
    'destName'
];
var defaultHandlebarsOptions = {
    rootDir: process.cwd(),
    assets: {
        emit: true,
        resolve: true
    }
};
function getPluginOptions(handlebarsPluginOptions) {
    if (handlebarsPluginOptions === void 0) { handlebarsPluginOptions = {}; }
    if (!handlebarsPluginOptions || typeof handlebarsPluginOptions !== 'object') {
        handlebarsPluginOptions = {};
    }
    handlebarsPluginOptions = Object.assign({}, defaultHandlebarsOptions, handlebarsPluginOptions);
    if (!handlebarsPluginOptions.assets || typeof handlebarsPluginOptions.assets !== 'object') {
        handlebarsPluginOptions.assets = {};
    }
    // If neither assets.emit or assets.resolved are defined, always resolve and emit assets
    if (typeof handlebarsPluginOptions.assets.emit === 'undefined' &&
        typeof handlebarsPluginOptions.assets.resolve === 'undefined') {
        handlebarsPluginOptions.assets = Object.assign({}, defaultHandlebarsOptions.assets, handlebarsPluginOptions.assets);
    }
    // Always resolve assets if assets.emit is set to true
    if (handlebarsPluginOptions.assets.emit) {
        handlebarsPluginOptions.assets.resolve = true;
    }
    return handlebarsPluginOptions;
}
function parse(handlebarsPluginOptions) {
    var parsedOptions = {
        compileOptions: getCompileOptions(handlebarsPluginOptions),
        partials: getPartials(handlebarsPluginOptions.partials),
        helpers: getHelpers(handlebarsPluginOptions.helpers),
        templateData: getTemplateData(handlebarsPluginOptions.templateData),
        imports: [],
        helperModules: []
    };
    return parsedOptions;
}
function getCompileOptions(handlebarsPluginOptions) {
    var e_1, _a;
    var compileOptions = {};
    try {
        for (var _b = __values(Object.entries(handlebarsPluginOptions)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
            if (pluginOptionsKeys.includes(key) || preCompileOptions.includes(key))
                continue;
            compileOptions[key] = value;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return compileOptions;
}
function getPartials(optionsPartials) {
    var e_2, _a;
    var partials = [];
    if (typeof optionsPartials !== 'object') {
        return partials;
    }
    try {
        for (var _b = __values(Object.entries(optionsPartials)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var _d = __read(_c.value, 2), partial = _d[0], source = _d[1];
            if (typeof source === 'string') {
                partials.push([partial, source]);
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return partials;
}
function getHelpers(optionsHelpers) {
    var e_3, _a;
    var helpers = [];
    if (typeof optionsHelpers !== 'object') {
        return helpers;
    }
    try {
        for (var _b = __values(Object.entries(optionsHelpers)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var _d = __read(_c.value, 2), helper = _d[0], fn = _d[1];
            if (typeof fn === 'function') {
                helpers.push([helper, fn]);
            }
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_3) throw e_3.error; }
    }
    return helpers;
}
function getTemplateData(optionsTemplateData) {
    var tempalteData = {};
    if (typeof optionsTemplateData !== 'object')
        return tempalteData;
    tempalteData = optionsTemplateData;
    return tempalteData;
}

var HandlebarsCompiler = /** @class */ (function () {
    function HandlebarsCompiler(parsedOptions) {
        var _this = this;
        Object.entries(parsedOptions).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            _this[key] = value;
        });
    }
    HandlebarsCompiler.prototype.getCompiledPartials = function (file) {
        var e_1, _a;
        var extname = path.extname(file);
        var basename = path.basename(file, extname);
        var partials = this.partials.filter(function (_a) {
            var _b = __read(_a, 1), partial = _b[0];
            return partial !== basename;
        });
        var compiledPartials = [];
        try {
            for (var partials_1 = __values(partials), partials_1_1 = partials_1.next(); !partials_1_1.done; partials_1_1 = partials_1.next()) {
                var _b = __read(partials_1_1.value, 2), partial = _b[0], source = _b[1];
                var compiled = Handlebars.precompile(source, this.compileOptions);
                var compiledData = [partial, compiled];
                compiledPartials.push(compiledData);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (partials_1_1 && !partials_1_1.done && (_a = partials_1.return)) _a.call(partials_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return compiledPartials;
    };
    HandlebarsCompiler.prototype.getTemplateSpecs = function (file) {
        var extname = path.extname(file);
        var basename = path.basename(file, extname);
        var compiledTemplateData = this.partials.find(function (_a) {
            var _b = __read(_a, 1), partial = _b[0];
            return partial === basename;
        });
        if (!compiledTemplateData) {
            console.error('Error parsing template', file);
            return null;
        }
        var _a = __read(compiledTemplateData, 2); _a[0]; var compiledTemplate = _a[1];
        // Create a tree
        var tree = Handlebars.parse(compiledTemplate);
        var templateSpecs = Handlebars.precompile(tree, this.compileOptions);
        return templateSpecs;
    };
    // Compile handlebars file to ESM
    HandlebarsCompiler.prototype.compile = function (file) {
        var compiledPartials = this.getCompiledPartials(file);
        var code = this.getTemplateSpecs(file);
        // Import this (partial) template and nested templates
        var body = "\n\t\t\timport Handlebars from 'handlebars/runtime.js';\n\t\t\t".concat(this.imports.map(function (_a) {
            var _b = __read(_a, 2), moduleName = _b[0], importPath = _b[1];
            return "import ".concat(moduleName, " from '").concat(importPath, "'");
        }).join('\n'), "\n\t\t\t").concat(this.helpers.map(function (_a) {
            var _b = __read(_a, 2), helper = _b[0], fn = _b[1];
            return "Handlebars.registerHelper('".concat(helper, "', ").concat(fn, ");");
        }).join('\n'), "\n\t\t\t").concat(this.helperModules.map(function (_a) {
            var _b = __read(_a, 2), helper = _b[0], moduleName = _b[1];
            return "Handlebars.registerHelper('".concat(helper, "', ").concat(moduleName, ");");
        }).join('\n'), "\n\t\t\t").concat(compiledPartials.map(function (_a) {
            var _b = __read(_a, 2), partial = _b[0], compiled = _b[1];
            return "Handlebars.registerPartial('".concat(partial, "', Handlebars.template(").concat(compiled, "));");
        }).join('\n'), "\n\t\t\tconst template = Handlebars.template(").concat(code, ");\n\t\t\texport default (data, options) => {\n\t\t\t\tif (!data || typeof data !== 'object') {\n\t\t\t\t\tdata = {}\n\t\t\t\t}\n\t\t\t\tlet templateData = Object.assign({}, ").concat(JSON.stringify(this.templateData), ", data)\n\t\t\t\treturn template(templateData, options)\n\t\t\t};\n\t\t");
        // Format JS body before passing
        body = js_beautify(body);
        return { code: body };
    };
    return HandlebarsCompiler;
}());

var SourceMap = /** @class */ (function () {
    function SourceMap(map) {
        var _this = this;
        var sources = Array.from(map);
        sources.forEach(function (_a) {
            var _b = __read(_a, 2), filename = _b[0], source = _b[1];
            _this[filename] = source;
        });
    }
    SourceMap.prototype.getFiles = function (directory, extname) {
        var filepaths = Array.from(Object.keys(this));
        var absoluteFilepaths = filepaths.map(function (filepath) {
            var dir = path.dirname(filepath);
            var basename = path.basename(filepath);
            var name = "".concat(basename).concat(extname);
            var absoluteFilepath = path.join(dir, name);
            return path.join(directory, absoluteFilepath);
        });
        var uniqueFiles = __spreadArray([], __read(new Set(absoluteFilepaths)), false);
        return uniqueFiles;
    };
    SourceMap.prototype.getEntries = function () {
        var entries = Object.entries(this);
        return entries;
    };
    return SourceMap;
}());

var ImportsMap = /** @class */ (function () {
    function ImportsMap(paths) {
        var _this = this;
        var filepaths = Array.from(paths);
        filepaths.forEach(function (_a) {
            var _b = __read(_a, 2), escapedName = _b[0], absoluteFilepath = _b[1];
            var name = _this.camelizeFilepath(escapedName);
            var path = absoluteFilepath;
            var module = { name: name, path: path };
            _this[escapedName] = module;
        });
    }
    ImportsMap.prototype.camelizeFilepath = function (filepath) {
        var extname = path.extname(filepath);
        return filepath
            .replace(new RegExp("".concat(extname, "$")), '')
            .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
            return index === 0 ? word.toLowerCase() : word.toUpperCase();
        })
            .replace(/\W+/g, '');
    };
    ImportsMap.prototype.getImports = function () {
        var importsData = Object.entries(this);
        var imports = importsData.map(function (_a) {
            var _b = __read(_a, 2); _b[0]; var module = _b[1];
            return [module.name, module.path];
        });
        return imports;
    };
    ImportsMap.prototype.getHelperModules = function () {
        var importsData = Object.entries(this);
        var imports = importsData.map(function (_a) {
            var _b = __read(_a, 2), filepath = _b[0], module = _b[1];
            return [filepath, module.name];
        });
        return imports;
    };
    return ImportsMap;
}());

var HandlebarsTransformer = /** @class */ (function () {
    function HandlebarsTransformer(handlebarsPluginOptions, source, file) {
        if (handlebarsPluginOptions === void 0) { handlebarsPluginOptions = {}; }
        this.handlebarsPluginOptions = handlebarsPluginOptions;
        this.cache = new Map();
        this.files = [];
        this.source = StatementsProcessor.renameAllRootPathPartials(source);
        this.file = file;
        this.statementsProcessor = this.getStatementsProcessor();
    }
    HandlebarsTransformer.prototype.getWatchFiles = function (existingWatchFiles) {
        var files = new Set();
        this.files.forEach(function (file) {
            if (!existingWatchFiles.includes(file)) {
                files.add(file);
            }
        });
        return Array.from(files);
    };
    // Convert to ESM and register partial
    HandlebarsTransformer.prototype.transform = function () {
        var _a, _b, _c;
        var partialsSourceMap = new SourceMap(this.statementsProcessor.partials);
        var partialEntries = this.processPartialsSourceMap(this.source, partialsSourceMap);
        var importsMap = new ImportsMap(this.statementsProcessor.helpers);
        var imports = importsMap.getImports();
        var helperModules = importsMap.getHelperModules();
        var parsedOptions = pluginOptions.parse(this.handlebarsPluginOptions);
        (_a = parsedOptions.partials).push.apply(_a, __spreadArray([], __read(partialEntries), false));
        (_b = parsedOptions.imports).push.apply(_b, __spreadArray([], __read(imports), false));
        (_c = parsedOptions.helperModules).push.apply(_c, __spreadArray([], __read(helperModules), false));
        var compiler = new HandlebarsCompiler(parsedOptions);
        var data = compiler.compile(this.file);
        return data;
    };
    HandlebarsTransformer.prototype.getAssetsMap = function () {
        var assetsMap = this.statementsProcessor.assets;
        return assetsMap;
    };
    HandlebarsTransformer.prototype.getStatementsProcessor = function () {
        var name = path.basename(this.file);
        var statementsProcessor = new StatementsProcessor({
            name: name,
            source: this.source,
            rootFile: this.file
        }, this.handlebarsPluginOptions);
        return statementsProcessor;
    };
    HandlebarsTransformer.prototype.processPartialsSourceMap = function (file, sourceMap) {
        var dir = path.dirname(file);
        var extname = path.extname(file);
        this.files = sourceMap.getFiles(dir, extname);
        var partialEntries = sourceMap.getEntries();
        return partialEntries;
    };
    return HandlebarsTransformer;
}());

function handlebarsCompilerPlugin(handlebarsPluginOptions) {
    if (handlebarsPluginOptions === void 0) { handlebarsPluginOptions = {}; }
    var hbsTransformer;
    handlebarsPluginOptions = getPluginOptions(handlebarsPluginOptions);
    return {
        name: 'handlebars-compiler',
        transform: function (source, id) {
            var _this = this;
            if (/\.(hbs|handlebars)/.test(id)) {
                hbsTransformer = new HandlebarsTransformer(handlebarsPluginOptions, source, id);
                var output = hbsTransformer.transform();
                var existingWatchFiles = this.getWatchFiles();
                var watchFiles = hbsTransformer.getWatchFiles(existingWatchFiles);
                watchFiles.forEach(function (file) {
                    _this.addWatchFile(file);
                });
                return output;
            }
            return null;
        },
        renderStart: function () {
            var _this = this;
            if (!handlebarsPluginOptions.assets.emit || !hbsTransformer)
                return;
            var assetsMap = hbsTransformer.getAssetsMap();
            Array.from(assetsMap).forEach(function (_a) {
                var _b = __read(_a, 2); _b[0]; var assetData = _b[1];
                var outputFilepath = assetData.outputFilepath.replace(/^\//, '');
                _this.emitFile({
                    type: 'asset',
                    fileName: outputFilepath,
                    source: assetData.content
                });
            });
        }
    };
}

export { handlebarsCompilerPlugin as default };
