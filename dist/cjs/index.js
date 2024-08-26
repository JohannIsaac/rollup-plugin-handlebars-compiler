'use strict';

var path = require('path');
var fs = require('fs');
var Handlebars = require('handlebars');

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

var PartialsProcessor = /** @class */ (function () {
    function PartialsProcessor(handlebarsPluginOptions) {
        this.handlebarsPluginOptions = handlebarsPluginOptions;
    }
    PartialsProcessor.prototype.getSourceMap = function (templateData) {
        var map = this.getMap(templateData);
        var sourceMap = new SourceMap(map);
        return sourceMap;
    };
    // Recursive function for getting nested partials with pathname
    PartialsProcessor.prototype.getMap = function (templateData, sourceMap) {
        var _this = this;
        if (sourceMap === void 0) { sourceMap = new Map(); }
        // If partials are detected, process each partial
        var partials = this.getAllPartials(templateData.source);
        if (partials)
            partials.forEach(function (partialPath) { return _this.processPartial(partialPath, templateData, sourceMap); });
        // Add current template to source-map with re-written templateData.source
        // processPartial resolves partial instance paths for the templateData.source
        var extname = path.extname(templateData.name);
        var templateName = templateData.name.replace(new RegExp("".concat(extname, "$")), '');
        sourceMap.set(templateName, templateData.source);
        return sourceMap;
    };
    PartialsProcessor.prototype.getAllPartials = function (source) {
        var tree = Handlebars.parse(source);
        var scanner = new PartialsProcessor.ImportScanner();
        scanner.accept(tree);
        var partials = !!scanner.partials.size && scanner.partials;
        return partials;
    };
    // Process a partial then recursively process further nested partials
    PartialsProcessor.prototype.processPartial = function (partialPath, templateData, sourceMap) {
        // Skip if partial does not exist
        var partialSource = this.resolvePartialSource(partialPath, templateData);
        if (!partialSource)
            return;
        // Resolve the partial path relative to the root file
        var resolvedPartialPath = this.resolvePartialFilepath(partialPath, templateData);
        // Rewrite the original source to be passed to final source map
        templateData.source = this.renamePartialInstances(templateData.source, partialPath, resolvedPartialPath);
        // Get the nested partials
        var partialTemplateData = {
            name: resolvedPartialPath,
            source: partialSource,
            rootFile: templateData.rootFile
        };
        this.getMap(partialTemplateData, sourceMap);
    };
    // Process a partial then recursively process further nested partials
    PartialsProcessor.prototype.resolvePartialSource = function (partialPath, templateData) {
        // Check if partial name is already registered in handlebarsPluginOptions
        if (this.handlebarsPluginOptions.partials &&
            typeof this.handlebarsPluginOptions.partials === 'object' &&
            this.handlebarsPluginOptions.partials[partialPath]) {
            return;
        }
        var partialSource = this.getPartialSource(partialPath, templateData);
        return partialSource;
    };
    PartialsProcessor.prototype.getPartialSource = function (partialPath, templateData) {
        var rootFileDirectory = path.dirname(templateData.rootFile);
        var currentFilepath = templateData.name;
        var extname = path.extname(currentFilepath);
        var partialFilepath = path.normalize("".concat(partialPath).concat(extname));
        var relativeFileDirectory = path.dirname(currentFilepath);
        var relativePartialPath = path.join(relativeFileDirectory, partialFilepath);
        var partialAbsolutePath = path.resolve(rootFileDirectory, relativePartialPath);
        var partialSource;
        try {
            partialSource = fs.readFileSync(partialAbsolutePath, 'utf-8');
        }
        catch (e) {
            var fileWithError = path.join(rootFileDirectory, currentFilepath);
            console.error("\u001B[31mPartial \u001B[1m".concat(partialAbsolutePath, "\u001B[0m\u001B[31m does not exist\u001B[0m"));
            console.error("\t\u001B[2mError in ".concat(fileWithError, "\u001B[0m"));
        }
        return partialSource;
    };
    PartialsProcessor.prototype.resolvePartialFilepath = function (partialPath, templateData) {
        var extname = path.extname(templateData.name);
        var fileDirectory = path.dirname(templateData.name);
        var partialFilepath = path.normalize("".concat(partialPath).concat(extname));
        // Process partials with paths nested to the current filepath
        var nestedPartialFilePath = path.join(fileDirectory, partialFilepath).replaceAll('\\', '/');
        return nestedPartialFilePath;
    };
    // Rewrite the original source to be passed to final source map
    PartialsProcessor.prototype.renamePartialInstances = function (source, fromName, resolvedPartialPath) {
        var extname = path.extname(resolvedPartialPath);
        var resolvedPartialName = !extname ? resolvedPartialPath : resolvedPartialPath.replace(new RegExp("".concat(extname, "$")), '');
        source = source.replaceAll(new RegExp("(\\{\\{>(\\n|\\s)*)(".concat(fromName, ")"), 'g'), "$1".concat(resolvedPartialName, " "));
        return source;
    };
    PartialsProcessor.ImportScanner = /** @class */ (function (_super) {
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
        return class_1;
    }(Handlebars.Visitor));
    return PartialsProcessor;
}());

var pluginOptions = { parse: parse };
var pluginOptionsKeys = [
    'helpers',
    'partials',
    'templateData',
];
function parse(handlebarsPluginOptions) {
    var parsedOptions = {
        compileOptions: getCompileOptions(handlebarsPluginOptions),
        partials: getPartials(handlebarsPluginOptions.partials),
        helpers: getHelpers(handlebarsPluginOptions.helpers),
        templateData: getTemplateData(handlebarsPluginOptions.templateData)
    };
    return parsedOptions;
}
function getCompileOptions(handlebarsPluginOptions) {
    var e_1, _a;
    var compileOptions = {};
    try {
        for (var _b = __values(Object.entries(handlebarsPluginOptions)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
            if (pluginOptionsKeys.includes(key))
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
    HandlebarsCompiler.prototype.getCompiledPartials = function () {
        var e_1, _a;
        var compiledPartials = [];
        try {
            for (var _b = __values(this.partials), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), partial = _d[0], source = _d[1];
                var compiled = Handlebars.precompile(source, this.compileOptions);
                var compiledData = [partial, compiled];
                compiledPartials.push(compiledData);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return compiledPartials;
    };
    HandlebarsCompiler.prototype.getTemplateSpecs = function (file) {
        var extname = path.extname(file);
        var name = path.basename(file);
        var basename = path.basename(file, extname);
        var compiledTemplateData = this.partials.find(function (_a) {
            var _b = __read(_a, 1), partial = _b[0];
            return partial === basename;
        });
        if (!compiledTemplateData) {
            console.error('Error parsing template', file);
            return;
        }
        var _a = __read(compiledTemplateData, 2); _a[0]; var compiledTemplate = _a[1];
        // Create a tree
        var precompileOptions = Object.assign({}, this.compileOptions);
        precompileOptions.srcName = name;
        var tree = Handlebars.parse(compiledTemplate, { srcName: name });
        var templateSpecs = Handlebars.precompile(tree, precompileOptions);
        return templateSpecs;
    };
    // Compile handlebars file to ESM
    HandlebarsCompiler.prototype.compile = function (file) {
        var compiledPartials = this.getCompiledPartials();
        var helpers = this.helpers;
        var templateData = this.templateData;
        var _a = this.getTemplateSpecs(file), code = _a.code, map = _a.map;
        // Import this (partial) template and nested templates
        var body = "\n\t\t\timport Handlebars from 'handlebars/runtime.js';\n\t\t\tconst template = Handlebars.template(".concat(code, ");\n\t\t\t").concat(helpers.map(function (_a) {
            var _b = __read(_a, 2), helper = _b[0], fn = _b[1];
            return "Handlebars.registerHelper('".concat(helper, "', ").concat(fn, ");");
        }).join('\n'), "\n\t\t\t").concat(compiledPartials.map(function (_a) {
            var _b = __read(_a, 2), partial = _b[0], compiled = _b[1];
            return "Handlebars.registerPartial('".concat(partial, "', Handlebars.template(").concat(compiled, "));");
        }).join('\n'), "\n\t\t\texport default (data, options) => {\n\t\t\t\tif (!data || typeof data !== 'object') {\n\t\t\t\t\tdata = {}\n\t\t\t\t}\n\t\t\t\tlet templateData = Object.assign({}, ").concat(JSON.stringify(templateData), ", data)\n\t\t\t\treturn template(templateData, options)\n\t\t\t};\n\t\t");
        return { code: body, map: map };
    };
    return HandlebarsCompiler;
}());

var HandlebarsTransformer = /** @class */ (function () {
    function HandlebarsTransformer(handlebarsPluginOptions) {
        this.handlebarsPluginOptions = handlebarsPluginOptions;
        this.cache = new Map();
        this.files = [];
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
    HandlebarsTransformer.prototype.transform = function (source, file) {
        var _a;
        var partialsSourceMap = this.getPartialsSourceMap(source, file);
        var partialEntries = this.processPartialsSourceMap(source, partialsSourceMap);
        var parsedOptions = pluginOptions.parse(this.handlebarsPluginOptions);
        (_a = parsedOptions.partials).push.apply(_a, __spreadArray([], __read(partialEntries), false));
        var compiler = new HandlebarsCompiler(parsedOptions);
        var data = compiler.compile(file);
        return data;
    };
    HandlebarsTransformer.prototype.getPartialsSourceMap = function (source, file) {
        var name = path.basename(file);
        var partialsProcessor = new PartialsProcessor(this.handlebarsPluginOptions);
        var partialsSourceMap = partialsProcessor.getSourceMap({
            name: name,
            source: source,
            rootFile: file
        });
        return partialsSourceMap;
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
    var hbsTransformer = new HandlebarsTransformer(handlebarsPluginOptions);
    return {
        name: 'handlebars-compiler',
        transform: function (source, id) {
            var _this = this;
            if (/\.(hbs|handlebars)/.test(id)) {
                var output = hbsTransformer.transform(source, id);
                var existingWatchFiles = this.getWatchFiles();
                var watchFiles = hbsTransformer.getWatchFiles(existingWatchFiles);
                watchFiles.forEach(function (file) {
                    _this.addWatchFile(file);
                });
                return output;
            }
            return null;
        },
    };
}

module.exports = handlebarsCompilerPlugin;
