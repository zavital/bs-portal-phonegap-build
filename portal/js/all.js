/**
 * @license AngularJS v1.5.8
 * (c) 2010-2016 Google, Inc. http://angularjs.org
 * License: MIT
 */

/**
 * @license AngularJS v1.4.7
 * (c) 2010-2015 Google, Inc. http://angularjs.org
 * License: MIT
 */

/**
 * State-based routing for AngularJS
 * @version v0.2.15
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

/*!
  * Morpheus - A Brilliant Animator
  * https://github.com/ded/morpheus - (c) Dustin Diaz 2011
  * License MIT
  */

/**
 * @license Copyright 2013 Logentries.
 * Please view license at https://raw.github.com/logentries/le_js/master/LICENSE
 */

/*!
 * Pusher JavaScript Library v3.2.1
 * http://pusher.com/
 *
 * Copyright 2016, Pusher
 * Released under the MIT licence.
 */

/*! 3.15.2 / web */

/*
	 CryptoJS v3.1.2
	 code.google.com/p/crypto-js
	 (c) 2009-2013 by Jeff Mott. All rights reserved.
	 code.google.com/p/crypto-js/wiki/License
	 */

/**
 * @license RequireJS domReady 2.0.1 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/domReady for details
 */

/**
     * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
     *
     * @codingstandard ftlabs-jsv2
     * @copyright The Financial Times Limited [All Rights Reserved]
     * @license MIT License (see LICENSE.txt)
     */

function getServiceForDebug(serviceName) {
    return eval(serviceName + "= angular.element(document.body).injector().get(serviceName)");
}

function getControllerForDebug(contollerName) {
    return eval(contollerName + '=angular.element(document.querySelector("[ng-controller="+contollerName+"]")).scope()');
}

function getCurrentLotForDebug() {
    return eval('lot=angular.element(document.querySelector("[ng-controller=LotPageController]")).scope().data.item');
}

!function(window) {
    function minErr(module, ErrorConstructor) {
        return ErrorConstructor = ErrorConstructor || Error, function() {
            var paramPrefix, i, SKIP_INDEXES = 2, templateArgs = arguments, code = templateArgs[0], message = "[" + (module ? module + ":" : "") + code + "] ", template = templateArgs[1];
            for (message += template.replace(/\{\d+\}/g, function(match) {
                var index = +match.slice(1, -1), shiftedIndex = index + SKIP_INDEXES;
                return shiftedIndex < templateArgs.length ? toDebugString(templateArgs[shiftedIndex]) : match;
            }), message += "\nhttp://errors.angularjs.org/1.5.8/" + (module ? module + "/" : "") + code, 
            i = SKIP_INDEXES, paramPrefix = "?"; i < templateArgs.length; i++, paramPrefix = "&") message += paramPrefix + "p" + (i - SKIP_INDEXES) + "=" + encodeURIComponent(toDebugString(templateArgs[i]));
            return new ErrorConstructor(message);
        };
    }
    function isArrayLike(obj) {
        if (null == obj || isWindow(obj)) return !1;
        if (isArray(obj) || isString(obj) || jqLite && obj instanceof jqLite) return !0;
        var length = "length" in Object(obj) && obj.length;
        return isNumber(length) && (length >= 0 && (length - 1 in obj || obj instanceof Array) || "function" == typeof obj.item);
    }
    function forEach(obj, iterator, context) {
        var key, length;
        if (obj) if (isFunction(obj)) for (key in obj) "prototype" == key || "length" == key || "name" == key || obj.hasOwnProperty && !obj.hasOwnProperty(key) || iterator.call(context, obj[key], key, obj); else if (isArray(obj) || isArrayLike(obj)) {
            var isPrimitive = "object" != typeof obj;
            for (key = 0, length = obj.length; length > key; key++) (isPrimitive || key in obj) && iterator.call(context, obj[key], key, obj);
        } else if (obj.forEach && obj.forEach !== forEach) obj.forEach(iterator, context, obj); else if (isBlankObject(obj)) for (key in obj) iterator.call(context, obj[key], key, obj); else if ("function" == typeof obj.hasOwnProperty) for (key in obj) obj.hasOwnProperty(key) && iterator.call(context, obj[key], key, obj); else for (key in obj) hasOwnProperty.call(obj, key) && iterator.call(context, obj[key], key, obj);
        return obj;
    }
    function forEachSorted(obj, iterator, context) {
        for (var keys = Object.keys(obj).sort(), i = 0; i < keys.length; i++) iterator.call(context, obj[keys[i]], keys[i]);
        return keys;
    }
    function reverseParams(iteratorFn) {
        return function(value, key) {
            iteratorFn(key, value);
        };
    }
    function nextUid() {
        return ++uid;
    }
    function setHashKey(obj, h) {
        h ? obj.$$hashKey = h : delete obj.$$hashKey;
    }
    function baseExtend(dst, objs, deep) {
        for (var h = dst.$$hashKey, i = 0, ii = objs.length; ii > i; ++i) {
            var obj = objs[i];
            if (isObject(obj) || isFunction(obj)) for (var keys = Object.keys(obj), j = 0, jj = keys.length; jj > j; j++) {
                var key = keys[j], src = obj[key];
                deep && isObject(src) ? isDate(src) ? dst[key] = new Date(src.valueOf()) : isRegExp(src) ? dst[key] = new RegExp(src) : src.nodeName ? dst[key] = src.cloneNode(!0) : isElement(src) ? dst[key] = src.clone() : (isObject(dst[key]) || (dst[key] = isArray(src) ? [] : {}), 
                baseExtend(dst[key], [ src ], !0)) : dst[key] = src;
            }
        }
        return setHashKey(dst, h), dst;
    }
    function extend(dst) {
        return baseExtend(dst, slice.call(arguments, 1), !1);
    }
    function merge(dst) {
        return baseExtend(dst, slice.call(arguments, 1), !0);
    }
    function toInt(str) {
        return parseInt(str, 10);
    }
    function inherit(parent, extra) {
        return extend(Object.create(parent), extra);
    }
    function noop() {}
    function identity($) {
        return $;
    }
    function valueFn(value) {
        return function() {
            return value;
        };
    }
    function hasCustomToString(obj) {
        return isFunction(obj.toString) && obj.toString !== toString;
    }
    function isUndefined(value) {
        return "undefined" == typeof value;
    }
    function isDefined(value) {
        return "undefined" != typeof value;
    }
    function isObject(value) {
        return null !== value && "object" == typeof value;
    }
    function isBlankObject(value) {
        return null !== value && "object" == typeof value && !getPrototypeOf(value);
    }
    function isString(value) {
        return "string" == typeof value;
    }
    function isNumber(value) {
        return "number" == typeof value;
    }
    function isDate(value) {
        return "[object Date]" === toString.call(value);
    }
    function isFunction(value) {
        return "function" == typeof value;
    }
    function isRegExp(value) {
        return "[object RegExp]" === toString.call(value);
    }
    function isWindow(obj) {
        return obj && obj.window === obj;
    }
    function isScope(obj) {
        return obj && obj.$evalAsync && obj.$watch;
    }
    function isFile(obj) {
        return "[object File]" === toString.call(obj);
    }
    function isFormData(obj) {
        return "[object FormData]" === toString.call(obj);
    }
    function isBlob(obj) {
        return "[object Blob]" === toString.call(obj);
    }
    function isBoolean(value) {
        return "boolean" == typeof value;
    }
    function isPromiseLike(obj) {
        return obj && isFunction(obj.then);
    }
    function isTypedArray(value) {
        return value && isNumber(value.length) && TYPED_ARRAY_REGEXP.test(toString.call(value));
    }
    function isArrayBuffer(obj) {
        return "[object ArrayBuffer]" === toString.call(obj);
    }
    function isElement(node) {
        return !(!node || !(node.nodeName || node.prop && node.attr && node.find));
    }
    function makeMap(str) {
        var i, obj = {}, items = str.split(",");
        for (i = 0; i < items.length; i++) obj[items[i]] = !0;
        return obj;
    }
    function nodeName_(element) {
        return lowercase(element.nodeName || element[0] && element[0].nodeName);
    }
    function arrayRemove(array, value) {
        var index = array.indexOf(value);
        return index >= 0 && array.splice(index, 1), index;
    }
    function copy(source, destination) {
        function copyRecurse(source, destination) {
            var key, h = destination.$$hashKey;
            if (isArray(source)) for (var i = 0, ii = source.length; ii > i; i++) destination.push(copyElement(source[i])); else if (isBlankObject(source)) for (key in source) destination[key] = copyElement(source[key]); else if (source && "function" == typeof source.hasOwnProperty) for (key in source) source.hasOwnProperty(key) && (destination[key] = copyElement(source[key])); else for (key in source) hasOwnProperty.call(source, key) && (destination[key] = copyElement(source[key]));
            return setHashKey(destination, h), destination;
        }
        function copyElement(source) {
            if (!isObject(source)) return source;
            var index = stackSource.indexOf(source);
            if (-1 !== index) return stackDest[index];
            if (isWindow(source) || isScope(source)) throw ngMinErr("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
            var needsRecurse = !1, destination = copyType(source);
            return void 0 === destination && (destination = isArray(source) ? [] : Object.create(getPrototypeOf(source)), 
            needsRecurse = !0), stackSource.push(source), stackDest.push(destination), needsRecurse ? copyRecurse(source, destination) : destination;
        }
        function copyType(source) {
            switch (toString.call(source)) {
              case "[object Int8Array]":
              case "[object Int16Array]":
              case "[object Int32Array]":
              case "[object Float32Array]":
              case "[object Float64Array]":
              case "[object Uint8Array]":
              case "[object Uint8ClampedArray]":
              case "[object Uint16Array]":
              case "[object Uint32Array]":
                return new source.constructor(copyElement(source.buffer), source.byteOffset, source.length);

              case "[object ArrayBuffer]":
                if (!source.slice) {
                    var copied = new ArrayBuffer(source.byteLength);
                    return new Uint8Array(copied).set(new Uint8Array(source)), copied;
                }
                return source.slice(0);

              case "[object Boolean]":
              case "[object Number]":
              case "[object String]":
              case "[object Date]":
                return new source.constructor(source.valueOf());

              case "[object RegExp]":
                var re = new RegExp(source.source, source.toString().match(/[^\/]*$/)[0]);
                return re.lastIndex = source.lastIndex, re;

              case "[object Blob]":
                return new source.constructor([ source ], {
                    type: source.type
                });
            }
            return isFunction(source.cloneNode) ? source.cloneNode(!0) : void 0;
        }
        var stackSource = [], stackDest = [];
        if (destination) {
            if (isTypedArray(destination) || isArrayBuffer(destination)) throw ngMinErr("cpta", "Can't copy! TypedArray destination cannot be mutated.");
            if (source === destination) throw ngMinErr("cpi", "Can't copy! Source and destination are identical.");
            return isArray(destination) ? destination.length = 0 : forEach(destination, function(value, key) {
                "$$hashKey" !== key && delete destination[key];
            }), stackSource.push(source), stackDest.push(destination), copyRecurse(source, destination);
        }
        return copyElement(source);
    }
    function equals(o1, o2) {
        if (o1 === o2) return !0;
        if (null === o1 || null === o2) return !1;
        if (o1 !== o1 && o2 !== o2) return !0;
        var length, key, keySet, t1 = typeof o1, t2 = typeof o2;
        if (t1 == t2 && "object" == t1) {
            if (!isArray(o1)) {
                if (isDate(o1)) return isDate(o2) ? equals(o1.getTime(), o2.getTime()) : !1;
                if (isRegExp(o1)) return isRegExp(o2) ? o1.toString() == o2.toString() : !1;
                if (isScope(o1) || isScope(o2) || isWindow(o1) || isWindow(o2) || isArray(o2) || isDate(o2) || isRegExp(o2)) return !1;
                keySet = createMap();
                for (key in o1) if ("$" !== key.charAt(0) && !isFunction(o1[key])) {
                    if (!equals(o1[key], o2[key])) return !1;
                    keySet[key] = !0;
                }
                for (key in o2) if (!(key in keySet) && "$" !== key.charAt(0) && isDefined(o2[key]) && !isFunction(o2[key])) return !1;
                return !0;
            }
            if (!isArray(o2)) return !1;
            if ((length = o1.length) == o2.length) {
                for (key = 0; length > key; key++) if (!equals(o1[key], o2[key])) return !1;
                return !0;
            }
        }
        return !1;
    }
    function concat(array1, array2, index) {
        return array1.concat(slice.call(array2, index));
    }
    function sliceArgs(args, startIndex) {
        return slice.call(args, startIndex || 0);
    }
    function bind(self, fn) {
        var curryArgs = arguments.length > 2 ? sliceArgs(arguments, 2) : [];
        return !isFunction(fn) || fn instanceof RegExp ? fn : curryArgs.length ? function() {
            return arguments.length ? fn.apply(self, concat(curryArgs, arguments, 0)) : fn.apply(self, curryArgs);
        } : function() {
            return arguments.length ? fn.apply(self, arguments) : fn.call(self);
        };
    }
    function toJsonReplacer(key, value) {
        var val = value;
        return "string" == typeof key && "$" === key.charAt(0) && "$" === key.charAt(1) ? val = void 0 : isWindow(value) ? val = "$WINDOW" : value && window.document === value ? val = "$DOCUMENT" : isScope(value) && (val = "$SCOPE"), 
        val;
    }
    function toJson(obj, pretty) {
        return isUndefined(obj) ? void 0 : (isNumber(pretty) || (pretty = pretty ? 2 : null), 
        JSON.stringify(obj, toJsonReplacer, pretty));
    }
    function fromJson(json) {
        return isString(json) ? JSON.parse(json) : json;
    }
    function timezoneToOffset(timezone, fallback) {
        timezone = timezone.replace(ALL_COLONS, "");
        var requestedTimezoneOffset = Date.parse("Jan 01, 1970 00:00:00 " + timezone) / 6e4;
        return isNaN(requestedTimezoneOffset) ? fallback : requestedTimezoneOffset;
    }
    function addDateMinutes(date, minutes) {
        return date = new Date(date.getTime()), date.setMinutes(date.getMinutes() + minutes), 
        date;
    }
    function convertTimezoneToLocal(date, timezone, reverse) {
        reverse = reverse ? -1 : 1;
        var dateTimezoneOffset = date.getTimezoneOffset(), timezoneOffset = timezoneToOffset(timezone, dateTimezoneOffset);
        return addDateMinutes(date, reverse * (timezoneOffset - dateTimezoneOffset));
    }
    function startingTag(element) {
        element = jqLite(element).clone();
        try {
            element.empty();
        } catch (e) {}
        var elemHtml = jqLite("<div>").append(element).html();
        try {
            return element[0].nodeType === NODE_TYPE_TEXT ? lowercase(elemHtml) : elemHtml.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(match, nodeName) {
                return "<" + lowercase(nodeName);
            });
        } catch (e) {
            return lowercase(elemHtml);
        }
    }
    function tryDecodeURIComponent(value) {
        try {
            return decodeURIComponent(value);
        } catch (e) {}
    }
    function parseKeyValue(keyValue) {
        var obj = {};
        return forEach((keyValue || "").split("&"), function(keyValue) {
            var splitPoint, key, val;
            keyValue && (key = keyValue = keyValue.replace(/\+/g, "%20"), splitPoint = keyValue.indexOf("="), 
            -1 !== splitPoint && (key = keyValue.substring(0, splitPoint), val = keyValue.substring(splitPoint + 1)), 
            key = tryDecodeURIComponent(key), isDefined(key) && (val = isDefined(val) ? tryDecodeURIComponent(val) : !0, 
            hasOwnProperty.call(obj, key) ? isArray(obj[key]) ? obj[key].push(val) : obj[key] = [ obj[key], val ] : obj[key] = val));
        }), obj;
    }
    function toKeyValue(obj) {
        var parts = [];
        return forEach(obj, function(value, key) {
            isArray(value) ? forEach(value, function(arrayValue) {
                parts.push(encodeUriQuery(key, !0) + (arrayValue === !0 ? "" : "=" + encodeUriQuery(arrayValue, !0)));
            }) : parts.push(encodeUriQuery(key, !0) + (value === !0 ? "" : "=" + encodeUriQuery(value, !0)));
        }), parts.length ? parts.join("&") : "";
    }
    function encodeUriSegment(val) {
        return val;
    }
    function encodeUriQuery(val, pctEncodeSpaces) {
        return encodeURIComponent(val).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, pctEncodeSpaces ? "%20" : "+");
    }
    function getNgAttribute(element, ngAttr) {
        var attr, i, ii = ngAttrPrefixes.length;
        for (i = 0; ii > i; ++i) if (attr = ngAttrPrefixes[i] + ngAttr, isString(attr = element.getAttribute(attr))) return attr;
        return null;
    }
    function angularInit(element, bootstrap) {
        var appElement, module, config = {};
        forEach(ngAttrPrefixes, function(prefix) {
            var name = prefix + "app";
            !appElement && element.hasAttribute && element.hasAttribute(name) && (appElement = element, 
            module = element.getAttribute(name));
        }), forEach(ngAttrPrefixes, function(prefix) {
            var candidate, name = prefix + "app";
            !appElement && (candidate = element.querySelector("[" + name.replace(":", "\\:") + "]")) && (appElement = candidate, 
            module = candidate.getAttribute(name));
        }), appElement && (config.strictDi = null !== getNgAttribute(appElement, "strict-di"), 
        bootstrap(appElement, module ? [ module ] : [], config));
    }
    function bootstrap(element, modules, config) {
        isObject(config) || (config = {});
        var defaultConfig = {
            strictDi: !1
        };
        config = extend(defaultConfig, config);
        var doBootstrap = function() {
            if (element = jqLite(element), element.injector()) {
                var tag = element[0] === window.document ? "document" : startingTag(element);
                throw ngMinErr("btstrpd", "App already bootstrapped with this element '{0}'", tag.replace(/</, "&lt;").replace(/>/, "&gt;"));
            }
            modules = modules || [], modules.unshift([ "$provide", function($provide) {
                $provide.value("$rootElement", element);
            } ]), config.debugInfoEnabled && modules.push([ "$compileProvider", function($compileProvider) {
                $compileProvider.debugInfoEnabled(!0);
            } ]), modules.unshift("ng");
            var injector = createInjector(modules, config.strictDi);
            return injector.invoke([ "$rootScope", "$rootElement", "$compile", "$injector", function(scope, element, compile, injector) {
                scope.$apply(function() {
                    element.data("$injector", injector), compile(element)(scope);
                });
            } ]), injector;
        }, NG_ENABLE_DEBUG_INFO = /^NG_ENABLE_DEBUG_INFO!/, NG_DEFER_BOOTSTRAP = /^NG_DEFER_BOOTSTRAP!/;
        return window && NG_ENABLE_DEBUG_INFO.test(window.name) && (config.debugInfoEnabled = !0, 
        window.name = window.name.replace(NG_ENABLE_DEBUG_INFO, "")), window && !NG_DEFER_BOOTSTRAP.test(window.name) ? doBootstrap() : (window.name = window.name.replace(NG_DEFER_BOOTSTRAP, ""), 
        angular.resumeBootstrap = function(extraModules) {
            return forEach(extraModules, function(module) {
                modules.push(module);
            }), doBootstrap();
        }, void (isFunction(angular.resumeDeferredBootstrap) && angular.resumeDeferredBootstrap()));
    }
    function reloadWithDebugInfo() {
        window.name = "NG_ENABLE_DEBUG_INFO!" + window.name, window.location.reload();
    }
    function getTestability(rootElement) {
        var injector = angular.element(rootElement).injector();
        if (!injector) throw ngMinErr("test", "no injector found for element argument to getTestability");
        return injector.get("$$testability");
    }
    function snake_case(name, separator) {
        return separator = separator || "_", name.replace(SNAKE_CASE_REGEXP, function(letter, pos) {
            return (pos ? separator : "") + letter.toLowerCase();
        });
    }
    function bindJQuery() {
        var originalCleanData;
        if (!bindJQueryFired) {
            var jqName = jq();
            jQuery = isUndefined(jqName) ? window.jQuery : jqName ? window[jqName] : void 0, 
            jQuery && jQuery.fn.on ? (jqLite = jQuery, extend(jQuery.fn, {
                scope: JQLitePrototype.scope,
                isolateScope: JQLitePrototype.isolateScope,
                controller: JQLitePrototype.controller,
                injector: JQLitePrototype.injector,
                inheritedData: JQLitePrototype.inheritedData
            }), originalCleanData = jQuery.cleanData, jQuery.cleanData = function(elems) {
                for (var events, elem, i = 0; null != (elem = elems[i]); i++) events = jQuery._data(elem, "events"), 
                events && events.$destroy && jQuery(elem).triggerHandler("$destroy");
                originalCleanData(elems);
            }) : jqLite = JQLite, angular.element = jqLite, bindJQueryFired = !0;
        }
    }
    function assertArg(arg, name, reason) {
        if (!arg) throw ngMinErr("areq", "Argument '{0}' is {1}", name || "?", reason || "required");
        return arg;
    }
    function assertArgFn(arg, name, acceptArrayAnnotation) {
        return acceptArrayAnnotation && isArray(arg) && (arg = arg[arg.length - 1]), assertArg(isFunction(arg), name, "not a function, got " + (arg && "object" == typeof arg ? arg.constructor.name || "Object" : typeof arg)), 
        arg;
    }
    function assertNotHasOwnProperty(name, context) {
        if ("hasOwnProperty" === name) throw ngMinErr("badname", "hasOwnProperty is not a valid {0} name", context);
    }
    function getter(obj, path, bindFnToScope) {
        if (!path) return obj;
        for (var key, keys = path.split("."), lastInstance = obj, len = keys.length, i = 0; len > i; i++) key = keys[i], 
        obj && (obj = (lastInstance = obj)[key]);
        return !bindFnToScope && isFunction(obj) ? bind(lastInstance, obj) : obj;
    }
    function getBlockNodes(nodes) {
        for (var blockNodes, node = nodes[0], endNode = nodes[nodes.length - 1], i = 1; node !== endNode && (node = node.nextSibling); i++) (blockNodes || nodes[i] !== node) && (blockNodes || (blockNodes = jqLite(slice.call(nodes, 0, i))), 
        blockNodes.push(node));
        return blockNodes || nodes;
    }
    function createMap() {
        return Object.create(null);
    }
    function setupModuleLoader(window) {
        function ensure(obj, name, factory) {
            return obj[name] || (obj[name] = factory());
        }
        var $injectorMinErr = minErr("$injector"), ngMinErr = minErr("ng"), angular = ensure(window, "angular", Object);
        return angular.$$minErr = angular.$$minErr || minErr, ensure(angular, "module", function() {
            var modules = {};
            return function(name, requires, configFn) {
                var assertNotHasOwnProperty = function(name, context) {
                    if ("hasOwnProperty" === name) throw ngMinErr("badname", "hasOwnProperty is not a valid {0} name", context);
                };
                return assertNotHasOwnProperty(name, "module"), requires && modules.hasOwnProperty(name) && (modules[name] = null), 
                ensure(modules, name, function() {
                    function invokeLater(provider, method, insertMethod, queue) {
                        return queue || (queue = invokeQueue), function() {
                            return queue[insertMethod || "push"]([ provider, method, arguments ]), moduleInstance;
                        };
                    }
                    function invokeLaterAndSetModuleName(provider, method) {
                        return function(recipeName, factoryFunction) {
                            return factoryFunction && isFunction(factoryFunction) && (factoryFunction.$$moduleName = name), 
                            invokeQueue.push([ provider, method, arguments ]), moduleInstance;
                        };
                    }
                    if (!requires) throw $injectorMinErr("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", name);
                    var invokeQueue = [], configBlocks = [], runBlocks = [], config = invokeLater("$injector", "invoke", "push", configBlocks), moduleInstance = {
                        _invokeQueue: invokeQueue,
                        _configBlocks: configBlocks,
                        _runBlocks: runBlocks,
                        requires: requires,
                        name: name,
                        provider: invokeLaterAndSetModuleName("$provide", "provider"),
                        factory: invokeLaterAndSetModuleName("$provide", "factory"),
                        service: invokeLaterAndSetModuleName("$provide", "service"),
                        value: invokeLater("$provide", "value"),
                        constant: invokeLater("$provide", "constant", "unshift"),
                        decorator: invokeLaterAndSetModuleName("$provide", "decorator"),
                        animation: invokeLaterAndSetModuleName("$animateProvider", "register"),
                        filter: invokeLaterAndSetModuleName("$filterProvider", "register"),
                        controller: invokeLaterAndSetModuleName("$controllerProvider", "register"),
                        directive: invokeLaterAndSetModuleName("$compileProvider", "directive"),
                        component: invokeLaterAndSetModuleName("$compileProvider", "component"),
                        config: config,
                        run: function(block) {
                            return runBlocks.push(block), this;
                        }
                    };
                    return configFn && config(configFn), moduleInstance;
                });
            };
        });
    }
    function shallowCopy(src, dst) {
        if (isArray(src)) {
            dst = dst || [];
            for (var i = 0, ii = src.length; ii > i; i++) dst[i] = src[i];
        } else if (isObject(src)) {
            dst = dst || {};
            for (var key in src) ("$" !== key.charAt(0) || "$" !== key.charAt(1)) && (dst[key] = src[key]);
        }
        return dst || src;
    }
    function serializeObject(obj) {
        var seen = [];
        return JSON.stringify(obj, function(key, val) {
            if (val = toJsonReplacer(key, val), isObject(val)) {
                if (seen.indexOf(val) >= 0) return "...";
                seen.push(val);
            }
            return val;
        });
    }
    function toDebugString(obj) {
        return "function" == typeof obj ? obj.toString().replace(/ \{[\s\S]*$/, "") : isUndefined(obj) ? "undefined" : "string" != typeof obj ? serializeObject(obj) : obj;
    }
    function publishExternalAPI(angular) {
        extend(angular, {
            bootstrap: bootstrap,
            copy: copy,
            extend: extend,
            merge: merge,
            equals: equals,
            element: jqLite,
            forEach: forEach,
            injector: createInjector,
            noop: noop,
            bind: bind,
            toJson: toJson,
            fromJson: fromJson,
            identity: identity,
            isUndefined: isUndefined,
            isDefined: isDefined,
            isString: isString,
            isFunction: isFunction,
            isObject: isObject,
            isNumber: isNumber,
            isElement: isElement,
            isArray: isArray,
            version: version,
            isDate: isDate,
            lowercase: lowercase,
            uppercase: uppercase,
            callbacks: {
                $$counter: 0
            },
            getTestability: getTestability,
            $$minErr: minErr,
            $$csp: csp,
            reloadWithDebugInfo: reloadWithDebugInfo
        }), (angularModule = setupModuleLoader(window))("ng", [ "ngLocale" ], [ "$provide", function($provide) {
            $provide.provider({
                $$sanitizeUri: $$SanitizeUriProvider
            }), $provide.provider("$compile", $CompileProvider).directive({
                a: htmlAnchorDirective,
                input: inputDirective,
                textarea: inputDirective,
                form: formDirective,
                script: scriptDirective,
                select: selectDirective,
                style: styleDirective,
                option: optionDirective,
                ngBind: ngBindDirective,
                ngBindHtml: ngBindHtmlDirective,
                ngBindTemplate: ngBindTemplateDirective,
                ngClass: ngClassDirective,
                ngClassEven: ngClassEvenDirective,
                ngClassOdd: ngClassOddDirective,
                ngCloak: ngCloakDirective,
                ngController: ngControllerDirective,
                ngForm: ngFormDirective,
                ngHide: ngHideDirective,
                ngIf: ngIfDirective,
                ngInclude: ngIncludeDirective,
                ngInit: ngInitDirective,
                ngNonBindable: ngNonBindableDirective,
                ngPluralize: ngPluralizeDirective,
                ngRepeat: ngRepeatDirective,
                ngShow: ngShowDirective,
                ngStyle: ngStyleDirective,
                ngSwitch: ngSwitchDirective,
                ngSwitchWhen: ngSwitchWhenDirective,
                ngSwitchDefault: ngSwitchDefaultDirective,
                ngOptions: ngOptionsDirective,
                ngTransclude: ngTranscludeDirective,
                ngModel: ngModelDirective,
                ngList: ngListDirective,
                ngChange: ngChangeDirective,
                pattern: patternDirective,
                ngPattern: patternDirective,
                required: requiredDirective,
                ngRequired: requiredDirective,
                minlength: minlengthDirective,
                ngMinlength: minlengthDirective,
                maxlength: maxlengthDirective,
                ngMaxlength: maxlengthDirective,
                ngValue: ngValueDirective,
                ngModelOptions: ngModelOptionsDirective
            }).directive({
                ngInclude: ngIncludeFillContentDirective
            }).directive(ngAttributeAliasDirectives).directive(ngEventDirectives), $provide.provider({
                $anchorScroll: $AnchorScrollProvider,
                $animate: $AnimateProvider,
                $animateCss: $CoreAnimateCssProvider,
                $$animateJs: $$CoreAnimateJsProvider,
                $$animateQueue: $$CoreAnimateQueueProvider,
                $$AnimateRunner: $$AnimateRunnerFactoryProvider,
                $$animateAsyncRun: $$AnimateAsyncRunFactoryProvider,
                $browser: $BrowserProvider,
                $cacheFactory: $CacheFactoryProvider,
                $controller: $ControllerProvider,
                $document: $DocumentProvider,
                $exceptionHandler: $ExceptionHandlerProvider,
                $filter: $FilterProvider,
                $$forceReflow: $$ForceReflowProvider,
                $interpolate: $InterpolateProvider,
                $interval: $IntervalProvider,
                $http: $HttpProvider,
                $httpParamSerializer: $HttpParamSerializerProvider,
                $httpParamSerializerJQLike: $HttpParamSerializerJQLikeProvider,
                $httpBackend: $HttpBackendProvider,
                $xhrFactory: $xhrFactoryProvider,
                $jsonpCallbacks: $jsonpCallbacksProvider,
                $location: $LocationProvider,
                $log: $LogProvider,
                $parse: $ParseProvider,
                $rootScope: $RootScopeProvider,
                $q: $QProvider,
                $$q: $$QProvider,
                $sce: $SceProvider,
                $sceDelegate: $SceDelegateProvider,
                $sniffer: $SnifferProvider,
                $templateCache: $TemplateCacheProvider,
                $templateRequest: $TemplateRequestProvider,
                $$testability: $$TestabilityProvider,
                $timeout: $TimeoutProvider,
                $window: $WindowProvider,
                $$rAF: $$RAFProvider,
                $$jqLite: $$jqLiteProvider,
                $$HashMap: $$HashMapProvider,
                $$cookieReader: $$CookieReaderProvider
            });
        } ]);
    }
    function jqNextId() {
        return ++jqId;
    }
    function camelCase(name) {
        return name.replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
            return offset ? letter.toUpperCase() : letter;
        }).replace(MOZ_HACK_REGEXP, "Moz$1");
    }
    function jqLiteIsTextNode(html) {
        return !HTML_REGEXP.test(html);
    }
    function jqLiteAcceptsData(node) {
        var nodeType = node.nodeType;
        return nodeType === NODE_TYPE_ELEMENT || !nodeType || nodeType === NODE_TYPE_DOCUMENT;
    }
    function jqLiteHasData(node) {
        for (var key in jqCache[node.ng339]) return !0;
        return !1;
    }
    function jqLiteCleanData(nodes) {
        for (var i = 0, ii = nodes.length; ii > i; i++) jqLiteRemoveData(nodes[i]);
    }
    function jqLiteBuildFragment(html, context) {
        var tmp, tag, wrap, i, fragment = context.createDocumentFragment(), nodes = [];
        if (jqLiteIsTextNode(html)) nodes.push(context.createTextNode(html)); else {
            for (tmp = fragment.appendChild(context.createElement("div")), tag = (TAG_NAME_REGEXP.exec(html) || [ "", "" ])[1].toLowerCase(), 
            wrap = wrapMap[tag] || wrapMap._default, tmp.innerHTML = wrap[1] + html.replace(XHTML_TAG_REGEXP, "<$1></$2>") + wrap[2], 
            i = wrap[0]; i--; ) tmp = tmp.lastChild;
            nodes = concat(nodes, tmp.childNodes), tmp = fragment.firstChild, tmp.textContent = "";
        }
        return fragment.textContent = "", fragment.innerHTML = "", forEach(nodes, function(node) {
            fragment.appendChild(node);
        }), fragment;
    }
    function jqLiteParseHTML(html, context) {
        context = context || window.document;
        var parsed;
        return (parsed = SINGLE_TAG_REGEXP.exec(html)) ? [ context.createElement(parsed[1]) ] : (parsed = jqLiteBuildFragment(html, context)) ? parsed.childNodes : [];
    }
    function jqLiteWrapNode(node, wrapper) {
        var parent = node.parentNode;
        parent && parent.replaceChild(wrapper, node), wrapper.appendChild(node);
    }
    function JQLite(element) {
        if (element instanceof JQLite) return element;
        var argIsString;
        if (isString(element) && (element = trim(element), argIsString = !0), !(this instanceof JQLite)) {
            if (argIsString && "<" != element.charAt(0)) throw jqLiteMinErr("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
            return new JQLite(element);
        }
        argIsString ? jqLiteAddNodes(this, jqLiteParseHTML(element)) : jqLiteAddNodes(this, element);
    }
    function jqLiteClone(element) {
        return element.cloneNode(!0);
    }
    function jqLiteDealoc(element, onlyDescendants) {
        if (onlyDescendants || jqLiteRemoveData(element), element.querySelectorAll) for (var descendants = element.querySelectorAll("*"), i = 0, l = descendants.length; l > i; i++) jqLiteRemoveData(descendants[i]);
    }
    function jqLiteOff(element, type, fn, unsupported) {
        if (isDefined(unsupported)) throw jqLiteMinErr("offargs", "jqLite#off() does not support the `selector` argument");
        var expandoStore = jqLiteExpandoStore(element), events = expandoStore && expandoStore.events, handle = expandoStore && expandoStore.handle;
        if (handle) if (type) {
            var removeHandler = function(type) {
                var listenerFns = events[type];
                isDefined(fn) && arrayRemove(listenerFns || [], fn), isDefined(fn) && listenerFns && listenerFns.length > 0 || (removeEventListenerFn(element, type, handle), 
                delete events[type]);
            };
            forEach(type.split(" "), function(type) {
                removeHandler(type), MOUSE_EVENT_MAP[type] && removeHandler(MOUSE_EVENT_MAP[type]);
            });
        } else for (type in events) "$destroy" !== type && removeEventListenerFn(element, type, handle), 
        delete events[type];
    }
    function jqLiteRemoveData(element, name) {
        var expandoId = element.ng339, expandoStore = expandoId && jqCache[expandoId];
        if (expandoStore) {
            if (name) return void delete expandoStore.data[name];
            expandoStore.handle && (expandoStore.events.$destroy && expandoStore.handle({}, "$destroy"), 
            jqLiteOff(element)), delete jqCache[expandoId], element.ng339 = void 0;
        }
    }
    function jqLiteExpandoStore(element, createIfNecessary) {
        var expandoId = element.ng339, expandoStore = expandoId && jqCache[expandoId];
        return createIfNecessary && !expandoStore && (element.ng339 = expandoId = jqNextId(), 
        expandoStore = jqCache[expandoId] = {
            events: {},
            data: {},
            handle: void 0
        }), expandoStore;
    }
    function jqLiteData(element, key, value) {
        if (jqLiteAcceptsData(element)) {
            var isSimpleSetter = isDefined(value), isSimpleGetter = !isSimpleSetter && key && !isObject(key), massGetter = !key, expandoStore = jqLiteExpandoStore(element, !isSimpleGetter), data = expandoStore && expandoStore.data;
            if (isSimpleSetter) data[key] = value; else {
                if (massGetter) return data;
                if (isSimpleGetter) return data && data[key];
                extend(data, key);
            }
        }
    }
    function jqLiteHasClass(element, selector) {
        return element.getAttribute ? (" " + (element.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + selector + " ") > -1 : !1;
    }
    function jqLiteRemoveClass(element, cssClasses) {
        cssClasses && element.setAttribute && forEach(cssClasses.split(" "), function(cssClass) {
            element.setAttribute("class", trim((" " + (element.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + trim(cssClass) + " ", " ")));
        });
    }
    function jqLiteAddClass(element, cssClasses) {
        if (cssClasses && element.setAttribute) {
            var existingClasses = (" " + (element.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            forEach(cssClasses.split(" "), function(cssClass) {
                cssClass = trim(cssClass), -1 === existingClasses.indexOf(" " + cssClass + " ") && (existingClasses += cssClass + " ");
            }), element.setAttribute("class", trim(existingClasses));
        }
    }
    function jqLiteAddNodes(root, elements) {
        if (elements) if (elements.nodeType) root[root.length++] = elements; else {
            var length = elements.length;
            if ("number" == typeof length && elements.window !== elements) {
                if (length) for (var i = 0; length > i; i++) root[root.length++] = elements[i];
            } else root[root.length++] = elements;
        }
    }
    function jqLiteController(element, name) {
        return jqLiteInheritedData(element, "$" + (name || "ngController") + "Controller");
    }
    function jqLiteInheritedData(element, name, value) {
        element.nodeType == NODE_TYPE_DOCUMENT && (element = element.documentElement);
        for (var names = isArray(name) ? name : [ name ]; element; ) {
            for (var i = 0, ii = names.length; ii > i; i++) if (isDefined(value = jqLite.data(element, names[i]))) return value;
            element = element.parentNode || element.nodeType === NODE_TYPE_DOCUMENT_FRAGMENT && element.host;
        }
    }
    function jqLiteEmpty(element) {
        for (jqLiteDealoc(element, !0); element.firstChild; ) element.removeChild(element.firstChild);
    }
    function jqLiteRemove(element, keepData) {
        keepData || jqLiteDealoc(element);
        var parent = element.parentNode;
        parent && parent.removeChild(element);
    }
    function jqLiteDocumentLoaded(action, win) {
        win = win || window, "complete" === win.document.readyState ? win.setTimeout(action) : jqLite(win).on("load", action);
    }
    function getBooleanAttrName(element, name) {
        var booleanAttr = BOOLEAN_ATTR[name.toLowerCase()];
        return booleanAttr && BOOLEAN_ELEMENTS[nodeName_(element)] && booleanAttr;
    }
    function getAliasedAttrName(name) {
        return ALIASED_ATTR[name];
    }
    function createEventHandler(element, events) {
        var eventHandler = function(event, type) {
            event.isDefaultPrevented = function() {
                return event.defaultPrevented;
            };
            var eventFns = events[type || event.type], eventFnsLength = eventFns ? eventFns.length : 0;
            if (eventFnsLength) {
                if (isUndefined(event.immediatePropagationStopped)) {
                    var originalStopImmediatePropagation = event.stopImmediatePropagation;
                    event.stopImmediatePropagation = function() {
                        event.immediatePropagationStopped = !0, event.stopPropagation && event.stopPropagation(), 
                        originalStopImmediatePropagation && originalStopImmediatePropagation.call(event);
                    };
                }
                event.isImmediatePropagationStopped = function() {
                    return event.immediatePropagationStopped === !0;
                };
                var handlerWrapper = eventFns.specialHandlerWrapper || defaultHandlerWrapper;
                eventFnsLength > 1 && (eventFns = shallowCopy(eventFns));
                for (var i = 0; eventFnsLength > i; i++) event.isImmediatePropagationStopped() || handlerWrapper(element, event, eventFns[i]);
            }
        };
        return eventHandler.elem = element, eventHandler;
    }
    function defaultHandlerWrapper(element, event, handler) {
        handler.call(element, event);
    }
    function specialMouseHandlerWrapper(target, event, handler) {
        var related = event.relatedTarget;
        (!related || related !== target && !jqLiteContains.call(target, related)) && handler.call(target, event);
    }
    function $$jqLiteProvider() {
        this.$get = function() {
            return extend(JQLite, {
                hasClass: function(node, classes) {
                    return node.attr && (node = node[0]), jqLiteHasClass(node, classes);
                },
                addClass: function(node, classes) {
                    return node.attr && (node = node[0]), jqLiteAddClass(node, classes);
                },
                removeClass: function(node, classes) {
                    return node.attr && (node = node[0]), jqLiteRemoveClass(node, classes);
                }
            });
        };
    }
    function hashKey(obj, nextUidFn) {
        var key = obj && obj.$$hashKey;
        if (key) return "function" == typeof key && (key = obj.$$hashKey()), key;
        var objType = typeof obj;
        return key = "function" == objType || "object" == objType && null !== obj ? obj.$$hashKey = objType + ":" + (nextUidFn || nextUid)() : objType + ":" + obj;
    }
    function HashMap(array, isolatedUid) {
        if (isolatedUid) {
            var uid = 0;
            this.nextUid = function() {
                return ++uid;
            };
        }
        forEach(array, this.put, this);
    }
    function stringifyFn(fn) {
        return Function.prototype.toString.call(fn) + " ";
    }
    function extractArgs(fn) {
        var fnText = stringifyFn(fn).replace(STRIP_COMMENTS, ""), args = fnText.match(ARROW_ARG) || fnText.match(FN_ARGS);
        return args;
    }
    function anonFn(fn) {
        var args = extractArgs(fn);
        return args ? "function(" + (args[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn";
    }
    function annotate(fn, strictDi, name) {
        var $inject, argDecl, last;
        if ("function" == typeof fn) {
            if (!($inject = fn.$inject)) {
                if ($inject = [], fn.length) {
                    if (strictDi) throw isString(name) && name || (name = fn.name || anonFn(fn)), $injectorMinErr("strictdi", "{0} is not using explicit annotation and cannot be invoked in strict mode", name);
                    argDecl = extractArgs(fn), forEach(argDecl[1].split(FN_ARG_SPLIT), function(arg) {
                        arg.replace(FN_ARG, function(all, underscore, name) {
                            $inject.push(name);
                        });
                    });
                }
                fn.$inject = $inject;
            }
        } else isArray(fn) ? (last = fn.length - 1, assertArgFn(fn[last], "fn"), $inject = fn.slice(0, last)) : assertArgFn(fn, "fn", !0);
        return $inject;
    }
    function createInjector(modulesToLoad, strictDi) {
        function supportObject(delegate) {
            return function(key, value) {
                return isObject(key) ? void forEach(key, reverseParams(delegate)) : delegate(key, value);
            };
        }
        function provider(name, provider_) {
            if (assertNotHasOwnProperty(name, "service"), (isFunction(provider_) || isArray(provider_)) && (provider_ = providerInjector.instantiate(provider_)), 
            !provider_.$get) throw $injectorMinErr("pget", "Provider '{0}' must define $get factory method.", name);
            return providerCache[name + providerSuffix] = provider_;
        }
        function enforceReturnValue(name, factory) {
            return function() {
                var result = instanceInjector.invoke(factory, this);
                if (isUndefined(result)) throw $injectorMinErr("undef", "Provider '{0}' must return a value from $get factory method.", name);
                return result;
            };
        }
        function factory(name, factoryFn, enforce) {
            return provider(name, {
                $get: enforce !== !1 ? enforceReturnValue(name, factoryFn) : factoryFn
            });
        }
        function service(name, constructor) {
            return factory(name, [ "$injector", function($injector) {
                return $injector.instantiate(constructor);
            } ]);
        }
        function value(name, val) {
            return factory(name, valueFn(val), !1);
        }
        function constant(name, value) {
            assertNotHasOwnProperty(name, "constant"), providerCache[name] = value, instanceCache[name] = value;
        }
        function decorator(serviceName, decorFn) {
            var origProvider = providerInjector.get(serviceName + providerSuffix), orig$get = origProvider.$get;
            origProvider.$get = function() {
                var origInstance = instanceInjector.invoke(orig$get, origProvider);
                return instanceInjector.invoke(decorFn, null, {
                    $delegate: origInstance
                });
            };
        }
        function loadModules(modulesToLoad) {
            assertArg(isUndefined(modulesToLoad) || isArray(modulesToLoad), "modulesToLoad", "not an array");
            var moduleFn, runBlocks = [];
            return forEach(modulesToLoad, function(module) {
                function runInvokeQueue(queue) {
                    var i, ii;
                    for (i = 0, ii = queue.length; ii > i; i++) {
                        var invokeArgs = queue[i], provider = providerInjector.get(invokeArgs[0]);
                        provider[invokeArgs[1]].apply(provider, invokeArgs[2]);
                    }
                }
                if (!loadedModules.get(module)) {
                    loadedModules.put(module, !0);
                    try {
                        isString(module) ? (moduleFn = angularModule(module), runBlocks = runBlocks.concat(loadModules(moduleFn.requires)).concat(moduleFn._runBlocks), 
                        runInvokeQueue(moduleFn._invokeQueue), runInvokeQueue(moduleFn._configBlocks)) : isFunction(module) ? runBlocks.push(providerInjector.invoke(module)) : isArray(module) ? runBlocks.push(providerInjector.invoke(module)) : assertArgFn(module, "module");
                    } catch (e) {
                        throw isArray(module) && (module = module[module.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), 
                        $injectorMinErr("modulerr", "Failed to instantiate module {0} due to:\n{1}", module, e.stack || e.message || e);
                    }
                }
            }), runBlocks;
        }
        function createInternalInjector(cache, factory) {
            function getService(serviceName, caller) {
                if (cache.hasOwnProperty(serviceName)) {
                    if (cache[serviceName] === INSTANTIATING) throw $injectorMinErr("cdep", "Circular dependency found: {0}", serviceName + " <- " + path.join(" <- "));
                    return cache[serviceName];
                }
                try {
                    return path.unshift(serviceName), cache[serviceName] = INSTANTIATING, cache[serviceName] = factory(serviceName, caller);
                } catch (err) {
                    throw cache[serviceName] === INSTANTIATING && delete cache[serviceName], err;
                } finally {
                    path.shift();
                }
            }
            function injectionArgs(fn, locals, serviceName) {
                for (var args = [], $inject = createInjector.$$annotate(fn, strictDi, serviceName), i = 0, length = $inject.length; length > i; i++) {
                    var key = $inject[i];
                    if ("string" != typeof key) throw $injectorMinErr("itkn", "Incorrect injection token! Expected service name as string, got {0}", key);
                    args.push(locals && locals.hasOwnProperty(key) ? locals[key] : getService(key, serviceName));
                }
                return args;
            }
            function isClass(func) {
                return 11 >= msie ? !1 : "function" == typeof func && /^(?:class\b|constructor\()/.test(stringifyFn(func));
            }
            function invoke(fn, self, locals, serviceName) {
                "string" == typeof locals && (serviceName = locals, locals = null);
                var args = injectionArgs(fn, locals, serviceName);
                return isArray(fn) && (fn = fn[fn.length - 1]), isClass(fn) ? (args.unshift(null), 
                new (Function.prototype.bind.apply(fn, args))()) : fn.apply(self, args);
            }
            function instantiate(Type, locals, serviceName) {
                var ctor = isArray(Type) ? Type[Type.length - 1] : Type, args = injectionArgs(Type, locals, serviceName);
                return args.unshift(null), new (Function.prototype.bind.apply(ctor, args))();
            }
            return {
                invoke: invoke,
                instantiate: instantiate,
                get: getService,
                annotate: createInjector.$$annotate,
                has: function(name) {
                    return providerCache.hasOwnProperty(name + providerSuffix) || cache.hasOwnProperty(name);
                }
            };
        }
        strictDi = strictDi === !0;
        var INSTANTIATING = {}, providerSuffix = "Provider", path = [], loadedModules = new HashMap([], !0), providerCache = {
            $provide: {
                provider: supportObject(provider),
                factory: supportObject(factory),
                service: supportObject(service),
                value: supportObject(value),
                constant: supportObject(constant),
                decorator: decorator
            }
        }, providerInjector = providerCache.$injector = createInternalInjector(providerCache, function(serviceName, caller) {
            throw angular.isString(caller) && path.push(caller), $injectorMinErr("unpr", "Unknown provider: {0}", path.join(" <- "));
        }), instanceCache = {}, protoInstanceInjector = createInternalInjector(instanceCache, function(serviceName, caller) {
            var provider = providerInjector.get(serviceName + providerSuffix, caller);
            return instanceInjector.invoke(provider.$get, provider, void 0, serviceName);
        }), instanceInjector = protoInstanceInjector;
        providerCache["$injector" + providerSuffix] = {
            $get: valueFn(protoInstanceInjector)
        };
        var runBlocks = loadModules(modulesToLoad);
        return instanceInjector = protoInstanceInjector.get("$injector"), instanceInjector.strictDi = strictDi, 
        forEach(runBlocks, function(fn) {
            fn && instanceInjector.invoke(fn);
        }), instanceInjector;
    }
    function $AnchorScrollProvider() {
        var autoScrollingEnabled = !0;
        this.disableAutoScrolling = function() {
            autoScrollingEnabled = !1;
        }, this.$get = [ "$window", "$location", "$rootScope", function($window, $location, $rootScope) {
            function getFirstAnchor(list) {
                var result = null;
                return Array.prototype.some.call(list, function(element) {
                    return "a" === nodeName_(element) ? (result = element, !0) : void 0;
                }), result;
            }
            function getYOffset() {
                var offset = scroll.yOffset;
                if (isFunction(offset)) offset = offset(); else if (isElement(offset)) {
                    var elem = offset[0], style = $window.getComputedStyle(elem);
                    offset = "fixed" !== style.position ? 0 : elem.getBoundingClientRect().bottom;
                } else isNumber(offset) || (offset = 0);
                return offset;
            }
            function scrollTo(elem) {
                if (elem) {
                    elem.scrollIntoView();
                    var offset = getYOffset();
                    if (offset) {
                        var elemTop = elem.getBoundingClientRect().top;
                        $window.scrollBy(0, elemTop - offset);
                    }
                } else $window.scrollTo(0, 0);
            }
            function scroll(hash) {
                hash = isString(hash) ? hash : $location.hash();
                var elm;
                hash ? (elm = document.getElementById(hash)) ? scrollTo(elm) : (elm = getFirstAnchor(document.getElementsByName(hash))) ? scrollTo(elm) : "top" === hash && scrollTo(null) : scrollTo(null);
            }
            var document = $window.document;
            return autoScrollingEnabled && $rootScope.$watch(function() {
                return $location.hash();
            }, function(newVal, oldVal) {
                (newVal !== oldVal || "" !== newVal) && jqLiteDocumentLoaded(function() {
                    $rootScope.$evalAsync(scroll);
                });
            }), scroll;
        } ];
    }
    function mergeClasses(a, b) {
        return a || b ? a ? b ? (isArray(a) && (a = a.join(" ")), isArray(b) && (b = b.join(" ")), 
        a + " " + b) : a : b : "";
    }
    function extractElementNode(element) {
        for (var i = 0; i < element.length; i++) {
            var elm = element[i];
            if (elm.nodeType === ELEMENT_NODE) return elm;
        }
    }
    function splitClasses(classes) {
        isString(classes) && (classes = classes.split(" "));
        var obj = createMap();
        return forEach(classes, function(klass) {
            klass.length && (obj[klass] = !0);
        }), obj;
    }
    function prepareAnimateOptions(options) {
        return isObject(options) ? options : {};
    }
    function Browser(window, document, $log, $sniffer) {
        function completeOutstandingRequest(fn) {
            try {
                fn.apply(null, sliceArgs(arguments, 1));
            } finally {
                if (outstandingRequestCount--, 0 === outstandingRequestCount) for (;outstandingRequestCallbacks.length; ) try {
                    outstandingRequestCallbacks.pop()();
                } catch (e) {
                    $log.error(e);
                }
            }
        }
        function getHash(url) {
            var index = url.indexOf("#");
            return -1 === index ? "" : url.substr(index);
        }
        function cacheStateAndFireUrlChange() {
            pendingLocation = null, cacheState(), fireUrlChange();
        }
        function cacheState() {
            cachedState = getCurrentState(), cachedState = isUndefined(cachedState) ? null : cachedState, 
            equals(cachedState, lastCachedState) && (cachedState = lastCachedState), lastCachedState = cachedState;
        }
        function fireUrlChange() {
            (lastBrowserUrl !== self.url() || lastHistoryState !== cachedState) && (lastBrowserUrl = self.url(), 
            lastHistoryState = cachedState, forEach(urlChangeListeners, function(listener) {
                listener(self.url(), cachedState);
            }));
        }
        var self = this, location = window.location, history = window.history, setTimeout = window.setTimeout, clearTimeout = window.clearTimeout, pendingDeferIds = {};
        self.isMock = !1;
        var outstandingRequestCount = 0, outstandingRequestCallbacks = [];
        self.$$completeOutstandingRequest = completeOutstandingRequest, self.$$incOutstandingRequestCount = function() {
            outstandingRequestCount++;
        }, self.notifyWhenNoOutstandingRequests = function(callback) {
            0 === outstandingRequestCount ? callback() : outstandingRequestCallbacks.push(callback);
        };
        var cachedState, lastHistoryState, lastBrowserUrl = location.href, baseElement = document.find("base"), pendingLocation = null, getCurrentState = $sniffer.history ? function() {
            try {
                return history.state;
            } catch (e) {}
        } : noop;
        cacheState(), lastHistoryState = cachedState, self.url = function(url, replace, state) {
            if (isUndefined(state) && (state = null), location !== window.location && (location = window.location), 
            history !== window.history && (history = window.history), url) {
                var sameState = lastHistoryState === state;
                if (lastBrowserUrl === url && (!$sniffer.history || sameState)) return self;
                var sameBase = lastBrowserUrl && stripHash(lastBrowserUrl) === stripHash(url);
                return lastBrowserUrl = url, lastHistoryState = state, !$sniffer.history || sameBase && sameState ? (sameBase || (pendingLocation = url), 
                replace ? location.replace(url) : sameBase ? location.hash = getHash(url) : location.href = url, 
                location.href !== url && (pendingLocation = url)) : (history[replace ? "replaceState" : "pushState"](state, "", url), 
                cacheState(), lastHistoryState = cachedState), pendingLocation && (pendingLocation = url), 
                self;
            }
            return pendingLocation || location.href.replace(/%27/g, "'");
        }, self.state = function() {
            return cachedState;
        };
        var urlChangeListeners = [], urlChangeInit = !1, lastCachedState = null;
        self.onUrlChange = function(callback) {
            return urlChangeInit || ($sniffer.history && jqLite(window).on("popstate", cacheStateAndFireUrlChange), 
            jqLite(window).on("hashchange", cacheStateAndFireUrlChange), urlChangeInit = !0), 
            urlChangeListeners.push(callback), callback;
        }, self.$$applicationDestroyed = function() {
            jqLite(window).off("hashchange popstate", cacheStateAndFireUrlChange);
        }, self.$$checkUrlChange = fireUrlChange, self.baseHref = function() {
            var href = baseElement.attr("href");
            return href ? href.replace(/^(https?\:)?\/\/[^\/]*/, "") : "";
        }, self.defer = function(fn, delay) {
            var timeoutId;
            return outstandingRequestCount++, timeoutId = setTimeout(function() {
                delete pendingDeferIds[timeoutId], completeOutstandingRequest(fn);
            }, delay || 0), pendingDeferIds[timeoutId] = !0, timeoutId;
        }, self.defer.cancel = function(deferId) {
            return pendingDeferIds[deferId] ? (delete pendingDeferIds[deferId], clearTimeout(deferId), 
            completeOutstandingRequest(noop), !0) : !1;
        };
    }
    function $BrowserProvider() {
        this.$get = [ "$window", "$log", "$sniffer", "$document", function($window, $log, $sniffer, $document) {
            return new Browser($window, $document, $log, $sniffer);
        } ];
    }
    function $CacheFactoryProvider() {
        this.$get = function() {
            function cacheFactory(cacheId, options) {
                function refresh(entry) {
                    entry != freshEnd && (staleEnd ? staleEnd == entry && (staleEnd = entry.n) : staleEnd = entry, 
                    link(entry.n, entry.p), link(entry, freshEnd), freshEnd = entry, freshEnd.n = null);
                }
                function link(nextEntry, prevEntry) {
                    nextEntry != prevEntry && (nextEntry && (nextEntry.p = prevEntry), prevEntry && (prevEntry.n = nextEntry));
                }
                if (cacheId in caches) throw minErr("$cacheFactory")("iid", "CacheId '{0}' is already taken!", cacheId);
                var size = 0, stats = extend({}, options, {
                    id: cacheId
                }), data = createMap(), capacity = options && options.capacity || Number.MAX_VALUE, lruHash = createMap(), freshEnd = null, staleEnd = null;
                return caches[cacheId] = {
                    put: function(key, value) {
                        if (!isUndefined(value)) {
                            if (capacity < Number.MAX_VALUE) {
                                var lruEntry = lruHash[key] || (lruHash[key] = {
                                    key: key
                                });
                                refresh(lruEntry);
                            }
                            return key in data || size++, data[key] = value, size > capacity && this.remove(staleEnd.key), 
                            value;
                        }
                    },
                    get: function(key) {
                        if (capacity < Number.MAX_VALUE) {
                            var lruEntry = lruHash[key];
                            if (!lruEntry) return;
                            refresh(lruEntry);
                        }
                        return data[key];
                    },
                    remove: function(key) {
                        if (capacity < Number.MAX_VALUE) {
                            var lruEntry = lruHash[key];
                            if (!lruEntry) return;
                            lruEntry == freshEnd && (freshEnd = lruEntry.p), lruEntry == staleEnd && (staleEnd = lruEntry.n), 
                            link(lruEntry.n, lruEntry.p), delete lruHash[key];
                        }
                        key in data && (delete data[key], size--);
                    },
                    removeAll: function() {
                        data = createMap(), size = 0, lruHash = createMap(), freshEnd = staleEnd = null;
                    },
                    destroy: function() {
                        data = null, stats = null, lruHash = null, delete caches[cacheId];
                    },
                    info: function() {
                        return extend({}, stats, {
                            size: size
                        });
                    }
                };
            }
            var caches = {};
            return cacheFactory.info = function() {
                var info = {};
                return forEach(caches, function(cache, cacheId) {
                    info[cacheId] = cache.info();
                }), info;
            }, cacheFactory.get = function(cacheId) {
                return caches[cacheId];
            }, cacheFactory;
        };
    }
    function $TemplateCacheProvider() {
        this.$get = [ "$cacheFactory", function($cacheFactory) {
            return $cacheFactory("templates");
        } ];
    }
    function UNINITIALIZED_VALUE() {}
    function $CompileProvider($provide, $$sanitizeUriProvider) {
        function parseIsolateBindings(scope, directiveName, isController) {
            var LOCAL_REGEXP = /^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/, bindings = createMap();
            return forEach(scope, function(definition, scopeName) {
                if (definition in bindingCache) return void (bindings[scopeName] = bindingCache[definition]);
                var match = definition.match(LOCAL_REGEXP);
                if (!match) throw $compileMinErr("iscp", "Invalid {3} for directive '{0}'. Definition: {... {1}: '{2}' ...}", directiveName, scopeName, definition, isController ? "controller bindings definition" : "isolate scope definition");
                bindings[scopeName] = {
                    mode: match[1][0],
                    collection: "*" === match[2],
                    optional: "?" === match[3],
                    attrName: match[4] || scopeName
                }, match[4] && (bindingCache[definition] = bindings[scopeName]);
            }), bindings;
        }
        function parseDirectiveBindings(directive, directiveName) {
            var bindings = {
                isolateScope: null,
                bindToController: null
            };
            if (isObject(directive.scope) && (directive.bindToController === !0 ? (bindings.bindToController = parseIsolateBindings(directive.scope, directiveName, !0), 
            bindings.isolateScope = {}) : bindings.isolateScope = parseIsolateBindings(directive.scope, directiveName, !1)), 
            isObject(directive.bindToController) && (bindings.bindToController = parseIsolateBindings(directive.bindToController, directiveName, !0)), 
            isObject(bindings.bindToController)) {
                var controller = directive.controller, controllerAs = directive.controllerAs;
                if (!controller) throw $compileMinErr("noctrl", "Cannot bind to controller without directive '{0}'s controller.", directiveName);
                if (!identifierForController(controller, controllerAs)) throw $compileMinErr("noident", "Cannot bind to controller without identifier for directive '{0}'.", directiveName);
            }
            return bindings;
        }
        function assertValidDirectiveName(name) {
            var letter = name.charAt(0);
            if (!letter || letter !== lowercase(letter)) throw $compileMinErr("baddir", "Directive/Component name '{0}' is invalid. The first character must be a lowercase letter", name);
            if (name !== name.trim()) throw $compileMinErr("baddir", "Directive/Component name '{0}' is invalid. The name should not contain leading or trailing whitespaces", name);
        }
        function getDirectiveRequire(directive) {
            var require = directive.require || directive.controller && directive.name;
            return !isArray(require) && isObject(require) && forEach(require, function(value, key) {
                var match = value.match(REQUIRE_PREFIX_REGEXP), name = value.substring(match[0].length);
                name || (require[key] = match[0] + key);
            }), require;
        }
        var hasDirectives = {}, Suffix = "Directive", COMMENT_DIRECTIVE_REGEXP = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/, CLASS_DIRECTIVE_REGEXP = /(([\w\-]+)(?:\:([^;]+))?;?)/, ALL_OR_NOTHING_ATTRS = makeMap("ngSrc,ngSrcset,src,srcset"), REQUIRE_PREFIX_REGEXP = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/, EVENT_HANDLER_ATTR_REGEXP = /^(on[a-z]+|formaction)$/, bindingCache = createMap();
        this.directive = function registerDirective(name, directiveFactory) {
            return assertNotHasOwnProperty(name, "directive"), isString(name) ? (assertValidDirectiveName(name), 
            assertArg(directiveFactory, "directiveFactory"), hasDirectives.hasOwnProperty(name) || (hasDirectives[name] = [], 
            $provide.factory(name + Suffix, [ "$injector", "$exceptionHandler", function($injector, $exceptionHandler) {
                var directives = [];
                return forEach(hasDirectives[name], function(directiveFactory, index) {
                    try {
                        var directive = $injector.invoke(directiveFactory);
                        isFunction(directive) ? directive = {
                            compile: valueFn(directive)
                        } : !directive.compile && directive.link && (directive.compile = valueFn(directive.link)), 
                        directive.priority = directive.priority || 0, directive.index = index, directive.name = directive.name || name, 
                        directive.require = getDirectiveRequire(directive), directive.restrict = directive.restrict || "EA", 
                        directive.$$moduleName = directiveFactory.$$moduleName, directives.push(directive);
                    } catch (e) {
                        $exceptionHandler(e);
                    }
                }), directives;
            } ])), hasDirectives[name].push(directiveFactory)) : forEach(name, reverseParams(registerDirective)), 
            this;
        }, this.component = function(name, options) {
            function factory($injector) {
                function makeInjectable(fn) {
                    return isFunction(fn) || isArray(fn) ? function(tElement, tAttrs) {
                        return $injector.invoke(fn, this, {
                            $element: tElement,
                            $attrs: tAttrs
                        });
                    } : fn;
                }
                var template = options.template || options.templateUrl ? options.template : "", ddo = {
                    controller: controller,
                    controllerAs: identifierForController(options.controller) || options.controllerAs || "$ctrl",
                    template: makeInjectable(template),
                    templateUrl: makeInjectable(options.templateUrl),
                    transclude: options.transclude,
                    scope: {},
                    bindToController: options.bindings || {},
                    restrict: "E",
                    require: options.require
                };
                return forEach(options, function(val, key) {
                    "$" === key.charAt(0) && (ddo[key] = val);
                }), ddo;
            }
            var controller = options.controller || function() {};
            return forEach(options, function(val, key) {
                "$" === key.charAt(0) && (factory[key] = val, isFunction(controller) && (controller[key] = val));
            }), factory.$inject = [ "$injector" ], this.directive(name, factory);
        }, this.aHrefSanitizationWhitelist = function(regexp) {
            return isDefined(regexp) ? ($$sanitizeUriProvider.aHrefSanitizationWhitelist(regexp), 
            this) : $$sanitizeUriProvider.aHrefSanitizationWhitelist();
        }, this.imgSrcSanitizationWhitelist = function(regexp) {
            return isDefined(regexp) ? ($$sanitizeUriProvider.imgSrcSanitizationWhitelist(regexp), 
            this) : $$sanitizeUriProvider.imgSrcSanitizationWhitelist();
        };
        var debugInfoEnabled = !0;
        this.debugInfoEnabled = function(enabled) {
            return isDefined(enabled) ? (debugInfoEnabled = enabled, this) : debugInfoEnabled;
        };
        var TTL = 10;
        this.onChangesTtl = function(value) {
            return arguments.length ? (TTL = value, this) : TTL;
        }, this.$get = [ "$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$sce", "$animate", "$$sanitizeUri", function($injector, $interpolate, $exceptionHandler, $templateRequest, $parse, $controller, $rootScope, $sce, $animate, $$sanitizeUri) {
            function flushOnChangesQueue() {
                try {
                    if (!--onChangesTtl) throw onChangesQueue = void 0, $compileMinErr("infchng", "{0} $onChanges() iterations reached. Aborting!\n", TTL);
                    $rootScope.$apply(function() {
                        for (var errors = [], i = 0, ii = onChangesQueue.length; ii > i; ++i) try {
                            onChangesQueue[i]();
                        } catch (e) {
                            errors.push(e);
                        }
                        if (onChangesQueue = void 0, errors.length) throw errors;
                    });
                } finally {
                    onChangesTtl++;
                }
            }
            function Attributes(element, attributesToCopy) {
                if (attributesToCopy) {
                    var i, l, key, keys = Object.keys(attributesToCopy);
                    for (i = 0, l = keys.length; l > i; i++) key = keys[i], this[key] = attributesToCopy[key];
                } else this.$attr = {};
                this.$$element = element;
            }
            function setSpecialAttr(element, attrName, value) {
                specialAttrHolder.innerHTML = "<span " + attrName + ">";
                var attributes = specialAttrHolder.firstChild.attributes, attribute = attributes[0];
                attributes.removeNamedItem(attribute.name), attribute.value = value, element.attributes.setNamedItem(attribute);
            }
            function safeAddClass($element, className) {
                try {
                    $element.addClass(className);
                } catch (e) {}
            }
            function compile($compileNodes, transcludeFn, maxPriority, ignoreDirective, previousCompileContext) {
                $compileNodes instanceof jqLite || ($compileNodes = jqLite($compileNodes));
                for (var NOT_EMPTY = /\S+/, i = 0, len = $compileNodes.length; len > i; i++) {
                    var domNode = $compileNodes[i];
                    domNode.nodeType === NODE_TYPE_TEXT && domNode.nodeValue.match(NOT_EMPTY) && jqLiteWrapNode(domNode, $compileNodes[i] = window.document.createElement("span"));
                }
                var compositeLinkFn = compileNodes($compileNodes, transcludeFn, $compileNodes, maxPriority, ignoreDirective, previousCompileContext);
                compile.$$addScopeClass($compileNodes);
                var namespace = null;
                return function(scope, cloneConnectFn, options) {
                    assertArg(scope, "scope"), previousCompileContext && previousCompileContext.needsNewScope && (scope = scope.$parent.$new()), 
                    options = options || {};
                    var parentBoundTranscludeFn = options.parentBoundTranscludeFn, transcludeControllers = options.transcludeControllers, futureParentElement = options.futureParentElement;
                    parentBoundTranscludeFn && parentBoundTranscludeFn.$$boundTransclude && (parentBoundTranscludeFn = parentBoundTranscludeFn.$$boundTransclude), 
                    namespace || (namespace = detectNamespaceForChildElements(futureParentElement));
                    var $linkNode;
                    if ($linkNode = "html" !== namespace ? jqLite(wrapTemplate(namespace, jqLite("<div>").append($compileNodes).html())) : cloneConnectFn ? JQLitePrototype.clone.call($compileNodes) : $compileNodes, 
                    transcludeControllers) for (var controllerName in transcludeControllers) $linkNode.data("$" + controllerName + "Controller", transcludeControllers[controllerName].instance);
                    return compile.$$addScopeInfo($linkNode, scope), cloneConnectFn && cloneConnectFn($linkNode, scope), 
                    compositeLinkFn && compositeLinkFn(scope, $linkNode, $linkNode, parentBoundTranscludeFn), 
                    $linkNode;
                };
            }
            function detectNamespaceForChildElements(parentElement) {
                var node = parentElement && parentElement[0];
                return node && "foreignobject" !== nodeName_(node) && toString.call(node).match(/SVG/) ? "svg" : "html";
            }
            function compileNodes(nodeList, transcludeFn, $rootElement, maxPriority, ignoreDirective, previousCompileContext) {
                function compositeLinkFn(scope, nodeList, $rootElement, parentBoundTranscludeFn) {
                    var nodeLinkFn, childLinkFn, node, childScope, i, ii, idx, childBoundTranscludeFn, stableNodeList;
                    if (nodeLinkFnFound) {
                        var nodeListLength = nodeList.length;
                        for (stableNodeList = new Array(nodeListLength), i = 0; i < linkFns.length; i += 3) idx = linkFns[i], 
                        stableNodeList[idx] = nodeList[idx];
                    } else stableNodeList = nodeList;
                    for (i = 0, ii = linkFns.length; ii > i; ) node = stableNodeList[linkFns[i++]], 
                    nodeLinkFn = linkFns[i++], childLinkFn = linkFns[i++], nodeLinkFn ? (nodeLinkFn.scope ? (childScope = scope.$new(), 
                    compile.$$addScopeInfo(jqLite(node), childScope)) : childScope = scope, childBoundTranscludeFn = nodeLinkFn.transcludeOnThisElement ? createBoundTranscludeFn(scope, nodeLinkFn.transclude, parentBoundTranscludeFn) : !nodeLinkFn.templateOnThisElement && parentBoundTranscludeFn ? parentBoundTranscludeFn : !parentBoundTranscludeFn && transcludeFn ? createBoundTranscludeFn(scope, transcludeFn) : null, 
                    nodeLinkFn(childLinkFn, childScope, node, $rootElement, childBoundTranscludeFn)) : childLinkFn && childLinkFn(scope, node.childNodes, void 0, parentBoundTranscludeFn);
                }
                for (var attrs, directives, nodeLinkFn, childNodes, childLinkFn, linkFnFound, nodeLinkFnFound, linkFns = [], i = 0; i < nodeList.length; i++) attrs = new Attributes(), 
                directives = collectDirectives(nodeList[i], [], attrs, 0 === i ? maxPriority : void 0, ignoreDirective), 
                nodeLinkFn = directives.length ? applyDirectivesToNode(directives, nodeList[i], attrs, transcludeFn, $rootElement, null, [], [], previousCompileContext) : null, 
                nodeLinkFn && nodeLinkFn.scope && compile.$$addScopeClass(attrs.$$element), childLinkFn = nodeLinkFn && nodeLinkFn.terminal || !(childNodes = nodeList[i].childNodes) || !childNodes.length ? null : compileNodes(childNodes, nodeLinkFn ? (nodeLinkFn.transcludeOnThisElement || !nodeLinkFn.templateOnThisElement) && nodeLinkFn.transclude : transcludeFn), 
                (nodeLinkFn || childLinkFn) && (linkFns.push(i, nodeLinkFn, childLinkFn), linkFnFound = !0, 
                nodeLinkFnFound = nodeLinkFnFound || nodeLinkFn), previousCompileContext = null;
                return linkFnFound ? compositeLinkFn : null;
            }
            function createBoundTranscludeFn(scope, transcludeFn, previousBoundTranscludeFn) {
                function boundTranscludeFn(transcludedScope, cloneFn, controllers, futureParentElement, containingScope) {
                    return transcludedScope || (transcludedScope = scope.$new(!1, containingScope), 
                    transcludedScope.$$transcluded = !0), transcludeFn(transcludedScope, cloneFn, {
                        parentBoundTranscludeFn: previousBoundTranscludeFn,
                        transcludeControllers: controllers,
                        futureParentElement: futureParentElement
                    });
                }
                var boundSlots = boundTranscludeFn.$$slots = createMap();
                for (var slotName in transcludeFn.$$slots) boundSlots[slotName] = transcludeFn.$$slots[slotName] ? createBoundTranscludeFn(scope, transcludeFn.$$slots[slotName], previousBoundTranscludeFn) : null;
                return boundTranscludeFn;
            }
            function collectDirectives(node, directives, attrs, maxPriority, ignoreDirective) {
                var match, className, nodeType = node.nodeType, attrsMap = attrs.$attr;
                switch (nodeType) {
                  case NODE_TYPE_ELEMENT:
                    addDirective(directives, directiveNormalize(nodeName_(node)), "E", maxPriority, ignoreDirective);
                    for (var attr, name, nName, ngAttrName, value, isNgAttr, nAttrs = node.attributes, j = 0, jj = nAttrs && nAttrs.length; jj > j; j++) {
                        var attrStartName = !1, attrEndName = !1;
                        attr = nAttrs[j], name = attr.name, value = trim(attr.value), ngAttrName = directiveNormalize(name), 
                        (isNgAttr = NG_ATTR_BINDING.test(ngAttrName)) && (name = name.replace(PREFIX_REGEXP, "").substr(8).replace(/_(.)/g, function(match, letter) {
                            return letter.toUpperCase();
                        }));
                        var multiElementMatch = ngAttrName.match(MULTI_ELEMENT_DIR_RE);
                        multiElementMatch && directiveIsMultiElement(multiElementMatch[1]) && (attrStartName = name, 
                        attrEndName = name.substr(0, name.length - 5) + "end", name = name.substr(0, name.length - 6)), 
                        nName = directiveNormalize(name.toLowerCase()), attrsMap[nName] = name, (isNgAttr || !attrs.hasOwnProperty(nName)) && (attrs[nName] = value, 
                        getBooleanAttrName(node, nName) && (attrs[nName] = !0)), addAttrInterpolateDirective(node, directives, value, nName, isNgAttr), 
                        addDirective(directives, nName, "A", maxPriority, ignoreDirective, attrStartName, attrEndName);
                    }
                    if (className = node.className, isObject(className) && (className = className.animVal), 
                    isString(className) && "" !== className) for (;match = CLASS_DIRECTIVE_REGEXP.exec(className); ) nName = directiveNormalize(match[2]), 
                    addDirective(directives, nName, "C", maxPriority, ignoreDirective) && (attrs[nName] = trim(match[3])), 
                    className = className.substr(match.index + match[0].length);
                    break;

                  case NODE_TYPE_TEXT:
                    if (11 === msie) for (;node.parentNode && node.nextSibling && node.nextSibling.nodeType === NODE_TYPE_TEXT; ) node.nodeValue = node.nodeValue + node.nextSibling.nodeValue, 
                    node.parentNode.removeChild(node.nextSibling);
                    addTextInterpolateDirective(directives, node.nodeValue);
                    break;

                  case NODE_TYPE_COMMENT:
                    collectCommentDirectives(node, directives, attrs, maxPriority, ignoreDirective);
                }
                return directives.sort(byPriority), directives;
            }
            function collectCommentDirectives(node, directives, attrs, maxPriority, ignoreDirective) {
                try {
                    var match = COMMENT_DIRECTIVE_REGEXP.exec(node.nodeValue);
                    if (match) {
                        var nName = directiveNormalize(match[1]);
                        addDirective(directives, nName, "M", maxPriority, ignoreDirective) && (attrs[nName] = trim(match[2]));
                    }
                } catch (e) {}
            }
            function groupScan(node, attrStart, attrEnd) {
                var nodes = [], depth = 0;
                if (attrStart && node.hasAttribute && node.hasAttribute(attrStart)) {
                    do {
                        if (!node) throw $compileMinErr("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", attrStart, attrEnd);
                        node.nodeType == NODE_TYPE_ELEMENT && (node.hasAttribute(attrStart) && depth++, 
                        node.hasAttribute(attrEnd) && depth--), nodes.push(node), node = node.nextSibling;
                    } while (depth > 0);
                } else nodes.push(node);
                return jqLite(nodes);
            }
            function groupElementsLinkFnWrapper(linkFn, attrStart, attrEnd) {
                return function(scope, element, attrs, controllers, transcludeFn) {
                    return element = groupScan(element[0], attrStart, attrEnd), linkFn(scope, element, attrs, controllers, transcludeFn);
                };
            }
            function compilationGenerator(eager, $compileNodes, transcludeFn, maxPriority, ignoreDirective, previousCompileContext) {
                var compiled;
                return eager ? compile($compileNodes, transcludeFn, maxPriority, ignoreDirective, previousCompileContext) : function() {
                    return compiled || (compiled = compile($compileNodes, transcludeFn, maxPriority, ignoreDirective, previousCompileContext), 
                    $compileNodes = transcludeFn = previousCompileContext = null), compiled.apply(this, arguments);
                };
            }
            function applyDirectivesToNode(directives, compileNode, templateAttrs, transcludeFn, jqCollection, originalReplaceDirective, preLinkFns, postLinkFns, previousCompileContext) {
                function addLinkFns(pre, post, attrStart, attrEnd) {
                    pre && (attrStart && (pre = groupElementsLinkFnWrapper(pre, attrStart, attrEnd)), 
                    pre.require = directive.require, pre.directiveName = directiveName, (newIsolateScopeDirective === directive || directive.$$isolateScope) && (pre = cloneAndAnnotateFn(pre, {
                        isolateScope: !0
                    })), preLinkFns.push(pre)), post && (attrStart && (post = groupElementsLinkFnWrapper(post, attrStart, attrEnd)), 
                    post.require = directive.require, post.directiveName = directiveName, (newIsolateScopeDirective === directive || directive.$$isolateScope) && (post = cloneAndAnnotateFn(post, {
                        isolateScope: !0
                    })), postLinkFns.push(post));
                }
                function nodeLinkFn(childLinkFn, scope, linkNode, $rootElement, boundTranscludeFn) {
                    function controllersBoundTransclude(scope, cloneAttachFn, futureParentElement, slotName) {
                        var transcludeControllers;
                        if (isScope(scope) || (slotName = futureParentElement, futureParentElement = cloneAttachFn, 
                        cloneAttachFn = scope, scope = void 0), hasElementTranscludeDirective && (transcludeControllers = elementControllers), 
                        futureParentElement || (futureParentElement = hasElementTranscludeDirective ? $element.parent() : $element), 
                        !slotName) return boundTranscludeFn(scope, cloneAttachFn, transcludeControllers, futureParentElement, scopeToChild);
                        var slotTranscludeFn = boundTranscludeFn.$$slots[slotName];
                        if (slotTranscludeFn) return slotTranscludeFn(scope, cloneAttachFn, transcludeControllers, futureParentElement, scopeToChild);
                        if (isUndefined(slotTranscludeFn)) throw $compileMinErr("noslot", 'No parent directive that requires a transclusion with slot name "{0}". Element: {1}', slotName, startingTag($element));
                    }
                    var i, ii, linkFn, isolateScope, controllerScope, elementControllers, transcludeFn, $element, attrs, scopeBindingInfo;
                    compileNode === linkNode ? (attrs = templateAttrs, $element = templateAttrs.$$element) : ($element = jqLite(linkNode), 
                    attrs = new Attributes($element, templateAttrs)), controllerScope = scope, newIsolateScopeDirective ? isolateScope = scope.$new(!0) : newScopeDirective && (controllerScope = scope.$parent), 
                    boundTranscludeFn && (transcludeFn = controllersBoundTransclude, transcludeFn.$$boundTransclude = boundTranscludeFn, 
                    transcludeFn.isSlotFilled = function(slotName) {
                        return !!boundTranscludeFn.$$slots[slotName];
                    }), controllerDirectives && (elementControllers = setupControllers($element, attrs, transcludeFn, controllerDirectives, isolateScope, scope, newIsolateScopeDirective)), 
                    newIsolateScopeDirective && (compile.$$addScopeInfo($element, isolateScope, !0, !(templateDirective && (templateDirective === newIsolateScopeDirective || templateDirective === newIsolateScopeDirective.$$originalDirective))), 
                    compile.$$addScopeClass($element, !0), isolateScope.$$isolateBindings = newIsolateScopeDirective.$$isolateBindings, 
                    scopeBindingInfo = initializeDirectiveBindings(scope, attrs, isolateScope, isolateScope.$$isolateBindings, newIsolateScopeDirective), 
                    scopeBindingInfo.removeWatches && isolateScope.$on("$destroy", scopeBindingInfo.removeWatches));
                    for (var name in elementControllers) {
                        var controllerDirective = controllerDirectives[name], controller = elementControllers[name], bindings = controllerDirective.$$bindings.bindToController;
                        controller.bindingInfo = controller.identifier && bindings ? initializeDirectiveBindings(controllerScope, attrs, controller.instance, bindings, controllerDirective) : {};
                        var controllerResult = controller();
                        controllerResult !== controller.instance && (controller.instance = controllerResult, 
                        $element.data("$" + controllerDirective.name + "Controller", controllerResult), 
                        controller.bindingInfo.removeWatches && controller.bindingInfo.removeWatches(), 
                        controller.bindingInfo = initializeDirectiveBindings(controllerScope, attrs, controller.instance, bindings, controllerDirective));
                    }
                    for (forEach(controllerDirectives, function(controllerDirective, name) {
                        var require = controllerDirective.require;
                        controllerDirective.bindToController && !isArray(require) && isObject(require) && extend(elementControllers[name].instance, getControllers(name, require, $element, elementControllers));
                    }), forEach(elementControllers, function(controller) {
                        var controllerInstance = controller.instance;
                        if (isFunction(controllerInstance.$onChanges)) try {
                            controllerInstance.$onChanges(controller.bindingInfo.initialChanges);
                        } catch (e) {
                            $exceptionHandler(e);
                        }
                        if (isFunction(controllerInstance.$onInit)) try {
                            controllerInstance.$onInit();
                        } catch (e) {
                            $exceptionHandler(e);
                        }
                        isFunction(controllerInstance.$doCheck) && (controllerScope.$watch(function() {
                            controllerInstance.$doCheck();
                        }), controllerInstance.$doCheck()), isFunction(controllerInstance.$onDestroy) && controllerScope.$on("$destroy", function() {
                            controllerInstance.$onDestroy();
                        });
                    }), i = 0, ii = preLinkFns.length; ii > i; i++) linkFn = preLinkFns[i], invokeLinkFn(linkFn, linkFn.isolateScope ? isolateScope : scope, $element, attrs, linkFn.require && getControllers(linkFn.directiveName, linkFn.require, $element, elementControllers), transcludeFn);
                    var scopeToChild = scope;
                    for (newIsolateScopeDirective && (newIsolateScopeDirective.template || null === newIsolateScopeDirective.templateUrl) && (scopeToChild = isolateScope), 
                    childLinkFn && childLinkFn(scopeToChild, linkNode.childNodes, void 0, boundTranscludeFn), 
                    i = postLinkFns.length - 1; i >= 0; i--) linkFn = postLinkFns[i], invokeLinkFn(linkFn, linkFn.isolateScope ? isolateScope : scope, $element, attrs, linkFn.require && getControllers(linkFn.directiveName, linkFn.require, $element, elementControllers), transcludeFn);
                    forEach(elementControllers, function(controller) {
                        var controllerInstance = controller.instance;
                        isFunction(controllerInstance.$postLink) && controllerInstance.$postLink();
                    });
                }
                previousCompileContext = previousCompileContext || {};
                for (var directive, directiveName, $template, linkFn, directiveValue, terminalPriority = -Number.MAX_VALUE, newScopeDirective = previousCompileContext.newScopeDirective, controllerDirectives = previousCompileContext.controllerDirectives, newIsolateScopeDirective = previousCompileContext.newIsolateScopeDirective, templateDirective = previousCompileContext.templateDirective, nonTlbTranscludeDirective = previousCompileContext.nonTlbTranscludeDirective, hasTranscludeDirective = !1, hasTemplate = !1, hasElementTranscludeDirective = previousCompileContext.hasElementTranscludeDirective, $compileNode = templateAttrs.$$element = jqLite(compileNode), replaceDirective = originalReplaceDirective, childTranscludeFn = transcludeFn, didScanForMultipleTransclusion = !1, mightHaveMultipleTransclusionError = !1, i = 0, ii = directives.length; ii > i; i++) {
                    directive = directives[i];
                    var attrStart = directive.$$start, attrEnd = directive.$$end;
                    if (attrStart && ($compileNode = groupScan(compileNode, attrStart, attrEnd)), $template = void 0, 
                    terminalPriority > directive.priority) break;
                    if ((directiveValue = directive.scope) && (directive.templateUrl || (isObject(directiveValue) ? (assertNoDuplicate("new/isolated scope", newIsolateScopeDirective || newScopeDirective, directive, $compileNode), 
                    newIsolateScopeDirective = directive) : assertNoDuplicate("new/isolated scope", newIsolateScopeDirective, directive, $compileNode)), 
                    newScopeDirective = newScopeDirective || directive), directiveName = directive.name, 
                    !didScanForMultipleTransclusion && (directive.replace && (directive.templateUrl || directive.template) || directive.transclude && !directive.$$tlb)) {
                        for (var candidateDirective, scanningIndex = i + 1; candidateDirective = directives[scanningIndex++]; ) if (candidateDirective.transclude && !candidateDirective.$$tlb || candidateDirective.replace && (candidateDirective.templateUrl || candidateDirective.template)) {
                            mightHaveMultipleTransclusionError = !0;
                            break;
                        }
                        didScanForMultipleTransclusion = !0;
                    }
                    if (!directive.templateUrl && directive.controller && (directiveValue = directive.controller, 
                    controllerDirectives = controllerDirectives || createMap(), assertNoDuplicate("'" + directiveName + "' controller", controllerDirectives[directiveName], directive, $compileNode), 
                    controllerDirectives[directiveName] = directive), directiveValue = directive.transclude) if (hasTranscludeDirective = !0, 
                    directive.$$tlb || (assertNoDuplicate("transclusion", nonTlbTranscludeDirective, directive, $compileNode), 
                    nonTlbTranscludeDirective = directive), "element" == directiveValue) hasElementTranscludeDirective = !0, 
                    terminalPriority = directive.priority, $template = $compileNode, $compileNode = templateAttrs.$$element = jqLite(compile.$$createComment(directiveName, templateAttrs[directiveName])), 
                    compileNode = $compileNode[0], replaceWith(jqCollection, sliceArgs($template), compileNode), 
                    $template[0].$$parentNode = $template[0].parentNode, childTranscludeFn = compilationGenerator(mightHaveMultipleTransclusionError, $template, transcludeFn, terminalPriority, replaceDirective && replaceDirective.name, {
                        nonTlbTranscludeDirective: nonTlbTranscludeDirective
                    }); else {
                        var slots = createMap();
                        if ($template = jqLite(jqLiteClone(compileNode)).contents(), isObject(directiveValue)) {
                            $template = [];
                            var slotMap = createMap(), filledSlots = createMap();
                            forEach(directiveValue, function(elementSelector, slotName) {
                                var optional = "?" === elementSelector.charAt(0);
                                elementSelector = optional ? elementSelector.substring(1) : elementSelector, slotMap[elementSelector] = slotName, 
                                slots[slotName] = null, filledSlots[slotName] = optional;
                            }), forEach($compileNode.contents(), function(node) {
                                var slotName = slotMap[directiveNormalize(nodeName_(node))];
                                slotName ? (filledSlots[slotName] = !0, slots[slotName] = slots[slotName] || [], 
                                slots[slotName].push(node)) : $template.push(node);
                            }), forEach(filledSlots, function(filled, slotName) {
                                if (!filled) throw $compileMinErr("reqslot", "Required transclusion slot `{0}` was not filled.", slotName);
                            });
                            for (var slotName in slots) slots[slotName] && (slots[slotName] = compilationGenerator(mightHaveMultipleTransclusionError, slots[slotName], transcludeFn));
                        }
                        $compileNode.empty(), childTranscludeFn = compilationGenerator(mightHaveMultipleTransclusionError, $template, transcludeFn, void 0, void 0, {
                            needsNewScope: directive.$$isolateScope || directive.$$newScope
                        }), childTranscludeFn.$$slots = slots;
                    }
                    if (directive.template) if (hasTemplate = !0, assertNoDuplicate("template", templateDirective, directive, $compileNode), 
                    templateDirective = directive, directiveValue = isFunction(directive.template) ? directive.template($compileNode, templateAttrs) : directive.template, 
                    directiveValue = denormalizeTemplate(directiveValue), directive.replace) {
                        if (replaceDirective = directive, $template = jqLiteIsTextNode(directiveValue) ? [] : removeComments(wrapTemplate(directive.templateNamespace, trim(directiveValue))), 
                        compileNode = $template[0], 1 != $template.length || compileNode.nodeType !== NODE_TYPE_ELEMENT) throw $compileMinErr("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", directiveName, "");
                        replaceWith(jqCollection, $compileNode, compileNode);
                        var newTemplateAttrs = {
                            $attr: {}
                        }, templateDirectives = collectDirectives(compileNode, [], newTemplateAttrs), unprocessedDirectives = directives.splice(i + 1, directives.length - (i + 1));
                        (newIsolateScopeDirective || newScopeDirective) && markDirectiveScope(templateDirectives, newIsolateScopeDirective, newScopeDirective), 
                        directives = directives.concat(templateDirectives).concat(unprocessedDirectives), 
                        mergeTemplateAttributes(templateAttrs, newTemplateAttrs), ii = directives.length;
                    } else $compileNode.html(directiveValue);
                    if (directive.templateUrl) hasTemplate = !0, assertNoDuplicate("template", templateDirective, directive, $compileNode), 
                    templateDirective = directive, directive.replace && (replaceDirective = directive), 
                    nodeLinkFn = compileTemplateUrl(directives.splice(i, directives.length - i), $compileNode, templateAttrs, jqCollection, hasTranscludeDirective && childTranscludeFn, preLinkFns, postLinkFns, {
                        controllerDirectives: controllerDirectives,
                        newScopeDirective: newScopeDirective !== directive && newScopeDirective,
                        newIsolateScopeDirective: newIsolateScopeDirective,
                        templateDirective: templateDirective,
                        nonTlbTranscludeDirective: nonTlbTranscludeDirective
                    }), ii = directives.length; else if (directive.compile) try {
                        linkFn = directive.compile($compileNode, templateAttrs, childTranscludeFn);
                        var context = directive.$$originalDirective || directive;
                        isFunction(linkFn) ? addLinkFns(null, bind(context, linkFn), attrStart, attrEnd) : linkFn && addLinkFns(bind(context, linkFn.pre), bind(context, linkFn.post), attrStart, attrEnd);
                    } catch (e) {
                        $exceptionHandler(e, startingTag($compileNode));
                    }
                    directive.terminal && (nodeLinkFn.terminal = !0, terminalPriority = Math.max(terminalPriority, directive.priority));
                }
                return nodeLinkFn.scope = newScopeDirective && newScopeDirective.scope === !0, nodeLinkFn.transcludeOnThisElement = hasTranscludeDirective, 
                nodeLinkFn.templateOnThisElement = hasTemplate, nodeLinkFn.transclude = childTranscludeFn, 
                previousCompileContext.hasElementTranscludeDirective = hasElementTranscludeDirective, 
                nodeLinkFn;
            }
            function getControllers(directiveName, require, $element, elementControllers) {
                var value;
                if (isString(require)) {
                    var match = require.match(REQUIRE_PREFIX_REGEXP), name = require.substring(match[0].length), inheritType = match[1] || match[3], optional = "?" === match[2];
                    if ("^^" === inheritType ? $element = $element.parent() : (value = elementControllers && elementControllers[name], 
                    value = value && value.instance), !value) {
                        var dataName = "$" + name + "Controller";
                        value = inheritType ? $element.inheritedData(dataName) : $element.data(dataName);
                    }
                    if (!value && !optional) throw $compileMinErr("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", name, directiveName);
                } else if (isArray(require)) {
                    value = [];
                    for (var i = 0, ii = require.length; ii > i; i++) value[i] = getControllers(directiveName, require[i], $element, elementControllers);
                } else isObject(require) && (value = {}, forEach(require, function(controller, property) {
                    value[property] = getControllers(directiveName, controller, $element, elementControllers);
                }));
                return value || null;
            }
            function setupControllers($element, attrs, transcludeFn, controllerDirectives, isolateScope, scope, newIsolateScopeDirective) {
                var elementControllers = createMap();
                for (var controllerKey in controllerDirectives) {
                    var directive = controllerDirectives[controllerKey], locals = {
                        $scope: directive === newIsolateScopeDirective || directive.$$isolateScope ? isolateScope : scope,
                        $element: $element,
                        $attrs: attrs,
                        $transclude: transcludeFn
                    }, controller = directive.controller;
                    "@" == controller && (controller = attrs[directive.name]);
                    var controllerInstance = $controller(controller, locals, !0, directive.controllerAs);
                    elementControllers[directive.name] = controllerInstance, $element.data("$" + directive.name + "Controller", controllerInstance.instance);
                }
                return elementControllers;
            }
            function markDirectiveScope(directives, isolateScope, newScope) {
                for (var j = 0, jj = directives.length; jj > j; j++) directives[j] = inherit(directives[j], {
                    $$isolateScope: isolateScope,
                    $$newScope: newScope
                });
            }
            function addDirective(tDirectives, name, location, maxPriority, ignoreDirective, startAttrName, endAttrName) {
                if (name === ignoreDirective) return null;
                var match = null;
                if (hasDirectives.hasOwnProperty(name)) for (var directive, directives = $injector.get(name + Suffix), i = 0, ii = directives.length; ii > i; i++) try {
                    if (directive = directives[i], (isUndefined(maxPriority) || maxPriority > directive.priority) && -1 != directive.restrict.indexOf(location)) {
                        if (startAttrName && (directive = inherit(directive, {
                            $$start: startAttrName,
                            $$end: endAttrName
                        })), !directive.$$bindings) {
                            var bindings = directive.$$bindings = parseDirectiveBindings(directive, directive.name);
                            isObject(bindings.isolateScope) && (directive.$$isolateBindings = bindings.isolateScope);
                        }
                        tDirectives.push(directive), match = directive;
                    }
                } catch (e) {
                    $exceptionHandler(e);
                }
                return match;
            }
            function directiveIsMultiElement(name) {
                if (hasDirectives.hasOwnProperty(name)) for (var directive, directives = $injector.get(name + Suffix), i = 0, ii = directives.length; ii > i; i++) if (directive = directives[i], 
                directive.multiElement) return !0;
                return !1;
            }
            function mergeTemplateAttributes(dst, src) {
                {
                    var srcAttr = src.$attr, dstAttr = dst.$attr;
                    dst.$$element;
                }
                forEach(dst, function(value, key) {
                    "$" != key.charAt(0) && (src[key] && src[key] !== value && (value += ("style" === key ? ";" : " ") + src[key]), 
                    dst.$set(key, value, !0, srcAttr[key]));
                }), forEach(src, function(value, key) {
                    dst.hasOwnProperty(key) || "$" === key.charAt(0) || (dst[key] = value, "class" !== key && "style" !== key && (dstAttr[key] = srcAttr[key]));
                });
            }
            function compileTemplateUrl(directives, $compileNode, tAttrs, $rootElement, childTranscludeFn, preLinkFns, postLinkFns, previousCompileContext) {
                var afterTemplateNodeLinkFn, afterTemplateChildLinkFn, linkQueue = [], beforeTemplateCompileNode = $compileNode[0], origAsyncDirective = directives.shift(), derivedSyncDirective = inherit(origAsyncDirective, {
                    templateUrl: null,
                    transclude: null,
                    replace: null,
                    $$originalDirective: origAsyncDirective
                }), templateUrl = isFunction(origAsyncDirective.templateUrl) ? origAsyncDirective.templateUrl($compileNode, tAttrs) : origAsyncDirective.templateUrl, templateNamespace = origAsyncDirective.templateNamespace;
                return $compileNode.empty(), $templateRequest(templateUrl).then(function(content) {
                    var compileNode, tempTemplateAttrs, $template, childBoundTranscludeFn;
                    if (content = denormalizeTemplate(content), origAsyncDirective.replace) {
                        if ($template = jqLiteIsTextNode(content) ? [] : removeComments(wrapTemplate(templateNamespace, trim(content))), 
                        compileNode = $template[0], 1 != $template.length || compileNode.nodeType !== NODE_TYPE_ELEMENT) throw $compileMinErr("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", origAsyncDirective.name, templateUrl);
                        tempTemplateAttrs = {
                            $attr: {}
                        }, replaceWith($rootElement, $compileNode, compileNode);
                        var templateDirectives = collectDirectives(compileNode, [], tempTemplateAttrs);
                        isObject(origAsyncDirective.scope) && markDirectiveScope(templateDirectives, !0), 
                        directives = templateDirectives.concat(directives), mergeTemplateAttributes(tAttrs, tempTemplateAttrs);
                    } else compileNode = beforeTemplateCompileNode, $compileNode.html(content);
                    for (directives.unshift(derivedSyncDirective), afterTemplateNodeLinkFn = applyDirectivesToNode(directives, compileNode, tAttrs, childTranscludeFn, $compileNode, origAsyncDirective, preLinkFns, postLinkFns, previousCompileContext), 
                    forEach($rootElement, function(node, i) {
                        node == compileNode && ($rootElement[i] = $compileNode[0]);
                    }), afterTemplateChildLinkFn = compileNodes($compileNode[0].childNodes, childTranscludeFn); linkQueue.length; ) {
                        var scope = linkQueue.shift(), beforeTemplateLinkNode = linkQueue.shift(), linkRootElement = linkQueue.shift(), boundTranscludeFn = linkQueue.shift(), linkNode = $compileNode[0];
                        if (!scope.$$destroyed) {
                            if (beforeTemplateLinkNode !== beforeTemplateCompileNode) {
                                var oldClasses = beforeTemplateLinkNode.className;
                                previousCompileContext.hasElementTranscludeDirective && origAsyncDirective.replace || (linkNode = jqLiteClone(compileNode)), 
                                replaceWith(linkRootElement, jqLite(beforeTemplateLinkNode), linkNode), safeAddClass(jqLite(linkNode), oldClasses);
                            }
                            childBoundTranscludeFn = afterTemplateNodeLinkFn.transcludeOnThisElement ? createBoundTranscludeFn(scope, afterTemplateNodeLinkFn.transclude, boundTranscludeFn) : boundTranscludeFn, 
                            afterTemplateNodeLinkFn(afterTemplateChildLinkFn, scope, linkNode, $rootElement, childBoundTranscludeFn);
                        }
                    }
                    linkQueue = null;
                }), function(ignoreChildLinkFn, scope, node, rootElement, boundTranscludeFn) {
                    var childBoundTranscludeFn = boundTranscludeFn;
                    scope.$$destroyed || (linkQueue ? linkQueue.push(scope, node, rootElement, childBoundTranscludeFn) : (afterTemplateNodeLinkFn.transcludeOnThisElement && (childBoundTranscludeFn = createBoundTranscludeFn(scope, afterTemplateNodeLinkFn.transclude, boundTranscludeFn)), 
                    afterTemplateNodeLinkFn(afterTemplateChildLinkFn, scope, node, rootElement, childBoundTranscludeFn)));
                };
            }
            function byPriority(a, b) {
                var diff = b.priority - a.priority;
                return 0 !== diff ? diff : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index;
            }
            function assertNoDuplicate(what, previousDirective, directive, element) {
                function wrapModuleNameIfDefined(moduleName) {
                    return moduleName ? " (module: " + moduleName + ")" : "";
                }
                if (previousDirective) throw $compileMinErr("multidir", "Multiple directives [{0}{1}, {2}{3}] asking for {4} on: {5}", previousDirective.name, wrapModuleNameIfDefined(previousDirective.$$moduleName), directive.name, wrapModuleNameIfDefined(directive.$$moduleName), what, startingTag(element));
            }
            function addTextInterpolateDirective(directives, text) {
                var interpolateFn = $interpolate(text, !0);
                interpolateFn && directives.push({
                    priority: 0,
                    compile: function(templateNode) {
                        var templateNodeParent = templateNode.parent(), hasCompileParent = !!templateNodeParent.length;
                        return hasCompileParent && compile.$$addBindingClass(templateNodeParent), function(scope, node) {
                            var parent = node.parent();
                            hasCompileParent || compile.$$addBindingClass(parent), compile.$$addBindingInfo(parent, interpolateFn.expressions), 
                            scope.$watch(interpolateFn, function(value) {
                                node[0].nodeValue = value;
                            });
                        };
                    }
                });
            }
            function wrapTemplate(type, template) {
                switch (type = lowercase(type || "html")) {
                  case "svg":
                  case "math":
                    var wrapper = window.document.createElement("div");
                    return wrapper.innerHTML = "<" + type + ">" + template + "</" + type + ">", wrapper.childNodes[0].childNodes;

                  default:
                    return template;
                }
            }
            function getTrustedContext(node, attrNormalizedName) {
                if ("srcdoc" == attrNormalizedName) return $sce.HTML;
                var tag = nodeName_(node);
                return "xlinkHref" == attrNormalizedName || "form" == tag && "action" == attrNormalizedName || "img" != tag && ("src" == attrNormalizedName || "ngSrc" == attrNormalizedName) ? $sce.RESOURCE_URL : void 0;
            }
            function addAttrInterpolateDirective(node, directives, value, name, allOrNothing) {
                var trustedContext = getTrustedContext(node, name);
                allOrNothing = ALL_OR_NOTHING_ATTRS[name] || allOrNothing;
                var interpolateFn = $interpolate(value, !0, trustedContext, allOrNothing);
                if (interpolateFn) {
                    if ("multiple" === name && "select" === nodeName_(node)) throw $compileMinErr("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", startingTag(node));
                    directives.push({
                        priority: 100,
                        compile: function() {
                            return {
                                pre: function(scope, element, attr) {
                                    var $$observers = attr.$$observers || (attr.$$observers = createMap());
                                    if (EVENT_HANDLER_ATTR_REGEXP.test(name)) throw $compileMinErr("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
                                    var newValue = attr[name];
                                    newValue !== value && (interpolateFn = newValue && $interpolate(newValue, !0, trustedContext, allOrNothing), 
                                    value = newValue), interpolateFn && (attr[name] = interpolateFn(scope), ($$observers[name] || ($$observers[name] = [])).$$inter = !0, 
                                    (attr.$$observers && attr.$$observers[name].$$scope || scope).$watch(interpolateFn, function(newValue, oldValue) {
                                        "class" === name && newValue != oldValue ? attr.$updateClass(newValue, oldValue) : attr.$set(name, newValue);
                                    }));
                                }
                            };
                        }
                    });
                }
            }
            function replaceWith($rootElement, elementsToRemove, newNode) {
                var i, ii, firstElementToRemove = elementsToRemove[0], removeCount = elementsToRemove.length, parent = firstElementToRemove.parentNode;
                if ($rootElement) for (i = 0, ii = $rootElement.length; ii > i; i++) if ($rootElement[i] == firstElementToRemove) {
                    $rootElement[i++] = newNode;
                    for (var j = i, j2 = j + removeCount - 1, jj = $rootElement.length; jj > j; j++, 
                    j2++) jj > j2 ? $rootElement[j] = $rootElement[j2] : delete $rootElement[j];
                    $rootElement.length -= removeCount - 1, $rootElement.context === firstElementToRemove && ($rootElement.context = newNode);
                    break;
                }
                parent && parent.replaceChild(newNode, firstElementToRemove);
                var fragment = window.document.createDocumentFragment();
                for (i = 0; removeCount > i; i++) fragment.appendChild(elementsToRemove[i]);
                for (jqLite.hasData(firstElementToRemove) && (jqLite.data(newNode, jqLite.data(firstElementToRemove)), 
                jqLite(firstElementToRemove).off("$destroy")), jqLite.cleanData(fragment.querySelectorAll("*")), 
                i = 1; removeCount > i; i++) delete elementsToRemove[i];
                elementsToRemove[0] = newNode, elementsToRemove.length = 1;
            }
            function cloneAndAnnotateFn(fn, annotation) {
                return extend(function() {
                    return fn.apply(null, arguments);
                }, fn, annotation);
            }
            function invokeLinkFn(linkFn, scope, $element, attrs, controllers, transcludeFn) {
                try {
                    linkFn(scope, $element, attrs, controllers, transcludeFn);
                } catch (e) {
                    $exceptionHandler(e, startingTag($element));
                }
            }
            function initializeDirectiveBindings(scope, attrs, destination, bindings, directive) {
                function recordChanges(key, currentValue, previousValue) {
                    isFunction(destination.$onChanges) && currentValue !== previousValue && (onChangesQueue || (scope.$$postDigest(flushOnChangesQueue), 
                    onChangesQueue = []), changes || (changes = {}, onChangesQueue.push(triggerOnChangesHook)), 
                    changes[key] && (previousValue = changes[key].previousValue), changes[key] = new SimpleChange(previousValue, currentValue));
                }
                function triggerOnChangesHook() {
                    destination.$onChanges(changes), changes = void 0;
                }
                var changes, removeWatchCollection = [], initialChanges = {};
                return forEach(bindings, function(definition, scopeName) {
                    var lastValue, parentGet, parentSet, compare, removeWatch, attrName = definition.attrName, optional = definition.optional, mode = definition.mode;
                    switch (mode) {
                      case "@":
                        optional || hasOwnProperty.call(attrs, attrName) || (destination[scopeName] = attrs[attrName] = void 0), 
                        attrs.$observe(attrName, function(value) {
                            if (isString(value) || isBoolean(value)) {
                                var oldValue = destination[scopeName];
                                recordChanges(scopeName, value, oldValue), destination[scopeName] = value;
                            }
                        }), attrs.$$observers[attrName].$$scope = scope, lastValue = attrs[attrName], isString(lastValue) ? destination[scopeName] = $interpolate(lastValue)(scope) : isBoolean(lastValue) && (destination[scopeName] = lastValue), 
                        initialChanges[scopeName] = new SimpleChange(_UNINITIALIZED_VALUE, destination[scopeName]);
                        break;

                      case "=":
                        if (!hasOwnProperty.call(attrs, attrName)) {
                            if (optional) break;
                            attrs[attrName] = void 0;
                        }
                        if (optional && !attrs[attrName]) break;
                        parentGet = $parse(attrs[attrName]), compare = parentGet.literal ? equals : function(a, b) {
                            return a === b || a !== a && b !== b;
                        }, parentSet = parentGet.assign || function() {
                            throw lastValue = destination[scopeName] = parentGet(scope), $compileMinErr("nonassign", "Expression '{0}' in attribute '{1}' used with directive '{2}' is non-assignable!", attrs[attrName], attrName, directive.name);
                        }, lastValue = destination[scopeName] = parentGet(scope);
                        var parentValueWatch = function(parentValue) {
                            return compare(parentValue, destination[scopeName]) || (compare(parentValue, lastValue) ? parentSet(scope, parentValue = destination[scopeName]) : destination[scopeName] = parentValue), 
                            lastValue = parentValue;
                        };
                        parentValueWatch.$stateful = !0, removeWatch = definition.collection ? scope.$watchCollection(attrs[attrName], parentValueWatch) : scope.$watch($parse(attrs[attrName], parentValueWatch), null, parentGet.literal), 
                        removeWatchCollection.push(removeWatch);
                        break;

                      case "<":
                        if (!hasOwnProperty.call(attrs, attrName)) {
                            if (optional) break;
                            attrs[attrName] = void 0;
                        }
                        if (optional && !attrs[attrName]) break;
                        parentGet = $parse(attrs[attrName]);
                        var initialValue = destination[scopeName] = parentGet(scope);
                        initialChanges[scopeName] = new SimpleChange(_UNINITIALIZED_VALUE, destination[scopeName]), 
                        removeWatch = scope.$watch(parentGet, function(newValue, oldValue) {
                            if (oldValue === newValue) {
                                if (oldValue === initialValue) return;
                                oldValue = initialValue;
                            }
                            recordChanges(scopeName, newValue, oldValue), destination[scopeName] = newValue;
                        }, parentGet.literal), removeWatchCollection.push(removeWatch);
                        break;

                      case "&":
                        if (parentGet = attrs.hasOwnProperty(attrName) ? $parse(attrs[attrName]) : noop, 
                        parentGet === noop && optional) break;
                        destination[scopeName] = function(locals) {
                            return parentGet(scope, locals);
                        };
                    }
                }), {
                    initialChanges: initialChanges,
                    removeWatches: removeWatchCollection.length && function() {
                        for (var i = 0, ii = removeWatchCollection.length; ii > i; ++i) removeWatchCollection[i]();
                    }
                };
            }
            var onChangesQueue, SIMPLE_ATTR_NAME = /^\w/, specialAttrHolder = window.document.createElement("div"), onChangesTtl = TTL;
            Attributes.prototype = {
                $normalize: directiveNormalize,
                $addClass: function(classVal) {
                    classVal && classVal.length > 0 && $animate.addClass(this.$$element, classVal);
                },
                $removeClass: function(classVal) {
                    classVal && classVal.length > 0 && $animate.removeClass(this.$$element, classVal);
                },
                $updateClass: function(newClasses, oldClasses) {
                    var toAdd = tokenDifference(newClasses, oldClasses);
                    toAdd && toAdd.length && $animate.addClass(this.$$element, toAdd);
                    var toRemove = tokenDifference(oldClasses, newClasses);
                    toRemove && toRemove.length && $animate.removeClass(this.$$element, toRemove);
                },
                $set: function(key, value, writeAttr, attrName) {
                    var nodeName, node = this.$$element[0], booleanKey = getBooleanAttrName(node, key), aliasedKey = getAliasedAttrName(key), observer = key;
                    if (booleanKey ? (this.$$element.prop(key, value), attrName = booleanKey) : aliasedKey && (this[aliasedKey] = value, 
                    observer = aliasedKey), this[key] = value, attrName ? this.$attr[key] = attrName : (attrName = this.$attr[key], 
                    attrName || (this.$attr[key] = attrName = snake_case(key, "-"))), nodeName = nodeName_(this.$$element), 
                    "a" === nodeName && ("href" === key || "xlinkHref" === key) || "img" === nodeName && "src" === key) this[key] = value = $$sanitizeUri(value, "src" === key); else if ("img" === nodeName && "srcset" === key && isDefined(value)) {
                        for (var result = "", trimmedSrcset = trim(value), srcPattern = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, pattern = /\s/.test(trimmedSrcset) ? srcPattern : /(,)/, rawUris = trimmedSrcset.split(pattern), nbrUrisWith2parts = Math.floor(rawUris.length / 2), i = 0; nbrUrisWith2parts > i; i++) {
                            var innerIdx = 2 * i;
                            result += $$sanitizeUri(trim(rawUris[innerIdx]), !0), result += " " + trim(rawUris[innerIdx + 1]);
                        }
                        var lastTuple = trim(rawUris[2 * i]).split(/\s/);
                        result += $$sanitizeUri(trim(lastTuple[0]), !0), 2 === lastTuple.length && (result += " " + trim(lastTuple[1])), 
                        this[key] = value = result;
                    }
                    writeAttr !== !1 && (null === value || isUndefined(value) ? this.$$element.removeAttr(attrName) : SIMPLE_ATTR_NAME.test(attrName) ? this.$$element.attr(attrName, value) : setSpecialAttr(this.$$element[0], attrName, value));
                    var $$observers = this.$$observers;
                    $$observers && forEach($$observers[observer], function(fn) {
                        try {
                            fn(value);
                        } catch (e) {
                            $exceptionHandler(e);
                        }
                    });
                },
                $observe: function(key, fn) {
                    var attrs = this, $$observers = attrs.$$observers || (attrs.$$observers = createMap()), listeners = $$observers[key] || ($$observers[key] = []);
                    return listeners.push(fn), $rootScope.$evalAsync(function() {
                        listeners.$$inter || !attrs.hasOwnProperty(key) || isUndefined(attrs[key]) || fn(attrs[key]);
                    }), function() {
                        arrayRemove(listeners, fn);
                    };
                }
            };
            var startSymbol = $interpolate.startSymbol(), endSymbol = $interpolate.endSymbol(), denormalizeTemplate = "{{" == startSymbol && "}}" == endSymbol ? identity : function(template) {
                return template.replace(/\{\{/g, startSymbol).replace(/}}/g, endSymbol);
            }, NG_ATTR_BINDING = /^ngAttr[A-Z]/, MULTI_ELEMENT_DIR_RE = /^(.+)Start$/;
            return compile.$$addBindingInfo = debugInfoEnabled ? function($element, binding) {
                var bindings = $element.data("$binding") || [];
                isArray(binding) ? bindings = bindings.concat(binding) : bindings.push(binding), 
                $element.data("$binding", bindings);
            } : noop, compile.$$addBindingClass = debugInfoEnabled ? function($element) {
                safeAddClass($element, "ng-binding");
            } : noop, compile.$$addScopeInfo = debugInfoEnabled ? function($element, scope, isolated, noTemplate) {
                var dataName = isolated ? noTemplate ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope";
                $element.data(dataName, scope);
            } : noop, compile.$$addScopeClass = debugInfoEnabled ? function($element, isolated) {
                safeAddClass($element, isolated ? "ng-isolate-scope" : "ng-scope");
            } : noop, compile.$$createComment = function(directiveName, comment) {
                var content = "";
                return debugInfoEnabled && (content = " " + (directiveName || "") + ": ", comment && (content += comment + " ")), 
                window.document.createComment(content);
            }, compile;
        } ];
    }
    function SimpleChange(previous, current) {
        this.previousValue = previous, this.currentValue = current;
    }
    function directiveNormalize(name) {
        return camelCase(name.replace(PREFIX_REGEXP, ""));
    }
    function tokenDifference(str1, str2) {
        var values = "", tokens1 = str1.split(/\s+/), tokens2 = str2.split(/\s+/);
        outer: for (var i = 0; i < tokens1.length; i++) {
            for (var token = tokens1[i], j = 0; j < tokens2.length; j++) if (token == tokens2[j]) continue outer;
            values += (values.length > 0 ? " " : "") + token;
        }
        return values;
    }
    function removeComments(jqNodes) {
        jqNodes = jqLite(jqNodes);
        var i = jqNodes.length;
        if (1 >= i) return jqNodes;
        for (;i--; ) {
            var node = jqNodes[i];
            node.nodeType === NODE_TYPE_COMMENT && splice.call(jqNodes, i, 1);
        }
        return jqNodes;
    }
    function identifierForController(controller, ident) {
        if (ident && isString(ident)) return ident;
        if (isString(controller)) {
            var match = CNTRL_REG.exec(controller);
            if (match) return match[3];
        }
    }
    function $ControllerProvider() {
        var controllers = {}, globals = !1;
        this.has = function(name) {
            return controllers.hasOwnProperty(name);
        }, this.register = function(name, constructor) {
            assertNotHasOwnProperty(name, "controller"), isObject(name) ? extend(controllers, name) : controllers[name] = constructor;
        }, this.allowGlobals = function() {
            globals = !0;
        }, this.$get = [ "$injector", "$window", function($injector, $window) {
            function addIdentifier(locals, identifier, instance, name) {
                if (!locals || !isObject(locals.$scope)) throw minErr("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", name, identifier);
                locals.$scope[identifier] = instance;
            }
            return function(expression, locals, later, ident) {
                var instance, match, constructor, identifier;
                if (later = later === !0, ident && isString(ident) && (identifier = ident), isString(expression)) {
                    if (match = expression.match(CNTRL_REG), !match) throw $controllerMinErr("ctrlfmt", "Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.", expression);
                    constructor = match[1], identifier = identifier || match[3], expression = controllers.hasOwnProperty(constructor) ? controllers[constructor] : getter(locals.$scope, constructor, !0) || (globals ? getter($window, constructor, !0) : void 0), 
                    assertArgFn(expression, constructor, !0);
                }
                if (later) {
                    var controllerPrototype = (isArray(expression) ? expression[expression.length - 1] : expression).prototype;
                    instance = Object.create(controllerPrototype || null), identifier && addIdentifier(locals, identifier, instance, constructor || expression.name);
                    var instantiate;
                    return instantiate = extend(function() {
                        var result = $injector.invoke(expression, instance, locals, constructor);
                        return result !== instance && (isObject(result) || isFunction(result)) && (instance = result, 
                        identifier && addIdentifier(locals, identifier, instance, constructor || expression.name)), 
                        instance;
                    }, {
                        instance: instance,
                        identifier: identifier
                    });
                }
                return instance = $injector.instantiate(expression, locals, constructor), identifier && addIdentifier(locals, identifier, instance, constructor || expression.name), 
                instance;
            };
        } ];
    }
    function $DocumentProvider() {
        this.$get = [ "$window", function(window) {
            return jqLite(window.document);
        } ];
    }
    function $ExceptionHandlerProvider() {
        this.$get = [ "$log", function($log) {
            return function() {
                $log.error.apply($log, arguments);
            };
        } ];
    }
    function serializeValue(v) {
        return isObject(v) ? isDate(v) ? v.toISOString() : toJson(v) : v;
    }
    function $HttpParamSerializerProvider() {
        this.$get = function() {
            return function(params) {
                if (!params) return "";
                var parts = [];
                return forEachSorted(params, function(value, key) {
                    null === value || isUndefined(value) || (isArray(value) ? forEach(value, function(v) {
                        parts.push(encodeUriQuery(key) + "=" + encodeUriQuery(serializeValue(v)));
                    }) : parts.push(encodeUriQuery(key) + "=" + encodeUriQuery(serializeValue(value))));
                }), parts.join("&");
            };
        };
    }
    function $HttpParamSerializerJQLikeProvider() {
        this.$get = function() {
            return function(params) {
                function serialize(toSerialize, prefix, topLevel) {
                    null === toSerialize || isUndefined(toSerialize) || (isArray(toSerialize) ? forEach(toSerialize, function(value, index) {
                        serialize(value, prefix + "[" + (isObject(value) ? index : "") + "]");
                    }) : isObject(toSerialize) && !isDate(toSerialize) ? forEachSorted(toSerialize, function(value, key) {
                        serialize(value, prefix + (topLevel ? "" : "[") + key + (topLevel ? "" : "]"));
                    }) : parts.push(encodeUriQuery(prefix) + "=" + encodeUriQuery(serializeValue(toSerialize))));
                }
                if (!params) return "";
                var parts = [];
                return serialize(params, "", !0), parts.join("&");
            };
        };
    }
    function defaultHttpResponseTransform(data, headers) {
        if (isString(data)) {
            var tempData = data.replace(JSON_PROTECTION_PREFIX, "").trim();
            if (tempData) {
                var contentType = headers("Content-Type");
                (contentType && 0 === contentType.indexOf(APPLICATION_JSON) || isJsonLike(tempData)) && (data = fromJson(tempData));
            }
        }
        return data;
    }
    function isJsonLike(str) {
        var jsonStart = str.match(JSON_START);
        return jsonStart && JSON_ENDS[jsonStart[0]].test(str);
    }
    function parseHeaders(headers) {
        function fillInParsed(key, val) {
            key && (parsed[key] = parsed[key] ? parsed[key] + ", " + val : val);
        }
        var i, parsed = createMap();
        return isString(headers) ? forEach(headers.split("\n"), function(line) {
            i = line.indexOf(":"), fillInParsed(lowercase(trim(line.substr(0, i))), trim(line.substr(i + 1)));
        }) : isObject(headers) && forEach(headers, function(headerVal, headerKey) {
            fillInParsed(lowercase(headerKey), trim(headerVal));
        }), parsed;
    }
    function headersGetter(headers) {
        var headersObj;
        return function(name) {
            if (headersObj || (headersObj = parseHeaders(headers)), name) {
                var value = headersObj[lowercase(name)];
                return void 0 === value && (value = null), value;
            }
            return headersObj;
        };
    }
    function transformData(data, headers, status, fns) {
        return isFunction(fns) ? fns(data, headers, status) : (forEach(fns, function(fn) {
            data = fn(data, headers, status);
        }), data);
    }
    function isSuccess(status) {
        return status >= 200 && 300 > status;
    }
    function $HttpProvider() {
        var defaults = this.defaults = {
            transformResponse: [ defaultHttpResponseTransform ],
            transformRequest: [ function(d) {
                return !isObject(d) || isFile(d) || isBlob(d) || isFormData(d) ? d : toJson(d);
            } ],
            headers: {
                common: {
                    Accept: "application/json, text/plain, */*"
                },
                post: shallowCopy(CONTENT_TYPE_APPLICATION_JSON),
                put: shallowCopy(CONTENT_TYPE_APPLICATION_JSON),
                patch: shallowCopy(CONTENT_TYPE_APPLICATION_JSON)
            },
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            paramSerializer: "$httpParamSerializer"
        }, useApplyAsync = !1;
        this.useApplyAsync = function(value) {
            return isDefined(value) ? (useApplyAsync = !!value, this) : useApplyAsync;
        };
        var useLegacyPromise = !0;
        this.useLegacyPromiseExtensions = function(value) {
            return isDefined(value) ? (useLegacyPromise = !!value, this) : useLegacyPromise;
        };
        var interceptorFactories = this.interceptors = [];
        this.$get = [ "$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", function($httpBackend, $$cookieReader, $cacheFactory, $rootScope, $q, $injector) {
            function $http(requestConfig) {
                function chainInterceptors(promise, interceptors) {
                    for (var i = 0, ii = interceptors.length; ii > i; ) {
                        var thenFn = interceptors[i++], rejectFn = interceptors[i++];
                        promise = promise.then(thenFn, rejectFn);
                    }
                    return interceptors.length = 0, promise;
                }
                function executeHeaderFns(headers, config) {
                    var headerContent, processedHeaders = {};
                    return forEach(headers, function(headerFn, header) {
                        isFunction(headerFn) ? (headerContent = headerFn(config), null != headerContent && (processedHeaders[header] = headerContent)) : processedHeaders[header] = headerFn;
                    }), processedHeaders;
                }
                function mergeHeaders(config) {
                    var defHeaderName, lowercaseDefHeaderName, reqHeaderName, defHeaders = defaults.headers, reqHeaders = extend({}, config.headers);
                    defHeaders = extend({}, defHeaders.common, defHeaders[lowercase(config.method)]);
                    defaultHeadersIteration: for (defHeaderName in defHeaders) {
                        lowercaseDefHeaderName = lowercase(defHeaderName);
                        for (reqHeaderName in reqHeaders) if (lowercase(reqHeaderName) === lowercaseDefHeaderName) continue defaultHeadersIteration;
                        reqHeaders[defHeaderName] = defHeaders[defHeaderName];
                    }
                    return executeHeaderFns(reqHeaders, shallowCopy(config));
                }
                function serverRequest(config) {
                    var headers = config.headers, reqData = transformData(config.data, headersGetter(headers), void 0, config.transformRequest);
                    return isUndefined(reqData) && forEach(headers, function(value, header) {
                        "content-type" === lowercase(header) && delete headers[header];
                    }), isUndefined(config.withCredentials) && !isUndefined(defaults.withCredentials) && (config.withCredentials = defaults.withCredentials), 
                    sendReq(config, reqData).then(transformResponse, transformResponse);
                }
                function transformResponse(response) {
                    var resp = extend({}, response);
                    return resp.data = transformData(response.data, response.headers, response.status, config.transformResponse), 
                    isSuccess(response.status) ? resp : $q.reject(resp);
                }
                if (!isObject(requestConfig)) throw minErr("$http")("badreq", "Http request configuration must be an object.  Received: {0}", requestConfig);
                if (!isString(requestConfig.url)) throw minErr("$http")("badreq", "Http request configuration url must be a string.  Received: {0}", requestConfig.url);
                var config = extend({
                    method: "get",
                    transformRequest: defaults.transformRequest,
                    transformResponse: defaults.transformResponse,
                    paramSerializer: defaults.paramSerializer
                }, requestConfig);
                config.headers = mergeHeaders(requestConfig), config.method = uppercase(config.method), 
                config.paramSerializer = isString(config.paramSerializer) ? $injector.get(config.paramSerializer) : config.paramSerializer;
                var requestInterceptors = [], responseInterceptors = [], promise = $q.when(config);
                return forEach(reversedInterceptors, function(interceptor) {
                    (interceptor.request || interceptor.requestError) && requestInterceptors.unshift(interceptor.request, interceptor.requestError), 
                    (interceptor.response || interceptor.responseError) && responseInterceptors.push(interceptor.response, interceptor.responseError);
                }), promise = chainInterceptors(promise, requestInterceptors), promise = promise.then(serverRequest), 
                promise = chainInterceptors(promise, responseInterceptors), useLegacyPromise ? (promise.success = function(fn) {
                    return assertArgFn(fn, "fn"), promise.then(function(response) {
                        fn(response.data, response.status, response.headers, config);
                    }), promise;
                }, promise.error = function(fn) {
                    return assertArgFn(fn, "fn"), promise.then(null, function(response) {
                        fn(response.data, response.status, response.headers, config);
                    }), promise;
                }) : (promise.success = $httpMinErrLegacyFn("success"), promise.error = $httpMinErrLegacyFn("error")), 
                promise;
            }
            function createShortMethods() {
                forEach(arguments, function(name) {
                    $http[name] = function(url, config) {
                        return $http(extend({}, config || {}, {
                            method: name,
                            url: url
                        }));
                    };
                });
            }
            function createShortMethodsWithData() {
                forEach(arguments, function(name) {
                    $http[name] = function(url, data, config) {
                        return $http(extend({}, config || {}, {
                            method: name,
                            url: url,
                            data: data
                        }));
                    };
                });
            }
            function sendReq(config, reqData) {
                function createApplyHandlers(eventHandlers) {
                    if (eventHandlers) {
                        var applyHandlers = {};
                        return forEach(eventHandlers, function(eventHandler, key) {
                            applyHandlers[key] = function(event) {
                                function callEventHandler() {
                                    eventHandler(event);
                                }
                                useApplyAsync ? $rootScope.$applyAsync(callEventHandler) : $rootScope.$$phase ? callEventHandler() : $rootScope.$apply(callEventHandler);
                            };
                        }), applyHandlers;
                    }
                }
                function done(status, response, headersString, statusText) {
                    function resolveHttpPromise() {
                        resolvePromise(response, status, headersString, statusText);
                    }
                    cache && (isSuccess(status) ? cache.put(url, [ status, response, parseHeaders(headersString), statusText ]) : cache.remove(url)), 
                    useApplyAsync ? $rootScope.$applyAsync(resolveHttpPromise) : (resolveHttpPromise(), 
                    $rootScope.$$phase || $rootScope.$apply());
                }
                function resolvePromise(response, status, headers, statusText) {
                    status = status >= -1 ? status : 0, (isSuccess(status) ? deferred.resolve : deferred.reject)({
                        data: response,
                        status: status,
                        headers: headersGetter(headers),
                        config: config,
                        statusText: statusText
                    });
                }
                function resolvePromiseWithResult(result) {
                    resolvePromise(result.data, result.status, shallowCopy(result.headers()), result.statusText);
                }
                function removePendingReq() {
                    var idx = $http.pendingRequests.indexOf(config);
                    -1 !== idx && $http.pendingRequests.splice(idx, 1);
                }
                var cache, cachedResp, deferred = $q.defer(), promise = deferred.promise, reqHeaders = config.headers, url = buildUrl(config.url, config.paramSerializer(config.params));
                if ($http.pendingRequests.push(config), promise.then(removePendingReq, removePendingReq), 
                !config.cache && !defaults.cache || config.cache === !1 || "GET" !== config.method && "JSONP" !== config.method || (cache = isObject(config.cache) ? config.cache : isObject(defaults.cache) ? defaults.cache : defaultCache), 
                cache && (cachedResp = cache.get(url), isDefined(cachedResp) ? isPromiseLike(cachedResp) ? cachedResp.then(resolvePromiseWithResult, resolvePromiseWithResult) : isArray(cachedResp) ? resolvePromise(cachedResp[1], cachedResp[0], shallowCopy(cachedResp[2]), cachedResp[3]) : resolvePromise(cachedResp, 200, {}, "OK") : cache.put(url, promise)), 
                isUndefined(cachedResp)) {
                    var xsrfValue = urlIsSameOrigin(config.url) ? $$cookieReader()[config.xsrfCookieName || defaults.xsrfCookieName] : void 0;
                    xsrfValue && (reqHeaders[config.xsrfHeaderName || defaults.xsrfHeaderName] = xsrfValue), 
                    $httpBackend(config.method, url, reqData, done, reqHeaders, config.timeout, config.withCredentials, config.responseType, createApplyHandlers(config.eventHandlers), createApplyHandlers(config.uploadEventHandlers));
                }
                return promise;
            }
            function buildUrl(url, serializedParams) {
                return serializedParams.length > 0 && (url += (-1 == url.indexOf("?") ? "?" : "&") + serializedParams), 
                url;
            }
            var defaultCache = $cacheFactory("$http");
            defaults.paramSerializer = isString(defaults.paramSerializer) ? $injector.get(defaults.paramSerializer) : defaults.paramSerializer;
            var reversedInterceptors = [];
            return forEach(interceptorFactories, function(interceptorFactory) {
                reversedInterceptors.unshift(isString(interceptorFactory) ? $injector.get(interceptorFactory) : $injector.invoke(interceptorFactory));
            }), $http.pendingRequests = [], createShortMethods("get", "delete", "head", "jsonp"), 
            createShortMethodsWithData("post", "put", "patch"), $http.defaults = defaults, $http;
        } ];
    }
    function $xhrFactoryProvider() {
        this.$get = function() {
            return function() {
                return new window.XMLHttpRequest();
            };
        };
    }
    function $HttpBackendProvider() {
        this.$get = [ "$browser", "$jsonpCallbacks", "$document", "$xhrFactory", function($browser, $jsonpCallbacks, $document, $xhrFactory) {
            return createHttpBackend($browser, $xhrFactory, $browser.defer, $jsonpCallbacks, $document[0]);
        } ];
    }
    function createHttpBackend($browser, createXhr, $browserDefer, callbacks, rawDocument) {
        function jsonpReq(url, callbackPath, done) {
            url = url.replace("JSON_CALLBACK", callbackPath);
            var script = rawDocument.createElement("script"), callback = null;
            return script.type = "text/javascript", script.src = url, script.async = !0, callback = function(event) {
                removeEventListenerFn(script, "load", callback), removeEventListenerFn(script, "error", callback), 
                rawDocument.body.removeChild(script), script = null;
                var status = -1, text = "unknown";
                event && ("load" !== event.type || callbacks.wasCalled(callbackPath) || (event = {
                    type: "error"
                }), text = event.type, status = "error" === event.type ? 404 : 200), done && done(status, text);
            }, addEventListenerFn(script, "load", callback), addEventListenerFn(script, "error", callback), 
            rawDocument.body.appendChild(script), callback;
        }
        return function(method, url, post, callback, headers, timeout, withCredentials, responseType, eventHandlers, uploadEventHandlers) {
            function timeoutRequest() {
                jsonpDone && jsonpDone(), xhr && xhr.abort();
            }
            function completeRequest(callback, status, response, headersString, statusText) {
                isDefined(timeoutId) && $browserDefer.cancel(timeoutId), jsonpDone = xhr = null, 
                callback(status, response, headersString, statusText), $browser.$$completeOutstandingRequest(noop);
            }
            if ($browser.$$incOutstandingRequestCount(), url = url || $browser.url(), "jsonp" === lowercase(method)) var callbackPath = callbacks.createCallback(url), jsonpDone = jsonpReq(url, callbackPath, function(status, text) {
                var response = 200 === status && callbacks.getResponse(callbackPath);
                completeRequest(callback, status, response, "", text), callbacks.removeCallback(callbackPath);
            }); else {
                var xhr = createXhr(method, url);
                xhr.open(method, url, !0), forEach(headers, function(value, key) {
                    isDefined(value) && xhr.setRequestHeader(key, value);
                }), xhr.onload = function() {
                    var statusText = xhr.statusText || "", response = "response" in xhr ? xhr.response : xhr.responseText, status = 1223 === xhr.status ? 204 : xhr.status;
                    0 === status && (status = response ? 200 : "file" == urlResolve(url).protocol ? 404 : 0), 
                    completeRequest(callback, status, response, xhr.getAllResponseHeaders(), statusText);
                };
                var requestError = function() {
                    completeRequest(callback, -1, null, null, "");
                };
                if (xhr.onerror = requestError, xhr.onabort = requestError, forEach(eventHandlers, function(value, key) {
                    xhr.addEventListener(key, value);
                }), forEach(uploadEventHandlers, function(value, key) {
                    xhr.upload.addEventListener(key, value);
                }), withCredentials && (xhr.withCredentials = !0), responseType) try {
                    xhr.responseType = responseType;
                } catch (e) {
                    if ("json" !== responseType) throw e;
                }
                xhr.send(isUndefined(post) ? null : post);
            }
            if (timeout > 0) var timeoutId = $browserDefer(timeoutRequest, timeout); else isPromiseLike(timeout) && timeout.then(timeoutRequest);
        };
    }
    function $InterpolateProvider() {
        var startSymbol = "{{", endSymbol = "}}";
        this.startSymbol = function(value) {
            return value ? (startSymbol = value, this) : startSymbol;
        }, this.endSymbol = function(value) {
            return value ? (endSymbol = value, this) : endSymbol;
        }, this.$get = [ "$parse", "$exceptionHandler", "$sce", function($parse, $exceptionHandler, $sce) {
            function escape(ch) {
                return "\\\\\\" + ch;
            }
            function unescapeText(text) {
                return text.replace(escapedStartRegexp, startSymbol).replace(escapedEndRegexp, endSymbol);
            }
            function stringify(value) {
                if (null == value) return "";
                switch (typeof value) {
                  case "string":
                    break;

                  case "number":
                    value = "" + value;
                    break;

                  default:
                    value = toJson(value);
                }
                return value;
            }
            function constantWatchDelegate(scope, listener, objectEquality, constantInterp) {
                var unwatch;
                return unwatch = scope.$watch(function(scope) {
                    return unwatch(), constantInterp(scope);
                }, listener, objectEquality);
            }
            function $interpolate(text, mustHaveExpression, trustedContext, allOrNothing) {
                function parseStringifyInterceptor(value) {
                    try {
                        return value = getValue(value), allOrNothing && !isDefined(value) ? value : stringify(value);
                    } catch (err) {
                        $exceptionHandler($interpolateMinErr.interr(text, err));
                    }
                }
                if (!text.length || -1 === text.indexOf(startSymbol)) {
                    var constantInterp;
                    if (!mustHaveExpression) {
                        var unescapedText = unescapeText(text);
                        constantInterp = valueFn(unescapedText), constantInterp.exp = text, constantInterp.expressions = [], 
                        constantInterp.$$watchDelegate = constantWatchDelegate;
                    }
                    return constantInterp;
                }
                allOrNothing = !!allOrNothing;
                for (var startIndex, endIndex, exp, index = 0, expressions = [], parseFns = [], textLength = text.length, concat = [], expressionPositions = []; textLength > index; ) {
                    if (-1 == (startIndex = text.indexOf(startSymbol, index)) || -1 == (endIndex = text.indexOf(endSymbol, startIndex + startSymbolLength))) {
                        index !== textLength && concat.push(unescapeText(text.substring(index)));
                        break;
                    }
                    index !== startIndex && concat.push(unescapeText(text.substring(index, startIndex))), 
                    exp = text.substring(startIndex + startSymbolLength, endIndex), expressions.push(exp), 
                    parseFns.push($parse(exp, parseStringifyInterceptor)), index = endIndex + endSymbolLength, 
                    expressionPositions.push(concat.length), concat.push("");
                }
                if (trustedContext && concat.length > 1 && $interpolateMinErr.throwNoconcat(text), 
                !mustHaveExpression || expressions.length) {
                    var compute = function(values) {
                        for (var i = 0, ii = expressions.length; ii > i; i++) {
                            if (allOrNothing && isUndefined(values[i])) return;
                            concat[expressionPositions[i]] = values[i];
                        }
                        return concat.join("");
                    }, getValue = function(value) {
                        return trustedContext ? $sce.getTrusted(trustedContext, value) : $sce.valueOf(value);
                    };
                    return extend(function(context) {
                        var i = 0, ii = expressions.length, values = new Array(ii);
                        try {
                            for (;ii > i; i++) values[i] = parseFns[i](context);
                            return compute(values);
                        } catch (err) {
                            $exceptionHandler($interpolateMinErr.interr(text, err));
                        }
                    }, {
                        exp: text,
                        expressions: expressions,
                        $$watchDelegate: function(scope, listener) {
                            var lastValue;
                            return scope.$watchGroup(parseFns, function(values, oldValues) {
                                var currValue = compute(values);
                                isFunction(listener) && listener.call(this, currValue, values !== oldValues ? lastValue : currValue, scope), 
                                lastValue = currValue;
                            });
                        }
                    });
                }
            }
            var startSymbolLength = startSymbol.length, endSymbolLength = endSymbol.length, escapedStartRegexp = new RegExp(startSymbol.replace(/./g, escape), "g"), escapedEndRegexp = new RegExp(endSymbol.replace(/./g, escape), "g");
            return $interpolate.startSymbol = function() {
                return startSymbol;
            }, $interpolate.endSymbol = function() {
                return endSymbol;
            }, $interpolate;
        } ];
    }
    function $IntervalProvider() {
        this.$get = [ "$rootScope", "$window", "$q", "$$q", "$browser", function($rootScope, $window, $q, $$q, $browser) {
            function interval(fn, delay, count, invokeApply) {
                function callback() {
                    hasParams ? fn.apply(null, args) : fn(iteration);
                }
                var hasParams = arguments.length > 4, args = hasParams ? sliceArgs(arguments, 4) : [], setInterval = $window.setInterval, clearInterval = $window.clearInterval, iteration = 0, skipApply = isDefined(invokeApply) && !invokeApply, deferred = (skipApply ? $$q : $q).defer(), promise = deferred.promise;
                return count = isDefined(count) ? count : 0, promise.$$intervalId = setInterval(function() {
                    skipApply ? $browser.defer(callback) : $rootScope.$evalAsync(callback), deferred.notify(iteration++), 
                    count > 0 && iteration >= count && (deferred.resolve(iteration), clearInterval(promise.$$intervalId), 
                    delete intervals[promise.$$intervalId]), skipApply || $rootScope.$apply();
                }, delay), intervals[promise.$$intervalId] = deferred, promise;
            }
            var intervals = {};
            return interval.cancel = function(promise) {
                return promise && promise.$$intervalId in intervals ? (intervals[promise.$$intervalId].reject("canceled"), 
                $window.clearInterval(promise.$$intervalId), delete intervals[promise.$$intervalId], 
                !0) : !1;
            }, interval;
        } ];
    }
    function encodePath(path) {
        for (var segments = path.split("/"), i = segments.length; i--; ) segments[i] = encodeUriSegment(segments[i]);
        return segments.join("/");
    }
    function parseAbsoluteUrl(absoluteUrl, locationObj) {
        var parsedUrl = urlResolve(absoluteUrl);
        locationObj.$$protocol = parsedUrl.protocol, locationObj.$$host = parsedUrl.hostname, 
        locationObj.$$port = toInt(parsedUrl.port) || DEFAULT_PORTS[parsedUrl.protocol] || null;
    }
    function parseAppUrl(relativeUrl, locationObj) {
        var prefixed = "/" !== relativeUrl.charAt(0);
        prefixed && (relativeUrl = "/" + relativeUrl);
        var match = urlResolve(relativeUrl);
        locationObj.$$path = decodeURIComponent(prefixed && "/" === match.pathname.charAt(0) ? match.pathname.substring(1) : match.pathname), 
        locationObj.$$search = parseKeyValue(match.search), locationObj.$$hash = decodeURIComponent(match.hash), 
        locationObj.$$path && "/" != locationObj.$$path.charAt(0) && (locationObj.$$path = "/" + locationObj.$$path);
    }
    function startsWith(haystack, needle) {
        return 0 === haystack.lastIndexOf(needle, 0);
    }
    function stripBaseUrl(base, url) {
        return startsWith(url, base) ? url.substr(base.length) : void 0;
    }
    function stripHash(url) {
        var index = url.indexOf("#");
        return -1 == index ? url : url.substr(0, index);
    }
    function trimEmptyHash(url) {
        return url.replace(/(#.+)|#$/, "$1");
    }
    function stripFile(url) {
        return url.substr(0, stripHash(url).lastIndexOf("/") + 1);
    }
    function serverBase(url) {
        return url.substring(0, url.indexOf("/", url.indexOf("//") + 2));
    }
    function LocationHtml5Url(appBase, appBaseNoFile, basePrefix) {
        this.$$html5 = !0, basePrefix = basePrefix || "", parseAbsoluteUrl(appBase, this), 
        this.$$parse = function(url) {
            var pathUrl = stripBaseUrl(appBaseNoFile, url);
            if (!isString(pathUrl)) throw $locationMinErr("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', url, appBaseNoFile);
            parseAppUrl(pathUrl, this), this.$$path || (this.$$path = "/"), this.$$compose();
        }, this.$$compose = function() {
            var search = toKeyValue(this.$$search), hash = this.$$hash ? "#" + encodeUriSegment(this.$$hash) : "";
            this.$$url = encodePath(this.$$path) + (search ? "?" + search : "") + hash, this.$$absUrl = appBaseNoFile + this.$$url.substr(1);
        }, this.$$parseLinkUrl = function(url, relHref) {
            if (relHref && "#" === relHref[0]) return this.hash(relHref.slice(1)), !0;
            var appUrl, prevAppUrl, rewrittenUrl;
            return isDefined(appUrl = stripBaseUrl(appBase, url)) ? (prevAppUrl = appUrl, rewrittenUrl = isDefined(appUrl = stripBaseUrl(basePrefix, appUrl)) ? appBaseNoFile + (stripBaseUrl("/", appUrl) || appUrl) : appBase + prevAppUrl) : isDefined(appUrl = stripBaseUrl(appBaseNoFile, url)) ? rewrittenUrl = appBaseNoFile + appUrl : appBaseNoFile == url + "/" && (rewrittenUrl = appBaseNoFile), 
            rewrittenUrl && this.$$parse(rewrittenUrl), !!rewrittenUrl;
        };
    }
    function LocationHashbangUrl(appBase, appBaseNoFile, hashPrefix) {
        parseAbsoluteUrl(appBase, this), this.$$parse = function(url) {
            function removeWindowsDriveName(path, url, base) {
                var firstPathSegmentMatch, windowsFilePathExp = /^\/[A-Z]:(\/.*)/;
                return startsWith(url, base) && (url = url.replace(base, "")), windowsFilePathExp.exec(url) ? path : (firstPathSegmentMatch = windowsFilePathExp.exec(path), 
                firstPathSegmentMatch ? firstPathSegmentMatch[1] : path);
            }
            var withoutHashUrl, withoutBaseUrl = stripBaseUrl(appBase, url) || stripBaseUrl(appBaseNoFile, url);
            isUndefined(withoutBaseUrl) || "#" !== withoutBaseUrl.charAt(0) ? this.$$html5 ? withoutHashUrl = withoutBaseUrl : (withoutHashUrl = "", 
            isUndefined(withoutBaseUrl) && (appBase = url, this.replace())) : (withoutHashUrl = stripBaseUrl(hashPrefix, withoutBaseUrl), 
            isUndefined(withoutHashUrl) && (withoutHashUrl = withoutBaseUrl)), parseAppUrl(withoutHashUrl, this), 
            this.$$path = removeWindowsDriveName(this.$$path, withoutHashUrl, appBase), this.$$compose();
        }, this.$$compose = function() {
            var search = toKeyValue(this.$$search), hash = this.$$hash ? "#" + encodeUriSegment(this.$$hash) : "";
            this.$$url = encodePath(this.$$path) + (search ? "?" + search : "") + hash, this.$$absUrl = appBase + (this.$$url ? hashPrefix + this.$$url : "");
        }, this.$$parseLinkUrl = function(url) {
            return stripHash(appBase) == stripHash(url) ? (this.$$parse(url), !0) : !1;
        };
    }
    function LocationHashbangInHtml5Url(appBase, appBaseNoFile, hashPrefix) {
        this.$$html5 = !0, LocationHashbangUrl.apply(this, arguments), this.$$parseLinkUrl = function(url, relHref) {
            if (relHref && "#" === relHref[0]) return this.hash(relHref.slice(1)), !0;
            var rewrittenUrl, appUrl;
            return appBase == stripHash(url) ? rewrittenUrl = url : (appUrl = stripBaseUrl(appBaseNoFile, url)) ? rewrittenUrl = appBase + hashPrefix + appUrl : appBaseNoFile === url + "/" && (rewrittenUrl = appBaseNoFile), 
            rewrittenUrl && this.$$parse(rewrittenUrl), !!rewrittenUrl;
        }, this.$$compose = function() {
            var search = toKeyValue(this.$$search), hash = this.$$hash ? "#" + encodeUriSegment(this.$$hash) : "";
            this.$$url = encodePath(this.$$path) + (search ? "?" + search : "") + hash, this.$$absUrl = appBase + hashPrefix + this.$$url;
        };
    }
    function locationGetter(property) {
        return function() {
            return this[property];
        };
    }
    function locationGetterSetter(property, preprocess) {
        return function(value) {
            return isUndefined(value) ? this[property] : (this[property] = preprocess(value), 
            this.$$compose(), this);
        };
    }
    function $LocationProvider() {
        var hashPrefix = "", html5Mode = {
            enabled: !1,
            requireBase: !0,
            rewriteLinks: !0
        };
        this.hashPrefix = function(prefix) {
            return isDefined(prefix) ? (hashPrefix = prefix, this) : hashPrefix;
        }, this.html5Mode = function(mode) {
            return isBoolean(mode) ? (html5Mode.enabled = mode, this) : isObject(mode) ? (isBoolean(mode.enabled) && (html5Mode.enabled = mode.enabled), 
            isBoolean(mode.requireBase) && (html5Mode.requireBase = mode.requireBase), isBoolean(mode.rewriteLinks) && (html5Mode.rewriteLinks = mode.rewriteLinks), 
            this) : html5Mode;
        }, this.$get = [ "$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function($rootScope, $browser, $sniffer, $rootElement, $window) {
            function setBrowserUrlWithFallback(url, replace, state) {
                var oldUrl = $location.url(), oldState = $location.$$state;
                try {
                    $browser.url(url, replace, state), $location.$$state = $browser.state();
                } catch (e) {
                    throw $location.url(oldUrl), $location.$$state = oldState, e;
                }
            }
            function afterLocationChange(oldUrl, oldState) {
                $rootScope.$broadcast("$locationChangeSuccess", $location.absUrl(), oldUrl, $location.$$state, oldState);
            }
            var $location, LocationMode, appBase, baseHref = $browser.baseHref(), initialUrl = $browser.url();
            if (html5Mode.enabled) {
                if (!baseHref && html5Mode.requireBase) throw $locationMinErr("nobase", "$location in HTML5 mode requires a <base> tag to be present!");
                appBase = serverBase(initialUrl) + (baseHref || "/"), LocationMode = $sniffer.history ? LocationHtml5Url : LocationHashbangInHtml5Url;
            } else appBase = stripHash(initialUrl), LocationMode = LocationHashbangUrl;
            var appBaseNoFile = stripFile(appBase);
            $location = new LocationMode(appBase, appBaseNoFile, "#" + hashPrefix), $location.$$parseLinkUrl(initialUrl, initialUrl), 
            $location.$$state = $browser.state();
            var IGNORE_URI_REGEXP = /^\s*(javascript|mailto):/i;
            $rootElement.on("click", function(event) {
                if (html5Mode.rewriteLinks && !event.ctrlKey && !event.metaKey && !event.shiftKey && 2 != event.which && 2 != event.button) {
                    for (var elm = jqLite(event.target); "a" !== nodeName_(elm[0]); ) if (elm[0] === $rootElement[0] || !(elm = elm.parent())[0]) return;
                    var absHref = elm.prop("href"), relHref = elm.attr("href") || elm.attr("xlink:href");
                    isObject(absHref) && "[object SVGAnimatedString]" === absHref.toString() && (absHref = urlResolve(absHref.animVal).href), 
                    IGNORE_URI_REGEXP.test(absHref) || !absHref || elm.attr("target") || event.isDefaultPrevented() || $location.$$parseLinkUrl(absHref, relHref) && (event.preventDefault(), 
                    $location.absUrl() != $browser.url() && ($rootScope.$apply(), $window.angular["ff-684208-preventDefault"] = !0));
                }
            }), trimEmptyHash($location.absUrl()) != trimEmptyHash(initialUrl) && $browser.url($location.absUrl(), !0);
            var initializing = !0;
            return $browser.onUrlChange(function(newUrl, newState) {
                return isUndefined(stripBaseUrl(appBaseNoFile, newUrl)) ? void ($window.location.href = newUrl) : ($rootScope.$evalAsync(function() {
                    var defaultPrevented, oldUrl = $location.absUrl(), oldState = $location.$$state;
                    newUrl = trimEmptyHash(newUrl), $location.$$parse(newUrl), $location.$$state = newState, 
                    defaultPrevented = $rootScope.$broadcast("$locationChangeStart", newUrl, oldUrl, newState, oldState).defaultPrevented, 
                    $location.absUrl() === newUrl && (defaultPrevented ? ($location.$$parse(oldUrl), 
                    $location.$$state = oldState, setBrowserUrlWithFallback(oldUrl, !1, oldState)) : (initializing = !1, 
                    afterLocationChange(oldUrl, oldState)));
                }), void ($rootScope.$$phase || $rootScope.$digest()));
            }), $rootScope.$watch(function() {
                var oldUrl = trimEmptyHash($browser.url()), newUrl = trimEmptyHash($location.absUrl()), oldState = $browser.state(), currentReplace = $location.$$replace, urlOrStateChanged = oldUrl !== newUrl || $location.$$html5 && $sniffer.history && oldState !== $location.$$state;
                (initializing || urlOrStateChanged) && (initializing = !1, $rootScope.$evalAsync(function() {
                    var newUrl = $location.absUrl(), defaultPrevented = $rootScope.$broadcast("$locationChangeStart", newUrl, oldUrl, $location.$$state, oldState).defaultPrevented;
                    $location.absUrl() === newUrl && (defaultPrevented ? ($location.$$parse(oldUrl), 
                    $location.$$state = oldState) : (urlOrStateChanged && setBrowserUrlWithFallback(newUrl, currentReplace, oldState === $location.$$state ? null : $location.$$state), 
                    afterLocationChange(oldUrl, oldState)));
                })), $location.$$replace = !1;
            }), $location;
        } ];
    }
    function $LogProvider() {
        var debug = !0, self = this;
        this.debugEnabled = function(flag) {
            return isDefined(flag) ? (debug = flag, this) : debug;
        }, this.$get = [ "$window", function($window) {
            function formatError(arg) {
                return arg instanceof Error && (arg.stack ? arg = arg.message && -1 === arg.stack.indexOf(arg.message) ? "Error: " + arg.message + "\n" + arg.stack : arg.stack : arg.sourceURL && (arg = arg.message + "\n" + arg.sourceURL + ":" + arg.line)), 
                arg;
            }
            function consoleLog(type) {
                var console = $window.console || {}, logFn = console[type] || console.log || noop, hasApply = !1;
                try {
                    hasApply = !!logFn.apply;
                } catch (e) {}
                return hasApply ? function() {
                    var args = [];
                    return forEach(arguments, function(arg) {
                        args.push(formatError(arg));
                    }), logFn.apply(console, args);
                } : function(arg1, arg2) {
                    logFn(arg1, null == arg2 ? "" : arg2);
                };
            }
            return {
                log: consoleLog("log"),
                info: consoleLog("info"),
                warn: consoleLog("warn"),
                error: consoleLog("error"),
                debug: function() {
                    var fn = consoleLog("debug");
                    return function() {
                        debug && fn.apply(self, arguments);
                    };
                }()
            };
        } ];
    }
    function ensureSafeMemberName(name, fullExpression) {
        if ("__defineGetter__" === name || "__defineSetter__" === name || "__lookupGetter__" === name || "__lookupSetter__" === name || "__proto__" === name) throw $parseMinErr("isecfld", "Attempting to access a disallowed field in Angular expressions! Expression: {0}", fullExpression);
        return name;
    }
    function getStringValue(name) {
        return name + "";
    }
    function ensureSafeObject(obj, fullExpression) {
        if (obj) {
            if (obj.constructor === obj) throw $parseMinErr("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", fullExpression);
            if (obj.window === obj) throw $parseMinErr("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", fullExpression);
            if (obj.children && (obj.nodeName || obj.prop && obj.attr && obj.find)) throw $parseMinErr("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", fullExpression);
            if (obj === Object) throw $parseMinErr("isecobj", "Referencing Object in Angular expressions is disallowed! Expression: {0}", fullExpression);
        }
        return obj;
    }
    function ensureSafeFunction(obj, fullExpression) {
        if (obj) {
            if (obj.constructor === obj) throw $parseMinErr("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", fullExpression);
            if (obj === CALL || obj === APPLY || obj === BIND) throw $parseMinErr("isecff", "Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}", fullExpression);
        }
    }
    function ensureSafeAssignContext(obj, fullExpression) {
        if (obj && (obj === 0..constructor || obj === (!1).constructor || obj === "".constructor || obj === {}.constructor || obj === [].constructor || obj === Function.constructor)) throw $parseMinErr("isecaf", "Assigning to a constructor is disallowed! Expression: {0}", fullExpression);
    }
    function ifDefined(v, d) {
        return "undefined" != typeof v ? v : d;
    }
    function plusFn(l, r) {
        return "undefined" == typeof l ? r : "undefined" == typeof r ? l : l + r;
    }
    function isStateless($filter, filterName) {
        var fn = $filter(filterName);
        return !fn.$stateful;
    }
    function findConstantAndWatchExpressions(ast, $filter) {
        var allConstants, argsToWatch;
        switch (ast.type) {
          case AST.Program:
            allConstants = !0, forEach(ast.body, function(expr) {
                findConstantAndWatchExpressions(expr.expression, $filter), allConstants = allConstants && expr.expression.constant;
            }), ast.constant = allConstants;
            break;

          case AST.Literal:
            ast.constant = !0, ast.toWatch = [];
            break;

          case AST.UnaryExpression:
            findConstantAndWatchExpressions(ast.argument, $filter), ast.constant = ast.argument.constant, 
            ast.toWatch = ast.argument.toWatch;
            break;

          case AST.BinaryExpression:
            findConstantAndWatchExpressions(ast.left, $filter), findConstantAndWatchExpressions(ast.right, $filter), 
            ast.constant = ast.left.constant && ast.right.constant, ast.toWatch = ast.left.toWatch.concat(ast.right.toWatch);
            break;

          case AST.LogicalExpression:
            findConstantAndWatchExpressions(ast.left, $filter), findConstantAndWatchExpressions(ast.right, $filter), 
            ast.constant = ast.left.constant && ast.right.constant, ast.toWatch = ast.constant ? [] : [ ast ];
            break;

          case AST.ConditionalExpression:
            findConstantAndWatchExpressions(ast.test, $filter), findConstantAndWatchExpressions(ast.alternate, $filter), 
            findConstantAndWatchExpressions(ast.consequent, $filter), ast.constant = ast.test.constant && ast.alternate.constant && ast.consequent.constant, 
            ast.toWatch = ast.constant ? [] : [ ast ];
            break;

          case AST.Identifier:
            ast.constant = !1, ast.toWatch = [ ast ];
            break;

          case AST.MemberExpression:
            findConstantAndWatchExpressions(ast.object, $filter), ast.computed && findConstantAndWatchExpressions(ast.property, $filter), 
            ast.constant = ast.object.constant && (!ast.computed || ast.property.constant), 
            ast.toWatch = [ ast ];
            break;

          case AST.CallExpression:
            allConstants = ast.filter ? isStateless($filter, ast.callee.name) : !1, argsToWatch = [], 
            forEach(ast.arguments, function(expr) {
                findConstantAndWatchExpressions(expr, $filter), allConstants = allConstants && expr.constant, 
                expr.constant || argsToWatch.push.apply(argsToWatch, expr.toWatch);
            }), ast.constant = allConstants, ast.toWatch = ast.filter && isStateless($filter, ast.callee.name) ? argsToWatch : [ ast ];
            break;

          case AST.AssignmentExpression:
            findConstantAndWatchExpressions(ast.left, $filter), findConstantAndWatchExpressions(ast.right, $filter), 
            ast.constant = ast.left.constant && ast.right.constant, ast.toWatch = [ ast ];
            break;

          case AST.ArrayExpression:
            allConstants = !0, argsToWatch = [], forEach(ast.elements, function(expr) {
                findConstantAndWatchExpressions(expr, $filter), allConstants = allConstants && expr.constant, 
                expr.constant || argsToWatch.push.apply(argsToWatch, expr.toWatch);
            }), ast.constant = allConstants, ast.toWatch = argsToWatch;
            break;

          case AST.ObjectExpression:
            allConstants = !0, argsToWatch = [], forEach(ast.properties, function(property) {
                findConstantAndWatchExpressions(property.value, $filter), allConstants = allConstants && property.value.constant && !property.computed, 
                property.value.constant || argsToWatch.push.apply(argsToWatch, property.value.toWatch);
            }), ast.constant = allConstants, ast.toWatch = argsToWatch;
            break;

          case AST.ThisExpression:
            ast.constant = !1, ast.toWatch = [];
            break;

          case AST.LocalsExpression:
            ast.constant = !1, ast.toWatch = [];
        }
    }
    function getInputs(body) {
        if (1 == body.length) {
            var lastExpression = body[0].expression, candidate = lastExpression.toWatch;
            return 1 !== candidate.length ? candidate : candidate[0] !== lastExpression ? candidate : void 0;
        }
    }
    function isAssignable(ast) {
        return ast.type === AST.Identifier || ast.type === AST.MemberExpression;
    }
    function assignableAST(ast) {
        return 1 === ast.body.length && isAssignable(ast.body[0].expression) ? {
            type: AST.AssignmentExpression,
            left: ast.body[0].expression,
            right: {
                type: AST.NGValueParameter
            },
            operator: "="
        } : void 0;
    }
    function isLiteral(ast) {
        return 0 === ast.body.length || 1 === ast.body.length && (ast.body[0].expression.type === AST.Literal || ast.body[0].expression.type === AST.ArrayExpression || ast.body[0].expression.type === AST.ObjectExpression);
    }
    function isConstant(ast) {
        return ast.constant;
    }
    function ASTCompiler(astBuilder, $filter) {
        this.astBuilder = astBuilder, this.$filter = $filter;
    }
    function ASTInterpreter(astBuilder, $filter) {
        this.astBuilder = astBuilder, this.$filter = $filter;
    }
    function isPossiblyDangerousMemberName(name) {
        return "constructor" == name;
    }
    function getValueOf(value) {
        return isFunction(value.valueOf) ? value.valueOf() : objectValueOf.call(value);
    }
    function $ParseProvider() {
        var identStart, identContinue, cacheDefault = createMap(), cacheExpensive = createMap(), literals = {
            "true": !0,
            "false": !1,
            "null": null,
            undefined: void 0
        };
        this.addLiteral = function(literalName, literalValue) {
            literals[literalName] = literalValue;
        }, this.setIdentifierFns = function(identifierStart, identifierContinue) {
            return identStart = identifierStart, identContinue = identifierContinue, this;
        }, this.$get = [ "$filter", function($filter) {
            function $parse(exp, interceptorFn, expensiveChecks) {
                var parsedExpression, oneTime, cacheKey;
                switch (expensiveChecks = expensiveChecks || runningChecksEnabled, typeof exp) {
                  case "string":
                    exp = exp.trim(), cacheKey = exp;
                    var cache = expensiveChecks ? cacheExpensive : cacheDefault;
                    if (parsedExpression = cache[cacheKey], !parsedExpression) {
                        ":" === exp.charAt(0) && ":" === exp.charAt(1) && (oneTime = !0, exp = exp.substring(2));
                        var parseOptions = expensiveChecks ? $parseOptionsExpensive : $parseOptions, lexer = new Lexer(parseOptions), parser = new Parser(lexer, $filter, parseOptions);
                        parsedExpression = parser.parse(exp), parsedExpression.constant ? parsedExpression.$$watchDelegate = constantWatchDelegate : oneTime ? parsedExpression.$$watchDelegate = parsedExpression.literal ? oneTimeLiteralWatchDelegate : oneTimeWatchDelegate : parsedExpression.inputs && (parsedExpression.$$watchDelegate = inputsWatchDelegate), 
                        expensiveChecks && (parsedExpression = expensiveChecksInterceptor(parsedExpression)), 
                        cache[cacheKey] = parsedExpression;
                    }
                    return addInterceptor(parsedExpression, interceptorFn);

                  case "function":
                    return addInterceptor(exp, interceptorFn);

                  default:
                    return addInterceptor(noop, interceptorFn);
                }
            }
            function expensiveChecksInterceptor(fn) {
                function expensiveCheckFn(scope, locals, assign, inputs) {
                    var expensiveCheckOldValue = runningChecksEnabled;
                    runningChecksEnabled = !0;
                    try {
                        return fn(scope, locals, assign, inputs);
                    } finally {
                        runningChecksEnabled = expensiveCheckOldValue;
                    }
                }
                if (!fn) return fn;
                expensiveCheckFn.$$watchDelegate = fn.$$watchDelegate, expensiveCheckFn.assign = expensiveChecksInterceptor(fn.assign), 
                expensiveCheckFn.constant = fn.constant, expensiveCheckFn.literal = fn.literal;
                for (var i = 0; fn.inputs && i < fn.inputs.length; ++i) fn.inputs[i] = expensiveChecksInterceptor(fn.inputs[i]);
                return expensiveCheckFn.inputs = fn.inputs, expensiveCheckFn;
            }
            function expressionInputDirtyCheck(newValue, oldValueOfValue) {
                return null == newValue || null == oldValueOfValue ? newValue === oldValueOfValue : "object" == typeof newValue && (newValue = getValueOf(newValue), 
                "object" == typeof newValue) ? !1 : newValue === oldValueOfValue || newValue !== newValue && oldValueOfValue !== oldValueOfValue;
            }
            function inputsWatchDelegate(scope, listener, objectEquality, parsedExpression, prettyPrintExpression) {
                var lastResult, inputExpressions = parsedExpression.inputs;
                if (1 === inputExpressions.length) {
                    var oldInputValueOf = expressionInputDirtyCheck;
                    return inputExpressions = inputExpressions[0], scope.$watch(function(scope) {
                        var newInputValue = inputExpressions(scope);
                        return expressionInputDirtyCheck(newInputValue, oldInputValueOf) || (lastResult = parsedExpression(scope, void 0, void 0, [ newInputValue ]), 
                        oldInputValueOf = newInputValue && getValueOf(newInputValue)), lastResult;
                    }, listener, objectEquality, prettyPrintExpression);
                }
                for (var oldInputValueOfValues = [], oldInputValues = [], i = 0, ii = inputExpressions.length; ii > i; i++) oldInputValueOfValues[i] = expressionInputDirtyCheck, 
                oldInputValues[i] = null;
                return scope.$watch(function(scope) {
                    for (var changed = !1, i = 0, ii = inputExpressions.length; ii > i; i++) {
                        var newInputValue = inputExpressions[i](scope);
                        (changed || (changed = !expressionInputDirtyCheck(newInputValue, oldInputValueOfValues[i]))) && (oldInputValues[i] = newInputValue, 
                        oldInputValueOfValues[i] = newInputValue && getValueOf(newInputValue));
                    }
                    return changed && (lastResult = parsedExpression(scope, void 0, void 0, oldInputValues)), 
                    lastResult;
                }, listener, objectEquality, prettyPrintExpression);
            }
            function oneTimeWatchDelegate(scope, listener, objectEquality, parsedExpression) {
                var unwatch, lastValue;
                return unwatch = scope.$watch(function(scope) {
                    return parsedExpression(scope);
                }, function(value, old, scope) {
                    lastValue = value, isFunction(listener) && listener.apply(this, arguments), isDefined(value) && scope.$$postDigest(function() {
                        isDefined(lastValue) && unwatch();
                    });
                }, objectEquality);
            }
            function oneTimeLiteralWatchDelegate(scope, listener, objectEquality, parsedExpression) {
                function isAllDefined(value) {
                    var allDefined = !0;
                    return forEach(value, function(val) {
                        isDefined(val) || (allDefined = !1);
                    }), allDefined;
                }
                var unwatch, lastValue;
                return unwatch = scope.$watch(function(scope) {
                    return parsedExpression(scope);
                }, function(value, old, scope) {
                    lastValue = value, isFunction(listener) && listener.call(this, value, old, scope), 
                    isAllDefined(value) && scope.$$postDigest(function() {
                        isAllDefined(lastValue) && unwatch();
                    });
                }, objectEquality);
            }
            function constantWatchDelegate(scope, listener, objectEquality, parsedExpression) {
                var unwatch;
                return unwatch = scope.$watch(function(scope) {
                    return unwatch(), parsedExpression(scope);
                }, listener, objectEquality);
            }
            function addInterceptor(parsedExpression, interceptorFn) {
                if (!interceptorFn) return parsedExpression;
                var watchDelegate = parsedExpression.$$watchDelegate, useInputs = !1, regularWatch = watchDelegate !== oneTimeLiteralWatchDelegate && watchDelegate !== oneTimeWatchDelegate, fn = regularWatch ? function(scope, locals, assign, inputs) {
                    var value = useInputs && inputs ? inputs[0] : parsedExpression(scope, locals, assign, inputs);
                    return interceptorFn(value, scope, locals);
                } : function(scope, locals, assign, inputs) {
                    var value = parsedExpression(scope, locals, assign, inputs), result = interceptorFn(value, scope, locals);
                    return isDefined(value) ? result : value;
                };
                return parsedExpression.$$watchDelegate && parsedExpression.$$watchDelegate !== inputsWatchDelegate ? fn.$$watchDelegate = parsedExpression.$$watchDelegate : interceptorFn.$stateful || (fn.$$watchDelegate = inputsWatchDelegate, 
                useInputs = !parsedExpression.inputs, fn.inputs = parsedExpression.inputs ? parsedExpression.inputs : [ parsedExpression ]), 
                fn;
            }
            var noUnsafeEval = csp().noUnsafeEval, $parseOptions = {
                csp: noUnsafeEval,
                expensiveChecks: !1,
                literals: copy(literals),
                isIdentifierStart: isFunction(identStart) && identStart,
                isIdentifierContinue: isFunction(identContinue) && identContinue
            }, $parseOptionsExpensive = {
                csp: noUnsafeEval,
                expensiveChecks: !0,
                literals: copy(literals),
                isIdentifierStart: isFunction(identStart) && identStart,
                isIdentifierContinue: isFunction(identContinue) && identContinue
            }, runningChecksEnabled = !1;
            return $parse.$$runningExpensiveChecks = function() {
                return runningChecksEnabled;
            }, $parse;
        } ];
    }
    function $QProvider() {
        this.$get = [ "$rootScope", "$exceptionHandler", function($rootScope, $exceptionHandler) {
            return qFactory(function(callback) {
                $rootScope.$evalAsync(callback);
            }, $exceptionHandler);
        } ];
    }
    function $$QProvider() {
        this.$get = [ "$browser", "$exceptionHandler", function($browser, $exceptionHandler) {
            return qFactory(function(callback) {
                $browser.defer(callback);
            }, $exceptionHandler);
        } ];
    }
    function qFactory(nextTick, exceptionHandler) {
        function Promise() {
            this.$$state = {
                status: 0
            };
        }
        function simpleBind(context, fn) {
            return function(value) {
                fn.call(context, value);
            };
        }
        function processQueue(state) {
            var fn, deferred, pending;
            pending = state.pending, state.processScheduled = !1, state.pending = void 0;
            for (var i = 0, ii = pending.length; ii > i; ++i) {
                deferred = pending[i][0], fn = pending[i][state.status];
                try {
                    isFunction(fn) ? deferred.resolve(fn(state.value)) : 1 === state.status ? deferred.resolve(state.value) : deferred.reject(state.value);
                } catch (e) {
                    deferred.reject(e), exceptionHandler(e);
                }
            }
        }
        function scheduleProcessQueue(state) {
            !state.processScheduled && state.pending && (state.processScheduled = !0, nextTick(function() {
                processQueue(state);
            }));
        }
        function Deferred() {
            this.promise = new Promise();
        }
        function all(promises) {
            var deferred = new Deferred(), counter = 0, results = isArray(promises) ? [] : {};
            return forEach(promises, function(promise, key) {
                counter++, when(promise).then(function(value) {
                    results.hasOwnProperty(key) || (results[key] = value, --counter || deferred.resolve(results));
                }, function(reason) {
                    results.hasOwnProperty(key) || deferred.reject(reason);
                });
            }), 0 === counter && deferred.resolve(results), deferred.promise;
        }
        function race(promises) {
            var deferred = defer();
            return forEach(promises, function(promise) {
                when(promise).then(deferred.resolve, deferred.reject);
            }), deferred.promise;
        }
        var $qMinErr = minErr("$q", TypeError), defer = function() {
            var d = new Deferred();
            return d.resolve = simpleBind(d, d.resolve), d.reject = simpleBind(d, d.reject), 
            d.notify = simpleBind(d, d.notify), d;
        };
        extend(Promise.prototype, {
            then: function(onFulfilled, onRejected, progressBack) {
                if (isUndefined(onFulfilled) && isUndefined(onRejected) && isUndefined(progressBack)) return this;
                var result = new Deferred();
                return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([ result, onFulfilled, onRejected, progressBack ]), 
                this.$$state.status > 0 && scheduleProcessQueue(this.$$state), result.promise;
            },
            "catch": function(callback) {
                return this.then(null, callback);
            },
            "finally": function(callback, progressBack) {
                return this.then(function(value) {
                    return handleCallback(value, !0, callback);
                }, function(error) {
                    return handleCallback(error, !1, callback);
                }, progressBack);
            }
        }), extend(Deferred.prototype, {
            resolve: function(val) {
                this.promise.$$state.status || (val === this.promise ? this.$$reject($qMinErr("qcycle", "Expected promise to be resolved with value other than itself '{0}'", val)) : this.$$resolve(val));
            },
            $$resolve: function(val) {
                function resolvePromise(val) {
                    done || (done = !0, that.$$resolve(val));
                }
                function rejectPromise(val) {
                    done || (done = !0, that.$$reject(val));
                }
                var then, that = this, done = !1;
                try {
                    (isObject(val) || isFunction(val)) && (then = val && val.then), isFunction(then) ? (this.promise.$$state.status = -1, 
                    then.call(val, resolvePromise, rejectPromise, simpleBind(this, this.notify))) : (this.promise.$$state.value = val, 
                    this.promise.$$state.status = 1, scheduleProcessQueue(this.promise.$$state));
                } catch (e) {
                    rejectPromise(e), exceptionHandler(e);
                }
            },
            reject: function(reason) {
                this.promise.$$state.status || this.$$reject(reason);
            },
            $$reject: function(reason) {
                this.promise.$$state.value = reason, this.promise.$$state.status = 2, scheduleProcessQueue(this.promise.$$state);
            },
            notify: function(progress) {
                var callbacks = this.promise.$$state.pending;
                this.promise.$$state.status <= 0 && callbacks && callbacks.length && nextTick(function() {
                    for (var callback, result, i = 0, ii = callbacks.length; ii > i; i++) {
                        result = callbacks[i][0], callback = callbacks[i][3];
                        try {
                            result.notify(isFunction(callback) ? callback(progress) : progress);
                        } catch (e) {
                            exceptionHandler(e);
                        }
                    }
                });
            }
        });
        var reject = function(reason) {
            var result = new Deferred();
            return result.reject(reason), result.promise;
        }, makePromise = function(value, resolved) {
            var result = new Deferred();
            return resolved ? result.resolve(value) : result.reject(value), result.promise;
        }, handleCallback = function(value, isResolved, callback) {
            var callbackOutput = null;
            try {
                isFunction(callback) && (callbackOutput = callback());
            } catch (e) {
                return makePromise(e, !1);
            }
            return isPromiseLike(callbackOutput) ? callbackOutput.then(function() {
                return makePromise(value, isResolved);
            }, function(error) {
                return makePromise(error, !1);
            }) : makePromise(value, isResolved);
        }, when = function(value, callback, errback, progressBack) {
            var result = new Deferred();
            return result.resolve(value), result.promise.then(callback, errback, progressBack);
        }, resolve = when, $Q = function(resolver) {
            function resolveFn(value) {
                deferred.resolve(value);
            }
            function rejectFn(reason) {
                deferred.reject(reason);
            }
            if (!isFunction(resolver)) throw $qMinErr("norslvr", "Expected resolverFn, got '{0}'", resolver);
            var deferred = new Deferred();
            return resolver(resolveFn, rejectFn), deferred.promise;
        };
        return $Q.prototype = Promise.prototype, $Q.defer = defer, $Q.reject = reject, $Q.when = when, 
        $Q.resolve = resolve, $Q.all = all, $Q.race = race, $Q;
    }
    function $$RAFProvider() {
        this.$get = [ "$window", "$timeout", function($window, $timeout) {
            var requestAnimationFrame = $window.requestAnimationFrame || $window.webkitRequestAnimationFrame, cancelAnimationFrame = $window.cancelAnimationFrame || $window.webkitCancelAnimationFrame || $window.webkitCancelRequestAnimationFrame, rafSupported = !!requestAnimationFrame, raf = rafSupported ? function(fn) {
                var id = requestAnimationFrame(fn);
                return function() {
                    cancelAnimationFrame(id);
                };
            } : function(fn) {
                var timer = $timeout(fn, 16.66, !1);
                return function() {
                    $timeout.cancel(timer);
                };
            };
            return raf.supported = rafSupported, raf;
        } ];
    }
    function $RootScopeProvider() {
        function createChildScopeClass(parent) {
            function ChildScope() {
                this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, 
                this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$id = nextUid(), 
                this.$$ChildScope = null;
            }
            return ChildScope.prototype = parent, ChildScope;
        }
        var TTL = 10, $rootScopeMinErr = minErr("$rootScope"), lastDirtyWatch = null, applyAsyncId = null;
        this.digestTtl = function(value) {
            return arguments.length && (TTL = value), TTL;
        }, this.$get = [ "$exceptionHandler", "$parse", "$browser", function($exceptionHandler, $parse, $browser) {
            function destroyChildScope($event) {
                $event.currentScope.$$destroyed = !0;
            }
            function cleanUpScope($scope) {
                9 === msie && ($scope.$$childHead && cleanUpScope($scope.$$childHead), $scope.$$nextSibling && cleanUpScope($scope.$$nextSibling)), 
                $scope.$parent = $scope.$$nextSibling = $scope.$$prevSibling = $scope.$$childHead = $scope.$$childTail = $scope.$root = $scope.$$watchers = null;
            }
            function Scope() {
                this.$id = nextUid(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, 
                this.$root = this, this.$$destroyed = !1, this.$$listeners = {}, this.$$listenerCount = {}, 
                this.$$watchersCount = 0, this.$$isolateBindings = null;
            }
            function beginPhase(phase) {
                if ($rootScope.$$phase) throw $rootScopeMinErr("inprog", "{0} already in progress", $rootScope.$$phase);
                $rootScope.$$phase = phase;
            }
            function clearPhase() {
                $rootScope.$$phase = null;
            }
            function incrementWatchersCount(current, count) {
                do current.$$watchersCount += count; while (current = current.$parent);
            }
            function decrementListenerCount(current, count, name) {
                do current.$$listenerCount[name] -= count, 0 === current.$$listenerCount[name] && delete current.$$listenerCount[name]; while (current = current.$parent);
            }
            function initWatchVal() {}
            function flushApplyAsync() {
                for (;applyAsyncQueue.length; ) try {
                    applyAsyncQueue.shift()();
                } catch (e) {
                    $exceptionHandler(e);
                }
                applyAsyncId = null;
            }
            function scheduleApplyAsync() {
                null === applyAsyncId && (applyAsyncId = $browser.defer(function() {
                    $rootScope.$apply(flushApplyAsync);
                }));
            }
            Scope.prototype = {
                constructor: Scope,
                $new: function(isolate, parent) {
                    var child;
                    return parent = parent || this, isolate ? (child = new Scope(), child.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = createChildScopeClass(this)), 
                    child = new this.$$ChildScope()), child.$parent = parent, child.$$prevSibling = parent.$$childTail, 
                    parent.$$childHead ? (parent.$$childTail.$$nextSibling = child, parent.$$childTail = child) : parent.$$childHead = parent.$$childTail = child, 
                    (isolate || parent != this) && child.$on("$destroy", destroyChildScope), child;
                },
                $watch: function(watchExp, listener, objectEquality, prettyPrintExpression) {
                    var get = $parse(watchExp);
                    if (get.$$watchDelegate) return get.$$watchDelegate(this, listener, objectEquality, get, watchExp);
                    var scope = this, array = scope.$$watchers, watcher = {
                        fn: listener,
                        last: initWatchVal,
                        get: get,
                        exp: prettyPrintExpression || watchExp,
                        eq: !!objectEquality
                    };
                    return lastDirtyWatch = null, isFunction(listener) || (watcher.fn = noop), array || (array = scope.$$watchers = []), 
                    array.unshift(watcher), incrementWatchersCount(this, 1), function() {
                        arrayRemove(array, watcher) >= 0 && incrementWatchersCount(scope, -1), lastDirtyWatch = null;
                    };
                },
                $watchGroup: function(watchExpressions, listener) {
                    function watchGroupAction() {
                        changeReactionScheduled = !1, firstRun ? (firstRun = !1, listener(newValues, newValues, self)) : listener(newValues, oldValues, self);
                    }
                    var oldValues = new Array(watchExpressions.length), newValues = new Array(watchExpressions.length), deregisterFns = [], self = this, changeReactionScheduled = !1, firstRun = !0;
                    if (!watchExpressions.length) {
                        var shouldCall = !0;
                        return self.$evalAsync(function() {
                            shouldCall && listener(newValues, newValues, self);
                        }), function() {
                            shouldCall = !1;
                        };
                    }
                    return 1 === watchExpressions.length ? this.$watch(watchExpressions[0], function(value, oldValue, scope) {
                        newValues[0] = value, oldValues[0] = oldValue, listener(newValues, value === oldValue ? newValues : oldValues, scope);
                    }) : (forEach(watchExpressions, function(expr, i) {
                        var unwatchFn = self.$watch(expr, function(value, oldValue) {
                            newValues[i] = value, oldValues[i] = oldValue, changeReactionScheduled || (changeReactionScheduled = !0, 
                            self.$evalAsync(watchGroupAction));
                        });
                        deregisterFns.push(unwatchFn);
                    }), function() {
                        for (;deregisterFns.length; ) deregisterFns.shift()();
                    });
                },
                $watchCollection: function(obj, listener) {
                    function $watchCollectionInterceptor(_value) {
                        newValue = _value;
                        var newLength, key, bothNaN, newItem, oldItem;
                        if (!isUndefined(newValue)) {
                            if (isObject(newValue)) if (isArrayLike(newValue)) {
                                oldValue !== internalArray && (oldValue = internalArray, oldLength = oldValue.length = 0, 
                                changeDetected++), newLength = newValue.length, oldLength !== newLength && (changeDetected++, 
                                oldValue.length = oldLength = newLength);
                                for (var i = 0; newLength > i; i++) oldItem = oldValue[i], newItem = newValue[i], 
                                bothNaN = oldItem !== oldItem && newItem !== newItem, bothNaN || oldItem === newItem || (changeDetected++, 
                                oldValue[i] = newItem);
                            } else {
                                oldValue !== internalObject && (oldValue = internalObject = {}, oldLength = 0, changeDetected++), 
                                newLength = 0;
                                for (key in newValue) hasOwnProperty.call(newValue, key) && (newLength++, newItem = newValue[key], 
                                oldItem = oldValue[key], key in oldValue ? (bothNaN = oldItem !== oldItem && newItem !== newItem, 
                                bothNaN || oldItem === newItem || (changeDetected++, oldValue[key] = newItem)) : (oldLength++, 
                                oldValue[key] = newItem, changeDetected++));
                                if (oldLength > newLength) {
                                    changeDetected++;
                                    for (key in oldValue) hasOwnProperty.call(newValue, key) || (oldLength--, delete oldValue[key]);
                                }
                            } else oldValue !== newValue && (oldValue = newValue, changeDetected++);
                            return changeDetected;
                        }
                    }
                    function $watchCollectionAction() {
                        if (initRun ? (initRun = !1, listener(newValue, newValue, self)) : listener(newValue, veryOldValue, self), 
                        trackVeryOldValue) if (isObject(newValue)) if (isArrayLike(newValue)) {
                            veryOldValue = new Array(newValue.length);
                            for (var i = 0; i < newValue.length; i++) veryOldValue[i] = newValue[i];
                        } else {
                            veryOldValue = {};
                            for (var key in newValue) hasOwnProperty.call(newValue, key) && (veryOldValue[key] = newValue[key]);
                        } else veryOldValue = newValue;
                    }
                    $watchCollectionInterceptor.$stateful = !0;
                    var newValue, oldValue, veryOldValue, self = this, trackVeryOldValue = listener.length > 1, changeDetected = 0, changeDetector = $parse(obj, $watchCollectionInterceptor), internalArray = [], internalObject = {}, initRun = !0, oldLength = 0;
                    return this.$watch(changeDetector, $watchCollectionAction);
                },
                $digest: function() {
                    var watch, value, last, fn, get, watchers, length, dirty, next, current, logIdx, asyncTask, ttl = TTL, target = this, watchLog = [];
                    beginPhase("$digest"), $browser.$$checkUrlChange(), this === $rootScope && null !== applyAsyncId && ($browser.defer.cancel(applyAsyncId), 
                    flushApplyAsync()), lastDirtyWatch = null;
                    do {
                        dirty = !1, current = target;
                        for (var asyncQueuePosition = 0; asyncQueuePosition < asyncQueue.length; asyncQueuePosition++) {
                            try {
                                asyncTask = asyncQueue[asyncQueuePosition], asyncTask.scope.$eval(asyncTask.expression, asyncTask.locals);
                            } catch (e) {
                                $exceptionHandler(e);
                            }
                            lastDirtyWatch = null;
                        }
                        asyncQueue.length = 0;
                        traverseScopesLoop: do {
                            if (watchers = current.$$watchers) for (length = watchers.length; length--; ) try {
                                if (watch = watchers[length]) if (get = watch.get, (value = get(current)) === (last = watch.last) || (watch.eq ? equals(value, last) : "number" == typeof value && "number" == typeof last && isNaN(value) && isNaN(last))) {
                                    if (watch === lastDirtyWatch) {
                                        dirty = !1;
                                        break traverseScopesLoop;
                                    }
                                } else dirty = !0, lastDirtyWatch = watch, watch.last = watch.eq ? copy(value, null) : value, 
                                fn = watch.fn, fn(value, last === initWatchVal ? value : last, current), 5 > ttl && (logIdx = 4 - ttl, 
                                watchLog[logIdx] || (watchLog[logIdx] = []), watchLog[logIdx].push({
                                    msg: isFunction(watch.exp) ? "fn: " + (watch.exp.name || watch.exp.toString()) : watch.exp,
                                    newVal: value,
                                    oldVal: last
                                }));
                            } catch (e) {
                                $exceptionHandler(e);
                            }
                            if (!(next = current.$$watchersCount && current.$$childHead || current !== target && current.$$nextSibling)) for (;current !== target && !(next = current.$$nextSibling); ) current = current.$parent;
                        } while (current = next);
                        if ((dirty || asyncQueue.length) && !ttl--) throw clearPhase(), $rootScopeMinErr("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", TTL, watchLog);
                    } while (dirty || asyncQueue.length);
                    for (clearPhase(); postDigestQueuePosition < postDigestQueue.length; ) try {
                        postDigestQueue[postDigestQueuePosition++]();
                    } catch (e) {
                        $exceptionHandler(e);
                    }
                    postDigestQueue.length = postDigestQueuePosition = 0;
                },
                $destroy: function() {
                    if (!this.$$destroyed) {
                        var parent = this.$parent;
                        this.$broadcast("$destroy"), this.$$destroyed = !0, this === $rootScope && $browser.$$applicationDestroyed(), 
                        incrementWatchersCount(this, -this.$$watchersCount);
                        for (var eventName in this.$$listenerCount) decrementListenerCount(this, this.$$listenerCount[eventName], eventName);
                        parent && parent.$$childHead == this && (parent.$$childHead = this.$$nextSibling), 
                        parent && parent.$$childTail == this && (parent.$$childTail = this.$$prevSibling), 
                        this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), 
                        this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = noop, 
                        this.$on = this.$watch = this.$watchGroup = function() {
                            return noop;
                        }, this.$$listeners = {}, this.$$nextSibling = null, cleanUpScope(this);
                    }
                },
                $eval: function(expr, locals) {
                    return $parse(expr)(this, locals);
                },
                $evalAsync: function(expr, locals) {
                    $rootScope.$$phase || asyncQueue.length || $browser.defer(function() {
                        asyncQueue.length && $rootScope.$digest();
                    }), asyncQueue.push({
                        scope: this,
                        expression: $parse(expr),
                        locals: locals
                    });
                },
                $$postDigest: function(fn) {
                    postDigestQueue.push(fn);
                },
                $apply: function(expr) {
                    try {
                        beginPhase("$apply");
                        try {
                            return this.$eval(expr);
                        } finally {
                            clearPhase();
                        }
                    } catch (e) {
                        $exceptionHandler(e);
                    } finally {
                        try {
                            $rootScope.$digest();
                        } catch (e) {
                            throw $exceptionHandler(e), e;
                        }
                    }
                },
                $applyAsync: function(expr) {
                    function $applyAsyncExpression() {
                        scope.$eval(expr);
                    }
                    var scope = this;
                    expr && applyAsyncQueue.push($applyAsyncExpression), expr = $parse(expr), scheduleApplyAsync();
                },
                $on: function(name, listener) {
                    var namedListeners = this.$$listeners[name];
                    namedListeners || (this.$$listeners[name] = namedListeners = []), namedListeners.push(listener);
                    var current = this;
                    do current.$$listenerCount[name] || (current.$$listenerCount[name] = 0), current.$$listenerCount[name]++; while (current = current.$parent);
                    var self = this;
                    return function() {
                        var indexOfListener = namedListeners.indexOf(listener);
                        -1 !== indexOfListener && (namedListeners[indexOfListener] = null, decrementListenerCount(self, 1, name));
                    };
                },
                $emit: function(name) {
                    var namedListeners, i, length, empty = [], scope = this, stopPropagation = !1, event = {
                        name: name,
                        targetScope: scope,
                        stopPropagation: function() {
                            stopPropagation = !0;
                        },
                        preventDefault: function() {
                            event.defaultPrevented = !0;
                        },
                        defaultPrevented: !1
                    }, listenerArgs = concat([ event ], arguments, 1);
                    do {
                        for (namedListeners = scope.$$listeners[name] || empty, event.currentScope = scope, 
                        i = 0, length = namedListeners.length; length > i; i++) if (namedListeners[i]) try {
                            namedListeners[i].apply(null, listenerArgs);
                        } catch (e) {
                            $exceptionHandler(e);
                        } else namedListeners.splice(i, 1), i--, length--;
                        if (stopPropagation) return event.currentScope = null, event;
                        scope = scope.$parent;
                    } while (scope);
                    return event.currentScope = null, event;
                },
                $broadcast: function(name) {
                    var target = this, current = target, next = target, event = {
                        name: name,
                        targetScope: target,
                        preventDefault: function() {
                            event.defaultPrevented = !0;
                        },
                        defaultPrevented: !1
                    };
                    if (!target.$$listenerCount[name]) return event;
                    for (var listeners, i, length, listenerArgs = concat([ event ], arguments, 1); current = next; ) {
                        for (event.currentScope = current, listeners = current.$$listeners[name] || [], 
                        i = 0, length = listeners.length; length > i; i++) if (listeners[i]) try {
                            listeners[i].apply(null, listenerArgs);
                        } catch (e) {
                            $exceptionHandler(e);
                        } else listeners.splice(i, 1), i--, length--;
                        if (!(next = current.$$listenerCount[name] && current.$$childHead || current !== target && current.$$nextSibling)) for (;current !== target && !(next = current.$$nextSibling); ) current = current.$parent;
                    }
                    return event.currentScope = null, event;
                }
            };
            var $rootScope = new Scope(), asyncQueue = $rootScope.$$asyncQueue = [], postDigestQueue = $rootScope.$$postDigestQueue = [], applyAsyncQueue = $rootScope.$$applyAsyncQueue = [], postDigestQueuePosition = 0;
            return $rootScope;
        } ];
    }
    function $$SanitizeUriProvider() {
        var aHrefSanitizationWhitelist = /^\s*(https?|ftp|mailto|tel|file):/, imgSrcSanitizationWhitelist = /^\s*((https?|ftp|file|blob):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function(regexp) {
            return isDefined(regexp) ? (aHrefSanitizationWhitelist = regexp, this) : aHrefSanitizationWhitelist;
        }, this.imgSrcSanitizationWhitelist = function(regexp) {
            return isDefined(regexp) ? (imgSrcSanitizationWhitelist = regexp, this) : imgSrcSanitizationWhitelist;
        }, this.$get = function() {
            return function(uri, isImage) {
                var normalizedVal, regex = isImage ? imgSrcSanitizationWhitelist : aHrefSanitizationWhitelist;
                return normalizedVal = urlResolve(uri).href, "" === normalizedVal || normalizedVal.match(regex) ? uri : "unsafe:" + normalizedVal;
            };
        };
    }
    function adjustMatcher(matcher) {
        if ("self" === matcher) return matcher;
        if (isString(matcher)) {
            if (matcher.indexOf("***") > -1) throw $sceMinErr("iwcard", "Illegal sequence *** in string matcher.  String: {0}", matcher);
            return matcher = escapeForRegexp(matcher).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), 
            new RegExp("^" + matcher + "$");
        }
        if (isRegExp(matcher)) return new RegExp("^" + matcher.source + "$");
        throw $sceMinErr("imatcher", 'Matchers may only be "self", string patterns or RegExp objects');
    }
    function adjustMatchers(matchers) {
        var adjustedMatchers = [];
        return isDefined(matchers) && forEach(matchers, function(matcher) {
            adjustedMatchers.push(adjustMatcher(matcher));
        }), adjustedMatchers;
    }
    function $SceDelegateProvider() {
        this.SCE_CONTEXTS = SCE_CONTEXTS;
        var resourceUrlWhitelist = [ "self" ], resourceUrlBlacklist = [];
        this.resourceUrlWhitelist = function(value) {
            return arguments.length && (resourceUrlWhitelist = adjustMatchers(value)), resourceUrlWhitelist;
        }, this.resourceUrlBlacklist = function(value) {
            return arguments.length && (resourceUrlBlacklist = adjustMatchers(value)), resourceUrlBlacklist;
        }, this.$get = [ "$injector", function($injector) {
            function matchUrl(matcher, parsedUrl) {
                return "self" === matcher ? urlIsSameOrigin(parsedUrl) : !!matcher.exec(parsedUrl.href);
            }
            function isResourceUrlAllowedByPolicy(url) {
                var i, n, parsedUrl = urlResolve(url.toString()), allowed = !1;
                for (i = 0, n = resourceUrlWhitelist.length; n > i; i++) if (matchUrl(resourceUrlWhitelist[i], parsedUrl)) {
                    allowed = !0;
                    break;
                }
                if (allowed) for (i = 0, n = resourceUrlBlacklist.length; n > i; i++) if (matchUrl(resourceUrlBlacklist[i], parsedUrl)) {
                    allowed = !1;
                    break;
                }
                return allowed;
            }
            function generateHolderType(Base) {
                var holderType = function(trustedValue) {
                    this.$$unwrapTrustedValue = function() {
                        return trustedValue;
                    };
                };
                return Base && (holderType.prototype = new Base()), holderType.prototype.valueOf = function() {
                    return this.$$unwrapTrustedValue();
                }, holderType.prototype.toString = function() {
                    return this.$$unwrapTrustedValue().toString();
                }, holderType;
            }
            function trustAs(type, trustedValue) {
                var Constructor = byType.hasOwnProperty(type) ? byType[type] : null;
                if (!Constructor) throw $sceMinErr("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", type, trustedValue);
                if (null === trustedValue || isUndefined(trustedValue) || "" === trustedValue) return trustedValue;
                if ("string" != typeof trustedValue) throw $sceMinErr("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", type);
                return new Constructor(trustedValue);
            }
            function valueOf(maybeTrusted) {
                return maybeTrusted instanceof trustedValueHolderBase ? maybeTrusted.$$unwrapTrustedValue() : maybeTrusted;
            }
            function getTrusted(type, maybeTrusted) {
                if (null === maybeTrusted || isUndefined(maybeTrusted) || "" === maybeTrusted) return maybeTrusted;
                var constructor = byType.hasOwnProperty(type) ? byType[type] : null;
                if (constructor && maybeTrusted instanceof constructor) return maybeTrusted.$$unwrapTrustedValue();
                if (type === SCE_CONTEXTS.RESOURCE_URL) {
                    if (isResourceUrlAllowedByPolicy(maybeTrusted)) return maybeTrusted;
                    throw $sceMinErr("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", maybeTrusted.toString());
                }
                if (type === SCE_CONTEXTS.HTML) return htmlSanitizer(maybeTrusted);
                throw $sceMinErr("unsafe", "Attempting to use an unsafe value in a safe context.");
            }
            var htmlSanitizer = function() {
                throw $sceMinErr("unsafe", "Attempting to use an unsafe value in a safe context.");
            };
            $injector.has("$sanitize") && (htmlSanitizer = $injector.get("$sanitize"));
            var trustedValueHolderBase = generateHolderType(), byType = {};
            return byType[SCE_CONTEXTS.HTML] = generateHolderType(trustedValueHolderBase), byType[SCE_CONTEXTS.CSS] = generateHolderType(trustedValueHolderBase), 
            byType[SCE_CONTEXTS.URL] = generateHolderType(trustedValueHolderBase), byType[SCE_CONTEXTS.JS] = generateHolderType(trustedValueHolderBase), 
            byType[SCE_CONTEXTS.RESOURCE_URL] = generateHolderType(byType[SCE_CONTEXTS.URL]), 
            {
                trustAs: trustAs,
                getTrusted: getTrusted,
                valueOf: valueOf
            };
        } ];
    }
    function $SceProvider() {
        var enabled = !0;
        this.enabled = function(value) {
            return arguments.length && (enabled = !!value), enabled;
        }, this.$get = [ "$parse", "$sceDelegate", function($parse, $sceDelegate) {
            if (enabled && 8 > msie) throw $sceMinErr("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
            var sce = shallowCopy(SCE_CONTEXTS);
            sce.isEnabled = function() {
                return enabled;
            }, sce.trustAs = $sceDelegate.trustAs, sce.getTrusted = $sceDelegate.getTrusted, 
            sce.valueOf = $sceDelegate.valueOf, enabled || (sce.trustAs = sce.getTrusted = function(type, value) {
                return value;
            }, sce.valueOf = identity), sce.parseAs = function(type, expr) {
                var parsed = $parse(expr);
                return parsed.literal && parsed.constant ? parsed : $parse(expr, function(value) {
                    return sce.getTrusted(type, value);
                });
            };
            var parse = sce.parseAs, getTrusted = sce.getTrusted, trustAs = sce.trustAs;
            return forEach(SCE_CONTEXTS, function(enumValue, name) {
                var lName = lowercase(name);
                sce[camelCase("parse_as_" + lName)] = function(expr) {
                    return parse(enumValue, expr);
                }, sce[camelCase("get_trusted_" + lName)] = function(value) {
                    return getTrusted(enumValue, value);
                }, sce[camelCase("trust_as_" + lName)] = function(value) {
                    return trustAs(enumValue, value);
                };
            }), sce;
        } ];
    }
    function $SnifferProvider() {
        this.$get = [ "$window", "$document", function($window, $document) {
            var vendorPrefix, match, eventSupport = {}, isChromePackagedApp = $window.chrome && $window.chrome.app && $window.chrome.app.runtime, hasHistoryPushState = !isChromePackagedApp && $window.history && $window.history.pushState, android = toInt((/android (\d+)/.exec(lowercase(($window.navigator || {}).userAgent)) || [])[1]), boxee = /Boxee/i.test(($window.navigator || {}).userAgent), document = $document[0] || {}, vendorRegex = /^(Moz|webkit|ms)(?=[A-Z])/, bodyStyle = document.body && document.body.style, transitions = !1, animations = !1;
            if (bodyStyle) {
                for (var prop in bodyStyle) if (match = vendorRegex.exec(prop)) {
                    vendorPrefix = match[0], vendorPrefix = vendorPrefix[0].toUpperCase() + vendorPrefix.substr(1);
                    break;
                }
                vendorPrefix || (vendorPrefix = "WebkitOpacity" in bodyStyle && "webkit"), transitions = !!("transition" in bodyStyle || vendorPrefix + "Transition" in bodyStyle), 
                animations = !!("animation" in bodyStyle || vendorPrefix + "Animation" in bodyStyle), 
                !android || transitions && animations || (transitions = isString(bodyStyle.webkitTransition), 
                animations = isString(bodyStyle.webkitAnimation));
            }
            return {
                history: !(!hasHistoryPushState || 4 > android || boxee),
                hasEvent: function(event) {
                    if ("input" === event && 11 >= msie) return !1;
                    if (isUndefined(eventSupport[event])) {
                        var divElm = document.createElement("div");
                        eventSupport[event] = "on" + event in divElm;
                    }
                    return eventSupport[event];
                },
                csp: csp(),
                vendorPrefix: vendorPrefix,
                transitions: transitions,
                animations: animations,
                android: android
            };
        } ];
    }
    function $TemplateRequestProvider() {
        var httpOptions;
        this.httpOptions = function(val) {
            return val ? (httpOptions = val, this) : httpOptions;
        }, this.$get = [ "$templateCache", "$http", "$q", "$sce", function($templateCache, $http, $q, $sce) {
            function handleRequestFn(tpl, ignoreRequestError) {
                function handleError(resp) {
                    if (!ignoreRequestError) throw $templateRequestMinErr("tpload", "Failed to load template: {0} (HTTP status: {1} {2})", tpl, resp.status, resp.statusText);
                    return $q.reject(resp);
                }
                handleRequestFn.totalPendingRequests++, (!isString(tpl) || isUndefined($templateCache.get(tpl))) && (tpl = $sce.getTrustedResourceUrl(tpl));
                var transformResponse = $http.defaults && $http.defaults.transformResponse;
                return isArray(transformResponse) ? transformResponse = transformResponse.filter(function(transformer) {
                    return transformer !== defaultHttpResponseTransform;
                }) : transformResponse === defaultHttpResponseTransform && (transformResponse = null), 
                $http.get(tpl, extend({
                    cache: $templateCache,
                    transformResponse: transformResponse
                }, httpOptions))["finally"](function() {
                    handleRequestFn.totalPendingRequests--;
                }).then(function(response) {
                    return $templateCache.put(tpl, response.data), response.data;
                }, handleError);
            }
            return handleRequestFn.totalPendingRequests = 0, handleRequestFn;
        } ];
    }
    function $$TestabilityProvider() {
        this.$get = [ "$rootScope", "$browser", "$location", function($rootScope, $browser, $location) {
            var testability = {};
            return testability.findBindings = function(element, expression, opt_exactMatch) {
                var bindings = element.getElementsByClassName("ng-binding"), matches = [];
                return forEach(bindings, function(binding) {
                    var dataBinding = angular.element(binding).data("$binding");
                    dataBinding && forEach(dataBinding, function(bindingName) {
                        if (opt_exactMatch) {
                            var matcher = new RegExp("(^|\\s)" + escapeForRegexp(expression) + "(\\s|\\||$)");
                            matcher.test(bindingName) && matches.push(binding);
                        } else -1 != bindingName.indexOf(expression) && matches.push(binding);
                    });
                }), matches;
            }, testability.findModels = function(element, expression, opt_exactMatch) {
                for (var prefixes = [ "ng-", "data-ng-", "ng\\:" ], p = 0; p < prefixes.length; ++p) {
                    var attributeEquals = opt_exactMatch ? "=" : "*=", selector = "[" + prefixes[p] + "model" + attributeEquals + '"' + expression + '"]', elements = element.querySelectorAll(selector);
                    if (elements.length) return elements;
                }
            }, testability.getLocation = function() {
                return $location.url();
            }, testability.setLocation = function(url) {
                url !== $location.url() && ($location.url(url), $rootScope.$digest());
            }, testability.whenStable = function(callback) {
                $browser.notifyWhenNoOutstandingRequests(callback);
            }, testability;
        } ];
    }
    function $TimeoutProvider() {
        this.$get = [ "$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function($rootScope, $browser, $q, $$q, $exceptionHandler) {
            function timeout(fn, delay, invokeApply) {
                isFunction(fn) || (invokeApply = delay, delay = fn, fn = noop);
                var timeoutId, args = sliceArgs(arguments, 3), skipApply = isDefined(invokeApply) && !invokeApply, deferred = (skipApply ? $$q : $q).defer(), promise = deferred.promise;
                return timeoutId = $browser.defer(function() {
                    try {
                        deferred.resolve(fn.apply(null, args));
                    } catch (e) {
                        deferred.reject(e), $exceptionHandler(e);
                    } finally {
                        delete deferreds[promise.$$timeoutId];
                    }
                    skipApply || $rootScope.$apply();
                }, delay), promise.$$timeoutId = timeoutId, deferreds[timeoutId] = deferred, promise;
            }
            var deferreds = {};
            return timeout.cancel = function(promise) {
                return promise && promise.$$timeoutId in deferreds ? (deferreds[promise.$$timeoutId].reject("canceled"), 
                delete deferreds[promise.$$timeoutId], $browser.defer.cancel(promise.$$timeoutId)) : !1;
            }, timeout;
        } ];
    }
    function urlResolve(url) {
        var href = url;
        return msie && (urlParsingNode.setAttribute("href", href), href = urlParsingNode.href), 
        urlParsingNode.setAttribute("href", href), {
            href: urlParsingNode.href,
            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
            host: urlParsingNode.host,
            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname: "/" === urlParsingNode.pathname.charAt(0) ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
        };
    }
    function urlIsSameOrigin(requestUrl) {
        var parsed = isString(requestUrl) ? urlResolve(requestUrl) : requestUrl;
        return parsed.protocol === originUrl.protocol && parsed.host === originUrl.host;
    }
    function $WindowProvider() {
        this.$get = valueFn(window);
    }
    function $$CookieReader($document) {
        function safeDecodeURIComponent(str) {
            try {
                return decodeURIComponent(str);
            } catch (e) {
                return str;
            }
        }
        var rawDocument = $document[0] || {}, lastCookies = {}, lastCookieString = "";
        return function() {
            var cookieArray, cookie, i, index, name, currentCookieString = rawDocument.cookie || "";
            if (currentCookieString !== lastCookieString) for (lastCookieString = currentCookieString, 
            cookieArray = lastCookieString.split("; "), lastCookies = {}, i = 0; i < cookieArray.length; i++) cookie = cookieArray[i], 
            index = cookie.indexOf("="), index > 0 && (name = safeDecodeURIComponent(cookie.substring(0, index)), 
            isUndefined(lastCookies[name]) && (lastCookies[name] = safeDecodeURIComponent(cookie.substring(index + 1))));
            return lastCookies;
        };
    }
    function $$CookieReaderProvider() {
        this.$get = $$CookieReader;
    }
    function $FilterProvider($provide) {
        function register(name, factory) {
            if (isObject(name)) {
                var filters = {};
                return forEach(name, function(filter, key) {
                    filters[key] = register(key, filter);
                }), filters;
            }
            return $provide.factory(name + suffix, factory);
        }
        var suffix = "Filter";
        this.register = register, this.$get = [ "$injector", function($injector) {
            return function(name) {
                return $injector.get(name + suffix);
            };
        } ], register("currency", currencyFilter), register("date", dateFilter), register("filter", filterFilter), 
        register("json", jsonFilter), register("limitTo", limitToFilter), register("lowercase", lowercaseFilter), 
        register("number", numberFilter), register("orderBy", orderByFilter), register("uppercase", uppercaseFilter);
    }
    function filterFilter() {
        return function(array, expression, comparator, anyPropertyKey) {
            if (!isArrayLike(array)) {
                if (null == array) return array;
                throw minErr("filter")("notarray", "Expected array but received: {0}", array);
            }
            anyPropertyKey = anyPropertyKey || "$";
            var predicateFn, matchAgainstAnyProp, expressionType = getTypeForFilter(expression);
            switch (expressionType) {
              case "function":
                predicateFn = expression;
                break;

              case "boolean":
              case "null":
              case "number":
              case "string":
                matchAgainstAnyProp = !0;

              case "object":
                predicateFn = createPredicateFn(expression, comparator, anyPropertyKey, matchAgainstAnyProp);
                break;

              default:
                return array;
            }
            return Array.prototype.filter.call(array, predicateFn);
        };
    }
    function createPredicateFn(expression, comparator, anyPropertyKey, matchAgainstAnyProp) {
        var predicateFn, shouldMatchPrimitives = isObject(expression) && anyPropertyKey in expression;
        return comparator === !0 ? comparator = equals : isFunction(comparator) || (comparator = function(actual, expected) {
            return isUndefined(actual) ? !1 : null === actual || null === expected ? actual === expected : isObject(expected) || isObject(actual) && !hasCustomToString(actual) ? !1 : (actual = lowercase("" + actual), 
            expected = lowercase("" + expected), -1 !== actual.indexOf(expected));
        }), predicateFn = function(item) {
            return shouldMatchPrimitives && !isObject(item) ? deepCompare(item, expression[anyPropertyKey], comparator, anyPropertyKey, !1) : deepCompare(item, expression, comparator, anyPropertyKey, matchAgainstAnyProp);
        };
    }
    function deepCompare(actual, expected, comparator, anyPropertyKey, matchAgainstAnyProp, dontMatchWholeObject) {
        var actualType = getTypeForFilter(actual), expectedType = getTypeForFilter(expected);
        if ("string" === expectedType && "!" === expected.charAt(0)) return !deepCompare(actual, expected.substring(1), comparator, anyPropertyKey, matchAgainstAnyProp);
        if (isArray(actual)) return actual.some(function(item) {
            return deepCompare(item, expected, comparator, anyPropertyKey, matchAgainstAnyProp);
        });
        switch (actualType) {
          case "object":
            var key;
            if (matchAgainstAnyProp) {
                for (key in actual) if ("$" !== key.charAt(0) && deepCompare(actual[key], expected, comparator, anyPropertyKey, !0)) return !0;
                return dontMatchWholeObject ? !1 : deepCompare(actual, expected, comparator, anyPropertyKey, !1);
            }
            if ("object" === expectedType) {
                for (key in expected) {
                    var expectedVal = expected[key];
                    if (!isFunction(expectedVal) && !isUndefined(expectedVal)) {
                        var matchAnyProperty = key === anyPropertyKey, actualVal = matchAnyProperty ? actual : actual[key];
                        if (!deepCompare(actualVal, expectedVal, comparator, anyPropertyKey, matchAnyProperty, matchAnyProperty)) return !1;
                    }
                }
                return !0;
            }
            return comparator(actual, expected);

          case "function":
            return !1;

          default:
            return comparator(actual, expected);
        }
    }
    function getTypeForFilter(val) {
        return null === val ? "null" : typeof val;
    }
    function currencyFilter($locale) {
        var formats = $locale.NUMBER_FORMATS;
        return function(amount, currencySymbol, fractionSize) {
            return isUndefined(currencySymbol) && (currencySymbol = formats.CURRENCY_SYM), isUndefined(fractionSize) && (fractionSize = formats.PATTERNS[1].maxFrac), 
            null == amount ? amount : formatNumber(amount, formats.PATTERNS[1], formats.GROUP_SEP, formats.DECIMAL_SEP, fractionSize).replace(/\u00A4/g, currencySymbol);
        };
    }
    function numberFilter($locale) {
        var formats = $locale.NUMBER_FORMATS;
        return function(number, fractionSize) {
            return null == number ? number : formatNumber(number, formats.PATTERNS[0], formats.GROUP_SEP, formats.DECIMAL_SEP, fractionSize);
        };
    }
    function parse(numStr) {
        var digits, numberOfIntegerDigits, i, j, zeros, exponent = 0;
        for ((numberOfIntegerDigits = numStr.indexOf(DECIMAL_SEP)) > -1 && (numStr = numStr.replace(DECIMAL_SEP, "")), 
        (i = numStr.search(/e/i)) > 0 ? (0 > numberOfIntegerDigits && (numberOfIntegerDigits = i), 
        numberOfIntegerDigits += +numStr.slice(i + 1), numStr = numStr.substring(0, i)) : 0 > numberOfIntegerDigits && (numberOfIntegerDigits = numStr.length), 
        i = 0; numStr.charAt(i) == ZERO_CHAR; i++) ;
        if (i == (zeros = numStr.length)) digits = [ 0 ], numberOfIntegerDigits = 1; else {
            for (zeros--; numStr.charAt(zeros) == ZERO_CHAR; ) zeros--;
            for (numberOfIntegerDigits -= i, digits = [], j = 0; zeros >= i; i++, j++) digits[j] = +numStr.charAt(i);
        }
        return numberOfIntegerDigits > MAX_DIGITS && (digits = digits.splice(0, MAX_DIGITS - 1), 
        exponent = numberOfIntegerDigits - 1, numberOfIntegerDigits = 1), {
            d: digits,
            e: exponent,
            i: numberOfIntegerDigits
        };
    }
    function roundNumber(parsedNumber, fractionSize, minFrac, maxFrac) {
        var digits = parsedNumber.d, fractionLen = digits.length - parsedNumber.i;
        fractionSize = isUndefined(fractionSize) ? Math.min(Math.max(minFrac, fractionLen), maxFrac) : +fractionSize;
        var roundAt = fractionSize + parsedNumber.i, digit = digits[roundAt];
        if (roundAt > 0) {
            digits.splice(Math.max(parsedNumber.i, roundAt));
            for (var j = roundAt; j < digits.length; j++) digits[j] = 0;
        } else {
            fractionLen = Math.max(0, fractionLen), parsedNumber.i = 1, digits.length = Math.max(1, roundAt = fractionSize + 1), 
            digits[0] = 0;
            for (var i = 1; roundAt > i; i++) digits[i] = 0;
        }
        if (digit >= 5) if (0 > roundAt - 1) {
            for (var k = 0; k > roundAt; k--) digits.unshift(0), parsedNumber.i++;
            digits.unshift(1), parsedNumber.i++;
        } else digits[roundAt - 1]++;
        for (;fractionLen < Math.max(0, fractionSize); fractionLen++) digits.push(0);
        var carry = digits.reduceRight(function(carry, d, i, digits) {
            return d += carry, digits[i] = d % 10, Math.floor(d / 10);
        }, 0);
        carry && (digits.unshift(carry), parsedNumber.i++);
    }
    function formatNumber(number, pattern, groupSep, decimalSep, fractionSize) {
        if (!isString(number) && !isNumber(number) || isNaN(number)) return "";
        var parsedNumber, isInfinity = !isFinite(number), isZero = !1, numStr = Math.abs(number) + "", formattedText = "";
        if (isInfinity) formattedText = "∞"; else {
            parsedNumber = parse(numStr), roundNumber(parsedNumber, fractionSize, pattern.minFrac, pattern.maxFrac);
            var digits = parsedNumber.d, integerLen = parsedNumber.i, exponent = parsedNumber.e, decimals = [];
            for (isZero = digits.reduce(function(isZero, d) {
                return isZero && !d;
            }, !0); 0 > integerLen; ) digits.unshift(0), integerLen++;
            integerLen > 0 ? decimals = digits.splice(integerLen, digits.length) : (decimals = digits, 
            digits = [ 0 ]);
            var groups = [];
            for (digits.length >= pattern.lgSize && groups.unshift(digits.splice(-pattern.lgSize, digits.length).join("")); digits.length > pattern.gSize; ) groups.unshift(digits.splice(-pattern.gSize, digits.length).join(""));
            digits.length && groups.unshift(digits.join("")), formattedText = groups.join(groupSep), 
            decimals.length && (formattedText += decimalSep + decimals.join("")), exponent && (formattedText += "e+" + exponent);
        }
        return 0 > number && !isZero ? pattern.negPre + formattedText + pattern.negSuf : pattern.posPre + formattedText + pattern.posSuf;
    }
    function padNumber(num, digits, trim, negWrap) {
        var neg = "";
        for ((0 > num || negWrap && 0 >= num) && (negWrap ? num = -num + 1 : (num = -num, 
        neg = "-")), num = "" + num; num.length < digits; ) num = ZERO_CHAR + num;
        return trim && (num = num.substr(num.length - digits)), neg + num;
    }
    function dateGetter(name, size, offset, trim, negWrap) {
        return offset = offset || 0, function(date) {
            var value = date["get" + name]();
            return (offset > 0 || value > -offset) && (value += offset), 0 === value && -12 == offset && (value = 12), 
            padNumber(value, size, trim, negWrap);
        };
    }
    function dateStrGetter(name, shortForm, standAlone) {
        return function(date, formats) {
            var value = date["get" + name](), propPrefix = (standAlone ? "STANDALONE" : "") + (shortForm ? "SHORT" : ""), get = uppercase(propPrefix + name);
            return formats[get][value];
        };
    }
    function timeZoneGetter(date, formats, offset) {
        var zone = -1 * offset, paddedZone = zone >= 0 ? "+" : "";
        return paddedZone += padNumber(Math[zone > 0 ? "floor" : "ceil"](zone / 60), 2) + padNumber(Math.abs(zone % 60), 2);
    }
    function getFirstThursdayOfYear(year) {
        var dayOfWeekOnFirst = new Date(year, 0, 1).getDay();
        return new Date(year, 0, (4 >= dayOfWeekOnFirst ? 5 : 12) - dayOfWeekOnFirst);
    }
    function getThursdayThisWeek(datetime) {
        return new Date(datetime.getFullYear(), datetime.getMonth(), datetime.getDate() + (4 - datetime.getDay()));
    }
    function weekGetter(size) {
        return function(date) {
            var firstThurs = getFirstThursdayOfYear(date.getFullYear()), thisThurs = getThursdayThisWeek(date), diff = +thisThurs - +firstThurs, result = 1 + Math.round(diff / 6048e5);
            return padNumber(result, size);
        };
    }
    function ampmGetter(date, formats) {
        return date.getHours() < 12 ? formats.AMPMS[0] : formats.AMPMS[1];
    }
    function eraGetter(date, formats) {
        return date.getFullYear() <= 0 ? formats.ERAS[0] : formats.ERAS[1];
    }
    function longEraGetter(date, formats) {
        return date.getFullYear() <= 0 ? formats.ERANAMES[0] : formats.ERANAMES[1];
    }
    function dateFilter($locale) {
        function jsonStringToDate(string) {
            var match;
            if (match = string.match(R_ISO8601_STR)) {
                var date = new Date(0), tzHour = 0, tzMin = 0, dateSetter = match[8] ? date.setUTCFullYear : date.setFullYear, timeSetter = match[8] ? date.setUTCHours : date.setHours;
                match[9] && (tzHour = toInt(match[9] + match[10]), tzMin = toInt(match[9] + match[11])), 
                dateSetter.call(date, toInt(match[1]), toInt(match[2]) - 1, toInt(match[3]));
                var h = toInt(match[4] || 0) - tzHour, m = toInt(match[5] || 0) - tzMin, s = toInt(match[6] || 0), ms = Math.round(1e3 * parseFloat("0." + (match[7] || 0)));
                return timeSetter.call(date, h, m, s, ms), date;
            }
            return string;
        }
        var R_ISO8601_STR = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function(date, format, timezone) {
            var fn, match, text = "", parts = [];
            if (format = format || "mediumDate", format = $locale.DATETIME_FORMATS[format] || format, 
            isString(date) && (date = NUMBER_STRING.test(date) ? toInt(date) : jsonStringToDate(date)), 
            isNumber(date) && (date = new Date(date)), !isDate(date) || !isFinite(date.getTime())) return date;
            for (;format; ) match = DATE_FORMATS_SPLIT.exec(format), match ? (parts = concat(parts, match, 1), 
            format = parts.pop()) : (parts.push(format), format = null);
            var dateTimezoneOffset = date.getTimezoneOffset();
            return timezone && (dateTimezoneOffset = timezoneToOffset(timezone, dateTimezoneOffset), 
            date = convertTimezoneToLocal(date, timezone, !0)), forEach(parts, function(value) {
                fn = DATE_FORMATS[value], text += fn ? fn(date, $locale.DATETIME_FORMATS, dateTimezoneOffset) : "''" === value ? "'" : value.replace(/(^'|'$)/g, "").replace(/''/g, "'");
            }), text;
        };
    }
    function jsonFilter() {
        return function(object, spacing) {
            return isUndefined(spacing) && (spacing = 2), toJson(object, spacing);
        };
    }
    function limitToFilter() {
        return function(input, limit, begin) {
            return limit = 1/0 === Math.abs(Number(limit)) ? Number(limit) : toInt(limit), isNaN(limit) ? input : (isNumber(input) && (input = input.toString()), 
            isArrayLike(input) ? (begin = !begin || isNaN(begin) ? 0 : toInt(begin), begin = 0 > begin ? Math.max(0, input.length + begin) : begin, 
            limit >= 0 ? sliceFn(input, begin, begin + limit) : 0 === begin ? sliceFn(input, limit, input.length) : sliceFn(input, Math.max(0, begin + limit), begin)) : input);
        };
    }
    function sliceFn(input, begin, end) {
        return isString(input) ? input.slice(begin, end) : slice.call(input, begin, end);
    }
    function orderByFilter($parse) {
        function processPredicates(sortPredicates) {
            return sortPredicates.map(function(predicate) {
                var descending = 1, get = identity;
                if (isFunction(predicate)) get = predicate; else if (isString(predicate) && (("+" == predicate.charAt(0) || "-" == predicate.charAt(0)) && (descending = "-" == predicate.charAt(0) ? -1 : 1, 
                predicate = predicate.substring(1)), "" !== predicate && (get = $parse(predicate), 
                get.constant))) {
                    var key = get();
                    get = function(value) {
                        return value[key];
                    };
                }
                return {
                    get: get,
                    descending: descending
                };
            });
        }
        function isPrimitive(value) {
            switch (typeof value) {
              case "number":
              case "boolean":
              case "string":
                return !0;

              default:
                return !1;
            }
        }
        function objectValue(value) {
            return isFunction(value.valueOf) && (value = value.valueOf(), isPrimitive(value)) ? value : hasCustomToString(value) && (value = value.toString(), 
            isPrimitive(value)) ? value : value;
        }
        function getPredicateValue(value, index) {
            var type = typeof value;
            return null === value ? (type = "string", value = "null") : "object" === type && (value = objectValue(value)), 
            {
                value: value,
                type: type,
                index: index
            };
        }
        function defaultCompare(v1, v2) {
            var result = 0, type1 = v1.type, type2 = v2.type;
            if (type1 === type2) {
                var value1 = v1.value, value2 = v2.value;
                "string" === type1 ? (value1 = value1.toLowerCase(), value2 = value2.toLowerCase()) : "object" === type1 && (isObject(value1) && (value1 = v1.index), 
                isObject(value2) && (value2 = v2.index)), value1 !== value2 && (result = value2 > value1 ? -1 : 1);
            } else result = type2 > type1 ? -1 : 1;
            return result;
        }
        return function(array, sortPredicate, reverseOrder, compareFn) {
            function getComparisonObject(value, index) {
                return {
                    value: value,
                    tieBreaker: {
                        value: index,
                        type: "number",
                        index: index
                    },
                    predicateValues: predicates.map(function(predicate) {
                        return getPredicateValue(predicate.get(value), index);
                    })
                };
            }
            function doComparison(v1, v2) {
                for (var i = 0, ii = predicates.length; ii > i; i++) {
                    var result = compare(v1.predicateValues[i], v2.predicateValues[i]);
                    if (result) return result * predicates[i].descending * descending;
                }
                return compare(v1.tieBreaker, v2.tieBreaker) * descending;
            }
            if (null == array) return array;
            if (!isArrayLike(array)) throw minErr("orderBy")("notarray", "Expected array but received: {0}", array);
            isArray(sortPredicate) || (sortPredicate = [ sortPredicate ]), 0 === sortPredicate.length && (sortPredicate = [ "+" ]);
            var predicates = processPredicates(sortPredicate), descending = reverseOrder ? -1 : 1, compare = isFunction(compareFn) ? compareFn : defaultCompare, compareValues = Array.prototype.map.call(array, getComparisonObject);
            return compareValues.sort(doComparison), array = compareValues.map(function(item) {
                return item.value;
            });
        };
    }
    function ngDirective(directive) {
        return isFunction(directive) && (directive = {
            link: directive
        }), directive.restrict = directive.restrict || "AC", valueFn(directive);
    }
    function nullFormRenameControl(control, name) {
        control.$name = name;
    }
    function FormController(element, attrs, $scope, $animate, $interpolate) {
        var form = this, controls = [];
        form.$error = {}, form.$$success = {}, form.$pending = void 0, form.$name = $interpolate(attrs.name || attrs.ngForm || "")($scope), 
        form.$dirty = !1, form.$pristine = !0, form.$valid = !0, form.$invalid = !1, form.$submitted = !1, 
        form.$$parentForm = nullFormCtrl, form.$rollbackViewValue = function() {
            forEach(controls, function(control) {
                control.$rollbackViewValue();
            });
        }, form.$commitViewValue = function() {
            forEach(controls, function(control) {
                control.$commitViewValue();
            });
        }, form.$addControl = function(control) {
            assertNotHasOwnProperty(control.$name, "input"), controls.push(control), control.$name && (form[control.$name] = control), 
            control.$$parentForm = form;
        }, form.$$renameControl = function(control, newName) {
            var oldName = control.$name;
            form[oldName] === control && delete form[oldName], form[newName] = control, control.$name = newName;
        }, form.$removeControl = function(control) {
            control.$name && form[control.$name] === control && delete form[control.$name], 
            forEach(form.$pending, function(value, name) {
                form.$setValidity(name, null, control);
            }), forEach(form.$error, function(value, name) {
                form.$setValidity(name, null, control);
            }), forEach(form.$$success, function(value, name) {
                form.$setValidity(name, null, control);
            }), arrayRemove(controls, control), control.$$parentForm = nullFormCtrl;
        }, addSetValidityMethod({
            ctrl: this,
            $element: element,
            set: function(object, property, controller) {
                var list = object[property];
                if (list) {
                    var index = list.indexOf(controller);
                    -1 === index && list.push(controller);
                } else object[property] = [ controller ];
            },
            unset: function(object, property, controller) {
                var list = object[property];
                list && (arrayRemove(list, controller), 0 === list.length && delete object[property]);
            },
            $animate: $animate
        }), form.$setDirty = function() {
            $animate.removeClass(element, PRISTINE_CLASS), $animate.addClass(element, DIRTY_CLASS), 
            form.$dirty = !0, form.$pristine = !1, form.$$parentForm.$setDirty();
        }, form.$setPristine = function() {
            $animate.setClass(element, PRISTINE_CLASS, DIRTY_CLASS + " " + SUBMITTED_CLASS), 
            form.$dirty = !1, form.$pristine = !0, form.$submitted = !1, forEach(controls, function(control) {
                control.$setPristine();
            });
        }, form.$setUntouched = function() {
            forEach(controls, function(control) {
                control.$setUntouched();
            });
        }, form.$setSubmitted = function() {
            $animate.addClass(element, SUBMITTED_CLASS), form.$submitted = !0, form.$$parentForm.$setSubmitted();
        };
    }
    function stringBasedInputType(ctrl) {
        ctrl.$formatters.push(function(value) {
            return ctrl.$isEmpty(value) ? value : value.toString();
        });
    }
    function textInputType(scope, element, attr, ctrl, $sniffer, $browser) {
        baseInputType(scope, element, attr, ctrl, $sniffer, $browser), stringBasedInputType(ctrl);
    }
    function baseInputType(scope, element, attr, ctrl, $sniffer, $browser) {
        var type = lowercase(element[0].type);
        if (!$sniffer.android) {
            var composing = !1;
            element.on("compositionstart", function() {
                composing = !0;
            }), element.on("compositionend", function() {
                composing = !1, listener();
            });
        }
        var timeout, listener = function(ev) {
            if (timeout && ($browser.defer.cancel(timeout), timeout = null), !composing) {
                var value = element.val(), event = ev && ev.type;
                "password" === type || attr.ngTrim && "false" === attr.ngTrim || (value = trim(value)), 
                (ctrl.$viewValue !== value || "" === value && ctrl.$$hasNativeValidators) && ctrl.$setViewValue(value, event);
            }
        };
        if ($sniffer.hasEvent("input")) element.on("input", listener); else {
            var deferListener = function(ev, input, origValue) {
                timeout || (timeout = $browser.defer(function() {
                    timeout = null, input && input.value === origValue || listener(ev);
                }));
            };
            element.on("keydown", function(event) {
                var key = event.keyCode;
                91 === key || key > 15 && 19 > key || key >= 37 && 40 >= key || deferListener(event, this, this.value);
            }), $sniffer.hasEvent("paste") && element.on("paste cut", deferListener);
        }
        element.on("change", listener), PARTIAL_VALIDATION_TYPES[type] && ctrl.$$hasNativeValidators && type === attr.type && element.on(PARTIAL_VALIDATION_EVENTS, function(ev) {
            if (!timeout) {
                var validity = this[VALIDITY_STATE_PROPERTY], origBadInput = validity.badInput, origTypeMismatch = validity.typeMismatch;
                timeout = $browser.defer(function() {
                    timeout = null, (validity.badInput !== origBadInput || validity.typeMismatch !== origTypeMismatch) && listener(ev);
                });
            }
        }), ctrl.$render = function() {
            var value = ctrl.$isEmpty(ctrl.$viewValue) ? "" : ctrl.$viewValue;
            element.val() !== value && element.val(value);
        };
    }
    function weekParser(isoWeek, existingDate) {
        if (isDate(isoWeek)) return isoWeek;
        if (isString(isoWeek)) {
            WEEK_REGEXP.lastIndex = 0;
            var parts = WEEK_REGEXP.exec(isoWeek);
            if (parts) {
                var year = +parts[1], week = +parts[2], hours = 0, minutes = 0, seconds = 0, milliseconds = 0, firstThurs = getFirstThursdayOfYear(year), addDays = 7 * (week - 1);
                return existingDate && (hours = existingDate.getHours(), minutes = existingDate.getMinutes(), 
                seconds = existingDate.getSeconds(), milliseconds = existingDate.getMilliseconds()), 
                new Date(year, 0, firstThurs.getDate() + addDays, hours, minutes, seconds, milliseconds);
            }
        }
        return 0/0;
    }
    function createDateParser(regexp, mapping) {
        return function(iso, date) {
            var parts, map;
            if (isDate(iso)) return iso;
            if (isString(iso)) {
                if ('"' == iso.charAt(0) && '"' == iso.charAt(iso.length - 1) && (iso = iso.substring(1, iso.length - 1)), 
                ISO_DATE_REGEXP.test(iso)) return new Date(iso);
                if (regexp.lastIndex = 0, parts = regexp.exec(iso)) return parts.shift(), map = date ? {
                    yyyy: date.getFullYear(),
                    MM: date.getMonth() + 1,
                    dd: date.getDate(),
                    HH: date.getHours(),
                    mm: date.getMinutes(),
                    ss: date.getSeconds(),
                    sss: date.getMilliseconds() / 1e3
                } : {
                    yyyy: 1970,
                    MM: 1,
                    dd: 1,
                    HH: 0,
                    mm: 0,
                    ss: 0,
                    sss: 0
                }, forEach(parts, function(part, index) {
                    index < mapping.length && (map[mapping[index]] = +part);
                }), new Date(map.yyyy, map.MM - 1, map.dd, map.HH, map.mm, map.ss || 0, 1e3 * map.sss || 0);
            }
            return 0/0;
        };
    }
    function createDateInputType(type, regexp, parseDate, format) {
        return function(scope, element, attr, ctrl, $sniffer, $browser, $filter) {
            function isValidDate(value) {
                return value && !(value.getTime && value.getTime() !== value.getTime());
            }
            function parseObservedDateValue(val) {
                return isDefined(val) && !isDate(val) ? parseDate(val) || void 0 : val;
            }
            badInputChecker(scope, element, attr, ctrl), baseInputType(scope, element, attr, ctrl, $sniffer, $browser);
            var previousDate, timezone = ctrl && ctrl.$options && ctrl.$options.timezone;
            if (ctrl.$$parserName = type, ctrl.$parsers.push(function(value) {
                if (ctrl.$isEmpty(value)) return null;
                if (regexp.test(value)) {
                    var parsedDate = parseDate(value, previousDate);
                    return timezone && (parsedDate = convertTimezoneToLocal(parsedDate, timezone)), 
                    parsedDate;
                }
                return void 0;
            }), ctrl.$formatters.push(function(value) {
                if (value && !isDate(value)) throw ngModelMinErr("datefmt", "Expected `{0}` to be a date", value);
                return isValidDate(value) ? (previousDate = value, previousDate && timezone && (previousDate = convertTimezoneToLocal(previousDate, timezone, !0)), 
                $filter("date")(value, format, timezone)) : (previousDate = null, "");
            }), isDefined(attr.min) || attr.ngMin) {
                var minVal;
                ctrl.$validators.min = function(value) {
                    return !isValidDate(value) || isUndefined(minVal) || parseDate(value) >= minVal;
                }, attr.$observe("min", function(val) {
                    minVal = parseObservedDateValue(val), ctrl.$validate();
                });
            }
            if (isDefined(attr.max) || attr.ngMax) {
                var maxVal;
                ctrl.$validators.max = function(value) {
                    return !isValidDate(value) || isUndefined(maxVal) || parseDate(value) <= maxVal;
                }, attr.$observe("max", function(val) {
                    maxVal = parseObservedDateValue(val), ctrl.$validate();
                });
            }
        };
    }
    function badInputChecker(scope, element, attr, ctrl) {
        var node = element[0], nativeValidation = ctrl.$$hasNativeValidators = isObject(node.validity);
        nativeValidation && ctrl.$parsers.push(function(value) {
            var validity = element.prop(VALIDITY_STATE_PROPERTY) || {};
            return validity.badInput || validity.typeMismatch ? void 0 : value;
        });
    }
    function numberInputType(scope, element, attr, ctrl, $sniffer, $browser) {
        if (badInputChecker(scope, element, attr, ctrl), baseInputType(scope, element, attr, ctrl, $sniffer, $browser), 
        ctrl.$$parserName = "number", ctrl.$parsers.push(function(value) {
            return ctrl.$isEmpty(value) ? null : NUMBER_REGEXP.test(value) ? parseFloat(value) : void 0;
        }), ctrl.$formatters.push(function(value) {
            if (!ctrl.$isEmpty(value)) {
                if (!isNumber(value)) throw ngModelMinErr("numfmt", "Expected `{0}` to be a number", value);
                value = value.toString();
            }
            return value;
        }), isDefined(attr.min) || attr.ngMin) {
            var minVal;
            ctrl.$validators.min = function(value) {
                return ctrl.$isEmpty(value) || isUndefined(minVal) || value >= minVal;
            }, attr.$observe("min", function(val) {
                isDefined(val) && !isNumber(val) && (val = parseFloat(val)), minVal = isNumber(val) && !isNaN(val) ? val : void 0, 
                ctrl.$validate();
            });
        }
        if (isDefined(attr.max) || attr.ngMax) {
            var maxVal;
            ctrl.$validators.max = function(value) {
                return ctrl.$isEmpty(value) || isUndefined(maxVal) || maxVal >= value;
            }, attr.$observe("max", function(val) {
                isDefined(val) && !isNumber(val) && (val = parseFloat(val)), maxVal = isNumber(val) && !isNaN(val) ? val : void 0, 
                ctrl.$validate();
            });
        }
    }
    function urlInputType(scope, element, attr, ctrl, $sniffer, $browser) {
        baseInputType(scope, element, attr, ctrl, $sniffer, $browser), stringBasedInputType(ctrl), 
        ctrl.$$parserName = "url", ctrl.$validators.url = function(modelValue, viewValue) {
            var value = modelValue || viewValue;
            return ctrl.$isEmpty(value) || URL_REGEXP.test(value);
        };
    }
    function emailInputType(scope, element, attr, ctrl, $sniffer, $browser) {
        baseInputType(scope, element, attr, ctrl, $sniffer, $browser), stringBasedInputType(ctrl), 
        ctrl.$$parserName = "email", ctrl.$validators.email = function(modelValue, viewValue) {
            var value = modelValue || viewValue;
            return ctrl.$isEmpty(value) || EMAIL_REGEXP.test(value);
        };
    }
    function radioInputType(scope, element, attr, ctrl) {
        isUndefined(attr.name) && element.attr("name", nextUid());
        var listener = function(ev) {
            element[0].checked && ctrl.$setViewValue(attr.value, ev && ev.type);
        };
        element.on("click", listener), ctrl.$render = function() {
            var value = attr.value;
            element[0].checked = value == ctrl.$viewValue;
        }, attr.$observe("value", ctrl.$render);
    }
    function parseConstantExpr($parse, context, name, expression, fallback) {
        var parseFn;
        if (isDefined(expression)) {
            if (parseFn = $parse(expression), !parseFn.constant) throw ngModelMinErr("constexpr", "Expected constant expression for `{0}`, but saw `{1}`.", name, expression);
            return parseFn(context);
        }
        return fallback;
    }
    function checkboxInputType(scope, element, attr, ctrl, $sniffer, $browser, $filter, $parse) {
        var trueValue = parseConstantExpr($parse, scope, "ngTrueValue", attr.ngTrueValue, !0), falseValue = parseConstantExpr($parse, scope, "ngFalseValue", attr.ngFalseValue, !1), listener = function(ev) {
            ctrl.$setViewValue(element[0].checked, ev && ev.type);
        };
        element.on("click", listener), ctrl.$render = function() {
            element[0].checked = ctrl.$viewValue;
        }, ctrl.$isEmpty = function(value) {
            return value === !1;
        }, ctrl.$formatters.push(function(value) {
            return equals(value, trueValue);
        }), ctrl.$parsers.push(function(value) {
            return value ? trueValue : falseValue;
        });
    }
    function classDirective(name, selector) {
        return name = "ngClass" + name, [ "$animate", function($animate) {
            function arrayDifference(tokens1, tokens2) {
                var values = [];
                outer: for (var i = 0; i < tokens1.length; i++) {
                    for (var token = tokens1[i], j = 0; j < tokens2.length; j++) if (token == tokens2[j]) continue outer;
                    values.push(token);
                }
                return values;
            }
            function arrayClasses(classVal) {
                var classes = [];
                return isArray(classVal) ? (forEach(classVal, function(v) {
                    classes = classes.concat(arrayClasses(v));
                }), classes) : isString(classVal) ? classVal.split(" ") : isObject(classVal) ? (forEach(classVal, function(v, k) {
                    v && (classes = classes.concat(k.split(" ")));
                }), classes) : classVal;
            }
            return {
                restrict: "AC",
                link: function(scope, element, attr) {
                    function addClasses(classes) {
                        var newClasses = digestClassCounts(classes, 1);
                        attr.$addClass(newClasses);
                    }
                    function removeClasses(classes) {
                        var newClasses = digestClassCounts(classes, -1);
                        attr.$removeClass(newClasses);
                    }
                    function digestClassCounts(classes, count) {
                        var classCounts = element.data("$classCounts") || createMap(), classesToUpdate = [];
                        return forEach(classes, function(className) {
                            (count > 0 || classCounts[className]) && (classCounts[className] = (classCounts[className] || 0) + count, 
                            classCounts[className] === +(count > 0) && classesToUpdate.push(className));
                        }), element.data("$classCounts", classCounts), classesToUpdate.join(" ");
                    }
                    function updateClasses(oldClasses, newClasses) {
                        var toAdd = arrayDifference(newClasses, oldClasses), toRemove = arrayDifference(oldClasses, newClasses);
                        toAdd = digestClassCounts(toAdd, 1), toRemove = digestClassCounts(toRemove, -1), 
                        toAdd && toAdd.length && $animate.addClass(element, toAdd), toRemove && toRemove.length && $animate.removeClass(element, toRemove);
                    }
                    function ngClassWatchAction(newVal) {
                        if (selector === !0 || (1 & scope.$index) === selector) {
                            var newClasses = arrayClasses(newVal || []);
                            if (oldVal) {
                                if (!equals(newVal, oldVal)) {
                                    var oldClasses = arrayClasses(oldVal);
                                    updateClasses(oldClasses, newClasses);
                                }
                            } else addClasses(newClasses);
                        }
                        oldVal = isArray(newVal) ? newVal.map(function(v) {
                            return shallowCopy(v);
                        }) : shallowCopy(newVal);
                    }
                    var oldVal;
                    scope.$watch(attr[name], ngClassWatchAction, !0), attr.$observe("class", function() {
                        ngClassWatchAction(scope.$eval(attr[name]));
                    }), "ngClass" !== name && scope.$watch("$index", function($index, old$index) {
                        var mod = 1 & $index;
                        if (mod !== (1 & old$index)) {
                            var classes = arrayClasses(scope.$eval(attr[name]));
                            mod === selector ? addClasses(classes) : removeClasses(classes);
                        }
                    });
                }
            };
        } ];
    }
    function addSetValidityMethod(context) {
        function setValidity(validationErrorKey, state, controller) {
            isUndefined(state) ? createAndSet("$pending", validationErrorKey, controller) : unsetAndCleanup("$pending", validationErrorKey, controller), 
            isBoolean(state) ? state ? (unset(ctrl.$error, validationErrorKey, controller), 
            set(ctrl.$$success, validationErrorKey, controller)) : (set(ctrl.$error, validationErrorKey, controller), 
            unset(ctrl.$$success, validationErrorKey, controller)) : (unset(ctrl.$error, validationErrorKey, controller), 
            unset(ctrl.$$success, validationErrorKey, controller)), ctrl.$pending ? (cachedToggleClass(PENDING_CLASS, !0), 
            ctrl.$valid = ctrl.$invalid = void 0, toggleValidationCss("", null)) : (cachedToggleClass(PENDING_CLASS, !1), 
            ctrl.$valid = isObjectEmpty(ctrl.$error), ctrl.$invalid = !ctrl.$valid, toggleValidationCss("", ctrl.$valid));
            var combinedState;
            combinedState = ctrl.$pending && ctrl.$pending[validationErrorKey] ? void 0 : ctrl.$error[validationErrorKey] ? !1 : ctrl.$$success[validationErrorKey] ? !0 : null, 
            toggleValidationCss(validationErrorKey, combinedState), ctrl.$$parentForm.$setValidity(validationErrorKey, combinedState, ctrl);
        }
        function createAndSet(name, value, controller) {
            ctrl[name] || (ctrl[name] = {}), set(ctrl[name], value, controller);
        }
        function unsetAndCleanup(name, value, controller) {
            ctrl[name] && unset(ctrl[name], value, controller), isObjectEmpty(ctrl[name]) && (ctrl[name] = void 0);
        }
        function cachedToggleClass(className, switchValue) {
            switchValue && !classCache[className] ? ($animate.addClass($element, className), 
            classCache[className] = !0) : !switchValue && classCache[className] && ($animate.removeClass($element, className), 
            classCache[className] = !1);
        }
        function toggleValidationCss(validationErrorKey, isValid) {
            validationErrorKey = validationErrorKey ? "-" + snake_case(validationErrorKey, "-") : "", 
            cachedToggleClass(VALID_CLASS + validationErrorKey, isValid === !0), cachedToggleClass(INVALID_CLASS + validationErrorKey, isValid === !1);
        }
        var ctrl = context.ctrl, $element = context.$element, classCache = {}, set = context.set, unset = context.unset, $animate = context.$animate;
        classCache[INVALID_CLASS] = !(classCache[VALID_CLASS] = $element.hasClass(VALID_CLASS)), 
        ctrl.$setValidity = setValidity;
    }
    function isObjectEmpty(obj) {
        if (obj) for (var prop in obj) if (obj.hasOwnProperty(prop)) return !1;
        return !0;
    }
    function chromeHack(optionElement) {
        optionElement[0].hasAttribute("selected") && (optionElement[0].selected = !0);
    }
    var REGEX_STRING_REGEXP = /^\/(.+)\/([a-z]*)$/, VALIDITY_STATE_PROPERTY = "validity", hasOwnProperty = Object.prototype.hasOwnProperty, lowercase = function(string) {
        return isString(string) ? string.toLowerCase() : string;
    }, uppercase = function(string) {
        return isString(string) ? string.toUpperCase() : string;
    }, manualLowercase = function(s) {
        return isString(s) ? s.replace(/[A-Z]/g, function(ch) {
            return String.fromCharCode(32 | ch.charCodeAt(0));
        }) : s;
    }, manualUppercase = function(s) {
        return isString(s) ? s.replace(/[a-z]/g, function(ch) {
            return String.fromCharCode(-33 & ch.charCodeAt(0));
        }) : s;
    };
    "i" !== "I".toLowerCase() && (lowercase = manualLowercase, uppercase = manualUppercase);
    var msie, jqLite, jQuery, angularModule, slice = [].slice, splice = [].splice, push = [].push, toString = Object.prototype.toString, getPrototypeOf = Object.getPrototypeOf, ngMinErr = minErr("ng"), angular = window.angular || (window.angular = {}), uid = 0;
    msie = window.document.documentMode, noop.$inject = [], identity.$inject = [];
    var isArray = Array.isArray, TYPED_ARRAY_REGEXP = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/, trim = function(value) {
        return isString(value) ? value.trim() : value;
    }, escapeForRegexp = function(s) {
        return s.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
    }, csp = function() {
        function noUnsafeEval() {
            try {
                return new Function(""), !1;
            } catch (e) {
                return !0;
            }
        }
        if (!isDefined(csp.rules)) {
            var ngCspElement = window.document.querySelector("[ng-csp]") || window.document.querySelector("[data-ng-csp]");
            if (ngCspElement) {
                var ngCspAttribute = ngCspElement.getAttribute("ng-csp") || ngCspElement.getAttribute("data-ng-csp");
                csp.rules = {
                    noUnsafeEval: !ngCspAttribute || -1 !== ngCspAttribute.indexOf("no-unsafe-eval"),
                    noInlineStyle: !ngCspAttribute || -1 !== ngCspAttribute.indexOf("no-inline-style")
                };
            } else csp.rules = {
                noUnsafeEval: noUnsafeEval(),
                noInlineStyle: !1
            };
        }
        return csp.rules;
    }, jq = function() {
        if (isDefined(jq.name_)) return jq.name_;
        var el, i, prefix, name, ii = ngAttrPrefixes.length;
        for (i = 0; ii > i; ++i) if (prefix = ngAttrPrefixes[i], el = window.document.querySelector("[" + prefix.replace(":", "\\:") + "jq]")) {
            name = el.getAttribute(prefix + "jq");
            break;
        }
        return jq.name_ = name;
    }, ALL_COLONS = /:/g, ngAttrPrefixes = [ "ng-", "data-ng-", "ng:", "x-ng-" ], SNAKE_CASE_REGEXP = /[A-Z]/g, bindJQueryFired = !1, NODE_TYPE_ELEMENT = 1, NODE_TYPE_ATTRIBUTE = 2, NODE_TYPE_TEXT = 3, NODE_TYPE_COMMENT = 8, NODE_TYPE_DOCUMENT = 9, NODE_TYPE_DOCUMENT_FRAGMENT = 11, version = {
        full: "1.5.8",
        major: 1,
        minor: 5,
        dot: 8,
        codeName: "arbitrary-fallbacks"
    };
    JQLite.expando = "ng339";
    var jqCache = JQLite.cache = {}, jqId = 1, addEventListenerFn = function(element, type, fn) {
        element.addEventListener(type, fn, !1);
    }, removeEventListenerFn = function(element, type, fn) {
        element.removeEventListener(type, fn, !1);
    };
    JQLite._data = function(node) {
        return this.cache[node[this.expando]] || {};
    };
    var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g, MOZ_HACK_REGEXP = /^moz([A-Z])/, MOUSE_EVENT_MAP = {
        mouseleave: "mouseout",
        mouseenter: "mouseover"
    }, jqLiteMinErr = minErr("jqLite"), SINGLE_TAG_REGEXP = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, HTML_REGEXP = /<|&#?\w+;/, TAG_NAME_REGEXP = /<([\w:-]+)/, XHTML_TAG_REGEXP = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, wrapMap = {
        option: [ 1, '<select multiple="multiple">', "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    wrapMap.optgroup = wrapMap.option, wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead, 
    wrapMap.th = wrapMap.td;
    var jqLiteContains = window.Node.prototype.contains || function(arg) {
        return !!(16 & this.compareDocumentPosition(arg));
    }, JQLitePrototype = JQLite.prototype = {
        ready: function(fn) {
            function trigger() {
                fired || (fired = !0, fn());
            }
            var fired = !1;
            "complete" === window.document.readyState ? window.setTimeout(trigger) : (this.on("DOMContentLoaded", trigger), 
            JQLite(window).on("load", trigger));
        },
        toString: function() {
            var value = [];
            return forEach(this, function(e) {
                value.push("" + e);
            }), "[" + value.join(", ") + "]";
        },
        eq: function(index) {
            return jqLite(index >= 0 ? this[index] : this[this.length + index]);
        },
        length: 0,
        push: push,
        sort: [].sort,
        splice: [].splice
    }, BOOLEAN_ATTR = {};
    forEach("multiple,selected,checked,disabled,readOnly,required,open".split(","), function(value) {
        BOOLEAN_ATTR[lowercase(value)] = value;
    });
    var BOOLEAN_ELEMENTS = {};
    forEach("input,select,option,textarea,button,form,details".split(","), function(value) {
        BOOLEAN_ELEMENTS[value] = !0;
    });
    var ALIASED_ATTR = {
        ngMinlength: "minlength",
        ngMaxlength: "maxlength",
        ngMin: "min",
        ngMax: "max",
        ngPattern: "pattern"
    };
    forEach({
        data: jqLiteData,
        removeData: jqLiteRemoveData,
        hasData: jqLiteHasData,
        cleanData: jqLiteCleanData
    }, function(fn, name) {
        JQLite[name] = fn;
    }), forEach({
        data: jqLiteData,
        inheritedData: jqLiteInheritedData,
        scope: function(element) {
            return jqLite.data(element, "$scope") || jqLiteInheritedData(element.parentNode || element, [ "$isolateScope", "$scope" ]);
        },
        isolateScope: function(element) {
            return jqLite.data(element, "$isolateScope") || jqLite.data(element, "$isolateScopeNoTemplate");
        },
        controller: jqLiteController,
        injector: function(element) {
            return jqLiteInheritedData(element, "$injector");
        },
        removeAttr: function(element, name) {
            element.removeAttribute(name);
        },
        hasClass: jqLiteHasClass,
        css: function(element, name, value) {
            return name = camelCase(name), isDefined(value) ? void (element.style[name] = value) : element.style[name];
        },
        attr: function(element, name, value) {
            var nodeType = element.nodeType;
            if (nodeType !== NODE_TYPE_TEXT && nodeType !== NODE_TYPE_ATTRIBUTE && nodeType !== NODE_TYPE_COMMENT) {
                var lowercasedName = lowercase(name);
                if (BOOLEAN_ATTR[lowercasedName]) {
                    if (!isDefined(value)) return element[name] || (element.attributes.getNamedItem(name) || noop).specified ? lowercasedName : void 0;
                    value ? (element[name] = !0, element.setAttribute(name, lowercasedName)) : (element[name] = !1, 
                    element.removeAttribute(lowercasedName));
                } else if (isDefined(value)) element.setAttribute(name, value); else if (element.getAttribute) {
                    var ret = element.getAttribute(name, 2);
                    return null === ret ? void 0 : ret;
                }
            }
        },
        prop: function(element, name, value) {
            return isDefined(value) ? void (element[name] = value) : element[name];
        },
        text: function() {
            function getText(element, value) {
                if (isUndefined(value)) {
                    var nodeType = element.nodeType;
                    return nodeType === NODE_TYPE_ELEMENT || nodeType === NODE_TYPE_TEXT ? element.textContent : "";
                }
                element.textContent = value;
            }
            return getText.$dv = "", getText;
        }(),
        val: function(element, value) {
            if (isUndefined(value)) {
                if (element.multiple && "select" === nodeName_(element)) {
                    var result = [];
                    return forEach(element.options, function(option) {
                        option.selected && result.push(option.value || option.text);
                    }), 0 === result.length ? null : result;
                }
                return element.value;
            }
            element.value = value;
        },
        html: function(element, value) {
            return isUndefined(value) ? element.innerHTML : (jqLiteDealoc(element, !0), void (element.innerHTML = value));
        },
        empty: jqLiteEmpty
    }, function(fn, name) {
        JQLite.prototype[name] = function(arg1, arg2) {
            var i, key, nodeCount = this.length;
            if (fn !== jqLiteEmpty && isUndefined(2 == fn.length && fn !== jqLiteHasClass && fn !== jqLiteController ? arg1 : arg2)) {
                if (isObject(arg1)) {
                    for (i = 0; nodeCount > i; i++) if (fn === jqLiteData) fn(this[i], arg1); else for (key in arg1) fn(this[i], key, arg1[key]);
                    return this;
                }
                for (var value = fn.$dv, jj = isUndefined(value) ? Math.min(nodeCount, 1) : nodeCount, j = 0; jj > j; j++) {
                    var nodeValue = fn(this[j], arg1, arg2);
                    value = value ? value + nodeValue : nodeValue;
                }
                return value;
            }
            for (i = 0; nodeCount > i; i++) fn(this[i], arg1, arg2);
            return this;
        };
    }), forEach({
        removeData: jqLiteRemoveData,
        on: function(element, type, fn, unsupported) {
            if (isDefined(unsupported)) throw jqLiteMinErr("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
            if (jqLiteAcceptsData(element)) {
                var expandoStore = jqLiteExpandoStore(element, !0), events = expandoStore.events, handle = expandoStore.handle;
                handle || (handle = expandoStore.handle = createEventHandler(element, events));
                for (var types = type.indexOf(" ") >= 0 ? type.split(" ") : [ type ], i = types.length, addHandler = function(type, specialHandlerWrapper, noEventListener) {
                    var eventFns = events[type];
                    eventFns || (eventFns = events[type] = [], eventFns.specialHandlerWrapper = specialHandlerWrapper, 
                    "$destroy" === type || noEventListener || addEventListenerFn(element, type, handle)), 
                    eventFns.push(fn);
                }; i--; ) type = types[i], MOUSE_EVENT_MAP[type] ? (addHandler(MOUSE_EVENT_MAP[type], specialMouseHandlerWrapper), 
                addHandler(type, void 0, !0)) : addHandler(type);
            }
        },
        off: jqLiteOff,
        one: function(element, type, fn) {
            element = jqLite(element), element.on(type, function onFn() {
                element.off(type, fn), element.off(type, onFn);
            }), element.on(type, fn);
        },
        replaceWith: function(element, replaceNode) {
            var index, parent = element.parentNode;
            jqLiteDealoc(element), forEach(new JQLite(replaceNode), function(node) {
                index ? parent.insertBefore(node, index.nextSibling) : parent.replaceChild(node, element), 
                index = node;
            });
        },
        children: function(element) {
            var children = [];
            return forEach(element.childNodes, function(element) {
                element.nodeType === NODE_TYPE_ELEMENT && children.push(element);
            }), children;
        },
        contents: function(element) {
            return element.contentDocument || element.childNodes || [];
        },
        append: function(element, node) {
            var nodeType = element.nodeType;
            if (nodeType === NODE_TYPE_ELEMENT || nodeType === NODE_TYPE_DOCUMENT_FRAGMENT) {
                node = new JQLite(node);
                for (var i = 0, ii = node.length; ii > i; i++) {
                    var child = node[i];
                    element.appendChild(child);
                }
            }
        },
        prepend: function(element, node) {
            if (element.nodeType === NODE_TYPE_ELEMENT) {
                var index = element.firstChild;
                forEach(new JQLite(node), function(child) {
                    element.insertBefore(child, index);
                });
            }
        },
        wrap: function(element, wrapNode) {
            jqLiteWrapNode(element, jqLite(wrapNode).eq(0).clone()[0]);
        },
        remove: jqLiteRemove,
        detach: function(element) {
            jqLiteRemove(element, !0);
        },
        after: function(element, newElement) {
            var index = element, parent = element.parentNode;
            newElement = new JQLite(newElement);
            for (var i = 0, ii = newElement.length; ii > i; i++) {
                var node = newElement[i];
                parent.insertBefore(node, index.nextSibling), index = node;
            }
        },
        addClass: jqLiteAddClass,
        removeClass: jqLiteRemoveClass,
        toggleClass: function(element, selector, condition) {
            selector && forEach(selector.split(" "), function(className) {
                var classCondition = condition;
                isUndefined(classCondition) && (classCondition = !jqLiteHasClass(element, className)), 
                (classCondition ? jqLiteAddClass : jqLiteRemoveClass)(element, className);
            });
        },
        parent: function(element) {
            var parent = element.parentNode;
            return parent && parent.nodeType !== NODE_TYPE_DOCUMENT_FRAGMENT ? parent : null;
        },
        next: function(element) {
            return element.nextElementSibling;
        },
        find: function(element, selector) {
            return element.getElementsByTagName ? element.getElementsByTagName(selector) : [];
        },
        clone: jqLiteClone,
        triggerHandler: function(element, event, extraParameters) {
            var dummyEvent, eventFnsCopy, handlerArgs, eventName = event.type || event, expandoStore = jqLiteExpandoStore(element), events = expandoStore && expandoStore.events, eventFns = events && events[eventName];
            eventFns && (dummyEvent = {
                preventDefault: function() {
                    this.defaultPrevented = !0;
                },
                isDefaultPrevented: function() {
                    return this.defaultPrevented === !0;
                },
                stopImmediatePropagation: function() {
                    this.immediatePropagationStopped = !0;
                },
                isImmediatePropagationStopped: function() {
                    return this.immediatePropagationStopped === !0;
                },
                stopPropagation: noop,
                type: eventName,
                target: element
            }, event.type && (dummyEvent = extend(dummyEvent, event)), eventFnsCopy = shallowCopy(eventFns), 
            handlerArgs = extraParameters ? [ dummyEvent ].concat(extraParameters) : [ dummyEvent ], 
            forEach(eventFnsCopy, function(fn) {
                dummyEvent.isImmediatePropagationStopped() || fn.apply(element, handlerArgs);
            }));
        }
    }, function(fn, name) {
        JQLite.prototype[name] = function(arg1, arg2, arg3) {
            for (var value, i = 0, ii = this.length; ii > i; i++) isUndefined(value) ? (value = fn(this[i], arg1, arg2, arg3), 
            isDefined(value) && (value = jqLite(value))) : jqLiteAddNodes(value, fn(this[i], arg1, arg2, arg3));
            return isDefined(value) ? value : this;
        }, JQLite.prototype.bind = JQLite.prototype.on, JQLite.prototype.unbind = JQLite.prototype.off;
    }), HashMap.prototype = {
        put: function(key, value) {
            this[hashKey(key, this.nextUid)] = value;
        },
        get: function(key) {
            return this[hashKey(key, this.nextUid)];
        },
        remove: function(key) {
            var value = this[key = hashKey(key, this.nextUid)];
            return delete this[key], value;
        }
    };
    var $$HashMapProvider = [ function() {
        this.$get = [ function() {
            return HashMap;
        } ];
    } ], ARROW_ARG = /^([^\(]+?)=>/, FN_ARGS = /^[^\(]*\(\s*([^\)]*)\)/m, FN_ARG_SPLIT = /,/, FN_ARG = /^\s*(_?)(\S+?)\1\s*$/, STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, $injectorMinErr = minErr("$injector");
    createInjector.$$annotate = annotate;
    var $animateMinErr = minErr("$animate"), ELEMENT_NODE = 1, NG_ANIMATE_CLASSNAME = "ng-animate", $$CoreAnimateJsProvider = function() {
        this.$get = noop;
    }, $$CoreAnimateQueueProvider = function() {
        var postDigestQueue = new HashMap(), postDigestElements = [];
        this.$get = [ "$$AnimateRunner", "$rootScope", function($$AnimateRunner, $rootScope) {
            function updateData(data, classes, value) {
                var changed = !1;
                return classes && (classes = isString(classes) ? classes.split(" ") : isArray(classes) ? classes : [], 
                forEach(classes, function(className) {
                    className && (changed = !0, data[className] = value);
                })), changed;
            }
            function handleCSSClassChanges() {
                forEach(postDigestElements, function(element) {
                    var data = postDigestQueue.get(element);
                    if (data) {
                        var existing = splitClasses(element.attr("class")), toAdd = "", toRemove = "";
                        forEach(data, function(status, className) {
                            var hasClass = !!existing[className];
                            status !== hasClass && (status ? toAdd += (toAdd.length ? " " : "") + className : toRemove += (toRemove.length ? " " : "") + className);
                        }), forEach(element, function(elm) {
                            toAdd && jqLiteAddClass(elm, toAdd), toRemove && jqLiteRemoveClass(elm, toRemove);
                        }), postDigestQueue.remove(element);
                    }
                }), postDigestElements.length = 0;
            }
            function addRemoveClassesPostDigest(element, add, remove) {
                var data = postDigestQueue.get(element) || {}, classesAdded = updateData(data, add, !0), classesRemoved = updateData(data, remove, !1);
                (classesAdded || classesRemoved) && (postDigestQueue.put(element, data), postDigestElements.push(element), 
                1 === postDigestElements.length && $rootScope.$$postDigest(handleCSSClassChanges));
            }
            return {
                enabled: noop,
                on: noop,
                off: noop,
                pin: noop,
                push: function(element, event, options, domOperation) {
                    domOperation && domOperation(), options = options || {}, options.from && element.css(options.from), 
                    options.to && element.css(options.to), (options.addClass || options.removeClass) && addRemoveClassesPostDigest(element, options.addClass, options.removeClass);
                    var runner = new $$AnimateRunner();
                    return runner.complete(), runner;
                }
            };
        } ];
    }, $AnimateProvider = [ "$provide", function($provide) {
        var provider = this;
        this.$$registeredAnimations = Object.create(null), this.register = function(name, factory) {
            if (name && "." !== name.charAt(0)) throw $animateMinErr("notcsel", "Expecting class selector starting with '.' got '{0}'.", name);
            var key = name + "-animation";
            provider.$$registeredAnimations[name.substr(1)] = key, $provide.factory(key, factory);
        }, this.classNameFilter = function(expression) {
            if (1 === arguments.length && (this.$$classNameFilter = expression instanceof RegExp ? expression : null, 
            this.$$classNameFilter)) {
                var reservedRegex = new RegExp("(\\s+|\\/)" + NG_ANIMATE_CLASSNAME + "(\\s+|\\/)");
                if (reservedRegex.test(this.$$classNameFilter.toString())) throw $animateMinErr("nongcls", '$animateProvider.classNameFilter(regex) prohibits accepting a regex value which matches/contains the "{0}" CSS class.', NG_ANIMATE_CLASSNAME);
            }
            return this.$$classNameFilter;
        }, this.$get = [ "$$animateQueue", function($$animateQueue) {
            function domInsert(element, parentElement, afterElement) {
                if (afterElement) {
                    var afterNode = extractElementNode(afterElement);
                    !afterNode || afterNode.parentNode || afterNode.previousElementSibling || (afterElement = null);
                }
                afterElement ? afterElement.after(element) : parentElement.prepend(element);
            }
            return {
                on: $$animateQueue.on,
                off: $$animateQueue.off,
                pin: $$animateQueue.pin,
                enabled: $$animateQueue.enabled,
                cancel: function(runner) {
                    runner.end && runner.end();
                },
                enter: function(element, parent, after, options) {
                    return parent = parent && jqLite(parent), after = after && jqLite(after), parent = parent || after.parent(), 
                    domInsert(element, parent, after), $$animateQueue.push(element, "enter", prepareAnimateOptions(options));
                },
                move: function(element, parent, after, options) {
                    return parent = parent && jqLite(parent), after = after && jqLite(after), parent = parent || after.parent(), 
                    domInsert(element, parent, after), $$animateQueue.push(element, "move", prepareAnimateOptions(options));
                },
                leave: function(element, options) {
                    return $$animateQueue.push(element, "leave", prepareAnimateOptions(options), function() {
                        element.remove();
                    });
                },
                addClass: function(element, className, options) {
                    return options = prepareAnimateOptions(options), options.addClass = mergeClasses(options.addclass, className), 
                    $$animateQueue.push(element, "addClass", options);
                },
                removeClass: function(element, className, options) {
                    return options = prepareAnimateOptions(options), options.removeClass = mergeClasses(options.removeClass, className), 
                    $$animateQueue.push(element, "removeClass", options);
                },
                setClass: function(element, add, remove, options) {
                    return options = prepareAnimateOptions(options), options.addClass = mergeClasses(options.addClass, add), 
                    options.removeClass = mergeClasses(options.removeClass, remove), $$animateQueue.push(element, "setClass", options);
                },
                animate: function(element, from, to, className, options) {
                    return options = prepareAnimateOptions(options), options.from = options.from ? extend(options.from, from) : from, 
                    options.to = options.to ? extend(options.to, to) : to, className = className || "ng-inline-animate", 
                    options.tempClasses = mergeClasses(options.tempClasses, className), $$animateQueue.push(element, "animate", options);
                }
            };
        } ];
    } ], $$AnimateAsyncRunFactoryProvider = function() {
        this.$get = [ "$$rAF", function($$rAF) {
            function waitForTick(fn) {
                waitQueue.push(fn), waitQueue.length > 1 || $$rAF(function() {
                    for (var i = 0; i < waitQueue.length; i++) waitQueue[i]();
                    waitQueue = [];
                });
            }
            var waitQueue = [];
            return function() {
                var passed = !1;
                return waitForTick(function() {
                    passed = !0;
                }), function(callback) {
                    passed ? callback() : waitForTick(callback);
                };
            };
        } ];
    }, $$AnimateRunnerFactoryProvider = function() {
        this.$get = [ "$q", "$sniffer", "$$animateAsyncRun", "$document", "$timeout", function($q, $sniffer, $$animateAsyncRun, $document, $timeout) {
            function AnimateRunner(host) {
                this.setHost(host);
                var rafTick = $$animateAsyncRun(), timeoutTick = function(fn) {
                    $timeout(fn, 0, !1);
                };
                this._doneCallbacks = [], this._tick = function(fn) {
                    var doc = $document[0];
                    doc && doc.hidden ? timeoutTick(fn) : rafTick(fn);
                }, this._state = 0;
            }
            var INITIAL_STATE = 0, DONE_PENDING_STATE = 1, DONE_COMPLETE_STATE = 2;
            return AnimateRunner.chain = function(chain, callback) {
                function next() {
                    return index === chain.length ? void callback(!0) : void chain[index](function(response) {
                        return response === !1 ? void callback(!1) : (index++, void next());
                    });
                }
                var index = 0;
                next();
            }, AnimateRunner.all = function(runners, callback) {
                function onProgress(response) {
                    status = status && response, ++count === runners.length && callback(status);
                }
                var count = 0, status = !0;
                forEach(runners, function(runner) {
                    runner.done(onProgress);
                });
            }, AnimateRunner.prototype = {
                setHost: function(host) {
                    this.host = host || {};
                },
                done: function(fn) {
                    this._state === DONE_COMPLETE_STATE ? fn() : this._doneCallbacks.push(fn);
                },
                progress: noop,
                getPromise: function() {
                    if (!this.promise) {
                        var self = this;
                        this.promise = $q(function(resolve, reject) {
                            self.done(function(status) {
                                status === !1 ? reject() : resolve();
                            });
                        });
                    }
                    return this.promise;
                },
                then: function(resolveHandler, rejectHandler) {
                    return this.getPromise().then(resolveHandler, rejectHandler);
                },
                "catch": function(handler) {
                    return this.getPromise()["catch"](handler);
                },
                "finally": function(handler) {
                    return this.getPromise()["finally"](handler);
                },
                pause: function() {
                    this.host.pause && this.host.pause();
                },
                resume: function() {
                    this.host.resume && this.host.resume();
                },
                end: function() {
                    this.host.end && this.host.end(), this._resolve(!0);
                },
                cancel: function() {
                    this.host.cancel && this.host.cancel(), this._resolve(!1);
                },
                complete: function(response) {
                    var self = this;
                    self._state === INITIAL_STATE && (self._state = DONE_PENDING_STATE, self._tick(function() {
                        self._resolve(response);
                    }));
                },
                _resolve: function(response) {
                    this._state !== DONE_COMPLETE_STATE && (forEach(this._doneCallbacks, function(fn) {
                        fn(response);
                    }), this._doneCallbacks.length = 0, this._state = DONE_COMPLETE_STATE);
                }
            }, AnimateRunner;
        } ];
    }, $CoreAnimateCssProvider = function() {
        this.$get = [ "$$rAF", "$q", "$$AnimateRunner", function($$rAF, $q, $$AnimateRunner) {
            return function(element, initialOptions) {
                function run() {
                    return $$rAF(function() {
                        applyAnimationContents(), closed || runner.complete(), closed = !0;
                    }), runner;
                }
                function applyAnimationContents() {
                    options.addClass && (element.addClass(options.addClass), options.addClass = null), 
                    options.removeClass && (element.removeClass(options.removeClass), options.removeClass = null), 
                    options.to && (element.css(options.to), options.to = null);
                }
                var options = initialOptions || {};
                options.$$prepared || (options = copy(options)), options.cleanupStyles && (options.from = options.to = null), 
                options.from && (element.css(options.from), options.from = null);
                var closed, runner = new $$AnimateRunner();
                return {
                    start: run,
                    end: run
                };
            };
        } ];
    }, $compileMinErr = minErr("$compile"), _UNINITIALIZED_VALUE = new UNINITIALIZED_VALUE();
    $CompileProvider.$inject = [ "$provide", "$$sanitizeUriProvider" ], SimpleChange.prototype.isFirstChange = function() {
        return this.previousValue === _UNINITIALIZED_VALUE;
    };
    var PREFIX_REGEXP = /^((?:x|data)[\:\-_])/i, $controllerMinErr = minErr("$controller"), CNTRL_REG = /^(\S+)(\s+as\s+([\w$]+))?$/, $$ForceReflowProvider = function() {
        this.$get = [ "$document", function($document) {
            return function(domNode) {
                return domNode ? !domNode.nodeType && domNode instanceof jqLite && (domNode = domNode[0]) : domNode = $document[0].body, 
                domNode.offsetWidth + 1;
            };
        } ];
    }, APPLICATION_JSON = "application/json", CONTENT_TYPE_APPLICATION_JSON = {
        "Content-Type": APPLICATION_JSON + ";charset=utf-8"
    }, JSON_START = /^\[|^\{(?!\{)/, JSON_ENDS = {
        "[": /]$/,
        "{": /}$/
    }, JSON_PROTECTION_PREFIX = /^\)\]\}',?\n/, $httpMinErr = minErr("$http"), $httpMinErrLegacyFn = function(method) {
        return function() {
            throw $httpMinErr("legacy", "The method `{0}` on the promise returned from `$http` has been disabled.", method);
        };
    }, $interpolateMinErr = angular.$interpolateMinErr = minErr("$interpolate");
    $interpolateMinErr.throwNoconcat = function(text) {
        throw $interpolateMinErr("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", text);
    }, $interpolateMinErr.interr = function(text, err) {
        return $interpolateMinErr("interr", "Can't interpolate: {0}\n{1}", text, err.toString());
    };
    var $jsonpCallbacksProvider = function() {
        this.$get = [ "$window", function($window) {
            function createCallback(callbackId) {
                var callback = function(data) {
                    callback.data = data, callback.called = !0;
                };
                return callback.id = callbackId, callback;
            }
            var callbacks = $window.angular.callbacks, callbackMap = {};
            return {
                createCallback: function() {
                    var callbackId = "_" + (callbacks.$$counter++).toString(36), callbackPath = "angular.callbacks." + callbackId, callback = createCallback(callbackId);
                    return callbackMap[callbackPath] = callbacks[callbackId] = callback, callbackPath;
                },
                wasCalled: function(callbackPath) {
                    return callbackMap[callbackPath].called;
                },
                getResponse: function(callbackPath) {
                    return callbackMap[callbackPath].data;
                },
                removeCallback: function(callbackPath) {
                    var callback = callbackMap[callbackPath];
                    delete callbacks[callback.id], delete callbackMap[callbackPath];
                }
            };
        } ];
    }, PATH_MATCH = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, DEFAULT_PORTS = {
        http: 80,
        https: 443,
        ftp: 21
    }, $locationMinErr = minErr("$location"), locationPrototype = {
        $$absUrl: "",
        $$html5: !1,
        $$replace: !1,
        absUrl: locationGetter("$$absUrl"),
        url: function(url) {
            if (isUndefined(url)) return this.$$url;
            var match = PATH_MATCH.exec(url);
            return (match[1] || "" === url) && this.path(decodeURIComponent(match[1])), (match[2] || match[1] || "" === url) && this.search(match[3] || ""), 
            this.hash(match[5] || ""), this;
        },
        protocol: locationGetter("$$protocol"),
        host: locationGetter("$$host"),
        port: locationGetter("$$port"),
        path: locationGetterSetter("$$path", function(path) {
            return path = null !== path ? path.toString() : "", "/" == path.charAt(0) ? path : "/" + path;
        }),
        search: function(search, paramValue) {
            switch (arguments.length) {
              case 0:
                return this.$$search;

              case 1:
                if (isString(search) || isNumber(search)) search = search.toString(), this.$$search = parseKeyValue(search); else {
                    if (!isObject(search)) throw $locationMinErr("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
                    search = copy(search, {}), forEach(search, function(value, key) {
                        null == value && delete search[key];
                    }), this.$$search = search;
                }
                break;

              default:
                isUndefined(paramValue) || null === paramValue ? delete this.$$search[search] : this.$$search[search] = paramValue;
            }
            return this.$$compose(), this;
        },
        hash: locationGetterSetter("$$hash", function(hash) {
            return null !== hash ? hash.toString() : "";
        }),
        replace: function() {
            return this.$$replace = !0, this;
        }
    };
    forEach([ LocationHashbangInHtml5Url, LocationHashbangUrl, LocationHtml5Url ], function(Location) {
        Location.prototype = Object.create(locationPrototype), Location.prototype.state = function(state) {
            if (!arguments.length) return this.$$state;
            if (Location !== LocationHtml5Url || !this.$$html5) throw $locationMinErr("nostate", "History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API");
            return this.$$state = isUndefined(state) ? null : state, this;
        };
    });
    var $parseMinErr = minErr("$parse"), CALL = Function.prototype.call, APPLY = Function.prototype.apply, BIND = Function.prototype.bind, OPERATORS = createMap();
    forEach("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function(operator) {
        OPERATORS[operator] = !0;
    });
    var ESCAPE = {
        n: "\n",
        f: "\f",
        r: "\r",
        t: "	",
        v: "",
        "'": "'",
        '"': '"'
    }, Lexer = function(options) {
        this.options = options;
    };
    Lexer.prototype = {
        constructor: Lexer,
        lex: function(text) {
            for (this.text = text, this.index = 0, this.tokens = []; this.index < this.text.length; ) {
                var ch = this.text.charAt(this.index);
                if ('"' === ch || "'" === ch) this.readString(ch); else if (this.isNumber(ch) || "." === ch && this.isNumber(this.peek())) this.readNumber(); else if (this.isIdentifierStart(this.peekMultichar())) this.readIdent(); else if (this.is(ch, "(){}[].,;:?")) this.tokens.push({
                    index: this.index,
                    text: ch
                }), this.index++; else if (this.isWhitespace(ch)) this.index++; else {
                    var ch2 = ch + this.peek(), ch3 = ch2 + this.peek(2), op1 = OPERATORS[ch], op2 = OPERATORS[ch2], op3 = OPERATORS[ch3];
                    if (op1 || op2 || op3) {
                        var token = op3 ? ch3 : op2 ? ch2 : ch;
                        this.tokens.push({
                            index: this.index,
                            text: token,
                            operator: !0
                        }), this.index += token.length;
                    } else this.throwError("Unexpected next character ", this.index, this.index + 1);
                }
            }
            return this.tokens;
        },
        is: function(ch, chars) {
            return -1 !== chars.indexOf(ch);
        },
        peek: function(i) {
            var num = i || 1;
            return this.index + num < this.text.length ? this.text.charAt(this.index + num) : !1;
        },
        isNumber: function(ch) {
            return ch >= "0" && "9" >= ch && "string" == typeof ch;
        },
        isWhitespace: function(ch) {
            return " " === ch || "\r" === ch || "	" === ch || "\n" === ch || "" === ch || " " === ch;
        },
        isIdentifierStart: function(ch) {
            return this.options.isIdentifierStart ? this.options.isIdentifierStart(ch, this.codePointAt(ch)) : this.isValidIdentifierStart(ch);
        },
        isValidIdentifierStart: function(ch) {
            return ch >= "a" && "z" >= ch || ch >= "A" && "Z" >= ch || "_" === ch || "$" === ch;
        },
        isIdentifierContinue: function(ch) {
            return this.options.isIdentifierContinue ? this.options.isIdentifierContinue(ch, this.codePointAt(ch)) : this.isValidIdentifierContinue(ch);
        },
        isValidIdentifierContinue: function(ch, cp) {
            return this.isValidIdentifierStart(ch, cp) || this.isNumber(ch);
        },
        codePointAt: function(ch) {
            return 1 === ch.length ? ch.charCodeAt(0) : (ch.charCodeAt(0) << 10) + ch.charCodeAt(1) - 56613888;
        },
        peekMultichar: function() {
            var ch = this.text.charAt(this.index), peek = this.peek();
            if (!peek) return ch;
            var cp1 = ch.charCodeAt(0), cp2 = peek.charCodeAt(0);
            return cp1 >= 55296 && 56319 >= cp1 && cp2 >= 56320 && 57343 >= cp2 ? ch + peek : ch;
        },
        isExpOperator: function(ch) {
            return "-" === ch || "+" === ch || this.isNumber(ch);
        },
        throwError: function(error, start, end) {
            end = end || this.index;
            var colStr = isDefined(start) ? "s " + start + "-" + this.index + " [" + this.text.substring(start, end) + "]" : " " + end;
            throw $parseMinErr("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", error, colStr, this.text);
        },
        readNumber: function() {
            for (var number = "", start = this.index; this.index < this.text.length; ) {
                var ch = lowercase(this.text.charAt(this.index));
                if ("." == ch || this.isNumber(ch)) number += ch; else {
                    var peekCh = this.peek();
                    if ("e" == ch && this.isExpOperator(peekCh)) number += ch; else if (this.isExpOperator(ch) && peekCh && this.isNumber(peekCh) && "e" == number.charAt(number.length - 1)) number += ch; else {
                        if (!this.isExpOperator(ch) || peekCh && this.isNumber(peekCh) || "e" != number.charAt(number.length - 1)) break;
                        this.throwError("Invalid exponent");
                    }
                }
                this.index++;
            }
            this.tokens.push({
                index: start,
                text: number,
                constant: !0,
                value: Number(number)
            });
        },
        readIdent: function() {
            var start = this.index;
            for (this.index += this.peekMultichar().length; this.index < this.text.length; ) {
                var ch = this.peekMultichar();
                if (!this.isIdentifierContinue(ch)) break;
                this.index += ch.length;
            }
            this.tokens.push({
                index: start,
                text: this.text.slice(start, this.index),
                identifier: !0
            });
        },
        readString: function(quote) {
            var start = this.index;
            this.index++;
            for (var string = "", rawString = quote, escape = !1; this.index < this.text.length; ) {
                var ch = this.text.charAt(this.index);
                if (rawString += ch, escape) {
                    if ("u" === ch) {
                        var hex = this.text.substring(this.index + 1, this.index + 5);
                        hex.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + hex + "]"), 
                        this.index += 4, string += String.fromCharCode(parseInt(hex, 16));
                    } else {
                        var rep = ESCAPE[ch];
                        string += rep || ch;
                    }
                    escape = !1;
                } else if ("\\" === ch) escape = !0; else {
                    if (ch === quote) return this.index++, void this.tokens.push({
                        index: start,
                        text: rawString,
                        constant: !0,
                        value: string
                    });
                    string += ch;
                }
                this.index++;
            }
            this.throwError("Unterminated quote", start);
        }
    };
    var AST = function(lexer, options) {
        this.lexer = lexer, this.options = options;
    };
    AST.Program = "Program", AST.ExpressionStatement = "ExpressionStatement", AST.AssignmentExpression = "AssignmentExpression", 
    AST.ConditionalExpression = "ConditionalExpression", AST.LogicalExpression = "LogicalExpression", 
    AST.BinaryExpression = "BinaryExpression", AST.UnaryExpression = "UnaryExpression", 
    AST.CallExpression = "CallExpression", AST.MemberExpression = "MemberExpression", 
    AST.Identifier = "Identifier", AST.Literal = "Literal", AST.ArrayExpression = "ArrayExpression", 
    AST.Property = "Property", AST.ObjectExpression = "ObjectExpression", AST.ThisExpression = "ThisExpression", 
    AST.LocalsExpression = "LocalsExpression", AST.NGValueParameter = "NGValueParameter", 
    AST.prototype = {
        ast: function(text) {
            this.text = text, this.tokens = this.lexer.lex(text);
            var value = this.program();
            return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), 
            value;
        },
        program: function() {
            for (var body = []; ;) if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && body.push(this.expressionStatement()), 
            !this.expect(";")) return {
                type: AST.Program,
                body: body
            };
        },
        expressionStatement: function() {
            return {
                type: AST.ExpressionStatement,
                expression: this.filterChain()
            };
        },
        filterChain: function() {
            for (var token, left = this.expression(); token = this.expect("|"); ) left = this.filter(left);
            return left;
        },
        expression: function() {
            return this.assignment();
        },
        assignment: function() {
            var result = this.ternary();
            return this.expect("=") && (result = {
                type: AST.AssignmentExpression,
                left: result,
                right: this.assignment(),
                operator: "="
            }), result;
        },
        ternary: function() {
            var alternate, consequent, test = this.logicalOR();
            return this.expect("?") && (alternate = this.expression(), this.consume(":")) ? (consequent = this.expression(), 
            {
                type: AST.ConditionalExpression,
                test: test,
                alternate: alternate,
                consequent: consequent
            }) : test;
        },
        logicalOR: function() {
            for (var left = this.logicalAND(); this.expect("||"); ) left = {
                type: AST.LogicalExpression,
                operator: "||",
                left: left,
                right: this.logicalAND()
            };
            return left;
        },
        logicalAND: function() {
            for (var left = this.equality(); this.expect("&&"); ) left = {
                type: AST.LogicalExpression,
                operator: "&&",
                left: left,
                right: this.equality()
            };
            return left;
        },
        equality: function() {
            for (var token, left = this.relational(); token = this.expect("==", "!=", "===", "!=="); ) left = {
                type: AST.BinaryExpression,
                operator: token.text,
                left: left,
                right: this.relational()
            };
            return left;
        },
        relational: function() {
            for (var token, left = this.additive(); token = this.expect("<", ">", "<=", ">="); ) left = {
                type: AST.BinaryExpression,
                operator: token.text,
                left: left,
                right: this.additive()
            };
            return left;
        },
        additive: function() {
            for (var token, left = this.multiplicative(); token = this.expect("+", "-"); ) left = {
                type: AST.BinaryExpression,
                operator: token.text,
                left: left,
                right: this.multiplicative()
            };
            return left;
        },
        multiplicative: function() {
            for (var token, left = this.unary(); token = this.expect("*", "/", "%"); ) left = {
                type: AST.BinaryExpression,
                operator: token.text,
                left: left,
                right: this.unary()
            };
            return left;
        },
        unary: function() {
            var token;
            return (token = this.expect("+", "-", "!")) ? {
                type: AST.UnaryExpression,
                operator: token.text,
                prefix: !0,
                argument: this.unary()
            } : this.primary();
        },
        primary: function() {
            var primary;
            this.expect("(") ? (primary = this.filterChain(), this.consume(")")) : this.expect("[") ? primary = this.arrayDeclaration() : this.expect("{") ? primary = this.object() : this.selfReferential.hasOwnProperty(this.peek().text) ? primary = copy(this.selfReferential[this.consume().text]) : this.options.literals.hasOwnProperty(this.peek().text) ? primary = {
                type: AST.Literal,
                value: this.options.literals[this.consume().text]
            } : this.peek().identifier ? primary = this.identifier() : this.peek().constant ? primary = this.constant() : this.throwError("not a primary expression", this.peek());
            for (var next; next = this.expect("(", "[", "."); ) "(" === next.text ? (primary = {
                type: AST.CallExpression,
                callee: primary,
                arguments: this.parseArguments()
            }, this.consume(")")) : "[" === next.text ? (primary = {
                type: AST.MemberExpression,
                object: primary,
                property: this.expression(),
                computed: !0
            }, this.consume("]")) : "." === next.text ? primary = {
                type: AST.MemberExpression,
                object: primary,
                property: this.identifier(),
                computed: !1
            } : this.throwError("IMPOSSIBLE");
            return primary;
        },
        filter: function(baseExpression) {
            for (var args = [ baseExpression ], result = {
                type: AST.CallExpression,
                callee: this.identifier(),
                arguments: args,
                filter: !0
            }; this.expect(":"); ) args.push(this.expression());
            return result;
        },
        parseArguments: function() {
            var args = [];
            if (")" !== this.peekToken().text) do args.push(this.filterChain()); while (this.expect(","));
            return args;
        },
        identifier: function() {
            var token = this.consume();
            return token.identifier || this.throwError("is not a valid identifier", token), 
            {
                type: AST.Identifier,
                name: token.text
            };
        },
        constant: function() {
            return {
                type: AST.Literal,
                value: this.consume().value
            };
        },
        arrayDeclaration: function() {
            var elements = [];
            if ("]" !== this.peekToken().text) do {
                if (this.peek("]")) break;
                elements.push(this.expression());
            } while (this.expect(","));
            return this.consume("]"), {
                type: AST.ArrayExpression,
                elements: elements
            };
        },
        object: function() {
            var property, properties = [];
            if ("}" !== this.peekToken().text) do {
                if (this.peek("}")) break;
                property = {
                    type: AST.Property,
                    kind: "init"
                }, this.peek().constant ? (property.key = this.constant(), property.computed = !1, 
                this.consume(":"), property.value = this.expression()) : this.peek().identifier ? (property.key = this.identifier(), 
                property.computed = !1, this.peek(":") ? (this.consume(":"), property.value = this.expression()) : property.value = property.key) : this.peek("[") ? (this.consume("["), 
                property.key = this.expression(), this.consume("]"), property.computed = !0, this.consume(":"), 
                property.value = this.expression()) : this.throwError("invalid key", this.peek()), 
                properties.push(property);
            } while (this.expect(","));
            return this.consume("}"), {
                type: AST.ObjectExpression,
                properties: properties
            };
        },
        throwError: function(msg, token) {
            throw $parseMinErr("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", token.text, msg, token.index + 1, this.text, this.text.substring(token.index));
        },
        consume: function(e1) {
            if (0 === this.tokens.length) throw $parseMinErr("ueoe", "Unexpected end of expression: {0}", this.text);
            var token = this.expect(e1);
            return token || this.throwError("is unexpected, expecting [" + e1 + "]", this.peek()), 
            token;
        },
        peekToken: function() {
            if (0 === this.tokens.length) throw $parseMinErr("ueoe", "Unexpected end of expression: {0}", this.text);
            return this.tokens[0];
        },
        peek: function(e1, e2, e3, e4) {
            return this.peekAhead(0, e1, e2, e3, e4);
        },
        peekAhead: function(i, e1, e2, e3, e4) {
            if (this.tokens.length > i) {
                var token = this.tokens[i], t = token.text;
                if (t === e1 || t === e2 || t === e3 || t === e4 || !e1 && !e2 && !e3 && !e4) return token;
            }
            return !1;
        },
        expect: function(e1, e2, e3, e4) {
            var token = this.peek(e1, e2, e3, e4);
            return token ? (this.tokens.shift(), token) : !1;
        },
        selfReferential: {
            "this": {
                type: AST.ThisExpression
            },
            $locals: {
                type: AST.LocalsExpression
            }
        }
    }, ASTCompiler.prototype = {
        compile: function(expression, expensiveChecks) {
            var self = this, ast = this.astBuilder.ast(expression);
            this.state = {
                nextId: 0,
                filters: {},
                expensiveChecks: expensiveChecks,
                fn: {
                    vars: [],
                    body: [],
                    own: {}
                },
                assign: {
                    vars: [],
                    body: [],
                    own: {}
                },
                inputs: []
            }, findConstantAndWatchExpressions(ast, self.$filter);
            var assignable, extra = "";
            if (this.stage = "assign", assignable = assignableAST(ast)) {
                this.state.computing = "assign";
                var result = this.nextId();
                this.recurse(assignable, result), this.return_(result), extra = "fn.assign=" + this.generateFunction("assign", "s,v,l");
            }
            var toWatch = getInputs(ast.body);
            self.stage = "inputs", forEach(toWatch, function(watch, key) {
                var fnKey = "fn" + key;
                self.state[fnKey] = {
                    vars: [],
                    body: [],
                    own: {}
                }, self.state.computing = fnKey;
                var intoId = self.nextId();
                self.recurse(watch, intoId), self.return_(intoId), self.state.inputs.push(fnKey), 
                watch.watchId = key;
            }), this.state.computing = "fn", this.stage = "main", this.recurse(ast);
            var fnString = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + extra + this.watchFns() + "return fn;", fn = new Function("$filter", "ensureSafeMemberName", "ensureSafeObject", "ensureSafeFunction", "getStringValue", "ensureSafeAssignContext", "ifDefined", "plus", "text", fnString)(this.$filter, ensureSafeMemberName, ensureSafeObject, ensureSafeFunction, getStringValue, ensureSafeAssignContext, ifDefined, plusFn, expression);
            return this.state = this.stage = void 0, fn.literal = isLiteral(ast), fn.constant = isConstant(ast), 
            fn;
        },
        USE: "use",
        STRICT: "strict",
        watchFns: function() {
            var result = [], fns = this.state.inputs, self = this;
            return forEach(fns, function(name) {
                result.push("var " + name + "=" + self.generateFunction(name, "s"));
            }), fns.length && result.push("fn.inputs=[" + fns.join(",") + "];"), result.join("");
        },
        generateFunction: function(name, params) {
            return "function(" + params + "){" + this.varsPrefix(name) + this.body(name) + "};";
        },
        filterPrefix: function() {
            var parts = [], self = this;
            return forEach(this.state.filters, function(id, filter) {
                parts.push(id + "=$filter(" + self.escape(filter) + ")");
            }), parts.length ? "var " + parts.join(",") + ";" : "";
        },
        varsPrefix: function(section) {
            return this.state[section].vars.length ? "var " + this.state[section].vars.join(",") + ";" : "";
        },
        body: function(section) {
            return this.state[section].body.join("");
        },
        recurse: function(ast, intoId, nameId, recursionFn, create, skipWatchIdCheck) {
            var left, right, args, expression, computed, self = this;
            if (recursionFn = recursionFn || noop, !skipWatchIdCheck && isDefined(ast.watchId)) return intoId = intoId || this.nextId(), 
            void this.if_("i", this.lazyAssign(intoId, this.computedMember("i", ast.watchId)), this.lazyRecurse(ast, intoId, nameId, recursionFn, create, !0));
            switch (ast.type) {
              case AST.Program:
                forEach(ast.body, function(expression, pos) {
                    self.recurse(expression.expression, void 0, void 0, function(expr) {
                        right = expr;
                    }), pos !== ast.body.length - 1 ? self.current().body.push(right, ";") : self.return_(right);
                });
                break;

              case AST.Literal:
                expression = this.escape(ast.value), this.assign(intoId, expression), recursionFn(expression);
                break;

              case AST.UnaryExpression:
                this.recurse(ast.argument, void 0, void 0, function(expr) {
                    right = expr;
                }), expression = ast.operator + "(" + this.ifDefined(right, 0) + ")", this.assign(intoId, expression), 
                recursionFn(expression);
                break;

              case AST.BinaryExpression:
                this.recurse(ast.left, void 0, void 0, function(expr) {
                    left = expr;
                }), this.recurse(ast.right, void 0, void 0, function(expr) {
                    right = expr;
                }), expression = "+" === ast.operator ? this.plus(left, right) : "-" === ast.operator ? this.ifDefined(left, 0) + ast.operator + this.ifDefined(right, 0) : "(" + left + ")" + ast.operator + "(" + right + ")", 
                this.assign(intoId, expression), recursionFn(expression);
                break;

              case AST.LogicalExpression:
                intoId = intoId || this.nextId(), self.recurse(ast.left, intoId), self.if_("&&" === ast.operator ? intoId : self.not(intoId), self.lazyRecurse(ast.right, intoId)), 
                recursionFn(intoId);
                break;

              case AST.ConditionalExpression:
                intoId = intoId || this.nextId(), self.recurse(ast.test, intoId), self.if_(intoId, self.lazyRecurse(ast.alternate, intoId), self.lazyRecurse(ast.consequent, intoId)), 
                recursionFn(intoId);
                break;

              case AST.Identifier:
                intoId = intoId || this.nextId(), nameId && (nameId.context = "inputs" === self.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", ast.name) + "?l:s"), 
                nameId.computed = !1, nameId.name = ast.name), ensureSafeMemberName(ast.name), self.if_("inputs" === self.stage || self.not(self.getHasOwnProperty("l", ast.name)), function() {
                    self.if_("inputs" === self.stage || "s", function() {
                        create && 1 !== create && self.if_(self.not(self.nonComputedMember("s", ast.name)), self.lazyAssign(self.nonComputedMember("s", ast.name), "{}")), 
                        self.assign(intoId, self.nonComputedMember("s", ast.name));
                    });
                }, intoId && self.lazyAssign(intoId, self.nonComputedMember("l", ast.name))), (self.state.expensiveChecks || isPossiblyDangerousMemberName(ast.name)) && self.addEnsureSafeObject(intoId), 
                recursionFn(intoId);
                break;

              case AST.MemberExpression:
                left = nameId && (nameId.context = this.nextId()) || this.nextId(), intoId = intoId || this.nextId(), 
                self.recurse(ast.object, left, void 0, function() {
                    self.if_(self.notNull(left), function() {
                        create && 1 !== create && self.addEnsureSafeAssignContext(left), ast.computed ? (right = self.nextId(), 
                        self.recurse(ast.property, right), self.getStringValue(right), self.addEnsureSafeMemberName(right), 
                        create && 1 !== create && self.if_(self.not(self.computedMember(left, right)), self.lazyAssign(self.computedMember(left, right), "{}")), 
                        expression = self.ensureSafeObject(self.computedMember(left, right)), self.assign(intoId, expression), 
                        nameId && (nameId.computed = !0, nameId.name = right)) : (ensureSafeMemberName(ast.property.name), 
                        create && 1 !== create && self.if_(self.not(self.nonComputedMember(left, ast.property.name)), self.lazyAssign(self.nonComputedMember(left, ast.property.name), "{}")), 
                        expression = self.nonComputedMember(left, ast.property.name), (self.state.expensiveChecks || isPossiblyDangerousMemberName(ast.property.name)) && (expression = self.ensureSafeObject(expression)), 
                        self.assign(intoId, expression), nameId && (nameId.computed = !1, nameId.name = ast.property.name));
                    }, function() {
                        self.assign(intoId, "undefined");
                    }), recursionFn(intoId);
                }, !!create);
                break;

              case AST.CallExpression:
                intoId = intoId || this.nextId(), ast.filter ? (right = self.filter(ast.callee.name), 
                args = [], forEach(ast.arguments, function(expr) {
                    var argument = self.nextId();
                    self.recurse(expr, argument), args.push(argument);
                }), expression = right + "(" + args.join(",") + ")", self.assign(intoId, expression), 
                recursionFn(intoId)) : (right = self.nextId(), left = {}, args = [], self.recurse(ast.callee, right, left, function() {
                    self.if_(self.notNull(right), function() {
                        self.addEnsureSafeFunction(right), forEach(ast.arguments, function(expr) {
                            self.recurse(expr, self.nextId(), void 0, function(argument) {
                                args.push(self.ensureSafeObject(argument));
                            });
                        }), left.name ? (self.state.expensiveChecks || self.addEnsureSafeObject(left.context), 
                        expression = self.member(left.context, left.name, left.computed) + "(" + args.join(",") + ")") : expression = right + "(" + args.join(",") + ")", 
                        expression = self.ensureSafeObject(expression), self.assign(intoId, expression);
                    }, function() {
                        self.assign(intoId, "undefined");
                    }), recursionFn(intoId);
                }));
                break;

              case AST.AssignmentExpression:
                if (right = this.nextId(), left = {}, !isAssignable(ast.left)) throw $parseMinErr("lval", "Trying to assign a value to a non l-value");
                this.recurse(ast.left, void 0, left, function() {
                    self.if_(self.notNull(left.context), function() {
                        self.recurse(ast.right, right), self.addEnsureSafeObject(self.member(left.context, left.name, left.computed)), 
                        self.addEnsureSafeAssignContext(left.context), expression = self.member(left.context, left.name, left.computed) + ast.operator + right, 
                        self.assign(intoId, expression), recursionFn(intoId || expression);
                    });
                }, 1);
                break;

              case AST.ArrayExpression:
                args = [], forEach(ast.elements, function(expr) {
                    self.recurse(expr, self.nextId(), void 0, function(argument) {
                        args.push(argument);
                    });
                }), expression = "[" + args.join(",") + "]", this.assign(intoId, expression), recursionFn(expression);
                break;

              case AST.ObjectExpression:
                args = [], computed = !1, forEach(ast.properties, function(property) {
                    property.computed && (computed = !0);
                }), computed ? (intoId = intoId || this.nextId(), this.assign(intoId, "{}"), forEach(ast.properties, function(property) {
                    property.computed ? (left = self.nextId(), self.recurse(property.key, left)) : left = property.key.type === AST.Identifier ? property.key.name : "" + property.key.value, 
                    right = self.nextId(), self.recurse(property.value, right), self.assign(self.member(intoId, left, property.computed), right);
                })) : (forEach(ast.properties, function(property) {
                    self.recurse(property.value, ast.constant ? void 0 : self.nextId(), void 0, function(expr) {
                        args.push(self.escape(property.key.type === AST.Identifier ? property.key.name : "" + property.key.value) + ":" + expr);
                    });
                }), expression = "{" + args.join(",") + "}", this.assign(intoId, expression)), recursionFn(intoId || expression);
                break;

              case AST.ThisExpression:
                this.assign(intoId, "s"), recursionFn("s");
                break;

              case AST.LocalsExpression:
                this.assign(intoId, "l"), recursionFn("l");
                break;

              case AST.NGValueParameter:
                this.assign(intoId, "v"), recursionFn("v");
            }
        },
        getHasOwnProperty: function(element, property) {
            var key = element + "." + property, own = this.current().own;
            return own.hasOwnProperty(key) || (own[key] = this.nextId(!1, element + "&&(" + this.escape(property) + " in " + element + ")")), 
            own[key];
        },
        assign: function(id, value) {
            return id ? (this.current().body.push(id, "=", value, ";"), id) : void 0;
        },
        filter: function(filterName) {
            return this.state.filters.hasOwnProperty(filterName) || (this.state.filters[filterName] = this.nextId(!0)), 
            this.state.filters[filterName];
        },
        ifDefined: function(id, defaultValue) {
            return "ifDefined(" + id + "," + this.escape(defaultValue) + ")";
        },
        plus: function(left, right) {
            return "plus(" + left + "," + right + ")";
        },
        return_: function(id) {
            this.current().body.push("return ", id, ";");
        },
        if_: function(test, alternate, consequent) {
            if (test === !0) alternate(); else {
                var body = this.current().body;
                body.push("if(", test, "){"), alternate(), body.push("}"), consequent && (body.push("else{"), 
                consequent(), body.push("}"));
            }
        },
        not: function(expression) {
            return "!(" + expression + ")";
        },
        notNull: function(expression) {
            return expression + "!=null";
        },
        nonComputedMember: function(left, right) {
            var SAFE_IDENTIFIER = /[$_a-zA-Z][$_a-zA-Z0-9]*/, UNSAFE_CHARACTERS = /[^$_a-zA-Z0-9]/g;
            return SAFE_IDENTIFIER.test(right) ? left + "." + right : left + '["' + right.replace(UNSAFE_CHARACTERS, this.stringEscapeFn) + '"]';
        },
        computedMember: function(left, right) {
            return left + "[" + right + "]";
        },
        member: function(left, right, computed) {
            return computed ? this.computedMember(left, right) : this.nonComputedMember(left, right);
        },
        addEnsureSafeObject: function(item) {
            this.current().body.push(this.ensureSafeObject(item), ";");
        },
        addEnsureSafeMemberName: function(item) {
            this.current().body.push(this.ensureSafeMemberName(item), ";");
        },
        addEnsureSafeFunction: function(item) {
            this.current().body.push(this.ensureSafeFunction(item), ";");
        },
        addEnsureSafeAssignContext: function(item) {
            this.current().body.push(this.ensureSafeAssignContext(item), ";");
        },
        ensureSafeObject: function(item) {
            return "ensureSafeObject(" + item + ",text)";
        },
        ensureSafeMemberName: function(item) {
            return "ensureSafeMemberName(" + item + ",text)";
        },
        ensureSafeFunction: function(item) {
            return "ensureSafeFunction(" + item + ",text)";
        },
        getStringValue: function(item) {
            this.assign(item, "getStringValue(" + item + ")");
        },
        ensureSafeAssignContext: function(item) {
            return "ensureSafeAssignContext(" + item + ",text)";
        },
        lazyRecurse: function(ast, intoId, nameId, recursionFn, create, skipWatchIdCheck) {
            var self = this;
            return function() {
                self.recurse(ast, intoId, nameId, recursionFn, create, skipWatchIdCheck);
            };
        },
        lazyAssign: function(id, value) {
            var self = this;
            return function() {
                self.assign(id, value);
            };
        },
        stringEscapeRegex: /[^ a-zA-Z0-9]/g,
        stringEscapeFn: function(c) {
            return "\\u" + ("0000" + c.charCodeAt(0).toString(16)).slice(-4);
        },
        escape: function(value) {
            if (isString(value)) return "'" + value.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
            if (isNumber(value)) return value.toString();
            if (value === !0) return "true";
            if (value === !1) return "false";
            if (null === value) return "null";
            if ("undefined" == typeof value) return "undefined";
            throw $parseMinErr("esc", "IMPOSSIBLE");
        },
        nextId: function(skip, init) {
            var id = "v" + this.state.nextId++;
            return skip || this.current().vars.push(id + (init ? "=" + init : "")), id;
        },
        current: function() {
            return this.state[this.state.computing];
        }
    }, ASTInterpreter.prototype = {
        compile: function(expression, expensiveChecks) {
            var self = this, ast = this.astBuilder.ast(expression);
            this.expression = expression, this.expensiveChecks = expensiveChecks, findConstantAndWatchExpressions(ast, self.$filter);
            var assignable, assign;
            (assignable = assignableAST(ast)) && (assign = this.recurse(assignable));
            var inputs, toWatch = getInputs(ast.body);
            toWatch && (inputs = [], forEach(toWatch, function(watch, key) {
                var input = self.recurse(watch);
                watch.input = input, inputs.push(input), watch.watchId = key;
            }));
            var expressions = [];
            forEach(ast.body, function(expression) {
                expressions.push(self.recurse(expression.expression));
            });
            var fn = 0 === ast.body.length ? noop : 1 === ast.body.length ? expressions[0] : function(scope, locals) {
                var lastValue;
                return forEach(expressions, function(exp) {
                    lastValue = exp(scope, locals);
                }), lastValue;
            };
            return assign && (fn.assign = function(scope, value, locals) {
                return assign(scope, locals, value);
            }), inputs && (fn.inputs = inputs), fn.literal = isLiteral(ast), fn.constant = isConstant(ast), 
            fn;
        },
        recurse: function(ast, context, create) {
            var left, right, args, self = this;
            if (ast.input) return this.inputs(ast.input, ast.watchId);
            switch (ast.type) {
              case AST.Literal:
                return this.value(ast.value, context);

              case AST.UnaryExpression:
                return right = this.recurse(ast.argument), this["unary" + ast.operator](right, context);

              case AST.BinaryExpression:
                return left = this.recurse(ast.left), right = this.recurse(ast.right), this["binary" + ast.operator](left, right, context);

              case AST.LogicalExpression:
                return left = this.recurse(ast.left), right = this.recurse(ast.right), this["binary" + ast.operator](left, right, context);

              case AST.ConditionalExpression:
                return this["ternary?:"](this.recurse(ast.test), this.recurse(ast.alternate), this.recurse(ast.consequent), context);

              case AST.Identifier:
                return ensureSafeMemberName(ast.name, self.expression), self.identifier(ast.name, self.expensiveChecks || isPossiblyDangerousMemberName(ast.name), context, create, self.expression);

              case AST.MemberExpression:
                return left = this.recurse(ast.object, !1, !!create), ast.computed || (ensureSafeMemberName(ast.property.name, self.expression), 
                right = ast.property.name), ast.computed && (right = this.recurse(ast.property)), 
                ast.computed ? this.computedMember(left, right, context, create, self.expression) : this.nonComputedMember(left, right, self.expensiveChecks, context, create, self.expression);

              case AST.CallExpression:
                return args = [], forEach(ast.arguments, function(expr) {
                    args.push(self.recurse(expr));
                }), ast.filter && (right = this.$filter(ast.callee.name)), ast.filter || (right = this.recurse(ast.callee, !0)), 
                ast.filter ? function(scope, locals, assign, inputs) {
                    for (var values = [], i = 0; i < args.length; ++i) values.push(args[i](scope, locals, assign, inputs));
                    var value = right.apply(void 0, values, inputs);
                    return context ? {
                        context: void 0,
                        name: void 0,
                        value: value
                    } : value;
                } : function(scope, locals, assign, inputs) {
                    var value, rhs = right(scope, locals, assign, inputs);
                    if (null != rhs.value) {
                        ensureSafeObject(rhs.context, self.expression), ensureSafeFunction(rhs.value, self.expression);
                        for (var values = [], i = 0; i < args.length; ++i) values.push(ensureSafeObject(args[i](scope, locals, assign, inputs), self.expression));
                        value = ensureSafeObject(rhs.value.apply(rhs.context, values), self.expression);
                    }
                    return context ? {
                        value: value
                    } : value;
                };

              case AST.AssignmentExpression:
                return left = this.recurse(ast.left, !0, 1), right = this.recurse(ast.right), function(scope, locals, assign, inputs) {
                    var lhs = left(scope, locals, assign, inputs), rhs = right(scope, locals, assign, inputs);
                    return ensureSafeObject(lhs.value, self.expression), ensureSafeAssignContext(lhs.context), 
                    lhs.context[lhs.name] = rhs, context ? {
                        value: rhs
                    } : rhs;
                };

              case AST.ArrayExpression:
                return args = [], forEach(ast.elements, function(expr) {
                    args.push(self.recurse(expr));
                }), function(scope, locals, assign, inputs) {
                    for (var value = [], i = 0; i < args.length; ++i) value.push(args[i](scope, locals, assign, inputs));
                    return context ? {
                        value: value
                    } : value;
                };

              case AST.ObjectExpression:
                return args = [], forEach(ast.properties, function(property) {
                    args.push(property.computed ? {
                        key: self.recurse(property.key),
                        computed: !0,
                        value: self.recurse(property.value)
                    } : {
                        key: property.key.type === AST.Identifier ? property.key.name : "" + property.key.value,
                        computed: !1,
                        value: self.recurse(property.value)
                    });
                }), function(scope, locals, assign, inputs) {
                    for (var value = {}, i = 0; i < args.length; ++i) args[i].computed ? value[args[i].key(scope, locals, assign, inputs)] = args[i].value(scope, locals, assign, inputs) : value[args[i].key] = args[i].value(scope, locals, assign, inputs);
                    return context ? {
                        value: value
                    } : value;
                };

              case AST.ThisExpression:
                return function(scope) {
                    return context ? {
                        value: scope
                    } : scope;
                };

              case AST.LocalsExpression:
                return function(scope, locals) {
                    return context ? {
                        value: locals
                    } : locals;
                };

              case AST.NGValueParameter:
                return function(scope, locals, assign) {
                    return context ? {
                        value: assign
                    } : assign;
                };
            }
        },
        "unary+": function(argument, context) {
            return function(scope, locals, assign, inputs) {
                var arg = argument(scope, locals, assign, inputs);
                return arg = isDefined(arg) ? +arg : 0, context ? {
                    value: arg
                } : arg;
            };
        },
        "unary-": function(argument, context) {
            return function(scope, locals, assign, inputs) {
                var arg = argument(scope, locals, assign, inputs);
                return arg = isDefined(arg) ? -arg : 0, context ? {
                    value: arg
                } : arg;
            };
        },
        "unary!": function(argument, context) {
            return function(scope, locals, assign, inputs) {
                var arg = !argument(scope, locals, assign, inputs);
                return context ? {
                    value: arg
                } : arg;
            };
        },
        "binary+": function(left, right, context) {
            return function(scope, locals, assign, inputs) {
                var lhs = left(scope, locals, assign, inputs), rhs = right(scope, locals, assign, inputs), arg = plusFn(lhs, rhs);
                return context ? {
                    value: arg
                } : arg;
            };
        },
        "binary-": function(left, right, context) {
            return function(scope, locals, assign, inputs) {
                var lhs = left(scope, locals, assign, inputs), rhs = right(scope, locals, assign, inputs), arg = (isDefined(lhs) ? lhs : 0) - (isDefined(rhs) ? rhs : 0);
                return context ? {
                    value: arg
                } : arg;
            };
        },
        "binary*": function(left, right, context) {
            return function(scope, locals, assign, inputs) {
                var arg = left(scope, locals, assign, inputs) * right(scope, locals, assign, inputs);
                return context ? {
                    value: arg
                } : arg;
            };
        },
        "binary/": function(left, right, context) {
            return function(scope, locals, assign, inputs) {
                var arg = left(scope, locals, assign, inputs) / right(scope, locals, assign, inputs);
                return context ? {
                    value: arg
                } : arg;
            };
        },
        "binary%": function(left, right, context) {
            return function(scope, locals, assign, inputs) {
                var arg = left(scope, locals, assign, inputs) % right(scope, locals, assign, inputs);
                return context ? {
                    value: arg
                } : arg;
            };
        },
        "binary===": function(left, right, context) {
            return function(scope, locals, assign, inputs) {
                var arg = left(scope, locals, assign, inputs) === right(scope, locals, assign, inputs);
                return context ? {
                    value: arg
                } : arg;
            };
        },
        "binary!==": function(left, right, context) {
            return function(scope, locals, assign, inputs) {
                var arg = left(scope, locals, assign, inputs) !== right(scope, locals, assign, inputs);
                return context ? {
                    value: arg
                } : arg;
            };
        },
        "binary==": function(left, right, context) {
            return function(scope, locals, assign, inputs) {
                var arg = left(scope, locals, assign, inputs) == right(scope, locals, assign, inputs);
                return context ? {
                    value: arg
                } : arg;
            };
        },
        "binary!=": function(left, right, context) {
            return function(scope, locals, assign, inputs) {
                var arg = left(scope, locals, assign, inputs) != right(scope, locals, assign, inputs);
                return context ? {
                    value: arg
                } : arg;
            };
        },
        "binary<": function(left, right, context) {
            return function(scope, locals, assign, inputs) {
                var arg = left(scope, locals, assign, inputs) < right(scope, locals, assign, inputs);
                return context ? {
                    value: arg
                } : arg;
            };
        },
        "binary>": function(left, right, context) {
            return function(scope, locals, assign, inputs) {
                var arg = left(scope, locals, assign, inputs) > right(scope, locals, assign, inputs);
                return context ? {
                    value: arg
                } : arg;
            };
        },
        "binary<=": function(left, right, context) {
            return function(scope, locals, assign, inputs) {
                var arg = left(scope, locals, assign, inputs) <= right(scope, locals, assign, inputs);
                return context ? {
                    value: arg
                } : arg;
            };
        },
        "binary>=": function(left, right, context) {
            return function(scope, locals, assign, inputs) {
                var arg = left(scope, locals, assign, inputs) >= right(scope, locals, assign, inputs);
                return context ? {
                    value: arg
                } : arg;
            };
        },
        "binary&&": function(left, right, context) {
            return function(scope, locals, assign, inputs) {
                var arg = left(scope, locals, assign, inputs) && right(scope, locals, assign, inputs);
                return context ? {
                    value: arg
                } : arg;
            };
        },
        "binary||": function(left, right, context) {
            return function(scope, locals, assign, inputs) {
                var arg = left(scope, locals, assign, inputs) || right(scope, locals, assign, inputs);
                return context ? {
                    value: arg
                } : arg;
            };
        },
        "ternary?:": function(test, alternate, consequent, context) {
            return function(scope, locals, assign, inputs) {
                var arg = test(scope, locals, assign, inputs) ? alternate(scope, locals, assign, inputs) : consequent(scope, locals, assign, inputs);
                return context ? {
                    value: arg
                } : arg;
            };
        },
        value: function(value, context) {
            return function() {
                return context ? {
                    context: void 0,
                    name: void 0,
                    value: value
                } : value;
            };
        },
        identifier: function(name, expensiveChecks, context, create, expression) {
            return function(scope, locals) {
                var base = locals && name in locals ? locals : scope;
                create && 1 !== create && base && !base[name] && (base[name] = {});
                var value = base ? base[name] : void 0;
                return expensiveChecks && ensureSafeObject(value, expression), context ? {
                    context: base,
                    name: name,
                    value: value
                } : value;
            };
        },
        computedMember: function(left, right, context, create, expression) {
            return function(scope, locals, assign, inputs) {
                var rhs, value, lhs = left(scope, locals, assign, inputs);
                return null != lhs && (rhs = right(scope, locals, assign, inputs), rhs = getStringValue(rhs), 
                ensureSafeMemberName(rhs, expression), create && 1 !== create && (ensureSafeAssignContext(lhs), 
                lhs && !lhs[rhs] && (lhs[rhs] = {})), value = lhs[rhs], ensureSafeObject(value, expression)), 
                context ? {
                    context: lhs,
                    name: rhs,
                    value: value
                } : value;
            };
        },
        nonComputedMember: function(left, right, expensiveChecks, context, create, expression) {
            return function(scope, locals, assign, inputs) {
                var lhs = left(scope, locals, assign, inputs);
                create && 1 !== create && (ensureSafeAssignContext(lhs), lhs && !lhs[right] && (lhs[right] = {}));
                var value = null != lhs ? lhs[right] : void 0;
                return (expensiveChecks || isPossiblyDangerousMemberName(right)) && ensureSafeObject(value, expression), 
                context ? {
                    context: lhs,
                    name: right,
                    value: value
                } : value;
            };
        },
        inputs: function(input, watchId) {
            return function(scope, value, locals, inputs) {
                return inputs ? inputs[watchId] : input(scope, value, locals);
            };
        }
    };
    var Parser = function(lexer, $filter, options) {
        this.lexer = lexer, this.$filter = $filter, this.options = options, this.ast = new AST(lexer, options), 
        this.astCompiler = options.csp ? new ASTInterpreter(this.ast, $filter) : new ASTCompiler(this.ast, $filter);
    };
    Parser.prototype = {
        constructor: Parser,
        parse: function(text) {
            return this.astCompiler.compile(text, this.options.expensiveChecks);
        }
    };
    var objectValueOf = Object.prototype.valueOf, $sceMinErr = minErr("$sce"), SCE_CONTEXTS = {
        HTML: "html",
        CSS: "css",
        URL: "url",
        RESOURCE_URL: "resourceUrl",
        JS: "js"
    }, $templateRequestMinErr = minErr("$compile"), urlParsingNode = window.document.createElement("a"), originUrl = urlResolve(window.location.href);
    $$CookieReader.$inject = [ "$document" ], $FilterProvider.$inject = [ "$provide" ];
    var MAX_DIGITS = 22, DECIMAL_SEP = ".", ZERO_CHAR = "0";
    currencyFilter.$inject = [ "$locale" ], numberFilter.$inject = [ "$locale" ];
    var DATE_FORMATS = {
        yyyy: dateGetter("FullYear", 4, 0, !1, !0),
        yy: dateGetter("FullYear", 2, 0, !0, !0),
        y: dateGetter("FullYear", 1, 0, !1, !0),
        MMMM: dateStrGetter("Month"),
        MMM: dateStrGetter("Month", !0),
        MM: dateGetter("Month", 2, 1),
        M: dateGetter("Month", 1, 1),
        LLLL: dateStrGetter("Month", !1, !0),
        dd: dateGetter("Date", 2),
        d: dateGetter("Date", 1),
        HH: dateGetter("Hours", 2),
        H: dateGetter("Hours", 1),
        hh: dateGetter("Hours", 2, -12),
        h: dateGetter("Hours", 1, -12),
        mm: dateGetter("Minutes", 2),
        m: dateGetter("Minutes", 1),
        ss: dateGetter("Seconds", 2),
        s: dateGetter("Seconds", 1),
        sss: dateGetter("Milliseconds", 3),
        EEEE: dateStrGetter("Day"),
        EEE: dateStrGetter("Day", !0),
        a: ampmGetter,
        Z: timeZoneGetter,
        ww: weekGetter(2),
        w: weekGetter(1),
        G: eraGetter,
        GG: eraGetter,
        GGG: eraGetter,
        GGGG: longEraGetter
    }, DATE_FORMATS_SPLIT = /((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/, NUMBER_STRING = /^\-?\d+$/;
    dateFilter.$inject = [ "$locale" ];
    var lowercaseFilter = valueFn(lowercase), uppercaseFilter = valueFn(uppercase);
    orderByFilter.$inject = [ "$parse" ];
    var htmlAnchorDirective = valueFn({
        restrict: "E",
        compile: function(element, attr) {
            return attr.href || attr.xlinkHref ? void 0 : function(scope, element) {
                if ("a" === element[0].nodeName.toLowerCase()) {
                    var href = "[object SVGAnimatedString]" === toString.call(element.prop("href")) ? "xlink:href" : "href";
                    element.on("click", function(event) {
                        element.attr(href) || event.preventDefault();
                    });
                }
            };
        }
    }), ngAttributeAliasDirectives = {};
    forEach(BOOLEAN_ATTR, function(propName, attrName) {
        function defaultLinkFn(scope, element, attr) {
            scope.$watch(attr[normalized], function(value) {
                attr.$set(attrName, !!value);
            });
        }
        if ("multiple" != propName) {
            var normalized = directiveNormalize("ng-" + attrName), linkFn = defaultLinkFn;
            "checked" === propName && (linkFn = function(scope, element, attr) {
                attr.ngModel !== attr[normalized] && defaultLinkFn(scope, element, attr);
            }), ngAttributeAliasDirectives[normalized] = function() {
                return {
                    restrict: "A",
                    priority: 100,
                    link: linkFn
                };
            };
        }
    }), forEach(ALIASED_ATTR, function(htmlAttr, ngAttr) {
        ngAttributeAliasDirectives[ngAttr] = function() {
            return {
                priority: 100,
                link: function(scope, element, attr) {
                    if ("ngPattern" === ngAttr && "/" == attr.ngPattern.charAt(0)) {
                        var match = attr.ngPattern.match(REGEX_STRING_REGEXP);
                        if (match) return void attr.$set("ngPattern", new RegExp(match[1], match[2]));
                    }
                    scope.$watch(attr[ngAttr], function(value) {
                        attr.$set(ngAttr, value);
                    });
                }
            };
        };
    }), forEach([ "src", "srcset", "href" ], function(attrName) {
        var normalized = directiveNormalize("ng-" + attrName);
        ngAttributeAliasDirectives[normalized] = function() {
            return {
                priority: 99,
                link: function(scope, element, attr) {
                    var propName = attrName, name = attrName;
                    "href" === attrName && "[object SVGAnimatedString]" === toString.call(element.prop("href")) && (name = "xlinkHref", 
                    attr.$attr[name] = "xlink:href", propName = null), attr.$observe(normalized, function(value) {
                        return value ? (attr.$set(name, value), void (msie && propName && element.prop(propName, attr[name]))) : void ("href" === attrName && attr.$set(name, null));
                    });
                }
            };
        };
    });
    var nullFormCtrl = {
        $addControl: noop,
        $$renameControl: nullFormRenameControl,
        $removeControl: noop,
        $setValidity: noop,
        $setDirty: noop,
        $setPristine: noop,
        $setSubmitted: noop
    }, SUBMITTED_CLASS = "ng-submitted";
    FormController.$inject = [ "$element", "$attrs", "$scope", "$animate", "$interpolate" ];
    var formDirectiveFactory = function(isNgForm) {
        return [ "$timeout", "$parse", function($timeout, $parse) {
            function getSetter(expression) {
                return "" === expression ? $parse('this[""]').assign : $parse(expression).assign || noop;
            }
            var formDirective = {
                name: "form",
                restrict: isNgForm ? "EAC" : "E",
                require: [ "form", "^^?form" ],
                controller: FormController,
                compile: function(formElement, attr) {
                    formElement.addClass(PRISTINE_CLASS).addClass(VALID_CLASS);
                    var nameAttr = attr.name ? "name" : isNgForm && attr.ngForm ? "ngForm" : !1;
                    return {
                        pre: function(scope, formElement, attr, ctrls) {
                            var controller = ctrls[0];
                            if (!("action" in attr)) {
                                var handleFormSubmission = function(event) {
                                    scope.$apply(function() {
                                        controller.$commitViewValue(), controller.$setSubmitted();
                                    }), event.preventDefault();
                                };
                                addEventListenerFn(formElement[0], "submit", handleFormSubmission), formElement.on("$destroy", function() {
                                    $timeout(function() {
                                        removeEventListenerFn(formElement[0], "submit", handleFormSubmission);
                                    }, 0, !1);
                                });
                            }
                            var parentFormCtrl = ctrls[1] || controller.$$parentForm;
                            parentFormCtrl.$addControl(controller);
                            var setter = nameAttr ? getSetter(controller.$name) : noop;
                            nameAttr && (setter(scope, controller), attr.$observe(nameAttr, function(newValue) {
                                controller.$name !== newValue && (setter(scope, void 0), controller.$$parentForm.$$renameControl(controller, newValue), 
                                (setter = getSetter(controller.$name))(scope, controller));
                            })), formElement.on("$destroy", function() {
                                controller.$$parentForm.$removeControl(controller), setter(scope, void 0), extend(controller, nullFormCtrl);
                            });
                        }
                    };
                }
            };
            return formDirective;
        } ];
    }, formDirective = formDirectiveFactory(), ngFormDirective = formDirectiveFactory(!0), ISO_DATE_REGEXP = /^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/, URL_REGEXP = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:\/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i, EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/, NUMBER_REGEXP = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/, DATE_REGEXP = /^(\d{4,})-(\d{2})-(\d{2})$/, DATETIMELOCAL_REGEXP = /^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, WEEK_REGEXP = /^(\d{4,})-W(\d\d)$/, MONTH_REGEXP = /^(\d{4,})-(\d\d)$/, TIME_REGEXP = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, PARTIAL_VALIDATION_EVENTS = "keydown wheel mousedown", PARTIAL_VALIDATION_TYPES = createMap();
    forEach("date,datetime-local,month,time,week".split(","), function(type) {
        PARTIAL_VALIDATION_TYPES[type] = !0;
    });
    var inputType = {
        text: textInputType,
        date: createDateInputType("date", DATE_REGEXP, createDateParser(DATE_REGEXP, [ "yyyy", "MM", "dd" ]), "yyyy-MM-dd"),
        "datetime-local": createDateInputType("datetimelocal", DATETIMELOCAL_REGEXP, createDateParser(DATETIMELOCAL_REGEXP, [ "yyyy", "MM", "dd", "HH", "mm", "ss", "sss" ]), "yyyy-MM-ddTHH:mm:ss.sss"),
        time: createDateInputType("time", TIME_REGEXP, createDateParser(TIME_REGEXP, [ "HH", "mm", "ss", "sss" ]), "HH:mm:ss.sss"),
        week: createDateInputType("week", WEEK_REGEXP, weekParser, "yyyy-Www"),
        month: createDateInputType("month", MONTH_REGEXP, createDateParser(MONTH_REGEXP, [ "yyyy", "MM" ]), "yyyy-MM"),
        number: numberInputType,
        url: urlInputType,
        email: emailInputType,
        radio: radioInputType,
        checkbox: checkboxInputType,
        hidden: noop,
        button: noop,
        submit: noop,
        reset: noop,
        file: noop
    }, inputDirective = [ "$browser", "$sniffer", "$filter", "$parse", function($browser, $sniffer, $filter, $parse) {
        return {
            restrict: "E",
            require: [ "?ngModel" ],
            link: {
                pre: function(scope, element, attr, ctrls) {
                    ctrls[0] && (inputType[lowercase(attr.type)] || inputType.text)(scope, element, attr, ctrls[0], $sniffer, $browser, $filter, $parse);
                }
            }
        };
    } ], CONSTANT_VALUE_REGEXP = /^(true|false|\d+)$/, ngValueDirective = function() {
        return {
            restrict: "A",
            priority: 100,
            compile: function(tpl, tplAttr) {
                return CONSTANT_VALUE_REGEXP.test(tplAttr.ngValue) ? function(scope, elm, attr) {
                    attr.$set("value", scope.$eval(attr.ngValue));
                } : function(scope, elm, attr) {
                    scope.$watch(attr.ngValue, function(value) {
                        attr.$set("value", value);
                    });
                };
            }
        };
    }, ngBindDirective = [ "$compile", function($compile) {
        return {
            restrict: "AC",
            compile: function(templateElement) {
                return $compile.$$addBindingClass(templateElement), function(scope, element, attr) {
                    $compile.$$addBindingInfo(element, attr.ngBind), element = element[0], scope.$watch(attr.ngBind, function(value) {
                        element.textContent = isUndefined(value) ? "" : value;
                    });
                };
            }
        };
    } ], ngBindTemplateDirective = [ "$interpolate", "$compile", function($interpolate, $compile) {
        return {
            compile: function(templateElement) {
                return $compile.$$addBindingClass(templateElement), function(scope, element, attr) {
                    var interpolateFn = $interpolate(element.attr(attr.$attr.ngBindTemplate));
                    $compile.$$addBindingInfo(element, interpolateFn.expressions), element = element[0], 
                    attr.$observe("ngBindTemplate", function(value) {
                        element.textContent = isUndefined(value) ? "" : value;
                    });
                };
            }
        };
    } ], ngBindHtmlDirective = [ "$sce", "$parse", "$compile", function($sce, $parse, $compile) {
        return {
            restrict: "A",
            compile: function(tElement, tAttrs) {
                var ngBindHtmlGetter = $parse(tAttrs.ngBindHtml), ngBindHtmlWatch = $parse(tAttrs.ngBindHtml, function(val) {
                    return $sce.valueOf(val);
                });
                return $compile.$$addBindingClass(tElement), function(scope, element, attr) {
                    $compile.$$addBindingInfo(element, attr.ngBindHtml), scope.$watch(ngBindHtmlWatch, function() {
                        var value = ngBindHtmlGetter(scope);
                        element.html($sce.getTrustedHtml(value) || "");
                    });
                };
            }
        };
    } ], ngChangeDirective = valueFn({
        restrict: "A",
        require: "ngModel",
        link: function(scope, element, attr, ctrl) {
            ctrl.$viewChangeListeners.push(function() {
                scope.$eval(attr.ngChange);
            });
        }
    }), ngClassDirective = classDirective("", !0), ngClassOddDirective = classDirective("Odd", 0), ngClassEvenDirective = classDirective("Even", 1), ngCloakDirective = ngDirective({
        compile: function(element, attr) {
            attr.$set("ngCloak", void 0), element.removeClass("ng-cloak");
        }
    }), ngControllerDirective = [ function() {
        return {
            restrict: "A",
            scope: !0,
            controller: "@",
            priority: 500
        };
    } ], ngEventDirectives = {}, forceAsyncEvents = {
        blur: !0,
        focus: !0
    };
    forEach("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(eventName) {
        var directiveName = directiveNormalize("ng-" + eventName);
        ngEventDirectives[directiveName] = [ "$parse", "$rootScope", function($parse, $rootScope) {
            return {
                restrict: "A",
                compile: function($element, attr) {
                    var fn = $parse(attr[directiveName], null, !0);
                    return function(scope, element) {
                        element.on(eventName, function(event) {
                            var callback = function() {
                                fn(scope, {
                                    $event: event
                                });
                            };
                            forceAsyncEvents[eventName] && $rootScope.$$phase ? scope.$evalAsync(callback) : scope.$apply(callback);
                        });
                    };
                }
            };
        } ];
    });
    var ngIfDirective = [ "$animate", "$compile", function($animate, $compile) {
        return {
            multiElement: !0,
            transclude: "element",
            priority: 600,
            terminal: !0,
            restrict: "A",
            $$tlb: !0,
            link: function($scope, $element, $attr, ctrl, $transclude) {
                var block, childScope, previousElements;
                $scope.$watch($attr.ngIf, function(value) {
                    value ? childScope || $transclude(function(clone, newScope) {
                        childScope = newScope, clone[clone.length++] = $compile.$$createComment("end ngIf", $attr.ngIf), 
                        block = {
                            clone: clone
                        }, $animate.enter(clone, $element.parent(), $element);
                    }) : (previousElements && (previousElements.remove(), previousElements = null), 
                    childScope && (childScope.$destroy(), childScope = null), block && (previousElements = getBlockNodes(block.clone), 
                    $animate.leave(previousElements).then(function() {
                        previousElements = null;
                    }), block = null));
                });
            }
        };
    } ], ngIncludeDirective = [ "$templateRequest", "$anchorScroll", "$animate", function($templateRequest, $anchorScroll, $animate) {
        return {
            restrict: "ECA",
            priority: 400,
            terminal: !0,
            transclude: "element",
            controller: angular.noop,
            compile: function(element, attr) {
                var srcExp = attr.ngInclude || attr.src, onloadExp = attr.onload || "", autoScrollExp = attr.autoscroll;
                return function(scope, $element, $attr, ctrl, $transclude) {
                    var currentScope, previousElement, currentElement, changeCounter = 0, cleanupLastIncludeContent = function() {
                        previousElement && (previousElement.remove(), previousElement = null), currentScope && (currentScope.$destroy(), 
                        currentScope = null), currentElement && ($animate.leave(currentElement).then(function() {
                            previousElement = null;
                        }), previousElement = currentElement, currentElement = null);
                    };
                    scope.$watch(srcExp, function(src) {
                        var afterAnimation = function() {
                            !isDefined(autoScrollExp) || autoScrollExp && !scope.$eval(autoScrollExp) || $anchorScroll();
                        }, thisChangeId = ++changeCounter;
                        src ? ($templateRequest(src, !0).then(function(response) {
                            if (!scope.$$destroyed && thisChangeId === changeCounter) {
                                var newScope = scope.$new();
                                ctrl.template = response;
                                var clone = $transclude(newScope, function(clone) {
                                    cleanupLastIncludeContent(), $animate.enter(clone, null, $element).then(afterAnimation);
                                });
                                currentScope = newScope, currentElement = clone, currentScope.$emit("$includeContentLoaded", src), 
                                scope.$eval(onloadExp);
                            }
                        }, function() {
                            scope.$$destroyed || thisChangeId === changeCounter && (cleanupLastIncludeContent(), 
                            scope.$emit("$includeContentError", src));
                        }), scope.$emit("$includeContentRequested", src)) : (cleanupLastIncludeContent(), 
                        ctrl.template = null);
                    });
                };
            }
        };
    } ], ngIncludeFillContentDirective = [ "$compile", function($compile) {
        return {
            restrict: "ECA",
            priority: -400,
            require: "ngInclude",
            link: function(scope, $element, $attr, ctrl) {
                return toString.call($element[0]).match(/SVG/) ? ($element.empty(), void $compile(jqLiteBuildFragment(ctrl.template, window.document).childNodes)(scope, function(clone) {
                    $element.append(clone);
                }, {
                    futureParentElement: $element
                })) : ($element.html(ctrl.template), void $compile($element.contents())(scope));
            }
        };
    } ], ngInitDirective = ngDirective({
        priority: 450,
        compile: function() {
            return {
                pre: function(scope, element, attrs) {
                    scope.$eval(attrs.ngInit);
                }
            };
        }
    }), ngListDirective = function() {
        return {
            restrict: "A",
            priority: 100,
            require: "ngModel",
            link: function(scope, element, attr, ctrl) {
                var ngList = element.attr(attr.$attr.ngList) || ", ", trimValues = "false" !== attr.ngTrim, separator = trimValues ? trim(ngList) : ngList, parse = function(viewValue) {
                    if (!isUndefined(viewValue)) {
                        var list = [];
                        return viewValue && forEach(viewValue.split(separator), function(value) {
                            value && list.push(trimValues ? trim(value) : value);
                        }), list;
                    }
                };
                ctrl.$parsers.push(parse), ctrl.$formatters.push(function(value) {
                    return isArray(value) ? value.join(ngList) : void 0;
                }), ctrl.$isEmpty = function(value) {
                    return !value || !value.length;
                };
            }
        };
    }, VALID_CLASS = "ng-valid", INVALID_CLASS = "ng-invalid", PRISTINE_CLASS = "ng-pristine", DIRTY_CLASS = "ng-dirty", UNTOUCHED_CLASS = "ng-untouched", TOUCHED_CLASS = "ng-touched", PENDING_CLASS = "ng-pending", EMPTY_CLASS = "ng-empty", NOT_EMPTY_CLASS = "ng-not-empty", ngModelMinErr = minErr("ngModel"), NgModelController = [ "$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function($scope, $exceptionHandler, $attr, $element, $parse, $animate, $timeout, $rootScope, $q, $interpolate) {
        this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$$rawModelValue = void 0, 
        this.$validators = {}, this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], 
        this.$viewChangeListeners = [], this.$untouched = !0, this.$touched = !1, this.$pristine = !0, 
        this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, 
        this.$pending = void 0, this.$name = $interpolate($attr.name || "", !1)($scope), 
        this.$$parentForm = nullFormCtrl;
        var parserValid, parsedNgModel = $parse($attr.ngModel), parsedNgModelAssign = parsedNgModel.assign, ngModelGet = parsedNgModel, ngModelSet = parsedNgModelAssign, pendingDebounce = null, ctrl = this;
        this.$$setOptions = function(options) {
            if (ctrl.$options = options, options && options.getterSetter) {
                var invokeModelGetter = $parse($attr.ngModel + "()"), invokeModelSetter = $parse($attr.ngModel + "($$$p)");
                ngModelGet = function($scope) {
                    var modelValue = parsedNgModel($scope);
                    return isFunction(modelValue) && (modelValue = invokeModelGetter($scope)), modelValue;
                }, ngModelSet = function($scope, newValue) {
                    isFunction(parsedNgModel($scope)) ? invokeModelSetter($scope, {
                        $$$p: newValue
                    }) : parsedNgModelAssign($scope, newValue);
                };
            } else if (!parsedNgModel.assign) throw ngModelMinErr("nonassign", "Expression '{0}' is non-assignable. Element: {1}", $attr.ngModel, startingTag($element));
        }, this.$render = noop, this.$isEmpty = function(value) {
            return isUndefined(value) || "" === value || null === value || value !== value;
        }, this.$$updateEmptyClasses = function(value) {
            ctrl.$isEmpty(value) ? ($animate.removeClass($element, NOT_EMPTY_CLASS), $animate.addClass($element, EMPTY_CLASS)) : ($animate.removeClass($element, EMPTY_CLASS), 
            $animate.addClass($element, NOT_EMPTY_CLASS));
        };
        var currentValidationRunId = 0;
        addSetValidityMethod({
            ctrl: this,
            $element: $element,
            set: function(object, property) {
                object[property] = !0;
            },
            unset: function(object, property) {
                delete object[property];
            },
            $animate: $animate
        }), this.$setPristine = function() {
            ctrl.$dirty = !1, ctrl.$pristine = !0, $animate.removeClass($element, DIRTY_CLASS), 
            $animate.addClass($element, PRISTINE_CLASS);
        }, this.$setDirty = function() {
            ctrl.$dirty = !0, ctrl.$pristine = !1, $animate.removeClass($element, PRISTINE_CLASS), 
            $animate.addClass($element, DIRTY_CLASS), ctrl.$$parentForm.$setDirty();
        }, this.$setUntouched = function() {
            ctrl.$touched = !1, ctrl.$untouched = !0, $animate.setClass($element, UNTOUCHED_CLASS, TOUCHED_CLASS);
        }, this.$setTouched = function() {
            ctrl.$touched = !0, ctrl.$untouched = !1, $animate.setClass($element, TOUCHED_CLASS, UNTOUCHED_CLASS);
        }, this.$rollbackViewValue = function() {
            $timeout.cancel(pendingDebounce), ctrl.$viewValue = ctrl.$$lastCommittedViewValue, 
            ctrl.$render();
        }, this.$validate = function() {
            if (!isNumber(ctrl.$modelValue) || !isNaN(ctrl.$modelValue)) {
                var viewValue = ctrl.$$lastCommittedViewValue, modelValue = ctrl.$$rawModelValue, prevValid = ctrl.$valid, prevModelValue = ctrl.$modelValue, allowInvalid = ctrl.$options && ctrl.$options.allowInvalid;
                ctrl.$$runValidators(modelValue, viewValue, function(allValid) {
                    allowInvalid || prevValid === allValid || (ctrl.$modelValue = allValid ? modelValue : void 0, 
                    ctrl.$modelValue !== prevModelValue && ctrl.$$writeModelToScope());
                });
            }
        }, this.$$runValidators = function(modelValue, viewValue, doneCallback) {
            function processParseErrors() {
                var errorKey = ctrl.$$parserName || "parse";
                return isUndefined(parserValid) ? (setValidity(errorKey, null), !0) : (parserValid || (forEach(ctrl.$validators, function(v, name) {
                    setValidity(name, null);
                }), forEach(ctrl.$asyncValidators, function(v, name) {
                    setValidity(name, null);
                })), setValidity(errorKey, parserValid), parserValid);
            }
            function processSyncValidators() {
                var syncValidatorsValid = !0;
                return forEach(ctrl.$validators, function(validator, name) {
                    var result = validator(modelValue, viewValue);
                    syncValidatorsValid = syncValidatorsValid && result, setValidity(name, result);
                }), syncValidatorsValid ? !0 : (forEach(ctrl.$asyncValidators, function(v, name) {
                    setValidity(name, null);
                }), !1);
            }
            function processAsyncValidators() {
                var validatorPromises = [], allValid = !0;
                forEach(ctrl.$asyncValidators, function(validator, name) {
                    var promise = validator(modelValue, viewValue);
                    if (!isPromiseLike(promise)) throw ngModelMinErr("nopromise", "Expected asynchronous validator to return a promise but got '{0}' instead.", promise);
                    setValidity(name, void 0), validatorPromises.push(promise.then(function() {
                        setValidity(name, !0);
                    }, function() {
                        allValid = !1, setValidity(name, !1);
                    }));
                }), validatorPromises.length ? $q.all(validatorPromises).then(function() {
                    validationDone(allValid);
                }, noop) : validationDone(!0);
            }
            function setValidity(name, isValid) {
                localValidationRunId === currentValidationRunId && ctrl.$setValidity(name, isValid);
            }
            function validationDone(allValid) {
                localValidationRunId === currentValidationRunId && doneCallback(allValid);
            }
            currentValidationRunId++;
            var localValidationRunId = currentValidationRunId;
            return processParseErrors() && processSyncValidators() ? void processAsyncValidators() : void validationDone(!1);
        }, this.$commitViewValue = function() {
            var viewValue = ctrl.$viewValue;
            $timeout.cancel(pendingDebounce), (ctrl.$$lastCommittedViewValue !== viewValue || "" === viewValue && ctrl.$$hasNativeValidators) && (ctrl.$$updateEmptyClasses(viewValue), 
            ctrl.$$lastCommittedViewValue = viewValue, ctrl.$pristine && this.$setDirty(), this.$$parseAndValidate());
        }, this.$$parseAndValidate = function() {
            function writeToModelIfNeeded() {
                ctrl.$modelValue !== prevModelValue && ctrl.$$writeModelToScope();
            }
            var viewValue = ctrl.$$lastCommittedViewValue, modelValue = viewValue;
            if (parserValid = isUndefined(modelValue) ? void 0 : !0) for (var i = 0; i < ctrl.$parsers.length; i++) if (modelValue = ctrl.$parsers[i](modelValue), 
            isUndefined(modelValue)) {
                parserValid = !1;
                break;
            }
            isNumber(ctrl.$modelValue) && isNaN(ctrl.$modelValue) && (ctrl.$modelValue = ngModelGet($scope));
            var prevModelValue = ctrl.$modelValue, allowInvalid = ctrl.$options && ctrl.$options.allowInvalid;
            ctrl.$$rawModelValue = modelValue, allowInvalid && (ctrl.$modelValue = modelValue, 
            writeToModelIfNeeded()), ctrl.$$runValidators(modelValue, ctrl.$$lastCommittedViewValue, function(allValid) {
                allowInvalid || (ctrl.$modelValue = allValid ? modelValue : void 0, writeToModelIfNeeded());
            });
        }, this.$$writeModelToScope = function() {
            ngModelSet($scope, ctrl.$modelValue), forEach(ctrl.$viewChangeListeners, function(listener) {
                try {
                    listener();
                } catch (e) {
                    $exceptionHandler(e);
                }
            });
        }, this.$setViewValue = function(value, trigger) {
            ctrl.$viewValue = value, (!ctrl.$options || ctrl.$options.updateOnDefault) && ctrl.$$debounceViewValueCommit(trigger);
        }, this.$$debounceViewValueCommit = function(trigger) {
            var debounce, debounceDelay = 0, options = ctrl.$options;
            options && isDefined(options.debounce) && (debounce = options.debounce, isNumber(debounce) ? debounceDelay = debounce : isNumber(debounce[trigger]) ? debounceDelay = debounce[trigger] : isNumber(debounce["default"]) && (debounceDelay = debounce["default"])), 
            $timeout.cancel(pendingDebounce), debounceDelay ? pendingDebounce = $timeout(function() {
                ctrl.$commitViewValue();
            }, debounceDelay) : $rootScope.$$phase ? ctrl.$commitViewValue() : $scope.$apply(function() {
                ctrl.$commitViewValue();
            });
        }, $scope.$watch(function() {
            var modelValue = ngModelGet($scope);
            if (modelValue !== ctrl.$modelValue && (ctrl.$modelValue === ctrl.$modelValue || modelValue === modelValue)) {
                ctrl.$modelValue = ctrl.$$rawModelValue = modelValue, parserValid = void 0;
                for (var formatters = ctrl.$formatters, idx = formatters.length, viewValue = modelValue; idx--; ) viewValue = formatters[idx](viewValue);
                ctrl.$viewValue !== viewValue && (ctrl.$$updateEmptyClasses(viewValue), ctrl.$viewValue = ctrl.$$lastCommittedViewValue = viewValue, 
                ctrl.$render(), ctrl.$$runValidators(modelValue, viewValue, noop));
            }
            return modelValue;
        });
    } ], ngModelDirective = [ "$rootScope", function($rootScope) {
        return {
            restrict: "A",
            require: [ "ngModel", "^?form", "^?ngModelOptions" ],
            controller: NgModelController,
            priority: 1,
            compile: function(element) {
                return element.addClass(PRISTINE_CLASS).addClass(UNTOUCHED_CLASS).addClass(VALID_CLASS), 
                {
                    pre: function(scope, element, attr, ctrls) {
                        var modelCtrl = ctrls[0], formCtrl = ctrls[1] || modelCtrl.$$parentForm;
                        modelCtrl.$$setOptions(ctrls[2] && ctrls[2].$options), formCtrl.$addControl(modelCtrl), 
                        attr.$observe("name", function(newValue) {
                            modelCtrl.$name !== newValue && modelCtrl.$$parentForm.$$renameControl(modelCtrl, newValue);
                        }), scope.$on("$destroy", function() {
                            modelCtrl.$$parentForm.$removeControl(modelCtrl);
                        });
                    },
                    post: function(scope, element, attr, ctrls) {
                        var modelCtrl = ctrls[0];
                        modelCtrl.$options && modelCtrl.$options.updateOn && element.on(modelCtrl.$options.updateOn, function(ev) {
                            modelCtrl.$$debounceViewValueCommit(ev && ev.type);
                        }), element.on("blur", function() {
                            modelCtrl.$touched || ($rootScope.$$phase ? scope.$evalAsync(modelCtrl.$setTouched) : scope.$apply(modelCtrl.$setTouched));
                        });
                    }
                };
            }
        };
    } ], DEFAULT_REGEXP = /(\s+|^)default(\s+|$)/, ngModelOptionsDirective = function() {
        return {
            restrict: "A",
            controller: [ "$scope", "$attrs", function($scope, $attrs) {
                var that = this;
                this.$options = copy($scope.$eval($attrs.ngModelOptions)), isDefined(this.$options.updateOn) ? (this.$options.updateOnDefault = !1, 
                this.$options.updateOn = trim(this.$options.updateOn.replace(DEFAULT_REGEXP, function() {
                    return that.$options.updateOnDefault = !0, " ";
                }))) : this.$options.updateOnDefault = !0;
            } ]
        };
    }, ngNonBindableDirective = ngDirective({
        terminal: !0,
        priority: 1e3
    }), ngOptionsMinErr = minErr("ngOptions"), NG_OPTIONS_REGEXP = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/, ngOptionsDirective = [ "$compile", "$document", "$parse", function($compile, $document, $parse) {
        function parseOptionsExpression(optionsExp, selectElement, scope) {
            function Option(selectValue, viewValue, label, group, disabled) {
                this.selectValue = selectValue, this.viewValue = viewValue, this.label = label, 
                this.group = group, this.disabled = disabled;
            }
            function getOptionValuesKeys(optionValues) {
                var optionValuesKeys;
                if (!keyName && isArrayLike(optionValues)) optionValuesKeys = optionValues; else {
                    optionValuesKeys = [];
                    for (var itemKey in optionValues) optionValues.hasOwnProperty(itemKey) && "$" !== itemKey.charAt(0) && optionValuesKeys.push(itemKey);
                }
                return optionValuesKeys;
            }
            var match = optionsExp.match(NG_OPTIONS_REGEXP);
            if (!match) throw ngOptionsMinErr("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", optionsExp, startingTag(selectElement));
            var valueName = match[5] || match[7], keyName = match[6], selectAs = / as /.test(match[0]) && match[1], trackBy = match[9], valueFn = $parse(match[2] ? match[1] : valueName), selectAsFn = selectAs && $parse(selectAs), viewValueFn = selectAsFn || valueFn, trackByFn = trackBy && $parse(trackBy), getTrackByValueFn = trackBy ? function(value, locals) {
                return trackByFn(scope, locals);
            } : function(value) {
                return hashKey(value);
            }, getTrackByValue = function(value, key) {
                return getTrackByValueFn(value, getLocals(value, key));
            }, displayFn = $parse(match[2] || match[1]), groupByFn = $parse(match[3] || ""), disableWhenFn = $parse(match[4] || ""), valuesFn = $parse(match[8]), locals = {}, getLocals = keyName ? function(value, key) {
                return locals[keyName] = key, locals[valueName] = value, locals;
            } : function(value) {
                return locals[valueName] = value, locals;
            };
            return {
                trackBy: trackBy,
                getTrackByValue: getTrackByValue,
                getWatchables: $parse(valuesFn, function(optionValues) {
                    var watchedArray = [];
                    optionValues = optionValues || [];
                    for (var optionValuesKeys = getOptionValuesKeys(optionValues), optionValuesLength = optionValuesKeys.length, index = 0; optionValuesLength > index; index++) {
                        var key = optionValues === optionValuesKeys ? index : optionValuesKeys[index], value = optionValues[key], locals = getLocals(value, key), selectValue = getTrackByValueFn(value, locals);
                        if (watchedArray.push(selectValue), match[2] || match[1]) {
                            var label = displayFn(scope, locals);
                            watchedArray.push(label);
                        }
                        if (match[4]) {
                            var disableWhen = disableWhenFn(scope, locals);
                            watchedArray.push(disableWhen);
                        }
                    }
                    return watchedArray;
                }),
                getOptions: function() {
                    for (var optionItems = [], selectValueMap = {}, optionValues = valuesFn(scope) || [], optionValuesKeys = getOptionValuesKeys(optionValues), optionValuesLength = optionValuesKeys.length, index = 0; optionValuesLength > index; index++) {
                        var key = optionValues === optionValuesKeys ? index : optionValuesKeys[index], value = optionValues[key], locals = getLocals(value, key), viewValue = viewValueFn(scope, locals), selectValue = getTrackByValueFn(viewValue, locals), label = displayFn(scope, locals), group = groupByFn(scope, locals), disabled = disableWhenFn(scope, locals), optionItem = new Option(selectValue, viewValue, label, group, disabled);
                        optionItems.push(optionItem), selectValueMap[selectValue] = optionItem;
                    }
                    return {
                        items: optionItems,
                        selectValueMap: selectValueMap,
                        getOptionFromViewValue: function(value) {
                            return selectValueMap[getTrackByValue(value)];
                        },
                        getViewValueFromOption: function(option) {
                            return trackBy ? angular.copy(option.viewValue) : option.viewValue;
                        }
                    };
                }
            };
        }
 