'use strict';

var fs = require('fs');
var path = require('path');

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

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function commonjsRequire(path) {
	throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}

var handlebars$1 = {exports: {}};

var handlebars_runtime = {exports: {}};

var base$1 = {};

var utils = {};

utils.__esModule = true;
utils.extend = extend;
utils.indexOf = indexOf;
utils.escapeExpression = escapeExpression;
utils.isEmpty = isEmpty;
utils.createFrame = createFrame;
utils.blockParams = blockParams;
utils.appendContextPath = appendContextPath;
var escape = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '`': '&#x60;',
  '=': '&#x3D;'
};

var badChars = /[&<>"'`=]/g,
    possible = /[&<>"'`=]/;

function escapeChar(chr) {
  return escape[chr];
}

function extend(obj /* , ...source */) {
  for (var i = 1; i < arguments.length; i++) {
    for (var key in arguments[i]) {
      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
        obj[key] = arguments[i][key];
      }
    }
  }

  return obj;
}

var toString = Object.prototype.toString;

utils.toString = toString;
// Sourced from lodash
// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
/* eslint-disable func-style */
var isFunction = function isFunction(value) {
  return typeof value === 'function';
};
// fallback for older versions of Chrome and Safari
/* istanbul ignore next */
if (isFunction(/x/)) {
  utils.isFunction = isFunction = function (value) {
    return typeof value === 'function' && toString.call(value) === '[object Function]';
  };
}
utils.isFunction = isFunction;

/* eslint-enable func-style */

/* istanbul ignore next */
var isArray = Array.isArray || function (value) {
  return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
};

utils.isArray = isArray;
// Older IE versions do not directly support indexOf so we must implement our own, sadly.

function indexOf(array, value) {
  for (var i = 0, len = array.length; i < len; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

function escapeExpression(string) {
  if (typeof string !== 'string') {
    // don't escape SafeStrings, since they're already safe
    if (string && string.toHTML) {
      return string.toHTML();
    } else if (string == null) {
      return '';
    } else if (!string) {
      return string + '';
    }

    // Force a string conversion as this will be done by the append regardless and
    // the regex test will do this transparently behind the scenes, causing issues if
    // an object's to string has escaped characters in it.
    string = '' + string;
  }

  if (!possible.test(string)) {
    return string;
  }
  return string.replace(badChars, escapeChar);
}

function isEmpty(value) {
  if (!value && value !== 0) {
    return true;
  } else if (isArray(value) && value.length === 0) {
    return true;
  } else {
    return false;
  }
}

function createFrame(object) {
  var frame = extend({}, object);
  frame._parent = object;
  return frame;
}

function blockParams(params, ids) {
  params.path = ids;
  return params;
}

function appendContextPath(contextPath, id) {
  return (contextPath ? contextPath + '.' : '') + id;
}

var exception = {exports: {}};

(function (module, exports) {

	exports.__esModule = true;
	var errorProps = ['description', 'fileName', 'lineNumber', 'endLineNumber', 'message', 'name', 'number', 'stack'];

	function Exception(message, node) {
	  var loc = node && node.loc,
	      line = undefined,
	      endLineNumber = undefined,
	      column = undefined,
	      endColumn = undefined;

	  if (loc) {
	    line = loc.start.line;
	    endLineNumber = loc.end.line;
	    column = loc.start.column;
	    endColumn = loc.end.column;

	    message += ' - ' + line + ':' + column;
	  }

	  var tmp = Error.prototype.constructor.call(this, message);

	  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
	  for (var idx = 0; idx < errorProps.length; idx++) {
	    this[errorProps[idx]] = tmp[errorProps[idx]];
	  }

	  /* istanbul ignore else */
	  if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, Exception);
	  }

	  try {
	    if (loc) {
	      this.lineNumber = line;
	      this.endLineNumber = endLineNumber;

	      // Work around issue under safari where we can't directly set the column value
	      /* istanbul ignore next */
	      if (Object.defineProperty) {
	        Object.defineProperty(this, 'column', {
	          value: column,
	          enumerable: true
	        });
	        Object.defineProperty(this, 'endColumn', {
	          value: endColumn,
	          enumerable: true
	        });
	      } else {
	        this.column = column;
	        this.endColumn = endColumn;
	      }
	    }
	  } catch (nop) {
	    /* Ignore if the browser is very particular */
	  }
	}

	Exception.prototype = new Error();

	exports['default'] = Exception;
	module.exports = exports['default'];
	
} (exception, exception.exports));

var exceptionExports = exception.exports;

var helpers$1 = {};

var blockHelperMissing = {exports: {}};

(function (module, exports) {

	exports.__esModule = true;

	var _utils = utils;

	exports['default'] = function (instance) {
	  instance.registerHelper('blockHelperMissing', function (context, options) {
	    var inverse = options.inverse,
	        fn = options.fn;

	    if (context === true) {
	      return fn(this);
	    } else if (context === false || context == null) {
	      return inverse(this);
	    } else if (_utils.isArray(context)) {
	      if (context.length > 0) {
	        if (options.ids) {
	          options.ids = [options.name];
	        }

	        return instance.helpers.each(context, options);
	      } else {
	        return inverse(this);
	      }
	    } else {
	      if (options.data && options.ids) {
	        var data = _utils.createFrame(options.data);
	        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
	        options = { data: data };
	      }

	      return fn(context, options);
	    }
	  });
	};

	module.exports = exports['default'];
	
} (blockHelperMissing, blockHelperMissing.exports));

var blockHelperMissingExports = blockHelperMissing.exports;

var each = {exports: {}};

(function (module, exports) {

	exports.__esModule = true;
	// istanbul ignore next

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utils = utils;

	var _exception = exceptionExports;

	var _exception2 = _interopRequireDefault(_exception);

	exports['default'] = function (instance) {
	  instance.registerHelper('each', function (context, options) {
	    if (!options) {
	      throw new _exception2['default']('Must pass iterator to #each');
	    }

	    var fn = options.fn,
	        inverse = options.inverse,
	        i = 0,
	        ret = '',
	        data = undefined,
	        contextPath = undefined;

	    if (options.data && options.ids) {
	      contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
	    }

	    if (_utils.isFunction(context)) {
	      context = context.call(this);
	    }

	    if (options.data) {
	      data = _utils.createFrame(options.data);
	    }

	    function execIteration(field, index, last) {
	      if (data) {
	        data.key = field;
	        data.index = index;
	        data.first = index === 0;
	        data.last = !!last;

	        if (contextPath) {
	          data.contextPath = contextPath + field;
	        }
	      }

	      ret = ret + fn(context[field], {
	        data: data,
	        blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
	      });
	    }

	    if (context && typeof context === 'object') {
	      if (_utils.isArray(context)) {
	        for (var j = context.length; i < j; i++) {
	          if (i in context) {
	            execIteration(i, i, i === context.length - 1);
	          }
	        }
	      } else if (typeof Symbol === 'function' && context[Symbol.iterator]) {
	        var newContext = [];
	        var iterator = context[Symbol.iterator]();
	        for (var it = iterator.next(); !it.done; it = iterator.next()) {
	          newContext.push(it.value);
	        }
	        context = newContext;
	        for (var j = context.length; i < j; i++) {
	          execIteration(i, i, i === context.length - 1);
	        }
	      } else {
	        (function () {
	          var priorKey = undefined;

	          Object.keys(context).forEach(function (key) {
	            // We're running the iterations one step out of sync so we can detect
	            // the last iteration without have to scan the object twice and create
	            // an itermediate keys array.
	            if (priorKey !== undefined) {
	              execIteration(priorKey, i - 1);
	            }
	            priorKey = key;
	            i++;
	          });
	          if (priorKey !== undefined) {
	            execIteration(priorKey, i - 1, true);
	          }
	        })();
	      }
	    }

	    if (i === 0) {
	      ret = inverse(this);
	    }

	    return ret;
	  });
	};

	module.exports = exports['default'];
	
} (each, each.exports));

var eachExports = each.exports;

var helperMissing = {exports: {}};

(function (module, exports) {

	exports.__esModule = true;
	// istanbul ignore next

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _exception = exceptionExports;

	var _exception2 = _interopRequireDefault(_exception);

	exports['default'] = function (instance) {
	  instance.registerHelper('helperMissing', function () /* [args, ]options */{
	    if (arguments.length === 1) {
	      // A missing field in a {{foo}} construct.
	      return undefined;
	    } else {
	      // Someone is actually trying to call something, blow up.
	      throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
	    }
	  });
	};

	module.exports = exports['default'];
	
} (helperMissing, helperMissing.exports));

var helperMissingExports = helperMissing.exports;

var _if = {exports: {}};

(function (module, exports) {

	exports.__esModule = true;
	// istanbul ignore next

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utils = utils;

	var _exception = exceptionExports;

	var _exception2 = _interopRequireDefault(_exception);

	exports['default'] = function (instance) {
	  instance.registerHelper('if', function (conditional, options) {
	    if (arguments.length != 2) {
	      throw new _exception2['default']('#if requires exactly one argument');
	    }
	    if (_utils.isFunction(conditional)) {
	      conditional = conditional.call(this);
	    }

	    // Default behavior is to render the positive path if the value is truthy and not empty.
	    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
	    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
	    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
	      return options.inverse(this);
	    } else {
	      return options.fn(this);
	    }
	  });

	  instance.registerHelper('unless', function (conditional, options) {
	    if (arguments.length != 2) {
	      throw new _exception2['default']('#unless requires exactly one argument');
	    }
	    return instance.helpers['if'].call(this, conditional, {
	      fn: options.inverse,
	      inverse: options.fn,
	      hash: options.hash
	    });
	  });
	};

	module.exports = exports['default'];
	
} (_if, _if.exports));

var _ifExports = _if.exports;

var log$1 = {exports: {}};

(function (module, exports) {

	exports.__esModule = true;

	exports['default'] = function (instance) {
	  instance.registerHelper('log', function () /* message, options */{
	    var args = [undefined],
	        options = arguments[arguments.length - 1];
	    for (var i = 0; i < arguments.length - 1; i++) {
	      args.push(arguments[i]);
	    }

	    var level = 1;
	    if (options.hash.level != null) {
	      level = options.hash.level;
	    } else if (options.data && options.data.level != null) {
	      level = options.data.level;
	    }
	    args[0] = level;

	    instance.log.apply(instance, args);
	  });
	};

	module.exports = exports['default'];
	
} (log$1, log$1.exports));

var logExports = log$1.exports;

var lookup = {exports: {}};

(function (module, exports) {

	exports.__esModule = true;

	exports['default'] = function (instance) {
	  instance.registerHelper('lookup', function (obj, field, options) {
	    if (!obj) {
	      // Note for 5.0: Change to "obj == null" in 5.0
	      return obj;
	    }
	    return options.lookupProperty(obj, field);
	  });
	};

	module.exports = exports['default'];
	
} (lookup, lookup.exports));

var lookupExports = lookup.exports;

var _with = {exports: {}};

(function (module, exports) {

	exports.__esModule = true;
	// istanbul ignore next

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utils = utils;

	var _exception = exceptionExports;

	var _exception2 = _interopRequireDefault(_exception);

	exports['default'] = function (instance) {
	  instance.registerHelper('with', function (context, options) {
	    if (arguments.length != 2) {
	      throw new _exception2['default']('#with requires exactly one argument');
	    }
	    if (_utils.isFunction(context)) {
	      context = context.call(this);
	    }

	    var fn = options.fn;

	    if (!_utils.isEmpty(context)) {
	      var data = options.data;
	      if (options.data && options.ids) {
	        data = _utils.createFrame(options.data);
	        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
	      }

	      return fn(context, {
	        data: data,
	        blockParams: _utils.blockParams([context], [data && data.contextPath])
	      });
	    } else {
	      return options.inverse(this);
	    }
	  });
	};

	module.exports = exports['default'];
	
} (_with, _with.exports));

var _withExports = _with.exports;

helpers$1.__esModule = true;
helpers$1.registerDefaultHelpers = registerDefaultHelpers;
helpers$1.moveHelperToHooks = moveHelperToHooks;
// istanbul ignore next

function _interopRequireDefault$8(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersBlockHelperMissing = blockHelperMissingExports;

var _helpersBlockHelperMissing2 = _interopRequireDefault$8(_helpersBlockHelperMissing);

var _helpersEach = eachExports;

var _helpersEach2 = _interopRequireDefault$8(_helpersEach);

var _helpersHelperMissing = helperMissingExports;

var _helpersHelperMissing2 = _interopRequireDefault$8(_helpersHelperMissing);

var _helpersIf = _ifExports;

var _helpersIf2 = _interopRequireDefault$8(_helpersIf);

var _helpersLog = logExports;

var _helpersLog2 = _interopRequireDefault$8(_helpersLog);

var _helpersLookup = lookupExports;

var _helpersLookup2 = _interopRequireDefault$8(_helpersLookup);

var _helpersWith = _withExports;

var _helpersWith2 = _interopRequireDefault$8(_helpersWith);

function registerDefaultHelpers(instance) {
  _helpersBlockHelperMissing2['default'](instance);
  _helpersEach2['default'](instance);
  _helpersHelperMissing2['default'](instance);
  _helpersIf2['default'](instance);
  _helpersLog2['default'](instance);
  _helpersLookup2['default'](instance);
  _helpersWith2['default'](instance);
}

function moveHelperToHooks(instance, helperName, keepHelper) {
  if (instance.helpers[helperName]) {
    instance.hooks[helperName] = instance.helpers[helperName];
    if (!keepHelper) {
      delete instance.helpers[helperName];
    }
  }
}

var decorators = {};

var inline = {exports: {}};

(function (module, exports) {

	exports.__esModule = true;

	var _utils = utils;

	exports['default'] = function (instance) {
	  instance.registerDecorator('inline', function (fn, props, container, options) {
	    var ret = fn;
	    if (!props.partials) {
	      props.partials = {};
	      ret = function (context, options) {
	        // Create a new partials stack frame prior to exec.
	        var original = container.partials;
	        container.partials = _utils.extend({}, original, props.partials);
	        var ret = fn(context, options);
	        container.partials = original;
	        return ret;
	      };
	    }

	    props.partials[options.args[0]] = options.fn;

	    return ret;
	  });
	};

	module.exports = exports['default'];
	
} (inline, inline.exports));

var inlineExports = inline.exports;

decorators.__esModule = true;
decorators.registerDefaultDecorators = registerDefaultDecorators;
// istanbul ignore next

function _interopRequireDefault$7(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _decoratorsInline = inlineExports;

var _decoratorsInline2 = _interopRequireDefault$7(_decoratorsInline);

function registerDefaultDecorators(instance) {
  _decoratorsInline2['default'](instance);
}

var logger = {exports: {}};

(function (module, exports) {

	exports.__esModule = true;

	var _utils = utils;

	var logger = {
	  methodMap: ['debug', 'info', 'warn', 'error'],
	  level: 'info',

	  // Maps a given level value to the `methodMap` indexes above.
	  lookupLevel: function lookupLevel(level) {
	    if (typeof level === 'string') {
	      var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
	      if (levelMap >= 0) {
	        level = levelMap;
	      } else {
	        level = parseInt(level, 10);
	      }
	    }

	    return level;
	  },

	  // Can be overridden in the host environment
	  log: function log(level) {
	    level = logger.lookupLevel(level);

	    if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
	      var method = logger.methodMap[level];
	      // eslint-disable-next-line no-console
	      if (!console[method]) {
	        method = 'log';
	      }

	      for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        message[_key - 1] = arguments[_key];
	      }

	      console[method].apply(console, message); // eslint-disable-line no-console
	    }
	  }
	};

	exports['default'] = logger;
	module.exports = exports['default'];
	
} (logger, logger.exports));

var loggerExports = logger.exports;

var protoAccess = {};

var createNewLookupObject$1 = {};

createNewLookupObject$1.__esModule = true;
createNewLookupObject$1.createNewLookupObject = createNewLookupObject;

var _utils$4 = utils;

/**
 * Create a new object with "null"-prototype to avoid truthy results on prototype properties.
 * The resulting object can be used with "object[property]" to check if a property exists
 * @param {...object} sources a varargs parameter of source objects that will be merged
 * @returns {object}
 */

function createNewLookupObject() {
  for (var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++) {
    sources[_key] = arguments[_key];
  }

  return _utils$4.extend.apply(undefined, [Object.create(null)].concat(sources));
}

protoAccess.__esModule = true;
protoAccess.createProtoAccessControl = createProtoAccessControl;
protoAccess.resultIsAllowed = resultIsAllowed;
protoAccess.resetLoggedProperties = resetLoggedProperties;
// istanbul ignore next

function _interopRequireDefault$6(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _createNewLookupObject = createNewLookupObject$1;

var _logger$1 = loggerExports;

var _logger2$1 = _interopRequireDefault$6(_logger$1);

var loggedProperties = Object.create(null);

function createProtoAccessControl(runtimeOptions) {
  var defaultMethodWhiteList = Object.create(null);
  defaultMethodWhiteList['constructor'] = false;
  defaultMethodWhiteList['__defineGetter__'] = false;
  defaultMethodWhiteList['__defineSetter__'] = false;
  defaultMethodWhiteList['__lookupGetter__'] = false;

  var defaultPropertyWhiteList = Object.create(null);
  // eslint-disable-next-line no-proto
  defaultPropertyWhiteList['__proto__'] = false;

  return {
    properties: {
      whitelist: _createNewLookupObject.createNewLookupObject(defaultPropertyWhiteList, runtimeOptions.allowedProtoProperties),
      defaultValue: runtimeOptions.allowProtoPropertiesByDefault
    },
    methods: {
      whitelist: _createNewLookupObject.createNewLookupObject(defaultMethodWhiteList, runtimeOptions.allowedProtoMethods),
      defaultValue: runtimeOptions.allowProtoMethodsByDefault
    }
  };
}

function resultIsAllowed(result, protoAccessControl, propertyName) {
  if (typeof result === 'function') {
    return checkWhiteList(protoAccessControl.methods, propertyName);
  } else {
    return checkWhiteList(protoAccessControl.properties, propertyName);
  }
}

function checkWhiteList(protoAccessControlForType, propertyName) {
  if (protoAccessControlForType.whitelist[propertyName] !== undefined) {
    return protoAccessControlForType.whitelist[propertyName] === true;
  }
  if (protoAccessControlForType.defaultValue !== undefined) {
    return protoAccessControlForType.defaultValue;
  }
  logUnexpecedPropertyAccessOnce(propertyName);
  return false;
}

function logUnexpecedPropertyAccessOnce(propertyName) {
  if (loggedProperties[propertyName] !== true) {
    loggedProperties[propertyName] = true;
    _logger2$1['default'].log('error', 'Handlebars: Access has been denied to resolve the property "' + propertyName + '" because it is not an "own property" of its parent.\n' + 'You can add a runtime option to disable the check or this warning:\n' + 'See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details');
  }
}

function resetLoggedProperties() {
  Object.keys(loggedProperties).forEach(function (propertyName) {
    delete loggedProperties[propertyName];
  });
}

base$1.__esModule = true;
base$1.HandlebarsEnvironment = HandlebarsEnvironment;
// istanbul ignore next

function _interopRequireDefault$5(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utils$3 = utils;

var _exception$3 = exceptionExports;

var _exception2$3 = _interopRequireDefault$5(_exception$3);

var _helpers$2 = helpers$1;

var _decorators = decorators;

var _logger = loggerExports;

var _logger2 = _interopRequireDefault$5(_logger);

var _internalProtoAccess$1 = protoAccess;

var VERSION = '4.7.8';
base$1.VERSION = VERSION;
var COMPILER_REVISION = 8;
base$1.COMPILER_REVISION = COMPILER_REVISION;
var LAST_COMPATIBLE_COMPILER_REVISION = 7;

base$1.LAST_COMPATIBLE_COMPILER_REVISION = LAST_COMPATIBLE_COMPILER_REVISION;
var REVISION_CHANGES = {
  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
  2: '== 1.0.0-rc.3',
  3: '== 1.0.0-rc.4',
  4: '== 1.x.x',
  5: '== 2.0.0-alpha.x',
  6: '>= 2.0.0-beta.1',
  7: '>= 4.0.0 <4.3.0',
  8: '>= 4.3.0'
};

base$1.REVISION_CHANGES = REVISION_CHANGES;
var objectType = '[object Object]';

function HandlebarsEnvironment(helpers, partials, decorators) {
  this.helpers = helpers || {};
  this.partials = partials || {};
  this.decorators = decorators || {};

  _helpers$2.registerDefaultHelpers(this);
  _decorators.registerDefaultDecorators(this);
}

HandlebarsEnvironment.prototype = {
  constructor: HandlebarsEnvironment,

  logger: _logger2['default'],
  log: _logger2['default'].log,

  registerHelper: function registerHelper(name, fn) {
    if (_utils$3.toString.call(name) === objectType) {
      if (fn) {
        throw new _exception2$3['default']('Arg not supported with multiple helpers');
      }
      _utils$3.extend(this.helpers, name);
    } else {
      this.helpers[name] = fn;
    }
  },
  unregisterHelper: function unregisterHelper(name) {
    delete this.helpers[name];
  },

  registerPartial: function registerPartial(name, partial) {
    if (_utils$3.toString.call(name) === objectType) {
      _utils$3.extend(this.partials, name);
    } else {
      if (typeof partial === 'undefined') {
        throw new _exception2$3['default']('Attempting to register a partial called "' + name + '" as undefined');
      }
      this.partials[name] = partial;
    }
  },
  unregisterPartial: function unregisterPartial(name) {
    delete this.partials[name];
  },

  registerDecorator: function registerDecorator(name, fn) {
    if (_utils$3.toString.call(name) === objectType) {
      if (fn) {
        throw new _exception2$3['default']('Arg not supported with multiple decorators');
      }
      _utils$3.extend(this.decorators, name);
    } else {
      this.decorators[name] = fn;
    }
  },
  unregisterDecorator: function unregisterDecorator(name) {
    delete this.decorators[name];
  },
  /**
   * Reset the memory of illegal property accesses that have already been logged.
   * @deprecated should only be used in handlebars test-cases
   */
  resetLoggedPropertyAccesses: function resetLoggedPropertyAccesses() {
    _internalProtoAccess$1.resetLoggedProperties();
  }
};

var log = _logger2['default'].log;

base$1.log = log;
base$1.createFrame = _utils$3.createFrame;
base$1.logger = _logger2['default'];

var safeString = {exports: {}};

(function (module, exports) {

	exports.__esModule = true;
	function SafeString(string) {
	  this.string = string;
	}

	SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
	  return '' + this.string;
	};

	exports['default'] = SafeString;
	module.exports = exports['default'];
	
} (safeString, safeString.exports));

var safeStringExports = safeString.exports;

var runtime = {};

var wrapHelper$1 = {};

wrapHelper$1.__esModule = true;
wrapHelper$1.wrapHelper = wrapHelper;

function wrapHelper(helper, transformOptionsFn) {
  if (typeof helper !== 'function') {
    // This should not happen, but apparently it does in https://github.com/wycats/handlebars.js/issues/1639
    // We try to make the wrapper least-invasive by not wrapping it, if the helper is not a function.
    return helper;
  }
  var wrapper = function wrapper() /* dynamic arguments */{
    var options = arguments[arguments.length - 1];
    arguments[arguments.length - 1] = transformOptionsFn(options);
    return helper.apply(this, arguments);
  };
  return wrapper;
}

runtime.__esModule = true;
runtime.checkRevision = checkRevision;
runtime.template = template;
runtime.wrapProgram = wrapProgram;
runtime.resolvePartial = resolvePartial;
runtime.invokePartial = invokePartial;
runtime.noop = noop;
// istanbul ignore next

function _interopRequireDefault$4(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// istanbul ignore next

function _interopRequireWildcard$1(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _utils$2 = utils;

var Utils = _interopRequireWildcard$1(_utils$2);

var _exception$2 = exceptionExports;

var _exception2$2 = _interopRequireDefault$4(_exception$2);

var _base = base$1;

var _helpers$1 = helpers$1;

var _internalWrapHelper = wrapHelper$1;

var _internalProtoAccess = protoAccess;

function checkRevision(compilerInfo) {
  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
      currentRevision = _base.COMPILER_REVISION;

  if (compilerRevision >= _base.LAST_COMPATIBLE_COMPILER_REVISION && compilerRevision <= _base.COMPILER_REVISION) {
    return;
  }

  if (compilerRevision < _base.LAST_COMPATIBLE_COMPILER_REVISION) {
    var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
        compilerVersions = _base.REVISION_CHANGES[compilerRevision];
    throw new _exception2$2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
  } else {
    // Use the embedded version info since the runtime doesn't know about this revision yet
    throw new _exception2$2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
  }
}

function template(templateSpec, env) {
  /* istanbul ignore next */
  if (!env) {
    throw new _exception2$2['default']('No environment passed to template');
  }
  if (!templateSpec || !templateSpec.main) {
    throw new _exception2$2['default']('Unknown template object: ' + typeof templateSpec);
  }

  templateSpec.main.decorator = templateSpec.main_d;

  // Note: Using env.VM references rather than local var references throughout this section to allow
  // for external users to override these as pseudo-supported APIs.
  env.VM.checkRevision(templateSpec.compiler);

  // backwards compatibility for precompiled templates with compiler-version 7 (<4.3.0)
  var templateWasPrecompiledWithCompilerV7 = templateSpec.compiler && templateSpec.compiler[0] === 7;

  function invokePartialWrapper(partial, context, options) {
    if (options.hash) {
      context = Utils.extend({}, context, options.hash);
      if (options.ids) {
        options.ids[0] = true;
      }
    }
    partial = env.VM.resolvePartial.call(this, partial, context, options);

    var extendedOptions = Utils.extend({}, options, {
      hooks: this.hooks,
      protoAccessControl: this.protoAccessControl
    });

    var result = env.VM.invokePartial.call(this, partial, context, extendedOptions);

    if (result == null && env.compile) {
      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
      result = options.partials[options.name](context, extendedOptions);
    }
    if (result != null) {
      if (options.indent) {
        var lines = result.split('\n');
        for (var i = 0, l = lines.length; i < l; i++) {
          if (!lines[i] && i + 1 === l) {
            break;
          }

          lines[i] = options.indent + lines[i];
        }
        result = lines.join('\n');
      }
      return result;
    } else {
      throw new _exception2$2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
    }
  }

  // Just add water
  var container = {
    strict: function strict(obj, name, loc) {
      if (!obj || !(name in obj)) {
        throw new _exception2$2['default']('"' + name + '" not defined in ' + obj, {
          loc: loc
        });
      }
      return container.lookupProperty(obj, name);
    },
    lookupProperty: function lookupProperty(parent, propertyName) {
      var result = parent[propertyName];
      if (result == null) {
        return result;
      }
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return result;
      }

      if (_internalProtoAccess.resultIsAllowed(result, container.protoAccessControl, propertyName)) {
        return result;
      }
      return undefined;
    },
    lookup: function lookup(depths, name) {
      var len = depths.length;
      for (var i = 0; i < len; i++) {
        var result = depths[i] && container.lookupProperty(depths[i], name);
        if (result != null) {
          return depths[i][name];
        }
      }
    },
    lambda: function lambda(current, context) {
      return typeof current === 'function' ? current.call(context) : current;
    },

    escapeExpression: Utils.escapeExpression,
    invokePartial: invokePartialWrapper,

    fn: function fn(i) {
      var ret = templateSpec[i];
      ret.decorator = templateSpec[i + '_d'];
      return ret;
    },

    programs: [],
    program: function program(i, data, declaredBlockParams, blockParams, depths) {
      var programWrapper = this.programs[i],
          fn = this.fn(i);
      if (data || depths || blockParams || declaredBlockParams) {
        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
      } else if (!programWrapper) {
        programWrapper = this.programs[i] = wrapProgram(this, i, fn);
      }
      return programWrapper;
    },

    data: function data(value, depth) {
      while (value && depth--) {
        value = value._parent;
      }
      return value;
    },
    mergeIfNeeded: function mergeIfNeeded(param, common) {
      var obj = param || common;

      if (param && common && param !== common) {
        obj = Utils.extend({}, common, param);
      }

      return obj;
    },
    // An empty object to use as replacement for null-contexts
    nullContext: Object.seal({}),

    noop: env.VM.noop,
    compilerInfo: templateSpec.compiler
  };

  function ret(context) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var data = options.data;

    ret._setup(options);
    if (!options.partial && templateSpec.useData) {
      data = initData(context, data);
    }
    var depths = undefined,
        blockParams = templateSpec.useBlockParams ? [] : undefined;
    if (templateSpec.useDepths) {
      if (options.depths) {
        depths = context != options.depths[0] ? [context].concat(options.depths) : options.depths;
      } else {
        depths = [context];
      }
    }

    function main(context /*, options*/) {
      return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
    }

    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
    return main(context, options);
  }

  ret.isTop = true;

  ret._setup = function (options) {
    if (!options.partial) {
      var mergedHelpers = Utils.extend({}, env.helpers, options.helpers);
      wrapHelpersToPassLookupProperty(mergedHelpers, container);
      container.helpers = mergedHelpers;

      if (templateSpec.usePartial) {
        // Use mergeIfNeeded here to prevent compiling global partials multiple times
        container.partials = container.mergeIfNeeded(options.partials, env.partials);
      }
      if (templateSpec.usePartial || templateSpec.useDecorators) {
        container.decorators = Utils.extend({}, env.decorators, options.decorators);
      }

      container.hooks = {};
      container.protoAccessControl = _internalProtoAccess.createProtoAccessControl(options);

      var keepHelperInHelpers = options.allowCallsToHelperMissing || templateWasPrecompiledWithCompilerV7;
      _helpers$1.moveHelperToHooks(container, 'helperMissing', keepHelperInHelpers);
      _helpers$1.moveHelperToHooks(container, 'blockHelperMissing', keepHelperInHelpers);
    } else {
      container.protoAccessControl = options.protoAccessControl; // internal option
      container.helpers = options.helpers;
      container.partials = options.partials;
      container.decorators = options.decorators;
      container.hooks = options.hooks;
    }
  };

  ret._child = function (i, data, blockParams, depths) {
    if (templateSpec.useBlockParams && !blockParams) {
      throw new _exception2$2['default']('must pass block params');
    }
    if (templateSpec.useDepths && !depths) {
      throw new _exception2$2['default']('must pass parent depths');
    }

    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
  };
  return ret;
}

function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
  function prog(context) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var currentDepths = depths;
    if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) {
      currentDepths = [context].concat(depths);
    }

    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
  }

  prog = executeDecorators(fn, prog, container, depths, data, blockParams);

  prog.program = i;
  prog.depth = depths ? depths.length : 0;
  prog.blockParams = declaredBlockParams || 0;
  return prog;
}

/**
 * This is currently part of the official API, therefore implementation details should not be changed.
 */

function resolvePartial(partial, context, options) {
  if (!partial) {
    if (options.name === '@partial-block') {
      partial = options.data['partial-block'];
    } else {
      partial = options.partials[options.name];
    }
  } else if (!partial.call && !options.name) {
    // This is a dynamic partial that returned a string
    options.name = partial;
    partial = options.partials[partial];
  }
  return partial;
}

function invokePartial(partial, context, options) {
  // Use the current closure context to save the partial-block if this partial
  var currentPartialBlock = options.data && options.data['partial-block'];
  options.partial = true;
  if (options.ids) {
    options.data.contextPath = options.ids[0] || options.data.contextPath;
  }

  var partialBlock = undefined;
  if (options.fn && options.fn !== noop) {
    (function () {
      options.data = _base.createFrame(options.data);
      // Wrapper function to get access to currentPartialBlock from the closure
      var fn = options.fn;
      partialBlock = options.data['partial-block'] = function partialBlockWrapper(context) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        // Restore the partial-block from the closure for the execution of the block
        // i.e. the part inside the block of the partial call.
        options.data = _base.createFrame(options.data);
        options.data['partial-block'] = currentPartialBlock;
        return fn(context, options);
      };
      if (fn.partials) {
        options.partials = Utils.extend({}, options.partials, fn.partials);
      }
    })();
  }

  if (partial === undefined && partialBlock) {
    partial = partialBlock;
  }

  if (partial === undefined) {
    throw new _exception2$2['default']('The partial ' + options.name + ' could not be found');
  } else if (partial instanceof Function) {
    return partial(context, options);
  }
}

function noop() {
  return '';
}

function initData(context, data) {
  if (!data || !('root' in data)) {
    data = data ? _base.createFrame(data) : {};
    data.root = context;
  }
  return data;
}

function executeDecorators(fn, prog, container, depths, data, blockParams) {
  if (fn.decorator) {
    var props = {};
    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
    Utils.extend(prog, props);
  }
  return prog;
}

function wrapHelpersToPassLookupProperty(mergedHelpers, container) {
  Object.keys(mergedHelpers).forEach(function (helperName) {
    var helper = mergedHelpers[helperName];
    mergedHelpers[helperName] = passLookupPropertyOption(helper, container);
  });
}

function passLookupPropertyOption(helper, container) {
  var lookupProperty = container.lookupProperty;
  return _internalWrapHelper.wrapHelper(helper, function (options) {
    return Utils.extend({ lookupProperty: lookupProperty }, options);
  });
}

var noConflict = {exports: {}};

/* global globalThis */

(function (module, exports) {

	exports.__esModule = true;

	exports['default'] = function (Handlebars) {
	  /* istanbul ignore next */
	  // https://mathiasbynens.be/notes/globalthis
	  (function () {
	    if (typeof globalThis === 'object') return;
	    Object.prototype.__defineGetter__('__magic__', function () {
	      return this;
	    });
	    __magic__.globalThis = __magic__; // eslint-disable-line no-undef
	    delete Object.prototype.__magic__;
	  })();

	  var $Handlebars = globalThis.Handlebars;

	  /* istanbul ignore next */
	  Handlebars.noConflict = function () {
	    if (globalThis.Handlebars === Handlebars) {
	      globalThis.Handlebars = $Handlebars;
	    }
	    return Handlebars;
	  };
	};

	module.exports = exports['default'];
	
} (noConflict, noConflict.exports));

var noConflictExports = noConflict.exports;

(function (module, exports) {

	exports.__esModule = true;
	// istanbul ignore next

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	// istanbul ignore next

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	var _handlebarsBase = base$1;

	var base = _interopRequireWildcard(_handlebarsBase);

	// Each of these augment the Handlebars object. No need to setup here.
	// (This is done to easily share code between commonjs and browse envs)

	var _handlebarsSafeString = safeStringExports;

	var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);

	var _handlebarsException = exceptionExports;

	var _handlebarsException2 = _interopRequireDefault(_handlebarsException);

	var _handlebarsUtils = utils;

	var Utils = _interopRequireWildcard(_handlebarsUtils);

	var _handlebarsRuntime = runtime;

	var runtime$1 = _interopRequireWildcard(_handlebarsRuntime);

	var _handlebarsNoConflict = noConflictExports;

	var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

	// For compatibility and usage outside of module systems, make the Handlebars object a namespace
	function create() {
	  var hb = new base.HandlebarsEnvironment();

	  Utils.extend(hb, base);
	  hb.SafeString = _handlebarsSafeString2['default'];
	  hb.Exception = _handlebarsException2['default'];
	  hb.Utils = Utils;
	  hb.escapeExpression = Utils.escapeExpression;

	  hb.VM = runtime$1;
	  hb.template = function (spec) {
	    return runtime$1.template(spec, hb);
	  };

	  return hb;
	}

	var inst = create();
	inst.create = create;

	_handlebarsNoConflict2['default'](inst);

	inst['default'] = inst;

	exports['default'] = inst;
	module.exports = exports['default'];
	
} (handlebars_runtime, handlebars_runtime.exports));

var handlebars_runtimeExports = handlebars_runtime.exports;

var ast = {exports: {}};

(function (module, exports) {

	exports.__esModule = true;
	var AST = {
	  // Public API used to evaluate derived attributes regarding AST nodes
	  helpers: {
	    // a mustache is definitely a helper if:
	    // * it is an eligible helper, and
	    // * it has at least one parameter or hash segment
	    helperExpression: function helperExpression(node) {
	      return node.type === 'SubExpression' || (node.type === 'MustacheStatement' || node.type === 'BlockStatement') && !!(node.params && node.params.length || node.hash);
	    },

	    scopedId: function scopedId(path) {
	      return (/^\.|this\b/.test(path.original)
	      );
	    },

	    // an ID is simple if it only has one part, and that part is not
	    // `..` or `this`.
	    simpleId: function simpleId(path) {
	      return path.parts.length === 1 && !AST.helpers.scopedId(path) && !path.depth;
	    }
	  }
	};

	// Must be exported as an object rather than the root of the module as the jison lexer
	// must modify the object to operate properly.
	exports['default'] = AST;
	module.exports = exports['default'];
	
} (ast, ast.exports));

var astExports = ast.exports;

var base = {};

var parser = {exports: {}};

(function (module, exports) {

	exports.__esModule = true;
	var handlebars = (function () {
	    var parser = { trace: function trace() {},
	        yy: {},
	        symbols_: { "error": 2, "root": 3, "program": 4, "EOF": 5, "program_repetition0": 6, "statement": 7, "mustache": 8, "block": 9, "rawBlock": 10, "partial": 11, "partialBlock": 12, "content": 13, "COMMENT": 14, "CONTENT": 15, "openRawBlock": 16, "rawBlock_repetition0": 17, "END_RAW_BLOCK": 18, "OPEN_RAW_BLOCK": 19, "helperName": 20, "openRawBlock_repetition0": 21, "openRawBlock_option0": 22, "CLOSE_RAW_BLOCK": 23, "openBlock": 24, "block_option0": 25, "closeBlock": 26, "openInverse": 27, "block_option1": 28, "OPEN_BLOCK": 29, "openBlock_repetition0": 30, "openBlock_option0": 31, "openBlock_option1": 32, "CLOSE": 33, "OPEN_INVERSE": 34, "openInverse_repetition0": 35, "openInverse_option0": 36, "openInverse_option1": 37, "openInverseChain": 38, "OPEN_INVERSE_CHAIN": 39, "openInverseChain_repetition0": 40, "openInverseChain_option0": 41, "openInverseChain_option1": 42, "inverseAndProgram": 43, "INVERSE": 44, "inverseChain": 45, "inverseChain_option0": 46, "OPEN_ENDBLOCK": 47, "OPEN": 48, "mustache_repetition0": 49, "mustache_option0": 50, "OPEN_UNESCAPED": 51, "mustache_repetition1": 52, "mustache_option1": 53, "CLOSE_UNESCAPED": 54, "OPEN_PARTIAL": 55, "partialName": 56, "partial_repetition0": 57, "partial_option0": 58, "openPartialBlock": 59, "OPEN_PARTIAL_BLOCK": 60, "openPartialBlock_repetition0": 61, "openPartialBlock_option0": 62, "param": 63, "sexpr": 64, "OPEN_SEXPR": 65, "sexpr_repetition0": 66, "sexpr_option0": 67, "CLOSE_SEXPR": 68, "hash": 69, "hash_repetition_plus0": 70, "hashSegment": 71, "ID": 72, "EQUALS": 73, "blockParams": 74, "OPEN_BLOCK_PARAMS": 75, "blockParams_repetition_plus0": 76, "CLOSE_BLOCK_PARAMS": 77, "path": 78, "dataName": 79, "STRING": 80, "NUMBER": 81, "BOOLEAN": 82, "UNDEFINED": 83, "NULL": 84, "DATA": 85, "pathSegments": 86, "SEP": 87, "$accept": 0, "$end": 1 },
	        terminals_: { 2: "error", 5: "EOF", 14: "COMMENT", 15: "CONTENT", 18: "END_RAW_BLOCK", 19: "OPEN_RAW_BLOCK", 23: "CLOSE_RAW_BLOCK", 29: "OPEN_BLOCK", 33: "CLOSE", 34: "OPEN_INVERSE", 39: "OPEN_INVERSE_CHAIN", 44: "INVERSE", 47: "OPEN_ENDBLOCK", 48: "OPEN", 51: "OPEN_UNESCAPED", 54: "CLOSE_UNESCAPED", 55: "OPEN_PARTIAL", 60: "OPEN_PARTIAL_BLOCK", 65: "OPEN_SEXPR", 68: "CLOSE_SEXPR", 72: "ID", 73: "EQUALS", 75: "OPEN_BLOCK_PARAMS", 77: "CLOSE_BLOCK_PARAMS", 80: "STRING", 81: "NUMBER", 82: "BOOLEAN", 83: "UNDEFINED", 84: "NULL", 85: "DATA", 87: "SEP" },
	        productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 0], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]],
	        performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {

	            var $0 = $$.length - 1;
	            switch (yystate) {
	                case 1:
	                    return $$[$0 - 1];
	                case 2:
	                    this.$ = yy.prepareProgram($$[$0]);
	                    break;
	                case 3:
	                    this.$ = $$[$0];
	                    break;
	                case 4:
	                    this.$ = $$[$0];
	                    break;
	                case 5:
	                    this.$ = $$[$0];
	                    break;
	                case 6:
	                    this.$ = $$[$0];
	                    break;
	                case 7:
	                    this.$ = $$[$0];
	                    break;
	                case 8:
	                    this.$ = $$[$0];
	                    break;
	                case 9:
	                    this.$ = {
	                        type: 'CommentStatement',
	                        value: yy.stripComment($$[$0]),
	                        strip: yy.stripFlags($$[$0], $$[$0]),
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 10:
	                    this.$ = {
	                        type: 'ContentStatement',
	                        original: $$[$0],
	                        value: $$[$0],
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 11:
	                    this.$ = yy.prepareRawBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
	                    break;
	                case 12:
	                    this.$ = { path: $$[$0 - 3], params: $$[$0 - 2], hash: $$[$0 - 1] };
	                    break;
	                case 13:
	                    this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], false, this._$);
	                    break;
	                case 14:
	                    this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], true, this._$);
	                    break;
	                case 15:
	                    this.$ = { open: $$[$0 - 5], path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
	                    break;
	                case 16:
	                    this.$ = { path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
	                    break;
	                case 17:
	                    this.$ = { path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
	                    break;
	                case 18:
	                    this.$ = { strip: yy.stripFlags($$[$0 - 1], $$[$0 - 1]), program: $$[$0] };
	                    break;
	                case 19:
	                    var inverse = yy.prepareBlock($$[$0 - 2], $$[$0 - 1], $$[$0], $$[$0], false, this._$),
	                        program = yy.prepareProgram([inverse], $$[$0 - 1].loc);
	                    program.chained = true;

	                    this.$ = { strip: $$[$0 - 2].strip, program: program, chain: true };

	                    break;
	                case 20:
	                    this.$ = $$[$0];
	                    break;
	                case 21:
	                    this.$ = { path: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 2], $$[$0]) };
	                    break;
	                case 22:
	                    this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
	                    break;
	                case 23:
	                    this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
	                    break;
	                case 24:
	                    this.$ = {
	                        type: 'PartialStatement',
	                        name: $$[$0 - 3],
	                        params: $$[$0 - 2],
	                        hash: $$[$0 - 1],
	                        indent: '',
	                        strip: yy.stripFlags($$[$0 - 4], $$[$0]),
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 25:
	                    this.$ = yy.preparePartialBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
	                    break;
	                case 26:
	                    this.$ = { path: $$[$0 - 3], params: $$[$0 - 2], hash: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 4], $$[$0]) };
	                    break;
	                case 27:
	                    this.$ = $$[$0];
	                    break;
	                case 28:
	                    this.$ = $$[$0];
	                    break;
	                case 29:
	                    this.$ = {
	                        type: 'SubExpression',
	                        path: $$[$0 - 3],
	                        params: $$[$0 - 2],
	                        hash: $$[$0 - 1],
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 30:
	                    this.$ = { type: 'Hash', pairs: $$[$0], loc: yy.locInfo(this._$) };
	                    break;
	                case 31:
	                    this.$ = { type: 'HashPair', key: yy.id($$[$0 - 2]), value: $$[$0], loc: yy.locInfo(this._$) };
	                    break;
	                case 32:
	                    this.$ = yy.id($$[$0 - 1]);
	                    break;
	                case 33:
	                    this.$ = $$[$0];
	                    break;
	                case 34:
	                    this.$ = $$[$0];
	                    break;
	                case 35:
	                    this.$ = { type: 'StringLiteral', value: $$[$0], original: $$[$0], loc: yy.locInfo(this._$) };
	                    break;
	                case 36:
	                    this.$ = { type: 'NumberLiteral', value: Number($$[$0]), original: Number($$[$0]), loc: yy.locInfo(this._$) };
	                    break;
	                case 37:
	                    this.$ = { type: 'BooleanLiteral', value: $$[$0] === 'true', original: $$[$0] === 'true', loc: yy.locInfo(this._$) };
	                    break;
	                case 38:
	                    this.$ = { type: 'UndefinedLiteral', original: undefined, value: undefined, loc: yy.locInfo(this._$) };
	                    break;
	                case 39:
	                    this.$ = { type: 'NullLiteral', original: null, value: null, loc: yy.locInfo(this._$) };
	                    break;
	                case 40:
	                    this.$ = $$[$0];
	                    break;
	                case 41:
	                    this.$ = $$[$0];
	                    break;
	                case 42:
	                    this.$ = yy.preparePath(true, $$[$0], this._$);
	                    break;
	                case 43:
	                    this.$ = yy.preparePath(false, $$[$0], this._$);
	                    break;
	                case 44:
	                    $$[$0 - 2].push({ part: yy.id($$[$0]), original: $$[$0], separator: $$[$0 - 1] });this.$ = $$[$0 - 2];
	                    break;
	                case 45:
	                    this.$ = [{ part: yy.id($$[$0]), original: $$[$0] }];
	                    break;
	                case 46:
	                    this.$ = [];
	                    break;
	                case 47:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 48:
	                    this.$ = [];
	                    break;
	                case 49:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 50:
	                    this.$ = [];
	                    break;
	                case 51:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 58:
	                    this.$ = [];
	                    break;
	                case 59:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 64:
	                    this.$ = [];
	                    break;
	                case 65:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 70:
	                    this.$ = [];
	                    break;
	                case 71:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 78:
	                    this.$ = [];
	                    break;
	                case 79:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 82:
	                    this.$ = [];
	                    break;
	                case 83:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 86:
	                    this.$ = [];
	                    break;
	                case 87:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 90:
	                    this.$ = [];
	                    break;
	                case 91:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 94:
	                    this.$ = [];
	                    break;
	                case 95:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 98:
	                    this.$ = [$$[$0]];
	                    break;
	                case 99:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 100:
	                    this.$ = [$$[$0]];
	                    break;
	                case 101:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	            }
	        },
	        table: [{ 3: 1, 4: 2, 5: [2, 46], 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 1: [3] }, { 5: [1, 4] }, { 5: [2, 2], 7: 5, 8: 6, 9: 7, 10: 8, 11: 9, 12: 10, 13: 11, 14: [1, 12], 15: [1, 20], 16: 17, 19: [1, 23], 24: 15, 27: 16, 29: [1, 21], 34: [1, 22], 39: [2, 2], 44: [2, 2], 47: [2, 2], 48: [1, 13], 51: [1, 14], 55: [1, 18], 59: 19, 60: [1, 24] }, { 1: [2, 1] }, { 5: [2, 47], 14: [2, 47], 15: [2, 47], 19: [2, 47], 29: [2, 47], 34: [2, 47], 39: [2, 47], 44: [2, 47], 47: [2, 47], 48: [2, 47], 51: [2, 47], 55: [2, 47], 60: [2, 47] }, { 5: [2, 3], 14: [2, 3], 15: [2, 3], 19: [2, 3], 29: [2, 3], 34: [2, 3], 39: [2, 3], 44: [2, 3], 47: [2, 3], 48: [2, 3], 51: [2, 3], 55: [2, 3], 60: [2, 3] }, { 5: [2, 4], 14: [2, 4], 15: [2, 4], 19: [2, 4], 29: [2, 4], 34: [2, 4], 39: [2, 4], 44: [2, 4], 47: [2, 4], 48: [2, 4], 51: [2, 4], 55: [2, 4], 60: [2, 4] }, { 5: [2, 5], 14: [2, 5], 15: [2, 5], 19: [2, 5], 29: [2, 5], 34: [2, 5], 39: [2, 5], 44: [2, 5], 47: [2, 5], 48: [2, 5], 51: [2, 5], 55: [2, 5], 60: [2, 5] }, { 5: [2, 6], 14: [2, 6], 15: [2, 6], 19: [2, 6], 29: [2, 6], 34: [2, 6], 39: [2, 6], 44: [2, 6], 47: [2, 6], 48: [2, 6], 51: [2, 6], 55: [2, 6], 60: [2, 6] }, { 5: [2, 7], 14: [2, 7], 15: [2, 7], 19: [2, 7], 29: [2, 7], 34: [2, 7], 39: [2, 7], 44: [2, 7], 47: [2, 7], 48: [2, 7], 51: [2, 7], 55: [2, 7], 60: [2, 7] }, { 5: [2, 8], 14: [2, 8], 15: [2, 8], 19: [2, 8], 29: [2, 8], 34: [2, 8], 39: [2, 8], 44: [2, 8], 47: [2, 8], 48: [2, 8], 51: [2, 8], 55: [2, 8], 60: [2, 8] }, { 5: [2, 9], 14: [2, 9], 15: [2, 9], 19: [2, 9], 29: [2, 9], 34: [2, 9], 39: [2, 9], 44: [2, 9], 47: [2, 9], 48: [2, 9], 51: [2, 9], 55: [2, 9], 60: [2, 9] }, { 20: 25, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 36, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 37, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 4: 38, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 15: [2, 48], 17: 39, 18: [2, 48] }, { 20: 41, 56: 40, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 44, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 5: [2, 10], 14: [2, 10], 15: [2, 10], 18: [2, 10], 19: [2, 10], 29: [2, 10], 34: [2, 10], 39: [2, 10], 44: [2, 10], 47: [2, 10], 48: [2, 10], 51: [2, 10], 55: [2, 10], 60: [2, 10] }, { 20: 45, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 46, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 47, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 41, 56: 48, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [2, 78], 49: 49, 65: [2, 78], 72: [2, 78], 80: [2, 78], 81: [2, 78], 82: [2, 78], 83: [2, 78], 84: [2, 78], 85: [2, 78] }, { 23: [2, 33], 33: [2, 33], 54: [2, 33], 65: [2, 33], 68: [2, 33], 72: [2, 33], 75: [2, 33], 80: [2, 33], 81: [2, 33], 82: [2, 33], 83: [2, 33], 84: [2, 33], 85: [2, 33] }, { 23: [2, 34], 33: [2, 34], 54: [2, 34], 65: [2, 34], 68: [2, 34], 72: [2, 34], 75: [2, 34], 80: [2, 34], 81: [2, 34], 82: [2, 34], 83: [2, 34], 84: [2, 34], 85: [2, 34] }, { 23: [2, 35], 33: [2, 35], 54: [2, 35], 65: [2, 35], 68: [2, 35], 72: [2, 35], 75: [2, 35], 80: [2, 35], 81: [2, 35], 82: [2, 35], 83: [2, 35], 84: [2, 35], 85: [2, 35] }, { 23: [2, 36], 33: [2, 36], 54: [2, 36], 65: [2, 36], 68: [2, 36], 72: [2, 36], 75: [2, 36], 80: [2, 36], 81: [2, 36], 82: [2, 36], 83: [2, 36], 84: [2, 36], 85: [2, 36] }, { 23: [2, 37], 33: [2, 37], 54: [2, 37], 65: [2, 37], 68: [2, 37], 72: [2, 37], 75: [2, 37], 80: [2, 37], 81: [2, 37], 82: [2, 37], 83: [2, 37], 84: [2, 37], 85: [2, 37] }, { 23: [2, 38], 33: [2, 38], 54: [2, 38], 65: [2, 38], 68: [2, 38], 72: [2, 38], 75: [2, 38], 80: [2, 38], 81: [2, 38], 82: [2, 38], 83: [2, 38], 84: [2, 38], 85: [2, 38] }, { 23: [2, 39], 33: [2, 39], 54: [2, 39], 65: [2, 39], 68: [2, 39], 72: [2, 39], 75: [2, 39], 80: [2, 39], 81: [2, 39], 82: [2, 39], 83: [2, 39], 84: [2, 39], 85: [2, 39] }, { 23: [2, 43], 33: [2, 43], 54: [2, 43], 65: [2, 43], 68: [2, 43], 72: [2, 43], 75: [2, 43], 80: [2, 43], 81: [2, 43], 82: [2, 43], 83: [2, 43], 84: [2, 43], 85: [2, 43], 87: [1, 50] }, { 72: [1, 35], 86: 51 }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 52: 52, 54: [2, 82], 65: [2, 82], 72: [2, 82], 80: [2, 82], 81: [2, 82], 82: [2, 82], 83: [2, 82], 84: [2, 82], 85: [2, 82] }, { 25: 53, 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 54, 47: [2, 54] }, { 28: 59, 43: 60, 44: [1, 58], 47: [2, 56] }, { 13: 62, 15: [1, 20], 18: [1, 61] }, { 33: [2, 86], 57: 63, 65: [2, 86], 72: [2, 86], 80: [2, 86], 81: [2, 86], 82: [2, 86], 83: [2, 86], 84: [2, 86], 85: [2, 86] }, { 33: [2, 40], 65: [2, 40], 72: [2, 40], 80: [2, 40], 81: [2, 40], 82: [2, 40], 83: [2, 40], 84: [2, 40], 85: [2, 40] }, { 33: [2, 41], 65: [2, 41], 72: [2, 41], 80: [2, 41], 81: [2, 41], 82: [2, 41], 83: [2, 41], 84: [2, 41], 85: [2, 41] }, { 20: 64, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 65, 47: [1, 66] }, { 30: 67, 33: [2, 58], 65: [2, 58], 72: [2, 58], 75: [2, 58], 80: [2, 58], 81: [2, 58], 82: [2, 58], 83: [2, 58], 84: [2, 58], 85: [2, 58] }, { 33: [2, 64], 35: 68, 65: [2, 64], 72: [2, 64], 75: [2, 64], 80: [2, 64], 81: [2, 64], 82: [2, 64], 83: [2, 64], 84: [2, 64], 85: [2, 64] }, { 21: 69, 23: [2, 50], 65: [2, 50], 72: [2, 50], 80: [2, 50], 81: [2, 50], 82: [2, 50], 83: [2, 50], 84: [2, 50], 85: [2, 50] }, { 33: [2, 90], 61: 70, 65: [2, 90], 72: [2, 90], 80: [2, 90], 81: [2, 90], 82: [2, 90], 83: [2, 90], 84: [2, 90], 85: [2, 90] }, { 20: 74, 33: [2, 80], 50: 71, 63: 72, 64: 75, 65: [1, 43], 69: 73, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 72: [1, 79] }, { 23: [2, 42], 33: [2, 42], 54: [2, 42], 65: [2, 42], 68: [2, 42], 72: [2, 42], 75: [2, 42], 80: [2, 42], 81: [2, 42], 82: [2, 42], 83: [2, 42], 84: [2, 42], 85: [2, 42], 87: [1, 50] }, { 20: 74, 53: 80, 54: [2, 84], 63: 81, 64: 75, 65: [1, 43], 69: 82, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 83, 47: [1, 66] }, { 47: [2, 55] }, { 4: 84, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 47: [2, 20] }, { 20: 85, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 86, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 26: 87, 47: [1, 66] }, { 47: [2, 57] }, { 5: [2, 11], 14: [2, 11], 15: [2, 11], 19: [2, 11], 29: [2, 11], 34: [2, 11], 39: [2, 11], 44: [2, 11], 47: [2, 11], 48: [2, 11], 51: [2, 11], 55: [2, 11], 60: [2, 11] }, { 15: [2, 49], 18: [2, 49] }, { 20: 74, 33: [2, 88], 58: 88, 63: 89, 64: 75, 65: [1, 43], 69: 90, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 65: [2, 94], 66: 91, 68: [2, 94], 72: [2, 94], 80: [2, 94], 81: [2, 94], 82: [2, 94], 83: [2, 94], 84: [2, 94], 85: [2, 94] }, { 5: [2, 25], 14: [2, 25], 15: [2, 25], 19: [2, 25], 29: [2, 25], 34: [2, 25], 39: [2, 25], 44: [2, 25], 47: [2, 25], 48: [2, 25], 51: [2, 25], 55: [2, 25], 60: [2, 25] }, { 20: 92, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 31: 93, 33: [2, 60], 63: 94, 64: 75, 65: [1, 43], 69: 95, 70: 76, 71: 77, 72: [1, 78], 75: [2, 60], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 66], 36: 96, 63: 97, 64: 75, 65: [1, 43], 69: 98, 70: 76, 71: 77, 72: [1, 78], 75: [2, 66], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 22: 99, 23: [2, 52], 63: 100, 64: 75, 65: [1, 43], 69: 101, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 92], 62: 102, 63: 103, 64: 75, 65: [1, 43], 69: 104, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 105] }, { 33: [2, 79], 65: [2, 79], 72: [2, 79], 80: [2, 79], 81: [2, 79], 82: [2, 79], 83: [2, 79], 84: [2, 79], 85: [2, 79] }, { 33: [2, 81] }, { 23: [2, 27], 33: [2, 27], 54: [2, 27], 65: [2, 27], 68: [2, 27], 72: [2, 27], 75: [2, 27], 80: [2, 27], 81: [2, 27], 82: [2, 27], 83: [2, 27], 84: [2, 27], 85: [2, 27] }, { 23: [2, 28], 33: [2, 28], 54: [2, 28], 65: [2, 28], 68: [2, 28], 72: [2, 28], 75: [2, 28], 80: [2, 28], 81: [2, 28], 82: [2, 28], 83: [2, 28], 84: [2, 28], 85: [2, 28] }, { 23: [2, 30], 33: [2, 30], 54: [2, 30], 68: [2, 30], 71: 106, 72: [1, 107], 75: [2, 30] }, { 23: [2, 98], 33: [2, 98], 54: [2, 98], 68: [2, 98], 72: [2, 98], 75: [2, 98] }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 73: [1, 108], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 23: [2, 44], 33: [2, 44], 54: [2, 44], 65: [2, 44], 68: [2, 44], 72: [2, 44], 75: [2, 44], 80: [2, 44], 81: [2, 44], 82: [2, 44], 83: [2, 44], 84: [2, 44], 85: [2, 44], 87: [2, 44] }, { 54: [1, 109] }, { 54: [2, 83], 65: [2, 83], 72: [2, 83], 80: [2, 83], 81: [2, 83], 82: [2, 83], 83: [2, 83], 84: [2, 83], 85: [2, 83] }, { 54: [2, 85] }, { 5: [2, 13], 14: [2, 13], 15: [2, 13], 19: [2, 13], 29: [2, 13], 34: [2, 13], 39: [2, 13], 44: [2, 13], 47: [2, 13], 48: [2, 13], 51: [2, 13], 55: [2, 13], 60: [2, 13] }, { 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 111, 46: 110, 47: [2, 76] }, { 33: [2, 70], 40: 112, 65: [2, 70], 72: [2, 70], 75: [2, 70], 80: [2, 70], 81: [2, 70], 82: [2, 70], 83: [2, 70], 84: [2, 70], 85: [2, 70] }, { 47: [2, 18] }, { 5: [2, 14], 14: [2, 14], 15: [2, 14], 19: [2, 14], 29: [2, 14], 34: [2, 14], 39: [2, 14], 44: [2, 14], 47: [2, 14], 48: [2, 14], 51: [2, 14], 55: [2, 14], 60: [2, 14] }, { 33: [1, 113] }, { 33: [2, 87], 65: [2, 87], 72: [2, 87], 80: [2, 87], 81: [2, 87], 82: [2, 87], 83: [2, 87], 84: [2, 87], 85: [2, 87] }, { 33: [2, 89] }, { 20: 74, 63: 115, 64: 75, 65: [1, 43], 67: 114, 68: [2, 96], 69: 116, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 117] }, { 32: 118, 33: [2, 62], 74: 119, 75: [1, 120] }, { 33: [2, 59], 65: [2, 59], 72: [2, 59], 75: [2, 59], 80: [2, 59], 81: [2, 59], 82: [2, 59], 83: [2, 59], 84: [2, 59], 85: [2, 59] }, { 33: [2, 61], 75: [2, 61] }, { 33: [2, 68], 37: 121, 74: 122, 75: [1, 120] }, { 33: [2, 65], 65: [2, 65], 72: [2, 65], 75: [2, 65], 80: [2, 65], 81: [2, 65], 82: [2, 65], 83: [2, 65], 84: [2, 65], 85: [2, 65] }, { 33: [2, 67], 75: [2, 67] }, { 23: [1, 123] }, { 23: [2, 51], 65: [2, 51], 72: [2, 51], 80: [2, 51], 81: [2, 51], 82: [2, 51], 83: [2, 51], 84: [2, 51], 85: [2, 51] }, { 23: [2, 53] }, { 33: [1, 124] }, { 33: [2, 91], 65: [2, 91], 72: [2, 91], 80: [2, 91], 81: [2, 91], 82: [2, 91], 83: [2, 91], 84: [2, 91], 85: [2, 91] }, { 33: [2, 93] }, { 5: [2, 22], 14: [2, 22], 15: [2, 22], 19: [2, 22], 29: [2, 22], 34: [2, 22], 39: [2, 22], 44: [2, 22], 47: [2, 22], 48: [2, 22], 51: [2, 22], 55: [2, 22], 60: [2, 22] }, { 23: [2, 99], 33: [2, 99], 54: [2, 99], 68: [2, 99], 72: [2, 99], 75: [2, 99] }, { 73: [1, 108] }, { 20: 74, 63: 125, 64: 75, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 23], 14: [2, 23], 15: [2, 23], 19: [2, 23], 29: [2, 23], 34: [2, 23], 39: [2, 23], 44: [2, 23], 47: [2, 23], 48: [2, 23], 51: [2, 23], 55: [2, 23], 60: [2, 23] }, { 47: [2, 19] }, { 47: [2, 77] }, { 20: 74, 33: [2, 72], 41: 126, 63: 127, 64: 75, 65: [1, 43], 69: 128, 70: 76, 71: 77, 72: [1, 78], 75: [2, 72], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 24], 14: [2, 24], 15: [2, 24], 19: [2, 24], 29: [2, 24], 34: [2, 24], 39: [2, 24], 44: [2, 24], 47: [2, 24], 48: [2, 24], 51: [2, 24], 55: [2, 24], 60: [2, 24] }, { 68: [1, 129] }, { 65: [2, 95], 68: [2, 95], 72: [2, 95], 80: [2, 95], 81: [2, 95], 82: [2, 95], 83: [2, 95], 84: [2, 95], 85: [2, 95] }, { 68: [2, 97] }, { 5: [2, 21], 14: [2, 21], 15: [2, 21], 19: [2, 21], 29: [2, 21], 34: [2, 21], 39: [2, 21], 44: [2, 21], 47: [2, 21], 48: [2, 21], 51: [2, 21], 55: [2, 21], 60: [2, 21] }, { 33: [1, 130] }, { 33: [2, 63] }, { 72: [1, 132], 76: 131 }, { 33: [1, 133] }, { 33: [2, 69] }, { 15: [2, 12], 18: [2, 12] }, { 14: [2, 26], 15: [2, 26], 19: [2, 26], 29: [2, 26], 34: [2, 26], 47: [2, 26], 48: [2, 26], 51: [2, 26], 55: [2, 26], 60: [2, 26] }, { 23: [2, 31], 33: [2, 31], 54: [2, 31], 68: [2, 31], 72: [2, 31], 75: [2, 31] }, { 33: [2, 74], 42: 134, 74: 135, 75: [1, 120] }, { 33: [2, 71], 65: [2, 71], 72: [2, 71], 75: [2, 71], 80: [2, 71], 81: [2, 71], 82: [2, 71], 83: [2, 71], 84: [2, 71], 85: [2, 71] }, { 33: [2, 73], 75: [2, 73] }, { 23: [2, 29], 33: [2, 29], 54: [2, 29], 65: [2, 29], 68: [2, 29], 72: [2, 29], 75: [2, 29], 80: [2, 29], 81: [2, 29], 82: [2, 29], 83: [2, 29], 84: [2, 29], 85: [2, 29] }, { 14: [2, 15], 15: [2, 15], 19: [2, 15], 29: [2, 15], 34: [2, 15], 39: [2, 15], 44: [2, 15], 47: [2, 15], 48: [2, 15], 51: [2, 15], 55: [2, 15], 60: [2, 15] }, { 72: [1, 137], 77: [1, 136] }, { 72: [2, 100], 77: [2, 100] }, { 14: [2, 16], 15: [2, 16], 19: [2, 16], 29: [2, 16], 34: [2, 16], 44: [2, 16], 47: [2, 16], 48: [2, 16], 51: [2, 16], 55: [2, 16], 60: [2, 16] }, { 33: [1, 138] }, { 33: [2, 75] }, { 33: [2, 32] }, { 72: [2, 101], 77: [2, 101] }, { 14: [2, 17], 15: [2, 17], 19: [2, 17], 29: [2, 17], 34: [2, 17], 39: [2, 17], 44: [2, 17], 47: [2, 17], 48: [2, 17], 51: [2, 17], 55: [2, 17], 60: [2, 17] }],
	        defaultActions: { 4: [2, 1], 54: [2, 55], 56: [2, 20], 60: [2, 57], 73: [2, 81], 82: [2, 85], 86: [2, 18], 90: [2, 89], 101: [2, 53], 104: [2, 93], 110: [2, 19], 111: [2, 77], 116: [2, 97], 119: [2, 63], 122: [2, 69], 135: [2, 75], 136: [2, 32] },
	        parseError: function parseError(str, hash) {
	            throw new Error(str);
	        },
	        parse: function parse(input) {
	            var self = this,
	                stack = [0],
	                vstack = [null],
	                lstack = [],
	                table = this.table,
	                yytext = "",
	                yylineno = 0,
	                yyleng = 0;
	            this.lexer.setInput(input);
	            this.lexer.yy = this.yy;
	            this.yy.lexer = this.lexer;
	            this.yy.parser = this;
	            if (typeof this.lexer.yylloc == "undefined") this.lexer.yylloc = {};
	            var yyloc = this.lexer.yylloc;
	            lstack.push(yyloc);
	            var ranges = this.lexer.options && this.lexer.options.ranges;
	            if (typeof this.yy.parseError === "function") this.parseError = this.yy.parseError;
	            function lex() {
	                var token;
	                token = self.lexer.lex() || 1;
	                if (typeof token !== "number") {
	                    token = self.symbols_[token] || token;
	                }
	                return token;
	            }
	            var symbol,
	                state,
	                action,
	                r,
	                yyval = {},
	                p,
	                len,
	                newState,
	                expected;
	            while (true) {
	                state = stack[stack.length - 1];
	                if (this.defaultActions[state]) {
	                    action = this.defaultActions[state];
	                } else {
	                    if (symbol === null || typeof symbol == "undefined") {
	                        symbol = lex();
	                    }
	                    action = table[state] && table[state][symbol];
	                }
	                if (typeof action === "undefined" || !action.length || !action[0]) {
	                    var errStr = "";
	                    {
	                        expected = [];
	                        for (p in table[state]) if (this.terminals_[p] && p > 2) {
	                            expected.push("'" + this.terminals_[p] + "'");
	                        }
	                        if (this.lexer.showPosition) {
	                            errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
	                        } else {
	                            errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1 ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
	                        }
	                        this.parseError(errStr, { text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected });
	                    }
	                }
	                if (action[0] instanceof Array && action.length > 1) {
	                    throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
	                }
	                switch (action[0]) {
	                    case 1:
	                        stack.push(symbol);
	                        vstack.push(this.lexer.yytext);
	                        lstack.push(this.lexer.yylloc);
	                        stack.push(action[1]);
	                        symbol = null;
	                        {
	                            yyleng = this.lexer.yyleng;
	                            yytext = this.lexer.yytext;
	                            yylineno = this.lexer.yylineno;
	                            yyloc = this.lexer.yylloc;
	                        }
	                        break;
	                    case 2:
	                        len = this.productions_[action[1]][1];
	                        yyval.$ = vstack[vstack.length - len];
	                        yyval._$ = { first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column };
	                        if (ranges) {
	                            yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
	                        }
	                        r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
	                        if (typeof r !== "undefined") {
	                            return r;
	                        }
	                        if (len) {
	                            stack = stack.slice(0, -1 * len * 2);
	                            vstack = vstack.slice(0, -1 * len);
	                            lstack = lstack.slice(0, -1 * len);
	                        }
	                        stack.push(this.productions_[action[1]][0]);
	                        vstack.push(yyval.$);
	                        lstack.push(yyval._$);
	                        newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
	                        stack.push(newState);
	                        break;
	                    case 3:
	                        return true;
	                }
	            }
	            return true;
	        }
	    };
	    /* Jison generated lexer */
	    var lexer = (function () {
	        var lexer = { EOF: 1,
	            parseError: function parseError(str, hash) {
	                if (this.yy.parser) {
	                    this.yy.parser.parseError(str, hash);
	                } else {
	                    throw new Error(str);
	                }
	            },
	            setInput: function setInput(input) {
	                this._input = input;
	                this._more = this._less = this.done = false;
	                this.yylineno = this.yyleng = 0;
	                this.yytext = this.matched = this.match = '';
	                this.conditionStack = ['INITIAL'];
	                this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 };
	                if (this.options.ranges) this.yylloc.range = [0, 0];
	                this.offset = 0;
	                return this;
	            },
	            input: function input() {
	                var ch = this._input[0];
	                this.yytext += ch;
	                this.yyleng++;
	                this.offset++;
	                this.match += ch;
	                this.matched += ch;
	                var lines = ch.match(/(?:\r\n?|\n).*/g);
	                if (lines) {
	                    this.yylineno++;
	                    this.yylloc.last_line++;
	                } else {
	                    this.yylloc.last_column++;
	                }
	                if (this.options.ranges) this.yylloc.range[1]++;

	                this._input = this._input.slice(1);
	                return ch;
	            },
	            unput: function unput(ch) {
	                var len = ch.length;
	                var lines = ch.split(/(?:\r\n?|\n)/g);

	                this._input = ch + this._input;
	                this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
	                //this.yyleng -= len;
	                this.offset -= len;
	                var oldLines = this.match.split(/(?:\r\n?|\n)/g);
	                this.match = this.match.substr(0, this.match.length - 1);
	                this.matched = this.matched.substr(0, this.matched.length - 1);

	                if (lines.length - 1) this.yylineno -= lines.length - 1;
	                var r = this.yylloc.range;

	                this.yylloc = { first_line: this.yylloc.first_line,
	                    last_line: this.yylineno + 1,
	                    first_column: this.yylloc.first_column,
	                    last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
	                };

	                if (this.options.ranges) {
	                    this.yylloc.range = [r[0], r[0] + this.yyleng - len];
	                }
	                return this;
	            },
	            more: function more() {
	                this._more = true;
	                return this;
	            },
	            less: function less(n) {
	                this.unput(this.match.slice(n));
	            },
	            pastInput: function pastInput() {
	                var past = this.matched.substr(0, this.matched.length - this.match.length);
	                return (past.length > 20 ? '...' : '') + past.substr(-20).replace(/\n/g, "");
	            },
	            upcomingInput: function upcomingInput() {
	                var next = this.match;
	                if (next.length < 20) {
	                    next += this._input.substr(0, 20 - next.length);
	                }
	                return (next.substr(0, 20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
	            },
	            showPosition: function showPosition() {
	                var pre = this.pastInput();
	                var c = new Array(pre.length + 1).join("-");
	                return pre + this.upcomingInput() + "\n" + c + "^";
	            },
	            next: function next() {
	                if (this.done) {
	                    return this.EOF;
	                }
	                if (!this._input) this.done = true;

	                var token, match, tempMatch, index, lines;
	                if (!this._more) {
	                    this.yytext = '';
	                    this.match = '';
	                }
	                var rules = this._currentRules();
	                for (var i = 0; i < rules.length; i++) {
	                    tempMatch = this._input.match(this.rules[rules[i]]);
	                    if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
	                        match = tempMatch;
	                        index = i;
	                        if (!this.options.flex) break;
	                    }
	                }
	                if (match) {
	                    lines = match[0].match(/(?:\r\n?|\n).*/g);
	                    if (lines) this.yylineno += lines.length;
	                    this.yylloc = { first_line: this.yylloc.last_line,
	                        last_line: this.yylineno + 1,
	                        first_column: this.yylloc.last_column,
	                        last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length };
	                    this.yytext += match[0];
	                    this.match += match[0];
	                    this.matches = match;
	                    this.yyleng = this.yytext.length;
	                    if (this.options.ranges) {
	                        this.yylloc.range = [this.offset, this.offset += this.yyleng];
	                    }
	                    this._more = false;
	                    this._input = this._input.slice(match[0].length);
	                    this.matched += match[0];
	                    token = this.performAction.call(this, this.yy, this, rules[index], this.conditionStack[this.conditionStack.length - 1]);
	                    if (this.done && this._input) this.done = false;
	                    if (token) return token;else return;
	                }
	                if (this._input === "") {
	                    return this.EOF;
	                } else {
	                    return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), { text: "", token: null, line: this.yylineno });
	                }
	            },
	            lex: function lex() {
	                var r = this.next();
	                if (typeof r !== 'undefined') {
	                    return r;
	                } else {
	                    return this.lex();
	                }
	            },
	            begin: function begin(condition) {
	                this.conditionStack.push(condition);
	            },
	            popState: function popState() {
	                return this.conditionStack.pop();
	            },
	            _currentRules: function _currentRules() {
	                return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
	            },
	            topState: function topState() {
	                return this.conditionStack[this.conditionStack.length - 2];
	            },
	            pushState: function begin(condition) {
	                this.begin(condition);
	            } };
	        lexer.options = {};
	        lexer.performAction = function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {

	            function strip(start, end) {
	                return yy_.yytext = yy_.yytext.substring(start, yy_.yyleng - end + start);
	            }
	            switch ($avoiding_name_collisions) {
	                case 0:
	                    if (yy_.yytext.slice(-2) === "\\\\") {
	                        strip(0, 1);
	                        this.begin("mu");
	                    } else if (yy_.yytext.slice(-1) === "\\") {
	                        strip(0, 1);
	                        this.begin("emu");
	                    } else {
	                        this.begin("mu");
	                    }
	                    if (yy_.yytext) return 15;

	                    break;
	                case 1:
	                    return 15;
	                case 2:
	                    this.popState();
	                    return 15;
	                case 3:
	                    this.begin('raw');return 15;
	                case 4:
	                    this.popState();
	                    // Should be using `this.topState()` below, but it currently
	                    // returns the second top instead of the first top. Opened an
	                    // issue about it at https://github.com/zaach/jison/issues/291
	                    if (this.conditionStack[this.conditionStack.length - 1] === 'raw') {
	                        return 15;
	                    } else {
	                        strip(5, 9);
	                        return 'END_RAW_BLOCK';
	                    }
	                case 5:
	                    return 15;
	                case 6:
	                    this.popState();
	                    return 14;
	                case 7:
	                    return 65;
	                case 8:
	                    return 68;
	                case 9:
	                    return 19;
	                case 10:
	                    this.popState();
	                    this.begin('raw');
	                    return 23;
	                case 11:
	                    return 55;
	                case 12:
	                    return 60;
	                case 13:
	                    return 29;
	                case 14:
	                    return 47;
	                case 15:
	                    this.popState();return 44;
	                case 16:
	                    this.popState();return 44;
	                case 17:
	                    return 34;
	                case 18:
	                    return 39;
	                case 19:
	                    return 51;
	                case 20:
	                    return 48;
	                case 21:
	                    this.unput(yy_.yytext);
	                    this.popState();
	                    this.begin('com');

	                    break;
	                case 22:
	                    this.popState();
	                    return 14;
	                case 23:
	                    return 48;
	                case 24:
	                    return 73;
	                case 25:
	                    return 72;
	                case 26:
	                    return 72;
	                case 27:
	                    return 87;
	                case 28:
	                    // ignore whitespace
	                    break;
	                case 29:
	                    this.popState();return 54;
	                case 30:
	                    this.popState();return 33;
	                case 31:
	                    yy_.yytext = strip(1, 2).replace(/\\"/g, '"');return 80;
	                case 32:
	                    yy_.yytext = strip(1, 2).replace(/\\'/g, "'");return 80;
	                case 33:
	                    return 85;
	                case 34:
	                    return 82;
	                case 35:
	                    return 82;
	                case 36:
	                    return 83;
	                case 37:
	                    return 84;
	                case 38:
	                    return 81;
	                case 39:
	                    return 75;
	                case 40:
	                    return 77;
	                case 41:
	                    return 72;
	                case 42:
	                    yy_.yytext = yy_.yytext.replace(/\\([\\\]])/g, '$1');return 72;
	                case 43:
	                    return 'INVALID';
	                case 44:
	                    return 5;
	            }
	        };
	        lexer.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]+?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/];
	        lexer.conditions = { "mu": { "rules": [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44], "inclusive": false }, "emu": { "rules": [2], "inclusive": false }, "com": { "rules": [6], "inclusive": false }, "raw": { "rules": [3, 4, 5], "inclusive": false }, "INITIAL": { "rules": [0, 1, 44], "inclusive": true } };
	        return lexer;
	    })();
	    parser.lexer = lexer;
	    function Parser() {
	        this.yy = {};
	    }Parser.prototype = parser;parser.Parser = Parser;
	    return new Parser();
	})();exports["default"] = handlebars;
	module.exports = exports["default"];
	
} (parser, parser.exports));

var parserExports = parser.exports;

var whitespaceControl = {exports: {}};

var visitor = {exports: {}};

(function (module, exports) {

	exports.__esModule = true;
	// istanbul ignore next

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _exception = exceptionExports;

	var _exception2 = _interopRequireDefault(_exception);

	function Visitor() {
	  this.parents = [];
	}

	Visitor.prototype = {
	  constructor: Visitor,
	  mutating: false,

	  // Visits a given value. If mutating, will replace the value if necessary.
	  acceptKey: function acceptKey(node, name) {
	    var value = this.accept(node[name]);
	    if (this.mutating) {
	      // Hacky sanity check: This may have a few false positives for type for the helper
	      // methods but will generally do the right thing without a lot of overhead.
	      if (value && !Visitor.prototype[value.type]) {
	        throw new _exception2['default']('Unexpected node type "' + value.type + '" found when accepting ' + name + ' on ' + node.type);
	      }
	      node[name] = value;
	    }
	  },

	  // Performs an accept operation with added sanity check to ensure
	  // required keys are not removed.
	  acceptRequired: function acceptRequired(node, name) {
	    this.acceptKey(node, name);

	    if (!node[name]) {
	      throw new _exception2['default'](node.type + ' requires ' + name);
	    }
	  },

	  // Traverses a given array. If mutating, empty respnses will be removed
	  // for child elements.
	  acceptArray: function acceptArray(array) {
	    for (var i = 0, l = array.length; i < l; i++) {
	      this.acceptKey(array, i);

	      if (!array[i]) {
	        array.splice(i, 1);
	        i--;
	        l--;
	      }
	    }
	  },

	  accept: function accept(object) {
	    if (!object) {
	      return;
	    }

	    /* istanbul ignore next: Sanity code */
	    if (!this[object.type]) {
	      throw new _exception2['default']('Unknown type: ' + object.type, object);
	    }

	    if (this.current) {
	      this.parents.unshift(this.current);
	    }
	    this.current = object;

	    var ret = this[object.type](object);

	    this.current = this.parents.shift();

	    if (!this.mutating || ret) {
	      return ret;
	    } else if (ret !== false) {
	      return object;
	    }
	  },

	  Program: function Program(program) {
	    this.acceptArray(program.body);
	  },

	  MustacheStatement: visitSubExpression,
	  Decorator: visitSubExpression,

	  BlockStatement: visitBlock,
	  DecoratorBlock: visitBlock,

	  PartialStatement: visitPartial,
	  PartialBlockStatement: function PartialBlockStatement(partial) {
	    visitPartial.call(this, partial);

	    this.acceptKey(partial, 'program');
	  },

	  ContentStatement: function ContentStatement() /* content */{},
	  CommentStatement: function CommentStatement() /* comment */{},

	  SubExpression: visitSubExpression,

	  PathExpression: function PathExpression() /* path */{},

	  StringLiteral: function StringLiteral() /* string */{},
	  NumberLiteral: function NumberLiteral() /* number */{},
	  BooleanLiteral: function BooleanLiteral() /* bool */{},
	  UndefinedLiteral: function UndefinedLiteral() /* literal */{},
	  NullLiteral: function NullLiteral() /* literal */{},

	  Hash: function Hash(hash) {
	    this.acceptArray(hash.pairs);
	  },
	  HashPair: function HashPair(pair) {
	    this.acceptRequired(pair, 'value');
	  }
	};

	function visitSubExpression(mustache) {
	  this.acceptRequired(mustache, 'path');
	  this.acceptArray(mustache.params);
	  this.acceptKey(mustache, 'hash');
	}
	function visitBlock(block) {
	  visitSubExpression.call(this, block);

	  this.acceptKey(block, 'program');
	  this.acceptKey(block, 'inverse');
	}
	function visitPartial(partial) {
	  this.acceptRequired(partial, 'name');
	  this.acceptArray(partial.params);
	  this.acceptKey(partial, 'hash');
	}

	exports['default'] = Visitor;
	module.exports = exports['default'];
	
} (visitor, visitor.exports));

var visitorExports = visitor.exports;

(function (module, exports) {

	exports.__esModule = true;
	// istanbul ignore next

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _visitor = visitorExports;

	var _visitor2 = _interopRequireDefault(_visitor);

	function WhitespaceControl() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  this.options = options;
	}
	WhitespaceControl.prototype = new _visitor2['default']();

	WhitespaceControl.prototype.Program = function (program) {
	  var doStandalone = !this.options.ignoreStandalone;

	  var isRoot = !this.isRootSeen;
	  this.isRootSeen = true;

	  var body = program.body;
	  for (var i = 0, l = body.length; i < l; i++) {
	    var current = body[i],
	        strip = this.accept(current);

	    if (!strip) {
	      continue;
	    }

	    var _isPrevWhitespace = isPrevWhitespace(body, i, isRoot),
	        _isNextWhitespace = isNextWhitespace(body, i, isRoot),
	        openStandalone = strip.openStandalone && _isPrevWhitespace,
	        closeStandalone = strip.closeStandalone && _isNextWhitespace,
	        inlineStandalone = strip.inlineStandalone && _isPrevWhitespace && _isNextWhitespace;

	    if (strip.close) {
	      omitRight(body, i, true);
	    }
	    if (strip.open) {
	      omitLeft(body, i, true);
	    }

	    if (doStandalone && inlineStandalone) {
	      omitRight(body, i);

	      if (omitLeft(body, i)) {
	        // If we are on a standalone node, save the indent info for partials
	        if (current.type === 'PartialStatement') {
	          // Pull out the whitespace from the final line
	          current.indent = /([ \t]+$)/.exec(body[i - 1].original)[1];
	        }
	      }
	    }
	    if (doStandalone && openStandalone) {
	      omitRight((current.program || current.inverse).body);

	      // Strip out the previous content node if it's whitespace only
	      omitLeft(body, i);
	    }
	    if (doStandalone && closeStandalone) {
	      // Always strip the next node
	      omitRight(body, i);

	      omitLeft((current.inverse || current.program).body);
	    }
	  }

	  return program;
	};

	WhitespaceControl.prototype.BlockStatement = WhitespaceControl.prototype.DecoratorBlock = WhitespaceControl.prototype.PartialBlockStatement = function (block) {
	  this.accept(block.program);
	  this.accept(block.inverse);

	  // Find the inverse program that is involed with whitespace stripping.
	  var program = block.program || block.inverse,
	      inverse = block.program && block.inverse,
	      firstInverse = inverse,
	      lastInverse = inverse;

	  if (inverse && inverse.chained) {
	    firstInverse = inverse.body[0].program;

	    // Walk the inverse chain to find the last inverse that is actually in the chain.
	    while (lastInverse.chained) {
	      lastInverse = lastInverse.body[lastInverse.body.length - 1].program;
	    }
	  }

	  var strip = {
	    open: block.openStrip.open,
	    close: block.closeStrip.close,

	    // Determine the standalone candiacy. Basically flag our content as being possibly standalone
	    // so our parent can determine if we actually are standalone
	    openStandalone: isNextWhitespace(program.body),
	    closeStandalone: isPrevWhitespace((firstInverse || program).body)
	  };

	  if (block.openStrip.close) {
	    omitRight(program.body, null, true);
	  }

	  if (inverse) {
	    var inverseStrip = block.inverseStrip;

	    if (inverseStrip.open) {
	      omitLeft(program.body, null, true);
	    }

	    if (inverseStrip.close) {
	      omitRight(firstInverse.body, null, true);
	    }
	    if (block.closeStrip.open) {
	      omitLeft(lastInverse.body, null, true);
	    }

	    // Find standalone else statments
	    if (!this.options.ignoreStandalone && isPrevWhitespace(program.body) && isNextWhitespace(firstInverse.body)) {
	      omitLeft(program.body);
	      omitRight(firstInverse.body);
	    }
	  } else if (block.closeStrip.open) {
	    omitLeft(program.body, null, true);
	  }

	  return strip;
	};

	WhitespaceControl.prototype.Decorator = WhitespaceControl.prototype.MustacheStatement = function (mustache) {
	  return mustache.strip;
	};

	WhitespaceControl.prototype.PartialStatement = WhitespaceControl.prototype.CommentStatement = function (node) {
	  /* istanbul ignore next */
	  var strip = node.strip || {};
	  return {
	    inlineStandalone: true,
	    open: strip.open,
	    close: strip.close
	  };
	};

	function isPrevWhitespace(body, i, isRoot) {
	  if (i === undefined) {
	    i = body.length;
	  }

	  // Nodes that end with newlines are considered whitespace (but are special
	  // cased for strip operations)
	  var prev = body[i - 1],
	      sibling = body[i - 2];
	  if (!prev) {
	    return isRoot;
	  }

	  if (prev.type === 'ContentStatement') {
	    return (sibling || !isRoot ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(prev.original);
	  }
	}
	function isNextWhitespace(body, i, isRoot) {
	  if (i === undefined) {
	    i = -1;
	  }

	  var next = body[i + 1],
	      sibling = body[i + 2];
	  if (!next) {
	    return isRoot;
	  }

	  if (next.type === 'ContentStatement') {
	    return (sibling || !isRoot ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(next.original);
	  }
	}

	// Marks the node to the right of the position as omitted.
	// I.e. {{foo}}' ' will mark the ' ' node as omitted.
	//
	// If i is undefined, then the first child will be marked as such.
	//
	// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
	// content is met.
	function omitRight(body, i, multiple) {
	  var current = body[i == null ? 0 : i + 1];
	  if (!current || current.type !== 'ContentStatement' || !multiple && current.rightStripped) {
	    return;
	  }

	  var original = current.value;
	  current.value = current.value.replace(multiple ? /^\s+/ : /^[ \t]*\r?\n?/, '');
	  current.rightStripped = current.value !== original;
	}

	// Marks the node to the left of the position as omitted.
	// I.e. ' '{{foo}} will mark the ' ' node as omitted.
	//
	// If i is undefined then the last child will be marked as such.
	//
	// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
	// content is met.
	function omitLeft(body, i, multiple) {
	  var current = body[i == null ? body.length - 1 : i - 1];
	  if (!current || current.type !== 'ContentStatement' || !multiple && current.leftStripped) {
	    return;
	  }

	  // We omit the last node if it's whitespace only and not preceded by a non-content node.
	  var original = current.value;
	  current.value = current.value.replace(multiple ? /\s+$/ : /[ \t]+$/, '');
	  current.leftStripped = current.value !== original;
	  return current.leftStripped;
	}

	exports['default'] = WhitespaceControl;
	module.exports = exports['default'];
	
} (whitespaceControl, whitespaceControl.exports));

var whitespaceControlExports = whitespaceControl.exports;

var helpers = {};

helpers.__esModule = true;
helpers.SourceLocation = SourceLocation;
helpers.id = id;
helpers.stripFlags = stripFlags;
helpers.stripComment = stripComment;
helpers.preparePath = preparePath;
helpers.prepareMustache = prepareMustache;
helpers.prepareRawBlock = prepareRawBlock;
helpers.prepareBlock = prepareBlock;
helpers.prepareProgram = prepareProgram;
helpers.preparePartialBlock = preparePartialBlock;
// istanbul ignore next

function _interopRequireDefault$3(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _exception$1 = exceptionExports;

var _exception2$1 = _interopRequireDefault$3(_exception$1);

function validateClose(open, close) {
  close = close.path ? close.path.original : close;

  if (open.path.original !== close) {
    var errorNode = { loc: open.path.loc };

    throw new _exception2$1['default'](open.path.original + " doesn't match " + close, errorNode);
  }
}

function SourceLocation(source, locInfo) {
  this.source = source;
  this.start = {
    line: locInfo.first_line,
    column: locInfo.first_column
  };
  this.end = {
    line: locInfo.last_line,
    column: locInfo.last_column
  };
}

function id(token) {
  if (/^\[.*\]$/.test(token)) {
    return token.substring(1, token.length - 1);
  } else {
    return token;
  }
}

function stripFlags(open, close) {
  return {
    open: open.charAt(2) === '~',
    close: close.charAt(close.length - 3) === '~'
  };
}

function stripComment(comment) {
  return comment.replace(/^\{\{~?!-?-?/, '').replace(/-?-?~?\}\}$/, '');
}

function preparePath(data, parts, loc) {
  loc = this.locInfo(loc);

  var original = data ? '@' : '',
      dig = [],
      depth = 0;

  for (var i = 0, l = parts.length; i < l; i++) {
    var part = parts[i].part,

    // If we have [] syntax then we do not treat path references as operators,
    // i.e. foo.[this] resolves to approximately context.foo['this']
    isLiteral = parts[i].original !== part;
    original += (parts[i].separator || '') + part;

    if (!isLiteral && (part === '..' || part === '.' || part === 'this')) {
      if (dig.length > 0) {
        throw new _exception2$1['default']('Invalid path: ' + original, { loc: loc });
      } else if (part === '..') {
        depth++;
      }
    } else {
      dig.push(part);
    }
  }

  return {
    type: 'PathExpression',
    data: data,
    depth: depth,
    parts: dig,
    original: original,
    loc: loc
  };
}

function prepareMustache(path, params, hash, open, strip, locInfo) {
  // Must use charAt to support IE pre-10
  var escapeFlag = open.charAt(3) || open.charAt(2),
      escaped = escapeFlag !== '{' && escapeFlag !== '&';

  var decorator = /\*/.test(open);
  return {
    type: decorator ? 'Decorator' : 'MustacheStatement',
    path: path,
    params: params,
    hash: hash,
    escaped: escaped,
    strip: strip,
    loc: this.locInfo(locInfo)
  };
}

function prepareRawBlock(openRawBlock, contents, close, locInfo) {
  validateClose(openRawBlock, close);

  locInfo = this.locInfo(locInfo);
  var program = {
    type: 'Program',
    body: contents,
    strip: {},
    loc: locInfo
  };

  return {
    type: 'BlockStatement',
    path: openRawBlock.path,
    params: openRawBlock.params,
    hash: openRawBlock.hash,
    program: program,
    openStrip: {},
    inverseStrip: {},
    closeStrip: {},
    loc: locInfo
  };
}

function prepareBlock(openBlock, program, inverseAndProgram, close, inverted, locInfo) {
  if (close && close.path) {
    validateClose(openBlock, close);
  }

  var decorator = /\*/.test(openBlock.open);

  program.blockParams = openBlock.blockParams;

  var inverse = undefined,
      inverseStrip = undefined;

  if (inverseAndProgram) {
    if (decorator) {
      throw new _exception2$1['default']('Unexpected inverse block on decorator', inverseAndProgram);
    }

    if (inverseAndProgram.chain) {
      inverseAndProgram.program.body[0].closeStrip = close.strip;
    }

    inverseStrip = inverseAndProgram.strip;
    inverse = inverseAndProgram.program;
  }

  if (inverted) {
    inverted = inverse;
    inverse = program;
    program = inverted;
  }

  return {
    type: decorator ? 'DecoratorBlock' : 'BlockStatement',
    path: openBlock.path,
    params: openBlock.params,
    hash: openBlock.hash,
    program: program,
    inverse: inverse,
    openStrip: openBlock.strip,
    inverseStrip: inverseStrip,
    closeStrip: close && close.strip,
    loc: this.locInfo(locInfo)
  };
}

function prepareProgram(statements, loc) {
  if (!loc && statements.length) {
    var firstLoc = statements[0].loc,
        lastLoc = statements[statements.length - 1].loc;

    /* istanbul ignore else */
    if (firstLoc && lastLoc) {
      loc = {
        source: firstLoc.source,
        start: {
          line: firstLoc.start.line,
          column: firstLoc.start.column
        },
        end: {
          line: lastLoc.end.line,
          column: lastLoc.end.column
        }
      };
    }
  }

  return {
    type: 'Program',
    body: statements,
    strip: {},
    loc: loc
  };
}

function preparePartialBlock(open, program, close, locInfo) {
  validateClose(open, close);

  return {
    type: 'PartialBlockStatement',
    name: open.path,
    params: open.params,
    hash: open.hash,
    program: program,
    openStrip: open.strip,
    closeStrip: close && close.strip,
    loc: this.locInfo(locInfo)
  };
}

base.__esModule = true;
base.parseWithoutProcessing = parseWithoutProcessing;
base.parse = parse$1;
// istanbul ignore next

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

// istanbul ignore next

function _interopRequireDefault$2(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _parser = parserExports;

var _parser2 = _interopRequireDefault$2(_parser);

var _whitespaceControl = whitespaceControlExports;

var _whitespaceControl2 = _interopRequireDefault$2(_whitespaceControl);

var _helpers = helpers;

var Helpers = _interopRequireWildcard(_helpers);

var _utils$1 = utils;

base.parser = _parser2['default'];

var yy = {};
_utils$1.extend(yy, Helpers);

function parseWithoutProcessing(input, options) {
  // Just return if an already-compiled AST was passed in.
  if (input.type === 'Program') {
    return input;
  }

  _parser2['default'].yy = yy;

  // Altering the shared object here, but this is ok as parser is a sync operation
  yy.locInfo = function (locInfo) {
    return new yy.SourceLocation(options && options.srcName, locInfo);
  };

  var ast = _parser2['default'].parse(input);

  return ast;
}

function parse$1(input, options) {
  var ast = parseWithoutProcessing(input, options);
  var strip = new _whitespaceControl2['default'](options);

  return strip.accept(ast);
}

var compiler = {};

/* eslint-disable new-cap */

compiler.__esModule = true;
compiler.Compiler = Compiler;
compiler.precompile = precompile;
compiler.compile = compile;
// istanbul ignore next

function _interopRequireDefault$1(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _exception = exceptionExports;

var _exception2 = _interopRequireDefault$1(_exception);

var _utils = utils;

var _ast = astExports;

var _ast2 = _interopRequireDefault$1(_ast);

var slice = [].slice;

function Compiler() {}

// the foundHelper register will disambiguate helper lookup from finding a
// function in a context. This is necessary for mustache compatibility, which
// requires that context functions in blocks are evaluated by blockHelperMissing,
// and then proceed as if the resulting value was provided to blockHelperMissing.

Compiler.prototype = {
  compiler: Compiler,

  equals: function equals(other) {
    var len = this.opcodes.length;
    if (other.opcodes.length !== len) {
      return false;
    }

    for (var i = 0; i < len; i++) {
      var opcode = this.opcodes[i],
          otherOpcode = other.opcodes[i];
      if (opcode.opcode !== otherOpcode.opcode || !argEquals(opcode.args, otherOpcode.args)) {
        return false;
      }
    }

    // We know that length is the same between the two arrays because they are directly tied
    // to the opcode behavior above.
    len = this.children.length;
    for (var i = 0; i < len; i++) {
      if (!this.children[i].equals(other.children[i])) {
        return false;
      }
    }

    return true;
  },

  guid: 0,

  compile: function compile(program, options) {
    this.sourceNode = [];
    this.opcodes = [];
    this.children = [];
    this.options = options;
    this.stringParams = options.stringParams;
    this.trackIds = options.trackIds;

    options.blockParams = options.blockParams || [];

    options.knownHelpers = _utils.extend(Object.create(null), {
      helperMissing: true,
      blockHelperMissing: true,
      each: true,
      'if': true,
      unless: true,
      'with': true,
      log: true,
      lookup: true
    }, options.knownHelpers);

    return this.accept(program);
  },

  compileProgram: function compileProgram(program) {
    var childCompiler = new this.compiler(),
        // eslint-disable-line new-cap
    result = childCompiler.compile(program, this.options),
        guid = this.guid++;

    this.usePartial = this.usePartial || result.usePartial;

    this.children[guid] = result;
    this.useDepths = this.useDepths || result.useDepths;

    return guid;
  },

  accept: function accept(node) {
    /* istanbul ignore next: Sanity code */
    if (!this[node.type]) {
      throw new _exception2['default']('Unknown type: ' + node.type, node);
    }

    this.sourceNode.unshift(node);
    var ret = this[node.type](node);
    this.sourceNode.shift();
    return ret;
  },

  Program: function Program(program) {
    this.options.blockParams.unshift(program.blockParams);

    var body = program.body,
        bodyLength = body.length;
    for (var i = 0; i < bodyLength; i++) {
      this.accept(body[i]);
    }

    this.options.blockParams.shift();

    this.isSimple = bodyLength === 1;
    this.blockParams = program.blockParams ? program.blockParams.length : 0;

    return this;
  },

  BlockStatement: function BlockStatement(block) {
    transformLiteralToPath(block);

    var program = block.program,
        inverse = block.inverse;

    program = program && this.compileProgram(program);
    inverse = inverse && this.compileProgram(inverse);

    var type = this.classifySexpr(block);

    if (type === 'helper') {
      this.helperSexpr(block, program, inverse);
    } else if (type === 'simple') {
      this.simpleSexpr(block);

      // now that the simple mustache is resolved, we need to
      // evaluate it by executing `blockHelperMissing`
      this.opcode('pushProgram', program);
      this.opcode('pushProgram', inverse);
      this.opcode('emptyHash');
      this.opcode('blockValue', block.path.original);
    } else {
      this.ambiguousSexpr(block, program, inverse);

      // now that the simple mustache is resolved, we need to
      // evaluate it by executing `blockHelperMissing`
      this.opcode('pushProgram', program);
      this.opcode('pushProgram', inverse);
      this.opcode('emptyHash');
      this.opcode('ambiguousBlockValue');
    }

    this.opcode('append');
  },

  DecoratorBlock: function DecoratorBlock(decorator) {
    var program = decorator.program && this.compileProgram(decorator.program);
    var params = this.setupFullMustacheParams(decorator, program, undefined),
        path = decorator.path;

    this.useDecorators = true;
    this.opcode('registerDecorator', params.length, path.original);
  },

  PartialStatement: function PartialStatement(partial) {
    this.usePartial = true;

    var program = partial.program;
    if (program) {
      program = this.compileProgram(partial.program);
    }

    var params = partial.params;
    if (params.length > 1) {
      throw new _exception2['default']('Unsupported number of partial arguments: ' + params.length, partial);
    } else if (!params.length) {
      if (this.options.explicitPartialContext) {
        this.opcode('pushLiteral', 'undefined');
      } else {
        params.push({ type: 'PathExpression', parts: [], depth: 0 });
      }
    }

    var partialName = partial.name.original,
        isDynamic = partial.name.type === 'SubExpression';
    if (isDynamic) {
      this.accept(partial.name);
    }

    this.setupFullMustacheParams(partial, program, undefined, true);

    var indent = partial.indent || '';
    if (this.options.preventIndent && indent) {
      this.opcode('appendContent', indent);
      indent = '';
    }

    this.opcode('invokePartial', isDynamic, partialName, indent);
    this.opcode('append');
  },
  PartialBlockStatement: function PartialBlockStatement(partialBlock) {
    this.PartialStatement(partialBlock);
  },

  MustacheStatement: function MustacheStatement(mustache) {
    this.SubExpression(mustache);

    if (mustache.escaped && !this.options.noEscape) {
      this.opcode('appendEscaped');
    } else {
      this.opcode('append');
    }
  },
  Decorator: function Decorator(decorator) {
    this.DecoratorBlock(decorator);
  },

  ContentStatement: function ContentStatement(content) {
    if (content.value) {
      this.opcode('appendContent', content.value);
    }
  },

  CommentStatement: function CommentStatement() {},

  SubExpression: function SubExpression(sexpr) {
    transformLiteralToPath(sexpr);
    var type = this.classifySexpr(sexpr);

    if (type === 'simple') {
      this.simpleSexpr(sexpr);
    } else if (type === 'helper') {
      this.helperSexpr(sexpr);
    } else {
      this.ambiguousSexpr(sexpr);
    }
  },
  ambiguousSexpr: function ambiguousSexpr(sexpr, program, inverse) {
    var path = sexpr.path,
        name = path.parts[0],
        isBlock = program != null || inverse != null;

    this.opcode('getContext', path.depth);

    this.opcode('pushProgram', program);
    this.opcode('pushProgram', inverse);

    path.strict = true;
    this.accept(path);

    this.opcode('invokeAmbiguous', name, isBlock);
  },

  simpleSexpr: function simpleSexpr(sexpr) {
    var path = sexpr.path;
    path.strict = true;
    this.accept(path);
    this.opcode('resolvePossibleLambda');
  },

  helperSexpr: function helperSexpr(sexpr, program, inverse) {
    var params = this.setupFullMustacheParams(sexpr, program, inverse),
        path = sexpr.path,
        name = path.parts[0];

    if (this.options.knownHelpers[name]) {
      this.opcode('invokeKnownHelper', params.length, name);
    } else if (this.options.knownHelpersOnly) {
      throw new _exception2['default']('You specified knownHelpersOnly, but used the unknown helper ' + name, sexpr);
    } else {
      path.strict = true;
      path.falsy = true;

      this.accept(path);
      this.opcode('invokeHelper', params.length, path.original, _ast2['default'].helpers.simpleId(path));
    }
  },

  PathExpression: function PathExpression(path) {
    this.addDepth(path.depth);
    this.opcode('getContext', path.depth);

    var name = path.parts[0],
        scoped = _ast2['default'].helpers.scopedId(path),
        blockParamId = !path.depth && !scoped && this.blockParamIndex(name);

    if (blockParamId) {
      this.opcode('lookupBlockParam', blockParamId, path.parts);
    } else if (!name) {
      // Context reference, i.e. `{{foo .}}` or `{{foo ..}}`
      this.opcode('pushContext');
    } else if (path.data) {
      this.options.data = true;
      this.opcode('lookupData', path.depth, path.parts, path.strict);
    } else {
      this.opcode('lookupOnContext', path.parts, path.falsy, path.strict, scoped);
    }
  },

  StringLiteral: function StringLiteral(string) {
    this.opcode('pushString', string.value);
  },

  NumberLiteral: function NumberLiteral(number) {
    this.opcode('pushLiteral', number.value);
  },

  BooleanLiteral: function BooleanLiteral(bool) {
    this.opcode('pushLiteral', bool.value);
  },

  UndefinedLiteral: function UndefinedLiteral() {
    this.opcode('pushLiteral', 'undefined');
  },

  NullLiteral: function NullLiteral() {
    this.opcode('pushLiteral', 'null');
  },

  Hash: function Hash(hash) {
    var pairs = hash.pairs,
        i = 0,
        l = pairs.length;

    this.opcode('pushHash');

    for (; i < l; i++) {
      this.pushParam(pairs[i].value);
    }
    while (i--) {
      this.opcode('assignToHash', pairs[i].key);
    }
    this.opcode('popHash');
  },

  // HELPERS
  opcode: function opcode(name) {
    this.opcodes.push({
      opcode: name,
      args: slice.call(arguments, 1),
      loc: this.sourceNode[0].loc
    });
  },

  addDepth: function addDepth(depth) {
    if (!depth) {
      return;
    }

    this.useDepths = true;
  },

  classifySexpr: function classifySexpr(sexpr) {
    var isSimple = _ast2['default'].helpers.simpleId(sexpr.path);

    var isBlockParam = isSimple && !!this.blockParamIndex(sexpr.path.parts[0]);

    // a mustache is an eligible helper if:
    // * its id is simple (a single part, not `this` or `..`)
    var isHelper = !isBlockParam && _ast2['default'].helpers.helperExpression(sexpr);

    // if a mustache is an eligible helper but not a definite
    // helper, it is ambiguous, and will be resolved in a later
    // pass or at runtime.
    var isEligible = !isBlockParam && (isHelper || isSimple);

    // if ambiguous, we can possibly resolve the ambiguity now
    // An eligible helper is one that does not have a complex path, i.e. `this.foo`, `../foo` etc.
    if (isEligible && !isHelper) {
      var _name = sexpr.path.parts[0],
          options = this.options;
      if (options.knownHelpers[_name]) {
        isHelper = true;
      } else if (options.knownHelpersOnly) {
        isEligible = false;
      }
    }

    if (isHelper) {
      return 'helper';
    } else if (isEligible) {
      return 'ambiguous';
    } else {
      return 'simple';
    }
  },

  pushParams: function pushParams(params) {
    for (var i = 0, l = params.length; i < l; i++) {
      this.pushParam(params[i]);
    }
  },

  pushParam: function pushParam(val) {
    var value = val.value != null ? val.value : val.original || '';

    if (this.stringParams) {
      if (value.replace) {
        value = value.replace(/^(\.?\.\/)*/g, '').replace(/\//g, '.');
      }

      if (val.depth) {
        this.addDepth(val.depth);
      }
      this.opcode('getContext', val.depth || 0);
      this.opcode('pushStringParam', value, val.type);

      if (val.type === 'SubExpression') {
        // SubExpressions get evaluated and passed in
        // in string params mode.
        this.accept(val);
      }
    } else {
      if (this.trackIds) {
        var blockParamIndex = undefined;
        if (val.parts && !_ast2['default'].helpers.scopedId(val) && !val.depth) {
          blockParamIndex = this.blockParamIndex(val.parts[0]);
        }
        if (blockParamIndex) {
          var blockParamChild = val.parts.slice(1).join('.');
          this.opcode('pushId', 'BlockParam', blockParamIndex, blockParamChild);
        } else {
          value = val.original || value;
          if (value.replace) {
            value = value.replace(/^this(?:\.|$)/, '').replace(/^\.\//, '').replace(/^\.$/, '');
          }

          this.opcode('pushId', val.type, value);
        }
      }
      this.accept(val);
    }
  },

  setupFullMustacheParams: function setupFullMustacheParams(sexpr, program, inverse, omitEmpty) {
    var params = sexpr.params;
    this.pushParams(params);

    this.opcode('pushProgram', program);
    this.opcode('pushProgram', inverse);

    if (sexpr.hash) {
      this.accept(sexpr.hash);
    } else {
      this.opcode('emptyHash', omitEmpty);
    }

    return params;
  },

  blockParamIndex: function blockParamIndex(name) {
    for (var depth = 0, len = this.options.blockParams.length; depth < len; depth++) {
      var blockParams = this.options.blockParams[depth],
          param = blockParams && _utils.indexOf(blockParams, name);
      if (blockParams && param >= 0) {
        return [depth, param];
      }
    }
  }
};

function precompile(input, options, env) {
  if (input == null || typeof input !== 'string' && input.type !== 'Program') {
    throw new _exception2['default']('You must pass a string or Handlebars AST to Handlebars.precompile. You passed ' + input);
  }

  options = options || {};
  if (!('data' in options)) {
    options.data = true;
  }
  if (options.compat) {
    options.useDepths = true;
  }

  var ast = env.parse(input, options),
      environment = new env.Compiler().compile(ast, options);
  return new env.JavaScriptCompiler().compile(environment, options);
}

function compile(input, options, env) {
  if (options === undefined) options = {};

  if (input == null || typeof input !== 'string' && input.type !== 'Program') {
    throw new _exception2['default']('You must pass a string or Handlebars AST to Handlebars.compile. You passed ' + input);
  }

  options = _utils.extend({}, options);
  if (!('data' in options)) {
    options.data = true;
  }
  if (options.compat) {
    options.useDepths = true;
  }

  var compiled = undefined;

  function compileInput() {
    var ast = env.parse(input, options),
        environment = new env.Compiler().compile(ast, options),
        templateSpec = new env.JavaScriptCompiler().compile(environment, options, undefined, true);
    return env.template(templateSpec);
  }

  // Template is only compiled on first use and cached after that point.
  function ret(context, execOptions) {
    if (!compiled) {
      compiled = compileInput();
    }
    return compiled.call(this, context, execOptions);
  }
  ret._setup = function (setupOptions) {
    if (!compiled) {
      compiled = compileInput();
    }
    return compiled._setup(setupOptions);
  };
  ret._child = function (i, data, blockParams, depths) {
    if (!compiled) {
      compiled = compileInput();
    }
    return compiled._child(i, data, blockParams, depths);
  };
  return ret;
}

function argEquals(a, b) {
  if (a === b) {
    return true;
  }

  if (_utils.isArray(a) && _utils.isArray(b) && a.length === b.length) {
    for (var i = 0; i < a.length; i++) {
      if (!argEquals(a[i], b[i])) {
        return false;
      }
    }
    return true;
  }
}

function transformLiteralToPath(sexpr) {
  if (!sexpr.path.parts) {
    var literal = sexpr.path;
    // Casting to string here to make false and 0 literal values play nicely with the rest
    // of the system.
    sexpr.path = {
      type: 'PathExpression',
      data: false,
      depth: 0,
      parts: [literal.original + ''],
      original: literal.original + '',
      loc: literal.loc
    };
  }
}

var javascriptCompiler = {exports: {}};

var codeGen = {exports: {}};

var sourceMap = {};

var sourceMapGenerator = {};

var base64Vlq = {};

var base64 = {};

/* -*- Mode: js; js-indent-level: 2; -*- */

var hasRequiredBase64;

function requireBase64 () {
	if (hasRequiredBase64) return base64;
	hasRequiredBase64 = 1;
	/*
	 * Copyright 2011 Mozilla Foundation and contributors
	 * Licensed under the New BSD license. See LICENSE or:
	 * http://opensource.org/licenses/BSD-3-Clause
	 */

	var intToCharMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');

	/**
	 * Encode an integer in the range of 0 to 63 to a single base 64 digit.
	 */
	base64.encode = function (number) {
	  if (0 <= number && number < intToCharMap.length) {
	    return intToCharMap[number];
	  }
	  throw new TypeError("Must be between 0 and 63: " + number);
	};

	/**
	 * Decode a single base 64 character code digit to an integer. Returns -1 on
	 * failure.
	 */
	base64.decode = function (charCode) {
	  var bigA = 65;     // 'A'
	  var bigZ = 90;     // 'Z'

	  var littleA = 97;  // 'a'
	  var littleZ = 122; // 'z'

	  var zero = 48;     // '0'
	  var nine = 57;     // '9'

	  var plus = 43;     // '+'
	  var slash = 47;    // '/'

	  var littleOffset = 26;
	  var numberOffset = 52;

	  // 0 - 25: ABCDEFGHIJKLMNOPQRSTUVWXYZ
	  if (bigA <= charCode && charCode <= bigZ) {
	    return (charCode - bigA);
	  }

	  // 26 - 51: abcdefghijklmnopqrstuvwxyz
	  if (littleA <= charCode && charCode <= littleZ) {
	    return (charCode - littleA + littleOffset);
	  }

	  // 52 - 61: 0123456789
	  if (zero <= charCode && charCode <= nine) {
	    return (charCode - zero + numberOffset);
	  }

	  // 62: +
	  if (charCode == plus) {
	    return 62;
	  }

	  // 63: /
	  if (charCode == slash) {
	    return 63;
	  }

	  // Invalid base64 digit.
	  return -1;
	};
	return base64;
}

/* -*- Mode: js; js-indent-level: 2; -*- */

var hasRequiredBase64Vlq;

function requireBase64Vlq () {
	if (hasRequiredBase64Vlq) return base64Vlq;
	hasRequiredBase64Vlq = 1;
	/*
	 * Copyright 2011 Mozilla Foundation and contributors
	 * Licensed under the New BSD license. See LICENSE or:
	 * http://opensource.org/licenses/BSD-3-Clause
	 *
	 * Based on the Base 64 VLQ implementation in Closure Compiler:
	 * https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java
	 *
	 * Copyright 2011 The Closure Compiler Authors. All rights reserved.
	 * Redistribution and use in source and binary forms, with or without
	 * modification, are permitted provided that the following conditions are
	 * met:
	 *
	 *  * Redistributions of source code must retain the above copyright
	 *    notice, this list of conditions and the following disclaimer.
	 *  * Redistributions in binary form must reproduce the above
	 *    copyright notice, this list of conditions and the following
	 *    disclaimer in the documentation and/or other materials provided
	 *    with the distribution.
	 *  * Neither the name of Google Inc. nor the names of its
	 *    contributors may be used to endorse or promote products derived
	 *    from this software without specific prior written permission.
	 *
	 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
	 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
	 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
	 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
	 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
	 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
	 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
	 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
	 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	 */

	var base64 = requireBase64();

	// A single base 64 digit can contain 6 bits of data. For the base 64 variable
	// length quantities we use in the source map spec, the first bit is the sign,
	// the next four bits are the actual value, and the 6th bit is the
	// continuation bit. The continuation bit tells us whether there are more
	// digits in this value following this digit.
	//
	//   Continuation
	//   |    Sign
	//   |    |
	//   V    V
	//   101011

	var VLQ_BASE_SHIFT = 5;

	// binary: 100000
	var VLQ_BASE = 1 << VLQ_BASE_SHIFT;

	// binary: 011111
	var VLQ_BASE_MASK = VLQ_BASE - 1;

	// binary: 100000
	var VLQ_CONTINUATION_BIT = VLQ_BASE;

	/**
	 * Converts from a two-complement value to a value where the sign bit is
	 * placed in the least significant bit.  For example, as decimals:
	 *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
	 *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
	 */
	function toVLQSigned(aValue) {
	  return aValue < 0
	    ? ((-aValue) << 1) + 1
	    : (aValue << 1) + 0;
	}

	/**
	 * Converts to a two-complement value from a value where the sign bit is
	 * placed in the least significant bit.  For example, as decimals:
	 *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
	 *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
	 */
	function fromVLQSigned(aValue) {
	  var isNegative = (aValue & 1) === 1;
	  var shifted = aValue >> 1;
	  return isNegative
	    ? -shifted
	    : shifted;
	}

	/**
	 * Returns the base 64 VLQ encoded value.
	 */
	base64Vlq.encode = function base64VLQ_encode(aValue) {
	  var encoded = "";
	  var digit;

	  var vlq = toVLQSigned(aValue);

	  do {
	    digit = vlq & VLQ_BASE_MASK;
	    vlq >>>= VLQ_BASE_SHIFT;
	    if (vlq > 0) {
	      // There are still more digits in this value, so we must make sure the
	      // continuation bit is marked.
	      digit |= VLQ_CONTINUATION_BIT;
	    }
	    encoded += base64.encode(digit);
	  } while (vlq > 0);

	  return encoded;
	};

	/**
	 * Decodes the next base 64 VLQ value from the given string and returns the
	 * value and the rest of the string via the out parameter.
	 */
	base64Vlq.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
	  var strLen = aStr.length;
	  var result = 0;
	  var shift = 0;
	  var continuation, digit;

	  do {
	    if (aIndex >= strLen) {
	      throw new Error("Expected more digits in base 64 VLQ value.");
	    }

	    digit = base64.decode(aStr.charCodeAt(aIndex++));
	    if (digit === -1) {
	      throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
	    }

	    continuation = !!(digit & VLQ_CONTINUATION_BIT);
	    digit &= VLQ_BASE_MASK;
	    result = result + (digit << shift);
	    shift += VLQ_BASE_SHIFT;
	  } while (continuation);

	  aOutParam.value = fromVLQSigned(result);
	  aOutParam.rest = aIndex;
	};
	return base64Vlq;
}

var util = {};

/* -*- Mode: js; js-indent-level: 2; -*- */

var hasRequiredUtil;

function requireUtil () {
	if (hasRequiredUtil) return util;
	hasRequiredUtil = 1;
	(function (exports) {
		/*
		 * Copyright 2011 Mozilla Foundation and contributors
		 * Licensed under the New BSD license. See LICENSE or:
		 * http://opensource.org/licenses/BSD-3-Clause
		 */

		/**
		 * This is a helper function for getting values from parameter/options
		 * objects.
		 *
		 * @param args The object we are extracting values from
		 * @param name The name of the property we are getting.
		 * @param defaultValue An optional value to return if the property is missing
		 * from the object. If this is not specified and the property is missing, an
		 * error will be thrown.
		 */
		function getArg(aArgs, aName, aDefaultValue) {
		  if (aName in aArgs) {
		    return aArgs[aName];
		  } else if (arguments.length === 3) {
		    return aDefaultValue;
		  } else {
		    throw new Error('"' + aName + '" is a required argument.');
		  }
		}
		exports.getArg = getArg;

		var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;
		var dataUrlRegexp = /^data:.+\,.+$/;

		function urlParse(aUrl) {
		  var match = aUrl.match(urlRegexp);
		  if (!match) {
		    return null;
		  }
		  return {
		    scheme: match[1],
		    auth: match[2],
		    host: match[3],
		    port: match[4],
		    path: match[5]
		  };
		}
		exports.urlParse = urlParse;

		function urlGenerate(aParsedUrl) {
		  var url = '';
		  if (aParsedUrl.scheme) {
		    url += aParsedUrl.scheme + ':';
		  }
		  url += '//';
		  if (aParsedUrl.auth) {
		    url += aParsedUrl.auth + '@';
		  }
		  if (aParsedUrl.host) {
		    url += aParsedUrl.host;
		  }
		  if (aParsedUrl.port) {
		    url += ":" + aParsedUrl.port;
		  }
		  if (aParsedUrl.path) {
		    url += aParsedUrl.path;
		  }
		  return url;
		}
		exports.urlGenerate = urlGenerate;

		/**
		 * Normalizes a path, or the path portion of a URL:
		 *
		 * - Replaces consecutive slashes with one slash.
		 * - Removes unnecessary '.' parts.
		 * - Removes unnecessary '<dir>/..' parts.
		 *
		 * Based on code in the Node.js 'path' core module.
		 *
		 * @param aPath The path or url to normalize.
		 */
		function normalize(aPath) {
		  var path = aPath;
		  var url = urlParse(aPath);
		  if (url) {
		    if (!url.path) {
		      return aPath;
		    }
		    path = url.path;
		  }
		  var isAbsolute = exports.isAbsolute(path);

		  var parts = path.split(/\/+/);
		  for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
		    part = parts[i];
		    if (part === '.') {
		      parts.splice(i, 1);
		    } else if (part === '..') {
		      up++;
		    } else if (up > 0) {
		      if (part === '') {
		        // The first part is blank if the path is absolute. Trying to go
		        // above the root is a no-op. Therefore we can remove all '..' parts
		        // directly after the root.
		        parts.splice(i + 1, up);
		        up = 0;
		      } else {
		        parts.splice(i, 2);
		        up--;
		      }
		    }
		  }
		  path = parts.join('/');

		  if (path === '') {
		    path = isAbsolute ? '/' : '.';
		  }

		  if (url) {
		    url.path = path;
		    return urlGenerate(url);
		  }
		  return path;
		}
		exports.normalize = normalize;

		/**
		 * Joins two paths/URLs.
		 *
		 * @param aRoot The root path or URL.
		 * @param aPath The path or URL to be joined with the root.
		 *
		 * - If aPath is a URL or a data URI, aPath is returned, unless aPath is a
		 *   scheme-relative URL: Then the scheme of aRoot, if any, is prepended
		 *   first.
		 * - Otherwise aPath is a path. If aRoot is a URL, then its path portion
		 *   is updated with the result and aRoot is returned. Otherwise the result
		 *   is returned.
		 *   - If aPath is absolute, the result is aPath.
		 *   - Otherwise the two paths are joined with a slash.
		 * - Joining for example 'http://' and 'www.example.com' is also supported.
		 */
		function join(aRoot, aPath) {
		  if (aRoot === "") {
		    aRoot = ".";
		  }
		  if (aPath === "") {
		    aPath = ".";
		  }
		  var aPathUrl = urlParse(aPath);
		  var aRootUrl = urlParse(aRoot);
		  if (aRootUrl) {
		    aRoot = aRootUrl.path || '/';
		  }

		  // `join(foo, '//www.example.org')`
		  if (aPathUrl && !aPathUrl.scheme) {
		    if (aRootUrl) {
		      aPathUrl.scheme = aRootUrl.scheme;
		    }
		    return urlGenerate(aPathUrl);
		  }

		  if (aPathUrl || aPath.match(dataUrlRegexp)) {
		    return aPath;
		  }

		  // `join('http://', 'www.example.com')`
		  if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
		    aRootUrl.host = aPath;
		    return urlGenerate(aRootUrl);
		  }

		  var joined = aPath.charAt(0) === '/'
		    ? aPath
		    : normalize(aRoot.replace(/\/+$/, '') + '/' + aPath);

		  if (aRootUrl) {
		    aRootUrl.path = joined;
		    return urlGenerate(aRootUrl);
		  }
		  return joined;
		}
		exports.join = join;

		exports.isAbsolute = function (aPath) {
		  return aPath.charAt(0) === '/' || urlRegexp.test(aPath);
		};

		/**
		 * Make a path relative to a URL or another path.
		 *
		 * @param aRoot The root path or URL.
		 * @param aPath The path or URL to be made relative to aRoot.
		 */
		function relative(aRoot, aPath) {
		  if (aRoot === "") {
		    aRoot = ".";
		  }

		  aRoot = aRoot.replace(/\/$/, '');

		  // It is possible for the path to be above the root. In this case, simply
		  // checking whether the root is a prefix of the path won't work. Instead, we
		  // need to remove components from the root one by one, until either we find
		  // a prefix that fits, or we run out of components to remove.
		  var level = 0;
		  while (aPath.indexOf(aRoot + '/') !== 0) {
		    var index = aRoot.lastIndexOf("/");
		    if (index < 0) {
		      return aPath;
		    }

		    // If the only part of the root that is left is the scheme (i.e. http://,
		    // file:///, etc.), one or more slashes (/), or simply nothing at all, we
		    // have exhausted all components, so the path is not relative to the root.
		    aRoot = aRoot.slice(0, index);
		    if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
		      return aPath;
		    }

		    ++level;
		  }

		  // Make sure we add a "../" for each component we removed from the root.
		  return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
		}
		exports.relative = relative;

		var supportsNullProto = (function () {
		  var obj = Object.create(null);
		  return !('__proto__' in obj);
		}());

		function identity (s) {
		  return s;
		}

		/**
		 * Because behavior goes wacky when you set `__proto__` on objects, we
		 * have to prefix all the strings in our set with an arbitrary character.
		 *
		 * See https://github.com/mozilla/source-map/pull/31 and
		 * https://github.com/mozilla/source-map/issues/30
		 *
		 * @param String aStr
		 */
		function toSetString(aStr) {
		  if (isProtoString(aStr)) {
		    return '$' + aStr;
		  }

		  return aStr;
		}
		exports.toSetString = supportsNullProto ? identity : toSetString;

		function fromSetString(aStr) {
		  if (isProtoString(aStr)) {
		    return aStr.slice(1);
		  }

		  return aStr;
		}
		exports.fromSetString = supportsNullProto ? identity : fromSetString;

		function isProtoString(s) {
		  if (!s) {
		    return false;
		  }

		  var length = s.length;

		  if (length < 9 /* "__proto__".length */) {
		    return false;
		  }

		  if (s.charCodeAt(length - 1) !== 95  /* '_' */ ||
		      s.charCodeAt(length - 2) !== 95  /* '_' */ ||
		      s.charCodeAt(length - 3) !== 111 /* 'o' */ ||
		      s.charCodeAt(length - 4) !== 116 /* 't' */ ||
		      s.charCodeAt(length - 5) !== 111 /* 'o' */ ||
		      s.charCodeAt(length - 6) !== 114 /* 'r' */ ||
		      s.charCodeAt(length - 7) !== 112 /* 'p' */ ||
		      s.charCodeAt(length - 8) !== 95  /* '_' */ ||
		      s.charCodeAt(length - 9) !== 95  /* '_' */) {
		    return false;
		  }

		  for (var i = length - 10; i >= 0; i--) {
		    if (s.charCodeAt(i) !== 36 /* '$' */) {
		      return false;
		    }
		  }

		  return true;
		}

		/**
		 * Comparator between two mappings where the original positions are compared.
		 *
		 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
		 * mappings with the same original source/line/column, but different generated
		 * line and column the same. Useful when searching for a mapping with a
		 * stubbed out mapping.
		 */
		function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
		  var cmp = strcmp(mappingA.source, mappingB.source);
		  if (cmp !== 0) {
		    return cmp;
		  }

		  cmp = mappingA.originalLine - mappingB.originalLine;
		  if (cmp !== 0) {
		    return cmp;
		  }

		  cmp = mappingA.originalColumn - mappingB.originalColumn;
		  if (cmp !== 0 || onlyCompareOriginal) {
		    return cmp;
		  }

		  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
		  if (cmp !== 0) {
		    return cmp;
		  }

		  cmp = mappingA.generatedLine - mappingB.generatedLine;
		  if (cmp !== 0) {
		    return cmp;
		  }

		  return strcmp(mappingA.name, mappingB.name);
		}
		exports.compareByOriginalPositions = compareByOriginalPositions;

		/**
		 * Comparator between two mappings with deflated source and name indices where
		 * the generated positions are compared.
		 *
		 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
		 * mappings with the same generated line and column, but different
		 * source/name/original line and column the same. Useful when searching for a
		 * mapping with a stubbed out mapping.
		 */
		function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
		  var cmp = mappingA.generatedLine - mappingB.generatedLine;
		  if (cmp !== 0) {
		    return cmp;
		  }

		  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
		  if (cmp !== 0 || onlyCompareGenerated) {
		    return cmp;
		  }

		  cmp = strcmp(mappingA.source, mappingB.source);
		  if (cmp !== 0) {
		    return cmp;
		  }

		  cmp = mappingA.originalLine - mappingB.originalLine;
		  if (cmp !== 0) {
		    return cmp;
		  }

		  cmp = mappingA.originalColumn - mappingB.originalColumn;
		  if (cmp !== 0) {
		    return cmp;
		  }

		  return strcmp(mappingA.name, mappingB.name);
		}
		exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;

		function strcmp(aStr1, aStr2) {
		  if (aStr1 === aStr2) {
		    return 0;
		  }

		  if (aStr1 === null) {
		    return 1; // aStr2 !== null
		  }

		  if (aStr2 === null) {
		    return -1; // aStr1 !== null
		  }

		  if (aStr1 > aStr2) {
		    return 1;
		  }

		  return -1;
		}

		/**
		 * Comparator between two mappings with inflated source and name strings where
		 * the generated positions are compared.
		 */
		function compareByGeneratedPositionsInflated(mappingA, mappingB) {
		  var cmp = mappingA.generatedLine - mappingB.generatedLine;
		  if (cmp !== 0) {
		    return cmp;
		  }

		  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
		  if (cmp !== 0) {
		    return cmp;
		  }

		  cmp = strcmp(mappingA.source, mappingB.source);
		  if (cmp !== 0) {
		    return cmp;
		  }

		  cmp = mappingA.originalLine - mappingB.originalLine;
		  if (cmp !== 0) {
		    return cmp;
		  }

		  cmp = mappingA.originalColumn - mappingB.originalColumn;
		  if (cmp !== 0) {
		    return cmp;
		  }

		  return strcmp(mappingA.name, mappingB.name);
		}
		exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;

		/**
		 * Strip any JSON XSSI avoidance prefix from the string (as documented
		 * in the source maps specification), and then parse the string as
		 * JSON.
		 */
		function parseSourceMapInput(str) {
		  return JSON.parse(str.replace(/^\)]}'[^\n]*\n/, ''));
		}
		exports.parseSourceMapInput = parseSourceMapInput;

		/**
		 * Compute the URL of a source given the the source root, the source's
		 * URL, and the source map's URL.
		 */
		function computeSourceURL(sourceRoot, sourceURL, sourceMapURL) {
		  sourceURL = sourceURL || '';

		  if (sourceRoot) {
		    // This follows what Chrome does.
		    if (sourceRoot[sourceRoot.length - 1] !== '/' && sourceURL[0] !== '/') {
		      sourceRoot += '/';
		    }
		    // The spec says:
		    //   Line 4: An optional source root, useful for relocating source
		    //   files on a server or removing repeated values in the
		    //   “sources” entry.  This value is prepended to the individual
		    //   entries in the “source” field.
		    sourceURL = sourceRoot + sourceURL;
		  }

		  // Historically, SourceMapConsumer did not take the sourceMapURL as
		  // a parameter.  This mode is still somewhat supported, which is why
		  // this code block is conditional.  However, it's preferable to pass
		  // the source map URL to SourceMapConsumer, so that this function
		  // can implement the source URL resolution algorithm as outlined in
		  // the spec.  This block is basically the equivalent of:
		  //    new URL(sourceURL, sourceMapURL).toString()
		  // ... except it avoids using URL, which wasn't available in the
		  // older releases of node still supported by this library.
		  //
		  // The spec says:
		  //   If the sources are not absolute URLs after prepending of the
		  //   “sourceRoot”, the sources are resolved relative to the
		  //   SourceMap (like resolving script src in a html document).
		  if (sourceMapURL) {
		    var parsed = urlParse(sourceMapURL);
		    if (!parsed) {
		      throw new Error("sourceMapURL could not be parsed");
		    }
		    if (parsed.path) {
		      // Strip the last path component, but keep the "/".
		      var index = parsed.path.lastIndexOf('/');
		      if (index >= 0) {
		        parsed.path = parsed.path.substring(0, index + 1);
		      }
		    }
		    sourceURL = join(urlGenerate(parsed), sourceURL);
		  }

		  return normalize(sourceURL);
		}
		exports.computeSourceURL = computeSourceURL; 
	} (util));
	return util;
}

var arraySet = {};

/* -*- Mode: js; js-indent-level: 2; -*- */

var hasRequiredArraySet;

function requireArraySet () {
	if (hasRequiredArraySet) return arraySet;
	hasRequiredArraySet = 1;
	/*
	 * Copyright 2011 Mozilla Foundation and contributors
	 * Licensed under the New BSD license. See LICENSE or:
	 * http://opensource.org/licenses/BSD-3-Clause
	 */

	var util = requireUtil();
	var has = Object.prototype.hasOwnProperty;
	var hasNativeMap = typeof Map !== "undefined";

	/**
	 * A data structure which is a combination of an array and a set. Adding a new
	 * member is O(1), testing for membership is O(1), and finding the index of an
	 * element is O(1). Removing elements from the set is not supported. Only
	 * strings are supported for membership.
	 */
	function ArraySet() {
	  this._array = [];
	  this._set = hasNativeMap ? new Map() : Object.create(null);
	}

	/**
	 * Static method for creating ArraySet instances from an existing array.
	 */
	ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
	  var set = new ArraySet();
	  for (var i = 0, len = aArray.length; i < len; i++) {
	    set.add(aArray[i], aAllowDuplicates);
	  }
	  return set;
	};

	/**
	 * Return how many unique items are in this ArraySet. If duplicates have been
	 * added, than those do not count towards the size.
	 *
	 * @returns Number
	 */
	ArraySet.prototype.size = function ArraySet_size() {
	  return hasNativeMap ? this._set.size : Object.getOwnPropertyNames(this._set).length;
	};

	/**
	 * Add the given string to this set.
	 *
	 * @param String aStr
	 */
	ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
	  var sStr = hasNativeMap ? aStr : util.toSetString(aStr);
	  var isDuplicate = hasNativeMap ? this.has(aStr) : has.call(this._set, sStr);
	  var idx = this._array.length;
	  if (!isDuplicate || aAllowDuplicates) {
	    this._array.push(aStr);
	  }
	  if (!isDuplicate) {
	    if (hasNativeMap) {
	      this._set.set(aStr, idx);
	    } else {
	      this._set[sStr] = idx;
	    }
	  }
	};

	/**
	 * Is the given string a member of this set?
	 *
	 * @param String aStr
	 */
	ArraySet.prototype.has = function ArraySet_has(aStr) {
	  if (hasNativeMap) {
	    return this._set.has(aStr);
	  } else {
	    var sStr = util.toSetString(aStr);
	    return has.call(this._set, sStr);
	  }
	};

	/**
	 * What is the index of the given string in the array?
	 *
	 * @param String aStr
	 */
	ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
	  if (hasNativeMap) {
	    var idx = this._set.get(aStr);
	    if (idx >= 0) {
	        return idx;
	    }
	  } else {
	    var sStr = util.toSetString(aStr);
	    if (has.call(this._set, sStr)) {
	      return this._set[sStr];
	    }
	  }

	  throw new Error('"' + aStr + '" is not in the set.');
	};

	/**
	 * What is the element at the given index?
	 *
	 * @param Number aIdx
	 */
	ArraySet.prototype.at = function ArraySet_at(aIdx) {
	  if (aIdx >= 0 && aIdx < this._array.length) {
	    return this._array[aIdx];
	  }
	  throw new Error('No element indexed by ' + aIdx);
	};

	/**
	 * Returns the array representation of this set (which has the proper indices
	 * indicated by indexOf). Note that this is a copy of the internal array used
	 * for storing the members so that no one can mess with internal state.
	 */
	ArraySet.prototype.toArray = function ArraySet_toArray() {
	  return this._array.slice();
	};

	arraySet.ArraySet = ArraySet;
	return arraySet;
}

var mappingList = {};

/* -*- Mode: js; js-indent-level: 2; -*- */

var hasRequiredMappingList;

function requireMappingList () {
	if (hasRequiredMappingList) return mappingList;
	hasRequiredMappingList = 1;
	/*
	 * Copyright 2014 Mozilla Foundation and contributors
	 * Licensed under the New BSD license. See LICENSE or:
	 * http://opensource.org/licenses/BSD-3-Clause
	 */

	var util = requireUtil();

	/**
	 * Determine whether mappingB is after mappingA with respect to generated
	 * position.
	 */
	function generatedPositionAfter(mappingA, mappingB) {
	  // Optimized for most common case
	  var lineA = mappingA.generatedLine;
	  var lineB = mappingB.generatedLine;
	  var columnA = mappingA.generatedColumn;
	  var columnB = mappingB.generatedColumn;
	  return lineB > lineA || lineB == lineA && columnB >= columnA ||
	         util.compareByGeneratedPositionsInflated(mappingA, mappingB) <= 0;
	}

	/**
	 * A data structure to provide a sorted view of accumulated mappings in a
	 * performance conscious manner. It trades a neglibable overhead in general
	 * case for a large speedup in case of mappings being added in order.
	 */
	function MappingList() {
	  this._array = [];
	  this._sorted = true;
	  // Serves as infimum
	  this._last = {generatedLine: -1, generatedColumn: 0};
	}

	/**
	 * Iterate through internal items. This method takes the same arguments that
	 * `Array.prototype.forEach` takes.
	 *
	 * NOTE: The order of the mappings is NOT guaranteed.
	 */
	MappingList.prototype.unsortedForEach =
	  function MappingList_forEach(aCallback, aThisArg) {
	    this._array.forEach(aCallback, aThisArg);
	  };

	/**
	 * Add the given source mapping.
	 *
	 * @param Object aMapping
	 */
	MappingList.prototype.add = function MappingList_add(aMapping) {
	  if (generatedPositionAfter(this._last, aMapping)) {
	    this._last = aMapping;
	    this._array.push(aMapping);
	  } else {
	    this._sorted = false;
	    this._array.push(aMapping);
	  }
	};

	/**
	 * Returns the flat, sorted array of mappings. The mappings are sorted by
	 * generated position.
	 *
	 * WARNING: This method returns internal data without copying, for
	 * performance. The return value must NOT be mutated, and should be treated as
	 * an immutable borrow. If you want to take ownership, you must make your own
	 * copy.
	 */
	MappingList.prototype.toArray = function MappingList_toArray() {
	  if (!this._sorted) {
	    this._array.sort(util.compareByGeneratedPositionsInflated);
	    this._sorted = true;
	  }
	  return this._array;
	};

	mappingList.MappingList = MappingList;
	return mappingList;
}

/* -*- Mode: js; js-indent-level: 2; -*- */

var hasRequiredSourceMapGenerator;

function requireSourceMapGenerator () {
	if (hasRequiredSourceMapGenerator) return sourceMapGenerator;
	hasRequiredSourceMapGenerator = 1;
	/*
	 * Copyright 2011 Mozilla Foundation and contributors
	 * Licensed under the New BSD license. See LICENSE or:
	 * http://opensource.org/licenses/BSD-3-Clause
	 */

	var base64VLQ = requireBase64Vlq();
	var util = requireUtil();
	var ArraySet = requireArraySet().ArraySet;
	var MappingList = requireMappingList().MappingList;

	/**
	 * An instance of the SourceMapGenerator represents a source map which is
	 * being built incrementally. You may pass an object with the following
	 * properties:
	 *
	 *   - file: The filename of the generated source.
	 *   - sourceRoot: A root for all relative URLs in this source map.
	 */
	function SourceMapGenerator(aArgs) {
	  if (!aArgs) {
	    aArgs = {};
	  }
	  this._file = util.getArg(aArgs, 'file', null);
	  this._sourceRoot = util.getArg(aArgs, 'sourceRoot', null);
	  this._skipValidation = util.getArg(aArgs, 'skipValidation', false);
	  this._sources = new ArraySet();
	  this._names = new ArraySet();
	  this._mappings = new MappingList();
	  this._sourcesContents = null;
	}

	SourceMapGenerator.prototype._version = 3;

	/**
	 * Creates a new SourceMapGenerator based on a SourceMapConsumer
	 *
	 * @param aSourceMapConsumer The SourceMap.
	 */
	SourceMapGenerator.fromSourceMap =
	  function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
	    var sourceRoot = aSourceMapConsumer.sourceRoot;
	    var generator = new SourceMapGenerator({
	      file: aSourceMapConsumer.file,
	      sourceRoot: sourceRoot
	    });
	    aSourceMapConsumer.eachMapping(function (mapping) {
	      var newMapping = {
	        generated: {
	          line: mapping.generatedLine,
	          column: mapping.generatedColumn
	        }
	      };

	      if (mapping.source != null) {
	        newMapping.source = mapping.source;
	        if (sourceRoot != null) {
	          newMapping.source = util.relative(sourceRoot, newMapping.source);
	        }

	        newMapping.original = {
	          line: mapping.originalLine,
	          column: mapping.originalColumn
	        };

	        if (mapping.name != null) {
	          newMapping.name = mapping.name;
	        }
	      }

	      generator.addMapping(newMapping);
	    });
	    aSourceMapConsumer.sources.forEach(function (sourceFile) {
	      var sourceRelative = sourceFile;
	      if (sourceRoot !== null) {
	        sourceRelative = util.relative(sourceRoot, sourceFile);
	      }

	      if (!generator._sources.has(sourceRelative)) {
	        generator._sources.add(sourceRelative);
	      }

	      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
	      if (content != null) {
	        generator.setSourceContent(sourceFile, content);
	      }
	    });
	    return generator;
	  };

	/**
	 * Add a single mapping from original source line and column to the generated
	 * source's line and column for this source map being created. The mapping
	 * object should have the following properties:
	 *
	 *   - generated: An object with the generated line and column positions.
	 *   - original: An object with the original line and column positions.
	 *   - source: The original source file (relative to the sourceRoot).
	 *   - name: An optional original token name for this mapping.
	 */
	SourceMapGenerator.prototype.addMapping =
	  function SourceMapGenerator_addMapping(aArgs) {
	    var generated = util.getArg(aArgs, 'generated');
	    var original = util.getArg(aArgs, 'original', null);
	    var source = util.getArg(aArgs, 'source', null);
	    var name = util.getArg(aArgs, 'name', null);

	    if (!this._skipValidation) {
	      this._validateMapping(generated, original, source, name);
	    }

	    if (source != null) {
	      source = String(source);
	      if (!this._sources.has(source)) {
	        this._sources.add(source);
	      }
	    }

	    if (name != null) {
	      name = String(name);
	      if (!this._names.has(name)) {
	        this._names.add(name);
	      }
	    }

	    this._mappings.add({
	      generatedLine: generated.line,
	      generatedColumn: generated.column,
	      originalLine: original != null && original.line,
	      originalColumn: original != null && original.column,
	      source: source,
	      name: name
	    });
	  };

	/**
	 * Set the source content for a source file.
	 */
	SourceMapGenerator.prototype.setSourceContent =
	  function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
	    var source = aSourceFile;
	    if (this._sourceRoot != null) {
	      source = util.relative(this._sourceRoot, source);
	    }

	    if (aSourceContent != null) {
	      // Add the source content to the _sourcesContents map.
	      // Create a new _sourcesContents map if the property is null.
	      if (!this._sourcesContents) {
	        this._sourcesContents = Object.create(null);
	      }
	      this._sourcesContents[util.toSetString(source)] = aSourceContent;
	    } else if (this._sourcesContents) {
	      // Remove the source file from the _sourcesContents map.
	      // If the _sourcesContents map is empty, set the property to null.
	      delete this._sourcesContents[util.toSetString(source)];
	      if (Object.keys(this._sourcesContents).length === 0) {
	        this._sourcesContents = null;
	      }
	    }
	  };

	/**
	 * Applies the mappings of a sub-source-map for a specific source file to the
	 * source map being generated. Each mapping to the supplied source file is
	 * rewritten using the supplied source map. Note: The resolution for the
	 * resulting mappings is the minimium of this map and the supplied map.
	 *
	 * @param aSourceMapConsumer The source map to be applied.
	 * @param aSourceFile Optional. The filename of the source file.
	 *        If omitted, SourceMapConsumer's file property will be used.
	 * @param aSourceMapPath Optional. The dirname of the path to the source map
	 *        to be applied. If relative, it is relative to the SourceMapConsumer.
	 *        This parameter is needed when the two source maps aren't in the same
	 *        directory, and the source map to be applied contains relative source
	 *        paths. If so, those relative source paths need to be rewritten
	 *        relative to the SourceMapGenerator.
	 */
	SourceMapGenerator.prototype.applySourceMap =
	  function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
	    var sourceFile = aSourceFile;
	    // If aSourceFile is omitted, we will use the file property of the SourceMap
	    if (aSourceFile == null) {
	      if (aSourceMapConsumer.file == null) {
	        throw new Error(
	          'SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, ' +
	          'or the source map\'s "file" property. Both were omitted.'
	        );
	      }
	      sourceFile = aSourceMapConsumer.file;
	    }
	    var sourceRoot = this._sourceRoot;
	    // Make "sourceFile" relative if an absolute Url is passed.
	    if (sourceRoot != null) {
	      sourceFile = util.relative(sourceRoot, sourceFile);
	    }
	    // Applying the SourceMap can add and remove items from the sources and
	    // the names array.
	    var newSources = new ArraySet();
	    var newNames = new ArraySet();

	    // Find mappings for the "sourceFile"
	    this._mappings.unsortedForEach(function (mapping) {
	      if (mapping.source === sourceFile && mapping.originalLine != null) {
	        // Check if it can be mapped by the source map, then update the mapping.
	        var original = aSourceMapConsumer.originalPositionFor({
	          line: mapping.originalLine,
	          column: mapping.originalColumn
	        });
	        if (original.source != null) {
	          // Copy mapping
	          mapping.source = original.source;
	          if (aSourceMapPath != null) {
	            mapping.source = util.join(aSourceMapPath, mapping.source);
	          }
	          if (sourceRoot != null) {
	            mapping.source = util.relative(sourceRoot, mapping.source);
	          }
	          mapping.originalLine = original.line;
	          mapping.originalColumn = original.column;
	          if (original.name != null) {
	            mapping.name = original.name;
	          }
	        }
	      }

	      var source = mapping.source;
	      if (source != null && !newSources.has(source)) {
	        newSources.add(source);
	      }

	      var name = mapping.name;
	      if (name != null && !newNames.has(name)) {
	        newNames.add(name);
	      }

	    }, this);
	    this._sources = newSources;
	    this._names = newNames;

	    // Copy sourcesContents of applied map.
	    aSourceMapConsumer.sources.forEach(function (sourceFile) {
	      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
	      if (content != null) {
	        if (aSourceMapPath != null) {
	          sourceFile = util.join(aSourceMapPath, sourceFile);
	        }
	        if (sourceRoot != null) {
	          sourceFile = util.relative(sourceRoot, sourceFile);
	        }
	        this.setSourceContent(sourceFile, content);
	      }
	    }, this);
	  };

	/**
	 * A mapping can have one of the three levels of data:
	 *
	 *   1. Just the generated position.
	 *   2. The Generated position, original position, and original source.
	 *   3. Generated and original position, original source, as well as a name
	 *      token.
	 *
	 * To maintain consistency, we validate that any new mapping being added falls
	 * in to one of these categories.
	 */
	SourceMapGenerator.prototype._validateMapping =
	  function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource,
	                                              aName) {
	    // When aOriginal is truthy but has empty values for .line and .column,
	    // it is most likely a programmer error. In this case we throw a very
	    // specific error message to try to guide them the right way.
	    // For example: https://github.com/Polymer/polymer-bundler/pull/519
	    if (aOriginal && typeof aOriginal.line !== 'number' && typeof aOriginal.column !== 'number') {
	        throw new Error(
	            'original.line and original.column are not numbers -- you probably meant to omit ' +
	            'the original mapping entirely and only map the generated position. If so, pass ' +
	            'null for the original mapping instead of an object with empty or null values.'
	        );
	    }

	    if (aGenerated && 'line' in aGenerated && 'column' in aGenerated
	        && aGenerated.line > 0 && aGenerated.column >= 0
	        && !aOriginal && !aSource && !aName) {
	      // Case 1.
	      return;
	    }
	    else if (aGenerated && 'line' in aGenerated && 'column' in aGenerated
	             && aOriginal && 'line' in aOriginal && 'column' in aOriginal
	             && aGenerated.line > 0 && aGenerated.column >= 0
	             && aOriginal.line > 0 && aOriginal.column >= 0
	             && aSource) {
	      // Cases 2 and 3.
	      return;
	    }
	    else {
	      throw new Error('Invalid mapping: ' + JSON.stringify({
	        generated: aGenerated,
	        source: aSource,
	        original: aOriginal,
	        name: aName
	      }));
	    }
	  };

	/**
	 * Serialize the accumulated mappings in to the stream of base 64 VLQs
	 * specified by the source map format.
	 */
	SourceMapGenerator.prototype._serializeMappings =
	  function SourceMapGenerator_serializeMappings() {
	    var previousGeneratedColumn = 0;
	    var previousGeneratedLine = 1;
	    var previousOriginalColumn = 0;
	    var previousOriginalLine = 0;
	    var previousName = 0;
	    var previousSource = 0;
	    var result = '';
	    var next;
	    var mapping;
	    var nameIdx;
	    var sourceIdx;

	    var mappings = this._mappings.toArray();
	    for (var i = 0, len = mappings.length; i < len; i++) {
	      mapping = mappings[i];
	      next = '';

	      if (mapping.generatedLine !== previousGeneratedLine) {
	        previousGeneratedColumn = 0;
	        while (mapping.generatedLine !== previousGeneratedLine) {
	          next += ';';
	          previousGeneratedLine++;
	        }
	      }
	      else {
	        if (i > 0) {
	          if (!util.compareByGeneratedPositionsInflated(mapping, mappings[i - 1])) {
	            continue;
	          }
	          next += ',';
	        }
	      }

	      next += base64VLQ.encode(mapping.generatedColumn
	                                 - previousGeneratedColumn);
	      previousGeneratedColumn = mapping.generatedColumn;

	      if (mapping.source != null) {
	        sourceIdx = this._sources.indexOf(mapping.source);
	        next += base64VLQ.encode(sourceIdx - previousSource);
	        previousSource = sourceIdx;

	        // lines are stored 0-based in SourceMap spec version 3
	        next += base64VLQ.encode(mapping.originalLine - 1
	                                   - previousOriginalLine);
	        previousOriginalLine = mapping.originalLine - 1;

	        next += base64VLQ.encode(mapping.originalColumn
	                                   - previousOriginalColumn);
	        previousOriginalColumn = mapping.originalColumn;

	        if (mapping.name != null) {
	          nameIdx = this._names.indexOf(mapping.name);
	          next += base64VLQ.encode(nameIdx - previousName);
	          previousName = nameIdx;
	        }
	      }

	      result += next;
	    }

	    return result;
	  };

	SourceMapGenerator.prototype._generateSourcesContent =
	  function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
	    return aSources.map(function (source) {
	      if (!this._sourcesContents) {
	        return null;
	      }
	      if (aSourceRoot != null) {
	        source = util.relative(aSourceRoot, source);
	      }
	      var key = util.toSetString(source);
	      return Object.prototype.hasOwnProperty.call(this._sourcesContents, key)
	        ? this._sourcesContents[key]
	        : null;
	    }, this);
	  };

	/**
	 * Externalize the source map.
	 */
	SourceMapGenerator.prototype.toJSON =
	  function SourceMapGenerator_toJSON() {
	    var map = {
	      version: this._version,
	      sources: this._sources.toArray(),
	      names: this._names.toArray(),
	      mappings: this._serializeMappings()
	    };
	    if (this._file != null) {
	      map.file = this._file;
	    }
	    if (this._sourceRoot != null) {
	      map.sourceRoot = this._sourceRoot;
	    }
	    if (this._sourcesContents) {
	      map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot);
	    }

	    return map;
	  };

	/**
	 * Render the source map being generated to a string.
	 */
	SourceMapGenerator.prototype.toString =
	  function SourceMapGenerator_toString() {
	    return JSON.stringify(this.toJSON());
	  };

	sourceMapGenerator.SourceMapGenerator = SourceMapGenerator;
	return sourceMapGenerator;
}

var sourceMapConsumer = {};

var binarySearch = {};

/* -*- Mode: js; js-indent-level: 2; -*- */

var hasRequiredBinarySearch;

function requireBinarySearch () {
	if (hasRequiredBinarySearch) return binarySearch;
	hasRequiredBinarySearch = 1;
	(function (exports) {
		/*
		 * Copyright 2011 Mozilla Foundation and contributors
		 * Licensed under the New BSD license. See LICENSE or:
		 * http://opensource.org/licenses/BSD-3-Clause
		 */

		exports.GREATEST_LOWER_BOUND = 1;
		exports.LEAST_UPPER_BOUND = 2;

		/**
		 * Recursive implementation of binary search.
		 *
		 * @param aLow Indices here and lower do not contain the needle.
		 * @param aHigh Indices here and higher do not contain the needle.
		 * @param aNeedle The element being searched for.
		 * @param aHaystack The non-empty array being searched.
		 * @param aCompare Function which takes two elements and returns -1, 0, or 1.
		 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
		 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
		 *     closest element that is smaller than or greater than the one we are
		 *     searching for, respectively, if the exact element cannot be found.
		 */
		function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
		  // This function terminates when one of the following is true:
		  //
		  //   1. We find the exact element we are looking for.
		  //
		  //   2. We did not find the exact element, but we can return the index of
		  //      the next-closest element.
		  //
		  //   3. We did not find the exact element, and there is no next-closest
		  //      element than the one we are searching for, so we return -1.
		  var mid = Math.floor((aHigh - aLow) / 2) + aLow;
		  var cmp = aCompare(aNeedle, aHaystack[mid], true);
		  if (cmp === 0) {
		    // Found the element we are looking for.
		    return mid;
		  }
		  else if (cmp > 0) {
		    // Our needle is greater than aHaystack[mid].
		    if (aHigh - mid > 1) {
		      // The element is in the upper half.
		      return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
		    }

		    // The exact needle element was not found in this haystack. Determine if
		    // we are in termination case (3) or (2) and return the appropriate thing.
		    if (aBias == exports.LEAST_UPPER_BOUND) {
		      return aHigh < aHaystack.length ? aHigh : -1;
		    } else {
		      return mid;
		    }
		  }
		  else {
		    // Our needle is less than aHaystack[mid].
		    if (mid - aLow > 1) {
		      // The element is in the lower half.
		      return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
		    }

		    // we are in termination case (3) or (2) and return the appropriate thing.
		    if (aBias == exports.LEAST_UPPER_BOUND) {
		      return mid;
		    } else {
		      return aLow < 0 ? -1 : aLow;
		    }
		  }
		}

		/**
		 * This is an implementation of binary search which will always try and return
		 * the index of the closest element if there is no exact hit. This is because
		 * mappings between original and generated line/col pairs are single points,
		 * and there is an implicit region between each of them, so a miss just means
		 * that you aren't on the very start of a region.
		 *
		 * @param aNeedle The element you are looking for.
		 * @param aHaystack The array that is being searched.
		 * @param aCompare A function which takes the needle and an element in the
		 *     array and returns -1, 0, or 1 depending on whether the needle is less
		 *     than, equal to, or greater than the element, respectively.
		 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
		 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
		 *     closest element that is smaller than or greater than the one we are
		 *     searching for, respectively, if the exact element cannot be found.
		 *     Defaults to 'binarySearch.GREATEST_LOWER_BOUND'.
		 */
		exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
		  if (aHaystack.length === 0) {
		    return -1;
		  }

		  var index = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack,
		                              aCompare, aBias || exports.GREATEST_LOWER_BOUND);
		  if (index < 0) {
		    return -1;
		  }

		  // We have found either the exact element, or the next-closest element than
		  // the one we are searching for. However, there may be more than one such
		  // element. Make sure we always return the smallest of these.
		  while (index - 1 >= 0) {
		    if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
		      break;
		    }
		    --index;
		  }

		  return index;
		}; 
	} (binarySearch));
	return binarySearch;
}

var quickSort = {};

/* -*- Mode: js; js-indent-level: 2; -*- */

var hasRequiredQuickSort;

function requireQuickSort () {
	if (hasRequiredQuickSort) return quickSort;
	hasRequiredQuickSort = 1;
	/*
	 * Copyright 2011 Mozilla Foundation and contributors
	 * Licensed under the New BSD license. See LICENSE or:
	 * http://opensource.org/licenses/BSD-3-Clause
	 */

	// It turns out that some (most?) JavaScript engines don't self-host
	// `Array.prototype.sort`. This makes sense because C++ will likely remain
	// faster than JS when doing raw CPU-intensive sorting. However, when using a
	// custom comparator function, calling back and forth between the VM's C++ and
	// JIT'd JS is rather slow *and* loses JIT type information, resulting in
	// worse generated code for the comparator function than would be optimal. In
	// fact, when sorting with a comparator, these costs outweigh the benefits of
	// sorting in C++. By using our own JS-implemented Quick Sort (below), we get
	// a ~3500ms mean speed-up in `bench/bench.html`.

	/**
	 * Swap the elements indexed by `x` and `y` in the array `ary`.
	 *
	 * @param {Array} ary
	 *        The array.
	 * @param {Number} x
	 *        The index of the first item.
	 * @param {Number} y
	 *        The index of the second item.
	 */
	function swap(ary, x, y) {
	  var temp = ary[x];
	  ary[x] = ary[y];
	  ary[y] = temp;
	}

	/**
	 * Returns a random integer within the range `low .. high` inclusive.
	 *
	 * @param {Number} low
	 *        The lower bound on the range.
	 * @param {Number} high
	 *        The upper bound on the range.
	 */
	function randomIntInRange(low, high) {
	  return Math.round(low + (Math.random() * (high - low)));
	}

	/**
	 * The Quick Sort algorithm.
	 *
	 * @param {Array} ary
	 *        An array to sort.
	 * @param {function} comparator
	 *        Function to use to compare two items.
	 * @param {Number} p
	 *        Start index of the array
	 * @param {Number} r
	 *        End index of the array
	 */
	function doQuickSort(ary, comparator, p, r) {
	  // If our lower bound is less than our upper bound, we (1) partition the
	  // array into two pieces and (2) recurse on each half. If it is not, this is
	  // the empty array and our base case.

	  if (p < r) {
	    // (1) Partitioning.
	    //
	    // The partitioning chooses a pivot between `p` and `r` and moves all
	    // elements that are less than or equal to the pivot to the before it, and
	    // all the elements that are greater than it after it. The effect is that
	    // once partition is done, the pivot is in the exact place it will be when
	    // the array is put in sorted order, and it will not need to be moved
	    // again. This runs in O(n) time.

	    // Always choose a random pivot so that an input array which is reverse
	    // sorted does not cause O(n^2) running time.
	    var pivotIndex = randomIntInRange(p, r);
	    var i = p - 1;

	    swap(ary, pivotIndex, r);
	    var pivot = ary[r];

	    // Immediately after `j` is incremented in this loop, the following hold
	    // true:
	    //
	    //   * Every element in `ary[p .. i]` is less than or equal to the pivot.
	    //
	    //   * Every element in `ary[i+1 .. j-1]` is greater than the pivot.
	    for (var j = p; j < r; j++) {
	      if (comparator(ary[j], pivot) <= 0) {
	        i += 1;
	        swap(ary, i, j);
	      }
	    }

	    swap(ary, i + 1, j);
	    var q = i + 1;

	    // (2) Recurse on each half.

	    doQuickSort(ary, comparator, p, q - 1);
	    doQuickSort(ary, comparator, q + 1, r);
	  }
	}

	/**
	 * Sort the given array in-place with the given comparator function.
	 *
	 * @param {Array} ary
	 *        An array to sort.
	 * @param {function} comparator
	 *        Function to use to compare two items.
	 */
	quickSort.quickSort = function (ary, comparator) {
	  doQuickSort(ary, comparator, 0, ary.length - 1);
	};
	return quickSort;
}

/* -*- Mode: js; js-indent-level: 2; -*- */

var hasRequiredSourceMapConsumer;

function requireSourceMapConsumer () {
	if (hasRequiredSourceMapConsumer) return sourceMapConsumer;
	hasRequiredSourceMapConsumer = 1;
	/*
	 * Copyright 2011 Mozilla Foundation and contributors
	 * Licensed under the New BSD license. See LICENSE or:
	 * http://opensource.org/licenses/BSD-3-Clause
	 */

	var util = requireUtil();
	var binarySearch = requireBinarySearch();
	var ArraySet = requireArraySet().ArraySet;
	var base64VLQ = requireBase64Vlq();
	var quickSort = requireQuickSort().quickSort;

	function SourceMapConsumer(aSourceMap, aSourceMapURL) {
	  var sourceMap = aSourceMap;
	  if (typeof aSourceMap === 'string') {
	    sourceMap = util.parseSourceMapInput(aSourceMap);
	  }

	  return sourceMap.sections != null
	    ? new IndexedSourceMapConsumer(sourceMap, aSourceMapURL)
	    : new BasicSourceMapConsumer(sourceMap, aSourceMapURL);
	}

	SourceMapConsumer.fromSourceMap = function(aSourceMap, aSourceMapURL) {
	  return BasicSourceMapConsumer.fromSourceMap(aSourceMap, aSourceMapURL);
	};

	/**
	 * The version of the source mapping spec that we are consuming.
	 */
	SourceMapConsumer.prototype._version = 3;

	// `__generatedMappings` and `__originalMappings` are arrays that hold the
	// parsed mapping coordinates from the source map's "mappings" attribute. They
	// are lazily instantiated, accessed via the `_generatedMappings` and
	// `_originalMappings` getters respectively, and we only parse the mappings
	// and create these arrays once queried for a source location. We jump through
	// these hoops because there can be many thousands of mappings, and parsing
	// them is expensive, so we only want to do it if we must.
	//
	// Each object in the arrays is of the form:
	//
	//     {
	//       generatedLine: The line number in the generated code,
	//       generatedColumn: The column number in the generated code,
	//       source: The path to the original source file that generated this
	//               chunk of code,
	//       originalLine: The line number in the original source that
	//                     corresponds to this chunk of generated code,
	//       originalColumn: The column number in the original source that
	//                       corresponds to this chunk of generated code,
	//       name: The name of the original symbol which generated this chunk of
	//             code.
	//     }
	//
	// All properties except for `generatedLine` and `generatedColumn` can be
	// `null`.
	//
	// `_generatedMappings` is ordered by the generated positions.
	//
	// `_originalMappings` is ordered by the original positions.

	SourceMapConsumer.prototype.__generatedMappings = null;
	Object.defineProperty(SourceMapConsumer.prototype, '_generatedMappings', {
	  configurable: true,
	  enumerable: true,
	  get: function () {
	    if (!this.__generatedMappings) {
	      this._parseMappings(this._mappings, this.sourceRoot);
	    }

	    return this.__generatedMappings;
	  }
	});

	SourceMapConsumer.prototype.__originalMappings = null;
	Object.defineProperty(SourceMapConsumer.prototype, '_originalMappings', {
	  configurable: true,
	  enumerable: true,
	  get: function () {
	    if (!this.__originalMappings) {
	      this._parseMappings(this._mappings, this.sourceRoot);
	    }

	    return this.__originalMappings;
	  }
	});

	SourceMapConsumer.prototype._charIsMappingSeparator =
	  function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
	    var c = aStr.charAt(index);
	    return c === ";" || c === ",";
	  };

	/**
	 * Parse the mappings in a string in to a data structure which we can easily
	 * query (the ordered arrays in the `this.__generatedMappings` and
	 * `this.__originalMappings` properties).
	 */
	SourceMapConsumer.prototype._parseMappings =
	  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
	    throw new Error("Subclasses must implement _parseMappings");
	  };

	SourceMapConsumer.GENERATED_ORDER = 1;
	SourceMapConsumer.ORIGINAL_ORDER = 2;

	SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
	SourceMapConsumer.LEAST_UPPER_BOUND = 2;

	/**
	 * Iterate over each mapping between an original source/line/column and a
	 * generated line/column in this source map.
	 *
	 * @param Function aCallback
	 *        The function that is called with each mapping.
	 * @param Object aContext
	 *        Optional. If specified, this object will be the value of `this` every
	 *        time that `aCallback` is called.
	 * @param aOrder
	 *        Either `SourceMapConsumer.GENERATED_ORDER` or
	 *        `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to
	 *        iterate over the mappings sorted by the generated file's line/column
	 *        order or the original's source/line/column order, respectively. Defaults to
	 *        `SourceMapConsumer.GENERATED_ORDER`.
	 */
	SourceMapConsumer.prototype.eachMapping =
	  function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
	    var context = aContext || null;
	    var order = aOrder || SourceMapConsumer.GENERATED_ORDER;

	    var mappings;
	    switch (order) {
	    case SourceMapConsumer.GENERATED_ORDER:
	      mappings = this._generatedMappings;
	      break;
	    case SourceMapConsumer.ORIGINAL_ORDER:
	      mappings = this._originalMappings;
	      break;
	    default:
	      throw new Error("Unknown order of iteration.");
	    }

	    var sourceRoot = this.sourceRoot;
	    mappings.map(function (mapping) {
	      var source = mapping.source === null ? null : this._sources.at(mapping.source);
	      source = util.computeSourceURL(sourceRoot, source, this._sourceMapURL);
	      return {
	        source: source,
	        generatedLine: mapping.generatedLine,
	        generatedColumn: mapping.generatedColumn,
	        originalLine: mapping.originalLine,
	        originalColumn: mapping.originalColumn,
	        name: mapping.name === null ? null : this._names.at(mapping.name)
	      };
	    }, this).forEach(aCallback, context);
	  };

	/**
	 * Returns all generated line and column information for the original source,
	 * line, and column provided. If no column is provided, returns all mappings
	 * corresponding to a either the line we are searching for or the next
	 * closest line that has any mappings. Otherwise, returns all mappings
	 * corresponding to the given line and either the column we are searching for
	 * or the next closest column that has any offsets.
	 *
	 * The only argument is an object with the following properties:
	 *
	 *   - source: The filename of the original source.
	 *   - line: The line number in the original source.  The line number is 1-based.
	 *   - column: Optional. the column number in the original source.
	 *    The column number is 0-based.
	 *
	 * and an array of objects is returned, each with the following properties:
	 *
	 *   - line: The line number in the generated source, or null.  The
	 *    line number is 1-based.
	 *   - column: The column number in the generated source, or null.
	 *    The column number is 0-based.
	 */
	SourceMapConsumer.prototype.allGeneratedPositionsFor =
	  function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
	    var line = util.getArg(aArgs, 'line');

	    // When there is no exact match, BasicSourceMapConsumer.prototype._findMapping
	    // returns the index of the closest mapping less than the needle. By
	    // setting needle.originalColumn to 0, we thus find the last mapping for
	    // the given line, provided such a mapping exists.
	    var needle = {
	      source: util.getArg(aArgs, 'source'),
	      originalLine: line,
	      originalColumn: util.getArg(aArgs, 'column', 0)
	    };

	    needle.source = this._findSourceIndex(needle.source);
	    if (needle.source < 0) {
	      return [];
	    }

	    var mappings = [];

	    var index = this._findMapping(needle,
	                                  this._originalMappings,
	                                  "originalLine",
	                                  "originalColumn",
	                                  util.compareByOriginalPositions,
	                                  binarySearch.LEAST_UPPER_BOUND);
	    if (index >= 0) {
	      var mapping = this._originalMappings[index];

	      if (aArgs.column === undefined) {
	        var originalLine = mapping.originalLine;

	        // Iterate until either we run out of mappings, or we run into
	        // a mapping for a different line than the one we found. Since
	        // mappings are sorted, this is guaranteed to find all mappings for
	        // the line we found.
	        while (mapping && mapping.originalLine === originalLine) {
	          mappings.push({
	            line: util.getArg(mapping, 'generatedLine', null),
	            column: util.getArg(mapping, 'generatedColumn', null),
	            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
	          });

	          mapping = this._originalMappings[++index];
	        }
	      } else {
	        var originalColumn = mapping.originalColumn;

	        // Iterate until either we run out of mappings, or we run into
	        // a mapping for a different line than the one we were searching for.
	        // Since mappings are sorted, this is guaranteed to find all mappings for
	        // the line we are searching for.
	        while (mapping &&
	               mapping.originalLine === line &&
	               mapping.originalColumn == originalColumn) {
	          mappings.push({
	            line: util.getArg(mapping, 'generatedLine', null),
	            column: util.getArg(mapping, 'generatedColumn', null),
	            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
	          });

	          mapping = this._originalMappings[++index];
	        }
	      }
	    }

	    return mappings;
	  };

	sourceMapConsumer.SourceMapConsumer = SourceMapConsumer;

	/**
	 * A BasicSourceMapConsumer instance represents a parsed source map which we can
	 * query for information about the original file positions by giving it a file
	 * position in the generated source.
	 *
	 * The first parameter is the raw source map (either as a JSON string, or
	 * already parsed to an object). According to the spec, source maps have the
	 * following attributes:
	 *
	 *   - version: Which version of the source map spec this map is following.
	 *   - sources: An array of URLs to the original source files.
	 *   - names: An array of identifiers which can be referrenced by individual mappings.
	 *   - sourceRoot: Optional. The URL root from which all sources are relative.
	 *   - sourcesContent: Optional. An array of contents of the original source files.
	 *   - mappings: A string of base64 VLQs which contain the actual mappings.
	 *   - file: Optional. The generated file this source map is associated with.
	 *
	 * Here is an example source map, taken from the source map spec[0]:
	 *
	 *     {
	 *       version : 3,
	 *       file: "out.js",
	 *       sourceRoot : "",
	 *       sources: ["foo.js", "bar.js"],
	 *       names: ["src", "maps", "are", "fun"],
	 *       mappings: "AA,AB;;ABCDE;"
	 *     }
	 *
	 * The second parameter, if given, is a string whose value is the URL
	 * at which the source map was found.  This URL is used to compute the
	 * sources array.
	 *
	 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?pli=1#
	 */
	function BasicSourceMapConsumer(aSourceMap, aSourceMapURL) {
	  var sourceMap = aSourceMap;
	  if (typeof aSourceMap === 'string') {
	    sourceMap = util.parseSourceMapInput(aSourceMap);
	  }

	  var version = util.getArg(sourceMap, 'version');
	  var sources = util.getArg(sourceMap, 'sources');
	  // Sass 3.3 leaves out the 'names' array, so we deviate from the spec (which
	  // requires the array) to play nice here.
	  var names = util.getArg(sourceMap, 'names', []);
	  var sourceRoot = util.getArg(sourceMap, 'sourceRoot', null);
	  var sourcesContent = util.getArg(sourceMap, 'sourcesContent', null);
	  var mappings = util.getArg(sourceMap, 'mappings');
	  var file = util.getArg(sourceMap, 'file', null);

	  // Once again, Sass deviates from the spec and supplies the version as a
	  // string rather than a number, so we use loose equality checking here.
	  if (version != this._version) {
	    throw new Error('Unsupported version: ' + version);
	  }

	  if (sourceRoot) {
	    sourceRoot = util.normalize(sourceRoot);
	  }

	  sources = sources
	    .map(String)
	    // Some source maps produce relative source paths like "./foo.js" instead of
	    // "foo.js".  Normalize these first so that future comparisons will succeed.
	    // See bugzil.la/1090768.
	    .map(util.normalize)
	    // Always ensure that absolute sources are internally stored relative to
	    // the source root, if the source root is absolute. Not doing this would
	    // be particularly problematic when the source root is a prefix of the
	    // source (valid, but why??). See github issue #199 and bugzil.la/1188982.
	    .map(function (source) {
	      return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source)
	        ? util.relative(sourceRoot, source)
	        : source;
	    });

	  // Pass `true` below to allow duplicate names and sources. While source maps
	  // are intended to be compressed and deduplicated, the TypeScript compiler
	  // sometimes generates source maps with duplicates in them. See Github issue
	  // #72 and bugzil.la/889492.
	  this._names = ArraySet.fromArray(names.map(String), true);
	  this._sources = ArraySet.fromArray(sources, true);

	  this._absoluteSources = this._sources.toArray().map(function (s) {
	    return util.computeSourceURL(sourceRoot, s, aSourceMapURL);
	  });

	  this.sourceRoot = sourceRoot;
	  this.sourcesContent = sourcesContent;
	  this._mappings = mappings;
	  this._sourceMapURL = aSourceMapURL;
	  this.file = file;
	}

	BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
	BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;

	/**
	 * Utility function to find the index of a source.  Returns -1 if not
	 * found.
	 */
	BasicSourceMapConsumer.prototype._findSourceIndex = function(aSource) {
	  var relativeSource = aSource;
	  if (this.sourceRoot != null) {
	    relativeSource = util.relative(this.sourceRoot, relativeSource);
	  }

	  if (this._sources.has(relativeSource)) {
	    return this._sources.indexOf(relativeSource);
	  }

	  // Maybe aSource is an absolute URL as returned by |sources|.  In
	  // this case we can't simply undo the transform.
	  var i;
	  for (i = 0; i < this._absoluteSources.length; ++i) {
	    if (this._absoluteSources[i] == aSource) {
	      return i;
	    }
	  }

	  return -1;
	};

	/**
	 * Create a BasicSourceMapConsumer from a SourceMapGenerator.
	 *
	 * @param SourceMapGenerator aSourceMap
	 *        The source map that will be consumed.
	 * @param String aSourceMapURL
	 *        The URL at which the source map can be found (optional)
	 * @returns BasicSourceMapConsumer
	 */
	BasicSourceMapConsumer.fromSourceMap =
	  function SourceMapConsumer_fromSourceMap(aSourceMap, aSourceMapURL) {
	    var smc = Object.create(BasicSourceMapConsumer.prototype);

	    var names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
	    var sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
	    smc.sourceRoot = aSourceMap._sourceRoot;
	    smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(),
	                                                            smc.sourceRoot);
	    smc.file = aSourceMap._file;
	    smc._sourceMapURL = aSourceMapURL;
	    smc._absoluteSources = smc._sources.toArray().map(function (s) {
	      return util.computeSourceURL(smc.sourceRoot, s, aSourceMapURL);
	    });

	    // Because we are modifying the entries (by converting string sources and
	    // names to indices into the sources and names ArraySets), we have to make
	    // a copy of the entry or else bad things happen. Shared mutable state
	    // strikes again! See github issue #191.

	    var generatedMappings = aSourceMap._mappings.toArray().slice();
	    var destGeneratedMappings = smc.__generatedMappings = [];
	    var destOriginalMappings = smc.__originalMappings = [];

	    for (var i = 0, length = generatedMappings.length; i < length; i++) {
	      var srcMapping = generatedMappings[i];
	      var destMapping = new Mapping;
	      destMapping.generatedLine = srcMapping.generatedLine;
	      destMapping.generatedColumn = srcMapping.generatedColumn;

	      if (srcMapping.source) {
	        destMapping.source = sources.indexOf(srcMapping.source);
	        destMapping.originalLine = srcMapping.originalLine;
	        destMapping.originalColumn = srcMapping.originalColumn;

	        if (srcMapping.name) {
	          destMapping.name = names.indexOf(srcMapping.name);
	        }

	        destOriginalMappings.push(destMapping);
	      }

	      destGeneratedMappings.push(destMapping);
	    }

	    quickSort(smc.__originalMappings, util.compareByOriginalPositions);

	    return smc;
	  };

	/**
	 * The version of the source mapping spec that we are consuming.
	 */
	BasicSourceMapConsumer.prototype._version = 3;

	/**
	 * The list of original sources.
	 */
	Object.defineProperty(BasicSourceMapConsumer.prototype, 'sources', {
	  get: function () {
	    return this._absoluteSources.slice();
	  }
	});

	/**
	 * Provide the JIT with a nice shape / hidden class.
	 */
	function Mapping() {
	  this.generatedLine = 0;
	  this.generatedColumn = 0;
	  this.source = null;
	  this.originalLine = null;
	  this.originalColumn = null;
	  this.name = null;
	}

	/**
	 * Parse the mappings in a string in to a data structure which we can easily
	 * query (the ordered arrays in the `this.__generatedMappings` and
	 * `this.__originalMappings` properties).
	 */
	BasicSourceMapConsumer.prototype._parseMappings =
	  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
	    var generatedLine = 1;
	    var previousGeneratedColumn = 0;
	    var previousOriginalLine = 0;
	    var previousOriginalColumn = 0;
	    var previousSource = 0;
	    var previousName = 0;
	    var length = aStr.length;
	    var index = 0;
	    var cachedSegments = {};
	    var temp = {};
	    var originalMappings = [];
	    var generatedMappings = [];
	    var mapping, str, segment, end, value;

	    while (index < length) {
	      if (aStr.charAt(index) === ';') {
	        generatedLine++;
	        index++;
	        previousGeneratedColumn = 0;
	      }
	      else if (aStr.charAt(index) === ',') {
	        index++;
	      }
	      else {
	        mapping = new Mapping();
	        mapping.generatedLine = generatedLine;

	        // Because each offset is encoded relative to the previous one,
	        // many segments often have the same encoding. We can exploit this
	        // fact by caching the parsed variable length fields of each segment,
	        // allowing us to avoid a second parse if we encounter the same
	        // segment again.
	        for (end = index; end < length; end++) {
	          if (this._charIsMappingSeparator(aStr, end)) {
	            break;
	          }
	        }
	        str = aStr.slice(index, end);

	        segment = cachedSegments[str];
	        if (segment) {
	          index += str.length;
	        } else {
	          segment = [];
	          while (index < end) {
	            base64VLQ.decode(aStr, index, temp);
	            value = temp.value;
	            index = temp.rest;
	            segment.push(value);
	          }

	          if (segment.length === 2) {
	            throw new Error('Found a source, but no line and column');
	          }

	          if (segment.length === 3) {
	            throw new Error('Found a source and line, but no column');
	          }

	          cachedSegments[str] = segment;
	        }

	        // Generated column.
	        mapping.generatedColumn = previousGeneratedColumn + segment[0];
	        previousGeneratedColumn = mapping.generatedColumn;

	        if (segment.length > 1) {
	          // Original source.
	          mapping.source = previousSource + segment[1];
	          previousSource += segment[1];

	          // Original line.
	          mapping.originalLine = previousOriginalLine + segment[2];
	          previousOriginalLine = mapping.originalLine;
	          // Lines are stored 0-based
	          mapping.originalLine += 1;

	          // Original column.
	          mapping.originalColumn = previousOriginalColumn + segment[3];
	          previousOriginalColumn = mapping.originalColumn;

	          if (segment.length > 4) {
	            // Original name.
	            mapping.name = previousName + segment[4];
	            previousName += segment[4];
	          }
	        }

	        generatedMappings.push(mapping);
	        if (typeof mapping.originalLine === 'number') {
	          originalMappings.push(mapping);
	        }
	      }
	    }

	    quickSort(generatedMappings, util.compareByGeneratedPositionsDeflated);
	    this.__generatedMappings = generatedMappings;

	    quickSort(originalMappings, util.compareByOriginalPositions);
	    this.__originalMappings = originalMappings;
	  };

	/**
	 * Find the mapping that best matches the hypothetical "needle" mapping that
	 * we are searching for in the given "haystack" of mappings.
	 */
	BasicSourceMapConsumer.prototype._findMapping =
	  function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName,
	                                         aColumnName, aComparator, aBias) {
	    // To return the position we are searching for, we must first find the
	    // mapping for the given position and then return the opposite position it
	    // points to. Because the mappings are sorted, we can use binary search to
	    // find the best mapping.

	    if (aNeedle[aLineName] <= 0) {
	      throw new TypeError('Line must be greater than or equal to 1, got '
	                          + aNeedle[aLineName]);
	    }
	    if (aNeedle[aColumnName] < 0) {
	      throw new TypeError('Column must be greater than or equal to 0, got '
	                          + aNeedle[aColumnName]);
	    }

	    return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
	  };

	/**
	 * Compute the last column for each generated mapping. The last column is
	 * inclusive.
	 */
	BasicSourceMapConsumer.prototype.computeColumnSpans =
	  function SourceMapConsumer_computeColumnSpans() {
	    for (var index = 0; index < this._generatedMappings.length; ++index) {
	      var mapping = this._generatedMappings[index];

	      // Mappings do not contain a field for the last generated columnt. We
	      // can come up with an optimistic estimate, however, by assuming that
	      // mappings are contiguous (i.e. given two consecutive mappings, the
	      // first mapping ends where the second one starts).
	      if (index + 1 < this._generatedMappings.length) {
	        var nextMapping = this._generatedMappings[index + 1];

	        if (mapping.generatedLine === nextMapping.generatedLine) {
	          mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
	          continue;
	        }
	      }

	      // The last mapping for each line spans the entire line.
	      mapping.lastGeneratedColumn = Infinity;
	    }
	  };

	/**
	 * Returns the original source, line, and column information for the generated
	 * source's line and column positions provided. The only argument is an object
	 * with the following properties:
	 *
	 *   - line: The line number in the generated source.  The line number
	 *     is 1-based.
	 *   - column: The column number in the generated source.  The column
	 *     number is 0-based.
	 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
	 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
	 *     closest element that is smaller than or greater than the one we are
	 *     searching for, respectively, if the exact element cannot be found.
	 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
	 *
	 * and an object is returned with the following properties:
	 *
	 *   - source: The original source file, or null.
	 *   - line: The line number in the original source, or null.  The
	 *     line number is 1-based.
	 *   - column: The column number in the original source, or null.  The
	 *     column number is 0-based.
	 *   - name: The original identifier, or null.
	 */
	BasicSourceMapConsumer.prototype.originalPositionFor =
	  function SourceMapConsumer_originalPositionFor(aArgs) {
	    var needle = {
	      generatedLine: util.getArg(aArgs, 'line'),
	      generatedColumn: util.getArg(aArgs, 'column')
	    };

	    var index = this._findMapping(
	      needle,
	      this._generatedMappings,
	      "generatedLine",
	      "generatedColumn",
	      util.compareByGeneratedPositionsDeflated,
	      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
	    );

	    if (index >= 0) {
	      var mapping = this._generatedMappings[index];

	      if (mapping.generatedLine === needle.generatedLine) {
	        var source = util.getArg(mapping, 'source', null);
	        if (source !== null) {
	          source = this._sources.at(source);
	          source = util.computeSourceURL(this.sourceRoot, source, this._sourceMapURL);
	        }
	        var name = util.getArg(mapping, 'name', null);
	        if (name !== null) {
	          name = this._names.at(name);
	        }
	        return {
	          source: source,
	          line: util.getArg(mapping, 'originalLine', null),
	          column: util.getArg(mapping, 'originalColumn', null),
	          name: name
	        };
	      }
	    }

	    return {
	      source: null,
	      line: null,
	      column: null,
	      name: null
	    };
	  };

	/**
	 * Return true if we have the source content for every source in the source
	 * map, false otherwise.
	 */
	BasicSourceMapConsumer.prototype.hasContentsOfAllSources =
	  function BasicSourceMapConsumer_hasContentsOfAllSources() {
	    if (!this.sourcesContent) {
	      return false;
	    }
	    return this.sourcesContent.length >= this._sources.size() &&
	      !this.sourcesContent.some(function (sc) { return sc == null; });
	  };

	/**
	 * Returns the original source content. The only argument is the url of the
	 * original source file. Returns null if no original source content is
	 * available.
	 */
	BasicSourceMapConsumer.prototype.sourceContentFor =
	  function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
	    if (!this.sourcesContent) {
	      return null;
	    }

	    var index = this._findSourceIndex(aSource);
	    if (index >= 0) {
	      return this.sourcesContent[index];
	    }

	    var relativeSource = aSource;
	    if (this.sourceRoot != null) {
	      relativeSource = util.relative(this.sourceRoot, relativeSource);
	    }

	    var url;
	    if (this.sourceRoot != null
	        && (url = util.urlParse(this.sourceRoot))) {
	      // XXX: file:// URIs and absolute paths lead to unexpected behavior for
	      // many users. We can help them out when they expect file:// URIs to
	      // behave like it would if they were running a local HTTP server. See
	      // https://bugzilla.mozilla.org/show_bug.cgi?id=885597.
	      var fileUriAbsPath = relativeSource.replace(/^file:\/\//, "");
	      if (url.scheme == "file"
	          && this._sources.has(fileUriAbsPath)) {
	        return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)]
	      }

	      if ((!url.path || url.path == "/")
	          && this._sources.has("/" + relativeSource)) {
	        return this.sourcesContent[this._sources.indexOf("/" + relativeSource)];
	      }
	    }

	    // This function is used recursively from
	    // IndexedSourceMapConsumer.prototype.sourceContentFor. In that case, we
	    // don't want to throw if we can't find the source - we just want to
	    // return null, so we provide a flag to exit gracefully.
	    if (nullOnMissing) {
	      return null;
	    }
	    else {
	      throw new Error('"' + relativeSource + '" is not in the SourceMap.');
	    }
	  };

	/**
	 * Returns the generated line and column information for the original source,
	 * line, and column positions provided. The only argument is an object with
	 * the following properties:
	 *
	 *   - source: The filename of the original source.
	 *   - line: The line number in the original source.  The line number
	 *     is 1-based.
	 *   - column: The column number in the original source.  The column
	 *     number is 0-based.
	 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
	 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
	 *     closest element that is smaller than or greater than the one we are
	 *     searching for, respectively, if the exact element cannot be found.
	 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
	 *
	 * and an object is returned with the following properties:
	 *
	 *   - line: The line number in the generated source, or null.  The
	 *     line number is 1-based.
	 *   - column: The column number in the generated source, or null.
	 *     The column number is 0-based.
	 */
	BasicSourceMapConsumer.prototype.generatedPositionFor =
	  function SourceMapConsumer_generatedPositionFor(aArgs) {
	    var source = util.getArg(aArgs, 'source');
	    source = this._findSourceIndex(source);
	    if (source < 0) {
	      return {
	        line: null,
	        column: null,
	        lastColumn: null
	      };
	    }

	    var needle = {
	      source: source,
	      originalLine: util.getArg(aArgs, 'line'),
	      originalColumn: util.getArg(aArgs, 'column')
	    };

	    var index = this._findMapping(
	      needle,
	      this._originalMappings,
	      "originalLine",
	      "originalColumn",
	      util.compareByOriginalPositions,
	      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
	    );

	    if (index >= 0) {
	      var mapping = this._originalMappings[index];

	      if (mapping.source === needle.source) {
	        return {
	          line: util.getArg(mapping, 'generatedLine', null),
	          column: util.getArg(mapping, 'generatedColumn', null),
	          lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
	        };
	      }
	    }

	    return {
	      line: null,
	      column: null,
	      lastColumn: null
	    };
	  };

	sourceMapConsumer.BasicSourceMapConsumer = BasicSourceMapConsumer;

	/**
	 * An IndexedSourceMapConsumer instance represents a parsed source map which
	 * we can query for information. It differs from BasicSourceMapConsumer in
	 * that it takes "indexed" source maps (i.e. ones with a "sections" field) as
	 * input.
	 *
	 * The first parameter is a raw source map (either as a JSON string, or already
	 * parsed to an object). According to the spec for indexed source maps, they
	 * have the following attributes:
	 *
	 *   - version: Which version of the source map spec this map is following.
	 *   - file: Optional. The generated file this source map is associated with.
	 *   - sections: A list of section definitions.
	 *
	 * Each value under the "sections" field has two fields:
	 *   - offset: The offset into the original specified at which this section
	 *       begins to apply, defined as an object with a "line" and "column"
	 *       field.
	 *   - map: A source map definition. This source map could also be indexed,
	 *       but doesn't have to be.
	 *
	 * Instead of the "map" field, it's also possible to have a "url" field
	 * specifying a URL to retrieve a source map from, but that's currently
	 * unsupported.
	 *
	 * Here's an example source map, taken from the source map spec[0], but
	 * modified to omit a section which uses the "url" field.
	 *
	 *  {
	 *    version : 3,
	 *    file: "app.js",
	 *    sections: [{
	 *      offset: {line:100, column:10},
	 *      map: {
	 *        version : 3,
	 *        file: "section.js",
	 *        sources: ["foo.js", "bar.js"],
	 *        names: ["src", "maps", "are", "fun"],
	 *        mappings: "AAAA,E;;ABCDE;"
	 *      }
	 *    }],
	 *  }
	 *
	 * The second parameter, if given, is a string whose value is the URL
	 * at which the source map was found.  This URL is used to compute the
	 * sources array.
	 *
	 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit#heading=h.535es3xeprgt
	 */
	function IndexedSourceMapConsumer(aSourceMap, aSourceMapURL) {
	  var sourceMap = aSourceMap;
	  if (typeof aSourceMap === 'string') {
	    sourceMap = util.parseSourceMapInput(aSourceMap);
	  }

	  var version = util.getArg(sourceMap, 'version');
	  var sections = util.getArg(sourceMap, 'sections');

	  if (version != this._version) {
	    throw new Error('Unsupported version: ' + version);
	  }

	  this._sources = new ArraySet();
	  this._names = new ArraySet();

	  var lastOffset = {
	    line: -1,
	    column: 0
	  };
	  this._sections = sections.map(function (s) {
	    if (s.url) {
	      // The url field will require support for asynchronicity.
	      // See https://github.com/mozilla/source-map/issues/16
	      throw new Error('Support for url field in sections not implemented.');
	    }
	    var offset = util.getArg(s, 'offset');
	    var offsetLine = util.getArg(offset, 'line');
	    var offsetColumn = util.getArg(offset, 'column');

	    if (offsetLine < lastOffset.line ||
	        (offsetLine === lastOffset.line && offsetColumn < lastOffset.column)) {
	      throw new Error('Section offsets must be ordered and non-overlapping.');
	    }
	    lastOffset = offset;

	    return {
	      generatedOffset: {
	        // The offset fields are 0-based, but we use 1-based indices when
	        // encoding/decoding from VLQ.
	        generatedLine: offsetLine + 1,
	        generatedColumn: offsetColumn + 1
	      },
	      consumer: new SourceMapConsumer(util.getArg(s, 'map'), aSourceMapURL)
	    }
	  });
	}

	IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
	IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;

	/**
	 * The version of the source mapping spec that we are consuming.
	 */
	IndexedSourceMapConsumer.prototype._version = 3;

	/**
	 * The list of original sources.
	 */
	Object.defineProperty(IndexedSourceMapConsumer.prototype, 'sources', {
	  get: function () {
	    var sources = [];
	    for (var i = 0; i < this._sections.length; i++) {
	      for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
	        sources.push(this._sections[i].consumer.sources[j]);
	      }
	    }
	    return sources;
	  }
	});

	/**
	 * Returns the original source, line, and column information for the generated
	 * source's line and column positions provided. The only argument is an object
	 * with the following properties:
	 *
	 *   - line: The line number in the generated source.  The line number
	 *     is 1-based.
	 *   - column: The column number in the generated source.  The column
	 *     number is 0-based.
	 *
	 * and an object is returned with the following properties:
	 *
	 *   - source: The original source file, or null.
	 *   - line: The line number in the original source, or null.  The
	 *     line number is 1-based.
	 *   - column: The column number in the original source, or null.  The
	 *     column number is 0-based.
	 *   - name: The original identifier, or null.
	 */
	IndexedSourceMapConsumer.prototype.originalPositionFor =
	  function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
	    var needle = {
	      generatedLine: util.getArg(aArgs, 'line'),
	      generatedColumn: util.getArg(aArgs, 'column')
	    };

	    // Find the section containing the generated position we're trying to map
	    // to an original position.
	    var sectionIndex = binarySearch.search(needle, this._sections,
	      function(needle, section) {
	        var cmp = needle.generatedLine - section.generatedOffset.generatedLine;
	        if (cmp) {
	          return cmp;
	        }

	        return (needle.generatedColumn -
	                section.generatedOffset.generatedColumn);
	      });
	    var section = this._sections[sectionIndex];

	    if (!section) {
	      return {
	        source: null,
	        line: null,
	        column: null,
	        name: null
	      };
	    }

	    return section.consumer.originalPositionFor({
	      line: needle.generatedLine -
	        (section.generatedOffset.generatedLine - 1),
	      column: needle.generatedColumn -
	        (section.generatedOffset.generatedLine === needle.generatedLine
	         ? section.generatedOffset.generatedColumn - 1
	         : 0),
	      bias: aArgs.bias
	    });
	  };

	/**
	 * Return true if we have the source content for every source in the source
	 * map, false otherwise.
	 */
	IndexedSourceMapConsumer.prototype.hasContentsOfAllSources =
	  function IndexedSourceMapConsumer_hasContentsOfAllSources() {
	    return this._sections.every(function (s) {
	      return s.consumer.hasContentsOfAllSources();
	    });
	  };

	/**
	 * Returns the original source content. The only argument is the url of the
	 * original source file. Returns null if no original source content is
	 * available.
	 */
	IndexedSourceMapConsumer.prototype.sourceContentFor =
	  function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
	    for (var i = 0; i < this._sections.length; i++) {
	      var section = this._sections[i];

	      var content = section.consumer.sourceContentFor(aSource, true);
	      if (content) {
	        return content;
	      }
	    }
	    if (nullOnMissing) {
	      return null;
	    }
	    else {
	      throw new Error('"' + aSource + '" is not in the SourceMap.');
	    }
	  };

	/**
	 * Returns the generated line and column information for the original source,
	 * line, and column positions provided. The only argument is an object with
	 * the following properties:
	 *
	 *   - source: The filename of the original source.
	 *   - line: The line number in the original source.  The line number
	 *     is 1-based.
	 *   - column: The column number in the original source.  The column
	 *     number is 0-based.
	 *
	 * and an object is returned with the following properties:
	 *
	 *   - line: The line number in the generated source, or null.  The
	 *     line number is 1-based. 
	 *   - column: The column number in the generated source, or null.
	 *     The column number is 0-based.
	 */
	IndexedSourceMapConsumer.prototype.generatedPositionFor =
	  function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
	    for (var i = 0; i < this._sections.length; i++) {
	      var section = this._sections[i];

	      // Only consider this section if the requested source is in the list of
	      // sources of the consumer.
	      if (section.consumer._findSourceIndex(util.getArg(aArgs, 'source')) === -1) {
	        continue;
	      }
	      var generatedPosition = section.consumer.generatedPositionFor(aArgs);
	      if (generatedPosition) {
	        var ret = {
	          line: generatedPosition.line +
	            (section.generatedOffset.generatedLine - 1),
	          column: generatedPosition.column +
	            (section.generatedOffset.generatedLine === generatedPosition.line
	             ? section.generatedOffset.generatedColumn - 1
	             : 0)
	        };
	        return ret;
	      }
	    }

	    return {
	      line: null,
	      column: null
	    };
	  };

	/**
	 * Parse the mappings in a string in to a data structure which we can easily
	 * query (the ordered arrays in the `this.__generatedMappings` and
	 * `this.__originalMappings` properties).
	 */
	IndexedSourceMapConsumer.prototype._parseMappings =
	  function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
	    this.__generatedMappings = [];
	    this.__originalMappings = [];
	    for (var i = 0; i < this._sections.length; i++) {
	      var section = this._sections[i];
	      var sectionMappings = section.consumer._generatedMappings;
	      for (var j = 0; j < sectionMappings.length; j++) {
	        var mapping = sectionMappings[j];

	        var source = section.consumer._sources.at(mapping.source);
	        source = util.computeSourceURL(section.consumer.sourceRoot, source, this._sourceMapURL);
	        this._sources.add(source);
	        source = this._sources.indexOf(source);

	        var name = null;
	        if (mapping.name) {
	          name = section.consumer._names.at(mapping.name);
	          this._names.add(name);
	          name = this._names.indexOf(name);
	        }

	        // The mappings coming from the consumer for the section have
	        // generated positions relative to the start of the section, so we
	        // need to offset them to be relative to the start of the concatenated
	        // generated file.
	        var adjustedMapping = {
	          source: source,
	          generatedLine: mapping.generatedLine +
	            (section.generatedOffset.generatedLine - 1),
	          generatedColumn: mapping.generatedColumn +
	            (section.generatedOffset.generatedLine === mapping.generatedLine
	            ? section.generatedOffset.generatedColumn - 1
	            : 0),
	          originalLine: mapping.originalLine,
	          originalColumn: mapping.originalColumn,
	          name: name
	        };

	        this.__generatedMappings.push(adjustedMapping);
	        if (typeof adjustedMapping.originalLine === 'number') {
	          this.__originalMappings.push(adjustedMapping);
	        }
	      }
	    }

	    quickSort(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
	    quickSort(this.__originalMappings, util.compareByOriginalPositions);
	  };

	sourceMapConsumer.IndexedSourceMapConsumer = IndexedSourceMapConsumer;
	return sourceMapConsumer;
}

var sourceNode = {};

/* -*- Mode: js; js-indent-level: 2; -*- */

var hasRequiredSourceNode;

function requireSourceNode () {
	if (hasRequiredSourceNode) return sourceNode;
	hasRequiredSourceNode = 1;
	/*
	 * Copyright 2011 Mozilla Foundation and contributors
	 * Licensed under the New BSD license. See LICENSE or:
	 * http://opensource.org/licenses/BSD-3-Clause
	 */

	var SourceMapGenerator = requireSourceMapGenerator().SourceMapGenerator;
	var util = requireUtil();

	// Matches a Windows-style `\r\n` newline or a `\n` newline used by all other
	// operating systems these days (capturing the result).
	var REGEX_NEWLINE = /(\r?\n)/;

	// Newline character code for charCodeAt() comparisons
	var NEWLINE_CODE = 10;

	// Private symbol for identifying `SourceNode`s when multiple versions of
	// the source-map library are loaded. This MUST NOT CHANGE across
	// versions!
	var isSourceNode = "$$$isSourceNode$$$";

	/**
	 * SourceNodes provide a way to abstract over interpolating/concatenating
	 * snippets of generated JavaScript source code while maintaining the line and
	 * column information associated with the original source code.
	 *
	 * @param aLine The original line number.
	 * @param aColumn The original column number.
	 * @param aSource The original source's filename.
	 * @param aChunks Optional. An array of strings which are snippets of
	 *        generated JS, or other SourceNodes.
	 * @param aName The original identifier.
	 */
	function SourceNode(aLine, aColumn, aSource, aChunks, aName) {
	  this.children = [];
	  this.sourceContents = {};
	  this.line = aLine == null ? null : aLine;
	  this.column = aColumn == null ? null : aColumn;
	  this.source = aSource == null ? null : aSource;
	  this.name = aName == null ? null : aName;
	  this[isSourceNode] = true;
	  if (aChunks != null) this.add(aChunks);
	}

	/**
	 * Creates a SourceNode from generated code and a SourceMapConsumer.
	 *
	 * @param aGeneratedCode The generated code
	 * @param aSourceMapConsumer The SourceMap for the generated code
	 * @param aRelativePath Optional. The path that relative sources in the
	 *        SourceMapConsumer should be relative to.
	 */
	SourceNode.fromStringWithSourceMap =
	  function SourceNode_fromStringWithSourceMap(aGeneratedCode, aSourceMapConsumer, aRelativePath) {
	    // The SourceNode we want to fill with the generated code
	    // and the SourceMap
	    var node = new SourceNode();

	    // All even indices of this array are one line of the generated code,
	    // while all odd indices are the newlines between two adjacent lines
	    // (since `REGEX_NEWLINE` captures its match).
	    // Processed fragments are accessed by calling `shiftNextLine`.
	    var remainingLines = aGeneratedCode.split(REGEX_NEWLINE);
	    var remainingLinesIndex = 0;
	    var shiftNextLine = function() {
	      var lineContents = getNextLine();
	      // The last line of a file might not have a newline.
	      var newLine = getNextLine() || "";
	      return lineContents + newLine;

	      function getNextLine() {
	        return remainingLinesIndex < remainingLines.length ?
	            remainingLines[remainingLinesIndex++] : undefined;
	      }
	    };

	    // We need to remember the position of "remainingLines"
	    var lastGeneratedLine = 1, lastGeneratedColumn = 0;

	    // The generate SourceNodes we need a code range.
	    // To extract it current and last mapping is used.
	    // Here we store the last mapping.
	    var lastMapping = null;

	    aSourceMapConsumer.eachMapping(function (mapping) {
	      if (lastMapping !== null) {
	        // We add the code from "lastMapping" to "mapping":
	        // First check if there is a new line in between.
	        if (lastGeneratedLine < mapping.generatedLine) {
	          // Associate first line with "lastMapping"
	          addMappingWithCode(lastMapping, shiftNextLine());
	          lastGeneratedLine++;
	          lastGeneratedColumn = 0;
	          // The remaining code is added without mapping
	        } else {
	          // There is no new line in between.
	          // Associate the code between "lastGeneratedColumn" and
	          // "mapping.generatedColumn" with "lastMapping"
	          var nextLine = remainingLines[remainingLinesIndex] || '';
	          var code = nextLine.substr(0, mapping.generatedColumn -
	                                        lastGeneratedColumn);
	          remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn -
	                                              lastGeneratedColumn);
	          lastGeneratedColumn = mapping.generatedColumn;
	          addMappingWithCode(lastMapping, code);
	          // No more remaining code, continue
	          lastMapping = mapping;
	          return;
	        }
	      }
	      // We add the generated code until the first mapping
	      // to the SourceNode without any mapping.
	      // Each line is added as separate string.
	      while (lastGeneratedLine < mapping.generatedLine) {
	        node.add(shiftNextLine());
	        lastGeneratedLine++;
	      }
	      if (lastGeneratedColumn < mapping.generatedColumn) {
	        var nextLine = remainingLines[remainingLinesIndex] || '';
	        node.add(nextLine.substr(0, mapping.generatedColumn));
	        remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn);
	        lastGeneratedColumn = mapping.generatedColumn;
	      }
	      lastMapping = mapping;
	    }, this);
	    // We have processed all mappings.
	    if (remainingLinesIndex < remainingLines.length) {
	      if (lastMapping) {
	        // Associate the remaining code in the current line with "lastMapping"
	        addMappingWithCode(lastMapping, shiftNextLine());
	      }
	      // and add the remaining lines without any mapping
	      node.add(remainingLines.splice(remainingLinesIndex).join(""));
	    }

	    // Copy sourcesContent into SourceNode
	    aSourceMapConsumer.sources.forEach(function (sourceFile) {
	      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
	      if (content != null) {
	        if (aRelativePath != null) {
	          sourceFile = util.join(aRelativePath, sourceFile);
	        }
	        node.setSourceContent(sourceFile, content);
	      }
	    });

	    return node;

	    function addMappingWithCode(mapping, code) {
	      if (mapping === null || mapping.source === undefined) {
	        node.add(code);
	      } else {
	        var source = aRelativePath
	          ? util.join(aRelativePath, mapping.source)
	          : mapping.source;
	        node.add(new SourceNode(mapping.originalLine,
	                                mapping.originalColumn,
	                                source,
	                                code,
	                                mapping.name));
	      }
	    }
	  };

	/**
	 * Add a chunk of generated JS to this source node.
	 *
	 * @param aChunk A string snippet of generated JS code, another instance of
	 *        SourceNode, or an array where each member is one of those things.
	 */
	SourceNode.prototype.add = function SourceNode_add(aChunk) {
	  if (Array.isArray(aChunk)) {
	    aChunk.forEach(function (chunk) {
	      this.add(chunk);
	    }, this);
	  }
	  else if (aChunk[isSourceNode] || typeof aChunk === "string") {
	    if (aChunk) {
	      this.children.push(aChunk);
	    }
	  }
	  else {
	    throw new TypeError(
	      "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
	    );
	  }
	  return this;
	};

	/**
	 * Add a chunk of generated JS to the beginning of this source node.
	 *
	 * @param aChunk A string snippet of generated JS code, another instance of
	 *        SourceNode, or an array where each member is one of those things.
	 */
	SourceNode.prototype.prepend = function SourceNode_prepend(aChunk) {
	  if (Array.isArray(aChunk)) {
	    for (var i = aChunk.length-1; i >= 0; i--) {
	      this.prepend(aChunk[i]);
	    }
	  }
	  else if (aChunk[isSourceNode] || typeof aChunk === "string") {
	    this.children.unshift(aChunk);
	  }
	  else {
	    throw new TypeError(
	      "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
	    );
	  }
	  return this;
	};

	/**
	 * Walk over the tree of JS snippets in this node and its children. The
	 * walking function is called once for each snippet of JS and is passed that
	 * snippet and the its original associated source's line/column location.
	 *
	 * @param aFn The traversal function.
	 */
	SourceNode.prototype.walk = function SourceNode_walk(aFn) {
	  var chunk;
	  for (var i = 0, len = this.children.length; i < len; i++) {
	    chunk = this.children[i];
	    if (chunk[isSourceNode]) {
	      chunk.walk(aFn);
	    }
	    else {
	      if (chunk !== '') {
	        aFn(chunk, { source: this.source,
	                     line: this.line,
	                     column: this.column,
	                     name: this.name });
	      }
	    }
	  }
	};

	/**
	 * Like `String.prototype.join` except for SourceNodes. Inserts `aStr` between
	 * each of `this.children`.
	 *
	 * @param aSep The separator.
	 */
	SourceNode.prototype.join = function SourceNode_join(aSep) {
	  var newChildren;
	  var i;
	  var len = this.children.length;
	  if (len > 0) {
	    newChildren = [];
	    for (i = 0; i < len-1; i++) {
	      newChildren.push(this.children[i]);
	      newChildren.push(aSep);
	    }
	    newChildren.push(this.children[i]);
	    this.children = newChildren;
	  }
	  return this;
	};

	/**
	 * Call String.prototype.replace on the very right-most source snippet. Useful
	 * for trimming whitespace from the end of a source node, etc.
	 *
	 * @param aPattern The pattern to replace.
	 * @param aReplacement The thing to replace the pattern with.
	 */
	SourceNode.prototype.replaceRight = function SourceNode_replaceRight(aPattern, aReplacement) {
	  var lastChild = this.children[this.children.length - 1];
	  if (lastChild[isSourceNode]) {
	    lastChild.replaceRight(aPattern, aReplacement);
	  }
	  else if (typeof lastChild === 'string') {
	    this.children[this.children.length - 1] = lastChild.replace(aPattern, aReplacement);
	  }
	  else {
	    this.children.push(''.replace(aPattern, aReplacement));
	  }
	  return this;
	};

	/**
	 * Set the source content for a source file. This will be added to the SourceMapGenerator
	 * in the sourcesContent field.
	 *
	 * @param aSourceFile The filename of the source file
	 * @param aSourceContent The content of the source file
	 */
	SourceNode.prototype.setSourceContent =
	  function SourceNode_setSourceContent(aSourceFile, aSourceContent) {
	    this.sourceContents[util.toSetString(aSourceFile)] = aSourceContent;
	  };

	/**
	 * Walk over the tree of SourceNodes. The walking function is called for each
	 * source file content and is passed the filename and source content.
	 *
	 * @param aFn The traversal function.
	 */
	SourceNode.prototype.walkSourceContents =
	  function SourceNode_walkSourceContents(aFn) {
	    for (var i = 0, len = this.children.length; i < len; i++) {
	      if (this.children[i][isSourceNode]) {
	        this.children[i].walkSourceContents(aFn);
	      }
	    }

	    var sources = Object.keys(this.sourceContents);
	    for (var i = 0, len = sources.length; i < len; i++) {
	      aFn(util.fromSetString(sources[i]), this.sourceContents[sources[i]]);
	    }
	  };

	/**
	 * Return the string representation of this source node. Walks over the tree
	 * and concatenates all the various snippets together to one string.
	 */
	SourceNode.prototype.toString = function SourceNode_toString() {
	  var str = "";
	  this.walk(function (chunk) {
	    str += chunk;
	  });
	  return str;
	};

	/**
	 * Returns the string representation of this source node along with a source
	 * map.
	 */
	SourceNode.prototype.toStringWithSourceMap = function SourceNode_toStringWithSourceMap(aArgs) {
	  var generated = {
	    code: "",
	    line: 1,
	    column: 0
	  };
	  var map = new SourceMapGenerator(aArgs);
	  var sourceMappingActive = false;
	  var lastOriginalSource = null;
	  var lastOriginalLine = null;
	  var lastOriginalColumn = null;
	  var lastOriginalName = null;
	  this.walk(function (chunk, original) {
	    generated.code += chunk;
	    if (original.source !== null
	        && original.line !== null
	        && original.column !== null) {
	      if(lastOriginalSource !== original.source
	         || lastOriginalLine !== original.line
	         || lastOriginalColumn !== original.column
	         || lastOriginalName !== original.name) {
	        map.addMapping({
	          source: original.source,
	          original: {
	            line: original.line,
	            column: original.column
	          },
	          generated: {
	            line: generated.line,
	            column: generated.column
	          },
	          name: original.name
	        });
	      }
	      lastOriginalSource = original.source;
	      lastOriginalLine = original.line;
	      lastOriginalColumn = original.column;
	      lastOriginalName = original.name;
	      sourceMappingActive = true;
	    } else if (sourceMappingActive) {
	      map.addMapping({
	        generated: {
	          line: generated.line,
	          column: generated.column
	        }
	      });
	      lastOriginalSource = null;
	      sourceMappingActive = false;
	    }
	    for (var idx = 0, length = chunk.length; idx < length; idx++) {
	      if (chunk.charCodeAt(idx) === NEWLINE_CODE) {
	        generated.line++;
	        generated.column = 0;
	        // Mappings end at eol
	        if (idx + 1 === length) {
	          lastOriginalSource = null;
	          sourceMappingActive = false;
	        } else if (sourceMappingActive) {
	          map.addMapping({
	            source: original.source,
	            original: {
	              line: original.line,
	              column: original.column
	            },
	            generated: {
	              line: generated.line,
	              column: generated.column
	            },
	            name: original.name
	          });
	        }
	      } else {
	        generated.column++;
	      }
	    }
	  });
	  this.walkSourceContents(function (sourceFile, sourceContent) {
	    map.setSourceContent(sourceFile, sourceContent);
	  });

	  return { code: generated.code, map: map };
	};

	sourceNode.SourceNode = SourceNode;
	return sourceNode;
}

/*
 * Copyright 2009-2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE.txt or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var hasRequiredSourceMap;

function requireSourceMap () {
	if (hasRequiredSourceMap) return sourceMap;
	hasRequiredSourceMap = 1;
	sourceMap.SourceMapGenerator = requireSourceMapGenerator().SourceMapGenerator;
	sourceMap.SourceMapConsumer = requireSourceMapConsumer().SourceMapConsumer;
	sourceMap.SourceNode = requireSourceNode().SourceNode;
	return sourceMap;
}

/* global define, require */

(function (module, exports) {

	exports.__esModule = true;

	var _utils = utils;

	var SourceNode = undefined;

	try {
	  /* istanbul ignore next */
	  if (typeof undefined !== 'function' || !undefined.amd) {
	    // We don't support this in AMD environments. For these environments, we assume that
	    // they are running on the browser and thus have no need for the source-map library.
	    var SourceMap = requireSourceMap();
	    SourceNode = SourceMap.SourceNode;
	  }
	} catch (err) {}
	/* NOP */

	/* istanbul ignore if: tested but not covered in istanbul due to dist build  */
	if (!SourceNode) {
	  SourceNode = function (line, column, srcFile, chunks) {
	    this.src = '';
	    if (chunks) {
	      this.add(chunks);
	    }
	  };
	  /* istanbul ignore next */
	  SourceNode.prototype = {
	    add: function add(chunks) {
	      if (_utils.isArray(chunks)) {
	        chunks = chunks.join('');
	      }
	      this.src += chunks;
	    },
	    prepend: function prepend(chunks) {
	      if (_utils.isArray(chunks)) {
	        chunks = chunks.join('');
	      }
	      this.src = chunks + this.src;
	    },
	    toStringWithSourceMap: function toStringWithSourceMap() {
	      return { code: this.toString() };
	    },
	    toString: function toString() {
	      return this.src;
	    }
	  };
	}

	function castChunk(chunk, codeGen, loc) {
	  if (_utils.isArray(chunk)) {
	    var ret = [];

	    for (var i = 0, len = chunk.length; i < len; i++) {
	      ret.push(codeGen.wrap(chunk[i], loc));
	    }
	    return ret;
	  } else if (typeof chunk === 'boolean' || typeof chunk === 'number') {
	    // Handle primitives that the SourceNode will throw up on
	    return chunk + '';
	  }
	  return chunk;
	}

	function CodeGen(srcFile) {
	  this.srcFile = srcFile;
	  this.source = [];
	}

	CodeGen.prototype = {
	  isEmpty: function isEmpty() {
	    return !this.source.length;
	  },
	  prepend: function prepend(source, loc) {
	    this.source.unshift(this.wrap(source, loc));
	  },
	  push: function push(source, loc) {
	    this.source.push(this.wrap(source, loc));
	  },

	  merge: function merge() {
	    var source = this.empty();
	    this.each(function (line) {
	      source.add(['  ', line, '\n']);
	    });
	    return source;
	  },

	  each: function each(iter) {
	    for (var i = 0, len = this.source.length; i < len; i++) {
	      iter(this.source[i]);
	    }
	  },

	  empty: function empty() {
	    var loc = this.currentLocation || { start: {} };
	    return new SourceNode(loc.start.line, loc.start.column, this.srcFile);
	  },
	  wrap: function wrap(chunk) {
	    var loc = arguments.length <= 1 || arguments[1] === undefined ? this.currentLocation || { start: {} } : arguments[1];

	    if (chunk instanceof SourceNode) {
	      return chunk;
	    }

	    chunk = castChunk(chunk, this, loc);

	    return new SourceNode(loc.start.line, loc.start.column, this.srcFile, chunk);
	  },

	  functionCall: function functionCall(fn, type, params) {
	    params = this.generateList(params);
	    return this.wrap([fn, type ? '.' + type + '(' : '(', params, ')']);
	  },

	  quotedString: function quotedString(str) {
	    return '"' + (str + '').replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\u2028/g, '\\u2028') // Per Ecma-262 7.3 + 7.8.4
	    .replace(/\u2029/g, '\\u2029') + '"';
	  },

	  objectLiteral: function objectLiteral(obj) {
	    // istanbul ignore next

	    var _this = this;

	    var pairs = [];

	    Object.keys(obj).forEach(function (key) {
	      var value = castChunk(obj[key], _this);
	      if (value !== 'undefined') {
	        pairs.push([_this.quotedString(key), ':', value]);
	      }
	    });

	    var ret = this.generateList(pairs);
	    ret.prepend('{');
	    ret.add('}');
	    return ret;
	  },

	  generateList: function generateList(entries) {
	    var ret = this.empty();

	    for (var i = 0, len = entries.length; i < len; i++) {
	      if (i) {
	        ret.add(',');
	      }

	      ret.add(castChunk(entries[i], this));
	    }

	    return ret;
	  },

	  generateArray: function generateArray(entries) {
	    var ret = this.generateList(entries);
	    ret.prepend('[');
	    ret.add(']');

	    return ret;
	  }
	};

	exports['default'] = CodeGen;
	module.exports = exports['default'];
	
} (codeGen, codeGen.exports));

var codeGenExports = codeGen.exports;

(function (module, exports) {

	exports.__esModule = true;
	// istanbul ignore next

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _base = base$1;

	var _exception = exceptionExports;

	var _exception2 = _interopRequireDefault(_exception);

	var _utils = utils;

	var _codeGen = codeGenExports;

	var _codeGen2 = _interopRequireDefault(_codeGen);

	function Literal(value) {
	  this.value = value;
	}

	function JavaScriptCompiler() {}

	JavaScriptCompiler.prototype = {
	  // PUBLIC API: You can override these methods in a subclass to provide
	  // alternative compiled forms for name lookup and buffering semantics
	  nameLookup: function nameLookup(parent, name /*,  type */) {
	    return this.internalNameLookup(parent, name);
	  },
	  depthedLookup: function depthedLookup(name) {
	    return [this.aliasable('container.lookup'), '(depths, ', JSON.stringify(name), ')'];
	  },

	  compilerInfo: function compilerInfo() {
	    var revision = _base.COMPILER_REVISION,
	        versions = _base.REVISION_CHANGES[revision];
	    return [revision, versions];
	  },

	  appendToBuffer: function appendToBuffer(source, location, explicit) {
	    // Force a source as this simplifies the merge logic.
	    if (!_utils.isArray(source)) {
	      source = [source];
	    }
	    source = this.source.wrap(source, location);

	    if (this.environment.isSimple) {
	      return ['return ', source, ';'];
	    } else if (explicit) {
	      // This is a case where the buffer operation occurs as a child of another
	      // construct, generally braces. We have to explicitly output these buffer
	      // operations to ensure that the emitted code goes in the correct location.
	      return ['buffer += ', source, ';'];
	    } else {
	      source.appendToBuffer = true;
	      return source;
	    }
	  },

	  initializeBuffer: function initializeBuffer() {
	    return this.quotedString('');
	  },
	  // END PUBLIC API
	  internalNameLookup: function internalNameLookup(parent, name) {
	    this.lookupPropertyFunctionIsUsed = true;
	    return ['lookupProperty(', parent, ',', JSON.stringify(name), ')'];
	  },

	  lookupPropertyFunctionIsUsed: false,

	  compile: function compile(environment, options, context, asObject) {
	    this.environment = environment;
	    this.options = options;
	    this.stringParams = this.options.stringParams;
	    this.trackIds = this.options.trackIds;
	    this.precompile = !asObject;

	    this.name = this.environment.name;
	    this.isChild = !!context;
	    this.context = context || {
	      decorators: [],
	      programs: [],
	      environments: []
	    };

	    this.preamble();

	    this.stackSlot = 0;
	    this.stackVars = [];
	    this.aliases = {};
	    this.registers = { list: [] };
	    this.hashes = [];
	    this.compileStack = [];
	    this.inlineStack = [];
	    this.blockParams = [];

	    this.compileChildren(environment, options);

	    this.useDepths = this.useDepths || environment.useDepths || environment.useDecorators || this.options.compat;
	    this.useBlockParams = this.useBlockParams || environment.useBlockParams;

	    var opcodes = environment.opcodes,
	        opcode = undefined,
	        firstLoc = undefined,
	        i = undefined,
	        l = undefined;

	    for (i = 0, l = opcodes.length; i < l; i++) {
	      opcode = opcodes[i];

	      this.source.currentLocation = opcode.loc;
	      firstLoc = firstLoc || opcode.loc;
	      this[opcode.opcode].apply(this, opcode.args);
	    }

	    // Flush any trailing content that might be pending.
	    this.source.currentLocation = firstLoc;
	    this.pushSource('');

	    /* istanbul ignore next */
	    if (this.stackSlot || this.inlineStack.length || this.compileStack.length) {
	      throw new _exception2['default']('Compile completed with content left on stack');
	    }

	    if (!this.decorators.isEmpty()) {
	      this.useDecorators = true;

	      this.decorators.prepend(['var decorators = container.decorators, ', this.lookupPropertyFunctionVarDeclaration(), ';\n']);
	      this.decorators.push('return fn;');

	      if (asObject) {
	        this.decorators = Function.apply(this, ['fn', 'props', 'container', 'depth0', 'data', 'blockParams', 'depths', this.decorators.merge()]);
	      } else {
	        this.decorators.prepend('function(fn, props, container, depth0, data, blockParams, depths) {\n');
	        this.decorators.push('}\n');
	        this.decorators = this.decorators.merge();
	      }
	    } else {
	      this.decorators = undefined;
	    }

	    var fn = this.createFunctionContext(asObject);
	    if (!this.isChild) {
	      var ret = {
	        compiler: this.compilerInfo(),
	        main: fn
	      };

	      if (this.decorators) {
	        ret.main_d = this.decorators; // eslint-disable-line camelcase
	        ret.useDecorators = true;
	      }

	      var _context = this.context;
	      var programs = _context.programs;
	      var decorators = _context.decorators;

	      for (i = 0, l = programs.length; i < l; i++) {
	        if (programs[i]) {
	          ret[i] = programs[i];
	          if (decorators[i]) {
	            ret[i + '_d'] = decorators[i];
	            ret.useDecorators = true;
	          }
	        }
	      }

	      if (this.environment.usePartial) {
	        ret.usePartial = true;
	      }
	      if (this.options.data) {
	        ret.useData = true;
	      }
	      if (this.useDepths) {
	        ret.useDepths = true;
	      }
	      if (this.useBlockParams) {
	        ret.useBlockParams = true;
	      }
	      if (this.options.compat) {
	        ret.compat = true;
	      }

	      if (!asObject) {
	        ret.compiler = JSON.stringify(ret.compiler);

	        this.source.currentLocation = { start: { line: 1, column: 0 } };
	        ret = this.objectLiteral(ret);

	        if (options.srcName) {
	          ret = ret.toStringWithSourceMap({ file: options.destName });
	          ret.map = ret.map && ret.map.toString();
	        } else {
	          ret = ret.toString();
	        }
	      } else {
	        ret.compilerOptions = this.options;
	      }

	      return ret;
	    } else {
	      return fn;
	    }
	  },

	  preamble: function preamble() {
	    // track the last context pushed into place to allow skipping the
	    // getContext opcode when it would be a noop
	    this.lastContext = 0;
	    this.source = new _codeGen2['default'](this.options.srcName);
	    this.decorators = new _codeGen2['default'](this.options.srcName);
	  },

	  createFunctionContext: function createFunctionContext(asObject) {
	    // istanbul ignore next

	    var _this = this;

	    var varDeclarations = '';

	    var locals = this.stackVars.concat(this.registers.list);
	    if (locals.length > 0) {
	      varDeclarations += ', ' + locals.join(', ');
	    }

	    // Generate minimizer alias mappings
	    //
	    // When using true SourceNodes, this will update all references to the given alias
	    // as the source nodes are reused in situ. For the non-source node compilation mode,
	    // aliases will not be used, but this case is already being run on the client and
	    // we aren't concern about minimizing the template size.
	    var aliasCount = 0;
	    Object.keys(this.aliases).forEach(function (alias) {
	      var node = _this.aliases[alias];
	      if (node.children && node.referenceCount > 1) {
	        varDeclarations += ', alias' + ++aliasCount + '=' + alias;
	        node.children[0] = 'alias' + aliasCount;
	      }
	    });

	    if (this.lookupPropertyFunctionIsUsed) {
	      varDeclarations += ', ' + this.lookupPropertyFunctionVarDeclaration();
	    }

	    var params = ['container', 'depth0', 'helpers', 'partials', 'data'];

	    if (this.useBlockParams || this.useDepths) {
	      params.push('blockParams');
	    }
	    if (this.useDepths) {
	      params.push('depths');
	    }

	    // Perform a second pass over the output to merge content when possible
	    var source = this.mergeSource(varDeclarations);

	    if (asObject) {
	      params.push(source);

	      return Function.apply(this, params);
	    } else {
	      return this.source.wrap(['function(', params.join(','), ') {\n  ', source, '}']);
	    }
	  },
	  mergeSource: function mergeSource(varDeclarations) {
	    var isSimple = this.environment.isSimple,
	        appendOnly = !this.forceBuffer,
	        appendFirst = undefined,
	        sourceSeen = undefined,
	        bufferStart = undefined,
	        bufferEnd = undefined;
	    this.source.each(function (line) {
	      if (line.appendToBuffer) {
	        if (bufferStart) {
	          line.prepend('  + ');
	        } else {
	          bufferStart = line;
	        }
	        bufferEnd = line;
	      } else {
	        if (bufferStart) {
	          if (!sourceSeen) {
	            appendFirst = true;
	          } else {
	            bufferStart.prepend('buffer += ');
	          }
	          bufferEnd.add(';');
	          bufferStart = bufferEnd = undefined;
	        }

	        sourceSeen = true;
	        if (!isSimple) {
	          appendOnly = false;
	        }
	      }
	    });

	    if (appendOnly) {
	      if (bufferStart) {
	        bufferStart.prepend('return ');
	        bufferEnd.add(';');
	      } else if (!sourceSeen) {
	        this.source.push('return "";');
	      }
	    } else {
	      varDeclarations += ', buffer = ' + (appendFirst ? '' : this.initializeBuffer());

	      if (bufferStart) {
	        bufferStart.prepend('return buffer + ');
	        bufferEnd.add(';');
	      } else {
	        this.source.push('return buffer;');
	      }
	    }

	    if (varDeclarations) {
	      this.source.prepend('var ' + varDeclarations.substring(2) + (appendFirst ? '' : ';\n'));
	    }

	    return this.source.merge();
	  },

	  lookupPropertyFunctionVarDeclaration: function lookupPropertyFunctionVarDeclaration() {
	    return '\n      lookupProperty = container.lookupProperty || function(parent, propertyName) {\n        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {\n          return parent[propertyName];\n        }\n        return undefined\n    }\n    '.trim();
	  },

	  // [blockValue]
	  //
	  // On stack, before: hash, inverse, program, value
	  // On stack, after: return value of blockHelperMissing
	  //
	  // The purpose of this opcode is to take a block of the form
	  // `{{#this.foo}}...{{/this.foo}}`, resolve the value of `foo`, and
	  // replace it on the stack with the result of properly
	  // invoking blockHelperMissing.
	  blockValue: function blockValue(name) {
	    var blockHelperMissing = this.aliasable('container.hooks.blockHelperMissing'),
	        params = [this.contextName(0)];
	    this.setupHelperArgs(name, 0, params);

	    var blockName = this.popStack();
	    params.splice(1, 0, blockName);

	    this.push(this.source.functionCall(blockHelperMissing, 'call', params));
	  },

	  // [ambiguousBlockValue]
	  //
	  // On stack, before: hash, inverse, program, value
	  // Compiler value, before: lastHelper=value of last found helper, if any
	  // On stack, after, if no lastHelper: same as [blockValue]
	  // On stack, after, if lastHelper: value
	  ambiguousBlockValue: function ambiguousBlockValue() {
	    // We're being a bit cheeky and reusing the options value from the prior exec
	    var blockHelperMissing = this.aliasable('container.hooks.blockHelperMissing'),
	        params = [this.contextName(0)];
	    this.setupHelperArgs('', 0, params, true);

	    this.flushInline();

	    var current = this.topStack();
	    params.splice(1, 0, current);

	    this.pushSource(['if (!', this.lastHelper, ') { ', current, ' = ', this.source.functionCall(blockHelperMissing, 'call', params), '}']);
	  },

	  // [appendContent]
	  //
	  // On stack, before: ...
	  // On stack, after: ...
	  //
	  // Appends the string value of `content` to the current buffer
	  appendContent: function appendContent(content) {
	    if (this.pendingContent) {
	      content = this.pendingContent + content;
	    } else {
	      this.pendingLocation = this.source.currentLocation;
	    }

	    this.pendingContent = content;
	  },

	  // [append]
	  //
	  // On stack, before: value, ...
	  // On stack, after: ...
	  //
	  // Coerces `value` to a String and appends it to the current buffer.
	  //
	  // If `value` is truthy, or 0, it is coerced into a string and appended
	  // Otherwise, the empty string is appended
	  append: function append() {
	    if (this.isInline()) {
	      this.replaceStack(function (current) {
	        return [' != null ? ', current, ' : ""'];
	      });

	      this.pushSource(this.appendToBuffer(this.popStack()));
	    } else {
	      var local = this.popStack();
	      this.pushSource(['if (', local, ' != null) { ', this.appendToBuffer(local, undefined, true), ' }']);
	      if (this.environment.isSimple) {
	        this.pushSource(['else { ', this.appendToBuffer("''", undefined, true), ' }']);
	      }
	    }
	  },

	  // [appendEscaped]
	  //
	  // On stack, before: value, ...
	  // On stack, after: ...
	  //
	  // Escape `value` and append it to the buffer
	  appendEscaped: function appendEscaped() {
	    this.pushSource(this.appendToBuffer([this.aliasable('container.escapeExpression'), '(', this.popStack(), ')']));
	  },

	  // [getContext]
	  //
	  // On stack, before: ...
	  // On stack, after: ...
	  // Compiler value, after: lastContext=depth
	  //
	  // Set the value of the `lastContext` compiler value to the depth
	  getContext: function getContext(depth) {
	    this.lastContext = depth;
	  },

	  // [pushContext]
	  //
	  // On stack, before: ...
	  // On stack, after: currentContext, ...
	  //
	  // Pushes the value of the current context onto the stack.
	  pushContext: function pushContext() {
	    this.pushStackLiteral(this.contextName(this.lastContext));
	  },

	  // [lookupOnContext]
	  //
	  // On stack, before: ...
	  // On stack, after: currentContext[name], ...
	  //
	  // Looks up the value of `name` on the current context and pushes
	  // it onto the stack.
	  lookupOnContext: function lookupOnContext(parts, falsy, strict, scoped) {
	    var i = 0;

	    if (!scoped && this.options.compat && !this.lastContext) {
	      // The depthed query is expected to handle the undefined logic for the root level that
	      // is implemented below, so we evaluate that directly in compat mode
	      this.push(this.depthedLookup(parts[i++]));
	    } else {
	      this.pushContext();
	    }

	    this.resolvePath('context', parts, i, falsy, strict);
	  },

	  // [lookupBlockParam]
	  //
	  // On stack, before: ...
	  // On stack, after: blockParam[name], ...
	  //
	  // Looks up the value of `parts` on the given block param and pushes
	  // it onto the stack.
	  lookupBlockParam: function lookupBlockParam(blockParamId, parts) {
	    this.useBlockParams = true;

	    this.push(['blockParams[', blockParamId[0], '][', blockParamId[1], ']']);
	    this.resolvePath('context', parts, 1);
	  },

	  // [lookupData]
	  //
	  // On stack, before: ...
	  // On stack, after: data, ...
	  //
	  // Push the data lookup operator
	  lookupData: function lookupData(depth, parts, strict) {
	    if (!depth) {
	      this.pushStackLiteral('data');
	    } else {
	      this.pushStackLiteral('container.data(data, ' + depth + ')');
	    }

	    this.resolvePath('data', parts, 0, true, strict);
	  },

	  resolvePath: function resolvePath(type, parts, i, falsy, strict) {
	    // istanbul ignore next

	    var _this2 = this;

	    if (this.options.strict || this.options.assumeObjects) {
	      this.push(strictLookup(this.options.strict && strict, this, parts, i, type));
	      return;
	    }

	    var len = parts.length;
	    for (; i < len; i++) {
	      /* eslint-disable no-loop-func */
	      this.replaceStack(function (current) {
	        var lookup = _this2.nameLookup(current, parts[i], type);
	        // We want to ensure that zero and false are handled properly if the context (falsy flag)
	        // needs to have the special handling for these values.
	        if (!falsy) {
	          return [' != null ? ', lookup, ' : ', current];
	        } else {
	          // Otherwise we can use generic falsy handling
	          return [' && ', lookup];
	        }
	      });
	      /* eslint-enable no-loop-func */
	    }
	  },

	  // [resolvePossibleLambda]
	  //
	  // On stack, before: value, ...
	  // On stack, after: resolved value, ...
	  //
	  // If the `value` is a lambda, replace it on the stack by
	  // the return value of the lambda
	  resolvePossibleLambda: function resolvePossibleLambda() {
	    this.push([this.aliasable('container.lambda'), '(', this.popStack(), ', ', this.contextName(0), ')']);
	  },

	  // [pushStringParam]
	  //
	  // On stack, before: ...
	  // On stack, after: string, currentContext, ...
	  //
	  // This opcode is designed for use in string mode, which
	  // provides the string value of a parameter along with its
	  // depth rather than resolving it immediately.
	  pushStringParam: function pushStringParam(string, type) {
	    this.pushContext();
	    this.pushString(type);

	    // If it's a subexpression, the string result
	    // will be pushed after this opcode.
	    if (type !== 'SubExpression') {
	      if (typeof string === 'string') {
	        this.pushString(string);
	      } else {
	        this.pushStackLiteral(string);
	      }
	    }
	  },

	  emptyHash: function emptyHash(omitEmpty) {
	    if (this.trackIds) {
	      this.push('{}'); // hashIds
	    }
	    if (this.stringParams) {
	      this.push('{}'); // hashContexts
	      this.push('{}'); // hashTypes
	    }
	    this.pushStackLiteral(omitEmpty ? 'undefined' : '{}');
	  },
	  pushHash: function pushHash() {
	    if (this.hash) {
	      this.hashes.push(this.hash);
	    }
	    this.hash = { values: {}, types: [], contexts: [], ids: [] };
	  },
	  popHash: function popHash() {
	    var hash = this.hash;
	    this.hash = this.hashes.pop();

	    if (this.trackIds) {
	      this.push(this.objectLiteral(hash.ids));
	    }
	    if (this.stringParams) {
	      this.push(this.objectLiteral(hash.contexts));
	      this.push(this.objectLiteral(hash.types));
	    }

	    this.push(this.objectLiteral(hash.values));
	  },

	  // [pushString]
	  //
	  // On stack, before: ...
	  // On stack, after: quotedString(string), ...
	  //
	  // Push a quoted version of `string` onto the stack
	  pushString: function pushString(string) {
	    this.pushStackLiteral(this.quotedString(string));
	  },

	  // [pushLiteral]
	  //
	  // On stack, before: ...
	  // On stack, after: value, ...
	  //
	  // Pushes a value onto the stack. This operation prevents
	  // the compiler from creating a temporary variable to hold
	  // it.
	  pushLiteral: function pushLiteral(value) {
	    this.pushStackLiteral(value);
	  },

	  // [pushProgram]
	  //
	  // On stack, before: ...
	  // On stack, after: program(guid), ...
	  //
	  // Push a program expression onto the stack. This takes
	  // a compile-time guid and converts it into a runtime-accessible
	  // expression.
	  pushProgram: function pushProgram(guid) {
	    if (guid != null) {
	      this.pushStackLiteral(this.programExpression(guid));
	    } else {
	      this.pushStackLiteral(null);
	    }
	  },

	  // [registerDecorator]
	  //
	  // On stack, before: hash, program, params..., ...
	  // On stack, after: ...
	  //
	  // Pops off the decorator's parameters, invokes the decorator,
	  // and inserts the decorator into the decorators list.
	  registerDecorator: function registerDecorator(paramSize, name) {
	    var foundDecorator = this.nameLookup('decorators', name, 'decorator'),
	        options = this.setupHelperArgs(name, paramSize);

	    this.decorators.push(['fn = ', this.decorators.functionCall(foundDecorator, '', ['fn', 'props', 'container', options]), ' || fn;']);
	  },

	  // [invokeHelper]
	  //
	  // On stack, before: hash, inverse, program, params..., ...
	  // On stack, after: result of helper invocation
	  //
	  // Pops off the helper's parameters, invokes the helper,
	  // and pushes the helper's return value onto the stack.
	  //
	  // If the helper is not found, `helperMissing` is called.
	  invokeHelper: function invokeHelper(paramSize, name, isSimple) {
	    var nonHelper = this.popStack(),
	        helper = this.setupHelper(paramSize, name);

	    var possibleFunctionCalls = [];

	    if (isSimple) {
	      // direct call to helper
	      possibleFunctionCalls.push(helper.name);
	    }
	    // call a function from the input object
	    possibleFunctionCalls.push(nonHelper);
	    if (!this.options.strict) {
	      possibleFunctionCalls.push(this.aliasable('container.hooks.helperMissing'));
	    }

	    var functionLookupCode = ['(', this.itemsSeparatedBy(possibleFunctionCalls, '||'), ')'];
	    var functionCall = this.source.functionCall(functionLookupCode, 'call', helper.callParams);
	    this.push(functionCall);
	  },

	  itemsSeparatedBy: function itemsSeparatedBy(items, separator) {
	    var result = [];
	    result.push(items[0]);
	    for (var i = 1; i < items.length; i++) {
	      result.push(separator, items[i]);
	    }
	    return result;
	  },
	  // [invokeKnownHelper]
	  //
	  // On stack, before: hash, inverse, program, params..., ...
	  // On stack, after: result of helper invocation
	  //
	  // This operation is used when the helper is known to exist,
	  // so a `helperMissing` fallback is not required.
	  invokeKnownHelper: function invokeKnownHelper(paramSize, name) {
	    var helper = this.setupHelper(paramSize, name);
	    this.push(this.source.functionCall(helper.name, 'call', helper.callParams));
	  },

	  // [invokeAmbiguous]
	  //
	  // On stack, before: hash, inverse, program, params..., ...
	  // On stack, after: result of disambiguation
	  //
	  // This operation is used when an expression like `{{foo}}`
	  // is provided, but we don't know at compile-time whether it
	  // is a helper or a path.
	  //
	  // This operation emits more code than the other options,
	  // and can be avoided by passing the `knownHelpers` and
	  // `knownHelpersOnly` flags at compile-time.
	  invokeAmbiguous: function invokeAmbiguous(name, helperCall) {
	    this.useRegister('helper');

	    var nonHelper = this.popStack();

	    this.emptyHash();
	    var helper = this.setupHelper(0, name, helperCall);

	    var helperName = this.lastHelper = this.nameLookup('helpers', name, 'helper');

	    var lookup = ['(', '(helper = ', helperName, ' || ', nonHelper, ')'];
	    if (!this.options.strict) {
	      lookup[0] = '(helper = ';
	      lookup.push(' != null ? helper : ', this.aliasable('container.hooks.helperMissing'));
	    }

	    this.push(['(', lookup, helper.paramsInit ? ['),(', helper.paramsInit] : [], '),', '(typeof helper === ', this.aliasable('"function"'), ' ? ', this.source.functionCall('helper', 'call', helper.callParams), ' : helper))']);
	  },

	  // [invokePartial]
	  //
	  // On stack, before: context, ...
	  // On stack after: result of partial invocation
	  //
	  // This operation pops off a context, invokes a partial with that context,
	  // and pushes the result of the invocation back.
	  invokePartial: function invokePartial(isDynamic, name, indent) {
	    var params = [],
	        options = this.setupParams(name, 1, params);

	    if (isDynamic) {
	      name = this.popStack();
	      delete options.name;
	    }

	    if (indent) {
	      options.indent = JSON.stringify(indent);
	    }
	    options.helpers = 'helpers';
	    options.partials = 'partials';
	    options.decorators = 'container.decorators';

	    if (!isDynamic) {
	      params.unshift(this.nameLookup('partials', name, 'partial'));
	    } else {
	      params.unshift(name);
	    }

	    if (this.options.compat) {
	      options.depths = 'depths';
	    }
	    options = this.objectLiteral(options);
	    params.push(options);

	    this.push(this.source.functionCall('container.invokePartial', '', params));
	  },

	  // [assignToHash]
	  //
	  // On stack, before: value, ..., hash, ...
	  // On stack, after: ..., hash, ...
	  //
	  // Pops a value off the stack and assigns it to the current hash
	  assignToHash: function assignToHash(key) {
	    var value = this.popStack(),
	        context = undefined,
	        type = undefined,
	        id = undefined;

	    if (this.trackIds) {
	      id = this.popStack();
	    }
	    if (this.stringParams) {
	      type = this.popStack();
	      context = this.popStack();
	    }

	    var hash = this.hash;
	    if (context) {
	      hash.contexts[key] = context;
	    }
	    if (type) {
	      hash.types[key] = type;
	    }
	    if (id) {
	      hash.ids[key] = id;
	    }
	    hash.values[key] = value;
	  },

	  pushId: function pushId(type, name, child) {
	    if (type === 'BlockParam') {
	      this.pushStackLiteral('blockParams[' + name[0] + '].path[' + name[1] + ']' + (child ? ' + ' + JSON.stringify('.' + child) : ''));
	    } else if (type === 'PathExpression') {
	      this.pushString(name);
	    } else if (type === 'SubExpression') {
	      this.pushStackLiteral('true');
	    } else {
	      this.pushStackLiteral('null');
	    }
	  },

	  // HELPERS

	  compiler: JavaScriptCompiler,

	  compileChildren: function compileChildren(environment, options) {
	    var children = environment.children,
	        child = undefined,
	        compiler = undefined;

	    for (var i = 0, l = children.length; i < l; i++) {
	      child = children[i];
	      compiler = new this.compiler(); // eslint-disable-line new-cap

	      var existing = this.matchExistingProgram(child);

	      if (existing == null) {
	        this.context.programs.push(''); // Placeholder to prevent name conflicts for nested children
	        var index = this.context.programs.length;
	        child.index = index;
	        child.name = 'program' + index;
	        this.context.programs[index] = compiler.compile(child, options, this.context, !this.precompile);
	        this.context.decorators[index] = compiler.decorators;
	        this.context.environments[index] = child;

	        this.useDepths = this.useDepths || compiler.useDepths;
	        this.useBlockParams = this.useBlockParams || compiler.useBlockParams;
	        child.useDepths = this.useDepths;
	        child.useBlockParams = this.useBlockParams;
	      } else {
	        child.index = existing.index;
	        child.name = 'program' + existing.index;

	        this.useDepths = this.useDepths || existing.useDepths;
	        this.useBlockParams = this.useBlockParams || existing.useBlockParams;
	      }
	    }
	  },
	  matchExistingProgram: function matchExistingProgram(child) {
	    for (var i = 0, len = this.context.environments.length; i < len; i++) {
	      var environment = this.context.environments[i];
	      if (environment && environment.equals(child)) {
	        return environment;
	      }
	    }
	  },

	  programExpression: function programExpression(guid) {
	    var child = this.environment.children[guid],
	        programParams = [child.index, 'data', child.blockParams];

	    if (this.useBlockParams || this.useDepths) {
	      programParams.push('blockParams');
	    }
	    if (this.useDepths) {
	      programParams.push('depths');
	    }

	    return 'container.program(' + programParams.join(', ') + ')';
	  },

	  useRegister: function useRegister(name) {
	    if (!this.registers[name]) {
	      this.registers[name] = true;
	      this.registers.list.push(name);
	    }
	  },

	  push: function push(expr) {
	    if (!(expr instanceof Literal)) {
	      expr = this.source.wrap(expr);
	    }

	    this.inlineStack.push(expr);
	    return expr;
	  },

	  pushStackLiteral: function pushStackLiteral(item) {
	    this.push(new Literal(item));
	  },

	  pushSource: function pushSource(source) {
	    if (this.pendingContent) {
	      this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation));
	      this.pendingContent = undefined;
	    }

	    if (source) {
	      this.source.push(source);
	    }
	  },

	  replaceStack: function replaceStack(callback) {
	    var prefix = ['('],
	        stack = undefined,
	        createdStack = undefined,
	        usedLiteral = undefined;

	    /* istanbul ignore next */
	    if (!this.isInline()) {
	      throw new _exception2['default']('replaceStack on non-inline');
	    }

	    // We want to merge the inline statement into the replacement statement via ','
	    var top = this.popStack(true);

	    if (top instanceof Literal) {
	      // Literals do not need to be inlined
	      stack = [top.value];
	      prefix = ['(', stack];
	      usedLiteral = true;
	    } else {
	      // Get or create the current stack name for use by the inline
	      createdStack = true;
	      var _name = this.incrStack();

	      prefix = ['((', this.push(_name), ' = ', top, ')'];
	      stack = this.topStack();
	    }

	    var item = callback.call(this, stack);

	    if (!usedLiteral) {
	      this.popStack();
	    }
	    if (createdStack) {
	      this.stackSlot--;
	    }
	    this.push(prefix.concat(item, ')'));
	  },

	  incrStack: function incrStack() {
	    this.stackSlot++;
	    if (this.stackSlot > this.stackVars.length) {
	      this.stackVars.push('stack' + this.stackSlot);
	    }
	    return this.topStackName();
	  },
	  topStackName: function topStackName() {
	    return 'stack' + this.stackSlot;
	  },
	  flushInline: function flushInline() {
	    var inlineStack = this.inlineStack;
	    this.inlineStack = [];
	    for (var i = 0, len = inlineStack.length; i < len; i++) {
	      var entry = inlineStack[i];
	      /* istanbul ignore if */
	      if (entry instanceof Literal) {
	        this.compileStack.push(entry);
	      } else {
	        var stack = this.incrStack();
	        this.pushSource([stack, ' = ', entry, ';']);
	        this.compileStack.push(stack);
	      }
	    }
	  },
	  isInline: function isInline() {
	    return this.inlineStack.length;
	  },

	  popStack: function popStack(wrapped) {
	    var inline = this.isInline(),
	        item = (inline ? this.inlineStack : this.compileStack).pop();

	    if (!wrapped && item instanceof Literal) {
	      return item.value;
	    } else {
	      if (!inline) {
	        /* istanbul ignore next */
	        if (!this.stackSlot) {
	          throw new _exception2['default']('Invalid stack pop');
	        }
	        this.stackSlot--;
	      }
	      return item;
	    }
	  },

	  topStack: function topStack() {
	    var stack = this.isInline() ? this.inlineStack : this.compileStack,
	        item = stack[stack.length - 1];

	    /* istanbul ignore if */
	    if (item instanceof Literal) {
	      return item.value;
	    } else {
	      return item;
	    }
	  },

	  contextName: function contextName(context) {
	    if (this.useDepths && context) {
	      return 'depths[' + context + ']';
	    } else {
	      return 'depth' + context;
	    }
	  },

	  quotedString: function quotedString(str) {
	    return this.source.quotedString(str);
	  },

	  objectLiteral: function objectLiteral(obj) {
	    return this.source.objectLiteral(obj);
	  },

	  aliasable: function aliasable(name) {
	    var ret = this.aliases[name];
	    if (ret) {
	      ret.referenceCount++;
	      return ret;
	    }

	    ret = this.aliases[name] = this.source.wrap(name);
	    ret.aliasable = true;
	    ret.referenceCount = 1;

	    return ret;
	  },

	  setupHelper: function setupHelper(paramSize, name, blockHelper) {
	    var params = [],
	        paramsInit = this.setupHelperArgs(name, paramSize, params, blockHelper);
	    var foundHelper = this.nameLookup('helpers', name, 'helper'),
	        callContext = this.aliasable(this.contextName(0) + ' != null ? ' + this.contextName(0) + ' : (container.nullContext || {})');

	    return {
	      params: params,
	      paramsInit: paramsInit,
	      name: foundHelper,
	      callParams: [callContext].concat(params)
	    };
	  },

	  setupParams: function setupParams(helper, paramSize, params) {
	    var options = {},
	        contexts = [],
	        types = [],
	        ids = [],
	        objectArgs = !params,
	        param = undefined;

	    if (objectArgs) {
	      params = [];
	    }

	    options.name = this.quotedString(helper);
	    options.hash = this.popStack();

	    if (this.trackIds) {
	      options.hashIds = this.popStack();
	    }
	    if (this.stringParams) {
	      options.hashTypes = this.popStack();
	      options.hashContexts = this.popStack();
	    }

	    var inverse = this.popStack(),
	        program = this.popStack();

	    // Avoid setting fn and inverse if neither are set. This allows
	    // helpers to do a check for `if (options.fn)`
	    if (program || inverse) {
	      options.fn = program || 'container.noop';
	      options.inverse = inverse || 'container.noop';
	    }

	    // The parameters go on to the stack in order (making sure that they are evaluated in order)
	    // so we need to pop them off the stack in reverse order
	    var i = paramSize;
	    while (i--) {
	      param = this.popStack();
	      params[i] = param;

	      if (this.trackIds) {
	        ids[i] = this.popStack();
	      }
	      if (this.stringParams) {
	        types[i] = this.popStack();
	        contexts[i] = this.popStack();
	      }
	    }

	    if (objectArgs) {
	      options.args = this.source.generateArray(params);
	    }

	    if (this.trackIds) {
	      options.ids = this.source.generateArray(ids);
	    }
	    if (this.stringParams) {
	      options.types = this.source.generateArray(types);
	      options.contexts = this.source.generateArray(contexts);
	    }

	    if (this.options.data) {
	      options.data = 'data';
	    }
	    if (this.useBlockParams) {
	      options.blockParams = 'blockParams';
	    }
	    return options;
	  },

	  setupHelperArgs: function setupHelperArgs(helper, paramSize, params, useRegister) {
	    var options = this.setupParams(helper, paramSize, params);
	    options.loc = JSON.stringify(this.source.currentLocation);
	    options = this.objectLiteral(options);
	    if (useRegister) {
	      this.useRegister('options');
	      params.push('options');
	      return ['options=', options];
	    } else if (params) {
	      params.push(options);
	      return '';
	    } else {
	      return options;
	    }
	  }
	};

	(function () {
	  var reservedWords = ('break else new var' + ' case finally return void' + ' catch for switch while' + ' continue function this with' + ' default if throw' + ' delete in try' + ' do instanceof typeof' + ' abstract enum int short' + ' boolean export interface static' + ' byte extends long super' + ' char final native synchronized' + ' class float package throws' + ' const goto private transient' + ' debugger implements protected volatile' + ' double import public let yield await' + ' null true false').split(' ');

	  var compilerWords = JavaScriptCompiler.RESERVED_WORDS = {};

	  for (var i = 0, l = reservedWords.length; i < l; i++) {
	    compilerWords[reservedWords[i]] = true;
	  }
	})();

	/**
	 * @deprecated May be removed in the next major version
	 */
	JavaScriptCompiler.isValidJavaScriptVariableName = function (name) {
	  return !JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
	};

	function strictLookup(requireTerminal, compiler, parts, i, type) {
	  var stack = compiler.popStack(),
	      len = parts.length;
	  if (requireTerminal) {
	    len--;
	  }

	  for (; i < len; i++) {
	    stack = compiler.nameLookup(stack, parts[i], type);
	  }

	  if (requireTerminal) {
	    return [compiler.aliasable('container.strict'), '(', stack, ', ', compiler.quotedString(parts[i]), ', ', JSON.stringify(compiler.source.currentLocation), ' )'];
	  } else {
	    return stack;
	  }
	}

	exports['default'] = JavaScriptCompiler;
	module.exports = exports['default'];
	
} (javascriptCompiler, javascriptCompiler.exports));

var javascriptCompilerExports = javascriptCompiler.exports;

(function (module, exports) {

	exports.__esModule = true;
	// istanbul ignore next

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _handlebarsRuntime = handlebars_runtimeExports;

	var _handlebarsRuntime2 = _interopRequireDefault(_handlebarsRuntime);

	// Compiler imports

	var _handlebarsCompilerAst = astExports;

	var _handlebarsCompilerAst2 = _interopRequireDefault(_handlebarsCompilerAst);

	var _handlebarsCompilerBase = base;

	var _handlebarsCompilerCompiler = compiler;

	var _handlebarsCompilerJavascriptCompiler = javascriptCompilerExports;

	var _handlebarsCompilerJavascriptCompiler2 = _interopRequireDefault(_handlebarsCompilerJavascriptCompiler);

	var _handlebarsCompilerVisitor = visitorExports;

	var _handlebarsCompilerVisitor2 = _interopRequireDefault(_handlebarsCompilerVisitor);

	var _handlebarsNoConflict = noConflictExports;

	var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

	var _create = _handlebarsRuntime2['default'].create;
	function create() {
	  var hb = _create();

	  hb.compile = function (input, options) {
	    return _handlebarsCompilerCompiler.compile(input, options, hb);
	  };
	  hb.precompile = function (input, options) {
	    return _handlebarsCompilerCompiler.precompile(input, options, hb);
	  };

	  hb.AST = _handlebarsCompilerAst2['default'];
	  hb.Compiler = _handlebarsCompilerCompiler.Compiler;
	  hb.JavaScriptCompiler = _handlebarsCompilerJavascriptCompiler2['default'];
	  hb.Parser = _handlebarsCompilerBase.parser;
	  hb.parse = _handlebarsCompilerBase.parse;
	  hb.parseWithoutProcessing = _handlebarsCompilerBase.parseWithoutProcessing;

	  return hb;
	}

	var inst = create();
	inst.create = create;

	_handlebarsNoConflict2['default'](inst);

	inst.Visitor = _handlebarsCompilerVisitor2['default'];

	inst['default'] = inst;

	exports['default'] = inst;
	module.exports = exports['default'];
	
} (handlebars$1, handlebars$1.exports));

var handlebarsExports = handlebars$1.exports;

var printer$1 = {};

/* eslint-disable new-cap */

printer$1.__esModule = true;
printer$1.print = print;
printer$1.PrintVisitor = PrintVisitor;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _visitor = visitorExports;

var _visitor2 = _interopRequireDefault(_visitor);

function print(ast) {
  return new PrintVisitor().accept(ast);
}

function PrintVisitor() {
  this.padding = 0;
}

PrintVisitor.prototype = new _visitor2['default']();

PrintVisitor.prototype.pad = function (string) {
  var out = '';

  for (var i = 0, l = this.padding; i < l; i++) {
    out += '  ';
  }

  out += string + '\n';
  return out;
};

PrintVisitor.prototype.Program = function (program) {
  var out = '',
      body = program.body,
      i = undefined,
      l = undefined;

  if (program.blockParams) {
    var blockParams = 'BLOCK PARAMS: [';
    for (i = 0, l = program.blockParams.length; i < l; i++) {
      blockParams += ' ' + program.blockParams[i];
    }
    blockParams += ' ]';
    out += this.pad(blockParams);
  }

  for (i = 0, l = body.length; i < l; i++) {
    out += this.accept(body[i]);
  }

  this.padding--;

  return out;
};

PrintVisitor.prototype.MustacheStatement = function (mustache) {
  return this.pad('{{ ' + this.SubExpression(mustache) + ' }}');
};
PrintVisitor.prototype.Decorator = function (mustache) {
  return this.pad('{{ DIRECTIVE ' + this.SubExpression(mustache) + ' }}');
};

PrintVisitor.prototype.BlockStatement = PrintVisitor.prototype.DecoratorBlock = function (block) {
  var out = '';

  out += this.pad((block.type === 'DecoratorBlock' ? 'DIRECTIVE ' : '') + 'BLOCK:');
  this.padding++;
  out += this.pad(this.SubExpression(block));
  if (block.program) {
    out += this.pad('PROGRAM:');
    this.padding++;
    out += this.accept(block.program);
    this.padding--;
  }
  if (block.inverse) {
    if (block.program) {
      this.padding++;
    }
    out += this.pad('{{^}}');
    this.padding++;
    out += this.accept(block.inverse);
    this.padding--;
    if (block.program) {
      this.padding--;
    }
  }
  this.padding--;

  return out;
};

PrintVisitor.prototype.PartialStatement = function (partial) {
  var content = 'PARTIAL:' + partial.name.original;
  if (partial.params[0]) {
    content += ' ' + this.accept(partial.params[0]);
  }
  if (partial.hash) {
    content += ' ' + this.accept(partial.hash);
  }
  return this.pad('{{> ' + content + ' }}');
};
PrintVisitor.prototype.PartialBlockStatement = function (partial) {
  var content = 'PARTIAL BLOCK:' + partial.name.original;
  if (partial.params[0]) {
    content += ' ' + this.accept(partial.params[0]);
  }
  if (partial.hash) {
    content += ' ' + this.accept(partial.hash);
  }

  content += ' ' + this.pad('PROGRAM:');
  this.padding++;
  content += this.accept(partial.program);
  this.padding--;

  return this.pad('{{> ' + content + ' }}');
};

PrintVisitor.prototype.ContentStatement = function (content) {
  return this.pad("CONTENT[ '" + content.value + "' ]");
};

PrintVisitor.prototype.CommentStatement = function (comment) {
  return this.pad("{{! '" + comment.value + "' }}");
};

PrintVisitor.prototype.SubExpression = function (sexpr) {
  var params = sexpr.params,
      paramStrings = [],
      hash = undefined;

  for (var i = 0, l = params.length; i < l; i++) {
    paramStrings.push(this.accept(params[i]));
  }

  params = '[' + paramStrings.join(', ') + ']';

  hash = sexpr.hash ? ' ' + this.accept(sexpr.hash) : '';

  return this.accept(sexpr.path) + ' ' + params + hash;
};

PrintVisitor.prototype.PathExpression = function (id) {
  var path = id.parts.join('/');
  return (id.data ? '@' : '') + 'PATH:' + path;
};

PrintVisitor.prototype.StringLiteral = function (string) {
  return '"' + string.value + '"';
};

PrintVisitor.prototype.NumberLiteral = function (number) {
  return 'NUMBER{' + number.value + '}';
};

PrintVisitor.prototype.BooleanLiteral = function (bool) {
  return 'BOOLEAN{' + bool.value + '}';
};

PrintVisitor.prototype.UndefinedLiteral = function () {
  return 'UNDEFINED';
};

PrintVisitor.prototype.NullLiteral = function () {
  return 'NULL';
};

PrintVisitor.prototype.Hash = function (hash) {
  var pairs = hash.pairs,
      joinedPairs = [];

  for (var i = 0, l = pairs.length; i < l; i++) {
    joinedPairs.push(this.accept(pairs[i]));
  }

  return 'HASH{' + joinedPairs.join(', ') + '}';
};
PrintVisitor.prototype.HashPair = function (pair) {
  return pair.key + '=' + this.accept(pair.value);
};

// USAGE:
// var handlebars = require('handlebars');
/* eslint-env node */
/* eslint-disable no-var */

// var local = handlebars.create();

var handlebars = handlebarsExports['default'];

var printer = printer$1;
handlebars.PrintVisitor = printer.PrintVisitor;
handlebars.print = printer.print;

var lib = handlebars;

// Publish a Node.js require() handler for .handlebars and .hbs files
function extension(module, filename) {
  var fs$1 = fs;
  var templateString = fs$1.readFileSync(filename, 'utf8');
  module.exports = handlebars.compile(templateString);
}
/* istanbul ignore else */
if (typeof commonjsRequire !== 'undefined' && commonjsRequire.extensions) {
  commonjsRequire.extensions['.handlebars'] = extension;
  commonjsRequire.extensions['.hbs'] = extension;
}

var Handlebars = /*@__PURE__*/getDefaultExportFromCjs(lib);

var StatementsProcessor = /** @class */ (function () {
    function StatementsProcessor(templateData, handlebarsPluginOptions) {
        if (handlebarsPluginOptions === void 0) { handlebarsPluginOptions = {}; }
        this.handlebarsPluginOptions = handlebarsPluginOptions;
        var processResult = this.processStatements(templateData);
        this.partials = processResult.partials;
        this.helpers = processResult.helpers;
    }
    // Recursive function for getting nested partials with pathname
    StatementsProcessor.prototype.processStatements = function (templateData, partialsMap, helpersMap) {
        var _this = this;
        if (partialsMap === void 0) { partialsMap = new Map(); }
        if (helpersMap === void 0) { helpersMap = new Map(); }
        // If partials are detected, process each partial
        var _a = this.getAllStatements(templateData.source), partials = _a.partials, helpers = _a.helpers;
        if (helpers)
            helpers.forEach(function (helperPath) { return _this.processHelper(helperPath, templateData, helpersMap); });
        if (partials)
            partials.forEach(function (partialPath) { return _this.processPartial(partialPath, templateData, partialsMap, helpersMap); });
        // Add current template to source-map with re-written templateData.source
        // processPartial resolves partial instance paths for the templateData.source
        var extname = path.extname(templateData.name);
        var templateName = templateData.name.replace(new RegExp("".concat(extname, "$")), '');
        partialsMap.set(templateName, templateData.source);
        var processResult = {
            partials: partialsMap,
            helpers: helpersMap
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
    StatementsProcessor.prototype.processPartial = function (partialPath, templateData, partialsMap, helpersMap) {
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
        this.processStatements(partialTemplateData, partialsMap, helpersMap);
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
        // Check if partial name is already registered in handlebarsPluginOptions
        if (this.handlebarsPluginOptions.helpers &&
            typeof this.handlebarsPluginOptions.helpers === 'object' &&
            this.handlebarsPluginOptions.helpers[helperPath]) {
            return false;
        }
        var partialSource = this.checkIfHelperExists(helperPath, templateData);
        return partialSource;
    };
    StatementsProcessor.prototype.getPartialSource = function (partialPath, templateData) {
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
            // const fileWithError = path.join(rootFileDirectory, currentFilepath)
            // console.error(`\x1b[31mPartial \x1b[1m${partialAbsolutePath}\x1b[0m\x1b[31m does not exist\x1b[0m`)
            // console.error(`\t\x1b[2mError in ${fileWithError}\x1b[0m`)
        }
        return partialSource;
    };
    StatementsProcessor.prototype.checkIfHelperExists = function (helperPath, templateData) {
        var rootFileDirectory = path.dirname(templateData.rootFile);
        var currentFilepath = templateData.name;
        var extname = '.js';
        var helperFilepath = path.normalize("".concat(helperPath).concat(extname));
        var relativeFileDirectory = path.dirname(currentFilepath);
        var relativePartialPath = path.join(relativeFileDirectory, helperFilepath);
        var absoluteFilepath = path.resolve(rootFileDirectory, relativePartialPath);
        var helperExists = false;
        try {
            helperExists = fs.existsSync(absoluteFilepath);
        }
        catch (e) {
            // const fileWithError = path.join(rootFileDirectory, currentFilepath)
            // console.error(`\x1b[31mPartial \x1b[1m${partialAbsolutePath}\x1b[0m\x1b[31m does not exist\x1b[0m`)
            // console.error(`\t\x1b[2mError in ${fileWithError}\x1b[0m`)
        }
        return helperExists;
    };
    StatementsProcessor.prototype.resolvePartialFilepath = function (partialPath, templateData) {
        var extname = path.extname(templateData.name);
        var fileDirectory = path.dirname(templateData.name);
        var partialFilepath = path.normalize("".concat(partialPath).concat(extname));
        // Process partials with paths nested to the current filepath
        var nestedPartialFilePath = path.join(fileDirectory, partialFilepath).replaceAll('\\', '/');
        return nestedPartialFilePath;
    };
    StatementsProcessor.prototype.resolveHelperFilepath = function (partialPath, templateData) {
        var extname = '.js';
        var fileDirectory = path.dirname(templateData.name);
        var partialFilepath = path.normalize("".concat(partialPath).concat(extname));
        // Process partials with paths nested to the current filepath
        var nestedPartialFilePath = path.join(fileDirectory, partialFilepath).replaceAll('\\', '/');
        return nestedPartialFilePath;
    };
    // Rewrite the original source to be passed to final source map
    StatementsProcessor.prototype.renamePartialInstances = function (source, fromName, resolvedPartialPath) {
        var extname = path.extname(resolvedPartialPath);
        var resolvedPartialName = !extname ? resolvedPartialPath : resolvedPartialPath.replace(new RegExp("".concat(extname, "$")), '');
        source = source.replaceAll(new RegExp("(\\{\\{#?>(\\n|\\s)*)(".concat(fromName, ")(?=[\\r\\n\\s\\}])"), 'g'), "$1".concat(resolvedPartialName));
        return source;
    };
    // Rewrite the original source to be passed to final source map
    StatementsProcessor.prototype.renameHelperInstances = function (source, fromName, resolvedPartialPath) {
        var extname = path.extname(resolvedPartialPath);
        var resolvedPartialName = !extname ? resolvedPartialPath : resolvedPartialPath.replace(new RegExp("".concat(extname, "$")), '');
        resolvedPartialName = this.escapePathName(resolvedPartialName);
        source = source.replaceAll(new RegExp("(\\{\\{(?:\\n|\\s)*)(\\[?)".concat(fromName, "(\\]?)(?=[\\r\\n\\s\\}])"), 'g'), "$1$2".concat(resolvedPartialName, "$3"));
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
                var path_1 = mustache.path;
                this.helpers.add(path_1.original);
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

var js = {exports: {}};

var src = {};

var javascript = {exports: {}};

var beautifier$2 = {};

var output = {};

/*jshint node:true */

var hasRequiredOutput;

function requireOutput () {
	if (hasRequiredOutput) return output;
	hasRequiredOutput = 1;

	function OutputLine(parent) {
	  this.__parent = parent;
	  this.__character_count = 0;
	  // use indent_count as a marker for this.__lines that have preserved indentation
	  this.__indent_count = -1;
	  this.__alignment_count = 0;
	  this.__wrap_point_index = 0;
	  this.__wrap_point_character_count = 0;
	  this.__wrap_point_indent_count = -1;
	  this.__wrap_point_alignment_count = 0;

	  this.__items = [];
	}

	OutputLine.prototype.clone_empty = function() {
	  var line = new OutputLine(this.__parent);
	  line.set_indent(this.__indent_count, this.__alignment_count);
	  return line;
	};

	OutputLine.prototype.item = function(index) {
	  if (index < 0) {
	    return this.__items[this.__items.length + index];
	  } else {
	    return this.__items[index];
	  }
	};

	OutputLine.prototype.has_match = function(pattern) {
	  for (var lastCheckedOutput = this.__items.length - 1; lastCheckedOutput >= 0; lastCheckedOutput--) {
	    if (this.__items[lastCheckedOutput].match(pattern)) {
	      return true;
	    }
	  }
	  return false;
	};

	OutputLine.prototype.set_indent = function(indent, alignment) {
	  if (this.is_empty()) {
	    this.__indent_count = indent || 0;
	    this.__alignment_count = alignment || 0;
	    this.__character_count = this.__parent.get_indent_size(this.__indent_count, this.__alignment_count);
	  }
	};

	OutputLine.prototype._set_wrap_point = function() {
	  if (this.__parent.wrap_line_length) {
	    this.__wrap_point_index = this.__items.length;
	    this.__wrap_point_character_count = this.__character_count;
	    this.__wrap_point_indent_count = this.__parent.next_line.__indent_count;
	    this.__wrap_point_alignment_count = this.__parent.next_line.__alignment_count;
	  }
	};

	OutputLine.prototype._should_wrap = function() {
	  return this.__wrap_point_index &&
	    this.__character_count > this.__parent.wrap_line_length &&
	    this.__wrap_point_character_count > this.__parent.next_line.__character_count;
	};

	OutputLine.prototype._allow_wrap = function() {
	  if (this._should_wrap()) {
	    this.__parent.add_new_line();
	    var next = this.__parent.current_line;
	    next.set_indent(this.__wrap_point_indent_count, this.__wrap_point_alignment_count);
	    next.__items = this.__items.slice(this.__wrap_point_index);
	    this.__items = this.__items.slice(0, this.__wrap_point_index);

	    next.__character_count += this.__character_count - this.__wrap_point_character_count;
	    this.__character_count = this.__wrap_point_character_count;

	    if (next.__items[0] === " ") {
	      next.__items.splice(0, 1);
	      next.__character_count -= 1;
	    }
	    return true;
	  }
	  return false;
	};

	OutputLine.prototype.is_empty = function() {
	  return this.__items.length === 0;
	};

	OutputLine.prototype.last = function() {
	  if (!this.is_empty()) {
	    return this.__items[this.__items.length - 1];
	  } else {
	    return null;
	  }
	};

	OutputLine.prototype.push = function(item) {
	  this.__items.push(item);
	  var last_newline_index = item.lastIndexOf('\n');
	  if (last_newline_index !== -1) {
	    this.__character_count = item.length - last_newline_index;
	  } else {
	    this.__character_count += item.length;
	  }
	};

	OutputLine.prototype.pop = function() {
	  var item = null;
	  if (!this.is_empty()) {
	    item = this.__items.pop();
	    this.__character_count -= item.length;
	  }
	  return item;
	};


	OutputLine.prototype._remove_indent = function() {
	  if (this.__indent_count > 0) {
	    this.__indent_count -= 1;
	    this.__character_count -= this.__parent.indent_size;
	  }
	};

	OutputLine.prototype._remove_wrap_indent = function() {
	  if (this.__wrap_point_indent_count > 0) {
	    this.__wrap_point_indent_count -= 1;
	  }
	};
	OutputLine.prototype.trim = function() {
	  while (this.last() === ' ') {
	    this.__items.pop();
	    this.__character_count -= 1;
	  }
	};

	OutputLine.prototype.toString = function() {
	  var result = '';
	  if (this.is_empty()) {
	    if (this.__parent.indent_empty_lines) {
	      result = this.__parent.get_indent_string(this.__indent_count);
	    }
	  } else {
	    result = this.__parent.get_indent_string(this.__indent_count, this.__alignment_count);
	    result += this.__items.join('');
	  }
	  return result;
	};

	function IndentStringCache(options, baseIndentString) {
	  this.__cache = [''];
	  this.__indent_size = options.indent_size;
	  this.__indent_string = options.indent_char;
	  if (!options.indent_with_tabs) {
	    this.__indent_string = new Array(options.indent_size + 1).join(options.indent_char);
	  }

	  // Set to null to continue support for auto detection of base indent
	  baseIndentString = baseIndentString || '';
	  if (options.indent_level > 0) {
	    baseIndentString = new Array(options.indent_level + 1).join(this.__indent_string);
	  }

	  this.__base_string = baseIndentString;
	  this.__base_string_length = baseIndentString.length;
	}

	IndentStringCache.prototype.get_indent_size = function(indent, column) {
	  var result = this.__base_string_length;
	  column = column || 0;
	  if (indent < 0) {
	    result = 0;
	  }
	  result += indent * this.__indent_size;
	  result += column;
	  return result;
	};

	IndentStringCache.prototype.get_indent_string = function(indent_level, column) {
	  var result = this.__base_string;
	  column = column || 0;
	  if (indent_level < 0) {
	    indent_level = 0;
	    result = '';
	  }
	  column += indent_level * this.__indent_size;
	  this.__ensure_cache(column);
	  result += this.__cache[column];
	  return result;
	};

	IndentStringCache.prototype.__ensure_cache = function(column) {
	  while (column >= this.__cache.length) {
	    this.__add_column();
	  }
	};

	IndentStringCache.prototype.__add_column = function() {
	  var column = this.__cache.length;
	  var indent = 0;
	  var result = '';
	  if (this.__indent_size && column >= this.__indent_size) {
	    indent = Math.floor(column / this.__indent_size);
	    column -= indent * this.__indent_size;
	    result = new Array(indent + 1).join(this.__indent_string);
	  }
	  if (column) {
	    result += new Array(column + 1).join(' ');
	  }

	  this.__cache.push(result);
	};

	function Output(options, baseIndentString) {
	  this.__indent_cache = new IndentStringCache(options, baseIndentString);
	  this.raw = false;
	  this._end_with_newline = options.end_with_newline;
	  this.indent_size = options.indent_size;
	  this.wrap_line_length = options.wrap_line_length;
	  this.indent_empty_lines = options.indent_empty_lines;
	  this.__lines = [];
	  this.previous_line = null;
	  this.current_line = null;
	  this.next_line = new OutputLine(this);
	  this.space_before_token = false;
	  this.non_breaking_space = false;
	  this.previous_token_wrapped = false;
	  // initialize
	  this.__add_outputline();
	}

	Output.prototype.__add_outputline = function() {
	  this.previous_line = this.current_line;
	  this.current_line = this.next_line.clone_empty();
	  this.__lines.push(this.current_line);
	};

	Output.prototype.get_line_number = function() {
	  return this.__lines.length;
	};

	Output.prototype.get_indent_string = function(indent, column) {
	  return this.__indent_cache.get_indent_string(indent, column);
	};

	Output.prototype.get_indent_size = function(indent, column) {
	  return this.__indent_cache.get_indent_size(indent, column);
	};

	Output.prototype.is_empty = function() {
	  return !this.previous_line && this.current_line.is_empty();
	};

	Output.prototype.add_new_line = function(force_newline) {
	  // never newline at the start of file
	  // otherwise, newline only if we didn't just add one or we're forced
	  if (this.is_empty() ||
	    (!force_newline && this.just_added_newline())) {
	    return false;
	  }

	  // if raw output is enabled, don't print additional newlines,
	  // but still return True as though you had
	  if (!this.raw) {
	    this.__add_outputline();
	  }
	  return true;
	};

	Output.prototype.get_code = function(eol) {
	  this.trim(true);

	  // handle some edge cases where the last tokens
	  // has text that ends with newline(s)
	  var last_item = this.current_line.pop();
	  if (last_item) {
	    if (last_item[last_item.length - 1] === '\n') {
	      last_item = last_item.replace(/\n+$/g, '');
	    }
	    this.current_line.push(last_item);
	  }

	  if (this._end_with_newline) {
	    this.__add_outputline();
	  }

	  var sweet_code = this.__lines.join('\n');

	  if (eol !== '\n') {
	    sweet_code = sweet_code.replace(/[\n]/g, eol);
	  }
	  return sweet_code;
	};

	Output.prototype.set_wrap_point = function() {
	  this.current_line._set_wrap_point();
	};

	Output.prototype.set_indent = function(indent, alignment) {
	  indent = indent || 0;
	  alignment = alignment || 0;

	  // Next line stores alignment values
	  this.next_line.set_indent(indent, alignment);

	  // Never indent your first output indent at the start of the file
	  if (this.__lines.length > 1) {
	    this.current_line.set_indent(indent, alignment);
	    return true;
	  }

	  this.current_line.set_indent();
	  return false;
	};

	Output.prototype.add_raw_token = function(token) {
	  for (var x = 0; x < token.newlines; x++) {
	    this.__add_outputline();
	  }
	  this.current_line.set_indent(-1);
	  this.current_line.push(token.whitespace_before);
	  this.current_line.push(token.text);
	  this.space_before_token = false;
	  this.non_breaking_space = false;
	  this.previous_token_wrapped = false;
	};

	Output.prototype.add_token = function(printable_token) {
	  this.__add_space_before_token();
	  this.current_line.push(printable_token);
	  this.space_before_token = false;
	  this.non_breaking_space = false;
	  this.previous_token_wrapped = this.current_line._allow_wrap();
	};

	Output.prototype.__add_space_before_token = function() {
	  if (this.space_before_token && !this.just_added_newline()) {
	    if (!this.non_breaking_space) {
	      this.set_wrap_point();
	    }
	    this.current_line.push(' ');
	  }
	};

	Output.prototype.remove_indent = function(index) {
	  var output_length = this.__lines.length;
	  while (index < output_length) {
	    this.__lines[index]._remove_indent();
	    index++;
	  }
	  this.current_line._remove_wrap_indent();
	};

	Output.prototype.trim = function(eat_newlines) {
	  eat_newlines = (eat_newlines === undefined) ? false : eat_newlines;

	  this.current_line.trim();

	  while (eat_newlines && this.__lines.length > 1 &&
	    this.current_line.is_empty()) {
	    this.__lines.pop();
	    this.current_line = this.__lines[this.__lines.length - 1];
	    this.current_line.trim();
	  }

	  this.previous_line = this.__lines.length > 1 ?
	    this.__lines[this.__lines.length - 2] : null;
	};

	Output.prototype.just_added_newline = function() {
	  return this.current_line.is_empty();
	};

	Output.prototype.just_added_blankline = function() {
	  return this.is_empty() ||
	    (this.current_line.is_empty() && this.previous_line.is_empty());
	};

	Output.prototype.ensure_empty_line_above = function(starts_with, ends_with) {
	  var index = this.__lines.length - 2;
	  while (index >= 0) {
	    var potentialEmptyLine = this.__lines[index];
	    if (potentialEmptyLine.is_empty()) {
	      break;
	    } else if (potentialEmptyLine.item(0).indexOf(starts_with) !== 0 &&
	      potentialEmptyLine.item(-1) !== ends_with) {
	      this.__lines.splice(index + 1, 0, new OutputLine(this));
	      this.previous_line = this.__lines[this.__lines.length - 2];
	      break;
	    }
	    index--;
	  }
	};

	output.Output = Output;
	return output;
}

var token = {};

/*jshint node:true */

var hasRequiredToken;

function requireToken () {
	if (hasRequiredToken) return token;
	hasRequiredToken = 1;

	function Token(type, text, newlines, whitespace_before) {
	  this.type = type;
	  this.text = text;

	  // comments_before are
	  // comments that have a new line before them
	  // and may or may not have a newline after
	  // this is a set of comments before
	  this.comments_before = null; /* inline comment*/


	  // this.comments_after =  new TokenStream(); // no new line before and newline after
	  this.newlines = newlines || 0;
	  this.whitespace_before = whitespace_before || '';
	  this.parent = null;
	  this.next = null;
	  this.previous = null;
	  this.opened = null;
	  this.closed = null;
	  this.directives = null;
	}


	token.Token = Token;
	return token;
}

var acorn = {};

/* jshint node: true, curly: false */

var hasRequiredAcorn;

function requireAcorn () {
	if (hasRequiredAcorn) return acorn;
	hasRequiredAcorn = 1;
	(function (exports) {

		// acorn used char codes to squeeze the last bit of performance out
		// Beautifier is okay without that, so we're using regex
		// permit # (23), $ (36), and @ (64). @ is used in ES7 decorators.
		// 65 through 91 are uppercase letters.
		// permit _ (95).
		// 97 through 123 are lowercase letters.
		var baseASCIIidentifierStartChars = "\\x23\\x24\\x40\\x41-\\x5a\\x5f\\x61-\\x7a";

		// inside an identifier @ is not allowed but 0-9 are.
		var baseASCIIidentifierChars = "\\x24\\x30-\\x39\\x41-\\x5a\\x5f\\x61-\\x7a";

		// Big ugly regular expressions that match characters in the
		// whitespace, identifier, and identifier-start categories. These
		// are only applied when a character is found to actually have a
		// code point above 128.
		var nonASCIIidentifierStartChars = "\\xaa\\xb5\\xba\\xc0-\\xd6\\xd8-\\xf6\\xf8-\\u02c1\\u02c6-\\u02d1\\u02e0-\\u02e4\\u02ec\\u02ee\\u0370-\\u0374\\u0376\\u0377\\u037a-\\u037d\\u0386\\u0388-\\u038a\\u038c\\u038e-\\u03a1\\u03a3-\\u03f5\\u03f7-\\u0481\\u048a-\\u0527\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05d0-\\u05ea\\u05f0-\\u05f2\\u0620-\\u064a\\u066e\\u066f\\u0671-\\u06d3\\u06d5\\u06e5\\u06e6\\u06ee\\u06ef\\u06fa-\\u06fc\\u06ff\\u0710\\u0712-\\u072f\\u074d-\\u07a5\\u07b1\\u07ca-\\u07ea\\u07f4\\u07f5\\u07fa\\u0800-\\u0815\\u081a\\u0824\\u0828\\u0840-\\u0858\\u08a0\\u08a2-\\u08ac\\u0904-\\u0939\\u093d\\u0950\\u0958-\\u0961\\u0971-\\u0977\\u0979-\\u097f\\u0985-\\u098c\\u098f\\u0990\\u0993-\\u09a8\\u09aa-\\u09b0\\u09b2\\u09b6-\\u09b9\\u09bd\\u09ce\\u09dc\\u09dd\\u09df-\\u09e1\\u09f0\\u09f1\\u0a05-\\u0a0a\\u0a0f\\u0a10\\u0a13-\\u0a28\\u0a2a-\\u0a30\\u0a32\\u0a33\\u0a35\\u0a36\\u0a38\\u0a39\\u0a59-\\u0a5c\\u0a5e\\u0a72-\\u0a74\\u0a85-\\u0a8d\\u0a8f-\\u0a91\\u0a93-\\u0aa8\\u0aaa-\\u0ab0\\u0ab2\\u0ab3\\u0ab5-\\u0ab9\\u0abd\\u0ad0\\u0ae0\\u0ae1\\u0b05-\\u0b0c\\u0b0f\\u0b10\\u0b13-\\u0b28\\u0b2a-\\u0b30\\u0b32\\u0b33\\u0b35-\\u0b39\\u0b3d\\u0b5c\\u0b5d\\u0b5f-\\u0b61\\u0b71\\u0b83\\u0b85-\\u0b8a\\u0b8e-\\u0b90\\u0b92-\\u0b95\\u0b99\\u0b9a\\u0b9c\\u0b9e\\u0b9f\\u0ba3\\u0ba4\\u0ba8-\\u0baa\\u0bae-\\u0bb9\\u0bd0\\u0c05-\\u0c0c\\u0c0e-\\u0c10\\u0c12-\\u0c28\\u0c2a-\\u0c33\\u0c35-\\u0c39\\u0c3d\\u0c58\\u0c59\\u0c60\\u0c61\\u0c85-\\u0c8c\\u0c8e-\\u0c90\\u0c92-\\u0ca8\\u0caa-\\u0cb3\\u0cb5-\\u0cb9\\u0cbd\\u0cde\\u0ce0\\u0ce1\\u0cf1\\u0cf2\\u0d05-\\u0d0c\\u0d0e-\\u0d10\\u0d12-\\u0d3a\\u0d3d\\u0d4e\\u0d60\\u0d61\\u0d7a-\\u0d7f\\u0d85-\\u0d96\\u0d9a-\\u0db1\\u0db3-\\u0dbb\\u0dbd\\u0dc0-\\u0dc6\\u0e01-\\u0e30\\u0e32\\u0e33\\u0e40-\\u0e46\\u0e81\\u0e82\\u0e84\\u0e87\\u0e88\\u0e8a\\u0e8d\\u0e94-\\u0e97\\u0e99-\\u0e9f\\u0ea1-\\u0ea3\\u0ea5\\u0ea7\\u0eaa\\u0eab\\u0ead-\\u0eb0\\u0eb2\\u0eb3\\u0ebd\\u0ec0-\\u0ec4\\u0ec6\\u0edc-\\u0edf\\u0f00\\u0f40-\\u0f47\\u0f49-\\u0f6c\\u0f88-\\u0f8c\\u1000-\\u102a\\u103f\\u1050-\\u1055\\u105a-\\u105d\\u1061\\u1065\\u1066\\u106e-\\u1070\\u1075-\\u1081\\u108e\\u10a0-\\u10c5\\u10c7\\u10cd\\u10d0-\\u10fa\\u10fc-\\u1248\\u124a-\\u124d\\u1250-\\u1256\\u1258\\u125a-\\u125d\\u1260-\\u1288\\u128a-\\u128d\\u1290-\\u12b0\\u12b2-\\u12b5\\u12b8-\\u12be\\u12c0\\u12c2-\\u12c5\\u12c8-\\u12d6\\u12d8-\\u1310\\u1312-\\u1315\\u1318-\\u135a\\u1380-\\u138f\\u13a0-\\u13f4\\u1401-\\u166c\\u166f-\\u167f\\u1681-\\u169a\\u16a0-\\u16ea\\u16ee-\\u16f0\\u1700-\\u170c\\u170e-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176c\\u176e-\\u1770\\u1780-\\u17b3\\u17d7\\u17dc\\u1820-\\u1877\\u1880-\\u18a8\\u18aa\\u18b0-\\u18f5\\u1900-\\u191c\\u1950-\\u196d\\u1970-\\u1974\\u1980-\\u19ab\\u19c1-\\u19c7\\u1a00-\\u1a16\\u1a20-\\u1a54\\u1aa7\\u1b05-\\u1b33\\u1b45-\\u1b4b\\u1b83-\\u1ba0\\u1bae\\u1baf\\u1bba-\\u1be5\\u1c00-\\u1c23\\u1c4d-\\u1c4f\\u1c5a-\\u1c7d\\u1ce9-\\u1cec\\u1cee-\\u1cf1\\u1cf5\\u1cf6\\u1d00-\\u1dbf\\u1e00-\\u1f15\\u1f18-\\u1f1d\\u1f20-\\u1f45\\u1f48-\\u1f4d\\u1f50-\\u1f57\\u1f59\\u1f5b\\u1f5d\\u1f5f-\\u1f7d\\u1f80-\\u1fb4\\u1fb6-\\u1fbc\\u1fbe\\u1fc2-\\u1fc4\\u1fc6-\\u1fcc\\u1fd0-\\u1fd3\\u1fd6-\\u1fdb\\u1fe0-\\u1fec\\u1ff2-\\u1ff4\\u1ff6-\\u1ffc\\u2071\\u207f\\u2090-\\u209c\\u2102\\u2107\\u210a-\\u2113\\u2115\\u2119-\\u211d\\u2124\\u2126\\u2128\\u212a-\\u212d\\u212f-\\u2139\\u213c-\\u213f\\u2145-\\u2149\\u214e\\u2160-\\u2188\\u2c00-\\u2c2e\\u2c30-\\u2c5e\\u2c60-\\u2ce4\\u2ceb-\\u2cee\\u2cf2\\u2cf3\\u2d00-\\u2d25\\u2d27\\u2d2d\\u2d30-\\u2d67\\u2d6f\\u2d80-\\u2d96\\u2da0-\\u2da6\\u2da8-\\u2dae\\u2db0-\\u2db6\\u2db8-\\u2dbe\\u2dc0-\\u2dc6\\u2dc8-\\u2dce\\u2dd0-\\u2dd6\\u2dd8-\\u2dde\\u2e2f\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303c\\u3041-\\u3096\\u309d-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312d\\u3131-\\u318e\\u31a0-\\u31ba\\u31f0-\\u31ff\\u3400-\\u4db5\\u4e00-\\u9fcc\\ua000-\\ua48c\\ua4d0-\\ua4fd\\ua500-\\ua60c\\ua610-\\ua61f\\ua62a\\ua62b\\ua640-\\ua66e\\ua67f-\\ua697\\ua6a0-\\ua6ef\\ua717-\\ua71f\\ua722-\\ua788\\ua78b-\\ua78e\\ua790-\\ua793\\ua7a0-\\ua7aa\\ua7f8-\\ua801\\ua803-\\ua805\\ua807-\\ua80a\\ua80c-\\ua822\\ua840-\\ua873\\ua882-\\ua8b3\\ua8f2-\\ua8f7\\ua8fb\\ua90a-\\ua925\\ua930-\\ua946\\ua960-\\ua97c\\ua984-\\ua9b2\\ua9cf\\uaa00-\\uaa28\\uaa40-\\uaa42\\uaa44-\\uaa4b\\uaa60-\\uaa76\\uaa7a\\uaa80-\\uaaaf\\uaab1\\uaab5\\uaab6\\uaab9-\\uaabd\\uaac0\\uaac2\\uaadb-\\uaadd\\uaae0-\\uaaea\\uaaf2-\\uaaf4\\uab01-\\uab06\\uab09-\\uab0e\\uab11-\\uab16\\uab20-\\uab26\\uab28-\\uab2e\\uabc0-\\uabe2\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufb00-\\ufb06\\ufb13-\\ufb17\\ufb1d\\ufb1f-\\ufb28\\ufb2a-\\ufb36\\ufb38-\\ufb3c\\ufb3e\\ufb40\\ufb41\\ufb43\\ufb44\\ufb46-\\ufbb1\\ufbd3-\\ufd3d\\ufd50-\\ufd8f\\ufd92-\\ufdc7\\ufdf0-\\ufdfb\\ufe70-\\ufe74\\ufe76-\\ufefc\\uff21-\\uff3a\\uff41-\\uff5a\\uff66-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc";
		var nonASCIIidentifierChars = "\\u0300-\\u036f\\u0483-\\u0487\\u0591-\\u05bd\\u05bf\\u05c1\\u05c2\\u05c4\\u05c5\\u05c7\\u0610-\\u061a\\u0620-\\u0649\\u0672-\\u06d3\\u06e7-\\u06e8\\u06fb-\\u06fc\\u0730-\\u074a\\u0800-\\u0814\\u081b-\\u0823\\u0825-\\u0827\\u0829-\\u082d\\u0840-\\u0857\\u08e4-\\u08fe\\u0900-\\u0903\\u093a-\\u093c\\u093e-\\u094f\\u0951-\\u0957\\u0962-\\u0963\\u0966-\\u096f\\u0981-\\u0983\\u09bc\\u09be-\\u09c4\\u09c7\\u09c8\\u09d7\\u09df-\\u09e0\\u0a01-\\u0a03\\u0a3c\\u0a3e-\\u0a42\\u0a47\\u0a48\\u0a4b-\\u0a4d\\u0a51\\u0a66-\\u0a71\\u0a75\\u0a81-\\u0a83\\u0abc\\u0abe-\\u0ac5\\u0ac7-\\u0ac9\\u0acb-\\u0acd\\u0ae2-\\u0ae3\\u0ae6-\\u0aef\\u0b01-\\u0b03\\u0b3c\\u0b3e-\\u0b44\\u0b47\\u0b48\\u0b4b-\\u0b4d\\u0b56\\u0b57\\u0b5f-\\u0b60\\u0b66-\\u0b6f\\u0b82\\u0bbe-\\u0bc2\\u0bc6-\\u0bc8\\u0bca-\\u0bcd\\u0bd7\\u0be6-\\u0bef\\u0c01-\\u0c03\\u0c46-\\u0c48\\u0c4a-\\u0c4d\\u0c55\\u0c56\\u0c62-\\u0c63\\u0c66-\\u0c6f\\u0c82\\u0c83\\u0cbc\\u0cbe-\\u0cc4\\u0cc6-\\u0cc8\\u0cca-\\u0ccd\\u0cd5\\u0cd6\\u0ce2-\\u0ce3\\u0ce6-\\u0cef\\u0d02\\u0d03\\u0d46-\\u0d48\\u0d57\\u0d62-\\u0d63\\u0d66-\\u0d6f\\u0d82\\u0d83\\u0dca\\u0dcf-\\u0dd4\\u0dd6\\u0dd8-\\u0ddf\\u0df2\\u0df3\\u0e34-\\u0e3a\\u0e40-\\u0e45\\u0e50-\\u0e59\\u0eb4-\\u0eb9\\u0ec8-\\u0ecd\\u0ed0-\\u0ed9\\u0f18\\u0f19\\u0f20-\\u0f29\\u0f35\\u0f37\\u0f39\\u0f41-\\u0f47\\u0f71-\\u0f84\\u0f86-\\u0f87\\u0f8d-\\u0f97\\u0f99-\\u0fbc\\u0fc6\\u1000-\\u1029\\u1040-\\u1049\\u1067-\\u106d\\u1071-\\u1074\\u1082-\\u108d\\u108f-\\u109d\\u135d-\\u135f\\u170e-\\u1710\\u1720-\\u1730\\u1740-\\u1750\\u1772\\u1773\\u1780-\\u17b2\\u17dd\\u17e0-\\u17e9\\u180b-\\u180d\\u1810-\\u1819\\u1920-\\u192b\\u1930-\\u193b\\u1951-\\u196d\\u19b0-\\u19c0\\u19c8-\\u19c9\\u19d0-\\u19d9\\u1a00-\\u1a15\\u1a20-\\u1a53\\u1a60-\\u1a7c\\u1a7f-\\u1a89\\u1a90-\\u1a99\\u1b46-\\u1b4b\\u1b50-\\u1b59\\u1b6b-\\u1b73\\u1bb0-\\u1bb9\\u1be6-\\u1bf3\\u1c00-\\u1c22\\u1c40-\\u1c49\\u1c5b-\\u1c7d\\u1cd0-\\u1cd2\\u1d00-\\u1dbe\\u1e01-\\u1f15\\u200c\\u200d\\u203f\\u2040\\u2054\\u20d0-\\u20dc\\u20e1\\u20e5-\\u20f0\\u2d81-\\u2d96\\u2de0-\\u2dff\\u3021-\\u3028\\u3099\\u309a\\ua640-\\ua66d\\ua674-\\ua67d\\ua69f\\ua6f0-\\ua6f1\\ua7f8-\\ua800\\ua806\\ua80b\\ua823-\\ua827\\ua880-\\ua881\\ua8b4-\\ua8c4\\ua8d0-\\ua8d9\\ua8f3-\\ua8f7\\ua900-\\ua909\\ua926-\\ua92d\\ua930-\\ua945\\ua980-\\ua983\\ua9b3-\\ua9c0\\uaa00-\\uaa27\\uaa40-\\uaa41\\uaa4c-\\uaa4d\\uaa50-\\uaa59\\uaa7b\\uaae0-\\uaae9\\uaaf2-\\uaaf3\\uabc0-\\uabe1\\uabec\\uabed\\uabf0-\\uabf9\\ufb20-\\ufb28\\ufe00-\\ufe0f\\ufe20-\\ufe26\\ufe33\\ufe34\\ufe4d-\\ufe4f\\uff10-\\uff19\\uff3f";
		//var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
		//var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");

		var unicodeEscapeOrCodePoint = "\\\\u[0-9a-fA-F]{4}|\\\\u\\{[0-9a-fA-F]+\\}";
		var identifierStart = "(?:" + unicodeEscapeOrCodePoint + "|[" + baseASCIIidentifierStartChars + nonASCIIidentifierStartChars + "])";
		var identifierChars = "(?:" + unicodeEscapeOrCodePoint + "|[" + baseASCIIidentifierChars + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "])*";

		exports.identifier = new RegExp(identifierStart + identifierChars, 'g');
		exports.identifierStart = new RegExp(identifierStart);
		exports.identifierMatch = new RegExp("(?:" + unicodeEscapeOrCodePoint + "|[" + baseASCIIidentifierChars + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "])+");

		// Whether a single character denotes a newline.

		exports.newline = /[\n\r\u2028\u2029]/;

		// Matches a whole line break (where CRLF is considered a single
		// line break). Used to count lines.

		// in javascript, these two differ
		// in python they are the same, different methods are called on them
		exports.lineBreak = new RegExp('\r\n|' + exports.newline.source);
		exports.allLineBreaks = new RegExp(exports.lineBreak.source, 'g'); 
	} (acorn));
	return acorn;
}

var options$3 = {};

var options$2 = {};

/*jshint node:true */

var hasRequiredOptions$3;

function requireOptions$3 () {
	if (hasRequiredOptions$3) return options$2;
	hasRequiredOptions$3 = 1;

	function Options(options, merge_child_field) {
	  this.raw_options = _mergeOpts(options, merge_child_field);

	  // Support passing the source text back with no change
	  this.disabled = this._get_boolean('disabled');

	  this.eol = this._get_characters('eol', 'auto');
	  this.end_with_newline = this._get_boolean('end_with_newline');
	  this.indent_size = this._get_number('indent_size', 4);
	  this.indent_char = this._get_characters('indent_char', ' ');
	  this.indent_level = this._get_number('indent_level');

	  this.preserve_newlines = this._get_boolean('preserve_newlines', true);
	  this.max_preserve_newlines = this._get_number('max_preserve_newlines', 32786);
	  if (!this.preserve_newlines) {
	    this.max_preserve_newlines = 0;
	  }

	  this.indent_with_tabs = this._get_boolean('indent_with_tabs', this.indent_char === '\t');
	  if (this.indent_with_tabs) {
	    this.indent_char = '\t';

	    // indent_size behavior changed after 1.8.6
	    // It used to be that indent_size would be
	    // set to 1 for indent_with_tabs. That is no longer needed and
	    // actually doesn't make sense - why not use spaces? Further,
	    // that might produce unexpected behavior - tabs being used
	    // for single-column alignment. So, when indent_with_tabs is true
	    // and indent_size is 1, reset indent_size to 4.
	    if (this.indent_size === 1) {
	      this.indent_size = 4;
	    }
	  }

	  // Backwards compat with 1.3.x
	  this.wrap_line_length = this._get_number('wrap_line_length', this._get_number('max_char'));

	  this.indent_empty_lines = this._get_boolean('indent_empty_lines');

	  // valid templating languages ['django', 'erb', 'handlebars', 'php', 'smarty', 'angular']
	  // For now, 'auto' = all off for javascript, all except angular on for html (and inline javascript/css).
	  // other values ignored
	  this.templating = this._get_selection_list('templating', ['auto', 'none', 'angular', 'django', 'erb', 'handlebars', 'php', 'smarty'], ['auto']);
	}

	Options.prototype._get_array = function(name, default_value) {
	  var option_value = this.raw_options[name];
	  var result = default_value || [];
	  if (typeof option_value === 'object') {
	    if (option_value !== null && typeof option_value.concat === 'function') {
	      result = option_value.concat();
	    }
	  } else if (typeof option_value === 'string') {
	    result = option_value.split(/[^a-zA-Z0-9_\/\-]+/);
	  }
	  return result;
	};

	Options.prototype._get_boolean = function(name, default_value) {
	  var option_value = this.raw_options[name];
	  var result = option_value === undefined ? !!default_value : !!option_value;
	  return result;
	};

	Options.prototype._get_characters = function(name, default_value) {
	  var option_value = this.raw_options[name];
	  var result = default_value || '';
	  if (typeof option_value === 'string') {
	    result = option_value.replace(/\\r/, '\r').replace(/\\n/, '\n').replace(/\\t/, '\t');
	  }
	  return result;
	};

	Options.prototype._get_number = function(name, default_value) {
	  var option_value = this.raw_options[name];
	  default_value = parseInt(default_value, 10);
	  if (isNaN(default_value)) {
	    default_value = 0;
	  }
	  var result = parseInt(option_value, 10);
	  if (isNaN(result)) {
	    result = default_value;
	  }
	  return result;
	};

	Options.prototype._get_selection = function(name, selection_list, default_value) {
	  var result = this._get_selection_list(name, selection_list, default_value);
	  if (result.length !== 1) {
	    throw new Error(
	      "Invalid Option Value: The option '" + name + "' can only be one of the following values:\n" +
	      selection_list + "\nYou passed in: '" + this.raw_options[name] + "'");
	  }

	  return result[0];
	};


	Options.prototype._get_selection_list = function(name, selection_list, default_value) {
	  if (!selection_list || selection_list.length === 0) {
	    throw new Error("Selection list cannot be empty.");
	  }

	  default_value = default_value || [selection_list[0]];
	  if (!this._is_valid_selection(default_value, selection_list)) {
	    throw new Error("Invalid Default Value!");
	  }

	  var result = this._get_array(name, default_value);
	  if (!this._is_valid_selection(result, selection_list)) {
	    throw new Error(
	      "Invalid Option Value: The option '" + name + "' can contain only the following values:\n" +
	      selection_list + "\nYou passed in: '" + this.raw_options[name] + "'");
	  }

	  return result;
	};

	Options.prototype._is_valid_selection = function(result, selection_list) {
	  return result.length && selection_list.length &&
	    !result.some(function(item) { return selection_list.indexOf(item) === -1; });
	};


	// merges child options up with the parent options object
	// Example: obj = {a: 1, b: {a: 2}}
	//          mergeOpts(obj, 'b')
	//
	//          Returns: {a: 2}
	function _mergeOpts(allOptions, childFieldName) {
	  var finalOpts = {};
	  allOptions = _normalizeOpts(allOptions);
	  var name;

	  for (name in allOptions) {
	    if (name !== childFieldName) {
	      finalOpts[name] = allOptions[name];
	    }
	  }

	  //merge in the per type settings for the childFieldName
	  if (childFieldName && allOptions[childFieldName]) {
	    for (name in allOptions[childFieldName]) {
	      finalOpts[name] = allOptions[childFieldName][name];
	    }
	  }
	  return finalOpts;
	}

	function _normalizeOpts(options) {
	  var convertedOpts = {};
	  var key;

	  for (key in options) {
	    var newKey = key.replace(/-/g, "_");
	    convertedOpts[newKey] = options[key];
	  }
	  return convertedOpts;
	}

	options$2.Options = Options;
	options$2.normalizeOpts = _normalizeOpts;
	options$2.mergeOpts = _mergeOpts;
	return options$2;
}

/*jshint node:true */

var hasRequiredOptions$2;

function requireOptions$2 () {
	if (hasRequiredOptions$2) return options$3;
	hasRequiredOptions$2 = 1;

	var BaseOptions = requireOptions$3().Options;

	var validPositionValues = ['before-newline', 'after-newline', 'preserve-newline'];

	function Options(options) {
	  BaseOptions.call(this, options, 'js');

	  // compatibility, re
	  var raw_brace_style = this.raw_options.brace_style || null;
	  if (raw_brace_style === "expand-strict") { //graceful handling of deprecated option
	    this.raw_options.brace_style = "expand";
	  } else if (raw_brace_style === "collapse-preserve-inline") { //graceful handling of deprecated option
	    this.raw_options.brace_style = "collapse,preserve-inline";
	  } else if (this.raw_options.braces_on_own_line !== undefined) { //graceful handling of deprecated option
	    this.raw_options.brace_style = this.raw_options.braces_on_own_line ? "expand" : "collapse";
	    // } else if (!raw_brace_style) { //Nothing exists to set it
	    //   raw_brace_style = "collapse";
	  }

	  //preserve-inline in delimited string will trigger brace_preserve_inline, everything
	  //else is considered a brace_style and the last one only will have an effect

	  var brace_style_split = this._get_selection_list('brace_style', ['collapse', 'expand', 'end-expand', 'none', 'preserve-inline']);

	  this.brace_preserve_inline = false; //Defaults in case one or other was not specified in meta-option
	  this.brace_style = "collapse";

	  for (var bs = 0; bs < brace_style_split.length; bs++) {
	    if (brace_style_split[bs] === "preserve-inline") {
	      this.brace_preserve_inline = true;
	    } else {
	      this.brace_style = brace_style_split[bs];
	    }
	  }

	  this.unindent_chained_methods = this._get_boolean('unindent_chained_methods');
	  this.break_chained_methods = this._get_boolean('break_chained_methods');
	  this.space_in_paren = this._get_boolean('space_in_paren');
	  this.space_in_empty_paren = this._get_boolean('space_in_empty_paren');
	  this.jslint_happy = this._get_boolean('jslint_happy');
	  this.space_after_anon_function = this._get_boolean('space_after_anon_function');
	  this.space_after_named_function = this._get_boolean('space_after_named_function');
	  this.keep_array_indentation = this._get_boolean('keep_array_indentation');
	  this.space_before_conditional = this._get_boolean('space_before_conditional', true);
	  this.unescape_strings = this._get_boolean('unescape_strings');
	  this.e4x = this._get_boolean('e4x');
	  this.comma_first = this._get_boolean('comma_first');
	  this.operator_position = this._get_selection('operator_position', validPositionValues);

	  // For testing of beautify preserve:start directive
	  this.test_output_raw = this._get_boolean('test_output_raw');

	  // force this._options.space_after_anon_function to true if this._options.jslint_happy
	  if (this.jslint_happy) {
	    this.space_after_anon_function = true;
	  }

	}
	Options.prototype = new BaseOptions();



	options$3.Options = Options;
	return options$3;
}

var tokenizer$2 = {};

var inputscanner = {};

/*jshint node:true */

var hasRequiredInputscanner;

function requireInputscanner () {
	if (hasRequiredInputscanner) return inputscanner;
	hasRequiredInputscanner = 1;

	var regexp_has_sticky = RegExp.prototype.hasOwnProperty('sticky');

	function InputScanner(input_string) {
	  this.__input = input_string || '';
	  this.__input_length = this.__input.length;
	  this.__position = 0;
	}

	InputScanner.prototype.restart = function() {
	  this.__position = 0;
	};

	InputScanner.prototype.back = function() {
	  if (this.__position > 0) {
	    this.__position -= 1;
	  }
	};

	InputScanner.prototype.hasNext = function() {
	  return this.__position < this.__input_length;
	};

	InputScanner.prototype.next = function() {
	  var val = null;
	  if (this.hasNext()) {
	    val = this.__input.charAt(this.__position);
	    this.__position += 1;
	  }
	  return val;
	};

	InputScanner.prototype.peek = function(index) {
	  var val = null;
	  index = index || 0;
	  index += this.__position;
	  if (index >= 0 && index < this.__input_length) {
	    val = this.__input.charAt(index);
	  }
	  return val;
	};

	// This is a JavaScript only helper function (not in python)
	// Javascript doesn't have a match method
	// and not all implementation support "sticky" flag.
	// If they do not support sticky then both this.match() and this.test() method
	// must get the match and check the index of the match.
	// If sticky is supported and set, this method will use it.
	// Otherwise it will check that global is set, and fall back to the slower method.
	InputScanner.prototype.__match = function(pattern, index) {
	  pattern.lastIndex = index;
	  var pattern_match = pattern.exec(this.__input);

	  if (pattern_match && !(regexp_has_sticky && pattern.sticky)) {
	    if (pattern_match.index !== index) {
	      pattern_match = null;
	    }
	  }

	  return pattern_match;
	};

	InputScanner.prototype.test = function(pattern, index) {
	  index = index || 0;
	  index += this.__position;

	  if (index >= 0 && index < this.__input_length) {
	    return !!this.__match(pattern, index);
	  } else {
	    return false;
	  }
	};

	InputScanner.prototype.testChar = function(pattern, index) {
	  // test one character regex match
	  var val = this.peek(index);
	  pattern.lastIndex = 0;
	  return val !== null && pattern.test(val);
	};

	InputScanner.prototype.match = function(pattern) {
	  var pattern_match = this.__match(pattern, this.__position);
	  if (pattern_match) {
	    this.__position += pattern_match[0].length;
	  } else {
	    pattern_match = null;
	  }
	  return pattern_match;
	};

	InputScanner.prototype.read = function(starting_pattern, until_pattern, until_after) {
	  var val = '';
	  var match;
	  if (starting_pattern) {
	    match = this.match(starting_pattern);
	    if (match) {
	      val += match[0];
	    }
	  }
	  if (until_pattern && (match || !starting_pattern)) {
	    val += this.readUntil(until_pattern, until_after);
	  }
	  return val;
	};

	InputScanner.prototype.readUntil = function(pattern, until_after) {
	  var val = '';
	  var match_index = this.__position;
	  pattern.lastIndex = this.__position;
	  var pattern_match = pattern.exec(this.__input);
	  if (pattern_match) {
	    match_index = pattern_match.index;
	    if (until_after) {
	      match_index += pattern_match[0].length;
	    }
	  } else {
	    match_index = this.__input_length;
	  }

	  val = this.__input.substring(this.__position, match_index);
	  this.__position = match_index;
	  return val;
	};

	InputScanner.prototype.readUntilAfter = function(pattern) {
	  return this.readUntil(pattern, true);
	};

	InputScanner.prototype.get_regexp = function(pattern, match_from) {
	  var result = null;
	  var flags = 'g';
	  if (match_from && regexp_has_sticky) {
	    flags = 'y';
	  }
	  // strings are converted to regexp
	  if (typeof pattern === "string" && pattern !== '') {
	    // result = new RegExp(pattern.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), flags);
	    result = new RegExp(pattern, flags);
	  } else if (pattern) {
	    result = new RegExp(pattern.source, flags);
	  }
	  return result;
	};

	InputScanner.prototype.get_literal_regexp = function(literal_string) {
	  return RegExp(literal_string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
	};

	/* css beautifier legacy helpers */
	InputScanner.prototype.peekUntilAfter = function(pattern) {
	  var start = this.__position;
	  var val = this.readUntilAfter(pattern);
	  this.__position = start;
	  return val;
	};

	InputScanner.prototype.lookBack = function(testVal) {
	  var start = this.__position - 1;
	  return start >= testVal.length && this.__input.substring(start - testVal.length, start)
	    .toLowerCase() === testVal;
	};

	inputscanner.InputScanner = InputScanner;
	return inputscanner;
}

var tokenizer$1 = {};

var tokenstream = {};

/*jshint node:true */

var hasRequiredTokenstream;

function requireTokenstream () {
	if (hasRequiredTokenstream) return tokenstream;
	hasRequiredTokenstream = 1;

	function TokenStream(parent_token) {
	  // private
	  this.__tokens = [];
	  this.__tokens_length = this.__tokens.length;
	  this.__position = 0;
	  this.__parent_token = parent_token;
	}

	TokenStream.prototype.restart = function() {
	  this.__position = 0;
	};

	TokenStream.prototype.isEmpty = function() {
	  return this.__tokens_length === 0;
	};

	TokenStream.prototype.hasNext = function() {
	  return this.__position < this.__tokens_length;
	};

	TokenStream.prototype.next = function() {
	  var val = null;
	  if (this.hasNext()) {
	    val = this.__tokens[this.__position];
	    this.__position += 1;
	  }
	  return val;
	};

	TokenStream.prototype.peek = function(index) {
	  var val = null;
	  index = index || 0;
	  index += this.__position;
	  if (index >= 0 && index < this.__tokens_length) {
	    val = this.__tokens[index];
	  }
	  return val;
	};

	TokenStream.prototype.add = function(token) {
	  if (this.__parent_token) {
	    token.parent = this.__parent_token;
	  }
	  this.__tokens.push(token);
	  this.__tokens_length += 1;
	};

	tokenstream.TokenStream = TokenStream;
	return tokenstream;
}

var whitespacepattern = {};

var pattern = {};

/*jshint node:true */

var hasRequiredPattern;

function requirePattern () {
	if (hasRequiredPattern) return pattern;
	hasRequiredPattern = 1;

	function Pattern(input_scanner, parent) {
	  this._input = input_scanner;
	  this._starting_pattern = null;
	  this._match_pattern = null;
	  this._until_pattern = null;
	  this._until_after = false;

	  if (parent) {
	    this._starting_pattern = this._input.get_regexp(parent._starting_pattern, true);
	    this._match_pattern = this._input.get_regexp(parent._match_pattern, true);
	    this._until_pattern = this._input.get_regexp(parent._until_pattern);
	    this._until_after = parent._until_after;
	  }
	}

	Pattern.prototype.read = function() {
	  var result = this._input.read(this._starting_pattern);
	  if (!this._starting_pattern || result) {
	    result += this._input.read(this._match_pattern, this._until_pattern, this._until_after);
	  }
	  return result;
	};

	Pattern.prototype.read_match = function() {
	  return this._input.match(this._match_pattern);
	};

	Pattern.prototype.until_after = function(pattern) {
	  var result = this._create();
	  result._until_after = true;
	  result._until_pattern = this._input.get_regexp(pattern);
	  result._update();
	  return result;
	};

	Pattern.prototype.until = function(pattern) {
	  var result = this._create();
	  result._until_after = false;
	  result._until_pattern = this._input.get_regexp(pattern);
	  result._update();
	  return result;
	};

	Pattern.prototype.starting_with = function(pattern) {
	  var result = this._create();
	  result._starting_pattern = this._input.get_regexp(pattern, true);
	  result._update();
	  return result;
	};

	Pattern.prototype.matching = function(pattern) {
	  var result = this._create();
	  result._match_pattern = this._input.get_regexp(pattern, true);
	  result._update();
	  return result;
	};

	Pattern.prototype._create = function() {
	  return new Pattern(this._input, this);
	};

	Pattern.prototype._update = function() {};

	pattern.Pattern = Pattern;
	return pattern;
}

/*jshint node:true */

var hasRequiredWhitespacepattern;

function requireWhitespacepattern () {
	if (hasRequiredWhitespacepattern) return whitespacepattern;
	hasRequiredWhitespacepattern = 1;

	var Pattern = requirePattern().Pattern;

	function WhitespacePattern(input_scanner, parent) {
	  Pattern.call(this, input_scanner, parent);
	  if (parent) {
	    this._line_regexp = this._input.get_regexp(parent._line_regexp);
	  } else {
	    this.__set_whitespace_patterns('', '');
	  }

	  this.newline_count = 0;
	  this.whitespace_before_token = '';
	}
	WhitespacePattern.prototype = new Pattern();

	WhitespacePattern.prototype.__set_whitespace_patterns = function(whitespace_chars, newline_chars) {
	  whitespace_chars += '\\t ';
	  newline_chars += '\\n\\r';

	  this._match_pattern = this._input.get_regexp(
	    '[' + whitespace_chars + newline_chars + ']+', true);
	  this._newline_regexp = this._input.get_regexp(
	    '\\r\\n|[' + newline_chars + ']');
	};

	WhitespacePattern.prototype.read = function() {
	  this.newline_count = 0;
	  this.whitespace_before_token = '';

	  var resulting_string = this._input.read(this._match_pattern);
	  if (resulting_string === ' ') {
	    this.whitespace_before_token = ' ';
	  } else if (resulting_string) {
	    var matches = this.__split(this._newline_regexp, resulting_string);
	    this.newline_count = matches.length - 1;
	    this.whitespace_before_token = matches[this.newline_count];
	  }

	  return resulting_string;
	};

	WhitespacePattern.prototype.matching = function(whitespace_chars, newline_chars) {
	  var result = this._create();
	  result.__set_whitespace_patterns(whitespace_chars, newline_chars);
	  result._update();
	  return result;
	};

	WhitespacePattern.prototype._create = function() {
	  return new WhitespacePattern(this._input, this);
	};

	WhitespacePattern.prototype.__split = function(regexp, input_string) {
	  regexp.lastIndex = 0;
	  var start_index = 0;
	  var result = [];
	  var next_match = regexp.exec(input_string);
	  while (next_match) {
	    result.push(input_string.substring(start_index, next_match.index));
	    start_index = next_match.index + next_match[0].length;
	    next_match = regexp.exec(input_string);
	  }

	  if (start_index < input_string.length) {
	    result.push(input_string.substring(start_index, input_string.length));
	  } else {
	    result.push('');
	  }

	  return result;
	};



	whitespacepattern.WhitespacePattern = WhitespacePattern;
	return whitespacepattern;
}

/*jshint node:true */

var hasRequiredTokenizer$2;

function requireTokenizer$2 () {
	if (hasRequiredTokenizer$2) return tokenizer$1;
	hasRequiredTokenizer$2 = 1;

	var InputScanner = requireInputscanner().InputScanner;
	var Token = requireToken().Token;
	var TokenStream = requireTokenstream().TokenStream;
	var WhitespacePattern = requireWhitespacepattern().WhitespacePattern;

	var TOKEN = {
	  START: 'TK_START',
	  RAW: 'TK_RAW',
	  EOF: 'TK_EOF'
	};

	var Tokenizer = function(input_string, options) {
	  this._input = new InputScanner(input_string);
	  this._options = options || {};
	  this.__tokens = null;

	  this._patterns = {};
	  this._patterns.whitespace = new WhitespacePattern(this._input);
	};

	Tokenizer.prototype.tokenize = function() {
	  this._input.restart();
	  this.__tokens = new TokenStream();

	  this._reset();

	  var current;
	  var previous = new Token(TOKEN.START, '');
	  var open_token = null;
	  var open_stack = [];
	  var comments = new TokenStream();

	  while (previous.type !== TOKEN.EOF) {
	    current = this._get_next_token(previous, open_token);
	    while (this._is_comment(current)) {
	      comments.add(current);
	      current = this._get_next_token(previous, open_token);
	    }

	    if (!comments.isEmpty()) {
	      current.comments_before = comments;
	      comments = new TokenStream();
	    }

	    current.parent = open_token;

	    if (this._is_opening(current)) {
	      open_stack.push(open_token);
	      open_token = current;
	    } else if (open_token && this._is_closing(current, open_token)) {
	      current.opened = open_token;
	      open_token.closed = current;
	      open_token = open_stack.pop();
	      current.parent = open_token;
	    }

	    current.previous = previous;
	    previous.next = current;

	    this.__tokens.add(current);
	    previous = current;
	  }

	  return this.__tokens;
	};


	Tokenizer.prototype._is_first_token = function() {
	  return this.__tokens.isEmpty();
	};

	Tokenizer.prototype._reset = function() {};

	Tokenizer.prototype._get_next_token = function(previous_token, open_token) { // jshint unused:false
	  this._readWhitespace();
	  var resulting_string = this._input.read(/.+/g);
	  if (resulting_string) {
	    return this._create_token(TOKEN.RAW, resulting_string);
	  } else {
	    return this._create_token(TOKEN.EOF, '');
	  }
	};

	Tokenizer.prototype._is_comment = function(current_token) { // jshint unused:false
	  return false;
	};

	Tokenizer.prototype._is_opening = function(current_token) { // jshint unused:false
	  return false;
	};

	Tokenizer.prototype._is_closing = function(current_token, open_token) { // jshint unused:false
	  return false;
	};

	Tokenizer.prototype._create_token = function(type, text) {
	  var token = new Token(type, text,
	    this._patterns.whitespace.newline_count,
	    this._patterns.whitespace.whitespace_before_token);
	  return token;
	};

	Tokenizer.prototype._readWhitespace = function() {
	  return this._patterns.whitespace.read();
	};



	tokenizer$1.Tokenizer = Tokenizer;
	tokenizer$1.TOKEN = TOKEN;
	return tokenizer$1;
}

var directives = {};

/*jshint node:true */

var hasRequiredDirectives;

function requireDirectives () {
	if (hasRequiredDirectives) return directives;
	hasRequiredDirectives = 1;

	function Directives(start_block_pattern, end_block_pattern) {
	  start_block_pattern = typeof start_block_pattern === 'string' ? start_block_pattern : start_block_pattern.source;
	  end_block_pattern = typeof end_block_pattern === 'string' ? end_block_pattern : end_block_pattern.source;
	  this.__directives_block_pattern = new RegExp(start_block_pattern + / beautify( \w+[:]\w+)+ /.source + end_block_pattern, 'g');
	  this.__directive_pattern = / (\w+)[:](\w+)/g;

	  this.__directives_end_ignore_pattern = new RegExp(start_block_pattern + /\sbeautify\signore:end\s/.source + end_block_pattern, 'g');
	}

	Directives.prototype.get_directives = function(text) {
	  if (!text.match(this.__directives_block_pattern)) {
	    return null;
	  }

	  var directives = {};
	  this.__directive_pattern.lastIndex = 0;
	  var directive_match = this.__directive_pattern.exec(text);

	  while (directive_match) {
	    directives[directive_match[1]] = directive_match[2];
	    directive_match = this.__directive_pattern.exec(text);
	  }

	  return directives;
	};

	Directives.prototype.readIgnored = function(input) {
	  return input.readUntilAfter(this.__directives_end_ignore_pattern);
	};


	directives.Directives = Directives;
	return directives;
}

var templatablepattern = {};

/*jshint node:true */

var hasRequiredTemplatablepattern;

function requireTemplatablepattern () {
	if (hasRequiredTemplatablepattern) return templatablepattern;
	hasRequiredTemplatablepattern = 1;

	var Pattern = requirePattern().Pattern;


	var template_names = {
	  django: false,
	  erb: false,
	  handlebars: false,
	  php: false,
	  smarty: false,
	  angular: false
	};

	// This lets templates appear anywhere we would do a readUntil
	// The cost is higher but it is pay to play.
	function TemplatablePattern(input_scanner, parent) {
	  Pattern.call(this, input_scanner, parent);
	  this.__template_pattern = null;
	  this._disabled = Object.assign({}, template_names);
	  this._excluded = Object.assign({}, template_names);

	  if (parent) {
	    this.__template_pattern = this._input.get_regexp(parent.__template_pattern);
	    this._excluded = Object.assign(this._excluded, parent._excluded);
	    this._disabled = Object.assign(this._disabled, parent._disabled);
	  }
	  var pattern = new Pattern(input_scanner);
	  this.__patterns = {
	    handlebars_comment: pattern.starting_with(/{{!--/).until_after(/--}}/),
	    handlebars_unescaped: pattern.starting_with(/{{{/).until_after(/}}}/),
	    handlebars: pattern.starting_with(/{{/).until_after(/}}/),
	    php: pattern.starting_with(/<\?(?:[= ]|php)/).until_after(/\?>/),
	    erb: pattern.starting_with(/<%[^%]/).until_after(/[^%]%>/),
	    // django coflicts with handlebars a bit.
	    django: pattern.starting_with(/{%/).until_after(/%}/),
	    django_value: pattern.starting_with(/{{/).until_after(/}}/),
	    django_comment: pattern.starting_with(/{#/).until_after(/#}/),
	    smarty: pattern.starting_with(/{(?=[^}{\s\n])/).until_after(/[^\s\n]}/),
	    smarty_comment: pattern.starting_with(/{\*/).until_after(/\*}/),
	    smarty_literal: pattern.starting_with(/{literal}/).until_after(/{\/literal}/)
	  };
	}
	TemplatablePattern.prototype = new Pattern();

	TemplatablePattern.prototype._create = function() {
	  return new TemplatablePattern(this._input, this);
	};

	TemplatablePattern.prototype._update = function() {
	  this.__set_templated_pattern();
	};

	TemplatablePattern.prototype.disable = function(language) {
	  var result = this._create();
	  result._disabled[language] = true;
	  result._update();
	  return result;
	};

	TemplatablePattern.prototype.read_options = function(options) {
	  var result = this._create();
	  for (var language in template_names) {
	    result._disabled[language] = options.templating.indexOf(language) === -1;
	  }
	  result._update();
	  return result;
	};

	TemplatablePattern.prototype.exclude = function(language) {
	  var result = this._create();
	  result._excluded[language] = true;
	  result._update();
	  return result;
	};

	TemplatablePattern.prototype.read = function() {
	  var result = '';
	  if (this._match_pattern) {
	    result = this._input.read(this._starting_pattern);
	  } else {
	    result = this._input.read(this._starting_pattern, this.__template_pattern);
	  }
	  var next = this._read_template();
	  while (next) {
	    if (this._match_pattern) {
	      next += this._input.read(this._match_pattern);
	    } else {
	      next += this._input.readUntil(this.__template_pattern);
	    }
	    result += next;
	    next = this._read_template();
	  }

	  if (this._until_after) {
	    result += this._input.readUntilAfter(this._until_pattern);
	  }
	  return result;
	};

	TemplatablePattern.prototype.__set_templated_pattern = function() {
	  var items = [];

	  if (!this._disabled.php) {
	    items.push(this.__patterns.php._starting_pattern.source);
	  }
	  if (!this._disabled.handlebars) {
	    items.push(this.__patterns.handlebars._starting_pattern.source);
	  }
	  if (!this._disabled.erb) {
	    items.push(this.__patterns.erb._starting_pattern.source);
	  }
	  if (!this._disabled.django) {
	    items.push(this.__patterns.django._starting_pattern.source);
	    // The starting pattern for django is more complex because it has different
	    // patterns for value, comment, and other sections
	    items.push(this.__patterns.django_value._starting_pattern.source);
	    items.push(this.__patterns.django_comment._starting_pattern.source);
	  }
	  if (!this._disabled.smarty) {
	    items.push(this.__patterns.smarty._starting_pattern.source);
	  }

	  if (this._until_pattern) {
	    items.push(this._until_pattern.source);
	  }
	  this.__template_pattern = this._input.get_regexp('(?:' + items.join('|') + ')');
	};

	TemplatablePattern.prototype._read_template = function() {
	  var resulting_string = '';
	  var c = this._input.peek();
	  if (c === '<') {
	    var peek1 = this._input.peek(1);
	    //if we're in a comment, do something special
	    // We treat all comments as literals, even more than preformatted tags
	    // we just look for the appropriate close tag
	    if (!this._disabled.php && !this._excluded.php && peek1 === '?') {
	      resulting_string = resulting_string ||
	        this.__patterns.php.read();
	    }
	    if (!this._disabled.erb && !this._excluded.erb && peek1 === '%') {
	      resulting_string = resulting_string ||
	        this.__patterns.erb.read();
	    }
	  } else if (c === '{') {
	    if (!this._disabled.handlebars && !this._excluded.handlebars) {
	      resulting_string = resulting_string ||
	        this.__patterns.handlebars_comment.read();
	      resulting_string = resulting_string ||
	        this.__patterns.handlebars_unescaped.read();
	      resulting_string = resulting_string ||
	        this.__patterns.handlebars.read();
	    }
	    if (!this._disabled.django) {
	      // django coflicts with handlebars a bit.
	      if (!this._excluded.django && !this._excluded.handlebars) {
	        resulting_string = resulting_string ||
	          this.__patterns.django_value.read();
	      }
	      if (!this._excluded.django) {
	        resulting_string = resulting_string ||
	          this.__patterns.django_comment.read();
	        resulting_string = resulting_string ||
	          this.__patterns.django.read();
	      }
	    }
	    if (!this._disabled.smarty) {
	      // smarty cannot be enabled with django or handlebars enabled
	      if (this._disabled.django && this._disabled.handlebars) {
	        resulting_string = resulting_string ||
	          this.__patterns.smarty_comment.read();
	        resulting_string = resulting_string ||
	          this.__patterns.smarty_literal.read();
	        resulting_string = resulting_string ||
	          this.__patterns.smarty.read();
	      }
	    }
	  }
	  return resulting_string;
	};


	templatablepattern.TemplatablePattern = TemplatablePattern;
	return templatablepattern;
}

/*jshint node:true */

var hasRequiredTokenizer$1;

function requireTokenizer$1 () {
	if (hasRequiredTokenizer$1) return tokenizer$2;
	hasRequiredTokenizer$1 = 1;

	var InputScanner = requireInputscanner().InputScanner;
	var BaseTokenizer = requireTokenizer$2().Tokenizer;
	var BASETOKEN = requireTokenizer$2().TOKEN;
	var Directives = requireDirectives().Directives;
	var acorn = requireAcorn();
	var Pattern = requirePattern().Pattern;
	var TemplatablePattern = requireTemplatablepattern().TemplatablePattern;


	function in_array(what, arr) {
	  return arr.indexOf(what) !== -1;
	}


	var TOKEN = {
	  START_EXPR: 'TK_START_EXPR',
	  END_EXPR: 'TK_END_EXPR',
	  START_BLOCK: 'TK_START_BLOCK',
	  END_BLOCK: 'TK_END_BLOCK',
	  WORD: 'TK_WORD',
	  RESERVED: 'TK_RESERVED',
	  SEMICOLON: 'TK_SEMICOLON',
	  STRING: 'TK_STRING',
	  EQUALS: 'TK_EQUALS',
	  OPERATOR: 'TK_OPERATOR',
	  COMMA: 'TK_COMMA',
	  BLOCK_COMMENT: 'TK_BLOCK_COMMENT',
	  COMMENT: 'TK_COMMENT',
	  DOT: 'TK_DOT',
	  UNKNOWN: 'TK_UNKNOWN',
	  START: BASETOKEN.START,
	  RAW: BASETOKEN.RAW,
	  EOF: BASETOKEN.EOF
	};


	var directives_core = new Directives(/\/\*/, /\*\//);

	var number_pattern = /0[xX][0123456789abcdefABCDEF_]*n?|0[oO][01234567_]*n?|0[bB][01_]*n?|\d[\d_]*n|(?:\.\d[\d_]*|\d[\d_]*\.?[\d_]*)(?:[eE][+-]?[\d_]+)?/;

	var digit = /[0-9]/;

	// Dot "." must be distinguished from "..." and decimal
	var dot_pattern = /[^\d\.]/;

	var positionable_operators = (
	  ">>> === !== &&= ??= ||= " +
	  "<< && >= ** != == <= >> || ?? |> " +
	  "< / - + > : & % ? ^ | *").split(' ');

	// IMPORTANT: this must be sorted longest to shortest or tokenizing many not work.
	// Also, you must update possitionable operators separately from punct
	var punct =
	  ">>>= " +
	  "... >>= <<= === >>> !== **= &&= ??= ||= " +
	  "=> ^= :: /= << <= == && -= >= >> != -- += ** || ?? ++ %= &= *= |= |> " +
	  "= ! ? > < : / ^ - + * & % ~ |";

	punct = punct.replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&");
	// ?. but not if followed by a number 
	punct = '\\?\\.(?!\\d) ' + punct;
	punct = punct.replace(/ /g, '|');

	var punct_pattern = new RegExp(punct);

	// words which should always start on new line.
	var line_starters = 'continue,try,throw,return,var,let,const,if,switch,case,default,for,while,break,function,import,export'.split(',');
	var reserved_words = line_starters.concat(['do', 'in', 'of', 'else', 'get', 'set', 'new', 'catch', 'finally', 'typeof', 'yield', 'async', 'await', 'from', 'as', 'class', 'extends']);
	var reserved_word_pattern = new RegExp('^(?:' + reserved_words.join('|') + ')$');

	// var template_pattern = /(?:(?:<\?php|<\?=)[\s\S]*?\?>)|(?:<%[\s\S]*?%>)/g;

	var in_html_comment;

	var Tokenizer = function(input_string, options) {
	  BaseTokenizer.call(this, input_string, options);

	  this._patterns.whitespace = this._patterns.whitespace.matching(
	    /\u00A0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff/.source,
	    /\u2028\u2029/.source);

	  var pattern_reader = new Pattern(this._input);
	  var templatable = new TemplatablePattern(this._input)
	    .read_options(this._options);

	  this.__patterns = {
	    template: templatable,
	    identifier: templatable.starting_with(acorn.identifier).matching(acorn.identifierMatch),
	    number: pattern_reader.matching(number_pattern),
	    punct: pattern_reader.matching(punct_pattern),
	    // comment ends just before nearest linefeed or end of file
	    comment: pattern_reader.starting_with(/\/\//).until(/[\n\r\u2028\u2029]/),
	    //  /* ... */ comment ends with nearest */ or end of file
	    block_comment: pattern_reader.starting_with(/\/\*/).until_after(/\*\//),
	    html_comment_start: pattern_reader.matching(/<!--/),
	    html_comment_end: pattern_reader.matching(/-->/),
	    include: pattern_reader.starting_with(/#include/).until_after(acorn.lineBreak),
	    shebang: pattern_reader.starting_with(/#!/).until_after(acorn.lineBreak),
	    xml: pattern_reader.matching(/[\s\S]*?<(\/?)([-a-zA-Z:0-9_.]+|{[^}]+?}|!\[CDATA\[[^\]]*?\]\]|)(\s*{[^}]+?}|\s+[-a-zA-Z:0-9_.]+|\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{([^{}]|{[^}]+?})+?}))*\s*(\/?)\s*>/),
	    single_quote: templatable.until(/['\\\n\r\u2028\u2029]/),
	    double_quote: templatable.until(/["\\\n\r\u2028\u2029]/),
	    template_text: templatable.until(/[`\\$]/),
	    template_expression: templatable.until(/[`}\\]/)
	  };

	};
	Tokenizer.prototype = new BaseTokenizer();

	Tokenizer.prototype._is_comment = function(current_token) {
	  return current_token.type === TOKEN.COMMENT || current_token.type === TOKEN.BLOCK_COMMENT || current_token.type === TOKEN.UNKNOWN;
	};

	Tokenizer.prototype._is_opening = function(current_token) {
	  return current_token.type === TOKEN.START_BLOCK || current_token.type === TOKEN.START_EXPR;
	};

	Tokenizer.prototype._is_closing = function(current_token, open_token) {
	  return (current_token.type === TOKEN.END_BLOCK || current_token.type === TOKEN.END_EXPR) &&
	    (open_token && (
	      (current_token.text === ']' && open_token.text === '[') ||
	      (current_token.text === ')' && open_token.text === '(') ||
	      (current_token.text === '}' && open_token.text === '{')));
	};

	Tokenizer.prototype._reset = function() {
	  in_html_comment = false;
	};

	Tokenizer.prototype._get_next_token = function(previous_token, open_token) { // jshint unused:false
	  var token = null;
	  this._readWhitespace();
	  var c = this._input.peek();

	  if (c === null) {
	    return this._create_token(TOKEN.EOF, '');
	  }

	  token = token || this._read_non_javascript(c);
	  token = token || this._read_string(c);
	  token = token || this._read_pair(c, this._input.peek(1)); // Issue #2062 hack for record type '#{'
	  token = token || this._read_word(previous_token);
	  token = token || this._read_singles(c);
	  token = token || this._read_comment(c);
	  token = token || this._read_regexp(c, previous_token);
	  token = token || this._read_xml(c, previous_token);
	  token = token || this._read_punctuation();
	  token = token || this._create_token(TOKEN.UNKNOWN, this._input.next());

	  return token;
	};

	Tokenizer.prototype._read_word = function(previous_token) {
	  var resulting_string;
	  resulting_string = this.__patterns.identifier.read();
	  if (resulting_string !== '') {
	    resulting_string = resulting_string.replace(acorn.allLineBreaks, '\n');
	    if (!(previous_token.type === TOKEN.DOT ||
	        (previous_token.type === TOKEN.RESERVED && (previous_token.text === 'set' || previous_token.text === 'get'))) &&
	      reserved_word_pattern.test(resulting_string)) {
	      if ((resulting_string === 'in' || resulting_string === 'of') &&
	        (previous_token.type === TOKEN.WORD || previous_token.type === TOKEN.STRING)) { // hack for 'in' and 'of' operators
	        return this._create_token(TOKEN.OPERATOR, resulting_string);
	      }
	      return this._create_token(TOKEN.RESERVED, resulting_string);
	    }
	    return this._create_token(TOKEN.WORD, resulting_string);
	  }

	  resulting_string = this.__patterns.number.read();
	  if (resulting_string !== '') {
	    return this._create_token(TOKEN.WORD, resulting_string);
	  }
	};

	Tokenizer.prototype._read_singles = function(c) {
	  var token = null;
	  if (c === '(' || c === '[') {
	    token = this._create_token(TOKEN.START_EXPR, c);
	  } else if (c === ')' || c === ']') {
	    token = this._create_token(TOKEN.END_EXPR, c);
	  } else if (c === '{') {
	    token = this._create_token(TOKEN.START_BLOCK, c);
	  } else if (c === '}') {
	    token = this._create_token(TOKEN.END_BLOCK, c);
	  } else if (c === ';') {
	    token = this._create_token(TOKEN.SEMICOLON, c);
	  } else if (c === '.' && dot_pattern.test(this._input.peek(1))) {
	    token = this._create_token(TOKEN.DOT, c);
	  } else if (c === ',') {
	    token = this._create_token(TOKEN.COMMA, c);
	  }

	  if (token) {
	    this._input.next();
	  }
	  return token;
	};

	Tokenizer.prototype._read_pair = function(c, d) {
	  var token = null;
	  if (c === '#' && d === '{') {
	    token = this._create_token(TOKEN.START_BLOCK, c + d);
	  }

	  if (token) {
	    this._input.next();
	    this._input.next();
	  }
	  return token;
	};

	Tokenizer.prototype._read_punctuation = function() {
	  var resulting_string = this.__patterns.punct.read();

	  if (resulting_string !== '') {
	    if (resulting_string === '=') {
	      return this._create_token(TOKEN.EQUALS, resulting_string);
	    } else if (resulting_string === '?.') {
	      return this._create_token(TOKEN.DOT, resulting_string);
	    } else {
	      return this._create_token(TOKEN.OPERATOR, resulting_string);
	    }
	  }
	};

	Tokenizer.prototype._read_non_javascript = function(c) {
	  var resulting_string = '';

	  if (c === '#') {
	    if (this._is_first_token()) {
	      resulting_string = this.__patterns.shebang.read();

	      if (resulting_string) {
	        return this._create_token(TOKEN.UNKNOWN, resulting_string.trim() + '\n');
	      }
	    }

	    // handles extendscript #includes
	    resulting_string = this.__patterns.include.read();

	    if (resulting_string) {
	      return this._create_token(TOKEN.UNKNOWN, resulting_string.trim() + '\n');
	    }

	    c = this._input.next();

	    // Spidermonkey-specific sharp variables for circular references. Considered obsolete.
	    var sharp = '#';
	    if (this._input.hasNext() && this._input.testChar(digit)) {
	      do {
	        c = this._input.next();
	        sharp += c;
	      } while (this._input.hasNext() && c !== '#' && c !== '=');
	      if (c === '#') ; else if (this._input.peek() === '[' && this._input.peek(1) === ']') {
	        sharp += '[]';
	        this._input.next();
	        this._input.next();
	      } else if (this._input.peek() === '{' && this._input.peek(1) === '}') {
	        sharp += '{}';
	        this._input.next();
	        this._input.next();
	      }
	      return this._create_token(TOKEN.WORD, sharp);
	    }

	    this._input.back();

	  } else if (c === '<' && this._is_first_token()) {
	    resulting_string = this.__patterns.html_comment_start.read();
	    if (resulting_string) {
	      while (this._input.hasNext() && !this._input.testChar(acorn.newline)) {
	        resulting_string += this._input.next();
	      }
	      in_html_comment = true;
	      return this._create_token(TOKEN.COMMENT, resulting_string);
	    }
	  } else if (in_html_comment && c === '-') {
	    resulting_string = this.__patterns.html_comment_end.read();
	    if (resulting_string) {
	      in_html_comment = false;
	      return this._create_token(TOKEN.COMMENT, resulting_string);
	    }
	  }

	  return null;
	};

	Tokenizer.prototype._read_comment = function(c) {
	  var token = null;
	  if (c === '/') {
	    var comment = '';
	    if (this._input.peek(1) === '*') {
	      // peek for comment /* ... */
	      comment = this.__patterns.block_comment.read();
	      var directives = directives_core.get_directives(comment);
	      if (directives && directives.ignore === 'start') {
	        comment += directives_core.readIgnored(this._input);
	      }
	      comment = comment.replace(acorn.allLineBreaks, '\n');
	      token = this._create_token(TOKEN.BLOCK_COMMENT, comment);
	      token.directives = directives;
	    } else if (this._input.peek(1) === '/') {
	      // peek for comment // ...
	      comment = this.__patterns.comment.read();
	      token = this._create_token(TOKEN.COMMENT, comment);
	    }
	  }
	  return token;
	};

	Tokenizer.prototype._read_string = function(c) {
	  if (c === '`' || c === "'" || c === '"') {
	    var resulting_string = this._input.next();
	    this.has_char_escapes = false;

	    if (c === '`') {
	      resulting_string += this._read_string_recursive('`', true, '${');
	    } else {
	      resulting_string += this._read_string_recursive(c);
	    }

	    if (this.has_char_escapes && this._options.unescape_strings) {
	      resulting_string = unescape_string(resulting_string);
	    }

	    if (this._input.peek() === c) {
	      resulting_string += this._input.next();
	    }

	    resulting_string = resulting_string.replace(acorn.allLineBreaks, '\n');

	    return this._create_token(TOKEN.STRING, resulting_string);
	  }

	  return null;
	};

	Tokenizer.prototype._allow_regexp_or_xml = function(previous_token) {
	  // regex and xml can only appear in specific locations during parsing
	  return (previous_token.type === TOKEN.RESERVED && in_array(previous_token.text, ['return', 'case', 'throw', 'else', 'do', 'typeof', 'yield'])) ||
	    (previous_token.type === TOKEN.END_EXPR && previous_token.text === ')' &&
	      previous_token.opened.previous.type === TOKEN.RESERVED && in_array(previous_token.opened.previous.text, ['if', 'while', 'for'])) ||
	    (in_array(previous_token.type, [TOKEN.COMMENT, TOKEN.START_EXPR, TOKEN.START_BLOCK, TOKEN.START,
	      TOKEN.END_BLOCK, TOKEN.OPERATOR, TOKEN.EQUALS, TOKEN.EOF, TOKEN.SEMICOLON, TOKEN.COMMA
	    ]));
	};

	Tokenizer.prototype._read_regexp = function(c, previous_token) {

	  if (c === '/' && this._allow_regexp_or_xml(previous_token)) {
	    // handle regexp
	    //
	    var resulting_string = this._input.next();
	    var esc = false;

	    var in_char_class = false;
	    while (this._input.hasNext() &&
	      ((esc || in_char_class || this._input.peek() !== c) &&
	        !this._input.testChar(acorn.newline))) {
	      resulting_string += this._input.peek();
	      if (!esc) {
	        esc = this._input.peek() === '\\';
	        if (this._input.peek() === '[') {
	          in_char_class = true;
	        } else if (this._input.peek() === ']') {
	          in_char_class = false;
	        }
	      } else {
	        esc = false;
	      }
	      this._input.next();
	    }

	    if (this._input.peek() === c) {
	      resulting_string += this._input.next();

	      // regexps may have modifiers /regexp/MOD , so fetch those, too
	      // Only [gim] are valid, but if the user puts in garbage, do what we can to take it.
	      resulting_string += this._input.read(acorn.identifier);
	    }
	    return this._create_token(TOKEN.STRING, resulting_string);
	  }
	  return null;
	};

	Tokenizer.prototype._read_xml = function(c, previous_token) {

	  if (this._options.e4x && c === "<" && this._allow_regexp_or_xml(previous_token)) {
	    var xmlStr = '';
	    var match = this.__patterns.xml.read_match();
	    // handle e4x xml literals
	    //
	    if (match) {
	      // Trim root tag to attempt to
	      var rootTag = match[2].replace(/^{\s+/, '{').replace(/\s+}$/, '}');
	      var isCurlyRoot = rootTag.indexOf('{') === 0;
	      var depth = 0;
	      while (match) {
	        var isEndTag = !!match[1];
	        var tagName = match[2];
	        var isSingletonTag = (!!match[match.length - 1]) || (tagName.slice(0, 8) === "![CDATA[");
	        if (!isSingletonTag &&
	          (tagName === rootTag || (isCurlyRoot && tagName.replace(/^{\s+/, '{').replace(/\s+}$/, '}')))) {
	          if (isEndTag) {
	            --depth;
	          } else {
	            ++depth;
	          }
	        }
	        xmlStr += match[0];
	        if (depth <= 0) {
	          break;
	        }
	        match = this.__patterns.xml.read_match();
	      }
	      // if we didn't close correctly, keep unformatted.
	      if (!match) {
	        xmlStr += this._input.match(/[\s\S]*/g)[0];
	      }
	      xmlStr = xmlStr.replace(acorn.allLineBreaks, '\n');
	      return this._create_token(TOKEN.STRING, xmlStr);
	    }
	  }

	  return null;
	};

	function unescape_string(s) {
	  // You think that a regex would work for this
	  // return s.replace(/\\x([0-9a-f]{2})/gi, function(match, val) {
	  //         return String.fromCharCode(parseInt(val, 16));
	  //     })
	  // However, dealing with '\xff', '\\xff', '\\\xff' makes this more fun.
	  var out = '',
	    escaped = 0;

	  var input_scan = new InputScanner(s);
	  var matched = null;

	  while (input_scan.hasNext()) {
	    // Keep any whitespace, non-slash characters
	    // also keep slash pairs.
	    matched = input_scan.match(/([\s]|[^\\]|\\\\)+/g);

	    if (matched) {
	      out += matched[0];
	    }

	    if (input_scan.peek() === '\\') {
	      input_scan.next();
	      if (input_scan.peek() === 'x') {
	        matched = input_scan.match(/x([0-9A-Fa-f]{2})/g);
	      } else if (input_scan.peek() === 'u') {
	        matched = input_scan.match(/u([0-9A-Fa-f]{4})/g);
	        if (!matched) {
	          matched = input_scan.match(/u\{([0-9A-Fa-f]+)\}/g);
	        }
	      } else {
	        out += '\\';
	        if (input_scan.hasNext()) {
	          out += input_scan.next();
	        }
	        continue;
	      }

	      // If there's some error decoding, return the original string
	      if (!matched) {
	        return s;
	      }

	      escaped = parseInt(matched[1], 16);

	      if (escaped > 0x7e && escaped <= 0xff && matched[0].indexOf('x') === 0) {
	        // we bail out on \x7f..\xff,
	        // leaving whole string escaped,
	        // as it's probably completely binary
	        return s;
	      } else if (escaped >= 0x00 && escaped < 0x20) {
	        // leave 0x00...0x1f escaped
	        out += '\\' + matched[0];
	      } else if (escaped > 0x10FFFF) {
	        // If the escape sequence is out of bounds, keep the original sequence and continue conversion
	        out += '\\' + matched[0];
	      } else if (escaped === 0x22 || escaped === 0x27 || escaped === 0x5c) {
	        // single-quote, apostrophe, backslash - escape these
	        out += '\\' + String.fromCharCode(escaped);
	      } else {
	        out += String.fromCharCode(escaped);
	      }
	    }
	  }

	  return out;
	}

	// handle string
	//
	Tokenizer.prototype._read_string_recursive = function(delimiter, allow_unescaped_newlines, start_sub) {
	  var current_char;
	  var pattern;
	  if (delimiter === '\'') {
	    pattern = this.__patterns.single_quote;
	  } else if (delimiter === '"') {
	    pattern = this.__patterns.double_quote;
	  } else if (delimiter === '`') {
	    pattern = this.__patterns.template_text;
	  } else if (delimiter === '}') {
	    pattern = this.__patterns.template_expression;
	  }

	  var resulting_string = pattern.read();
	  var next = '';
	  while (this._input.hasNext()) {
	    next = this._input.next();
	    if (next === delimiter ||
	      (!allow_unescaped_newlines && acorn.newline.test(next))) {
	      this._input.back();
	      break;
	    } else if (next === '\\' && this._input.hasNext()) {
	      current_char = this._input.peek();

	      if (current_char === 'x' || current_char === 'u') {
	        this.has_char_escapes = true;
	      } else if (current_char === '\r' && this._input.peek(1) === '\n') {
	        this._input.next();
	      }
	      next += this._input.next();
	    } else if (start_sub) {
	      if (start_sub === '${' && next === '$' && this._input.peek() === '{') {
	        next += this._input.next();
	      }

	      if (start_sub === next) {
	        if (delimiter === '`') {
	          next += this._read_string_recursive('}', allow_unescaped_newlines, '`');
	        } else {
	          next += this._read_string_recursive('`', allow_unescaped_newlines, '${');
	        }
	        if (this._input.hasNext()) {
	          next += this._input.next();
	        }
	      }
	    }
	    next += pattern.read();
	    resulting_string += next;
	  }

	  return resulting_string;
	};

	tokenizer$2.Tokenizer = Tokenizer;
	tokenizer$2.TOKEN = TOKEN;
	tokenizer$2.positionable_operators = positionable_operators.slice();
	tokenizer$2.line_starters = line_starters.slice();
	return tokenizer$2;
}

/*jshint node:true */

var hasRequiredBeautifier$2;

function requireBeautifier$2 () {
	if (hasRequiredBeautifier$2) return beautifier$2;
	hasRequiredBeautifier$2 = 1;

	var Output = requireOutput().Output;
	var Token = requireToken().Token;
	var acorn = requireAcorn();
	var Options = requireOptions$2().Options;
	var Tokenizer = requireTokenizer$1().Tokenizer;
	var line_starters = requireTokenizer$1().line_starters;
	var positionable_operators = requireTokenizer$1().positionable_operators;
	var TOKEN = requireTokenizer$1().TOKEN;


	function in_array(what, arr) {
	  return arr.indexOf(what) !== -1;
	}

	function ltrim(s) {
	  return s.replace(/^\s+/g, '');
	}

	function generateMapFromStrings(list) {
	  var result = {};
	  for (var x = 0; x < list.length; x++) {
	    // make the mapped names underscored instead of dash
	    result[list[x].replace(/-/g, '_')] = list[x];
	  }
	  return result;
	}

	function reserved_word(token, word) {
	  return token && token.type === TOKEN.RESERVED && token.text === word;
	}

	function reserved_array(token, words) {
	  return token && token.type === TOKEN.RESERVED && in_array(token.text, words);
	}
	// Unsure of what they mean, but they work. Worth cleaning up in future.
	var special_words = ['case', 'return', 'do', 'if', 'throw', 'else', 'await', 'break', 'continue', 'async'];

	var validPositionValues = ['before-newline', 'after-newline', 'preserve-newline'];

	// Generate map from array
	var OPERATOR_POSITION = generateMapFromStrings(validPositionValues);

	var OPERATOR_POSITION_BEFORE_OR_PRESERVE = [OPERATOR_POSITION.before_newline, OPERATOR_POSITION.preserve_newline];

	var MODE = {
	  BlockStatement: 'BlockStatement', // 'BLOCK'
	  Statement: 'Statement', // 'STATEMENT'
	  ObjectLiteral: 'ObjectLiteral', // 'OBJECT',
	  ArrayLiteral: 'ArrayLiteral', //'[EXPRESSION]',
	  ForInitializer: 'ForInitializer', //'(FOR-EXPRESSION)',
	  Conditional: 'Conditional', //'(COND-EXPRESSION)',
	  Expression: 'Expression' //'(EXPRESSION)'
	};

	function remove_redundant_indentation(output, frame) {
	  // This implementation is effective but has some issues:
	  //     - can cause line wrap to happen too soon due to indent removal
	  //           after wrap points are calculated
	  // These issues are minor compared to ugly indentation.

	  if (frame.multiline_frame ||
	    frame.mode === MODE.ForInitializer ||
	    frame.mode === MODE.Conditional) {
	    return;
	  }

	  // remove one indent from each line inside this section
	  output.remove_indent(frame.start_line_index);
	}

	// we could use just string.split, but
	// IE doesn't like returning empty strings
	function split_linebreaks(s) {
	  //return s.split(/\x0d\x0a|\x0a/);

	  s = s.replace(acorn.allLineBreaks, '\n');
	  var out = [],
	    idx = s.indexOf("\n");
	  while (idx !== -1) {
	    out.push(s.substring(0, idx));
	    s = s.substring(idx + 1);
	    idx = s.indexOf("\n");
	  }
	  if (s.length) {
	    out.push(s);
	  }
	  return out;
	}

	function is_array(mode) {
	  return mode === MODE.ArrayLiteral;
	}

	function is_expression(mode) {
	  return in_array(mode, [MODE.Expression, MODE.ForInitializer, MODE.Conditional]);
	}

	function all_lines_start_with(lines, c) {
	  for (var i = 0; i < lines.length; i++) {
	    var line = lines[i].trim();
	    if (line.charAt(0) !== c) {
	      return false;
	    }
	  }
	  return true;
	}

	function each_line_matches_indent(lines, indent) {
	  var i = 0,
	    len = lines.length,
	    line;
	  for (; i < len; i++) {
	    line = lines[i];
	    // allow empty lines to pass through
	    if (line && line.indexOf(indent) !== 0) {
	      return false;
	    }
	  }
	  return true;
	}


	function Beautifier(source_text, options) {
	  options = options || {};
	  this._source_text = source_text || '';

	  this._output = null;
	  this._tokens = null;
	  this._last_last_text = null;
	  this._flags = null;
	  this._previous_flags = null;

	  this._flag_store = null;
	  this._options = new Options(options);
	}

	Beautifier.prototype.create_flags = function(flags_base, mode) {
	  var next_indent_level = 0;
	  if (flags_base) {
	    next_indent_level = flags_base.indentation_level;
	    if (!this._output.just_added_newline() &&
	      flags_base.line_indent_level > next_indent_level) {
	      next_indent_level = flags_base.line_indent_level;
	    }
	  }

	  var next_flags = {
	    mode: mode,
	    parent: flags_base,
	    last_token: flags_base ? flags_base.last_token : new Token(TOKEN.START_BLOCK, ''), // last token text
	    last_word: flags_base ? flags_base.last_word : '', // last TOKEN.WORD passed
	    declaration_statement: false,
	    declaration_assignment: false,
	    multiline_frame: false,
	    inline_frame: false,
	    if_block: false,
	    else_block: false,
	    class_start_block: false, // class A { INSIDE HERE } or class B extends C { INSIDE HERE }
	    do_block: false,
	    do_while: false,
	    import_block: false,
	    in_case_statement: false, // switch(..){ INSIDE HERE }
	    in_case: false, // we're on the exact line with "case 0:"
	    case_body: false, // the indented case-action block
	    case_block: false, // the indented case-action block is wrapped with {}
	    indentation_level: next_indent_level,
	    alignment: 0,
	    line_indent_level: flags_base ? flags_base.line_indent_level : next_indent_level,
	    start_line_index: this._output.get_line_number(),
	    ternary_depth: 0
	  };
	  return next_flags;
	};

	Beautifier.prototype._reset = function(source_text) {
	  var baseIndentString = source_text.match(/^[\t ]*/)[0];

	  this._last_last_text = ''; // pre-last token text
	  this._output = new Output(this._options, baseIndentString);

	  // If testing the ignore directive, start with output disable set to true
	  this._output.raw = this._options.test_output_raw;


	  // Stack of parsing/formatting states, including MODE.
	  // We tokenize, parse, and output in an almost purely a forward-only stream of token input
	  // and formatted output.  This makes the beautifier less accurate than full parsers
	  // but also far more tolerant of syntax errors.
	  //
	  // For example, the default mode is MODE.BlockStatement. If we see a '{' we push a new frame of type
	  // MODE.BlockStatement on the the stack, even though it could be object literal.  If we later
	  // encounter a ":", we'll switch to to MODE.ObjectLiteral.  If we then see a ";",
	  // most full parsers would die, but the beautifier gracefully falls back to
	  // MODE.BlockStatement and continues on.
	  this._flag_store = [];
	  this.set_mode(MODE.BlockStatement);
	  var tokenizer = new Tokenizer(source_text, this._options);
	  this._tokens = tokenizer.tokenize();
	  return source_text;
	};

	Beautifier.prototype.beautify = function() {
	  // if disabled, return the input unchanged.
	  if (this._options.disabled) {
	    return this._source_text;
	  }

	  var sweet_code;
	  var source_text = this._reset(this._source_text);

	  var eol = this._options.eol;
	  if (this._options.eol === 'auto') {
	    eol = '\n';
	    if (source_text && acorn.lineBreak.test(source_text || '')) {
	      eol = source_text.match(acorn.lineBreak)[0];
	    }
	  }

	  var current_token = this._tokens.next();
	  while (current_token) {
	    this.handle_token(current_token);

	    this._last_last_text = this._flags.last_token.text;
	    this._flags.last_token = current_token;

	    current_token = this._tokens.next();
	  }

	  sweet_code = this._output.get_code(eol);

	  return sweet_code;
	};

	Beautifier.prototype.handle_token = function(current_token, preserve_statement_flags) {
	  if (current_token.type === TOKEN.START_EXPR) {
	    this.handle_start_expr(current_token);
	  } else if (current_token.type === TOKEN.END_EXPR) {
	    this.handle_end_expr(current_token);
	  } else if (current_token.type === TOKEN.START_BLOCK) {
	    this.handle_start_block(current_token);
	  } else if (current_token.type === TOKEN.END_BLOCK) {
	    this.handle_end_block(current_token);
	  } else if (current_token.type === TOKEN.WORD) {
	    this.handle_word(current_token);
	  } else if (current_token.type === TOKEN.RESERVED) {
	    this.handle_word(current_token);
	  } else if (current_token.type === TOKEN.SEMICOLON) {
	    this.handle_semicolon(current_token);
	  } else if (current_token.type === TOKEN.STRING) {
	    this.handle_string(current_token);
	  } else if (current_token.type === TOKEN.EQUALS) {
	    this.handle_equals(current_token);
	  } else if (current_token.type === TOKEN.OPERATOR) {
	    this.handle_operator(current_token);
	  } else if (current_token.type === TOKEN.COMMA) {
	    this.handle_comma(current_token);
	  } else if (current_token.type === TOKEN.BLOCK_COMMENT) {
	    this.handle_block_comment(current_token, preserve_statement_flags);
	  } else if (current_token.type === TOKEN.COMMENT) {
	    this.handle_comment(current_token, preserve_statement_flags);
	  } else if (current_token.type === TOKEN.DOT) {
	    this.handle_dot(current_token);
	  } else if (current_token.type === TOKEN.EOF) {
	    this.handle_eof(current_token);
	  } else if (current_token.type === TOKEN.UNKNOWN) {
	    this.handle_unknown(current_token, preserve_statement_flags);
	  } else {
	    this.handle_unknown(current_token, preserve_statement_flags);
	  }
	};

	Beautifier.prototype.handle_whitespace_and_comments = function(current_token, preserve_statement_flags) {
	  var newlines = current_token.newlines;
	  var keep_whitespace = this._options.keep_array_indentation && is_array(this._flags.mode);

	  if (current_token.comments_before) {
	    var comment_token = current_token.comments_before.next();
	    while (comment_token) {
	      // The cleanest handling of inline comments is to treat them as though they aren't there.
	      // Just continue formatting and the behavior should be logical.
	      // Also ignore unknown tokens.  Again, this should result in better behavior.
	      this.handle_whitespace_and_comments(comment_token, preserve_statement_flags);
	      this.handle_token(comment_token, preserve_statement_flags);
	      comment_token = current_token.comments_before.next();
	    }
	  }

	  if (keep_whitespace) {
	    for (var i = 0; i < newlines; i += 1) {
	      this.print_newline(i > 0, preserve_statement_flags);
	    }
	  } else {
	    if (this._options.max_preserve_newlines && newlines > this._options.max_preserve_newlines) {
	      newlines = this._options.max_preserve_newlines;
	    }

	    if (this._options.preserve_newlines) {
	      if (newlines > 1) {
	        this.print_newline(false, preserve_statement_flags);
	        for (var j = 1; j < newlines; j += 1) {
	          this.print_newline(true, preserve_statement_flags);
	        }
	      }
	    }
	  }

	};

	var newline_restricted_tokens = ['async', 'break', 'continue', 'return', 'throw', 'yield'];

	Beautifier.prototype.allow_wrap_or_preserved_newline = function(current_token, force_linewrap) {
	  force_linewrap = (force_linewrap === undefined) ? false : force_linewrap;

	  // Never wrap the first token on a line
	  if (this._output.just_added_newline()) {
	    return;
	  }

	  var shouldPreserveOrForce = (this._options.preserve_newlines && current_token.newlines) || force_linewrap;
	  var operatorLogicApplies = in_array(this._flags.last_token.text, positionable_operators) ||
	    in_array(current_token.text, positionable_operators);

	  if (operatorLogicApplies) {
	    var shouldPrintOperatorNewline = (
	        in_array(this._flags.last_token.text, positionable_operators) &&
	        in_array(this._options.operator_position, OPERATOR_POSITION_BEFORE_OR_PRESERVE)
	      ) ||
	      in_array(current_token.text, positionable_operators);
	    shouldPreserveOrForce = shouldPreserveOrForce && shouldPrintOperatorNewline;
	  }

	  if (shouldPreserveOrForce) {
	    this.print_newline(false, true);
	  } else if (this._options.wrap_line_length) {
	    if (reserved_array(this._flags.last_token, newline_restricted_tokens)) {
	      // These tokens should never have a newline inserted
	      // between them and the following expression.
	      return;
	    }
	    this._output.set_wrap_point();
	  }
	};

	Beautifier.prototype.print_newline = function(force_newline, preserve_statement_flags) {
	  if (!preserve_statement_flags) {
	    if (this._flags.last_token.text !== ';' && this._flags.last_token.text !== ',' && this._flags.last_token.text !== '=' && (this._flags.last_token.type !== TOKEN.OPERATOR || this._flags.last_token.text === '--' || this._flags.last_token.text === '++')) {
	      var next_token = this._tokens.peek();
	      while (this._flags.mode === MODE.Statement &&
	        !(this._flags.if_block && reserved_word(next_token, 'else')) &&
	        !this._flags.do_block) {
	        this.restore_mode();
	      }
	    }
	  }

	  if (this._output.add_new_line(force_newline)) {
	    this._flags.multiline_frame = true;
	  }
	};

	Beautifier.prototype.print_token_line_indentation = function(current_token) {
	  if (this._output.just_added_newline()) {
	    if (this._options.keep_array_indentation &&
	      current_token.newlines &&
	      (current_token.text === '[' || is_array(this._flags.mode))) {
	      this._output.current_line.set_indent(-1);
	      this._output.current_line.push(current_token.whitespace_before);
	      this._output.space_before_token = false;
	    } else if (this._output.set_indent(this._flags.indentation_level, this._flags.alignment)) {
	      this._flags.line_indent_level = this._flags.indentation_level;
	    }
	  }
	};

	Beautifier.prototype.print_token = function(current_token) {
	  if (this._output.raw) {
	    this._output.add_raw_token(current_token);
	    return;
	  }

	  if (this._options.comma_first && current_token.previous && current_token.previous.type === TOKEN.COMMA &&
	    this._output.just_added_newline()) {
	    if (this._output.previous_line.last() === ',') {
	      var popped = this._output.previous_line.pop();
	      // if the comma was already at the start of the line,
	      // pull back onto that line and reprint the indentation
	      if (this._output.previous_line.is_empty()) {
	        this._output.previous_line.push(popped);
	        this._output.trim(true);
	        this._output.current_line.pop();
	        this._output.trim();
	      }

	      // add the comma in front of the next token
	      this.print_token_line_indentation(current_token);
	      this._output.add_token(',');
	      this._output.space_before_token = true;
	    }
	  }

	  this.print_token_line_indentation(current_token);
	  this._output.non_breaking_space = true;
	  this._output.add_token(current_token.text);
	  if (this._output.previous_token_wrapped) {
	    this._flags.multiline_frame = true;
	  }
	};

	Beautifier.prototype.indent = function() {
	  this._flags.indentation_level += 1;
	  this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
	};

	Beautifier.prototype.deindent = function() {
	  if (this._flags.indentation_level > 0 &&
	    ((!this._flags.parent) || this._flags.indentation_level > this._flags.parent.indentation_level)) {
	    this._flags.indentation_level -= 1;
	    this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
	  }
	};

	Beautifier.prototype.set_mode = function(mode) {
	  if (this._flags) {
	    this._flag_store.push(this._flags);
	    this._previous_flags = this._flags;
	  } else {
	    this._previous_flags = this.create_flags(null, mode);
	  }

	  this._flags = this.create_flags(this._previous_flags, mode);
	  this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
	};


	Beautifier.prototype.restore_mode = function() {
	  if (this._flag_store.length > 0) {
	    this._previous_flags = this._flags;
	    this._flags = this._flag_store.pop();
	    if (this._previous_flags.mode === MODE.Statement) {
	      remove_redundant_indentation(this._output, this._previous_flags);
	    }
	    this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
	  }
	};

	Beautifier.prototype.start_of_object_property = function() {
	  return this._flags.parent.mode === MODE.ObjectLiteral && this._flags.mode === MODE.Statement && (
	    (this._flags.last_token.text === ':' && this._flags.ternary_depth === 0) || (reserved_array(this._flags.last_token, ['get', 'set'])));
	};

	Beautifier.prototype.start_of_statement = function(current_token) {
	  var start = false;
	  start = start || reserved_array(this._flags.last_token, ['var', 'let', 'const']) && current_token.type === TOKEN.WORD;
	  start = start || reserved_word(this._flags.last_token, 'do');
	  start = start || (!(this._flags.parent.mode === MODE.ObjectLiteral && this._flags.mode === MODE.Statement)) && reserved_array(this._flags.last_token, newline_restricted_tokens) && !current_token.newlines;
	  start = start || reserved_word(this._flags.last_token, 'else') &&
	    !(reserved_word(current_token, 'if') && !current_token.comments_before);
	  start = start || (this._flags.last_token.type === TOKEN.END_EXPR && (this._previous_flags.mode === MODE.ForInitializer || this._previous_flags.mode === MODE.Conditional));
	  start = start || (this._flags.last_token.type === TOKEN.WORD && this._flags.mode === MODE.BlockStatement &&
	    !this._flags.in_case &&
	    !(current_token.text === '--' || current_token.text === '++') &&
	    this._last_last_text !== 'function' &&
	    current_token.type !== TOKEN.WORD && current_token.type !== TOKEN.RESERVED);
	  start = start || (this._flags.mode === MODE.ObjectLiteral && (
	    (this._flags.last_token.text === ':' && this._flags.ternary_depth === 0) || reserved_array(this._flags.last_token, ['get', 'set'])));

	  if (start) {
	    this.set_mode(MODE.Statement);
	    this.indent();

	    this.handle_whitespace_and_comments(current_token, true);

	    // Issue #276:
	    // If starting a new statement with [if, for, while, do], push to a new line.
	    // if (a) if (b) if(c) d(); else e(); else f();
	    if (!this.start_of_object_property()) {
	      this.allow_wrap_or_preserved_newline(current_token,
	        reserved_array(current_token, ['do', 'for', 'if', 'while']));
	    }
	    return true;
	  }
	  return false;
	};

	Beautifier.prototype.handle_start_expr = function(current_token) {
	  // The conditional starts the statement if appropriate.
	  if (!this.start_of_statement(current_token)) {
	    this.handle_whitespace_and_comments(current_token);
	  }

	  var next_mode = MODE.Expression;
	  if (current_token.text === '[') {

	    if (this._flags.last_token.type === TOKEN.WORD || this._flags.last_token.text === ')') {
	      // this is array index specifier, break immediately
	      // a[x], fn()[x]
	      if (reserved_array(this._flags.last_token, line_starters)) {
	        this._output.space_before_token = true;
	      }
	      this.print_token(current_token);
	      this.set_mode(next_mode);
	      this.indent();
	      if (this._options.space_in_paren) {
	        this._output.space_before_token = true;
	      }
	      return;
	    }

	    next_mode = MODE.ArrayLiteral;
	    if (is_array(this._flags.mode)) {
	      if (this._flags.last_token.text === '[' ||
	        (this._flags.last_token.text === ',' && (this._last_last_text === ']' || this._last_last_text === '}'))) {
	        // ], [ goes to new line
	        // }, [ goes to new line
	        if (!this._options.keep_array_indentation) {
	          this.print_newline();
	        }
	      }
	    }

	    if (!in_array(this._flags.last_token.type, [TOKEN.START_EXPR, TOKEN.END_EXPR, TOKEN.WORD, TOKEN.OPERATOR, TOKEN.DOT])) {
	      this._output.space_before_token = true;
	    }
	  } else {
	    if (this._flags.last_token.type === TOKEN.RESERVED) {
	      if (this._flags.last_token.text === 'for') {
	        this._output.space_before_token = this._options.space_before_conditional;
	        next_mode = MODE.ForInitializer;
	      } else if (in_array(this._flags.last_token.text, ['if', 'while', 'switch'])) {
	        this._output.space_before_token = this._options.space_before_conditional;
	        next_mode = MODE.Conditional;
	      } else if (in_array(this._flags.last_word, ['await', 'async'])) {
	        // Should be a space between await and an IIFE, or async and an arrow function
	        this._output.space_before_token = true;
	      } else if (this._flags.last_token.text === 'import' && current_token.whitespace_before === '') {
	        this._output.space_before_token = false;
	      } else if (in_array(this._flags.last_token.text, line_starters) || this._flags.last_token.text === 'catch') {
	        this._output.space_before_token = true;
	      }
	    } else if (this._flags.last_token.type === TOKEN.EQUALS || this._flags.last_token.type === TOKEN.OPERATOR) {
	      // Support of this kind of newline preservation.
	      // a = (b &&
	      //     (c || d));
	      if (!this.start_of_object_property()) {
	        this.allow_wrap_or_preserved_newline(current_token);
	      }
	    } else if (this._flags.last_token.type === TOKEN.WORD) {
	      this._output.space_before_token = false;

	      // function name() vs function name ()
	      // function* name() vs function* name ()
	      // async name() vs async name ()
	      // In ES6, you can also define the method properties of an object
	      // var obj = {a: function() {}}
	      // It can be abbreviated
	      // var obj = {a() {}}
	      // var obj = { a() {}} vs var obj = { a () {}}
	      // var obj = { * a() {}} vs var obj = { * a () {}}
	      var peek_back_two = this._tokens.peek(-3);
	      if (this._options.space_after_named_function && peek_back_two) {
	        // peek starts at next character so -1 is current token
	        var peek_back_three = this._tokens.peek(-4);
	        if (reserved_array(peek_back_two, ['async', 'function']) ||
	          (peek_back_two.text === '*' && reserved_array(peek_back_three, ['async', 'function']))) {
	          this._output.space_before_token = true;
	        } else if (this._flags.mode === MODE.ObjectLiteral) {
	          if ((peek_back_two.text === '{' || peek_back_two.text === ',') ||
	            (peek_back_two.text === '*' && (peek_back_three.text === '{' || peek_back_three.text === ','))) {
	            this._output.space_before_token = true;
	          }
	        } else if (this._flags.parent && this._flags.parent.class_start_block) {
	          this._output.space_before_token = true;
	        }
	      }
	    } else {
	      // Support preserving wrapped arrow function expressions
	      // a.b('c',
	      //     () => d.e
	      // )
	      this.allow_wrap_or_preserved_newline(current_token);
	    }

	    // function() vs function ()
	    // yield*() vs yield* ()
	    // function*() vs function* ()
	    if ((this._flags.last_token.type === TOKEN.RESERVED && (this._flags.last_word === 'function' || this._flags.last_word === 'typeof')) ||
	      (this._flags.last_token.text === '*' &&
	        (in_array(this._last_last_text, ['function', 'yield']) ||
	          (this._flags.mode === MODE.ObjectLiteral && in_array(this._last_last_text, ['{', ',']))))) {
	      this._output.space_before_token = this._options.space_after_anon_function;
	    }
	  }

	  if (this._flags.last_token.text === ';' || this._flags.last_token.type === TOKEN.START_BLOCK) {
	    this.print_newline();
	  } else if (this._flags.last_token.type === TOKEN.END_EXPR || this._flags.last_token.type === TOKEN.START_EXPR || this._flags.last_token.type === TOKEN.END_BLOCK || this._flags.last_token.text === '.' || this._flags.last_token.type === TOKEN.COMMA) {
	    // do nothing on (( and )( and ][ and ]( and .(
	    // TODO: Consider whether forcing this is required.  Review failing tests when removed.
	    this.allow_wrap_or_preserved_newline(current_token, current_token.newlines);
	  }

	  this.print_token(current_token);
	  this.set_mode(next_mode);
	  if (this._options.space_in_paren) {
	    this._output.space_before_token = true;
	  }

	  // In all cases, if we newline while inside an expression it should be indented.
	  this.indent();
	};

	Beautifier.prototype.handle_end_expr = function(current_token) {
	  // statements inside expressions are not valid syntax, but...
	  // statements must all be closed when their container closes
	  while (this._flags.mode === MODE.Statement) {
	    this.restore_mode();
	  }

	  this.handle_whitespace_and_comments(current_token);

	  if (this._flags.multiline_frame) {
	    this.allow_wrap_or_preserved_newline(current_token,
	      current_token.text === ']' && is_array(this._flags.mode) && !this._options.keep_array_indentation);
	  }

	  if (this._options.space_in_paren) {
	    if (this._flags.last_token.type === TOKEN.START_EXPR && !this._options.space_in_empty_paren) {
	      // () [] no inner space in empty parens like these, ever, ref #320
	      this._output.trim();
	      this._output.space_before_token = false;
	    } else {
	      this._output.space_before_token = true;
	    }
	  }
	  this.deindent();
	  this.print_token(current_token);
	  this.restore_mode();

	  remove_redundant_indentation(this._output, this._previous_flags);

	  // do {} while () // no statement required after
	  if (this._flags.do_while && this._previous_flags.mode === MODE.Conditional) {
	    this._previous_flags.mode = MODE.Expression;
	    this._flags.do_block = false;
	    this._flags.do_while = false;

	  }
	};

	Beautifier.prototype.handle_start_block = function(current_token) {
	  this.handle_whitespace_and_comments(current_token);

	  // Check if this is should be treated as a ObjectLiteral
	  var next_token = this._tokens.peek();
	  var second_token = this._tokens.peek(1);
	  if (this._flags.last_word === 'switch' && this._flags.last_token.type === TOKEN.END_EXPR) {
	    this.set_mode(MODE.BlockStatement);
	    this._flags.in_case_statement = true;
	  } else if (this._flags.case_body) {
	    this.set_mode(MODE.BlockStatement);
	  } else if (second_token && (
	      (in_array(second_token.text, [':', ',']) && in_array(next_token.type, [TOKEN.STRING, TOKEN.WORD, TOKEN.RESERVED])) ||
	      (in_array(next_token.text, ['get', 'set', '...']) && in_array(second_token.type, [TOKEN.WORD, TOKEN.RESERVED]))
	    )) {
	    // We don't support TypeScript,but we didn't break it for a very long time.
	    // We'll try to keep not breaking it.
	    if (in_array(this._last_last_text, ['class', 'interface']) && !in_array(second_token.text, [':', ','])) {
	      this.set_mode(MODE.BlockStatement);
	    } else {
	      this.set_mode(MODE.ObjectLiteral);
	    }
	  } else if (this._flags.last_token.type === TOKEN.OPERATOR && this._flags.last_token.text === '=>') {
	    // arrow function: (param1, paramN) => { statements }
	    this.set_mode(MODE.BlockStatement);
	  } else if (in_array(this._flags.last_token.type, [TOKEN.EQUALS, TOKEN.START_EXPR, TOKEN.COMMA, TOKEN.OPERATOR]) ||
	    reserved_array(this._flags.last_token, ['return', 'throw', 'import', 'default'])
	  ) {
	    // Detecting shorthand function syntax is difficult by scanning forward,
	    //     so check the surrounding context.
	    // If the block is being returned, imported, export default, passed as arg,
	    //     assigned with = or assigned in a nested object, treat as an ObjectLiteral.
	    this.set_mode(MODE.ObjectLiteral);
	  } else {
	    this.set_mode(MODE.BlockStatement);
	  }

	  if (this._flags.last_token) {
	    if (reserved_array(this._flags.last_token.previous, ['class', 'extends'])) {
	      this._flags.class_start_block = true;
	    }
	  }

	  var empty_braces = !next_token.comments_before && next_token.text === '}';
	  var empty_anonymous_function = empty_braces && this._flags.last_word === 'function' &&
	    this._flags.last_token.type === TOKEN.END_EXPR;

	  if (this._options.brace_preserve_inline) // check for inline, set inline_frame if so
	  {
	    // search forward for a newline wanted inside this block
	    var index = 0;
	    var check_token = null;
	    this._flags.inline_frame = true;
	    do {
	      index += 1;
	      check_token = this._tokens.peek(index - 1);
	      if (check_token.newlines) {
	        this._flags.inline_frame = false;
	        break;
	      }
	    } while (check_token.type !== TOKEN.EOF &&
	      !(check_token.type === TOKEN.END_BLOCK && check_token.opened === current_token));
	  }

	  if ((this._options.brace_style === "expand" ||
	      (this._options.brace_style === "none" && current_token.newlines)) &&
	    !this._flags.inline_frame) {
	    if (this._flags.last_token.type !== TOKEN.OPERATOR &&
	      (empty_anonymous_function ||
	        this._flags.last_token.type === TOKEN.EQUALS ||
	        (reserved_array(this._flags.last_token, special_words) && this._flags.last_token.text !== 'else'))) {
	      this._output.space_before_token = true;
	    } else {
	      this.print_newline(false, true);
	    }
	  } else { // collapse || inline_frame
	    if (is_array(this._previous_flags.mode) && (this._flags.last_token.type === TOKEN.START_EXPR || this._flags.last_token.type === TOKEN.COMMA)) {
	      if (this._flags.last_token.type === TOKEN.COMMA || this._options.space_in_paren) {
	        this._output.space_before_token = true;
	      }

	      if (this._flags.last_token.type === TOKEN.COMMA || (this._flags.last_token.type === TOKEN.START_EXPR && this._flags.inline_frame)) {
	        this.allow_wrap_or_preserved_newline(current_token);
	        this._previous_flags.multiline_frame = this._previous_flags.multiline_frame || this._flags.multiline_frame;
	        this._flags.multiline_frame = false;
	      }
	    }
	    if (this._flags.last_token.type !== TOKEN.OPERATOR && this._flags.last_token.type !== TOKEN.START_EXPR) {
	      if (in_array(this._flags.last_token.type, [TOKEN.START_BLOCK, TOKEN.SEMICOLON]) && !this._flags.inline_frame) {
	        this.print_newline();
	      } else {
	        this._output.space_before_token = true;
	      }
	    }
	  }
	  this.print_token(current_token);
	  this.indent();

	  // Except for specific cases, open braces are followed by a new line.
	  if (!empty_braces && !(this._options.brace_preserve_inline && this._flags.inline_frame)) {
	    this.print_newline();
	  }
	};

	Beautifier.prototype.handle_end_block = function(current_token) {
	  // statements must all be closed when their container closes
	  this.handle_whitespace_and_comments(current_token);

	  while (this._flags.mode === MODE.Statement) {
	    this.restore_mode();
	  }

	  var empty_braces = this._flags.last_token.type === TOKEN.START_BLOCK;

	  if (this._flags.inline_frame && !empty_braces) { // try inline_frame (only set if this._options.braces-preserve-inline) first
	    this._output.space_before_token = true;
	  } else if (this._options.brace_style === "expand") {
	    if (!empty_braces) {
	      this.print_newline();
	    }
	  } else {
	    // skip {}
	    if (!empty_braces) {
	      if (is_array(this._flags.mode) && this._options.keep_array_indentation) {
	        // we REALLY need a newline here, but newliner would skip that
	        this._options.keep_array_indentation = false;
	        this.print_newline();
	        this._options.keep_array_indentation = true;

	      } else {
	        this.print_newline();
	      }
	    }
	  }
	  this.restore_mode();
	  this.print_token(current_token);
	};

	Beautifier.prototype.handle_word = function(current_token) {
	  if (current_token.type === TOKEN.RESERVED) {
	    if (in_array(current_token.text, ['set', 'get']) && this._flags.mode !== MODE.ObjectLiteral) {
	      current_token.type = TOKEN.WORD;
	    } else if (current_token.text === 'import' && in_array(this._tokens.peek().text, ['(', '.'])) {
	      current_token.type = TOKEN.WORD;
	    } else if (in_array(current_token.text, ['as', 'from']) && !this._flags.import_block) {
	      current_token.type = TOKEN.WORD;
	    } else if (this._flags.mode === MODE.ObjectLiteral) {
	      var next_token = this._tokens.peek();
	      if (next_token.text === ':') {
	        current_token.type = TOKEN.WORD;
	      }
	    }
	  }

	  if (this.start_of_statement(current_token)) {
	    // The conditional starts the statement if appropriate.
	    if (reserved_array(this._flags.last_token, ['var', 'let', 'const']) && current_token.type === TOKEN.WORD) {
	      this._flags.declaration_statement = true;
	    }
	  } else if (current_token.newlines && !is_expression(this._flags.mode) &&
	    (this._flags.last_token.type !== TOKEN.OPERATOR || (this._flags.last_token.text === '--' || this._flags.last_token.text === '++')) &&
	    this._flags.last_token.type !== TOKEN.EQUALS &&
	    (this._options.preserve_newlines || !reserved_array(this._flags.last_token, ['var', 'let', 'const', 'set', 'get']))) {
	    this.handle_whitespace_and_comments(current_token);
	    this.print_newline();
	  } else {
	    this.handle_whitespace_and_comments(current_token);
	  }

	  if (this._flags.do_block && !this._flags.do_while) {
	    if (reserved_word(current_token, 'while')) {
	      // do {} ## while ()
	      this._output.space_before_token = true;
	      this.print_token(current_token);
	      this._output.space_before_token = true;
	      this._flags.do_while = true;
	      return;
	    } else {
	      // do {} should always have while as the next word.
	      // if we don't see the expected while, recover
	      this.print_newline();
	      this._flags.do_block = false;
	    }
	  }

	  // if may be followed by else, or not
	  // Bare/inline ifs are tricky
	  // Need to unwind the modes correctly: if (a) if (b) c(); else d(); else e();
	  if (this._flags.if_block) {
	    if (!this._flags.else_block && reserved_word(current_token, 'else')) {
	      this._flags.else_block = true;
	    } else {
	      while (this._flags.mode === MODE.Statement) {
	        this.restore_mode();
	      }
	      this._flags.if_block = false;
	      this._flags.else_block = false;
	    }
	  }

	  if (this._flags.in_case_statement && reserved_array(current_token, ['case', 'default'])) {
	    this.print_newline();
	    if (!this._flags.case_block && (this._flags.case_body || this._options.jslint_happy)) {
	      // switch cases following one another
	      this.deindent();
	    }
	    this._flags.case_body = false;

	    this.print_token(current_token);
	    this._flags.in_case = true;
	    return;
	  }

	  if (this._flags.last_token.type === TOKEN.COMMA || this._flags.last_token.type === TOKEN.START_EXPR || this._flags.last_token.type === TOKEN.EQUALS || this._flags.last_token.type === TOKEN.OPERATOR) {
	    if (!this.start_of_object_property() && !(
	        // start of object property is different for numeric values with +/- prefix operators
	        in_array(this._flags.last_token.text, ['+', '-']) && this._last_last_text === ':' && this._flags.parent.mode === MODE.ObjectLiteral)) {
	      this.allow_wrap_or_preserved_newline(current_token);
	    }
	  }

	  if (reserved_word(current_token, 'function')) {
	    if (in_array(this._flags.last_token.text, ['}', ';']) ||
	      (this._output.just_added_newline() && !(in_array(this._flags.last_token.text, ['(', '[', '{', ':', '=', ',']) || this._flags.last_token.type === TOKEN.OPERATOR))) {
	      // make sure there is a nice clean space of at least one blank line
	      // before a new function definition
	      if (!this._output.just_added_blankline() && !current_token.comments_before) {
	        this.print_newline();
	        this.print_newline(true);
	      }
	    }
	    if (this._flags.last_token.type === TOKEN.RESERVED || this._flags.last_token.type === TOKEN.WORD) {
	      if (reserved_array(this._flags.last_token, ['get', 'set', 'new', 'export']) ||
	        reserved_array(this._flags.last_token, newline_restricted_tokens)) {
	        this._output.space_before_token = true;
	      } else if (reserved_word(this._flags.last_token, 'default') && this._last_last_text === 'export') {
	        this._output.space_before_token = true;
	      } else if (this._flags.last_token.text === 'declare') {
	        // accomodates Typescript declare function formatting
	        this._output.space_before_token = true;
	      } else {
	        this.print_newline();
	      }
	    } else if (this._flags.last_token.type === TOKEN.OPERATOR || this._flags.last_token.text === '=') {
	      // foo = function
	      this._output.space_before_token = true;
	    } else if (!this._flags.multiline_frame && (is_expression(this._flags.mode) || is_array(this._flags.mode))) ; else {
	      this.print_newline();
	    }

	    this.print_token(current_token);
	    this._flags.last_word = current_token.text;
	    return;
	  }

	  var prefix = 'NONE';

	  if (this._flags.last_token.type === TOKEN.END_BLOCK) {

	    if (this._previous_flags.inline_frame) {
	      prefix = 'SPACE';
	    } else if (!reserved_array(current_token, ['else', 'catch', 'finally', 'from'])) {
	      prefix = 'NEWLINE';
	    } else {
	      if (this._options.brace_style === "expand" ||
	        this._options.brace_style === "end-expand" ||
	        (this._options.brace_style === "none" && current_token.newlines)) {
	        prefix = 'NEWLINE';
	      } else {
	        prefix = 'SPACE';
	        this._output.space_before_token = true;
	      }
	    }
	  } else if (this._flags.last_token.type === TOKEN.SEMICOLON && this._flags.mode === MODE.BlockStatement) {
	    // TODO: Should this be for STATEMENT as well?
	    prefix = 'NEWLINE';
	  } else if (this._flags.last_token.type === TOKEN.SEMICOLON && is_expression(this._flags.mode)) {
	    prefix = 'SPACE';
	  } else if (this._flags.last_token.type === TOKEN.STRING) {
	    prefix = 'NEWLINE';
	  } else if (this._flags.last_token.type === TOKEN.RESERVED || this._flags.last_token.type === TOKEN.WORD ||
	    (this._flags.last_token.text === '*' &&
	      (in_array(this._last_last_text, ['function', 'yield']) ||
	        (this._flags.mode === MODE.ObjectLiteral && in_array(this._last_last_text, ['{', ',']))))) {
	    prefix = 'SPACE';
	  } else if (this._flags.last_token.type === TOKEN.START_BLOCK) {
	    if (this._flags.inline_frame) {
	      prefix = 'SPACE';
	    } else {
	      prefix = 'NEWLINE';
	    }
	  } else if (this._flags.last_token.type === TOKEN.END_EXPR) {
	    this._output.space_before_token = true;
	    prefix = 'NEWLINE';
	  }

	  if (reserved_array(current_token, line_starters) && this._flags.last_token.text !== ')') {
	    if (this._flags.inline_frame || this._flags.last_token.text === 'else' || this._flags.last_token.text === 'export') {
	      prefix = 'SPACE';
	    } else {
	      prefix = 'NEWLINE';
	    }

	  }

	  if (reserved_array(current_token, ['else', 'catch', 'finally'])) {
	    if ((!(this._flags.last_token.type === TOKEN.END_BLOCK && this._previous_flags.mode === MODE.BlockStatement) ||
	        this._options.brace_style === "expand" ||
	        this._options.brace_style === "end-expand" ||
	        (this._options.brace_style === "none" && current_token.newlines)) &&
	      !this._flags.inline_frame) {
	      this.print_newline();
	    } else {
	      this._output.trim(true);
	      var line = this._output.current_line;
	      // If we trimmed and there's something other than a close block before us
	      // put a newline back in.  Handles '} // comment' scenario.
	      if (line.last() !== '}') {
	        this.print_newline();
	      }
	      this._output.space_before_token = true;
	    }
	  } else if (prefix === 'NEWLINE') {
	    if (reserved_array(this._flags.last_token, special_words)) {
	      // no newline between 'return nnn'
	      this._output.space_before_token = true;
	    } else if (this._flags.last_token.text === 'declare' && reserved_array(current_token, ['var', 'let', 'const'])) {
	      // accomodates Typescript declare formatting
	      this._output.space_before_token = true;
	    } else if (this._flags.last_token.type !== TOKEN.END_EXPR) {
	      if ((this._flags.last_token.type !== TOKEN.START_EXPR || !reserved_array(current_token, ['var', 'let', 'const'])) && this._flags.last_token.text !== ':') {
	        // no need to force newline on 'var': for (var x = 0...)
	        if (reserved_word(current_token, 'if') && reserved_word(current_token.previous, 'else')) {
	          // no newline for } else if {
	          this._output.space_before_token = true;
	        } else {
	          this.print_newline();
	        }
	      }
	    } else if (reserved_array(current_token, line_starters) && this._flags.last_token.text !== ')') {
	      this.print_newline();
	    }
	  } else if (this._flags.multiline_frame && is_array(this._flags.mode) && this._flags.last_token.text === ',' && this._last_last_text === '}') {
	    this.print_newline(); // }, in lists get a newline treatment
	  } else if (prefix === 'SPACE') {
	    this._output.space_before_token = true;
	  }
	  if (current_token.previous && (current_token.previous.type === TOKEN.WORD || current_token.previous.type === TOKEN.RESERVED)) {
	    this._output.space_before_token = true;
	  }
	  this.print_token(current_token);
	  this._flags.last_word = current_token.text;

	  if (current_token.type === TOKEN.RESERVED) {
	    if (current_token.text === 'do') {
	      this._flags.do_block = true;
	    } else if (current_token.text === 'if') {
	      this._flags.if_block = true;
	    } else if (current_token.text === 'import') {
	      this._flags.import_block = true;
	    } else if (this._flags.import_block && reserved_word(current_token, 'from')) {
	      this._flags.import_block = false;
	    }
	  }
	};

	Beautifier.prototype.handle_semicolon = function(current_token) {
	  if (this.start_of_statement(current_token)) {
	    // The conditional starts the statement if appropriate.
	    // Semicolon can be the start (and end) of a statement
	    this._output.space_before_token = false;
	  } else {
	    this.handle_whitespace_and_comments(current_token);
	  }

	  var next_token = this._tokens.peek();
	  while (this._flags.mode === MODE.Statement &&
	    !(this._flags.if_block && reserved_word(next_token, 'else')) &&
	    !this._flags.do_block) {
	    this.restore_mode();
	  }

	  // hacky but effective for the moment
	  if (this._flags.import_block) {
	    this._flags.import_block = false;
	  }
	  this.print_token(current_token);
	};

	Beautifier.prototype.handle_string = function(current_token) {
	  if (current_token.text.startsWith("`") && current_token.newlines === 0 && current_token.whitespace_before === '' && (current_token.previous.text === ')' || this._flags.last_token.type === TOKEN.WORD)) ; else if (this.start_of_statement(current_token)) {
	    // The conditional starts the statement if appropriate.
	    // One difference - strings want at least a space before
	    this._output.space_before_token = true;
	  } else {
	    this.handle_whitespace_and_comments(current_token);
	    if (this._flags.last_token.type === TOKEN.RESERVED || this._flags.last_token.type === TOKEN.WORD || this._flags.inline_frame) {
	      this._output.space_before_token = true;
	    } else if (this._flags.last_token.type === TOKEN.COMMA || this._flags.last_token.type === TOKEN.START_EXPR || this._flags.last_token.type === TOKEN.EQUALS || this._flags.last_token.type === TOKEN.OPERATOR) {
	      if (!this.start_of_object_property()) {
	        this.allow_wrap_or_preserved_newline(current_token);
	      }
	    } else if ((current_token.text.startsWith("`") && this._flags.last_token.type === TOKEN.END_EXPR && (current_token.previous.text === ']' || current_token.previous.text === ')') && current_token.newlines === 0)) {
	      this._output.space_before_token = true;
	    } else {
	      this.print_newline();
	    }
	  }
	  this.print_token(current_token);
	};

	Beautifier.prototype.handle_equals = function(current_token) {
	  if (this.start_of_statement(current_token)) ; else {
	    this.handle_whitespace_and_comments(current_token);
	  }

	  if (this._flags.declaration_statement) {
	    // just got an '=' in a var-line, different formatting/line-breaking, etc will now be done
	    this._flags.declaration_assignment = true;
	  }
	  this._output.space_before_token = true;
	  this.print_token(current_token);
	  this._output.space_before_token = true;
	};

	Beautifier.prototype.handle_comma = function(current_token) {
	  this.handle_whitespace_and_comments(current_token, true);

	  this.print_token(current_token);
	  this._output.space_before_token = true;
	  if (this._flags.declaration_statement) {
	    if (is_expression(this._flags.parent.mode)) {
	      // do not break on comma, for(var a = 1, b = 2)
	      this._flags.declaration_assignment = false;
	    }

	    if (this._flags.declaration_assignment) {
	      this._flags.declaration_assignment = false;
	      this.print_newline(false, true);
	    } else if (this._options.comma_first) {
	      // for comma-first, we want to allow a newline before the comma
	      // to turn into a newline after the comma, which we will fixup later
	      this.allow_wrap_or_preserved_newline(current_token);
	    }
	  } else if (this._flags.mode === MODE.ObjectLiteral ||
	    (this._flags.mode === MODE.Statement && this._flags.parent.mode === MODE.ObjectLiteral)) {
	    if (this._flags.mode === MODE.Statement) {
	      this.restore_mode();
	    }

	    if (!this._flags.inline_frame) {
	      this.print_newline();
	    }
	  } else if (this._options.comma_first) {
	    // EXPR or DO_BLOCK
	    // for comma-first, we want to allow a newline before the comma
	    // to turn into a newline after the comma, which we will fixup later
	    this.allow_wrap_or_preserved_newline(current_token);
	  }
	};

	Beautifier.prototype.handle_operator = function(current_token) {
	  var isGeneratorAsterisk = current_token.text === '*' &&
	    (reserved_array(this._flags.last_token, ['function', 'yield']) ||
	      (in_array(this._flags.last_token.type, [TOKEN.START_BLOCK, TOKEN.COMMA, TOKEN.END_BLOCK, TOKEN.SEMICOLON]))
	    );
	  var isUnary = in_array(current_token.text, ['-', '+']) && (
	    in_array(this._flags.last_token.type, [TOKEN.START_BLOCK, TOKEN.START_EXPR, TOKEN.EQUALS, TOKEN.OPERATOR]) ||
	    in_array(this._flags.last_token.text, line_starters) ||
	    this._flags.last_token.text === ','
	  );

	  if (this.start_of_statement(current_token)) ; else {
	    var preserve_statement_flags = !isGeneratorAsterisk;
	    this.handle_whitespace_and_comments(current_token, preserve_statement_flags);
	  }

	  // hack for actionscript's import .*;
	  if (current_token.text === '*' && this._flags.last_token.type === TOKEN.DOT) {
	    this.print_token(current_token);
	    return;
	  }

	  if (current_token.text === '::') {
	    // no spaces around exotic namespacing syntax operator
	    this.print_token(current_token);
	    return;
	  }

	  if (in_array(current_token.text, ['-', '+']) && this.start_of_object_property()) {
	    // numeric value with +/- symbol in front as a property
	    this.print_token(current_token);
	    return;
	  }

	  // Allow line wrapping between operators when operator_position is
	  //   set to before or preserve
	  if (this._flags.last_token.type === TOKEN.OPERATOR && in_array(this._options.operator_position, OPERATOR_POSITION_BEFORE_OR_PRESERVE)) {
	    this.allow_wrap_or_preserved_newline(current_token);
	  }

	  if (current_token.text === ':' && this._flags.in_case) {
	    this.print_token(current_token);

	    this._flags.in_case = false;
	    this._flags.case_body = true;
	    if (this._tokens.peek().type !== TOKEN.START_BLOCK) {
	      this.indent();
	      this.print_newline();
	      this._flags.case_block = false;
	    } else {
	      this._flags.case_block = true;
	      this._output.space_before_token = true;
	    }
	    return;
	  }

	  var space_before = true;
	  var space_after = true;
	  var in_ternary = false;
	  if (current_token.text === ':') {
	    if (this._flags.ternary_depth === 0) {
	      // Colon is invalid javascript outside of ternary and object, but do our best to guess what was meant.
	      space_before = false;
	    } else {
	      this._flags.ternary_depth -= 1;
	      in_ternary = true;
	    }
	  } else if (current_token.text === '?') {
	    this._flags.ternary_depth += 1;
	  }

	  // let's handle the operator_position option prior to any conflicting logic
	  if (!isUnary && !isGeneratorAsterisk && this._options.preserve_newlines && in_array(current_token.text, positionable_operators)) {
	    var isColon = current_token.text === ':';
	    var isTernaryColon = (isColon && in_ternary);
	    var isOtherColon = (isColon && !in_ternary);

	    switch (this._options.operator_position) {
	      case OPERATOR_POSITION.before_newline:
	        // if the current token is : and it's not a ternary statement then we set space_before to false
	        this._output.space_before_token = !isOtherColon;

	        this.print_token(current_token);

	        if (!isColon || isTernaryColon) {
	          this.allow_wrap_or_preserved_newline(current_token);
	        }

	        this._output.space_before_token = true;
	        return;

	      case OPERATOR_POSITION.after_newline:
	        // if the current token is anything but colon, or (via deduction) it's a colon and in a ternary statement,
	        //   then print a newline.

	        this._output.space_before_token = true;

	        if (!isColon || isTernaryColon) {
	          if (this._tokens.peek().newlines) {
	            this.print_newline(false, true);
	          } else {
	            this.allow_wrap_or_preserved_newline(current_token);
	          }
	        } else {
	          this._output.space_before_token = false;
	        }

	        this.print_token(current_token);

	        this._output.space_before_token = true;
	        return;

	      case OPERATOR_POSITION.preserve_newline:
	        if (!isOtherColon) {
	          this.allow_wrap_or_preserved_newline(current_token);
	        }

	        // if we just added a newline, or the current token is : and it's not a ternary statement,
	        //   then we set space_before to false
	        space_before = !(this._output.just_added_newline() || isOtherColon);

	        this._output.space_before_token = space_before;
	        this.print_token(current_token);
	        this._output.space_before_token = true;
	        return;
	    }
	  }

	  if (isGeneratorAsterisk) {
	    this.allow_wrap_or_preserved_newline(current_token);
	    space_before = false;
	    var next_token = this._tokens.peek();
	    space_after = next_token && in_array(next_token.type, [TOKEN.WORD, TOKEN.RESERVED]);
	  } else if (current_token.text === '...') {
	    this.allow_wrap_or_preserved_newline(current_token);
	    space_before = this._flags.last_token.type === TOKEN.START_BLOCK;
	    space_after = false;
	  } else if (in_array(current_token.text, ['--', '++', '!', '~']) || isUnary) {
	    // unary operators (and binary +/- pretending to be unary) special cases
	    if (this._flags.last_token.type === TOKEN.COMMA || this._flags.last_token.type === TOKEN.START_EXPR) {
	      this.allow_wrap_or_preserved_newline(current_token);
	    }

	    space_before = false;
	    space_after = false;

	    // http://www.ecma-international.org/ecma-262/5.1/#sec-7.9.1
	    // if there is a newline between -- or ++ and anything else we should preserve it.
	    if (current_token.newlines && (current_token.text === '--' || current_token.text === '++' || current_token.text === '~')) {
	      var new_line_needed = reserved_array(this._flags.last_token, special_words) && current_token.newlines;
	      if (new_line_needed && (this._previous_flags.if_block || this._previous_flags.else_block)) {
	        this.restore_mode();
	      }
	      this.print_newline(new_line_needed, true);
	    }

	    if (this._flags.last_token.text === ';' && is_expression(this._flags.mode)) {
	      // for (;; ++i)
	      //        ^^^
	      space_before = true;
	    }

	    if (this._flags.last_token.type === TOKEN.RESERVED) {
	      space_before = true;
	    } else if (this._flags.last_token.type === TOKEN.END_EXPR) {
	      space_before = !(this._flags.last_token.text === ']' && (current_token.text === '--' || current_token.text === '++'));
	    } else if (this._flags.last_token.type === TOKEN.OPERATOR) {
	      // a++ + ++b;
	      // a - -b
	      space_before = in_array(current_token.text, ['--', '-', '++', '+']) && in_array(this._flags.last_token.text, ['--', '-', '++', '+']);
	      // + and - are not unary when preceeded by -- or ++ operator
	      // a-- + b
	      // a * +b
	      // a - -b
	      if (in_array(current_token.text, ['+', '-']) && in_array(this._flags.last_token.text, ['--', '++'])) {
	        space_after = true;
	      }
	    }


	    if (((this._flags.mode === MODE.BlockStatement && !this._flags.inline_frame) || this._flags.mode === MODE.Statement) &&
	      (this._flags.last_token.text === '{' || this._flags.last_token.text === ';')) {
	      // { foo; --i }
	      // foo(); --bar;
	      this.print_newline();
	    }
	  }

	  this._output.space_before_token = this._output.space_before_token || space_before;
	  this.print_token(current_token);
	  this._output.space_before_token = space_after;
	};

	Beautifier.prototype.handle_block_comment = function(current_token, preserve_statement_flags) {
	  if (this._output.raw) {
	    this._output.add_raw_token(current_token);
	    if (current_token.directives && current_token.directives.preserve === 'end') {
	      // If we're testing the raw output behavior, do not allow a directive to turn it off.
	      this._output.raw = this._options.test_output_raw;
	    }
	    return;
	  }

	  if (current_token.directives) {
	    this.print_newline(false, preserve_statement_flags);
	    this.print_token(current_token);
	    if (current_token.directives.preserve === 'start') {
	      this._output.raw = true;
	    }
	    this.print_newline(false, true);
	    return;
	  }

	  // inline block
	  if (!acorn.newline.test(current_token.text) && !current_token.newlines) {
	    this._output.space_before_token = true;
	    this.print_token(current_token);
	    this._output.space_before_token = true;
	    return;
	  } else {
	    this.print_block_commment(current_token, preserve_statement_flags);
	  }
	};

	Beautifier.prototype.print_block_commment = function(current_token, preserve_statement_flags) {
	  var lines = split_linebreaks(current_token.text);
	  var j; // iterator for this case
	  var javadoc = false;
	  var starless = false;
	  var lastIndent = current_token.whitespace_before;
	  var lastIndentLength = lastIndent.length;

	  // block comment starts with a new line
	  this.print_newline(false, preserve_statement_flags);

	  // first line always indented
	  this.print_token_line_indentation(current_token);
	  this._output.add_token(lines[0]);
	  this.print_newline(false, preserve_statement_flags);


	  if (lines.length > 1) {
	    lines = lines.slice(1);
	    javadoc = all_lines_start_with(lines, '*');
	    starless = each_line_matches_indent(lines, lastIndent);

	    if (javadoc) {
	      this._flags.alignment = 1;
	    }

	    for (j = 0; j < lines.length; j++) {
	      if (javadoc) {
	        // javadoc: reformat and re-indent
	        this.print_token_line_indentation(current_token);
	        this._output.add_token(ltrim(lines[j]));
	      } else if (starless && lines[j]) {
	        // starless: re-indent non-empty content, avoiding trim
	        this.print_token_line_indentation(current_token);
	        this._output.add_token(lines[j].substring(lastIndentLength));
	      } else {
	        // normal comments output raw
	        this._output.current_line.set_indent(-1);
	        this._output.add_token(lines[j]);
	      }

	      // for comments on their own line or  more than one line, make sure there's a new line after
	      this.print_newline(false, preserve_statement_flags);
	    }

	    this._flags.alignment = 0;
	  }
	};


	Beautifier.prototype.handle_comment = function(current_token, preserve_statement_flags) {
	  if (current_token.newlines) {
	    this.print_newline(false, preserve_statement_flags);
	  } else {
	    this._output.trim(true);
	  }

	  this._output.space_before_token = true;
	  this.print_token(current_token);
	  this.print_newline(false, preserve_statement_flags);
	};

	Beautifier.prototype.handle_dot = function(current_token) {
	  if (this.start_of_statement(current_token)) ; else {
	    this.handle_whitespace_and_comments(current_token, true);
	  }

	  if (this._flags.last_token.text.match('^[0-9]+$')) {
	    this._output.space_before_token = true;
	  }

	  if (reserved_array(this._flags.last_token, special_words)) {
	    this._output.space_before_token = false;
	  } else {
	    // allow preserved newlines before dots in general
	    // force newlines on dots after close paren when break_chained - for bar().baz()
	    this.allow_wrap_or_preserved_newline(current_token,
	      this._flags.last_token.text === ')' && this._options.break_chained_methods);
	  }

	  // Only unindent chained method dot if this dot starts a new line.
	  // Otherwise the automatic extra indentation removal will handle the over indent
	  if (this._options.unindent_chained_methods && this._output.just_added_newline()) {
	    this.deindent();
	  }

	  this.print_token(current_token);
	};

	Beautifier.prototype.handle_unknown = function(current_token, preserve_statement_flags) {
	  this.print_token(current_token);

	  if (current_token.text[current_token.text.length - 1] === '\n') {
	    this.print_newline(false, preserve_statement_flags);
	  }
	};

	Beautifier.prototype.handle_eof = function(current_token) {
	  // Unwind any open statements
	  while (this._flags.mode === MODE.Statement) {
	    this.restore_mode();
	  }
	  this.handle_whitespace_and_comments(current_token);
	};

	beautifier$2.Beautifier = Beautifier;
	return beautifier$2;
}

/*jshint node:true */

var hasRequiredJavascript;

function requireJavascript () {
	if (hasRequiredJavascript) return javascript.exports;
	hasRequiredJavascript = 1;

	var Beautifier = requireBeautifier$2().Beautifier,
	  Options = requireOptions$2().Options;

	function js_beautify(js_source_text, options) {
	  var beautifier = new Beautifier(js_source_text, options);
	  return beautifier.beautify();
	}

	javascript.exports = js_beautify;
	javascript.exports.defaultOptions = function() {
	  return new Options();
	};
	return javascript.exports;
}

var css = {exports: {}};

var beautifier$1 = {};

var options$1 = {};

/*jshint node:true */

var hasRequiredOptions$1;

function requireOptions$1 () {
	if (hasRequiredOptions$1) return options$1;
	hasRequiredOptions$1 = 1;

	var BaseOptions = requireOptions$3().Options;

	function Options(options) {
	  BaseOptions.call(this, options, 'css');

	  this.selector_separator_newline = this._get_boolean('selector_separator_newline', true);
	  this.newline_between_rules = this._get_boolean('newline_between_rules', true);
	  var space_around_selector_separator = this._get_boolean('space_around_selector_separator');
	  this.space_around_combinator = this._get_boolean('space_around_combinator') || space_around_selector_separator;

	  var brace_style_split = this._get_selection_list('brace_style', ['collapse', 'expand', 'end-expand', 'none', 'preserve-inline']);
	  this.brace_style = 'collapse';
	  for (var bs = 0; bs < brace_style_split.length; bs++) {
	    if (brace_style_split[bs] !== 'expand') {
	      // default to collapse, as only collapse|expand is implemented for now
	      this.brace_style = 'collapse';
	    } else {
	      this.brace_style = brace_style_split[bs];
	    }
	  }
	}
	Options.prototype = new BaseOptions();



	options$1.Options = Options;
	return options$1;
}

/*jshint node:true */

var hasRequiredBeautifier$1;

function requireBeautifier$1 () {
	if (hasRequiredBeautifier$1) return beautifier$1;
	hasRequiredBeautifier$1 = 1;

	var Options = requireOptions$1().Options;
	var Output = requireOutput().Output;
	var InputScanner = requireInputscanner().InputScanner;
	var Directives = requireDirectives().Directives;

	var directives_core = new Directives(/\/\*/, /\*\//);

	var lineBreak = /\r\n|[\r\n]/;
	var allLineBreaks = /\r\n|[\r\n]/g;

	// tokenizer
	var whitespaceChar = /\s/;
	var whitespacePattern = /(?:\s|\n)+/g;
	var block_comment_pattern = /\/\*(?:[\s\S]*?)((?:\*\/)|$)/g;
	var comment_pattern = /\/\/(?:[^\n\r\u2028\u2029]*)/g;

	function Beautifier(source_text, options) {
	  this._source_text = source_text || '';
	  // Allow the setting of language/file-type specific options
	  // with inheritance of overall settings
	  this._options = new Options(options);
	  this._ch = null;
	  this._input = null;

	  // https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule
	  this.NESTED_AT_RULE = {
	    "page": true,
	    "font-face": true,
	    "keyframes": true,
	    // also in CONDITIONAL_GROUP_RULE below
	    "media": true,
	    "supports": true,
	    "document": true
	  };
	  this.CONDITIONAL_GROUP_RULE = {
	    "media": true,
	    "supports": true,
	    "document": true
	  };
	  this.NON_SEMICOLON_NEWLINE_PROPERTY = [
	    "grid-template-areas",
	    "grid-template"
	  ];

	}

	Beautifier.prototype.eatString = function(endChars) {
	  var result = '';
	  this._ch = this._input.next();
	  while (this._ch) {
	    result += this._ch;
	    if (this._ch === "\\") {
	      result += this._input.next();
	    } else if (endChars.indexOf(this._ch) !== -1 || this._ch === "\n") {
	      break;
	    }
	    this._ch = this._input.next();
	  }
	  return result;
	};

	// Skips any white space in the source text from the current position.
	// When allowAtLeastOneNewLine is true, will output new lines for each
	// newline character found; if the user has preserve_newlines off, only
	// the first newline will be output
	Beautifier.prototype.eatWhitespace = function(allowAtLeastOneNewLine) {
	  var result = whitespaceChar.test(this._input.peek());
	  var newline_count = 0;
	  while (whitespaceChar.test(this._input.peek())) {
	    this._ch = this._input.next();
	    if (allowAtLeastOneNewLine && this._ch === '\n') {
	      if (newline_count === 0 || newline_count < this._options.max_preserve_newlines) {
	        newline_count++;
	        this._output.add_new_line(true);
	      }
	    }
	  }
	  return result;
	};

	// Nested pseudo-class if we are insideRule
	// and the next special character found opens
	// a new block
	Beautifier.prototype.foundNestedPseudoClass = function() {
	  var openParen = 0;
	  var i = 1;
	  var ch = this._input.peek(i);
	  while (ch) {
	    if (ch === "{") {
	      return true;
	    } else if (ch === '(') {
	      // pseudoclasses can contain ()
	      openParen += 1;
	    } else if (ch === ')') {
	      if (openParen === 0) {
	        return false;
	      }
	      openParen -= 1;
	    } else if (ch === ";" || ch === "}") {
	      return false;
	    }
	    i++;
	    ch = this._input.peek(i);
	  }
	  return false;
	};

	Beautifier.prototype.print_string = function(output_string) {
	  this._output.set_indent(this._indentLevel);
	  this._output.non_breaking_space = true;
	  this._output.add_token(output_string);
	};

	Beautifier.prototype.preserveSingleSpace = function(isAfterSpace) {
	  if (isAfterSpace) {
	    this._output.space_before_token = true;
	  }
	};

	Beautifier.prototype.indent = function() {
	  this._indentLevel++;
	};

	Beautifier.prototype.outdent = function() {
	  if (this._indentLevel > 0) {
	    this._indentLevel--;
	  }
	};

	/*_____________________--------------------_____________________*/

	Beautifier.prototype.beautify = function() {
	  if (this._options.disabled) {
	    return this._source_text;
	  }

	  var source_text = this._source_text;
	  var eol = this._options.eol;
	  if (eol === 'auto') {
	    eol = '\n';
	    if (source_text && lineBreak.test(source_text || '')) {
	      eol = source_text.match(lineBreak)[0];
	    }
	  }


	  // HACK: newline parsing inconsistent. This brute force normalizes the this._input.
	  source_text = source_text.replace(allLineBreaks, '\n');

	  // reset
	  var baseIndentString = source_text.match(/^[\t ]*/)[0];

	  this._output = new Output(this._options, baseIndentString);
	  this._input = new InputScanner(source_text);
	  this._indentLevel = 0;
	  this._nestedLevel = 0;

	  this._ch = null;
	  var parenLevel = 0;

	  var insideRule = false;
	  // This is the value side of a property value pair (blue in the following ex)
	  // label { content: blue }
	  var insidePropertyValue = false;
	  var enteringConditionalGroup = false;
	  var insideNonNestedAtRule = false;
	  var insideScssMap = false;
	  var topCharacter = this._ch;
	  var insideNonSemiColonValues = false;
	  var whitespace;
	  var isAfterSpace;
	  var previous_ch;

	  while (true) {
	    whitespace = this._input.read(whitespacePattern);
	    isAfterSpace = whitespace !== '';
	    previous_ch = topCharacter;
	    this._ch = this._input.next();
	    if (this._ch === '\\' && this._input.hasNext()) {
	      this._ch += this._input.next();
	    }
	    topCharacter = this._ch;

	    if (!this._ch) {
	      break;
	    } else if (this._ch === '/' && this._input.peek() === '*') {
	      // /* css comment */
	      // Always start block comments on a new line.
	      // This handles scenarios where a block comment immediately
	      // follows a property definition on the same line or where
	      // minified code is being beautified.
	      this._output.add_new_line();
	      this._input.back();

	      var comment = this._input.read(block_comment_pattern);

	      // Handle ignore directive
	      var directives = directives_core.get_directives(comment);
	      if (directives && directives.ignore === 'start') {
	        comment += directives_core.readIgnored(this._input);
	      }

	      this.print_string(comment);

	      // Ensures any new lines following the comment are preserved
	      this.eatWhitespace(true);

	      // Block comments are followed by a new line so they don't
	      // share a line with other properties
	      this._output.add_new_line();
	    } else if (this._ch === '/' && this._input.peek() === '/') {
	      // // single line comment
	      // Preserves the space before a comment
	      // on the same line as a rule
	      this._output.space_before_token = true;
	      this._input.back();
	      this.print_string(this._input.read(comment_pattern));

	      // Ensures any new lines following the comment are preserved
	      this.eatWhitespace(true);
	    } else if (this._ch === '$') {
	      this.preserveSingleSpace(isAfterSpace);

	      this.print_string(this._ch);

	      // strip trailing space, if present, for hash property checks
	      var variable = this._input.peekUntilAfter(/[: ,;{}()[\]\/='"]/g);

	      if (variable.match(/[ :]$/)) {
	        // we have a variable or pseudo-class, add it and insert one space before continuing
	        variable = this.eatString(": ").replace(/\s+$/, '');
	        this.print_string(variable);
	        this._output.space_before_token = true;
	      }

	      // might be sass variable
	      if (parenLevel === 0 && variable.indexOf(':') !== -1) {
	        insidePropertyValue = true;
	        this.indent();
	      }
	    } else if (this._ch === '@') {
	      this.preserveSingleSpace(isAfterSpace);

	      // deal with less property mixins @{...}
	      if (this._input.peek() === '{') {
	        this.print_string(this._ch + this.eatString('}'));
	      } else {
	        this.print_string(this._ch);

	        // strip trailing space, if present, for hash property checks
	        var variableOrRule = this._input.peekUntilAfter(/[: ,;{}()[\]\/='"]/g);

	        if (variableOrRule.match(/[ :]$/)) {
	          // we have a variable or pseudo-class, add it and insert one space before continuing
	          variableOrRule = this.eatString(": ").replace(/\s+$/, '');
	          this.print_string(variableOrRule);
	          this._output.space_before_token = true;
	        }

	        // might be less variable
	        if (parenLevel === 0 && variableOrRule.indexOf(':') !== -1) {
	          insidePropertyValue = true;
	          this.indent();

	          // might be a nesting at-rule
	        } else if (variableOrRule in this.NESTED_AT_RULE) {
	          this._nestedLevel += 1;
	          if (variableOrRule in this.CONDITIONAL_GROUP_RULE) {
	            enteringConditionalGroup = true;
	          }

	          // might be a non-nested at-rule
	        } else if (parenLevel === 0 && !insidePropertyValue) {
	          insideNonNestedAtRule = true;
	        }
	      }
	    } else if (this._ch === '#' && this._input.peek() === '{') {
	      this.preserveSingleSpace(isAfterSpace);
	      this.print_string(this._ch + this.eatString('}'));
	    } else if (this._ch === '{') {
	      if (insidePropertyValue) {
	        insidePropertyValue = false;
	        this.outdent();
	      }

	      // non nested at rule becomes nested
	      insideNonNestedAtRule = false;

	      // when entering conditional groups, only rulesets are allowed
	      if (enteringConditionalGroup) {
	        enteringConditionalGroup = false;
	        insideRule = (this._indentLevel >= this._nestedLevel);
	      } else {
	        // otherwise, declarations are also allowed
	        insideRule = (this._indentLevel >= this._nestedLevel - 1);
	      }
	      if (this._options.newline_between_rules && insideRule) {
	        if (this._output.previous_line && this._output.previous_line.item(-1) !== '{') {
	          this._output.ensure_empty_line_above('/', ',');
	        }
	      }

	      this._output.space_before_token = true;

	      // The difference in print_string and indent order is necessary to indent the '{' correctly
	      if (this._options.brace_style === 'expand') {
	        this._output.add_new_line();
	        this.print_string(this._ch);
	        this.indent();
	        this._output.set_indent(this._indentLevel);
	      } else {
	        // inside mixin and first param is object
	        if (previous_ch === '(') {
	          this._output.space_before_token = false;
	        } else if (previous_ch !== ',') {
	          this.indent();
	        }
	        this.print_string(this._ch);
	      }

	      this.eatWhitespace(true);
	      this._output.add_new_line();
	    } else if (this._ch === '}') {
	      this.outdent();
	      this._output.add_new_line();
	      if (previous_ch === '{') {
	        this._output.trim(true);
	      }

	      if (insidePropertyValue) {
	        this.outdent();
	        insidePropertyValue = false;
	      }
	      this.print_string(this._ch);
	      insideRule = false;
	      if (this._nestedLevel) {
	        this._nestedLevel--;
	      }

	      this.eatWhitespace(true);
	      this._output.add_new_line();

	      if (this._options.newline_between_rules && !this._output.just_added_blankline()) {
	        if (this._input.peek() !== '}') {
	          this._output.add_new_line(true);
	        }
	      }
	      if (this._input.peek() === ')') {
	        this._output.trim(true);
	        if (this._options.brace_style === "expand") {
	          this._output.add_new_line(true);
	        }
	      }
	    } else if (this._ch === ":") {

	      for (var i = 0; i < this.NON_SEMICOLON_NEWLINE_PROPERTY.length; i++) {
	        if (this._input.lookBack(this.NON_SEMICOLON_NEWLINE_PROPERTY[i])) {
	          insideNonSemiColonValues = true;
	          break;
	        }
	      }

	      if ((insideRule || enteringConditionalGroup) && !(this._input.lookBack("&") || this.foundNestedPseudoClass()) && !this._input.lookBack("(") && !insideNonNestedAtRule && parenLevel === 0) {
	        // 'property: value' delimiter
	        // which could be in a conditional group query

	        this.print_string(':');
	        if (!insidePropertyValue) {
	          insidePropertyValue = true;
	          this._output.space_before_token = true;
	          this.eatWhitespace(true);
	          this.indent();
	        }
	      } else {
	        // sass/less parent reference don't use a space
	        // sass nested pseudo-class don't use a space

	        // preserve space before pseudoclasses/pseudoelements, as it means "in any child"
	        if (this._input.lookBack(" ")) {
	          this._output.space_before_token = true;
	        }
	        if (this._input.peek() === ":") {
	          // pseudo-element
	          this._ch = this._input.next();
	          this.print_string("::");
	        } else {
	          // pseudo-class
	          this.print_string(':');
	        }
	      }
	    } else if (this._ch === '"' || this._ch === '\'') {
	      var preserveQuoteSpace = previous_ch === '"' || previous_ch === '\'';
	      this.preserveSingleSpace(preserveQuoteSpace || isAfterSpace);
	      this.print_string(this._ch + this.eatString(this._ch));
	      this.eatWhitespace(true);
	    } else if (this._ch === ';') {
	      insideNonSemiColonValues = false;
	      if (parenLevel === 0) {
	        if (insidePropertyValue) {
	          this.outdent();
	          insidePropertyValue = false;
	        }
	        insideNonNestedAtRule = false;
	        this.print_string(this._ch);
	        this.eatWhitespace(true);

	        // This maintains single line comments on the same
	        // line. Block comments are also affected, but
	        // a new line is always output before one inside
	        // that section
	        if (this._input.peek() !== '/') {
	          this._output.add_new_line();
	        }
	      } else {
	        this.print_string(this._ch);
	        this.eatWhitespace(true);
	        this._output.space_before_token = true;
	      }
	    } else if (this._ch === '(') { // may be a url
	      if (this._input.lookBack("url")) {
	        this.print_string(this._ch);
	        this.eatWhitespace();
	        parenLevel++;
	        this.indent();
	        this._ch = this._input.next();
	        if (this._ch === ')' || this._ch === '"' || this._ch === '\'') {
	          this._input.back();
	        } else if (this._ch) {
	          this.print_string(this._ch + this.eatString(')'));
	          if (parenLevel) {
	            parenLevel--;
	            this.outdent();
	          }
	        }
	      } else {
	        var space_needed = false;
	        if (this._input.lookBack("with")) {
	          // look back is not an accurate solution, we need tokens to confirm without whitespaces
	          space_needed = true;
	        }
	        this.preserveSingleSpace(isAfterSpace || space_needed);
	        this.print_string(this._ch);

	        // handle scss/sass map
	        if (insidePropertyValue && previous_ch === "$" && this._options.selector_separator_newline) {
	          this._output.add_new_line();
	          insideScssMap = true;
	        } else {
	          this.eatWhitespace();
	          parenLevel++;
	          this.indent();
	        }
	      }
	    } else if (this._ch === ')') {
	      if (parenLevel) {
	        parenLevel--;
	        this.outdent();
	      }
	      if (insideScssMap && this._input.peek() === ";" && this._options.selector_separator_newline) {
	        insideScssMap = false;
	        this.outdent();
	        this._output.add_new_line();
	      }
	      this.print_string(this._ch);
	    } else if (this._ch === ',') {
	      this.print_string(this._ch);
	      this.eatWhitespace(true);
	      if (this._options.selector_separator_newline && (!insidePropertyValue || insideScssMap) && parenLevel === 0 && !insideNonNestedAtRule) {
	        this._output.add_new_line();
	      } else {
	        this._output.space_before_token = true;
	      }
	    } else if ((this._ch === '>' || this._ch === '+' || this._ch === '~') && !insidePropertyValue && parenLevel === 0) {
	      //handle combinator spacing
	      if (this._options.space_around_combinator) {
	        this._output.space_before_token = true;
	        this.print_string(this._ch);
	        this._output.space_before_token = true;
	      } else {
	        this.print_string(this._ch);
	        this.eatWhitespace();
	        // squash extra whitespace
	        if (this._ch && whitespaceChar.test(this._ch)) {
	          this._ch = '';
	        }
	      }
	    } else if (this._ch === ']') {
	      this.print_string(this._ch);
	    } else if (this._ch === '[') {
	      this.preserveSingleSpace(isAfterSpace);
	      this.print_string(this._ch);
	    } else if (this._ch === '=') { // no whitespace before or after
	      this.eatWhitespace();
	      this.print_string('=');
	      if (whitespaceChar.test(this._ch)) {
	        this._ch = '';
	      }
	    } else if (this._ch === '!' && !this._input.lookBack("\\")) { // !important
	      this._output.space_before_token = true;
	      this.print_string(this._ch);
	    } else {
	      var preserveAfterSpace = previous_ch === '"' || previous_ch === '\'';
	      this.preserveSingleSpace(preserveAfterSpace || isAfterSpace);
	      this.print_string(this._ch);

	      if (!this._output.just_added_newline() && this._input.peek() === '\n' && insideNonSemiColonValues) {
	        this._output.add_new_line();
	      }
	    }
	  }

	  var sweetCode = this._output.get_code(eol);

	  return sweetCode;
	};

	beautifier$1.Beautifier = Beautifier;
	return beautifier$1;
}

/*jshint node:true */

var hasRequiredCss;

function requireCss () {
	if (hasRequiredCss) return css.exports;
	hasRequiredCss = 1;

	var Beautifier = requireBeautifier$1().Beautifier,
	  Options = requireOptions$1().Options;

	function css_beautify(source_text, options) {
	  var beautifier = new Beautifier(source_text, options);
	  return beautifier.beautify();
	}

	css.exports = css_beautify;
	css.exports.defaultOptions = function() {
	  return new Options();
	};
	return css.exports;
}

var html = {exports: {}};

var beautifier = {};

var options = {};

/*jshint node:true */

var hasRequiredOptions;

function requireOptions () {
	if (hasRequiredOptions) return options;
	hasRequiredOptions = 1;

	var BaseOptions = requireOptions$3().Options;

	function Options(options) {
	  BaseOptions.call(this, options, 'html');
	  if (this.templating.length === 1 && this.templating[0] === 'auto') {
	    this.templating = ['django', 'erb', 'handlebars', 'php'];
	  }

	  this.indent_inner_html = this._get_boolean('indent_inner_html');
	  this.indent_body_inner_html = this._get_boolean('indent_body_inner_html', true);
	  this.indent_head_inner_html = this._get_boolean('indent_head_inner_html', true);

	  this.indent_handlebars = this._get_boolean('indent_handlebars', true);
	  this.wrap_attributes = this._get_selection('wrap_attributes',
	    ['auto', 'force', 'force-aligned', 'force-expand-multiline', 'aligned-multiple', 'preserve', 'preserve-aligned']);
	  this.wrap_attributes_min_attrs = this._get_number('wrap_attributes_min_attrs', 2);
	  this.wrap_attributes_indent_size = this._get_number('wrap_attributes_indent_size', this.indent_size);
	  this.extra_liners = this._get_array('extra_liners', ['head', 'body', '/html']);

	  // Block vs inline elements
	  // https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements
	  // https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements
	  // https://www.w3.org/TR/html5/dom.html#phrasing-content
	  this.inline = this._get_array('inline', [
	    'a', 'abbr', 'area', 'audio', 'b', 'bdi', 'bdo', 'br', 'button', 'canvas', 'cite',
	    'code', 'data', 'datalist', 'del', 'dfn', 'em', 'embed', 'i', 'iframe', 'img',
	    'input', 'ins', 'kbd', 'keygen', 'label', 'map', 'mark', 'math', 'meter', 'noscript',
	    'object', 'output', 'progress', 'q', 'ruby', 's', 'samp', /* 'script', */ 'select', 'small',
	    'span', 'strong', 'sub', 'sup', 'svg', 'template', 'textarea', 'time', 'u', 'var',
	    'video', 'wbr', 'text',
	    // obsolete inline tags
	    'acronym', 'big', 'strike', 'tt'
	  ]);
	  this.inline_custom_elements = this._get_boolean('inline_custom_elements', true);
	  this.void_elements = this._get_array('void_elements', [
	    // HTLM void elements - aka self-closing tags - aka singletons
	    // https://www.w3.org/html/wg/drafts/html/master/syntax.html#void-elements
	    'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'keygen',
	    'link', 'menuitem', 'meta', 'param', 'source', 'track', 'wbr',
	    // NOTE: Optional tags are too complex for a simple list
	    // they are hard coded in _do_optional_end_element

	    // Doctype and xml elements
	    '!doctype', '?xml',

	    // obsolete tags
	    // basefont: https://www.computerhope.com/jargon/h/html-basefont-tag.htm
	    // isndex: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/isindex
	    'basefont', 'isindex'
	  ]);
	  this.unformatted = this._get_array('unformatted', []);
	  this.content_unformatted = this._get_array('content_unformatted', [
	    'pre', 'textarea'
	  ]);
	  this.unformatted_content_delimiter = this._get_characters('unformatted_content_delimiter');
	  this.indent_scripts = this._get_selection('indent_scripts', ['normal', 'keep', 'separate']);

	}
	Options.prototype = new BaseOptions();



	options.Options = Options;
	return options;
}

var tokenizer = {};

/*jshint node:true */

var hasRequiredTokenizer;

function requireTokenizer () {
	if (hasRequiredTokenizer) return tokenizer;
	hasRequiredTokenizer = 1;

	var BaseTokenizer = requireTokenizer$2().Tokenizer;
	var BASETOKEN = requireTokenizer$2().TOKEN;
	var Directives = requireDirectives().Directives;
	var TemplatablePattern = requireTemplatablepattern().TemplatablePattern;
	var Pattern = requirePattern().Pattern;

	var TOKEN = {
	  TAG_OPEN: 'TK_TAG_OPEN',
	  TAG_CLOSE: 'TK_TAG_CLOSE',
	  CONTROL_FLOW_OPEN: 'TK_CONTROL_FLOW_OPEN',
	  CONTROL_FLOW_CLOSE: 'TK_CONTROL_FLOW_CLOSE',
	  ATTRIBUTE: 'TK_ATTRIBUTE',
	  EQUALS: 'TK_EQUALS',
	  VALUE: 'TK_VALUE',
	  COMMENT: 'TK_COMMENT',
	  TEXT: 'TK_TEXT',
	  UNKNOWN: 'TK_UNKNOWN',
	  START: BASETOKEN.START,
	  RAW: BASETOKEN.RAW,
	  EOF: BASETOKEN.EOF
	};

	var directives_core = new Directives(/<\!--/, /-->/);

	var Tokenizer = function(input_string, options) {
	  BaseTokenizer.call(this, input_string, options);
	  this._current_tag_name = '';

	  // Words end at whitespace or when a tag starts
	  // if we are indenting handlebars, they are considered tags
	  var templatable_reader = new TemplatablePattern(this._input).read_options(this._options);
	  var pattern_reader = new Pattern(this._input);

	  this.__patterns = {
	    word: templatable_reader.until(/[\n\r\t <]/),
	    word_control_flow_close_excluded: templatable_reader.until(/[\n\r\t <}]/),
	    single_quote: templatable_reader.until_after(/'/),
	    double_quote: templatable_reader.until_after(/"/),
	    attribute: templatable_reader.until(/[\n\r\t =>]|\/>/),
	    element_name: templatable_reader.until(/[\n\r\t >\/]/),

	    angular_control_flow_start: pattern_reader.matching(/\@[a-zA-Z]+[^({]*[({]/),
	    handlebars_comment: pattern_reader.starting_with(/{{!--/).until_after(/--}}/),
	    handlebars: pattern_reader.starting_with(/{{/).until_after(/}}/),
	    handlebars_open: pattern_reader.until(/[\n\r\t }]/),
	    handlebars_raw_close: pattern_reader.until(/}}/),
	    comment: pattern_reader.starting_with(/<!--/).until_after(/-->/),
	    cdata: pattern_reader.starting_with(/<!\[CDATA\[/).until_after(/]]>/),
	    // https://en.wikipedia.org/wiki/Conditional_comment
	    conditional_comment: pattern_reader.starting_with(/<!\[/).until_after(/]>/),
	    processing: pattern_reader.starting_with(/<\?/).until_after(/\?>/)
	  };

	  if (this._options.indent_handlebars) {
	    this.__patterns.word = this.__patterns.word.exclude('handlebars');
	    this.__patterns.word_control_flow_close_excluded = this.__patterns.word_control_flow_close_excluded.exclude('handlebars');
	  }

	  this._unformatted_content_delimiter = null;

	  if (this._options.unformatted_content_delimiter) {
	    var literal_regexp = this._input.get_literal_regexp(this._options.unformatted_content_delimiter);
	    this.__patterns.unformatted_content_delimiter =
	      pattern_reader.matching(literal_regexp)
	      .until_after(literal_regexp);
	  }
	};
	Tokenizer.prototype = new BaseTokenizer();

	Tokenizer.prototype._is_comment = function(current_token) { // jshint unused:false
	  return false; //current_token.type === TOKEN.COMMENT || current_token.type === TOKEN.UNKNOWN;
	};

	Tokenizer.prototype._is_opening = function(current_token) {
	  return current_token.type === TOKEN.TAG_OPEN || current_token.type === TOKEN.CONTROL_FLOW_OPEN;
	};

	Tokenizer.prototype._is_closing = function(current_token, open_token) {
	  return (current_token.type === TOKEN.TAG_CLOSE &&
	    (open_token && (
	      ((current_token.text === '>' || current_token.text === '/>') && open_token.text[0] === '<') ||
	      (current_token.text === '}}' && open_token.text[0] === '{' && open_token.text[1] === '{')))
	  ) || (current_token.type === TOKEN.CONTROL_FLOW_CLOSE &&
	    (current_token.text === '}' && open_token.text.endsWith('{')));
	};

	Tokenizer.prototype._reset = function() {
	  this._current_tag_name = '';
	};

	Tokenizer.prototype._get_next_token = function(previous_token, open_token) { // jshint unused:false
	  var token = null;
	  this._readWhitespace();
	  var c = this._input.peek();

	  if (c === null) {
	    return this._create_token(TOKEN.EOF, '');
	  }

	  token = token || this._read_open_handlebars(c, open_token);
	  token = token || this._read_attribute(c, previous_token, open_token);
	  token = token || this._read_close(c, open_token);
	  token = token || this._read_control_flows(c, open_token);
	  token = token || this._read_raw_content(c, previous_token, open_token);
	  token = token || this._read_content_word(c, open_token);
	  token = token || this._read_comment_or_cdata(c);
	  token = token || this._read_processing(c);
	  token = token || this._read_open(c, open_token);
	  token = token || this._create_token(TOKEN.UNKNOWN, this._input.next());

	  return token;
	};

	Tokenizer.prototype._read_comment_or_cdata = function(c) { // jshint unused:false
	  var token = null;
	  var resulting_string = null;
	  var directives = null;

	  if (c === '<') {
	    var peek1 = this._input.peek(1);
	    // We treat all comments as literals, even more than preformatted tags
	    // we only look for the appropriate closing marker
	    if (peek1 === '!') {
	      resulting_string = this.__patterns.comment.read();

	      // only process directive on html comments
	      if (resulting_string) {
	        directives = directives_core.get_directives(resulting_string);
	        if (directives && directives.ignore === 'start') {
	          resulting_string += directives_core.readIgnored(this._input);
	        }
	      } else {
	        resulting_string = this.__patterns.cdata.read();
	      }
	    }

	    if (resulting_string) {
	      token = this._create_token(TOKEN.COMMENT, resulting_string);
	      token.directives = directives;
	    }
	  }

	  return token;
	};

	Tokenizer.prototype._read_processing = function(c) { // jshint unused:false
	  var token = null;
	  var resulting_string = null;
	  var directives = null;

	  if (c === '<') {
	    var peek1 = this._input.peek(1);
	    if (peek1 === '!' || peek1 === '?') {
	      resulting_string = this.__patterns.conditional_comment.read();
	      resulting_string = resulting_string || this.__patterns.processing.read();
	    }

	    if (resulting_string) {
	      token = this._create_token(TOKEN.COMMENT, resulting_string);
	      token.directives = directives;
	    }
	  }

	  return token;
	};

	Tokenizer.prototype._read_open = function(c, open_token) {
	  var resulting_string = null;
	  var token = null;
	  if (!open_token || open_token.type === TOKEN.CONTROL_FLOW_OPEN) {
	    if (c === '<') {

	      resulting_string = this._input.next();
	      if (this._input.peek() === '/') {
	        resulting_string += this._input.next();
	      }
	      resulting_string += this.__patterns.element_name.read();
	      token = this._create_token(TOKEN.TAG_OPEN, resulting_string);
	    }
	  }
	  return token;
	};

	Tokenizer.prototype._read_open_handlebars = function(c, open_token) {
	  var resulting_string = null;
	  var token = null;
	  if (!open_token || open_token.type === TOKEN.CONTROL_FLOW_OPEN) {
	    if (this._options.indent_handlebars && c === '{' && this._input.peek(1) === '{') {
	      if (this._input.peek(2) === '!') {
	        resulting_string = this.__patterns.handlebars_comment.read();
	        resulting_string = resulting_string || this.__patterns.handlebars.read();
	        token = this._create_token(TOKEN.COMMENT, resulting_string);
	      } else {
	        resulting_string = this.__patterns.handlebars_open.read();
	        token = this._create_token(TOKEN.TAG_OPEN, resulting_string);
	      }
	    }
	  }
	  return token;
	};

	Tokenizer.prototype._read_control_flows = function(c, open_token) {
	  var resulting_string = '';
	  var token = null;
	  // Only check for control flows if angular templating is set AND indenting is set
	  if (!this._options.templating.includes('angular') || !this._options.indent_handlebars) {
	    return token;
	  }

	  if (c === '@') {
	    resulting_string = this.__patterns.angular_control_flow_start.read();
	    if (resulting_string === '') {
	      return token;
	    }

	    var opening_parentheses_count = resulting_string.endsWith('(') ? 1 : 0;
	    var closing_parentheses_count = 0;
	    // The opening brace of the control flow is where the number of opening and closing parentheses equal
	    // e.g. @if({value: true} !== null) { 
	    while (!(resulting_string.endsWith('{') && opening_parentheses_count === closing_parentheses_count)) {
	      var next_char = this._input.next();
	      if (next_char === null) {
	        break;
	      } else if (next_char === '(') {
	        opening_parentheses_count++;
	      } else if (next_char === ')') {
	        closing_parentheses_count++;
	      }
	      resulting_string += next_char;
	    }
	    token = this._create_token(TOKEN.CONTROL_FLOW_OPEN, resulting_string);
	  } else if (c === '}' && open_token && open_token.type === TOKEN.CONTROL_FLOW_OPEN) {
	    resulting_string = this._input.next();
	    token = this._create_token(TOKEN.CONTROL_FLOW_CLOSE, resulting_string);
	  }
	  return token;
	};


	Tokenizer.prototype._read_close = function(c, open_token) {
	  var resulting_string = null;
	  var token = null;
	  if (open_token && open_token.type === TOKEN.TAG_OPEN) {
	    if (open_token.text[0] === '<' && (c === '>' || (c === '/' && this._input.peek(1) === '>'))) {
	      resulting_string = this._input.next();
	      if (c === '/') { //  for close tag "/>"
	        resulting_string += this._input.next();
	      }
	      token = this._create_token(TOKEN.TAG_CLOSE, resulting_string);
	    } else if (open_token.text[0] === '{' && c === '}' && this._input.peek(1) === '}') {
	      this._input.next();
	      this._input.next();
	      token = this._create_token(TOKEN.TAG_CLOSE, '}}');
	    }
	  }

	  return token;
	};

	Tokenizer.prototype._read_attribute = function(c, previous_token, open_token) {
	  var token = null;
	  var resulting_string = '';
	  if (open_token && open_token.text[0] === '<') {

	    if (c === '=') {
	      token = this._create_token(TOKEN.EQUALS, this._input.next());
	    } else if (c === '"' || c === "'") {
	      var content = this._input.next();
	      if (c === '"') {
	        content += this.__patterns.double_quote.read();
	      } else {
	        content += this.__patterns.single_quote.read();
	      }
	      token = this._create_token(TOKEN.VALUE, content);
	    } else {
	      resulting_string = this.__patterns.attribute.read();

	      if (resulting_string) {
	        if (previous_token.type === TOKEN.EQUALS) {
	          token = this._create_token(TOKEN.VALUE, resulting_string);
	        } else {
	          token = this._create_token(TOKEN.ATTRIBUTE, resulting_string);
	        }
	      }
	    }
	  }
	  return token;
	};

	Tokenizer.prototype._is_content_unformatted = function(tag_name) {
	  // void_elements have no content and so cannot have unformatted content
	  // script and style tags should always be read as unformatted content
	  // finally content_unformatted and unformatted element contents are unformatted
	  return this._options.void_elements.indexOf(tag_name) === -1 &&
	    (this._options.content_unformatted.indexOf(tag_name) !== -1 ||
	      this._options.unformatted.indexOf(tag_name) !== -1);
	};


	Tokenizer.prototype._read_raw_content = function(c, previous_token, open_token) { // jshint unused:false
	  var resulting_string = '';
	  if (open_token && open_token.text[0] === '{') {
	    resulting_string = this.__patterns.handlebars_raw_close.read();
	  } else if (previous_token.type === TOKEN.TAG_CLOSE &&
	    previous_token.opened.text[0] === '<' && previous_token.text[0] !== '/') {
	    // ^^ empty tag has no content 
	    var tag_name = previous_token.opened.text.substr(1).toLowerCase();
	    if (tag_name === 'script' || tag_name === 'style') {
	      // Script and style tags are allowed to have comments wrapping their content
	      // or just have regular content.
	      var token = this._read_comment_or_cdata(c);
	      if (token) {
	        token.type = TOKEN.TEXT;
	        return token;
	      }
	      resulting_string = this._input.readUntil(new RegExp('</' + tag_name + '[\\n\\r\\t ]*?>', 'ig'));
	    } else if (this._is_content_unformatted(tag_name)) {

	      resulting_string = this._input.readUntil(new RegExp('</' + tag_name + '[\\n\\r\\t ]*?>', 'ig'));
	    }
	  }

	  if (resulting_string) {
	    return this._create_token(TOKEN.TEXT, resulting_string);
	  }

	  return null;
	};

	Tokenizer.prototype._read_content_word = function(c, open_token) {
	  var resulting_string = '';
	  if (this._options.unformatted_content_delimiter) {
	    if (c === this._options.unformatted_content_delimiter[0]) {
	      resulting_string = this.__patterns.unformatted_content_delimiter.read();
	    }
	  }

	  if (!resulting_string) {
	    resulting_string = (open_token && open_token.type === TOKEN.CONTROL_FLOW_OPEN) ? this.__patterns.word_control_flow_close_excluded.read() : this.__patterns.word.read();
	  }
	  if (resulting_string) {
	    return this._create_token(TOKEN.TEXT, resulting_string);
	  }
	};

	tokenizer.Tokenizer = Tokenizer;
	tokenizer.TOKEN = TOKEN;
	return tokenizer;
}

/*jshint node:true */

var hasRequiredBeautifier;

function requireBeautifier () {
	if (hasRequiredBeautifier) return beautifier;
	hasRequiredBeautifier = 1;

	var Options = requireOptions().Options;
	var Output = requireOutput().Output;
	var Tokenizer = requireTokenizer().Tokenizer;
	var TOKEN = requireTokenizer().TOKEN;

	var lineBreak = /\r\n|[\r\n]/;
	var allLineBreaks = /\r\n|[\r\n]/g;

	var Printer = function(options, base_indent_string) { //handles input/output and some other printing functions

	  this.indent_level = 0;
	  this.alignment_size = 0;
	  this.max_preserve_newlines = options.max_preserve_newlines;
	  this.preserve_newlines = options.preserve_newlines;

	  this._output = new Output(options, base_indent_string);

	};

	Printer.prototype.current_line_has_match = function(pattern) {
	  return this._output.current_line.has_match(pattern);
	};

	Printer.prototype.set_space_before_token = function(value, non_breaking) {
	  this._output.space_before_token = value;
	  this._output.non_breaking_space = non_breaking;
	};

	Printer.prototype.set_wrap_point = function() {
	  this._output.set_indent(this.indent_level, this.alignment_size);
	  this._output.set_wrap_point();
	};


	Printer.prototype.add_raw_token = function(token) {
	  this._output.add_raw_token(token);
	};

	Printer.prototype.print_preserved_newlines = function(raw_token) {
	  var newlines = 0;
	  if (raw_token.type !== TOKEN.TEXT && raw_token.previous.type !== TOKEN.TEXT) {
	    newlines = raw_token.newlines ? 1 : 0;
	  }

	  if (this.preserve_newlines) {
	    newlines = raw_token.newlines < this.max_preserve_newlines + 1 ? raw_token.newlines : this.max_preserve_newlines + 1;
	  }
	  for (var n = 0; n < newlines; n++) {
	    this.print_newline(n > 0);
	  }

	  return newlines !== 0;
	};

	Printer.prototype.traverse_whitespace = function(raw_token) {
	  if (raw_token.whitespace_before || raw_token.newlines) {
	    if (!this.print_preserved_newlines(raw_token)) {
	      this._output.space_before_token = true;
	    }
	    return true;
	  }
	  return false;
	};

	Printer.prototype.previous_token_wrapped = function() {
	  return this._output.previous_token_wrapped;
	};

	Printer.prototype.print_newline = function(force) {
	  this._output.add_new_line(force);
	};

	Printer.prototype.print_token = function(token) {
	  if (token.text) {
	    this._output.set_indent(this.indent_level, this.alignment_size);
	    this._output.add_token(token.text);
	  }
	};

	Printer.prototype.indent = function() {
	  this.indent_level++;
	};

	Printer.prototype.deindent = function() {
	  if (this.indent_level > 0) {
	    this.indent_level--;
	    this._output.set_indent(this.indent_level, this.alignment_size);
	  }
	};

	Printer.prototype.get_full_indent = function(level) {
	  level = this.indent_level + (level || 0);
	  if (level < 1) {
	    return '';
	  }

	  return this._output.get_indent_string(level);
	};

	var get_type_attribute = function(start_token) {
	  var result = null;
	  var raw_token = start_token.next;

	  // Search attributes for a type attribute
	  while (raw_token.type !== TOKEN.EOF && start_token.closed !== raw_token) {
	    if (raw_token.type === TOKEN.ATTRIBUTE && raw_token.text === 'type') {
	      if (raw_token.next && raw_token.next.type === TOKEN.EQUALS &&
	        raw_token.next.next && raw_token.next.next.type === TOKEN.VALUE) {
	        result = raw_token.next.next.text;
	      }
	      break;
	    }
	    raw_token = raw_token.next;
	  }

	  return result;
	};

	var get_custom_beautifier_name = function(tag_check, raw_token) {
	  var typeAttribute = null;
	  var result = null;

	  if (!raw_token.closed) {
	    return null;
	  }

	  if (tag_check === 'script') {
	    typeAttribute = 'text/javascript';
	  } else if (tag_check === 'style') {
	    typeAttribute = 'text/css';
	  }

	  typeAttribute = get_type_attribute(raw_token) || typeAttribute;

	  // For script and style tags that have a type attribute, only enable custom beautifiers for matching values
	  // For those without a type attribute use default;
	  if (typeAttribute.search('text/css') > -1) {
	    result = 'css';
	  } else if (typeAttribute.search(/module|((text|application|dojo)\/(x-)?(javascript|ecmascript|jscript|livescript|(ld\+)?json|method|aspect))/) > -1) {
	    result = 'javascript';
	  } else if (typeAttribute.search(/(text|application|dojo)\/(x-)?(html)/) > -1) {
	    result = 'html';
	  } else if (typeAttribute.search(/test\/null/) > -1) {
	    // Test only mime-type for testing the beautifier when null is passed as beautifing function
	    result = 'null';
	  }

	  return result;
	};

	function in_array(what, arr) {
	  return arr.indexOf(what) !== -1;
	}

	function TagFrame(parent, parser_token, indent_level) {
	  this.parent = parent || null;
	  this.tag = parser_token ? parser_token.tag_name : '';
	  this.indent_level = indent_level || 0;
	  this.parser_token = parser_token || null;
	}

	function TagStack(printer) {
	  this._printer = printer;
	  this._current_frame = null;
	}

	TagStack.prototype.get_parser_token = function() {
	  return this._current_frame ? this._current_frame.parser_token : null;
	};

	TagStack.prototype.record_tag = function(parser_token) { //function to record a tag and its parent in this.tags Object
	  var new_frame = new TagFrame(this._current_frame, parser_token, this._printer.indent_level);
	  this._current_frame = new_frame;
	};

	TagStack.prototype._try_pop_frame = function(frame) { //function to retrieve the opening tag to the corresponding closer
	  var parser_token = null;

	  if (frame) {
	    parser_token = frame.parser_token;
	    this._printer.indent_level = frame.indent_level;
	    this._current_frame = frame.parent;
	  }

	  return parser_token;
	};

	TagStack.prototype._get_frame = function(tag_list, stop_list) { //function to retrieve the opening tag to the corresponding closer
	  var frame = this._current_frame;

	  while (frame) { //till we reach '' (the initial value);
	    if (tag_list.indexOf(frame.tag) !== -1) { //if this is it use it
	      break;
	    } else if (stop_list && stop_list.indexOf(frame.tag) !== -1) {
	      frame = null;
	      break;
	    }
	    frame = frame.parent;
	  }

	  return frame;
	};

	TagStack.prototype.try_pop = function(tag, stop_list) { //function to retrieve the opening tag to the corresponding closer
	  var frame = this._get_frame([tag], stop_list);
	  return this._try_pop_frame(frame);
	};

	TagStack.prototype.indent_to_tag = function(tag_list) {
	  var frame = this._get_frame(tag_list);
	  if (frame) {
	    this._printer.indent_level = frame.indent_level;
	  }
	};

	function Beautifier(source_text, options, js_beautify, css_beautify) {
	  //Wrapper function to invoke all the necessary constructors and deal with the output.
	  this._source_text = source_text || '';
	  options = options || {};
	  this._js_beautify = js_beautify;
	  this._css_beautify = css_beautify;
	  this._tag_stack = null;

	  // Allow the setting of language/file-type specific options
	  // with inheritance of overall settings
	  var optionHtml = new Options(options, 'html');

	  this._options = optionHtml;

	  this._is_wrap_attributes_force = this._options.wrap_attributes.substr(0, 'force'.length) === 'force';
	  this._is_wrap_attributes_force_expand_multiline = (this._options.wrap_attributes === 'force-expand-multiline');
	  this._is_wrap_attributes_force_aligned = (this._options.wrap_attributes === 'force-aligned');
	  this._is_wrap_attributes_aligned_multiple = (this._options.wrap_attributes === 'aligned-multiple');
	  this._is_wrap_attributes_preserve = this._options.wrap_attributes.substr(0, 'preserve'.length) === 'preserve';
	  this._is_wrap_attributes_preserve_aligned = (this._options.wrap_attributes === 'preserve-aligned');
	}

	Beautifier.prototype.beautify = function() {

	  // if disabled, return the input unchanged.
	  if (this._options.disabled) {
	    return this._source_text;
	  }

	  var source_text = this._source_text;
	  var eol = this._options.eol;
	  if (this._options.eol === 'auto') {
	    eol = '\n';
	    if (source_text && lineBreak.test(source_text)) {
	      eol = source_text.match(lineBreak)[0];
	    }
	  }

	  // HACK: newline parsing inconsistent. This brute force normalizes the input.
	  source_text = source_text.replace(allLineBreaks, '\n');

	  var baseIndentString = source_text.match(/^[\t ]*/)[0];

	  var last_token = {
	    text: '',
	    type: ''
	  };

	  var last_tag_token = new TagOpenParserToken();

	  var printer = new Printer(this._options, baseIndentString);
	  var tokens = new Tokenizer(source_text, this._options).tokenize();

	  this._tag_stack = new TagStack(printer);

	  var parser_token = null;
	  var raw_token = tokens.next();
	  while (raw_token.type !== TOKEN.EOF) {

	    if (raw_token.type === TOKEN.TAG_OPEN || raw_token.type === TOKEN.COMMENT) {
	      parser_token = this._handle_tag_open(printer, raw_token, last_tag_token, last_token, tokens);
	      last_tag_token = parser_token;
	    } else if ((raw_token.type === TOKEN.ATTRIBUTE || raw_token.type === TOKEN.EQUALS || raw_token.type === TOKEN.VALUE) ||
	      (raw_token.type === TOKEN.TEXT && !last_tag_token.tag_complete)) {
	      parser_token = this._handle_inside_tag(printer, raw_token, last_tag_token, last_token);
	    } else if (raw_token.type === TOKEN.TAG_CLOSE) {
	      parser_token = this._handle_tag_close(printer, raw_token, last_tag_token);
	    } else if (raw_token.type === TOKEN.TEXT) {
	      parser_token = this._handle_text(printer, raw_token, last_tag_token);
	    } else if (raw_token.type === TOKEN.CONTROL_FLOW_OPEN) {
	      parser_token = this._handle_control_flow_open(printer, raw_token);
	    } else if (raw_token.type === TOKEN.CONTROL_FLOW_CLOSE) {
	      parser_token = this._handle_control_flow_close(printer, raw_token);
	    } else {
	      // This should never happen, but if it does. Print the raw token
	      printer.add_raw_token(raw_token);
	    }

	    last_token = parser_token;

	    raw_token = tokens.next();
	  }
	  var sweet_code = printer._output.get_code(eol);

	  return sweet_code;
	};

	Beautifier.prototype._handle_control_flow_open = function(printer, raw_token) {
	  var parser_token = {
	    text: raw_token.text,
	    type: raw_token.type
	  };
	  printer.set_space_before_token(raw_token.newlines || raw_token.whitespace_before !== '', true);
	  if (raw_token.newlines) {
	    printer.print_preserved_newlines(raw_token);
	  } else {
	    printer.set_space_before_token(raw_token.newlines || raw_token.whitespace_before !== '', true);
	  }
	  printer.print_token(raw_token);
	  printer.indent();
	  return parser_token;
	};

	Beautifier.prototype._handle_control_flow_close = function(printer, raw_token) {
	  var parser_token = {
	    text: raw_token.text,
	    type: raw_token.type
	  };

	  printer.deindent();
	  if (raw_token.newlines) {
	    printer.print_preserved_newlines(raw_token);
	  } else {
	    printer.set_space_before_token(raw_token.newlines || raw_token.whitespace_before !== '', true);
	  }
	  printer.print_token(raw_token);
	  return parser_token;
	};

	Beautifier.prototype._handle_tag_close = function(printer, raw_token, last_tag_token) {
	  var parser_token = {
	    text: raw_token.text,
	    type: raw_token.type
	  };
	  printer.alignment_size = 0;
	  last_tag_token.tag_complete = true;

	  printer.set_space_before_token(raw_token.newlines || raw_token.whitespace_before !== '', true);
	  if (last_tag_token.is_unformatted) {
	    printer.add_raw_token(raw_token);
	  } else {
	    if (last_tag_token.tag_start_char === '<') {
	      printer.set_space_before_token(raw_token.text[0] === '/', true); // space before />, no space before >
	      if (this._is_wrap_attributes_force_expand_multiline && last_tag_token.has_wrapped_attrs) {
	        printer.print_newline(false);
	      }
	    }
	    printer.print_token(raw_token);

	  }

	  if (last_tag_token.indent_content &&
	    !(last_tag_token.is_unformatted || last_tag_token.is_content_unformatted)) {
	    printer.indent();

	    // only indent once per opened tag
	    last_tag_token.indent_content = false;
	  }

	  if (!last_tag_token.is_inline_element &&
	    !(last_tag_token.is_unformatted || last_tag_token.is_content_unformatted)) {
	    printer.set_wrap_point();
	  }

	  return parser_token;
	};

	Beautifier.prototype._handle_inside_tag = function(printer, raw_token, last_tag_token, last_token) {
	  var wrapped = last_tag_token.has_wrapped_attrs;
	  var parser_token = {
	    text: raw_token.text,
	    type: raw_token.type
	  };

	  printer.set_space_before_token(raw_token.newlines || raw_token.whitespace_before !== '', true);
	  if (last_tag_token.is_unformatted) {
	    printer.add_raw_token(raw_token);
	  } else if (last_tag_token.tag_start_char === '{' && raw_token.type === TOKEN.TEXT) {
	    // For the insides of handlebars allow newlines or a single space between open and contents
	    if (printer.print_preserved_newlines(raw_token)) {
	      raw_token.newlines = 0;
	      printer.add_raw_token(raw_token);
	    } else {
	      printer.print_token(raw_token);
	    }
	  } else {
	    if (raw_token.type === TOKEN.ATTRIBUTE) {
	      printer.set_space_before_token(true);
	    } else if (raw_token.type === TOKEN.EQUALS) { //no space before =
	      printer.set_space_before_token(false);
	    } else if (raw_token.type === TOKEN.VALUE && raw_token.previous.type === TOKEN.EQUALS) { //no space before value
	      printer.set_space_before_token(false);
	    }

	    if (raw_token.type === TOKEN.ATTRIBUTE && last_tag_token.tag_start_char === '<') {
	      if (this._is_wrap_attributes_preserve || this._is_wrap_attributes_preserve_aligned) {
	        printer.traverse_whitespace(raw_token);
	        wrapped = wrapped || raw_token.newlines !== 0;
	      }

	      // Wrap for 'force' options, and if the number of attributes is at least that specified in 'wrap_attributes_min_attrs':
	      // 1. always wrap the second and beyond attributes
	      // 2. wrap the first attribute only if 'force-expand-multiline' is specified
	      if (this._is_wrap_attributes_force &&
	        last_tag_token.attr_count >= this._options.wrap_attributes_min_attrs &&
	        (last_token.type !== TOKEN.TAG_OPEN || // ie. second attribute and beyond
	          this._is_wrap_attributes_force_expand_multiline)) {
	        printer.print_newline(false);
	        wrapped = true;
	      }
	    }
	    printer.print_token(raw_token);
	    wrapped = wrapped || printer.previous_token_wrapped();
	    last_tag_token.has_wrapped_attrs = wrapped;
	  }
	  return parser_token;
	};

	Beautifier.prototype._handle_text = function(printer, raw_token, last_tag_token) {
	  var parser_token = {
	    text: raw_token.text,
	    type: 'TK_CONTENT'
	  };
	  if (last_tag_token.custom_beautifier_name) { //check if we need to format javascript
	    this._print_custom_beatifier_text(printer, raw_token, last_tag_token);
	  } else if (last_tag_token.is_unformatted || last_tag_token.is_content_unformatted) {
	    printer.add_raw_token(raw_token);
	  } else {
	    printer.traverse_whitespace(raw_token);
	    printer.print_token(raw_token);
	  }
	  return parser_token;
	};

	Beautifier.prototype._print_custom_beatifier_text = function(printer, raw_token, last_tag_token) {
	  var local = this;
	  if (raw_token.text !== '') {

	    var text = raw_token.text,
	      _beautifier,
	      script_indent_level = 1,
	      pre = '',
	      post = '';
	    if (last_tag_token.custom_beautifier_name === 'javascript' && typeof this._js_beautify === 'function') {
	      _beautifier = this._js_beautify;
	    } else if (last_tag_token.custom_beautifier_name === 'css' && typeof this._css_beautify === 'function') {
	      _beautifier = this._css_beautify;
	    } else if (last_tag_token.custom_beautifier_name === 'html') {
	      _beautifier = function(html_source, options) {
	        var beautifier = new Beautifier(html_source, options, local._js_beautify, local._css_beautify);
	        return beautifier.beautify();
	      };
	    }

	    if (this._options.indent_scripts === "keep") {
	      script_indent_level = 0;
	    } else if (this._options.indent_scripts === "separate") {
	      script_indent_level = -printer.indent_level;
	    }

	    var indentation = printer.get_full_indent(script_indent_level);

	    // if there is at least one empty line at the end of this text, strip it
	    // we'll be adding one back after the text but before the containing tag.
	    text = text.replace(/\n[ \t]*$/, '');

	    // Handle the case where content is wrapped in a comment or cdata.
	    if (last_tag_token.custom_beautifier_name !== 'html' &&
	      text[0] === '<' && text.match(/^(<!--|<!\[CDATA\[)/)) {
	      var matched = /^(<!--[^\n]*|<!\[CDATA\[)(\n?)([ \t\n]*)([\s\S]*)(-->|]]>)$/.exec(text);

	      // if we start to wrap but don't finish, print raw
	      if (!matched) {
	        printer.add_raw_token(raw_token);
	        return;
	      }

	      pre = indentation + matched[1] + '\n';
	      text = matched[4];
	      if (matched[5]) {
	        post = indentation + matched[5];
	      }

	      // if there is at least one empty line at the end of this text, strip it
	      // we'll be adding one back after the text but before the containing tag.
	      text = text.replace(/\n[ \t]*$/, '');

	      if (matched[2] || matched[3].indexOf('\n') !== -1) {
	        // if the first line of the non-comment text has spaces
	        // use that as the basis for indenting in null case.
	        matched = matched[3].match(/[ \t]+$/);
	        if (matched) {
	          raw_token.whitespace_before = matched[0];
	        }
	      }
	    }

	    if (text) {
	      if (_beautifier) {

	        // call the Beautifier if avaliable
	        var Child_options = function() {
	          this.eol = '\n';
	        };
	        Child_options.prototype = this._options.raw_options;
	        var child_options = new Child_options();
	        text = _beautifier(indentation + text, child_options);
	      } else {
	        // simply indent the string otherwise
	        var white = raw_token.whitespace_before;
	        if (white) {
	          text = text.replace(new RegExp('\n(' + white + ')?', 'g'), '\n');
	        }

	        text = indentation + text.replace(/\n/g, '\n' + indentation);
	      }
	    }

	    if (pre) {
	      if (!text) {
	        text = pre + post;
	      } else {
	        text = pre + text + '\n' + post;
	      }
	    }

	    printer.print_newline(false);
	    if (text) {
	      raw_token.text = text;
	      raw_token.whitespace_before = '';
	      raw_token.newlines = 0;
	      printer.add_raw_token(raw_token);
	      printer.print_newline(true);
	    }
	  }
	};

	Beautifier.prototype._handle_tag_open = function(printer, raw_token, last_tag_token, last_token, tokens) {
	  var parser_token = this._get_tag_open_token(raw_token);

	  if ((last_tag_token.is_unformatted || last_tag_token.is_content_unformatted) &&
	    !last_tag_token.is_empty_element &&
	    raw_token.type === TOKEN.TAG_OPEN && !parser_token.is_start_tag) {
	    // End element tags for unformatted or content_unformatted elements
	    // are printed raw to keep any newlines inside them exactly the same.
	    printer.add_raw_token(raw_token);
	    parser_token.start_tag_token = this._tag_stack.try_pop(parser_token.tag_name);
	  } else {
	    printer.traverse_whitespace(raw_token);
	    this._set_tag_position(printer, raw_token, parser_token, last_tag_token, last_token);
	    if (!parser_token.is_inline_element) {
	      printer.set_wrap_point();
	    }
	    printer.print_token(raw_token);
	  }

	  // count the number of attributes
	  if (parser_token.is_start_tag && this._is_wrap_attributes_force) {
	    var peek_index = 0;
	    var peek_token;
	    do {
	      peek_token = tokens.peek(peek_index);
	      if (peek_token.type === TOKEN.ATTRIBUTE) {
	        parser_token.attr_count += 1;
	      }
	      peek_index += 1;
	    } while (peek_token.type !== TOKEN.EOF && peek_token.type !== TOKEN.TAG_CLOSE);
	  }

	  //indent attributes an auto, forced, aligned or forced-align line-wrap
	  if (this._is_wrap_attributes_force_aligned || this._is_wrap_attributes_aligned_multiple || this._is_wrap_attributes_preserve_aligned) {
	    parser_token.alignment_size = raw_token.text.length + 1;
	  }

	  if (!parser_token.tag_complete && !parser_token.is_unformatted) {
	    printer.alignment_size = parser_token.alignment_size;
	  }

	  return parser_token;
	};

	var TagOpenParserToken = function(parent, raw_token) {
	  this.parent = parent || null;
	  this.text = '';
	  this.type = 'TK_TAG_OPEN';
	  this.tag_name = '';
	  this.is_inline_element = false;
	  this.is_unformatted = false;
	  this.is_content_unformatted = false;
	  this.is_empty_element = false;
	  this.is_start_tag = false;
	  this.is_end_tag = false;
	  this.indent_content = false;
	  this.multiline_content = false;
	  this.custom_beautifier_name = null;
	  this.start_tag_token = null;
	  this.attr_count = 0;
	  this.has_wrapped_attrs = false;
	  this.alignment_size = 0;
	  this.tag_complete = false;
	  this.tag_start_char = '';
	  this.tag_check = '';

	  if (!raw_token) {
	    this.tag_complete = true;
	  } else {
	    var tag_check_match;

	    this.tag_start_char = raw_token.text[0];
	    this.text = raw_token.text;

	    if (this.tag_start_char === '<') {
	      tag_check_match = raw_token.text.match(/^<([^\s>]*)/);
	      this.tag_check = tag_check_match ? tag_check_match[1] : '';
	    } else {
	      tag_check_match = raw_token.text.match(/^{{~?(?:[\^]|#\*?)?([^\s}]+)/);
	      this.tag_check = tag_check_match ? tag_check_match[1] : '';

	      // handle "{{#> myPartial}}" or "{{~#> myPartial}}"
	      if ((raw_token.text.startsWith('{{#>') || raw_token.text.startsWith('{{~#>')) && this.tag_check[0] === '>') {
	        if (this.tag_check === '>' && raw_token.next !== null) {
	          this.tag_check = raw_token.next.text.split(' ')[0];
	        } else {
	          this.tag_check = raw_token.text.split('>')[1];
	        }
	      }
	    }

	    this.tag_check = this.tag_check.toLowerCase();

	    if (raw_token.type === TOKEN.COMMENT) {
	      this.tag_complete = true;
	    }

	    this.is_start_tag = this.tag_check.charAt(0) !== '/';
	    this.tag_name = !this.is_start_tag ? this.tag_check.substr(1) : this.tag_check;
	    this.is_end_tag = !this.is_start_tag ||
	      (raw_token.closed && raw_token.closed.text === '/>');

	    // if whitespace handler ~ included (i.e. {{~#if true}}), handlebars tags start at pos 3 not pos 2
	    var handlebar_starts = 2;
	    if (this.tag_start_char === '{' && this.text.length >= 3) {
	      if (this.text.charAt(2) === '~') {
	        handlebar_starts = 3;
	      }
	    }

	    // handlebars tags that don't start with # or ^ are single_tags, and so also start and end.
	    this.is_end_tag = this.is_end_tag ||
	      (this.tag_start_char === '{' && (this.text.length < 3 || (/[^#\^]/.test(this.text.charAt(handlebar_starts)))));
	  }
	};

	Beautifier.prototype._get_tag_open_token = function(raw_token) { //function to get a full tag and parse its type
	  var parser_token = new TagOpenParserToken(this._tag_stack.get_parser_token(), raw_token);

	  parser_token.alignment_size = this._options.wrap_attributes_indent_size;

	  parser_token.is_end_tag = parser_token.is_end_tag ||
	    in_array(parser_token.tag_check, this._options.void_elements);

	  parser_token.is_empty_element = parser_token.tag_complete ||
	    (parser_token.is_start_tag && parser_token.is_end_tag);

	  parser_token.is_unformatted = !parser_token.tag_complete && in_array(parser_token.tag_check, this._options.unformatted);
	  parser_token.is_content_unformatted = !parser_token.is_empty_element && in_array(parser_token.tag_check, this._options.content_unformatted);
	  parser_token.is_inline_element = in_array(parser_token.tag_name, this._options.inline) || (this._options.inline_custom_elements && parser_token.tag_name.includes("-")) || parser_token.tag_start_char === '{';

	  return parser_token;
	};

	Beautifier.prototype._set_tag_position = function(printer, raw_token, parser_token, last_tag_token, last_token) {

	  if (!parser_token.is_empty_element) {
	    if (parser_token.is_end_tag) { //this tag is a double tag so check for tag-ending
	      parser_token.start_tag_token = this._tag_stack.try_pop(parser_token.tag_name); //remove it and all ancestors
	    } else { // it's a start-tag
	      // check if this tag is starting an element that has optional end element
	      // and do an ending needed
	      if (this._do_optional_end_element(parser_token)) {
	        if (!parser_token.is_inline_element) {
	          printer.print_newline(false);
	        }
	      }

	      this._tag_stack.record_tag(parser_token); //push it on the tag stack

	      if ((parser_token.tag_name === 'script' || parser_token.tag_name === 'style') &&
	        !(parser_token.is_unformatted || parser_token.is_content_unformatted)) {
	        parser_token.custom_beautifier_name = get_custom_beautifier_name(parser_token.tag_check, raw_token);
	      }
	    }
	  }

	  if (in_array(parser_token.tag_check, this._options.extra_liners)) { //check if this double needs an extra line
	    printer.print_newline(false);
	    if (!printer._output.just_added_blankline()) {
	      printer.print_newline(true);
	    }
	  }

	  if (parser_token.is_empty_element) { //if this tag name is a single tag type (either in the list or has a closing /)

	    // if you hit an else case, reset the indent level if you are inside an:
	    // 'if', 'unless', or 'each' block.
	    if (parser_token.tag_start_char === '{' && parser_token.tag_check === 'else') {
	      this._tag_stack.indent_to_tag(['if', 'unless', 'each']);
	      parser_token.indent_content = true;
	      // Don't add a newline if opening {{#if}} tag is on the current line
	      var foundIfOnCurrentLine = printer.current_line_has_match(/{{#if/);
	      if (!foundIfOnCurrentLine) {
	        printer.print_newline(false);
	      }
	    }

	    // Don't add a newline before elements that should remain where they are.
	    if (parser_token.tag_name === '!--' && last_token.type === TOKEN.TAG_CLOSE &&
	      last_tag_token.is_end_tag && parser_token.text.indexOf('\n') === -1) ; else {
	      if (!(parser_token.is_inline_element || parser_token.is_unformatted)) {
	        printer.print_newline(false);
	      }
	      this._calcluate_parent_multiline(printer, parser_token);
	    }
	  } else if (parser_token.is_end_tag) { //this tag is a double tag so check for tag-ending
	    var do_end_expand = false;

	    // deciding whether a block is multiline should not be this hard
	    do_end_expand = parser_token.start_tag_token && parser_token.start_tag_token.multiline_content;
	    do_end_expand = do_end_expand || (!parser_token.is_inline_element &&
	      !(last_tag_token.is_inline_element || last_tag_token.is_unformatted) &&
	      !(last_token.type === TOKEN.TAG_CLOSE && parser_token.start_tag_token === last_tag_token) &&
	      last_token.type !== 'TK_CONTENT'
	    );

	    if (parser_token.is_content_unformatted || parser_token.is_unformatted) {
	      do_end_expand = false;
	    }

	    if (do_end_expand) {
	      printer.print_newline(false);
	    }
	  } else { // it's a start-tag
	    parser_token.indent_content = !parser_token.custom_beautifier_name;

	    if (parser_token.tag_start_char === '<') {
	      if (parser_token.tag_name === 'html') {
	        parser_token.indent_content = this._options.indent_inner_html;
	      } else if (parser_token.tag_name === 'head') {
	        parser_token.indent_content = this._options.indent_head_inner_html;
	      } else if (parser_token.tag_name === 'body') {
	        parser_token.indent_content = this._options.indent_body_inner_html;
	      }
	    }

	    if (!(parser_token.is_inline_element || parser_token.is_unformatted) &&
	      (last_token.type !== 'TK_CONTENT' || parser_token.is_content_unformatted)) {
	      printer.print_newline(false);
	    }

	    this._calcluate_parent_multiline(printer, parser_token);
	  }
	};

	Beautifier.prototype._calcluate_parent_multiline = function(printer, parser_token) {
	  if (parser_token.parent && printer._output.just_added_newline() &&
	    !((parser_token.is_inline_element || parser_token.is_unformatted) && parser_token.parent.is_inline_element)) {
	    parser_token.parent.multiline_content = true;
	  }
	};

	//To be used for <p> tag special case:
	var p_closers = ['address', 'article', 'aside', 'blockquote', 'details', 'div', 'dl', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'hr', 'main', 'menu', 'nav', 'ol', 'p', 'pre', 'section', 'table', 'ul'];
	var p_parent_excludes = ['a', 'audio', 'del', 'ins', 'map', 'noscript', 'video'];

	Beautifier.prototype._do_optional_end_element = function(parser_token) {
	  var result = null;
	  // NOTE: cases of "if there is no more content in the parent element"
	  // are handled automatically by the beautifier.
	  // It assumes parent or ancestor close tag closes all children.
	  // https://www.w3.org/TR/html5/syntax.html#optional-tags
	  if (parser_token.is_empty_element || !parser_token.is_start_tag || !parser_token.parent) {
	    return;

	  }

	  if (parser_token.tag_name === 'body') {
	    // A head element’s end tag may be omitted if the head element is not immediately followed by a space character or a comment.
	    result = result || this._tag_stack.try_pop('head');

	    //} else if (parser_token.tag_name === 'body') {
	    // DONE: A body element’s end tag may be omitted if the body element is not immediately followed by a comment.

	  } else if (parser_token.tag_name === 'li') {
	    // An li element’s end tag may be omitted if the li element is immediately followed by another li element or if there is no more content in the parent element.
	    result = result || this._tag_stack.try_pop('li', ['ol', 'ul', 'menu']);

	  } else if (parser_token.tag_name === 'dd' || parser_token.tag_name === 'dt') {
	    // A dd element’s end tag may be omitted if the dd element is immediately followed by another dd element or a dt element, or if there is no more content in the parent element.
	    // A dt element’s end tag may be omitted if the dt element is immediately followed by another dt element or a dd element.
	    result = result || this._tag_stack.try_pop('dt', ['dl']);
	    result = result || this._tag_stack.try_pop('dd', ['dl']);


	  } else if (parser_token.parent.tag_name === 'p' && p_closers.indexOf(parser_token.tag_name) !== -1) {
	    // IMPORTANT: this else-if works because p_closers has no overlap with any other element we look for in this method
	    // check for the parent element is an HTML element that is not an <a>, <audio>, <del>, <ins>, <map>, <noscript>, or <video> element,  or an autonomous custom element.
	    // To do this right, this needs to be coded as an inclusion of the inverse of the exclusion above.
	    // But to start with (if we ignore "autonomous custom elements") the exclusion would be fine.
	    var p_parent = parser_token.parent.parent;
	    if (!p_parent || p_parent_excludes.indexOf(p_parent.tag_name) === -1) {
	      result = result || this._tag_stack.try_pop('p');
	    }
	  } else if (parser_token.tag_name === 'rp' || parser_token.tag_name === 'rt') {
	    // An rt element’s end tag may be omitted if the rt element is immediately followed by an rt or rp element, or if there is no more content in the parent element.
	    // An rp element’s end tag may be omitted if the rp element is immediately followed by an rt or rp element, or if there is no more content in the parent element.
	    result = result || this._tag_stack.try_pop('rt', ['ruby', 'rtc']);
	    result = result || this._tag_stack.try_pop('rp', ['ruby', 'rtc']);

	  } else if (parser_token.tag_name === 'optgroup') {
	    // An optgroup element’s end tag may be omitted if the optgroup element is immediately followed by another optgroup element, or if there is no more content in the parent element.
	    // An option element’s end tag may be omitted if the option element is immediately followed by another option element, or if it is immediately followed by an optgroup element, or if there is no more content in the parent element.
	    result = result || this._tag_stack.try_pop('optgroup', ['select']);
	    //result = result || this._tag_stack.try_pop('option', ['select']);

	  } else if (parser_token.tag_name === 'option') {
	    // An option element’s end tag may be omitted if the option element is immediately followed by another option element, or if it is immediately followed by an optgroup element, or if there is no more content in the parent element.
	    result = result || this._tag_stack.try_pop('option', ['select', 'datalist', 'optgroup']);

	  } else if (parser_token.tag_name === 'colgroup') {
	    // DONE: A colgroup element’s end tag may be omitted if the colgroup element is not immediately followed by a space character or a comment.
	    // A caption element's end tag may be ommitted if a colgroup, thead, tfoot, tbody, or tr element is started.
	    result = result || this._tag_stack.try_pop('caption', ['table']);

	  } else if (parser_token.tag_name === 'thead') {
	    // A colgroup element's end tag may be ommitted if a thead, tfoot, tbody, or tr element is started.
	    // A caption element's end tag may be ommitted if a colgroup, thead, tfoot, tbody, or tr element is started.
	    result = result || this._tag_stack.try_pop('caption', ['table']);
	    result = result || this._tag_stack.try_pop('colgroup', ['table']);

	    //} else if (parser_token.tag_name === 'caption') {
	    // DONE: A caption element’s end tag may be omitted if the caption element is not immediately followed by a space character or a comment.

	  } else if (parser_token.tag_name === 'tbody' || parser_token.tag_name === 'tfoot') {
	    // A thead element’s end tag may be omitted if the thead element is immediately followed by a tbody or tfoot element.
	    // A tbody element’s end tag may be omitted if the tbody element is immediately followed by a tbody or tfoot element, or if there is no more content in the parent element.
	    // A colgroup element's end tag may be ommitted if a thead, tfoot, tbody, or tr element is started.
	    // A caption element's end tag may be ommitted if a colgroup, thead, tfoot, tbody, or tr element is started.
	    result = result || this._tag_stack.try_pop('caption', ['table']);
	    result = result || this._tag_stack.try_pop('colgroup', ['table']);
	    result = result || this._tag_stack.try_pop('thead', ['table']);
	    result = result || this._tag_stack.try_pop('tbody', ['table']);

	    //} else if (parser_token.tag_name === 'tfoot') {
	    // DONE: A tfoot element’s end tag may be omitted if there is no more content in the parent element.

	  } else if (parser_token.tag_name === 'tr') {
	    // A tr element’s end tag may be omitted if the tr element is immediately followed by another tr element, or if there is no more content in the parent element.
	    // A colgroup element's end tag may be ommitted if a thead, tfoot, tbody, or tr element is started.
	    // A caption element's end tag may be ommitted if a colgroup, thead, tfoot, tbody, or tr element is started.
	    result = result || this._tag_stack.try_pop('caption', ['table']);
	    result = result || this._tag_stack.try_pop('colgroup', ['table']);
	    result = result || this._tag_stack.try_pop('tr', ['table', 'thead', 'tbody', 'tfoot']);

	  } else if (parser_token.tag_name === 'th' || parser_token.tag_name === 'td') {
	    // A td element’s end tag may be omitted if the td element is immediately followed by a td or th element, or if there is no more content in the parent element.
	    // A th element’s end tag may be omitted if the th element is immediately followed by a td or th element, or if there is no more content in the parent element.
	    result = result || this._tag_stack.try_pop('td', ['table', 'thead', 'tbody', 'tfoot', 'tr']);
	    result = result || this._tag_stack.try_pop('th', ['table', 'thead', 'tbody', 'tfoot', 'tr']);
	  }

	  // Start element omission not handled currently
	  // A head element’s start tag may be omitted if the element is empty, or if the first thing inside the head element is an element.
	  // A tbody element’s start tag may be omitted if the first thing inside the tbody element is a tr element, and if the element is not immediately preceded by a tbody, thead, or tfoot element whose end tag has been omitted. (It can’t be omitted if the element is empty.)
	  // A colgroup element’s start tag may be omitted if the first thing inside the colgroup element is a col element, and if the element is not immediately preceded by another colgroup element whose end tag has been omitted. (It can’t be omitted if the element is empty.)

	  // Fix up the parent of the parser token
	  parser_token.parent = this._tag_stack.get_parser_token();

	  return result;
	};

	beautifier.Beautifier = Beautifier;
	return beautifier;
}

/*jshint node:true */

var hasRequiredHtml;

function requireHtml () {
	if (hasRequiredHtml) return html.exports;
	hasRequiredHtml = 1;

	var Beautifier = requireBeautifier().Beautifier,
	  Options = requireOptions().Options;

	function style_html(html_source, options, js_beautify, css_beautify) {
	  var beautifier = new Beautifier(html_source, options, js_beautify, css_beautify);
	  return beautifier.beautify();
	}

	html.exports = style_html;
	html.exports.defaultOptions = function() {
	  return new Options();
	};
	return html.exports;
}

/*jshint node:true */

var hasRequiredSrc;

function requireSrc () {
	if (hasRequiredSrc) return src;
	hasRequiredSrc = 1;

	var js_beautify = requireJavascript();
	var css_beautify = requireCss();
	var html_beautify = requireHtml();

	function style_html(html_source, options, js, css) {
	  js = js || js_beautify;
	  css = css || css_beautify;
	  return html_beautify(html_source, options, js, css);
	}
	style_html.defaultOptions = html_beautify.defaultOptions;

	src.js = js_beautify;
	src.css = css_beautify;
	src.html = style_html;
	return src;
}

/*jshint node:true */

(function (module) {

	/**
	The following batches are equivalent:

	var beautify_js = require('js-beautify');
	var beautify_js = require('js-beautify').js;
	var beautify_js = require('js-beautify').js_beautify;

	var beautify_css = require('js-beautify').css;
	var beautify_css = require('js-beautify').css_beautify;

	var beautify_html = require('js-beautify').html;
	var beautify_html = require('js-beautify').html_beautify;

	All methods returned accept two arguments, the source string and an options object.
	**/

	function get_beautify(js_beautify, css_beautify, html_beautify) {
	  // the default is js
	  var beautify = function(src, config) {
	    return js_beautify.js_beautify(src, config);
	  };

	  // short aliases
	  beautify.js = js_beautify.js_beautify;
	  beautify.css = css_beautify.css_beautify;
	  beautify.html = html_beautify.html_beautify;

	  // legacy aliases
	  beautify.js_beautify = js_beautify.js_beautify;
	  beautify.css_beautify = css_beautify.css_beautify;
	  beautify.html_beautify = html_beautify.html_beautify;

	  return beautify;
	}

	{
	  (function(mod) {
	    var beautifier = requireSrc();
	    beautifier.js_beautify = beautifier.js;
	    beautifier.css_beautify = beautifier.css;
	    beautifier.html_beautify = beautifier.html;

	    mod.exports = get_beautify(beautifier, beautifier, beautifier);

	  })(module);
	} 
} (js));

var jsExports = js.exports;

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
        body = jsExports.js_beautify(body);
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
    function HandlebarsTransformer(handlebarsPluginOptions) {
        if (handlebarsPluginOptions === void 0) { handlebarsPluginOptions = {}; }
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
        var _a, _b, _c;
        var statementsProcessor = this.getStatementsProcessor(source, file);
        var partialsSourceMap = new SourceMap(statementsProcessor.partials);
        var partialEntries = this.processPartialsSourceMap(source, partialsSourceMap);
        var importsMap = new ImportsMap(statementsProcessor.helpers);
        var imports = importsMap.getImports();
        var helperModules = importsMap.getHelperModules();
        var parsedOptions = pluginOptions.parse(this.handlebarsPluginOptions);
        (_a = parsedOptions.partials).push.apply(_a, __spreadArray([], __read(partialEntries), false));
        (_b = parsedOptions.imports).push.apply(_b, __spreadArray([], __read(imports), false));
        (_c = parsedOptions.helperModules).push.apply(_c, __spreadArray([], __read(helperModules), false));
        var compiler = new HandlebarsCompiler(parsedOptions);
        var data = compiler.compile(file);
        return data;
    };
    HandlebarsTransformer.prototype.getStatementsProcessor = function (source, file) {
        var name = path.basename(file);
        var statementsProcessor = new StatementsProcessor({
            name: name,
            source: source,
            rootFile: file
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

var absoluteTestFunctionsDir = path.join(__dirname, '../runtime/functions');
function removeOutputDir() {
    if (fs.existsSync(absoluteTestFunctionsDir)) {
        fs.rmdirSync(absoluteTestFunctionsDir, { recursive: true });
    }
}
function loadTemplate(templatePath) {
    return fs.readFileSync(templatePath).toString();
}
function createFunctionFile(template, output) {
    var absoluteSrcPath = path.join(__dirname, '../src/');
    var absoluteTemplatePath = path.join(__dirname, template);
    var templatePathFromSrc = path.relative(absoluteSrcPath, absoluteTemplatePath);
    var extname = path.extname(template);
    var outputTemplate = path.join(absoluteTestFunctionsDir, templatePathFromSrc);
    var outputDir = path.dirname(outputTemplate);
    var outputName = "".concat(path.basename(template, extname), ".js");
    var outputPath = path.join(outputDir, outputName);
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }
    var code = (output === null || output === void 0 ? void 0 : output.code) || '';
    code = !code ? code : jsExports.js_beautify(code);
    fs.writeFileSync(outputPath, code);
    console.log('\x1b[36mGenerated', "".concat(outputPath, "\u001B[0m"));
}
function testTemplate(template, pluginOptions, toOutputFiles, testFn) {
    var hbsTransformer = new HandlebarsTransformer(pluginOptions);
    var templatePath = path.join(__dirname, template);
    var source = null;
    try {
        source = loadTemplate(templatePath);
    }
    catch (e) {
        return;
    }
    var output = null;
    try {
        output = hbsTransformer.transform(source, templatePath);
    }
    catch (e) {
    }
    createFunctionFile(template, output);
}

function descriptionHelper(text) {
  return "Description " + text;
}

var descriptionHelper_1 = descriptionHelper;

var descriptionHelper$1 = /*@__PURE__*/getDefaultExportFromCjs(descriptionHelper_1);

removeOutputDir();
var PREPARATIONS = [
    function () { return __awaiter(void 0, void 0, void 0, function () {
        var pluginOptions;
        return __generator(this, function (_a) {
            pluginOptions = {};
            testTemplate('../src/simple.hbs', pluginOptions);
            return [2 /*return*/];
        });
    }); },
    function () { return __awaiter(void 0, void 0, void 0, function () {
        var pluginOptions;
        return __generator(this, function (_a) {
            pluginOptions = {};
            testTemplate('../src/invalid-syntax-error.hbs', pluginOptions);
            return [2 /*return*/];
        });
    }); },
    function () { return __awaiter(void 0, void 0, void 0, function () {
        var pluginOptions;
        return __generator(this, function (_a) {
            pluginOptions = {
                knownHelpersOnly: true
            };
            testTemplate('../src/invalid-unknown-helpers.hbs', pluginOptions);
            return [2 /*return*/];
        });
    }); },
    function () { return __awaiter(void 0, void 0, void 0, function () {
        var pluginOptions;
        return __generator(this, function (_a) {
            pluginOptions = {
                helpers: {
                    someKnownHelper: function () { return 'some known helper'; }
                },
                knownHelpers: {
                    someKnownHelper: true
                },
                knownHelpersOnly: true
            };
            testTemplate('../src/with-known-helpers.hbs', pluginOptions);
            return [2 /*return*/];
        });
    }); },
    function () { return __awaiter(void 0, void 0, void 0, function () {
        var pluginOptions;
        return __generator(this, function (_a) {
            pluginOptions = {
                helpers: {
                    descriptionHelper: descriptionHelper$1
                }
            };
            testTemplate('../src/with-helpers-commonjs.hbs', pluginOptions);
            return [2 /*return*/];
        });
    }); },
    function () { return __awaiter(void 0, void 0, void 0, function () {
        var pluginOptions;
        return __generator(this, function (_a) {
            pluginOptions = {
                helpers: {
                    list: function (items, options) {
                        var itemsAsHtml = items.map(function (item) { return "<li>" + options.fn(item) + "</li>"; });
                        return "<ul>\n" + itemsAsHtml.join("\n") + "\n</ul>";
                    }
                }
            };
            testTemplate('../src/with-block-helpers.hbs', pluginOptions);
            return [2 /*return*/];
        });
    }); },
    function () { return __awaiter(void 0, void 0, void 0, function () {
        var pluginOptions;
        return __generator(this, function (_a) {
            pluginOptions = {
                partials: {
                    otherPartial: fs.readFileSync(path.join(__dirname, '../src/partialDirs/anotherDir/otherPartial.hbs')).toString()
                }
            };
            testTemplate('../src/with-plugin-partial.hbs', pluginOptions);
            return [2 /*return*/];
        });
    }); },
    function () { return __awaiter(void 0, void 0, void 0, function () {
        var pluginOptions;
        return __generator(this, function (_a) {
            pluginOptions = {
                partials: {
                    otherPartial: fs.readFileSync(path.join(__dirname, '../src/partialDirs/anotherDir/otherPartial.hbs')).toString()
                }
            };
            testTemplate('../src/with-plugin-partial.hbs', pluginOptions);
            return [2 /*return*/];
        });
    }); },
    function () { return __awaiter(void 0, void 0, void 0, function () {
        var pluginOptions;
        return __generator(this, function (_a) {
            pluginOptions = {};
            testTemplate('../src/with-dir-partials.hbs', pluginOptions);
            return [2 /*return*/];
        });
    }); },
    function () { return __awaiter(void 0, void 0, void 0, function () {
        var pluginOptions;
        return __generator(this, function (_a) {
            pluginOptions = {};
            testTemplate('../src/nested-templates/nested/with-ancestor-dir-partial.hbs', pluginOptions);
            return [2 /*return*/];
        });
    }); },
    function () { return __awaiter(void 0, void 0, void 0, function () {
        var pluginOptions;
        return __generator(this, function (_a) {
            pluginOptions = {};
            testTemplate('../src/nested-templates/with-parent-dir-partial.hbs', pluginOptions);
            return [2 /*return*/];
        });
    }); },
    function () { return __awaiter(void 0, void 0, void 0, function () {
        var pluginOptions;
        return __generator(this, function (_a) {
            pluginOptions = {};
            testTemplate('../src/nested-templates/with-cousin-dir-partial.hbs', pluginOptions);
            return [2 /*return*/];
        });
    }); },
    function () { return __awaiter(void 0, void 0, void 0, function () {
        var pluginOptions;
        return __generator(this, function (_a) {
            pluginOptions = {};
            testTemplate('../src/with-partial-block.hbs', pluginOptions);
            return [2 /*return*/];
        });
    }); },
    function () { return __awaiter(void 0, void 0, void 0, function () {
        var pluginOptions;
        return __generator(this, function (_a) {
            pluginOptions = {};
            testTemplate('../src/with-inline-partial.hbs', pluginOptions);
            return [2 /*return*/];
        });
    }); },
];
PREPARATIONS.forEach(function (func) { return func(); });
