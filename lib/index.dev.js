'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var fs = _interopDefault(require('fs'));
var path = _interopDefault(require('path'));
var crypto = _interopDefault(require('crypto'));
var mimeTypes = _interopDefault(require('mime-types'));
var pathToRegexp = _interopDefault(require('path-to-regexp'));
var jsonJoiConverter = require('json-joi-converter');

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = o[Symbol.iterator]();
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _initializerDefineProperty(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object.keys(descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object.defineProperty(target, property, desc);
    desc = null;
  }

  return desc;
}

var __filename$1 = '/endpoints/SwaggerEndpoint.js';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var runtime_1 = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined$1; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined$1) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined$1;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined$1;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined$1;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined$1, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined$1;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined$1;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined$1;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined$1;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined$1;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   module.exports 
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}
});

var flowRuntime_umd = createCommonjsModule(function (module, exports) {
(function (global, factory) {
	 module.exports = factory() ;
}(commonjsGlobal, (function () {
/**
 * This file exports a dictionary of global primitive types that are shared by all contexts.
 * It is populated in [registerPrimitiveTypes()](./registerPrimitiveTypes.js).
 */

var primitiveTypes = {};

var _regeneratorRuntime = runtime_1;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};





var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();













var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

function makeJSONError(validation) {
  if (!validation.hasErrors()) {
    return;
  }
  var input = validation.input,
      context = validation.context;

  var errors = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = validation.errors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _ref = _step.value;

      var _ref2 = slicedToArray(_ref, 3);

      var path = _ref2[0];
      var message = _ref2[1];
      var expectedType = _ref2[2];

      var expected = expectedType ? expectedType.toString() : null;
      var actual = context.typeOf(_resolvePath(input, path)).toString();
      var field = stringifyPath(validation.path.concat(path));

      var pointer = '/' + path.join('/');

      errors.push({
        pointer: pointer,
        field: field,
        message: message,
        expected: expected,
        actual: actual
      });
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return errors;
}

// Tracks whether we're in validation of cyclic objects.
var cyclicValidation = new WeakMap();
// Tracks whether we're toString() of cyclic objects.


var cyclicToString = new WeakSet();

function inValidationCycle(type, input) {
  try {
    var tracked = cyclicValidation.get(type);
    if (!tracked) {
      return false;
    } else {
      return weakSetHas(tracked, input);
    }
  } catch (e) {
    // some exotic values cannot be checked
    return true;
  }
}

function startValidationCycle(type, input) {
  var tracked = cyclicValidation.get(type);
  if (!tracked) {
    tracked = new WeakSet();
    cyclicValidation.set(type, tracked);
  }
  weakSetAdd(tracked, input);
}

function endValidationCycle(type, input) {
  var tracked = cyclicValidation.get(type);
  if (tracked) {
    weakSetDelete(tracked, input);
  }
}

function inToStringCycle(type) {
  return cyclicToString.has(type);
}

function startToStringCycle(type) {
  cyclicToString.add(type);
}

function endToStringCycle(type) {
  cyclicToString.delete(type);
}

function weakSetHas(weakset, value) {
  try {
    return weakset.has(value);
  } catch (e) {
    return true;
  }
}

function weakSetAdd(weakset, value) {
  try {
    weakset.add(value);
  } catch (e) {}
}

function weakSetDelete(weakset, value) {
  try {
    weakset.delete(value);
  } catch (e) {}
}

var validIdentifierOrAccessor = /^[$A-Z_][0-9A-Z_$[\].]*$/i;

var Validation = function () {
  function Validation(context, input) {
    classCallCheck(this, Validation);
    this.path = [];
    this.prefix = '';
    this.errors = [];
    this.cyclic = new WeakMap();

    this.context = context;
    this.input = input;
  }

  // Tracks whether we're in validation of cyclic objects.


  createClass(Validation, [{
    key: 'inCycle',
    value: function inCycle(type, input) {
      var tracked = this.cyclic.get(type);
      if (!tracked) {
        return false;
      } else {
        return weakSetHas(tracked, input);
      }
    }
  }, {
    key: 'startCycle',
    value: function startCycle(type, input) {
      var tracked = this.cyclic.get(type);
      if (!tracked) {
        tracked = new WeakSet();
        this.cyclic.set(type, tracked);
      }
      weakSetAdd(tracked, input);
    }
  }, {
    key: 'endCycle',
    value: function endCycle(type, input) {
      var tracked = this.cyclic.get(type);
      if (tracked) {
        weakSetDelete(tracked, input);
      }
    }
  }, {
    key: 'hasErrors',
    value: function hasErrors(path) {
      if (path) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.errors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _ref = _step.value;

            var _ref2 = slicedToArray(_ref, 1);

            var candidate = _ref2[0];

            if (matchPath(path, candidate)) {
              return true;
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        return false;
      } else {
        return this.errors.length > 0;
      }
    }
  }, {
    key: 'addError',
    value: function addError(path, expectedType, message) {
      this.errors.push([path, message, expectedType]);
      return this;
    }
  }, {
    key: 'clearError',
    value: function clearError(path) {
      var didClear = false;
      if (path) {
        var _errors = [];
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = this.errors[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var error = _step2.value;

            if (matchPath(path, error[0])) {
              didClear = true;
            } else {
              _errors.push(error);
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        this.errors = _errors;
      } else {
        didClear = this.errors.length > 0;
        this.errors = [];
      }
      return didClear;
    }
  }, {
    key: 'resolvePath',
    value: function resolvePath(path) {
      return _resolvePath(this.input, path);
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return makeJSONError(this);
    }
  }]);
  return Validation;
}();

function stringifyPath(path) {
  if (!path.length) {
    return 'Value';
  }
  var length = path.length;

  var parts = new Array(length);
  for (var i = 0; i < length; i++) {
    var part = path[i];
    if (part === '[[Return Type]]') {
      parts[i] = 'Return Type';
    } else if (typeof part !== 'string' || !validIdentifierOrAccessor.test(part)) {
      parts[i] = '[' + String(part) + ']';
    } else if (i > 0) {
      parts[i] = '.' + String(part);
    } else {
      parts[i] = String(part);
    }
  }
  return parts.join('');
}

function _resolvePath(input, path) {
  var subject = input;
  var length = path.length;

  for (var i = 0; i < length; i++) {
    if (subject == null) {
      return undefined;
    }
    var part = path[i];
    if (part === '[[Return Type]]') {
      continue;
    }
    if (subject instanceof Map) {
      subject = subject.get(part);
    } else {
      subject = subject[part];
    }
  }
  return subject;
}

function matchPath(path, candidate) {
  var length = path.length;

  if (length > candidate.length) {
    return false;
  }
  for (var i = 0; i < length; i++) {
    if (candidate[i] !== path[i]) {
      return false;
    }
  }
  return true;
}

var RuntimeTypeError = function (_TypeError) {
  inherits(RuntimeTypeError, _TypeError);

  function RuntimeTypeError(message, options) {
    classCallCheck(this, RuntimeTypeError);

    var _this = possibleConstructorReturn(this, (RuntimeTypeError.__proto__ || Object.getPrototypeOf(RuntimeTypeError)).call(this, message));

    _this.name = "RuntimeTypeError";

    Object.assign(_this, options);
    return _this;
  }

  return RuntimeTypeError;
}(TypeError);

var delimiter = '\n-------------------------------------------------\n\n';

function makeTypeError(validation) {
  if (!validation.hasErrors()) {
    return;
  }
  var prefix = validation.prefix,
      input = validation.input,
      context = validation.context,
      errors = validation.errors;

  var collected = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = errors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _ref = _step.value;

      var _ref2 = slicedToArray(_ref, 3);

      var path = _ref2[0];
      var message = _ref2[1];
      var expectedType = _ref2[2];

      var expected = expectedType ? expectedType.toString() : "*";
      var actual = _resolvePath(input, path);
      var actualType = context.typeOf(actual).toString();

      var field = stringifyPath(validation.path.concat(path));

      var actualAsString = makeString(actual);

      if (typeof actualAsString === 'string') {
        collected.push(field + ' ' + message + '\n\nExpected: ' + expected + '\n\nActual Value: ' + actualAsString + '\n\nActual Type: ' + actualType + '\n');
      } else {
        collected.push(field + ' ' + message + '\n\nExpected: ' + expected + '\n\nActual: ' + actualType + '\n');
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  if (prefix) {
    return new RuntimeTypeError(prefix.trim() + ' ' + collected.join(delimiter), { errors: errors });
  } else {
    return new RuntimeTypeError(collected.join(delimiter), { errors: errors });
  }
}

function makeString(value) {
  if (value === null) {
    return 'null';
  }
  switch (typeof value === 'undefined' ? 'undefined' : _typeof(value)) {
    case 'string':
      return '"' + value + '"';
    // Issue
    case 'symbol':
    case 'number':
    case 'boolean':
    case 'undefined':
      return String(value);
    case 'function':
      return;
    default:
      if (Array.isArray(value) || value.constructor == null || value.constructor === Object) {
        try {
          return JSON.stringify(value, null, 2);
        } catch (e) {
          return;
        }
      }
      return;
  }
}

function makeError(expected, input) {
  var context = expected.context;

  var validation = context.validate(expected, input);
  return makeTypeError(validation);
}

/**
 * Given two types, A and B, compare them and return either -1, 0, or 1:
 *
 *   -1 if A cannot accept type B.
 *
 *    0 if the types are effectively identical.
 *
 *    1 if A accepts every possible B.
 */


function compareTypes(a, b) {
  var result = void 0;

  if (a === b) {
    return 0;
  }

  if (b instanceof TypeAlias || b instanceof TypeParameter || b instanceof TypeParameterApplication || b instanceof TypeTDZ) {
    b = b.unwrap();
  }

  if (a instanceof TypeAlias) {
    result = a.compareWith(b);
  } else if (a instanceof FlowIntoType || a instanceof TypeParameter || b instanceof FlowIntoType) {
    result = a.compareWith(b);
  } else if (a instanceof AnyType || a instanceof ExistentialType || a instanceof MixedType) {
    return 1;
  } else {
    result = a.compareWith(b);
  }

  if (b instanceof AnyType) {
    // Note: This check cannot be moved higher in the scope,
    // as this would prevent types from being propagated upwards.
    return 1;
  } else {
    return result;
  }
}

/**
 * # Type
 *
 * This is the base class for all types.
 */
var Type = function () {
  function Type(context) {
    classCallCheck(this, Type);
    this.typeName = 'Type';

    this.context = context;
  }

  createClass(Type, [{
    key: 'errors',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input) {
      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this);
    })
  }, {
    key: 'accepts',
    value: function accepts(input) {
      var validation = new Validation(this.context, input);
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.errors(validation, [], input)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var error = _step.value;
          // eslint-disable-line no-unused-vars
          return false;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return true;
    }
  }, {
    key: 'acceptsType',
    value: function acceptsType(input) {
      if (compareTypes(this, input) === -1) {
        return false;
      } else {
        return true;
      }
    }
  }, {
    key: 'compareWith',
    value: function compareWith(input) {
      return -1;
    }
  }, {
    key: 'assert',
    value: function assert(input) {
      var error = makeError(this, input);
      if (error) {
        if (typeof Error.captureStackTrace === 'function') {
          Error.captureStackTrace(error, this.assert);
        }
        throw error;
      }
      return input;
    }

    /**
     * Get the inner type.
     */

  }, {
    key: 'unwrap',
    value: function unwrap() {
      return this;
    }
  }, {
    key: 'toString',
    value: function toString() {
      return '$Type';
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return {
        typeName: this.typeName
      };
    }
  }]);
  return Type;
}();

var AnyType = function (_Type) {
  inherits(AnyType, _Type);

  function AnyType() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, AnyType);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = AnyType.__proto__ || Object.getPrototypeOf(AnyType)).call.apply(_ref, [this].concat(args))), _this), _this.typeName = 'AnyType', _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(AnyType, [{
    key: 'errors',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input) {
      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this);
    })
  }, {
    key: 'accepts',
    value: function accepts(input) {
      return true;
    }
  }, {
    key: 'compareWith',
    value: function compareWith(input) {
      return 1;
    }
  }, {
    key: 'toString',
    value: function toString() {
      return 'any';
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return {
        typeName: this.typeName
      };
    }
  }]);
  return AnyType;
}(Type);

var errorMessages = {
  ERR_CONSTRAINT_VIOLATION: 'violated a constraint',
  ERR_EXPECT_ARRAY: 'must be an Array',
  ERR_EXPECT_TRUE: 'must be true',
  ERR_EXPECT_FALSE: 'must be false',
  ERR_EXPECT_BOOLEAN: 'must be true or false',
  ERR_EXPECT_EMPTY: 'must be empty',
  ERR_EXPECT_EXACT_VALUE: 'must be exactly $0',
  ERR_EXPECT_CALLABLE: 'must be callable',
  ERR_EXPECT_CLASS: 'must be a Class of $0',
  ERR_EXPECT_FUNCTION: 'must be a function',
  ERR_EXPECT_GENERATOR: 'must be a generator function',
  ERR_EXPECT_ITERABLE: 'must be iterable',
  ERR_EXPECT_ARGUMENT: 'argument "$0" must be: $1',
  ERR_EXPECT_RETURN: 'expected return type of: $0',
  ERR_EXPECT_N_ARGUMENTS: 'requires $0 argument(s)',
  ERR_EXPECT_INSTANCEOF: 'must be an instance of $0',
  ERR_EXPECT_KEY_TYPE: 'keys must be: $0',
  ERR_EXPECT_NULL: 'must be null',
  ERR_EXPECT_NUMBER: 'must be a number',
  ERR_EXPECT_OBJECT: 'must be an object',
  ERR_EXPECT_PROMISE: 'must be a promise of $0',
  ERR_EXPECT_STRING: 'must be a string',
  ERR_EXPECT_SYMBOL: 'must be a symbol',
  ERR_EXPECT_THIS: 'must be exactly this',
  ERR_EXPECT_VOID: 'must be undefined',
  ERR_INVALID_DATE: 'must be a valid date',
  ERR_MISSING_PROPERTY: 'does not exist on object',
  ERR_NO_INDEXER: 'is not one of the permitted indexer types',
  ERR_NO_UNION: 'must be one of: $0',
  ERR_UNKNOWN_KEY: 'should not contain the key: "$0"'
};

function getErrorMessage(key) {
  for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    params[_key - 1] = arguments[_key];
  }

  var message = errorMessages[key];
  if (params.length > 0) {
    return message.replace(/\$(\d+)/g, function (m, i) {
      return String(params[i]);
    });
  } else {
    return message;
  }
}

var TupleType = function (_Type) {
  inherits(TupleType, _Type);

  function TupleType() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, TupleType);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = TupleType.__proto__ || Object.getPrototypeOf(TupleType)).call.apply(_ref, [this].concat(args))), _this), _this.typeName = 'TupleType', _this.types = [], _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(TupleType, [{
    key: 'errors',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input) {
      var types, length, context, i;
      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              types = this.types;
              length = types.length;
              context = this.context;

              if (context.checkPredicate('Array', input)) {
                _context.next = 7;
                break;
              }

              _context.next = 6;
              return [path, getErrorMessage('ERR_EXPECT_ARRAY'), this];

            case 6:
              return _context.abrupt('return');

            case 7:
              i = 0;

            case 8:
              if (!(i < length)) {
                _context.next = 13;
                break;
              }

              return _context.delegateYield(types[i].errors(validation, path.concat(i), input[i]), 't0', 10);

            case 10:
              i++;
              _context.next = 8;
              break;

            case 13:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this);
    })
  }, {
    key: 'accepts',
    value: function accepts(input) {
      var types = this.types;
      var length = types.length;
      var context = this.context;


      if (!context.checkPredicate('Array', input) || input.length < length) {
        return false;
      }
      for (var i = 0; i < length; i++) {
        var type = types[i];
        if (!type.accepts(input[i])) {
          return false;
        }
      }
      return true;
    }
  }, {
    key: 'compareWith',
    value: function compareWith(input) {
      if (!(input instanceof TupleType)) {
        return -1;
      }
      var types = this.types;
      var inputTypes = input.types;
      if (inputTypes.length < types.length) {
        return -1;
      }
      var isGreater = false;
      for (var i = 0; i < types.length; i++) {
        var result = compareTypes(types[i], inputTypes[i]);
        if (result === 1) {
          isGreater = true;
        } else if (result === -1) {
          return -1;
        }
      }
      if (types.length < inputTypes.length) {
        return 0;
      } else if (isGreater) {
        return 1;
      } else {
        return 0;
      }
    }
  }, {
    key: 'toString',
    value: function toString() {
      return '[' + this.types.join(', ') + ']';
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return {
        typeName: this.typeName,
        types: this.types
      };
    }
  }]);
  return TupleType;
}(Type);

var ArrayType = function (_Type) {
  inherits(ArrayType, _Type);

  function ArrayType() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, ArrayType);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = ArrayType.__proto__ || Object.getPrototypeOf(ArrayType)).call.apply(_ref, [this].concat(args))), _this), _this.typeName = 'ArrayType', _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(ArrayType, [{
    key: 'errors',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input) {
      var context, elementType, length, i;
      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              context = this.context;

              if (context.checkPredicate('Array', input)) {
                _context.next = 5;
                break;
              }

              _context.next = 4;
              return [path, getErrorMessage('ERR_EXPECT_ARRAY'), this];

            case 4:
              return _context.abrupt('return');

            case 5:
              if (!validation.inCycle(this, input)) {
                _context.next = 7;
                break;
              }

              return _context.abrupt('return');

            case 7:
              validation.startCycle(this, input);
              elementType = this.elementType;
              length = input.length;
              i = 0;

            case 11:
              if (!(i < length)) {
                _context.next = 16;
                break;
              }

              return _context.delegateYield(elementType.errors(validation, path.concat(i), input[i]), 't0', 13);

            case 13:
              i++;
              _context.next = 11;
              break;

            case 16:
              validation.endCycle(this, input);

            case 17:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this);
    })
  }, {
    key: 'accepts',
    value: function accepts(input) {
      var context = this.context;

      if (!context.checkPredicate('Array', input)) {
        return false;
      }
      if (inValidationCycle(this, input)) {
        return true;
      }
      startValidationCycle(this, input);
      var elementType = this.elementType;
      var length = input.length;

      for (var i = 0; i < length; i++) {
        if (!elementType.accepts(input[i])) {
          endValidationCycle(this, input);
          return false;
        }
      }
      endValidationCycle(this, input);
      return true;
    }
  }, {
    key: 'compareWith',
    value: function compareWith(input) {
      var elementType = this.elementType;

      if (input instanceof TupleType) {
        var types = input.types;

        for (var i = 0; i < types.length; i++) {
          var result = compareTypes(elementType, types[i]);
          if (result === -1) {
            return -1;
          }
        }
        return 1;
      } else if (input instanceof ArrayType) {
        return compareTypes(elementType, input.elementType);
      } else {
        return -1;
      }
    }
  }, {
    key: 'toString',
    value: function toString() {
      var elementType = this.elementType;

      if (inToStringCycle(this)) {
        if (typeof elementType.name === 'string') {
          return 'Array<$Cycle<' + elementType.name + '>>';
        } else {
          return 'Array<$Cycle<Object>>';
        }
      }
      startToStringCycle(this);
      var output = 'Array<' + elementType.toString() + '>';
      endToStringCycle(this);
      return output;
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return {
        typeName: this.typeName,
        elementType: this.elementType
      };
    }
  }]);
  return ArrayType;
}(Type);

var BooleanLiteralType = function (_Type) {
  inherits(BooleanLiteralType, _Type);

  function BooleanLiteralType() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, BooleanLiteralType);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = BooleanLiteralType.__proto__ || Object.getPrototypeOf(BooleanLiteralType)).call.apply(_ref, [this].concat(args))), _this), _this.typeName = 'BooleanLiteralType', _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(BooleanLiteralType, [{
    key: 'errors',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input) {
      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(input !== this.value)) {
                _context.next = 3;
                break;
              }

              _context.next = 3;
              return [path, getErrorMessage(this.value ? 'ERR_EXPECT_TRUE' : 'ERR_EXPECT_FALSE'), this];

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this);
    })
  }, {
    key: 'accepts',
    value: function accepts(input) {
      return input === this.value;
    }
  }, {
    key: 'compareWith',
    value: function compareWith(input) {
      if (input instanceof BooleanLiteralType && input.value === this.value) {
        return 0;
      } else {
        return -1;
      }
    }
  }, {
    key: 'toString',
    value: function toString() {
      return this.value ? 'true' : 'false';
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return {
        type: this.typeName,
        value: this.value
      };
    }
  }]);
  return BooleanLiteralType;
}(Type);

var BooleanType = function (_Type) {
  inherits(BooleanType, _Type);

  function BooleanType() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, BooleanType);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = BooleanType.__proto__ || Object.getPrototypeOf(BooleanType)).call.apply(_ref, [this].concat(args))), _this), _this.typeName = 'BooleanType', _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(BooleanType, [{
    key: 'errors',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input) {
      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(typeof input !== 'boolean')) {
                _context.next = 3;
                break;
              }

              _context.next = 3;
              return [path, getErrorMessage('ERR_EXPECT_BOOLEAN'), this];

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this);
    })
  }, {
    key: 'accepts',
    value: function accepts(input) {
      return typeof input === 'boolean';
    }
  }, {
    key: 'compareWith',
    value: function compareWith(input) {
      if (input instanceof BooleanLiteralType) {
        return 1;
      } else if (input instanceof BooleanType) {
        return 0;
      } else {
        return -1;
      }
    }
  }, {
    key: 'toString',
    value: function toString() {
      return 'boolean';
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return {
        typeName: this.typeName
      };
    }
  }]);
  return BooleanType;
}(Type);

var EmptyType = function (_Type) {
  inherits(EmptyType, _Type);

  function EmptyType() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, EmptyType);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = EmptyType.__proto__ || Object.getPrototypeOf(EmptyType)).call.apply(_ref, [this].concat(args))), _this), _this.typeName = 'EmptyType', _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(EmptyType, [{
    key: 'errors',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input) {
      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return [path, getErrorMessage('ERR_EXPECT_EMPTY'), this];

            case 2:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this);
    })
  }, {
    key: 'accepts',
    value: function accepts(input) {
      return false; // empty types accepts nothing.
    }
  }, {
    key: 'compareWith',
    value: function compareWith(input) {
      if (input instanceof EmptyType) {
        return 0;
      } else {
        return -1;
      }
    }
  }, {
    key: 'toString',
    value: function toString() {
      return 'empty';
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return {
        typeName: this.typeName
      };
    }
  }]);
  return EmptyType;
}(Type);

var ExistentialType = function (_Type) {
  inherits(ExistentialType, _Type);

  function ExistentialType() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, ExistentialType);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = ExistentialType.__proto__ || Object.getPrototypeOf(ExistentialType)).call.apply(_ref, [this].concat(args))), _this), _this.typeName = 'ExistentialType', _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(ExistentialType, [{
    key: 'errors',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input) {
      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this);
    })
  }, {
    key: 'accepts',
    value: function accepts(input) {
      return true;
    }
  }, {
    key: 'compareWith',
    value: function compareWith(input) {
      return 1;
    }
  }, {
    key: 'toString',
    value: function toString() {
      return '*';
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return {
        typeName: this.typeName
      };
    }
  }]);
  return ExistentialType;
}(Type);

/**
 * # TypeParameterApplication
 *
 */
var TypeParameterApplication = function (_Type) {
  inherits(TypeParameterApplication, _Type);

  function TypeParameterApplication() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, TypeParameterApplication);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = TypeParameterApplication.__proto__ || Object.getPrototypeOf(TypeParameterApplication)).call.apply(_ref, [this].concat(args))), _this), _this.typeName = 'TypeParameterApplication', _this.typeInstances = [], _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(TypeParameterApplication, [{
    key: 'errors',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input) {
      var parent, typeInstances;
      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              parent = this.parent, typeInstances = this.typeInstances;
              return _context.delegateYield(parent.errors.apply(parent, [validation, path, input].concat(toConsumableArray(typeInstances))), 't0', 2);

            case 2:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this);
    })
  }, {
    key: 'accepts',
    value: function accepts(input) {
      var parent = this.parent,
          typeInstances = this.typeInstances;

      return parent.accepts.apply(parent, [input].concat(toConsumableArray(typeInstances)));
    }
  }, {
    key: 'compareWith',
    value: function compareWith(input) {
      var _parent;

      return (_parent = this.parent).compareWith.apply(_parent, [input].concat(toConsumableArray(this.typeInstances)));
    }
  }, {
    key: 'hasProperty',
    value: function hasProperty(name) {
      var inner = this.parent;
      if (inner && typeof inner.hasProperty === 'function') {
        var _ref2;

        return (_ref2 = inner).hasProperty.apply(_ref2, [name].concat(toConsumableArray(this.typeInstances)));
      } else {
        return false;
      }
    }
  }, {
    key: 'getProperty',
    value: function getProperty(name) {
      var inner = this.parent;
      if (inner && typeof inner.getProperty === 'function') {
        var _ref3;

        return (_ref3 = inner).getProperty.apply(_ref3, [name].concat(toConsumableArray(this.typeInstances)));
      }
    }
  }, {
    key: 'unwrap',
    value: function unwrap() {
      var _parent2;

      return (_parent2 = this.parent).unwrap.apply(_parent2, toConsumableArray(this.typeInstances));
    }
  }, {
    key: 'toString',
    value: function toString() {
      var parent = this.parent,
          typeInstances = this.typeInstances;
      var name = parent.name;

      if (typeInstances.length) {
        var items = [];
        for (var i = 0; i < typeInstances.length; i++) {
          var typeInstance = typeInstances[i];
          items.push(typeInstance.toString());
        }
        return name + '<' + items.join(', ') + '>';
      } else {
        return name;
      }
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return {
        typeName: this.typeName,
        typeInstances: this.typeInstances
      };
    }
  }]);
  return TypeParameterApplication;
}(Type);

var _marked = /*#__PURE__*/_regeneratorRuntime.mark(collectConstraintErrors);

/**
 * Add constraints to the given subject type.
 */
function addConstraints(subject) {
  var _subject$constraints;

  for (var _len = arguments.length, constraints = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    constraints[_key - 1] = arguments[_key];
  }

  (_subject$constraints = subject.constraints).push.apply(_subject$constraints, toConsumableArray(constraints));
}

/**
 * Collect any errors from constraints on the given subject type.
 */


function collectConstraintErrors(subject, validation, path) {
  for (var _len2 = arguments.length, input = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
    input[_key2 - 3] = arguments[_key2];
  }

  var constraints, length, i, constraint, violation;
  return _regeneratorRuntime.wrap(function collectConstraintErrors$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          constraints = subject.constraints;
          length = constraints.length;
          i = 0;

        case 3:
          if (!(i < length)) {
            _context.next = 12;
            break;
          }

          constraint = constraints[i];
          violation = constraint.apply(undefined, toConsumableArray(input));

          if (!(typeof violation === 'string')) {
            _context.next = 9;
            break;
          }

          _context.next = 9;
          return [path, violation, this];

        case 9:
          i++;
          _context.next = 3;
          break;

        case 12:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}

/**
 * Determine whether the input passes the constraints on the subject type.
 */
function constraintsAccept(subject) {
  var constraints = subject.constraints;
  var length = constraints.length;

  for (var _len3 = arguments.length, input = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    input[_key3 - 1] = arguments[_key3];
  }

  for (var i = 0; i < length; i++) {
    var constraint = constraints[i];
    if (typeof constraint.apply(undefined, toConsumableArray(input)) === 'string') {
      return false;
    }
  }
  return true;
}

var TypeAlias = function (_Type) {
  inherits(TypeAlias, _Type);

  function TypeAlias() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, TypeAlias);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = TypeAlias.__proto__ || Object.getPrototypeOf(TypeAlias)).call.apply(_ref, [this].concat(args))), _this), _this.typeName = 'TypeAlias', _this.constraints = [], _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(TypeAlias, [{
    key: 'addConstraint',
    value: function addConstraint() {
      for (var _len2 = arguments.length, constraints = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        constraints[_key2] = arguments[_key2];
      }

      addConstraints.apply(undefined, [this].concat(toConsumableArray(constraints)));
      return this;
    }
  }, {
    key: 'errors',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input) {
      var type, hasErrors, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, error;

      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              type = this.type;
              hasErrors = false;
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context.prev = 5;
              _iterator = type.errors(validation, path, input)[Symbol.iterator]();

            case 7:
              if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                _context.next = 15;
                break;
              }

              error = _step.value;

              hasErrors = true;
              _context.next = 12;
              return error;

            case 12:
              _iteratorNormalCompletion = true;
              _context.next = 7;
              break;

            case 15:
              _context.next = 21;
              break;

            case 17:
              _context.prev = 17;
              _context.t0 = _context['catch'](5);
              _didIteratorError = true;
              _iteratorError = _context.t0;

            case 21:
              _context.prev = 21;
              _context.prev = 22;

              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }

            case 24:
              _context.prev = 24;

              if (!_didIteratorError) {
                _context.next = 27;
                break;
              }

              throw _iteratorError;

            case 27:
              return _context.finish(24);

            case 28:
              return _context.finish(21);

            case 29:
              if (hasErrors) {
                _context.next = 31;
                break;
              }

              return _context.delegateYield(collectConstraintErrors(this, validation, path, input), 't1', 31);

            case 31:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this, [[5, 17, 21, 29], [22,, 24, 28]]);
    })
  }, {
    key: 'accepts',
    value: function accepts(input) {
      var type = this.type;

      if (!type.accepts(input)) {
        return false;
      } else if (!constraintsAccept(this, input)) {
        return false;
      } else {
        return true;
      }
    }
  }, {
    key: 'compareWith',
    value: function compareWith(input) {
      if (input === this) {
        return 0; // should never need this because it's taken care of by compareTypes.
      } else if (this.hasConstraints) {
        // if we have constraints the types cannot be the same
        return -1;
      } else {
        return compareTypes(this.type, input);
      }
    }
  }, {
    key: 'apply',
    value: function apply() {
      var target = new TypeParameterApplication(this.context);
      target.parent = this;

      for (var _len3 = arguments.length, typeInstances = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        typeInstances[_key3] = arguments[_key3];
      }

      target.typeInstances = typeInstances;
      return target;
    }

    /**
     * Get the inner type or value.
     */

  }, {
    key: 'unwrap',
    value: function unwrap() {
      return this.type.unwrap();
    }
  }, {
    key: 'hasProperty',
    value: function hasProperty(name) {
      var inner = this.unwrap();
      if (inner && typeof inner.hasProperty === 'function') {
        return inner.hasProperty(name);
      } else {
        return false;
      }
    }
  }, {
    key: 'getProperty',
    value: function getProperty(name) {
      var inner = this.unwrap();
      if (inner && typeof inner.getProperty === 'function') {
        return inner.getProperty(name);
      }
    }
  }, {
    key: 'toString',
    value: function toString(withDeclaration) {
      var name = this.name,
          type = this.type;

      if (withDeclaration) {
        return 'type ' + name + ' = ' + type.toString() + ';';
      } else {
        return name;
      }
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return {
        typeName: this.typeName,
        name: this.name,
        type: this.type
      };
    }
  }, {
    key: 'properties',
    get: function get$$1() {
      return this.type.properties;
    }
  }, {
    key: 'hasConstraints',
    get: function get$$1() {
      return this.constraints.length > 0;
    }
  }]);
  return TypeAlias;
}(Type);

var FlowIntoSymbol = Symbol('FlowInto');

/**
 * # TypeParameter
 *
 * Type parameters allow polymorphic type safety.
 * The first time a type parameter is checked, it records the shape of its input,
 * this recorded shape is used to check all future inputs for this particular instance.
 */

var TypeParameter = function (_Type) {
  inherits(TypeParameter, _Type);

  function TypeParameter() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, TypeParameter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = TypeParameter.__proto__ || Object.getPrototypeOf(TypeParameter)).call.apply(_ref, [this].concat(args))), _this), _this.typeName = 'TypeParameter', _this[FlowIntoSymbol] = null, _temp), possibleConstructorReturn(_this, _ret);
  }

  // Issue 252


  createClass(TypeParameter, [{
    key: 'errors',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input) {
      var boundOrDefault, recorded, context, hasErrors, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, error;

      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              boundOrDefault = this.bound || this.default;
              recorded = this.recorded, context = this.context;

              if (!(boundOrDefault instanceof FlowIntoType || boundOrDefault instanceof TypeAlias)) {
                _context.next = 7;
                break;
              }

              return _context.delegateYield(boundOrDefault.errors(validation, path, input), 't0', 4);

            case 4:
              return _context.abrupt('return');

            case 7:
              if (!recorded) {
                _context.next = 12;
                break;
              }

              return _context.delegateYield(recorded.errors(validation, path, input), 't1', 9);

            case 9:
              return _context.abrupt('return');

            case 12:
              if (!boundOrDefault) {
                _context.next = 47;
                break;
              }

              if (!(boundOrDefault.typeName === 'AnyType' || boundOrDefault.typeName === 'ExistentialType')) {
                _context.next = 17;
                break;
              }

              return _context.abrupt('return');

            case 17:
              hasErrors = false;
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context.prev = 21;
              _iterator = boundOrDefault.errors(validation, path, input)[Symbol.iterator]();

            case 23:
              if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                _context.next = 31;
                break;
              }

              error = _step.value;

              hasErrors = true;
              _context.next = 28;
              return error;

            case 28:
              _iteratorNormalCompletion = true;
              _context.next = 23;
              break;

            case 31:
              _context.next = 37;
              break;

            case 33:
              _context.prev = 33;
              _context.t2 = _context['catch'](21);
              _didIteratorError = true;
              _iteratorError = _context.t2;

            case 37:
              _context.prev = 37;
              _context.prev = 38;

              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }

            case 40:
              _context.prev = 40;

              if (!_didIteratorError) {
                _context.next = 43;
                break;
              }

              throw _iteratorError;

            case 43:
              return _context.finish(40);

            case 44:
              return _context.finish(37);

            case 45:
              if (!hasErrors) {
                _context.next = 47;
                break;
              }

              return _context.abrupt('return');

            case 47:

              this.recorded = context.typeOf(input);

            case 48:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this, [[21, 33, 37, 45], [38,, 40, 44]]);
    })
  }, {
    key: 'accepts',
    value: function accepts(input) {
      var boundOrDefault = this.bound || this.default;
      var recorded = this.recorded,
          context = this.context;

      if (boundOrDefault instanceof FlowIntoType || boundOrDefault instanceof TypeAlias) {
        // We defer to the other type parameter so that values from this
        // one can flow "upwards".
        return boundOrDefault.accepts(input);
      } else if (recorded) {
        return recorded.accepts(input);
      } else if (boundOrDefault) {
        if (boundOrDefault.typeName === "AnyType" || boundOrDefault.typeName === "ExistentialType") {
          return true;
        } else if (!boundOrDefault.accepts(input)) {
          return false;
        }
      }

      this.recorded = context.typeOf(input);
      return true;
    }
  }, {
    key: 'compareWith',
    value: function compareWith(input) {
      var boundOrDefault = this.bound || this.default;
      var recorded = this.recorded;

      if (input instanceof TypeParameter) {
        // We don't need to check for `recorded` or `bound` fields
        // because the input has already been unwrapped, so
        // if we got a type parameter it must be totally generic and
        // we treat it like Any.
        return 1;
      } else if (recorded) {
        return compareTypes(recorded, input);
      } else if (boundOrDefault) {
        return compareTypes(boundOrDefault, input);
      } else {
        // A generic type parameter accepts any input.
        return 1;
      }
    }

    /**
     * Get the inner type or value.
     */

  }, {
    key: 'unwrap',
    value: function unwrap() {
      var boundOrDefault = this.bound || this.default;
      var recorded = this.recorded;

      if (recorded) {
        return recorded.unwrap();
      } else if (boundOrDefault) {
        return boundOrDefault.unwrap();
      } else {
        return this;
      }
    }
  }, {
    key: 'toString',
    value: function toString(withBinding) {
      var id = this.id,
          bound = this.bound,
          defaultType = this.default;

      if (withBinding) {
        if (defaultType) {
          return id + ' = ' + defaultType.toString();
        } else if (bound) {
          return id + ': ' + bound.toString();
        }
      }
      return id;
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return {
        typeName: this.typeName,
        id: this.id,
        bound: this.bound,
        recorded: this.recorded
      };
    }
  }]);
  return TypeParameter;
}(Type);

function flowIntoTypeParameter(typeParameter) {
  var existing = typeParameter[FlowIntoSymbol];
  if (existing) {
    return existing;
  }

  var target = new FlowIntoType(typeParameter.context);
  target.typeParameter = typeParameter;
  typeParameter[FlowIntoSymbol] = target;
  return target;
}

/**
 * # FlowIntoType
 *
 * A virtual type which allows types it receives to "flow" upwards into a type parameter.
 * The type parameter will become of a union of any types seen by this instance.
 */

var FlowIntoType = function (_Type) {
  inherits(FlowIntoType, _Type);

  function FlowIntoType() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, FlowIntoType);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = FlowIntoType.__proto__ || Object.getPrototypeOf(FlowIntoType)).call.apply(_ref, [this].concat(args))), _this), _this.typeName = 'FlowIntoType', _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(FlowIntoType, [{
    key: 'errors',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input) {
      var typeParameter, context, recorded, bound, hasError, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, error, _hasError, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _error;

      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              typeParameter = this.typeParameter, context = this.context;
              recorded = typeParameter.recorded, bound = typeParameter.bound;

              if (!(bound instanceof FlowIntoType)) {
                _context.next = 5;
                break;
              }

              return _context.delegateYield(bound.errors(validation, path, input), 't0', 4);

            case 4:
              return _context.abrupt('return');

            case 5:
              if (!recorded) {
                _context.next = 47;
                break;
              }

              if (!bound) {
                _context.next = 39;
                break;
              }

              hasError = false;
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context.prev = 11;
              _iterator = bound.errors(validation, path, input)[Symbol.iterator]();

            case 13:
              if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                _context.next = 21;
                break;
              }

              error = _step.value;
              _context.next = 17;
              return error;

            case 17:
              hasError = true;

            case 18:
              _iteratorNormalCompletion = true;
              _context.next = 13;
              break;

            case 21:
              _context.next = 27;
              break;

            case 23:
              _context.prev = 23;
              _context.t1 = _context['catch'](11);
              _didIteratorError = true;
              _iteratorError = _context.t1;

            case 27:
              _context.prev = 27;
              _context.prev = 28;

              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }

            case 30:
              _context.prev = 30;

              if (!_didIteratorError) {
                _context.next = 33;
                break;
              }

              throw _iteratorError;

            case 33:
              return _context.finish(30);

            case 34:
              return _context.finish(27);

            case 35:
              if (!hasError) {
                _context.next = 37;
                break;
              }

              return _context.abrupt('return');

            case 37:
              _context.next = 45;
              break;

            case 39:
              if (!recorded.accepts(input)) {
                _context.next = 43;
                break;
              }

              return _context.abrupt('return');

            case 43:
              // we need to make a union
              typeParameter.recorded = context.union(recorded, context.typeOf(input));
              return _context.abrupt('return');

            case 45:
              _context.next = 82;
              break;

            case 47:
              if (!bound) {
                _context.next = 82;
                break;
              }

              if (!(bound.typeName === 'AnyType' || bound.typeName === 'ExistentialType')) {
                _context.next = 52;
                break;
              }

              return _context.abrupt('return');

            case 52:
              _hasError = false;
              _iteratorNormalCompletion2 = true;
              _didIteratorError2 = false;
              _iteratorError2 = undefined;
              _context.prev = 56;
              _iterator2 = bound.errors(validation, path, input)[Symbol.iterator]();

            case 58:
              if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                _context.next = 66;
                break;
              }

              _error = _step2.value;
              _context.next = 62;
              return _error;

            case 62:
              _hasError = true;

            case 63:
              _iteratorNormalCompletion2 = true;
              _context.next = 58;
              break;

            case 66:
              _context.next = 72;
              break;

            case 68:
              _context.prev = 68;
              _context.t2 = _context['catch'](56);
              _didIteratorError2 = true;
              _iteratorError2 = _context.t2;

            case 72:
              _context.prev = 72;
              _context.prev = 73;

              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }

            case 75:
              _context.prev = 75;

              if (!_didIteratorError2) {
                _context.next = 78;
                break;
              }

              throw _iteratorError2;

            case 78:
              return _context.finish(75);

            case 79:
              return _context.finish(72);

            case 80:
              if (!_hasError) {
                _context.next = 82;
                break;
              }

              return _context.abrupt('return');

            case 82:

              typeParameter.recorded = context.typeOf(input);

            case 83:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this, [[11, 23, 27, 35], [28,, 30, 34], [56, 68, 72, 80], [73,, 75, 79]]);
    })
  }, {
    key: 'accepts',
    value: function accepts(input) {
      var typeParameter = this.typeParameter,
          context = this.context;
      var recorded = typeParameter.recorded,
          bound = typeParameter.bound;


      if (bound instanceof FlowIntoType) {
        // We defer to the other type so that values from this
        // one can flow "upwards".
        return bound.accepts(input);
      }
      if (recorded) {
        // we've already recorded a value for this type parameter
        if (bound && !bound.accepts(input)) {
          return false;
        } else if (recorded.accepts(input)) {
          // our existing type already permits this value, there's nothing to do.
          return true;
        } else {
          // we need to make a union
          typeParameter.recorded = context.union(recorded, context.typeOf(input));
          return true;
        }
      } else if (bound) {
        if (bound.typeName === 'AnyType' || bound.typeName === 'ExistentialType') {
          return true;
        } else if (!bound.accepts(input)) {
          return false;
        }
      }

      typeParameter.recorded = context.typeOf(input);
      return true;
    }
  }, {
    key: 'compareWith',
    value: function compareWith(input) {
      var typeParameter = this.typeParameter,
          context = this.context;
      var recorded = typeParameter.recorded,
          bound = typeParameter.bound;

      if (bound instanceof FlowIntoType) {
        // We defer to the other type so that values from this
        // one can flow "upwards".
        return bound.compareWith(input);
      }
      if (recorded) {
        if (bound && compareTypes(bound, input) === -1) {
          return -1;
        }
        var result = compareTypes(recorded, input);
        if (result === 0) {
          // our existing type already permits this value, there's nothing to do.
          return 0;
        }
        // we need to make a union
        typeParameter.recorded = context.union(recorded, input);
        return 1;
      } else if (bound) {
        if (bound.typeName === 'AnyType' || bound.typeName === 'ExistentialType') {
          return 1;
        }
        var _result = compareTypes(bound, input);
        if (_result === -1) {
          return -1;
        }
      }

      typeParameter.recorded = input;
      return 0;
    }

    /**
     * Get the inner type or value.
     */

  }, {
    key: 'unwrap',
    value: function unwrap() {
      return this.typeParameter.unwrap();
    }
  }, {
    key: 'toString',
    value: function toString(withBinding) {
      return this.typeParameter.toString(withBinding);
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return this.typeParameter.toJSON();
    }
  }]);
  return FlowIntoType;
}(Type);

var FunctionTypeRestParam = function (_Type) {
  inherits(FunctionTypeRestParam, _Type);

  function FunctionTypeRestParam() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, FunctionTypeRestParam);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = FunctionTypeRestParam.__proto__ || Object.getPrototypeOf(FunctionTypeRestParam)).call.apply(_ref, [this].concat(args))), _this), _this.typeName = 'FunctionTypeRestParam', _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(FunctionTypeRestParam, [{
    key: 'errors',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input) {
      var type;
      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              type = this.type;
              return _context.delegateYield(type.errors(validation, path, input), 't0', 2);

            case 2:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this);
    })
  }, {
    key: 'accepts',
    value: function accepts(input) {
      var type = this.type;

      return type.accepts(input);
    }
  }, {
    key: 'compareWith',
    value: function compareWith(input) {
      if (input instanceof FunctionTypeParam || input instanceof FunctionTypeRestParam) {
        return compareTypes(this.type, input.type);
      } else {
        var result = compareTypes(this.type, input);
        if (result === -1) {
          return -1;
        } else {
          return 1;
        }
      }
    }
  }, {
    key: 'toString',
    value: function toString() {
      var type = this.type;

      return '...' + this.name + ': ' + type.toString();
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return {
        typeName: this.typeName,
        name: this.name,
        type: this.type
      };
    }
  }]);
  return FunctionTypeRestParam;
}(Type);

var FunctionTypeParam = function (_Type) {
  inherits(FunctionTypeParam, _Type);

  function FunctionTypeParam() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, FunctionTypeParam);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = FunctionTypeParam.__proto__ || Object.getPrototypeOf(FunctionTypeParam)).call.apply(_ref, [this].concat(args))), _this), _this.typeName = 'FunctionTypeParam', _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(FunctionTypeParam, [{
    key: 'errors',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input) {
      var optional, type;
      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              optional = this.optional, type = this.type;

              if (!(optional && input === undefined)) {
                _context.next = 5;
                break;
              }

              return _context.abrupt('return');

            case 5:
              return _context.delegateYield(type.errors(validation, path, input), 't0', 6);

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this);
    })
  }, {
    key: 'accepts',
    value: function accepts(input) {
      var optional = this.optional,
          type = this.type;

      if (optional && input === undefined) {
        return true;
      } else {
        return type.accepts(input);
      }
    }
  }, {
    key: 'compareWith',
    value: function compareWith(input) {
      if (input instanceof FunctionTypeParam || input instanceof FunctionTypeRestParam) {
        return compareTypes(this.type, input.type);
      } else {
        return compareTypes(this.type, input);
      }
    }
  }, {
    key: 'toString',
    value: function toString() {
      var optional = this.optional,
          type = this.type;

      return '' + this.name + (optional ? '?' : '') + ': ' + type.toString();
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return {
        typeName: this.typeName,
        name: this.name,
        optional: this.optional,
        type: this.type
      };
    }
  }]);
  return FunctionTypeParam;
}(Type);

var FunctionTypeReturn = function (_Type) {
  inherits(FunctionTypeReturn, _Type);

  function FunctionTypeReturn() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, FunctionTypeReturn);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = FunctionTypeReturn.__proto__ || Object.getPrototypeOf(FunctionTypeReturn)).call.apply(_ref, [this].concat(args))), _this), _this.typeName = 'FunctionTypeReturn', _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(FunctionTypeReturn, [{
    key: 'errors',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input) {
      var type;
      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              type = this.type;
              return _context.delegateYield(type.errors(validation, path.concat('[[Return Type]]'), input), 't0', 2);

            case 2:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this);
    })
  }, {
    key: 'accepts',
    value: function accepts(input) {
      var type = this.type;

      return type.accepts(input);
    }
  }, {
    key: 'compareWith',
    value: function compareWith(input) {
      if (input instanceof FunctionTypeReturn) {
        return compareTypes(this.type, input.type);
      } else {
        var result = compareTypes(this.type, input);
        if (result === -1) {
          return -1;
        } else {
          return 1;
        }
      }
    }
  }, {
    key: 'unwrap',
    value: function unwrap() {
      return this.type;
    }
  }, {
    key: 'toString',
    value: function toString() {
      var type = this.type;

      return type.toString();
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return {
        typeName: this.typeName,
        type: this.type
      };
    }
  }]);
  return FunctionTypeReturn;
}(Type);

var ParentSymbol = Symbol('Parent');
var NameRegistrySymbol = Symbol('NameRegistry');
var ModuleRegistrySymbol = Symbol('ModuleRegistry');
var CurrentModuleSymbol = Symbol('CurrentModule');
var TypeConstructorRegistrySymbol = Symbol('TypeConstructorRegistry');
var InferrerSymbol = Symbol('Inferrer');


var TypeSymbol = Symbol('Type');
var TypeParametersSymbol = Symbol('TypeParameters');
var TypePredicateRegistrySymbol = Symbol('TypePredicateRegistry');

var FunctionType = function (_Type) {
  inherits(FunctionType, _Type);

  function FunctionType() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, FunctionType);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = FunctionType.__proto__ || Object.getPrototypeOf(FunctionType)).call.apply(_ref, [this].concat(args))), _this), _this.typeName = 'FunctionType', _this.params = [], _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(FunctionType, [{
    key: 'errors',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input) {
      var annotation, returnType, params, i, param, annotationParam, context, _i, _param;

      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(typeof input !== 'function')) {
                _context.next = 4;
                break;
              }

              _context.next = 3;
              return [path, getErrorMessage('ERR_EXPECT_FUNCTION'), this];

            case 3:
              return _context.abrupt('return');

            case 4:
              annotation = input[TypeSymbol];
              returnType = this.returnType, params = this.params;

              if (!annotation) {
                _context.next = 29;
                break;
              }

              if (annotation.params) {
                _context.next = 9;
                break;
              }

              return _context.abrupt('return');

            case 9:
              i = 0;

            case 10:
              if (!(i < params.length)) {
                _context.next = 24;
                break;
              }

              param = params[i];
              annotationParam = annotation.params[i];

              if (!(!annotationParam && !param.optional)) {
                _context.next = 18;
                break;
              }

              _context.next = 16;
              return [path, getErrorMessage('ERR_EXPECT_ARGUMENT', param.name, param.type.toString()), this];

            case 16:
              _context.next = 21;
              break;

            case 18:
              if (param.acceptsType(annotationParam)) {
                _context.next = 21;
                break;
              }

              _context.next = 21;
              return [path, getErrorMessage('ERR_EXPECT_ARGUMENT', param.name, param.type.toString()), this];

            case 21:
              i++;
              _context.next = 10;
              break;

            case 24:
              if (returnType.acceptsType(annotation.returnType)) {
                _context.next = 27;
                break;
              }

              _context.next = 27;
              return [path, getErrorMessage('ERR_EXPECT_RETURN', returnType.toString()), this];

            case 27:
              _context.next = 32;
              break;

            case 29:
              context = this.context;
              // We cannot safely check an unannotated function.
              // But we need to propagate `any` type feedback upwards.

              for (_i = 0; _i < params.length; _i++) {
                _param = params[_i];

                _param.acceptsType(context.any());
              }
              returnType.acceptsType(context.any());

            case 32:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this);
    })
  }, {
    key: 'accepts',
    value: function accepts(input) {
      if (typeof input !== 'function') {
        return false;
      }
      var returnType = this.returnType,
          params = this.params;

      var annotation = input[TypeSymbol];
      if (annotation) {
        if (!annotation.params) {
          return true;
        }
        for (var i = 0; i < params.length; i++) {
          var param = params[i];
          var annotationParam = annotation.params[i];
          if (!annotationParam && !param.optional) {
            return false;
          } else if (!param.acceptsType(annotationParam)) {
            return false;
          }
        }
        if (!returnType.acceptsType(annotation.returnType)) {
          return false;
        }
        return true;
      } else {
        var context = this.context;
        // We cannot safely check an unannotated function.
        // But we need to propagate `any` type feedback upwards.

        for (var _i2 = 0; _i2 < params.length; _i2++) {
          var _param2 = params[_i2];
          _param2.acceptsType(context.any());
        }
        returnType.acceptsType(context.any());
        return true;
      }
    }
  }, {
    key: 'compareWith',
    value: function compareWith(input) {
      if (!(input instanceof FunctionType)) {
        return -1;
      }
      var returnType = this.returnType;
      var inputReturnType = input.returnType;
      var isGreater = false;
      var returnTypeResult = compareTypes(returnType, inputReturnType);
      if (returnTypeResult === -1) {
        return -1;
      } else if (returnTypeResult === 1) {
        isGreater = true;
      }

      var params = this.params;
      var inputParams = input.params;
      for (var i = 0; i < params.length; i++) {
        var param = params[i];
        var inputParam = i >= inputParams.length ? input.rest : inputParams[i];
        if (inputParam == null) {
          return -1;
        }
        var result = compareTypes(param, inputParam);
        if (result === -1) {
          return -1;
        } else if (result === 1) {
          isGreater = true;
        }
      }
      return isGreater ? 1 : 0;
    }
  }, {
    key: 'acceptsParams',
    value: function acceptsParams() {
      var params = this.params,
          rest = this.rest;

      var paramsLength = params.length;

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var argsLength = args.length;
      for (var i = 0; i < paramsLength; i++) {
        var param = params[i];
        if (i < argsLength) {
          if (!param.accepts(args[i])) {
            return false;
          }
        } else if (!param.accepts(undefined)) {
          return false;
        }
      }

      if (argsLength > paramsLength && rest) {
        for (var _i3 = paramsLength; _i3 < argsLength; _i3++) {
          if (!rest.accepts(args[_i3])) {
            return false;
          }
        }
      }

      return true;
    }
  }, {
    key: 'acceptsReturn',
    value: function acceptsReturn(input) {
      return this.returnType.accepts(input);
    }
  }, {
    key: 'assertParams',
    value: function assertParams() {
      var params = this.params,
          rest = this.rest;

      var paramsLength = params.length;

      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      var argsLength = args.length;
      for (var i = 0; i < paramsLength; i++) {
        var param = params[i];
        if (i < argsLength) {
          param.assert(args[i]);
        } else {
          param.assert(undefined);
        }
      }

      if (argsLength > paramsLength && rest) {
        for (var _i4 = paramsLength; _i4 < argsLength; _i4++) {
          rest.assert(args[_i4]);
        }
      }

      return args;
    }
  }, {
    key: 'assertReturn',
    value: function assertReturn(input) {
      this.returnType.assert(input);
      return input;
    }
  }, {
    key: 'invoke',
    value: function invoke() {
      var params = this.params,
          rest = this.rest,
          context = this.context;

      var paramsLength = params.length;

      for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      var argsLength = args.length;
      for (var i = 0; i < paramsLength; i++) {
        var param = params[i];
        if (i < argsLength) {
          if (!param.acceptsType(args[i])) {
            return context.empty();
          }
        } else if (!param.accepts(undefined)) {
          return context.empty();
        }
      }

      if (argsLength > paramsLength && rest) {
        for (var _i5 = paramsLength; _i5 < argsLength; _i5++) {
          if (!rest.acceptsType(args[_i5])) {
            return context.empty();
          }
        }
      }

      return this.returnType.type;
    }
  }, {
    key: 'toString',
    value: function toString() {
      var params = this.params,
          rest = this.rest,
          returnType = this.returnType;

      var args = [];
      for (var i = 0; i < params.length; i++) {
        args.push(params[i].toString());
      }
      if (rest) {
        args.push(rest.toString());
      }
      return '(' + args.join(', ') + ') => ' + returnType.toString();
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return {
        typeName: this.typeName,
        params: this.params,
        rest: this.rest,
        returnType: this.returnType
      };
    }
  }]);
  return FunctionType;
}(Type);

var GeneratorType = function (_Type) {
  inherits(GeneratorType, _Type);

  function GeneratorType() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, GeneratorType);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = GeneratorType.__proto__ || Object.getPrototypeOf(GeneratorType)).call.apply(_ref, [this].concat(args))), _this), _this.typeName = 'GeneratorType', _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(GeneratorType, [{
    key: 'errors',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input) {
      var isValid;
      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              isValid = input && typeof input.next === 'function' && typeof input.return === 'function' && typeof input.throw === 'function';

              if (isValid) {
                _context.next = 4;
                break;
              }

              _context.next = 4;
              return [path, getErrorMessage('ERR_EXPECT_GENERATOR'), this];

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this);
    })
  }, {
    key: 'accepts',
    value: function accepts(input) {
      return input && typeof input.next === 'function' && typeof input.return === 'function' && typeof input.throw === 'function';
    }
  }, {
    key: 'compareWith',
    value: function compareWith(input) {
      if (!(input instanceof GeneratorType)) {
        var _result = compareTypes(this.yieldType, input);
        if (_result === -1) {
          return -1;
        } else {
          return 1;
        }
      }
      var isGreater = false;
      var result = compareTypes(this.yieldType, input.yieldType);
      if (result === -1) {
        return -1;
      } else if (result === 1) {
        isGreater = true;
      }

      result = compareTypes(this.returnType, input.returnType);
      if (result === -1) {
        return -1;
      } else if (result === 1) {
        isGreater = true;
      }

      result = compareTypes(this.nextType, input.nextType);
      if (result === -1) {
        return -1;
      } else if (result === 1) {
        isGreater = true;
      }

      return isGreater ? 1 : 0;
    }
  }, {
    key: 'acceptsYield',
    value: function acceptsYield(input) {
      return this.yieldType.accepts(input);
    }
  }, {
    key: 'acceptsReturn',
    value: function acceptsReturn(input) {
      return this.returnType.accepts(input);
    }
  }, {
    key: 'acceptsNext',
    value: function acceptsNext(input) {
      return this.nextType.accepts(input);
    }
  }, {
    key: 'assertYield',
    value: function assertYield(input) {
      return this.yieldType.assert(input);
    }
  }, {
    key: 'assertReturn',
    value: function assertReturn(input) {
      return this.returnType.assert(input);
    }
  }, {
    key: 'assertNext',
    value: function assertNext(input) {
      return this.nextType.assert(input);
    }
  }, {
    key: 'toString',
    value: function toString() {
      var yieldType = this.yieldType,
          returnType = this.returnType,
          nextType = this.nextType;

      return 'Generator<' + yieldType.toString() + ', ' + returnType.toString() + ', ' + nextType.toString();
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return {
        typeName: this.typeName,
        yieldType: this.yieldType,
        returnType: this.returnType,
        nextType: this.nextType
      };
    }
  }]);
  return GeneratorType;
}(Type);

var warnedInstances = new WeakSet();

var TypeConstructor = function (_Type) {
  inherits(TypeConstructor, _Type);

  function TypeConstructor() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, TypeConstructor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = TypeConstructor.__proto__ || Object.getPrototypeOf(TypeConstructor)).call.apply(_ref, [this].concat(args))), _this), _this.typeName = 'TypeConstructor', _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(TypeConstructor, [{
    key: 'errors',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input) {
      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this);
    })
  }, {
    key: 'accepts',
    value: function accepts(input) {
      var context = this.context,
          name = this.name;

      if (!warnedInstances.has(this)) {
        context.emitWarningMessage('TypeConstructor ' + name + ' does not implement accepts().');
        warnedInstances.add(this);
      }
      return false;
    }
  }, {
    key: 'compareWith',
    value: function compareWith(input) {
      var context = this.context,
          name = this.name;

      if (!warnedInstances.has(this)) {
        context.emitWarningMessage('TypeConstructor ' + name + ' does not implement compareWith().');
        warnedInstances.add(this);
      }
      return -1;
    }
  }, {
    key: 'inferTypeParameters',
    value: function inferTypeParameters(input) {
      return [];
    }
  }, {
    key: 'apply',
    value: function apply() {
      var target = new TypeParameterApplication(this.context);
      target.parent = this;

      for (var _len2 = arguments.length, typeInstances = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        typeInstances[_key2] = arguments[_key2];
      }

      target.typeInstances = typeInstances;
      return target;
    }

    /**
     * Get the inner type or value.
     */

  }, {
    key: 'unwrap',
    value: function unwrap() {
      return this;
    }
  }, {
    key: 'toString',
    value: function toString() {
      return this.name;
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return {
        typeName: this.typeName,
        name: this.name
      };
    }
  }]);
  return TypeConstructor;
}(Type);

var GenericType = function (_TypeConstructor) {
  inherits(GenericType, _TypeConstructor);

  function GenericType() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, GenericType);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = GenericType.__proto__ || Object.getPrototypeOf(GenericType)).call.apply(_ref, [this].concat(args))), _this), _this.typeName = "GenericType", _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(GenericType, [{
    key: "errors",
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input) {
      var name, impl;
      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              name = this.name, impl = this.impl;

              if (input instanceof impl) {
                _context.next = 4;
                break;
              }

              _context.next = 4;
              return [path, getErrorMessage("ERR_EXPECT_INSTANCEOF", name), this];

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, errors, this);
    })
  }, {
    key: "accepts",
    value: function accepts(input) {
      var impl = this.impl;

      return input instanceof impl;
    }
  }, {
    key: "compareWith",
    value: function compareWith(input) {
      var context = this.context,
          impl = this.impl;

      var annotation = context.getAnnotation(impl);
      if (annotation) {
        for (var _len2 = arguments.length, typeInstances = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          typeInstances[_key2 - 1] = arguments[_key2];
        }

        var expected = annotation.unwrap.apply(annotation, toConsumableArray(typeInstances));
        return compareTypes(input, expected);
      } else if (input instanceof GenericType && (input.impl === impl || impl && impl.isPrototypeOf(input.impl))) {
        return 0;
      } else {
        return -1;
      }
    }
  }, {
    key: "unwrap",
    value: function unwrap() {
      var context = this.context,
          impl = this.impl;

      if (typeof impl !== "function") {
        return this;
      }
      var annotation = context.getAnnotation(impl);
      if (annotation != null) {
        return annotation.unwrap.apply(annotation, arguments);
      } else {
        return this;
      }
    }
  }, {
    key: "inferTypeParameters",
    value: function inferTypeParameters(input) {
      return [];
    }
  }]);
  return GenericType;
}(TypeConstructor);

function invariant(input, message) {
  if (!input) {
    var error = new Error(message);
    error.name = 'InvariantViolation';
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(error, invariant);
    }
    throw error;
  }
}

var NullLiteralType = function (_Type) {
  inherits(NullLiteralType, _Type);

  function NullLiteralType() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, NullLiteralType);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = NullLiteralType.__proto__ || Object.getPrototypeOf(NullLiteralType)).call.apply(_ref, [this].concat(args))), _this), _this.typeName = 'NullLiteralType', _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(NullLiteralType, [{
    key: 'errors',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input) {
      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(input !== null)) {
                _context.next = 3;
                break;
              }

              _context.next = 3;
              return [path, getErrorMessage('ERR_EXPECT_NULL'), this];

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this);
    })
  }, {
    key: 'accepts',
    value: function accepts(input) {
      return input === null;
    }
  }, {
    key: 'compareWith',
    value: function compareWith(input) {
      if (input instanceof NullLiteralType) {
        return 0;
      } else {
        return -1;
      }
    }
  }, {
    key: 'toString',
    value: function toString() {
      return 'null';
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return {
        typeName: this.typeName
      };
    }
  }]);
  return NullLiteralType;
}(Type);

var VoidType = function (_Type) {
  inherits(VoidType, _Type);

  function VoidType() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, VoidType);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = VoidType.__proto__ || Object.getPrototypeOf(VoidType)).call.apply(_ref, [this].concat(args))), _this), _this.typeName = 'VoidType', _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(VoidType, [{
    key: 'errors',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input) {
      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(input !== undefined)) {
                _context.next = 3;
                break;
              }

              _context.next = 3;
              return [path, getErrorMessage('ERR_EXPECT_VOID'), this];

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this);
    })
  }, {
    key: 'accepts',
    value: function accepts(input) {
      return input === undefined;
    }
  }, {
    key: 'compareWith',
    value: function compareWith(input) {
      if (input instanceof VoidType) {
        return 0;
      } else {
        return -1;
      }
    }
  }, {
    key: 'toString',
    value: function toString() {
      return 'void';
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return {
        typeName: this.typeName
      };
    }
  }]);
  return VoidType;
}(Type);

var NullableType = function (_Type) {
  inherits(NullableType, _Type);

  function NullableType() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, NullableType);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = NullableType.__proto__ || Object.getPrototypeOf(NullableType)).call.apply(_ref, [this].concat(args))), _this), _this.typeName = 'NullableType', _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(NullableType, [{
    key: 'errors',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input) {
      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(input != null)) {
                _context.next = 2;
                break;
              }

              return _context.delegateYield(this.type.errors(validation, path, input), 't0', 2);

            case 2:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this);
    })
  }, {
    key: 'accepts',
    value: function accepts(input) {
      if (input == null) {
        return true;
      } else {
        return this.type.accepts(input);
      }
    }
  }, {
    key: 'compareWith',
    value: function compareWith(input) {
      if (input instanceof NullLiteralType || input instanceof VoidType) {
        return 1;
      } else if (input instanceof NullableType) {
        return compareTypes(this.type, input.type);
      } else {
        var result = compareTypes(this.type, input);
        if (result === -1) {
          return -1;
        } else {
          return 1;
        }
      }
    }

    /**
     * Get the inner type or value.
     */

  }, {
    key: 'unwrap',
    value: function unwrap() {
      return this;
    }
  }, {
    key: 'toString',
    value: function toString() {
      return '? ' + this.type.toString();
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return {
        typeName: this.typeName,
        type: this.type
      };
    }
  }]);
  return NullableType;
}(Type);

var ObjectTypeProperty = function (_Type) {
  inherits(ObjectTypeProperty, _Type);

  function ObjectTypeProperty() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, ObjectTypeProperty);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = ObjectTypeProperty.__proto__ || Object.getPrototypeOf(ObjectTypeProperty)).call.apply(_ref, [this].concat(args))), _this), _this.typeName = 'ObjectTypeProperty', _this['static'] = false, _this.constraints = [], _temp), possibleConstructorReturn(_this, _ret);
  }
  // Ignore


  createClass(ObjectTypeProperty, [{
    key: 'addConstraint',
    value: function addConstraint() {
      for (var _len2 = arguments.length, constraints = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        constraints[_key2] = arguments[_key2];
      }

      addConstraints.apply(undefined, [this].concat(toConsumableArray(constraints)));
      return this;
    }

    /**
     * Determine whether the property is nullable.
     */

  }, {
    key: 'isNullable',
    value: function isNullable() {
      return this.value instanceof NullableType;
    }

    /**
     * Determine whether the property exists on the given input or its prototype chain.
     */

  }, {
    key: 'existsOn',
    value: function existsOn(input) {
      // Ignore
      var key = this.key,
          isStatic = this.static;

      return key in (isStatic ? input.constructor : input) === true;
    }
  }, {
    key: 'errors',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input) {
      var optional, key, value, isStatic, target, targetPath, hasErrors, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, error;

      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // Ignore
              optional = this.optional, key = this.key, value = this.value, isStatic = this.static;
              target = void 0;
              targetPath = void 0;

              if (!isStatic) {
                _context.next = 18;
                break;
              }

              if (!(input === null || (typeof input === 'undefined' ? 'undefined' : _typeof(input)) !== 'object' && typeof input !== 'function')) {
                _context.next = 8;
                break;
              }

              _context.next = 7;
              return [path, getErrorMessage('ERR_EXPECT_OBJECT'), this];

            case 7:
              return _context.abrupt('return');

            case 8:
              targetPath = path.concat('constructor');

              if (!(typeof input.constructor !== 'function')) {
                _context.next = 14;
                break;
              }

              if (optional) {
                _context.next = 13;
                break;
              }

              _context.next = 13;
              return [targetPath, getErrorMessage('ERR_EXPECT_FUNCTION'), this];

            case 13:
              return _context.abrupt('return');

            case 14:
              targetPath.push(key);
              target = input.constructor[key];
              _context.next = 20;
              break;

            case 18:
              target = input[key];
              targetPath = path.concat(key);

            case 20:
              if (!(optional && target === undefined)) {
                _context.next = 22;
                break;
              }

              return _context.abrupt('return');

            case 22:
              if (!(this.isNullable() && !this.existsOn(input))) {
                _context.next = 26;
                break;
              }

              _context.next = 25;
              return [targetPath, getErrorMessage('ERR_MISSING_PROPERTY'), this];

            case 25:
              return _context.abrupt('return');

            case 26:
              hasErrors = false;
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context.prev = 30;
              _iterator = value.errors(validation, targetPath, target)[Symbol.iterator]();

            case 32:
              if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                _context.next = 40;
                break;
              }

              error = _step.value;

              hasErrors = true;
              _context.next = 37;
              return error;

            case 37:
              _iteratorNormalCompletion = true;
              _context.next = 32;
              break;

            case 40:
              _context.next = 46;
              break;

            case 42:
              _context.prev = 42;
              _context.t0 = _context['catch'](30);
              _didIteratorError = true;
              _iteratorError = _context.t0;

            case 46:
              _context.prev = 46;
              _context.prev = 47;

              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }

            case 49:
              _context.prev = 49;

              if (!_didIteratorError) {
                _context.next = 52;
                break;
              }

              throw _iteratorError;

            case 52:
              return _context.finish(49);

            case 53:
              return _context.finish(46);

            case 54:
              if (hasErrors) {
                _context.next = 56;
                break;
              }

              return _context.delegateYield(collectConstraintErrors(this, validation, targetPath, target), 't1', 56);

            case 56:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this, [[30, 42, 46, 54], [47,, 49, 53]]);
    })
  }, {
    key: 'accepts',
    value: function accepts(input) {
      // Ignore
      var optional = this.optional,
          key = this.key,
          value = this.value,
          isStatic = this.static;

      var target = void 0;
      if (isStatic) {
        if (input === null || (typeof input === 'undefined' ? 'undefined' : _typeof(input)) !== 'object' && typeof input !== 'function') {
          return false;
        }
        if (typeof input.constructor !== 'function') {
          return optional ? true : false;
        }
        target = input.constructor[key];
      } else {
        target = input[key];
      }

      if (optional && target === undefined) {
        return true;
      }

      if (this.isNullable() && !this.existsOn(input)) {
        return false;
      }

      if (!value.accepts(target)) {
        return false;
      } else {
        return constraintsAccept(this, target);
      }
    }
  }, {
    key: 'compareWith',
    value: function compareWith(input) {
      if (!(input instanceof ObjectTypeProperty)) {
        return -1;
      } else if (input.key !== this.key) {
        return -1;
      } else {
        return compareTypes(this.value, input.value);
      }
    }
  }, {
    key: 'unwrap',
    value: function unwrap() {
      return this.value.unwrap();
    }
  }, {
    key: 'toString',
    value: function toString() {
      var key = this.key;
      // Issue 252
      if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'symbol') {
        key = '[' + key.toString() + ']';
      }
      if (this.static) {
        return 'static ' + key + (this.optional ? '?' : '') + ': ' + this.value.toString() + ';';
      } else {
        return '' + key + (this.optional ? '?' : '') + ': ' + this.value.toString() + ';';
      }
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return {
        typeName: this.typeName,
        key: this.key,
        value: this.value,
        optional: this.optional
      };
    }
  }]);
  return ObjectTypeProperty;
}(Type);

var ObjectTypeIndexer = function (_Type) {
  inherits(ObjectTypeIndexer, _Type);

  function ObjectTypeIndexer() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, ObjectTypeIndexer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = ObjectTypeIndexer.__proto__ || Object.getPrototypeOf(ObjectTypeIndexer)).call.apply(_ref, [this].concat(args))), _this), _this.typeName = 'ObjectTypeIndexer', _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(ObjectTypeIndexer, [{
    key: 'errors',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, key, value) {
      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // special case number types
              if (this.key.typeName === 'NumberType' || this.key.typeName === 'NumericLiteralType') {
                key = +key;
              }

              return _context.delegateYield(this.key.errors(validation, path.concat('[[Key]]'), key), 't0', 2);

            case 2:
              return _context.delegateYield(this.value.errors(validation, path.concat(key), value), 't1', 3);

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this);
    })
  }, {
    key: 'accepts',
    value: function accepts(value) {
      return this.value.accepts(value);
    }
  }, {
    key: 'acceptsKey',
    value: function acceptsKey(key) {
      // special case number types
      if (this.key.typeName === 'NumberType' || this.key.typeName === 'NumericLiteralType') {
        key = +key;
      }
      return this.key.accepts(key);
    }
  }, {
    key: 'acceptsValue',
    value: function acceptsValue(value) {
      return this.value.accepts(value);
    }
  }, {
    key: 'compareWith',
    value: function compareWith(input) {
      if (input instanceof ObjectTypeProperty) {
        if (!this.key.accepts(input.key)) {
          return -1;
        } else {
          return compareTypes(this.value, input.value);
        }
      } else if (!(input instanceof ObjectTypeIndexer)) {
        return -1;
      }

      var keyResult = compareTypes(this.key, input.key);
      if (keyResult === -1) {
        return -1;
      }
      var valueResult = compareTypes(this.value, input.value);
      if (valueResult === -1) {
        return -1;
      }

      if (keyResult === 0 && valueResult === 0) {
        return 0;
      } else {
        return 1;
      }
    }
  }, {
    key: 'unwrap',
    value: function unwrap() {
      return this.value.unwrap();
    }
  }, {
    key: 'toString',
    value: function toString() {
      return '[' + this.id + ': ' + this.key.toString() + ']: ' + this.value.toString() + ';';
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return {
        typeName: this.typeName,
        id: this.id,
        key: this.key,
        value: this.value
      };
    }
  }]);
  return ObjectTypeIndexer;
}(Type);

var ObjectTypeCallProperty = function (_Type) {
  inherits(ObjectTypeCallProperty, _Type);

  function ObjectTypeCallProperty() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, ObjectTypeCallProperty);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = ObjectTypeCallProperty.__proto__ || Object.getPrototypeOf(ObjectTypeCallProperty)).call.apply(_ref, [this].concat(args))), _this), _this.typeName = 'ObjectTypeCallProperty', _this['static'] = false, _temp), possibleConstructorReturn(_this, _ret);
  }
  // Ignore


  createClass(ObjectTypeCallProperty, [{
    key: 'errors',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input) {
      var value, isStatic, target, targetPath;
      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // Ignore
              value = this.value, isStatic = this.static;
              target = void 0;
              targetPath = void 0;

              if (!isStatic) {
                _context.next = 16;
                break;
              }

              if (!(input === null || (typeof input === 'undefined' ? 'undefined' : _typeof(input)) !== 'object' && typeof input !== 'function')) {
                _context.next = 8;
                break;
              }

              _context.next = 7;
              return [path, getErrorMessage('ERR_EXPECT_OBJECT'), this];

            case 7:
              return _context.abrupt('return');

            case 8:
              targetPath = path.concat('constructor');

              if (!(typeof input.constructor !== 'function')) {
                _context.next = 13;
                break;
              }

              _context.next = 12;
              return [targetPath, getErrorMessage('ERR_EXPECT_FUNCTION'), this];

            case 12:
              return _context.abrupt('return');

            case 13:
              target = input.constructor;
              _context.next = 18;
              break;

            case 16:
              target = input;
              targetPath = path;

            case 18:
              return _context.delegateYield(value.errors(validation, targetPath, target), 't0', 19);

            case 19:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this);
    })
  }, {
    key: 'accepts',
    value: function accepts(input) {
      // Ignore
      var value = this.value,
          isStatic = this.static;

      var target = void 0;
      if (isStatic) {
        if (input === null || (typeof input === 'undefined' ? 'undefined' : _typeof(input)) !== 'object' && typeof input !== 'function') {
          return false;
        }
        if (typeof input.constructor !== 'function') {
          return false;
        }
        target = input.constructor;
      } else {
        target = input;
      }
      return value.accepts(target);
    }
  }, {
    key: 'compareWith',
    value: function compareWith(input) {
      if (!(input instanceof ObjectTypeCallProperty)) {
        return -1;
      }
      return compareTypes(this.value, input.value);
    }
  }, {
    key: 'unwrap',
    value: function unwrap() {
      return this.value.unwrap();
    }
  }, {
    key: 'toString',
    value: function toString() {
      if (this.static) {
        return 'static ' + this.value.toString() + ';';
      } else {
        return this.value.toString();
      }
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return {
        typeName: this.typeName,
        value: this.value
      };
    }
  }]);
  return ObjectTypeCallProperty;
}(Type);

var Declaration = function (_Type) {
  inherits(Declaration, _Type);

  function Declaration() {
    classCallCheck(this, Declaration);
    return possibleConstructorReturn(this, (Declaration.__proto__ || Object.getPrototypeOf(Declaration)).apply(this, arguments));
  }

  return Declaration;
}(Type);

var VarDeclaration = function (_Declaration) {
  inherits(VarDeclaration, _Declaration);

  function VarDeclaration() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, VarDeclaration);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = VarDeclaration.__proto__ || Object.getPrototypeOf(VarDeclaration)).call.apply(_ref, [this].concat(args))), _this), _this.typeName = 'VarDeclaration', _this.constraints = [], _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(VarDeclaration, [{
    key: 'addConstraint',
    value: function addConstraint() {
      for (var _len2 = arguments.length, constraints = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        constraints[_key2] = arguments[_key2];
      }

      addConstraints.apply(undefined, [this].concat(toConsumableArray(constraints)));
      return this;
    }
  }, {
    key: 'errors',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input) {
      var type, hasErrors, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, error;

      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              type = this.type;
              hasErrors = false;
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context.prev = 5;
              _iterator = type.errors(validation, path, input)[Symbol.iterator]();

            case 7:
              if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                _context.next = 15;
                break;
              }

              error = _step.value;

              hasErrors = true;
              _context.next = 12;
              return error;

            case 12:
              _iteratorNormalCompletion = true;
              _context.next = 7;
              break;

            case 15:
              _context.next = 21;
              break;

            case 17:
              _context.prev = 17;
              _context.t0 = _context['catch'](5);
              _didIteratorError = true;
              _iteratorError = _context.t0;

            case 21:
              _context.prev = 21;
              _context.prev = 22;

              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }

            case 24:
              _context.prev = 24;

              if (!_didIteratorError) {
                _context.next = 27;
                break;
              }

              throw _iteratorError;

            case 27:
              return _context.finish(24);

            case 28:
              return _context.finish(21);

            case 29:
              if (hasErrors) {
                _context.next = 31;
                break;
              }

              return _context.delegateYield(collectConstraintErrors(this, validation, path, input), 't1', 31);

            case 31:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this, [[5, 17, 21, 29], [22,, 24, 28]]);
    })
  }, {
    key: 'accepts',
    value: function accepts(input) {
      var type = this.type;

      if (!type.accepts(input)) {
        return false;
      } else if (!constraintsAccept(this, input)) {
        return false;
      } else {
        return true;
      }
    }
  }, {
    key: 'compareWith',
    value: function compareWith(input) {
      return compareTypes(this.type, input);
    }
  }, {
    key: 'unwrap',
    value: function unwrap() {
      return this.type.unwrap();
    }
  }, {
    key: 'toString',
    value: function toString() {
      return 'declare var ' + this.name + ': ' + this.type.toString() + ';';
    }
  }]);
  return VarDeclaration;
}(Declaration);

var TypeDeclaration = function (_Declaration) {
  inherits(TypeDeclaration, _Declaration);

  function TypeDeclaration() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, TypeDeclaration);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = TypeDeclaration.__proto__ || Object.getPrototypeOf(TypeDeclaration)).call.apply(_ref, [this].concat(args))), _this), _this.typeName = 'TypeDeclaration', _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(TypeDeclaration, [{
    key: 'addConstraint',
    value: function addConstraint() {
      var _typeAlias;

      (_typeAlias = this.typeAlias).addConstraint.apply(_typeAlias, arguments);
      return this;
    }
  }, {
    key: 'errors',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input) {
      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.delegateYield(this.typeAlias.errors(validation, path, input), 't0', 1);

            case 1:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this);
    })
  }, {
    key: 'apply',
    value: function apply() {
      var _typeAlias2;

      return (_typeAlias2 = this.typeAlias).apply.apply(_typeAlias2, arguments);
    }
  }, {
    key: 'accepts',
    value: function accepts(input) {
      return this.typeAlias.accepts(input);
    }
  }, {
    key: 'compareWith',
    value: function compareWith(input) {
      return compareTypes(this.typeAlias, input);
    }
  }, {
    key: 'hasProperty',
    value: function hasProperty(name) {
      var _typeAlias3;

      for (var _len2 = arguments.length, typeInstances = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        typeInstances[_key2 - 1] = arguments[_key2];
      }

      return (_typeAlias3 = this.typeAlias).hasProperty.apply(_typeAlias3, [name].concat(toConsumableArray(typeInstances)));
    }
  }, {
    key: 'getProperty',
    value: function getProperty(name) {
      var _typeAlias4;

      for (var _len3 = arguments.length, typeInstances = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        typeInstances[_key3 - 1] = arguments[_key3];
      }

      return (_typeAlias4 = this.typeAlias).getProperty.apply(_typeAlias4, [name].concat(toConsumableArray(typeInstances)));
    }

    /**
     * Get the inner type or value.
     */

  }, {
    key: 'unwrap',
    value: function unwrap() {
      var _typeAlias5;

      return (_typeAlias5 = this.typeAlias).unwrap.apply(_typeAlias5, arguments);
    }
  }, {
    key: 'toString',
    value: function toString() {
      return 'declare ' + this.typeAlias.toString(true) + ';';
    }
  }, {
    key: 'type',
    get: function get$$1() {
      return this.typeAlias.type;
    }
  }]);
  return TypeDeclaration;
}(Declaration);

var ModuleDeclaration = function (_Declaration) {
  inherits(ModuleDeclaration, _Declaration);

  function ModuleDeclaration() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, ModuleDeclaration);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = ModuleDeclaration.__proto__ || Object.getPrototypeOf(ModuleDeclaration)).call.apply(_ref, [this].concat(args))), _this), _this.typeName = 'ModuleDeclaration', _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(ModuleDeclaration, [{
    key: 'get',
    value: function get$$1(name) {
      var moduleExports = this.moduleExports;

      if (moduleExports) {
        var exporting = moduleExports.unwrap();
        if (typeof exporting.getProperty === 'function') {
          var prop = exporting.getProperty(name);
          if (prop) {
            return prop.unwrap();
          }
        }
      } else {
        var declaration = this.declarations[name];
        if (declaration) {
          return declaration.unwrap();
        }
      }
    }
  }, {
    key: 'errors',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input) {
      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this);
    })
  }, {
    key: 'import',
    value: function _import(moduleName) {
      if (/^\.\//.test(moduleName)) {
        moduleName = '' + this.name + moduleName.slice(1);
      }
      return this.innerContext.import(moduleName);
    }
  }, {
    key: 'toString',
    value: function toString() {
      var name = this.name,
          declarations = this.declarations,
          modules = this.modules,
          moduleExports = this.moduleExports;

      var body = [];
      for (var _name in declarations) {
        // eslint-disable-line guard-for-in
        var declaration = declarations[_name];
        body.push(declaration.toString(true));
      }
      if (modules) {
        for (var _name2 in modules) {
          // eslint-disable-line guard-for-in
          var module = modules[_name2];
          body.push(module.toString());
        }
      }
      if (moduleExports) {
        body.push(moduleExports.toString());
      }
      return 'declare module "' + name + '" {\n' + indent$1(body.join('\n\n')) + '}';
    }
  }, {
    key: 'moduleType',
    get: function get$$1() {
      if (this.moduleExports) {
        return 'commonjs';
      } else {
        return 'es6';
      }
    }
  }, {
    key: 'isCommonJS',
    get: function get$$1() {
      return this.moduleExports ? true : false;
    }
  }, {
    key: 'isES6',
    get: function get$$1() {
      return this.moduleExports ? false : true;
    }
  }, {
    key: 'declarations',
    get: function get$$1() {
      var innerContext = this.innerContext;

      return innerContext[NameRegistrySymbol];
    }
  }, {
    key: 'modules',
    get: function get$$1() {
      var innerContext = this.innerContext;

      return innerContext[ModuleRegistrySymbol];
    }
  }]);
  return ModuleDeclaration;
}(Declaration);

function indent$1(input) {
  var lines = input.split('\n');
  var length = lines.length;

  for (var i = 0; i < length; i++) {
    lines[i] = '  ' + lines[i];
  }
  return lines.join('\n');
}

var ModuleExports = function (_Declaration) {
  inherits(ModuleExports, _Declaration);

  function ModuleExports() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, ModuleExports);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = ModuleExports.__proto__ || Object.getPrototypeOf(ModuleExports)).call.apply(_ref, [this].concat(args))), _this), _this.typeName = 'ModuleExports', _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(ModuleExports, [{
    key: 'errors',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input) {
      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.delegateYield(this.type.errors(validation, path, input), 't0', 1);

            case 1:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this);
    })
  }, {
    key: 'unwrap',
    value: function unwrap() {
      return this.type.unwrap();
    }
  }, {
    key: 'toString',
    value: function toString() {
      return 'declare module.exports: ' + this.type.toString() + ';';
    }
  }]);
  return ModuleExports;
}(Declaration);

var ClassDeclaration = function (_Declaration) {
  inherits(ClassDeclaration, _Declaration);

  function ClassDeclaration() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, ClassDeclaration);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = ClassDeclaration.__proto__ || Object.getPrototypeOf(ClassDeclaration)).call.apply(_ref, [this].concat(args))), _this), _this.typeName = 'ClassDeclaration', _this.shapeID = Symbol(), _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(ClassDeclaration, [{
    key: 'errors',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input) {
      var body, superClass, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _ref2, _ref3, errorPath, errorMessage, expectedType, propertyName;

      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              body = this.body;
              superClass = this.superClass && this.superClass.unwrap();

              if (!(input === null || (typeof input === 'undefined' ? 'undefined' : _typeof(input)) !== 'object' && typeof input !== 'function')) {
                _context.next = 6;
                break;
              }

              _context.next = 5;
              return [path, getErrorMessage('ERR_EXPECT_INSTANCEOF', this.name), this];

            case 5:
              return _context.abrupt('return');

            case 6:
              if (!superClass) {
                _context.next = 42;
                break;
              }

              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context.prev = 10;
              _iterator = superClass.errors(validation, path, input)[Symbol.iterator]();

            case 12:
              if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                _context.next = 28;
                break;
              }

              _ref2 = _step.value;
              _ref3 = slicedToArray(_ref2, 3);
              errorPath = _ref3[0];
              errorMessage = _ref3[1];
              expectedType = _ref3[2];
              propertyName = errorPath[path.length];

              if (!body.getProperty(propertyName)) {
                _context.next = 23;
                break;
              }

              return _context.abrupt('continue', 25);

            case 23:
              _context.next = 25;
              return [errorPath, errorMessage, expectedType];

            case 25:
              _iteratorNormalCompletion = true;
              _context.next = 12;
              break;

            case 28:
              _context.next = 34;
              break;

            case 30:
              _context.prev = 30;
              _context.t0 = _context['catch'](10);
              _didIteratorError = true;
              _iteratorError = _context.t0;

            case 34:
              _context.prev = 34;
              _context.prev = 35;

              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }

            case 37:
              _context.prev = 37;

              if (!_didIteratorError) {
                _context.next = 40;
                break;
              }

              throw _iteratorError;

            case 40:
              return _context.finish(37);

            case 41:
              return _context.finish(34);

            case 42:
              return _context.delegateYield(body.errors(validation, path, input), 't1', 43);

            case 43:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this, [[10, 30, 34, 42], [35,, 37, 41]]);
    })
  }, {
    key: 'accepts',
    value: function accepts(input) {
      var body = this.body;

      var superClass = this.superClass && this.superClass.unwrap();
      if (input === null || (typeof input === 'undefined' ? 'undefined' : _typeof(input)) !== 'object' && typeof input !== 'function') {
        return false;
      } else if (superClass && !superClass.accepts(input)) {
        return false;
      } else if (!body.accepts(input)) {
        return false;
      } else {
        return true;
      }
    }
  }, {
    key: 'compareWith',
    value: function compareWith(input) {
      if (input instanceof ClassDeclaration) {
        if (input === this) {
          return 0;
        } else if (this.isSuperClassOf(input)) {
          return 1;
        } else {
          return -1;
        }
      }
      return compareTypes(this.body, input);
    }

    /**
     * Get a property with the given name, or undefined if it does not exist.
     */

  }, {
    key: 'getProperty',
    value: function getProperty(key) {
      var body = this.body,
          superClass = this.superClass;

      var prop = body.getProperty(key);
      if (prop) {
        return prop;
      } else if (superClass && typeof superClass.getProperty === 'function') {
        return superClass.getProperty(key);
      }
    }

    /**
     * Determine whether a property with the given name exists.
     */

  }, {
    key: 'hasProperty',
    value: function hasProperty(key) {
      var body = this.body,
          superClass = this.superClass;

      if (body.hasProperty(key)) {
        return true;
      } else if (superClass && typeof superClass.hasProperty === 'function') {
        return superClass.hasProperty(key);
      } else {
        return false;
      }
    }

    /**
     * Determine whether this class declaration represents a super class of
     * the given type.
     */

  }, {
    key: 'isSuperClassOf',
    value: function isSuperClassOf(candidate) {
      var body = this.body,
          shapeID = this.shapeID;

      var current = candidate;

      while (current != null) {
        if (current === this || current === body || current.shapeID === shapeID) {
          return true;
        }
        if (current instanceof ClassDeclaration) {
          current = current.superClass;
        } else {
          current = current.unwrap();
        }
      }
      return false;
    }
  }, {
    key: 'apply',
    value: function apply() {
      var target = new TypeParameterApplication(this.context);
      target.parent = this;

      for (var _len2 = arguments.length, typeInstances = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        typeInstances[_key2] = arguments[_key2];
      }

      target.typeInstances = typeInstances;
      return target;
    }
  }, {
    key: 'toString',
    value: function toString(withDeclaration) {
      var name = this.name,
          superClass = this.superClass,
          body = this.body;

      if (withDeclaration) {
        var superClassName = superClass && (typeof superClass.name === 'string' && superClass.name || superClass.toString());
        return 'declare class ' + name + (superClassName ? ' extends ' + superClassName : '') + ' ' + body.toString();
      } else {
        return name;
      }
    }
  }, {
    key: 'properties',
    get: function get$$1() {
      var body = this.body,
          superClass = this.superClass;

      if (superClass == null) {
        return body.properties;
      }
      var bodyProps = body.properties;
      var superProps = superClass.unwrap().properties;
      if (superProps == null) {
        return bodyProps;
      }
      var seen = {};
      var seenStatic = {};
      var props = [];
      for (var i = 0; i < superProps.length; i++) {
        var prop = superProps[i];
        props.push(prop);
        if (prop.static) {
          seenStatic[prop.key] = i;
        } else {
          seen[prop.key] = i;
        }
      }
      for (var _i = 0; _i < bodyProps.length; _i++) {
        var _prop = bodyProps[_i];
        if (seen[_prop.key]) {
          props[_i] = _prop;
        } else {
          props.push(_prop);
        }
      }
      return props;
    }
  }]);
  return ClassDeclaration;
}(Declaration);

var PartialType = function (_Type) {
  inherits(PartialType, _Type);

  function PartialType() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, PartialType);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = PartialType.__proto__ || Object.getPrototypeOf(PartialType)).call.apply(_ref, [this].concat(args))), _this), _this.typeName = 'PartialType', _this.typeParameters = [], _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(PartialType, [{
    key: 'typeParameter',
    value: function typeParameter(id, bound, defaultType) {
      var target = new TypeParameter(this.context);
      target.id = id;
      target.bound = bound;
      target.default = defaultType;
      this.typeParameters.push(target);
      return target;
    }
  }, {
    key: 'apply',
    value: function apply() {
      var target = new TypeParameterApplication(this.context);
      target.parent = this;

      for (var _len2 = arguments.length, typeInstances = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        typeInstances[_key2] = arguments[_key2];
      }

      target.typeInstances = typeInstances;
      return target;
    }
  }, {
    key: 'errors',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input) {
      var constraints, type, hasErrors, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, error;

      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              constraints = this.constraints, type = this.type;
              hasErrors = false;
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context.prev = 5;
              _iterator = type.errors(validation, path, input)[Symbol.iterator]();

            case 7:
              if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                _context.next = 15;
                break;
              }

              error = _step.value;

              hasErrors = true;
              _context.next = 12;
              return error;

            case 12:
              _iteratorNormalCompletion = true;
              _context.next = 7;
              break;

            case 15:
              _context.next = 21;
              break;

            case 17:
              _context.prev = 17;
              _context.t0 = _context['catch'](5);
              _didIteratorError = true;
              _iteratorError = _context.t0;

            case 21:
              _context.prev = 21;
              _context.prev = 22;

              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }

            case 24:
              _context.prev = 24;

              if (!_didIteratorError) {
                _context.next = 27;
                break;
              }

              throw _iteratorError;

            case 27:
              return _context.finish(24);

            case 28:
              return _context.finish(21);

            case 29:
              if (!(!hasErrors && constraints)) {
                _context.next = 31;
                break;
              }

              return _context.delegateYield(collectConstraintErrors(this, validation, path, input), 't1', 31);

            case 31:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this, [[5, 17, 21, 29], [22,, 24, 28]]);
    })
  }, {
    key: 'accepts',
    value: function accepts(input) {
      var constraints = this.constraints,
          type = this.type;

      if (!type.accepts(input)) {
        return false;
      } else if (constraints && !constraintsAccept(this, input)) {
        return false;
      } else {
        return true;
      }
    }
  }, {
    key: 'compareWith',
    value: function compareWith(input) {
      if (input === this) {
        return 0;
      } else {
        return compareTypes(this.type, input);
      }
    }
  }, {
    key: 'toString',
    value: function toString(expand) {
      var type = this.type;

      return type.toString(expand);
    }

    /**
     * Get the inner type or value.
     */

  }, {
    key: 'unwrap',
    value: function unwrap() {
      return this.type.unwrap();
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return {
        typeName: this.typeName,
        typeParameters: this.typeParameters,
        type: this.type
      };
    }
  }]);
  return PartialType;
}(Type);

var ParameterizedClassDeclaration = function (_Declaration) {
  inherits(ParameterizedClassDeclaration, _Declaration);

  function ParameterizedClassDeclaration() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, ParameterizedClassDeclaration);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = ParameterizedClassDeclaration.__proto__ || Object.getPrototypeOf(ParameterizedClassDeclaration)).call.apply(_ref, [this].concat(args))), _this), _this.typeName = 'ParameterizedClassDeclaration', _this.shapeID = Symbol(), _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(ParameterizedClassDeclaration, [{
    key: 'errors',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input) {
      for (var _len2 = arguments.length, typeInstances = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
        typeInstances[_key2 - 3] = arguments[_key2];
      }

      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.delegateYield(getPartial.apply(undefined, [this].concat(toConsumableArray(typeInstances))).errors(validation, path, input), 't0', 1);

            case 1:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this);
    })
  }, {
    key: 'accepts',
    value: function accepts(input) {
      for (var _len3 = arguments.length, typeInstances = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        typeInstances[_key3 - 1] = arguments[_key3];
      }

      return getPartial.apply(undefined, [this].concat(toConsumableArray(typeInstances))).accepts(input);
    }
  }, {
    key: 'compareWith',
    value: function compareWith(input) {
      return getPartial(this).compareWith(input);
    }
  }, {
    key: 'unwrap',
    value: function unwrap() {
      for (var _len4 = arguments.length, typeInstances = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        typeInstances[_key4] = arguments[_key4];
      }

      return getPartial.apply(undefined, [this].concat(toConsumableArray(typeInstances))).type;
    }
  }, {
    key: 'isSuperClassOf',
    value: function isSuperClassOf(candidate) {
      return getPartial(this).type.isSuperClassOf(candidate);
    }
  }, {
    key: 'apply',
    value: function apply() {
      var target = new TypeParameterApplication(this.context);
      target.parent = this;

      for (var _len5 = arguments.length, typeInstances = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        typeInstances[_key5] = arguments[_key5];
      }

      target.typeInstances = typeInstances;
      return target;
    }
  }, {
    key: 'toString',
    value: function toString(withDeclaration) {
      if (!withDeclaration) {
        return this.name;
      }
      var partial = getPartial(this);
      var type = partial.type,
          typeParameters = partial.typeParameters;

      if (typeParameters.length === 0) {
        return partial.toString(true);
      }
      var items = [];
      for (var i = 0; i < typeParameters.length; i++) {
        var typeParameter = typeParameters[i];
        items.push(typeParameter.toString(true));
      }
      var superClass = type.superClass,
          body = type.body;

      var superClassName = superClass && (typeof superClass.name === 'string' && superClass.name || superClass.toString());
      return 'declare class ' + this.name + '<' + items.join(', ') + '>' + (superClassName ? ' extends ' + superClassName : '') + ' ' + body.toString();
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return getPartial(this).toJSON();
    }
  }, {
    key: 'superClass',
    get: function get$$1() {
      return getPartial(this).type.superClass;
    }
  }, {
    key: 'body',
    get: function get$$1() {
      return getPartial(this).type.body;
    }
  }, {
    key: 'properties',
    get: function get$$1() {
      return getPartial(this).type.properties;
    }
  }, {
    key: 'typeParameters',
    get: function get$$1() {
      return getPartial(this).typeParameters;
    }
  }]);
  return ParameterizedClassDeclaration;
}(Declaration);

function getPartial(parent) {
  var context = parent.context,
      bodyCreator = parent.bodyCreator;

  var partial = new PartialType(context);
  var body = bodyCreator(partial);
  if (Array.isArray(body)) {
    partial.type = context.class.apply(context, [parent.name].concat(toConsumableArray(body)));
  } else {
    partial.type = context.class(parent.name, body);
  }

  partial.type.shapeID = parent.shapeID;

  var typeParameters = partial.typeParameters;

  for (var _len6 = arguments.length, typeInstances = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
    typeInstances[_key6 - 1] = arguments[_key6];
  }

  var limit = Math.min(typeInstances.length, typeParameters.length);
  for (var i = 0; i < limit; i++) {
    var typeParameter = typeParameters[i];
    var typeInstance = typeInstances[i];
    if (typeParameter.bound && typeParameter.bound !== typeInstance) {
      // if the type parameter is already bound we need to
      // create an intersection type with this one.
      typeParameter.bound = context.intersect(typeParameter.bound, typeInstance);
    } else {
      typeParameter.bound = typeInstance;
    }
  }

  return partial;
}

var ExtendsDeclaration = function (_Declaration) {
  inherits(ExtendsDeclaration, _Declaration);

  function ExtendsDeclaration() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, ExtendsDeclaration);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = ExtendsDeclaration.__proto__ || Object.getPrototypeOf(ExtendsDeclaration)).call.apply(_ref, [this].concat(args))), _this), _this.typeName = 'ExtendsDeclaration', _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(ExtendsDeclaration, [{
    key: 'errors',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input) {
      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.delegateYield(this.type.errors(validation, path, input), 't0', 1);

            case 1:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this);
    })
  }, {
    key: 'unwrap',
    value: function unwrap() {
      return this.type.unwrap();
    }
  }, {
    key: 'toString',
    value: function toString(withDeclaration) {
      var type = this.type;

      if (withDeclaration) {
        return 'extends ' + type.toString();
      } else {
        return type.toString();
      }
    }
  }]);
  return ExtendsDeclaration;
}(Declaration);

var _marked$1 = /*#__PURE__*/_regeneratorRuntime.mark(collectErrorsWithIndexers);
var _marked2 = /*#__PURE__*/_regeneratorRuntime.mark(collectErrorsWithoutIndexers);
var _marked3 = /*#__PURE__*/_regeneratorRuntime.mark(collectErrorsExact);

var ObjectType = function (_Type) {
  inherits(ObjectType, _Type);

  function ObjectType() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, ObjectType);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = ObjectType.__proto__ || Object.getPrototypeOf(ObjectType)).call.apply(_ref, [this].concat(args))), _this), _this.typeName = 'ObjectType', _this.properties = [], _this.indexers = [], _this.callProperties = [], _this.exact = false, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(ObjectType, [{
    key: 'getProperty',


    /**
     * Get a property with the given name, or undefined if it does not exist.
     */
    value: function getProperty(key) {
      var properties = this.properties;
      var length = properties.length;

      for (var i = 0; i < length; i++) {
        var property = properties[i];
        if (property.key === key) {
          return property;
        }
      }
      return this.getIndexer(key);
    }
  }, {
    key: 'setProperty',
    value: function setProperty(key, value) {
      var optional = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var context = this.context,
          properties = this.properties;
      var length = properties.length;

      var newProp = new ObjectTypeProperty(context);
      newProp.key = key;
      newProp.value = value;
      newProp.optional = optional;

      for (var i = 0; i < length; i++) {
        var property = properties[i];
        if (property.key === key) {
          properties[i] = newProp;
          return;
        }
      }
      properties.push(newProp);
    }

    /**
     * Determine whether a property with the given name exists.
     */

  }, {
    key: 'hasProperty',
    value: function hasProperty(key) {
      var properties = this.properties;
      var length = properties.length;

      for (var i = 0; i < length; i++) {
        var property = properties[i];
        if (property.key === key) {
          return true;
        }
      }
      return this.hasIndexer(key);
    }

    /**
     * Get an indexer with which matches the given key type.
     */

  }, {
    key: 'getIndexer',
    value: function getIndexer(key) {
      var indexers = this.indexers;
      var length = indexers.length;

      for (var i = 0; i < length; i++) {
        var indexer = indexers[i];
        if (indexer.acceptsKey(key)) {
          return indexer;
        }
      }
    }

    /**
     * Determine whether an indexer exists which matches the given key type.
     */

  }, {
    key: 'hasIndexer',
    value: function hasIndexer(key) {
      var indexers = this.indexers;
      var length = indexers.length;

      for (var i = 0; i < length; i++) {
        var indexer = indexers[i];
        if (indexer.acceptsKey(key)) {
          return true;
        }
      }
      return false;
    }
  }, {
    key: 'errors',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input) {
      var hasCallProperties;
      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(input === null)) {
                _context.next = 4;
                break;
              }

              _context.next = 3;
              return [path, getErrorMessage('ERR_EXPECT_OBJECT'), this];

            case 3:
              return _context.abrupt('return');

            case 4:
              hasCallProperties = this.callProperties.length > 0;

              if (!hasCallProperties) {
                _context.next = 11;
                break;
              }

              if (acceptsCallProperties(this, input)) {
                _context.next = 9;
                break;
              }

              _context.next = 9;
              return [path, getErrorMessage('ERR_EXPECT_CALLABLE'), this];

            case 9:
              _context.next = 15;
              break;

            case 11:
              if (!((typeof input === 'undefined' ? 'undefined' : _typeof(input)) !== 'object')) {
                _context.next = 15;
                break;
              }

              _context.next = 14;
              return [path, getErrorMessage('ERR_EXPECT_OBJECT'), this];

            case 14:
              return _context.abrupt('return');

            case 15:
              if (!validation.inCycle(this, input)) {
                _context.next = 17;
                break;
              }

              return _context.abrupt('return');

            case 17:
              validation.startCycle(this, input);

              if (!(this.indexers.length > 0)) {
                _context.next = 26;
                break;
              }

              if (!(input instanceof Object && Array.isArray(input))) {
                _context.next = 23;
                break;
              }

              _context.next = 22;
              return [path, getErrorMessage('ERR_EXPECT_OBJECT'), this];

            case 22:
              return _context.abrupt('return');

            case 23:
              return _context.delegateYield(collectErrorsWithIndexers(this, validation, path, input), 't0', 24);

            case 24:
              _context.next = 27;
              break;

            case 26:
              return _context.delegateYield(collectErrorsWithoutIndexers(this, validation, path, input), 't1', 27);

            case 27:
              if (!this.exact) {
                _context.next = 29;
                break;
              }

              return _context.delegateYield(collectErrorsExact(this, validation, path, input), 't2', 29);

            case 29:
              validation.endCycle(this, input);

            case 30:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this);
    })
  }, {
    key: 'accepts',
    value: function accepts(input) {
      if (input === null) {
        return false;
      }
      var hasCallProperties = this.callProperties.length > 0;

      if (hasCallProperties) {
        if (!acceptsCallProperties(this, input)) {
          return false;
        }
      } else if ((typeof input === 'undefined' ? 'undefined' : _typeof(input)) !== 'object') {
        return false;
      }
      if (inValidationCycle(this, input)) {
        return true;
      }
      startValidationCycle(this, input);

      var result = void 0;
      if (this.indexers.length > 0) {
        result = acceptsWithIndexers(this, input);
      } else {
        result = acceptsWithoutIndexers(this, input);
      }
      if (result && this.exact) {
        result = acceptsExact(this, input);
      }
      endValidationCycle(this, input);
      return result;
    }
  }, {
    key: 'compareWith',
    value: function compareWith(input) {
      if (!(input instanceof ObjectType || input instanceof ClassDeclaration || input instanceof ParameterizedClassDeclaration)) {
        return -1;
      }
      var hasCallProperties = this.callProperties.length > 0;

      var isGreater = false;
      if (hasCallProperties) {
        var _result = compareTypeCallProperties(this, input);
        if (_result === -1) {
          return -1;
        } else if (_result === 1) {
          isGreater = true;
        }
      }

      var result = void 0;
      if (this.indexers.length > 0) {
        result = compareTypeWithIndexers(this, input);
      } else {
        result = compareTypeWithoutIndexers(this, input);
      }

      if (result === -1) {
        return -1;
      } else if (isGreater) {
        return 1;
      } else {
        return result;
      }
    }
  }, {
    key: 'toString',
    value: function toString() {
      var callProperties = this.callProperties,
          properties = this.properties,
          indexers = this.indexers;

      if (inToStringCycle(this)) {
        return '$Cycle<Object>';
      }
      startToStringCycle(this);
      var body = [];
      for (var i = 0; i < callProperties.length; i++) {
        body.push(callProperties[i].toString());
      }
      for (var _i = 0; _i < properties.length; _i++) {
        body.push(properties[_i].toString());
      }
      for (var _i2 = 0; _i2 < indexers.length; _i2++) {
        body.push(indexers[_i2].toString());
      }
      endToStringCycle(this);
      if (this.exact) {
        return '{|\n' + indent(body.join('\n')) + '\n|}';
      } else {
        return '{\n' + indent(body.join('\n')) + '\n}';
      }
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return {
        typeName: this.typeName,
        callProperties: this.callProperties,
        properties: this.properties,
        indexers: this.indexers,
        exact: this.exact
      };
    }
  }]);
  return ObjectType;
}(Type);

function acceptsCallProperties(type, input) {
  var callProperties = type.callProperties;

  for (var i = 0; i < callProperties.length; i++) {
    var callProperty = callProperties[i];
    if (callProperty.accepts(input)) {
      return true;
    }
  }
  return false;
}

function compareTypeCallProperties(type, input) {
  var callProperties = type.callProperties;

  var inputCallProperties = input.callProperties;
  var identicalCount = 0;
  loop: for (var i = 0; i < callProperties.length; i++) {
    var callProperty = callProperties[i];

    for (var j = 0; j < inputCallProperties.length; j++) {
      var inputCallProperty = inputCallProperties[j];
      var result = compareTypes(callProperty, inputCallProperty);
      if (result === 0) {
        identicalCount++;
        continue loop;
      } else if (result === 1) {
        continue loop;
      }
    }
    // If we got this far, nothing accepted.
    return -1;
  }
  if (identicalCount === callProperties.length) {
    return 0;
  } else {
    return 1;
  }
}

function acceptsWithIndexers(type, input) {
  var properties = type.properties,
      indexers = type.indexers;

  var seen = [];
  for (var i = 0; i < properties.length; i++) {
    var property = properties[i];
    if (!property.accepts(input)) {
      return false;
    }
    seen.push(property.key);
  }
  loop: for (var key in input) {
    if (seen.indexOf(key) !== -1) {
      continue;
    }
    var value = input[key];
    for (var _i3 = 0; _i3 < indexers.length; _i3++) {
      var indexer = indexers[_i3];
      if (indexer.acceptsKey(key) && indexer.acceptsValue(value)) {
        continue loop;
      }
    }

    // if we got this far the key / value did not accepts any indexers.
    return false;
  }
  return true;
}

function compareTypeWithIndexers(type, input) {
  var indexers = type.indexers,
      properties = type.properties;

  var inputIndexers = input.indexers;
  var inputProperties = input.properties;
  var isGreater = false;
  loop: for (var i = 0; i < properties.length; i++) {
    var property = properties[i];
    for (var j = 0; j < inputProperties.length; j++) {
      var inputProperty = inputProperties[j];
      if (inputProperty.key === property.key) {
        var result = compareTypes(property, inputProperty);
        if (result === -1) {
          return -1;
        } else if (result === 1) {
          isGreater = true;
        }
        continue loop;
      }
    }
  }
  loop: for (var _i4 = 0; _i4 < indexers.length; _i4++) {
    var indexer = indexers[_i4];
    for (var _j = 0; _j < inputIndexers.length; _j++) {
      var inputIndexer = inputIndexers[_j];
      var _result2 = compareTypes(indexer, inputIndexer);
      if (_result2 === 1) {
        isGreater = true;
        continue loop;
      } else if (_result2 === 0) {
        continue loop;
      }
    }
    // if we got this far, nothing accepted
    return -1;
  }
  return isGreater ? 1 : 0;
}

function acceptsWithoutIndexers(type, input) {
  var properties = type.properties;

  for (var i = 0; i < properties.length; i++) {
    var property = properties[i];
    if (!property.accepts(input)) {
      return false;
    }
  }
  return true;
}

function acceptsExact(type, input) {
  var properties = type.properties;

  var _loop = function _loop(key) {
    // eslint-disable-line guard-for-in
    if (!properties.some(function (property) {
      return property.key === key;
    })) {
      return {
        v: false
      };
    }
  };

  for (var key in input) {
    var _ret2 = _loop(key);

    if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
  }
  return true;
}

function compareTypeWithoutIndexers(type, input) {
  var properties = type.properties;

  var inputProperties = input.properties;
  var isGreater = false;
  loop: for (var i = 0; i < properties.length; i++) {
    var property = properties[i];
    for (var j = 0; j < inputProperties.length; j++) {
      var inputProperty = inputProperties[j];
      if (inputProperty.key === property.key) {
        var result = compareTypes(property.value, inputProperty.value);
        if (result === -1) {
          return -1;
        } else if (result === 1) {
          isGreater = true;
        }
        continue loop;
      }
    }
    return -1;
  }
  return isGreater ? 1 : 0;
}

function collectErrorsWithIndexers(type, validation, path, input) {
  var properties, indexers, seen, i, property, key, value, _i5, indexer;

  return _regeneratorRuntime.wrap(function collectErrorsWithIndexers$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          properties = type.properties, indexers = type.indexers;
          seen = [];
          i = 0;

        case 3:
          if (!(i < properties.length)) {
            _context2.next = 10;
            break;
          }

          property = properties[i];
          return _context2.delegateYield(property.errors(validation, path, input), 't0', 6);

        case 6:
          seen.push(property.key);

        case 7:
          i++;
          _context2.next = 3;
          break;

        case 10:
          _context2.t1 = _regeneratorRuntime.keys(input);

        case 11:
          if ((_context2.t2 = _context2.t1()).done) {
            _context2.next = 28;
            break;
          }

          key = _context2.t2.value;

          if (!(seen.indexOf(key) !== -1)) {
            _context2.next = 15;
            break;
          }

          return _context2.abrupt('continue', 11);

        case 15:
          value = input[key];
          _i5 = 0;

        case 17:
          if (!(_i5 < indexers.length)) {
            _context2.next = 24;
            break;
          }

          indexer = indexers[_i5];

          if (!(indexer.acceptsKey(key) && indexer.acceptsValue(value))) {
            _context2.next = 21;
            break;
          }

          return _context2.abrupt('continue', 11);

        case 21:
          _i5++;
          _context2.next = 17;
          break;

        case 24:
          _context2.next = 26;
          return [path.concat(key), getErrorMessage('ERR_NO_INDEXER'), type];

        case 26:
          _context2.next = 11;
          break;

        case 28:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked$1, this);
}

function collectErrorsWithoutIndexers(type, validation, path, input) {
  var properties, i, property;
  return _regeneratorRuntime.wrap(function collectErrorsWithoutIndexers$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          properties = type.properties;
          i = 0;

        case 2:
          if (!(i < properties.length)) {
            _context3.next = 8;
            break;
          }

          property = properties[i];
          return _context3.delegateYield(property.errors(validation, path, input), 't0', 5);

        case 5:
          i++;
          _context3.next = 2;
          break;

        case 8:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked2, this);
}

function collectErrorsExact(type, validation, path, input) {
  var _this2 = this;

  var properties, _loop2, key;

  return _regeneratorRuntime.wrap(function collectErrorsExact$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          properties = type.properties;
          _loop2 = /*#__PURE__*/_regeneratorRuntime.mark(function _loop2(key) {
            return _regeneratorRuntime.wrap(function _loop2$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (properties.some(function (property) {
                      return property.key === key;
                    })) {
                      _context4.next = 3;
                      break;
                    }

                    _context4.next = 3;
                    return [path, getErrorMessage('ERR_UNKNOWN_KEY', key), type];

                  case 3:
                  case 'end':
                    return _context4.stop();
                }
              }
            }, _loop2, _this2);
          });
          _context5.t0 = _regeneratorRuntime.keys(input);

        case 3:
          if ((_context5.t1 = _context5.t0()).done) {
            _context5.next = 8;
            break;
          }

          key = _context5.t1.value;
          return _context5.delegateYield(_loop2(key), 't2', 6);

        case 6:
          _context5.next = 3;
          break;

        case 8:
        case 'end':
          return _context5.stop();
      }
    }
  }, _marked3, this);
}

function indent(input) {
  var lines = input.split('\n');
  var length = lines.length;

  for (var i = 0; i < length; i++) {
    lines[i] = '  ' + lines[i];
  }
  return lines.join('\n');
}

var IntersectionType = function (_Type) {
  inherits(IntersectionType, _Type);

  function IntersectionType() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, IntersectionType);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = IntersectionType.__proto__ || Object.getPrototypeOf(IntersectionType)).call.apply(_ref, [this].concat(args))), _this), _this.typeName = 'IntersectionType', _this.types = [], _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(IntersectionType, [{
    key: 'errors',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input) {
      var types, length, i;
      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              types = this.types;
              length = types.length;
              i = 0;

            case 3:
              if (!(i < length)) {
                _context.next = 8;
                break;
              }

              return _context.delegateYield(types[i].errors(validation, path, input), 't0', 5);

            case 5:
              i++;
              _context.next = 3;
              break;

            case 8:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this);
    })

    /**
     * Get a property with the given name, or undefined if it does not exist.
     */

  }, {
    key: 'getProperty',
    value: function getProperty(key) {
      var types = this.types;
      var length = types.length;

      for (var i = length - 1; i >= 0; i--) {
        var type = types[i];
        if (typeof type.getProperty === 'function') {
          var prop = type.getProperty(key);
          if (prop) {
            return prop;
          }
        }
      }
    }

    /**
     * Determine whether a property with the given name exists.
     */

  }, {
    key: 'hasProperty',
    value: function hasProperty(key) {
      var types = this.types;
      var length = types.length;

      for (var i = 0; i < length; i++) {
        var type = types[i];
        if (typeof type.hasProperty === 'function' && type.hasProperty(key)) {
          return true;
        }
      }
      return false;
    }
  }, {
    key: 'accepts',
    value: function accepts(input) {
      var types = this.types;
      var length = types.length;

      for (var i = 0; i < length; i++) {
        var type = types[i];
        if (!type.accepts(input)) {
          return false;
        }
      }
      return true;
    }
  }, {
    key: 'compareWith',
    value: function compareWith(input) {
      var types = this.types;
      var identicalCount = 0;
      if (input instanceof IntersectionType) {
        var inputTypes = input.types;
        loop: for (var i = 0; i < types.length; i++) {
          var type = types[i];
          for (var j = 0; j < inputTypes.length; j++) {
            var result = compareTypes(type, inputTypes[i]);
            if (result === 0) {
              identicalCount++;
              continue loop;
            } else if (result === 1) {
              continue loop;
            }
          }
          // if we got this far then nothing accepted this type.
          return -1;
        }
        return identicalCount === types.length ? 0 : 1;
      } else {
        for (var _i = 0; _i < types.length; _i++) {
          var _type = types[_i];
          var _result = compareTypes(_type, input);
          if (_result === -1) {
            return -1;
          } else if (_result === 0) {
            identicalCount++;
          }
        }
        return identicalCount === types.length ? 0 : 1;
      }
    }
  }, {
    key: 'unwrap',
    value: function unwrap() {
      var _ref2;

      var callProperties = [];
      var properties = [];
      var indexers = [];
      var types = this.types,
          context = this.context;

      for (var i = 0; i < types.length; i++) {
        var type = types[i].unwrap();
        invariant(type instanceof ObjectType, 'Can only intersect object types');
        callProperties.push.apply(callProperties, toConsumableArray(type.callProperties));
        indexers.push.apply(indexers, toConsumableArray(type.indexers));
        mergeProperties(properties, type.properties);
      }
      return (_ref2 = context).object.apply(_ref2, callProperties.concat(properties, indexers));
    }
  }, {
    key: 'toString',
    value: function toString() {
      return this.types.join(' & ');
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return {
        typeName: this.typeName,
        types: this.types
      };
    }
  }]);
  return IntersectionType;
}(Type);

function getPropertyIndex(name, properties) {
  for (var i = 0; i < properties.length; i++) {
    if (properties[i].name === name) {
      return i;
    }
  }
  return -1;
}

function mergeProperties(target, source) {
  for (var i = 0; i < source.length; i++) {
    var typeProp = source[i];
    var index = getPropertyIndex(typeProp.key, target);
    if (index === -1) {
      target.push(typeProp);
    } else {
      target[index] = typeProp;
    }
  }
  return target;
}

var MixedType = function (_Type) {
  inherits(MixedType, _Type);

  function MixedType() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, MixedType);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = MixedType.__proto__ || Object.getPrototypeOf(MixedType)).call.apply(_ref, [this].concat(args))), _this), _this.typeName = 'MixedType', _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(MixedType, [{
    key: 'errors',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input) {
      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this);
    })
  }, {
    key: 'accepts',
    value: function accepts(input) {
      return true;
    }
  }, {
    key: 'toString',
    value: function toString() {
      return 'mixed';
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return {
        typeName: this.typeName
      };
    }
  }]);
  return MixedType;
}(Type);

var NumericLiteralType = function (_Type) {
  inherits(NumericLiteralType, _Type);

  function NumericLiteralType() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, NumericLiteralType);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = NumericLiteralType.__proto__ || Object.getPrototypeOf(NumericLiteralType)).call.apply(_ref, [this].concat(args))), _this), _this.typeName = 'NumericLiteralType', _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(NumericLiteralType, [{
    key: 'errors',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input) {
      var value;
      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              value = this.value;

              if (!(input !== value)) {
                _context.next = 4;
                break;
              }

              _context.next = 4;
              return [path, getErrorMessage('ERR_EXPECT_EXACT_VALUE', value), this];

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this);
    })
  }, {
    key: 'accepts',
    value: function accepts(input) {
      return input === this.value;
    }
  }, {
    key: 'compareWith',
    value: function compareWith(input) {
      if (input instanceof NumericLiteralType && input.value === this.value) {
        return 0;
      } else {
        return -1;
      }
    }
  }, {
    key: 'toString',
    value: function toString() {
      return '' + this.value;
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return {
        typeName: this.typeName,
        value: this.value
      };
    }
  }]);
  return NumericLiteralType;
}(Type);

var NumberType = function (_Type) {
  inherits(NumberType, _Type);

  function NumberType() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, NumberType);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = NumberType.__proto__ || Object.getPrototypeOf(NumberType)).call.apply(_ref, [this].concat(args))), _this), _this.typeName = 'NumberType', _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(NumberType, [{
    key: 'errors',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input) {
      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(typeof input !== 'number')) {
                _context.next = 3;
                break;
              }

              _context.next = 3;
              return [path, getErrorMessage('ERR_EXPECT_NUMBER'), this];

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this);
    })
  }, {
    key: 'accepts',
    value: function accepts(input) {
      return typeof input === 'number';
    }
  }, {
    key: 'compareWith',
    value: function compareWith(input) {
      if (input instanceof NumberType) {
        return 0;
      } else if (input instanceof NumericLiteralType) {
        return 1;
      } else {
        return -1;
      }
    }
  }, {
    key: 'toString',
    value: function toString() {
      return 'number';
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return {
        typeName: this.typeName
      };
    }
  }]);
  return NumberType;
}(Type);

var ParameterizedTypeAlias = function (_TypeAlias) {
  inherits(ParameterizedTypeAlias, _TypeAlias);

  function ParameterizedTypeAlias() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, ParameterizedTypeAlias);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = ParameterizedTypeAlias.__proto__ || Object.getPrototypeOf(ParameterizedTypeAlias)).call.apply(_ref, [this].concat(args))), _this), _this.typeName = 'ParameterizedTypeAlias', _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(ParameterizedTypeAlias, [{
    key: 'errors',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input) {
      for (var _len2 = arguments.length, typeInstances = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
        typeInstances[_key2 - 3] = arguments[_key2];
      }

      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.delegateYield(getPartial$1.apply(undefined, [this].concat(toConsumableArray(typeInstances))).errors(validation, path, input), 't0', 1);

            case 1:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this);
    })
  }, {
    key: 'accepts',
    value: function accepts(input) {
      for (var _len3 = arguments.length, typeInstances = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        typeInstances[_key3 - 1] = arguments[_key3];
      }

      var partial = getPartial$1.apply(undefined, [this].concat(toConsumableArray(typeInstances)));
      if (!partial.accepts(input)) {
        return false;
      } else if (!constraintsAccept(this, input)) {
        return false;
      } else {
        return true;
      }
    }
  }, {
    key: 'compareWith',
    value: function compareWith(input) {
      if (input === this) {
        return 0; // should never need this because it's taken care of by compareTypes.
      } else if (this.hasConstraints) {
        // if we have constraints the types cannot be the same
        return -1;
      } else {
        return compareTypes(getPartial$1(this), input);
      }
    }
  }, {
    key: 'hasProperty',
    value: function hasProperty(name) {
      for (var _len4 = arguments.length, typeInstances = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        typeInstances[_key4 - 1] = arguments[_key4];
      }

      var inner = this.unwrap.apply(this, toConsumableArray(typeInstances));
      if (inner && typeof inner.hasProperty === 'function') {
        return inner.hasProperty.apply(inner, [name].concat(toConsumableArray(typeInstances)));
      } else {
        return false;
      }
    }
  }, {
    key: 'getProperty',
    value: function getProperty(name) {
      for (var _len5 = arguments.length, typeInstances = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        typeInstances[_key5 - 1] = arguments[_key5];
      }

      var inner = this.unwrap.apply(this, toConsumableArray(typeInstances));
      if (inner && typeof inner.getProperty === 'function') {
        return inner.getProperty.apply(inner, [name].concat(toConsumableArray(typeInstances)));
      }
    }

    /**
     * Get the inner type or value.
     */

  }, {
    key: 'unwrap',
    value: function unwrap() {
      for (var _len6 = arguments.length, typeInstances = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        typeInstances[_key6] = arguments[_key6];
      }

      return getPartial$1.apply(undefined, [this].concat(toConsumableArray(typeInstances))).unwrap();
    }
  }, {
    key: 'toString',
    value: function toString(withDeclaration) {
      var partial = getPartial$1(this);
      var typeParameters = partial.typeParameters;

      var items = [];
      for (var i = 0; i < typeParameters.length; i++) {
        var typeParameter = typeParameters[i];
        items.push(typeParameter.toString(true));
      }

      var name = this.name;

      var identifier = typeParameters.length > 0 ? name + '<' + items.join(', ') + '>' : name;

      if (withDeclaration) {
        return 'type ' + identifier + ' = ' + partial.toString() + ';';
      } else {
        return identifier;
      }
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      var partial = getPartial$1(this);
      return partial.toJSON();
    }
  }, {
    key: 'properties',
    get: function get$$1() {
      return getPartial$1(this).type.properties;
    }
  }]);
  return ParameterizedTypeAlias;
}(TypeAlias);

function getPartial$1(parent) {
  var typeCreator = parent.typeCreator,
      context = parent.context,
      name = parent.name;

  var partial = new PartialType(context);
  partial.name = name;
  partial.type = typeCreator(partial);
  partial.constraints = parent.constraints;

  var typeParameters = partial.typeParameters;

  for (var _len7 = arguments.length, typeInstances = Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
    typeInstances[_key7 - 1] = arguments[_key7];
  }

  var limit = Math.min(typeInstances.length, typeParameters.length);
  for (var i = 0; i < limit; i++) {
    var typeParameter = typeParameters[i];
    var typeInstance = typeInstances[i];
    if (typeParameter.bound && typeParameter.bound !== typeInstance) {
      // if the type parameter is already bound we need to
      // create an intersection type with this one.
      typeParameter.bound = context.intersect(typeParameter.bound, typeInstance);
    } else {
      typeParameter.bound = typeInstance;
    }
  }

  return partial;
}

var ParameterizedFunctionType = function (_Type) {
  inherits(ParameterizedFunctionType, _Type);

  function ParameterizedFunctionType() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, ParameterizedFunctionType);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = ParameterizedFunctionType.__proto__ || Object.getPrototypeOf(ParameterizedFunctionType)).call.apply(_ref, [this].concat(args))), _this), _this.typeName = 'ParameterizedFunctionType', _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(ParameterizedFunctionType, [{
    key: 'errors',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input) {
      for (var _len2 = arguments.length, typeInstances = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
        typeInstances[_key2 - 3] = arguments[_key2];
      }

      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.delegateYield(getPartial$2.apply(undefined, [this].concat(toConsumableArray(typeInstances))).errors(validation, path, input), 't0', 1);

            case 1:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this);
    })
  }, {
    key: 'accepts',
    value: function accepts(input) {
      for (var _len3 = arguments.length, typeInstances = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        typeInstances[_key3 - 1] = arguments[_key3];
      }

      return getPartial$2.apply(undefined, [this].concat(toConsumableArray(typeInstances))).accepts(input);
    }
  }, {
    key: 'compareWith',
    value: function compareWith(input) {
      return compareTypes(getPartial$2(this), input);
    }
  }, {
    key: 'acceptsParams',
    value: function acceptsParams() {
      var _getPartial$type;

      return (_getPartial$type = getPartial$2(this).type).acceptsParams.apply(_getPartial$type, arguments);
    }
  }, {
    key: 'acceptsReturn',
    value: function acceptsReturn(input) {
      return getPartial$2(this).type.acceptsReturn(input);
    }
  }, {
    key: 'assertParams',
    value: function assertParams() {
      var _getPartial$type2;

      return (_getPartial$type2 = getPartial$2(this).type).assertParams.apply(_getPartial$type2, arguments);
    }
  }, {
    key: 'assertReturn',
    value: function assertReturn(input) {
      return getPartial$2(this).type.assertReturn(input);
    }

    /**
     * Get the inner type or value.
     */

  }, {
    key: 'unwrap',
    value: function unwrap() {
      for (var _len4 = arguments.length, typeInstances = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        typeInstances[_key4] = arguments[_key4];
      }

      return getPartial$2.apply(undefined, [this].concat(toConsumableArray(typeInstances))).unwrap();
    }
  }, {
    key: 'toString',
    value: function toString() {
      var partial = getPartial$2(this);
      var type = partial.type,
          typeParameters = partial.typeParameters;

      if (typeParameters.length === 0) {
        return type.toString();
      }
      var items = [];
      for (var i = 0; i < typeParameters.length; i++) {
        var typeParameter = typeParameters[i];
        items.push(typeParameter.toString(true));
      }
      return '<' + items.join(', ') + '> ' + type.toString();
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      var partial = getPartial$2(this);
      return partial.toJSON();
    }
  }, {
    key: 'typeParameters',
    get: function get$$1() {
      return getPartial$2(this).typeParameters;
    }
  }, {
    key: 'params',
    get: function get$$1() {
      return getPartial$2(this).type.params;
    }
  }, {
    key: 'rest',
    get: function get$$1() {
      return getPartial$2(this).type.rest;
    }
  }, {
    key: 'returnType',
    get: function get$$1() {
      return getPartial$2(this).type.returnType;
    }
  }]);
  return ParameterizedFunctionType;
}(Type);

function getPartial$2(parent) {
  var context = parent.context,
      bodyCreator = parent.bodyCreator;

  var partial = new PartialType(context);
  var body = bodyCreator(partial);
  partial.type = context.function.apply(context, toConsumableArray(body));

  var typeParameters = partial.typeParameters;

  for (var _len5 = arguments.length, typeInstances = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
    typeInstances[_key5 - 1] = arguments[_key5];
  }

  var limit = Math.min(typeInstances.length, typeParameters.length);
  for (var i = 0; i < limit; i++) {
    var typeParameter = typeParameters[i];
    var typeInstance = typeInstances[i];
    if (typeParameter.bound && typeParameter.bound !== typeInstance) {
      // if the type parameter is already bound we need to
      // create an intersection type with this one.
      typeParameter.bound = context.intersect(typeParameter.bound, typeInstance);
    } else {
      typeParameter.bound = typeInstance;
    }
  }

  return partial;
}

var RefinementType = function (_Type) {
  inherits(RefinementType, _Type);

  function RefinementType() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, RefinementType);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = RefinementType.__proto__ || Object.getPrototypeOf(RefinementType)).call.apply(_ref, [this].concat(args))), _this), _this.typeName = 'RefinementType', _this.constraints = [], _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(RefinementType, [{
    key: 'addConstraint',
    value: function addConstraint() {
      for (var _len2 = arguments.length, constraints = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        constraints[_key2] = arguments[_key2];
      }

      addConstraints.apply(undefined, [this].concat(toConsumableArray(constraints)));
      return this;
    }
  }, {
    key: 'errors',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input) {
      var type, hasErrors, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, error;

      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              type = this.type;
              hasErrors = false;
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context.prev = 5;
              _iterator = type.errors(validation, path, input)[Symbol.iterator]();

            case 7:
              if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                _context.next = 15;
                break;
              }

              error = _step.value;

              hasErrors = true;
              _context.next = 12;
              return error;

            case 12:
              _iteratorNormalCompletion = true;
              _context.next = 7;
              break;

            case 15:
              _context.next = 21;
              break;

            case 17:
              _context.prev = 17;
              _context.t0 = _context['catch'](5);
              _didIteratorError = true;
              _iteratorError = _context.t0;

            case 21:
              _context.prev = 21;
              _context.prev = 22;

              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }

            case 24:
              _context.prev = 24;

              if (!_didIteratorError) {
                _context.next = 27;
                break;
              }

              throw _iteratorError;

            case 27:
              return _context.finish(24);

            case 28:
              return _context.finish(21);

            case 29:
              if (hasErrors) {
                _context.next = 31;
                break;
              }

              return _context.delegateYield(collectConstraintErrors(this, validation, path, input), 't1', 31);

            case 31:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this, [[5, 17, 21, 29], [22,, 24, 28]]);
    })
  }, {
    key: 'accepts',
    value: function accepts(input) {
      var type = this.type;

      if (!type.accepts(input)) {
        return false;
      } else if (!constraintsAccept(this, input)) {
        return false;
      } else {
        return true;
      }
    }
  }, {
    key: 'compareWith',
    value: function compareWith(input) {
      if (input === this) {
        return 0;
      } else {
        return -1;
      }
    }
  }, {
    key: 'apply',
    value: function apply() {
      var target = new TypeParameterApplication(this.context);
      target.parent = this;

      for (var _len3 = arguments.length, typeInstances = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        typeInstances[_key3] = arguments[_key3];
      }

      target.typeInstances = typeInstances;
      return target;
    }

    /**
     * Get the inner type or value.
     */

  }, {
    key: 'unwrap',
    value: function unwrap() {
      return this.type.unwrap();
    }
  }, {
    key: 'hasProperty',
    value: function hasProperty(name) {
      var inner = this.unwrap();
      if (inner && typeof inner.hasProperty === 'function') {
        return inner.hasProperty(name);
      } else {
        return false;
      }
    }
  }, {
    key: 'getProperty',
    value: function getProperty(name) {
      var inner = this.unwrap();
      if (inner && typeof inner.getProperty === 'function') {
        return inner.getProperty(name);
      }
    }
  }, {
    key: 'toString',
    value: function toString() {
      var type = this.type;

      return '$Refinment<' + type.toString() + '>';
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return {
        typeName: this.typeName,
        type: this.type
      };
    }
  }]);
  return RefinementType;
}(Type);

var StringLiteralType = function (_Type) {
  inherits(StringLiteralType, _Type);

  function StringLiteralType() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, StringLiteralType);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = StringLiteralType.__proto__ || Object.getPrototypeOf(StringLiteralType)).call.apply(_ref, [this].concat(args))), _this), _this.typeName = 'StringLiteralType', _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(StringLiteralType, [{
    key: 'errors',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input) {
      var value;
      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              value = this.value;

              if (!(input !== value)) {
                _context.next = 4;
                break;
              }

              _context.next = 4;
              return [path, getErrorMessage('ERR_EXPECT_EXACT_VALUE', this.toString()), this];

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this);
    })
  }, {
    key: 'accepts',
    value: function accepts(input) {
      return input === this.value;
    }
  }, {
    key: 'compareWith',
    value: function compareWith(input) {
      if (input instanceof StringLiteralType && input.value === this.value) {
        return 0;
      } else {
        return -1;
      }
    }
  }, {
    key: 'toString',
    value: function toString() {
      return JSON.stringify(this.value);
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return {
        typeName: this.typeName,
        value: this.value
      };
    }
  }]);
  return StringLiteralType;
}(Type);

var StringType = function (_Type) {
  inherits(StringType, _Type);

  function StringType() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, StringType);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = StringType.__proto__ || Object.getPrototypeOf(StringType)).call.apply(_ref, [this].concat(args))), _this), _this.typeName = 'StringType', _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(StringType, [{
    key: 'errors',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input) {
      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(typeof input !== 'string')) {
                _context.next = 3;
                break;
              }

              _context.next = 3;
              return [path, getErrorMessage('ERR_EXPECT_STRING'), this];

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this);
    })
  }, {
    key: 'accepts',
    value: function accepts(input) {
      return typeof input === 'string';
    }
  }, {
    key: 'compareWith',
    value: function compareWith(input) {
      if (input instanceof StringLiteralType) {
        return 1;
      } else if (input instanceof StringType) {
        return 0;
      } else {
        return -1;
      }
    }
  }, {
    key: 'toString',
    value: function toString() {
      return 'string';
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return {
        typeName: this.typeName
      };
    }
  }]);
  return StringType;
}(Type);

var SymbolLiteralType = function (_Type) {
  inherits(SymbolLiteralType, _Type);

  function SymbolLiteralType() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, SymbolLiteralType);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = SymbolLiteralType.__proto__ || Object.getPrototypeOf(SymbolLiteralType)).call.apply(_ref, [this].concat(args))), _this), _this.typeName = 'SymbolLiteralType', _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(SymbolLiteralType, [{
    key: 'errors',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input) {
      var value;
      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              value = this.value;

              if (!(input !== value)) {
                _context.next = 4;
                break;
              }

              _context.next = 4;
              return [path, getErrorMessage('ERR_EXPECT_EXACT_VALUE', this.toString()), this];

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this);
    })
  }, {
    key: 'accepts',
    value: function accepts(input) {
      return input === this.value;
    }
  }, {
    key: 'compareWith',
    value: function compareWith(input) {
      if (input instanceof SymbolLiteralType && input.value === this.value) {
        return 0;
      } else {
        return -1;
      }
    }
  }, {
    key: 'toString',
    value: function toString() {
      return 'typeof ' + String(this.value);
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return {
        typeName: this.typeName,
        value: this.value
      };
    }
  }]);
  return SymbolLiteralType;
}(Type);

var SymbolType = function (_Type) {
  inherits(SymbolType, _Type);

  function SymbolType() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, SymbolType);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = SymbolType.__proto__ || Object.getPrototypeOf(SymbolType)).call.apply(_ref, [this].concat(args))), _this), _this.typeName = 'SymbolType', _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(SymbolType, [{
    key: 'errors',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input) {
      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!((typeof input === 'undefined' ? 'undefined' : _typeof(input)) !== 'symbol')) {
                _context.next = 3;
                break;
              }

              _context.next = 3;
              return [path, getErrorMessage('ERR_EXPECT_SYMBOL'), this];

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this);
    })
  }, {
    key: 'accepts',
    value: function accepts(input) {
      return (typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'symbol';
    }
  }, {
    key: 'compareWith',
    value: function compareWith(input) {
      if (input instanceof SymbolLiteralType) {
        return 1;
      } else if (input instanceof SymbolType) {
        return 0;
      } else {
        return -1;
      }
    }
  }, {
    key: 'toString',
    value: function toString() {
      return 'Symbol';
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return {
        typeName: this.typeName
      };
    }
  }]);
  return SymbolType;
}(Type);

/**
 * # ThisType
 * Captures a reference to a particular instance of a class or a value,
 * and uses that value to perform an identity check.
 * In the case that `this` is undefined, any value will be permitted.
 */

var ThisType = function (_Type) {
  inherits(ThisType, _Type);

  function ThisType() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, ThisType);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = ThisType.__proto__ || Object.getPrototypeOf(ThisType)).call.apply(_ref, [this].concat(args))), _this), _this.typeName = 'ThisType', _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(ThisType, [{
    key: 'errors',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input) {
      var recorded;
      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              recorded = this.recorded;

              if (!(input === recorded)) {
                _context.next = 5;
                break;
              }

              return _context.abrupt('return');

            case 5:
              if (!(typeof recorded === 'function' && input instanceof recorded)) {
                _context.next = 9;
                break;
              }

              return _context.abrupt('return');

            case 9:
              if (!(recorded != null)) {
                _context.next = 12;
                break;
              }

              _context.next = 12;
              return [path, getErrorMessage('ERR_EXPECT_THIS'), this];

            case 12:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this);
    })
  }, {
    key: 'accepts',
    value: function accepts(input) {
      var recorded = this.recorded;

      if (input === recorded) {
        return true;
      } else if (typeof recorded === 'function' && input instanceof recorded) {
        return true;
      } else if (recorded != null) {
        return false;
      } else {
        return true;
      }
    }
  }, {
    key: 'compareWith',
    value: function compareWith(input) {
      if (!(input instanceof ThisType)) {
        return -1;
      } else if (input.recorded && this.recorded) {
        return input.recorded === this.recorded ? 0 : -1;
      } else if (this.recorded) {
        return 0;
      } else {
        return 1;
      }
    }

    /**
     * Get the inner type.
     */

  }, {
    key: 'unwrap',
    value: function unwrap() {
      return this;
    }
  }, {
    key: 'toString',
    value: function toString(withBinding) {
      return 'this';
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return {
        typeName: this.typeName
      };
    }
  }]);
  return ThisType;
}(Type);

var warnedInstances$1 = new WeakSet();

var TypeBox = function (_Type) {
  inherits(TypeBox, _Type);

  function TypeBox() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, TypeBox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = TypeBox.__proto__ || Object.getPrototypeOf(TypeBox)).call.apply(_ref, [this].concat(args))), _this), _this.typeName = 'TypeBox', _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(TypeBox, [{
    key: 'errors',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input) {
      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.delegateYield(this.type.errors(validation, path, input), 't0', 1);

            case 1:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this);
    })
  }, {
    key: 'accepts',
    value: function accepts(input) {
      return this.type.accepts(input);
    }
  }, {
    key: 'compareWith',
    value: function compareWith(input) {
      return compareTypes(this.type, input);
    }
  }, {
    key: 'apply',
    value: function apply() {
      var target = new TypeParameterApplication(this.context);
      target.parent = this.type;

      for (var _len2 = arguments.length, typeInstances = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        typeInstances[_key2] = arguments[_key2];
      }

      target.typeInstances = typeInstances;
      return target;
    }

    /**
     * Get the inner type or value.
     */

  }, {
    key: 'unwrap',
    value: function unwrap() {
      return this.type.unwrap();
    }
  }, {
    key: 'toString',
    value: function toString() {
      return this.type.toString();
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return this.type.toJSON();
    }
  }, {
    key: 'name',
    get: function get$$1() {
      return this.type.name;
    }
  }, {
    key: 'type',
    get: function get$$1() {
      var reveal = this.reveal;

      var type = reveal();
      if (!type) {
        if (!warnedInstances$1.has(this)) {
          this.context.emitWarningMessage('Failed to reveal boxed type.');
          warnedInstances$1.add(this);
        }
        return this.context.mixed();
      } else if (!(type instanceof Type)) {
        // we got a boxed reference to something like a class
        return this.context.ref(type);
      }
      return type;
    }
  }]);
  return TypeBox;
}(Type);

var warnedMissing = {};

var TypeReference = function (_Type) {
  inherits(TypeReference, _Type);

  function TypeReference() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, TypeReference);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = TypeReference.__proto__ || Object.getPrototypeOf(TypeReference)).call.apply(_ref, [this].concat(args))), _this), _this.typeName = 'TypeReference', _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(TypeReference, [{
    key: 'errors',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input) {
      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.delegateYield(this.type.errors(validation, path, input), 't0', 1);

            case 1:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this);
    })
  }, {
    key: 'accepts',
    value: function accepts(input) {
      return this.type.accepts(input);
    }
  }, {
    key: 'compareWith',
    value: function compareWith(input) {
      return compareTypes(this.type, input);
    }
  }, {
    key: 'apply',
    value: function apply() {
      var target = new TypeParameterApplication(this.context);
      target.parent = this;

      for (var _len2 = arguments.length, typeInstances = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        typeInstances[_key2] = arguments[_key2];
      }

      target.typeInstances = typeInstances;
      return target;
    }

    /**
     * Get the inner type or value.
     */

  }, {
    key: 'unwrap',
    value: function unwrap() {
      return this.type.unwrap();
    }
  }, {
    key: 'toString',
    value: function toString() {
      return this.name;
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return {
        typeName: this.typeName,
        name: this.name
      };
    }
  }, {
    key: 'type',
    get: function get$$1() {
      var context = this.context,
          name = this.name;

      var type = context.get(name);
      if (!type) {
        if (!warnedMissing[name]) {
          context.emitWarningMessage('Cannot resolve type: ' + name);
          warnedMissing[name] = true;
        }
        return context.any();
      }
      return type;
    }
  }]);
  return TypeReference;
}(Type);

var warnedInstances$2 = new WeakSet();

var RevealedName = Symbol('RevealedName');
var RevealedValue = Symbol('RevealedValue');

var TypeTDZ = function (_Type) {
  inherits(TypeTDZ, _Type);

  function TypeTDZ() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, TypeTDZ);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = TypeTDZ.__proto__ || Object.getPrototypeOf(TypeTDZ)).call.apply(_ref, [this].concat(args))), _this), _this.typeName = 'TypeTDZ', _this[RevealedName] = undefined, _this[RevealedValue] = undefined, _temp), possibleConstructorReturn(_this, _ret);
  }

  // Issue 252


  // Issue 252


  createClass(TypeTDZ, [{
    key: 'errors',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input) {
      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.delegateYield(getRevealed(this).errors(validation, path, input), 't0', 1);

            case 1:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this);
    })
  }, {
    key: 'accepts',
    value: function accepts(input) {
      return getRevealed(this).accepts(input);
    }
  }, {
    key: 'compareWith',
    value: function compareWith(input) {
      return compareTypes(getRevealed(this), input);
    }
  }, {
    key: 'apply',
    value: function apply() {
      var target = new TypeParameterApplication(this.context);
      target.parent = getRevealed(this);

      for (var _len2 = arguments.length, typeInstances = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        typeInstances[_key2] = arguments[_key2];
      }

      target.typeInstances = typeInstances;
      return target;
    }

    /**
     * Get the inner type or value.
     */

  }, {
    key: 'unwrap',
    value: function unwrap() {
      return getRevealed(this).unwrap();
    }
  }, {
    key: 'hasProperty',
    value: function hasProperty(name) {
      var inner = this.unwrap();
      if (inner && typeof inner.hasProperty === 'function') {
        return inner.hasProperty(name);
      } else {
        return false;
      }
    }
  }, {
    key: 'getProperty',
    value: function getProperty(name) {
      var inner = this.unwrap();
      if (inner && typeof inner.getProperty === 'function') {
        return inner.getProperty(name);
      }
    }
  }, {
    key: 'toString',
    value: function toString() {
      return getRevealed(this).toString();
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return getRevealed(this).toJSON();
    }
  }, {
    key: 'name',
    get: function get$$1() {
      var name = this[RevealedName];
      if (!name) {
        name = getRevealed(this).name;
      }
      return name;
    },
    set: function set$$1(value) {
      this[RevealedName] = value;
    }
  }]);
  return TypeTDZ;
}(Type);

function getRevealed(container) {
  var existing = container[RevealedValue];
  if (existing) {
    return existing;
  } else {
    var reveal = container.reveal;

    var type = reveal();
    if (!type) {
      if (!warnedInstances$2.has(container)) {
        var name = container[RevealedName];
        if (name) {
          container.context.emitWarningMessage('Failed to reveal type called "' + name + '" in Temporal Dead Zone.');
        } else {
          container.context.emitWarningMessage('Failed to reveal unknown type in Temporal Dead Zone.');
        }
        warnedInstances$2.add(container);
      }
      return container.context.mixed();
    } else if (!(type instanceof Type)) {
      // we got a boxed reference to something like a class
      return container.context.ref(type);
    }
    return type;
  }
}

var UnionType = function (_Type) {
  inherits(UnionType, _Type);

  function UnionType() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, UnionType);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = UnionType.__proto__ || Object.getPrototypeOf(UnionType)).call.apply(_ref, [this].concat(args))), _this), _this.typeName = 'UnionType', _this.types = [], _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(UnionType, [{
    key: 'errors',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input) {
      var types, length, i, type;
      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              types = this.types;
              length = types.length;
              i = 0;

            case 3:
              if (!(i < length)) {
                _context.next = 10;
                break;
              }

              type = types[i];

              if (!type.accepts(input)) {
                _context.next = 7;
                break;
              }

              return _context.abrupt('return');

            case 7:
              i++;
              _context.next = 3;
              break;

            case 10:
              _context.next = 12;
              return [path, getErrorMessage('ERR_NO_UNION', this.toString()), this];

            case 12:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this);
    })
  }, {
    key: 'accepts',
    value: function accepts(input) {
      var types = this.types;
      var length = types.length;

      for (var i = 0; i < length; i++) {
        var type = types[i];
        if (type.accepts(input)) {
          return true;
        }
      }
      return false;
    }
  }, {
    key: 'compareWith',
    value: function compareWith(input) {
      var types = this.types;
      if (input instanceof UnionType) {
        var inputTypes = input.types;
        var identicalCount = 0;
        loop: for (var i = 0; i < types.length; i++) {
          var type = types[i];
          for (var j = 0; j < inputTypes.length; j++) {
            var result = compareTypes(type, inputTypes[i]);
            if (result === 0) {
              identicalCount++;
              continue loop;
            } else if (result === 1) {
              continue loop;
            }
          }
          // if we got this far then nothing accepted this type.
          return -1;
        }

        if (identicalCount === types.length) {
          return 0;
        } else {
          return 1;
        }
      } else {
        for (var _i = 0; _i < types.length; _i++) {
          var _type = types[_i];
          if (compareTypes(_type, input) >= 0) {
            return 1;
          }
        }
        return -1;
      }
    }
  }, {
    key: 'toString',
    value: function toString() {
      var types = this.types;

      var normalized = new Array(types.length);
      for (var i = 0; i < types.length; i++) {
        var type = types[i];
        if (type.typeName === 'FunctionType' || type.typeName === 'ParameterizedFunctionType') {
          normalized[i] = '(' + type.toString() + ')';
        } else {
          normalized[i] = type.toString();
        }
      }
      return normalized.join(' | ');
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return {
        typeName: this.typeName,
        types: this.types
      };
    }
  }]);
  return UnionType;
}(Type);

function registerPrimitiveTypes(t) {
  primitiveTypes.null = Object.freeze(new NullLiteralType(t));
  primitiveTypes.empty = Object.freeze(new EmptyType(t));
  primitiveTypes.number = Object.freeze(new NumberType(t));
  primitiveTypes.boolean = Object.freeze(new BooleanType(t));
  primitiveTypes.string = Object.freeze(new StringType(t));
  primitiveTypes.symbol = Object.freeze(new SymbolType(t));
  primitiveTypes.any = Object.freeze(new AnyType(t));
  primitiveTypes.mixed = Object.freeze(new MixedType(t));
  primitiveTypes.void = Object.freeze(new VoidType(t));
  primitiveTypes.existential = Object.freeze(new ExistentialType(t));
  return t;
}

function registerBuiltinTypeConstructors(t) {

  t.declareTypeConstructor({
    name: 'Date',
    impl: Date,
    typeName: 'DateType',
    errors: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input) {
      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (input instanceof Date) {
                _context.next = 5;
                break;
              }

              _context.next = 3;
              return [path, getErrorMessage('ERR_EXPECT_INSTANCEOF', 'Date'), this];

            case 3:
              _context.next = 8;
              break;

            case 5:
              if (!isNaN(input.getTime())) {
                _context.next = 8;
                break;
              }

              _context.next = 8;
              return [path, getErrorMessage('ERR_INVALID_DATE'), this];

            case 8:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this);
    }),
    accepts: function accepts(input) {
      return input instanceof Date && !isNaN(input.getTime());
    },
    compareWith: function compareWith(input) {
      if (input.typeName === 'DateType') {
        return 0;
      }
      return -1;
    },
    inferTypeParameters: function inferTypeParameters(input) {
      return [];
    }
  });

  t.declareTypeConstructor({
    name: 'Promise',
    impl: Promise,
    typeName: 'PromiseType',
    errors: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input, futureType) {
      var context;
      return _regeneratorRuntime.wrap(function errors$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              invariant(futureType, 'Must specify type parameter for Promise.');
              context = this.context;

              if (context.checkPredicate('Promise', input)) {
                _context2.next = 5;
                break;
              }

              _context2.next = 5;
              return [path, getErrorMessage('ERR_EXPECT_PROMISE', futureType), this];

            case 5:
            case 'end':
              return _context2.stop();
          }
        }
      }, errors, this);
    }),
    accepts: function accepts(input) {
      var context = this.context;

      return context.checkPredicate('Promise', input);
    },
    compareWith: function compareWith(input) {
      if (input.typeName === 'PromiseType') {
        return 0;
      }
      return -1;
    },
    inferTypeParameters: function inferTypeParameters(input) {
      return [];
    }
  });

  t.declareTypeConstructor({
    name: 'Map',
    impl: Map,
    typeName: 'MapType',
    errors: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input, keyType, valueType) {
      var context, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _ref, _ref2, key, value;

      return _regeneratorRuntime.wrap(function errors$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              invariant(keyType, 'Must specify two type parameters for Map.');
              invariant(valueType, 'Must specify two type parameters for Map.');
              context = this.context;

              if (context.checkPredicate('Map', input)) {
                _context3.next = 7;
                break;
              }

              _context3.next = 6;
              return [path, getErrorMessage('ERR_EXPECT_INSTANCEOF', 'Map'), this];

            case 6:
              return _context3.abrupt('return');

            case 7:
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context3.prev = 10;
              _iterator = input[Symbol.iterator]();

            case 12:
              if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                _context3.next = 24;
                break;
              }

              _ref = _step.value;
              _ref2 = slicedToArray(_ref, 2);
              key = _ref2[0];
              value = _ref2[1];

              if (keyType.accepts(key)) {
                _context3.next = 20;
                break;
              }

              _context3.next = 20;
              return [path, getErrorMessage('ERR_EXPECT_KEY_TYPE', keyType), this];

            case 20:
              return _context3.delegateYield(valueType.errors(validation, path.concat(key), value), 't0', 21);

            case 21:
              _iteratorNormalCompletion = true;
              _context3.next = 12;
              break;

            case 24:
              _context3.next = 30;
              break;

            case 26:
              _context3.prev = 26;
              _context3.t1 = _context3['catch'](10);
              _didIteratorError = true;
              _iteratorError = _context3.t1;

            case 30:
              _context3.prev = 30;
              _context3.prev = 31;

              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }

            case 33:
              _context3.prev = 33;

              if (!_didIteratorError) {
                _context3.next = 36;
                break;
              }

              throw _iteratorError;

            case 36:
              return _context3.finish(33);

            case 37:
              return _context3.finish(30);

            case 38:
            case 'end':
              return _context3.stop();
          }
        }
      }, errors, this, [[10, 26, 30, 38], [31,, 33, 37]]);
    }),
    accepts: function accepts(input, keyType, valueType) {
      var context = this.context;

      if (!context.checkPredicate('Map', input)) {
        return false;
      }
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = input[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _ref3 = _step2.value;

          var _ref4 = slicedToArray(_ref3, 2);

          var key = _ref4[0];
          var value = _ref4[1];

          if (!keyType.accepts(key) || !valueType.accepts(value)) {
            return false;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return true;
    },
    compareWith: function compareWith(input) {
      if (input.typeName === 'MapType') {
        return 0;
      }
      return -1;
    },
    inferTypeParameters: function inferTypeParameters(input) {
      var keyTypes = [];
      var valueTypes = [];
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        loop: for (var _iterator3 = input[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _ref5 = _step3.value;

          var _ref6 = slicedToArray(_ref5, 2);

          var key = _ref6[0];
          var value = _ref6[1];

          findKey: {
            for (var i = 0; i < keyTypes.length; i++) {
              var type = keyTypes[i];
              if (type.accepts(key)) {
                break findKey;
              }
            }
            keyTypes.push(t.typeOf(key));
          }

          for (var _i = 0; _i < valueTypes.length; _i++) {
            var _type = valueTypes[_i];
            if (_type.accepts(value)) {
              continue loop;
            }
          }
          valueTypes.push(t.typeOf(value));
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      var typeInstances = [];

      if (keyTypes.length === 0) {
        typeInstances.push(t.existential());
      } else if (keyTypes.length === 1) {
        typeInstances.push(keyTypes[0]);
      } else {
        typeInstances.push(t.union.apply(t, keyTypes));
      }

      if (valueTypes.length === 0) {
        typeInstances.push(t.existential());
      } else if (valueTypes.length === 1) {
        typeInstances.push(valueTypes[0]);
      } else {
        typeInstances.push(t.union.apply(t, valueTypes));
      }

      return typeInstances;
    }
  });

  t.declareTypeConstructor({
    name: 'Set',
    impl: Set,
    typeName: 'SetType',
    errors: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input, valueType) {
      var context, _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, value;

      return _regeneratorRuntime.wrap(function errors$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              invariant(valueType, 'Must specify type parameter for Set.');
              context = this.context;

              if (context.checkPredicate('Set', input)) {
                _context4.next = 6;
                break;
              }

              _context4.next = 5;
              return [path, getErrorMessage('ERR_EXPECT_INSTANCEOF', 'Set'), this];

            case 5:
              return _context4.abrupt('return');

            case 6:
              _iteratorNormalCompletion4 = true;
              _didIteratorError4 = false;
              _iteratorError4 = undefined;
              _context4.prev = 9;
              _iterator4 = input[Symbol.iterator]();

            case 11:
              if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
                _context4.next = 17;
                break;
              }

              value = _step4.value;
              return _context4.delegateYield(valueType.errors(validation, path, value), 't0', 14);

            case 14:
              _iteratorNormalCompletion4 = true;
              _context4.next = 11;
              break;

            case 17:
              _context4.next = 23;
              break;

            case 19:
              _context4.prev = 19;
              _context4.t1 = _context4['catch'](9);
              _didIteratorError4 = true;
              _iteratorError4 = _context4.t1;

            case 23:
              _context4.prev = 23;
              _context4.prev = 24;

              if (!_iteratorNormalCompletion4 && _iterator4.return) {
                _iterator4.return();
              }

            case 26:
              _context4.prev = 26;

              if (!_didIteratorError4) {
                _context4.next = 29;
                break;
              }

              throw _iteratorError4;

            case 29:
              return _context4.finish(26);

            case 30:
              return _context4.finish(23);

            case 31:
            case 'end':
              return _context4.stop();
          }
        }
      }, errors, this, [[9, 19, 23, 31], [24,, 26, 30]]);
    }),
    accepts: function accepts(input, valueType) {
      var context = this.context;

      if (!context.checkPredicate('Set', input)) {
        return false;
      }
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = input[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var value = _step5.value;

          if (!valueType.accepts(value)) {
            return false;
          }
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5.return) {
            _iterator5.return();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }

      return true;
    },
    compareWith: function compareWith(input) {
      if (input.typeName === 'SetType') {
        return 0;
      }
      return -1;
    },
    inferTypeParameters: function inferTypeParameters(input) {
      var valueTypes = [];
      var _iteratorNormalCompletion6 = true;
      var _didIteratorError6 = false;
      var _iteratorError6 = undefined;

      try {
        loop: for (var _iterator6 = input[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
          var value = _step6.value;

          for (var i = 0; i < valueTypes.length; i++) {
            var type = valueTypes[i];
            if (type.accepts(value)) {
              continue loop;
            }
          }
          valueTypes.push(t.typeOf(value));
        }
      } catch (err) {
        _didIteratorError6 = true;
        _iteratorError6 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion6 && _iterator6.return) {
            _iterator6.return();
          }
        } finally {
          if (_didIteratorError6) {
            throw _iteratorError6;
          }
        }
      }

      if (valueTypes.length === 0) {
        return [t.existential()];
      } else if (valueTypes.length === 1) {
        return [valueTypes[0]];
      } else {
        return [t.union.apply(t, valueTypes)];
      }
    }
  });

  return t;
}

function registerTypePredicates(context) {
  context.setPredicate('Array', function (input) {
    return Array.isArray(input);
  });
  context.setPredicate('Map', function (input) {
    return input instanceof Map;
  });
  context.setPredicate('Set', function (input) {
    return input instanceof Set;
  });
  context.setPredicate('Promise', function (input) {
    if (input instanceof Promise) {
      return true;
    } else {
      return input !== null && ((typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object' || typeof input === 'function') && typeof input.then === 'function';
    }
  });
}

var TypeInferer = function () {
  function TypeInferer(context) {
    classCallCheck(this, TypeInferer);

    this.context = context;
  }

  createClass(TypeInferer, [{
    key: 'infer',
    value: function infer(input) {
      var primitive = this.inferPrimitive(input);
      if (primitive) {
        return primitive;
      }
      var inferred = new Map();
      return this.inferComplex(input, inferred);
    }
  }, {
    key: 'inferInternal',
    value: function inferInternal(input, inferred) {
      var primitive = this.inferPrimitive(input);
      if (primitive) {
        return primitive;
      }
      return this.inferComplex(input, inferred);
    }
  }, {
    key: 'inferPrimitive',
    value: function inferPrimitive(input) {
      var context = this.context;

      if (input === null) {
        return context.null();
      } else if (input === undefined) {
        return context.void();
      } else if (typeof input === 'number') {
        return context.number();
      } else if (typeof input === 'boolean') {
        return context.boolean();
      } else if (typeof input === 'string') {
        return context.string();
      }
      // Issue 252
      else if ((typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'symbol') {
          return context.symbol(input);
        } else {
          return undefined;
        }
    }
  }, {
    key: 'inferComplex',
    value: function inferComplex(input, inferred) {
      var context = this.context;


      if (typeof input === 'function') {
        return this.inferFunction(input, inferred);
      } else if (input !== null && (typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object') {
        return this.inferObject(input, inferred);
      } else {
        return context.any();
      }
    }
  }, {
    key: 'inferFunction',
    value: function inferFunction(input, inferred) {
      var context = this.context;
      var length = input.length;

      var body = new Array(length + 1);
      for (var i = 0; i < length; i++) {
        body[i] = context.param(String.fromCharCode(97 + i), context.existential());
      }
      body[length] = context.return(context.existential());
      return context.fn.apply(context, body);
    }
  }, {
    key: 'inferObject',
    value: function inferObject(input, inferred) {
      var existing = inferred.get(input);
      if (existing) {
        return existing;
      }
      var context = this.context;

      var type = void 0;

      // Temporarily create a box for this type to catch cyclical references.
      // Nested references to this object will receive the boxed type.
      var box = context.box(function () {
        return type;
      });
      inferred.set(input, box);

      if (context.checkPredicate('Array', input)) {
        type = this.inferArray(input, inferred);
      } else if (!(input instanceof Object)) {
        type = this.inferDict(input, inferred);
      } else if (input.constructor !== Object) {
        var handler = context.getTypeConstructor(input.constructor);
        if (handler) {
          var typeParameters = handler.inferTypeParameters(input);
          type = handler.apply.apply(handler, toConsumableArray(typeParameters));
        } else {
          type = context.ref(input.constructor);
        }
      } else {
        var body = [];
        for (var key in input) {
          // eslint-disable-line
          var value = input[key];
          body.push(context.property(key, this.inferInternal(value, inferred)));
        }
        type = context.object.apply(context, body);
      }

      // Overwrite the box with the real value.
      inferred.set(input, type);
      return type;
    }
  }, {
    key: 'inferDict',
    value: function inferDict(input, inferred) {
      var numericIndexers = [];
      var stringIndexers = [];
      loop: for (var key in input) {
        // eslint-disable-line
        var value = input[key];
        var types = isNaN(+key) ? stringIndexers : numericIndexers;
        for (var i = 0; i < types.length; i++) {
          var type = types[i];
          if (type.accepts(value)) {
            continue loop;
          }
        }
        types.push(this.inferInternal(value, inferred));
      }

      var context = this.context;

      var body = [];
      if (numericIndexers.length === 1) {
        body.push(context.indexer('index', context.number(), numericIndexers[0]));
      } else if (numericIndexers.length > 1) {
        body.push(context.indexer('index', context.number(), context.union.apply(context, numericIndexers)));
      }

      if (stringIndexers.length === 1) {
        body.push(context.indexer('key', context.string(), stringIndexers[0]));
      } else if (stringIndexers.length > 1) {
        body.push(context.indexer('key', context.string(), context.union.apply(context, stringIndexers)));
      }

      return context.object.apply(context, body);
    }
  }, {
    key: 'inferArray',
    value: function inferArray(input, inferred) {
      var context = this.context;

      var types = [];
      var values = [];
      var length = input.length;

      loop: for (var i = 0; i < length; i++) {
        var item = input[i];
        var inferredType = this.inferInternal(item, inferred);
        for (var j = 0; j < types.length; j++) {
          var type = types[j];
          if (type.accepts(item) && inferredType.accepts(values[j])) {
            continue loop;
          }
        }
        types.push(inferredType);
        values.push(item);
      }
      if (types.length === 0) {
        return context.array(context.any());
      } else if (types.length === 1) {
        return context.array(types[0]);
      } else {
        return context.array(context.union.apply(context, types));
      }
    }
  }]);
  return TypeInferer;
}();

function makeReactPropTypes(objectType) {
  var output = {};
  if (!objectType.properties) {
    return output;
  }

  var _loop = function _loop(property) {
    output[property.key] = function (props, propName, componentName) {
      return makeError(property, props);
    };
  };

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = objectType.properties[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var property = _step.value;

      _loop(property);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return output;
}

var delimiter$1 = '\n-------------------------------------------------\n\n';

function makeWarningMessage(validation) {
  if (!validation.hasErrors()) {
    return;
  }
  var input = validation.input,
      context = validation.context;

  var collected = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = validation.errors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _ref = _step.value;

      var _ref2 = slicedToArray(_ref, 3);

      var path = _ref2[0];
      var message = _ref2[1];
      var expectedType = _ref2[2];

      var expected = expectedType ? expectedType.toString() : "*";
      var actual = context.typeOf(_resolvePath(input, path)).toString();

      var field = stringifyPath(validation.path.concat(path));

      collected.push(field + ' ' + message + '\n\nExpected: ' + expected + '\n\nActual: ' + actual + '\n');
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return 'Warning: ' + collected.join(delimiter$1);
}

function makeUnion(context, types) {
  var length = types.length;
  var merged = [];
  for (var i = 0; i < length; i++) {
    var type = types[i];
    if (type instanceof AnyType || type instanceof MixedType || type instanceof ExistentialType) {
      return type;
    }
    if (type instanceof UnionType) {
      mergeUnionTypes(merged, type.types);
    } else {
      merged.push(type);
    }
  }
  var union = new UnionType(context);
  union.types = merged;
  return union;
}

function mergeUnionTypes(aTypes, bTypes) {
  loop: for (var i = 0; i < bTypes.length; i++) {
    var bType = bTypes[i];
    for (var j = 0; j < aTypes.length; j++) {
      var aType = aTypes[j];
      if (compareTypes(aType, bType) !== -1) {
        continue loop;
      }
    }
    aTypes.push(bType);
  }
}

function makePropertyDescriptor(typeSource, input, propertyName, descriptor, shouldAssert) {
  if (typeof descriptor.get === 'function' && typeof descriptor.set === 'function') {
    return augmentExistingAccessors(typeSource, input, propertyName, descriptor, shouldAssert);
  } else {
    return propertyToAccessor(typeSource, input, propertyName, descriptor, shouldAssert);
  }
}

function makePropertyName(name) {
  return '_flowRuntime$' + name;
}

function getClassName(input) {
  if (typeof input === 'function') {
    return input.name || '[Class anonymous]';
  } else if (typeof input.constructor === 'function') {
    return getClassName(input.constructor);
  } else {
    return '[Class anonymous]';
  }
}

function resolveType(receiver, typeSource) {
  if (typeof typeSource === 'function') {
    return typeSource.call(receiver);
  } else {
    return typeSource;
  }
}

function propertyToAccessor(typeSource, input, propertyName, descriptor, shouldAssert) {
  var safeName = makePropertyName(propertyName);
  var className = getClassName(input);
  var initializer = descriptor.initializer,
      writable = descriptor.writable,
      config = objectWithoutProperties(descriptor, ['initializer', 'writable']); // eslint-disable-line no-unused-vars

  var propertyPath = [className, propertyName];

  return _extends({}, config, {
    type: 'accessor',
    get: function get$$1() {
      if (safeName in this) {
        return this[safeName];
      } else if (initializer) {
        var type = resolveType(this, typeSource);
        var _value = initializer.call(this);
        var context = type.context;
        context.check(type, _value, 'Default value for property', propertyPath);
        Object.defineProperty(this, safeName, {
          writable: true,
          value: _value
        });
        return _value;
      } else {
        Object.defineProperty(this, safeName, {
          writable: true,
          value: undefined
        });
      }
    },
    set: function set$$1(value) {
      var type = resolveType(this, typeSource);
      var context = type.context;
      if (shouldAssert) {
        context.assert(type, value, 'Property', propertyPath);
      } else {
        context.warn(type, value, 'Property', propertyPath);
      }
      if (safeName in this) {
        this[safeName] = value;
      } else {
        Object.defineProperty(this, safeName, {
          writable: true,
          value: value
        });
      }
    }
  });
}

function augmentExistingAccessors(typeSource, input, propertyName, descriptor, shouldAssert) {

  var className = getClassName(input);
  var propertyPath = [className, propertyName];

  var originalSetter = descriptor.set;

  descriptor.set = function set$$1(value) {
    var type = resolveType(this, typeSource);
    var context = type.context;
    if (shouldAssert) {
      context.assert(type, value, 'Property', propertyPath);
    } else {
      context.warn(type, value, 'Property', propertyPath);
    }
    originalSetter.call(this, value);
  };
}

// eslint-disable-line no-redeclare

function annotateValue(input, type) {
  // eslint-disable-line no-redeclare
  if (type instanceof Type) {
    input[TypeSymbol] = type;
    return input;
  } else {
    var _type = input;
    return function (input) {
      input[TypeSymbol] = _type;
      return input;
    };
  }
}

// If A and B are object types, $Diff<A,B> is the type of objects that have
// properties defined in A, but not in B.
// Properties that are defined in both A and B are allowed too.

var $DiffType = function (_Type) {
  inherits($DiffType, _Type);

  function $DiffType() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, $DiffType);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = $DiffType.__proto__ || Object.getPrototypeOf($DiffType)).call.apply(_ref, [this].concat(args))), _this), _this.typeName = '$DiffType', _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass($DiffType, [{
    key: 'errors',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input) {
      var aType, bType, properties, i, property;
      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              aType = this.aType, bType = this.bType;

              if (!(input === null || (typeof input === 'undefined' ? 'undefined' : _typeof(input)) !== 'object' && typeof input !== 'function')) {
                _context.next = 5;
                break;
              }

              _context.next = 4;
              return [path, getErrorMessage('ERR_EXPECT_OBJECT'), this];

            case 4:
              return _context.abrupt('return');

            case 5:
              aType = aType.unwrap();
              bType = bType.unwrap();
              invariant(aType instanceof ObjectType && bType instanceof ObjectType, 'Can only $Diff object types.');
              properties = aType.properties;
              i = 0;

            case 10:
              if (!(i < properties.length)) {
                _context.next = 18;
                break;
              }

              property = properties[i];

              if (!bType.hasProperty(property.key)) {
                _context.next = 14;
                break;
              }

              return _context.abrupt('continue', 15);

            case 14:
              return _context.delegateYield(property.errors(validation, path.concat(property.key), input), 't0', 15);

            case 15:
              i++;
              _context.next = 10;
              break;

            case 18:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this);
    })
  }, {
    key: 'accepts',
    value: function accepts(input) {
      var aType = this.aType,
          bType = this.bType;

      if (input === null || (typeof input === 'undefined' ? 'undefined' : _typeof(input)) !== 'object' && typeof input !== 'function') {
        return false;
      }
      aType = aType.unwrap();
      bType = bType.unwrap();
      invariant(aType instanceof ObjectType && bType instanceof ObjectType, 'Can only $Diff object types.');
      var properties = aType.properties;
      for (var i = 0; i < properties.length; i++) {
        var property = properties[i];
        if (bType.hasProperty(property.key)) {
          continue;
        }
        if (!property.accepts(input)) {
          return false;
        }
      }
      return true;
    }
  }, {
    key: 'compareWith',
    value: function compareWith(input) {
      return compareTypes(this.unwrap(), input);
    }
  }, {
    key: 'unwrap',
    value: function unwrap() {
      var _context2;

      var aType = this.aType,
          bType = this.bType;

      aType = aType.unwrap();
      bType = bType.unwrap();
      invariant(aType instanceof ObjectType && bType instanceof ObjectType, 'Can only $Diff object types.');
      var properties = aType.properties;
      var args = [];
      for (var i = 0; i < properties.length; i++) {
        var property = properties[i];
        if (bType.hasProperty(property.key)) {
          continue;
        }
        args.push(property);
      }
      return (_context2 = this.context).object.apply(_context2, args);
    }
  }, {
    key: 'toString',
    value: function toString() {
      return '$Diff<' + this.aType.toString() + ', ' + this.bType.toString() + '>';
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return {
        typeName: this.typeName,
        aType: this.aType,
        bType: this.bType
      };
    }
  }]);
  return $DiffType;
}(Type);

// Any subtype of T

var $FlowFixMeType = function (_Type) {
  inherits($FlowFixMeType, _Type);

  function $FlowFixMeType() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, $FlowFixMeType);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = $FlowFixMeType.__proto__ || Object.getPrototypeOf($FlowFixMeType)).call.apply(_ref, [this].concat(args))), _this), _this.typeName = '$FlowFixMeType', _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass($FlowFixMeType, [{
    key: 'errors',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, input) {
      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this);
    })
  }, {
    key: 'accepts',
    value: function accepts(input) {
      return true;
    }
  }, {
    key: 'compareWith',
    value: function compareWith(input) {
      return 1;
    }
  }, {
    key: 'unwrap',
    value: function unwrap() {
      return this;
    }
  }, {
    key: 'toString',
    value: function toString() {
      return '$FlowFixMe';
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return {
        typeName: this.typeName
      };
    }
  }]);
  return $FlowFixMeType;
}(Type);

// The set of keys of T.

var $KeysType = function (_Type) {
  inherits($KeysType, _Type);

  function $KeysType() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, $KeysType);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = $KeysType.__proto__ || Object.getPrototypeOf($KeysType)).call.apply(_ref, [this].concat(args))), _this), _this.typeName = '$KeysType', _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass($KeysType, [{
    key: 'errors',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input) {
      var type, properties, length, i, property, keys, _i;

      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              type = this.type.unwrap();

              invariant(type instanceof ObjectType, 'Can only $Keys<T> object types.');

              properties = type.properties;
              length = properties.length;
              i = 0;

            case 5:
              if (!(i < length)) {
                _context.next = 12;
                break;
              }

              property = properties[i];

              if (!(input === property.key)) {
                _context.next = 9;
                break;
              }

              return _context.abrupt('return');

            case 9:
              i++;
              _context.next = 5;
              break;

            case 12:
              keys = new Array(length);

              for (_i = 0; _i < length; _i++) {
                keys[_i] = properties[_i].key;
              }
              _context.next = 16;
              return [path, getErrorMessage('ERR_NO_UNION', keys.join(' | ')), this];

            case 16:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this);
    })
  }, {
    key: 'accepts',
    value: function accepts(input) {
      var type = this.type.unwrap();
      invariant(type instanceof ObjectType, 'Can only $Keys<T> object types.');

      var properties = type.properties;
      var length = properties.length;
      for (var i = 0; i < length; i++) {
        var property = properties[i];
        if (input === property.key) {
          return true;
        }
      }
      return false;
    }
  }, {
    key: 'compareWith',
    value: function compareWith(input) {
      return compareTypes(this.unwrap(), input);
    }
  }, {
    key: 'unwrap',
    value: function unwrap() {
      var _context2;

      var context = this.context;
      var type = this.type.unwrap();
      invariant(type instanceof ObjectType, 'Can only $Keys<T> object types.');

      var properties = type.properties;
      var length = properties.length;
      var keys = new Array(length);
      for (var i = 0; i < length; i++) {
        var property = properties[i];
        keys[i] = context.literal(property.key);
      }
      return (_context2 = this.context).union.apply(_context2, keys);
    }
  }, {
    key: 'toString',
    value: function toString() {
      return '$Keys<' + this.type.toString() + '>';
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return {
        typeName: this.typeName,
        type: this.type
      };
    }
  }]);
  return $KeysType;
}(Type);

// Map over the keys and values in an object.

var $ObjMapiType = function (_Type) {
  inherits($ObjMapiType, _Type);

  function $ObjMapiType() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, $ObjMapiType);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = $ObjMapiType.__proto__ || Object.getPrototypeOf($ObjMapiType)).call.apply(_ref, [this].concat(args))), _this), _this.typeName = '$ObjMapiType', _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass($ObjMapiType, [{
    key: 'errors',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input) {
      var object, mapper, context, target, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, prop, applied, returnType, value;

      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              object = this.object, mapper = this.mapper, context = this.context;
              target = object.unwrap();

              invariant(target instanceof ObjectType, 'Target must be an object type.');

              if (!(input === null || (typeof input === 'undefined' ? 'undefined' : _typeof(input)) !== 'object' && typeof input !== 'function')) {
                _context.next = 7;
                break;
              }

              _context.next = 6;
              return [path, getErrorMessage('ERR_EXPECT_OBJECT'), this];

            case 6:
              return _context.abrupt('return');

            case 7:
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context.prev = 10;
              _iterator = target.properties[Symbol.iterator]();

            case 12:
              if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                _context.next = 22;
                break;
              }

              prop = _step.value;
              applied = mapper.unwrap();

              invariant(applied instanceof FunctionType, 'Mapper must be a function type.');

              returnType = applied.invoke(context.literal(prop.key), prop.value);
              value = input[prop.key];
              return _context.delegateYield(returnType.errors(validation, path.concat(prop.key), value), 't0', 19);

            case 19:
              _iteratorNormalCompletion = true;
              _context.next = 12;
              break;

            case 22:
              _context.next = 28;
              break;

            case 24:
              _context.prev = 24;
              _context.t1 = _context['catch'](10);
              _didIteratorError = true;
              _iteratorError = _context.t1;

            case 28:
              _context.prev = 28;
              _context.prev = 29;

              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }

            case 31:
              _context.prev = 31;

              if (!_didIteratorError) {
                _context.next = 34;
                break;
              }

              throw _iteratorError;

            case 34:
              return _context.finish(31);

            case 35:
              return _context.finish(28);

            case 36:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this, [[10, 24, 28, 36], [29,, 31, 35]]);
    })
  }, {
    key: 'accepts',
    value: function accepts(input) {
      var object = this.object,
          mapper = this.mapper,
          context = this.context;

      var target = object.unwrap();
      invariant(target instanceof ObjectType, 'Target must be an object type.');

      if (input === null || (typeof input === 'undefined' ? 'undefined' : _typeof(input)) !== 'object' && typeof input !== 'function') {
        return false;
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = target.properties[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var prop = _step2.value;

          var applied = mapper.unwrap();
          invariant(applied instanceof FunctionType, 'Mapper must be a function type.');

          var returnType = applied.invoke(context.literal(prop.key), prop.value);

          var value = input[prop.key];
          if (!returnType.accepts(value)) {
            return false;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return true;
    }
  }, {
    key: 'compareWith',
    value: function compareWith(input) {
      return compareTypes(this.unwrap(), input);
    }
  }, {
    key: 'unwrap',
    value: function unwrap() {
      var object = this.object,
          mapper = this.mapper,
          context = this.context;

      var target = object.unwrap();
      invariant(target instanceof ObjectType, 'Target must be an object type.');

      var args = [];

      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = target.properties[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var prop = _step3.value;

          var applied = mapper.unwrap();
          invariant(applied instanceof FunctionType, 'Mapper must be a function type.');

          args.push(context.property(prop.key, applied.invoke(context.literal(prop.key), prop.value)));
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      return context.object.apply(context, args);
    }
  }, {
    key: 'toString',
    value: function toString() {
      return '$ObjMapi<' + this.object.toString() + ', ' + this.mapper.toString() + '>';
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return {
        typeName: this.typeName,
        object: this.object,
        mapper: this.mapper
      };
    }
  }]);
  return $ObjMapiType;
}(Type);

// Map over the keys in an object.

var $ObjMapType = function (_Type) {
  inherits($ObjMapType, _Type);

  function $ObjMapType() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, $ObjMapType);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = $ObjMapType.__proto__ || Object.getPrototypeOf($ObjMapType)).call.apply(_ref, [this].concat(args))), _this), _this.typeName = '$ObjMapType', _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass($ObjMapType, [{
    key: 'errors',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input) {
      var object, mapper, context, target, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, prop, applied, returnType, value;

      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              object = this.object, mapper = this.mapper, context = this.context;
              target = object.unwrap();

              invariant(target instanceof ObjectType, 'Target must be an object type.');

              if (!(input === null || (typeof input === 'undefined' ? 'undefined' : _typeof(input)) !== 'object' && typeof input !== 'function')) {
                _context.next = 7;
                break;
              }

              _context.next = 6;
              return [path, getErrorMessage('ERR_EXPECT_OBJECT'), this];

            case 6:
              return _context.abrupt('return');

            case 7:
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context.prev = 10;
              _iterator = target.properties[Symbol.iterator]();

            case 12:
              if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                _context.next = 22;
                break;
              }

              prop = _step.value;
              applied = mapper.unwrap();

              invariant(applied instanceof FunctionType, 'Mapper must be a function type.');

              returnType = applied.invoke(context.literal(prop.key));
              value = input[prop.key];
              return _context.delegateYield(returnType.errors(validation, path.concat(prop.key), value), 't0', 19);

            case 19:
              _iteratorNormalCompletion = true;
              _context.next = 12;
              break;

            case 22:
              _context.next = 28;
              break;

            case 24:
              _context.prev = 24;
              _context.t1 = _context['catch'](10);
              _didIteratorError = true;
              _iteratorError = _context.t1;

            case 28:
              _context.prev = 28;
              _context.prev = 29;

              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }

            case 31:
              _context.prev = 31;

              if (!_didIteratorError) {
                _context.next = 34;
                break;
              }

              throw _iteratorError;

            case 34:
              return _context.finish(31);

            case 35:
              return _context.finish(28);

            case 36:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this, [[10, 24, 28, 36], [29,, 31, 35]]);
    })
  }, {
    key: 'accepts',
    value: function accepts(input) {
      var object = this.object,
          mapper = this.mapper,
          context = this.context;

      var target = object.unwrap();
      invariant(target instanceof ObjectType, 'Target must be an object type.');

      if (input === null || (typeof input === 'undefined' ? 'undefined' : _typeof(input)) !== 'object' && typeof input !== 'function') {
        return false;
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = target.properties[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var prop = _step2.value;

          var applied = mapper.unwrap();
          invariant(applied instanceof FunctionType, 'Mapper must be a function type.');

          var returnType = applied.invoke(context.literal(prop.key));

          var value = input[prop.key];
          if (!returnType.accepts(value)) {
            return false;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return true;
    }
  }, {
    key: 'compareWith',
    value: function compareWith(input) {
      return compareTypes(this.unwrap(), input);
    }
  }, {
    key: 'unwrap',
    value: function unwrap() {
      var object = this.object,
          mapper = this.mapper,
          context = this.context;

      var target = object.unwrap();
      invariant(target instanceof ObjectType, 'Target must be an object type.');

      var args = [];

      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = target.properties[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var prop = _step3.value;

          var applied = mapper.unwrap();
          invariant(applied instanceof FunctionType, 'Mapper must be a function type.');

          args.push(context.property(prop.key, applied.invoke(context.literal(prop.key))));
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      return context.object.apply(context, args);
    }
  }, {
    key: 'toString',
    value: function toString() {
      return '$ObjMap<' + this.object.toString() + ', ' + this.mapper.toString() + '>';
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return {
        typeName: this.typeName,
        object: this.object,
        mapper: this.mapper
      };
    }
  }]);
  return $ObjMapType;
}(Type);

// The type of the named object property

var $PropertyType = function (_Type) {
  inherits($PropertyType, _Type);

  function $PropertyType() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, $PropertyType);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = $PropertyType.__proto__ || Object.getPrototypeOf($PropertyType)).call.apply(_ref, [this].concat(args))), _this), _this.typeName = '$PropertyType', _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass($PropertyType, [{
    key: 'errors',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input) {
      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.delegateYield(this.unwrap().errors(validation, path, input), 't0', 1);

            case 1:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this);
    })
  }, {
    key: 'accepts',
    value: function accepts(input) {
      return this.unwrap().accepts(input);
    }
  }, {
    key: 'compareWith',
    value: function compareWith(input) {
      return compareTypes(this.unwrap(), input);
    }
  }, {
    key: 'unwrap',
    value: function unwrap() {
      var object = this.object,
          property = this.property;

      var unwrapped = object.unwrap();
      invariant(typeof unwrapped.getProperty === 'function', 'Can only use $PropertyType on Objects.');
      return unwrapped.getProperty(property).unwrap();
    }
  }, {
    key: 'toString',
    value: function toString() {
      return '$PropertyType<' + this.object.toString() + ', ' + String(this.property) + '>';
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return {
        typeName: this.typeName,
        object: this.object,
        property: this.property
      };
    }
  }]);
  return $PropertyType;
}(Type);

// An object of type $Shape<T> does not have to have all of the properties
// that type T defines. But the types of the properties that it does have
// must accepts the types of the same properties in T.

var $ShapeType = function (_Type) {
  inherits($ShapeType, _Type);

  function $ShapeType() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, $ShapeType);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = $ShapeType.__proto__ || Object.getPrototypeOf($ShapeType)).call.apply(_ref, [this].concat(args))), _this), _this.typeName = '$ShapeType', _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass($ShapeType, [{
    key: 'errors',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input) {
      var type, key, property;
      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              type = this.type;

              if (!(input === null || (typeof input === 'undefined' ? 'undefined' : _typeof(input)) !== 'object' && typeof input !== 'function')) {
                _context.next = 5;
                break;
              }

              _context.next = 4;
              return [path, getErrorMessage('ERR_EXPECT_OBJECT'), this];

            case 4:
              return _context.abrupt('return');

            case 5:

              type = type.unwrap();
              invariant(typeof type.getProperty === 'function', 'Can only $Shape<T> object types.');

              _context.t0 = _regeneratorRuntime.keys(input);

            case 8:
              if ((_context.t1 = _context.t0()).done) {
                _context.next = 16;
                break;
              }

              key = _context.t1.value;
              // eslint-disable-line guard-for-in
              property = type.getProperty(key);

              if (property) {
                _context.next = 13;
                break;
              }

              return _context.abrupt('continue', 8);

            case 13:
              return _context.delegateYield(property.errors(validation, path, input), 't2', 14);

            case 14:
              _context.next = 8;
              break;

            case 16:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this);
    })
  }, {
    key: 'accepts',
    value: function accepts(input) {
      var type = this.type;

      if (input === null || (typeof input === 'undefined' ? 'undefined' : _typeof(input)) !== 'object' && typeof input !== 'function') {
        return false;
      }
      type = type.unwrap();
      invariant(typeof type.getProperty === 'function', 'Can only $Shape<T> object types.');
      for (var key in input) {
        // eslint-disable-line guard-for-in
        var property = type.getProperty(key);
        if (!property || !property.accepts(input)) {
          return false;
        }
      }
      return true;
    }
  }, {
    key: 'compareWith',
    value: function compareWith(input) {
      return compareTypes(this.unwrap(), input);
    }
  }, {
    key: 'unwrap',
    value: function unwrap() {
      var _context2;

      var type = this.type;

      type = type.unwrap();
      var context = this.context;
      invariant(type instanceof ObjectType, 'Can only $Shape<T> object types.');
      var properties = type.properties;
      var args = new Array(properties.length);
      for (var i = 0; i < properties.length; i++) {
        var property = properties[i];
        args[i] = context.property(property.key, property.value, true);
      }
      return (_context2 = this.context).object.apply(_context2, args);
    }
  }, {
    key: 'toString',
    value: function toString() {
      return '$Shape<' + this.type.toString() + '>';
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return {
        typeName: this.typeName,
        type: this.type
      };
    }
  }]);
  return $ShapeType;
}(Type);

// Any subtype of T

var $SubType = function (_Type) {
  inherits($SubType, _Type);

  function $SubType() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, $SubType);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = $SubType.__proto__ || Object.getPrototypeOf($SubType)).call.apply(_ref, [this].concat(args))), _this), _this.typeName = '$SubType', _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass($SubType, [{
    key: 'errors',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input) {
      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.delegateYield(this.type.errors(input, path), 't0', 1);

            case 1:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this);
    })
  }, {
    key: 'accepts',
    value: function accepts(input) {
      return this.type.accepts(input);
    }
  }, {
    key: 'compareWith',
    value: function compareWith(input) {
      return compareTypes(this.unwrap(), input);
    }
  }, {
    key: 'unwrap',
    value: function unwrap() {
      return this.type;
    }
  }, {
    key: 'toString',
    value: function toString() {
      return '$Subtype<' + this.type.toString() + '>';
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return {
        typeName: this.typeName,
        type: this.type
      };
    }
  }]);
  return $SubType;
}(Type);

// Any, but at least T.

var $SuperType = function (_Type) {
  inherits($SuperType, _Type);

  function $SuperType() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, $SuperType);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = $SuperType.__proto__ || Object.getPrototypeOf($SuperType)).call.apply(_ref, [this].concat(args))), _this), _this.typeName = '$SuperType', _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass($SuperType, [{
    key: 'errors',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input) {
      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.delegateYield(this.type.errors(validation, path, input), 't0', 1);

            case 1:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this);
    })
  }, {
    key: 'accepts',
    value: function accepts(input) {
      return this.type.accepts(input);
    }
  }, {
    key: 'compareWith',
    value: function compareWith(input) {
      return compareTypes(this.unwrap(), input);
    }
  }, {
    key: 'unwrap',
    value: function unwrap() {
      return this.type;
    }
  }, {
    key: 'toString',
    value: function toString() {
      return '$Supertype<' + this.type.toString() + '>';
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return {
        typeName: this.typeName,
        type: this.type
      };
    }
  }]);
  return $SuperType;
}(Type);

// Map over the values in a tuple.

var $TupleMapType = function (_Type) {
  inherits($TupleMapType, _Type);

  function $TupleMapType() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, $TupleMapType);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = $TupleMapType.__proto__ || Object.getPrototypeOf($TupleMapType)).call.apply(_ref, [this].concat(args))), _this), _this.typeName = '$TupleMapType', _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass($TupleMapType, [{
    key: 'errors',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input) {
      var tuple, mapper, context, target, i, type, applied, expected, value;
      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              tuple = this.tuple, mapper = this.mapper, context = this.context;
              target = tuple.unwrap();

              invariant(target instanceof TupleType, 'Target must be a tuple type.');

              if (context.checkPredicate('Array', input)) {
                _context.next = 7;
                break;
              }

              _context.next = 6;
              return [path, getErrorMessage('ERR_EXPECT_ARRAY'), this];

            case 6:
              return _context.abrupt('return');

            case 7:
              i = 0;

            case 8:
              if (!(i < target.types.length)) {
                _context.next = 18;
                break;
              }

              type = target.types[i];
              applied = mapper.unwrap();

              invariant(applied instanceof FunctionType, 'Mapper must be a function type.');

              expected = applied.invoke(type);
              value = input[i];
              return _context.delegateYield(expected.errors(validation, path.concat(i), value), 't0', 15);

            case 15:
              i++;
              _context.next = 8;
              break;

            case 18:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this);
    })
  }, {
    key: 'accepts',
    value: function accepts(input) {
      var tuple = this.tuple,
          mapper = this.mapper,
          context = this.context;

      var target = tuple.unwrap();
      invariant(target instanceof TupleType, 'Target must be a tuple type.');

      if (!context.checkPredicate('Array', input)) {
        return false;
      }

      for (var i = 0; i < target.types.length; i++) {
        var type = target.types[i];
        var applied = mapper.unwrap();
        invariant(applied instanceof FunctionType, 'Mapper must be a function type.');

        if (!applied.invoke(type).accepts(input[i])) {
          return false;
        }
      }
      return true;
    }
  }, {
    key: 'compareWith',
    value: function compareWith(input) {
      return compareTypes(this.unwrap(), input);
    }
  }, {
    key: 'unwrap',
    value: function unwrap() {
      var tuple = this.tuple,
          mapper = this.mapper,
          context = this.context;

      var target = tuple.unwrap();
      invariant(target instanceof TupleType, 'Target must be an tuple type.');

      var args = [];
      for (var i = 0; i < target.types.length; i++) {
        var type = target.types[i];
        var applied = mapper.unwrap();
        invariant(applied instanceof FunctionType, 'Mapper must be a function type.');

        args.push(applied.invoke(type).unwrap().unwrap());
      }

      return context.tuple.apply(context, args);
    }
  }, {
    key: 'toString',
    value: function toString() {
      return '$TupleMap<' + this.tuple.toString() + ', ' + this.mapper.toString() + '>';
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return {
        typeName: this.typeName,
        tuple: this.tuple,
        mapper: this.mapper
      };
    }
  }]);
  return $TupleMapType;
}(Type);

// The set of keys of T.

var $ValuesType = function (_Type) {
  inherits($ValuesType, _Type);

  function $ValuesType() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, $ValuesType);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = $ValuesType.__proto__ || Object.getPrototypeOf($ValuesType)).call.apply(_ref, [this].concat(args))), _this), _this.typeName = '$ValuesType', _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass($ValuesType, [{
    key: 'errors',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input) {
      var type, properties, length, i, property, values, _i;

      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              type = this.type.unwrap();

              invariant(type instanceof ObjectType, 'Can only $Values<T> object types.');

              properties = type.properties;
              length = properties.length;
              i = 0;

            case 5:
              if (!(i < length)) {
                _context.next = 12;
                break;
              }

              property = properties[i];

              if (!property.value.accepts(input)) {
                _context.next = 9;
                break;
              }

              return _context.abrupt('return');

            case 9:
              i++;
              _context.next = 5;
              break;

            case 12:
              values = new Array(length);

              for (_i = 0; _i < length; _i++) {
                values[_i] = properties[_i].value.toString();
              }
              _context.next = 16;
              return [path, getErrorMessage('ERR_NO_UNION', values.join(' | ')), this];

            case 16:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this);
    })
  }, {
    key: 'accepts',
    value: function accepts(input) {
      var type = this.type.unwrap();
      invariant(type instanceof ObjectType, 'Can only $Values<T> object types.');

      var properties = type.properties;
      var length = properties.length;
      for (var i = 0; i < length; i++) {
        var property = properties[i];
        if (property.value.accepts(input)) {
          return true;
        }
      }
      return false;
    }
  }, {
    key: 'compareWith',
    value: function compareWith(input) {
      return compareTypes(this.unwrap(), input);
    }
  }, {
    key: 'unwrap',
    value: function unwrap() {
      var context = this.context;
      var type = this.type.unwrap();
      invariant(type instanceof ObjectType, 'Can only $Values<T> object types.');

      var properties = type.properties;
      var length = properties.length;
      var values = new Array(length);
      for (var i = 0; i < length; i++) {
        var property = properties[i];
        values[i] = property.value;
      }
      return context.union.apply(context, values);
    }
  }, {
    key: 'toString',
    value: function toString() {
      return '$Values<' + this.type.toString() + '>';
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return {
        typeName: this.typeName,
        type: this.type
      };
    }
  }]);
  return $ValuesType;
}(Type);

function checkGenericType(context, expected, input) {
  var impl = expected.impl;

  if (typeof impl !== 'function') {
    // There is little else we can do here, so accept anything.
    return true;
  } else if (impl === input || impl.isPrototypeOf(input)) {
    return true;
  }

  var annotation = context.getAnnotation(impl);
  if (annotation == null) {
    return false;
  } else {
    return checkType(context, annotation, input);
  }
}

function checkType(context, expected, input) {
  var annotation = context.getAnnotation(input);
  if (annotation != null) {
    var result = compareTypes(expected, annotation);
    return result !== -1;
  }
  return true;
}

var ClassType = function (_Type) {
  inherits(ClassType, _Type);

  function ClassType() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, ClassType);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = ClassType.__proto__ || Object.getPrototypeOf(ClassType)).call.apply(_ref, [this].concat(args))), _this), _this.typeName = 'ClassType', _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(ClassType, [{
    key: 'errors',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function errors(validation, path, input) {
      var instanceType, context, expectedType, isValid;
      return _regeneratorRuntime.wrap(function errors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              instanceType = this.instanceType, context = this.context;

              if (!(typeof input !== 'function')) {
                _context.next = 5;
                break;
              }

              _context.next = 4;
              return [path, getErrorMessage('ERR_EXPECT_CLASS', instanceType.toString()), this];

            case 4:
              return _context.abrupt('return');

            case 5:
              expectedType = instanceType.typeName === 'ClassDeclaration' ? instanceType : instanceType.unwrap();
              isValid = expectedType instanceof GenericType ? checkGenericType(context, expectedType, input) : checkType(context, expectedType, input);

              if (isValid) {
                _context.next = 10;
                break;
              }

              _context.next = 10;
              return [path, getErrorMessage('ERR_EXPECT_CLASS', instanceType.toString()), this];

            case 10:
            case 'end':
              return _context.stop();
          }
        }
      }, errors, this);
    })
  }, {
    key: 'accepts',
    value: function accepts(input) {
      var instanceType = this.instanceType,
          context = this.context;

      if (typeof input !== 'function') {
        return false;
      }
      var expectedType = instanceType.typeName === 'ClassDeclaration' ? instanceType : instanceType.unwrap();
      if (expectedType instanceof GenericType) {
        return checkGenericType(context, expectedType, input);
      } else {
        return checkType(context, expectedType, input);
      }
    }
  }, {
    key: 'compareWith',
    value: function compareWith(input) {
      var instanceType = this.instanceType;

      if (input instanceof ClassType) {
        return compareTypes(instanceType, input.instanceType);
      }
      return -1;
    }
  }, {
    key: 'toString',
    value: function toString() {
      return 'Class<' + this.instanceType.toString() + '>';
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return {
        typeName: this.typeName,
        instanceType: this.instanceType
      };
    }
  }]);
  return ClassType;
}(Type);

/**
 * Keeps track of invalid references in order to prevent
 * multiple warnings.
 */
var warnedInvalidReferences = new WeakSet();

var TypeContext = function () {
  function TypeContext() {
    classCallCheck(this, TypeContext);
    this.mode = 'assert';
    this[NameRegistrySymbol] = {};
    this[TypePredicateRegistrySymbol] = {};
    this[TypeConstructorRegistrySymbol] = new Map();
    this[InferrerSymbol] = new TypeInferer(this);
    this[ModuleRegistrySymbol] = {};
  }

  /**
   * Calls to `t.check(...)` will call either
   * `t.assert(...)` or `t.warn(...)` depending on this setting.
   */


  // Issue 252


  // Issue 252


  // Issue 252


  // Issue 252


  // Issue 252


  // Issue 252


  createClass(TypeContext, [{
    key: 'makeJSONError',
    value: function makeJSONError$$1(validation) {
      return makeJSONError(validation);
    }
  }, {
    key: 'makeTypeError',
    value: function makeTypeError$$1(validation) {
      return makeTypeError(validation);
    }
  }, {
    key: 'createContext',
    value: function createContext() {
      var context = new TypeContext();
      // Issue 252
      context[ParentSymbol] = this;
      return context;
    }
  }, {
    key: 'typeOf',
    value: function typeOf(input) {

      var annotation = this.getAnnotation(input);
      if (annotation) {
        if (typeof input === 'function' && (annotation instanceof ClassDeclaration || annotation instanceof ParameterizedClassDeclaration)) {
          return this.Class(annotation);
        }
        return annotation;
      }
      // Issue 252
      var inferrer = this[InferrerSymbol];

      return inferrer.infer(input);
    }
  }, {
    key: 'compareTypes',
    value: function compareTypes$$1(a, b) {
      return compareTypes(a, b);
    }
  }, {
    key: 'get',
    value: function get$$1(name) {
      // Issue 252
      var item = this[NameRegistrySymbol][name];

      for (var _len = arguments.length, propertyNames = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        propertyNames[_key - 1] = arguments[_key];
      }

      if (item != null) {
        var current = typeof item === 'function' ? new item(this) : item;
        for (var i = 0; i < propertyNames.length; i++) {
          var propertyName = propertyNames[i];
          if (typeof current.getProperty !== 'function') {
            return;
          }
          current = current.getProperty(propertyName);
          if (!current) {
            return;
          }
          current = current.unwrap();
        }
        return current;
      }
      // Issue 252
      var parent = this[ParentSymbol];
      if (parent) {
        var fromParent = parent.get.apply(parent, [name].concat(toConsumableArray(propertyNames)));
        if (fromParent) {
          return fromParent;
        }
      }

      // if we got this far, see if we have a global type with this name.
      if (typeof commonjsGlobal[name] === 'function') {
        var target = new GenericType(this);
        target.name = name;
        target.impl = commonjsGlobal[name];
        // Issue 252
        this[NameRegistrySymbol][name] = target;
        return target;
      }
    }

    /**
     * Get the predicate for a given type name.
     * e.g. `t.getPredicate('Array')`.
     */

  }, {
    key: 'getPredicate',
    value: function getPredicate(name) {
      var item = this[TypePredicateRegistrySymbol][name];
      if (item) {
        return item;
      }
      var parent = this[ParentSymbol];
      if (parent) {
        return parent.getPredicate(name);
      }
    }

    /**
     * Set the predicate for a given type name.
     * This can be used to customise the behaviour of things like Array
     * detection or allowing Thenables in place of the global Promise.
     */

  }, {
    key: 'setPredicate',
    value: function setPredicate(name, predicate) {
      this[TypePredicateRegistrySymbol][name] = predicate;
    }

    /**
     * Check the given value against the named predicate.
     * Returns false if no such predicate exists.
     * e.g. `t.checkPredicate('Array', [1, 2, 3])`
     */

  }, {
    key: 'checkPredicate',
    value: function checkPredicate(name, input) {
      var predicate = this.getPredicate(name);
      if (predicate) {
        return predicate(input);
      } else {
        return false;
      }
    }

    /**
     * Returns a decorator for a function or object with the given type.
     */

  }, {
    key: 'decorate',
    value: function decorate(type, shouldAssert) {
      var _this2 = this;

      if (shouldAssert == null) {
        shouldAssert = this.mode === 'assert';
      }
      return function (input, propertyName, descriptor) {
        if (descriptor && typeof propertyName === 'string') {
          return makePropertyDescriptor(type, input, propertyName, descriptor, Boolean(shouldAssert));
        } else {
          invariant(typeof type !== 'function', 'Cannot decorate an object or function as a method.');
          return _this2.annotate(input, type);
        }
      };
    }

    /**
     * Annotates an object or function with the given type.
     * If a type is specified as the sole argument, returns a
     * function which can decorate classes or functions with the given type.
     */

  }, {
    key: 'annotate',
    value: function annotate(input, type) {
      if (type === undefined) {
        return annotateValue(input);
      } else {
        return annotateValue(input, type);
      }
    }
  }, {
    key: 'getAnnotation',
    value: function getAnnotation(input) {
      if (input !== null && (typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object' || typeof input === 'function') {
        // Issue 252
        return input[TypeSymbol];
      }
    }
  }, {
    key: 'hasAnnotation',
    value: function hasAnnotation(input) {
      if (input == null) {
        return false;
      } else {
        return input[TypeSymbol] ? true : false;
      }
    }
  }, {
    key: 'setAnnotation',
    value: function setAnnotation(input, type) {
      input[TypeSymbol] = type;
      return input;
    }
  }, {
    key: 'type',
    value: function type(name, _type) {
      if (typeof _type === 'function') {
        var target = new ParameterizedTypeAlias(this);
        target.name = name;
        target.typeCreator = _type;
        return target;
      } else {
        var _target = new TypeAlias(this);
        _target.name = name;
        _target.type = _type;
        return _target;
      }
    }
  }, {
    key: 'declare',
    value: function declare(name, type) {

      if (name instanceof Declaration) {
        type = name;
        name = type.name;
      } else if (name instanceof TypeAlias) {
        type = name;
        name = type.name;
      }
      if (typeof type === 'function') {
        type = this.type(name, type);
      }
      if (type instanceof ModuleDeclaration) {
        var moduleRegistry = this[ModuleRegistrySymbol];
        moduleRegistry[name] = type;
        return type;
      } else {
        invariant(typeof name === 'string', 'Name must be a string');
        invariant(type instanceof Type, 'Type must be supplied to declaration');
        var nameRegistry = this[NameRegistrySymbol];

        if (type instanceof Declaration) {
          nameRegistry[name] = type;
          return type;
        } else if (type instanceof TypeAlias || type instanceof ParameterizedTypeAlias) {
          var target = new TypeDeclaration(this);
          target.name = name;
          target.typeAlias = type;
          nameRegistry[name] = target;
          return target;
        } else {
          var _target2 = this.var(name, type);
          nameRegistry[name] = _target2;
          return _target2;
        }
      }
    }
  }, {
    key: 'declarations',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function declarations() {
      var nameRegistry, key;
      return _regeneratorRuntime.wrap(function declarations$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              nameRegistry = this[NameRegistrySymbol];
              _context.t0 = _regeneratorRuntime.keys(nameRegistry);

            case 2:
              if ((_context.t1 = _context.t0()).done) {
                _context.next = 8;
                break;
              }

              key = _context.t1.value;
              _context.next = 6;
              return [key, nameRegistry[key]];

            case 6:
              _context.next = 2;
              break;

            case 8:
            case 'end':
              return _context.stop();
          }
        }
      }, declarations, this);
    })
  }, {
    key: 'modules',
    value: /*#__PURE__*/_regeneratorRuntime.mark(function modules() {
      var moduleRegistry, key;
      return _regeneratorRuntime.wrap(function modules$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              moduleRegistry = this[ModuleRegistrySymbol];
              _context2.t0 = _regeneratorRuntime.keys(moduleRegistry);

            case 2:
              if ((_context2.t1 = _context2.t0()).done) {
                _context2.next = 8;
                break;
              }

              key = _context2.t1.value;
              _context2.next = 6;
              return moduleRegistry[key];

            case 6:
              _context2.next = 2;
              break;

            case 8:
            case 'end':
              return _context2.stop();
          }
        }
      }, modules, this);
    })
  }, {
    key: 'import',
    value: function _import(moduleName) {
      var moduleRegistry = this[ModuleRegistrySymbol];
      if (moduleRegistry[moduleName]) {
        return moduleRegistry[moduleName];
      }

      var _moduleName$split = moduleName.split('/'),
          _moduleName$split2 = slicedToArray(_moduleName$split, 1),
          head = _moduleName$split2[0];

      var module = moduleRegistry[head];
      if (module) {
        return module.import(moduleName);
      }
      var parent = this[ParentSymbol];
      if (parent) {
        return parent.import(moduleName);
      }
    }
  }, {
    key: 'declareTypeConstructor',
    value: function declareTypeConstructor(_ref) {
      var name = _ref.name,
          impl = _ref.impl,
          typeName = _ref.typeName,
          errors = _ref.errors,
          accepts = _ref.accepts,
          inferTypeParameters = _ref.inferTypeParameters,
          compareWith = _ref.compareWith;

      var nameRegistry = this[NameRegistrySymbol];

      if (nameRegistry[name]) {
        this.emitWarningMessage('Redeclaring type: ' + name + ', this may be unintended.');
      }

      var target = new TypeConstructor(this);
      target.name = name;
      target.typeName = typeName;
      target.impl = impl;
      target.errors = errors;
      target.accepts = accepts;
      target.inferTypeParameters = inferTypeParameters;
      if (typeof compareWith === 'function') {
        target.compareWith = compareWith;
      }

      nameRegistry[name] = target;

      if (typeof impl === 'function') {
        // Issue 252
        var handlerRegistry = this[TypeConstructorRegistrySymbol];

        if (handlerRegistry.has(impl)) {
          this.emitWarningMessage('A type handler already exists for the given implementation of ' + name + '.');
        }
        handlerRegistry.set(impl, target);
      }
      return target;
    }
  }, {
    key: 'getTypeConstructor',
    value: function getTypeConstructor(impl) {
      // Issue 252
      var handlerRegistry = this[TypeConstructorRegistrySymbol];

      return handlerRegistry.get(impl);
    }
  }, {
    key: 'literal',
    value: function literal(input) {
      if (input === undefined) {
        return this.void();
      } else if (input === null) {
        return this.null();
      } else if (typeof input === 'boolean') {
        return this.boolean(input);
      } else if (typeof input === 'number') {
        return this.number(input);
      } else if (typeof input === 'string') {
        return this.string(input);
      }
      // Issue 252
      else if ((typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'symbol') {
          return this.symbol(input);
        } else {
          return this.typeOf(input);
        }
    }
  }, {
    key: 'null',
    value: function _null() {
      return primitiveTypes.null;
    }
  }, {
    key: 'nullable',
    value: function nullable(type) {
      var target = new NullableType(this);
      target.type = type;
      return target;
    }
  }, {
    key: 'existential',
    value: function existential() {
      return primitiveTypes.existential;
    }
  }, {
    key: 'empty',
    value: function empty() {
      return primitiveTypes.empty;
    }
  }, {
    key: 'any',
    value: function any() {
      return primitiveTypes.any;
    }
  }, {
    key: 'mixed',
    value: function mixed() {
      return primitiveTypes.mixed;
    }
  }, {
    key: 'void',
    value: function _void() {
      return primitiveTypes.void;
    }
  }, {
    key: 'this',
    value: function _this(input) {
      var target = new ThisType(this);
      if (input !== undefined) {
        target.recorded = input;
      }
      return target;
    }
  }, {
    key: 'number',
    value: function number(input) {
      if (input !== undefined) {
        var target = new NumericLiteralType(this);
        target.value = input;
        return target;
      } else {
        return primitiveTypes.number;
      }
    }
  }, {
    key: 'boolean',
    value: function boolean(input) {
      if (input !== undefined) {
        var target = new BooleanLiteralType(this);
        target.value = input;
        return target;
      } else {
        return primitiveTypes.boolean;
      }
    }
  }, {
    key: 'string',
    value: function string(input) {
      if (input !== undefined) {
        var target = new StringLiteralType(this);
        target.value = input;
        return target;
      } else {
        return primitiveTypes.string;
      }
    }
  }, {
    key: 'symbol',
    value: function symbol(input) {
      if (input !== undefined) {
        var target = new SymbolLiteralType(this);
        target.value = input;
        return target;
      } else {
        return primitiveTypes.symbol;
      }
    }
  }, {
    key: 'typeParameter',
    value: function typeParameter(id, bound, defaultType) {
      var target = new TypeParameter(this);
      target.id = id;
      target.bound = bound;
      target.default = defaultType;
      return target;
    }
  }, {
    key: 'flowInto',
    value: function flowInto(typeParameter) {
      return flowIntoTypeParameter(typeParameter);
    }

    /**
     * Bind the type parameters for the parent class of the given instance.
     */

  }, {
    key: 'bindTypeParameters',
    value: function bindTypeParameters(subject) {
      var instancePrototype = Object.getPrototypeOf(subject);
      // Issue
      var parentPrototype = instancePrototype && Object.getPrototypeOf(instancePrototype);
      // Issue
      var parentClass = parentPrototype && parentPrototype.constructor;

      if (!parentClass) {
        this.emitWarningMessage('Could not bind type parameters for non-existent parent class.');
        return subject;
      }
      // Issue 252
      var typeParametersPointer = parentClass[TypeParametersSymbol];

      if (typeParametersPointer) {
        var typeParameters = subject[typeParametersPointer];
        var keys = Object.keys(typeParameters);

        for (var _len2 = arguments.length, typeInstances = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          typeInstances[_key2 - 1] = arguments[_key2];
        }

        var length = Math.min(keys.length, typeInstances.length);
        for (var i = 0; i < length; i++) {
          var typeParam = typeParameters[keys[i]];
          typeParam.bound = typeInstances[i];
        }
      }
      return subject;
    }
  }, {
    key: 'module',
    value: function module(name, body) {
      var target = new ModuleDeclaration(this);
      target.name = name;
      var innerContext = this.createContext();
      // Issue 252
      innerContext[ParentSymbol] = this;
      // Issue 252
      innerContext[CurrentModuleSymbol] = target;

      target.innerContext = innerContext;
      body(innerContext);
      return target;
    }
  }, {
    key: 'moduleExports',
    value: function moduleExports(type) {
      var currentModule = this[CurrentModuleSymbol];
      if (!currentModule) {
        throw new Error('Cannot declare module.exports outside of a module.');
      }
      var target = new ModuleExports(this);
      target.type = type;
      currentModule.moduleExports = target;
      return target;
    }
  }, {
    key: 'var',
    value: function _var(name, type) {
      var target = new VarDeclaration(this);
      target.name = name;
      target.type = type;
      return target;
    }
  }, {
    key: 'class',
    value: function _class(name, head) {
      if (typeof head === 'function') {
        var _target3 = new ParameterizedClassDeclaration(this);
        _target3.name = name;
        _target3.bodyCreator = head;
        return _target3;
      }
      var target = new ClassDeclaration(this);
      target.name = name;

      for (var _len3 = arguments.length, tail = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        tail[_key3 - 2] = arguments[_key3];
      }

      if (head != null) {
        tail.unshift(head);
      }
      var length = tail.length;

      var properties = [];
      var body = void 0;

      for (var i = 0; i < length; i++) {
        var item = tail[i];
        if (item instanceof ObjectTypeProperty || item instanceof ObjectTypeIndexer) {
          properties.push(item);
        } else if (item instanceof ObjectType) {
          invariant(!body, 'Class body must only be declared once.');
          body = item;
        } else if (item instanceof ExtendsDeclaration) {
          invariant(!target.superClass, 'Classes can only have one super class.');
          target.superClass = item;
        } else if (item != null && (typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object' && !(item instanceof Type)) {
          for (var propertyName in item) {
            // eslint-disable-line
            properties.push(this.property(propertyName, item[propertyName]));
          }
        } else {
          throw new Error('ClassDeclaration cannot contain the given type directly.');
        }
      }
      if (!body) {
        body = new ObjectType(this);
      }
      if (properties.length) {
        var _body$properties;

        (_body$properties = body.properties).push.apply(_body$properties, properties);
      }
      target.body = body;
      return target;
    }
  }, {
    key: 'extends',
    value: function _extends(subject) {
      var target = new ExtendsDeclaration(this);

      for (var _len4 = arguments.length, typeInstances = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        typeInstances[_key4 - 1] = arguments[_key4];
      }

      target.type = this.ref.apply(this, [subject].concat(toConsumableArray(typeInstances)));
      return target;
    }
  }, {
    key: 'fn',
    value: function fn(head) {
      for (var _len5 = arguments.length, tail = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        tail[_key5 - 1] = arguments[_key5];
      }

      return this.function.apply(this, [head].concat(tail));
    }
  }, {
    key: 'function',
    value: function _function(head) {
      if (typeof head === 'function') {
        var _target4 = new ParameterizedFunctionType(this);
        _target4.bodyCreator = head;
        return _target4;
      }
      var target = new FunctionType(this);
      if (head != null) {
        for (var _len6 = arguments.length, tail = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
          tail[_key6 - 1] = arguments[_key6];
        }

        tail.unshift(head);
        var length = tail.length;

        for (var i = 0; i < length; i++) {
          var item = tail[i];
          if (item instanceof FunctionTypeParam) {
            target.params.push(item);
          } else if (item instanceof FunctionTypeRestParam) {
            target.rest = item;
          } else if (item instanceof FunctionTypeReturn) {
            target.returnType = item;
          } else {
            throw new Error('FunctionType cannot contain the given type directly.');
          }
        }
      }
      if (!target.returnType) {
        target.returnType = this.any();
      }
      return target;
    }
  }, {
    key: 'param',
    value: function param(name, type) {
      var optional = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var target = new FunctionTypeParam(this);
      target.name = name;
      target.type = type;
      target.optional = optional;
      return target;
    }
  }, {
    key: 'rest',
    value: function rest(name, type) {
      var target = new FunctionTypeRestParam(this);
      target.name = name;
      target.type = type;
      return target;
    }
  }, {
    key: 'return',
    value: function _return(type) {
      var target = new FunctionTypeReturn(this);
      target.type = type;
      return target;
    }
  }, {
    key: 'generator',
    value: function generator(yieldType, returnType, nextType) {
      var target = new GeneratorType(this);
      target.yieldType = yieldType;
      target.returnType = returnType || this.any();
      target.nextType = nextType || this.any();
      return target;
    }
  }, {
    key: 'object',
    value: function object(head) {
      var target = new ObjectType(this);
      if (head != null && (typeof head === 'undefined' ? 'undefined' : _typeof(head)) === 'object' && !(head instanceof Type)) {
        for (var propertyName in head) {
          // eslint-disable-line
          target.properties.push(this.property(propertyName, head[propertyName]));
        }
      } else {
        var body = void 0;

        for (var _len7 = arguments.length, tail = Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
          tail[_key7 - 1] = arguments[_key7];
        }

        if (head) {
          body = [head].concat(toConsumableArray(tail));
        } else {
          body = tail;
        }
        var _body = body,
            length = _body.length;

        for (var i = 0; i < length; i++) {
          var item = body[i];
          if (item instanceof ObjectTypeProperty) {
            target.properties.push(item);
          } else if (item instanceof ObjectTypeIndexer) {
            target.indexers.push(item);
          } else if (item instanceof ObjectTypeCallProperty) {
            target.callProperties.push(item);
          } else {
            throw new Error('ObjectType cannot contain the given type directly.');
          }
        }
      }
      return target;
    }
  }, {
    key: 'exactObject',
    value: function exactObject(head) {
      for (var _len8 = arguments.length, tail = Array(_len8 > 1 ? _len8 - 1 : 0), _key8 = 1; _key8 < _len8; _key8++) {
        tail[_key8 - 1] = arguments[_key8];
      }

      var object = this.object.apply(this, [head].concat(toConsumableArray(tail)));
      object.exact = true;
      return object;
    }
  }, {
    key: 'callProperty',
    value: function callProperty(value) {
      var target = new ObjectTypeCallProperty(this);
      target.value = value;
      return target;
    }
  }, {
    key: 'property',
    value: function property(key, value) {
      var optional = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var target = new ObjectTypeProperty(this);
      target.key = key;
      if (value instanceof Type) {
        target.value = value;
      } else {
        target.value = this.object(value);
      }
      target.optional = optional;
      return target;
    }
  }, {
    key: 'indexer',
    value: function indexer(id, key, value) {
      var target = new ObjectTypeIndexer(this);
      target.id = id;
      target.key = key;
      target.value = value;
      return target;
    }
  }, {
    key: 'method',
    value: function method(name, head) {
      var target = new ObjectTypeProperty(this);
      target.key = name;

      for (var _len9 = arguments.length, tail = Array(_len9 > 2 ? _len9 - 2 : 0), _key9 = 2; _key9 < _len9; _key9++) {
        tail[_key9 - 2] = arguments[_key9];
      }

      target.value = this.function.apply(this, [head].concat(tail));
      return target;
    }
  }, {
    key: 'staticCallProperty',
    value: function staticCallProperty(value) {
      var prop = this.callProperty(value);
      prop.static = true;
      return prop;
    }
  }, {
    key: 'staticProperty',
    value: function staticProperty(key, value) {
      var optional = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var prop = this.property(key, value, optional);
      prop.static = true;
      return prop;
    }
  }, {
    key: 'staticMethod',
    value: function staticMethod(name, head) {
      for (var _len10 = arguments.length, tail = Array(_len10 > 2 ? _len10 - 2 : 0), _key10 = 2; _key10 < _len10; _key10++) {
        tail[_key10 - 2] = arguments[_key10];
      }

      var prop = this.method.apply(this, [name, head].concat(tail));
      prop.static = true;
      return prop;
    }
  }, {
    key: 'spread',
    value: function spread() {
      var target = new ObjectType(this);

      for (var _len11 = arguments.length, types = Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
        types[_key11] = arguments[_key11];
      }

      for (var i = 0; i < types.length; i++) {
        var type = types[i].unwrap();
        if (Array.isArray(type.callProperties)) {
          var _target$callPropertie;

          (_target$callPropertie = target.callProperties).push.apply(_target$callPropertie, toConsumableArray(type.callProperties));
        }
        if (Array.isArray(type.indexers)) {
          var _target$indexers;

          (_target$indexers = target.indexers).push.apply(_target$indexers, toConsumableArray(type.indexers));
        }
        if (Array.isArray(type.properties)) {
          for (var j = 0; j < type.properties.length; j++) {
            var prop = type.properties[j];
            invariant(prop instanceof ObjectTypeProperty);
            target.setProperty(prop.key, prop.value, prop.optional);
          }
        }
      }
      return target;
    }
  }, {
    key: 'tuple',
    value: function tuple() {
      var target = new TupleType(this);

      for (var _len12 = arguments.length, types = Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
        types[_key12] = arguments[_key12];
      }

      target.types = types;
      return target;
    }
  }, {
    key: 'array',
    value: function array(elementType) {
      var target = new ArrayType(this);
      target.elementType = elementType || this.any();
      return target;
    }
  }, {
    key: 'union',
    value: function union() {
      for (var _len13 = arguments.length, types = Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
        types[_key13] = arguments[_key13];
      }

      return makeUnion(this, types);
    }
  }, {
    key: 'intersect',
    value: function intersect() {
      var target = new IntersectionType(this);

      for (var _len14 = arguments.length, types = Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
        types[_key14] = arguments[_key14];
      }

      target.types = types;
      return target;
    }
  }, {
    key: 'intersection',
    value: function intersection() {
      return this.intersect.apply(this, arguments);
    }
  }, {
    key: 'box',
    value: function box(reveal) {
      var box = new TypeBox(this);
      box.reveal = reveal;
      return box;
    }
  }, {
    key: 'tdz',
    value: function tdz(reveal, name) {
      var tdz = new TypeTDZ(this);
      tdz.reveal = reveal;
      tdz.name = name;
      return tdz;
    }
  }, {
    key: 'ref',
    value: function ref(subject) {
      var target = void 0;
      if (typeof subject === 'string') {
        // try and eagerly resolve the reference
        target = this.get(subject);
        if (!target) {
          // defer dereferencing for now
          target = new TypeReference(this);
          target.name = subject;
        }
      } else if (typeof subject === 'function') {
        // Issue 252
        var handlerRegistry = this[TypeConstructorRegistrySymbol];

        // see if we have a dedicated TypeConstructor for this.
        target = handlerRegistry.get(subject);

        if (!target) {
          // just use a generic type handler.
          target = new GenericType(this);
          target.impl = subject;
          target.name = subject.name;
        }
      } else if (subject instanceof Type) {
        target = subject;
      } else {
        if (subject == null || (typeof subject === 'undefined' ? 'undefined' : _typeof(subject)) !== 'object') {
          this.emitWarningMessage('Could not reference the given type, try t.typeOf(value) instead. (got ' + String(subject) + ')');
        } else if (!warnedInvalidReferences.has(subject)) {
          this.emitWarningMessage('Could not reference the given type, try t.typeOf(value) instead.');
          warnedInvalidReferences.add(subject);
        }
        return this.any();
      }

      for (var _len15 = arguments.length, typeInstances = Array(_len15 > 1 ? _len15 - 1 : 0), _key15 = 1; _key15 < _len15; _key15++) {
        typeInstances[_key15 - 1] = arguments[_key15];
      }

      if (typeInstances.length) {
        var _target5;

        invariant(typeof target.apply === 'function', 'Cannot apply non-applicable type: ' + target.typeName + '.');
        return (_target5 = target).apply.apply(_target5, toConsumableArray(typeInstances));
      } else {
        return target;
      }
    }
  }, {
    key: 'validate',
    value: function validate(type, input) {
      var prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var path = arguments[3];

      var validation = new Validation(this, input);
      if (path) {
        var _validation$path;

        (_validation$path = validation.path).push.apply(_validation$path, toConsumableArray(path));
      } else if (typeof type.name === 'string') {
        validation.path.push(type.name);
      }
      validation.prefix = prefix;
      validation.errors = Array.from(type.errors(validation, [], input));
      return validation;
    }
  }, {
    key: 'check',
    value: function check(type, input) {
      var prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var path = arguments[3];

      if (this.mode === 'assert') {
        return this.assert(type, input, prefix, path);
      } else {
        return this.warn(type, input, prefix, path);
      }
    }
  }, {
    key: 'assert',
    value: function assert(type, input) {
      var prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var path = arguments[3];

      var validation = this.validate(type, input, prefix, path);
      var error = this.makeTypeError(validation);
      if (error) {
        throw error;
      }
      return input;
    }
  }, {
    key: 'warn',
    value: function warn(type, input) {
      var prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var path = arguments[3];

      var validation = this.validate(type, input, prefix, path);
      var message = makeWarningMessage(validation);
      if (typeof message === 'string') {
        this.emitWarningMessage(message);
      }
      return input;
    }

    /**
     * Emits a warning message, using `console.warn()` by default.
     */

  }, {
    key: 'emitWarningMessage',
    value: function emitWarningMessage(message) {
      console.warn('flow-runtime:', message);
    }
  }, {
    key: 'propTypes',
    value: function propTypes(type) {
      return makeReactPropTypes(type.unwrap());
    }
  }, {
    key: 'match',
    value: function match() {
      for (var _len16 = arguments.length, args = Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
        args[_key16] = arguments[_key16];
      }

      var clauses = args.pop();
      if (!Array.isArray(clauses)) {
        throw new Error('Invalid pattern, last argument must be an array.');
      }
      var pattern = this.pattern.apply(this, toConsumableArray(clauses));
      return pattern.apply(undefined, args);
    }
  }, {
    key: 'pattern',
    value: function pattern() {
      for (var _len17 = arguments.length, clauses = Array(_len17), _key17 = 0; _key17 < _len17; _key17++) {
        clauses[_key17] = arguments[_key17];
      }

      var length = clauses.length;

      var tests = new Array(length);
      for (var i = 0; i < length; i++) {
        var clause = clauses[i];
        var annotation = this.getAnnotation(clause);
        if (!annotation) {
          if (i !== length - 1) {
            throw new Error('Invalid Pattern - found unannotated function in position ' + i + ', default clauses must be last.');
          }
          tests[i] = true;
        } else {
          invariant(annotation instanceof FunctionType || annotation instanceof ParameterizedFunctionType, 'Pattern clauses must be annotated functions.');
          tests[i] = annotation;
        }
      }
      return function () {
        for (var _i = 0; _i < tests.length; _i++) {
          var test = tests[_i];
          var _clause = clauses[_i];
          if (test === true) {
            return _clause.apply(undefined, arguments);
          } else if (test.acceptsParams.apply(test, arguments)) {
            return _clause.apply(undefined, arguments);
          }
        }
        var error = new TypeError('Value did not match any of the candidates.');
        error.name = 'RuntimeTypeError';
        throw error;
      };
    }
  }, {
    key: 'wrapIterator',
    value: function wrapIterator(type) {
      var t = this;
      return (/*#__PURE__*/_regeneratorRuntime.mark(function wrappedIterator(input) {
          var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

          return _regeneratorRuntime.wrap(function wrappedIterator$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _iteratorNormalCompletion = true;
                  _didIteratorError = false;
                  _iteratorError = undefined;
                  _context3.prev = 3;
                  _iterator = input[Symbol.iterator]();

                case 5:
                  if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                    _context3.next = 12;
                    break;
                  }

                  item = _step.value;
                  _context3.next = 9;
                  return t.check(type, item);

                case 9:
                  _iteratorNormalCompletion = true;
                  _context3.next = 5;
                  break;

                case 12:
                  _context3.next = 18;
                  break;

                case 14:
                  _context3.prev = 14;
                  _context3.t0 = _context3['catch'](3);
                  _didIteratorError = true;
                  _iteratorError = _context3.t0;

                case 18:
                  _context3.prev = 18;
                  _context3.prev = 19;

                  if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                  }

                case 21:
                  _context3.prev = 21;

                  if (!_didIteratorError) {
                    _context3.next = 24;
                    break;
                  }

                  throw _iteratorError;

                case 24:
                  return _context3.finish(21);

                case 25:
                  return _context3.finish(18);

                case 26:
                case 'end':
                  return _context3.stop();
              }
            }
          }, wrappedIterator, this, [[3, 14, 18, 26], [19,, 21, 25]]);
        })
      );
    }
  }, {
    key: 'refinement',
    value: function refinement(type) {
      var target = new RefinementType(this);
      target.type = type;

      for (var _len18 = arguments.length, constraints = Array(_len18 > 1 ? _len18 - 1 : 0), _key18 = 1; _key18 < _len18; _key18++) {
        constraints[_key18 - 1] = arguments[_key18];
      }

      target.addConstraint.apply(target, toConsumableArray(constraints));
      return target;
    }
  }, {
    key: '$exact',
    value: function $exact(type) {
      var target = new ObjectType(this);
      type = type.unwrap();
      if (Array.isArray(type.callProperties)) {
        var _target$callPropertie2;

        (_target$callPropertie2 = target.callProperties).push.apply(_target$callPropertie2, toConsumableArray(type.callProperties));
      }
      if (Array.isArray(type.indexers)) {
        var _target$indexers2;

        (_target$indexers2 = target.indexers).push.apply(_target$indexers2, toConsumableArray(type.indexers));
      }
      if (Array.isArray(type.properties)) {
        var _target$properties;

        (_target$properties = target.properties).push.apply(_target$properties, toConsumableArray(type.properties));
      }
      target.exact = true;
      return target;
    }
  }, {
    key: '$diff',
    value: function $diff(aType, bType) {
      var target = new $DiffType(this);
      target.aType = aType;
      target.bType = bType;
      return target;
    }
  }, {
    key: '$flowFixMe',
    value: function $flowFixMe() {
      return new $FlowFixMeType(this);
    }
  }, {
    key: '$keys',
    value: function $keys(type) {
      var target = new $KeysType(this);
      target.type = type;
      return target;
    }
  }, {
    key: '$objMap',
    value: function $objMap(object, mapper) {
      var target = new $ObjMapType(this);
      target.object = object;
      target.mapper = mapper;
      return target;
    }
  }, {
    key: '$objMapi',
    value: function $objMapi(object, mapper) {
      var target = new $ObjMapiType(this);
      target.object = object;
      target.mapper = mapper;
      return target;
    }
  }, {
    key: '$propertyType',
    value: function $propertyType(object, property) {
      var target = new $PropertyType(this);
      target.object = object;
      if (property instanceof Type) {
        var unwrapped = property.unwrap();
        target.property = unwrapped.value;
      } else {
        target.property = property;
      }
      return target;
    }
  }, {
    key: '$shape',
    value: function $shape(type) {
      var target = new $ShapeType(this);
      target.type = type;
      return target;
    }
  }, {
    key: '$subtype',
    value: function $subtype(type) {
      var target = new $SubType(this);
      target.type = type;
      return target;
    }
  }, {
    key: '$supertype',
    value: function $supertype(type) {
      var target = new $SuperType(this);
      target.type = type;
      return target;
    }
  }, {
    key: '$tupleMap',
    value: function $tupleMap(tuple, mapper) {
      var target = new $TupleMapType(this);
      target.tuple = tuple;
      target.mapper = mapper;
      return target;
    }
  }, {
    key: '$values',
    value: function $values(type) {
      var target = new $ValuesType(this);
      target.type = type;
      return target;
    }
  }, {
    key: 'Class',
    value: function Class(instanceType) {
      var target = new ClassType(this);
      target.instanceType = instanceType;
      return target;
    }
  }, {
    key: 'TypeParametersSymbol',


    // Issue 252
    get: function get$$1() {
      return TypeParametersSymbol;
    }
  }]);
  return TypeContext;
}();

var globalContext$1 = void 0;
if (typeof commonjsGlobal !== 'undefined' && typeof commonjsGlobal.__FLOW_RUNTIME_GLOBAL_CONTEXT_DO_NOT_USE_THIS_VARIABLE__ !== 'undefined') {
  globalContext$1 = commonjsGlobal.__FLOW_RUNTIME_GLOBAL_CONTEXT_DO_NOT_USE_THIS_VARIABLE__;
} else {
  globalContext$1 = new TypeContext();
  registerPrimitiveTypes(globalContext$1);
  registerBuiltinTypeConstructors(globalContext$1);
  registerTypePredicates(globalContext$1);
  if (typeof commonjsGlobal !== 'undefined') {
    commonjsGlobal.__FLOW_RUNTIME_GLOBAL_CONTEXT_DO_NOT_USE_THIS_VARIABLE__ = globalContext$1;
  }
}

var globalContext$2 = globalContext$1;

function v(thing) {
  return { value: thing };
}

if (typeof commonjsGlobal !== 'undefined' && commonjsGlobal.__FLOW_RUNTIME_GLOBAL_CONTEXT_DO_NOT_USE_THIS_VARIABLE__ !== globalContext$2) {
  Object.defineProperties(globalContext$2, {
    TypeContext: v(TypeContext),
    Type: v(Type),
    TypeBox: v(TypeBox),
    TypeParameter: v(TypeParameter),
    TypeReference: v(TypeReference),
    TypeTDZ: v(TypeTDZ),
    ParameterizedTypeAlias: v(ParameterizedTypeAlias),
    TypeAlias: v(TypeAlias),
    TypeConstructor: v(TypeConstructor),
    GenericType: v(GenericType),
    NullLiteralType: v(NullLiteralType),
    NumberType: v(NumberType),
    NumericLiteralType: v(NumericLiteralType),
    BooleanType: v(BooleanType),
    BooleanLiteralType: v(BooleanLiteralType),
    SymbolType: v(SymbolType),
    SymbolLiteralType: v(SymbolLiteralType),
    StringType: v(StringType),
    StringLiteralType: v(StringLiteralType),
    ArrayType: v(ArrayType),
    ObjectType: v(ObjectType),
    ObjectTypeCallProperty: v(ObjectTypeCallProperty),
    ObjectTypeIndexer: v(ObjectTypeIndexer),
    ObjectTypeProperty: v(ObjectTypeProperty),
    FunctionType: v(FunctionType),
    FunctionTypeParam: v(FunctionTypeParam),
    FunctionTypeRestParam: v(FunctionTypeRestParam),
    FunctionTypeReturn: v(FunctionTypeReturn),
    ParameterizedFunctionType: v(ParameterizedFunctionType),
    PartialType: v(PartialType),
    RefinementType: v(RefinementType),
    TypeParameterApplication: v(TypeParameterApplication),
    GeneratorType: v(GeneratorType),
    ExistentialType: v(ExistentialType),
    FlowIntoType: v(FlowIntoType),
    AnyType: v(AnyType),
    MixedType: v(MixedType),
    EmptyType: v(EmptyType),
    NullableType: v(NullableType),
    ThisType: v(ThisType),
    TupleType: v(TupleType),
    UnionType: v(UnionType),
    IntersectionType: v(IntersectionType),
    VoidType: v(VoidType),
    Declaration: v(Declaration),
    VarDeclaration: v(VarDeclaration),
    TypeDeclaration: v(TypeDeclaration),
    ModuleDeclaration: v(ModuleDeclaration),
    ModuleExportsDeclaration: v(ModuleExports),
    ClassDeclaration: v(ClassDeclaration),
    ParameterizedClassDeclaration: v(ParameterizedClassDeclaration),
    ExtendsDeclaration: v(ExtendsDeclaration)
  });
}

return globalContext$2;

})));

});

// This file is part of LeanES.
//
// LeanES is free software: you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// LeanES is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public License
// along with LeanES.  If not, see <https://www.gnu.org/licenses/>.
var Types = flowRuntime_umd.type("Types", flowRuntime_umd.union(flowRuntime_umd.string("any"), flowRuntime_umd.string("alternatives"), flowRuntime_umd.string("array"), flowRuntime_umd.string("boolean"), flowRuntime_umd.string("binary"), flowRuntime_umd.string("date"), flowRuntime_umd.string("function"), flowRuntime_umd.string("link"), flowRuntime_umd.string("number"), flowRuntime_umd.string("object"), flowRuntime_umd.string("string"), flowRuntime_umd.string("symbol")));
var JoiT = flowRuntime_umd.type("JoiT", flowRuntime_umd.object(flowRuntime_umd.property("$_super", flowRuntime_umd.ref("object")), flowRuntime_umd.property("$_terms", flowRuntime_umd.ref("object")), flowRuntime_umd.property("$_root", flowRuntime_umd.ref("object")), flowRuntime_umd.property("_flags", flowRuntime_umd.ref("object")), flowRuntime_umd.property("type", flowRuntime_umd.union(Types, flowRuntime_umd.string()))));

// This file is part of leanes-swagger-addon.
//
// leanes-swagger-addon is free software: you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// leanes-swagger-addon is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public License
// along with leanes-swagger-addon.  If not, see <https://www.gnu.org/licenses/>.
var SwaggerEndpointStruct = flowRuntime_umd.type("SwaggerEndpointStruct", flowRuntime_umd.object(flowRuntime_umd.property("tags", flowRuntime_umd.nullable(flowRuntime_umd.array(flowRuntime_umd.string()))), flowRuntime_umd.property("headers", flowRuntime_umd.nullable(flowRuntime_umd.array(flowRuntime_umd.ref("object")))), flowRuntime_umd.property("pathParams", flowRuntime_umd.nullable(flowRuntime_umd.array(flowRuntime_umd.ref("object")))), flowRuntime_umd.property("queryParams", flowRuntime_umd.nullable(flowRuntime_umd.array(flowRuntime_umd.ref("object")))), flowRuntime_umd.property("payload", flowRuntime_umd.nullable(flowRuntime_umd.ref("object"))), flowRuntime_umd.property("responses", flowRuntime_umd.nullable(flowRuntime_umd.array(flowRuntime_umd.ref("object")))), flowRuntime_umd.property("errors", flowRuntime_umd.nullable(flowRuntime_umd.array(flowRuntime_umd.ref("object")))), flowRuntime_umd.property("title", flowRuntime_umd.nullable(flowRuntime_umd.string())), flowRuntime_umd.property("synopsis", flowRuntime_umd.nullable(flowRuntime_umd.string())), flowRuntime_umd.property("isDeprecated", flowRuntime_umd["boolean"]())));

// This file is part of leanes-swagger-addon.
var SwaggerEndpointStruct$1 = flowRuntime_umd.tdz(function () {
  return SwaggerEndpointStruct;
});
var JoiT$1 = flowRuntime_umd.tdz(function () {
  return JoiT;
});
var SwaggerGatewayInterface = flowRuntime_umd.type("SwaggerGatewayInterface", function (SwaggerGatewayInterface) {
  var Endpoint = SwaggerGatewayInterface.typeParameter("Endpoint", undefined, flowRuntime_umd.ref(SwaggerEndpointStruct$1));
  return flowRuntime_umd.object(flowRuntime_umd.property("getEndpointByName", flowRuntime_umd["function"](flowRuntime_umd.param("asName", flowRuntime_umd.string()), flowRuntime_umd["return"](flowRuntime_umd.nullable(flowRuntime_umd.Class(flowRuntime_umd.existential()))))), flowRuntime_umd.property("getEndpointName", flowRuntime_umd["function"](flowRuntime_umd.param("asResourse", flowRuntime_umd.string()), flowRuntime_umd.param("asAction", flowRuntime_umd.string()), flowRuntime_umd["return"](flowRuntime_umd.string()))), flowRuntime_umd.property("getStandardActionEndpoint", flowRuntime_umd["function"](flowRuntime_umd.param("asResourse", flowRuntime_umd.string()), flowRuntime_umd.param("asAction", flowRuntime_umd.string()), flowRuntime_umd["return"](flowRuntime_umd.Class(flowRuntime_umd.existential())))), flowRuntime_umd.property("getEndpoint", flowRuntime_umd["function"](flowRuntime_umd.param("asResourse", flowRuntime_umd.string()), flowRuntime_umd.param("asAction", flowRuntime_umd.string()), flowRuntime_umd["return"](flowRuntime_umd.Class(flowRuntime_umd.existential())))), flowRuntime_umd.property("swaggerDefinitionFor", flowRuntime_umd["function"](flowRuntime_umd.param("asResourse", flowRuntime_umd.string()), flowRuntime_umd.param("asAction", flowRuntime_umd.string()), flowRuntime_umd.param("opts", flowRuntime_umd.nullable(flowRuntime_umd.ref("object"))), flowRuntime_umd["return"](Endpoint))), flowRuntime_umd.property("getSchema", flowRuntime_umd["function"](flowRuntime_umd.param("asRecordName", flowRuntime_umd.string()), flowRuntime_umd["return"](flowRuntime_umd.ref(JoiT$1)))));
});

// This file is part of leanes-swagger-addon.
var SwaggerGatewayInterface$1 = flowRuntime_umd.tdz(function () {
  return SwaggerGatewayInterface;
});
var JoiT$2 = flowRuntime_umd.tdz(function () {
  return JoiT;
});
var SwaggerEndpointInterface = flowRuntime_umd.type("SwaggerEndpointInterface", function (SwaggerEndpointInterface) {
  var Gateway = SwaggerEndpointInterface.typeParameter("Gateway", undefined, flowRuntime_umd.ref(SwaggerGatewayInterface$1));
  return flowRuntime_umd.object(flowRuntime_umd.property("gateway", Gateway), flowRuntime_umd.property("tag", flowRuntime_umd["function"](flowRuntime_umd.param("asName", flowRuntime_umd.string()), flowRuntime_umd["return"](SwaggerEndpointInterface))), flowRuntime_umd.property("header", flowRuntime_umd["function"](flowRuntime_umd.param("name", flowRuntime_umd.string()), flowRuntime_umd.param("schema", flowRuntime_umd.ref(JoiT$2)), flowRuntime_umd.param("description", flowRuntime_umd.nullable(flowRuntime_umd.string())), flowRuntime_umd["return"](SwaggerEndpointInterface))), flowRuntime_umd.property("pathParam", flowRuntime_umd["function"](flowRuntime_umd.param("name", flowRuntime_umd.string()), flowRuntime_umd.param("schema", flowRuntime_umd.ref(JoiT$2)), flowRuntime_umd.param("description", flowRuntime_umd.nullable(flowRuntime_umd.string())), flowRuntime_umd["return"](SwaggerEndpointInterface))), flowRuntime_umd.property("queryParam", flowRuntime_umd["function"](flowRuntime_umd.param("name", flowRuntime_umd.string()), flowRuntime_umd.param("schema", flowRuntime_umd.ref(JoiT$2)), flowRuntime_umd.param("description", flowRuntime_umd.nullable(flowRuntime_umd.string())), flowRuntime_umd["return"](SwaggerEndpointInterface))), flowRuntime_umd.property("body", flowRuntime_umd["function"](flowRuntime_umd.param("schema", flowRuntime_umd.ref(JoiT$2)), flowRuntime_umd.param("mimes", flowRuntime_umd.nullable(flowRuntime_umd.union(flowRuntime_umd.array(), flowRuntime_umd.string()))), flowRuntime_umd.param("description", flowRuntime_umd.nullable(flowRuntime_umd.string())), flowRuntime_umd["return"](SwaggerEndpointInterface))), flowRuntime_umd.property("response", flowRuntime_umd["function"](flowRuntime_umd.param("status", flowRuntime_umd.union(flowRuntime_umd.number(), flowRuntime_umd.string(), flowRuntime_umd.ref(JoiT$2), flowRuntime_umd["null"]())), flowRuntime_umd.param("schema", flowRuntime_umd.nullable(flowRuntime_umd.union(flowRuntime_umd.ref(JoiT$2), flowRuntime_umd.string(), flowRuntime_umd.array()))), flowRuntime_umd.param("mimes", flowRuntime_umd.nullable(flowRuntime_umd.union(flowRuntime_umd.array(), flowRuntime_umd.string()))), flowRuntime_umd.param("description", flowRuntime_umd.nullable(flowRuntime_umd.string())), flowRuntime_umd["return"](SwaggerEndpointInterface))), flowRuntime_umd.property("error", flowRuntime_umd["function"](flowRuntime_umd.param("status", flowRuntime_umd.union(flowRuntime_umd.string(), flowRuntime_umd.number())), flowRuntime_umd.param("description", flowRuntime_umd.nullable(flowRuntime_umd.string())), flowRuntime_umd["return"](SwaggerEndpointInterface))), flowRuntime_umd.property("summary", flowRuntime_umd["function"](flowRuntime_umd.param("asSummary", flowRuntime_umd.string()), flowRuntime_umd["return"](SwaggerEndpointInterface))), flowRuntime_umd.property("description", flowRuntime_umd["function"](flowRuntime_umd.param("asDescription", flowRuntime_umd.string()), flowRuntime_umd["return"](SwaggerEndpointInterface))), flowRuntime_umd.property("deprecated", flowRuntime_umd["function"](flowRuntime_umd.param("abDeprecated", flowRuntime_umd["boolean"]()), flowRuntime_umd["return"](SwaggerEndpointInterface))));
});

var SwaggerEndpointInterface$1 = flowRuntime_umd.tdz(function () {
  return SwaggerEndpointInterface;
});
var SwaggerGatewayInterface$2 = flowRuntime_umd.tdz(function () {
  return SwaggerGatewayInterface;
});
var JoiT$3 = flowRuntime_umd.tdz(function () {
  return JoiT;
});
var SwaggerEndpoint = (function (Module) {
  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _class, _class2, _init, _init2, _init3, _init4, _init5, _init6, _init7, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _class3, _temp;

  var _Module$NS = Module.NS,
      CoreObject = _Module$NS.CoreObject,
      assert = _Module$NS.assert,
      initialize = _Module$NS.initialize,
      partOf = _Module$NS.partOf,
      meta = _Module$NS.meta,
      property = _Module$NS.property,
      method = _Module$NS.method,
      nameBy = _Module$NS.nameBy,
      _Module$NS$Utils = _Module$NS.Utils,
      inflect = _Module$NS$Utils.inflect,
      assign = _Module$NS$Utils.assign;
  var SwaggerEndpoint = (_dec = flowRuntime_umd.annotate(flowRuntime_umd["class"]("SwaggerEndpoint", flowRuntime_umd["extends"](CoreObject), flowRuntime_umd.staticProperty("__filename", flowRuntime_umd.any()), flowRuntime_umd.staticProperty("object", flowRuntime_umd.any()), flowRuntime_umd.staticProperty("keyNames", flowRuntime_umd.object(flowRuntime_umd.indexer("key", flowRuntime_umd.string(), flowRuntime_umd.nullable(flowRuntime_umd.string())))), flowRuntime_umd.staticProperty("itemEntityNames", flowRuntime_umd.object(flowRuntime_umd.indexer("key", flowRuntime_umd.string(), flowRuntime_umd.nullable(flowRuntime_umd.string())))), flowRuntime_umd.staticProperty("listEntityNames", flowRuntime_umd.object(flowRuntime_umd.indexer("key", flowRuntime_umd.string(), flowRuntime_umd.nullable(flowRuntime_umd.string())))), flowRuntime_umd.staticProperty("itemSchemas", flowRuntime_umd.object(flowRuntime_umd.indexer("key", flowRuntime_umd.string(), flowRuntime_umd.nullable(flowRuntime_umd.ref(JoiT$3))))), flowRuntime_umd.staticProperty("listSchemas", flowRuntime_umd.object(flowRuntime_umd.indexer("key", flowRuntime_umd.string(), flowRuntime_umd.nullable(flowRuntime_umd.ref(JoiT$3))))), flowRuntime_umd.property("gateway", flowRuntime_umd.ref(SwaggerGatewayInterface$2)), flowRuntime_umd.property("tags", flowRuntime_umd.nullable(flowRuntime_umd.array(flowRuntime_umd.string()))), flowRuntime_umd.property("headers", flowRuntime_umd.nullable(flowRuntime_umd.array(flowRuntime_umd.ref("object")))), flowRuntime_umd.property("pathParams", flowRuntime_umd.nullable(flowRuntime_umd.array(flowRuntime_umd.ref("object")))), flowRuntime_umd.property("queryParams", flowRuntime_umd.nullable(flowRuntime_umd.array(flowRuntime_umd.ref("object")))), flowRuntime_umd.property("payload", flowRuntime_umd.nullable(flowRuntime_umd.ref("object"))), flowRuntime_umd.property("responses", flowRuntime_umd.nullable(flowRuntime_umd.array(flowRuntime_umd.ref("object")))), flowRuntime_umd.property("errors", flowRuntime_umd.nullable(flowRuntime_umd.array(flowRuntime_umd.ref("object")))), flowRuntime_umd.property("title", flowRuntime_umd.nullable(flowRuntime_umd.string())), flowRuntime_umd.property("synopsis", flowRuntime_umd.nullable(flowRuntime_umd.string())), flowRuntime_umd.property("isDeprecated", flowRuntime_umd["boolean"]()), flowRuntime_umd.method("tag", flowRuntime_umd.param("asName", flowRuntime_umd.string()), flowRuntime_umd["return"](flowRuntime_umd.ref(SwaggerEndpointInterface$1))), flowRuntime_umd.method("header", flowRuntime_umd.param("name", flowRuntime_umd.string()), flowRuntime_umd.param("schema", flowRuntime_umd.ref(JoiT$3)), flowRuntime_umd.param("description", flowRuntime_umd.nullable(flowRuntime_umd.string())), flowRuntime_umd["return"](flowRuntime_umd.ref(SwaggerEndpointInterface$1))), flowRuntime_umd.method("pathParam", flowRuntime_umd.param("name", flowRuntime_umd.string()), flowRuntime_umd.param("schema", flowRuntime_umd.ref(JoiT$3)), flowRuntime_umd.param("description", flowRuntime_umd.nullable(flowRuntime_umd.string())), flowRuntime_umd["return"](flowRuntime_umd.ref(SwaggerEndpointInterface$1))), flowRuntime_umd.method("queryParam", flowRuntime_umd.param("name", flowRuntime_umd.string()), flowRuntime_umd.param("schema", flowRuntime_umd.ref(JoiT$3)), flowRuntime_umd.param("description", flowRuntime_umd.nullable(flowRuntime_umd.string())), flowRuntime_umd["return"](flowRuntime_umd.ref(SwaggerEndpointInterface$1))), flowRuntime_umd.method("body", flowRuntime_umd.param("schema", flowRuntime_umd.ref(JoiT$3)), flowRuntime_umd.param("mimes", flowRuntime_umd.nullable(flowRuntime_umd.union(flowRuntime_umd.array(), flowRuntime_umd.string()))), flowRuntime_umd.param("description", flowRuntime_umd.nullable(flowRuntime_umd.string())), flowRuntime_umd["return"](flowRuntime_umd.ref(SwaggerEndpointInterface$1))), flowRuntime_umd.method("response", flowRuntime_umd.param("status", flowRuntime_umd.union(flowRuntime_umd.number(), flowRuntime_umd.string(), flowRuntime_umd.ref(JoiT$3), flowRuntime_umd["null"]())), flowRuntime_umd.param("schema", flowRuntime_umd.nullable(flowRuntime_umd.union(flowRuntime_umd.ref(JoiT$3), flowRuntime_umd.string(), flowRuntime_umd.array()))), flowRuntime_umd.param("mimes", flowRuntime_umd.nullable(flowRuntime_umd.union(flowRuntime_umd.array(), flowRuntime_umd.string()))), flowRuntime_umd.param("description", flowRuntime_umd.nullable(flowRuntime_umd.string())), flowRuntime_umd["return"](flowRuntime_umd.ref(SwaggerEndpointInterface$1))), flowRuntime_umd.method("error", flowRuntime_umd.param("status", flowRuntime_umd.union(flowRuntime_umd.string(), flowRuntime_umd.number())), flowRuntime_umd.param("description", flowRuntime_umd.nullable(flowRuntime_umd.string())), flowRuntime_umd["return"](flowRuntime_umd.ref(SwaggerEndpointInterface$1))), flowRuntime_umd.method("summary", flowRuntime_umd.param("asSummary", flowRuntime_umd.string()), flowRuntime_umd["return"](flowRuntime_umd.ref(SwaggerEndpointInterface$1))), flowRuntime_umd.method("description", flowRuntime_umd.param("asDescription", flowRuntime_umd.string()), flowRuntime_umd["return"](flowRuntime_umd.ref(SwaggerEndpointInterface$1))), flowRuntime_umd.method("deprecated", flowRuntime_umd.param("abDeprecated", flowRuntime_umd["boolean"]()), flowRuntime_umd["return"](flowRuntime_umd.ref(SwaggerEndpointInterface$1))), flowRuntime_umd.staticMethod("restoreObject"), flowRuntime_umd.staticMethod("replicateObject"), flowRuntime_umd.method("constructor", flowRuntime_umd.param("args", flowRuntime_umd.any())))), _dec2 = partOf(Module), _dec3 = flowRuntime_umd.decorate(flowRuntime_umd.object(flowRuntime_umd.indexer("key", flowRuntime_umd.string(), flowRuntime_umd.nullable(flowRuntime_umd.string())))), _dec4 = flowRuntime_umd.decorate(flowRuntime_umd.object(flowRuntime_umd.indexer("key", flowRuntime_umd.string(), flowRuntime_umd.nullable(flowRuntime_umd.string())))), _dec5 = flowRuntime_umd.decorate(flowRuntime_umd.object(flowRuntime_umd.indexer("key", flowRuntime_umd.string(), flowRuntime_umd.nullable(flowRuntime_umd.string())))), _dec6 = flowRuntime_umd.decorate(flowRuntime_umd.object(flowRuntime_umd.indexer("key", flowRuntime_umd.string(), flowRuntime_umd.nullable(flowRuntime_umd.ref(JoiT$3))))), _dec7 = flowRuntime_umd.decorate(flowRuntime_umd.object(flowRuntime_umd.indexer("key", flowRuntime_umd.string(), flowRuntime_umd.nullable(flowRuntime_umd.ref(JoiT$3))))), _dec8 = flowRuntime_umd.decorate(flowRuntime_umd.ref(SwaggerGatewayInterface$2)), _dec9 = flowRuntime_umd.decorate(flowRuntime_umd.nullable(flowRuntime_umd.array(flowRuntime_umd.string()))), _dec10 = flowRuntime_umd.decorate(flowRuntime_umd.nullable(flowRuntime_umd.array(flowRuntime_umd.ref("object")))), _dec11 = flowRuntime_umd.decorate(flowRuntime_umd.nullable(flowRuntime_umd.array(flowRuntime_umd.ref("object")))), _dec12 = flowRuntime_umd.decorate(flowRuntime_umd.nullable(flowRuntime_umd.array(flowRuntime_umd.ref("object")))), _dec13 = flowRuntime_umd.decorate(flowRuntime_umd.nullable(flowRuntime_umd.ref("object"))), _dec14 = flowRuntime_umd.decorate(flowRuntime_umd.nullable(flowRuntime_umd.array(flowRuntime_umd.ref("object")))), _dec15 = flowRuntime_umd.decorate(flowRuntime_umd.nullable(flowRuntime_umd.array(flowRuntime_umd.ref("object")))), _dec16 = flowRuntime_umd.decorate(flowRuntime_umd.nullable(flowRuntime_umd.string())), _dec17 = flowRuntime_umd.decorate(flowRuntime_umd.nullable(flowRuntime_umd.string())), _dec18 = flowRuntime_umd.decorate(flowRuntime_umd["boolean"]()), _dec(_class = initialize(_class = _dec2(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_CoreObject) {
    _inherits(SwaggerEndpoint, _CoreObject);

    var _super = _createSuper(SwaggerEndpoint);

    _createClass(SwaggerEndpoint, [{
      key: "tag",
      value: function tag(asName) {
        var _asNameType = flowRuntime_umd.string();

        var _returnType = flowRuntime_umd["return"](flowRuntime_umd.ref(SwaggerEndpointInterface$1));

        flowRuntime_umd.param("asName", _asNameType).assert(asName);

        if (this.tags == null) {
          this.tags = [];
        }

        this.tags.push(asName);
        return _returnType.assert(this);
      }
    }, {
      key: "header",
      value: function header(name, schema, description) {
        var _nameType = flowRuntime_umd.string();

        var _schemaType = flowRuntime_umd.ref(JoiT$3);

        var _descriptionType = flowRuntime_umd.nullable(flowRuntime_umd.string());

        var _returnType2 = flowRuntime_umd["return"](flowRuntime_umd.ref(SwaggerEndpointInterface$1));

        flowRuntime_umd.param("name", _nameType).assert(name);
        flowRuntime_umd.param("schema", _schemaType).assert(schema);
        flowRuntime_umd.param("description", _descriptionType).assert(description);

        if (this.headers == null) {
          this.headers = [];
        }

        this.headers.push({
          name: name,
          schema: schema,
          description: description
        });
        return _returnType2.assert(this);
      }
    }, {
      key: "pathParam",
      value: function pathParam(name, schema, description) {
        var _nameType2 = flowRuntime_umd.string();

        var _schemaType2 = flowRuntime_umd.ref(JoiT$3);

        var _descriptionType2 = flowRuntime_umd.nullable(flowRuntime_umd.string());

        var _returnType3 = flowRuntime_umd["return"](flowRuntime_umd.ref(SwaggerEndpointInterface$1));

        flowRuntime_umd.param("name", _nameType2).assert(name);
        flowRuntime_umd.param("schema", _schemaType2).assert(schema);
        flowRuntime_umd.param("description", _descriptionType2).assert(description);

        if (this.pathParams == null) {
          this.pathParams = [];
        }

        this.pathParams.push({
          name: name,
          schema: schema,
          description: description
        });
        return _returnType3.assert(this);
      }
    }, {
      key: "queryParam",
      value: function queryParam(name, schema, description) {
        var _nameType3 = flowRuntime_umd.string();

        var _schemaType3 = flowRuntime_umd.ref(JoiT$3);

        var _descriptionType3 = flowRuntime_umd.nullable(flowRuntime_umd.string());

        var _returnType4 = flowRuntime_umd["return"](flowRuntime_umd.ref(SwaggerEndpointInterface$1));

        flowRuntime_umd.param("name", _nameType3).assert(name);
        flowRuntime_umd.param("schema", _schemaType3).assert(schema);
        flowRuntime_umd.param("description", _descriptionType3).assert(description);

        if (this.queryParams == null) {
          this.queryParams = [];
        }

        this.queryParams.push({
          name: name,
          schema: schema,
          description: description
        });
        return _returnType4.assert(this);
      }
    }, {
      key: "body",
      value: function body(schema, mimes, description) {
        var _schemaType4 = flowRuntime_umd.ref(JoiT$3);

        var _mimesType = flowRuntime_umd.nullable(flowRuntime_umd.union(flowRuntime_umd.array(), flowRuntime_umd.string()));

        var _descriptionType4 = flowRuntime_umd.nullable(flowRuntime_umd.string());

        var _returnType5 = flowRuntime_umd["return"](flowRuntime_umd.ref(SwaggerEndpointInterface$1));

        flowRuntime_umd.param("schema", _schemaType4).assert(schema);
        flowRuntime_umd.param("mimes", _mimesType).assert(mimes);
        flowRuntime_umd.param("description", _descriptionType4).assert(description);
        this.payload = {
          schema: schema,
          mimes: mimes,
          description: description
        };
        return _returnType5.assert(this);
      }
    }, {
      key: "response",
      value: function response(status, schema, mimes, description) {
        var _statusType = flowRuntime_umd.union(flowRuntime_umd.number(), flowRuntime_umd.string(), flowRuntime_umd.ref(JoiT$3), flowRuntime_umd["null"]());

        var _schemaType5 = flowRuntime_umd.nullable(flowRuntime_umd.union(flowRuntime_umd.ref(JoiT$3), flowRuntime_umd.string(), flowRuntime_umd.array()));

        var _mimesType2 = flowRuntime_umd.nullable(flowRuntime_umd.union(flowRuntime_umd.array(), flowRuntime_umd.string()));

        var _descriptionType5 = flowRuntime_umd.nullable(flowRuntime_umd.string());

        var _returnType6 = flowRuntime_umd["return"](flowRuntime_umd.ref(SwaggerEndpointInterface$1));

        flowRuntime_umd.param("status", _statusType).assert(status);
        flowRuntime_umd.param("schema", _schemaType5).assert(schema);
        flowRuntime_umd.param("mimes", _mimesType2).assert(mimes);
        flowRuntime_umd.param("description", _descriptionType5).assert(description);

        if (this.responses == null) {
          this.responses = [];
        }

        this.responses.push({
          status: status,
          schema: schema,
          mimes: mimes,
          description: description
        });
        return _returnType6.assert(this);
      }
    }, {
      key: "error",
      value: function error(status, description) {
        var _statusType2 = flowRuntime_umd.union(flowRuntime_umd.string(), flowRuntime_umd.number());

        var _descriptionType6 = flowRuntime_umd.nullable(flowRuntime_umd.string());

        var _returnType7 = flowRuntime_umd["return"](flowRuntime_umd.ref(SwaggerEndpointInterface$1));

        flowRuntime_umd.param("status", _statusType2).assert(status);
        flowRuntime_umd.param("description", _descriptionType6).assert(description);

        if (this.errors == null) {
          this.errors = [];
        }

        this.errors.push({
          status: status,
          description: description
        });
        return _returnType7.assert(this);
      }
    }, {
      key: "summary",
      value: function summary(asSummary) {
        var _asSummaryType = flowRuntime_umd.string();

        var _returnType8 = flowRuntime_umd["return"](flowRuntime_umd.ref(SwaggerEndpointInterface$1));

        flowRuntime_umd.param("asSummary", _asSummaryType).assert(asSummary);
        this.title = asSummary;
        return _returnType8.assert(this);
      }
    }, {
      key: "description",
      value: function description(asDescription) {
        var _asDescriptionType = flowRuntime_umd.string();

        var _returnType9 = flowRuntime_umd["return"](flowRuntime_umd.ref(SwaggerEndpointInterface$1));

        flowRuntime_umd.param("asDescription", _asDescriptionType).assert(asDescription);
        this.synopsis = asDescription;
        return _returnType9.assert(this);
      }
    }, {
      key: "deprecated",
      value: function deprecated(abDeprecated) {
        var _abDeprecatedType = flowRuntime_umd["boolean"]();

        var _returnType10 = flowRuntime_umd["return"](flowRuntime_umd.ref(SwaggerEndpointInterface$1));

        flowRuntime_umd.param("abDeprecated", _abDeprecatedType).assert(abDeprecated);
        this.isDeprecated = abDeprecated;
        return _returnType10.assert(this);
      }
    }], [{
      key: "restoreObject",
      value: function () {
        var _restoreObject = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  return _context.abrupt("return", assert.fail("restoreObject method not supported for ".concat(this.name)));

                case 1:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function restoreObject() {
          return _restoreObject.apply(this, arguments);
        }

        return restoreObject;
      }()
    }, {
      key: "replicateObject",
      value: function () {
        var _replicateObject = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  return _context2.abrupt("return", assert.fail("replicateObject method not supported for ".concat(this.name)));

                case 1:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function replicateObject() {
          return _replicateObject.apply(this, arguments);
        }

        return replicateObject;
      }()
    }]);

    function SwaggerEndpoint() {
      var _this;

      _classCallCheck(this, SwaggerEndpoint);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _initializerDefineProperty(_this, "gateway", _descriptor, _assertThisInitialized(_this));

      _initializerDefineProperty(_this, "tags", _descriptor2, _assertThisInitialized(_this));

      _initializerDefineProperty(_this, "headers", _descriptor3, _assertThisInitialized(_this));

      _initializerDefineProperty(_this, "pathParams", _descriptor4, _assertThisInitialized(_this));

      _initializerDefineProperty(_this, "queryParams", _descriptor5, _assertThisInitialized(_this));

      _initializerDefineProperty(_this, "payload", _descriptor6, _assertThisInitialized(_this));

      _initializerDefineProperty(_this, "responses", _descriptor7, _assertThisInitialized(_this));

      _initializerDefineProperty(_this, "errors", _descriptor8, _assertThisInitialized(_this));

      _initializerDefineProperty(_this, "title", _descriptor9, _assertThisInitialized(_this));

      _initializerDefineProperty(_this, "synopsis", _descriptor10, _assertThisInitialized(_this));

      _initializerDefineProperty(_this, "isDeprecated", _descriptor11, _assertThisInitialized(_this));

      var options = args[0];
      _this.gateway = options.gateway;
      flowRuntime_umd.ref(SwaggerEndpointInterface$1).assert(_assertThisInitialized(_this));
      return _this;
    }

    return SwaggerEndpoint;
  }(CoreObject), _class3.__filename = __filename$1, _class3.object = {}, _class3.keyNames = {}, _class3.itemEntityNames = {}, _class3.listEntityNames = {}, _class3.itemSchemas = {}, _class3.listSchemas = {}, _temp), (_applyDecoratedDescriptor(_class2, "__filename", [nameBy], (_init = Object.getOwnPropertyDescriptor(_class2, "__filename"), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init;
    }
  }), _class2), _applyDecoratedDescriptor(_class2, "object", [meta], (_init2 = Object.getOwnPropertyDescriptor(_class2, "object"), _init2 = _init2 ? _init2.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init2;
    }
  }), _class2), _applyDecoratedDescriptor(_class2, "keyNames", [_dec3, property], (_init3 = Object.getOwnPropertyDescriptor(_class2, "keyNames"), _init3 = _init3 ? _init3.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init3;
    }
  }), _class2), _applyDecoratedDescriptor(_class2, "itemEntityNames", [_dec4, property], (_init4 = Object.getOwnPropertyDescriptor(_class2, "itemEntityNames"), _init4 = _init4 ? _init4.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init4;
    }
  }), _class2), _applyDecoratedDescriptor(_class2, "listEntityNames", [_dec5, property], (_init5 = Object.getOwnPropertyDescriptor(_class2, "listEntityNames"), _init5 = _init5 ? _init5.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init5;
    }
  }), _class2), _applyDecoratedDescriptor(_class2, "itemSchemas", [_dec6, property], (_init6 = Object.getOwnPropertyDescriptor(_class2, "itemSchemas"), _init6 = _init6 ? _init6.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init6;
    }
  }), _class2), _applyDecoratedDescriptor(_class2, "listSchemas", [_dec7, property], (_init7 = Object.getOwnPropertyDescriptor(_class2, "listSchemas"), _init7 = _init7 ? _init7.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init7;
    }
  }), _class2), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "gateway", [_dec8, property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tags", [_dec9, property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "headers", [_dec10, property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "pathParams", [_dec11, property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "queryParams", [_dec12, property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "payload", [_dec13, property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "responses", [_dec14, property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "errors", [_dec15, property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "title", [_dec16, property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "synopsis", [_dec17, property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "isDeprecated", [_dec18, property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return false;
    }
  }), _applyDecoratedDescriptor(_class2.prototype, "tag", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "tag"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "header", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "header"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "pathParam", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "pathParam"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "queryParam", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "queryParam"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "body", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "body"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "response", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "response"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "error", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "error"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "summary", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "summary"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "description", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "description"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "deprecated", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "deprecated"), _class2.prototype), _applyDecoratedDescriptor(_class2, "restoreObject", [method], Object.getOwnPropertyDescriptor(_class2, "restoreObject"), _class2), _applyDecoratedDescriptor(_class2, "replicateObject", [method], Object.getOwnPropertyDescriptor(_class2, "replicateObject"), _class2)), _class2)) || _class) || _class) || _class);
});

var __dirname$1 = '/resources';

var __filename$2 = '/resources/SwaggerResource.js';

// This file is part of leanes-restful-addon.
//
// leanes-restful-addon is free software: you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// leanes-restful-addon is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public License
// along with leanes-restful-addon.  If not, see <https://www.gnu.org/licenses/>.
var RouterRouteT = flowRuntime_umd.type("RouterRouteT", flowRuntime_umd.object(flowRuntime_umd.property("method", flowRuntime_umd.string()), flowRuntime_umd.property("path", flowRuntime_umd.string()), flowRuntime_umd.property("resource", flowRuntime_umd.string()), flowRuntime_umd.property("action", flowRuntime_umd.string()), flowRuntime_umd.property("tag", flowRuntime_umd.string()), flowRuntime_umd.property("template", flowRuntime_umd.string()), flowRuntime_umd.property("keyName", flowRuntime_umd.nullable(flowRuntime_umd.string())), flowRuntime_umd.property("entityName", flowRuntime_umd.string()), flowRuntime_umd.property("recordName", flowRuntime_umd.nullable(flowRuntime_umd.string()))));

// This file is part of leanes-restful-addon.
//
// leanes-restful-addon is free software: you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// leanes-restful-addon is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public License
// along with leanes-restful-addon.  If not, see <https://www.gnu.org/licenses/>.
var RouteOptionsT = flowRuntime_umd.type("RouteOptionsT", flowRuntime_umd.object(flowRuntime_umd.property("to", flowRuntime_umd.nullable(flowRuntime_umd.string())), flowRuntime_umd.property("at", flowRuntime_umd.nullable(flowRuntime_umd.union(flowRuntime_umd.string("collection"), flowRuntime_umd.string("member")))), flowRuntime_umd.property("resource", flowRuntime_umd.nullable(flowRuntime_umd.string())), flowRuntime_umd.property("action", flowRuntime_umd.nullable(flowRuntime_umd.string())), flowRuntime_umd.property("tag", flowRuntime_umd.nullable(flowRuntime_umd.string())), flowRuntime_umd.property("template", flowRuntime_umd.nullable(flowRuntime_umd.string())), flowRuntime_umd.property("keyName", flowRuntime_umd.nullable(flowRuntime_umd.string())), flowRuntime_umd.property("entityName", flowRuntime_umd.nullable(flowRuntime_umd.string())), flowRuntime_umd.property("recordName", flowRuntime_umd.nullable(flowRuntime_umd.string()))));

// This file is part of leanes-restful-addon.
var RouteOptionsT$1 = flowRuntime_umd.tdz(function () {
  return RouteOptionsT;
});
var RouterRouteT$1 = flowRuntime_umd.tdz(function () {
  return RouterRouteT;
});
var RouterInterface = flowRuntime_umd.type("RouterInterface", function (RouterInterface) {
  return flowRuntime_umd.object(flowRuntime_umd.property("map", flowRuntime_umd["function"](flowRuntime_umd["return"](flowRuntime_umd["void"]()))), flowRuntime_umd.property("externals", flowRuntime_umd["function"](flowRuntime_umd["return"](flowRuntime_umd.array(flowRuntime_umd.nullable(RouterInterface))))), flowRuntime_umd.property("root", flowRuntime_umd["function"](flowRuntime_umd.param("opts", flowRuntime_umd.object(flowRuntime_umd.property("to", flowRuntime_umd.nullable(flowRuntime_umd.string())), flowRuntime_umd.property("at", flowRuntime_umd.nullable(flowRuntime_umd.union(flowRuntime_umd.string("collection"), flowRuntime_umd.string("member")))), flowRuntime_umd.property("resource", flowRuntime_umd.nullable(flowRuntime_umd.string())), flowRuntime_umd.property("action", flowRuntime_umd.nullable(flowRuntime_umd.string())))), flowRuntime_umd["return"](flowRuntime_umd["void"]()))), flowRuntime_umd.property("defineMethod", flowRuntime_umd["function"](flowRuntime_umd.param("container", flowRuntime_umd.array(flowRuntime_umd.ref(RouterRouteT$1))), flowRuntime_umd.param("method", flowRuntime_umd.string()), flowRuntime_umd.param("path", flowRuntime_umd.string()), flowRuntime_umd.param("opts", flowRuntime_umd.nullable(flowRuntime_umd.ref(RouteOptionsT$1))), flowRuntime_umd["return"](flowRuntime_umd["void"]()))), flowRuntime_umd.property("get", flowRuntime_umd["function"](flowRuntime_umd.param("asPath", flowRuntime_umd.string()), flowRuntime_umd.param("aoOpts", flowRuntime_umd.nullable(flowRuntime_umd.ref(RouteOptionsT$1))), flowRuntime_umd["return"](flowRuntime_umd["void"]()))), flowRuntime_umd.property("post", flowRuntime_umd["function"](flowRuntime_umd.param("asPath", flowRuntime_umd.string()), flowRuntime_umd.param("aoOpts", flowRuntime_umd.nullable(flowRuntime_umd.ref(RouteOptionsT$1))), flowRuntime_umd["return"](flowRuntime_umd["void"]()))), flowRuntime_umd.property("put", flowRuntime_umd["function"](flowRuntime_umd.param("asPath", flowRuntime_umd.string()), flowRuntime_umd.param("aoOpts", flowRuntime_umd.nullable(flowRuntime_umd.ref(RouteOptionsT$1))), flowRuntime_umd["return"](flowRuntime_umd["void"]()))), flowRuntime_umd.property("delete", flowRuntime_umd["function"](flowRuntime_umd.param("asPath", flowRuntime_umd.string()), flowRuntime_umd.param("aoOpts", flowRuntime_umd.nullable(flowRuntime_umd.ref(RouteOptionsT$1))), flowRuntime_umd["return"](flowRuntime_umd["void"]()))), flowRuntime_umd.property("head", flowRuntime_umd["function"](flowRuntime_umd.param("asPath", flowRuntime_umd.string()), flowRuntime_umd.param("aoOpts", flowRuntime_umd.nullable(flowRuntime_umd.ref(RouteOptionsT$1))), flowRuntime_umd["return"](flowRuntime_umd["void"]()))), flowRuntime_umd.property("options", flowRuntime_umd["function"](flowRuntime_umd.param("asPath", flowRuntime_umd.string()), flowRuntime_umd.param("aoOpts", flowRuntime_umd.nullable(flowRuntime_umd.ref(RouteOptionsT$1))), flowRuntime_umd["return"](flowRuntime_umd["void"]()))), flowRuntime_umd.property("patch", flowRuntime_umd["function"](flowRuntime_umd.param("asPath", flowRuntime_umd.string()), flowRuntime_umd.param("aoOpts", flowRuntime_umd.nullable(flowRuntime_umd.ref(RouteOptionsT$1))), flowRuntime_umd["return"](flowRuntime_umd["void"]()))), flowRuntime_umd.property("resource", flowRuntime_umd["function"](flowRuntime_umd.param("asName", flowRuntime_umd.string()), flowRuntime_umd.param("aoOpts", flowRuntime_umd.nullable(flowRuntime_umd.union(flowRuntime_umd.object(flowRuntime_umd.property("path", flowRuntime_umd.nullable(flowRuntime_umd.string())), flowRuntime_umd.property("module", flowRuntime_umd.nullable(flowRuntime_umd.string())), flowRuntime_umd.property("only", flowRuntime_umd.nullable(flowRuntime_umd.union(flowRuntime_umd.string(), flowRuntime_umd.array(flowRuntime_umd.string())))), flowRuntime_umd.property("via", flowRuntime_umd.nullable(flowRuntime_umd.union(flowRuntime_umd.string(), flowRuntime_umd.array(flowRuntime_umd.string())))), flowRuntime_umd.property("except", flowRuntime_umd.nullable(flowRuntime_umd.union(flowRuntime_umd.string(), flowRuntime_umd.array(flowRuntime_umd.string())))), flowRuntime_umd.property("tag", flowRuntime_umd.nullable(flowRuntime_umd.string())), flowRuntime_umd.property("templates", flowRuntime_umd.nullable(flowRuntime_umd.string())), flowRuntime_umd.property("param", flowRuntime_umd.nullable(flowRuntime_umd.string())), flowRuntime_umd.property("at", flowRuntime_umd.nullable(flowRuntime_umd.union(flowRuntime_umd.string("collection"), flowRuntime_umd.string("member")))), flowRuntime_umd.property("resource", flowRuntime_umd.nullable(flowRuntime_umd.string())), flowRuntime_umd.property("above", flowRuntime_umd.nullable(flowRuntime_umd.ref("object")))), flowRuntime_umd["function"]()))), flowRuntime_umd.param("lambda", flowRuntime_umd.nullable(flowRuntime_umd["function"]())), flowRuntime_umd["return"](flowRuntime_umd["void"]()))), flowRuntime_umd.property("namespace", flowRuntime_umd["function"](flowRuntime_umd.param("asName", flowRuntime_umd.nullable(flowRuntime_umd.string())), flowRuntime_umd.param("aoOpts", flowRuntime_umd.union(flowRuntime_umd.object(flowRuntime_umd.property("module", flowRuntime_umd.nullable(flowRuntime_umd.string())), flowRuntime_umd.property("prefix", flowRuntime_umd.nullable(flowRuntime_umd.string())), flowRuntime_umd.property("tag", flowRuntime_umd.nullable(flowRuntime_umd.string())), flowRuntime_umd.property("templates", flowRuntime_umd.nullable(flowRuntime_umd.string())), flowRuntime_umd.property("at", flowRuntime_umd.nullable(flowRuntime_umd.union(flowRuntime_umd.string("collection"), flowRuntime_umd.string("member")))), flowRuntime_umd.property("above", flowRuntime_umd.nullable(flowRuntime_umd.ref("object")))), flowRuntime_umd["function"]())), flowRuntime_umd.param("lambda", flowRuntime_umd.nullable(flowRuntime_umd["function"]())), flowRuntime_umd["return"](flowRuntime_umd["void"]()))), flowRuntime_umd.property("member", flowRuntime_umd["function"](flowRuntime_umd.param("lambda", flowRuntime_umd["function"]()), flowRuntime_umd["return"](flowRuntime_umd["void"]()))), flowRuntime_umd.property("collection", flowRuntime_umd["function"](flowRuntime_umd.param("lambda", flowRuntime_umd["function"]()), flowRuntime_umd["return"](flowRuntime_umd["void"]()))), flowRuntime_umd.property("resources", flowRuntime_umd.array(RouterInterface)), flowRuntime_umd.property("routes", flowRuntime_umd.array(flowRuntime_umd.object(flowRuntime_umd.property("method", flowRuntime_umd.string()), flowRuntime_umd.property("path", flowRuntime_umd.string()), flowRuntime_umd.property("resource", flowRuntime_umd.string()), flowRuntime_umd.property("action", flowRuntime_umd.string()), flowRuntime_umd.property("tag", flowRuntime_umd.string()), flowRuntime_umd.property("template", flowRuntime_umd.string()), flowRuntime_umd.property("keyName", flowRuntime_umd.nullable(flowRuntime_umd.string())), flowRuntime_umd.property("entityName", flowRuntime_umd.string()), flowRuntime_umd.property("recordName", flowRuntime_umd.nullable(flowRuntime_umd.string()))))));
});

var SwaggerGatewayInterface$3 = flowRuntime_umd.tdz(function () {
  return SwaggerGatewayInterface;
});
var RouterInterface$1 = flowRuntime_umd.tdz(function () {
  return RouterInterface;
});
var SwaggerResource = (function (Module) {
  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _init, _init2, _init3, _init4, _descriptor, _descriptor2, _class3, _temp;

  var _Module$NS = Module.NS,
      APPLICATION_ROUTER = _Module$NS.APPLICATION_ROUTER,
      SWAGGER_GATEWAY = _Module$NS.SWAGGER_GATEWAY,
      Resource = _Module$NS.Resource,
      ConfigurableMixin = _Module$NS.ConfigurableMixin,
      initialize = _Module$NS.initialize,
      partOf = _Module$NS.partOf,
      nameBy = _Module$NS.nameBy,
      meta = _Module$NS.meta,
      property = _Module$NS.property,
      method = _Module$NS.method,
      action = _Module$NS.action,
      chains = _Module$NS.chains,
      inject = _Module$NS.inject,
      mixin = _Module$NS.mixin,
      _Module$NS$Utils = _Module$NS.Utils,
      _ = _Module$NS$Utils._,
      joi = _Module$NS$Utils.joi,
      statuses = _Module$NS$Utils.statuses;
  var MOVED = statuses('Moved Permanently');
  var DEFAULT_ERROR_SCHEMA = joi.object().keys({
    error: joi.allow(true).required(),
    errorNum: joi.number().integer().optional(),
    errorMessage: joi.string().optional(),
    code: joi.number().integer().optional()
  });
  var MIME_JSON = 'application/json';
  var SwaggerResource = (_dec = flowRuntime_umd.annotate(flowRuntime_umd["class"]("SwaggerResource", flowRuntime_umd["extends"](Resource), flowRuntime_umd.staticProperty("__filename", flowRuntime_umd.any()), flowRuntime_umd.staticProperty("object", flowRuntime_umd.any()), flowRuntime_umd.staticProperty("specification", flowRuntime_umd.nullable(flowRuntime_umd.ref("object"))), flowRuntime_umd.staticProperty("specEtag", flowRuntime_umd.string()), flowRuntime_umd.property("_appRouterFactory", flowRuntime_umd["function"](flowRuntime_umd["return"](flowRuntime_umd.ref(RouterInterface$1)))), flowRuntime_umd.method("_appRouter", flowRuntime_umd["return"](flowRuntime_umd.ref(RouterInterface$1))), flowRuntime_umd.property("_swaggerGatewayFactory", flowRuntime_umd["function"](flowRuntime_umd["return"](flowRuntime_umd.ref(SwaggerGatewayInterface$3)))), flowRuntime_umd.method("_swaggerGateway", flowRuntime_umd["return"](flowRuntime_umd.ref(SwaggerGatewayInterface$3))), flowRuntime_umd.method("index"), flowRuntime_umd.method("static"), flowRuntime_umd.method("spec"), flowRuntime_umd.method("swaggerifyPath", flowRuntime_umd.param("path", flowRuntime_umd.any())), flowRuntime_umd.method("buildSwaggerPaths"), flowRuntime_umd.method("buildOperation", flowRuntime_umd.param("endpoint", flowRuntime_umd.any())), flowRuntime_umd.method("swaggerifyType", flowRuntime_umd.param("schema", flowRuntime_umd.any())), flowRuntime_umd.method("swaggerifyParam", flowRuntime_umd.param("schema", flowRuntime_umd.any())), flowRuntime_umd.method("swaggerifyBody", flowRuntime_umd.param("schema", flowRuntime_umd.any()), flowRuntime_umd.param("multiple", flowRuntime_umd.any())), flowRuntime_umd.method("joi2schema", flowRuntime_umd.param("schema", flowRuntime_umd.any()), flowRuntime_umd.param("multiple", flowRuntime_umd.any())))), _dec2 = chains(['index', 'spec', 'static'], function () {
    return;
  }), _dec3 = partOf(Module), _dec4 = mixin(ConfigurableMixin), _dec5 = flowRuntime_umd.decorate(flowRuntime_umd.nullable(flowRuntime_umd.ref("object"))), _dec6 = flowRuntime_umd.decorate(flowRuntime_umd.string()), _dec7 = flowRuntime_umd.decorate(flowRuntime_umd["function"](flowRuntime_umd["return"](flowRuntime_umd.ref(RouterInterface$1)))), _dec8 = inject("Factory<".concat(APPLICATION_ROUTER, ">")), _dec9 = flowRuntime_umd.decorate(flowRuntime_umd["function"](flowRuntime_umd["return"](flowRuntime_umd.ref(SwaggerGatewayInterface$3)))), _dec10 = inject("Factory<".concat(SWAGGER_GATEWAY, ">")), _dec(_class = initialize(_class = _dec2(_class = _dec3(_class = _dec4(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_Resource) {
    _inherits(SwaggerResource, _Resource);

    var _super = _createSuper(SwaggerResource);

    function SwaggerResource() {
      var _this;

      _classCallCheck(this, SwaggerResource);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _initializerDefineProperty(_this, "_appRouterFactory", _descriptor, _assertThisInitialized(_this));

      _initializerDefineProperty(_this, "_swaggerGatewayFactory", _descriptor2, _assertThisInitialized(_this));

      return _this;
    }

    _createClass(SwaggerResource, [{
      key: "index",
      value: function () {
        var _index = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  this.context.status = MOVED;
                  this.context.redirect('/swagger/index.html');

                case 2:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function index() {
          return _index.apply(this, arguments);
        }

        return index;
      }()
    }, {
      key: 'static',
      value: function () {
        var _static2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          var urlPart, _urlPart$slice, _urlPart$slice2, filename, filePath, file;

          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  urlPart = this.context.url.split('swagger/');
                  _urlPart$slice = urlPart.slice(-1), _urlPart$slice2 = _slicedToArray(_urlPart$slice, 1), filename = _urlPart$slice2[0];
                  filePath = path.join(__dirname$1, '..', '..', 'swagger', filename);
                  this.context.status = 200;
                  this.context.respond = false;
                  this.context.type = mimeTypes.lookup(filename);
                  file = fs.createReadStream(filePath);
                  file.pipe(this.context.res);

                case 8:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function _static() {
          return _static2.apply(this, arguments);
        }

        return _static;
      }()
    }, {
      key: "spec",
      value: function () {
        var _spec = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          var _this$configs, name, description, license, version;

          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  console.log('JJJ8');
                  _this$configs = this.configs, name = _this$configs.name, description = _this$configs.description, license = _this$configs.license, version = _this$configs.version;

                  if (this.constructor.specification == null) {
                    this.constructor.specification = {
                      swagger: '2.0',
                      basePath: '',
                      // schemes: ['http', 'https']
                      info: {
                        title: name,
                        description: description,
                        version: version,
                        license: {
                          name: license
                        }
                      },
                      // definitions: swagger.definitions
                      paths: this.buildSwaggerPaths()
                    };
                    console.log('sdfsdf', this.constructor.specification);
                    this.constructor.specEtag = crypto.createHash('sha1').update(JSON.stringify(this.constructor.specification)).digest('hex');
                  }

                  this.context.etag = this.constructor.specEtag;
                  this.context.status = 200;

                  if (!this.context.fresh) {
                    _context3.next = 8;
                    break;
                  }

                  this.context.status = 304;
                  return _context3.abrupt("return");

                case 8:
                  return _context3.abrupt("return", this.constructor.specification);

                case 9:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        function spec() {
          return _spec.apply(this, arguments);
        }

        return spec;
      }()
    }, {
      key: "swaggerifyPath",
      value: function swaggerifyPath(path) {
        return path.replace(/(?::)([^\/]*)/g, '{$1}').replace(/([*])/g, '{$1}').replace(/[\+]/g, '');
      }
    }, {
      key: "buildSwaggerPaths",
      value: function buildSwaggerPaths() {
        var _this2 = this;

        var paths = {};

        this._appRouter.routes.forEach(function (_ref) {
          var method = _ref.method,
              path = _ref.path,
              resource = _ref.resource,
              action = _ref.action,
              resourceTag = _ref.tag,
              options = _ref.options,
              keyName = _ref.keyName,
              entityName = _ref.entityName,
              recordName = _ref.recordName;

          if (_this2._swaggerGateway == null) {
            throw new Error("".concat(SWAGGER_GATEWAY, " is absent in code"));
          }

          var endpoint = _this2._swaggerGateway.swaggerDefinitionFor(resource, action, {
            keyName: keyName,
            entityName: entityName,
            recordName: recordName
          });

          if (endpoint == null) {
            throw new Error("Endpoint for ".concat(resource, "#").concat(action, " is absent in code"));
          }

          var keys = [];
          var re = pathToRegexp(path, keys);

          for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
            var key = _keys[_i];
            endpoint.pathParam(key.name === 0 ? '*' : key.name, joi.string());
          }

          if (resourceTag != null) {
            endpoint.tag(resourceTag);
          }

          path = _this2.swaggerifyPath(path);

          if (!paths[path]) {
            paths[path] = {};
          }

          var pathItem = paths[path];

          var operation = _this2.buildOperation(endpoint);

          method = method.toLowerCase();

          if (!pathItem[method]) {
            pathItem[method] = operation;
          }
        });

        return paths;
      }
    }, {
      key: "buildOperation",
      value: function buildOperation(endpoint) {
        var operation = {
          produces: [],
          parameters: []
        };

        if (endpoint.isDeprecated != null) {
          operation.deprecated = endpoint.isDeprecated;
        }

        if (endpoint.synopsis != null) {
          operation.description = endpoint.synopsis;
        }

        if (endpoint.title != null) {
          operation.summary = endpoint.title;
        }

        if (endpoint.tags != null) {
          operation.tags = Array.from(endpoint.tags != null ? endpoint.tags : []);
        }

        if (endpoint.payload != null) {
          var _endpoint$payload = endpoint.payload,
              schema = _endpoint$payload.schema,
              mimes = _endpoint$payload.mimes,
              description = _endpoint$payload.description;

          if (!_.isArray(schema) && _.isObject(schema) && _.isArray(mimes) && _.isString(description)) ; else if (!_.isArray(schema) && _.isObject(schema) && _.isString(mimes)) {
            description = mimes;
            mimes = [MIME_JSON];
          } else if (_.isArray(schema) && _.isString(mimes)) {
            description = mimes;
            mimes = schema;
            schema = null;
          } else if (!_.isArray(schema) && _.isObject(schema) && _.isArray(mimes)) {
            description = null;
          } else if (!_.isArray(schema) && _.isObject(schema)) {
            description = null;
            mimes = [MIME_JSON];
          } else if (_.isArray(schema)) {
            mimes = schema;
            schema = null;
            description = null;
          } else if (_.isString(schema)) {
            description = schema;
            schema = null;
            mimes = [];
          }

          operation.consumes = mimes.slice();
          schema = schema != null ? joi.isSchema(schema) ? schema : schema.schema : null;
          var parameter = schema != null ? this.swaggerifyBody(schema, false) : {
            schema: {
              type: 'string'
            }
          };
          parameter.name = 'body';
          parameter["in"] = 'body';

          if (description != null) {
            parameter.description = description;
          }

          operation.parameters.push(parameter);
        }

        operation.responses = {
          500: {
            description: 'Default error response.',
            schema: this.joi2schema(DEFAULT_ERROR_SCHEMA)
          }
        };
        var endpointResponses = endpoint.responses != null ? endpoint.responses : [];

        var _iterator = _createForOfIteratorHelper(endpointResponses),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _step$value = _step.value,
                status = _step$value.status,
                _schema = _step$value.schema,
                _mimes = _step$value.mimes,
                _description = _step$value.description;

            if ((_.isNumber(status) || _.isString(status)) && !_.isArray(_schema) && _.isObject(_schema) && _.isArray(_mimes) && _.isString(_description)) {} else if ((_.isNumber(status) || _.isString(status)) && !_.isArray(_schema) && _.isObject(_schema) && _.isString(_mimes) && _.isNil(_description)) {
              _description = _mimes;
              _mimes = [MIME_JSON];
            } else if ((_.isNumber(status) || _.isString(status)) && _.isArray(_schema) && _.isString(_mimes) && _.isNil(_description)) {
              _description = _mimes;
              _mimes = _schema;
              _schema = null;
            } else if ((_.isNumber(status) || _.isString(status)) && !_.isArray(_schema) && _.isObject(_schema) && _.isArray(_mimes) && _.isNil(_description)) {
              _description = null;
            } else if (!_.isArray(status) && _.isObject(status) && _.isArray(_schema) && _.isString(_mimes) && _.isNil(_description)) {
              _description = _mimes;
              _mimes = _schema;
              _schema = status;
              status = 200;
            } else if ((_.isNumber(status) || _.isString(status)) && !_.isArray(_schema) && _.isObject(_schema) && _.isNil(_mimes) && _.isNil(_description)) {
              _description = null;
              _mimes = [MIME_JSON];
            } else if ((_.isNumber(status) || _.isString(status)) && _.isArray(_schema) && _.isNil(_mimes) && _.isNil(_description)) {
              _description = null;
              _mimes = _schema;
              _schema = null;
            } else if ((_.isNumber(status) || _.isString(status)) && _.isString(_schema) && _.isNil(_mimes) && _.isNil(_description)) {
              _description = _schema;
              _mimes = [];
              _schema = null;
            } else if (!_.isArray(status) && _.isObject(status) && _.isArray(_schema) && _.isNil(_mimes) && _.isNil(_description)) {
              _description = null;
              _mimes = _schema;
              _schema = status;
              status = 200;
            } else if (!_.isArray(status) && _.isObject(status) && _.isString(_schema) && _.isNil(_mimes) && _.isNil(_description)) {
              _description = _schema;
              _schema = status;
              status = 200;
              _mimes = [MIME_JSON];
            } else if (_.isArray(status) && _.isString(_schema) && _.isNil(_mimes) && _.isNil(_description)) {
              _description = _schema;
              _mimes = status;
              _schema = null;
              status = 200;
            } else if (!_.isArray(status) && _.isObject(status) && _.isNil(_schema) && _.isNil(_mimes) && _.isNil(_description)) {
              _schema = status;
              status = 200;
              _description = null;
              _mimes = [MIME_JSON];
            } else if (_.isArray(status) && _.isNil(_schema) && _.isNil(_mimes) && _.isNil(_description)) {
              _description = null;
              _mimes = status;
              status = 200;
              _schema = null;
            } else if (_.isString(status) && _.isNil(_schema) && _.isNil(_mimes) && _.isNil(_description)) {
              _description = status;
              status = 200;
              _mimes = [];
              _schema = null;
            }

            if (status === null && _schema == null) {
              status = 204;

              if (!_.isArray(_mimes)) {
                _description = _mimes;
                _mimes = [];
              }
            } else if (status === null && _schema != null) {
              status = 200;

              if (!_.isArray(_mimes)) {
                _description = _mimes;
                _mimes = [MIME_JSON];
              }
            } else if (status != null && _schema == null) {
              if (!_.isArray(_mimes)) {
                _description = _mimes;
                _mimes = [];
              }
            } else if (status != null && _schema != null) {
              if (!_.isArray(_mimes)) {
                _description = _mimes;
                _mimes = [MIME_JSON];
              }
            }

            var _iterator6 = _createForOfIteratorHelper(_mimes),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var contentType = _step6.value;

                if (!operation.produces.includes(contentType)) {
                  operation.produces.push(contentType);
                }
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }

            _schema = _schema != null ? joi.isSchema(_schema) ? _schema : _schema.schema : null;
            var response = {};

            if (_mimes.length != null) {
              response.schema = _schema != null ? this.joi2schema(_schema, false) : {
                type: 'string'
              };
            }

            if ((_schema != null ? _schema._description : void 0) != null) {
              response.description = _schema._description;
              delete response.schema.description;
            }

            if (_description != null) {
              response.description = _description;
            }

            if (response.description == null) {
              var message = statuses[status];
              response.description = message != null ? "HTTP ".concat(status, " ").concat(message, ".") : response.schema != null ? "Nondescript ".concat(status, " response.") : "Nondescript ".concat(status, " response without body.");
            }

            operation.responses[status] = response;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        var endpointErrors = endpoint.errors != null ? endpoint.errors : [];

        var _iterator2 = _createForOfIteratorHelper(endpointErrors),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _step2$value = _step2.value,
                _status = _step2$value.status,
                _description2 = _step2$value.description;
            var _response = {
              schema: this.joi2schema(DEFAULT_ERROR_SCHEMA, false)
            };

            if (_description2 != null) {
              _response.description = _description2;
            }

            if (_response.description == null) {
              var _message = statuses[_status];
              _response.description = _message != null ? "HTTP ".concat(_status, " ").concat(_message, ".") : _response.schema != null ? "Nondescript ".concat(_status, " response.") : "Nondescript ".concat(_status, " response without body.");
            }

            operation.responses[_status] = _response;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        if (endpointErrors > 0) {
          if (!operation.produces.includes(MIME_JSON)) {
            operation.produces.push(MIME_JSON);
          }
        }

        if (!operation.produces.includes(MIME_JSON)) {
          operation.produces.push(MIME_JSON);
        }

        var endpointPathParams = endpoint.pathParams != null ? endpoint.pathParams : [];

        var _iterator3 = _createForOfIteratorHelper(endpointPathParams),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _step3$value = _step3.value,
                name = _step3$value.name,
                _schema2 = _step3$value.schema,
                _description3 = _step3$value.description;

            if (_.isString(_schema2)) {
              _description3 = _schema2;
              _schema2 = null;
            }

            if (_.some(operation.parameters, {
              name: name
            })) {
              continue;
            }

            var _parameter = _schema2 != null ? this.swaggerifyParam(joi.isSchema(_schema2) ? _schema2 : joi.object(_schema2)) : {
              type: 'string'
            };

            _parameter.name = name;
            _parameter["in"] = 'path';
            _parameter.required = true;

            if (_description3 != null) {
              _parameter.description = _description3;
            }

            operation.parameters.push(_parameter);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        var endpointQueryParams = endpoint.queryParams != null ? endpoint.queryParams : [];

        var _iterator4 = _createForOfIteratorHelper(endpointQueryParams),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _step4$value = _step4.value,
                _name = _step4$value.name,
                _schema3 = _step4$value.schema,
                _description4 = _step4$value.description;

            if (_.isString(_schema3)) {
              _description4 = _schema3;
              _schema3 = null;
            }

            if (_.some(operation.parameters, {
              name: _name
            })) {
              continue;
            }

            var _parameter2 = _schema3 != null ? this.swaggerifyParam(joi.isSchema(_schema3) ? _schema3 : joi.object(_schema3)) : {
              type: 'string'
            };

            _parameter2.name = _name;
            _parameter2["in"] = 'query';

            if (_description4 != null) {
              _parameter2.description = _description4;
            }

            operation.parameters.push(_parameter2);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }

        var endpointHeaders = endpoint.headers != null ? endpoint.headers : [];

        var _iterator5 = _createForOfIteratorHelper(endpointHeaders),
            _step5;

        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var _step5$value = _step5.value,
                _name2 = _step5$value.name,
                _schema4 = _step5$value.schema,
                _description5 = _step5$value.description;

            if (_.isString(_schema4)) {
              _description5 = _schema4;
              _schema4 = null;
            }

            if (_.some(operation.parameters, {
              name: _name2
            })) {
              continue;
            }

            var _parameter3 = _schema4 != null ? this.swaggerifyParam(joi.isSchema(_schema4) ? _schema4 : joi.object(_schema4)) : {
              type: 'string'
            };

            _parameter3.name = _name2;
            _parameter3["in"] = 'header';

            if (_description5 != null) {
              _parameter3.description = _description5;
            }

            operation.parameters.push(_parameter3);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }

        return operation;
      }
    }, {
      key: "swaggerifyType",
      value: function swaggerifyType(schema) {
        switch (schema._type) {
          case 'binary':
            return ['string', 'binary'];

          case 'boolean':
            return ['boolean'];

          case 'date':
            return ['string', 'date-time'];

          case 'func':
            return ['string'];

          case 'number':
            if (schema._tests.some(function (test) {
              return test.name === 'integer';
            })) {
              return ['integer'];
            } else {
              return ['number'];
            }

          case 'array':
            return ['array'];

          case 'object':
            return ['object'];

          case 'string':
            // if (schema._meta.some(function(meta) {
            //   return meta.secret;
            // })) {
            //   return ['string', 'password'];
            // } else {
            return ['string']; // }

          default:
            return ['string'];
        }
      }
    }, {
      key: "swaggerifyParam",
      value: function swaggerifyParam(schema) {
        var description = schema._description;
        var param = {
          required: schema._presence === 'required',
          description: description != null ? description : void 0
        };
        var item = param; // if (schema._meta.some(function(meta) {
        //   return meta.allowMultiple;
        // })) {
        //   param.type = 'array';
        //   param.collectionFormat = 'multi';
        //   param.items = {};
        //   item = param.items;
        // }

        var type = this.swaggerifyType(schema);
        item.type = type[0];

        if (type.length > 1) {
          item.format = type[1];
        }

        if (schema._valids && schema._valids._set && schema._valids._set.length) {
          item["enum"] = schema._valids._set;
        }

        if ('default' in schema._flags) {
          item["default"] = schema._flags["default"];
        }

        return param;
      }
    }, {
      key: "swaggerifyBody",
      value: function swaggerifyBody(schema, multiple) {
        var description = schema._description;
        return {
          required: schema._presence === 'required',
          description: description != null ? description : void 0,
          schema: this.joi2schema(schema, multiple)
        };
      }
    }, {
      key: "joi2schema",
      value: function joi2schema(schema, multiple) {
        if (multiple) {
          return jsonJoiConverter.toJson(joi.array().items(schema));
        } else {
          return jsonJoiConverter.toJson(schema);
        }
      }
    }, {
      key: "_appRouter",
      get: function get() {
        var _returnType = flowRuntime_umd["return"](flowRuntime_umd.ref(RouterInterface$1));

        return _returnType.assert(this._appRouterFactory());
      }
    }, {
      key: "_swaggerGateway",
      get: function get() {
        var _returnType2 = flowRuntime_umd["return"](flowRuntime_umd.ref(SwaggerGatewayInterface$3));

        return _returnType2.assert(this._swaggerGatewayFactory());
      }
    }]);

    return SwaggerResource;
  }(Resource), _class3.__filename = __filename$2, _class3.object = {}, _class3.specification = null, _class3.specEtag = null, _temp), (_applyDecoratedDescriptor(_class2, "__filename", [nameBy], (_init = Object.getOwnPropertyDescriptor(_class2, "__filename"), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init;
    }
  }), _class2), _applyDecoratedDescriptor(_class2, "object", [meta], (_init2 = Object.getOwnPropertyDescriptor(_class2, "object"), _init2 = _init2 ? _init2.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init2;
    }
  }), _class2), _applyDecoratedDescriptor(_class2, "specification", [_dec5, property], (_init3 = Object.getOwnPropertyDescriptor(_class2, "specification"), _init3 = _init3 ? _init3.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init3;
    }
  }), _class2), _applyDecoratedDescriptor(_class2, "specEtag", [_dec6, property], (_init4 = Object.getOwnPropertyDescriptor(_class2, "specEtag"), _init4 = _init4 ? _init4.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init4;
    }
  }), _class2), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_appRouterFactory", [_dec7, _dec8, property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class2.prototype, "_appRouter", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "_appRouter"), _class2.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_swaggerGatewayFactory", [_dec9, _dec10, property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class2.prototype, "_swaggerGateway", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "_swaggerGateway"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "index", [action], Object.getOwnPropertyDescriptor(_class2.prototype, "index"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'static', [action], Object.getOwnPropertyDescriptor(_class2.prototype, 'static'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "spec", [action], Object.getOwnPropertyDescriptor(_class2.prototype, "spec"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "swaggerifyPath", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "swaggerifyPath"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "buildSwaggerPaths", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "buildSwaggerPaths"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "buildOperation", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "buildOperation"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "swaggerifyType", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "swaggerifyType"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "swaggerifyParam", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "swaggerifyParam"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "swaggerifyBody", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "swaggerifyBody"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "joi2schema", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "joi2schema"), _class2.prototype)), _class2)) || _class) || _class) || _class) || _class) || _class);
});

var __filename$3 = '/proxies/SwaggerGateway.js';

var SwaggerEndpointInterface$2 = flowRuntime_umd.tdz(function () {
  return SwaggerEndpointInterface;
});
var SwaggerGatewayInterface$4 = flowRuntime_umd.tdz(function () {
  return SwaggerGatewayInterface;
});
var JoiT$4 = flowRuntime_umd.tdz(function () {
  return JoiT;
});
var SwaggerGateway = (function (Module) {
  var _dec, _dec2, _dec3, _class, _class2, _init, _init2, _descriptor, _class3, _temp;

  var _Module$NS = Module.NS,
      Proxy = _Module$NS.Proxy,
      initialize = _Module$NS.initialize,
      partOf = _Module$NS.partOf,
      meta = _Module$NS.meta,
      property = _Module$NS.property,
      method = _Module$NS.method,
      nameBy = _Module$NS.nameBy,
      _Module$NS$Utils = _Module$NS.Utils,
      inflect = _Module$NS$Utils.inflect,
      assign = _Module$NS$Utils.assign;
  var SwaggerGateway = (_dec = flowRuntime_umd.annotate(flowRuntime_umd["class"]("SwaggerGateway", flowRuntime_umd["extends"](Proxy), flowRuntime_umd.staticProperty("__filename", flowRuntime_umd.any()), flowRuntime_umd.staticProperty("object", flowRuntime_umd.any()), flowRuntime_umd.property("_schemas", flowRuntime_umd.object(flowRuntime_umd.indexer("key", flowRuntime_umd.string(), flowRuntime_umd.nullable(flowRuntime_umd.ref(JoiT$4))))), flowRuntime_umd.method("constructor", flowRuntime_umd.param("args", flowRuntime_umd.any())), flowRuntime_umd.method("_endpointsPath", flowRuntime_umd["return"](flowRuntime_umd.string())), flowRuntime_umd.method("getEndpointByName", flowRuntime_umd.param("asName", flowRuntime_umd.string()), flowRuntime_umd["return"](flowRuntime_umd.nullable(flowRuntime_umd.Class(flowRuntime_umd.existential())))), flowRuntime_umd.method("getEndpointName", flowRuntime_umd.param("asResourse", flowRuntime_umd.string()), flowRuntime_umd.param("asAction", flowRuntime_umd.string()), flowRuntime_umd["return"](flowRuntime_umd.string())), flowRuntime_umd.method("getStandardActionEndpoint", flowRuntime_umd.param("asResourse", flowRuntime_umd.string()), flowRuntime_umd.param("asAction", flowRuntime_umd.string()), flowRuntime_umd["return"](flowRuntime_umd.Class(flowRuntime_umd.existential()))), flowRuntime_umd.method("getEndpoint", flowRuntime_umd.param("asResourse", flowRuntime_umd.string()), flowRuntime_umd.param("asAction", flowRuntime_umd.string()), flowRuntime_umd["return"](flowRuntime_umd.Class(flowRuntime_umd.existential()))), flowRuntime_umd.method("swaggerDefinitionFor", flowRuntime_umd.param("asResourse", flowRuntime_umd.string()), flowRuntime_umd.param("asAction", flowRuntime_umd.string()), flowRuntime_umd.param("opts", flowRuntime_umd.nullable(flowRuntime_umd.ref("object"))), flowRuntime_umd["return"](flowRuntime_umd.ref(SwaggerEndpointInterface$2))), flowRuntime_umd.method("getSchema", flowRuntime_umd.param("asRecordName", flowRuntime_umd.string()), flowRuntime_umd["return"](flowRuntime_umd.ref(JoiT$4))))), _dec2 = partOf(Module), _dec3 = flowRuntime_umd.decorate(flowRuntime_umd.object(flowRuntime_umd.indexer("key", flowRuntime_umd.string(), flowRuntime_umd.nullable(flowRuntime_umd.ref(JoiT$4))))), _dec(_class = initialize(_class = _dec2(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_Proxy) {
    _inherits(SwaggerGateway, _Proxy);

    var _super = _createSuper(SwaggerGateway);

    function SwaggerGateway() {
      var _this;

      _classCallCheck(this, SwaggerGateway);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _initializerDefineProperty(_this, "_schemas", _descriptor, _assertThisInitialized(_this));

      flowRuntime_umd.ref(SwaggerGatewayInterface$4).assert(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(SwaggerGateway, [{
      key: "getEndpointByName",
      value: function getEndpointByName(asName) {
        var _asNameType = flowRuntime_umd.string();

        var _returnType2 = flowRuntime_umd["return"](flowRuntime_umd.nullable(flowRuntime_umd.Class(flowRuntime_umd.existential())));

        flowRuntime_umd.param("asName", _asNameType).assert(asName);

        try {
          return _returnType2.assert(this.ApplicationModule.NS[asName]);
        } catch (e) {}
      }
    }, {
      key: "getEndpointName",
      value: function getEndpointName(asResourse, asAction) {
        var _asResourseType = flowRuntime_umd.string();

        var _asActionType = flowRuntime_umd.string();

        var _returnType3 = flowRuntime_umd["return"](flowRuntime_umd.string());

        flowRuntime_umd.param("asResourse", _asResourseType).assert(asResourse);
        flowRuntime_umd.param("asAction", _asActionType).assert(asAction);
        var vsPath = "".concat(asResourse, "_").concat(asAction, "_endpoint").replace(/\//g, '_').replace(/\_+/g, '_');
        return _returnType3.assert(inflect.camelize(vsPath));
      }
    }, {
      key: "getStandardActionEndpoint",
      value: function getStandardActionEndpoint(asResourse, asAction) {
        var _asResourseType2 = flowRuntime_umd.string();

        var _asActionType2 = flowRuntime_umd.string();

        var _returnType4 = flowRuntime_umd["return"](flowRuntime_umd.Class(flowRuntime_umd.existential()));

        flowRuntime_umd.param("asResourse", _asResourseType2).assert(asResourse);
        flowRuntime_umd.param("asAction", _asActionType2).assert(asAction);
        var vsEndpointName = "".concat(inflect.camelize(asAction), "Endpoint");
        return _returnType4.assert(this.getEndpointByName(vsEndpointName) || this.ApplicationModule.NS.SwaggerEndpoint);
      }
    }, {
      key: "getEndpoint",
      value: function getEndpoint(asResourse, asAction) {
        var _asResourseType3 = flowRuntime_umd.string();

        var _asActionType3 = flowRuntime_umd.string();

        var _returnType5 = flowRuntime_umd["return"](flowRuntime_umd.Class(flowRuntime_umd.existential()));

        flowRuntime_umd.param("asResourse", _asResourseType3).assert(asResourse);
        flowRuntime_umd.param("asAction", _asActionType3).assert(asAction);
        var vsEndpointName = this.getEndpointName(asResourse, asAction);
        return _returnType5.assert(this.getEndpointByName(vsEndpointName) || this.getStandardActionEndpoint(asResourse, asAction));
      }
    }, {
      key: "swaggerDefinitionFor",
      value: function swaggerDefinitionFor(asResourse, asAction, opts) {
        var _asResourseType4 = flowRuntime_umd.string();

        var _asActionType4 = flowRuntime_umd.string();

        var _optsType = flowRuntime_umd.nullable(flowRuntime_umd.ref("object"));

        var _returnType6 = flowRuntime_umd["return"](flowRuntime_umd.ref(SwaggerEndpointInterface$2));

        flowRuntime_umd.param("asResourse", _asResourseType4).assert(asResourse);
        flowRuntime_umd.param("asAction", _asActionType4).assert(asAction);
        flowRuntime_umd.param("opts", _optsType).assert(opts);
        var vcEndpoint = this.getEndpoint(asResourse, asAction);
        var options = assign({}, opts, {
          gateway: this
        });
        return _returnType6.assert(vcEndpoint["new"](options));
      }
    }, {
      key: "getSchema",
      value: function getSchema(asRecordName) {
        var _asRecordNameType = flowRuntime_umd.string();

        var _returnType7 = flowRuntime_umd["return"](flowRuntime_umd.ref(JoiT$4));

        flowRuntime_umd.param("asRecordName", _asRecordNameType).assert(asRecordName);

        if (this._schemas[asRecordName] == null) {
          this._schemas[asRecordName] = this.ApplicationModule.NS[asRecordName].schema;
        }

        return _returnType7.assert(this._schemas[asRecordName]);
      }
    }, {
      key: "_endpointsPath",
      get: function get() {
        var _returnType = flowRuntime_umd["return"](flowRuntime_umd.string());

        return _returnType.assert("".concat(this.ApplicationModule.NS.ROOT, "/endpoints"));
      }
    }]);

    return SwaggerGateway;
  }(Proxy), _class3.__filename = __filename$3, _class3.object = {}, _temp), (_applyDecoratedDescriptor(_class2, "__filename", [nameBy], (_init = Object.getOwnPropertyDescriptor(_class2, "__filename"), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init;
    }
  }), _class2), _applyDecoratedDescriptor(_class2, "object", [meta], (_init2 = Object.getOwnPropertyDescriptor(_class2, "object"), _init2 = _init2 ? _init2.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init2;
    }
  }), _class2), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_schemas", [_dec3, property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return {};
    }
  }), _applyDecoratedDescriptor(_class2.prototype, "_endpointsPath", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "_endpointsPath"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "getEndpointByName", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "getEndpointByName"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "getEndpointName", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "getEndpointName"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "getStandardActionEndpoint", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "getStandardActionEndpoint"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "getEndpoint", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "getEndpoint"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "swaggerDefinitionFor", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "swaggerDefinitionFor"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "getSchema", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "getSchema"), _class2.prototype)), _class2)) || _class) || _class) || _class);
});

var __filename$4 = '/proxies/SwaggerRouter.js';

// This file is part of leanes-swagger-addon.
//
// leanes-swagger-addon is free software: you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// leanes-swagger-addon is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public License
// along with leanes-swagger-addon.  If not, see <https://www.gnu.org/licenses/>.
var SwaggerRouter = (function (Module) {
  var _dec, _class, _class2, _init, _init2, _class3, _temp;

  var _Module$NS = Module.NS,
      Router = _Module$NS.Router,
      initialize = _Module$NS.initialize,
      partOf = _Module$NS.partOf,
      nameBy = _Module$NS.nameBy,
      meta = _Module$NS.meta,
      method = _Module$NS.method;
  var SwaggerRouter = (_dec = partOf(Module), initialize(_class = _dec(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_Router) {
    _inherits(SwaggerRouter, _Router);

    var _super = _createSuper(SwaggerRouter);

    function SwaggerRouter() {
      _classCallCheck(this, SwaggerRouter);

      return _super.apply(this, arguments);
    }

    _createClass(SwaggerRouter, [{
      key: "map",
      value: function map() {
        this.namespace('swagger', {
          module: '',
          prefix: "swagger"
        }, function () {
          this.get('/', {
            to: 'swagger#index',
            recordName: null
          });
          this.get('/swagger.json', {
            to: 'swagger#spec',
            recordName: null
          });
          this.get('/*', {
            to: 'swagger#static',
            recordName: null
          });
        });
      }
    }]);

    return SwaggerRouter;
  }(Router), _class3.__filename = __filename$4, _class3.object = {}, _temp), (_applyDecoratedDescriptor(_class2, "__filename", [nameBy], (_init = Object.getOwnPropertyDescriptor(_class2, "__filename"), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init;
    }
  }), _class2), _applyDecoratedDescriptor(_class2, "object", [meta], (_init2 = Object.getOwnPropertyDescriptor(_class2, "object"), _init2 = _init2 ? _init2.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init2;
    }
  }), _class2), _applyDecoratedDescriptor(_class2.prototype, "map", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "map"), _class2.prototype)), _class2)) || _class) || _class);
});

var __filename$5 = '/mixins/CrudEndpointMixin.js';

var JoiT$5 = flowRuntime_umd.tdz(function () {
  return JoiT;
});
var CrudEndpointMixin = (function (Module) {
  var _Module$NS = Module.NS,
      SwaggerEndpoint = _Module$NS.SwaggerEndpoint,
      initializeMixin = _Module$NS.initializeMixin,
      meta = _Module$NS.meta,
      property = _Module$NS.property,
      method = _Module$NS.method,
      _Module$NS$Utils = _Module$NS.Utils,
      _ = _Module$NS$Utils._,
      joi = _Module$NS$Utils.joi,
      inflect = _Module$NS$Utils.inflect;
  Module.defineMixin(__filename$5, function (BaseClass) {
    var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _init, _descriptor, _descriptor2, _descriptor3, _descriptor4, _class3, _temp;

    return _dec = flowRuntime_umd.annotate(flowRuntime_umd["class"]("Mixin", flowRuntime_umd["extends"](BaseClass), flowRuntime_umd.staticProperty("object", flowRuntime_umd.any()), flowRuntime_umd.property("_keyName", flowRuntime_umd.nullable(flowRuntime_umd.string())), flowRuntime_umd.property("_entityName", flowRuntime_umd.nullable(flowRuntime_umd.string())), flowRuntime_umd.property("_recordName", flowRuntime_umd.nullable(flowRuntime_umd.string())), flowRuntime_umd.property("_schema", flowRuntime_umd.nullable(flowRuntime_umd.ref("object"))), flowRuntime_umd.method("keyName", flowRuntime_umd["return"](flowRuntime_umd.string())), flowRuntime_umd.method("itemEntityName", flowRuntime_umd["return"](flowRuntime_umd.string())), flowRuntime_umd.method("listEntityName", flowRuntime_umd["return"](flowRuntime_umd.string())), flowRuntime_umd.method("schema", flowRuntime_umd["return"](flowRuntime_umd.ref(JoiT$5))), flowRuntime_umd.method("listSchema", flowRuntime_umd["return"](flowRuntime_umd.ref(JoiT$5))), flowRuntime_umd.method("itemSchema", flowRuntime_umd["return"](flowRuntime_umd.ref(JoiT$5))), flowRuntime_umd.method("keySchema", flowRuntime_umd["return"](flowRuntime_umd.ref(JoiT$5))), flowRuntime_umd.method("querySchema", flowRuntime_umd["return"](flowRuntime_umd.ref(JoiT$5))), flowRuntime_umd.method("executeQuerySchema", flowRuntime_umd["return"](flowRuntime_umd.ref(JoiT$5))), flowRuntime_umd.method("bulkResponseSchema", flowRuntime_umd["return"](flowRuntime_umd.ref(JoiT$5))), flowRuntime_umd.method("versionSchema", flowRuntime_umd["return"](flowRuntime_umd.ref(JoiT$5))), flowRuntime_umd.method("ApplicationModule", flowRuntime_umd["return"](flowRuntime_umd.Class(flowRuntime_umd.existential()))), flowRuntime_umd.method("constructor", flowRuntime_umd.param("args", flowRuntime_umd.any())))), _dec2 = flowRuntime_umd.decorate(flowRuntime_umd.nullable(flowRuntime_umd.string())), _dec3 = flowRuntime_umd.decorate(flowRuntime_umd.nullable(flowRuntime_umd.string())), _dec4 = flowRuntime_umd.decorate(flowRuntime_umd.nullable(flowRuntime_umd.string())), _dec5 = flowRuntime_umd.decorate(flowRuntime_umd.nullable(flowRuntime_umd.ref("object"))), _dec(_class = initializeMixin(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_BaseClass) {
      _inherits(Mixin, _BaseClass);

      var _super = _createSuper(Mixin);

      _createClass(Mixin, [{
        key: "keyName",
        get: function get() {
          var _returnType = flowRuntime_umd["return"](flowRuntime_umd.string());

          var name = this._keyName || this._entityName;

          if (SwaggerEndpoint.keyNames[name] == null) {
            SwaggerEndpoint.keyNames[name] = inflect.singularize(inflect.underscore(name));
          }

          return _returnType.assert(SwaggerEndpoint.keyNames[name]);
        }
      }, {
        key: "itemEntityName",
        get: function get() {
          var _returnType2 = flowRuntime_umd["return"](flowRuntime_umd.string());

          var name = this._entityName;

          if (SwaggerEndpoint.itemEntityNames[name] == null) {
            SwaggerEndpoint.itemEntityNames[name] = inflect.singularize(inflect.underscore(name));
          }

          return _returnType2.assert(SwaggerEndpoint.itemEntityNames[name]);
        }
      }, {
        key: "listEntityName",
        get: function get() {
          var _returnType3 = flowRuntime_umd["return"](flowRuntime_umd.string());

          var name = this._entityName;

          if (SwaggerEndpoint.listEntityNames[name] == null) {
            SwaggerEndpoint.listEntityNames[name] = inflect.pluralize(inflect.underscore(name));
          }

          return _returnType3.assert(SwaggerEndpoint.listEntityNames[name]);
        }
      }, {
        key: "schema",
        get: function get() {
          var _returnType4 = flowRuntime_umd["return"](flowRuntime_umd.ref(JoiT$5));

          return _returnType4.assert(this._schema);
        }
      }, {
        key: "listSchema",
        get: function get() {
          var _returnType5 = flowRuntime_umd["return"](flowRuntime_umd.ref(JoiT$5));

          var name = "".concat(this._entityName, "|").concat(this._recordName);

          if (SwaggerEndpoint.listSchemas[name] == null) {
            SwaggerEndpoint.listSchemas[name] = joi.object(_defineProperty({
              meta: joi.object()
            }, "".concat(this.listEntityName), joi.array().items(this.schema)));
          }

          return _returnType5.assert(SwaggerEndpoint.listSchemas[name]);
        }
      }, {
        key: "itemSchema",
        get: function get() {
          var _returnType6 = flowRuntime_umd["return"](flowRuntime_umd.ref(JoiT$5));

          var name = "".concat(this._entityName, "|").concat(this._recordName);

          if (SwaggerEndpoint.itemSchemas[name] == null) {
            SwaggerEndpoint.itemSchemas[name] = joi.object(_defineProperty({}, "".concat(this.itemEntityName), this.schema));
          }

          return _returnType6.assert(SwaggerEndpoint.itemSchemas[name]);
        }
      }, {
        key: "keySchema",
        get: function get() {
          var _returnType7 = flowRuntime_umd["return"](flowRuntime_umd.ref(JoiT$5));

          return _returnType7.assert(joi.string().required().description('The key of the objects.'));
        }
      }, {
        key: "querySchema",
        get: function get() {
          var _returnType8 = flowRuntime_umd["return"](flowRuntime_umd.ref(JoiT$5));

          return _returnType8.assert(joi.string().empty('{}').optional()["default"]('{}'));
        }
      }, {
        key: "executeQuerySchema",
        get: function get() {
          var _returnType9 = flowRuntime_umd["return"](flowRuntime_umd.ref(JoiT$5));

          return _returnType9.assert(joi.object({
            query: joi.object().required()
          }).required());
        }
      }, {
        key: "bulkResponseSchema",
        get: function get() {
          var _returnType10 = flowRuntime_umd["return"](flowRuntime_umd.ref(JoiT$5));

          return _returnType10.assert(joi.object({
            success: joi["boolean"]()
          }));
        }
      }, {
        key: "versionSchema",
        get: function get() {
          var _returnType11 = flowRuntime_umd["return"](flowRuntime_umd.ref(JoiT$5));

          return _returnType11.assert(joi.string().required().description('The version of api endpoint in semver format `^x.x`'));
        }
      }, {
        key: "ApplicationModule",
        get: function get() {
          var _returnType12 = flowRuntime_umd["return"](flowRuntime_umd.Class(flowRuntime_umd.existential()));

          return _returnType12.assert(this.gateway && this.gateway.ApplicationModule || this.Module);
        }
      }]);

      function Mixin() {
        var _this;

        _classCallCheck(this, Mixin);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _super.call.apply(_super, [this].concat(args));

        _initializerDefineProperty(_this, "_keyName", _descriptor, _assertThisInitialized(_this));

        _initializerDefineProperty(_this, "_entityName", _descriptor2, _assertThisInitialized(_this));

        _initializerDefineProperty(_this, "_recordName", _descriptor3, _assertThisInitialized(_this));

        _initializerDefineProperty(_this, "_schema", _descriptor4, _assertThisInitialized(_this));

        var options = args[0];
        var keyName = options.keyName,
            entityName = options.entityName,
            recordName = options.recordName;
        _this._keyName = keyName;
        _this._entityName = entityName;
        _this._recordName = recordName;

        if (recordName != null && _.isString(recordName)) {
          var vsRecordName = function (rn) {
            if (!/Record$/.test(rn)) {
              rn += 'Record';
            }

            return rn;
          }(inflect.camelize(recordName));

          var voSchema = _this.gateway != null ? _this.gateway.getSchema(vsRecordName) : _this.ApplicationModule.NS[vsRecordName].schema;
          _this._schema = voSchema;
        }

        if (_this._schema == null) {
          _this._schema = joi.object();
        }

        return _this;
      }

      return Mixin;
    }(BaseClass), _class3.object = {}, _temp), (_applyDecoratedDescriptor(_class2, "object", [meta], (_init = Object.getOwnPropertyDescriptor(_class2, "object"), _init = _init ? _init.value : undefined, {
      enumerable: true,
      configurable: true,
      writable: true,
      initializer: function initializer() {
        return _init;
      }
    }), _class2), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_keyName", [_dec2, property], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function initializer() {
        return null;
      }
    }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_entityName", [_dec3, property], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function initializer() {
        return null;
      }
    }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_recordName", [_dec4, property], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function initializer() {
        return null;
      }
    }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_schema", [_dec5, property], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function initializer() {
        return null;
      }
    }), _applyDecoratedDescriptor(_class2.prototype, "keyName", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "keyName"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "itemEntityName", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "itemEntityName"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "listEntityName", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "listEntityName"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "schema", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "schema"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "listSchema", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "listSchema"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "itemSchema", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "itemSchema"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "keySchema", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "keySchema"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "querySchema", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "querySchema"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "executeQuerySchema", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "executeQuerySchema"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "bulkResponseSchema", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "bulkResponseSchema"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "versionSchema", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "versionSchema"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "ApplicationModule", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "ApplicationModule"), _class2.prototype)), _class2)) || _class) || _class;
  });
});

var __filename$6 = '/mixins/ModelingGatewayMixin.js';

// This file is part of leanes-swagger-addon.
//
// leanes-swagger-addon is free software: you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// leanes-swagger-addon is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public License
// along with leanes-swagger-addon.  If not, see <https://www.gnu.org/licenses/>.
var ModelingGatewayMixin = (function (Module) {
  var _Module$NS = Module.NS,
      initializeMixin = _Module$NS.initializeMixin,
      meta = _Module$NS.meta,
      method = _Module$NS.method,
      _Module$NS$Utils = _Module$NS.Utils,
      _ = _Module$NS$Utils._,
      inflect = _Module$NS$Utils.inflect;
  Module.defineMixin(__filename$6, function (BaseClass) {
    var _dec, _class, _class2, _init, _class3, _temp;

    var Mixin = (_dec = flowRuntime_umd.annotate(flowRuntime_umd["class"]("Mixin", flowRuntime_umd["extends"](BaseClass), flowRuntime_umd.staticProperty("object", flowRuntime_umd.any()), flowRuntime_umd.method("getStandardActionEndpoint", flowRuntime_umd.param("asResourse", flowRuntime_umd.string()), flowRuntime_umd.param("asAction", flowRuntime_umd.string()), flowRuntime_umd["return"](flowRuntime_umd.Class(flowRuntime_umd.existential()))))), _dec(_class = initializeMixin(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_BaseClass) {
      _inherits(Mixin, _BaseClass);

      var _super = _createSuper(Mixin);

      function Mixin() {
        _classCallCheck(this, Mixin);

        return _super.apply(this, arguments);
      }

      _createClass(Mixin, [{
        key: "getStandardActionEndpoint",
        value: function getStandardActionEndpoint(asResourse, asAction) {
          var _asResourseType = flowRuntime_umd.string();

          var _asActionType = flowRuntime_umd.string();

          var _returnType = flowRuntime_umd["return"](flowRuntime_umd.Class(flowRuntime_umd.existential()));

          flowRuntime_umd.param("asResourse", _asResourseType).assert(asResourse);
          flowRuntime_umd.param("asAction", _asActionType).assert(asAction);
          var vsEndpointName = _.startsWith(asResourse.toLowerCase(), 'modeling') ? "Modeling".concat(inflect.camelize(asAction), "Endpoint") : "".concat(inflect.camelize(asAction), "Endpoint");
          return _returnType.assert(this.ApplicationModule.NS[vsEndpointName] || this.ApplicationModule.NS.Endpoint);
        }
      }]);

      return Mixin;
    }(BaseClass), _class3.object = {}, _temp), (_applyDecoratedDescriptor(_class2, "object", [meta], (_init = Object.getOwnPropertyDescriptor(_class2, "object"), _init = _init ? _init.value : undefined, {
      enumerable: true,
      configurable: true,
      writable: true,
      initializer: function initializer() {
        return _init;
      }
    }), _class2), _applyDecoratedDescriptor(_class2.prototype, "getStandardActionEndpoint", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "getStandardActionEndpoint"), _class2.prototype)), _class2)) || _class) || _class);
    return Mixin;
  });
});

var __filename$7 = '/mixins/NamespacedGatewayMixin.js';

// This file is part of leanes-swagger-addon.
//
// leanes-swagger-addon is free software: you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// leanes-swagger-addon is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public License
// along with leanes-swagger-addon.  If not, see <https://www.gnu.org/licenses/>.
var NamespacedGatewayMixin = (function (Module) {
  var _Module$NS = Module.NS,
      initializeMixin = _Module$NS.initializeMixin,
      meta = _Module$NS.meta,
      property = _Module$NS.property,
      method = _Module$NS.method,
      inflect = _Module$NS.Utils.inflect;
  Module.defineMixin(__filename$7, function (BaseClass) {
    var _dec, _class, _class2, _init, _class3, _temp;

    var Mixin = (_dec = flowRuntime_umd.annotate(flowRuntime_umd["class"]("Mixin", flowRuntime_umd["extends"](BaseClass), flowRuntime_umd.staticProperty("object", flowRuntime_umd.any()), flowRuntime_umd.method("namespaces", flowRuntime_umd["return"](flowRuntime_umd.array(flowRuntime_umd.string()))), flowRuntime_umd.method("joinedNamespacesMask", flowRuntime_umd["return"](flowRuntime_umd.ref("RegExp"))), flowRuntime_umd.method("getTrimmedEndpointName", flowRuntime_umd.param("asResourse", flowRuntime_umd.string()), flowRuntime_umd.param("asAction", flowRuntime_umd.string()), flowRuntime_umd["return"](flowRuntime_umd.string())), flowRuntime_umd.method("getEndpoint", flowRuntime_umd.param("asResourse", flowRuntime_umd.string()), flowRuntime_umd.param("asAction", flowRuntime_umd.string()), flowRuntime_umd["return"](flowRuntime_umd.Class(flowRuntime_umd.existential()))))), _dec(_class = initializeMixin(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_BaseClass) {
      _inherits(Mixin, _BaseClass);

      var _super = _createSuper(Mixin);

      function Mixin() {
        _classCallCheck(this, Mixin);

        return _super.apply(this, arguments);
      }

      _createClass(Mixin, [{
        key: "namespaces",
        value: function namespaces() {
          var _returnType = flowRuntime_umd["return"](flowRuntime_umd.array(flowRuntime_umd.string()));

          return _returnType.assert(['admining', 'globaling', 'guesting', 'modeling', 'personing', 'sharing']);
        }
      }, {
        key: "getTrimmedEndpointName",
        value: function getTrimmedEndpointName(asResourse, asAction) {
          var _asResourseType = flowRuntime_umd.string();

          var _asActionType = flowRuntime_umd.string();

          var _returnType3 = flowRuntime_umd["return"](flowRuntime_umd.string());

          flowRuntime_umd.param("asResourse", _asResourseType).assert(asResourse);
          flowRuntime_umd.param("asAction", _asActionType).assert(asAction);
          var vsPath = "".concat(inflect.underscore(asResourse), "_").concat(asAction, "_endpoint").replace(/\//g, '_').replace(/\_+/g, '_').replace(this.joinedNamespacesMask, '');
          return _returnType3.assert(inflect.camelize(vsPath));
        }
      }, {
        key: "getEndpoint",
        value: function getEndpoint(asResourse, asAction) {
          var _asResourseType2 = flowRuntime_umd.string();

          var _asActionType2 = flowRuntime_umd.string();

          var _returnType4 = flowRuntime_umd["return"](flowRuntime_umd.Class(flowRuntime_umd.existential()));

          flowRuntime_umd.param("asResourse", _asResourseType2).assert(asResourse);
          flowRuntime_umd.param("asAction", _asActionType2).assert(asAction);
          return _returnType4.assert(this.getEndpointByName(this.getEndpointName(asResourse, asAction)) || this.getEndpointByName(this.getTrimmedEndpointName(asResourse, asAction)) || this.getStandardActionEndpoint(asResourse, asAction));
        }
      }, {
        key: "joinedNamespacesMask",
        get: function get() {
          var _returnType2 = flowRuntime_umd["return"](flowRuntime_umd.ref("RegExp"));

          return _returnType2.assert(new RegExp("^(".concat(this.namespaces().join('|'), ")_")));
        }
      }]);

      return Mixin;
    }(BaseClass), _class3.object = {}, _temp), (_applyDecoratedDescriptor(_class2, "object", [meta], (_init = Object.getOwnPropertyDescriptor(_class2, "object"), _init = _init ? _init.value : undefined, {
      enumerable: true,
      configurable: true,
      writable: true,
      initializer: function initializer() {
        return _init;
      }
    }), _class2), _applyDecoratedDescriptor(_class2.prototype, "namespaces", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "namespaces"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "joinedNamespacesMask", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "joinedNamespacesMask"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "getTrimmedEndpointName", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "getTrimmedEndpointName"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "getEndpoint", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "getEndpoint"), _class2.prototype)), _class2)) || _class) || _class);
    return Mixin;
  });
});

var __filename$8 = '/endpoints/CreateEndpoint.js';

// This file is part of leanes-swagger-addon.
//
// leanes-swagger-addon is free software: you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// leanes-swagger-addon is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public License
// along with leanes-swagger-addon.  If not, see <https://www.gnu.org/licenses/>.
var CreateEndpoint = (function (Module) {
  var _dec, _dec2, _class, _class2, _init, _init2, _class3, _temp;

  var _Module$NS = Module.NS,
      SwaggerEndpoint = _Module$NS.SwaggerEndpoint,
      CrudEndpointMixin = _Module$NS.CrudEndpointMixin,
      initialize = _Module$NS.initialize,
      partOf = _Module$NS.partOf,
      mixin = _Module$NS.mixin,
      nameBy = _Module$NS.nameBy,
      meta = _Module$NS.meta,
      statuses = _Module$NS.Utils.statuses;
  var HTTP_CONFLICT = statuses('conflict');
  var UNAUTHORIZED = statuses('unauthorized');
  var UPGRADE_REQUIRED = statuses('upgrade required');
  var CreateEndpoint = (_dec = partOf(Module), _dec2 = mixin(CrudEndpointMixin), initialize(_class = _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_SwaggerEndpoint) {
    _inherits(CreateEndpoint, _SwaggerEndpoint);

    var _super = _createSuper(CreateEndpoint);

    function CreateEndpoint() {
      var _this;

      _classCallCheck(this, CreateEndpoint);

      _this = _super.apply(this, arguments);

      _this.pathParam('v', _this.versionSchema).body(_this.itemSchema.required(), "\n          The ".concat(_this.itemEntityName, " to create.\n        ")).response(201, _this.itemSchema, "\n          The created ".concat(_this.itemEntityName, ".\n        ")).error(HTTP_CONFLICT, "\n          The ".concat(_this.itemEntityName, " already\n          exists.\n        ")).error(UNAUTHORIZED).error(UPGRADE_REQUIRED).summary("\n          Create a new ".concat(_this.itemEntityName, "\n        ")).description("\n          Creates a new ".concat(_this.itemEntityName, "\n          from the request body and\n          returns the saved document.\n        "));

      return _this;
    }

    return CreateEndpoint;
  }(SwaggerEndpoint), _class3.__filename = __filename$8, _class3.object = {}, _temp), (_applyDecoratedDescriptor(_class2, "__filename", [nameBy], (_init = Object.getOwnPropertyDescriptor(_class2, "__filename"), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init;
    }
  }), _class2), _applyDecoratedDescriptor(_class2, "object", [meta], (_init2 = Object.getOwnPropertyDescriptor(_class2, "object"), _init2 = _init2 ? _init2.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init2;
    }
  }), _class2)), _class2)) || _class) || _class) || _class);
});

var __filename$9 = '/endpoints/ListEndpoint.js';

// This file is part of leanes-swagger-addon.
//
// leanes-swagger-addon is free software: you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// leanes-swagger-addon is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public License
// along with leanes-swagger-addon.  If not, see <https://www.gnu.org/licenses/>.
var ListEndpoint = (function (Module) {
  var _dec, _dec2, _class, _class2, _init, _init2, _class3, _temp;

  var _Module$NS = Module.NS,
      SwaggerEndpoint = _Module$NS.SwaggerEndpoint,
      CrudEndpointMixin = _Module$NS.CrudEndpointMixin,
      initialize = _Module$NS.initialize,
      partOf = _Module$NS.partOf,
      mixin = _Module$NS.mixin,
      nameBy = _Module$NS.nameBy,
      meta = _Module$NS.meta,
      statuses = _Module$NS.Utils.statuses;
  var UNAUTHORIZED = statuses('unauthorized');
  var UPGRADE_REQUIRED = statuses('upgrade required');
  var ListEndpoint = (_dec = partOf(Module), _dec2 = mixin(CrudEndpointMixin), initialize(_class = _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_SwaggerEndpoint) {
    _inherits(ListEndpoint, _SwaggerEndpoint);

    var _super = _createSuper(ListEndpoint);

    function ListEndpoint() {
      var _this;

      _classCallCheck(this, ListEndpoint);

      _this = _super.apply(this, arguments);

      _this.pathParam('v', _this.versionSchema).queryParam('query', _this.querySchema, "\n          The query for finding\n          ".concat(_this.listEntityName, ".\n        ")).response(_this.listSchema, "\n          The ".concat(_this.listEntityName, ".\n        ")).error(UNAUTHORIZED).error(UPGRADE_REQUIRED).summary("\n          List of filtered ".concat(_this.listEntityName, "\n        ")).description("\n          Retrieves a list of filtered\n          ".concat(_this.listEntityName, " by using query.\n        "));

      return _this;
    }

    return ListEndpoint;
  }(SwaggerEndpoint), _class3.__filename = __filename$9, _class3.object = {}, _temp), (_applyDecoratedDescriptor(_class2, "__filename", [nameBy], (_init = Object.getOwnPropertyDescriptor(_class2, "__filename"), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init;
    }
  }), _class2), _applyDecoratedDescriptor(_class2, "object", [meta], (_init2 = Object.getOwnPropertyDescriptor(_class2, "object"), _init2 = _init2 ? _init2.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init2;
    }
  }), _class2)), _class2)) || _class) || _class) || _class);
});

var __filename$a = '/endpoints/DetailEndpoint.js';

// This file is part of leanes-swagger-addon.
//
// leanes-swagger-addon is free software: you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// leanes-swagger-addon is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public License
// along with leanes-swagger-addon.  If not, see <https://www.gnu.org/licenses/>.
var DetailEndpoint = (function (Module) {
  var _dec, _dec2, _class, _class2, _init, _init2, _class3, _temp;

  var _Module$NS = Module.NS,
      SwaggerEndpoint = _Module$NS.SwaggerEndpoint,
      CrudEndpointMixin = _Module$NS.CrudEndpointMixin,
      initialize = _Module$NS.initialize,
      partOf = _Module$NS.partOf,
      mixin = _Module$NS.mixin,
      nameBy = _Module$NS.nameBy,
      meta = _Module$NS.meta,
      statuses = _Module$NS.Utils.statuses;
  var HTTP_NOT_FOUND = statuses('not found');
  var UNAUTHORIZED = statuses('unauthorized');
  var UPGRADE_REQUIRED = statuses('upgrade required');
  var DetailEndpoint = (_dec = partOf(Module), _dec2 = mixin(CrudEndpointMixin), initialize(_class = _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_SwaggerEndpoint) {
    _inherits(DetailEndpoint, _SwaggerEndpoint);

    var _super = _createSuper(DetailEndpoint);

    function DetailEndpoint() {
      var _this;

      _classCallCheck(this, DetailEndpoint);

      _this = _super.apply(this, arguments);

      _this.pathParam('v', _this.versionSchema).response(_this.itemSchema, "\n          The ".concat(_this.itemEntityName, ".\n        ")).error(HTTP_NOT_FOUND).error(UNAUTHORIZED).error(UPGRADE_REQUIRED).summary("\n          Fetch the ".concat(_this.itemEntityName, "\n        ")).description("\n          Retrieves the\n          ".concat(_this.itemEntityName, " by its key.\n        "));

      return _this;
    }

    return DetailEndpoint;
  }(SwaggerEndpoint), _class3.__filename = __filename$a, _class3.object = {}, _temp), (_applyDecoratedDescriptor(_class2, "__filename", [nameBy], (_init = Object.getOwnPropertyDescriptor(_class2, "__filename"), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init;
    }
  }), _class2), _applyDecoratedDescriptor(_class2, "object", [meta], (_init2 = Object.getOwnPropertyDescriptor(_class2, "object"), _init2 = _init2 ? _init2.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init2;
    }
  }), _class2)), _class2)) || _class) || _class) || _class);
});

var __filename$b = '/endpoints/UpdateEndpoint.js';

// This file is part of leanes-swagger-addon.
//
// leanes-swagger-addon is free software: you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// leanes-swagger-addon is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public License
// along with leanes-swagger-addon.  If not, see <https://www.gnu.org/licenses/>.
var UpdateEndpoint = (function (Module) {
  var _dec, _dec2, _class, _class2, _init, _init2, _class3, _temp;

  var _Module$NS = Module.NS,
      SwaggerEndpoint = _Module$NS.SwaggerEndpoint,
      CrudEndpointMixin = _Module$NS.CrudEndpointMixin,
      initialize = _Module$NS.initialize,
      partOf = _Module$NS.partOf,
      meta = _Module$NS.meta,
      nameBy = _Module$NS.nameBy,
      mixin = _Module$NS.mixin,
      statuses = _Module$NS.Utils.statuses;
  var HTTP_NOT_FOUND = statuses('not found');
  var HTTP_CONFLICT = statuses('conflict');
  var UNAUTHORIZED = statuses('unauthorized');
  var UPGRADE_REQUIRED = statuses('upgrade required');
  var UpdateEndpoint = (_dec = partOf(Module), _dec2 = mixin(CrudEndpointMixin), initialize(_class = _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_SwaggerEndpoint) {
    _inherits(UpdateEndpoint, _SwaggerEndpoint);

    var _super = _createSuper(UpdateEndpoint);

    function UpdateEndpoint() {
      var _this;

      _classCallCheck(this, UpdateEndpoint);

      _this = _super.apply(this, arguments);

      _this.pathParam('v', _this.versionSchema).body(_this.itemSchema.required(), "\n          The data to replace the\n          ".concat(_this.itemEntityName, " with.\n        ")).response(_this.itemSchema, "\n          The replaced ".concat(_this.itemEntityName, ".\n        ")).error(HTTP_NOT_FOUND).error(HTTP_CONFLICT).error(UNAUTHORIZED).error(UPGRADE_REQUIRED).summary("\n          Replace the ".concat(_this.itemEntityName, "\n        ")).description("\n          Replaces an existing\n          ".concat(_this.itemEntityName, " with the\n          request body and returns the new document.\n        "));

      return _this;
    }

    return UpdateEndpoint;
  }(SwaggerEndpoint), _class3.__filename = __filename$b, _class3.object = {}, _temp), (_applyDecoratedDescriptor(_class2, "__filename", [nameBy], (_init = Object.getOwnPropertyDescriptor(_class2, "__filename"), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init;
    }
  }), _class2), _applyDecoratedDescriptor(_class2, "object", [meta], (_init2 = Object.getOwnPropertyDescriptor(_class2, "object"), _init2 = _init2 ? _init2.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init2;
    }
  }), _class2)), _class2)) || _class) || _class) || _class);
});

var __filename$c = '/endpoints/DeleteEndpoint.js';

// This file is part of leanes-swagger-addon.
//
// leanes-swagger-addon is free software: you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// leanes-swagger-addon is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public License
// along with leanes-swagger-addon.  If not, see <https://www.gnu.org/licenses/>.
var DeleteEndpoint = (function (Module) {
  var _dec, _dec2, _class, _class2, _init, _init2, _class3, _temp;

  var _Module$NS = Module.NS,
      SwaggerEndpoint = _Module$NS.SwaggerEndpoint,
      CrudEndpointMixin = _Module$NS.CrudEndpointMixin,
      initialize = _Module$NS.initialize,
      partOf = _Module$NS.partOf,
      mixin = _Module$NS.mixin,
      nameBy = _Module$NS.nameBy,
      meta = _Module$NS.meta,
      statuses = _Module$NS.Utils.statuses;
  var HTTP_NOT_FOUND = statuses('not found');
  var UNAUTHORIZED = statuses('unauthorized');
  var UPGRADE_REQUIRED = statuses('upgrade required');
  var DeleteEndpoint = (_dec = partOf(Module), _dec2 = mixin(CrudEndpointMixin), initialize(_class = _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_SwaggerEndpoint) {
    _inherits(DeleteEndpoint, _SwaggerEndpoint);

    var _super = _createSuper(DeleteEndpoint);

    function DeleteEndpoint() {
      var _this;

      _classCallCheck(this, DeleteEndpoint);

      _this = _super.apply(this, arguments);

      _this.pathParam('v', _this.versionSchema).error(HTTP_NOT_FOUND).error(UNAUTHORIZED).error(UPGRADE_REQUIRED).response(null).summary("\n          Hide a new ".concat(_this.itemEntityName, "\n        ")).description("\n          Hide the ".concat(_this.itemEntityName, "\n          from the database.\n        "));

      return _this;
    }

    return DeleteEndpoint;
  }(SwaggerEndpoint), _class3.__filename = __filename$c, _class3.object = {}, _temp), (_applyDecoratedDescriptor(_class2, "__filename", [nameBy], (_init = Object.getOwnPropertyDescriptor(_class2, "__filename"), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init;
    }
  }), _class2), _applyDecoratedDescriptor(_class2, "object", [meta], (_init2 = Object.getOwnPropertyDescriptor(_class2, "object"), _init2 = _init2 ? _init2.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init2;
    }
  }), _class2)), _class2)) || _class) || _class) || _class);
});

var __filename$d = '/endpoints/DestroyEndpoint.js';

// This file is part of leanes-swagger-addon.
//
// leanes-swagger-addon is free software: you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// leanes-swagger-addon is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public License
// along with leanes-swagger-addon.  If not, see <https://www.gnu.org/licenses/>.
var DestroyEndpoint = (function (Module) {
  var _dec, _dec2, _class, _class2, _init, _init2, _class3, _temp;

  var _Module$NS = Module.NS,
      SwaggerEndpoint = _Module$NS.SwaggerEndpoint,
      CrudEndpointMixin = _Module$NS.CrudEndpointMixin,
      initialize = _Module$NS.initialize,
      partOf = _Module$NS.partOf,
      meta = _Module$NS.meta,
      property = _Module$NS.property,
      method = _Module$NS.method,
      nameBy = _Module$NS.nameBy,
      mixin = _Module$NS.mixin,
      statuses = _Module$NS.Utils.statuses;
  var HTTP_NOT_FOUND = statuses('not found');
  var UNAUTHORIZED = statuses('unauthorized');
  var UPGRADE_REQUIRED = statuses('upgrade required');
  var DestroyEndpoint = (_dec = partOf(Module), _dec2 = mixin(CrudEndpointMixin), initialize(_class = _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_SwaggerEndpoint) {
    _inherits(DestroyEndpoint, _SwaggerEndpoint);

    var _super = _createSuper(DestroyEndpoint);

    function DestroyEndpoint() {
      var _this;

      _classCallCheck(this, DestroyEndpoint);

      _this = _super.apply(this, arguments);

      _this.pathParam('v', _this.versionSchema).error(HTTP_NOT_FOUND).error(UNAUTHORIZED).error(UPGRADE_REQUIRED).response(null).summary("\n          Remove the ".concat(_this.itemEntityName, "\n        ")).description("\n          Deletes the ".concat(_this.itemEntityName, "\n          from the database.\n        "));

      return _this;
    }

    return DestroyEndpoint;
  }(SwaggerEndpoint), _class3.__filename = __filename$d, _class3.object = {}, _temp), (_applyDecoratedDescriptor(_class2, "__filename", [nameBy], (_init = Object.getOwnPropertyDescriptor(_class2, "__filename"), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init;
    }
  }), _class2), _applyDecoratedDescriptor(_class2, "object", [meta], (_init2 = Object.getOwnPropertyDescriptor(_class2, "object"), _init2 = _init2 ? _init2.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init2;
    }
  }), _class2)), _class2)) || _class) || _class) || _class);
});

var __filename$e = '/endpoints/CountEndpoint.js';

// This file is part of leanes-swagger-addon.
//
// leanes-swagger-addon is free software: you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// leanes-swagger-addon is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public License
// along with leanes-swagger-addon.  If not, see <https://www.gnu.org/licenses/>.
var CountEndpoint = (function (Module) {
  var _dec, _dec2, _class, _class2, _init, _init2, _class3, _temp;

  var _Module$NS = Module.NS,
      SwaggerEndpoint = _Module$NS.SwaggerEndpoint,
      CrudEndpointMixin = _Module$NS.CrudEndpointMixin,
      initialize = _Module$NS.initialize,
      partOf = _Module$NS.partOf,
      mixin = _Module$NS.mixin,
      nameBy = _Module$NS.nameBy,
      meta = _Module$NS.meta,
      _Module$NS$Utils = _Module$NS.Utils,
      statuses = _Module$NS$Utils.statuses,
      joi = _Module$NS$Utils.joi;
  var UNAUTHORIZED = statuses('unauthorized');
  var UPGRADE_REQUIRED = statuses('upgrade required');
  var CountEndpoint = (_dec = partOf(Module), _dec2 = mixin(CrudEndpointMixin), initialize(_class = _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_SwaggerEndpoint) {
    _inherits(CountEndpoint, _SwaggerEndpoint);

    var _super = _createSuper(CountEndpoint);

    function CountEndpoint() {
      var _this;

      _classCallCheck(this, CountEndpoint);

      _this = _super.apply(this, arguments);

      _this.pathParam('v', _this.versionSchema).queryParam('query', _this.querySchema, "\n          The query for counting\n          ".concat(_this.listEntityName, ".\n        ")).response(joi.numner(), "\n          The count of ".concat(_this.listEntityName, "\n        ")).error(UNAUTHORIZED).error(UPGRADE_REQUIRED).summary("\n          Count of filtered ".concat(_this.listEntityName, "\n        ")).description("\n          Retrieves a count of filtered\n          ".concat(_this.listEntityName, " by using query.\n        "));

      return _this;
    }

    return CountEndpoint;
  }(SwaggerEndpoint), _class3.__filename = __filename$e, _class3.object = {}, _temp), (_applyDecoratedDescriptor(_class2, "__filename", [nameBy], (_init = Object.getOwnPropertyDescriptor(_class2, "__filename"), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init;
    }
  }), _class2), _applyDecoratedDescriptor(_class2, "object", [meta], (_init2 = Object.getOwnPropertyDescriptor(_class2, "object"), _init2 = _init2 ? _init2.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init2;
    }
  }), _class2)), _class2)) || _class) || _class) || _class);
});

var __filename$f = '/endpoints/LengthEndpoint.js';

// This file is part of leanes-swagger-addon.
//
// leanes-swagger-addon is free software: you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// leanes-swagger-addon is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public License
// along with leanes-swagger-addon.  If not, see <https://www.gnu.org/licenses/>.
var LengthEndpoint = (function (Module) {
  var _dec, _dec2, _class, _class2, _init, _init2, _class3, _temp;

  var _Module$NS = Module.NS,
      SwaggerEndpoint = _Module$NS.SwaggerEndpoint,
      CrudEndpointMixin = _Module$NS.CrudEndpointMixin,
      initialize = _Module$NS.initialize,
      partOf = _Module$NS.partOf,
      mixin = _Module$NS.mixin,
      nameBy = _Module$NS.nameBy,
      meta = _Module$NS.meta,
      _Module$NS$Utils = _Module$NS.Utils,
      statuses = _Module$NS$Utils.statuses,
      joi = _Module$NS$Utils.joi;
  var UNAUTHORIZED = statuses('unauthorized');
  var UPGRADE_REQUIRED = statuses('upgrade required');
  var LengthEndpoint = (_dec = partOf(Module), _dec2 = mixin(CrudEndpointMixin), initialize(_class = _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_SwaggerEndpoint) {
    _inherits(LengthEndpoint, _SwaggerEndpoint);

    var _super = _createSuper(LengthEndpoint);

    function LengthEndpoint() {
      var _this;

      _classCallCheck(this, LengthEndpoint);

      _this = _super.apply(this, arguments);

      _this.pathParam('v', _this.versionSchema).response(joi.number(), "\n          The length of ".concat(_this.listEntityName, " collection.\n        ")).error(UNAUTHORIZED).error(UPGRADE_REQUIRED).summary("\n          Length of ".concat(_this.listEntityName, " collecton\n        ")).description("\n          Retrieves a length of\n          ".concat(_this.listEntityName, " collection.\n        "));

      return _this;
    }

    return LengthEndpoint;
  }(SwaggerEndpoint), _class3.__filename = __filename$f, _class3.object = {}, _temp), (_applyDecoratedDescriptor(_class2, "__filename", [nameBy], (_init = Object.getOwnPropertyDescriptor(_class2, "__filename"), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init;
    }
  }), _class2), _applyDecoratedDescriptor(_class2, "object", [meta], (_init2 = Object.getOwnPropertyDescriptor(_class2, "object"), _init2 = _init2 ? _init2.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init2;
    }
  }), _class2)), _class2)) || _class) || _class) || _class);
});

var __filename$g = '/endpoints/BulkDeleteEndpoint.js';

// This file is part of leanes-swagger-addon.
//
// leanes-swagger-addon is free software: you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// leanes-swagger-addon is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public License
// along with leanes-swagger-addon.  If not, see <https://www.gnu.org/licenses/>.
var BulkDeleteEndpoint = (function (Module) {
  var _dec, _dec2, _class, _class2, _init, _init2, _class3, _temp;

  var _Module$NS = Module.NS,
      SwaggerEndpoint = _Module$NS.SwaggerEndpoint,
      CrudEndpointMixin = _Module$NS.CrudEndpointMixin,
      initialize = _Module$NS.initialize,
      partOf = _Module$NS.partOf,
      mixin = _Module$NS.mixin,
      nameBy = _Module$NS.nameBy,
      meta = _Module$NS.meta,
      statuses = _Module$NS.Utils.statuses;
  var UNAUTHORIZED = statuses('unauthorized');
  var UPGRADE_REQUIRED = statuses('upgrade required');
  var BulkDeleteEndpoint = (_dec = partOf(Module), _dec2 = mixin(CrudEndpointMixin), initialize(_class = _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_SwaggerEndpoint) {
    _inherits(BulkDeleteEndpoint, _SwaggerEndpoint);

    var _super = _createSuper(BulkDeleteEndpoint);

    function BulkDeleteEndpoint() {
      var _this;

      _classCallCheck(this, BulkDeleteEndpoint);

      _this = _super.apply(this, arguments);

      _this.pathParam('v', _this.versionSchema).queryParam('query', _this.querySchema, "\n          The query for finding\n          ".concat(_this.listEntityName, ".\n        ")).response(null).error(UNAUTHORIZED).error(UPGRADE_REQUIRED).summary("\n          Hide of filtered ".concat(_this.listEntityName, "\n        ")).description("\n          Hide a list of filtered\n          ".concat(_this.listEntityName, " by using query.\n        "));

      return _this;
    }

    return BulkDeleteEndpoint;
  }(SwaggerEndpoint), _class3.__filename = __filename$g, _class3.object = {}, _temp), (_applyDecoratedDescriptor(_class2, "__filename", [nameBy], (_init = Object.getOwnPropertyDescriptor(_class2, "__filename"), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init;
    }
  }), _class2), _applyDecoratedDescriptor(_class2, "object", [meta], (_init2 = Object.getOwnPropertyDescriptor(_class2, "object"), _init2 = _init2 ? _init2.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init2;
    }
  }), _class2)), _class2)) || _class) || _class) || _class);
});

var __filename$h = '/endpoints/BulkDestroyEndpoint.js';

// This file is part of leanes-swagger-addon.
//
// leanes-swagger-addon is free software: you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// leanes-swagger-addon is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public License
// along with leanes-swagger-addon.  If not, see <https://www.gnu.org/licenses/>.
var BulkDestroyEndpoint = (function (Module) {
  var _dec, _dec2, _class, _class2, _init, _init2, _class3, _temp;

  var _Module$NS = Module.NS,
      SwaggerEndpoint = _Module$NS.SwaggerEndpoint,
      CrudEndpointMixin = _Module$NS.CrudEndpointMixin,
      initialize = _Module$NS.initialize,
      partOf = _Module$NS.partOf,
      mixin = _Module$NS.mixin,
      nameBy = _Module$NS.nameBy,
      meta = _Module$NS.meta,
      statuses = _Module$NS.Utils.statuses;
  var UNAUTHORIZED = statuses('unauthorized');
  var UPGRADE_REQUIRED = statuses('upgrade required');
  var BulkDestroyEndpoint = (_dec = partOf(Module), _dec2 = mixin(CrudEndpointMixin), initialize(_class = _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_SwaggerEndpoint) {
    _inherits(BulkDestroyEndpoint, _SwaggerEndpoint);

    var _super = _createSuper(BulkDestroyEndpoint);

    function BulkDestroyEndpoint() {
      var _this;

      _classCallCheck(this, BulkDestroyEndpoint);

      _this = _super.apply(this, arguments);

      _this.pathParam('v', _this.versionSchema).queryParam('query', _this.querySchema, "\n          The query for finding\n          ".concat(_this.listEntityName, ".\n        ")).response(null).error(UNAUTHORIZED).error(UPGRADE_REQUIRED).summary("\n          Remove of filtered ".concat(_this.listEntityName, "\n        ")).description("\n          Remove a list of filtered\n          ".concat(_this.listEntityName, " by using query.\n        "));

      return _this;
    }

    return BulkDestroyEndpoint;
  }(SwaggerEndpoint), _class3.__filename = __filename$h, _class3.object = {}, _temp), (_applyDecoratedDescriptor(_class2, "__filename", [nameBy], (_init = Object.getOwnPropertyDescriptor(_class2, "__filename"), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init;
    }
  }), _class2), _applyDecoratedDescriptor(_class2, "object", [meta], (_init2 = Object.getOwnPropertyDescriptor(_class2, "object"), _init2 = _init2 ? _init2.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init2;
    }
  }), _class2)), _class2)) || _class) || _class) || _class);
});

var __filename$i = '/endpoints/ModelingCreateEndpoint.js';

// This file is part of leanes-swagger-addon.
//
// leanes-swagger-addon is free software: you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// leanes-swagger-addon is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public License
// along with leanes-swagger-addon.  If not, see <https://www.gnu.org/licenses/>.
var ModelingCreateEndpoint = (function (Module) {
  var _dec, _dec2, _class, _class2, _init, _init2, _class3, _temp;

  var _Module$NS = Module.NS,
      SwaggerEndpoint = _Module$NS.SwaggerEndpoint,
      CrudEndpointMixin = _Module$NS.CrudEndpointMixin,
      initialize = _Module$NS.initialize,
      mixin = _Module$NS.mixin,
      partOf = _Module$NS.partOf,
      nameBy = _Module$NS.nameBy,
      meta = _Module$NS.meta,
      _Module$NS$Utils = _Module$NS.Utils,
      statuses = _Module$NS$Utils.statuses,
      joi = _Module$NS$Utils.joi;
  var HTTP_CONFLICT = statuses('conflict');
  var UNAUTHORIZED = statuses('unauthorized');
  var UPGRADE_REQUIRED = statuses('upgrade required');
  var ModelingCreateEndpoint = (_dec = partOf(Module), _dec2 = mixin(CrudEndpointMixin), initialize(_class = _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_SwaggerEndpoint) {
    _inherits(ModelingCreateEndpoint, _SwaggerEndpoint);

    var _super = _createSuper(ModelingCreateEndpoint);

    function ModelingCreateEndpoint() {
      var _this;

      _classCallCheck(this, ModelingCreateEndpoint);

      _this = _super.apply(this, arguments);

      _this.pathParam('v', _this.versionSchema).header('Authorization', joi.string().required(), "\n          Authorization header for internal services.\n        ").body(_this.itemSchema.required(), "\n          The ".concat(_this.itemEntityName, " to create.\n        ")).response(201, _this.itemScema, "\n          The created ".concat(_this.itemEntityName, ".\n        ")).error(HTTP_CONFLICT, "\n          The ".concat(_this.itemEntityName, " already\n          exists.\n        ")).error(UNAUTHORIZED).error(UPGRADE_REQUIRED).summary("\n          Create a new ".concat(_this.itemEntityName, "\n        ")).description("\n          Creates a new ".concat(_this.itemEntityName, "\n          from the request body and\n          returns the saved document.\n        "));

      return _this;
    }

    return ModelingCreateEndpoint;
  }(SwaggerEndpoint), _class3.__filename = __filename$i, _class3.object = {}, _temp), (_applyDecoratedDescriptor(_class2, "__filename", [nameBy], (_init = Object.getOwnPropertyDescriptor(_class2, "__filename"), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init;
    }
  }), _class2), _applyDecoratedDescriptor(_class2, "object", [meta], (_init2 = Object.getOwnPropertyDescriptor(_class2, "object"), _init2 = _init2 ? _init2.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init2;
    }
  }), _class2)), _class2)) || _class) || _class) || _class);
});

var __filename$j = '/endpoints/ModelingListEndpoint.js';

// This file is part of leanes-swagger-addon.
//
// leanes-swagger-addon is free software: you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// leanes-swagger-addon is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public License
// along with leanes-swagger-addon.  If not, see <https://www.gnu.org/licenses/>.
var ModelingListEndpoint = (function (Module) {
  var _dec, _dec2, _class, _class2, _init, _init2, _class3, _temp;

  var _Module$NS = Module.NS,
      SwaggerEndpoint = _Module$NS.SwaggerEndpoint,
      CrudEndpointMixin = _Module$NS.CrudEndpointMixin,
      initialize = _Module$NS.initialize,
      partOf = _Module$NS.partOf,
      meta = _Module$NS.meta,
      nameBy = _Module$NS.nameBy,
      mixin = _Module$NS.mixin,
      _Module$NS$Utils = _Module$NS.Utils,
      statuses = _Module$NS$Utils.statuses,
      joi = _Module$NS$Utils.joi;
  var UNAUTHORIZED = statuses('unauthorized');
  var UPGRADE_REQUIRED = statuses('upgrade required');
  var ModelingListEndpoint = (_dec = partOf(Module), _dec2 = mixin(CrudEndpointMixin), initialize(_class = _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_SwaggerEndpoint) {
    _inherits(ModelingListEndpoint, _SwaggerEndpoint);

    var _super = _createSuper(ModelingListEndpoint);

    function ModelingListEndpoint() {
      var _this;

      _classCallCheck(this, ModelingListEndpoint);

      _this = _super.apply(this, arguments);

      _this.pathParam('v', _this.versionSchema).header('Authorization', joi.string().required(), "\n          Authorization header for internal services.\n        ").queryParam('query', _this.querySchema, "\n          The query for finding\n          ".concat(_this.listEntityName, ".\n        ")).response(_this.listSchema, "\n          The ".concat(_this.listEntityName, ".\n        ")).error(UNAUTHORIZED).error(UPGRADE_REQUIRED).summary("\n          List of filtered ".concat(_this.listEntityName, "\n        ")).description("\n          Retrieves a list of filtered\n          ".concat(_this.listEntityName, " by using query.\n        "));

      return _this;
    }

    return ModelingListEndpoint;
  }(SwaggerEndpoint), _class3.__filename = __filename$j, _class3.object = {}, _temp), (_applyDecoratedDescriptor(_class2, "__filename", [nameBy], (_init = Object.getOwnPropertyDescriptor(_class2, "__filename"), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init;
    }
  }), _class2), _applyDecoratedDescriptor(_class2, "object", [meta], (_init2 = Object.getOwnPropertyDescriptor(_class2, "object"), _init2 = _init2 ? _init2.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init2;
    }
  }), _class2)), _class2)) || _class) || _class) || _class);
});

var __filename$k = '/endpoints/ModelingDetailEndpoint.js';

// This file is part of leanes-swagger-addon.
//
// leanes-swagger-addon is free software: you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// leanes-swagger-addon is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public License
// along with leanes-swagger-addon.  If not, see <https://www.gnu.org/licenses/>.
var ModelingDetailEndpoint = (function (Module) {
  var _dec, _dec2, _class, _class2, _init, _init2, _class3, _temp;

  var _Module$NS = Module.NS,
      SwaggerEndpoint = _Module$NS.SwaggerEndpoint,
      CrudEndpointMixin = _Module$NS.CrudEndpointMixin,
      initialize = _Module$NS.initialize,
      partOf = _Module$NS.partOf,
      meta = _Module$NS.meta,
      nameBy = _Module$NS.nameBy,
      mixin = _Module$NS.mixin,
      _Module$NS$Utils = _Module$NS.Utils,
      statuses = _Module$NS$Utils.statuses,
      joi = _Module$NS$Utils.joi;
  var HTTP_NOT_FOUND = statuses('not found');
  var UNAUTHORIZED = statuses('unauthorized');
  var UPGRADE_REQUIRED = statuses('upgrade required');
  var ModelingDetailEndpoint = (_dec = partOf(Module), _dec2 = mixin(CrudEndpointMixin), initialize(_class = _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_SwaggerEndpoint) {
    _inherits(ModelingDetailEndpoint, _SwaggerEndpoint);

    var _super = _createSuper(ModelingDetailEndpoint);

    function ModelingDetailEndpoint() {
      var _this;

      _classCallCheck(this, ModelingDetailEndpoint);

      _this = _super.apply(this, arguments);

      _this.pathParam('v', _this.versionSchema).header('Authorization', joi.string().required(), "\n          Authorization header for internal services.\n        ").response(_this.itemSchema, "\n          The ".concat(_this.itemEntityName, ".\n        ")).error(HTTP_NOT_FOUND).error(UNAUTHORIZED).error(UPGRADE_REQUIRED).summary("\n          Fetch the ".concat(_this.itemEntityName, "\n        ")).description("\n          Retrieves the\n          ".concat(_this.itemEntityName, " by its key.\n        "));

      return _this;
    }

    return ModelingDetailEndpoint;
  }(SwaggerEndpoint), _class3.__filename = __filename$k, _class3.object = {}, _temp), (_applyDecoratedDescriptor(_class2, "__filename", [nameBy], (_init = Object.getOwnPropertyDescriptor(_class2, "__filename"), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init;
    }
  }), _class2), _applyDecoratedDescriptor(_class2, "object", [meta], (_init2 = Object.getOwnPropertyDescriptor(_class2, "object"), _init2 = _init2 ? _init2.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init2;
    }
  }), _class2)), _class2)) || _class) || _class) || _class);
});

var __filename$l = '/endpoints/ModelingUpdateEndpoint.js';

// This file is part of leanes-swagger-addon.
//
// leanes-swagger-addon is free software: you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// leanes-swagger-addon is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public License
// along with leanes-swagger-addon.  If not, see <https://www.gnu.org/licenses/>.
var ModelingUpdateEndpoint = (function (Module) {
  var _dec, _dec2, _class, _class2, _init, _init2, _class3, _temp;

  var _Module$NS = Module.NS,
      SwaggerEndpoint = _Module$NS.SwaggerEndpoint,
      CrudEndpointMixin = _Module$NS.CrudEndpointMixin,
      initialize = _Module$NS.initialize,
      partOf = _Module$NS.partOf,
      mixin = _Module$NS.mixin,
      meta = _Module$NS.meta,
      nameBy = _Module$NS.nameBy,
      _Module$NS$Utils = _Module$NS.Utils,
      statuses = _Module$NS$Utils.statuses,
      joi = _Module$NS$Utils.joi;
  var HTTP_NOT_FOUND = statuses('not found');
  var HTTP_CONFLICT = statuses('conflict');
  var UNAUTHORIZED = statuses('unauthorized');
  var UPGRADE_REQUIRED = statuses('upgrade required');
  var ModelingUpdateEndpoint = (_dec = partOf(Module), _dec2 = mixin(CrudEndpointMixin), initialize(_class = _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_SwaggerEndpoint) {
    _inherits(ModelingUpdateEndpoint, _SwaggerEndpoint);

    var _super = _createSuper(ModelingUpdateEndpoint);

    function ModelingUpdateEndpoint() {
      var _this;

      _classCallCheck(this, ModelingUpdateEndpoint);

      _this = _super.apply(this, arguments);

      _this.pathParam('v', _this.versionSchema).header('Authorization', joi.string().required(), "\n          Authorization header for internal services.\n        ").body(_this.itemSchema.required(), "\n          The data to replace the\n          ".concat(_this.itemEntityName, " with.\n        ")).response(_this.itemSchema, "\n          The replaced ".concat(_this.itemEntityName, ".\n        ")).error(HTTP_NOT_FOUND).error(HTTP_CONFLICT).error(UNAUTHORIZED).error(UPGRADE_REQUIRED).summary("\n          Replace the ".concat(_this.itemEntityName, ".\n        ")).description("\n          Replaces an existing\n          ".concat(_this.itemEntityName, " with the\n          request body and returns the new document.\n        "));

      return _this;
    }

    return ModelingUpdateEndpoint;
  }(SwaggerEndpoint), _class3.__filename = __filename$l, _class3.object = {}, _temp), (_applyDecoratedDescriptor(_class2, "__filename", [nameBy], (_init = Object.getOwnPropertyDescriptor(_class2, "__filename"), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init;
    }
  }), _class2), _applyDecoratedDescriptor(_class2, "object", [meta], (_init2 = Object.getOwnPropertyDescriptor(_class2, "object"), _init2 = _init2 ? _init2.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init2;
    }
  }), _class2)), _class2)) || _class) || _class) || _class);
});

var __filename$m = '/endpoints/ModelingDeleteEndpoint.js';

// This file is part of leanes-swagger-addon.
//
// leanes-swagger-addon is free software: you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// leanes-swagger-addon is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public License
// along with leanes-swagger-addon.  If not, see <https://www.gnu.org/licenses/>.
var ModelingDeleteEndpoint = (function (Module) {
  var _dec, _dec2, _class, _class2, _init, _init2, _class3, _temp;

  var _Module$NS = Module.NS,
      SwaggerEndpoint = _Module$NS.SwaggerEndpoint,
      CrudEndpointMixin = _Module$NS.CrudEndpointMixin,
      initialize = _Module$NS.initialize,
      mixin = _Module$NS.mixin,
      partOf = _Module$NS.partOf,
      nameBy = _Module$NS.nameBy,
      meta = _Module$NS.meta,
      _Module$NS$Utils = _Module$NS.Utils,
      statuses = _Module$NS$Utils.statuses,
      joi = _Module$NS$Utils.joi;
  var HTTP_NOT_FOUND = statuses('not found');
  var UNAUTHORIZED = statuses('unauthorized');
  var UPGRADE_REQUIRED = statuses('upgrade required');
  var ModelingDeleteEndpoint = (_dec = partOf(Module), _dec2 = mixin(CrudEndpointMixin), initialize(_class = _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_SwaggerEndpoint) {
    _inherits(ModelingDeleteEndpoint, _SwaggerEndpoint);

    var _super = _createSuper(ModelingDeleteEndpoint);

    function ModelingDeleteEndpoint() {
      var _this;

      _classCallCheck(this, ModelingDeleteEndpoint);

      _this = _super.apply(this, arguments);

      _this.pathParam('v', _this.versionSchema).header('Authorization', joi.string().required(), "\n          Authorization header for internal services.\n        ").error(HTTP_NOT_FOUND).error(UNAUTHORIZED).error(UPGRADE_REQUIRED).response(null).summary("\n          Hide the ".concat(_this.itemEntityName, "\n        ")).description("\n          Hide the ".concat(_this.itemEntityName, "\n          from the database.\n        "));

      return _this;
    }

    return ModelingDeleteEndpoint;
  }(SwaggerEndpoint), _class3.__filename = __filename$m, _class3.object = {}, _temp), (_applyDecoratedDescriptor(_class2, "__filename", [nameBy], (_init = Object.getOwnPropertyDescriptor(_class2, "__filename"), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init;
    }
  }), _class2), _applyDecoratedDescriptor(_class2, "object", [meta], (_init2 = Object.getOwnPropertyDescriptor(_class2, "object"), _init2 = _init2 ? _init2.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init2;
    }
  }), _class2)), _class2)) || _class) || _class) || _class);
});

var __filename$n = '/endpoints/ModelingDestroyEndpoint.js';

// This file is part of leanes-swagger-addon.
//
// leanes-swagger-addon is free software: you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// leanes-swagger-addon is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public License
// along with leanes-swagger-addon.  If not, see <https://www.gnu.org/licenses/>.
var ModelingDestroyEndpoint = (function (Module) {
  var _dec, _dec2, _class, _class2, _init, _init2, _class3, _temp;

  var _Module$NS = Module.NS,
      SwaggerEndpoint = _Module$NS.SwaggerEndpoint,
      CrudEndpointMixin = _Module$NS.CrudEndpointMixin,
      initialize = _Module$NS.initialize,
      mixin = _Module$NS.mixin,
      partOf = _Module$NS.partOf,
      meta = _Module$NS.meta,
      nameBy = _Module$NS.nameBy,
      _Module$NS$Utils = _Module$NS.Utils,
      statuses = _Module$NS$Utils.statuses,
      joi = _Module$NS$Utils.joi;
  var HTTP_NOT_FOUND = statuses('not found');
  var UNAUTHORIZED = statuses('unauthorized');
  var UPGRADE_REQUIRED = statuses('upgrade required');
  var ModelingDestroyEndpoint = (_dec = partOf(Module), _dec2 = mixin(CrudEndpointMixin), initialize(_class = _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_SwaggerEndpoint) {
    _inherits(ModelingDestroyEndpoint, _SwaggerEndpoint);

    var _super = _createSuper(ModelingDestroyEndpoint);

    function ModelingDestroyEndpoint() {
      var _this;

      _classCallCheck(this, ModelingDestroyEndpoint);

      _this = _super.apply(this, arguments);

      _this.pathParam('v', _this.versionSchema).header('Authorization', joi.string().required(), "\n          Authorization header for internal services.\n        ").error(HTTP_NOT_FOUND).error(UNAUTHORIZED).error(UPGRADE_REQUIRED).response(null).summary("\n          Remove the ".concat(_this.itemEntityName, "\n        ")).description("\n          Deletes the ".concat(_this.itemEntityName, "\n          from the database.\n        "));

      return _this;
    }

    return ModelingDestroyEndpoint;
  }(SwaggerEndpoint), _class3.__filename = __filename$n, _class3.object = {}, _temp), (_applyDecoratedDescriptor(_class2, "__filename", [nameBy], (_init = Object.getOwnPropertyDescriptor(_class2, "__filename"), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init;
    }
  }), _class2), _applyDecoratedDescriptor(_class2, "object", [meta], (_init2 = Object.getOwnPropertyDescriptor(_class2, "object"), _init2 = _init2 ? _init2.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init2;
    }
  }), _class2)), _class2)) || _class) || _class) || _class);
});

var __filename$o = '/endpoints/ModelingQueryEndpoint.js';

// This file is part of leanes-swagger-addon.
//
// leanes-swagger-addon is free software: you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// leanes-swagger-addon is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public License
// along with leanes-swagger-addon.  If not, see <https://www.gnu.org/licenses/>.
var ModelingQueryEndpoint = (function (Module) {
  var _dec, _dec2, _class, _class2, _init, _init2, _class3, _temp;

  var _Module$NS = Module.NS,
      SwaggerEndpoint = _Module$NS.SwaggerEndpoint,
      CrudEndpointMixin = _Module$NS.CrudEndpointMixin,
      initialize = _Module$NS.initialize,
      partOf = _Module$NS.partOf,
      meta = _Module$NS.meta,
      nameBy = _Module$NS.nameBy,
      mixin = _Module$NS.mixin,
      _Module$NS$Utils = _Module$NS.Utils,
      statuses = _Module$NS$Utils.statuses,
      joi = _Module$NS$Utils.joi;
  var UNAUTHORIZED = statuses('unauthorized');
  var UPGRADE_REQUIRED = statuses('upgrade required');
  var ModelingQueryEndpoint = (_dec = partOf(Module), _dec2 = mixin(CrudEndpointMixin), initialize(_class = _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_SwaggerEndpoint) {
    _inherits(ModelingQueryEndpoint, _SwaggerEndpoint);

    var _super = _createSuper(ModelingQueryEndpoint);

    function ModelingQueryEndpoint() {
      var _this;

      _classCallCheck(this, ModelingQueryEndpoint);

      _this = _super.apply(this, arguments);

      _this.pathParam('v', _this.versionSchema).header('Authorization', joi.string().required(), "\n          Authorization header is required.\n        ").body(_this.executeQuerySchema, "\n          The query for execute.\n        ").response(joi.array().items(joi.any()), "\n          Any result.\n        ").error(UNAUTHORIZED).error(UPGRADE_REQUIRED).summary("\n          Execute some query\n        ").description("\n          This endpoint will been used from HttpCollectionMixin\n        ");

      return _this;
    }

    return ModelingQueryEndpoint;
  }(SwaggerEndpoint), _class3.__filename = __filename$o, _class3.object = {}, _temp), (_applyDecoratedDescriptor(_class2, "__filename", [nameBy], (_init = Object.getOwnPropertyDescriptor(_class2, "__filename"), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init;
    }
  }), _class2), _applyDecoratedDescriptor(_class2, "object", [meta], (_init2 = Object.getOwnPropertyDescriptor(_class2, "object"), _init2 = _init2 ? _init2.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init2;
    }
  }), _class2)), _class2)) || _class) || _class) || _class);
});

var __filename$p = '/endpoints/ModelingBulkDeleteEndpoint.js';

// This file is part of leanes-swagger-addon.
//
// leanes-swagger-addon is free software: you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// leanes-swagger-addon is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public License
// along with leanes-swagger-addon.  If not, see <https://www.gnu.org/licenses/>.
var ModelingBulkDeleteEndpoint = (function (Module) {
  var _dec, _dec2, _class, _class2, _init, _init2, _class3, _temp;

  var _Module$NS = Module.NS,
      SwaggerEndpoint = _Module$NS.SwaggerEndpoint,
      CrudEndpointMixin = _Module$NS.CrudEndpointMixin,
      initialize = _Module$NS.initialize,
      partOf = _Module$NS.partOf,
      mixin = _Module$NS.mixin,
      nameBy = _Module$NS.nameBy,
      meta = _Module$NS.meta,
      statuses = _Module$NS.Utils.statuses;
  var UNAUTHORIZED = statuses('unauthorized');
  var UPGRADE_REQUIRED = statuses('upgrade required');
  var ModelingBulkDeleteEndpoint = (_dec = partOf(Module), _dec2 = mixin(CrudEndpointMixin), initialize(_class = _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_SwaggerEndpoint) {
    _inherits(ModelingBulkDeleteEndpoint, _SwaggerEndpoint);

    var _super = _createSuper(ModelingBulkDeleteEndpoint);

    function ModelingBulkDeleteEndpoint() {
      var _this;

      _classCallCheck(this, ModelingBulkDeleteEndpoint);

      _this = _super.apply(this, arguments);

      _this.pathParam('v', _this.versionSchema).header('Authorization', joi.string().required(), "\n          Authorization header for internal services.\n        ").queryParam('query', _this.querySchema, "\n          The query for finding\n          ".concat(_this.listEntityName, ".\n        ")).response(null).error(UNAUTHORIZED).error(UPGRADE_REQUIRED).summary("\n          Hide of filtered ".concat(_this.listEntityName, "\n        ")).description("\n          Hide a list of filtered\n          ".concat(_this.listEntityName, " by using query.\n        "));

      return _this;
    }

    return ModelingBulkDeleteEndpoint;
  }(SwaggerEndpoint), _class3.__filename = __filename$p, _class3.object = {}, _temp), (_applyDecoratedDescriptor(_class2, "__filename", [nameBy], (_init = Object.getOwnPropertyDescriptor(_class2, "__filename"), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init;
    }
  }), _class2), _applyDecoratedDescriptor(_class2, "object", [meta], (_init2 = Object.getOwnPropertyDescriptor(_class2, "object"), _init2 = _init2 ? _init2.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init2;
    }
  }), _class2)), _class2)) || _class) || _class) || _class);
});

var __filename$q = '/endpoints/ModelingBulkDestroyEndpoint.js';

// This file is part of leanes-swagger-addon.
//
// leanes-swagger-addon is free software: you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// leanes-swagger-addon is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public License
// along with leanes-swagger-addon.  If not, see <https://www.gnu.org/licenses/>.
var ModelingBulkDestroyEndpoint = (function (Module) {
  var _dec, _dec2, _class, _class2, _init, _init2, _class3, _temp;

  var _Module$NS = Module.NS,
      SwaggerEndpoint = _Module$NS.SwaggerEndpoint,
      CrudEndpointMixin = _Module$NS.CrudEndpointMixin,
      initialize = _Module$NS.initialize,
      mixin = _Module$NS.mixin,
      partOf = _Module$NS.partOf,
      nameBy = _Module$NS.nameBy,
      meta = _Module$NS.meta,
      statuses = _Module$NS.Utils.statuses;
  var UNAUTHORIZED = statuses('unauthorized');
  var UPGRADE_REQUIRED = statuses('upgrade required');
  var ModelingBulkDestroyEndpoint = (_dec = partOf(Module), _dec2 = mixin(CrudEndpointMixin), initialize(_class = _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_SwaggerEndpoint) {
    _inherits(ModelingBulkDestroyEndpoint, _SwaggerEndpoint);

    var _super = _createSuper(ModelingBulkDestroyEndpoint);

    function ModelingBulkDestroyEndpoint() {
      var _this;

      _classCallCheck(this, ModelingBulkDestroyEndpoint);

      _this = _super.apply(this, arguments);

      _this.pathParam('v', _this.versionSchema).header('Authorization', joi.string().required(), "\n          Authorization header for internal services.\n        ").queryParam('query', _this.querySchema, "\n          The query for finding\n          ".concat(_this.listEntityName, "\n        ")).response(null).error(UNAUTHORIZED).eror(UPGRADE_REQUIRED).summary("\n          Remove of filtered ".concat(_this.listEntityName, "\n        ")).description("\n          Remove a list of filtered\n          ".concat(_this.listEntityName, " by using query.\n        "));

      return _this;
    }

    return ModelingBulkDestroyEndpoint;
  }(SwaggerEndpoint), _class3.__filename = __filename$q, _class3.object = {}, _temp), (_applyDecoratedDescriptor(_class2, "__filename", [nameBy], (_init = Object.getOwnPropertyDescriptor(_class2, "__filename"), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init;
    }
  }), _class2), _applyDecoratedDescriptor(_class2, "object", [meta], (_init2 = Object.getOwnPropertyDescriptor(_class2, "object"), _init2 = _init2 ? _init2.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init2;
    }
  }), _class2)), _class2)) || _class) || _class) || _class);
});

var __filename$r = '/mixins/SwaggerFacadeMixin.js';

// This file is part of leanes-swagger-addon.
//
// leanes-swagger-addon is free software: you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// leanes-swagger-addon is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public License
// along with leanes-swagger-addon.  If not, see <https://www.gnu.org/licenses/>.
var SwaggerFacadeMixin = (function (Module) {
  var _Module$NS = Module.NS,
      SWAGGER_ROUTER = _Module$NS.SWAGGER_ROUTER,
      SWAGGER_GATEWAY = _Module$NS.SWAGGER_GATEWAY,
      initializeMixin = _Module$NS.initializeMixin,
      meta = _Module$NS.meta,
      method = _Module$NS.method,
      _ = _Module$NS.Utils._;
  Module.defineMixin(__filename$r, function (BaseClass) {
    var _dec, _class, _class2, _init, _class3, _temp;

    var Mixin = (_dec = flowRuntime_umd.annotate(flowRuntime_umd["class"]("Mixin", flowRuntime_umd["extends"](BaseClass), flowRuntime_umd.staticProperty("object", flowRuntime_umd.any()), flowRuntime_umd.method("initializeFacade", flowRuntime_umd["return"](flowRuntime_umd["void"]())))), _dec(_class = initializeMixin(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_BaseClass) {
      _inherits(Mixin, _BaseClass);

      var _super = _createSuper(Mixin);

      function Mixin() {
        _classCallCheck(this, Mixin);

        return _super.apply(this, arguments);
      }

      _createClass(Mixin, [{
        key: "initializeFacade",
        value: function initializeFacade() {
          var _returnType = flowRuntime_umd["return"](flowRuntime_umd["void"]());

          _get(_getPrototypeOf(Mixin.prototype), "initializeFacade", this).apply(this, arguments);

          this.addCommand('SwaggerResource');
          this.addProxy(SWAGGER_ROUTER, 'SwaggerRouter');
          this.addProxy(SWAGGER_GATEWAY, 'SwaggerGateway');
        }
      }]);

      return Mixin;
    }(BaseClass), _class3.object = {}, _temp), (_applyDecoratedDescriptor(_class2, "object", [meta], (_init = Object.getOwnPropertyDescriptor(_class2, "object"), _init = _init ? _init.value : undefined, {
      enumerable: true,
      configurable: true,
      writable: true,
      initializer: function initializer() {
        return _init;
      }
    }), _class2), _applyDecoratedDescriptor(_class2.prototype, "initializeFacade", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "initializeFacade"), _class2.prototype)), _class2)) || _class) || _class);
    return Mixin;
  });
});

var index = (function (Module) {
  var _Module$NS = Module.NS,
      initializeMixin = _Module$NS.initializeMixin,
      meta = _Module$NS.meta,
      constant = _Module$NS.constant,
      method = _Module$NS.method,
      extend = _Module$NS.extend;
  return ['SwaggerAddon', function (BaseClass) {
    var _dec, _dec2, _class, _class2, _init, _descriptor, _descriptor2, _class3, _temp;

    var Mixin = (_dec = flowRuntime_umd.annotate(flowRuntime_umd["class"]("Mixin", flowRuntime_umd["extends"](BaseClass), flowRuntime_umd.staticProperty("object", flowRuntime_umd.any()), flowRuntime_umd.property("SWAGGER_ROUTER", flowRuntime_umd.any()), flowRuntime_umd.property("SWAGGER_GATEWAY", flowRuntime_umd.any()))), _dec2 = extend('SwaggerFacadeMixin', 'Facade'), _dec(_class = _dec2(_class = SwaggerFacadeMixin(_class = CreateEndpoint(_class = ListEndpoint(_class = DetailEndpoint(_class = UpdateEndpoint(_class = DeleteEndpoint(_class = DestroyEndpoint(_class = CountEndpoint(_class = LengthEndpoint(_class = BulkDeleteEndpoint(_class = BulkDestroyEndpoint(_class = ModelingCreateEndpoint(_class = ModelingListEndpoint(_class = ModelingDetailEndpoint(_class = ModelingUpdateEndpoint(_class = ModelingDeleteEndpoint(_class = ModelingDestroyEndpoint(_class = ModelingQueryEndpoint(_class = ModelingBulkDeleteEndpoint(_class = ModelingBulkDestroyEndpoint(_class = ModelingGatewayMixin(_class = NamespacedGatewayMixin(_class = CrudEndpointMixin(_class = SwaggerEndpoint(_class = SwaggerResource(_class = SwaggerGateway(_class = SwaggerRouter(_class = initializeMixin(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_BaseClass) {
      _inherits(Mixin, _BaseClass);

      var _super = _createSuper(Mixin);

      function Mixin() {
        var _this;

        _classCallCheck(this, Mixin);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _super.call.apply(_super, [this].concat(args));

        _initializerDefineProperty(_this, "SWAGGER_ROUTER", _descriptor, _assertThisInitialized(_this));

        _initializerDefineProperty(_this, "SWAGGER_GATEWAY", _descriptor2, _assertThisInitialized(_this));

        return _this;
      }

      return Mixin;
    }(BaseClass), _class3.object = {}, _temp), (_applyDecoratedDescriptor(_class2, "object", [meta], (_init = Object.getOwnPropertyDescriptor(_class2, "object"), _init = _init ? _init.value : undefined, {
      enumerable: true,
      configurable: true,
      writable: true,
      initializer: function initializer() {
        return _init;
      }
    }), _class2), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "SWAGGER_ROUTER", [constant], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function initializer() {
        return 'SwaggerRouter';
      }
    }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "SWAGGER_GATEWAY", [constant], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function initializer() {
        return 'SwaggerGateway';
      }
    })), _class2)) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class);
    return Mixin;
  }];
});

exports.SwaggerEndpointInterface = SwaggerEndpointInterface;
exports.SwaggerEndpointStruct = SwaggerEndpointStruct;
exports.SwaggerGatewayInterface = SwaggerGatewayInterface;
exports.default = index;
//# sourceMappingURL=index.dev.js.map
