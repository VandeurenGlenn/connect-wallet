import { g as global$1 } from './connect-wallet-Cw3pi2MU.js';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function getAugmentedNamespace(n) {
  if (n.__esModule) return n;
  var f = n.default;
	if (typeof f == "function") {
		var a = function a () {
			if (this instanceof a) {
        return Reflect.construct(f, arguments, this.constructor);
			}
			return f.apply(this, arguments);
		};
		a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

// shim for using process in browser
// based off https://github.com/defunctzombie/node-process/blob/master/browser.js

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
var cachedSetTimeout = defaultSetTimout;
var cachedClearTimeout = defaultClearTimeout;
if (typeof global$1.setTimeout === 'function') {
    cachedSetTimeout = setTimeout;
}
if (typeof global$1.clearTimeout === 'function') {
    cachedClearTimeout = clearTimeout;
}

function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
function nextTick(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
}
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
var title = 'browser';
var platform = 'browser';
var browser$3 = true;
var env$1 = {};
var argv = [];
var version = ''; // empty string to avoid regexp issues
var versions = {};
var release = {};
var config = {};

function noop$1() {}

var on = noop$1;
var addListener = noop$1;
var once = noop$1;
var off = noop$1;
var removeListener = noop$1;
var removeAllListeners = noop$1;
var emit = noop$1;

function binding(name) {
    throw new Error('process.binding is not supported');
}

function cwd () { return '/' }
function chdir (dir) {
    throw new Error('process.chdir is not supported');
}function umask() { return 0; }

// from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js
var performance = global$1.performance || {};
var performanceNow =
  performance.now        ||
  performance.mozNow     ||
  performance.msNow      ||
  performance.oNow       ||
  performance.webkitNow  ||
  function(){ return (new Date()).getTime() };

// generate timestamp or delta
// see http://nodejs.org/api/process.html#process_process_hrtime
function hrtime(previousTimestamp){
  var clocktime = performanceNow.call(performance)*1e-3;
  var seconds = Math.floor(clocktime);
  var nanoseconds = Math.floor((clocktime%1)*1e9);
  if (previousTimestamp) {
    seconds = seconds - previousTimestamp[0];
    nanoseconds = nanoseconds - previousTimestamp[1];
    if (nanoseconds<0) {
      seconds--;
      nanoseconds += 1e9;
    }
  }
  return [seconds,nanoseconds]
}

var startTime = new Date();
function uptime() {
  var currentTime = new Date();
  var dif = currentTime - startTime;
  return dif / 1000;
}

var browser$1$1 = {
  nextTick: nextTick,
  title: title,
  browser: browser$3,
  env: env$1,
  argv: argv,
  version: version,
  versions: versions,
  on: on,
  addListener: addListener,
  once: once,
  off: off,
  removeListener: removeListener,
  removeAllListeners: removeAllListeners,
  emit: emit,
  binding: binding,
  cwd: cwd,
  chdir: chdir,
  umask: umask,
  hrtime: hrtime,
  platform: platform,
  release: release,
  config: config,
  uptime: uptime
};

var domain;

// This constructor is used to store event handlers. Instantiating this is
// faster than explicitly calling `Object.create(null)` to get a "clean" empty
// object (tested with v8 v4.9).
function EventHandlers() {}
EventHandlers.prototype = Object.create(null);

function EventEmitter() {
  EventEmitter.init.call(this);
}

// nodejs oddity
// require('events') === require('events').EventEmitter
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.usingDomains = false;

EventEmitter.prototype.domain = undefined;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

EventEmitter.init = function() {
  this.domain = null;
  if (EventEmitter.usingDomains) {
    // if there is an active domain, then attach to it.
    if (domain.active) ;
  }

  if (!this._events || this._events === Object.getPrototypeOf(this)._events) {
    this._events = new EventHandlers();
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || isNaN(n))
    throw new TypeError('"n" argument must be a positive number');
  this._maxListeners = n;
  return this;
};

function $getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
};

// These standalone emit* functions are used to optimize calling of event
// handlers for fast cases because emit() itself often has a variable number of
// arguments and can be deoptimized because of that. These functions always have
// the same number of arguments and thus do not get deoptimized, so the code
// inside them can execute faster.
function emitNone(handler, isFn, self) {
  if (isFn)
    handler.call(self);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self);
  }
}
function emitOne(handler, isFn, self, arg1) {
  if (isFn)
    handler.call(self, arg1);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self, arg1);
  }
}
function emitTwo(handler, isFn, self, arg1, arg2) {
  if (isFn)
    handler.call(self, arg1, arg2);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self, arg1, arg2);
  }
}
function emitThree(handler, isFn, self, arg1, arg2, arg3) {
  if (isFn)
    handler.call(self, arg1, arg2, arg3);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self, arg1, arg2, arg3);
  }
}

function emitMany(handler, isFn, self, args) {
  if (isFn)
    handler.apply(self, args);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].apply(self, args);
  }
}

EventEmitter.prototype.emit = function emit(type) {
  var er, handler, len, args, i, events, domain;
  var doError = (type === 'error');

  events = this._events;
  if (events)
    doError = (doError && events.error == null);
  else if (!doError)
    return false;

  domain = this.domain;

  // If there is no 'error' event listener then throw.
  if (doError) {
    er = arguments[1];
    if (domain) {
      if (!er)
        er = new Error('Uncaught, unspecified "error" event');
      er.domainEmitter = this;
      er.domain = domain;
      er.domainThrown = false;
      domain.emit('error', er);
    } else if (er instanceof Error) {
      throw er; // Unhandled 'error' event
    } else {
      // At least give some kind of context to the user
      var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
      err.context = er;
      throw err;
    }
    return false;
  }

  handler = events[type];

  if (!handler)
    return false;

  var isFn = typeof handler === 'function';
  len = arguments.length;
  switch (len) {
    // fast cases
    case 1:
      emitNone(handler, isFn, this);
      break;
    case 2:
      emitOne(handler, isFn, this, arguments[1]);
      break;
    case 3:
      emitTwo(handler, isFn, this, arguments[1], arguments[2]);
      break;
    case 4:
      emitThree(handler, isFn, this, arguments[1], arguments[2], arguments[3]);
      break;
    // slower
    default:
      args = new Array(len - 1);
      for (i = 1; i < len; i++)
        args[i - 1] = arguments[i];
      emitMany(handler, isFn, this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  if (typeof listener !== 'function')
    throw new TypeError('"listener" argument must be a function');

  events = target._events;
  if (!events) {
    events = target._events = new EventHandlers();
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (!existing) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] = prepend ? [listener, existing] :
                                          [existing, listener];
    } else {
      // If we've already got an array, just append.
      if (prepend) {
        existing.unshift(listener);
      } else {
        existing.push(listener);
      }
    }

    // Check for listener leak
    if (!existing.warned) {
      m = $getMaxListeners(target);
      if (m && m > 0 && existing.length > m) {
        existing.warned = true;
        var w = new Error('Possible EventEmitter memory leak detected. ' +
                            existing.length + ' ' + type + ' listeners added. ' +
                            'Use emitter.setMaxListeners() to increase limit');
        w.name = 'MaxListenersExceededWarning';
        w.emitter = target;
        w.type = type;
        w.count = existing.length;
        emitWarning(w);
      }
    }
  }

  return target;
}
function emitWarning(e) {
  typeof console.warn === 'function' ? console.warn(e) : console.log(e);
}
EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function _onceWrap(target, type, listener) {
  var fired = false;
  function g() {
    target.removeListener(type, g);
    if (!fired) {
      fired = true;
      listener.apply(target, arguments);
    }
  }
  g.listener = listener;
  return g;
}

EventEmitter.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function')
    throw new TypeError('"listener" argument must be a function');
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      if (typeof listener !== 'function')
        throw new TypeError('"listener" argument must be a function');
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      if (typeof listener !== 'function')
        throw new TypeError('"listener" argument must be a function');

      events = this._events;
      if (!events)
        return this;

      list = events[type];
      if (!list)
        return this;

      if (list === listener || (list.listener && list.listener === listener)) {
        if (--this._eventsCount === 0)
          this._events = new EventHandlers();
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length; i-- > 0;) {
          if (list[i] === listener ||
              (list[i].listener && list[i].listener === listener)) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (list.length === 1) {
          list[0] = undefined;
          if (--this._eventsCount === 0) {
            this._events = new EventHandlers();
            return this;
          } else {
            delete events[type];
          }
        } else {
          spliceOne(list, position);
        }

        if (events.removeListener)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };
    
// Alias for removeListener added in NodeJS 10.0
// https://nodejs.org/api/events.html#events_emitter_off_eventname_listener
EventEmitter.prototype.off = function(type, listener){
    return this.removeListener(type, listener);
};

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events;

      events = this._events;
      if (!events)
        return this;

      // not listening for removeListener, no need to emit
      if (!events.removeListener) {
        if (arguments.length === 0) {
          this._events = new EventHandlers();
          this._eventsCount = 0;
        } else if (events[type]) {
          if (--this._eventsCount === 0)
            this._events = new EventHandlers();
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        for (var i = 0, key; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = new EventHandlers();
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners) {
        // LIFO order
        do {
          this.removeListener(type, listeners[listeners.length - 1]);
        } while (listeners[0]);
      }

      return this;
    };

EventEmitter.prototype.listeners = function listeners(type) {
  var evlistener;
  var ret;
  var events = this._events;

  if (!events)
    ret = [];
  else {
    evlistener = events[type];
    if (!evlistener)
      ret = [];
    else if (typeof evlistener === 'function')
      ret = [evlistener.listener || evlistener];
    else
      ret = unwrapListeners(evlistener);
  }

  return ret;
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
};

// About 1.5x faster than the two-arg version of Array#splice().
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1)
    list[i] = list[k];
  list.pop();
}

function arrayClone(arr, i) {
  var copy = new Array(i);
  while (i--)
    copy[i] = arr[i];
  return copy;
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

const suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
const JsonSigRx = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor" && value && typeof value === "object" && "prototype" in value) {
    warnKeyDropped(key);
    return;
  }
  return value;
}
function warnKeyDropped(key) {
  console.warn(`[destr] Dropping "${key}" key to prevent prototype pollution.`);
}
function destr(value, options = {}) {
  if (typeof value !== "string") {
    return value;
  }
  const _value = value.trim();
  if (
    // eslint-disable-next-line unicorn/prefer-at
    value[0] === '"' && value.endsWith('"') && !value.includes("\\")
  ) {
    return _value.slice(1, -1);
  }
  if (_value.length <= 9) {
    const _lval = _value.toLowerCase();
    if (_lval === "true") {
      return true;
    }
    if (_lval === "false") {
      return false;
    }
    if (_lval === "undefined") {
      return void 0;
    }
    if (_lval === "null") {
      return null;
    }
    if (_lval === "nan") {
      return Number.NaN;
    }
    if (_lval === "infinity") {
      return Number.POSITIVE_INFINITY;
    }
    if (_lval === "-infinity") {
      return Number.NEGATIVE_INFINITY;
    }
  }
  if (!JsonSigRx.test(value)) {
    if (options.strict) {
      throw new SyntaxError("[destr] Invalid JSON");
    }
    return value;
  }
  try {
    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
      if (options.strict) {
        throw new Error("[destr] Possible prototype pollution");
      }
      return JSON.parse(value, jsonParseTransform);
    }
    return JSON.parse(value);
  } catch (error) {
    if (options.strict) {
      throw error;
    }
    return value;
  }
}

function wrapToPromise(value) {
  if (!value || typeof value.then !== "function") {
    return Promise.resolve(value);
  }
  return value;
}
function asyncCall(function_, ...arguments_) {
  try {
    return wrapToPromise(function_(...arguments_));
  } catch (error) {
    return Promise.reject(error);
  }
}
function isPrimitive(value) {
  const type = typeof value;
  return value === null || type !== "object" && type !== "function";
}
function isPureObject(value) {
  const proto = Object.getPrototypeOf(value);
  return !proto || proto.isPrototypeOf(Object);
}
function stringify(value) {
  if (isPrimitive(value)) {
    return String(value);
  }
  if (isPureObject(value) || Array.isArray(value)) {
    return JSON.stringify(value);
  }
  if (typeof value.toJSON === "function") {
    return stringify(value.toJSON());
  }
  throw new Error("[unstorage] Cannot stringify value!");
}
function checkBufferSupport() {
  if (typeof Buffer === void 0) {
    throw new TypeError("[unstorage] Buffer is not supported!");
  }
}
const BASE64_PREFIX = "base64:";
function serializeRaw(value) {
  if (typeof value === "string") {
    return value;
  }
  checkBufferSupport();
  const base64 = Buffer.from(value).toString("base64");
  return BASE64_PREFIX + base64;
}
function deserializeRaw(value) {
  if (typeof value !== "string") {
    return value;
  }
  if (!value.startsWith(BASE64_PREFIX)) {
    return value;
  }
  checkBufferSupport();
  return Buffer.from(value.slice(BASE64_PREFIX.length), "base64");
}
function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}
function joinKeys(...keys) {
  return normalizeKey(keys.join(":"));
}
function normalizeBaseKey(base) {
  base = normalizeKey(base);
  return base ? base + ":" : "";
}

function defineDriver(factory) {
  return factory;
}

const DRIVER_NAME = "memory";
const memory = defineDriver(() => {
  const data = /* @__PURE__ */ new Map();
  return {
    name: DRIVER_NAME,
    options: {},
    hasItem(key) {
      return data.has(key);
    },
    getItem(key) {
      return data.get(key) ?? null;
    },
    getItemRaw(key) {
      return data.get(key) ?? null;
    },
    setItem(key, value) {
      data.set(key, value);
    },
    setItemRaw(key, value) {
      data.set(key, value);
    },
    removeItem(key) {
      data.delete(key);
    },
    getKeys() {
      return Array.from(data.keys());
    },
    clear() {
      data.clear();
    },
    dispose() {
      data.clear();
    }
  };
});

function createStorage(options = {}) {
  const context = {
    mounts: { "": options.driver || memory() },
    mountpoints: [""],
    watching: false,
    watchListeners: [],
    unwatch: {}
  };
  const getMount = (key) => {
    for (const base of context.mountpoints) {
      if (key.startsWith(base)) {
        return {
          base,
          relativeKey: key.slice(base.length),
          driver: context.mounts[base]
        };
      }
    }
    return {
      base: "",
      relativeKey: key,
      driver: context.mounts[""]
    };
  };
  const getMounts = (base, includeParent) => {
    return context.mountpoints.filter(
      (mountpoint) => mountpoint.startsWith(base) || includeParent && base.startsWith(mountpoint)
    ).map((mountpoint) => ({
      relativeBase: base.length > mountpoint.length ? base.slice(mountpoint.length) : void 0,
      mountpoint,
      driver: context.mounts[mountpoint]
    }));
  };
  const onChange = (event, key) => {
    if (!context.watching) {
      return;
    }
    key = normalizeKey(key);
    for (const listener of context.watchListeners) {
      listener(event, key);
    }
  };
  const startWatch = async () => {
    if (context.watching) {
      return;
    }
    context.watching = true;
    for (const mountpoint in context.mounts) {
      context.unwatch[mountpoint] = await watch$2(
        context.mounts[mountpoint],
        onChange,
        mountpoint
      );
    }
  };
  const stopWatch = async () => {
    if (!context.watching) {
      return;
    }
    for (const mountpoint in context.unwatch) {
      await context.unwatch[mountpoint]();
    }
    context.unwatch = {};
    context.watching = false;
  };
  const runBatch = (items, commonOptions, cb) => {
    const batches = /* @__PURE__ */ new Map();
    const getBatch = (mount) => {
      let batch = batches.get(mount.base);
      if (!batch) {
        batch = {
          driver: mount.driver,
          base: mount.base,
          items: []
        };
        batches.set(mount.base, batch);
      }
      return batch;
    };
    for (const item of items) {
      const isStringItem = typeof item === "string";
      const key = normalizeKey(isStringItem ? item : item.key);
      const value = isStringItem ? void 0 : item.value;
      const options2 = isStringItem || !item.options ? commonOptions : { ...commonOptions, ...item.options };
      const mount = getMount(key);
      getBatch(mount).items.push({
        key,
        value,
        relativeKey: mount.relativeKey,
        options: options2
      });
    }
    return Promise.all([...batches.values()].map((batch) => cb(batch))).then(
      (r) => r.flat()
    );
  };
  const storage = {
    // Item
    hasItem(key, opts = {}) {
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.hasItem, relativeKey, opts);
    },
    getItem(key, opts = {}) {
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => destr(value)
      );
    },
    getItems(items, commonOptions) {
      return runBatch(items, commonOptions, (batch) => {
        if (batch.driver.getItems) {
          return asyncCall(
            batch.driver.getItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              options: item.options
            })),
            commonOptions
          ).then(
            (r) => r.map((item) => ({
              key: joinKeys(batch.base, item.key),
              value: destr(item.value)
            }))
          );
        }
        return Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.getItem,
              item.relativeKey,
              item.options
            ).then((value) => ({
              key: item.key,
              value: destr(value)
            }));
          })
        );
      });
    },
    getItemRaw(key, opts = {}) {
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.getItemRaw) {
        return asyncCall(driver.getItemRaw, relativeKey, opts);
      }
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => deserializeRaw(value)
      );
    },
    async setItem(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key);
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.setItem) {
        return;
      }
      await asyncCall(driver.setItem, relativeKey, stringify(value), opts);
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async setItems(items, commonOptions) {
      await runBatch(items, commonOptions, async (batch) => {
        if (batch.driver.setItems) {
          return asyncCall(
            batch.driver.setItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              value: stringify(item.value),
              options: item.options
            })),
            commonOptions
          );
        }
        if (!batch.driver.setItem) {
          return;
        }
        await Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.setItem,
              item.relativeKey,
              stringify(item.value),
              item.options
            );
          })
        );
      });
    },
    async setItemRaw(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key, opts);
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.setItemRaw) {
        await asyncCall(driver.setItemRaw, relativeKey, value, opts);
      } else if (driver.setItem) {
        await asyncCall(driver.setItem, relativeKey, serializeRaw(value), opts);
      } else {
        return;
      }
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async removeItem(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { removeMeta: opts };
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.removeItem) {
        return;
      }
      await asyncCall(driver.removeItem, relativeKey, opts);
      if (opts.removeMeta || opts.removeMata) {
        await asyncCall(driver.removeItem, relativeKey + "$", opts);
      }
      if (!driver.watch) {
        onChange("remove", key);
      }
    },
    // Meta
    async getMeta(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { nativeOnly: opts };
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      const meta = /* @__PURE__ */ Object.create(null);
      if (driver.getMeta) {
        Object.assign(meta, await asyncCall(driver.getMeta, relativeKey, opts));
      }
      if (!opts.nativeOnly) {
        const value = await asyncCall(
          driver.getItem,
          relativeKey + "$",
          opts
        ).then((value_) => destr(value_));
        if (value && typeof value === "object") {
          if (typeof value.atime === "string") {
            value.atime = new Date(value.atime);
          }
          if (typeof value.mtime === "string") {
            value.mtime = new Date(value.mtime);
          }
          Object.assign(meta, value);
        }
      }
      return meta;
    },
    setMeta(key, value, opts = {}) {
      return this.setItem(key + "$", value, opts);
    },
    removeMeta(key, opts = {}) {
      return this.removeItem(key + "$", opts);
    },
    // Keys
    async getKeys(base, opts = {}) {
      base = normalizeBaseKey(base);
      const mounts = getMounts(base, true);
      let maskedMounts = [];
      const allKeys = [];
      for (const mount of mounts) {
        const rawKeys = await asyncCall(
          mount.driver.getKeys,
          mount.relativeBase,
          opts
        );
        const keys = rawKeys.map((key) => mount.mountpoint + normalizeKey(key)).filter((key) => !maskedMounts.some((p) => key.startsWith(p)));
        allKeys.push(...keys);
        maskedMounts = [
          mount.mountpoint,
          ...maskedMounts.filter((p) => !p.startsWith(mount.mountpoint))
        ];
      }
      return base ? allKeys.filter((key) => key.startsWith(base) && !key.endsWith("$")) : allKeys.filter((key) => !key.endsWith("$"));
    },
    // Utils
    async clear(base, opts = {}) {
      base = normalizeBaseKey(base);
      await Promise.all(
        getMounts(base, false).map(async (m) => {
          if (m.driver.clear) {
            return asyncCall(m.driver.clear, m.relativeBase, opts);
          }
          if (m.driver.removeItem) {
            const keys = await m.driver.getKeys(m.relativeBase || "", opts);
            return Promise.all(
              keys.map((key) => m.driver.removeItem(key, opts))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(context.mounts).map((driver) => dispose(driver))
      );
    },
    async watch(callback) {
      await startWatch();
      context.watchListeners.push(callback);
      return async () => {
        context.watchListeners = context.watchListeners.filter(
          (listener) => listener !== callback
        );
        if (context.watchListeners.length === 0) {
          await stopWatch();
        }
      };
    },
    async unwatch() {
      context.watchListeners = [];
      await stopWatch();
    },
    // Mount
    mount(base, driver) {
      base = normalizeBaseKey(base);
      if (base && context.mounts[base]) {
        throw new Error(`already mounted at ${base}`);
      }
      if (base) {
        context.mountpoints.push(base);
        context.mountpoints.sort((a, b) => b.length - a.length);
      }
      context.mounts[base] = driver;
      if (context.watching) {
        Promise.resolve(watch$2(driver, onChange, base)).then((unwatcher) => {
          context.unwatch[base] = unwatcher;
        }).catch(console.error);
      }
      return storage;
    },
    async unmount(base, _dispose = true) {
      base = normalizeBaseKey(base);
      if (!base || !context.mounts[base]) {
        return;
      }
      if (context.watching && base in context.unwatch) {
        context.unwatch[base]();
        delete context.unwatch[base];
      }
      if (_dispose) {
        await dispose(context.mounts[base]);
      }
      context.mountpoints = context.mountpoints.filter((key) => key !== base);
      delete context.mounts[base];
    },
    getMount(key = "") {
      key = normalizeKey(key) + ":";
      const m = getMount(key);
      return {
        driver: m.driver,
        base: m.base
      };
    },
    getMounts(base = "", opts = {}) {
      base = normalizeKey(base);
      const mounts = getMounts(base, opts.parents);
      return mounts.map((m) => ({
        driver: m.driver,
        base: m.mountpoint
      }));
    }
  };
  return storage;
}
function watch$2(driver, onChange, base) {
  return driver.watch ? driver.watch((event, key) => onChange(event, base + key)) : () => {
  };
}
async function dispose(driver) {
  if (typeof driver.dispose === "function") {
    await asyncCall(driver.dispose);
  }
}

function promisifyRequest(request) {
    return new Promise((resolve, reject) => {
        // @ts-ignore - file size hacks
        request.oncomplete = request.onsuccess = () => resolve(request.result);
        // @ts-ignore - file size hacks
        request.onabort = request.onerror = () => reject(request.error);
    });
}
function createStore(dbName, storeName) {
    const request = indexedDB.open(dbName);
    request.onupgradeneeded = () => request.result.createObjectStore(storeName);
    const dbp = promisifyRequest(request);
    return (txMode, callback) => dbp.then((db) => callback(db.transaction(storeName, txMode).objectStore(storeName)));
}
let defaultGetStoreFunc;
function defaultGetStore() {
    if (!defaultGetStoreFunc) {
        defaultGetStoreFunc = createStore('keyval-store', 'keyval');
    }
    return defaultGetStoreFunc;
}
/**
 * Get a value by its key.
 *
 * @param key
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function get(key, customStore = defaultGetStore()) {
    return customStore('readonly', (store) => promisifyRequest(store.get(key)));
}
/**
 * Set a value with a key.
 *
 * @param key
 * @param value
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function set$1(key, value, customStore = defaultGetStore()) {
    return customStore('readwrite', (store) => {
        store.put(value, key);
        return promisifyRequest(store.transaction);
    });
}
/**
 * Delete a particular key from the store.
 *
 * @param key
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function del(key, customStore = defaultGetStore()) {
    return customStore('readwrite', (store) => {
        store.delete(key);
        return promisifyRequest(store.transaction);
    });
}
/**
 * Clear all values in the store.
 *
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function clear(customStore = defaultGetStore()) {
    return customStore('readwrite', (store) => {
        store.clear();
        return promisifyRequest(store.transaction);
    });
}
function eachCursor(store, callback) {
    store.openCursor().onsuccess = function () {
        if (!this.result)
            return;
        callback(this.result);
        this.result.continue();
    };
    return promisifyRequest(store.transaction);
}
/**
 * Get all keys in the store.
 *
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function keys(customStore = defaultGetStore()) {
    return customStore('readonly', (store) => {
        // Fast path for modern browsers
        if (store.getAllKeys) {
            return promisifyRequest(store.getAllKeys());
        }
        const items = [];
        return eachCursor(store, (cursor) => items.push(cursor.key)).then(() => items);
    });
}

const JSONStringify = data => JSON.stringify(data, (_, value) => typeof value === "bigint" ? value.toString() + "n" : value);
const JSONParse = json => {
    const numbersBiggerThanMaxInt = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g;
    const serializedData = json.replace(numbersBiggerThanMaxInt, "$1\"$2n\"$3");
    return JSON.parse(serializedData, (_, value) => {
        const isCustomFormatBigInt = typeof value === "string" && value.match(/^\d+n$/);
        if (isCustomFormatBigInt)
            return BigInt(value.substring(0, value.length - 1));
        return value;
    });
};
function safeJsonParse(value) {
    if (typeof value !== "string") {
        throw new Error(`Cannot safe json parse value of type ${typeof value}`);
    }
    try {
        return JSONParse(value);
    }
    catch (_a) {
        return value;
    }
}
function safeJsonStringify(value) {
    return typeof value === "string" ? value : JSONStringify(value) || "";
}

const x$1="idb-keyval";var z$2=(i={})=>{const t=i.base&&i.base.length>0?`${i.base}:`:"",e=s=>t+s;let n;return i.dbName&&i.storeName&&(n=createStore(i.dbName,i.storeName)),{name:x$1,options:i,async hasItem(s){return !(typeof await get(e(s),n)>"u")},async getItem(s){return await get(e(s),n)??null},setItem(s,a){return set$1(e(s),a,n)},removeItem(s){return del(e(s),n)},getKeys(){return keys(n)},clear(){return clear(n)}}};const D$1="WALLET_CONNECT_V2_INDEXED_DB",E$3="keyvaluestorage";let _$1 = class _{constructor(){this.indexedDb=createStorage({driver:z$2({dbName:D$1,storeName:E$3})});}async getKeys(){return this.indexedDb.getKeys()}async getEntries(){return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map(t=>[t.key,t.value])}async getItem(t){const e=await this.indexedDb.getItem(t);if(e!==null)return e}async setItem(t,e){await this.indexedDb.setItem(t,safeJsonStringify(e));}async removeItem(t){await this.indexedDb.removeItem(t);}};var l$1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global$1<"u"?global$1:typeof self<"u"?self:{},c$1={exports:{}};(function(){let i;function t(){}i=t,i.prototype.getItem=function(e){return this.hasOwnProperty(e)?String(this[e]):null},i.prototype.setItem=function(e,n){this[e]=String(n);},i.prototype.removeItem=function(e){delete this[e];},i.prototype.clear=function(){const e=this;Object.keys(e).forEach(function(n){e[n]=void 0,delete e[n];});},i.prototype.key=function(e){return e=e||0,Object.keys(this)[e]},i.prototype.__defineGetter__("length",function(){return Object.keys(this).length}),typeof l$1<"u"&&l$1.localStorage?c$1.exports=l$1.localStorage:typeof window<"u"&&window.localStorage?c$1.exports=window.localStorage:c$1.exports=new t;})();function k$1(i){var t;return [i[0],safeJsonParse((t=i[1])!=null?t:"")]}let K$2 = class K{constructor(){this.localStorage=c$1.exports;}async getKeys(){return Object.keys(this.localStorage)}async getEntries(){return Object.entries(this.localStorage).map(k$1)}async getItem(t){const e=this.localStorage.getItem(t);if(e!==null)return safeJsonParse(e)}async setItem(t,e){this.localStorage.setItem(t,safeJsonStringify(e));}async removeItem(t){this.localStorage.removeItem(t);}};const N="wc_storage_version",y$3=1,O$1=async(i,t,e)=>{const n=N,s=await t.getItem(n);if(s&&s>=y$3){e(t);return}const a=await i.getKeys();if(!a.length){e(t);return}const m=[];for(;a.length;){const r=a.shift();if(!r)continue;const o=r.toLowerCase();if(o.includes("wc@")||o.includes("walletconnect")||o.includes("wc_")||o.includes("wallet_connect")){const f=await i.getItem(r);await t.setItem(r,f),m.push(r);}}await t.setItem(n,y$3),e(t),j$2(i,m);},j$2=async(i,t)=>{t.length&&t.forEach(async e=>{await i.removeItem(e);});};let h$2 = class h{constructor(){this.initialized=!1,this.setInitialized=e=>{this.storage=e,this.initialized=!0;};const t=new K$2;this.storage=t;try{const e=new _$1;O$1(t,e,this.setInitialized);}catch{this.initialized=!0;}}async getKeys(){return await this.initialize(),this.storage.getKeys()}async getEntries(){return await this.initialize(),this.storage.getEntries()}async getItem(t){return await this.initialize(),this.storage.getItem(t)}async setItem(t,e){return await this.initialize(),this.storage.setItem(t,e)}async removeItem(t){return await this.initialize(),this.storage.removeItem(t)}async initialize(){this.initialized||await new Promise(t=>{const e=setInterval(()=>{this.initialized&&(clearInterval(e),t());},20);});}};

var cjs$3 = {};

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
/* global Reflect, Promise, SuppressedError, Symbol */

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

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
}
function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
}
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
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

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
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

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray$1(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
    function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
    function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}
var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
        env.stack.push({ value: value, dispose: dispose, async: async });
    }
    else if (async) {
        env.stack.push({ async: true });
    }
    return value;

}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    function next() {
        while (env.stack.length) {
            var rec = env.stack.pop();
            try {
                var result = rec.dispose && rec.dispose.call(rec.value);
                if (rec.async) return Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
            }
            catch (e) {
                fail(e);
            }
        }
        if (env.hasError) throw env.error;
    }
    return next();
}

var tslib_es6 = {
    __extends: __extends,
    __assign: __assign,
    __rest: __rest,
    __decorate: __decorate,
    __param: __param,
    __metadata: __metadata,
    __awaiter: __awaiter,
    __generator: __generator,
    __createBinding: __createBinding,
    __exportStar: __exportStar,
    __values: __values,
    __read: __read,
    __spread: __spread,
    __spreadArrays: __spreadArrays,
    __spreadArray: __spreadArray$1,
    __await: __await,
    __asyncGenerator: __asyncGenerator,
    __asyncDelegator: __asyncDelegator,
    __asyncValues: __asyncValues,
    __makeTemplateObject: __makeTemplateObject,
    __importStar: __importStar,
    __importDefault: __importDefault,
    __classPrivateFieldGet: __classPrivateFieldGet,
    __classPrivateFieldSet: __classPrivateFieldSet,
    __classPrivateFieldIn: __classPrivateFieldIn,
    __addDisposableResource: __addDisposableResource,
    __disposeResources: __disposeResources,
};

var tslib_es6$1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	__addDisposableResource: __addDisposableResource,
	get __assign () { return __assign; },
	__asyncDelegator: __asyncDelegator,
	__asyncGenerator: __asyncGenerator,
	__asyncValues: __asyncValues,
	__await: __await,
	__awaiter: __awaiter,
	__classPrivateFieldGet: __classPrivateFieldGet,
	__classPrivateFieldIn: __classPrivateFieldIn,
	__classPrivateFieldSet: __classPrivateFieldSet,
	__createBinding: __createBinding,
	__decorate: __decorate,
	__disposeResources: __disposeResources,
	__esDecorate: __esDecorate,
	__exportStar: __exportStar,
	__extends: __extends,
	__generator: __generator,
	__importDefault: __importDefault,
	__importStar: __importStar,
	__makeTemplateObject: __makeTemplateObject,
	__metadata: __metadata,
	__param: __param,
	__propKey: __propKey,
	__read: __read,
	__rest: __rest,
	__runInitializers: __runInitializers,
	__setFunctionName: __setFunctionName,
	__spread: __spread,
	__spreadArray: __spreadArray$1,
	__spreadArrays: __spreadArrays,
	__values: __values,
	default: tslib_es6
});

var require$$0$1 = /*@__PURE__*/getAugmentedNamespace(tslib_es6$1);

var utils = {};

var delay = {};

var hasRequiredDelay;

function requireDelay () {
	if (hasRequiredDelay) return delay;
	hasRequiredDelay = 1;
	Object.defineProperty(delay, "__esModule", { value: true });
	delay.delay = void 0;
	function delay$1(timeout) {
	    return new Promise(resolve => {
	        setTimeout(() => {
	            resolve(true);
	        }, timeout);
	    });
	}
	delay.delay = delay$1;
	
	return delay;
}

var convert = {};

var constants = {};

var misc = {};

var hasRequiredMisc;

function requireMisc () {
	if (hasRequiredMisc) return misc;
	hasRequiredMisc = 1;
	Object.defineProperty(misc, "__esModule", { value: true });
	misc.ONE_THOUSAND = misc.ONE_HUNDRED = void 0;
	misc.ONE_HUNDRED = 100;
	misc.ONE_THOUSAND = 1000;
	
	return misc;
}

var time = {};

var hasRequiredTime;

function requireTime () {
	if (hasRequiredTime) return time;
	hasRequiredTime = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.ONE_YEAR = exports.FOUR_WEEKS = exports.THREE_WEEKS = exports.TWO_WEEKS = exports.ONE_WEEK = exports.THIRTY_DAYS = exports.SEVEN_DAYS = exports.FIVE_DAYS = exports.THREE_DAYS = exports.ONE_DAY = exports.TWENTY_FOUR_HOURS = exports.TWELVE_HOURS = exports.SIX_HOURS = exports.THREE_HOURS = exports.ONE_HOUR = exports.SIXTY_MINUTES = exports.THIRTY_MINUTES = exports.TEN_MINUTES = exports.FIVE_MINUTES = exports.ONE_MINUTE = exports.SIXTY_SECONDS = exports.THIRTY_SECONDS = exports.TEN_SECONDS = exports.FIVE_SECONDS = exports.ONE_SECOND = void 0;
		exports.ONE_SECOND = 1;
		exports.FIVE_SECONDS = 5;
		exports.TEN_SECONDS = 10;
		exports.THIRTY_SECONDS = 30;
		exports.SIXTY_SECONDS = 60;
		exports.ONE_MINUTE = exports.SIXTY_SECONDS;
		exports.FIVE_MINUTES = exports.ONE_MINUTE * 5;
		exports.TEN_MINUTES = exports.ONE_MINUTE * 10;
		exports.THIRTY_MINUTES = exports.ONE_MINUTE * 30;
		exports.SIXTY_MINUTES = exports.ONE_MINUTE * 60;
		exports.ONE_HOUR = exports.SIXTY_MINUTES;
		exports.THREE_HOURS = exports.ONE_HOUR * 3;
		exports.SIX_HOURS = exports.ONE_HOUR * 6;
		exports.TWELVE_HOURS = exports.ONE_HOUR * 12;
		exports.TWENTY_FOUR_HOURS = exports.ONE_HOUR * 24;
		exports.ONE_DAY = exports.TWENTY_FOUR_HOURS;
		exports.THREE_DAYS = exports.ONE_DAY * 3;
		exports.FIVE_DAYS = exports.ONE_DAY * 5;
		exports.SEVEN_DAYS = exports.ONE_DAY * 7;
		exports.THIRTY_DAYS = exports.ONE_DAY * 30;
		exports.ONE_WEEK = exports.SEVEN_DAYS;
		exports.TWO_WEEKS = exports.ONE_WEEK * 2;
		exports.THREE_WEEKS = exports.ONE_WEEK * 3;
		exports.FOUR_WEEKS = exports.ONE_WEEK * 4;
		exports.ONE_YEAR = exports.ONE_DAY * 365;
		
	} (time));
	return time;
}

var hasRequiredConstants;

function requireConstants () {
	if (hasRequiredConstants) return constants;
	hasRequiredConstants = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		const tslib_1 = require$$0$1;
		tslib_1.__exportStar(requireMisc(), exports);
		tslib_1.__exportStar(requireTime(), exports);
		
	} (constants));
	return constants;
}

var hasRequiredConvert;

function requireConvert () {
	if (hasRequiredConvert) return convert;
	hasRequiredConvert = 1;
	Object.defineProperty(convert, "__esModule", { value: true });
	convert.fromMiliseconds = convert.toMiliseconds = void 0;
	const constants_1 = requireConstants();
	function toMiliseconds(seconds) {
	    return seconds * constants_1.ONE_THOUSAND;
	}
	convert.toMiliseconds = toMiliseconds;
	function fromMiliseconds(miliseconds) {
	    return Math.floor(miliseconds / constants_1.ONE_THOUSAND);
	}
	convert.fromMiliseconds = fromMiliseconds;
	
	return convert;
}

var hasRequiredUtils;

function requireUtils () {
	if (hasRequiredUtils) return utils;
	hasRequiredUtils = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		const tslib_1 = require$$0$1;
		tslib_1.__exportStar(requireDelay(), exports);
		tslib_1.__exportStar(requireConvert(), exports);
		
	} (utils));
	return utils;
}

var watch$1 = {};

var hasRequiredWatch$1;

function requireWatch$1 () {
	if (hasRequiredWatch$1) return watch$1;
	hasRequiredWatch$1 = 1;
	Object.defineProperty(watch$1, "__esModule", { value: true });
	watch$1.Watch = void 0;
	class Watch {
	    constructor() {
	        this.timestamps = new Map();
	    }
	    start(label) {
	        if (this.timestamps.has(label)) {
	            throw new Error(`Watch already started for label: ${label}`);
	        }
	        this.timestamps.set(label, { started: Date.now() });
	    }
	    stop(label) {
	        const timestamp = this.get(label);
	        if (typeof timestamp.elapsed !== "undefined") {
	            throw new Error(`Watch already stopped for label: ${label}`);
	        }
	        const elapsed = Date.now() - timestamp.started;
	        this.timestamps.set(label, { started: timestamp.started, elapsed });
	    }
	    get(label) {
	        const timestamp = this.timestamps.get(label);
	        if (typeof timestamp === "undefined") {
	            throw new Error(`No timestamp found for label: ${label}`);
	        }
	        return timestamp;
	    }
	    elapsed(label) {
	        const timestamp = this.get(label);
	        const elapsed = timestamp.elapsed || Date.now() - timestamp.started;
	        return elapsed;
	    }
	}
	watch$1.Watch = Watch;
	watch$1.default = Watch;
	
	return watch$1;
}

var types = {};

var watch = {};

var hasRequiredWatch;

function requireWatch () {
	if (hasRequiredWatch) return watch;
	hasRequiredWatch = 1;
	Object.defineProperty(watch, "__esModule", { value: true });
	watch.IWatch = void 0;
	class IWatch {
	}
	watch.IWatch = IWatch;
	
	return watch;
}

var hasRequiredTypes;

function requireTypes () {
	if (hasRequiredTypes) return types;
	hasRequiredTypes = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		const tslib_1 = require$$0$1;
		tslib_1.__exportStar(requireWatch(), exports);
		
	} (types));
	return types;
}

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = require$$0$1;
	tslib_1.__exportStar(requireUtils(), exports);
	tslib_1.__exportStar(requireWatch$1(), exports);
	tslib_1.__exportStar(requireTypes(), exports);
	tslib_1.__exportStar(requireConstants(), exports);
	
} (cjs$3));

class IEvents {
}

let n$3 = class n extends IEvents{constructor(e){super();}};const s=cjs$3.FIVE_SECONDS,r$1={pulse:"heartbeat_pulse"};let i$1 = class i extends n$3{constructor(e){super(e),this.events=new EventEmitter,this.interval=s,this.interval=e?.interval||s;}static async init(e){const t=new i(e);return await t.init(),t}async init(){await this.initialize();}stop(){clearInterval(this.intervalRef);}on(e,t){this.events.on(e,t);}once(e,t){this.events.once(e,t);}off(e,t){this.events.off(e,t);}removeListener(e,t){this.events.removeListener(e,t);}async initialize(){this.intervalRef=setInterval(()=>this.pulse(),cjs$3.toMiliseconds(this.interval));}pulse(){this.events.emit(r$1.pulse);}};

function tryStringify (o) {
  try { return JSON.stringify(o) } catch(e) { return '"[Circular]"' }
}

var quickFormatUnescaped = format$1;

function format$1(f, args, opts) {
  var ss = (opts && opts.stringify) || tryStringify;
  var offset = 1;
  if (typeof f === 'object' && f !== null) {
    var len = args.length + offset;
    if (len === 1) return f
    var objects = new Array(len);
    objects[0] = ss(f);
    for (var index = 1; index < len; index++) {
      objects[index] = ss(args[index]);
    }
    return objects.join(' ')
  }
  if (typeof f !== 'string') {
    return f
  }
  var argLen = args.length;
  if (argLen === 0) return f
  var str = '';
  var a = 1 - offset;
  var lastPos = -1;
  var flen = (f && f.length) || 0;
  for (var i = 0; i < flen;) {
    if (f.charCodeAt(i) === 37 && i + 1 < flen) {
      lastPos = lastPos > -1 ? lastPos : 0;
      switch (f.charCodeAt(i + 1)) {
        case 100: // 'd'
        case 102: // 'f'
          if (a >= argLen)
            break
          if (args[a] == null)  break
          if (lastPos < i)
            str += f.slice(lastPos, i);
          str += Number(args[a]);
          lastPos = i + 2;
          i++;
          break
        case 105: // 'i'
          if (a >= argLen)
            break
          if (args[a] == null)  break
          if (lastPos < i)
            str += f.slice(lastPos, i);
          str += Math.floor(Number(args[a]));
          lastPos = i + 2;
          i++;
          break
        case 79: // 'O'
        case 111: // 'o'
        case 106: // 'j'
          if (a >= argLen)
            break
          if (args[a] === undefined) break
          if (lastPos < i)
            str += f.slice(lastPos, i);
          var type = typeof args[a];
          if (type === 'string') {
            str += '\'' + args[a] + '\'';
            lastPos = i + 2;
            i++;
            break
          }
          if (type === 'function') {
            str += args[a].name || '<anonymous>';
            lastPos = i + 2;
            i++;
            break
          }
          str += ss(args[a]);
          lastPos = i + 2;
          i++;
          break
        case 115: // 's'
          if (a >= argLen)
            break
          if (lastPos < i)
            str += f.slice(lastPos, i);
          str += String(args[a]);
          lastPos = i + 2;
          i++;
          break
        case 37: // '%'
          if (lastPos < i)
            str += f.slice(lastPos, i);
          str += '%';
          lastPos = i + 2;
          i++;
          a--;
          break
      }
      ++a;
    }
    ++i;
  }
  if (lastPos === -1)
    return f
  else if (lastPos < flen) {
    str += f.slice(lastPos);
  }

  return str
}

const format = quickFormatUnescaped;

var browser$2 = pino;

const _console = pfGlobalThisOrFallback().console || {};
const stdSerializers = {
  mapHttpRequest: mock,
  mapHttpResponse: mock,
  wrapRequestSerializer: passthrough,
  wrapResponseSerializer: passthrough,
  wrapErrorSerializer: passthrough,
  req: mock,
  res: mock,
  err: asErrValue
};

function shouldSerialize (serialize, serializers) {
  if (Array.isArray(serialize)) {
    const hasToFilter = serialize.filter(function (k) {
      return k !== '!stdSerializers.err'
    });
    return hasToFilter
  } else if (serialize === true) {
    return Object.keys(serializers)
  }

  return false
}

function pino (opts) {
  opts = opts || {};
  opts.browser = opts.browser || {};

  const transmit = opts.browser.transmit;
  if (transmit && typeof transmit.send !== 'function') { throw Error('pino: transmit option must have a send function') }

  const proto = opts.browser.write || _console;
  if (opts.browser.write) opts.browser.asObject = true;
  const serializers = opts.serializers || {};
  const serialize = shouldSerialize(opts.browser.serialize, serializers);
  let stdErrSerialize = opts.browser.serialize;

  if (
    Array.isArray(opts.browser.serialize) &&
    opts.browser.serialize.indexOf('!stdSerializers.err') > -1
  ) stdErrSerialize = false;

  const levels = ['error', 'fatal', 'warn', 'info', 'debug', 'trace'];

  if (typeof proto === 'function') {
    proto.error = proto.fatal = proto.warn =
    proto.info = proto.debug = proto.trace = proto;
  }
  if (opts.enabled === false) opts.level = 'silent';
  const level = opts.level || 'info';
  const logger = Object.create(proto);
  if (!logger.log) logger.log = noop;

  Object.defineProperty(logger, 'levelVal', {
    get: getLevelVal
  });
  Object.defineProperty(logger, 'level', {
    get: getLevel,
    set: setLevel
  });

  const setOpts = {
    transmit,
    serialize,
    asObject: opts.browser.asObject,
    levels,
    timestamp: getTimeFunction(opts)
  };
  logger.levels = pino.levels;
  logger.level = level;

  logger.setMaxListeners = logger.getMaxListeners =
  logger.emit = logger.addListener = logger.on =
  logger.prependListener = logger.once =
  logger.prependOnceListener = logger.removeListener =
  logger.removeAllListeners = logger.listeners =
  logger.listenerCount = logger.eventNames =
  logger.write = logger.flush = noop;
  logger.serializers = serializers;
  logger._serialize = serialize;
  logger._stdErrSerialize = stdErrSerialize;
  logger.child = child;

  if (transmit) logger._logEvent = createLogEventShape();

  function getLevelVal () {
    return this.level === 'silent'
      ? Infinity
      : this.levels.values[this.level]
  }

  function getLevel () {
    return this._level
  }
  function setLevel (level) {
    if (level !== 'silent' && !this.levels.values[level]) {
      throw Error('unknown level ' + level)
    }
    this._level = level;

    set(setOpts, logger, 'error', 'log'); // <-- must stay first
    set(setOpts, logger, 'fatal', 'error');
    set(setOpts, logger, 'warn', 'error');
    set(setOpts, logger, 'info', 'log');
    set(setOpts, logger, 'debug', 'log');
    set(setOpts, logger, 'trace', 'log');
  }

  function child (bindings, childOptions) {
    if (!bindings) {
      throw new Error('missing bindings for child Pino')
    }
    childOptions = childOptions || {};
    if (serialize && bindings.serializers) {
      childOptions.serializers = bindings.serializers;
    }
    const childOptionsSerializers = childOptions.serializers;
    if (serialize && childOptionsSerializers) {
      var childSerializers = Object.assign({}, serializers, childOptionsSerializers);
      var childSerialize = opts.browser.serialize === true
        ? Object.keys(childSerializers)
        : serialize;
      delete bindings.serializers;
      applySerializers([bindings], childSerialize, childSerializers, this._stdErrSerialize);
    }
    function Child (parent) {
      this._childLevel = (parent._childLevel | 0) + 1;
      this.error = bind(parent, bindings, 'error');
      this.fatal = bind(parent, bindings, 'fatal');
      this.warn = bind(parent, bindings, 'warn');
      this.info = bind(parent, bindings, 'info');
      this.debug = bind(parent, bindings, 'debug');
      this.trace = bind(parent, bindings, 'trace');
      if (childSerializers) {
        this.serializers = childSerializers;
        this._serialize = childSerialize;
      }
      if (transmit) {
        this._logEvent = createLogEventShape(
          [].concat(parent._logEvent.bindings, bindings)
        );
      }
    }
    Child.prototype = this;
    return new Child(this)
  }
  return logger
}

pino.levels = {
  values: {
    fatal: 60,
    error: 50,
    warn: 40,
    info: 30,
    debug: 20,
    trace: 10
  },
  labels: {
    10: 'trace',
    20: 'debug',
    30: 'info',
    40: 'warn',
    50: 'error',
    60: 'fatal'
  }
};

pino.stdSerializers = stdSerializers;
pino.stdTimeFunctions = Object.assign({}, { nullTime, epochTime, unixTime, isoTime });

function set (opts, logger, level, fallback) {
  const proto = Object.getPrototypeOf(logger);
  logger[level] = logger.levelVal > logger.levels.values[level]
    ? noop
    : (proto[level] ? proto[level] : (_console[level] || _console[fallback] || noop));

  wrap(opts, logger, level);
}

function wrap (opts, logger, level) {
  if (!opts.transmit && logger[level] === noop) return

  logger[level] = (function (write) {
    return function LOG () {
      const ts = opts.timestamp();
      const args = new Array(arguments.length);
      const proto = (Object.getPrototypeOf && Object.getPrototypeOf(this) === _console) ? _console : this;
      for (var i = 0; i < args.length; i++) args[i] = arguments[i];

      if (opts.serialize && !opts.asObject) {
        applySerializers(args, this._serialize, this.serializers, this._stdErrSerialize);
      }
      if (opts.asObject) write.call(proto, asObject(this, level, args, ts));
      else write.apply(proto, args);

      if (opts.transmit) {
        const transmitLevel = opts.transmit.level || logger.level;
        const transmitValue = pino.levels.values[transmitLevel];
        const methodValue = pino.levels.values[level];
        if (methodValue < transmitValue) return
        transmit(this, {
          ts,
          methodLevel: level,
          methodValue,
          transmitLevel,
          transmitValue: pino.levels.values[opts.transmit.level || logger.level],
          send: opts.transmit.send,
          val: logger.levelVal
        }, args);
      }
    }
  })(logger[level]);
}

function asObject (logger, level, args, ts) {
  if (logger._serialize) applySerializers(args, logger._serialize, logger.serializers, logger._stdErrSerialize);
  const argsCloned = args.slice();
  let msg = argsCloned[0];
  const o = {};
  if (ts) {
    o.time = ts;
  }
  o.level = pino.levels.values[level];
  let lvl = (logger._childLevel | 0) + 1;
  if (lvl < 1) lvl = 1;
  // deliberate, catching objects, arrays
  if (msg !== null && typeof msg === 'object') {
    while (lvl-- && typeof argsCloned[0] === 'object') {
      Object.assign(o, argsCloned.shift());
    }
    msg = argsCloned.length ? format(argsCloned.shift(), argsCloned) : undefined;
  } else if (typeof msg === 'string') msg = format(argsCloned.shift(), argsCloned);
  if (msg !== undefined) o.msg = msg;
  return o
}

function applySerializers (args, serialize, serializers, stdErrSerialize) {
  for (const i in args) {
    if (stdErrSerialize && args[i] instanceof Error) {
      args[i] = pino.stdSerializers.err(args[i]);
    } else if (typeof args[i] === 'object' && !Array.isArray(args[i])) {
      for (const k in args[i]) {
        if (serialize && serialize.indexOf(k) > -1 && k in serializers) {
          args[i][k] = serializers[k](args[i][k]);
        }
      }
    }
  }
}

function bind (parent, bindings, level) {
  return function () {
    const args = new Array(1 + arguments.length);
    args[0] = bindings;
    for (var i = 1; i < args.length; i++) {
      args[i] = arguments[i - 1];
    }
    return parent[level].apply(this, args)
  }
}

function transmit (logger, opts, args) {
  const send = opts.send;
  const ts = opts.ts;
  const methodLevel = opts.methodLevel;
  const methodValue = opts.methodValue;
  const val = opts.val;
  const bindings = logger._logEvent.bindings;

  applySerializers(
    args,
    logger._serialize || Object.keys(logger.serializers),
    logger.serializers,
    logger._stdErrSerialize === undefined ? true : logger._stdErrSerialize
  );
  logger._logEvent.ts = ts;
  logger._logEvent.messages = args.filter(function (arg) {
    // bindings can only be objects, so reference equality check via indexOf is fine
    return bindings.indexOf(arg) === -1
  });

  logger._logEvent.level.label = methodLevel;
  logger._logEvent.level.value = methodValue;

  send(methodLevel, logger._logEvent, val);

  logger._logEvent = createLogEventShape(bindings);
}

function createLogEventShape (bindings) {
  return {
    ts: 0,
    messages: [],
    bindings: bindings || [],
    level: { label: '', value: 0 }
  }
}

function asErrValue (err) {
  const obj = {
    type: err.constructor.name,
    msg: err.message,
    stack: err.stack
  };
  for (const key in err) {
    if (obj[key] === undefined) {
      obj[key] = err[key];
    }
  }
  return obj
}

function getTimeFunction (opts) {
  if (typeof opts.timestamp === 'function') {
    return opts.timestamp
  }
  if (opts.timestamp === false) {
    return nullTime
  }
  return epochTime
}

function mock () { return {} }
function passthrough (a) { return a }
function noop () {}

function nullTime () { return false }
function epochTime () { return Date.now() }
function unixTime () { return Math.round(Date.now() / 1000.0) }
function isoTime () { return new Date(Date.now()).toISOString() } // using Date.now() for testability

/* eslint-disable */
/* istanbul ignore next */
function pfGlobalThisOrFallback () {
  function defd (o) { return typeof o !== 'undefined' && o }
  try {
    if (typeof globalThis !== 'undefined') return globalThis
    Object.defineProperty(Object.prototype, 'globalThis', {
      get: function () {
        delete Object.prototype.globalThis;
        return (this.globalThis = this)
      },
      configurable: true
    });
    return globalThis
  } catch (e) {
    return defd(self) || defd(window) || defd(this) || {}
  }
}
/* eslint-enable */

var ot$1 = /*@__PURE__*/getDefaultExportFromCjs(browser$2);

const c={level:"info"},n$2="custom_context",l=1e3*1024;class O{constructor(e){this.nodeValue=e,this.sizeInBytes=new TextEncoder().encode(this.nodeValue).length,this.next=null;}get value(){return this.nodeValue}get size(){return this.sizeInBytes}}let d$1 = class d{constructor(e){this.head=null,this.tail=null,this.lengthInNodes=0,this.maxSizeInBytes=e,this.sizeInBytes=0;}append(e){const t=new O(e);if(t.size>this.maxSizeInBytes)throw new Error(`[LinkedList] Value too big to insert into list: ${e} with size ${t.size}`);for(;this.size+t.size>this.maxSizeInBytes;)this.shift();this.head?(this.tail&&(this.tail.next=t),this.tail=t):(this.head=t,this.tail=t),this.lengthInNodes++,this.sizeInBytes+=t.size;}shift(){if(!this.head)return;const e=this.head;this.head=this.head.next,this.head||(this.tail=null),this.lengthInNodes--,this.sizeInBytes-=e.size;}toArray(){const e=[];let t=this.head;for(;t!==null;)e.push(t.value),t=t.next;return e}get length(){return this.lengthInNodes}get size(){return this.sizeInBytes}toOrderedArray(){return Array.from(this)}[Symbol.iterator](){let e=this.head;return {next:()=>{if(!e)return {done:!0,value:null};const t=e.value;return e=e.next,{done:!1,value:t}}}}};let L$2 = class L{constructor(e,t=l){this.level=e??"error",this.levelValue=browser$2.levels.values[this.level],this.MAX_LOG_SIZE_IN_BYTES=t,this.logs=new d$1(this.MAX_LOG_SIZE_IN_BYTES);}forwardToConsole(e,t){t===browser$2.levels.values.error?console.error(e):t===browser$2.levels.values.warn?console.warn(e):t===browser$2.levels.values.debug?console.debug(e):t===browser$2.levels.values.trace?console.trace(e):console.log(e);}appendToLogs(e){this.logs.append(safeJsonStringify({timestamp:new Date().toISOString(),log:e}));const t=typeof e=="string"?JSON.parse(e).level:e.level;t>=this.levelValue&&this.forwardToConsole(e,t);}getLogs(){return this.logs}clearLogs(){this.logs=new d$1(this.MAX_LOG_SIZE_IN_BYTES);}getLogArray(){return Array.from(this.logs)}logsToBlob(e){const t=this.getLogArray();return t.push(safeJsonStringify({extraMetadata:e})),new Blob(t,{type:"application/json"})}};let m$1 = class m{constructor(e,t=l){this.baseChunkLogger=new L$2(e,t);}write(e){this.baseChunkLogger.appendToLogs(e);}getLogs(){return this.baseChunkLogger.getLogs()}clearLogs(){this.baseChunkLogger.clearLogs();}getLogArray(){return this.baseChunkLogger.getLogArray()}logsToBlob(e){return this.baseChunkLogger.logsToBlob(e)}downloadLogsBlobInBrowser(e){const t=URL.createObjectURL(this.logsToBlob(e)),o=document.createElement("a");o.href=t,o.download=`walletconnect-logs-${new Date().toISOString()}.txt`,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(t);}};let B$1 = class B{constructor(e,t=l){this.baseChunkLogger=new L$2(e,t);}write(e){this.baseChunkLogger.appendToLogs(e);}getLogs(){return this.baseChunkLogger.getLogs()}clearLogs(){this.baseChunkLogger.clearLogs();}getLogArray(){return this.baseChunkLogger.getLogArray()}logsToBlob(e){return this.baseChunkLogger.logsToBlob(e)}};var x=Object.defineProperty,S$2=Object.defineProperties,_=Object.getOwnPropertyDescriptors,p$1=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,z$1=Object.prototype.propertyIsEnumerable,f$2=(r,e,t)=>e in r?x(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,i=(r,e)=>{for(var t in e||(e={}))T.call(e,t)&&f$2(r,t,e[t]);if(p$1)for(var t of p$1(e))z$1.call(e,t)&&f$2(r,t,e[t]);return r},g$1=(r,e)=>S$2(r,_(e));function k(r){return g$1(i({},r),{level:r?.level||c.level})}function v$1(r,e=n$2){return r[e]||""}function b$2(r,e,t=n$2){return r[t]=e,r}function y$2(r,e=n$2){let t="";return typeof r.bindings>"u"?t=v$1(r,e):t=r.bindings().context||"",t}function w$2(r,e,t=n$2){const o=y$2(r,t);return o.trim()?`${o}/${e}`:e}function E$2(r,e,t=n$2){const o=w$2(r,e,t),a=r.child({context:o});return b$2(a,o,t)}function C$2(r){var e,t;const o=new m$1((e=r.opts)==null?void 0:e.level,r.maxSizeInBytes);return {logger:ot$1(g$1(i({},r.opts),{level:"trace",browser:g$1(i({},(t=r.opts)==null?void 0:t.browser),{write:a=>o.write(a)})})),chunkLoggerController:o}}function I$1(r){var e;const t=new B$1((e=r.opts)==null?void 0:e.level,r.maxSizeInBytes);return {logger:ot$1(g$1(i({},r.opts),{level:"trace"}),t),chunkLoggerController:t}}function A(r){return typeof r.loggerOverride<"u"&&typeof r.loggerOverride!="string"?{logger:r.loggerOverride,chunkLoggerController:null}:typeof window<"u"?C$2(r):I$1(r)}

let n$1 = class n extends IEvents{constructor(s){super(),this.opts=s,this.protocol="wc",this.version=2;}};let h$1 = class h extends IEvents{constructor(s,t){super(),this.core=s,this.logger=t,this.records=new Map;}};let a$1 = class a{constructor(s,t){this.logger=s,this.core=t;}};class u extends IEvents{constructor(s,t){super(),this.relayer=s,this.logger=t;}}class g extends IEvents{constructor(s){super();}}class p{constructor(s,t,o,M){this.core=s,this.logger=t,this.name=o;}}class d extends IEvents{constructor(s,t){super(),this.relayer=s,this.logger=t;}}let E$1 = class E extends IEvents{constructor(s,t){super(),this.core=s,this.logger=t;}};let y$1 = class y{constructor(s,t){this.projectId=s,this.logger=t;}};class v{constructor(s,t){this.projectId=s,this.logger=t;}}let b$1 = class b{constructor(s){this.opts=s,this.protocol="wc",this.version=2;}};let w$1 = class w{constructor(s){this.client=s;}};

var ed25519 = {};

var random = {};

var system = {};

var browser$1 = {};

// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(browser$1, "__esModule", { value: true });
browser$1.BrowserRandomSource = void 0;
const QUOTA = 65536;
class BrowserRandomSource {
    constructor() {
        this.isAvailable = false;
        this.isInstantiated = false;
        const browserCrypto = typeof self !== 'undefined'
            ? (self.crypto || self.msCrypto) // IE11 has msCrypto
            : null;
        if (browserCrypto && browserCrypto.getRandomValues !== undefined) {
            this._crypto = browserCrypto;
            this.isAvailable = true;
            this.isInstantiated = true;
        }
    }
    randomBytes(length) {
        if (!this.isAvailable || !this._crypto) {
            throw new Error("Browser random byte generator is not available.");
        }
        const out = new Uint8Array(length);
        for (let i = 0; i < out.length; i += QUOTA) {
            this._crypto.getRandomValues(out.subarray(i, i + Math.min(out.length - i, QUOTA)));
        }
        return out;
    }
}
browser$1.BrowserRandomSource = BrowserRandomSource;

function commonjsRequire(path) {
	throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}

var node = {};

var wipe$1 = {};

// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(wipe$1, "__esModule", { value: true });
/**
 * Sets all values in the given array to zero and returns it.
 *
 * The fact that it sets bytes to zero can be relied on.
 *
 * There is no guarantee that this function makes data disappear from memory,
 * as runtime implementation can, for example, have copying garbage collector
 * that will make copies of sensitive data before we wipe it. Or that an
 * operating system will write our data to swap or sleep image. Another thing
 * is that an optimizing compiler can remove calls to this function or make it
 * no-op. There's nothing we can do with it, so we just do our best and hope
 * that everything will be okay and good will triumph over evil.
 */
function wipe(array) {
    // Right now it's similar to array.fill(0). If it turns
    // out that runtimes optimize this call away, maybe
    // we can try something else.
    for (var i = 0; i < array.length; i++) {
        array[i] = 0;
    }
    return array;
}
wipe$1.wipe = wipe;

var _polyfillNode_crypto = {};

var _polyfillNode_crypto$1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	default: _polyfillNode_crypto
});

var require$$1 = /*@__PURE__*/getAugmentedNamespace(_polyfillNode_crypto$1);

// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(node, "__esModule", { value: true });
node.NodeRandomSource = void 0;
const wipe_1$3 = wipe$1;
class NodeRandomSource {
    constructor() {
        this.isAvailable = false;
        this.isInstantiated = false;
        if (typeof commonjsRequire !== "undefined") {
            const nodeCrypto = require$$1;
            if (nodeCrypto && nodeCrypto.randomBytes) {
                this._crypto = nodeCrypto;
                this.isAvailable = true;
                this.isInstantiated = true;
            }
        }
    }
    randomBytes(length) {
        if (!this.isAvailable || !this._crypto) {
            throw new Error("Node.js random byte generator is not available.");
        }
        // Get random bytes (result is Buffer).
        let buffer = this._crypto.randomBytes(length);
        // Make sure we got the length that we requested.
        if (buffer.length !== length) {
            throw new Error("NodeRandomSource: got fewer bytes than requested");
        }
        // Allocate output array.
        const out = new Uint8Array(length);
        // Copy bytes from buffer to output.
        for (let i = 0; i < out.length; i++) {
            out[i] = buffer[i];
        }
        // Cleanup.
        (0, wipe_1$3.wipe)(buffer);
        return out;
    }
}
node.NodeRandomSource = NodeRandomSource;

// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(system, "__esModule", { value: true });
system.SystemRandomSource = void 0;
const browser_1 = browser$1;
const node_1 = node;
class SystemRandomSource {
    constructor() {
        this.isAvailable = false;
        this.name = "";
        // Try browser.
        this._source = new browser_1.BrowserRandomSource();
        if (this._source.isAvailable) {
            this.isAvailable = true;
            this.name = "Browser";
            return;
        }
        // If no browser source, try Node.
        this._source = new node_1.NodeRandomSource();
        if (this._source.isAvailable) {
            this.isAvailable = true;
            this.name = "Node";
            return;
        }
        // No sources, we're out of options.
    }
    randomBytes(length) {
        if (!this.isAvailable) {
            throw new Error("System random byte generator is not available.");
        }
        return this._source.randomBytes(length);
    }
}
system.SystemRandomSource = SystemRandomSource;

var binary = {};

var int = {};

(function (exports) {
	// Copyright (C) 2016 Dmitry Chestnykh
	// MIT License. See LICENSE file for details.
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Package int provides helper functions for integerss.
	 */
	// Shim using 16-bit pieces.
	function imulShim(a, b) {
	    var ah = (a >>> 16) & 0xffff, al = a & 0xffff;
	    var bh = (b >>> 16) & 0xffff, bl = b & 0xffff;
	    return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0) | 0);
	}
	/** 32-bit integer multiplication.  */
	// Use system Math.imul if available, otherwise use our shim.
	exports.mul = Math.imul || imulShim;
	/** 32-bit integer addition.  */
	function add(a, b) {
	    return (a + b) | 0;
	}
	exports.add = add;
	/**  32-bit integer subtraction.  */
	function sub(a, b) {
	    return (a - b) | 0;
	}
	exports.sub = sub;
	/** 32-bit integer left rotation */
	function rotl(x, n) {
	    return x << n | x >>> (32 - n);
	}
	exports.rotl = rotl;
	/** 32-bit integer left rotation */
	function rotr(x, n) {
	    return x << (32 - n) | x >>> n;
	}
	exports.rotr = rotr;
	function isIntegerShim(n) {
	    return typeof n === "number" && isFinite(n) && Math.floor(n) === n;
	}
	/**
	 * Returns true if the argument is an integer number.
	 *
	 * In ES2015, Number.isInteger.
	 */
	exports.isInteger = Number.isInteger || isIntegerShim;
	/**
	 *  Math.pow(2, 53) - 1
	 *
	 *  In ES2015 Number.MAX_SAFE_INTEGER.
	 */
	exports.MAX_SAFE_INTEGER = 9007199254740991;
	/**
	 * Returns true if the argument is a safe integer number
	 * (-MIN_SAFE_INTEGER < number <= MAX_SAFE_INTEGER)
	 *
	 * In ES2015, Number.isSafeInteger.
	 */
	exports.isSafeInteger = function (n) {
	    return exports.isInteger(n) && (n >= -exports.MAX_SAFE_INTEGER && n <= exports.MAX_SAFE_INTEGER);
	};
	
} (int));

// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(binary, "__esModule", { value: true });
/**
 * Package binary provides functions for encoding and decoding numbers in byte arrays.
 */
var int_1 = int;
// TODO(dchest): add asserts for correct value ranges and array offsets.
/**
 * Reads 2 bytes from array starting at offset as big-endian
 * signed 16-bit integer and returns it.
 */
function readInt16BE(array, offset) {
    if (offset === void 0) { offset = 0; }
    return (((array[offset + 0] << 8) | array[offset + 1]) << 16) >> 16;
}
binary.readInt16BE = readInt16BE;
/**
 * Reads 2 bytes from array starting at offset as big-endian
 * unsigned 16-bit integer and returns it.
 */
function readUint16BE(array, offset) {
    if (offset === void 0) { offset = 0; }
    return ((array[offset + 0] << 8) | array[offset + 1]) >>> 0;
}
binary.readUint16BE = readUint16BE;
/**
 * Reads 2 bytes from array starting at offset as little-endian
 * signed 16-bit integer and returns it.
 */
function readInt16LE(array, offset) {
    if (offset === void 0) { offset = 0; }
    return (((array[offset + 1] << 8) | array[offset]) << 16) >> 16;
}
binary.readInt16LE = readInt16LE;
/**
 * Reads 2 bytes from array starting at offset as little-endian
 * unsigned 16-bit integer and returns it.
 */
function readUint16LE(array, offset) {
    if (offset === void 0) { offset = 0; }
    return ((array[offset + 1] << 8) | array[offset]) >>> 0;
}
binary.readUint16LE = readUint16LE;
/**
 * Writes 2-byte big-endian representation of 16-bit unsigned
 * value to byte array starting at offset.
 *
 * If byte array is not given, creates a new 2-byte one.
 *
 * Returns the output byte array.
 */
function writeUint16BE(value, out, offset) {
    if (out === void 0) { out = new Uint8Array(2); }
    if (offset === void 0) { offset = 0; }
    out[offset + 0] = value >>> 8;
    out[offset + 1] = value >>> 0;
    return out;
}
binary.writeUint16BE = writeUint16BE;
binary.writeInt16BE = writeUint16BE;
/**
 * Writes 2-byte little-endian representation of 16-bit unsigned
 * value to array starting at offset.
 *
 * If byte array is not given, creates a new 2-byte one.
 *
 * Returns the output byte array.
 */
function writeUint16LE(value, out, offset) {
    if (out === void 0) { out = new Uint8Array(2); }
    if (offset === void 0) { offset = 0; }
    out[offset + 0] = value >>> 0;
    out[offset + 1] = value >>> 8;
    return out;
}
binary.writeUint16LE = writeUint16LE;
binary.writeInt16LE = writeUint16LE;
/**
 * Reads 4 bytes from array starting at offset as big-endian
 * signed 32-bit integer and returns it.
 */
function readInt32BE(array, offset) {
    if (offset === void 0) { offset = 0; }
    return (array[offset] << 24) |
        (array[offset + 1] << 16) |
        (array[offset + 2] << 8) |
        array[offset + 3];
}
binary.readInt32BE = readInt32BE;
/**
 * Reads 4 bytes from array starting at offset as big-endian
 * unsigned 32-bit integer and returns it.
 */
function readUint32BE(array, offset) {
    if (offset === void 0) { offset = 0; }
    return ((array[offset] << 24) |
        (array[offset + 1] << 16) |
        (array[offset + 2] << 8) |
        array[offset + 3]) >>> 0;
}
binary.readUint32BE = readUint32BE;
/**
 * Reads 4 bytes from array starting at offset as little-endian
 * signed 32-bit integer and returns it.
 */
function readInt32LE(array, offset) {
    if (offset === void 0) { offset = 0; }
    return (array[offset + 3] << 24) |
        (array[offset + 2] << 16) |
        (array[offset + 1] << 8) |
        array[offset];
}
binary.readInt32LE = readInt32LE;
/**
 * Reads 4 bytes from array starting at offset as little-endian
 * unsigned 32-bit integer and returns it.
 */
function readUint32LE(array, offset) {
    if (offset === void 0) { offset = 0; }
    return ((array[offset + 3] << 24) |
        (array[offset + 2] << 16) |
        (array[offset + 1] << 8) |
        array[offset]) >>> 0;
}
binary.readUint32LE = readUint32LE;
/**
 * Writes 4-byte big-endian representation of 32-bit unsigned
 * value to byte array starting at offset.
 *
 * If byte array is not given, creates a new 4-byte one.
 *
 * Returns the output byte array.
 */
function writeUint32BE(value, out, offset) {
    if (out === void 0) { out = new Uint8Array(4); }
    if (offset === void 0) { offset = 0; }
    out[offset + 0] = value >>> 24;
    out[offset + 1] = value >>> 16;
    out[offset + 2] = value >>> 8;
    out[offset + 3] = value >>> 0;
    return out;
}
binary.writeUint32BE = writeUint32BE;
binary.writeInt32BE = writeUint32BE;
/**
 * Writes 4-byte little-endian representation of 32-bit unsigned
 * value to array starting at offset.
 *
 * If byte array is not given, creates a new 4-byte one.
 *
 * Returns the output byte array.
 */
function writeUint32LE(value, out, offset) {
    if (out === void 0) { out = new Uint8Array(4); }
    if (offset === void 0) { offset = 0; }
    out[offset + 0] = value >>> 0;
    out[offset + 1] = value >>> 8;
    out[offset + 2] = value >>> 16;
    out[offset + 3] = value >>> 24;
    return out;
}
binary.writeUint32LE = writeUint32LE;
binary.writeInt32LE = writeUint32LE;
/**
 * Reads 8 bytes from array starting at offset as big-endian
 * signed 64-bit integer and returns it.
 *
 * IMPORTANT: due to JavaScript limitation, supports exact
 * numbers in range -9007199254740991 to 9007199254740991.
 * If the number stored in the byte array is outside this range,
 * the result is not exact.
 */
function readInt64BE(array, offset) {
    if (offset === void 0) { offset = 0; }
    var hi = readInt32BE(array, offset);
    var lo = readInt32BE(array, offset + 4);
    return hi * 0x100000000 + lo - ((lo >> 31) * 0x100000000);
}
binary.readInt64BE = readInt64BE;
/**
 * Reads 8 bytes from array starting at offset as big-endian
 * unsigned 64-bit integer and returns it.
 *
 * IMPORTANT: due to JavaScript limitation, supports values up to 2^53-1.
 */
function readUint64BE(array, offset) {
    if (offset === void 0) { offset = 0; }
    var hi = readUint32BE(array, offset);
    var lo = readUint32BE(array, offset + 4);
    return hi * 0x100000000 + lo;
}
binary.readUint64BE = readUint64BE;
/**
 * Reads 8 bytes from array starting at offset as little-endian
 * signed 64-bit integer and returns it.
 *
 * IMPORTANT: due to JavaScript limitation, supports exact
 * numbers in range -9007199254740991 to 9007199254740991.
 * If the number stored in the byte array is outside this range,
 * the result is not exact.
 */
function readInt64LE(array, offset) {
    if (offset === void 0) { offset = 0; }
    var lo = readInt32LE(array, offset);
    var hi = readInt32LE(array, offset + 4);
    return hi * 0x100000000 + lo - ((lo >> 31) * 0x100000000);
}
binary.readInt64LE = readInt64LE;
/**
 * Reads 8 bytes from array starting at offset as little-endian
 * unsigned 64-bit integer and returns it.
 *
 * IMPORTANT: due to JavaScript limitation, supports values up to 2^53-1.
 */
function readUint64LE(array, offset) {
    if (offset === void 0) { offset = 0; }
    var lo = readUint32LE(array, offset);
    var hi = readUint32LE(array, offset + 4);
    return hi * 0x100000000 + lo;
}
binary.readUint64LE = readUint64LE;
/**
 * Writes 8-byte big-endian representation of 64-bit unsigned
 * value to byte array starting at offset.
 *
 * Due to JavaScript limitation, supports values up to 2^53-1.
 *
 * If byte array is not given, creates a new 8-byte one.
 *
 * Returns the output byte array.
 */
function writeUint64BE(value, out, offset) {
    if (out === void 0) { out = new Uint8Array(8); }
    if (offset === void 0) { offset = 0; }
    writeUint32BE(value / 0x100000000 >>> 0, out, offset);
    writeUint32BE(value >>> 0, out, offset + 4);
    return out;
}
binary.writeUint64BE = writeUint64BE;
binary.writeInt64BE = writeUint64BE;
/**
 * Writes 8-byte little-endian representation of 64-bit unsigned
 * value to byte array starting at offset.
 *
 * Due to JavaScript limitation, supports values up to 2^53-1.
 *
 * If byte array is not given, creates a new 8-byte one.
 *
 * Returns the output byte array.
 */
function writeUint64LE(value, out, offset) {
    if (out === void 0) { out = new Uint8Array(8); }
    if (offset === void 0) { offset = 0; }
    writeUint32LE(value >>> 0, out, offset);
    writeUint32LE(value / 0x100000000 >>> 0, out, offset + 4);
    return out;
}
binary.writeUint64LE = writeUint64LE;
binary.writeInt64LE = writeUint64LE;
/**
 * Reads bytes from array starting at offset as big-endian
 * unsigned bitLen-bit integer and returns it.
 *
 * Supports bit lengths divisible by 8, up to 48.
 */
function readUintBE(bitLength, array, offset) {
    if (offset === void 0) { offset = 0; }
    // TODO(dchest): implement support for bitLengths non-divisible by 8
    if (bitLength % 8 !== 0) {
        throw new Error("readUintBE supports only bitLengths divisible by 8");
    }
    if (bitLength / 8 > array.length - offset) {
        throw new Error("readUintBE: array is too short for the given bitLength");
    }
    var result = 0;
    var mul = 1;
    for (var i = bitLength / 8 + offset - 1; i >= offset; i--) {
        result += array[i] * mul;
        mul *= 256;
    }
    return result;
}
binary.readUintBE = readUintBE;
/**
 * Reads bytes from array starting at offset as little-endian
 * unsigned bitLen-bit integer and returns it.
 *
 * Supports bit lengths divisible by 8, up to 48.
 */
function readUintLE(bitLength, array, offset) {
    if (offset === void 0) { offset = 0; }
    // TODO(dchest): implement support for bitLengths non-divisible by 8
    if (bitLength % 8 !== 0) {
        throw new Error("readUintLE supports only bitLengths divisible by 8");
    }
    if (bitLength / 8 > array.length - offset) {
        throw new Error("readUintLE: array is too short for the given bitLength");
    }
    var result = 0;
    var mul = 1;
    for (var i = offset; i < offset + bitLength / 8; i++) {
        result += array[i] * mul;
        mul *= 256;
    }
    return result;
}
binary.readUintLE = readUintLE;
/**
 * Writes a big-endian representation of bitLen-bit unsigned
 * value to array starting at offset.
 *
 * Supports bit lengths divisible by 8, up to 48.
 *
 * If byte array is not given, creates a new one.
 *
 * Returns the output byte array.
 */
function writeUintBE(bitLength, value, out, offset) {
    if (out === void 0) { out = new Uint8Array(bitLength / 8); }
    if (offset === void 0) { offset = 0; }
    // TODO(dchest): implement support for bitLengths non-divisible by 8
    if (bitLength % 8 !== 0) {
        throw new Error("writeUintBE supports only bitLengths divisible by 8");
    }
    if (!int_1.isSafeInteger(value)) {
        throw new Error("writeUintBE value must be an integer");
    }
    var div = 1;
    for (var i = bitLength / 8 + offset - 1; i >= offset; i--) {
        out[i] = (value / div) & 0xff;
        div *= 256;
    }
    return out;
}
binary.writeUintBE = writeUintBE;
/**
 * Writes a little-endian representation of bitLen-bit unsigned
 * value to array starting at offset.
 *
 * Supports bit lengths divisible by 8, up to 48.
 *
 * If byte array is not given, creates a new one.
 *
 * Returns the output byte array.
 */
function writeUintLE(bitLength, value, out, offset) {
    if (out === void 0) { out = new Uint8Array(bitLength / 8); }
    if (offset === void 0) { offset = 0; }
    // TODO(dchest): implement support for bitLengths non-divisible by 8
    if (bitLength % 8 !== 0) {
        throw new Error("writeUintLE supports only bitLengths divisible by 8");
    }
    if (!int_1.isSafeInteger(value)) {
        throw new Error("writeUintLE value must be an integer");
    }
    var div = 1;
    for (var i = offset; i < offset + bitLength / 8; i++) {
        out[i] = (value / div) & 0xff;
        div *= 256;
    }
    return out;
}
binary.writeUintLE = writeUintLE;
/**
 * Reads 4 bytes from array starting at offset as big-endian
 * 32-bit floating-point number and returns it.
 */
function readFloat32BE(array, offset) {
    if (offset === void 0) { offset = 0; }
    var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
    return view.getFloat32(offset);
}
binary.readFloat32BE = readFloat32BE;
/**
 * Reads 4 bytes from array starting at offset as little-endian
 * 32-bit floating-point number and returns it.
 */
function readFloat32LE(array, offset) {
    if (offset === void 0) { offset = 0; }
    var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
    return view.getFloat32(offset, true);
}
binary.readFloat32LE = readFloat32LE;
/**
 * Reads 8 bytes from array starting at offset as big-endian
 * 64-bit floating-point number ("double") and returns it.
 */
function readFloat64BE(array, offset) {
    if (offset === void 0) { offset = 0; }
    var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
    return view.getFloat64(offset);
}
binary.readFloat64BE = readFloat64BE;
/**
 * Reads 8 bytes from array starting at offset as little-endian
 * 64-bit floating-point number ("double") and returns it.
 */
function readFloat64LE(array, offset) {
    if (offset === void 0) { offset = 0; }
    var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
    return view.getFloat64(offset, true);
}
binary.readFloat64LE = readFloat64LE;
/**
 * Writes 4-byte big-endian floating-point representation of value
 * to byte array starting at offset.
 *
 * If byte array is not given, creates a new 4-byte one.
 *
 * Returns the output byte array.
 */
function writeFloat32BE(value, out, offset) {
    if (out === void 0) { out = new Uint8Array(4); }
    if (offset === void 0) { offset = 0; }
    var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
    view.setFloat32(offset, value);
    return out;
}
binary.writeFloat32BE = writeFloat32BE;
/**
 * Writes 4-byte little-endian floating-point representation of value
 * to byte array starting at offset.
 *
 * If byte array is not given, creates a new 4-byte one.
 *
 * Returns the output byte array.
 */
function writeFloat32LE(value, out, offset) {
    if (out === void 0) { out = new Uint8Array(4); }
    if (offset === void 0) { offset = 0; }
    var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
    view.setFloat32(offset, value, true);
    return out;
}
binary.writeFloat32LE = writeFloat32LE;
/**
 * Writes 8-byte big-endian floating-point representation of value
 * to byte array starting at offset.
 *
 * If byte array is not given, creates a new 8-byte one.
 *
 * Returns the output byte array.
 */
function writeFloat64BE(value, out, offset) {
    if (out === void 0) { out = new Uint8Array(8); }
    if (offset === void 0) { offset = 0; }
    var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
    view.setFloat64(offset, value);
    return out;
}
binary.writeFloat64BE = writeFloat64BE;
/**
 * Writes 8-byte little-endian floating-point representation of value
 * to byte array starting at offset.
 *
 * If byte array is not given, creates a new 8-byte one.
 *
 * Returns the output byte array.
 */
function writeFloat64LE(value, out, offset) {
    if (out === void 0) { out = new Uint8Array(8); }
    if (offset === void 0) { offset = 0; }
    var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
    view.setFloat64(offset, value, true);
    return out;
}
binary.writeFloat64LE = writeFloat64LE;

(function (exports) {
	// Copyright (C) 2016 Dmitry Chestnykh
	// MIT License. See LICENSE file for details.
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.randomStringForEntropy = exports.randomString = exports.randomUint32 = exports.randomBytes = exports.defaultRandomSource = void 0;
	const system_1 = system;
	const binary_1 = binary;
	const wipe_1 = wipe$1;
	exports.defaultRandomSource = new system_1.SystemRandomSource();
	function randomBytes(length, prng = exports.defaultRandomSource) {
	    return prng.randomBytes(length);
	}
	exports.randomBytes = randomBytes;
	/**
	 * Returns a uniformly random unsigned 32-bit integer.
	 */
	function randomUint32(prng = exports.defaultRandomSource) {
	    // Generate 4-byte random buffer.
	    const buf = randomBytes(4, prng);
	    // Convert bytes from buffer into a 32-bit integer.
	    // It's not important which byte order to use, since
	    // the result is random.
	    const result = (0, binary_1.readUint32LE)(buf);
	    // Clean the buffer.
	    (0, wipe_1.wipe)(buf);
	    return result;
	}
	exports.randomUint32 = randomUint32;
	/** 62 alphanumeric characters for default charset of randomString() */
	const ALPHANUMERIC = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	/**
	 * Returns a uniform random string of the given length
	 * with characters from the given charset.
	 *
	 * Charset must not have more than 256 characters.
	 *
	 * Default charset generates case-sensitive alphanumeric
	 * strings (0-9, A-Z, a-z).
	 */
	function randomString(length, charset = ALPHANUMERIC, prng = exports.defaultRandomSource) {
	    if (charset.length < 2) {
	        throw new Error("randomString charset is too short");
	    }
	    if (charset.length > 256) {
	        throw new Error("randomString charset is too long");
	    }
	    let out = '';
	    const charsLen = charset.length;
	    const maxByte = 256 - (256 % charsLen);
	    while (length > 0) {
	        const buf = randomBytes(Math.ceil(length * 256 / maxByte), prng);
	        for (let i = 0; i < buf.length && length > 0; i++) {
	            const randomByte = buf[i];
	            if (randomByte < maxByte) {
	                out += charset.charAt(randomByte % charsLen);
	                length--;
	            }
	        }
	        (0, wipe_1.wipe)(buf);
	    }
	    return out;
	}
	exports.randomString = randomString;
	/**
	 * Returns uniform random string containing at least the given
	 * number of bits of entropy.
	 *
	 * For example, randomStringForEntropy(128) will return a 22-character
	 * alphanumeric string, while randomStringForEntropy(128, "0123456789")
	 * will return a 39-character numeric string, both will contain at
	 * least 128 bits of entropy.
	 *
	 * Default charset generates case-sensitive alphanumeric
	 * strings (0-9, A-Z, a-z).
	 */
	function randomStringForEntropy(bits, charset = ALPHANUMERIC, prng = exports.defaultRandomSource) {
	    const length = Math.ceil(bits / (Math.log(charset.length) / Math.LN2));
	    return randomString(length, charset, prng);
	}
	exports.randomStringForEntropy = randomStringForEntropy;
	
} (random));

var sha512 = {};

(function (exports) {
	// Copyright (C) 2016 Dmitry Chestnykh
	// MIT License. See LICENSE file for details.
	Object.defineProperty(exports, "__esModule", { value: true });
	var binary_1 = binary;
	var wipe_1 = wipe$1;
	exports.DIGEST_LENGTH = 64;
	exports.BLOCK_SIZE = 128;
	/**
	 * SHA-2-512 cryptographic hash algorithm.
	 */
	var SHA512 = /** @class */ (function () {
	    function SHA512() {
	        /** Length of hash output */
	        this.digestLength = exports.DIGEST_LENGTH;
	        /** Block size */
	        this.blockSize = exports.BLOCK_SIZE;
	        // Note: Int32Array is used instead of Uint32Array for performance reasons.
	        this._stateHi = new Int32Array(8); // hash state, high bytes
	        this._stateLo = new Int32Array(8); // hash state, low bytes
	        this._tempHi = new Int32Array(16); // temporary state, high bytes
	        this._tempLo = new Int32Array(16); // temporary state, low bytes
	        this._buffer = new Uint8Array(256); // buffer for data to hash
	        this._bufferLength = 0; // number of bytes in buffer
	        this._bytesHashed = 0; // number of total bytes hashed
	        this._finished = false; // indicates whether the hash was finalized
	        this.reset();
	    }
	    SHA512.prototype._initState = function () {
	        this._stateHi[0] = 0x6a09e667;
	        this._stateHi[1] = 0xbb67ae85;
	        this._stateHi[2] = 0x3c6ef372;
	        this._stateHi[3] = 0xa54ff53a;
	        this._stateHi[4] = 0x510e527f;
	        this._stateHi[5] = 0x9b05688c;
	        this._stateHi[6] = 0x1f83d9ab;
	        this._stateHi[7] = 0x5be0cd19;
	        this._stateLo[0] = 0xf3bcc908;
	        this._stateLo[1] = 0x84caa73b;
	        this._stateLo[2] = 0xfe94f82b;
	        this._stateLo[3] = 0x5f1d36f1;
	        this._stateLo[4] = 0xade682d1;
	        this._stateLo[5] = 0x2b3e6c1f;
	        this._stateLo[6] = 0xfb41bd6b;
	        this._stateLo[7] = 0x137e2179;
	    };
	    /**
	     * Resets hash state making it possible
	     * to re-use this instance to hash other data.
	     */
	    SHA512.prototype.reset = function () {
	        this._initState();
	        this._bufferLength = 0;
	        this._bytesHashed = 0;
	        this._finished = false;
	        return this;
	    };
	    /**
	     * Cleans internal buffers and resets hash state.
	     */
	    SHA512.prototype.clean = function () {
	        wipe_1.wipe(this._buffer);
	        wipe_1.wipe(this._tempHi);
	        wipe_1.wipe(this._tempLo);
	        this.reset();
	    };
	    /**
	     * Updates hash state with the given data.
	     *
	     * Throws error when trying to update already finalized hash:
	     * instance must be reset to update it again.
	     */
	    SHA512.prototype.update = function (data, dataLength) {
	        if (dataLength === void 0) { dataLength = data.length; }
	        if (this._finished) {
	            throw new Error("SHA512: can't update because hash was finished.");
	        }
	        var dataPos = 0;
	        this._bytesHashed += dataLength;
	        if (this._bufferLength > 0) {
	            while (this._bufferLength < exports.BLOCK_SIZE && dataLength > 0) {
	                this._buffer[this._bufferLength++] = data[dataPos++];
	                dataLength--;
	            }
	            if (this._bufferLength === this.blockSize) {
	                hashBlocks(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize);
	                this._bufferLength = 0;
	            }
	        }
	        if (dataLength >= this.blockSize) {
	            dataPos = hashBlocks(this._tempHi, this._tempLo, this._stateHi, this._stateLo, data, dataPos, dataLength);
	            dataLength %= this.blockSize;
	        }
	        while (dataLength > 0) {
	            this._buffer[this._bufferLength++] = data[dataPos++];
	            dataLength--;
	        }
	        return this;
	    };
	    /**
	     * Finalizes hash state and puts hash into out.
	     * If hash was already finalized, puts the same value.
	     */
	    SHA512.prototype.finish = function (out) {
	        if (!this._finished) {
	            var bytesHashed = this._bytesHashed;
	            var left = this._bufferLength;
	            var bitLenHi = (bytesHashed / 0x20000000) | 0;
	            var bitLenLo = bytesHashed << 3;
	            var padLength = (bytesHashed % 128 < 112) ? 128 : 256;
	            this._buffer[left] = 0x80;
	            for (var i = left + 1; i < padLength - 8; i++) {
	                this._buffer[i] = 0;
	            }
	            binary_1.writeUint32BE(bitLenHi, this._buffer, padLength - 8);
	            binary_1.writeUint32BE(bitLenLo, this._buffer, padLength - 4);
	            hashBlocks(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, padLength);
	            this._finished = true;
	        }
	        for (var i = 0; i < this.digestLength / 8; i++) {
	            binary_1.writeUint32BE(this._stateHi[i], out, i * 8);
	            binary_1.writeUint32BE(this._stateLo[i], out, i * 8 + 4);
	        }
	        return this;
	    };
	    /**
	     * Returns the final hash digest.
	     */
	    SHA512.prototype.digest = function () {
	        var out = new Uint8Array(this.digestLength);
	        this.finish(out);
	        return out;
	    };
	    /**
	     * Function useful for HMAC/PBKDF2 optimization. Returns hash state to be
	     * used with restoreState(). Only chain value is saved, not buffers or
	     * other state variables.
	     */
	    SHA512.prototype.saveState = function () {
	        if (this._finished) {
	            throw new Error("SHA256: cannot save finished state");
	        }
	        return {
	            stateHi: new Int32Array(this._stateHi),
	            stateLo: new Int32Array(this._stateLo),
	            buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : undefined,
	            bufferLength: this._bufferLength,
	            bytesHashed: this._bytesHashed
	        };
	    };
	    /**
	     * Function useful for HMAC/PBKDF2 optimization. Restores state saved by
	     * saveState() and sets bytesHashed to the given value.
	     */
	    SHA512.prototype.restoreState = function (savedState) {
	        this._stateHi.set(savedState.stateHi);
	        this._stateLo.set(savedState.stateLo);
	        this._bufferLength = savedState.bufferLength;
	        if (savedState.buffer) {
	            this._buffer.set(savedState.buffer);
	        }
	        this._bytesHashed = savedState.bytesHashed;
	        this._finished = false;
	        return this;
	    };
	    /**
	     * Cleans state returned by saveState().
	     */
	    SHA512.prototype.cleanSavedState = function (savedState) {
	        wipe_1.wipe(savedState.stateHi);
	        wipe_1.wipe(savedState.stateLo);
	        if (savedState.buffer) {
	            wipe_1.wipe(savedState.buffer);
	        }
	        savedState.bufferLength = 0;
	        savedState.bytesHashed = 0;
	    };
	    return SHA512;
	}());
	exports.SHA512 = SHA512;
	// Constants
	var K = new Int32Array([
	    0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd,
	    0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc,
	    0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019,
	    0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118,
	    0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe,
	    0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2,
	    0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1,
	    0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694,
	    0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3,
	    0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65,
	    0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483,
	    0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5,
	    0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210,
	    0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4,
	    0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725,
	    0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70,
	    0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926,
	    0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df,
	    0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8,
	    0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b,
	    0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001,
	    0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30,
	    0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910,
	    0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8,
	    0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53,
	    0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8,
	    0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb,
	    0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3,
	    0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60,
	    0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec,
	    0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9,
	    0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b,
	    0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207,
	    0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178,
	    0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6,
	    0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b,
	    0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493,
	    0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c,
	    0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a,
	    0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817
	]);
	function hashBlocks(wh, wl, hh, hl, m, pos, len) {
	    var ah0 = hh[0], ah1 = hh[1], ah2 = hh[2], ah3 = hh[3], ah4 = hh[4], ah5 = hh[5], ah6 = hh[6], ah7 = hh[7], al0 = hl[0], al1 = hl[1], al2 = hl[2], al3 = hl[3], al4 = hl[4], al5 = hl[5], al6 = hl[6], al7 = hl[7];
	    var h, l;
	    var th, tl;
	    var a, b, c, d;
	    while (len >= 128) {
	        for (var i = 0; i < 16; i++) {
	            var j = 8 * i + pos;
	            wh[i] = binary_1.readUint32BE(m, j);
	            wl[i] = binary_1.readUint32BE(m, j + 4);
	        }
	        for (var i = 0; i < 80; i++) {
	            var bh0 = ah0;
	            var bh1 = ah1;
	            var bh2 = ah2;
	            var bh3 = ah3;
	            var bh4 = ah4;
	            var bh5 = ah5;
	            var bh6 = ah6;
	            var bh7 = ah7;
	            var bl0 = al0;
	            var bl1 = al1;
	            var bl2 = al2;
	            var bl3 = al3;
	            var bl4 = al4;
	            var bl5 = al5;
	            var bl6 = al6;
	            var bl7 = al7;
	            // add
	            h = ah7;
	            l = al7;
	            a = l & 0xffff;
	            b = l >>> 16;
	            c = h & 0xffff;
	            d = h >>> 16;
	            // Sigma1
	            h = ((ah4 >>> 14) | (al4 << (32 - 14))) ^ ((ah4 >>> 18) |
	                (al4 << (32 - 18))) ^ ((al4 >>> (41 - 32)) | (ah4 << (32 - (41 - 32))));
	            l = ((al4 >>> 14) | (ah4 << (32 - 14))) ^ ((al4 >>> 18) |
	                (ah4 << (32 - 18))) ^ ((ah4 >>> (41 - 32)) | (al4 << (32 - (41 - 32))));
	            a += l & 0xffff;
	            b += l >>> 16;
	            c += h & 0xffff;
	            d += h >>> 16;
	            // Ch
	            h = (ah4 & ah5) ^ (~ah4 & ah6);
	            l = (al4 & al5) ^ (~al4 & al6);
	            a += l & 0xffff;
	            b += l >>> 16;
	            c += h & 0xffff;
	            d += h >>> 16;
	            // K
	            h = K[i * 2];
	            l = K[i * 2 + 1];
	            a += l & 0xffff;
	            b += l >>> 16;
	            c += h & 0xffff;
	            d += h >>> 16;
	            // w
	            h = wh[i % 16];
	            l = wl[i % 16];
	            a += l & 0xffff;
	            b += l >>> 16;
	            c += h & 0xffff;
	            d += h >>> 16;
	            b += a >>> 16;
	            c += b >>> 16;
	            d += c >>> 16;
	            th = c & 0xffff | d << 16;
	            tl = a & 0xffff | b << 16;
	            // add
	            h = th;
	            l = tl;
	            a = l & 0xffff;
	            b = l >>> 16;
	            c = h & 0xffff;
	            d = h >>> 16;
	            // Sigma0
	            h = ((ah0 >>> 28) | (al0 << (32 - 28))) ^ ((al0 >>> (34 - 32)) |
	                (ah0 << (32 - (34 - 32)))) ^ ((al0 >>> (39 - 32)) | (ah0 << (32 - (39 - 32))));
	            l = ((al0 >>> 28) | (ah0 << (32 - 28))) ^ ((ah0 >>> (34 - 32)) |
	                (al0 << (32 - (34 - 32)))) ^ ((ah0 >>> (39 - 32)) | (al0 << (32 - (39 - 32))));
	            a += l & 0xffff;
	            b += l >>> 16;
	            c += h & 0xffff;
	            d += h >>> 16;
	            // Maj
	            h = (ah0 & ah1) ^ (ah0 & ah2) ^ (ah1 & ah2);
	            l = (al0 & al1) ^ (al0 & al2) ^ (al1 & al2);
	            a += l & 0xffff;
	            b += l >>> 16;
	            c += h & 0xffff;
	            d += h >>> 16;
	            b += a >>> 16;
	            c += b >>> 16;
	            d += c >>> 16;
	            bh7 = (c & 0xffff) | (d << 16);
	            bl7 = (a & 0xffff) | (b << 16);
	            // add
	            h = bh3;
	            l = bl3;
	            a = l & 0xffff;
	            b = l >>> 16;
	            c = h & 0xffff;
	            d = h >>> 16;
	            h = th;
	            l = tl;
	            a += l & 0xffff;
	            b += l >>> 16;
	            c += h & 0xffff;
	            d += h >>> 16;
	            b += a >>> 16;
	            c += b >>> 16;
	            d += c >>> 16;
	            bh3 = (c & 0xffff) | (d << 16);
	            bl3 = (a & 0xffff) | (b << 16);
	            ah1 = bh0;
	            ah2 = bh1;
	            ah3 = bh2;
	            ah4 = bh3;
	            ah5 = bh4;
	            ah6 = bh5;
	            ah7 = bh6;
	            ah0 = bh7;
	            al1 = bl0;
	            al2 = bl1;
	            al3 = bl2;
	            al4 = bl3;
	            al5 = bl4;
	            al6 = bl5;
	            al7 = bl6;
	            al0 = bl7;
	            if (i % 16 === 15) {
	                for (var j = 0; j < 16; j++) {
	                    // add
	                    h = wh[j];
	                    l = wl[j];
	                    a = l & 0xffff;
	                    b = l >>> 16;
	                    c = h & 0xffff;
	                    d = h >>> 16;
	                    h = wh[(j + 9) % 16];
	                    l = wl[(j + 9) % 16];
	                    a += l & 0xffff;
	                    b += l >>> 16;
	                    c += h & 0xffff;
	                    d += h >>> 16;
	                    // sigma0
	                    th = wh[(j + 1) % 16];
	                    tl = wl[(j + 1) % 16];
	                    h = ((th >>> 1) | (tl << (32 - 1))) ^ ((th >>> 8) |
	                        (tl << (32 - 8))) ^ (th >>> 7);
	                    l = ((tl >>> 1) | (th << (32 - 1))) ^ ((tl >>> 8) |
	                        (th << (32 - 8))) ^ ((tl >>> 7) | (th << (32 - 7)));
	                    a += l & 0xffff;
	                    b += l >>> 16;
	                    c += h & 0xffff;
	                    d += h >>> 16;
	                    // sigma1
	                    th = wh[(j + 14) % 16];
	                    tl = wl[(j + 14) % 16];
	                    h = ((th >>> 19) | (tl << (32 - 19))) ^ ((tl >>> (61 - 32)) |
	                        (th << (32 - (61 - 32)))) ^ (th >>> 6);
	                    l = ((tl >>> 19) | (th << (32 - 19))) ^ ((th >>> (61 - 32)) |
	                        (tl << (32 - (61 - 32)))) ^ ((tl >>> 6) | (th << (32 - 6)));
	                    a += l & 0xffff;
	                    b += l >>> 16;
	                    c += h & 0xffff;
	                    d += h >>> 16;
	                    b += a >>> 16;
	                    c += b >>> 16;
	                    d += c >>> 16;
	                    wh[j] = (c & 0xffff) | (d << 16);
	                    wl[j] = (a & 0xffff) | (b << 16);
	                }
	            }
	        }
	        // add
	        h = ah0;
	        l = al0;
	        a = l & 0xffff;
	        b = l >>> 16;
	        c = h & 0xffff;
	        d = h >>> 16;
	        h = hh[0];
	        l = hl[0];
	        a += l & 0xffff;
	        b += l >>> 16;
	        c += h & 0xffff;
	        d += h >>> 16;
	        b += a >>> 16;
	        c += b >>> 16;
	        d += c >>> 16;
	        hh[0] = ah0 = (c & 0xffff) | (d << 16);
	        hl[0] = al0 = (a & 0xffff) | (b << 16);
	        h = ah1;
	        l = al1;
	        a = l & 0xffff;
	        b = l >>> 16;
	        c = h & 0xffff;
	        d = h >>> 16;
	        h = hh[1];
	        l = hl[1];
	        a += l & 0xffff;
	        b += l >>> 16;
	        c += h & 0xffff;
	        d += h >>> 16;
	        b += a >>> 16;
	        c += b >>> 16;
	        d += c >>> 16;
	        hh[1] = ah1 = (c & 0xffff) | (d << 16);
	        hl[1] = al1 = (a & 0xffff) | (b << 16);
	        h = ah2;
	        l = al2;
	        a = l & 0xffff;
	        b = l >>> 16;
	        c = h & 0xffff;
	        d = h >>> 16;
	        h = hh[2];
	        l = hl[2];
	        a += l & 0xffff;
	        b += l >>> 16;
	        c += h & 0xffff;
	        d += h >>> 16;
	        b += a >>> 16;
	        c += b >>> 16;
	        d += c >>> 16;
	        hh[2] = ah2 = (c & 0xffff) | (d << 16);
	        hl[2] = al2 = (a & 0xffff) | (b << 16);
	        h = ah3;
	        l = al3;
	        a = l & 0xffff;
	        b = l >>> 16;
	        c = h & 0xffff;
	        d = h >>> 16;
	        h = hh[3];
	        l = hl[3];
	        a += l & 0xffff;
	        b += l >>> 16;
	        c += h & 0xffff;
	        d += h >>> 16;
	        b += a >>> 16;
	        c += b >>> 16;
	        d += c >>> 16;
	        hh[3] = ah3 = (c & 0xffff) | (d << 16);
	        hl[3] = al3 = (a & 0xffff) | (b << 16);
	        h = ah4;
	        l = al4;
	        a = l & 0xffff;
	        b = l >>> 16;
	        c = h & 0xffff;
	        d = h >>> 16;
	        h = hh[4];
	        l = hl[4];
	        a += l & 0xffff;
	        b += l >>> 16;
	        c += h & 0xffff;
	        d += h >>> 16;
	        b += a >>> 16;
	        c += b >>> 16;
	        d += c >>> 16;
	        hh[4] = ah4 = (c & 0xffff) | (d << 16);
	        hl[4] = al4 = (a & 0xffff) | (b << 16);
	        h = ah5;
	        l = al5;
	        a = l & 0xffff;
	        b = l >>> 16;
	        c = h & 0xffff;
	        d = h >>> 16;
	        h = hh[5];
	        l = hl[5];
	        a += l & 0xffff;
	        b += l >>> 16;
	        c += h & 0xffff;
	        d += h >>> 16;
	        b += a >>> 16;
	        c += b >>> 16;
	        d += c >>> 16;
	        hh[5] = ah5 = (c & 0xffff) | (d << 16);
	        hl[5] = al5 = (a & 0xffff) | (b << 16);
	        h = ah6;
	        l = al6;
	        a = l & 0xffff;
	        b = l >>> 16;
	        c = h & 0xffff;
	        d = h >>> 16;
	        h = hh[6];
	        l = hl[6];
	        a += l & 0xffff;
	        b += l >>> 16;
	        c += h & 0xffff;
	        d += h >>> 16;
	        b += a >>> 16;
	        c += b >>> 16;
	        d += c >>> 16;
	        hh[6] = ah6 = (c & 0xffff) | (d << 16);
	        hl[6] = al6 = (a & 0xffff) | (b << 16);
	        h = ah7;
	        l = al7;
	        a = l & 0xffff;
	        b = l >>> 16;
	        c = h & 0xffff;
	        d = h >>> 16;
	        h = hh[7];
	        l = hl[7];
	        a += l & 0xffff;
	        b += l >>> 16;
	        c += h & 0xffff;
	        d += h >>> 16;
	        b += a >>> 16;
	        c += b >>> 16;
	        d += c >>> 16;
	        hh[7] = ah7 = (c & 0xffff) | (d << 16);
	        hl[7] = al7 = (a & 0xffff) | (b << 16);
	        pos += 128;
	        len -= 128;
	    }
	    return pos;
	}
	function hash(data) {
	    var h = new SHA512();
	    h.update(data);
	    var digest = h.digest();
	    h.clean();
	    return digest;
	}
	exports.hash = hash;
	
} (sha512));

(function (exports) {
	// Copyright (C) 2016 Dmitry Chestnykh
	// MIT License. See LICENSE file for details.
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.convertSecretKeyToX25519 = exports.convertPublicKeyToX25519 = exports.verify = exports.sign = exports.extractPublicKeyFromSecretKey = exports.generateKeyPair = exports.generateKeyPairFromSeed = exports.SEED_LENGTH = exports.SECRET_KEY_LENGTH = exports.PUBLIC_KEY_LENGTH = exports.SIGNATURE_LENGTH = void 0;
	/**
	 * Package ed25519 implements Ed25519 public-key signature algorithm.
	 */
	const random_1 = random;
	const sha512_1 = sha512;
	const wipe_1 = wipe$1;
	exports.SIGNATURE_LENGTH = 64;
	exports.PUBLIC_KEY_LENGTH = 32;
	exports.SECRET_KEY_LENGTH = 64;
	exports.SEED_LENGTH = 32;
	// Returns new zero-filled 16-element GF (Float64Array).
	// If passed an array of numbers, prefills the returned
	// array with them.
	//
	// We use Float64Array, because we need 48-bit numbers
	// for this implementation.
	function gf(init) {
	    const r = new Float64Array(16);
	    if (init) {
	        for (let i = 0; i < init.length; i++) {
	            r[i] = init[i];
	        }
	    }
	    return r;
	}
	// Base point.
	const _9 = new Uint8Array(32);
	_9[0] = 9;
	const gf0 = gf();
	const gf1 = gf([1]);
	const D = gf([
	    0x78a3, 0x1359, 0x4dca, 0x75eb, 0xd8ab, 0x4141, 0x0a4d, 0x0070,
	    0xe898, 0x7779, 0x4079, 0x8cc7, 0xfe73, 0x2b6f, 0x6cee, 0x5203
	]);
	const D2 = gf([
	    0xf159, 0x26b2, 0x9b94, 0xebd6, 0xb156, 0x8283, 0x149a, 0x00e0,
	    0xd130, 0xeef3, 0x80f2, 0x198e, 0xfce7, 0x56df, 0xd9dc, 0x2406
	]);
	const X = gf([
	    0xd51a, 0x8f25, 0x2d60, 0xc956, 0xa7b2, 0x9525, 0xc760, 0x692c,
	    0xdc5c, 0xfdd6, 0xe231, 0xc0a4, 0x53fe, 0xcd6e, 0x36d3, 0x2169
	]);
	const Y = gf([
	    0x6658, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666,
	    0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666
	]);
	const I = gf([
	    0xa0b0, 0x4a0e, 0x1b27, 0xc4ee, 0xe478, 0xad2f, 0x1806, 0x2f43,
	    0xd7a7, 0x3dfb, 0x0099, 0x2b4d, 0xdf0b, 0x4fc1, 0x2480, 0x2b83
	]);
	function set25519(r, a) {
	    for (let i = 0; i < 16; i++) {
	        r[i] = a[i] | 0;
	    }
	}
	function car25519(o) {
	    let c = 1;
	    for (let i = 0; i < 16; i++) {
	        let v = o[i] + c + 65535;
	        c = Math.floor(v / 65536);
	        o[i] = v - c * 65536;
	    }
	    o[0] += c - 1 + 37 * (c - 1);
	}
	function sel25519(p, q, b) {
	    const c = ~(b - 1);
	    for (let i = 0; i < 16; i++) {
	        const t = c & (p[i] ^ q[i]);
	        p[i] ^= t;
	        q[i] ^= t;
	    }
	}
	function pack25519(o, n) {
	    const m = gf();
	    const t = gf();
	    for (let i = 0; i < 16; i++) {
	        t[i] = n[i];
	    }
	    car25519(t);
	    car25519(t);
	    car25519(t);
	    for (let j = 0; j < 2; j++) {
	        m[0] = t[0] - 0xffed;
	        for (let i = 1; i < 15; i++) {
	            m[i] = t[i] - 0xffff - ((m[i - 1] >> 16) & 1);
	            m[i - 1] &= 0xffff;
	        }
	        m[15] = t[15] - 0x7fff - ((m[14] >> 16) & 1);
	        const b = (m[15] >> 16) & 1;
	        m[14] &= 0xffff;
	        sel25519(t, m, 1 - b);
	    }
	    for (let i = 0; i < 16; i++) {
	        o[2 * i] = t[i] & 0xff;
	        o[2 * i + 1] = t[i] >> 8;
	    }
	}
	function verify32(x, y) {
	    let d = 0;
	    for (let i = 0; i < 32; i++) {
	        d |= x[i] ^ y[i];
	    }
	    return (1 & ((d - 1) >>> 8)) - 1;
	}
	function neq25519(a, b) {
	    const c = new Uint8Array(32);
	    const d = new Uint8Array(32);
	    pack25519(c, a);
	    pack25519(d, b);
	    return verify32(c, d);
	}
	function par25519(a) {
	    const d = new Uint8Array(32);
	    pack25519(d, a);
	    return d[0] & 1;
	}
	function unpack25519(o, n) {
	    for (let i = 0; i < 16; i++) {
	        o[i] = n[2 * i] + (n[2 * i + 1] << 8);
	    }
	    o[15] &= 0x7fff;
	}
	function add(o, a, b) {
	    for (let i = 0; i < 16; i++) {
	        o[i] = a[i] + b[i];
	    }
	}
	function sub(o, a, b) {
	    for (let i = 0; i < 16; i++) {
	        o[i] = a[i] - b[i];
	    }
	}
	function mul(o, a, b) {
	    let v, c, t0 = 0, t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0, t7 = 0, t8 = 0, t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0, t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t22 = 0, t23 = 0, t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0, b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7], b8 = b[8], b9 = b[9], b10 = b[10], b11 = b[11], b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];
	    v = a[0];
	    t0 += v * b0;
	    t1 += v * b1;
	    t2 += v * b2;
	    t3 += v * b3;
	    t4 += v * b4;
	    t5 += v * b5;
	    t6 += v * b6;
	    t7 += v * b7;
	    t8 += v * b8;
	    t9 += v * b9;
	    t10 += v * b10;
	    t11 += v * b11;
	    t12 += v * b12;
	    t13 += v * b13;
	    t14 += v * b14;
	    t15 += v * b15;
	    v = a[1];
	    t1 += v * b0;
	    t2 += v * b1;
	    t3 += v * b2;
	    t4 += v * b3;
	    t5 += v * b4;
	    t6 += v * b5;
	    t7 += v * b6;
	    t8 += v * b7;
	    t9 += v * b8;
	    t10 += v * b9;
	    t11 += v * b10;
	    t12 += v * b11;
	    t13 += v * b12;
	    t14 += v * b13;
	    t15 += v * b14;
	    t16 += v * b15;
	    v = a[2];
	    t2 += v * b0;
	    t3 += v * b1;
	    t4 += v * b2;
	    t5 += v * b3;
	    t6 += v * b4;
	    t7 += v * b5;
	    t8 += v * b6;
	    t9 += v * b7;
	    t10 += v * b8;
	    t11 += v * b9;
	    t12 += v * b10;
	    t13 += v * b11;
	    t14 += v * b12;
	    t15 += v * b13;
	    t16 += v * b14;
	    t17 += v * b15;
	    v = a[3];
	    t3 += v * b0;
	    t4 += v * b1;
	    t5 += v * b2;
	    t6 += v * b3;
	    t7 += v * b4;
	    t8 += v * b5;
	    t9 += v * b6;
	    t10 += v * b7;
	    t11 += v * b8;
	    t12 += v * b9;
	    t13 += v * b10;
	    t14 += v * b11;
	    t15 += v * b12;
	    t16 += v * b13;
	    t17 += v * b14;
	    t18 += v * b15;
	    v = a[4];
	    t4 += v * b0;
	    t5 += v * b1;
	    t6 += v * b2;
	    t7 += v * b3;
	    t8 += v * b4;
	    t9 += v * b5;
	    t10 += v * b6;
	    t11 += v * b7;
	    t12 += v * b8;
	    t13 += v * b9;
	    t14 += v * b10;
	    t15 += v * b11;
	    t16 += v * b12;
	    t17 += v * b13;
	    t18 += v * b14;
	    t19 += v * b15;
	    v = a[5];
	    t5 += v * b0;
	    t6 += v * b1;
	    t7 += v * b2;
	    t8 += v * b3;
	    t9 += v * b4;
	    t10 += v * b5;
	    t11 += v * b6;
	    t12 += v * b7;
	    t13 += v * b8;
	    t14 += v * b9;
	    t15 += v * b10;
	    t16 += v * b11;
	    t17 += v * b12;
	    t18 += v * b13;
	    t19 += v * b14;
	    t20 += v * b15;
	    v = a[6];
	    t6 += v * b0;
	    t7 += v * b1;
	    t8 += v * b2;
	    t9 += v * b3;
	    t10 += v * b4;
	    t11 += v * b5;
	    t12 += v * b6;
	    t13 += v * b7;
	    t14 += v * b8;
	    t15 += v * b9;
	    t16 += v * b10;
	    t17 += v * b11;
	    t18 += v * b12;
	    t19 += v * b13;
	    t20 += v * b14;
	    t21 += v * b15;
	    v = a[7];
	    t7 += v * b0;
	    t8 += v * b1;
	    t9 += v * b2;
	    t10 += v * b3;
	    t11 += v * b4;
	    t12 += v * b5;
	    t13 += v * b6;
	    t14 += v * b7;
	    t15 += v * b8;
	    t16 += v * b9;
	    t17 += v * b10;
	    t18 += v * b11;
	    t19 += v * b12;
	    t20 += v * b13;
	    t21 += v * b14;
	    t22 += v * b15;
	    v = a[8];
	    t8 += v * b0;
	    t9 += v * b1;
	    t10 += v * b2;
	    t11 += v * b3;
	    t12 += v * b4;
	    t13 += v * b5;
	    t14 += v * b6;
	    t15 += v * b7;
	    t16 += v * b8;
	    t17 += v * b9;
	    t18 += v * b10;
	    t19 += v * b11;
	    t20 += v * b12;
	    t21 += v * b13;
	    t22 += v * b14;
	    t23 += v * b15;
	    v = a[9];
	    t9 += v * b0;
	    t10 += v * b1;
	    t11 += v * b2;
	    t12 += v * b3;
	    t13 += v * b4;
	    t14 += v * b5;
	    t15 += v * b6;
	    t16 += v * b7;
	    t17 += v * b8;
	    t18 += v * b9;
	    t19 += v * b10;
	    t20 += v * b11;
	    t21 += v * b12;
	    t22 += v * b13;
	    t23 += v * b14;
	    t24 += v * b15;
	    v = a[10];
	    t10 += v * b0;
	    t11 += v * b1;
	    t12 += v * b2;
	    t13 += v * b3;
	    t14 += v * b4;
	    t15 += v * b5;
	    t16 += v * b6;
	    t17 += v * b7;
	    t18 += v * b8;
	    t19 += v * b9;
	    t20 += v * b10;
	    t21 += v * b11;
	    t22 += v * b12;
	    t23 += v * b13;
	    t24 += v * b14;
	    t25 += v * b15;
	    v = a[11];
	    t11 += v * b0;
	    t12 += v * b1;
	    t13 += v * b2;
	    t14 += v * b3;
	    t15 += v * b4;
	    t16 += v * b5;
	    t17 += v * b6;
	    t18 += v * b7;
	    t19 += v * b8;
	    t20 += v * b9;
	    t21 += v * b10;
	    t22 += v * b11;
	    t23 += v * b12;
	    t24 += v * b13;
	    t25 += v * b14;
	    t26 += v * b15;
	    v = a[12];
	    t12 += v * b0;
	    t13 += v * b1;
	    t14 += v * b2;
	    t15 += v * b3;
	    t16 += v * b4;
	    t17 += v * b5;
	    t18 += v * b6;
	    t19 += v * b7;
	    t20 += v * b8;
	    t21 += v * b9;
	    t22 += v * b10;
	    t23 += v * b11;
	    t24 += v * b12;
	    t25 += v * b13;
	    t26 += v * b14;
	    t27 += v * b15;
	    v = a[13];
	    t13 += v * b0;
	    t14 += v * b1;
	    t15 += v * b2;
	    t16 += v * b3;
	    t17 += v * b4;
	    t18 += v * b5;
	    t19 += v * b6;
	    t20 += v * b7;
	    t21 += v * b8;
	    t22 += v * b9;
	    t23 += v * b10;
	    t24 += v * b11;
	    t25 += v * b12;
	    t26 += v * b13;
	    t27 += v * b14;
	    t28 += v * b15;
	    v = a[14];
	    t14 += v * b0;
	    t15 += v * b1;
	    t16 += v * b2;
	    t17 += v * b3;
	    t18 += v * b4;
	    t19 += v * b5;
	    t20 += v * b6;
	    t21 += v * b7;
	    t22 += v * b8;
	    t23 += v * b9;
	    t24 += v * b10;
	    t25 += v * b11;
	    t26 += v * b12;
	    t27 += v * b13;
	    t28 += v * b14;
	    t29 += v * b15;
	    v = a[15];
	    t15 += v * b0;
	    t16 += v * b1;
	    t17 += v * b2;
	    t18 += v * b3;
	    t19 += v * b4;
	    t20 += v * b5;
	    t21 += v * b6;
	    t22 += v * b7;
	    t23 += v * b8;
	    t24 += v * b9;
	    t25 += v * b10;
	    t26 += v * b11;
	    t27 += v * b12;
	    t28 += v * b13;
	    t29 += v * b14;
	    t30 += v * b15;
	    t0 += 38 * t16;
	    t1 += 38 * t17;
	    t2 += 38 * t18;
	    t3 += 38 * t19;
	    t4 += 38 * t20;
	    t5 += 38 * t21;
	    t6 += 38 * t22;
	    t7 += 38 * t23;
	    t8 += 38 * t24;
	    t9 += 38 * t25;
	    t10 += 38 * t26;
	    t11 += 38 * t27;
	    t12 += 38 * t28;
	    t13 += 38 * t29;
	    t14 += 38 * t30;
	    // t15 left as is
	    // first car
	    c = 1;
	    v = t0 + c + 65535;
	    c = Math.floor(v / 65536);
	    t0 = v - c * 65536;
	    v = t1 + c + 65535;
	    c = Math.floor(v / 65536);
	    t1 = v - c * 65536;
	    v = t2 + c + 65535;
	    c = Math.floor(v / 65536);
	    t2 = v - c * 65536;
	    v = t3 + c + 65535;
	    c = Math.floor(v / 65536);
	    t3 = v - c * 65536;
	    v = t4 + c + 65535;
	    c = Math.floor(v / 65536);
	    t4 = v - c * 65536;
	    v = t5 + c + 65535;
	    c = Math.floor(v / 65536);
	    t5 = v - c * 65536;
	    v = t6 + c + 65535;
	    c = Math.floor(v / 65536);
	    t6 = v - c * 65536;
	    v = t7 + c + 65535;
	    c = Math.floor(v / 65536);
	    t7 = v - c * 65536;
	    v = t8 + c + 65535;
	    c = Math.floor(v / 65536);
	    t8 = v - c * 65536;
	    v = t9 + c + 65535;
	    c = Math.floor(v / 65536);
	    t9 = v - c * 65536;
	    v = t10 + c + 65535;
	    c = Math.floor(v / 65536);
	    t10 = v - c * 65536;
	    v = t11 + c + 65535;
	    c = Math.floor(v / 65536);
	    t11 = v - c * 65536;
	    v = t12 + c + 65535;
	    c = Math.floor(v / 65536);
	    t12 = v - c * 65536;
	    v = t13 + c + 65535;
	    c = Math.floor(v / 65536);
	    t13 = v - c * 65536;
	    v = t14 + c + 65535;
	    c = Math.floor(v / 65536);
	    t14 = v - c * 65536;
	    v = t15 + c + 65535;
	    c = Math.floor(v / 65536);
	    t15 = v - c * 65536;
	    t0 += c - 1 + 37 * (c - 1);
	    // second car
	    c = 1;
	    v = t0 + c + 65535;
	    c = Math.floor(v / 65536);
	    t0 = v - c * 65536;
	    v = t1 + c + 65535;
	    c = Math.floor(v / 65536);
	    t1 = v - c * 65536;
	    v = t2 + c + 65535;
	    c = Math.floor(v / 65536);
	    t2 = v - c * 65536;
	    v = t3 + c + 65535;
	    c = Math.floor(v / 65536);
	    t3 = v - c * 65536;
	    v = t4 + c + 65535;
	    c = Math.floor(v / 65536);
	    t4 = v - c * 65536;
	    v = t5 + c + 65535;
	    c = Math.floor(v / 65536);
	    t5 = v - c * 65536;
	    v = t6 + c + 65535;
	    c = Math.floor(v / 65536);
	    t6 = v - c * 65536;
	    v = t7 + c + 65535;
	    c = Math.floor(v / 65536);
	    t7 = v - c * 65536;
	    v = t8 + c + 65535;
	    c = Math.floor(v / 65536);
	    t8 = v - c * 65536;
	    v = t9 + c + 65535;
	    c = Math.floor(v / 65536);
	    t9 = v - c * 65536;
	    v = t10 + c + 65535;
	    c = Math.floor(v / 65536);
	    t10 = v - c * 65536;
	    v = t11 + c + 65535;
	    c = Math.floor(v / 65536);
	    t11 = v - c * 65536;
	    v = t12 + c + 65535;
	    c = Math.floor(v / 65536);
	    t12 = v - c * 65536;
	    v = t13 + c + 65535;
	    c = Math.floor(v / 65536);
	    t13 = v - c * 65536;
	    v = t14 + c + 65535;
	    c = Math.floor(v / 65536);
	    t14 = v - c * 65536;
	    v = t15 + c + 65535;
	    c = Math.floor(v / 65536);
	    t15 = v - c * 65536;
	    t0 += c - 1 + 37 * (c - 1);
	    o[0] = t0;
	    o[1] = t1;
	    o[2] = t2;
	    o[3] = t3;
	    o[4] = t4;
	    o[5] = t5;
	    o[6] = t6;
	    o[7] = t7;
	    o[8] = t8;
	    o[9] = t9;
	    o[10] = t10;
	    o[11] = t11;
	    o[12] = t12;
	    o[13] = t13;
	    o[14] = t14;
	    o[15] = t15;
	}
	function square(o, a) {
	    mul(o, a, a);
	}
	function inv25519(o, i) {
	    const c = gf();
	    let a;
	    for (a = 0; a < 16; a++) {
	        c[a] = i[a];
	    }
	    for (a = 253; a >= 0; a--) {
	        square(c, c);
	        if (a !== 2 && a !== 4) {
	            mul(c, c, i);
	        }
	    }
	    for (a = 0; a < 16; a++) {
	        o[a] = c[a];
	    }
	}
	function pow2523(o, i) {
	    const c = gf();
	    let a;
	    for (a = 0; a < 16; a++) {
	        c[a] = i[a];
	    }
	    for (a = 250; a >= 0; a--) {
	        square(c, c);
	        if (a !== 1) {
	            mul(c, c, i);
	        }
	    }
	    for (a = 0; a < 16; a++) {
	        o[a] = c[a];
	    }
	}
	function edadd(p, q) {
	    const a = gf(), b = gf(), c = gf(), d = gf(), e = gf(), f = gf(), g = gf(), h = gf(), t = gf();
	    sub(a, p[1], p[0]);
	    sub(t, q[1], q[0]);
	    mul(a, a, t);
	    add(b, p[0], p[1]);
	    add(t, q[0], q[1]);
	    mul(b, b, t);
	    mul(c, p[3], q[3]);
	    mul(c, c, D2);
	    mul(d, p[2], q[2]);
	    add(d, d, d);
	    sub(e, b, a);
	    sub(f, d, c);
	    add(g, d, c);
	    add(h, b, a);
	    mul(p[0], e, f);
	    mul(p[1], h, g);
	    mul(p[2], g, f);
	    mul(p[3], e, h);
	}
	function cswap(p, q, b) {
	    for (let i = 0; i < 4; i++) {
	        sel25519(p[i], q[i], b);
	    }
	}
	function pack(r, p) {
	    const tx = gf(), ty = gf(), zi = gf();
	    inv25519(zi, p[2]);
	    mul(tx, p[0], zi);
	    mul(ty, p[1], zi);
	    pack25519(r, ty);
	    r[31] ^= par25519(tx) << 7;
	}
	function scalarmult(p, q, s) {
	    set25519(p[0], gf0);
	    set25519(p[1], gf1);
	    set25519(p[2], gf1);
	    set25519(p[3], gf0);
	    for (let i = 255; i >= 0; --i) {
	        const b = (s[(i / 8) | 0] >> (i & 7)) & 1;
	        cswap(p, q, b);
	        edadd(q, p);
	        edadd(p, p);
	        cswap(p, q, b);
	    }
	}
	function scalarbase(p, s) {
	    const q = [gf(), gf(), gf(), gf()];
	    set25519(q[0], X);
	    set25519(q[1], Y);
	    set25519(q[2], gf1);
	    mul(q[3], X, Y);
	    scalarmult(p, q, s);
	}
	// Generates key pair from secret 32-byte seed.
	function generateKeyPairFromSeed(seed) {
	    if (seed.length !== exports.SEED_LENGTH) {
	        throw new Error(`ed25519: seed must be ${exports.SEED_LENGTH} bytes`);
	    }
	    const d = (0, sha512_1.hash)(seed);
	    d[0] &= 248;
	    d[31] &= 127;
	    d[31] |= 64;
	    const publicKey = new Uint8Array(32);
	    const p = [gf(), gf(), gf(), gf()];
	    scalarbase(p, d);
	    pack(publicKey, p);
	    const secretKey = new Uint8Array(64);
	    secretKey.set(seed);
	    secretKey.set(publicKey, 32);
	    return {
	        publicKey,
	        secretKey
	    };
	}
	exports.generateKeyPairFromSeed = generateKeyPairFromSeed;
	function generateKeyPair(prng) {
	    const seed = (0, random_1.randomBytes)(32, prng);
	    const result = generateKeyPairFromSeed(seed);
	    (0, wipe_1.wipe)(seed);
	    return result;
	}
	exports.generateKeyPair = generateKeyPair;
	function extractPublicKeyFromSecretKey(secretKey) {
	    if (secretKey.length !== exports.SECRET_KEY_LENGTH) {
	        throw new Error(`ed25519: secret key must be ${exports.SECRET_KEY_LENGTH} bytes`);
	    }
	    return new Uint8Array(secretKey.subarray(32));
	}
	exports.extractPublicKeyFromSecretKey = extractPublicKeyFromSecretKey;
	const L = new Float64Array([
	    0xed, 0xd3, 0xf5, 0x5c, 0x1a, 0x63, 0x12, 0x58, 0xd6, 0x9c, 0xf7, 0xa2,
	    0xde, 0xf9, 0xde, 0x14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x10
	]);
	function modL(r, x) {
	    let carry;
	    let i;
	    let j;
	    let k;
	    for (i = 63; i >= 32; --i) {
	        carry = 0;
	        for (j = i - 32, k = i - 12; j < k; ++j) {
	            x[j] += carry - 16 * x[i] * L[j - (i - 32)];
	            carry = Math.floor((x[j] + 128) / 256);
	            x[j] -= carry * 256;
	        }
	        x[j] += carry;
	        x[i] = 0;
	    }
	    carry = 0;
	    for (j = 0; j < 32; j++) {
	        x[j] += carry - (x[31] >> 4) * L[j];
	        carry = x[j] >> 8;
	        x[j] &= 255;
	    }
	    for (j = 0; j < 32; j++) {
	        x[j] -= carry * L[j];
	    }
	    for (i = 0; i < 32; i++) {
	        x[i + 1] += x[i] >> 8;
	        r[i] = x[i] & 255;
	    }
	}
	function reduce(r) {
	    const x = new Float64Array(64);
	    for (let i = 0; i < 64; i++) {
	        x[i] = r[i];
	    }
	    for (let i = 0; i < 64; i++) {
	        r[i] = 0;
	    }
	    modL(r, x);
	}
	// Returns 64-byte signature of the message under the 64-byte secret key.
	function sign(secretKey, message) {
	    const x = new Float64Array(64);
	    const p = [gf(), gf(), gf(), gf()];
	    const d = (0, sha512_1.hash)(secretKey.subarray(0, 32));
	    d[0] &= 248;
	    d[31] &= 127;
	    d[31] |= 64;
	    const signature = new Uint8Array(64);
	    signature.set(d.subarray(32), 32);
	    const hs = new sha512_1.SHA512();
	    hs.update(signature.subarray(32));
	    hs.update(message);
	    const r = hs.digest();
	    hs.clean();
	    reduce(r);
	    scalarbase(p, r);
	    pack(signature, p);
	    hs.reset();
	    hs.update(signature.subarray(0, 32));
	    hs.update(secretKey.subarray(32));
	    hs.update(message);
	    const h = hs.digest();
	    reduce(h);
	    for (let i = 0; i < 32; i++) {
	        x[i] = r[i];
	    }
	    for (let i = 0; i < 32; i++) {
	        for (let j = 0; j < 32; j++) {
	            x[i + j] += h[i] * d[j];
	        }
	    }
	    modL(signature.subarray(32), x);
	    return signature;
	}
	exports.sign = sign;
	function unpackneg(r, p) {
	    const t = gf(), chk = gf(), num = gf(), den = gf(), den2 = gf(), den4 = gf(), den6 = gf();
	    set25519(r[2], gf1);
	    unpack25519(r[1], p);
	    square(num, r[1]);
	    mul(den, num, D);
	    sub(num, num, r[2]);
	    add(den, r[2], den);
	    square(den2, den);
	    square(den4, den2);
	    mul(den6, den4, den2);
	    mul(t, den6, num);
	    mul(t, t, den);
	    pow2523(t, t);
	    mul(t, t, num);
	    mul(t, t, den);
	    mul(t, t, den);
	    mul(r[0], t, den);
	    square(chk, r[0]);
	    mul(chk, chk, den);
	    if (neq25519(chk, num)) {
	        mul(r[0], r[0], I);
	    }
	    square(chk, r[0]);
	    mul(chk, chk, den);
	    if (neq25519(chk, num)) {
	        return -1;
	    }
	    if (par25519(r[0]) === (p[31] >> 7)) {
	        sub(r[0], gf0, r[0]);
	    }
	    mul(r[3], r[0], r[1]);
	    return 0;
	}
	function verify(publicKey, message, signature) {
	    const t = new Uint8Array(32);
	    const p = [gf(), gf(), gf(), gf()];
	    const q = [gf(), gf(), gf(), gf()];
	    if (signature.length !== exports.SIGNATURE_LENGTH) {
	        throw new Error(`ed25519: signature must be ${exports.SIGNATURE_LENGTH} bytes`);
	    }
	    if (unpackneg(q, publicKey)) {
	        return false;
	    }
	    const hs = new sha512_1.SHA512();
	    hs.update(signature.subarray(0, 32));
	    hs.update(publicKey);
	    hs.update(message);
	    const h = hs.digest();
	    reduce(h);
	    scalarmult(p, q, h);
	    scalarbase(q, signature.subarray(32));
	    edadd(p, q);
	    pack(t, p);
	    if (verify32(signature, t)) {
	        return false;
	    }
	    return true;
	}
	exports.verify = verify;
	/**
	 * Convert Ed25519 public key to X25519 public key.
	 *
	 * Throws if given an invalid public key.
	 */
	function convertPublicKeyToX25519(publicKey) {
	    let q = [gf(), gf(), gf(), gf()];
	    if (unpackneg(q, publicKey)) {
	        throw new Error("Ed25519: invalid public key");
	    }
	    // Formula: montgomeryX = (edwardsY + 1)*inverse(1 - edwardsY) mod p
	    let a = gf();
	    let b = gf();
	    let y = q[1];
	    add(a, gf1, y);
	    sub(b, gf1, y);
	    inv25519(b, b);
	    mul(a, a, b);
	    let z = new Uint8Array(32);
	    pack25519(z, a);
	    return z;
	}
	exports.convertPublicKeyToX25519 = convertPublicKeyToX25519;
	/**
	 *  Convert Ed25519 secret (private) key to X25519 secret key.
	 */
	function convertSecretKeyToX25519(secretKey) {
	    const d = (0, sha512_1.hash)(secretKey.subarray(0, 32));
	    d[0] &= 248;
	    d[31] &= 127;
	    d[31] |= 64;
	    const o = new Uint8Array(d.subarray(0, 32));
	    (0, wipe_1.wipe)(d);
	    return o;
	}
	exports.convertSecretKeyToX25519 = convertSecretKeyToX25519;
	
} (ed25519));

const JWT_IRIDIUM_ALG = "EdDSA";
const JWT_IRIDIUM_TYP = "JWT";
const JWT_DELIMITER = ".";
const JWT_ENCODING = "base64url";
const JSON_ENCODING = "utf8";
const DATA_ENCODING = "utf8";
const DID_DELIMITER = ":";
const DID_PREFIX = "did";
const DID_METHOD = "key";
const MULTICODEC_ED25519_ENCODING = "base58btc";
const MULTICODEC_ED25519_BASE = "z";
const MULTICODEC_ED25519_HEADER = "K36";
const KEY_PAIR_SEED_LENGTH = 32;

function allocUnsafe$1(size = 0) {
  if (globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null) {
    return globalThis.Buffer.allocUnsafe(size);
  }
  return new Uint8Array(size);
}

function concat(arrays, length) {
  if (!length) {
    length = arrays.reduce((acc, curr) => acc + curr.length, 0);
  }
  const output = allocUnsafe$1(length);
  let offset = 0;
  for (const arr of arrays) {
    output.set(arr, offset);
    offset += arr.length;
  }
  return output;
}

function base(ALPHABET, name) {
  if (ALPHABET.length >= 255) {
    throw new TypeError('Alphabet too long');
  }
  var BASE_MAP = new Uint8Array(256);
  for (var j = 0; j < BASE_MAP.length; j++) {
    BASE_MAP[j] = 255;
  }
  for (var i = 0; i < ALPHABET.length; i++) {
    var x = ALPHABET.charAt(i);
    var xc = x.charCodeAt(0);
    if (BASE_MAP[xc] !== 255) {
      throw new TypeError(x + ' is ambiguous');
    }
    BASE_MAP[xc] = i;
  }
  var BASE = ALPHABET.length;
  var LEADER = ALPHABET.charAt(0);
  var FACTOR = Math.log(BASE) / Math.log(256);
  var iFACTOR = Math.log(256) / Math.log(BASE);
  function encode(source) {
    if (source instanceof Uint8Array);
    else if (ArrayBuffer.isView(source)) {
      source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
    } else if (Array.isArray(source)) {
      source = Uint8Array.from(source);
    }
    if (!(source instanceof Uint8Array)) {
      throw new TypeError('Expected Uint8Array');
    }
    if (source.length === 0) {
      return '';
    }
    var zeroes = 0;
    var length = 0;
    var pbegin = 0;
    var pend = source.length;
    while (pbegin !== pend && source[pbegin] === 0) {
      pbegin++;
      zeroes++;
    }
    var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
    var b58 = new Uint8Array(size);
    while (pbegin !== pend) {
      var carry = source[pbegin];
      var i = 0;
      for (var it1 = size - 1; (carry !== 0 || i < length) && it1 !== -1; it1--, i++) {
        carry += 256 * b58[it1] >>> 0;
        b58[it1] = carry % BASE >>> 0;
        carry = carry / BASE >>> 0;
      }
      if (carry !== 0) {
        throw new Error('Non-zero carry');
      }
      length = i;
      pbegin++;
    }
    var it2 = size - length;
    while (it2 !== size && b58[it2] === 0) {
      it2++;
    }
    var str = LEADER.repeat(zeroes);
    for (; it2 < size; ++it2) {
      str += ALPHABET.charAt(b58[it2]);
    }
    return str;
  }
  function decodeUnsafe(source) {
    if (typeof source !== 'string') {
      throw new TypeError('Expected String');
    }
    if (source.length === 0) {
      return new Uint8Array();
    }
    var psz = 0;
    if (source[psz] === ' ') {
      return;
    }
    var zeroes = 0;
    var length = 0;
    while (source[psz] === LEADER) {
      zeroes++;
      psz++;
    }
    var size = (source.length - psz) * FACTOR + 1 >>> 0;
    var b256 = new Uint8Array(size);
    while (source[psz]) {
      var carry = BASE_MAP[source.charCodeAt(psz)];
      if (carry === 255) {
        return;
      }
      var i = 0;
      for (var it3 = size - 1; (carry !== 0 || i < length) && it3 !== -1; it3--, i++) {
        carry += BASE * b256[it3] >>> 0;
        b256[it3] = carry % 256 >>> 0;
        carry = carry / 256 >>> 0;
      }
      if (carry !== 0) {
        throw new Error('Non-zero carry');
      }
      length = i;
      psz++;
    }
    if (source[psz] === ' ') {
      return;
    }
    var it4 = size - length;
    while (it4 !== size && b256[it4] === 0) {
      it4++;
    }
    var vch = new Uint8Array(zeroes + (size - it4));
    var j = zeroes;
    while (it4 !== size) {
      vch[j++] = b256[it4++];
    }
    return vch;
  }
  function decode(string) {
    var buffer = decodeUnsafe(string);
    if (buffer) {
      return buffer;
    }
    throw new Error(`Non-${ name } character`);
  }
  return {
    encode: encode,
    decodeUnsafe: decodeUnsafe,
    decode: decode
  };
}
var src = base;
var _brrp__multiformats_scope_baseX = src;

const coerce = o => {
  if (o instanceof Uint8Array && o.constructor.name === 'Uint8Array')
    return o;
  if (o instanceof ArrayBuffer)
    return new Uint8Array(o);
  if (ArrayBuffer.isView(o)) {
    return new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
  }
  throw new Error('Unknown type, must be binary type');
};
const fromString$2 = str => new TextEncoder().encode(str);
const toString$2 = b => new TextDecoder().decode(b);

class Encoder {
  constructor(name, prefix, baseEncode) {
    this.name = name;
    this.prefix = prefix;
    this.baseEncode = baseEncode;
  }
  encode(bytes) {
    if (bytes instanceof Uint8Array) {
      return `${ this.prefix }${ this.baseEncode(bytes) }`;
    } else {
      throw Error('Unknown type, must be binary type');
    }
  }
}
class Decoder {
  constructor(name, prefix, baseDecode) {
    this.name = name;
    this.prefix = prefix;
    if (prefix.codePointAt(0) === undefined) {
      throw new Error('Invalid prefix character');
    }
    this.prefixCodePoint = prefix.codePointAt(0);
    this.baseDecode = baseDecode;
  }
  decode(text) {
    if (typeof text === 'string') {
      if (text.codePointAt(0) !== this.prefixCodePoint) {
        throw Error(`Unable to decode multibase string ${ JSON.stringify(text) }, ${ this.name } decoder only supports inputs prefixed with ${ this.prefix }`);
      }
      return this.baseDecode(text.slice(this.prefix.length));
    } else {
      throw Error('Can only multibase decode strings');
    }
  }
  or(decoder) {
    return or$2(this, decoder);
  }
}
class ComposedDecoder {
  constructor(decoders) {
    this.decoders = decoders;
  }
  or(decoder) {
    return or$2(this, decoder);
  }
  decode(input) {
    const prefix = input[0];
    const decoder = this.decoders[prefix];
    if (decoder) {
      return decoder.decode(input);
    } else {
      throw RangeError(`Unable to decode multibase string ${ JSON.stringify(input) }, only inputs prefixed with ${ Object.keys(this.decoders) } are supported`);
    }
  }
}
const or$2 = (left, right) => new ComposedDecoder({
  ...left.decoders || { [left.prefix]: left },
  ...right.decoders || { [right.prefix]: right }
});
class Codec {
  constructor(name, prefix, baseEncode, baseDecode) {
    this.name = name;
    this.prefix = prefix;
    this.baseEncode = baseEncode;
    this.baseDecode = baseDecode;
    this.encoder = new Encoder(name, prefix, baseEncode);
    this.decoder = new Decoder(name, prefix, baseDecode);
  }
  encode(input) {
    return this.encoder.encode(input);
  }
  decode(input) {
    return this.decoder.decode(input);
  }
}
const from$1 = ({name, prefix, encode, decode}) => new Codec(name, prefix, encode, decode);
const baseX = ({prefix, name, alphabet}) => {
  const {encode, decode} = _brrp__multiformats_scope_baseX(alphabet, name);
  return from$1({
    prefix,
    name,
    encode,
    decode: text => coerce(decode(text))
  });
};
const decode$2 = (string, alphabet, bitsPerChar, name) => {
  const codes = {};
  for (let i = 0; i < alphabet.length; ++i) {
    codes[alphabet[i]] = i;
  }
  let end = string.length;
  while (string[end - 1] === '=') {
    --end;
  }
  const out = new Uint8Array(end * bitsPerChar / 8 | 0);
  let bits = 0;
  let buffer = 0;
  let written = 0;
  for (let i = 0; i < end; ++i) {
    const value = codes[string[i]];
    if (value === undefined) {
      throw new SyntaxError(`Non-${ name } character`);
    }
    buffer = buffer << bitsPerChar | value;
    bits += bitsPerChar;
    if (bits >= 8) {
      bits -= 8;
      out[written++] = 255 & buffer >> bits;
    }
  }
  if (bits >= bitsPerChar || 255 & buffer << 8 - bits) {
    throw new SyntaxError('Unexpected end of data');
  }
  return out;
};
const encode$1 = (data, alphabet, bitsPerChar) => {
  const pad = alphabet[alphabet.length - 1] === '=';
  const mask = (1 << bitsPerChar) - 1;
  let out = '';
  let bits = 0;
  let buffer = 0;
  for (let i = 0; i < data.length; ++i) {
    buffer = buffer << 8 | data[i];
    bits += 8;
    while (bits > bitsPerChar) {
      bits -= bitsPerChar;
      out += alphabet[mask & buffer >> bits];
    }
  }
  if (bits) {
    out += alphabet[mask & buffer << bitsPerChar - bits];
  }
  if (pad) {
    while (out.length * bitsPerChar & 7) {
      out += '=';
    }
  }
  return out;
};
const rfc4648 = ({name, prefix, bitsPerChar, alphabet}) => {
  return from$1({
    prefix,
    name,
    encode(input) {
      return encode$1(input, alphabet, bitsPerChar);
    },
    decode(input) {
      return decode$2(input, alphabet, bitsPerChar, name);
    }
  });
};

const identity = from$1({
  prefix: '\0',
  name: 'identity',
  encode: buf => toString$2(buf),
  decode: str => fromString$2(str)
});

var identityBase = /*#__PURE__*/Object.freeze({
	__proto__: null,
	identity: identity
});

const base2 = rfc4648({
  prefix: '0',
  name: 'base2',
  alphabet: '01',
  bitsPerChar: 1
});

var base2$1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	base2: base2
});

const base8 = rfc4648({
  prefix: '7',
  name: 'base8',
  alphabet: '01234567',
  bitsPerChar: 3
});

var base8$1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	base8: base8
});

const base10 = baseX({
  prefix: '9',
  name: 'base10',
  alphabet: '0123456789'
});

var base10$1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	base10: base10
});

const base16 = rfc4648({
  prefix: 'f',
  name: 'base16',
  alphabet: '0123456789abcdef',
  bitsPerChar: 4
});
const base16upper = rfc4648({
  prefix: 'F',
  name: 'base16upper',
  alphabet: '0123456789ABCDEF',
  bitsPerChar: 4
});

var base16$1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	base16: base16,
	base16upper: base16upper
});

const base32 = rfc4648({
  prefix: 'b',
  name: 'base32',
  alphabet: 'abcdefghijklmnopqrstuvwxyz234567',
  bitsPerChar: 5
});
const base32upper = rfc4648({
  prefix: 'B',
  name: 'base32upper',
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567',
  bitsPerChar: 5
});
const base32pad = rfc4648({
  prefix: 'c',
  name: 'base32pad',
  alphabet: 'abcdefghijklmnopqrstuvwxyz234567=',
  bitsPerChar: 5
});
const base32padupper = rfc4648({
  prefix: 'C',
  name: 'base32padupper',
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=',
  bitsPerChar: 5
});
const base32hex = rfc4648({
  prefix: 'v',
  name: 'base32hex',
  alphabet: '0123456789abcdefghijklmnopqrstuv',
  bitsPerChar: 5
});
const base32hexupper = rfc4648({
  prefix: 'V',
  name: 'base32hexupper',
  alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV',
  bitsPerChar: 5
});
const base32hexpad = rfc4648({
  prefix: 't',
  name: 'base32hexpad',
  alphabet: '0123456789abcdefghijklmnopqrstuv=',
  bitsPerChar: 5
});
const base32hexpadupper = rfc4648({
  prefix: 'T',
  name: 'base32hexpadupper',
  alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV=',
  bitsPerChar: 5
});
const base32z = rfc4648({
  prefix: 'h',
  name: 'base32z',
  alphabet: 'ybndrfg8ejkmcpqxot1uwisza345h769',
  bitsPerChar: 5
});

var base32$1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	base32: base32,
	base32hex: base32hex,
	base32hexpad: base32hexpad,
	base32hexpadupper: base32hexpadupper,
	base32hexupper: base32hexupper,
	base32pad: base32pad,
	base32padupper: base32padupper,
	base32upper: base32upper,
	base32z: base32z
});

const base36 = baseX({
  prefix: 'k',
  name: 'base36',
  alphabet: '0123456789abcdefghijklmnopqrstuvwxyz'
});
const base36upper = baseX({
  prefix: 'K',
  name: 'base36upper',
  alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
});

var base36$1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	base36: base36,
	base36upper: base36upper
});

const base58btc = baseX({
  name: 'base58btc',
  prefix: 'z',
  alphabet: '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
});
const base58flickr = baseX({
  name: 'base58flickr',
  prefix: 'Z',
  alphabet: '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ'
});

var base58 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	base58btc: base58btc,
	base58flickr: base58flickr
});

const base64 = rfc4648({
  prefix: 'm',
  name: 'base64',
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
  bitsPerChar: 6
});
const base64pad = rfc4648({
  prefix: 'M',
  name: 'base64pad',
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
  bitsPerChar: 6
});
const base64url = rfc4648({
  prefix: 'u',
  name: 'base64url',
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_',
  bitsPerChar: 6
});
const base64urlpad = rfc4648({
  prefix: 'U',
  name: 'base64urlpad',
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=',
  bitsPerChar: 6
});

var base64$1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	base64: base64,
	base64pad: base64pad,
	base64url: base64url,
	base64urlpad: base64urlpad
});

const alphabet = Array.from('\uD83D\uDE80\uD83E\uDE90\u2604\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09\u2600\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02\u2764\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09\u263A\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E\u270C\u2728\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D\u2763\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33\u270B\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13\u2B50\u2705\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6\u2714\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90\u2639\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20\u261D\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B\u26BD\uD83E\uDD19\u2615\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81\u26A1\uD83C\uDF1E\uD83C\uDF88\u274C\u270A\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C\u2708\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74\u25B6\u27A1\u2753\uD83D\uDC8E\uD83D\uDCB8\u2B07\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A\u26A0\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37\u260E\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51\u2744\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42');
const alphabetBytesToChars = alphabet.reduce((p, c, i) => {
  p[i] = c;
  return p;
}, []);
const alphabetCharsToBytes = alphabet.reduce((p, c, i) => {
  p[c.codePointAt(0)] = i;
  return p;
}, []);
function encode(data) {
  return data.reduce((p, c) => {
    p += alphabetBytesToChars[c];
    return p;
  }, '');
}
function decode$1(str) {
  const byts = [];
  for (const char of str) {
    const byt = alphabetCharsToBytes[char.codePointAt(0)];
    if (byt === undefined) {
      throw new Error(`Non-base256emoji character: ${ char }`);
    }
    byts.push(byt);
  }
  return new Uint8Array(byts);
}
const base256emoji = from$1({
  prefix: '\uD83D\uDE80',
  name: 'base256emoji',
  encode,
  decode: decode$1
});

var base256emoji$1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	base256emoji: base256emoji
});

new TextEncoder();
new TextDecoder();

const bases = {
  ...identityBase,
  ...base2$1,
  ...base8$1,
  ...base10$1,
  ...base16$1,
  ...base32$1,
  ...base36$1,
  ...base58,
  ...base64$1,
  ...base256emoji$1
};

function createCodec(name, prefix, encode, decode) {
  return {
    name,
    prefix,
    encoder: {
      name,
      prefix,
      encode
    },
    decoder: { decode }
  };
}
const string = createCodec('utf8', 'u', buf => {
  const decoder = new TextDecoder('utf8');
  return 'u' + decoder.decode(buf);
}, str => {
  const encoder = new TextEncoder();
  return encoder.encode(str.substring(1));
});
const ascii = createCodec('ascii', 'a', buf => {
  let string = 'a';
  for (let i = 0; i < buf.length; i++) {
    string += String.fromCharCode(buf[i]);
  }
  return string;
}, str => {
  str = str.substring(1);
  const buf = allocUnsafe$1(str.length);
  for (let i = 0; i < str.length; i++) {
    buf[i] = str.charCodeAt(i);
  }
  return buf;
});
const BASES = {
  utf8: string,
  'utf-8': string,
  hex: bases.base16,
  latin1: ascii,
  ascii: ascii,
  binary: ascii,
  ...bases
};

function toString$1(array, encoding = 'utf8') {
  const base = BASES[encoding];
  if (!base) {
    throw new Error(`Unsupported encoding "${ encoding }"`);
  }
  if ((encoding === 'utf8' || encoding === 'utf-8') && globalThis.Buffer != null && globalThis.Buffer.from != null) {
    return globalThis.Buffer.from(array.buffer, array.byteOffset, array.byteLength).toString('utf8');
  }
  return base.encoder.encode(array).substring(1);
}

function fromString$1(string, encoding = 'utf8') {
  const base = BASES[encoding];
  if (!base) {
    throw new Error(`Unsupported encoding "${ encoding }"`);
  }
  if ((encoding === 'utf8' || encoding === 'utf-8') && globalThis.Buffer != null && globalThis.Buffer.from != null) {
    return globalThis.Buffer.from(string, 'utf8');
  }
  return base.decoder.decode(`${ base.prefix }${ string }`);
}

function encodeJSON(val) {
    return toString$1(fromString$1(safeJsonStringify(val), JSON_ENCODING), JWT_ENCODING);
}
function encodeIss(publicKey) {
    const header = fromString$1(MULTICODEC_ED25519_HEADER, MULTICODEC_ED25519_ENCODING);
    const multicodec = MULTICODEC_ED25519_BASE +
        toString$1(concat([header, publicKey]), MULTICODEC_ED25519_ENCODING);
    return [DID_PREFIX, DID_METHOD, multicodec].join(DID_DELIMITER);
}
function encodeSig(bytes) {
    return toString$1(bytes, JWT_ENCODING);
}
function encodeData(params) {
    return fromString$1([encodeJSON(params.header), encodeJSON(params.payload)].join(JWT_DELIMITER), DATA_ENCODING);
}
function encodeJWT(params) {
    return [
        encodeJSON(params.header),
        encodeJSON(params.payload),
        encodeSig(params.signature),
    ].join(JWT_DELIMITER);
}

function generateKeyPair(seed = random.randomBytes(KEY_PAIR_SEED_LENGTH)) {
    return ed25519.generateKeyPairFromSeed(seed);
}
async function signJWT(sub, aud, ttl, keyPair, iat = cjs$3.fromMiliseconds(Date.now())) {
    const header = { alg: JWT_IRIDIUM_ALG, typ: JWT_IRIDIUM_TYP };
    const iss = encodeIss(keyPair.publicKey);
    const exp = iat + ttl;
    const payload = { iss, sub, aud, iat, exp };
    const data = encodeData({ header, payload });
    const signature = ed25519.sign(keyPair.secretKey, data);
    return encodeJWT({ header, payload, signature });
}

var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var inited = false;
function init () {
  inited = true;
  var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  for (var i = 0, len = code.length; i < len; ++i) {
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
  }

  revLookup['-'.charCodeAt(0)] = 62;
  revLookup['_'.charCodeAt(0)] = 63;
}

function toByteArray (b64) {
  if (!inited) {
    init();
  }
  var i, j, l, tmp, placeHolders, arr;
  var len = b64.length;

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;

  // base64 is 4/3 + up to two characters of the original data
  arr = new Arr(len * 3 / 4 - placeHolders);

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len;

  var L = 0;

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)];
    arr[L++] = (tmp >> 16) & 0xFF;
    arr[L++] = (tmp >> 8) & 0xFF;
    arr[L++] = tmp & 0xFF;
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4);
    arr[L++] = tmp & 0xFF;
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2);
    arr[L++] = (tmp >> 8) & 0xFF;
    arr[L++] = tmp & 0xFF;
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp;
  var output = [];
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2]);
    output.push(tripletToBase64(tmp));
  }
  return output.join('')
}

function fromByteArray (uint8) {
  if (!inited) {
    init();
  }
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
  var output = '';
  var parts = [];
  var maxChunkLength = 16383; // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)));
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    output += lookup[tmp >> 2];
    output += lookup[(tmp << 4) & 0x3F];
    output += '==';
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1]);
    output += lookup[tmp >> 10];
    output += lookup[(tmp >> 4) & 0x3F];
    output += lookup[(tmp << 2) & 0x3F];
    output += '=';
  }

  parts.push(output);

  return parts.join('')
}

function read (buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? (nBytes - 1) : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];

  i += d;

  e = s & ((1 << (-nBits)) - 1);
  s >>= (-nBits);
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1);
  e >>= (-nBits);
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

function write (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0);
  var i = isLE ? 0 : (nBytes - 1);
  var d = isLE ? 1 : -1;
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128;
}

var toString = {}.toString;

var isArray = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */


var INSPECT_MAX_BYTES = 50;

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer$1.TYPED_ARRAY_SUPPORT = global$1.TYPED_ARRAY_SUPPORT !== undefined
  ? global$1.TYPED_ARRAY_SUPPORT
  : true;

/*
 * Export kMaxLength after typed array support is determined.
 */
kMaxLength();

function kMaxLength () {
  return Buffer$1.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length);
    that.__proto__ = Buffer$1.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer$1(length);
    }
    that.length = length;
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer$1 (arg, encodingOrOffset, length) {
  if (!Buffer$1.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer$1)) {
    return new Buffer$1(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer$1.poolSize = 8192; // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer$1._augment = function (arr) {
  arr.__proto__ = Buffer$1.prototype;
  return arr
};

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer$1.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
};

if (Buffer$1.TYPED_ARRAY_SUPPORT) {
  Buffer$1.prototype.__proto__ = Uint8Array.prototype;
  Buffer$1.__proto__ = Uint8Array;
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer$1[Symbol.species] === Buffer$1) ;
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size);
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer$1.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
};

function allocUnsafe (that, size) {
  assertSize(size);
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
  if (!Buffer$1.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0;
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer$1.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer$1.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
};

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8';
  }

  if (!Buffer$1.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0;
  that = createBuffer(that, length);

  var actual = that.write(string, encoding);

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual);
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  that = createBuffer(that, length);
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255;
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength; // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array);
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset);
  } else {
    array = new Uint8Array(array, byteOffset, length);
  }

  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array;
    that.__proto__ = Buffer$1.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array);
  }
  return that
}

function fromObject (that, obj) {
  if (internalIsBuffer(obj)) {
    var len = checked(obj.length) | 0;
    that = createBuffer(that, len);

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len);
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}
Buffer$1.isBuffer = isBuffer;
function internalIsBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer$1.compare = function compare (a, b) {
  if (!internalIsBuffer(a) || !internalIsBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
};

Buffer$1.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
};

Buffer$1.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer$1.alloc(0)
  }

  var i;
  if (length === undefined) {
    length = 0;
    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }

  var buffer = Buffer$1.allocUnsafe(length);
  var pos = 0;
  for (i = 0; i < list.length; ++i) {
    var buf = list[i];
    if (!internalIsBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos);
    pos += buf.length;
  }
  return buffer
};

function byteLength (string, encoding) {
  if (internalIsBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string;
  }

  var len = string.length;
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}
Buffer$1.byteLength = byteLength;

function slowToString (encoding, start, end) {
  var loweredCase = false;

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0;
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length;
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0;
  start >>>= 0;

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8';

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase();
        loweredCase = true;
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer$1.prototype._isBuffer = true;

function swap (b, n, m) {
  var i = b[n];
  b[n] = b[m];
  b[m] = i;
}

Buffer$1.prototype.swap16 = function swap16 () {
  var len = this.length;
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1);
  }
  return this
};

Buffer$1.prototype.swap32 = function swap32 () {
  var len = this.length;
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3);
    swap(this, i + 1, i + 2);
  }
  return this
};

Buffer$1.prototype.swap64 = function swap64 () {
  var len = this.length;
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7);
    swap(this, i + 1, i + 6);
    swap(this, i + 2, i + 5);
    swap(this, i + 3, i + 4);
  }
  return this
};

Buffer$1.prototype.toString = function toString () {
  var length = this.length | 0;
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
};

Buffer$1.prototype.equals = function equals (b) {
  if (!internalIsBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer$1.compare(this, b) === 0
};

Buffer$1.prototype.inspect = function inspect () {
  var str = '';
  var max = INSPECT_MAX_BYTES;
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
    if (this.length > max) str += ' ... ';
  }
  return '<Buffer ' + str + '>'
};

Buffer$1.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!internalIsBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0;
  }
  if (end === undefined) {
    end = target ? target.length : 0;
  }
  if (thisStart === undefined) {
    thisStart = 0;
  }
  if (thisEnd === undefined) {
    thisEnd = this.length;
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0;
  end >>>= 0;
  thisStart >>>= 0;
  thisEnd >>>= 0;

  if (this === target) return 0

  var x = thisEnd - thisStart;
  var y = end - start;
  var len = Math.min(x, y);

  var thisCopy = this.slice(thisStart, thisEnd);
  var targetCopy = target.slice(start, end);

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i];
      y = targetCopy[i];
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
};

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff;
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000;
  }
  byteOffset = +byteOffset;  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1);
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0;
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer$1.from(val, encoding);
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (internalIsBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF; // Search for a byte value [0-255]
    if (Buffer$1.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1;
  var arrLength = arr.length;
  var valLength = val.length;

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase();
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i;
  if (dir) {
    var foundIndex = -1;
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i;
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
    for (i = byteOffset; i >= 0; i--) {
      var found = true;
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false;
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer$1.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
};

Buffer$1.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
};

Buffer$1.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
};

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;
  if (!length) {
    length = remaining;
  } else {
    length = Number(length);
    if (length > remaining) {
      length = remaining;
    }
  }

  // must be an even number of digits
  var strLen = string.length;
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2;
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16);
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed;
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer$1.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8';
    length = this.length;
    offset = 0;
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset;
    length = this.length;
    offset = 0;
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0;
    if (isFinite(length)) {
      length = length | 0;
      if (encoding === undefined) encoding = 'utf8';
    } else {
      encoding = length;
      length = undefined;
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset;
  if (length === undefined || length > remaining) length = remaining;

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8';

  var loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
};

Buffer$1.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
};

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return fromByteArray(buf)
  } else {
    return fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end);
  var res = [];

  var i = start;
  while (i < end) {
    var firstByte = buf[i];
    var codePoint = null;
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1;

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint;

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte;
          }
          break
        case 2:
          secondByte = buf[i + 1];
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F);
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint;
            }
          }
          break
        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F);
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint;
            }
          }
          break
        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F);
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint;
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD;
      bytesPerSequence = 1;
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000;
      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
      codePoint = 0xDC00 | codePoint & 0x3FF;
    }

    res.push(codePoint);
    i += bytesPerSequence;
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000;

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length;
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = '';
  var i = 0;
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    );
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F);
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length;

  if (!start || start < 0) start = 0;
  if (!end || end < 0 || end > len) end = len;

  var out = '';
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i]);
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end);
  var res = '';
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }
  return res
}

Buffer$1.prototype.slice = function slice (start, end) {
  var len = this.length;
  start = ~~start;
  end = end === undefined ? len : ~~end;

  if (start < 0) {
    start += len;
    if (start < 0) start = 0;
  } else if (start > len) {
    start = len;
  }

  if (end < 0) {
    end += len;
    if (end < 0) end = 0;
  } else if (end > len) {
    end = len;
  }

  if (end < start) end = start;

  var newBuf;
  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end);
    newBuf.__proto__ = Buffer$1.prototype;
  } else {
    var sliceLen = end - start;
    newBuf = new Buffer$1(sliceLen, undefined);
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start];
    }
  }

  return newBuf
};

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer$1.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  return val
};

Buffer$1.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length);
  }

  var val = this[offset + --byteLength];
  var mul = 1;
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul;
  }

  return val
};

Buffer$1.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  return this[offset]
};

Buffer$1.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] | (this[offset + 1] << 8)
};

Buffer$1.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return (this[offset] << 8) | this[offset + 1]
};

Buffer$1.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
};

Buffer$1.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
};

Buffer$1.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }
  mul *= 0x80;

  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

  return val
};

Buffer$1.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var i = byteLength;
  var mul = 1;
  var val = this[offset + --i];
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul;
  }
  mul *= 0x80;

  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

  return val
};

Buffer$1.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
};

Buffer$1.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset] | (this[offset + 1] << 8);
  return (val & 0x8000) ? val | 0xFFFF0000 : val
};

Buffer$1.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset + 1] | (this[offset] << 8);
  return (val & 0x8000) ? val | 0xFFFF0000 : val
};

Buffer$1.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
};

Buffer$1.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
};

Buffer$1.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return read(this, offset, true, 23, 4)
};

Buffer$1.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return read(this, offset, false, 23, 4)
};

Buffer$1.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return read(this, offset, true, 52, 8)
};

Buffer$1.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return read(this, offset, false, 52, 8)
};

function checkInt (buf, value, offset, ext, max, min) {
  if (!internalIsBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer$1.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var mul = 1;
  var i = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF;
  }

  return offset + byteLength
};

Buffer$1.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var i = byteLength - 1;
  var mul = 1;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF;
  }

  return offset + byteLength
};

Buffer$1.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
  if (!Buffer$1.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  this[offset] = (value & 0xff);
  return offset + 1
};

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8;
  }
}

Buffer$1.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff);
    this[offset + 1] = (value >>> 8);
  } else {
    objectWriteUInt16(this, value, offset, true);
  }
  return offset + 2
};

Buffer$1.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8);
    this[offset + 1] = (value & 0xff);
  } else {
    objectWriteUInt16(this, value, offset, false);
  }
  return offset + 2
};

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff;
  }
}

Buffer$1.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24);
    this[offset + 2] = (value >>> 16);
    this[offset + 1] = (value >>> 8);
    this[offset] = (value & 0xff);
  } else {
    objectWriteUInt32(this, value, offset, true);
  }
  return offset + 4
};

Buffer$1.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24);
    this[offset + 1] = (value >>> 16);
    this[offset + 2] = (value >>> 8);
    this[offset + 3] = (value & 0xff);
  } else {
    objectWriteUInt32(this, value, offset, false);
  }
  return offset + 4
};

Buffer$1.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);

    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = 0;
  var mul = 1;
  var sub = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
  }

  return offset + byteLength
};

Buffer$1.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);

    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = byteLength - 1;
  var mul = 1;
  var sub = 0;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
  }

  return offset + byteLength
};

Buffer$1.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
  if (!Buffer$1.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  if (value < 0) value = 0xff + value + 1;
  this[offset] = (value & 0xff);
  return offset + 1
};

Buffer$1.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff);
    this[offset + 1] = (value >>> 8);
  } else {
    objectWriteUInt16(this, value, offset, true);
  }
  return offset + 2
};

Buffer$1.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8);
    this[offset + 1] = (value & 0xff);
  } else {
    objectWriteUInt16(this, value, offset, false);
  }
  return offset + 2
};

Buffer$1.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff);
    this[offset + 1] = (value >>> 8);
    this[offset + 2] = (value >>> 16);
    this[offset + 3] = (value >>> 24);
  } else {
    objectWriteUInt32(this, value, offset, true);
  }
  return offset + 4
};

Buffer$1.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (value < 0) value = 0xffffffff + value + 1;
  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24);
    this[offset + 1] = (value >>> 16);
    this[offset + 2] = (value >>> 8);
    this[offset + 3] = (value & 0xff);
  } else {
    objectWriteUInt32(this, value, offset, false);
  }
  return offset + 4
};

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4);
  }
  write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4
}

Buffer$1.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
};

Buffer$1.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
};

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8);
  }
  write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8
}

Buffer$1.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
};

Buffer$1.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
};

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer$1.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (targetStart >= target.length) targetStart = target.length;
  if (!targetStart) targetStart = 0;
  if (end > 0 && end < start) end = start;

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length;
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }

  var len = end - start;
  var i;

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start];
    }
  } else if (len < 1000 || !Buffer$1.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start];
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    );
  }

  return len
};

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer$1.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start;
      start = 0;
      end = this.length;
    } else if (typeof end === 'string') {
      encoding = end;
      end = this.length;
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0);
      if (code < 256) {
        val = code;
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer$1.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255;
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0;
  end = end === undefined ? this.length : end >>> 0;

  if (!val) val = 0;

  var i;
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val;
    }
  } else {
    var bytes = internalIsBuffer(val)
      ? val
      : utf8ToBytes(new Buffer$1(val, encoding).toString());
    var len = bytes.length;
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len];
    }
  }

  return this
};

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '');
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '=';
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i);

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue
        }

        // valid lead
        leadSurrogate = codePoint;

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        leadSurrogate = codePoint;
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
    }

    leadSurrogate = null;

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint);
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      );
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      );
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      );
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo;
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }

  return byteArray
}


function base64ToBytes (str) {
  return toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i];
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}


// the following is from is-buffer, also by Feross Aboukhadijeh and with same lisence
// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
function isBuffer(obj) {
  return obj != null && (!!obj._isBuffer || isFastBuffer(obj) || isSlowBuffer(obj))
}

function isFastBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isFastBuffer(obj.slice(0, 0))
}

var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var BrowserInfo = /** @class */ (function () {
    function BrowserInfo(name, version, os) {
        this.name = name;
        this.version = version;
        this.os = os;
        this.type = 'browser';
    }
    return BrowserInfo;
}());
var NodeInfo = /** @class */ (function () {
    function NodeInfo(version) {
        this.version = version;
        this.type = 'node';
        this.name = 'node';
        this.os = browser$1$1.platform;
    }
    return NodeInfo;
}());
var SearchBotDeviceInfo = /** @class */ (function () {
    function SearchBotDeviceInfo(name, version, os, bot) {
        this.name = name;
        this.version = version;
        this.os = os;
        this.bot = bot;
        this.type = 'bot-device';
    }
    return SearchBotDeviceInfo;
}());
var BotInfo = /** @class */ (function () {
    function BotInfo() {
        this.type = 'bot';
        this.bot = true; // NOTE: deprecated test name instead
        this.name = 'bot';
        this.version = null;
        this.os = null;
    }
    return BotInfo;
}());
var ReactNativeInfo = /** @class */ (function () {
    function ReactNativeInfo() {
        this.type = 'react-native';
        this.name = 'react-native';
        this.version = null;
        this.os = null;
    }
    return ReactNativeInfo;
}());
// tslint:disable-next-line:max-line-length
var SEARCHBOX_UA_REGEX = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/;
var SEARCHBOT_OS_REGEX = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/;
var REQUIRED_VERSION_PARTS = 3;
var userAgentRules = [
    ['aol', /AOLShield\/([0-9\._]+)/],
    ['edge', /Edge\/([0-9\._]+)/],
    ['edge-ios', /EdgiOS\/([0-9\._]+)/],
    ['yandexbrowser', /YaBrowser\/([0-9\._]+)/],
    ['kakaotalk', /KAKAOTALK\s([0-9\.]+)/],
    ['samsung', /SamsungBrowser\/([0-9\.]+)/],
    ['silk', /\bSilk\/([0-9._-]+)\b/],
    ['miui', /MiuiBrowser\/([0-9\.]+)$/],
    ['beaker', /BeakerBrowser\/([0-9\.]+)/],
    ['edge-chromium', /EdgA?\/([0-9\.]+)/],
    [
        'chromium-webview',
        /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/,
    ],
    ['chrome', /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
    ['phantomjs', /PhantomJS\/([0-9\.]+)(:?\s|$)/],
    ['crios', /CriOS\/([0-9\.]+)(:?\s|$)/],
    ['firefox', /Firefox\/([0-9\.]+)(?:\s|$)/],
    ['fxios', /FxiOS\/([0-9\.]+)/],
    ['opera-mini', /Opera Mini.*Version\/([0-9\.]+)/],
    ['opera', /Opera\/([0-9\.]+)(?:\s|$)/],
    ['opera', /OPR\/([0-9\.]+)(:?\s|$)/],
    ['pie', /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
    ['pie', /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],
    ['netfront', /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
    ['ie', /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
    ['ie', /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
    ['ie', /MSIE\s(7\.0)/],
    ['bb10', /BB10;\sTouch.*Version\/([0-9\.]+)/],
    ['android', /Android\s([0-9\.]+)/],
    ['ios', /Version\/([0-9\._]+).*Mobile.*Safari.*/],
    ['safari', /Version\/([0-9\._]+).*Safari/],
    ['facebook', /FB[AS]V\/([0-9\.]+)/],
    ['instagram', /Instagram\s([0-9\.]+)/],
    ['ios-webview', /AppleWebKit\/([0-9\.]+).*Mobile/],
    ['ios-webview', /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
    ['curl', /^curl\/([0-9\.]+)$/],
    ['searchbot', SEARCHBOX_UA_REGEX],
];
var operatingSystemRules = [
    ['iOS', /iP(hone|od|ad)/],
    ['Android OS', /Android/],
    ['BlackBerry OS', /BlackBerry|BB10/],
    ['Windows Mobile', /IEMobile/],
    ['Amazon OS', /Kindle/],
    ['Windows 3.11', /Win16/],
    ['Windows 95', /(Windows 95)|(Win95)|(Windows_95)/],
    ['Windows 98', /(Windows 98)|(Win98)/],
    ['Windows 2000', /(Windows NT 5.0)|(Windows 2000)/],
    ['Windows XP', /(Windows NT 5.1)|(Windows XP)/],
    ['Windows Server 2003', /(Windows NT 5.2)/],
    ['Windows Vista', /(Windows NT 6.0)/],
    ['Windows 7', /(Windows NT 6.1)/],
    ['Windows 8', /(Windows NT 6.2)/],
    ['Windows 8.1', /(Windows NT 6.3)/],
    ['Windows 10', /(Windows NT 10.0)/],
    ['Windows ME', /Windows ME/],
    ['Windows CE', /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
    ['Open BSD', /OpenBSD/],
    ['Sun OS', /SunOS/],
    ['Chrome OS', /CrOS/],
    ['Linux', /(Linux)|(X11)/],
    ['Mac OS', /(Mac_PowerPC)|(Macintosh)/],
    ['QNX', /QNX/],
    ['BeOS', /BeOS/],
    ['OS/2', /OS\/2/],
];
function detect(userAgent) {
    if (typeof document === 'undefined' &&
        typeof navigator !== 'undefined' &&
        navigator.product === 'ReactNative') {
        return new ReactNativeInfo();
    }
    if (typeof navigator !== 'undefined') {
        return parseUserAgent(navigator.userAgent);
    }
    return getNodeVersion();
}
function matchUserAgent(ua) {
    // opted for using reduce here rather than Array#first with a regex.test call
    // this is primarily because using the reduce we only perform the regex
    // execution once rather than once for the test and for the exec again below
    // probably something that needs to be benchmarked though
    return (ua !== '' &&
        userAgentRules.reduce(function (matched, _a) {
            var browser = _a[0], regex = _a[1];
            if (matched) {
                return matched;
            }
            var uaMatch = regex.exec(ua);
            return !!uaMatch && [browser, uaMatch];
        }, false));
}
function parseUserAgent(ua) {
    var matchedRule = matchUserAgent(ua);
    if (!matchedRule) {
        return null;
    }
    var name = matchedRule[0], match = matchedRule[1];
    if (name === 'searchbot') {
        return new BotInfo();
    }
    // Do not use RegExp for split operation as some browser do not support it (See: http://blog.stevenlevithan.com/archives/cross-browser-split)
    var versionParts = match[1] && match[1].split('.').join('_').split('_').slice(0, 3);
    if (versionParts) {
        if (versionParts.length < REQUIRED_VERSION_PARTS) {
            versionParts = __spreadArray(__spreadArray([], versionParts, true), createVersionParts(REQUIRED_VERSION_PARTS - versionParts.length), true);
        }
    }
    else {
        versionParts = [];
    }
    var version = versionParts.join('.');
    var os = detectOS(ua);
    var searchBotMatch = SEARCHBOT_OS_REGEX.exec(ua);
    if (searchBotMatch && searchBotMatch[1]) {
        return new SearchBotDeviceInfo(name, version, os, searchBotMatch[1]);
    }
    return new BrowserInfo(name, version, os);
}
function detectOS(ua) {
    for (var ii = 0, count = operatingSystemRules.length; ii < count; ii++) {
        var _a = operatingSystemRules[ii], os = _a[0], regex = _a[1];
        var match = regex.exec(ua);
        if (match) {
            return os;
        }
    }
    return null;
}
function getNodeVersion() {
    var isNode = typeof browser$1$1 !== 'undefined' && browser$1$1.version;
    return isNode ? new NodeInfo(browser$1$1.version.slice(1)) : null;
}
function createVersionParts(count) {
    var output = [];
    for (var ii = 0; ii < count; ii++) {
        output.push('0');
    }
    return output;
}

var cjs$2 = {};

Object.defineProperty(cjs$2, "__esModule", { value: true });
cjs$2.getLocalStorage = cjs$2.getLocalStorageOrThrow = cjs$2.getCrypto = cjs$2.getCryptoOrThrow = getLocation_1 = cjs$2.getLocation = cjs$2.getLocationOrThrow = getNavigator_1 = cjs$2.getNavigator = cjs$2.getNavigatorOrThrow = getDocument_1 = cjs$2.getDocument = cjs$2.getDocumentOrThrow = cjs$2.getFromWindowOrThrow = cjs$2.getFromWindow = void 0;
function getFromWindow(name) {
    let res = undefined;
    if (typeof window !== "undefined" && typeof window[name] !== "undefined") {
        res = window[name];
    }
    return res;
}
cjs$2.getFromWindow = getFromWindow;
function getFromWindowOrThrow(name) {
    const res = getFromWindow(name);
    if (!res) {
        throw new Error(`${name} is not defined in Window`);
    }
    return res;
}
cjs$2.getFromWindowOrThrow = getFromWindowOrThrow;
function getDocumentOrThrow() {
    return getFromWindowOrThrow("document");
}
cjs$2.getDocumentOrThrow = getDocumentOrThrow;
function getDocument() {
    return getFromWindow("document");
}
var getDocument_1 = cjs$2.getDocument = getDocument;
function getNavigatorOrThrow() {
    return getFromWindowOrThrow("navigator");
}
cjs$2.getNavigatorOrThrow = getNavigatorOrThrow;
function getNavigator() {
    return getFromWindow("navigator");
}
var getNavigator_1 = cjs$2.getNavigator = getNavigator;
function getLocationOrThrow() {
    return getFromWindowOrThrow("location");
}
cjs$2.getLocationOrThrow = getLocationOrThrow;
function getLocation() {
    return getFromWindow("location");
}
var getLocation_1 = cjs$2.getLocation = getLocation;
function getCryptoOrThrow() {
    return getFromWindowOrThrow("crypto");
}
cjs$2.getCryptoOrThrow = getCryptoOrThrow;
function getCrypto() {
    return getFromWindow("crypto");
}
cjs$2.getCrypto = getCrypto;
function getLocalStorageOrThrow() {
    return getFromWindowOrThrow("localStorage");
}
cjs$2.getLocalStorageOrThrow = getLocalStorageOrThrow;
function getLocalStorage() {
    return getFromWindow("localStorage");
}
cjs$2.getLocalStorage = getLocalStorage;

var cjs$1 = {};

Object.defineProperty(cjs$1, "__esModule", { value: true });
var getWindowMetadata_1 = cjs$1.getWindowMetadata = void 0;
const window_getters_1 = cjs$2;
function getWindowMetadata() {
    let doc;
    let loc;
    try {
        doc = window_getters_1.getDocumentOrThrow();
        loc = window_getters_1.getLocationOrThrow();
    }
    catch (e) {
        return null;
    }
    function getIcons() {
        const links = doc.getElementsByTagName("link");
        const icons = [];
        for (let i = 0; i < links.length; i++) {
            const link = links[i];
            const rel = link.getAttribute("rel");
            if (rel) {
                if (rel.toLowerCase().indexOf("icon") > -1) {
                    const href = link.getAttribute("href");
                    if (href) {
                        if (href.toLowerCase().indexOf("https:") === -1 &&
                            href.toLowerCase().indexOf("http:") === -1 &&
                            href.indexOf("//") !== 0) {
                            let absoluteHref = loc.protocol + "//" + loc.host;
                            if (href.indexOf("/") === 0) {
                                absoluteHref += href;
                            }
                            else {
                                const path = loc.pathname.split("/");
                                path.pop();
                                const finalPath = path.join("/");
                                absoluteHref += finalPath + "/" + href;
                            }
                            icons.push(absoluteHref);
                        }
                        else if (href.indexOf("//") === 0) {
                            const absoluteUrl = loc.protocol + href;
                            icons.push(absoluteUrl);
                        }
                        else {
                            icons.push(href);
                        }
                    }
                }
            }
        }
        return icons;
    }
    function getWindowMetadataOfAny(...args) {
        const metaTags = doc.getElementsByTagName("meta");
        for (let i = 0; i < metaTags.length; i++) {
            const tag = metaTags[i];
            const attributes = ["itemprop", "property", "name"]
                .map((target) => tag.getAttribute(target))
                .filter((attr) => {
                if (attr) {
                    return args.includes(attr);
                }
                return false;
            });
            if (attributes.length && attributes) {
                const content = tag.getAttribute("content");
                if (content) {
                    return content;
                }
            }
        }
        return "";
    }
    function getName() {
        let name = getWindowMetadataOfAny("name", "og:site_name", "og:title", "twitter:title");
        if (!name) {
            name = doc.title;
        }
        return name;
    }
    function getDescription() {
        const description = getWindowMetadataOfAny("description", "og:description", "twitter:description", "keywords");
        return description;
    }
    const name = getName();
    const description = getDescription();
    const url = loc.origin;
    const icons = getIcons();
    const meta = {
        description,
        url,
        icons,
        name,
    };
    return meta;
}
getWindowMetadata_1 = cjs$1.getWindowMetadata = getWindowMetadata;

var queryString = {};

var strictUriEncode = str => encodeURIComponent(str).replace(/[!'()*]/g, x => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);

var token = '%[a-f0-9]{2}';
var singleMatcher = new RegExp('(' + token + ')|([^%]+?)', 'gi');
var multiMatcher = new RegExp('(' + token + ')+', 'gi');

function decodeComponents(components, split) {
	try {
		// Try to decode the entire string first
		return [decodeURIComponent(components.join(''))];
	} catch (err) {
		// Do nothing
	}

	if (components.length === 1) {
		return components;
	}

	split = split || 1;

	// Split the array in 2 parts
	var left = components.slice(0, split);
	var right = components.slice(split);

	return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}

function decode(input) {
	try {
		return decodeURIComponent(input);
	} catch (err) {
		var tokens = input.match(singleMatcher) || [];

		for (var i = 1; i < tokens.length; i++) {
			input = decodeComponents(tokens, i).join('');

			tokens = input.match(singleMatcher) || [];
		}

		return input;
	}
}

function customDecodeURIComponent(input) {
	// Keep track of all the replacements and prefill the map with the `BOM`
	var replaceMap = {
		'%FE%FF': '\uFFFD\uFFFD',
		'%FF%FE': '\uFFFD\uFFFD'
	};

	var match = multiMatcher.exec(input);
	while (match) {
		try {
			// Decode as big chunks as possible
			replaceMap[match[0]] = decodeURIComponent(match[0]);
		} catch (err) {
			var result = decode(match[0]);

			if (result !== match[0]) {
				replaceMap[match[0]] = result;
			}
		}

		match = multiMatcher.exec(input);
	}

	// Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
	replaceMap['%C2'] = '\uFFFD';

	var entries = Object.keys(replaceMap);

	for (var i = 0; i < entries.length; i++) {
		// Replace all decoded components
		var key = entries[i];
		input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
	}

	return input;
}

var decodeUriComponent = function (encodedURI) {
	if (typeof encodedURI !== 'string') {
		throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
	}

	try {
		encodedURI = encodedURI.replace(/\+/g, ' ');

		// Try the built in decoder first
		return decodeURIComponent(encodedURI);
	} catch (err) {
		// Fallback to a more advanced decoder
		return customDecodeURIComponent(encodedURI);
	}
};

var splitOnFirst = (string, separator) => {
	if (!(typeof string === 'string' && typeof separator === 'string')) {
		throw new TypeError('Expected the arguments to be of type `string`');
	}

	if (separator === '') {
		return [string];
	}

	const separatorIndex = string.indexOf(separator);

	if (separatorIndex === -1) {
		return [string];
	}

	return [
		string.slice(0, separatorIndex),
		string.slice(separatorIndex + separator.length)
	];
};

var filterObj = function (obj, predicate) {
	var ret = {};
	var keys = Object.keys(obj);
	var isArr = Array.isArray(predicate);

	for (var i = 0; i < keys.length; i++) {
		var key = keys[i];
		var val = obj[key];

		if (isArr ? predicate.indexOf(key) !== -1 : predicate(key, val, obj)) {
			ret[key] = val;
		}
	}

	return ret;
};

(function (exports) {
	const strictUriEncode$1 = strictUriEncode;
	const decodeComponent = decodeUriComponent;
	const splitOnFirst$1 = splitOnFirst;
	const filterObject = filterObj;

	const isNullOrUndefined = value => value === null || value === undefined;

	const encodeFragmentIdentifier = Symbol('encodeFragmentIdentifier');

	function encoderForArrayFormat(options) {
		switch (options.arrayFormat) {
			case 'index':
				return key => (result, value) => {
					const index = result.length;

					if (
						value === undefined ||
						(options.skipNull && value === null) ||
						(options.skipEmptyString && value === '')
					) {
						return result;
					}

					if (value === null) {
						return [...result, [encode(key, options), '[', index, ']'].join('')];
					}

					return [
						...result,
						[encode(key, options), '[', encode(index, options), ']=', encode(value, options)].join('')
					];
				};

			case 'bracket':
				return key => (result, value) => {
					if (
						value === undefined ||
						(options.skipNull && value === null) ||
						(options.skipEmptyString && value === '')
					) {
						return result;
					}

					if (value === null) {
						return [...result, [encode(key, options), '[]'].join('')];
					}

					return [...result, [encode(key, options), '[]=', encode(value, options)].join('')];
				};

			case 'colon-list-separator':
				return key => (result, value) => {
					if (
						value === undefined ||
						(options.skipNull && value === null) ||
						(options.skipEmptyString && value === '')
					) {
						return result;
					}

					if (value === null) {
						return [...result, [encode(key, options), ':list='].join('')];
					}

					return [...result, [encode(key, options), ':list=', encode(value, options)].join('')];
				};

			case 'comma':
			case 'separator':
			case 'bracket-separator': {
				const keyValueSep = options.arrayFormat === 'bracket-separator' ?
					'[]=' :
					'=';

				return key => (result, value) => {
					if (
						value === undefined ||
						(options.skipNull && value === null) ||
						(options.skipEmptyString && value === '')
					) {
						return result;
					}

					// Translate null to an empty string so that it doesn't serialize as 'null'
					value = value === null ? '' : value;

					if (result.length === 0) {
						return [[encode(key, options), keyValueSep, encode(value, options)].join('')];
					}

					return [[result, encode(value, options)].join(options.arrayFormatSeparator)];
				};
			}

			default:
				return key => (result, value) => {
					if (
						value === undefined ||
						(options.skipNull && value === null) ||
						(options.skipEmptyString && value === '')
					) {
						return result;
					}

					if (value === null) {
						return [...result, encode(key, options)];
					}

					return [...result, [encode(key, options), '=', encode(value, options)].join('')];
				};
		}
	}

	function parserForArrayFormat(options) {
		let result;

		switch (options.arrayFormat) {
			case 'index':
				return (key, value, accumulator) => {
					result = /\[(\d*)\]$/.exec(key);

					key = key.replace(/\[\d*\]$/, '');

					if (!result) {
						accumulator[key] = value;
						return;
					}

					if (accumulator[key] === undefined) {
						accumulator[key] = {};
					}

					accumulator[key][result[1]] = value;
				};

			case 'bracket':
				return (key, value, accumulator) => {
					result = /(\[\])$/.exec(key);
					key = key.replace(/\[\]$/, '');

					if (!result) {
						accumulator[key] = value;
						return;
					}

					if (accumulator[key] === undefined) {
						accumulator[key] = [value];
						return;
					}

					accumulator[key] = [].concat(accumulator[key], value);
				};

			case 'colon-list-separator':
				return (key, value, accumulator) => {
					result = /(:list)$/.exec(key);
					key = key.replace(/:list$/, '');

					if (!result) {
						accumulator[key] = value;
						return;
					}

					if (accumulator[key] === undefined) {
						accumulator[key] = [value];
						return;
					}

					accumulator[key] = [].concat(accumulator[key], value);
				};

			case 'comma':
			case 'separator':
				return (key, value, accumulator) => {
					const isArray = typeof value === 'string' && value.includes(options.arrayFormatSeparator);
					const isEncodedArray = (typeof value === 'string' && !isArray && decode(value, options).includes(options.arrayFormatSeparator));
					value = isEncodedArray ? decode(value, options) : value;
					const newValue = isArray || isEncodedArray ? value.split(options.arrayFormatSeparator).map(item => decode(item, options)) : value === null ? value : decode(value, options);
					accumulator[key] = newValue;
				};

			case 'bracket-separator':
				return (key, value, accumulator) => {
					const isArray = /(\[\])$/.test(key);
					key = key.replace(/\[\]$/, '');

					if (!isArray) {
						accumulator[key] = value ? decode(value, options) : value;
						return;
					}

					const arrayValue = value === null ?
						[] :
						value.split(options.arrayFormatSeparator).map(item => decode(item, options));

					if (accumulator[key] === undefined) {
						accumulator[key] = arrayValue;
						return;
					}

					accumulator[key] = [].concat(accumulator[key], arrayValue);
				};

			default:
				return (key, value, accumulator) => {
					if (accumulator[key] === undefined) {
						accumulator[key] = value;
						return;
					}

					accumulator[key] = [].concat(accumulator[key], value);
				};
		}
	}

	function validateArrayFormatSeparator(value) {
		if (typeof value !== 'string' || value.length !== 1) {
			throw new TypeError('arrayFormatSeparator must be single character string');
		}
	}

	function encode(value, options) {
		if (options.encode) {
			return options.strict ? strictUriEncode$1(value) : encodeURIComponent(value);
		}

		return value;
	}

	function decode(value, options) {
		if (options.decode) {
			return decodeComponent(value);
		}

		return value;
	}

	function keysSorter(input) {
		if (Array.isArray(input)) {
			return input.sort();
		}

		if (typeof input === 'object') {
			return keysSorter(Object.keys(input))
				.sort((a, b) => Number(a) - Number(b))
				.map(key => input[key]);
		}

		return input;
	}

	function removeHash(input) {
		const hashStart = input.indexOf('#');
		if (hashStart !== -1) {
			input = input.slice(0, hashStart);
		}

		return input;
	}

	function getHash(url) {
		let hash = '';
		const hashStart = url.indexOf('#');
		if (hashStart !== -1) {
			hash = url.slice(hashStart);
		}

		return hash;
	}

	function extract(input) {
		input = removeHash(input);
		const queryStart = input.indexOf('?');
		if (queryStart === -1) {
			return '';
		}

		return input.slice(queryStart + 1);
	}

	function parseValue(value, options) {
		if (options.parseNumbers && !Number.isNaN(Number(value)) && (typeof value === 'string' && value.trim() !== '')) {
			value = Number(value);
		} else if (options.parseBooleans && value !== null && (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')) {
			value = value.toLowerCase() === 'true';
		}

		return value;
	}

	function parse(query, options) {
		options = Object.assign({
			decode: true,
			sort: true,
			arrayFormat: 'none',
			arrayFormatSeparator: ',',
			parseNumbers: false,
			parseBooleans: false
		}, options);

		validateArrayFormatSeparator(options.arrayFormatSeparator);

		const formatter = parserForArrayFormat(options);

		// Create an object with no prototype
		const ret = Object.create(null);

		if (typeof query !== 'string') {
			return ret;
		}

		query = query.trim().replace(/^[?#&]/, '');

		if (!query) {
			return ret;
		}

		for (const param of query.split('&')) {
			if (param === '') {
				continue;
			}

			let [key, value] = splitOnFirst$1(options.decode ? param.replace(/\+/g, ' ') : param, '=');

			// Missing `=` should be `null`:
			// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
			value = value === undefined ? null : ['comma', 'separator', 'bracket-separator'].includes(options.arrayFormat) ? value : decode(value, options);
			formatter(decode(key, options), value, ret);
		}

		for (const key of Object.keys(ret)) {
			const value = ret[key];
			if (typeof value === 'object' && value !== null) {
				for (const k of Object.keys(value)) {
					value[k] = parseValue(value[k], options);
				}
			} else {
				ret[key] = parseValue(value, options);
			}
		}

		if (options.sort === false) {
			return ret;
		}

		return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result, key) => {
			const value = ret[key];
			if (Boolean(value) && typeof value === 'object' && !Array.isArray(value)) {
				// Sort object keys, not values
				result[key] = keysSorter(value);
			} else {
				result[key] = value;
			}

			return result;
		}, Object.create(null));
	}

	exports.extract = extract;
	exports.parse = parse;

	exports.stringify = (object, options) => {
		if (!object) {
			return '';
		}

		options = Object.assign({
			encode: true,
			strict: true,
			arrayFormat: 'none',
			arrayFormatSeparator: ','
		}, options);

		validateArrayFormatSeparator(options.arrayFormatSeparator);

		const shouldFilter = key => (
			(options.skipNull && isNullOrUndefined(object[key])) ||
			(options.skipEmptyString && object[key] === '')
		);

		const formatter = encoderForArrayFormat(options);

		const objectCopy = {};

		for (const key of Object.keys(object)) {
			if (!shouldFilter(key)) {
				objectCopy[key] = object[key];
			}
		}

		const keys = Object.keys(objectCopy);

		if (options.sort !== false) {
			keys.sort(options.sort);
		}

		return keys.map(key => {
			const value = object[key];

			if (value === undefined) {
				return '';
			}

			if (value === null) {
				return encode(key, options);
			}

			if (Array.isArray(value)) {
				if (value.length === 0 && options.arrayFormat === 'bracket-separator') {
					return encode(key, options) + '[]';
				}

				return value
					.reduce(formatter(key), [])
					.join('&');
			}

			return encode(key, options) + '=' + encode(value, options);
		}).filter(x => x.length > 0).join('&');
	};

	exports.parseUrl = (url, options) => {
		options = Object.assign({
			decode: true
		}, options);

		const [url_, hash] = splitOnFirst$1(url, '#');

		return Object.assign(
			{
				url: url_.split('?')[0] || '',
				query: parse(extract(url), options)
			},
			options && options.parseFragmentIdentifier && hash ? {fragmentIdentifier: decode(hash, options)} : {}
		);
	};

	exports.stringifyUrl = (object, options) => {
		options = Object.assign({
			encode: true,
			strict: true,
			[encodeFragmentIdentifier]: true
		}, options);

		const url = removeHash(object.url).split('?')[0] || '';
		const queryFromUrl = exports.extract(object.url);
		const parsedQueryFromUrl = exports.parse(queryFromUrl, {sort: false});

		const query = Object.assign(parsedQueryFromUrl, object.query);
		let queryString = exports.stringify(query, options);
		if (queryString) {
			queryString = `?${queryString}`;
		}

		let hash = getHash(object.url);
		if (object.fragmentIdentifier) {
			hash = `#${options[encodeFragmentIdentifier] ? encode(object.fragmentIdentifier, options) : object.fragmentIdentifier}`;
		}

		return `${url}${queryString}${hash}`;
	};

	exports.pick = (input, filter, options) => {
		options = Object.assign({
			parseFragmentIdentifier: true,
			[encodeFragmentIdentifier]: false
		}, options);

		const {url, query, fragmentIdentifier} = exports.parseUrl(input, options);
		return exports.stringifyUrl({
			url,
			query: filterObject(query, filter),
			fragmentIdentifier
		}, options);
	};

	exports.exclude = (input, filter, options) => {
		const exclusionFilter = Array.isArray(filter) ? key => !filter.includes(key) : (key, value) => !filter(key, value);

		return exports.pick(input, exclusionFilter, options);
	}; 
} (queryString));

var chacha20poly1305 = {};

var chacha = {};

// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(chacha, "__esModule", { value: true });
/**
 * Package chacha implements ChaCha stream cipher.
 */
var binary_1 = binary;
var wipe_1$2 = wipe$1;
// Number of ChaCha rounds (ChaCha20).
var ROUNDS = 20;
// Applies the ChaCha core function to 16-byte input,
// 32-byte key key, and puts the result into 64-byte array out.
function core(out, input, key) {
    var j0 = 0x61707865; // "expa"  -- ChaCha's "sigma" constant
    var j1 = 0x3320646E; // "nd 3"     for 32-byte keys
    var j2 = 0x79622D32; // "2-by"
    var j3 = 0x6B206574; // "te k"
    var j4 = (key[3] << 24) | (key[2] << 16) | (key[1] << 8) | key[0];
    var j5 = (key[7] << 24) | (key[6] << 16) | (key[5] << 8) | key[4];
    var j6 = (key[11] << 24) | (key[10] << 16) | (key[9] << 8) | key[8];
    var j7 = (key[15] << 24) | (key[14] << 16) | (key[13] << 8) | key[12];
    var j8 = (key[19] << 24) | (key[18] << 16) | (key[17] << 8) | key[16];
    var j9 = (key[23] << 24) | (key[22] << 16) | (key[21] << 8) | key[20];
    var j10 = (key[27] << 24) | (key[26] << 16) | (key[25] << 8) | key[24];
    var j11 = (key[31] << 24) | (key[30] << 16) | (key[29] << 8) | key[28];
    var j12 = (input[3] << 24) | (input[2] << 16) | (input[1] << 8) | input[0];
    var j13 = (input[7] << 24) | (input[6] << 16) | (input[5] << 8) | input[4];
    var j14 = (input[11] << 24) | (input[10] << 16) | (input[9] << 8) | input[8];
    var j15 = (input[15] << 24) | (input[14] << 16) | (input[13] << 8) | input[12];
    var x0 = j0;
    var x1 = j1;
    var x2 = j2;
    var x3 = j3;
    var x4 = j4;
    var x5 = j5;
    var x6 = j6;
    var x7 = j7;
    var x8 = j8;
    var x9 = j9;
    var x10 = j10;
    var x11 = j11;
    var x12 = j12;
    var x13 = j13;
    var x14 = j14;
    var x15 = j15;
    for (var i = 0; i < ROUNDS; i += 2) {
        x0 = x0 + x4 | 0;
        x12 ^= x0;
        x12 = x12 >>> (32 - 16) | x12 << 16;
        x8 = x8 + x12 | 0;
        x4 ^= x8;
        x4 = x4 >>> (32 - 12) | x4 << 12;
        x1 = x1 + x5 | 0;
        x13 ^= x1;
        x13 = x13 >>> (32 - 16) | x13 << 16;
        x9 = x9 + x13 | 0;
        x5 ^= x9;
        x5 = x5 >>> (32 - 12) | x5 << 12;
        x2 = x2 + x6 | 0;
        x14 ^= x2;
        x14 = x14 >>> (32 - 16) | x14 << 16;
        x10 = x10 + x14 | 0;
        x6 ^= x10;
        x6 = x6 >>> (32 - 12) | x6 << 12;
        x3 = x3 + x7 | 0;
        x15 ^= x3;
        x15 = x15 >>> (32 - 16) | x15 << 16;
        x11 = x11 + x15 | 0;
        x7 ^= x11;
        x7 = x7 >>> (32 - 12) | x7 << 12;
        x2 = x2 + x6 | 0;
        x14 ^= x2;
        x14 = x14 >>> (32 - 8) | x14 << 8;
        x10 = x10 + x14 | 0;
        x6 ^= x10;
        x6 = x6 >>> (32 - 7) | x6 << 7;
        x3 = x3 + x7 | 0;
        x15 ^= x3;
        x15 = x15 >>> (32 - 8) | x15 << 8;
        x11 = x11 + x15 | 0;
        x7 ^= x11;
        x7 = x7 >>> (32 - 7) | x7 << 7;
        x1 = x1 + x5 | 0;
        x13 ^= x1;
        x13 = x13 >>> (32 - 8) | x13 << 8;
        x9 = x9 + x13 | 0;
        x5 ^= x9;
        x5 = x5 >>> (32 - 7) | x5 << 7;
        x0 = x0 + x4 | 0;
        x12 ^= x0;
        x12 = x12 >>> (32 - 8) | x12 << 8;
        x8 = x8 + x12 | 0;
        x4 ^= x8;
        x4 = x4 >>> (32 - 7) | x4 << 7;
        x0 = x0 + x5 | 0;
        x15 ^= x0;
        x15 = x15 >>> (32 - 16) | x15 << 16;
        x10 = x10 + x15 | 0;
        x5 ^= x10;
        x5 = x5 >>> (32 - 12) | x5 << 12;
        x1 = x1 + x6 | 0;
        x12 ^= x1;
        x12 = x12 >>> (32 - 16) | x12 << 16;
        x11 = x11 + x12 | 0;
        x6 ^= x11;
        x6 = x6 >>> (32 - 12) | x6 << 12;
        x2 = x2 + x7 | 0;
        x13 ^= x2;
        x13 = x13 >>> (32 - 16) | x13 << 16;
        x8 = x8 + x13 | 0;
        x7 ^= x8;
        x7 = x7 >>> (32 - 12) | x7 << 12;
        x3 = x3 + x4 | 0;
        x14 ^= x3;
        x14 = x14 >>> (32 - 16) | x14 << 16;
        x9 = x9 + x14 | 0;
        x4 ^= x9;
        x4 = x4 >>> (32 - 12) | x4 << 12;
        x2 = x2 + x7 | 0;
        x13 ^= x2;
        x13 = x13 >>> (32 - 8) | x13 << 8;
        x8 = x8 + x13 | 0;
        x7 ^= x8;
        x7 = x7 >>> (32 - 7) | x7 << 7;
        x3 = x3 + x4 | 0;
        x14 ^= x3;
        x14 = x14 >>> (32 - 8) | x14 << 8;
        x9 = x9 + x14 | 0;
        x4 ^= x9;
        x4 = x4 >>> (32 - 7) | x4 << 7;
        x1 = x1 + x6 | 0;
        x12 ^= x1;
        x12 = x12 >>> (32 - 8) | x12 << 8;
        x11 = x11 + x12 | 0;
        x6 ^= x11;
        x6 = x6 >>> (32 - 7) | x6 << 7;
        x0 = x0 + x5 | 0;
        x15 ^= x0;
        x15 = x15 >>> (32 - 8) | x15 << 8;
        x10 = x10 + x15 | 0;
        x5 ^= x10;
        x5 = x5 >>> (32 - 7) | x5 << 7;
    }
    binary_1.writeUint32LE(x0 + j0 | 0, out, 0);
    binary_1.writeUint32LE(x1 + j1 | 0, out, 4);
    binary_1.writeUint32LE(x2 + j2 | 0, out, 8);
    binary_1.writeUint32LE(x3 + j3 | 0, out, 12);
    binary_1.writeUint32LE(x4 + j4 | 0, out, 16);
    binary_1.writeUint32LE(x5 + j5 | 0, out, 20);
    binary_1.writeUint32LE(x6 + j6 | 0, out, 24);
    binary_1.writeUint32LE(x7 + j7 | 0, out, 28);
    binary_1.writeUint32LE(x8 + j8 | 0, out, 32);
    binary_1.writeUint32LE(x9 + j9 | 0, out, 36);
    binary_1.writeUint32LE(x10 + j10 | 0, out, 40);
    binary_1.writeUint32LE(x11 + j11 | 0, out, 44);
    binary_1.writeUint32LE(x12 + j12 | 0, out, 48);
    binary_1.writeUint32LE(x13 + j13 | 0, out, 52);
    binary_1.writeUint32LE(x14 + j14 | 0, out, 56);
    binary_1.writeUint32LE(x15 + j15 | 0, out, 60);
}
/**
 * Encrypt src with ChaCha20 stream generated for the given 32-byte key and
 * 8-byte (as in original implementation) or 12-byte (as in RFC7539) nonce and
 * write the result into dst and return it.
 *
 * dst and src may be the same, but otherwise must not overlap.
 *
 * If nonce is 12 bytes, users should not encrypt more than 256 GiB with the
 * same key and nonce, otherwise the stream will repeat. The function will
 * throw error if counter overflows to prevent this.
 *
 * If nonce is 8 bytes, the output is practically unlimited (2^70 bytes, which
 * is more than a million petabytes). However, it is not recommended to
 * generate 8-byte nonces randomly, as the chance of collision is high.
 *
 * Never use the same key and nonce to encrypt more than one message.
 *
 * If nonceInplaceCounterLength is not 0, the nonce is assumed to be a 16-byte
 * array with stream counter in first nonceInplaceCounterLength bytes and nonce
 * in the last remaining bytes. The counter will be incremented inplace for
 * each ChaCha block. This is useful if you need to encrypt one stream of data
 * in chunks.
 */
function streamXOR(key, nonce, src, dst, nonceInplaceCounterLength) {
    if (nonceInplaceCounterLength === void 0) { nonceInplaceCounterLength = 0; }
    // We only support 256-bit keys.
    if (key.length !== 32) {
        throw new Error("ChaCha: key size must be 32 bytes");
    }
    if (dst.length < src.length) {
        throw new Error("ChaCha: destination is shorter than source");
    }
    var nc;
    var counterLength;
    if (nonceInplaceCounterLength === 0) {
        if (nonce.length !== 8 && nonce.length !== 12) {
            throw new Error("ChaCha nonce must be 8 or 12 bytes");
        }
        nc = new Uint8Array(16);
        // First counterLength bytes of nc are counter, starting with zero.
        counterLength = nc.length - nonce.length;
        // Last bytes of nc after counterLength are nonce, set them.
        nc.set(nonce, counterLength);
    }
    else {
        if (nonce.length !== 16) {
            throw new Error("ChaCha nonce with counter must be 16 bytes");
        }
        // This will update passed nonce with counter inplace.
        nc = nonce;
        counterLength = nonceInplaceCounterLength;
    }
    // Allocate temporary space for ChaCha block.
    var block = new Uint8Array(64);
    for (var i = 0; i < src.length; i += 64) {
        // Generate a block.
        core(block, nc, key);
        // XOR block bytes with src into dst.
        for (var j = i; j < i + 64 && j < src.length; j++) {
            dst[j] = src[j] ^ block[j - i];
        }
        // Increment counter.
        incrementCounter(nc, 0, counterLength);
    }
    // Cleanup temporary space.
    wipe_1$2.wipe(block);
    if (nonceInplaceCounterLength === 0) {
        // Cleanup counter.
        wipe_1$2.wipe(nc);
    }
    return dst;
}
chacha.streamXOR = streamXOR;
/**
 * Generate ChaCha20 stream for the given 32-byte key and 8-byte or 12-byte
 * nonce and write it into dst and return it.
 *
 * Never use the same key and nonce to generate more than one stream.
 *
 * If nonceInplaceCounterLength is not 0, it behaves the same with respect to
 * the nonce as described in the streamXOR documentation.
 *
 * stream is like streamXOR with all-zero src.
 */
function stream(key, nonce, dst, nonceInplaceCounterLength) {
    if (nonceInplaceCounterLength === void 0) { nonceInplaceCounterLength = 0; }
    wipe_1$2.wipe(dst);
    return streamXOR(key, nonce, dst, dst, nonceInplaceCounterLength);
}
chacha.stream = stream;
function incrementCounter(counter, pos, len) {
    var carry = 1;
    while (len--) {
        carry = carry + (counter[pos] & 0xff) | 0;
        counter[pos] = carry & 0xff;
        carry >>>= 8;
        pos++;
    }
    if (carry > 0) {
        throw new Error("ChaCha: counter overflow");
    }
}

var poly1305 = {};

var constantTime = {};

// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(constantTime, "__esModule", { value: true });
/**
 * Package constant-time provides functions for performing algorithmically constant-time operations.
 */
/**
 * NOTE! Due to the inability to guarantee real constant time evaluation of
 * anything in JavaScript VM, this is module is the best effort.
 */
/**
 * Returns resultIfOne if subject is 1, or resultIfZero if subject is 0.
 *
 * Supports only 32-bit integers, so resultIfOne or resultIfZero are not
 * integers, they'll be converted to them with bitwise operations.
 */
function select(subject, resultIfOne, resultIfZero) {
    return (~(subject - 1) & resultIfOne) | ((subject - 1) & resultIfZero);
}
constantTime.select = select;
/**
 * Returns 1 if a <= b, or 0 if not.
 * Arguments must be positive 32-bit integers less than or equal to 2^31 - 1.
 */
function lessOrEqual(a, b) {
    return (((a | 0) - (b | 0) - 1) >>> 31) & 1;
}
constantTime.lessOrEqual = lessOrEqual;
/**
 * Returns 1 if a and b are of equal length and their contents
 * are equal, or 0 otherwise.
 *
 * Note that unlike in equal(), zero-length inputs are considered
 * the same, so this function will return 1.
 */
function compare(a, b) {
    if (a.length !== b.length) {
        return 0;
    }
    var result = 0;
    for (var i = 0; i < a.length; i++) {
        result |= a[i] ^ b[i];
    }
    return (1 & ((result - 1) >>> 8));
}
constantTime.compare = compare;
/**
 * Returns true if a and b are of equal non-zero length,
 * and their contents are equal, or false otherwise.
 *
 * Note that unlike in compare() zero-length inputs are considered
 * _not_ equal, so this function will return false.
 */
function equal(a, b) {
    if (a.length === 0 || b.length === 0) {
        return false;
    }
    return compare(a, b) !== 0;
}
constantTime.equal = equal;

(function (exports) {
	// Copyright (C) 2016 Dmitry Chestnykh
	// MIT License. See LICENSE file for details.
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Package poly1305 implements Poly1305 one-time message authentication algorithm.
	 */
	var constant_time_1 = constantTime;
	var wipe_1 = wipe$1;
	exports.DIGEST_LENGTH = 16;
	// Port of Andrew Moon's Poly1305-donna-16. Public domain.
	// https://github.com/floodyberry/poly1305-donna
	/**
	 * Poly1305 computes 16-byte authenticator of message using
	 * a one-time 32-byte key.
	 *
	 * Important: key should be used for only one message,
	 * it should never repeat.
	 */
	var Poly1305 = /** @class */ (function () {
	    function Poly1305(key) {
	        this.digestLength = exports.DIGEST_LENGTH;
	        this._buffer = new Uint8Array(16);
	        this._r = new Uint16Array(10);
	        this._h = new Uint16Array(10);
	        this._pad = new Uint16Array(8);
	        this._leftover = 0;
	        this._fin = 0;
	        this._finished = false;
	        var t0 = key[0] | key[1] << 8;
	        this._r[0] = (t0) & 0x1fff;
	        var t1 = key[2] | key[3] << 8;
	        this._r[1] = ((t0 >>> 13) | (t1 << 3)) & 0x1fff;
	        var t2 = key[4] | key[5] << 8;
	        this._r[2] = ((t1 >>> 10) | (t2 << 6)) & 0x1f03;
	        var t3 = key[6] | key[7] << 8;
	        this._r[3] = ((t2 >>> 7) | (t3 << 9)) & 0x1fff;
	        var t4 = key[8] | key[9] << 8;
	        this._r[4] = ((t3 >>> 4) | (t4 << 12)) & 0x00ff;
	        this._r[5] = ((t4 >>> 1)) & 0x1ffe;
	        var t5 = key[10] | key[11] << 8;
	        this._r[6] = ((t4 >>> 14) | (t5 << 2)) & 0x1fff;
	        var t6 = key[12] | key[13] << 8;
	        this._r[7] = ((t5 >>> 11) | (t6 << 5)) & 0x1f81;
	        var t7 = key[14] | key[15] << 8;
	        this._r[8] = ((t6 >>> 8) | (t7 << 8)) & 0x1fff;
	        this._r[9] = ((t7 >>> 5)) & 0x007f;
	        this._pad[0] = key[16] | key[17] << 8;
	        this._pad[1] = key[18] | key[19] << 8;
	        this._pad[2] = key[20] | key[21] << 8;
	        this._pad[3] = key[22] | key[23] << 8;
	        this._pad[4] = key[24] | key[25] << 8;
	        this._pad[5] = key[26] | key[27] << 8;
	        this._pad[6] = key[28] | key[29] << 8;
	        this._pad[7] = key[30] | key[31] << 8;
	    }
	    Poly1305.prototype._blocks = function (m, mpos, bytes) {
	        var hibit = this._fin ? 0 : 1 << 11;
	        var h0 = this._h[0], h1 = this._h[1], h2 = this._h[2], h3 = this._h[3], h4 = this._h[4], h5 = this._h[5], h6 = this._h[6], h7 = this._h[7], h8 = this._h[8], h9 = this._h[9];
	        var r0 = this._r[0], r1 = this._r[1], r2 = this._r[2], r3 = this._r[3], r4 = this._r[4], r5 = this._r[5], r6 = this._r[6], r7 = this._r[7], r8 = this._r[8], r9 = this._r[9];
	        while (bytes >= 16) {
	            var t0 = m[mpos + 0] | m[mpos + 1] << 8;
	            h0 += (t0) & 0x1fff;
	            var t1 = m[mpos + 2] | m[mpos + 3] << 8;
	            h1 += ((t0 >>> 13) | (t1 << 3)) & 0x1fff;
	            var t2 = m[mpos + 4] | m[mpos + 5] << 8;
	            h2 += ((t1 >>> 10) | (t2 << 6)) & 0x1fff;
	            var t3 = m[mpos + 6] | m[mpos + 7] << 8;
	            h3 += ((t2 >>> 7) | (t3 << 9)) & 0x1fff;
	            var t4 = m[mpos + 8] | m[mpos + 9] << 8;
	            h4 += ((t3 >>> 4) | (t4 << 12)) & 0x1fff;
	            h5 += ((t4 >>> 1)) & 0x1fff;
	            var t5 = m[mpos + 10] | m[mpos + 11] << 8;
	            h6 += ((t4 >>> 14) | (t5 << 2)) & 0x1fff;
	            var t6 = m[mpos + 12] | m[mpos + 13] << 8;
	            h7 += ((t5 >>> 11) | (t6 << 5)) & 0x1fff;
	            var t7 = m[mpos + 14] | m[mpos + 15] << 8;
	            h8 += ((t6 >>> 8) | (t7 << 8)) & 0x1fff;
	            h9 += ((t7 >>> 5)) | hibit;
	            var c = 0;
	            var d0 = c;
	            d0 += h0 * r0;
	            d0 += h1 * (5 * r9);
	            d0 += h2 * (5 * r8);
	            d0 += h3 * (5 * r7);
	            d0 += h4 * (5 * r6);
	            c = (d0 >>> 13);
	            d0 &= 0x1fff;
	            d0 += h5 * (5 * r5);
	            d0 += h6 * (5 * r4);
	            d0 += h7 * (5 * r3);
	            d0 += h8 * (5 * r2);
	            d0 += h9 * (5 * r1);
	            c += (d0 >>> 13);
	            d0 &= 0x1fff;
	            var d1 = c;
	            d1 += h0 * r1;
	            d1 += h1 * r0;
	            d1 += h2 * (5 * r9);
	            d1 += h3 * (5 * r8);
	            d1 += h4 * (5 * r7);
	            c = (d1 >>> 13);
	            d1 &= 0x1fff;
	            d1 += h5 * (5 * r6);
	            d1 += h6 * (5 * r5);
	            d1 += h7 * (5 * r4);
	            d1 += h8 * (5 * r3);
	            d1 += h9 * (5 * r2);
	            c += (d1 >>> 13);
	            d1 &= 0x1fff;
	            var d2 = c;
	            d2 += h0 * r2;
	            d2 += h1 * r1;
	            d2 += h2 * r0;
	            d2 += h3 * (5 * r9);
	            d2 += h4 * (5 * r8);
	            c = (d2 >>> 13);
	            d2 &= 0x1fff;
	            d2 += h5 * (5 * r7);
	            d2 += h6 * (5 * r6);
	            d2 += h7 * (5 * r5);
	            d2 += h8 * (5 * r4);
	            d2 += h9 * (5 * r3);
	            c += (d2 >>> 13);
	            d2 &= 0x1fff;
	            var d3 = c;
	            d3 += h0 * r3;
	            d3 += h1 * r2;
	            d3 += h2 * r1;
	            d3 += h3 * r0;
	            d3 += h4 * (5 * r9);
	            c = (d3 >>> 13);
	            d3 &= 0x1fff;
	            d3 += h5 * (5 * r8);
	            d3 += h6 * (5 * r7);
	            d3 += h7 * (5 * r6);
	            d3 += h8 * (5 * r5);
	            d3 += h9 * (5 * r4);
	            c += (d3 >>> 13);
	            d3 &= 0x1fff;
	            var d4 = c;
	            d4 += h0 * r4;
	            d4 += h1 * r3;
	            d4 += h2 * r2;
	            d4 += h3 * r1;
	            d4 += h4 * r0;
	            c = (d4 >>> 13);
	            d4 &= 0x1fff;
	            d4 += h5 * (5 * r9);
	            d4 += h6 * (5 * r8);
	            d4 += h7 * (5 * r7);
	            d4 += h8 * (5 * r6);
	            d4 += h9 * (5 * r5);
	            c += (d4 >>> 13);
	            d4 &= 0x1fff;
	            var d5 = c;
	            d5 += h0 * r5;
	            d5 += h1 * r4;
	            d5 += h2 * r3;
	            d5 += h3 * r2;
	            d5 += h4 * r1;
	            c = (d5 >>> 13);
	            d5 &= 0x1fff;
	            d5 += h5 * r0;
	            d5 += h6 * (5 * r9);
	            d5 += h7 * (5 * r8);
	            d5 += h8 * (5 * r7);
	            d5 += h9 * (5 * r6);
	            c += (d5 >>> 13);
	            d5 &= 0x1fff;
	            var d6 = c;
	            d6 += h0 * r6;
	            d6 += h1 * r5;
	            d6 += h2 * r4;
	            d6 += h3 * r3;
	            d6 += h4 * r2;
	            c = (d6 >>> 13);
	            d6 &= 0x1fff;
	            d6 += h5 * r1;
	            d6 += h6 * r0;
	            d6 += h7 * (5 * r9);
	            d6 += h8 * (5 * r8);
	            d6 += h9 * (5 * r7);
	            c += (d6 >>> 13);
	            d6 &= 0x1fff;
	            var d7 = c;
	            d7 += h0 * r7;
	            d7 += h1 * r6;
	            d7 += h2 * r5;
	            d7 += h3 * r4;
	            d7 += h4 * r3;
	            c = (d7 >>> 13);
	            d7 &= 0x1fff;
	            d7 += h5 * r2;
	            d7 += h6 * r1;
	            d7 += h7 * r0;
	            d7 += h8 * (5 * r9);
	            d7 += h9 * (5 * r8);
	            c += (d7 >>> 13);
	            d7 &= 0x1fff;
	            var d8 = c;
	            d8 += h0 * r8;
	            d8 += h1 * r7;
	            d8 += h2 * r6;
	            d8 += h3 * r5;
	            d8 += h4 * r4;
	            c = (d8 >>> 13);
	            d8 &= 0x1fff;
	            d8 += h5 * r3;
	            d8 += h6 * r2;
	            d8 += h7 * r1;
	            d8 += h8 * r0;
	            d8 += h9 * (5 * r9);
	            c += (d8 >>> 13);
	            d8 &= 0x1fff;
	            var d9 = c;
	            d9 += h0 * r9;
	            d9 += h1 * r8;
	            d9 += h2 * r7;
	            d9 += h3 * r6;
	            d9 += h4 * r5;
	            c = (d9 >>> 13);
	            d9 &= 0x1fff;
	            d9 += h5 * r4;
	            d9 += h6 * r3;
	            d9 += h7 * r2;
	            d9 += h8 * r1;
	            d9 += h9 * r0;
	            c += (d9 >>> 13);
	            d9 &= 0x1fff;
	            c = (((c << 2) + c)) | 0;
	            c = (c + d0) | 0;
	            d0 = c & 0x1fff;
	            c = (c >>> 13);
	            d1 += c;
	            h0 = d0;
	            h1 = d1;
	            h2 = d2;
	            h3 = d3;
	            h4 = d4;
	            h5 = d5;
	            h6 = d6;
	            h7 = d7;
	            h8 = d8;
	            h9 = d9;
	            mpos += 16;
	            bytes -= 16;
	        }
	        this._h[0] = h0;
	        this._h[1] = h1;
	        this._h[2] = h2;
	        this._h[3] = h3;
	        this._h[4] = h4;
	        this._h[5] = h5;
	        this._h[6] = h6;
	        this._h[7] = h7;
	        this._h[8] = h8;
	        this._h[9] = h9;
	    };
	    Poly1305.prototype.finish = function (mac, macpos) {
	        if (macpos === void 0) { macpos = 0; }
	        var g = new Uint16Array(10);
	        var c;
	        var mask;
	        var f;
	        var i;
	        if (this._leftover) {
	            i = this._leftover;
	            this._buffer[i++] = 1;
	            for (; i < 16; i++) {
	                this._buffer[i] = 0;
	            }
	            this._fin = 1;
	            this._blocks(this._buffer, 0, 16);
	        }
	        c = this._h[1] >>> 13;
	        this._h[1] &= 0x1fff;
	        for (i = 2; i < 10; i++) {
	            this._h[i] += c;
	            c = this._h[i] >>> 13;
	            this._h[i] &= 0x1fff;
	        }
	        this._h[0] += (c * 5);
	        c = this._h[0] >>> 13;
	        this._h[0] &= 0x1fff;
	        this._h[1] += c;
	        c = this._h[1] >>> 13;
	        this._h[1] &= 0x1fff;
	        this._h[2] += c;
	        g[0] = this._h[0] + 5;
	        c = g[0] >>> 13;
	        g[0] &= 0x1fff;
	        for (i = 1; i < 10; i++) {
	            g[i] = this._h[i] + c;
	            c = g[i] >>> 13;
	            g[i] &= 0x1fff;
	        }
	        g[9] -= (1 << 13);
	        mask = (c ^ 1) - 1;
	        for (i = 0; i < 10; i++) {
	            g[i] &= mask;
	        }
	        mask = ~mask;
	        for (i = 0; i < 10; i++) {
	            this._h[i] = (this._h[i] & mask) | g[i];
	        }
	        this._h[0] = ((this._h[0]) | (this._h[1] << 13)) & 0xffff;
	        this._h[1] = ((this._h[1] >>> 3) | (this._h[2] << 10)) & 0xffff;
	        this._h[2] = ((this._h[2] >>> 6) | (this._h[3] << 7)) & 0xffff;
	        this._h[3] = ((this._h[3] >>> 9) | (this._h[4] << 4)) & 0xffff;
	        this._h[4] = ((this._h[4] >>> 12) | (this._h[5] << 1) | (this._h[6] << 14)) & 0xffff;
	        this._h[5] = ((this._h[6] >>> 2) | (this._h[7] << 11)) & 0xffff;
	        this._h[6] = ((this._h[7] >>> 5) | (this._h[8] << 8)) & 0xffff;
	        this._h[7] = ((this._h[8] >>> 8) | (this._h[9] << 5)) & 0xffff;
	        f = this._h[0] + this._pad[0];
	        this._h[0] = f & 0xffff;
	        for (i = 1; i < 8; i++) {
	            f = (((this._h[i] + this._pad[i]) | 0) + (f >>> 16)) | 0;
	            this._h[i] = f & 0xffff;
	        }
	        mac[macpos + 0] = this._h[0] >>> 0;
	        mac[macpos + 1] = this._h[0] >>> 8;
	        mac[macpos + 2] = this._h[1] >>> 0;
	        mac[macpos + 3] = this._h[1] >>> 8;
	        mac[macpos + 4] = this._h[2] >>> 0;
	        mac[macpos + 5] = this._h[2] >>> 8;
	        mac[macpos + 6] = this._h[3] >>> 0;
	        mac[macpos + 7] = this._h[3] >>> 8;
	        mac[macpos + 8] = this._h[4] >>> 0;
	        mac[macpos + 9] = this._h[4] >>> 8;
	        mac[macpos + 10] = this._h[5] >>> 0;
	        mac[macpos + 11] = this._h[5] >>> 8;
	        mac[macpos + 12] = this._h[6] >>> 0;
	        mac[macpos + 13] = this._h[6] >>> 8;
	        mac[macpos + 14] = this._h[7] >>> 0;
	        mac[macpos + 15] = this._h[7] >>> 8;
	        this._finished = true;
	        return this;
	    };
	    Poly1305.prototype.update = function (m) {
	        var mpos = 0;
	        var bytes = m.length;
	        var want;
	        if (this._leftover) {
	            want = (16 - this._leftover);
	            if (want > bytes) {
	                want = bytes;
	            }
	            for (var i = 0; i < want; i++) {
	                this._buffer[this._leftover + i] = m[mpos + i];
	            }
	            bytes -= want;
	            mpos += want;
	            this._leftover += want;
	            if (this._leftover < 16) {
	                return this;
	            }
	            this._blocks(this._buffer, 0, 16);
	            this._leftover = 0;
	        }
	        if (bytes >= 16) {
	            want = bytes - (bytes % 16);
	            this._blocks(m, mpos, want);
	            mpos += want;
	            bytes -= want;
	        }
	        if (bytes) {
	            for (var i = 0; i < bytes; i++) {
	                this._buffer[this._leftover + i] = m[mpos + i];
	            }
	            this._leftover += bytes;
	        }
	        return this;
	    };
	    Poly1305.prototype.digest = function () {
	        // TODO(dchest): it behaves differently than other hashes/HMAC,
	        // because it throws when finished — others just return saved result.
	        if (this._finished) {
	            throw new Error("Poly1305 was finished");
	        }
	        var mac = new Uint8Array(16);
	        this.finish(mac);
	        return mac;
	    };
	    Poly1305.prototype.clean = function () {
	        wipe_1.wipe(this._buffer);
	        wipe_1.wipe(this._r);
	        wipe_1.wipe(this._h);
	        wipe_1.wipe(this._pad);
	        this._leftover = 0;
	        this._fin = 0;
	        this._finished = true; // mark as finished even if not
	        return this;
	    };
	    return Poly1305;
	}());
	exports.Poly1305 = Poly1305;
	/**
	 * Returns 16-byte authenticator of data using a one-time 32-byte key.
	 *
	 * Important: key should be used for only one message, it should never repeat.
	 */
	function oneTimeAuth(key, data) {
	    var h = new Poly1305(key);
	    h.update(data);
	    var digest = h.digest();
	    h.clean();
	    return digest;
	}
	exports.oneTimeAuth = oneTimeAuth;
	/**
	 * Returns true if two authenticators are 16-byte long and equal.
	 * Uses contant-time comparison to avoid leaking timing information.
	 */
	function equal(a, b) {
	    if (a.length !== exports.DIGEST_LENGTH || b.length !== exports.DIGEST_LENGTH) {
	        return false;
	    }
	    return constant_time_1.equal(a, b);
	}
	exports.equal = equal;
	
} (poly1305));

(function (exports) {
	// Copyright (C) 2016 Dmitry Chestnykh
	// MIT License. See LICENSE file for details.
	Object.defineProperty(exports, "__esModule", { value: true });
	var chacha_1 = chacha;
	var poly1305_1 = poly1305;
	var wipe_1 = wipe$1;
	var binary_1 = binary;
	var constant_time_1 = constantTime;
	exports.KEY_LENGTH = 32;
	exports.NONCE_LENGTH = 12;
	exports.TAG_LENGTH = 16;
	var ZEROS = new Uint8Array(16);
	/**
	 * ChaCha20-Poly1305 Authenticated Encryption with Associated Data.
	 *
	 * Defined in RFC7539.
	 */
	var ChaCha20Poly1305 = /** @class */ (function () {
	    /**
	     * Creates a new instance with the given 32-byte key.
	     */
	    function ChaCha20Poly1305(key) {
	        this.nonceLength = exports.NONCE_LENGTH;
	        this.tagLength = exports.TAG_LENGTH;
	        if (key.length !== exports.KEY_LENGTH) {
	            throw new Error("ChaCha20Poly1305 needs 32-byte key");
	        }
	        // Copy key.
	        this._key = new Uint8Array(key);
	    }
	    /**
	     * Encrypts and authenticates plaintext, authenticates associated data,
	     * and returns sealed ciphertext, which includes authentication tag.
	     *
	     * RFC7539 specifies 12 bytes for nonce. It may be this 12-byte nonce
	     * ("IV"), or full 16-byte counter (called "32-bit fixed-common part")
	     * and nonce.
	     *
	     * If dst is given (it must be the size of plaintext + the size of tag
	     * length) the result will be put into it. Dst and plaintext must not
	     * overlap.
	     */
	    ChaCha20Poly1305.prototype.seal = function (nonce, plaintext, associatedData, dst) {
	        if (nonce.length > 16) {
	            throw new Error("ChaCha20Poly1305: incorrect nonce length");
	        }
	        // Allocate space for counter, and set nonce as last bytes of it.
	        var counter = new Uint8Array(16);
	        counter.set(nonce, counter.length - nonce.length);
	        // Generate authentication key by taking first 32-bytes of stream.
	        // We pass full counter, which has 12-byte nonce and 4-byte block counter,
	        // and it will get incremented after generating the block, which is
	        // exactly what we need: we only use the first 32 bytes of 64-byte
	        // ChaCha block and discard the next 32 bytes.
	        var authKey = new Uint8Array(32);
	        chacha_1.stream(this._key, counter, authKey, 4);
	        // Allocate space for sealed ciphertext.
	        var resultLength = plaintext.length + this.tagLength;
	        var result;
	        if (dst) {
	            if (dst.length !== resultLength) {
	                throw new Error("ChaCha20Poly1305: incorrect destination length");
	            }
	            result = dst;
	        }
	        else {
	            result = new Uint8Array(resultLength);
	        }
	        // Encrypt plaintext.
	        chacha_1.streamXOR(this._key, counter, plaintext, result, 4);
	        // Authenticate.
	        // XXX: can "simplify" here: pass full result (which is already padded
	        // due to zeroes prepared for tag), and ciphertext length instead of
	        // subarray of result.
	        this._authenticate(result.subarray(result.length - this.tagLength, result.length), authKey, result.subarray(0, result.length - this.tagLength), associatedData);
	        // Cleanup.
	        wipe_1.wipe(counter);
	        return result;
	    };
	    /**
	     * Authenticates sealed ciphertext (which includes authentication tag) and
	     * associated data, decrypts ciphertext and returns decrypted plaintext.
	     *
	     * RFC7539 specifies 12 bytes for nonce. It may be this 12-byte nonce
	     * ("IV"), or full 16-byte counter (called "32-bit fixed-common part")
	     * and nonce.
	     *
	     * If authentication fails, it returns null.
	     *
	     * If dst is given (it must be of ciphertext length minus tag length),
	     * the result will be put into it. Dst and plaintext must not overlap.
	     */
	    ChaCha20Poly1305.prototype.open = function (nonce, sealed, associatedData, dst) {
	        if (nonce.length > 16) {
	            throw new Error("ChaCha20Poly1305: incorrect nonce length");
	        }
	        // Sealed ciphertext should at least contain tag.
	        if (sealed.length < this.tagLength) {
	            // TODO(dchest): should we throw here instead?
	            return null;
	        }
	        // Allocate space for counter, and set nonce as last bytes of it.
	        var counter = new Uint8Array(16);
	        counter.set(nonce, counter.length - nonce.length);
	        // Generate authentication key by taking first 32-bytes of stream.
	        var authKey = new Uint8Array(32);
	        chacha_1.stream(this._key, counter, authKey, 4);
	        // Authenticate.
	        // XXX: can simplify and avoid allocation: since authenticate()
	        // already allocates tag (from Poly1305.digest(), it can return)
	        // it instead of copying to calculatedTag. But then in seal()
	        // we'll need to copy it.
	        var calculatedTag = new Uint8Array(this.tagLength);
	        this._authenticate(calculatedTag, authKey, sealed.subarray(0, sealed.length - this.tagLength), associatedData);
	        // Constant-time compare tags and return null if they differ.
	        if (!constant_time_1.equal(calculatedTag, sealed.subarray(sealed.length - this.tagLength, sealed.length))) {
	            return null;
	        }
	        // Allocate space for decrypted plaintext.
	        var resultLength = sealed.length - this.tagLength;
	        var result;
	        if (dst) {
	            if (dst.length !== resultLength) {
	                throw new Error("ChaCha20Poly1305: incorrect destination length");
	            }
	            result = dst;
	        }
	        else {
	            result = new Uint8Array(resultLength);
	        }
	        // Decrypt.
	        chacha_1.streamXOR(this._key, counter, sealed.subarray(0, sealed.length - this.tagLength), result, 4);
	        // Cleanup.
	        wipe_1.wipe(counter);
	        return result;
	    };
	    ChaCha20Poly1305.prototype.clean = function () {
	        wipe_1.wipe(this._key);
	        return this;
	    };
	    ChaCha20Poly1305.prototype._authenticate = function (tagOut, authKey, ciphertext, associatedData) {
	        // Initialize Poly1305 with authKey.
	        var h = new poly1305_1.Poly1305(authKey);
	        // Authenticate padded associated data.
	        if (associatedData) {
	            h.update(associatedData);
	            if (associatedData.length % 16 > 0) {
	                h.update(ZEROS.subarray(associatedData.length % 16));
	            }
	        }
	        // Authenticate padded ciphertext.
	        h.update(ciphertext);
	        if (ciphertext.length % 16 > 0) {
	            h.update(ZEROS.subarray(ciphertext.length % 16));
	        }
	        // Authenticate length of associated data.
	        // XXX: can avoid allocation here?
	        var length = new Uint8Array(8);
	        if (associatedData) {
	            binary_1.writeUint64LE(associatedData.length, length);
	        }
	        h.update(length);
	        // Authenticate length of ciphertext.
	        binary_1.writeUint64LE(ciphertext.length, length);
	        h.update(length);
	        // Get tag and copy it into tagOut.
	        var tag = h.digest();
	        for (var i = 0; i < tag.length; i++) {
	            tagOut[i] = tag[i];
	        }
	        // Cleanup.
	        h.clean();
	        wipe_1.wipe(tag);
	        wipe_1.wipe(length);
	    };
	    return ChaCha20Poly1305;
	}());
	exports.ChaCha20Poly1305 = ChaCha20Poly1305;
	
} (chacha20poly1305));

var hkdf = {};

var hmac$1 = {};

var hash = {};

// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(hash, "__esModule", { value: true });
function isSerializableHash(h) {
    return (typeof h.saveState !== "undefined" &&
        typeof h.restoreState !== "undefined" &&
        typeof h.cleanSavedState !== "undefined");
}
hash.isSerializableHash = isSerializableHash;

// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(hmac$1, "__esModule", { value: true });
/**
 * Package hmac implements HMAC algorithm.
 */
var hash_1 = hash;
var constant_time_1 = constantTime;
var wipe_1$1 = wipe$1;
/**
 *  HMAC implements hash-based message authentication algorithm.
 */
var HMAC = /** @class */ (function () {
    /**
     * Constructs a new HMAC with the given Hash and secret key.
     */
    function HMAC(hash, key) {
        this._finished = false; // true if HMAC was finalized
        // Initialize inner and outer hashes.
        this._inner = new hash();
        this._outer = new hash();
        // Set block and digest sizes for this HMAC
        // instance to values from the hash.
        this.blockSize = this._outer.blockSize;
        this.digestLength = this._outer.digestLength;
        // Pad temporary stores a key (or its hash) padded with zeroes.
        var pad = new Uint8Array(this.blockSize);
        if (key.length > this.blockSize) {
            // If key is bigger than hash block size, it must be
            // hashed and this hash is used as a key instead.
            this._inner.update(key).finish(pad).clean();
        }
        else {
            // Otherwise, copy the key into pad.
            pad.set(key);
        }
        // Now two different keys are derived from padded key
        // by xoring a different byte value to each.
        // To make inner hash key, xor byte 0x36 into pad.
        for (var i = 0; i < pad.length; i++) {
            pad[i] ^= 0x36;
        }
        // Update inner hash with the result.
        this._inner.update(pad);
        // To make outer hash key, xor byte 0x5c into pad.
        // But since we already xored 0x36 there, we must
        // first undo this by xoring it again.
        for (var i = 0; i < pad.length; i++) {
            pad[i] ^= 0x36 ^ 0x5c;
        }
        // Update outer hash with the result.
        this._outer.update(pad);
        // Save states of both hashes, so that we can quickly restore
        // them later in reset() without the need to remember the actual
        // key and perform this initialization again.
        if (hash_1.isSerializableHash(this._inner) && hash_1.isSerializableHash(this._outer)) {
            this._innerKeyedState = this._inner.saveState();
            this._outerKeyedState = this._outer.saveState();
        }
        // Clean pad.
        wipe_1$1.wipe(pad);
    }
    /**
     * Returns HMAC state to the state initialized with key
     * to make it possible to run HMAC over the other data with the same
     * key without creating a new instance.
     */
    HMAC.prototype.reset = function () {
        if (!hash_1.isSerializableHash(this._inner) || !hash_1.isSerializableHash(this._outer)) {
            throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");
        }
        // Restore keyed states of inner and outer hashes.
        this._inner.restoreState(this._innerKeyedState);
        this._outer.restoreState(this._outerKeyedState);
        this._finished = false;
        return this;
    };
    /**
     * Cleans HMAC state.
     */
    HMAC.prototype.clean = function () {
        if (hash_1.isSerializableHash(this._inner)) {
            this._inner.cleanSavedState(this._innerKeyedState);
        }
        if (hash_1.isSerializableHash(this._outer)) {
            this._outer.cleanSavedState(this._outerKeyedState);
        }
        this._inner.clean();
        this._outer.clean();
    };
    /**
     * Updates state with provided data.
     */
    HMAC.prototype.update = function (data) {
        this._inner.update(data);
        return this;
    };
    /**
     * Finalizes HMAC and puts the result in out.
     */
    HMAC.prototype.finish = function (out) {
        if (this._finished) {
            // If HMAC was finalized, outer hash is also finalized,
            // so it produces the same digest it produced when it
            // was finalized.
            this._outer.finish(out);
            return this;
        }
        // Finalize inner hash and store the result temporarily.
        this._inner.finish(out);
        // Update outer hash with digest of inner hash and and finalize it.
        this._outer.update(out.subarray(0, this.digestLength)).finish(out);
        this._finished = true;
        return this;
    };
    /**
     * Returns the computed message authentication code.
     */
    HMAC.prototype.digest = function () {
        var out = new Uint8Array(this.digestLength);
        this.finish(out);
        return out;
    };
    /**
     * Saves HMAC state.
     * This function is needed for PBKDF2 optimization.
     */
    HMAC.prototype.saveState = function () {
        if (!hash_1.isSerializableHash(this._inner)) {
            throw new Error("hmac: can't saveState() because hash doesn't implement it");
        }
        return this._inner.saveState();
    };
    HMAC.prototype.restoreState = function (savedState) {
        if (!hash_1.isSerializableHash(this._inner) || !hash_1.isSerializableHash(this._outer)) {
            throw new Error("hmac: can't restoreState() because hash doesn't implement it");
        }
        this._inner.restoreState(savedState);
        this._outer.restoreState(this._outerKeyedState);
        this._finished = false;
        return this;
    };
    HMAC.prototype.cleanSavedState = function (savedState) {
        if (!hash_1.isSerializableHash(this._inner)) {
            throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");
        }
        this._inner.cleanSavedState(savedState);
    };
    return HMAC;
}());
hmac$1.HMAC = HMAC;
/**
 * Returns HMAC using the given hash constructor for the key over data.
 */
function hmac(hash, key, data) {
    var h = new HMAC(hash, key);
    h.update(data);
    var digest = h.digest();
    h.clean();
    return digest;
}
hmac$1.hmac = hmac;
/**
 * Returns true if two HMAC digests are equal.
 * Uses constant-time comparison to avoid leaking timing information.
 *
 * Example:
 *
 *    const receivedDigest = ...
 *    const realDigest = hmac(SHA256, key, data);
 *    if (!equal(receivedDigest, realDigest)) {
 *        throw new Error("Authentication error");
 *    }
 */
hmac$1.equal = constant_time_1.equal;

// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(hkdf, "__esModule", { value: true });
var hmac_1 = hmac$1;
var wipe_1 = wipe$1;
/**
 * HMAC-based Extract-and-Expand Key Derivation Function.
 *
 * Implements HKDF from RFC5869.
 *
 * Expands the given master key with salt and info into
 * a limited stream of key material.
 */
var HKDF = /** @class */ (function () {
    /**
     * Create a new HKDF instance for the given hash function
     * with the master key, optional salt, and info.
     *
     * - Master key is a high-entropy secret key (not a password).
     * - Salt is a non-secret random value.
     * - Info is application- and/or context-specific information.
     */
    function HKDF(hash, key, salt, info) {
        if (salt === void 0) { salt = new Uint8Array(0); }
        this._counter = new Uint8Array(1); // starts with zero
        this._hash = hash;
        this._info = info;
        // HKDF-Extract uses salt as HMAC key, and key as data.
        var okm = hmac_1.hmac(this._hash, salt, key);
        // Initialize HMAC for expanding with extracted key.
        this._hmac = new hmac_1.HMAC(hash, okm);
        // Allocate buffer.
        this._buffer = new Uint8Array(this._hmac.digestLength);
        this._bufpos = this._buffer.length;
    }
    // Fill buffer with new block of HKDF-Extract output.
    HKDF.prototype._fillBuffer = function () {
        // Increment counter.
        this._counter[0]++;
        var ctr = this._counter[0];
        // Check if counter overflowed.
        if (ctr === 0) {
            throw new Error("hkdf: cannot expand more");
        }
        // Prepare HMAC instance for new data with old key.
        this._hmac.reset();
        // Hash in previous output if it was generated
        // (i.e. counter is greater than 1).
        if (ctr > 1) {
            this._hmac.update(this._buffer);
        }
        // Hash in info if it exists.
        if (this._info) {
            this._hmac.update(this._info);
        }
        // Hash in the counter.
        this._hmac.update(this._counter);
        // Output result to buffer and clean HMAC instance.
        this._hmac.finish(this._buffer);
        // Reset buffer position.
        this._bufpos = 0;
    };
    /**
     * Expand returns next key material of the given length.
     *
     * It throws if expansion limit is reached (which is
     * 254 digests of the underlying HMAC function).
     */
    HKDF.prototype.expand = function (length) {
        var out = new Uint8Array(length);
        for (var i = 0; i < out.length; i++) {
            if (this._bufpos === this._buffer.length) {
                this._fillBuffer();
            }
            out[i] = this._buffer[this._bufpos++];
        }
        return out;
    };
    HKDF.prototype.clean = function () {
        this._hmac.clean();
        wipe_1.wipe(this._buffer);
        wipe_1.wipe(this._counter);
        this._bufpos = 0;
    };
    return HKDF;
}());
var HKDF_1 = hkdf.HKDF = HKDF;

var sha256 = {};

(function (exports) {
	// Copyright (C) 2016 Dmitry Chestnykh
	// MIT License. See LICENSE file for details.
	Object.defineProperty(exports, "__esModule", { value: true });
	var binary_1 = binary;
	var wipe_1 = wipe$1;
	exports.DIGEST_LENGTH = 32;
	exports.BLOCK_SIZE = 64;
	/**
	 * SHA2-256 cryptographic hash algorithm.
	 */
	var SHA256 = /** @class */ (function () {
	    function SHA256() {
	        /** Length of hash output */
	        this.digestLength = exports.DIGEST_LENGTH;
	        /** Block size */
	        this.blockSize = exports.BLOCK_SIZE;
	        // Note: Int32Array is used instead of Uint32Array for performance reasons.
	        this._state = new Int32Array(8); // hash state
	        this._temp = new Int32Array(64); // temporary state
	        this._buffer = new Uint8Array(128); // buffer for data to hash
	        this._bufferLength = 0; // number of bytes in buffer
	        this._bytesHashed = 0; // number of total bytes hashed
	        this._finished = false; // indicates whether the hash was finalized
	        this.reset();
	    }
	    SHA256.prototype._initState = function () {
	        this._state[0] = 0x6a09e667;
	        this._state[1] = 0xbb67ae85;
	        this._state[2] = 0x3c6ef372;
	        this._state[3] = 0xa54ff53a;
	        this._state[4] = 0x510e527f;
	        this._state[5] = 0x9b05688c;
	        this._state[6] = 0x1f83d9ab;
	        this._state[7] = 0x5be0cd19;
	    };
	    /**
	     * Resets hash state making it possible
	     * to re-use this instance to hash other data.
	     */
	    SHA256.prototype.reset = function () {
	        this._initState();
	        this._bufferLength = 0;
	        this._bytesHashed = 0;
	        this._finished = false;
	        return this;
	    };
	    /**
	     * Cleans internal buffers and resets hash state.
	     */
	    SHA256.prototype.clean = function () {
	        wipe_1.wipe(this._buffer);
	        wipe_1.wipe(this._temp);
	        this.reset();
	    };
	    /**
	     * Updates hash state with the given data.
	     *
	     * Throws error when trying to update already finalized hash:
	     * instance must be reset to update it again.
	     */
	    SHA256.prototype.update = function (data, dataLength) {
	        if (dataLength === void 0) { dataLength = data.length; }
	        if (this._finished) {
	            throw new Error("SHA256: can't update because hash was finished.");
	        }
	        var dataPos = 0;
	        this._bytesHashed += dataLength;
	        if (this._bufferLength > 0) {
	            while (this._bufferLength < this.blockSize && dataLength > 0) {
	                this._buffer[this._bufferLength++] = data[dataPos++];
	                dataLength--;
	            }
	            if (this._bufferLength === this.blockSize) {
	                hashBlocks(this._temp, this._state, this._buffer, 0, this.blockSize);
	                this._bufferLength = 0;
	            }
	        }
	        if (dataLength >= this.blockSize) {
	            dataPos = hashBlocks(this._temp, this._state, data, dataPos, dataLength);
	            dataLength %= this.blockSize;
	        }
	        while (dataLength > 0) {
	            this._buffer[this._bufferLength++] = data[dataPos++];
	            dataLength--;
	        }
	        return this;
	    };
	    /**
	     * Finalizes hash state and puts hash into out.
	     * If hash was already finalized, puts the same value.
	     */
	    SHA256.prototype.finish = function (out) {
	        if (!this._finished) {
	            var bytesHashed = this._bytesHashed;
	            var left = this._bufferLength;
	            var bitLenHi = (bytesHashed / 0x20000000) | 0;
	            var bitLenLo = bytesHashed << 3;
	            var padLength = (bytesHashed % 64 < 56) ? 64 : 128;
	            this._buffer[left] = 0x80;
	            for (var i = left + 1; i < padLength - 8; i++) {
	                this._buffer[i] = 0;
	            }
	            binary_1.writeUint32BE(bitLenHi, this._buffer, padLength - 8);
	            binary_1.writeUint32BE(bitLenLo, this._buffer, padLength - 4);
	            hashBlocks(this._temp, this._state, this._buffer, 0, padLength);
	            this._finished = true;
	        }
	        for (var i = 0; i < this.digestLength / 4; i++) {
	            binary_1.writeUint32BE(this._state[i], out, i * 4);
	        }
	        return this;
	    };
	    /**
	     * Returns the final hash digest.
	     */
	    SHA256.prototype.digest = function () {
	        var out = new Uint8Array(this.digestLength);
	        this.finish(out);
	        return out;
	    };
	    /**
	     * Function useful for HMAC/PBKDF2 optimization.
	     * Returns hash state to be used with restoreState().
	     * Only chain value is saved, not buffers or other
	     * state variables.
	     */
	    SHA256.prototype.saveState = function () {
	        if (this._finished) {
	            throw new Error("SHA256: cannot save finished state");
	        }
	        return {
	            state: new Int32Array(this._state),
	            buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : undefined,
	            bufferLength: this._bufferLength,
	            bytesHashed: this._bytesHashed
	        };
	    };
	    /**
	     * Function useful for HMAC/PBKDF2 optimization.
	     * Restores state saved by saveState() and sets bytesHashed
	     * to the given value.
	     */
	    SHA256.prototype.restoreState = function (savedState) {
	        this._state.set(savedState.state);
	        this._bufferLength = savedState.bufferLength;
	        if (savedState.buffer) {
	            this._buffer.set(savedState.buffer);
	        }
	        this._bytesHashed = savedState.bytesHashed;
	        this._finished = false;
	        return this;
	    };
	    /**
	     * Cleans state returned by saveState().
	     */
	    SHA256.prototype.cleanSavedState = function (savedState) {
	        wipe_1.wipe(savedState.state);
	        if (savedState.buffer) {
	            wipe_1.wipe(savedState.buffer);
	        }
	        savedState.bufferLength = 0;
	        savedState.bytesHashed = 0;
	    };
	    return SHA256;
	}());
	exports.SHA256 = SHA256;
	// Constants
	var K = new Int32Array([
	    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b,
	    0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01,
	    0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7,
	    0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc,
	    0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152,
	    0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147,
	    0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc,
	    0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
	    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819,
	    0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08,
	    0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f,
	    0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208,
	    0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
	]);
	function hashBlocks(w, v, p, pos, len) {
	    while (len >= 64) {
	        var a = v[0];
	        var b = v[1];
	        var c = v[2];
	        var d = v[3];
	        var e = v[4];
	        var f = v[5];
	        var g = v[6];
	        var h = v[7];
	        for (var i = 0; i < 16; i++) {
	            var j = pos + i * 4;
	            w[i] = binary_1.readUint32BE(p, j);
	        }
	        for (var i = 16; i < 64; i++) {
	            var u = w[i - 2];
	            var t1 = (u >>> 17 | u << (32 - 17)) ^ (u >>> 19 | u << (32 - 19)) ^ (u >>> 10);
	            u = w[i - 15];
	            var t2 = (u >>> 7 | u << (32 - 7)) ^ (u >>> 18 | u << (32 - 18)) ^ (u >>> 3);
	            w[i] = (t1 + w[i - 7] | 0) + (t2 + w[i - 16] | 0);
	        }
	        for (var i = 0; i < 64; i++) {
	            var t1 = (((((e >>> 6 | e << (32 - 6)) ^ (e >>> 11 | e << (32 - 11)) ^
	                (e >>> 25 | e << (32 - 25))) + ((e & f) ^ (~e & g))) | 0) +
	                ((h + ((K[i] + w[i]) | 0)) | 0)) | 0;
	            var t2 = (((a >>> 2 | a << (32 - 2)) ^ (a >>> 13 | a << (32 - 13)) ^
	                (a >>> 22 | a << (32 - 22))) + ((a & b) ^ (a & c) ^ (b & c))) | 0;
	            h = g;
	            g = f;
	            f = e;
	            e = (d + t1) | 0;
	            d = c;
	            c = b;
	            b = a;
	            a = (t1 + t2) | 0;
	        }
	        v[0] += a;
	        v[1] += b;
	        v[2] += c;
	        v[3] += d;
	        v[4] += e;
	        v[5] += f;
	        v[6] += g;
	        v[7] += h;
	        pos += 64;
	        len -= 64;
	    }
	    return pos;
	}
	function hash(data) {
	    var h = new SHA256();
	    h.update(data);
	    var digest = h.digest();
	    h.clean();
	    return digest;
	}
	exports.hash = hash;
	
} (sha256));

var x25519 = {};

(function (exports) {
	// Copyright (C) 2016 Dmitry Chestnykh
	// MIT License. See LICENSE file for details.
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.sharedKey = exports.generateKeyPair = exports.generateKeyPairFromSeed = exports.scalarMultBase = exports.scalarMult = exports.SHARED_KEY_LENGTH = exports.SECRET_KEY_LENGTH = exports.PUBLIC_KEY_LENGTH = void 0;
	/**
	 * Package x25519 implements X25519 key agreement.
	 */
	const random_1 = random;
	const wipe_1 = wipe$1;
	exports.PUBLIC_KEY_LENGTH = 32;
	exports.SECRET_KEY_LENGTH = 32;
	exports.SHARED_KEY_LENGTH = 32;
	// Returns new zero-filled 16-element GF (Float64Array).
	// If passed an array of numbers, prefills the returned
	// array with them.
	//
	// We use Float64Array, because we need 48-bit numbers
	// for this implementation.
	function gf(init) {
	    const r = new Float64Array(16);
	    if (init) {
	        for (let i = 0; i < init.length; i++) {
	            r[i] = init[i];
	        }
	    }
	    return r;
	}
	// Base point.
	const _9 = new Uint8Array(32);
	_9[0] = 9;
	const _121665 = gf([0xdb41, 1]);
	function car25519(o) {
	    let c = 1;
	    for (let i = 0; i < 16; i++) {
	        let v = o[i] + c + 65535;
	        c = Math.floor(v / 65536);
	        o[i] = v - c * 65536;
	    }
	    o[0] += c - 1 + 37 * (c - 1);
	}
	function sel25519(p, q, b) {
	    const c = ~(b - 1);
	    for (let i = 0; i < 16; i++) {
	        const t = c & (p[i] ^ q[i]);
	        p[i] ^= t;
	        q[i] ^= t;
	    }
	}
	function pack25519(o, n) {
	    const m = gf();
	    const t = gf();
	    for (let i = 0; i < 16; i++) {
	        t[i] = n[i];
	    }
	    car25519(t);
	    car25519(t);
	    car25519(t);
	    for (let j = 0; j < 2; j++) {
	        m[0] = t[0] - 0xffed;
	        for (let i = 1; i < 15; i++) {
	            m[i] = t[i] - 0xffff - ((m[i - 1] >> 16) & 1);
	            m[i - 1] &= 0xffff;
	        }
	        m[15] = t[15] - 0x7fff - ((m[14] >> 16) & 1);
	        const b = (m[15] >> 16) & 1;
	        m[14] &= 0xffff;
	        sel25519(t, m, 1 - b);
	    }
	    for (let i = 0; i < 16; i++) {
	        o[2 * i] = t[i] & 0xff;
	        o[2 * i + 1] = t[i] >> 8;
	    }
	}
	function unpack25519(o, n) {
	    for (let i = 0; i < 16; i++) {
	        o[i] = n[2 * i] + (n[2 * i + 1] << 8);
	    }
	    o[15] &= 0x7fff;
	}
	function add(o, a, b) {
	    for (let i = 0; i < 16; i++) {
	        o[i] = a[i] + b[i];
	    }
	}
	function sub(o, a, b) {
	    for (let i = 0; i < 16; i++) {
	        o[i] = a[i] - b[i];
	    }
	}
	function mul(o, a, b) {
	    let v, c, t0 = 0, t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0, t7 = 0, t8 = 0, t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0, t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t22 = 0, t23 = 0, t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0, b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7], b8 = b[8], b9 = b[9], b10 = b[10], b11 = b[11], b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];
	    v = a[0];
	    t0 += v * b0;
	    t1 += v * b1;
	    t2 += v * b2;
	    t3 += v * b3;
	    t4 += v * b4;
	    t5 += v * b5;
	    t6 += v * b6;
	    t7 += v * b7;
	    t8 += v * b8;
	    t9 += v * b9;
	    t10 += v * b10;
	    t11 += v * b11;
	    t12 += v * b12;
	    t13 += v * b13;
	    t14 += v * b14;
	    t15 += v * b15;
	    v = a[1];
	    t1 += v * b0;
	    t2 += v * b1;
	    t3 += v * b2;
	    t4 += v * b3;
	    t5 += v * b4;
	    t6 += v * b5;
	    t7 += v * b6;
	    t8 += v * b7;
	    t9 += v * b8;
	    t10 += v * b9;
	    t11 += v * b10;
	    t12 += v * b11;
	    t13 += v * b12;
	    t14 += v * b13;
	    t15 += v * b14;
	    t16 += v * b15;
	    v = a[2];
	    t2 += v * b0;
	    t3 += v * b1;
	    t4 += v * b2;
	    t5 += v * b3;
	    t6 += v * b4;
	    t7 += v * b5;
	    t8 += v * b6;
	    t9 += v * b7;
	    t10 += v * b8;
	    t11 += v * b9;
	    t12 += v * b10;
	    t13 += v * b11;
	    t14 += v * b12;
	    t15 += v * b13;
	    t16 += v * b14;
	    t17 += v * b15;
	    v = a[3];
	    t3 += v * b0;
	    t4 += v * b1;
	    t5 += v * b2;
	    t6 += v * b3;
	    t7 += v * b4;
	    t8 += v * b5;
	    t9 += v * b6;
	    t10 += v * b7;
	    t11 += v * b8;
	    t12 += v * b9;
	    t13 += v * b10;
	    t14 += v * b11;
	    t15 += v * b12;
	    t16 += v * b13;
	    t17 += v * b14;
	    t18 += v * b15;
	    v = a[4];
	    t4 += v * b0;
	    t5 += v * b1;
	    t6 += v * b2;
	    t7 += v * b3;
	    t8 += v * b4;
	    t9 += v * b5;
	    t10 += v * b6;
	    t11 += v * b7;
	    t12 += v * b8;
	    t13 += v * b9;
	    t14 += v * b10;
	    t15 += v * b11;
	    t16 += v * b12;
	    t17 += v * b13;
	    t18 += v * b14;
	    t19 += v * b15;
	    v = a[5];
	    t5 += v * b0;
	    t6 += v * b1;
	    t7 += v * b2;
	    t8 += v * b3;
	    t9 += v * b4;
	    t10 += v * b5;
	    t11 += v * b6;
	    t12 += v * b7;
	    t13 += v * b8;
	    t14 += v * b9;
	    t15 += v * b10;
	    t16 += v * b11;
	    t17 += v * b12;
	    t18 += v * b13;
	    t19 += v * b14;
	    t20 += v * b15;
	    v = a[6];
	    t6 += v * b0;
	    t7 += v * b1;
	    t8 += v * b2;
	    t9 += v * b3;
	    t10 += v * b4;
	    t11 += v * b5;
	    t12 += v * b6;
	    t13 += v * b7;
	    t14 += v * b8;
	    t15 += v * b9;
	    t16 += v * b10;
	    t17 += v * b11;
	    t18 += v * b12;
	    t19 += v * b13;
	    t20 += v * b14;
	    t21 += v * b15;
	    v = a[7];
	    t7 += v * b0;
	    t8 += v * b1;
	    t9 += v * b2;
	    t10 += v * b3;
	    t11 += v * b4;
	    t12 += v * b5;
	    t13 += v * b6;
	    t14 += v * b7;
	    t15 += v * b8;
	    t16 += v * b9;
	    t17 += v * b10;
	    t18 += v * b11;
	    t19 += v * b12;
	    t20 += v * b13;
	    t21 += v * b14;
	    t22 += v * b15;
	    v = a[8];
	    t8 += v * b0;
	    t9 += v * b1;
	    t10 += v * b2;
	    t11 += v * b3;
	    t12 += v * b4;
	    t13 += v * b5;
	    t14 += v * b6;
	    t15 += v * b7;
	    t16 += v * b8;
	    t17 += v * b9;
	    t18 += v * b10;
	    t19 += v * b11;
	    t20 += v * b12;
	    t21 += v * b13;
	    t22 += v * b14;
	    t23 += v * b15;
	    v = a[9];
	    t9 += v * b0;
	    t10 += v * b1;
	    t11 += v * b2;
	    t12 += v * b3;
	    t13 += v * b4;
	    t14 += v * b5;
	    t15 += v * b6;
	    t16 += v * b7;
	    t17 += v * b8;
	    t18 += v * b9;
	    t19 += v * b10;
	    t20 += v * b11;
	    t21 += v * b12;
	    t22 += v * b13;
	    t23 += v * b14;
	    t24 += v * b15;
	    v = a[10];
	    t10 += v * b0;
	    t11 += v * b1;
	    t12 += v * b2;
	    t13 += v * b3;
	    t14 += v * b4;
	    t15 += v * b5;
	    t16 += v * b6;
	    t17 += v * b7;
	    t18 += v * b8;
	    t19 += v * b9;
	    t20 += v * b10;
	    t21 += v * b11;
	    t22 += v * b12;
	    t23 += v * b13;
	    t24 += v * b14;
	    t25 += v * b15;
	    v = a[11];
	    t11 += v * b0;
	    t12 += v * b1;
	    t13 += v * b2;
	    t14 += v * b3;
	    t15 += v * b4;
	    t16 += v * b5;
	    t17 += v * b6;
	    t18 += v * b7;
	    t19 += v * b8;
	    t20 += v * b9;
	    t21 += v * b10;
	    t22 += v * b11;
	    t23 += v * b12;
	    t24 += v * b13;
	    t25 += v * b14;
	    t26 += v * b15;
	    v = a[12];
	    t12 += v * b0;
	    t13 += v * b1;
	    t14 += v * b2;
	    t15 += v * b3;
	    t16 += v * b4;
	    t17 += v * b5;
	    t18 += v * b6;
	    t19 += v * b7;
	    t20 += v * b8;
	    t21 += v * b9;
	    t22 += v * b10;
	    t23 += v * b11;
	    t24 += v * b12;
	    t25 += v * b13;
	    t26 += v * b14;
	    t27 += v * b15;
	    v = a[13];
	    t13 += v * b0;
	    t14 += v * b1;
	    t15 += v * b2;
	    t16 += v * b3;
	    t17 += v * b4;
	    t18 += v * b5;
	    t19 += v * b6;
	    t20 += v * b7;
	    t21 += v * b8;
	    t22 += v * b9;
	    t23 += v * b10;
	    t24 += v * b11;
	    t25 += v * b12;
	    t26 += v * b13;
	    t27 += v * b14;
	    t28 += v * b15;
	    v = a[14];
	    t14 += v * b0;
	    t15 += v * b1;
	    t16 += v * b2;
	    t17 += v * b3;
	    t18 += v * b4;
	    t19 += v * b5;
	    t20 += v * b6;
	    t21 += v * b7;
	    t22 += v * b8;
	    t23 += v * b9;
	    t24 += v * b10;
	    t25 += v * b11;
	    t26 += v * b12;
	    t27 += v * b13;
	    t28 += v * b14;
	    t29 += v * b15;
	    v = a[15];
	    t15 += v * b0;
	    t16 += v * b1;
	    t17 += v * b2;
	    t18 += v * b3;
	    t19 += v * b4;
	    t20 += v * b5;
	    t21 += v * b6;
	    t22 += v * b7;
	    t23 += v * b8;
	    t24 += v * b9;
	    t25 += v * b10;
	    t26 += v * b11;
	    t27 += v * b12;
	    t28 += v * b13;
	    t29 += v * b14;
	    t30 += v * b15;
	    t0 += 38 * t16;
	    t1 += 38 * t17;
	    t2 += 38 * t18;
	    t3 += 38 * t19;
	    t4 += 38 * t20;
	    t5 += 38 * t21;
	    t6 += 38 * t22;
	    t7 += 38 * t23;
	    t8 += 38 * t24;
	    t9 += 38 * t25;
	    t10 += 38 * t26;
	    t11 += 38 * t27;
	    t12 += 38 * t28;
	    t13 += 38 * t29;
	    t14 += 38 * t30;
	    // t15 left as is
	    // first car
	    c = 1;
	    v = t0 + c + 65535;
	    c = Math.floor(v / 65536);
	    t0 = v - c * 65536;
	    v = t1 + c + 65535;
	    c = Math.floor(v / 65536);
	    t1 = v - c * 65536;
	    v = t2 + c + 65535;
	    c = Math.floor(v / 65536);
	    t2 = v - c * 65536;
	    v = t3 + c + 65535;
	    c = Math.floor(v / 65536);
	    t3 = v - c * 65536;
	    v = t4 + c + 65535;
	    c = Math.floor(v / 65536);
	    t4 = v - c * 65536;
	    v = t5 + c + 65535;
	    c = Math.floor(v / 65536);
	    t5 = v - c * 65536;
	    v = t6 + c + 65535;
	    c = Math.floor(v / 65536);
	    t6 = v - c * 65536;
	    v = t7 + c + 65535;
	    c = Math.floor(v / 65536);
	    t7 = v - c * 65536;
	    v = t8 + c + 65535;
	    c = Math.floor(v / 65536);
	    t8 = v - c * 65536;
	    v = t9 + c + 65535;
	    c = Math.floor(v / 65536);
	    t9 = v - c * 65536;
	    v = t10 + c + 65535;
	    c = Math.floor(v / 65536);
	    t10 = v - c * 65536;
	    v = t11 + c + 65535;
	    c = Math.floor(v / 65536);
	    t11 = v - c * 65536;
	    v = t12 + c + 65535;
	    c = Math.floor(v / 65536);
	    t12 = v - c * 65536;
	    v = t13 + c + 65535;
	    c = Math.floor(v / 65536);
	    t13 = v - c * 65536;
	    v = t14 + c + 65535;
	    c = Math.floor(v / 65536);
	    t14 = v - c * 65536;
	    v = t15 + c + 65535;
	    c = Math.floor(v / 65536);
	    t15 = v - c * 65536;
	    t0 += c - 1 + 37 * (c - 1);
	    // second car
	    c = 1;
	    v = t0 + c + 65535;
	    c = Math.floor(v / 65536);
	    t0 = v - c * 65536;
	    v = t1 + c + 65535;
	    c = Math.floor(v / 65536);
	    t1 = v - c * 65536;
	    v = t2 + c + 65535;
	    c = Math.floor(v / 65536);
	    t2 = v - c * 65536;
	    v = t3 + c + 65535;
	    c = Math.floor(v / 65536);
	    t3 = v - c * 65536;
	    v = t4 + c + 65535;
	    c = Math.floor(v / 65536);
	    t4 = v - c * 65536;
	    v = t5 + c + 65535;
	    c = Math.floor(v / 65536);
	    t5 = v - c * 65536;
	    v = t6 + c + 65535;
	    c = Math.floor(v / 65536);
	    t6 = v - c * 65536;
	    v = t7 + c + 65535;
	    c = Math.floor(v / 65536);
	    t7 = v - c * 65536;
	    v = t8 + c + 65535;
	    c = Math.floor(v / 65536);
	    t8 = v - c * 65536;
	    v = t9 + c + 65535;
	    c = Math.floor(v / 65536);
	    t9 = v - c * 65536;
	    v = t10 + c + 65535;
	    c = Math.floor(v / 65536);
	    t10 = v - c * 65536;
	    v = t11 + c + 65535;
	    c = Math.floor(v / 65536);
	    t11 = v - c * 65536;
	    v = t12 + c + 65535;
	    c = Math.floor(v / 65536);
	    t12 = v - c * 65536;
	    v = t13 + c + 65535;
	    c = Math.floor(v / 65536);
	    t13 = v - c * 65536;
	    v = t14 + c + 65535;
	    c = Math.floor(v / 65536);
	    t14 = v - c * 65536;
	    v = t15 + c + 65535;
	    c = Math.floor(v / 65536);
	    t15 = v - c * 65536;
	    t0 += c - 1 + 37 * (c - 1);
	    o[0] = t0;
	    o[1] = t1;
	    o[2] = t2;
	    o[3] = t3;
	    o[4] = t4;
	    o[5] = t5;
	    o[6] = t6;
	    o[7] = t7;
	    o[8] = t8;
	    o[9] = t9;
	    o[10] = t10;
	    o[11] = t11;
	    o[12] = t12;
	    o[13] = t13;
	    o[14] = t14;
	    o[15] = t15;
	}
	function square(o, a) {
	    mul(o, a, a);
	}
	function inv25519(o, inp) {
	    const c = gf();
	    for (let i = 0; i < 16; i++) {
	        c[i] = inp[i];
	    }
	    for (let i = 253; i >= 0; i--) {
	        square(c, c);
	        if (i !== 2 && i !== 4) {
	            mul(c, c, inp);
	        }
	    }
	    for (let i = 0; i < 16; i++) {
	        o[i] = c[i];
	    }
	}
	function scalarMult(n, p) {
	    const z = new Uint8Array(32);
	    const x = new Float64Array(80);
	    const a = gf(), b = gf(), c = gf(), d = gf(), e = gf(), f = gf();
	    for (let i = 0; i < 31; i++) {
	        z[i] = n[i];
	    }
	    z[31] = (n[31] & 127) | 64;
	    z[0] &= 248;
	    unpack25519(x, p);
	    for (let i = 0; i < 16; i++) {
	        b[i] = x[i];
	    }
	    a[0] = d[0] = 1;
	    for (let i = 254; i >= 0; --i) {
	        const r = (z[i >>> 3] >>> (i & 7)) & 1;
	        sel25519(a, b, r);
	        sel25519(c, d, r);
	        add(e, a, c);
	        sub(a, a, c);
	        add(c, b, d);
	        sub(b, b, d);
	        square(d, e);
	        square(f, a);
	        mul(a, c, a);
	        mul(c, b, e);
	        add(e, a, c);
	        sub(a, a, c);
	        square(b, a);
	        sub(c, d, f);
	        mul(a, c, _121665);
	        add(a, a, d);
	        mul(c, c, a);
	        mul(a, d, f);
	        mul(d, b, x);
	        square(b, e);
	        sel25519(a, b, r);
	        sel25519(c, d, r);
	    }
	    for (let i = 0; i < 16; i++) {
	        x[i + 16] = a[i];
	        x[i + 32] = c[i];
	        x[i + 48] = b[i];
	        x[i + 64] = d[i];
	    }
	    const x32 = x.subarray(32);
	    const x16 = x.subarray(16);
	    inv25519(x32, x32);
	    mul(x16, x16, x32);
	    const q = new Uint8Array(32);
	    pack25519(q, x16);
	    return q;
	}
	exports.scalarMult = scalarMult;
	function scalarMultBase(n) {
	    return scalarMult(n, _9);
	}
	exports.scalarMultBase = scalarMultBase;
	function generateKeyPairFromSeed(seed) {
	    if (seed.length !== exports.SECRET_KEY_LENGTH) {
	        throw new Error(`x25519: seed must be ${exports.SECRET_KEY_LENGTH} bytes`);
	    }
	    const secretKey = new Uint8Array(seed);
	    const publicKey = scalarMultBase(secretKey);
	    return {
	        publicKey,
	        secretKey
	    };
	}
	exports.generateKeyPairFromSeed = generateKeyPairFromSeed;
	function generateKeyPair(prng) {
	    const seed = (0, random_1.randomBytes)(32, prng);
	    const result = generateKeyPairFromSeed(seed);
	    (0, wipe_1.wipe)(seed);
	    return result;
	}
	exports.generateKeyPair = generateKeyPair;
	/**
	 * Returns a shared key between our secret key and a peer's public key.
	 *
	 * Throws an error if the given keys are of wrong length.
	 *
	 * If rejectZero is true throws if the calculated shared key is all-zero.
	 * From RFC 7748:
	 *
	 * > Protocol designers using Diffie-Hellman over the curves defined in
	 * > this document must not assume "contributory behavior".  Specially,
	 * > contributory behavior means that both parties' private keys
	 * > contribute to the resulting shared key.  Since curve25519 and
	 * > curve448 have cofactors of 8 and 4 (respectively), an input point of
	 * > small order will eliminate any contribution from the other party's
	 * > private key.  This situation can be detected by checking for the all-
	 * > zero output, which implementations MAY do, as specified in Section 6.
	 * > However, a large number of existing implementations do not do this.
	 *
	 * IMPORTANT: the returned key is a raw result of scalar multiplication.
	 * To use it as a key material, hash it with a cryptographic hash function.
	 */
	function sharedKey(mySecretKey, theirPublicKey, rejectZero = false) {
	    if (mySecretKey.length !== exports.PUBLIC_KEY_LENGTH) {
	        throw new Error("X25519: incorrect secret key length");
	    }
	    if (theirPublicKey.length !== exports.PUBLIC_KEY_LENGTH) {
	        throw new Error("X25519: incorrect public key length");
	    }
	    const result = scalarMult(mySecretKey, theirPublicKey);
	    if (rejectZero) {
	        let zeros = 0;
	        for (let i = 0; i < result.length; i++) {
	            zeros |= result[i];
	        }
	        if (zeros === 0) {
	            throw new Error("X25519: invalid shared key");
	        }
	    }
	    return result;
	}
	exports.sharedKey = sharedKey;
	
} (x25519));

const C$1={waku:{publish:"waku_publish",batchPublish:"waku_batchPublish",subscribe:"waku_subscribe",batchSubscribe:"waku_batchSubscribe",subscription:"waku_subscription",unsubscribe:"waku_unsubscribe",batchUnsubscribe:"waku_batchUnsubscribe",batchFetchMessages:"waku_batchFetchMessages"},irn:{publish:"irn_publish",batchPublish:"irn_batchPublish",subscribe:"irn_subscribe",batchSubscribe:"irn_batchSubscribe",subscription:"irn_subscription",unsubscribe:"irn_unsubscribe",batchUnsubscribe:"irn_batchUnsubscribe",batchFetchMessages:"irn_batchFetchMessages"},iridium:{publish:"iridium_publish",batchPublish:"iridium_batchPublish",subscribe:"iridium_subscribe",batchSubscribe:"iridium_batchSubscribe",subscription:"iridium_subscription",unsubscribe:"iridium_unsubscribe",batchUnsubscribe:"iridium_batchUnsubscribe",batchFetchMessages:"iridium_batchFetchMessages"}};

const Ir$1=":";function dn(e){const[t,r]=e.split(Ir$1);return {namespace:t,reference:r}}function _r$1(e,t){return e.includes(":")?[e]:t.chains||[]}var Qo=Object.defineProperty,bn=Object.getOwnPropertySymbols,Jo=Object.prototype.hasOwnProperty,Go=Object.prototype.propertyIsEnumerable,yn=(e,t,r)=>t in e?Qo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,wn=(e,t)=>{for(var r in t||(t={}))Jo.call(t,r)&&yn(e,r,t[r]);if(bn)for(var r of bn(t))Go.call(t,r)&&yn(e,r,t[r]);return e};const xn="ReactNative",qt$1={reactNative:"react-native",node:"node",browser:"browser",unknown:"unknown"},En="js";function pi(){return typeof browser$1$1<"u"&&typeof browser$1$1.versions<"u"&&typeof browser$1$1.versions.node<"u"}function er$1(){return !getDocument_1()&&!!getNavigator_1()&&navigator.product===xn}function pr$1(){return !pi()&&!!getNavigator_1()&&!!getDocument_1()}function We$2(){return er$1()?qt$1.reactNative:pi()?qt$1.node:pr$1()?qt$1.browser:qt$1.unknown}function Wo(){var e;try{return er$1()&&typeof global$1<"u"&&typeof(global$1==null?void 0:global$1.Application)<"u"?(e=global$1.Application)==null?void 0:e.applicationId:void 0}catch{return}}function Sn(e,t){let r=queryString.parse(e);return r=wn(wn({},r),t),e=queryString.stringify(r),e}function Xo(){return getWindowMetadata_1()||{name:"",description:"",url:"",icons:[""]}}function Nn(){if(We$2()===qt$1.reactNative&&typeof global$1<"u"&&typeof(global$1==null?void 0:global$1.Platform)<"u"){const{OS:r,Version:i}=global$1.Platform;return [r,i].join("-")}const e=detect();if(e===null)return "unknown";const t=e.os?e.os.replace(" ","").toLowerCase():"unknown";return e.type==="browser"?[t,e.name,e.version].join("-"):[t,e.version].join("-")}function In(){var e;const t=We$2();return t===qt$1.browser?[t,((e=getLocation_1())==null?void 0:e.host)||"unknown"].join(":"):t}function _n(e,t,r){const i=Nn(),n=In();return [[e,t].join("-"),[En,r].join("-"),i,n].join("/")}function $o({protocol:e,version:t,relayUrl:r,sdkVersion:i,auth:n,projectId:o,useOnCloseEvent:h,bundleId:p}){const b=r.split("?"),m=_n(e,t,i),w={auth:n,ua:m,projectId:o,useOnCloseEvent:h||void 0,origin:p||void 0},y=Sn(b[1]||"",w);return b[0]+"?"+y}function _e$1(e,t){return e.filter(r=>t.includes(r)).length===e.length}function i0(e){return Object.fromEntries(e.entries())}function n0(e){return new Map(Object.entries(e))}function a0(e=cjs$3.FIVE_MINUTES,t){const r=cjs$3.toMiliseconds(e||cjs$3.FIVE_MINUTES);let i,n,o;return {resolve:h=>{o&&i&&(clearTimeout(o),i(h));},reject:h=>{o&&n&&(clearTimeout(o),n(h));},done:()=>new Promise((h,p)=>{o=setTimeout(()=>{p(new Error(t));},r),i=h,n=p;})}}function u0(e,t,r){return new Promise(async(i,n)=>{const o=setTimeout(()=>n(new Error(r)),t);try{const h=await e;i(h);}catch(h){n(h);}clearTimeout(o);})}function vi(e,t){if(typeof t=="string"&&t.startsWith(`${e}:`))return t;if(e.toLowerCase()==="topic"){if(typeof t!="string")throw new Error('Value must be "string" for expirer target type: topic');return `topic:${t}`}else if(e.toLowerCase()==="id"){if(typeof t!="number")throw new Error('Value must be "number" for expirer target type: id');return `id:${t}`}throw new Error(`Unknown expirer target type: ${e}`)}function h0(e){return vi("topic",e)}function c0(e){return vi("id",e)}function l0(e){const[t,r]=e.split(":"),i={id:void 0,topic:void 0};if(t==="topic"&&typeof r=="string")i.topic=r;else if(t==="id"&&Number.isInteger(Number(r)))i.id=Number(r);else throw new Error(`Invalid target, expected id:number or topic:string, got ${t}:${r}`);return i}function d0(e,t){return cjs$3.fromMiliseconds((Date.now())+cjs$3.toMiliseconds(e))}function p0(e){return Date.now()>=cjs$3.toMiliseconds(e)}function v0(e,t){return `${e}${t?`:${t}`:""}`}function ge$1(e=[],t=[]){return [...new Set([...e,...t])]}async function m0({id:e,topic:t,wcDeepLink:r}){try{if(!r)return;const i=typeof r=="string"?JSON.parse(r):r;let n=i?.href;if(typeof n!="string")return;n.endsWith("/")&&(n=n.slice(0,-1));const o=`${n}/wc?requestId=${e}&sessionTopic=${t}`,h=We$2();h===qt$1.browser?o.startsWith("https://")||o.startsWith("http://")?window.open(o,"_blank","noreferrer noopener"):window.open(o,"_self","noreferrer noopener"):h===qt$1.reactNative&&typeof(global$1==null?void 0:global$1.Linking)<"u"&&await global$1.Linking.openURL(o);}catch(i){console.error(i);}}async function g0(e,t){try{return await e.getItem(t)||(pr$1()?localStorage.getItem(t):void 0)}catch(r){console.error(r);}}var On=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global$1<"u"?global$1:typeof self<"u"?self:{};function A0(e){var t=e.default;if(typeof t=="function"){var r=function(){return t.apply(this,arguments)};r.prototype=t.prototype;}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach(function(i){var n=Object.getOwnPropertyDescriptor(e,i);Object.defineProperty(r,i,n.get?n:{enumerable:!0,get:function(){return e[i]}});}),r}var Pn={exports:{}};/**
 * [js-sha3]{@link https://github.com/emn178/js-sha3}
 *
 * @version 0.8.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2015-2018
 * @license MIT
 */(function(e){(function(){var t="input is invalid type",r="finalize already called",i=typeof window=="object",n=i?window:{};n.JS_SHA3_NO_WINDOW&&(i=!1);var o=!i&&typeof self=="object",h=!n.JS_SHA3_NO_NODE_JS&&typeof browser$1$1=="object"&&browser$1$1.versions&&browser$1$1.versions.node;h?n=On:o&&(n=self);var p=!n.JS_SHA3_NO_COMMON_JS&&!0&&e.exports,b=!n.JS_SHA3_NO_ARRAY_BUFFER&&typeof ArrayBuffer<"u",m="0123456789abcdef".split(""),w=[31,7936,2031616,520093696],y=[4,1024,262144,67108864],S=[1,256,65536,16777216],I=[6,1536,393216,100663296],N=[0,8,16,24],C=[1,0,32898,0,32906,2147483648,2147516416,2147483648,32907,0,2147483649,0,2147516545,2147483648,32777,2147483648,138,0,136,0,2147516425,0,2147483658,0,2147516555,0,139,2147483648,32905,2147483648,32771,2147483648,32770,2147483648,128,2147483648,32778,0,2147483658,2147483648,2147516545,2147483648,32896,2147483648,2147483649,0,2147516424,2147483648],F=[224,256,384,512],U=[128,256],J=["hex","buffer","arrayBuffer","array","digest"],Bt={128:168,256:136};(n.JS_SHA3_NO_NODE_JS||!Array.isArray)&&(Array.isArray=function(u){return Object.prototype.toString.call(u)==="[object Array]"}),b&&(n.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW||!ArrayBuffer.isView)&&(ArrayBuffer.isView=function(u){return typeof u=="object"&&u.buffer&&u.buffer.constructor===ArrayBuffer});for(var G=function(u,E,_){return function(B){return new s(u,E,u).update(B)[_]()}},H=function(u,E,_){return function(B,R){return new s(u,E,R).update(B)[_]()}},z=function(u,E,_){return function(B,R,T,P){return f["cshake"+u].update(B,R,T,P)[_]()}},Pt=function(u,E,_){return function(B,R,T,P){return f["kmac"+u].update(B,R,T,P)[_]()}},W=function(u,E,_,B){for(var R=0;R<J.length;++R){var T=J[R];u[T]=E(_,B,T);}return u},Rt=function(u,E){var _=G(u,E,"hex");return _.create=function(){return new s(u,E,u)},_.update=function(B){return _.create().update(B)},W(_,G,u,E)},Yt=function(u,E){var _=H(u,E,"hex");return _.create=function(B){return new s(u,E,B)},_.update=function(B,R){return _.create(R).update(B)},W(_,H,u,E)},Y=function(u,E){var _=Bt[u],B=z(u,E,"hex");return B.create=function(R,T,P){return !T&&!P?f["shake"+u].create(R):new s(u,E,R).bytepad([T,P],_)},B.update=function(R,T,P,O){return B.create(T,P,O).update(R)},W(B,z,u,E)},Vt=function(u,E){var _=Bt[u],B=Pt(u,E,"hex");return B.create=function(R,T,P){return new v(u,E,T).bytepad(["KMAC",P],_).bytepad([R],_)},B.update=function(R,T,P,O){return B.create(R,P,O).update(T)},W(B,Pt,u,E)},A=[{name:"keccak",padding:S,bits:F,createMethod:Rt},{name:"sha3",padding:I,bits:F,createMethod:Rt},{name:"shake",padding:w,bits:U,createMethod:Yt},{name:"cshake",padding:y,bits:U,createMethod:Y},{name:"kmac",padding:y,bits:U,createMethod:Vt}],f={},a=[],c=0;c<A.length;++c)for(var d=A[c],g=d.bits,x=0;x<g.length;++x){var M=d.name+"_"+g[x];if(a.push(M),f[M]=d.createMethod(g[x],d.padding),d.name!=="sha3"){var l=d.name+g[x];a.push(l),f[l]=f[M];}}function s(u,E,_){this.blocks=[],this.s=[],this.padding=E,this.outputBits=_,this.reset=!0,this.finalized=!1,this.block=0,this.start=0,this.blockCount=1600-(u<<1)>>5,this.byteCount=this.blockCount<<2,this.outputBlocks=_>>5,this.extraBytes=(_&31)>>3;for(var B=0;B<50;++B)this.s[B]=0;}s.prototype.update=function(u){if(this.finalized)throw new Error(r);var E,_=typeof u;if(_!=="string"){if(_==="object"){if(u===null)throw new Error(t);if(b&&u.constructor===ArrayBuffer)u=new Uint8Array(u);else if(!Array.isArray(u)&&(!b||!ArrayBuffer.isView(u)))throw new Error(t)}else throw new Error(t);E=!0;}for(var B=this.blocks,R=this.byteCount,T=u.length,P=this.blockCount,O=0,Ct=this.s,D,q;O<T;){if(this.reset)for(this.reset=!1,B[0]=this.block,D=1;D<P+1;++D)B[D]=0;if(E)for(D=this.start;O<T&&D<R;++O)B[D>>2]|=u[O]<<N[D++&3];else for(D=this.start;O<T&&D<R;++O)q=u.charCodeAt(O),q<128?B[D>>2]|=q<<N[D++&3]:q<2048?(B[D>>2]|=(192|q>>6)<<N[D++&3],B[D>>2]|=(128|q&63)<<N[D++&3]):q<55296||q>=57344?(B[D>>2]|=(224|q>>12)<<N[D++&3],B[D>>2]|=(128|q>>6&63)<<N[D++&3],B[D>>2]|=(128|q&63)<<N[D++&3]):(q=65536+((q&1023)<<10|u.charCodeAt(++O)&1023),B[D>>2]|=(240|q>>18)<<N[D++&3],B[D>>2]|=(128|q>>12&63)<<N[D++&3],B[D>>2]|=(128|q>>6&63)<<N[D++&3],B[D>>2]|=(128|q&63)<<N[D++&3]);if(this.lastByteIndex=D,D>=R){for(this.start=D-R,this.block=B[P],D=0;D<P;++D)Ct[D]^=B[D];k(Ct),this.reset=!0;}else this.start=D;}return this},s.prototype.encode=function(u,E){var _=u&255,B=1,R=[_];for(u=u>>8,_=u&255;_>0;)R.unshift(_),u=u>>8,_=u&255,++B;return E?R.push(B):R.unshift(B),this.update(R),R.length},s.prototype.encodeString=function(u){var E,_=typeof u;if(_!=="string"){if(_==="object"){if(u===null)throw new Error(t);if(b&&u.constructor===ArrayBuffer)u=new Uint8Array(u);else if(!Array.isArray(u)&&(!b||!ArrayBuffer.isView(u)))throw new Error(t)}else throw new Error(t);E=!0;}var B=0,R=u.length;if(E)B=R;else for(var T=0;T<u.length;++T){var P=u.charCodeAt(T);P<128?B+=1:P<2048?B+=2:P<55296||P>=57344?B+=3:(P=65536+((P&1023)<<10|u.charCodeAt(++T)&1023),B+=4);}return B+=this.encode(B*8),this.update(u),B},s.prototype.bytepad=function(u,E){for(var _=this.encode(E),B=0;B<u.length;++B)_+=this.encodeString(u[B]);var R=E-_%E,T=[];return T.length=R,this.update(T),this},s.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var u=this.blocks,E=this.lastByteIndex,_=this.blockCount,B=this.s;if(u[E>>2]|=this.padding[E&3],this.lastByteIndex===this.byteCount)for(u[0]=u[_],E=1;E<_+1;++E)u[E]=0;for(u[_-1]|=2147483648,E=0;E<_;++E)B[E]^=u[E];k(B);}},s.prototype.toString=s.prototype.hex=function(){this.finalize();for(var u=this.blockCount,E=this.s,_=this.outputBlocks,B=this.extraBytes,R=0,T=0,P="",O;T<_;){for(R=0;R<u&&T<_;++R,++T)O=E[R],P+=m[O>>4&15]+m[O&15]+m[O>>12&15]+m[O>>8&15]+m[O>>20&15]+m[O>>16&15]+m[O>>28&15]+m[O>>24&15];T%u===0&&(k(E),R=0);}return B&&(O=E[R],P+=m[O>>4&15]+m[O&15],B>1&&(P+=m[O>>12&15]+m[O>>8&15]),B>2&&(P+=m[O>>20&15]+m[O>>16&15])),P},s.prototype.arrayBuffer=function(){this.finalize();var u=this.blockCount,E=this.s,_=this.outputBlocks,B=this.extraBytes,R=0,T=0,P=this.outputBits>>3,O;B?O=new ArrayBuffer(_+1<<2):O=new ArrayBuffer(P);for(var Ct=new Uint32Array(O);T<_;){for(R=0;R<u&&T<_;++R,++T)Ct[T]=E[R];T%u===0&&k(E);}return B&&(Ct[R]=E[R],O=O.slice(0,P)),O},s.prototype.buffer=s.prototype.arrayBuffer,s.prototype.digest=s.prototype.array=function(){this.finalize();for(var u=this.blockCount,E=this.s,_=this.outputBlocks,B=this.extraBytes,R=0,T=0,P=[],O,Ct;T<_;){for(R=0;R<u&&T<_;++R,++T)O=T<<2,Ct=E[R],P[O]=Ct&255,P[O+1]=Ct>>8&255,P[O+2]=Ct>>16&255,P[O+3]=Ct>>24&255;T%u===0&&k(E);}return B&&(O=T<<2,Ct=E[R],P[O]=Ct&255,B>1&&(P[O+1]=Ct>>8&255),B>2&&(P[O+2]=Ct>>16&255)),P};function v(u,E,_){s.call(this,u,E,_);}v.prototype=new s,v.prototype.finalize=function(){return this.encode(this.outputBits,!0),s.prototype.finalize.call(this)};var k=function(u){var E,_,B,R,T,P,O,Ct,D,q,De,X,Z,Fe,$,tt,Te,et,rt,Ue,it,nt,ke,ft,ot,qe,st,at,Ke,ut,ht,He,ct,lt,ze,dt,pt,Le,vt,mt,je,gt,At,Qe,bt,yt,Je,wt,xt,Ge,Mt,Et,Ye,St,Nt,Ve,It,_t,Me,Ee,Se,Ne,Ie;for(B=0;B<48;B+=2)R=u[0]^u[10]^u[20]^u[30]^u[40],T=u[1]^u[11]^u[21]^u[31]^u[41],P=u[2]^u[12]^u[22]^u[32]^u[42],O=u[3]^u[13]^u[23]^u[33]^u[43],Ct=u[4]^u[14]^u[24]^u[34]^u[44],D=u[5]^u[15]^u[25]^u[35]^u[45],q=u[6]^u[16]^u[26]^u[36]^u[46],De=u[7]^u[17]^u[27]^u[37]^u[47],X=u[8]^u[18]^u[28]^u[38]^u[48],Z=u[9]^u[19]^u[29]^u[39]^u[49],E=X^(P<<1|O>>>31),_=Z^(O<<1|P>>>31),u[0]^=E,u[1]^=_,u[10]^=E,u[11]^=_,u[20]^=E,u[21]^=_,u[30]^=E,u[31]^=_,u[40]^=E,u[41]^=_,E=R^(Ct<<1|D>>>31),_=T^(D<<1|Ct>>>31),u[2]^=E,u[3]^=_,u[12]^=E,u[13]^=_,u[22]^=E,u[23]^=_,u[32]^=E,u[33]^=_,u[42]^=E,u[43]^=_,E=P^(q<<1|De>>>31),_=O^(De<<1|q>>>31),u[4]^=E,u[5]^=_,u[14]^=E,u[15]^=_,u[24]^=E,u[25]^=_,u[34]^=E,u[35]^=_,u[44]^=E,u[45]^=_,E=Ct^(X<<1|Z>>>31),_=D^(Z<<1|X>>>31),u[6]^=E,u[7]^=_,u[16]^=E,u[17]^=_,u[26]^=E,u[27]^=_,u[36]^=E,u[37]^=_,u[46]^=E,u[47]^=_,E=q^(R<<1|T>>>31),_=De^(T<<1|R>>>31),u[8]^=E,u[9]^=_,u[18]^=E,u[19]^=_,u[28]^=E,u[29]^=_,u[38]^=E,u[39]^=_,u[48]^=E,u[49]^=_,Fe=u[0],$=u[1],yt=u[11]<<4|u[10]>>>28,Je=u[10]<<4|u[11]>>>28,at=u[20]<<3|u[21]>>>29,Ke=u[21]<<3|u[20]>>>29,Ee=u[31]<<9|u[30]>>>23,Se=u[30]<<9|u[31]>>>23,gt=u[40]<<18|u[41]>>>14,At=u[41]<<18|u[40]>>>14,lt=u[2]<<1|u[3]>>>31,ze=u[3]<<1|u[2]>>>31,tt=u[13]<<12|u[12]>>>20,Te=u[12]<<12|u[13]>>>20,wt=u[22]<<10|u[23]>>>22,xt=u[23]<<10|u[22]>>>22,ut=u[33]<<13|u[32]>>>19,ht=u[32]<<13|u[33]>>>19,Ne=u[42]<<2|u[43]>>>30,Ie=u[43]<<2|u[42]>>>30,St=u[5]<<30|u[4]>>>2,Nt=u[4]<<30|u[5]>>>2,dt=u[14]<<6|u[15]>>>26,pt=u[15]<<6|u[14]>>>26,et=u[25]<<11|u[24]>>>21,rt=u[24]<<11|u[25]>>>21,Ge=u[34]<<15|u[35]>>>17,Mt=u[35]<<15|u[34]>>>17,He=u[45]<<29|u[44]>>>3,ct=u[44]<<29|u[45]>>>3,ft=u[6]<<28|u[7]>>>4,ot=u[7]<<28|u[6]>>>4,Ve=u[17]<<23|u[16]>>>9,It=u[16]<<23|u[17]>>>9,Le=u[26]<<25|u[27]>>>7,vt=u[27]<<25|u[26]>>>7,Ue=u[36]<<21|u[37]>>>11,it=u[37]<<21|u[36]>>>11,Et=u[47]<<24|u[46]>>>8,Ye=u[46]<<24|u[47]>>>8,Qe=u[8]<<27|u[9]>>>5,bt=u[9]<<27|u[8]>>>5,qe=u[18]<<20|u[19]>>>12,st=u[19]<<20|u[18]>>>12,_t=u[29]<<7|u[28]>>>25,Me=u[28]<<7|u[29]>>>25,mt=u[38]<<8|u[39]>>>24,je=u[39]<<8|u[38]>>>24,nt=u[48]<<14|u[49]>>>18,ke=u[49]<<14|u[48]>>>18,u[0]=Fe^~tt&et,u[1]=$^~Te&rt,u[10]=ft^~qe&at,u[11]=ot^~st&Ke,u[20]=lt^~dt&Le,u[21]=ze^~pt&vt,u[30]=Qe^~yt&wt,u[31]=bt^~Je&xt,u[40]=St^~Ve&_t,u[41]=Nt^~It&Me,u[2]=tt^~et&Ue,u[3]=Te^~rt&it,u[12]=qe^~at&ut,u[13]=st^~Ke&ht,u[22]=dt^~Le&mt,u[23]=pt^~vt&je,u[32]=yt^~wt&Ge,u[33]=Je^~xt&Mt,u[42]=Ve^~_t&Ee,u[43]=It^~Me&Se,u[4]=et^~Ue&nt,u[5]=rt^~it&ke,u[14]=at^~ut&He,u[15]=Ke^~ht&ct,u[24]=Le^~mt&gt,u[25]=vt^~je&At,u[34]=wt^~Ge&Et,u[35]=xt^~Mt&Ye,u[44]=_t^~Ee&Ne,u[45]=Me^~Se&Ie,u[6]=Ue^~nt&Fe,u[7]=it^~ke&$,u[16]=ut^~He&ft,u[17]=ht^~ct&ot,u[26]=mt^~gt&lt,u[27]=je^~At&ze,u[36]=Ge^~Et&Qe,u[37]=Mt^~Ye&bt,u[46]=Ee^~Ne&St,u[47]=Se^~Ie&Nt,u[8]=nt^~Fe&tt,u[9]=ke^~$&Te,u[18]=He^~ft&qe,u[19]=ct^~ot&st,u[28]=gt^~lt&dt,u[29]=At^~ze&pt,u[38]=Et^~Qe&yt,u[39]=Ye^~bt&Je,u[48]=Ne^~St&Ve,u[49]=Ie^~Nt&It,u[0]^=C[B],u[1]^=C[B+1];};if(p)e.exports=f;else for(c=0;c<a.length;++c)n[a[c]]=f[a[c]];})();})(Pn);var b0=Pn.exports;const y0="logger/5.7.0";let Dn=!1,Fn=!1;const Cr$1={debug:1,default:2,info:2,warning:3,error:4,off:5};let Tn=Cr$1.default,gi=null;function w0(){try{const e=[];if(["NFD","NFC","NFKD","NFKC"].forEach(t=>{try{if("test".normalize(t)!=="test")throw new Error("bad normalize")}catch{e.push(t);}}),e.length)throw new Error("missing "+e.join(", "));if(String.fromCharCode(233).normalize("NFD")!==String.fromCharCode(101,769))throw new Error("broken implementation")}catch(e){return e.message}return null}const Un=w0();var Ai;(function(e){e.DEBUG="DEBUG",e.INFO="INFO",e.WARNING="WARNING",e.ERROR="ERROR",e.OFF="OFF";})(Ai||(Ai={}));var re$1;(function(e){e.UNKNOWN_ERROR="UNKNOWN_ERROR",e.NOT_IMPLEMENTED="NOT_IMPLEMENTED",e.UNSUPPORTED_OPERATION="UNSUPPORTED_OPERATION",e.NETWORK_ERROR="NETWORK_ERROR",e.SERVER_ERROR="SERVER_ERROR",e.TIMEOUT="TIMEOUT",e.BUFFER_OVERRUN="BUFFER_OVERRUN",e.NUMERIC_FAULT="NUMERIC_FAULT",e.MISSING_NEW="MISSING_NEW",e.INVALID_ARGUMENT="INVALID_ARGUMENT",e.MISSING_ARGUMENT="MISSING_ARGUMENT",e.UNEXPECTED_ARGUMENT="UNEXPECTED_ARGUMENT",e.CALL_EXCEPTION="CALL_EXCEPTION",e.INSUFFICIENT_FUNDS="INSUFFICIENT_FUNDS",e.NONCE_EXPIRED="NONCE_EXPIRED",e.REPLACEMENT_UNDERPRICED="REPLACEMENT_UNDERPRICED",e.UNPREDICTABLE_GAS_LIMIT="UNPREDICTABLE_GAS_LIMIT",e.TRANSACTION_REPLACED="TRANSACTION_REPLACED",e.ACTION_REJECTED="ACTION_REJECTED";})(re$1||(re$1={}));const kn="0123456789abcdef";let L$1 = class L{constructor(t){Object.defineProperty(this,"version",{enumerable:!0,value:t,writable:!1});}_log(t,r){const i=t.toLowerCase();Cr$1[i]==null&&this.throwArgumentError("invalid log level name","logLevel",t),!(Tn>Cr$1[i])&&console.log.apply(console,r);}debug(...t){this._log(L.levels.DEBUG,t);}info(...t){this._log(L.levels.INFO,t);}warn(...t){this._log(L.levels.WARNING,t);}makeError(t,r,i){if(Fn)return this.makeError("censored error",r,{});r||(r=L.errors.UNKNOWN_ERROR),i||(i={});const n=[];Object.keys(i).forEach(b=>{const m=i[b];try{if(m instanceof Uint8Array){let w="";for(let y=0;y<m.length;y++)w+=kn[m[y]>>4],w+=kn[m[y]&15];n.push(b+"=Uint8Array(0x"+w+")");}else n.push(b+"="+JSON.stringify(m));}catch{n.push(b+"="+JSON.stringify(i[b].toString()));}}),n.push(`code=${r}`),n.push(`version=${this.version}`);const o=t;let h="";switch(r){case re$1.NUMERIC_FAULT:{h="NUMERIC_FAULT";const b=t;switch(b){case"overflow":case"underflow":case"division-by-zero":h+="-"+b;break;case"negative-power":case"negative-width":h+="-unsupported";break;case"unbound-bitwise-result":h+="-unbound-result";break}break}case re$1.CALL_EXCEPTION:case re$1.INSUFFICIENT_FUNDS:case re$1.MISSING_NEW:case re$1.NONCE_EXPIRED:case re$1.REPLACEMENT_UNDERPRICED:case re$1.TRANSACTION_REPLACED:case re$1.UNPREDICTABLE_GAS_LIMIT:h=r;break}h&&(t+=" [ See: https://links.ethers.org/v5-errors-"+h+" ]"),n.length&&(t+=" ("+n.join(", ")+")");const p=new Error(t);return p.reason=o,p.code=r,Object.keys(i).forEach(function(b){p[b]=i[b];}),p}throwError(t,r,i){throw this.makeError(t,r,i)}throwArgumentError(t,r,i){return this.throwError(t,L.errors.INVALID_ARGUMENT,{argument:r,value:i})}assert(t,r,i,n){t||this.throwError(r,i,n);}assertArgument(t,r,i,n){t||this.throwArgumentError(r,i,n);}checkNormalize(t){Un&&this.throwError("platform missing String.prototype.normalize",L.errors.UNSUPPORTED_OPERATION,{operation:"String.prototype.normalize",form:Un});}checkSafeUint53(t,r){typeof t=="number"&&(r==null&&(r="value not safe"),(t<0||t>=9007199254740991)&&this.throwError(r,L.errors.NUMERIC_FAULT,{operation:"checkSafeInteger",fault:"out-of-safe-range",value:t}),t%1&&this.throwError(r,L.errors.NUMERIC_FAULT,{operation:"checkSafeInteger",fault:"non-integer",value:t}));}checkArgumentCount(t,r,i){i?i=": "+i:i="",t<r&&this.throwError("missing argument"+i,L.errors.MISSING_ARGUMENT,{count:t,expectedCount:r}),t>r&&this.throwError("too many arguments"+i,L.errors.UNEXPECTED_ARGUMENT,{count:t,expectedCount:r});}checkNew(t,r){(t===Object||t==null)&&this.throwError("missing new",L.errors.MISSING_NEW,{name:r.name});}checkAbstract(t,r){t===r?this.throwError("cannot instantiate abstract class "+JSON.stringify(r.name)+" directly; use a sub-class",L.errors.UNSUPPORTED_OPERATION,{name:t.name,operation:"new"}):(t===Object||t==null)&&this.throwError("missing new",L.errors.MISSING_NEW,{name:r.name});}static globalLogger(){return gi||(gi=new L(y0)),gi}static setCensorship(t,r){if(!t&&r&&this.globalLogger().throwError("cannot permanently disable censorship",L.errors.UNSUPPORTED_OPERATION,{operation:"setCensorship"}),Dn){if(!t)return;this.globalLogger().throwError("error censorship permanent",L.errors.UNSUPPORTED_OPERATION,{operation:"setCensorship"});}Fn=!!t,Dn=!!r;}static setLogLevel(t){const r=Cr$1[t.toLowerCase()];if(r==null){L.globalLogger().warn("invalid log level - "+t);return}Tn=r;}static from(t){return new L(t)}};L$1.errors=re$1,L$1.levels=Ai;const x0="bytes/5.7.0",Dt$1=new L$1(x0);function qn(e){return !!e.toHexString}function rr$1(e){return e.slice||(e.slice=function(){const t=Array.prototype.slice.call(arguments);return rr$1(new Uint8Array(Array.prototype.slice.apply(e,t)))}),e}function M0(e){return Qt(e)&&!(e.length%2)||ir$1(e)}function Kn(e){return typeof e=="number"&&e==e&&e%1===0}function ir$1(e){if(e==null)return !1;if(e.constructor===Uint8Array)return !0;if(typeof e=="string"||!Kn(e.length)||e.length<0)return !1;for(let t=0;t<e.length;t++){const r=e[t];if(!Kn(r)||r<0||r>=256)return !1}return !0}function Ot$1(e,t){if(t||(t={}),typeof e=="number"){Dt$1.checkSafeUint53(e,"invalid arrayify value");const r=[];for(;e;)r.unshift(e&255),e=parseInt(String(e/256));return r.length===0&&r.push(0),rr$1(new Uint8Array(r))}if(t.allowMissingPrefix&&typeof e=="string"&&e.substring(0,2)!=="0x"&&(e="0x"+e),qn(e)&&(e=e.toHexString()),Qt(e)){let r=e.substring(2);r.length%2&&(t.hexPad==="left"?r="0"+r:t.hexPad==="right"?r+="0":Dt$1.throwArgumentError("hex data is odd-length","value",e));const i=[];for(let n=0;n<r.length;n+=2)i.push(parseInt(r.substring(n,n+2),16));return rr$1(new Uint8Array(i))}return ir$1(e)?rr$1(new Uint8Array(e)):Dt$1.throwArgumentError("invalid arrayify value","value",e)}function E0(e){const t=e.map(n=>Ot$1(n)),r=t.reduce((n,o)=>n+o.length,0),i=new Uint8Array(r);return t.reduce((n,o)=>(i.set(o,n),n+o.length),0),rr$1(i)}function S0(e,t){e=Ot$1(e),e.length>t&&Dt$1.throwArgumentError("value out of range","value",arguments[0]);const r=new Uint8Array(t);return r.set(e,t-e.length),rr$1(r)}function Qt(e,t){return !(typeof e!="string"||!e.match(/^0x[0-9A-Fa-f]*$/)||t&&e.length!==2+2*t)}const bi="0123456789abcdef";function Kt$1(e,t){if(t||(t={}),typeof e=="number"){Dt$1.checkSafeUint53(e,"invalid hexlify value");let r="";for(;e;)r=bi[e&15]+r,e=Math.floor(e/16);return r.length?(r.length%2&&(r="0"+r),"0x"+r):"0x00"}if(typeof e=="bigint")return e=e.toString(16),e.length%2?"0x0"+e:"0x"+e;if(t.allowMissingPrefix&&typeof e=="string"&&e.substring(0,2)!=="0x"&&(e="0x"+e),qn(e))return e.toHexString();if(Qt(e))return e.length%2&&(t.hexPad==="left"?e="0x0"+e.substring(2):t.hexPad==="right"?e+="0":Dt$1.throwArgumentError("hex data is odd-length","value",e)),e.toLowerCase();if(ir$1(e)){let r="0x";for(let i=0;i<e.length;i++){let n=e[i];r+=bi[(n&240)>>4]+bi[n&15];}return r}return Dt$1.throwArgumentError("invalid hexlify value","value",e)}function N0(e){if(typeof e!="string")e=Kt$1(e);else if(!Qt(e)||e.length%2)return null;return (e.length-2)/2}function Hn(e,t,r){return typeof e!="string"?e=Kt$1(e):(!Qt(e)||e.length%2)&&Dt$1.throwArgumentError("invalid hexData","value",e),t=2+2*t,r!=null?"0x"+e.substring(t,2+2*r):"0x"+e.substring(t)}function oe$1(e,t){for(typeof e!="string"?e=Kt$1(e):Qt(e)||Dt$1.throwArgumentError("invalid hex string","value",e),e.length>2*t+2&&Dt$1.throwArgumentError("value out of range","value",arguments[1]);e.length<2*t+2;)e="0x0"+e.substring(2);return e}function zn(e){const t={r:"0x",s:"0x",_vs:"0x",recoveryParam:0,v:0,yParityAndS:"0x",compact:"0x"};if(M0(e)){let r=Ot$1(e);r.length===64?(t.v=27+(r[32]>>7),r[32]&=127,t.r=Kt$1(r.slice(0,32)),t.s=Kt$1(r.slice(32,64))):r.length===65?(t.r=Kt$1(r.slice(0,32)),t.s=Kt$1(r.slice(32,64)),t.v=r[64]):Dt$1.throwArgumentError("invalid signature string","signature",e),t.v<27&&(t.v===0||t.v===1?t.v+=27:Dt$1.throwArgumentError("signature invalid v byte","signature",e)),t.recoveryParam=1-t.v%2,t.recoveryParam&&(r[32]|=128),t._vs=Kt$1(r.slice(32,64));}else {if(t.r=e.r,t.s=e.s,t.v=e.v,t.recoveryParam=e.recoveryParam,t._vs=e._vs,t._vs!=null){const n=S0(Ot$1(t._vs),32);t._vs=Kt$1(n);const o=n[0]>=128?1:0;t.recoveryParam==null?t.recoveryParam=o:t.recoveryParam!==o&&Dt$1.throwArgumentError("signature recoveryParam mismatch _vs","signature",e),n[0]&=127;const h=Kt$1(n);t.s==null?t.s=h:t.s!==h&&Dt$1.throwArgumentError("signature v mismatch _vs","signature",e);}if(t.recoveryParam==null)t.v==null?Dt$1.throwArgumentError("signature missing v and recoveryParam","signature",e):t.v===0||t.v===1?t.recoveryParam=t.v:t.recoveryParam=1-t.v%2;else if(t.v==null)t.v=27+t.recoveryParam;else {const n=t.v===0||t.v===1?t.v:1-t.v%2;t.recoveryParam!==n&&Dt$1.throwArgumentError("signature recoveryParam mismatch v","signature",e);}t.r==null||!Qt(t.r)?Dt$1.throwArgumentError("signature missing or invalid r","signature",e):t.r=oe$1(t.r,32),t.s==null||!Qt(t.s)?Dt$1.throwArgumentError("signature missing or invalid s","signature",e):t.s=oe$1(t.s,32);const r=Ot$1(t.s);r[0]>=128&&Dt$1.throwArgumentError("signature s out of range","signature",e),t.recoveryParam&&(r[0]|=128);const i=Kt$1(r);t._vs&&(Qt(t._vs)||Dt$1.throwArgumentError("signature invalid _vs","signature",e),t._vs=oe$1(t._vs,32)),t._vs==null?t._vs=i:t._vs!==i&&Dt$1.throwArgumentError("signature _vs mismatch v and s","signature",e);}return t.yParityAndS=t._vs,t.compact=t.r+t.yParityAndS.substring(2),t}function yi(e){return "0x"+b0.keccak_256(Ot$1(e))}var Ln={exports:{}},I0={},_0=Object.freeze({__proto__:null,default:I0}),B0=A0(_0);(function(e){(function(t,r){function i(A,f){if(!A)throw new Error(f||"Assertion failed")}function n(A,f){A.super_=f;var a=function(){};a.prototype=f.prototype,A.prototype=new a,A.prototype.constructor=A;}function o(A,f,a){if(o.isBN(A))return A;this.negative=0,this.words=null,this.length=0,this.red=null,A!==null&&((f==="le"||f==="be")&&(a=f,f=10),this._init(A||0,f||10,a||"be"));}typeof t=="object"?t.exports=o:r.BN=o,o.BN=o,o.wordSize=26;var h;try{typeof window<"u"&&typeof window.Buffer<"u"?h=window.Buffer:h=B0.Buffer;}catch{}o.isBN=function(f){return f instanceof o?!0:f!==null&&typeof f=="object"&&f.constructor.wordSize===o.wordSize&&Array.isArray(f.words)},o.max=function(f,a){return f.cmp(a)>0?f:a},o.min=function(f,a){return f.cmp(a)<0?f:a},o.prototype._init=function(f,a,c){if(typeof f=="number")return this._initNumber(f,a,c);if(typeof f=="object")return this._initArray(f,a,c);a==="hex"&&(a=16),i(a===(a|0)&&a>=2&&a<=36),f=f.toString().replace(/\s+/g,"");var d=0;f[0]==="-"&&(d++,this.negative=1),d<f.length&&(a===16?this._parseHex(f,d,c):(this._parseBase(f,a,d),c==="le"&&this._initArray(this.toArray(),a,c)));},o.prototype._initNumber=function(f,a,c){f<0&&(this.negative=1,f=-f),f<67108864?(this.words=[f&67108863],this.length=1):f<4503599627370496?(this.words=[f&67108863,f/67108864&67108863],this.length=2):(i(f<9007199254740992),this.words=[f&67108863,f/67108864&67108863,1],this.length=3),c==="le"&&this._initArray(this.toArray(),a,c);},o.prototype._initArray=function(f,a,c){if(i(typeof f.length=="number"),f.length<=0)return this.words=[0],this.length=1,this;this.length=Math.ceil(f.length/3),this.words=new Array(this.length);for(var d=0;d<this.length;d++)this.words[d]=0;var g,x,M=0;if(c==="be")for(d=f.length-1,g=0;d>=0;d-=3)x=f[d]|f[d-1]<<8|f[d-2]<<16,this.words[g]|=x<<M&67108863,this.words[g+1]=x>>>26-M&67108863,M+=24,M>=26&&(M-=26,g++);else if(c==="le")for(d=0,g=0;d<f.length;d+=3)x=f[d]|f[d+1]<<8|f[d+2]<<16,this.words[g]|=x<<M&67108863,this.words[g+1]=x>>>26-M&67108863,M+=24,M>=26&&(M-=26,g++);return this._strip()};function p(A,f){var a=A.charCodeAt(f);if(a>=48&&a<=57)return a-48;if(a>=65&&a<=70)return a-55;if(a>=97&&a<=102)return a-87;i(!1,"Invalid character in "+A);}function b(A,f,a){var c=p(A,a);return a-1>=f&&(c|=p(A,a-1)<<4),c}o.prototype._parseHex=function(f,a,c){this.length=Math.ceil((f.length-a)/6),this.words=new Array(this.length);for(var d=0;d<this.length;d++)this.words[d]=0;var g=0,x=0,M;if(c==="be")for(d=f.length-1;d>=a;d-=2)M=b(f,a,d)<<g,this.words[x]|=M&67108863,g>=18?(g-=18,x+=1,this.words[x]|=M>>>26):g+=8;else {var l=f.length-a;for(d=l%2===0?a+1:a;d<f.length;d+=2)M=b(f,a,d)<<g,this.words[x]|=M&67108863,g>=18?(g-=18,x+=1,this.words[x]|=M>>>26):g+=8;}this._strip();};function m(A,f,a,c){for(var d=0,g=0,x=Math.min(A.length,a),M=f;M<x;M++){var l=A.charCodeAt(M)-48;d*=c,l>=49?g=l-49+10:l>=17?g=l-17+10:g=l,i(l>=0&&g<c,"Invalid character"),d+=g;}return d}o.prototype._parseBase=function(f,a,c){this.words=[0],this.length=1;for(var d=0,g=1;g<=67108863;g*=a)d++;d--,g=g/a|0;for(var x=f.length-c,M=x%d,l=Math.min(x,x-M)+c,s=0,v=c;v<l;v+=d)s=m(f,v,v+d,a),this.imuln(g),this.words[0]+s<67108864?this.words[0]+=s:this._iaddn(s);if(M!==0){var k=1;for(s=m(f,v,f.length,a),v=0;v<M;v++)k*=a;this.imuln(k),this.words[0]+s<67108864?this.words[0]+=s:this._iaddn(s);}this._strip();},o.prototype.copy=function(f){f.words=new Array(this.length);for(var a=0;a<this.length;a++)f.words[a]=this.words[a];f.length=this.length,f.negative=this.negative,f.red=this.red;};function w(A,f){A.words=f.words,A.length=f.length,A.negative=f.negative,A.red=f.red;}if(o.prototype._move=function(f){w(f,this);},o.prototype.clone=function(){var f=new o(null);return this.copy(f),f},o.prototype._expand=function(f){for(;this.length<f;)this.words[this.length++]=0;return this},o.prototype._strip=function(){for(;this.length>1&&this.words[this.length-1]===0;)this.length--;return this._normSign()},o.prototype._normSign=function(){return this.length===1&&this.words[0]===0&&(this.negative=0),this},typeof Symbol<"u"&&typeof Symbol.for=="function")try{o.prototype[Symbol.for("nodejs.util.inspect.custom")]=y;}catch{o.prototype.inspect=y;}else o.prototype.inspect=y;function y(){return (this.red?"<BN-R: ":"<BN: ")+this.toString(16)+">"}var S=["","0","00","000","0000","00000","000000","0000000","00000000","000000000","0000000000","00000000000","000000000000","0000000000000","00000000000000","000000000000000","0000000000000000","00000000000000000","000000000000000000","0000000000000000000","00000000000000000000","000000000000000000000","0000000000000000000000","00000000000000000000000","000000000000000000000000","0000000000000000000000000"],I=[0,0,25,16,12,11,10,9,8,8,7,7,7,7,6,6,6,6,6,6,6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],N=[0,0,33554432,43046721,16777216,48828125,60466176,40353607,16777216,43046721,1e7,19487171,35831808,62748517,7529536,11390625,16777216,24137569,34012224,47045881,64e6,4084101,5153632,6436343,7962624,9765625,11881376,14348907,17210368,20511149,243e5,28629151,33554432,39135393,45435424,52521875,60466176];o.prototype.toString=function(f,a){f=f||10,a=a|0||1;var c;if(f===16||f==="hex"){c="";for(var d=0,g=0,x=0;x<this.length;x++){var M=this.words[x],l=((M<<d|g)&16777215).toString(16);g=M>>>24-d&16777215,d+=2,d>=26&&(d-=26,x--),g!==0||x!==this.length-1?c=S[6-l.length]+l+c:c=l+c;}for(g!==0&&(c=g.toString(16)+c);c.length%a!==0;)c="0"+c;return this.negative!==0&&(c="-"+c),c}if(f===(f|0)&&f>=2&&f<=36){var s=I[f],v=N[f];c="";var k=this.clone();for(k.negative=0;!k.isZero();){var u=k.modrn(v).toString(f);k=k.idivn(v),k.isZero()?c=u+c:c=S[s-u.length]+u+c;}for(this.isZero()&&(c="0"+c);c.length%a!==0;)c="0"+c;return this.negative!==0&&(c="-"+c),c}i(!1,"Base should be between 2 and 36");},o.prototype.toNumber=function(){var f=this.words[0];return this.length===2?f+=this.words[1]*67108864:this.length===3&&this.words[2]===1?f+=4503599627370496+this.words[1]*67108864:this.length>2&&i(!1,"Number can only safely store up to 53 bits"),this.negative!==0?-f:f},o.prototype.toJSON=function(){return this.toString(16,2)},h&&(o.prototype.toBuffer=function(f,a){return this.toArrayLike(h,f,a)}),o.prototype.toArray=function(f,a){return this.toArrayLike(Array,f,a)};var C=function(f,a){return f.allocUnsafe?f.allocUnsafe(a):new f(a)};o.prototype.toArrayLike=function(f,a,c){this._strip();var d=this.byteLength(),g=c||Math.max(1,d);i(d<=g,"byte array longer than desired length"),i(g>0,"Requested array length <= 0");var x=C(f,g),M=a==="le"?"LE":"BE";return this["_toArrayLike"+M](x,d),x},o.prototype._toArrayLikeLE=function(f,a){for(var c=0,d=0,g=0,x=0;g<this.length;g++){var M=this.words[g]<<x|d;f[c++]=M&255,c<f.length&&(f[c++]=M>>8&255),c<f.length&&(f[c++]=M>>16&255),x===6?(c<f.length&&(f[c++]=M>>24&255),d=0,x=0):(d=M>>>24,x+=2);}if(c<f.length)for(f[c++]=d;c<f.length;)f[c++]=0;},o.prototype._toArrayLikeBE=function(f,a){for(var c=f.length-1,d=0,g=0,x=0;g<this.length;g++){var M=this.words[g]<<x|d;f[c--]=M&255,c>=0&&(f[c--]=M>>8&255),c>=0&&(f[c--]=M>>16&255),x===6?(c>=0&&(f[c--]=M>>24&255),d=0,x=0):(d=M>>>24,x+=2);}if(c>=0)for(f[c--]=d;c>=0;)f[c--]=0;},Math.clz32?o.prototype._countBits=function(f){return 32-Math.clz32(f)}:o.prototype._countBits=function(f){var a=f,c=0;return a>=4096&&(c+=13,a>>>=13),a>=64&&(c+=7,a>>>=7),a>=8&&(c+=4,a>>>=4),a>=2&&(c+=2,a>>>=2),c+a},o.prototype._zeroBits=function(f){if(f===0)return 26;var a=f,c=0;return a&8191||(c+=13,a>>>=13),a&127||(c+=7,a>>>=7),a&15||(c+=4,a>>>=4),a&3||(c+=2,a>>>=2),a&1||c++,c},o.prototype.bitLength=function(){var f=this.words[this.length-1],a=this._countBits(f);return (this.length-1)*26+a};function F(A){for(var f=new Array(A.bitLength()),a=0;a<f.length;a++){var c=a/26|0,d=a%26;f[a]=A.words[c]>>>d&1;}return f}o.prototype.zeroBits=function(){if(this.isZero())return 0;for(var f=0,a=0;a<this.length;a++){var c=this._zeroBits(this.words[a]);if(f+=c,c!==26)break}return f},o.prototype.byteLength=function(){return Math.ceil(this.bitLength()/8)},o.prototype.toTwos=function(f){return this.negative!==0?this.abs().inotn(f).iaddn(1):this.clone()},o.prototype.fromTwos=function(f){return this.testn(f-1)?this.notn(f).iaddn(1).ineg():this.clone()},o.prototype.isNeg=function(){return this.negative!==0},o.prototype.neg=function(){return this.clone().ineg()},o.prototype.ineg=function(){return this.isZero()||(this.negative^=1),this},o.prototype.iuor=function(f){for(;this.length<f.length;)this.words[this.length++]=0;for(var a=0;a<f.length;a++)this.words[a]=this.words[a]|f.words[a];return this._strip()},o.prototype.ior=function(f){return i((this.negative|f.negative)===0),this.iuor(f)},o.prototype.or=function(f){return this.length>f.length?this.clone().ior(f):f.clone().ior(this)},o.prototype.uor=function(f){return this.length>f.length?this.clone().iuor(f):f.clone().iuor(this)},o.prototype.iuand=function(f){var a;this.length>f.length?a=f:a=this;for(var c=0;c<a.length;c++)this.words[c]=this.words[c]&f.words[c];return this.length=a.length,this._strip()},o.prototype.iand=function(f){return i((this.negative|f.negative)===0),this.iuand(f)},o.prototype.and=function(f){return this.length>f.length?this.clone().iand(f):f.clone().iand(this)},o.prototype.uand=function(f){return this.length>f.length?this.clone().iuand(f):f.clone().iuand(this)},o.prototype.iuxor=function(f){var a,c;this.length>f.length?(a=this,c=f):(a=f,c=this);for(var d=0;d<c.length;d++)this.words[d]=a.words[d]^c.words[d];if(this!==a)for(;d<a.length;d++)this.words[d]=a.words[d];return this.length=a.length,this._strip()},o.prototype.ixor=function(f){return i((this.negative|f.negative)===0),this.iuxor(f)},o.prototype.xor=function(f){return this.length>f.length?this.clone().ixor(f):f.clone().ixor(this)},o.prototype.uxor=function(f){return this.length>f.length?this.clone().iuxor(f):f.clone().iuxor(this)},o.prototype.inotn=function(f){i(typeof f=="number"&&f>=0);var a=Math.ceil(f/26)|0,c=f%26;this._expand(a),c>0&&a--;for(var d=0;d<a;d++)this.words[d]=~this.words[d]&67108863;return c>0&&(this.words[d]=~this.words[d]&67108863>>26-c),this._strip()},o.prototype.notn=function(f){return this.clone().inotn(f)},o.prototype.setn=function(f,a){i(typeof f=="number"&&f>=0);var c=f/26|0,d=f%26;return this._expand(c+1),a?this.words[c]=this.words[c]|1<<d:this.words[c]=this.words[c]&~(1<<d),this._strip()},o.prototype.iadd=function(f){var a;if(this.negative!==0&&f.negative===0)return this.negative=0,a=this.isub(f),this.negative^=1,this._normSign();if(this.negative===0&&f.negative!==0)return f.negative=0,a=this.isub(f),f.negative=1,a._normSign();var c,d;this.length>f.length?(c=this,d=f):(c=f,d=this);for(var g=0,x=0;x<d.length;x++)a=(c.words[x]|0)+(d.words[x]|0)+g,this.words[x]=a&67108863,g=a>>>26;for(;g!==0&&x<c.length;x++)a=(c.words[x]|0)+g,this.words[x]=a&67108863,g=a>>>26;if(this.length=c.length,g!==0)this.words[this.length]=g,this.length++;else if(c!==this)for(;x<c.length;x++)this.words[x]=c.words[x];return this},o.prototype.add=function(f){var a;return f.negative!==0&&this.negative===0?(f.negative=0,a=this.sub(f),f.negative^=1,a):f.negative===0&&this.negative!==0?(this.negative=0,a=f.sub(this),this.negative=1,a):this.length>f.length?this.clone().iadd(f):f.clone().iadd(this)},o.prototype.isub=function(f){if(f.negative!==0){f.negative=0;var a=this.iadd(f);return f.negative=1,a._normSign()}else if(this.negative!==0)return this.negative=0,this.iadd(f),this.negative=1,this._normSign();var c=this.cmp(f);if(c===0)return this.negative=0,this.length=1,this.words[0]=0,this;var d,g;c>0?(d=this,g=f):(d=f,g=this);for(var x=0,M=0;M<g.length;M++)a=(d.words[M]|0)-(g.words[M]|0)+x,x=a>>26,this.words[M]=a&67108863;for(;x!==0&&M<d.length;M++)a=(d.words[M]|0)+x,x=a>>26,this.words[M]=a&67108863;if(x===0&&M<d.length&&d!==this)for(;M<d.length;M++)this.words[M]=d.words[M];return this.length=Math.max(this.length,M),d!==this&&(this.negative=1),this._strip()},o.prototype.sub=function(f){return this.clone().isub(f)};function U(A,f,a){a.negative=f.negative^A.negative;var c=A.length+f.length|0;a.length=c,c=c-1|0;var d=A.words[0]|0,g=f.words[0]|0,x=d*g,M=x&67108863,l=x/67108864|0;a.words[0]=M;for(var s=1;s<c;s++){for(var v=l>>>26,k=l&67108863,u=Math.min(s,f.length-1),E=Math.max(0,s-A.length+1);E<=u;E++){var _=s-E|0;d=A.words[_]|0,g=f.words[E]|0,x=d*g+k,v+=x/67108864|0,k=x&67108863;}a.words[s]=k|0,l=v|0;}return l!==0?a.words[s]=l|0:a.length--,a._strip()}var J=function(f,a,c){var d=f.words,g=a.words,x=c.words,M=0,l,s,v,k=d[0]|0,u=k&8191,E=k>>>13,_=d[1]|0,B=_&8191,R=_>>>13,T=d[2]|0,P=T&8191,O=T>>>13,Ct=d[3]|0,D=Ct&8191,q=Ct>>>13,De=d[4]|0,X=De&8191,Z=De>>>13,Fe=d[5]|0,$=Fe&8191,tt=Fe>>>13,Te=d[6]|0,et=Te&8191,rt=Te>>>13,Ue=d[7]|0,it=Ue&8191,nt=Ue>>>13,ke=d[8]|0,ft=ke&8191,ot=ke>>>13,qe=d[9]|0,st=qe&8191,at=qe>>>13,Ke=g[0]|0,ut=Ke&8191,ht=Ke>>>13,He=g[1]|0,ct=He&8191,lt=He>>>13,ze=g[2]|0,dt=ze&8191,pt=ze>>>13,Le=g[3]|0,vt=Le&8191,mt=Le>>>13,je=g[4]|0,gt=je&8191,At=je>>>13,Qe=g[5]|0,bt=Qe&8191,yt=Qe>>>13,Je=g[6]|0,wt=Je&8191,xt=Je>>>13,Ge=g[7]|0,Mt=Ge&8191,Et=Ge>>>13,Ye=g[8]|0,St=Ye&8191,Nt=Ye>>>13,Ve=g[9]|0,It=Ve&8191,_t=Ve>>>13;c.negative=f.negative^a.negative,c.length=19,l=Math.imul(u,ut),s=Math.imul(u,ht),s=s+Math.imul(E,ut)|0,v=Math.imul(E,ht);var Me=(M+l|0)+((s&8191)<<13)|0;M=(v+(s>>>13)|0)+(Me>>>26)|0,Me&=67108863,l=Math.imul(B,ut),s=Math.imul(B,ht),s=s+Math.imul(R,ut)|0,v=Math.imul(R,ht),l=l+Math.imul(u,ct)|0,s=s+Math.imul(u,lt)|0,s=s+Math.imul(E,ct)|0,v=v+Math.imul(E,lt)|0;var Ee=(M+l|0)+((s&8191)<<13)|0;M=(v+(s>>>13)|0)+(Ee>>>26)|0,Ee&=67108863,l=Math.imul(P,ut),s=Math.imul(P,ht),s=s+Math.imul(O,ut)|0,v=Math.imul(O,ht),l=l+Math.imul(B,ct)|0,s=s+Math.imul(B,lt)|0,s=s+Math.imul(R,ct)|0,v=v+Math.imul(R,lt)|0,l=l+Math.imul(u,dt)|0,s=s+Math.imul(u,pt)|0,s=s+Math.imul(E,dt)|0,v=v+Math.imul(E,pt)|0;var Se=(M+l|0)+((s&8191)<<13)|0;M=(v+(s>>>13)|0)+(Se>>>26)|0,Se&=67108863,l=Math.imul(D,ut),s=Math.imul(D,ht),s=s+Math.imul(q,ut)|0,v=Math.imul(q,ht),l=l+Math.imul(P,ct)|0,s=s+Math.imul(P,lt)|0,s=s+Math.imul(O,ct)|0,v=v+Math.imul(O,lt)|0,l=l+Math.imul(B,dt)|0,s=s+Math.imul(B,pt)|0,s=s+Math.imul(R,dt)|0,v=v+Math.imul(R,pt)|0,l=l+Math.imul(u,vt)|0,s=s+Math.imul(u,mt)|0,s=s+Math.imul(E,vt)|0,v=v+Math.imul(E,mt)|0;var Ne=(M+l|0)+((s&8191)<<13)|0;M=(v+(s>>>13)|0)+(Ne>>>26)|0,Ne&=67108863,l=Math.imul(X,ut),s=Math.imul(X,ht),s=s+Math.imul(Z,ut)|0,v=Math.imul(Z,ht),l=l+Math.imul(D,ct)|0,s=s+Math.imul(D,lt)|0,s=s+Math.imul(q,ct)|0,v=v+Math.imul(q,lt)|0,l=l+Math.imul(P,dt)|0,s=s+Math.imul(P,pt)|0,s=s+Math.imul(O,dt)|0,v=v+Math.imul(O,pt)|0,l=l+Math.imul(B,vt)|0,s=s+Math.imul(B,mt)|0,s=s+Math.imul(R,vt)|0,v=v+Math.imul(R,mt)|0,l=l+Math.imul(u,gt)|0,s=s+Math.imul(u,At)|0,s=s+Math.imul(E,gt)|0,v=v+Math.imul(E,At)|0;var Ie=(M+l|0)+((s&8191)<<13)|0;M=(v+(s>>>13)|0)+(Ie>>>26)|0,Ie&=67108863,l=Math.imul($,ut),s=Math.imul($,ht),s=s+Math.imul(tt,ut)|0,v=Math.imul(tt,ht),l=l+Math.imul(X,ct)|0,s=s+Math.imul(X,lt)|0,s=s+Math.imul(Z,ct)|0,v=v+Math.imul(Z,lt)|0,l=l+Math.imul(D,dt)|0,s=s+Math.imul(D,pt)|0,s=s+Math.imul(q,dt)|0,v=v+Math.imul(q,pt)|0,l=l+Math.imul(P,vt)|0,s=s+Math.imul(P,mt)|0,s=s+Math.imul(O,vt)|0,v=v+Math.imul(O,mt)|0,l=l+Math.imul(B,gt)|0,s=s+Math.imul(B,At)|0,s=s+Math.imul(R,gt)|0,v=v+Math.imul(R,At)|0,l=l+Math.imul(u,bt)|0,s=s+Math.imul(u,yt)|0,s=s+Math.imul(E,bt)|0,v=v+Math.imul(E,yt)|0;var Wr=(M+l|0)+((s&8191)<<13)|0;M=(v+(s>>>13)|0)+(Wr>>>26)|0,Wr&=67108863,l=Math.imul(et,ut),s=Math.imul(et,ht),s=s+Math.imul(rt,ut)|0,v=Math.imul(rt,ht),l=l+Math.imul($,ct)|0,s=s+Math.imul($,lt)|0,s=s+Math.imul(tt,ct)|0,v=v+Math.imul(tt,lt)|0,l=l+Math.imul(X,dt)|0,s=s+Math.imul(X,pt)|0,s=s+Math.imul(Z,dt)|0,v=v+Math.imul(Z,pt)|0,l=l+Math.imul(D,vt)|0,s=s+Math.imul(D,mt)|0,s=s+Math.imul(q,vt)|0,v=v+Math.imul(q,mt)|0,l=l+Math.imul(P,gt)|0,s=s+Math.imul(P,At)|0,s=s+Math.imul(O,gt)|0,v=v+Math.imul(O,At)|0,l=l+Math.imul(B,bt)|0,s=s+Math.imul(B,yt)|0,s=s+Math.imul(R,bt)|0,v=v+Math.imul(R,yt)|0,l=l+Math.imul(u,wt)|0,s=s+Math.imul(u,xt)|0,s=s+Math.imul(E,wt)|0,v=v+Math.imul(E,xt)|0;var Xr=(M+l|0)+((s&8191)<<13)|0;M=(v+(s>>>13)|0)+(Xr>>>26)|0,Xr&=67108863,l=Math.imul(it,ut),s=Math.imul(it,ht),s=s+Math.imul(nt,ut)|0,v=Math.imul(nt,ht),l=l+Math.imul(et,ct)|0,s=s+Math.imul(et,lt)|0,s=s+Math.imul(rt,ct)|0,v=v+Math.imul(rt,lt)|0,l=l+Math.imul($,dt)|0,s=s+Math.imul($,pt)|0,s=s+Math.imul(tt,dt)|0,v=v+Math.imul(tt,pt)|0,l=l+Math.imul(X,vt)|0,s=s+Math.imul(X,mt)|0,s=s+Math.imul(Z,vt)|0,v=v+Math.imul(Z,mt)|0,l=l+Math.imul(D,gt)|0,s=s+Math.imul(D,At)|0,s=s+Math.imul(q,gt)|0,v=v+Math.imul(q,At)|0,l=l+Math.imul(P,bt)|0,s=s+Math.imul(P,yt)|0,s=s+Math.imul(O,bt)|0,v=v+Math.imul(O,yt)|0,l=l+Math.imul(B,wt)|0,s=s+Math.imul(B,xt)|0,s=s+Math.imul(R,wt)|0,v=v+Math.imul(R,xt)|0,l=l+Math.imul(u,Mt)|0,s=s+Math.imul(u,Et)|0,s=s+Math.imul(E,Mt)|0,v=v+Math.imul(E,Et)|0;var Zr=(M+l|0)+((s&8191)<<13)|0;M=(v+(s>>>13)|0)+(Zr>>>26)|0,Zr&=67108863,l=Math.imul(ft,ut),s=Math.imul(ft,ht),s=s+Math.imul(ot,ut)|0,v=Math.imul(ot,ht),l=l+Math.imul(it,ct)|0,s=s+Math.imul(it,lt)|0,s=s+Math.imul(nt,ct)|0,v=v+Math.imul(nt,lt)|0,l=l+Math.imul(et,dt)|0,s=s+Math.imul(et,pt)|0,s=s+Math.imul(rt,dt)|0,v=v+Math.imul(rt,pt)|0,l=l+Math.imul($,vt)|0,s=s+Math.imul($,mt)|0,s=s+Math.imul(tt,vt)|0,v=v+Math.imul(tt,mt)|0,l=l+Math.imul(X,gt)|0,s=s+Math.imul(X,At)|0,s=s+Math.imul(Z,gt)|0,v=v+Math.imul(Z,At)|0,l=l+Math.imul(D,bt)|0,s=s+Math.imul(D,yt)|0,s=s+Math.imul(q,bt)|0,v=v+Math.imul(q,yt)|0,l=l+Math.imul(P,wt)|0,s=s+Math.imul(P,xt)|0,s=s+Math.imul(O,wt)|0,v=v+Math.imul(O,xt)|0,l=l+Math.imul(B,Mt)|0,s=s+Math.imul(B,Et)|0,s=s+Math.imul(R,Mt)|0,v=v+Math.imul(R,Et)|0,l=l+Math.imul(u,St)|0,s=s+Math.imul(u,Nt)|0,s=s+Math.imul(E,St)|0,v=v+Math.imul(E,Nt)|0;var $r=(M+l|0)+((s&8191)<<13)|0;M=(v+(s>>>13)|0)+($r>>>26)|0,$r&=67108863,l=Math.imul(st,ut),s=Math.imul(st,ht),s=s+Math.imul(at,ut)|0,v=Math.imul(at,ht),l=l+Math.imul(ft,ct)|0,s=s+Math.imul(ft,lt)|0,s=s+Math.imul(ot,ct)|0,v=v+Math.imul(ot,lt)|0,l=l+Math.imul(it,dt)|0,s=s+Math.imul(it,pt)|0,s=s+Math.imul(nt,dt)|0,v=v+Math.imul(nt,pt)|0,l=l+Math.imul(et,vt)|0,s=s+Math.imul(et,mt)|0,s=s+Math.imul(rt,vt)|0,v=v+Math.imul(rt,mt)|0,l=l+Math.imul($,gt)|0,s=s+Math.imul($,At)|0,s=s+Math.imul(tt,gt)|0,v=v+Math.imul(tt,At)|0,l=l+Math.imul(X,bt)|0,s=s+Math.imul(X,yt)|0,s=s+Math.imul(Z,bt)|0,v=v+Math.imul(Z,yt)|0,l=l+Math.imul(D,wt)|0,s=s+Math.imul(D,xt)|0,s=s+Math.imul(q,wt)|0,v=v+Math.imul(q,xt)|0,l=l+Math.imul(P,Mt)|0,s=s+Math.imul(P,Et)|0,s=s+Math.imul(O,Mt)|0,v=v+Math.imul(O,Et)|0,l=l+Math.imul(B,St)|0,s=s+Math.imul(B,Nt)|0,s=s+Math.imul(R,St)|0,v=v+Math.imul(R,Nt)|0,l=l+Math.imul(u,It)|0,s=s+Math.imul(u,_t)|0,s=s+Math.imul(E,It)|0,v=v+Math.imul(E,_t)|0;var ti=(M+l|0)+((s&8191)<<13)|0;M=(v+(s>>>13)|0)+(ti>>>26)|0,ti&=67108863,l=Math.imul(st,ct),s=Math.imul(st,lt),s=s+Math.imul(at,ct)|0,v=Math.imul(at,lt),l=l+Math.imul(ft,dt)|0,s=s+Math.imul(ft,pt)|0,s=s+Math.imul(ot,dt)|0,v=v+Math.imul(ot,pt)|0,l=l+Math.imul(it,vt)|0,s=s+Math.imul(it,mt)|0,s=s+Math.imul(nt,vt)|0,v=v+Math.imul(nt,mt)|0,l=l+Math.imul(et,gt)|0,s=s+Math.imul(et,At)|0,s=s+Math.imul(rt,gt)|0,v=v+Math.imul(rt,At)|0,l=l+Math.imul($,bt)|0,s=s+Math.imul($,yt)|0,s=s+Math.imul(tt,bt)|0,v=v+Math.imul(tt,yt)|0,l=l+Math.imul(X,wt)|0,s=s+Math.imul(X,xt)|0,s=s+Math.imul(Z,wt)|0,v=v+Math.imul(Z,xt)|0,l=l+Math.imul(D,Mt)|0,s=s+Math.imul(D,Et)|0,s=s+Math.imul(q,Mt)|0,v=v+Math.imul(q,Et)|0,l=l+Math.imul(P,St)|0,s=s+Math.imul(P,Nt)|0,s=s+Math.imul(O,St)|0,v=v+Math.imul(O,Nt)|0,l=l+Math.imul(B,It)|0,s=s+Math.imul(B,_t)|0,s=s+Math.imul(R,It)|0,v=v+Math.imul(R,_t)|0;var ei=(M+l|0)+((s&8191)<<13)|0;M=(v+(s>>>13)|0)+(ei>>>26)|0,ei&=67108863,l=Math.imul(st,dt),s=Math.imul(st,pt),s=s+Math.imul(at,dt)|0,v=Math.imul(at,pt),l=l+Math.imul(ft,vt)|0,s=s+Math.imul(ft,mt)|0,s=s+Math.imul(ot,vt)|0,v=v+Math.imul(ot,mt)|0,l=l+Math.imul(it,gt)|0,s=s+Math.imul(it,At)|0,s=s+Math.imul(nt,gt)|0,v=v+Math.imul(nt,At)|0,l=l+Math.imul(et,bt)|0,s=s+Math.imul(et,yt)|0,s=s+Math.imul(rt,bt)|0,v=v+Math.imul(rt,yt)|0,l=l+Math.imul($,wt)|0,s=s+Math.imul($,xt)|0,s=s+Math.imul(tt,wt)|0,v=v+Math.imul(tt,xt)|0,l=l+Math.imul(X,Mt)|0,s=s+Math.imul(X,Et)|0,s=s+Math.imul(Z,Mt)|0,v=v+Math.imul(Z,Et)|0,l=l+Math.imul(D,St)|0,s=s+Math.imul(D,Nt)|0,s=s+Math.imul(q,St)|0,v=v+Math.imul(q,Nt)|0,l=l+Math.imul(P,It)|0,s=s+Math.imul(P,_t)|0,s=s+Math.imul(O,It)|0,v=v+Math.imul(O,_t)|0;var ri=(M+l|0)+((s&8191)<<13)|0;M=(v+(s>>>13)|0)+(ri>>>26)|0,ri&=67108863,l=Math.imul(st,vt),s=Math.imul(st,mt),s=s+Math.imul(at,vt)|0,v=Math.imul(at,mt),l=l+Math.imul(ft,gt)|0,s=s+Math.imul(ft,At)|0,s=s+Math.imul(ot,gt)|0,v=v+Math.imul(ot,At)|0,l=l+Math.imul(it,bt)|0,s=s+Math.imul(it,yt)|0,s=s+Math.imul(nt,bt)|0,v=v+Math.imul(nt,yt)|0,l=l+Math.imul(et,wt)|0,s=s+Math.imul(et,xt)|0,s=s+Math.imul(rt,wt)|0,v=v+Math.imul(rt,xt)|0,l=l+Math.imul($,Mt)|0,s=s+Math.imul($,Et)|0,s=s+Math.imul(tt,Mt)|0,v=v+Math.imul(tt,Et)|0,l=l+Math.imul(X,St)|0,s=s+Math.imul(X,Nt)|0,s=s+Math.imul(Z,St)|0,v=v+Math.imul(Z,Nt)|0,l=l+Math.imul(D,It)|0,s=s+Math.imul(D,_t)|0,s=s+Math.imul(q,It)|0,v=v+Math.imul(q,_t)|0;var ii=(M+l|0)+((s&8191)<<13)|0;M=(v+(s>>>13)|0)+(ii>>>26)|0,ii&=67108863,l=Math.imul(st,gt),s=Math.imul(st,At),s=s+Math.imul(at,gt)|0,v=Math.imul(at,At),l=l+Math.imul(ft,bt)|0,s=s+Math.imul(ft,yt)|0,s=s+Math.imul(ot,bt)|0,v=v+Math.imul(ot,yt)|0,l=l+Math.imul(it,wt)|0,s=s+Math.imul(it,xt)|0,s=s+Math.imul(nt,wt)|0,v=v+Math.imul(nt,xt)|0,l=l+Math.imul(et,Mt)|0,s=s+Math.imul(et,Et)|0,s=s+Math.imul(rt,Mt)|0,v=v+Math.imul(rt,Et)|0,l=l+Math.imul($,St)|0,s=s+Math.imul($,Nt)|0,s=s+Math.imul(tt,St)|0,v=v+Math.imul(tt,Nt)|0,l=l+Math.imul(X,It)|0,s=s+Math.imul(X,_t)|0,s=s+Math.imul(Z,It)|0,v=v+Math.imul(Z,_t)|0;var ni=(M+l|0)+((s&8191)<<13)|0;M=(v+(s>>>13)|0)+(ni>>>26)|0,ni&=67108863,l=Math.imul(st,bt),s=Math.imul(st,yt),s=s+Math.imul(at,bt)|0,v=Math.imul(at,yt),l=l+Math.imul(ft,wt)|0,s=s+Math.imul(ft,xt)|0,s=s+Math.imul(ot,wt)|0,v=v+Math.imul(ot,xt)|0,l=l+Math.imul(it,Mt)|0,s=s+Math.imul(it,Et)|0,s=s+Math.imul(nt,Mt)|0,v=v+Math.imul(nt,Et)|0,l=l+Math.imul(et,St)|0,s=s+Math.imul(et,Nt)|0,s=s+Math.imul(rt,St)|0,v=v+Math.imul(rt,Nt)|0,l=l+Math.imul($,It)|0,s=s+Math.imul($,_t)|0,s=s+Math.imul(tt,It)|0,v=v+Math.imul(tt,_t)|0;var fi=(M+l|0)+((s&8191)<<13)|0;M=(v+(s>>>13)|0)+(fi>>>26)|0,fi&=67108863,l=Math.imul(st,wt),s=Math.imul(st,xt),s=s+Math.imul(at,wt)|0,v=Math.imul(at,xt),l=l+Math.imul(ft,Mt)|0,s=s+Math.imul(ft,Et)|0,s=s+Math.imul(ot,Mt)|0,v=v+Math.imul(ot,Et)|0,l=l+Math.imul(it,St)|0,s=s+Math.imul(it,Nt)|0,s=s+Math.imul(nt,St)|0,v=v+Math.imul(nt,Nt)|0,l=l+Math.imul(et,It)|0,s=s+Math.imul(et,_t)|0,s=s+Math.imul(rt,It)|0,v=v+Math.imul(rt,_t)|0;var oi=(M+l|0)+((s&8191)<<13)|0;M=(v+(s>>>13)|0)+(oi>>>26)|0,oi&=67108863,l=Math.imul(st,Mt),s=Math.imul(st,Et),s=s+Math.imul(at,Mt)|0,v=Math.imul(at,Et),l=l+Math.imul(ft,St)|0,s=s+Math.imul(ft,Nt)|0,s=s+Math.imul(ot,St)|0,v=v+Math.imul(ot,Nt)|0,l=l+Math.imul(it,It)|0,s=s+Math.imul(it,_t)|0,s=s+Math.imul(nt,It)|0,v=v+Math.imul(nt,_t)|0;var si=(M+l|0)+((s&8191)<<13)|0;M=(v+(s>>>13)|0)+(si>>>26)|0,si&=67108863,l=Math.imul(st,St),s=Math.imul(st,Nt),s=s+Math.imul(at,St)|0,v=Math.imul(at,Nt),l=l+Math.imul(ft,It)|0,s=s+Math.imul(ft,_t)|0,s=s+Math.imul(ot,It)|0,v=v+Math.imul(ot,_t)|0;var ai=(M+l|0)+((s&8191)<<13)|0;M=(v+(s>>>13)|0)+(ai>>>26)|0,ai&=67108863,l=Math.imul(st,It),s=Math.imul(st,_t),s=s+Math.imul(at,It)|0,v=Math.imul(at,_t);var ui=(M+l|0)+((s&8191)<<13)|0;return M=(v+(s>>>13)|0)+(ui>>>26)|0,ui&=67108863,x[0]=Me,x[1]=Ee,x[2]=Se,x[3]=Ne,x[4]=Ie,x[5]=Wr,x[6]=Xr,x[7]=Zr,x[8]=$r,x[9]=ti,x[10]=ei,x[11]=ri,x[12]=ii,x[13]=ni,x[14]=fi,x[15]=oi,x[16]=si,x[17]=ai,x[18]=ui,M!==0&&(x[19]=M,c.length++),c};Math.imul||(J=U);function Bt(A,f,a){a.negative=f.negative^A.negative,a.length=A.length+f.length;for(var c=0,d=0,g=0;g<a.length-1;g++){var x=d;d=0;for(var M=c&67108863,l=Math.min(g,f.length-1),s=Math.max(0,g-A.length+1);s<=l;s++){var v=g-s,k=A.words[v]|0,u=f.words[s]|0,E=k*u,_=E&67108863;x=x+(E/67108864|0)|0,_=_+M|0,M=_&67108863,x=x+(_>>>26)|0,d+=x>>>26,x&=67108863;}a.words[g]=M,c=x,x=d;}return c!==0?a.words[g]=c:a.length--,a._strip()}function G(A,f,a){return Bt(A,f,a)}o.prototype.mulTo=function(f,a){var c,d=this.length+f.length;return this.length===10&&f.length===10?c=J(this,f,a):d<63?c=U(this,f,a):d<1024?c=Bt(this,f,a):c=G(this,f,a),c},o.prototype.mul=function(f){var a=new o(null);return a.words=new Array(this.length+f.length),this.mulTo(f,a)},o.prototype.mulf=function(f){var a=new o(null);return a.words=new Array(this.length+f.length),G(this,f,a)},o.prototype.imul=function(f){return this.clone().mulTo(f,this)},o.prototype.imuln=function(f){var a=f<0;a&&(f=-f),i(typeof f=="number"),i(f<67108864);for(var c=0,d=0;d<this.length;d++){var g=(this.words[d]|0)*f,x=(g&67108863)+(c&67108863);c>>=26,c+=g/67108864|0,c+=x>>>26,this.words[d]=x&67108863;}return c!==0&&(this.words[d]=c,this.length++),a?this.ineg():this},o.prototype.muln=function(f){return this.clone().imuln(f)},o.prototype.sqr=function(){return this.mul(this)},o.prototype.isqr=function(){return this.imul(this.clone())},o.prototype.pow=function(f){var a=F(f);if(a.length===0)return new o(1);for(var c=this,d=0;d<a.length&&a[d]===0;d++,c=c.sqr());if(++d<a.length)for(var g=c.sqr();d<a.length;d++,g=g.sqr())a[d]!==0&&(c=c.mul(g));return c},o.prototype.iushln=function(f){i(typeof f=="number"&&f>=0);var a=f%26,c=(f-a)/26,d=67108863>>>26-a<<26-a,g;if(a!==0){var x=0;for(g=0;g<this.length;g++){var M=this.words[g]&d,l=(this.words[g]|0)-M<<a;this.words[g]=l|x,x=M>>>26-a;}x&&(this.words[g]=x,this.length++);}if(c!==0){for(g=this.length-1;g>=0;g--)this.words[g+c]=this.words[g];for(g=0;g<c;g++)this.words[g]=0;this.length+=c;}return this._strip()},o.prototype.ishln=function(f){return i(this.negative===0),this.iushln(f)},o.prototype.iushrn=function(f,a,c){i(typeof f=="number"&&f>=0);var d;a?d=(a-a%26)/26:d=0;var g=f%26,x=Math.min((f-g)/26,this.length),M=67108863^67108863>>>g<<g,l=c;if(d-=x,d=Math.max(0,d),l){for(var s=0;s<x;s++)l.words[s]=this.words[s];l.length=x;}if(x!==0)if(this.length>x)for(this.length-=x,s=0;s<this.length;s++)this.words[s]=this.words[s+x];else this.words[0]=0,this.length=1;var v=0;for(s=this.length-1;s>=0&&(v!==0||s>=d);s--){var k=this.words[s]|0;this.words[s]=v<<26-g|k>>>g,v=k&M;}return l&&v!==0&&(l.words[l.length++]=v),this.length===0&&(this.words[0]=0,this.length=1),this._strip()},o.prototype.ishrn=function(f,a,c){return i(this.negative===0),this.iushrn(f,a,c)},o.prototype.shln=function(f){return this.clone().ishln(f)},o.prototype.ushln=function(f){return this.clone().iushln(f)},o.prototype.shrn=function(f){return this.clone().ishrn(f)},o.prototype.ushrn=function(f){return this.clone().iushrn(f)},o.prototype.testn=function(f){i(typeof f=="number"&&f>=0);var a=f%26,c=(f-a)/26,d=1<<a;if(this.length<=c)return !1;var g=this.words[c];return !!(g&d)},o.prototype.imaskn=function(f){i(typeof f=="number"&&f>=0);var a=f%26,c=(f-a)/26;if(i(this.negative===0,"imaskn works only with positive numbers"),this.length<=c)return this;if(a!==0&&c++,this.length=Math.min(c,this.length),a!==0){var d=67108863^67108863>>>a<<a;this.words[this.length-1]&=d;}return this._strip()},o.prototype.maskn=function(f){return this.clone().imaskn(f)},o.prototype.iaddn=function(f){return i(typeof f=="number"),i(f<67108864),f<0?this.isubn(-f):this.negative!==0?this.length===1&&(this.words[0]|0)<=f?(this.words[0]=f-(this.words[0]|0),this.negative=0,this):(this.negative=0,this.isubn(f),this.negative=1,this):this._iaddn(f)},o.prototype._iaddn=function(f){this.words[0]+=f;for(var a=0;a<this.length&&this.words[a]>=67108864;a++)this.words[a]-=67108864,a===this.length-1?this.words[a+1]=1:this.words[a+1]++;return this.length=Math.max(this.length,a+1),this},o.prototype.isubn=function(f){if(i(typeof f=="number"),i(f<67108864),f<0)return this.iaddn(-f);if(this.negative!==0)return this.negative=0,this.iaddn(f),this.negative=1,this;if(this.words[0]-=f,this.length===1&&this.words[0]<0)this.words[0]=-this.words[0],this.negative=1;else for(var a=0;a<this.length&&this.words[a]<0;a++)this.words[a]+=67108864,this.words[a+1]-=1;return this._strip()},o.prototype.addn=function(f){return this.clone().iaddn(f)},o.prototype.subn=function(f){return this.clone().isubn(f)},o.prototype.iabs=function(){return this.negative=0,this},o.prototype.abs=function(){return this.clone().iabs()},o.prototype._ishlnsubmul=function(f,a,c){var d=f.length+c,g;this._expand(d);var x,M=0;for(g=0;g<f.length;g++){x=(this.words[g+c]|0)+M;var l=(f.words[g]|0)*a;x-=l&67108863,M=(x>>26)-(l/67108864|0),this.words[g+c]=x&67108863;}for(;g<this.length-c;g++)x=(this.words[g+c]|0)+M,M=x>>26,this.words[g+c]=x&67108863;if(M===0)return this._strip();for(i(M===-1),M=0,g=0;g<this.length;g++)x=-(this.words[g]|0)+M,M=x>>26,this.words[g]=x&67108863;return this.negative=1,this._strip()},o.prototype._wordDiv=function(f,a){var c=this.length-f.length,d=this.clone(),g=f,x=g.words[g.length-1]|0,M=this._countBits(x);c=26-M,c!==0&&(g=g.ushln(c),d.iushln(c),x=g.words[g.length-1]|0);var l=d.length-g.length,s;if(a!=="mod"){s=new o(null),s.length=l+1,s.words=new Array(s.length);for(var v=0;v<s.length;v++)s.words[v]=0;}var k=d.clone()._ishlnsubmul(g,1,l);k.negative===0&&(d=k,s&&(s.words[l]=1));for(var u=l-1;u>=0;u--){var E=(d.words[g.length+u]|0)*67108864+(d.words[g.length+u-1]|0);for(E=Math.min(E/x|0,67108863),d._ishlnsubmul(g,E,u);d.negative!==0;)E--,d.negative=0,d._ishlnsubmul(g,1,u),d.isZero()||(d.negative^=1);s&&(s.words[u]=E);}return s&&s._strip(),d._strip(),a!=="div"&&c!==0&&d.iushrn(c),{div:s||null,mod:d}},o.prototype.divmod=function(f,a,c){if(i(!f.isZero()),this.isZero())return {div:new o(0),mod:new o(0)};var d,g,x;return this.negative!==0&&f.negative===0?(x=this.neg().divmod(f,a),a!=="mod"&&(d=x.div.neg()),a!=="div"&&(g=x.mod.neg(),c&&g.negative!==0&&g.iadd(f)),{div:d,mod:g}):this.negative===0&&f.negative!==0?(x=this.divmod(f.neg(),a),a!=="mod"&&(d=x.div.neg()),{div:d,mod:x.mod}):this.negative&f.negative?(x=this.neg().divmod(f.neg(),a),a!=="div"&&(g=x.mod.neg(),c&&g.negative!==0&&g.isub(f)),{div:x.div,mod:g}):f.length>this.length||this.cmp(f)<0?{div:new o(0),mod:this}:f.length===1?a==="div"?{div:this.divn(f.words[0]),mod:null}:a==="mod"?{div:null,mod:new o(this.modrn(f.words[0]))}:{div:this.divn(f.words[0]),mod:new o(this.modrn(f.words[0]))}:this._wordDiv(f,a)},o.prototype.div=function(f){return this.divmod(f,"div",!1).div},o.prototype.mod=function(f){return this.divmod(f,"mod",!1).mod},o.prototype.umod=function(f){return this.divmod(f,"mod",!0).mod},o.prototype.divRound=function(f){var a=this.divmod(f);if(a.mod.isZero())return a.div;var c=a.div.negative!==0?a.mod.isub(f):a.mod,d=f.ushrn(1),g=f.andln(1),x=c.cmp(d);return x<0||g===1&&x===0?a.div:a.div.negative!==0?a.div.isubn(1):a.div.iaddn(1)},o.prototype.modrn=function(f){var a=f<0;a&&(f=-f),i(f<=67108863);for(var c=(1<<26)%f,d=0,g=this.length-1;g>=0;g--)d=(c*d+(this.words[g]|0))%f;return a?-d:d},o.prototype.modn=function(f){return this.modrn(f)},o.prototype.idivn=function(f){var a=f<0;a&&(f=-f),i(f<=67108863);for(var c=0,d=this.length-1;d>=0;d--){var g=(this.words[d]|0)+c*67108864;this.words[d]=g/f|0,c=g%f;}return this._strip(),a?this.ineg():this},o.prototype.divn=function(f){return this.clone().idivn(f)},o.prototype.egcd=function(f){i(f.negative===0),i(!f.isZero());var a=this,c=f.clone();a.negative!==0?a=a.umod(f):a=a.clone();for(var d=new o(1),g=new o(0),x=new o(0),M=new o(1),l=0;a.isEven()&&c.isEven();)a.iushrn(1),c.iushrn(1),++l;for(var s=c.clone(),v=a.clone();!a.isZero();){for(var k=0,u=1;!(a.words[0]&u)&&k<26;++k,u<<=1);if(k>0)for(a.iushrn(k);k-- >0;)(d.isOdd()||g.isOdd())&&(d.iadd(s),g.isub(v)),d.iushrn(1),g.iushrn(1);for(var E=0,_=1;!(c.words[0]&_)&&E<26;++E,_<<=1);if(E>0)for(c.iushrn(E);E-- >0;)(x.isOdd()||M.isOdd())&&(x.iadd(s),M.isub(v)),x.iushrn(1),M.iushrn(1);a.cmp(c)>=0?(a.isub(c),d.isub(x),g.isub(M)):(c.isub(a),x.isub(d),M.isub(g));}return {a:x,b:M,gcd:c.iushln(l)}},o.prototype._invmp=function(f){i(f.negative===0),i(!f.isZero());var a=this,c=f.clone();a.negative!==0?a=a.umod(f):a=a.clone();for(var d=new o(1),g=new o(0),x=c.clone();a.cmpn(1)>0&&c.cmpn(1)>0;){for(var M=0,l=1;!(a.words[0]&l)&&M<26;++M,l<<=1);if(M>0)for(a.iushrn(M);M-- >0;)d.isOdd()&&d.iadd(x),d.iushrn(1);for(var s=0,v=1;!(c.words[0]&v)&&s<26;++s,v<<=1);if(s>0)for(c.iushrn(s);s-- >0;)g.isOdd()&&g.iadd(x),g.iushrn(1);a.cmp(c)>=0?(a.isub(c),d.isub(g)):(c.isub(a),g.isub(d));}var k;return a.cmpn(1)===0?k=d:k=g,k.cmpn(0)<0&&k.iadd(f),k},o.prototype.gcd=function(f){if(this.isZero())return f.abs();if(f.isZero())return this.abs();var a=this.clone(),c=f.clone();a.negative=0,c.negative=0;for(var d=0;a.isEven()&&c.isEven();d++)a.iushrn(1),c.iushrn(1);do{for(;a.isEven();)a.iushrn(1);for(;c.isEven();)c.iushrn(1);var g=a.cmp(c);if(g<0){var x=a;a=c,c=x;}else if(g===0||c.cmpn(1)===0)break;a.isub(c);}while(!0);return c.iushln(d)},o.prototype.invm=function(f){return this.egcd(f).a.umod(f)},o.prototype.isEven=function(){return (this.words[0]&1)===0},o.prototype.isOdd=function(){return (this.words[0]&1)===1},o.prototype.andln=function(f){return this.words[0]&f},o.prototype.bincn=function(f){i(typeof f=="number");var a=f%26,c=(f-a)/26,d=1<<a;if(this.length<=c)return this._expand(c+1),this.words[c]|=d,this;for(var g=d,x=c;g!==0&&x<this.length;x++){var M=this.words[x]|0;M+=g,g=M>>>26,M&=67108863,this.words[x]=M;}return g!==0&&(this.words[x]=g,this.length++),this},o.prototype.isZero=function(){return this.length===1&&this.words[0]===0},o.prototype.cmpn=function(f){var a=f<0;if(this.negative!==0&&!a)return -1;if(this.negative===0&&a)return 1;this._strip();var c;if(this.length>1)c=1;else {a&&(f=-f),i(f<=67108863,"Number is too big");var d=this.words[0]|0;c=d===f?0:d<f?-1:1;}return this.negative!==0?-c|0:c},o.prototype.cmp=function(f){if(this.negative!==0&&f.negative===0)return -1;if(this.negative===0&&f.negative!==0)return 1;var a=this.ucmp(f);return this.negative!==0?-a|0:a},o.prototype.ucmp=function(f){if(this.length>f.length)return 1;if(this.length<f.length)return -1;for(var a=0,c=this.length-1;c>=0;c--){var d=this.words[c]|0,g=f.words[c]|0;if(d!==g){d<g?a=-1:d>g&&(a=1);break}}return a},o.prototype.gtn=function(f){return this.cmpn(f)===1},o.prototype.gt=function(f){return this.cmp(f)===1},o.prototype.gten=function(f){return this.cmpn(f)>=0},o.prototype.gte=function(f){return this.cmp(f)>=0},o.prototype.ltn=function(f){return this.cmpn(f)===-1},o.prototype.lt=function(f){return this.cmp(f)===-1},o.prototype.lten=function(f){return this.cmpn(f)<=0},o.prototype.lte=function(f){return this.cmp(f)<=0},o.prototype.eqn=function(f){return this.cmpn(f)===0},o.prototype.eq=function(f){return this.cmp(f)===0},o.red=function(f){return new Y(f)},o.prototype.toRed=function(f){return i(!this.red,"Already a number in reduction context"),i(this.negative===0,"red works only with positives"),f.convertTo(this)._forceRed(f)},o.prototype.fromRed=function(){return i(this.red,"fromRed works only with numbers in reduction context"),this.red.convertFrom(this)},o.prototype._forceRed=function(f){return this.red=f,this},o.prototype.forceRed=function(f){return i(!this.red,"Already a number in reduction context"),this._forceRed(f)},o.prototype.redAdd=function(f){return i(this.red,"redAdd works only with red numbers"),this.red.add(this,f)},o.prototype.redIAdd=function(f){return i(this.red,"redIAdd works only with red numbers"),this.red.iadd(this,f)},o.prototype.redSub=function(f){return i(this.red,"redSub works only with red numbers"),this.red.sub(this,f)},o.prototype.redISub=function(f){return i(this.red,"redISub works only with red numbers"),this.red.isub(this,f)},o.prototype.redShl=function(f){return i(this.red,"redShl works only with red numbers"),this.red.shl(this,f)},o.prototype.redMul=function(f){return i(this.red,"redMul works only with red numbers"),this.red._verify2(this,f),this.red.mul(this,f)},o.prototype.redIMul=function(f){return i(this.red,"redMul works only with red numbers"),this.red._verify2(this,f),this.red.imul(this,f)},o.prototype.redSqr=function(){return i(this.red,"redSqr works only with red numbers"),this.red._verify1(this),this.red.sqr(this)},o.prototype.redISqr=function(){return i(this.red,"redISqr works only with red numbers"),this.red._verify1(this),this.red.isqr(this)},o.prototype.redSqrt=function(){return i(this.red,"redSqrt works only with red numbers"),this.red._verify1(this),this.red.sqrt(this)},o.prototype.redInvm=function(){return i(this.red,"redInvm works only with red numbers"),this.red._verify1(this),this.red.invm(this)},o.prototype.redNeg=function(){return i(this.red,"redNeg works only with red numbers"),this.red._verify1(this),this.red.neg(this)},o.prototype.redPow=function(f){return i(this.red&&!f.red,"redPow(normalNum)"),this.red._verify1(this),this.red.pow(this,f)};var H={k256:null,p224:null,p192:null,p25519:null};function z(A,f){this.name=A,this.p=new o(f,16),this.n=this.p.bitLength(),this.k=new o(1).iushln(this.n).isub(this.p),this.tmp=this._tmp();}z.prototype._tmp=function(){var f=new o(null);return f.words=new Array(Math.ceil(this.n/13)),f},z.prototype.ireduce=function(f){var a=f,c;do this.split(a,this.tmp),a=this.imulK(a),a=a.iadd(this.tmp),c=a.bitLength();while(c>this.n);var d=c<this.n?-1:a.ucmp(this.p);return d===0?(a.words[0]=0,a.length=1):d>0?a.isub(this.p):a.strip!==void 0?a.strip():a._strip(),a},z.prototype.split=function(f,a){f.iushrn(this.n,0,a);},z.prototype.imulK=function(f){return f.imul(this.k)};function Pt(){z.call(this,"k256","ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");}n(Pt,z),Pt.prototype.split=function(f,a){for(var c=4194303,d=Math.min(f.length,9),g=0;g<d;g++)a.words[g]=f.words[g];if(a.length=d,f.length<=9){f.words[0]=0,f.length=1;return}var x=f.words[9];for(a.words[a.length++]=x&c,g=10;g<f.length;g++){var M=f.words[g]|0;f.words[g-10]=(M&c)<<4|x>>>22,x=M;}x>>>=22,f.words[g-10]=x,x===0&&f.length>10?f.length-=10:f.length-=9;},Pt.prototype.imulK=function(f){f.words[f.length]=0,f.words[f.length+1]=0,f.length+=2;for(var a=0,c=0;c<f.length;c++){var d=f.words[c]|0;a+=d*977,f.words[c]=a&67108863,a=d*64+(a/67108864|0);}return f.words[f.length-1]===0&&(f.length--,f.words[f.length-1]===0&&f.length--),f};function W(){z.call(this,"p224","ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");}n(W,z);function Rt(){z.call(this,"p192","ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");}n(Rt,z);function Yt(){z.call(this,"25519","7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");}n(Yt,z),Yt.prototype.imulK=function(f){for(var a=0,c=0;c<f.length;c++){var d=(f.words[c]|0)*19+a,g=d&67108863;d>>>=26,f.words[c]=g,a=d;}return a!==0&&(f.words[f.length++]=a),f},o._prime=function(f){if(H[f])return H[f];var a;if(f==="k256")a=new Pt;else if(f==="p224")a=new W;else if(f==="p192")a=new Rt;else if(f==="p25519")a=new Yt;else throw new Error("Unknown prime "+f);return H[f]=a,a};function Y(A){if(typeof A=="string"){var f=o._prime(A);this.m=f.p,this.prime=f;}else i(A.gtn(1),"modulus must be greater than 1"),this.m=A,this.prime=null;}Y.prototype._verify1=function(f){i(f.negative===0,"red works only with positives"),i(f.red,"red works only with red numbers");},Y.prototype._verify2=function(f,a){i((f.negative|a.negative)===0,"red works only with positives"),i(f.red&&f.red===a.red,"red works only with red numbers");},Y.prototype.imod=function(f){return this.prime?this.prime.ireduce(f)._forceRed(this):(w(f,f.umod(this.m)._forceRed(this)),f)},Y.prototype.neg=function(f){return f.isZero()?f.clone():this.m.sub(f)._forceRed(this)},Y.prototype.add=function(f,a){this._verify2(f,a);var c=f.add(a);return c.cmp(this.m)>=0&&c.isub(this.m),c._forceRed(this)},Y.prototype.iadd=function(f,a){this._verify2(f,a);var c=f.iadd(a);return c.cmp(this.m)>=0&&c.isub(this.m),c},Y.prototype.sub=function(f,a){this._verify2(f,a);var c=f.sub(a);return c.cmpn(0)<0&&c.iadd(this.m),c._forceRed(this)},Y.prototype.isub=function(f,a){this._verify2(f,a);var c=f.isub(a);return c.cmpn(0)<0&&c.iadd(this.m),c},Y.prototype.shl=function(f,a){return this._verify1(f),this.imod(f.ushln(a))},Y.prototype.imul=function(f,a){return this._verify2(f,a),this.imod(f.imul(a))},Y.prototype.mul=function(f,a){return this._verify2(f,a),this.imod(f.mul(a))},Y.prototype.isqr=function(f){return this.imul(f,f.clone())},Y.prototype.sqr=function(f){return this.mul(f,f)},Y.prototype.sqrt=function(f){if(f.isZero())return f.clone();var a=this.m.andln(3);if(i(a%2===1),a===3){var c=this.m.add(new o(1)).iushrn(2);return this.pow(f,c)}for(var d=this.m.subn(1),g=0;!d.isZero()&&d.andln(1)===0;)g++,d.iushrn(1);i(!d.isZero());var x=new o(1).toRed(this),M=x.redNeg(),l=this.m.subn(1).iushrn(1),s=this.m.bitLength();for(s=new o(2*s*s).toRed(this);this.pow(s,l).cmp(M)!==0;)s.redIAdd(M);for(var v=this.pow(s,d),k=this.pow(f,d.addn(1).iushrn(1)),u=this.pow(f,d),E=g;u.cmp(x)!==0;){for(var _=u,B=0;_.cmp(x)!==0;B++)_=_.redSqr();i(B<E);var R=this.pow(v,new o(1).iushln(E-B-1));k=k.redMul(R),v=R.redSqr(),u=u.redMul(v),E=B;}return k},Y.prototype.invm=function(f){var a=f._invmp(this.m);return a.negative!==0?(a.negative=0,this.imod(a).redNeg()):this.imod(a)},Y.prototype.pow=function(f,a){if(a.isZero())return new o(1).toRed(this);if(a.cmpn(1)===0)return f.clone();var c=4,d=new Array(1<<c);d[0]=new o(1).toRed(this),d[1]=f;for(var g=2;g<d.length;g++)d[g]=this.mul(d[g-1],f);var x=d[0],M=0,l=0,s=a.bitLength()%26;for(s===0&&(s=26),g=a.length-1;g>=0;g--){for(var v=a.words[g],k=s-1;k>=0;k--){var u=v>>k&1;if(x!==d[0]&&(x=this.sqr(x)),u===0&&M===0){l=0;continue}M<<=1,M|=u,l++,!(l!==c&&(g!==0||k!==0))&&(x=this.mul(x,d[M]),l=0,M=0);}s=26;}return x},Y.prototype.convertTo=function(f){var a=f.umod(this.m);return a===f?a.clone():a},Y.prototype.convertFrom=function(f){var a=f.clone();return a.red=null,a},o.mont=function(f){return new Vt(f)};function Vt(A){Y.call(this,A),this.shift=this.m.bitLength(),this.shift%26!==0&&(this.shift+=26-this.shift%26),this.r=new o(1).iushln(this.shift),this.r2=this.imod(this.r.sqr()),this.rinv=this.r._invmp(this.m),this.minv=this.rinv.mul(this.r).isubn(1).div(this.m),this.minv=this.minv.umod(this.r),this.minv=this.r.sub(this.minv);}n(Vt,Y),Vt.prototype.convertTo=function(f){return this.imod(f.ushln(this.shift))},Vt.prototype.convertFrom=function(f){var a=this.imod(f.mul(this.rinv));return a.red=null,a},Vt.prototype.imul=function(f,a){if(f.isZero()||a.isZero())return f.words[0]=0,f.length=1,f;var c=f.imul(a),d=c.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),g=c.isub(d).iushrn(this.shift),x=g;return g.cmp(this.m)>=0?x=g.isub(this.m):g.cmpn(0)<0&&(x=g.iadd(this.m)),x._forceRed(this)},Vt.prototype.mul=function(f,a){if(f.isZero()||a.isZero())return new o(0)._forceRed(this);var c=f.mul(a),d=c.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),g=c.isub(d).iushrn(this.shift),x=g;return g.cmp(this.m)>=0?x=g.isub(this.m):g.cmpn(0)<0&&(x=g.iadd(this.m)),x._forceRed(this)},Vt.prototype.invm=function(f){var a=this.imod(f._invmp(this.m).mul(this.r2));return a._forceRed(this)};})(e,On);})(Ln);var K$1=Ln.exports;const jn="bignumber/5.7.0";var Rr$1=K$1.BN;const Ae=new L$1(jn),wi={},Qn=9007199254740991;function C0(e){return e!=null&&(V$1.isBigNumber(e)||typeof e=="number"&&e%1===0||typeof e=="string"&&!!e.match(/^-?[0-9]+$/)||Qt(e)||typeof e=="bigint"||ir$1(e))}let Jn=!1;let V$1 = class V{constructor(t,r){t!==wi&&Ae.throwError("cannot call constructor directly; use BigNumber.from",L$1.errors.UNSUPPORTED_OPERATION,{operation:"new (BigNumber)"}),this._hex=r,this._isBigNumber=!0,Object.freeze(this);}fromTwos(t){return Lt$1(j$1(this).fromTwos(t))}toTwos(t){return Lt$1(j$1(this).toTwos(t))}abs(){return this._hex[0]==="-"?V.from(this._hex.substring(1)):this}add(t){return Lt$1(j$1(this).add(j$1(t)))}sub(t){return Lt$1(j$1(this).sub(j$1(t)))}div(t){return V.from(t).isZero()&&Wt$1("division-by-zero","div"),Lt$1(j$1(this).div(j$1(t)))}mul(t){return Lt$1(j$1(this).mul(j$1(t)))}mod(t){const r=j$1(t);return r.isNeg()&&Wt$1("division-by-zero","mod"),Lt$1(j$1(this).umod(r))}pow(t){const r=j$1(t);return r.isNeg()&&Wt$1("negative-power","pow"),Lt$1(j$1(this).pow(r))}and(t){const r=j$1(t);return (this.isNegative()||r.isNeg())&&Wt$1("unbound-bitwise-result","and"),Lt$1(j$1(this).and(r))}or(t){const r=j$1(t);return (this.isNegative()||r.isNeg())&&Wt$1("unbound-bitwise-result","or"),Lt$1(j$1(this).or(r))}xor(t){const r=j$1(t);return (this.isNegative()||r.isNeg())&&Wt$1("unbound-bitwise-result","xor"),Lt$1(j$1(this).xor(r))}mask(t){return (this.isNegative()||t<0)&&Wt$1("negative-width","mask"),Lt$1(j$1(this).maskn(t))}shl(t){return (this.isNegative()||t<0)&&Wt$1("negative-width","shl"),Lt$1(j$1(this).shln(t))}shr(t){return (this.isNegative()||t<0)&&Wt$1("negative-width","shr"),Lt$1(j$1(this).shrn(t))}eq(t){return j$1(this).eq(j$1(t))}lt(t){return j$1(this).lt(j$1(t))}lte(t){return j$1(this).lte(j$1(t))}gt(t){return j$1(this).gt(j$1(t))}gte(t){return j$1(this).gte(j$1(t))}isNegative(){return this._hex[0]==="-"}isZero(){return j$1(this).isZero()}toNumber(){try{return j$1(this).toNumber()}catch{Wt$1("overflow","toNumber",this.toString());}return null}toBigInt(){try{return BigInt(this.toString())}catch{}return Ae.throwError("this platform does not support BigInt",L$1.errors.UNSUPPORTED_OPERATION,{value:this.toString()})}toString(){return arguments.length>0&&(arguments[0]===10?Jn||(Jn=!0,Ae.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")):arguments[0]===16?Ae.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()",L$1.errors.UNEXPECTED_ARGUMENT,{}):Ae.throwError("BigNumber.toString does not accept parameters",L$1.errors.UNEXPECTED_ARGUMENT,{})),j$1(this).toString(10)}toHexString(){return this._hex}toJSON(t){return {type:"BigNumber",hex:this.toHexString()}}static from(t){if(t instanceof V)return t;if(typeof t=="string")return t.match(/^-?0x[0-9a-f]+$/i)?new V(wi,vr$1(t)):t.match(/^-?[0-9]+$/)?new V(wi,vr$1(new Rr$1(t))):Ae.throwArgumentError("invalid BigNumber string","value",t);if(typeof t=="number")return t%1&&Wt$1("underflow","BigNumber.from",t),(t>=Qn||t<=-Qn)&&Wt$1("overflow","BigNumber.from",t),V.from(String(t));const r=t;if(typeof r=="bigint")return V.from(r.toString());if(ir$1(r))return V.from(Kt$1(r));if(r)if(r.toHexString){const i=r.toHexString();if(typeof i=="string")return V.from(i)}else {let i=r._hex;if(i==null&&r.type==="BigNumber"&&(i=r.hex),typeof i=="string"&&(Qt(i)||i[0]==="-"&&Qt(i.substring(1))))return V.from(i)}return Ae.throwArgumentError("invalid BigNumber value","value",t)}static isBigNumber(t){return !!(t&&t._isBigNumber)}};function vr$1(e){if(typeof e!="string")return vr$1(e.toString(16));if(e[0]==="-")return e=e.substring(1),e[0]==="-"&&Ae.throwArgumentError("invalid hex","value",e),e=vr$1(e),e==="0x00"?e:"-"+e;if(e.substring(0,2)!=="0x"&&(e="0x"+e),e==="0x")return "0x00";for(e.length%2&&(e="0x0"+e.substring(2));e.length>4&&e.substring(0,4)==="0x00";)e="0x"+e.substring(4);return e}function Lt$1(e){return V$1.from(vr$1(e))}function j$1(e){const t=V$1.from(e).toHexString();return t[0]==="-"?new Rr$1("-"+t.substring(3),16):new Rr$1(t.substring(2),16)}function Wt$1(e,t,r){const i={fault:e,operation:t};return r!=null&&(i.value=r),Ae.throwError(e,L$1.errors.NUMERIC_FAULT,i)}function R0(e){return new Rr$1(e,36).toString(16)}const Ht$1=new L$1(jn),mr={},Gn=V$1.from(0),Yn=V$1.from(-1);function Vn(e,t,r,i){const n={fault:t,operation:r};return i!==void 0&&(n.value=i),Ht$1.throwError(e,L$1.errors.NUMERIC_FAULT,n)}let gr$1="0";for(;gr$1.length<256;)gr$1+=gr$1;function xi(e){if(typeof e!="number")try{e=V$1.from(e).toNumber();}catch{}return typeof e=="number"&&e>=0&&e<=256&&!(e%1)?"1"+gr$1.substring(0,e):Ht$1.throwArgumentError("invalid decimal size","decimals",e)}function Mi(e,t){t==null&&(t=0);const r=xi(t);e=V$1.from(e);const i=e.lt(Gn);i&&(e=e.mul(Yn));let n=e.mod(r).toString();for(;n.length<r.length-1;)n="0"+n;n=n.match(/^([0-9]*[1-9]|0)(0*)/)[1];const o=e.div(r).toString();return r.length===1?e=o:e=o+"."+n,i&&(e="-"+e),e}function be(e,t){t==null&&(t=0);const r=xi(t);(typeof e!="string"||!e.match(/^-?[0-9.]+$/))&&Ht$1.throwArgumentError("invalid decimal value","value",e);const i=e.substring(0,1)==="-";i&&(e=e.substring(1)),e==="."&&Ht$1.throwArgumentError("missing value","value",e);const n=e.split(".");n.length>2&&Ht$1.throwArgumentError("too many decimal points","value",e);let o=n[0],h=n[1];for(o||(o="0"),h||(h="0");h[h.length-1]==="0";)h=h.substring(0,h.length-1);for(h.length>r.length-1&&Vn("fractional component exceeds decimals","underflow","parseFixed"),h===""&&(h="0");h.length<r.length-1;)h+="0";const p=V$1.from(o),b=V$1.from(h);let m=p.mul(r).add(b);return i&&(m=m.mul(Yn)),m}let dr$1 = class dr{constructor(t,r,i,n){t!==mr&&Ht$1.throwError("cannot use FixedFormat constructor; use FixedFormat.from",L$1.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.signed=r,this.width=i,this.decimals=n,this.name=(r?"":"u")+"fixed"+String(i)+"x"+String(n),this._multiplier=xi(n),Object.freeze(this);}static from(t){if(t instanceof dr)return t;typeof t=="number"&&(t=`fixed128x${t}`);let r=!0,i=128,n=18;if(typeof t=="string"){if(t!=="fixed")if(t==="ufixed")r=!1;else {const o=t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);o||Ht$1.throwArgumentError("invalid fixed format","format",t),r=o[1]!=="u",i=parseInt(o[2]),n=parseInt(o[3]);}}else if(t){const o=(h,p,b)=>t[h]==null?b:(typeof t[h]!==p&&Ht$1.throwArgumentError("invalid fixed format ("+h+" not "+p+")","format."+h,t[h]),t[h]);r=o("signed","boolean",r),i=o("width","number",i),n=o("decimals","number",n);}return i%8&&Ht$1.throwArgumentError("invalid fixed format width (not byte aligned)","format.width",i),n>80&&Ht$1.throwArgumentError("invalid fixed format (decimals too large)","format.decimals",n),new dr(mr,r,i,n)}};let Ut$1 = class Ut{constructor(t,r,i,n){t!==mr&&Ht$1.throwError("cannot use FixedNumber constructor; use FixedNumber.from",L$1.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.format=n,this._hex=r,this._value=i,this._isFixedNumber=!0,Object.freeze(this);}_checkFormat(t){this.format.name!==t.format.name&&Ht$1.throwArgumentError("incompatible format; use fixedNumber.toFormat","other",t);}addUnsafe(t){this._checkFormat(t);const r=be(this._value,this.format.decimals),i=be(t._value,t.format.decimals);return Ut.fromValue(r.add(i),this.format.decimals,this.format)}subUnsafe(t){this._checkFormat(t);const r=be(this._value,this.format.decimals),i=be(t._value,t.format.decimals);return Ut.fromValue(r.sub(i),this.format.decimals,this.format)}mulUnsafe(t){this._checkFormat(t);const r=be(this._value,this.format.decimals),i=be(t._value,t.format.decimals);return Ut.fromValue(r.mul(i).div(this.format._multiplier),this.format.decimals,this.format)}divUnsafe(t){this._checkFormat(t);const r=be(this._value,this.format.decimals),i=be(t._value,t.format.decimals);return Ut.fromValue(r.mul(this.format._multiplier).div(i),this.format.decimals,this.format)}floor(){const t=this.toString().split(".");t.length===1&&t.push("0");let r=Ut.from(t[0],this.format);const i=!t[1].match(/^(0*)$/);return this.isNegative()&&i&&(r=r.subUnsafe(Wn.toFormat(r.format))),r}ceiling(){const t=this.toString().split(".");t.length===1&&t.push("0");let r=Ut.from(t[0],this.format);const i=!t[1].match(/^(0*)$/);return !this.isNegative()&&i&&(r=r.addUnsafe(Wn.toFormat(r.format))),r}round(t){t==null&&(t=0);const r=this.toString().split(".");if(r.length===1&&r.push("0"),(t<0||t>80||t%1)&&Ht$1.throwArgumentError("invalid decimal count","decimals",t),r[1].length<=t)return this;const i=Ut.from("1"+gr$1.substring(0,t),this.format),n=O0.toFormat(this.format);return this.mulUnsafe(i).addUnsafe(n).floor().divUnsafe(i)}isZero(){return this._value==="0.0"||this._value==="0"}isNegative(){return this._value[0]==="-"}toString(){return this._value}toHexString(t){if(t==null)return this._hex;t%8&&Ht$1.throwArgumentError("invalid byte width","width",t);const r=V$1.from(this._hex).fromTwos(this.format.width).toTwos(t).toHexString();return oe$1(r,t/8)}toUnsafeFloat(){return parseFloat(this.toString())}toFormat(t){return Ut.fromString(this._value,t)}static fromValue(t,r,i){return i==null&&r!=null&&!C0(r)&&(i=r,r=null),r==null&&(r=0),i==null&&(i="fixed"),Ut.fromString(Mi(t,r),dr$1.from(i))}static fromString(t,r){r==null&&(r="fixed");const i=dr$1.from(r),n=be(t,i.decimals);!i.signed&&n.lt(Gn)&&Vn("unsigned value cannot be negative","overflow","value",t);let o=null;i.signed?o=n.toTwos(i.width).toHexString():(o=n.toHexString(),o=oe$1(o,i.width/8));const h=Mi(n,i.decimals);return new Ut(mr,o,h,i)}static fromBytes(t,r){r==null&&(r="fixed");const i=dr$1.from(r);if(Ot$1(t).length>i.width/8)throw new Error("overflow");let n=V$1.from(t);i.signed&&(n=n.fromTwos(i.width));const o=n.toTwos((i.signed?0:1)+i.width).toHexString(),h=Mi(n,i.decimals);return new Ut(mr,o,h,i)}static from(t,r){if(typeof t=="string")return Ut.fromString(t,r);if(ir$1(t))return Ut.fromBytes(t,r);try{return Ut.fromValue(t,0,r)}catch(i){if(i.code!==L$1.errors.INVALID_ARGUMENT)throw i}return Ht$1.throwArgumentError("invalid FixedNumber value","value",t)}static isFixedNumber(t){return !!(t&&t._isFixedNumber)}};const Wn=Ut$1.from(1),O0=Ut$1.from("0.5"),P0="strings/5.7.0",Xn=new L$1(P0);var Or$1;(function(e){e.current="",e.NFC="NFC",e.NFD="NFD",e.NFKC="NFKC",e.NFKD="NFKD";})(Or$1||(Or$1={}));var nr$1;(function(e){e.UNEXPECTED_CONTINUE="unexpected continuation byte",e.BAD_PREFIX="bad codepoint prefix",e.OVERRUN="string overrun",e.MISSING_CONTINUE="missing continuation byte",e.OUT_OF_RANGE="out of UTF-8 range",e.UTF16_SURROGATE="UTF-16 surrogate",e.OVERLONG="overlong representation";})(nr$1||(nr$1={}));function Ei(e,t=Or$1.current){t!=Or$1.current&&(Xn.checkNormalize(),e=e.normalize(t));let r=[];for(let i=0;i<e.length;i++){const n=e.charCodeAt(i);if(n<128)r.push(n);else if(n<2048)r.push(n>>6|192),r.push(n&63|128);else if((n&64512)==55296){i++;const o=e.charCodeAt(i);if(i>=e.length||(o&64512)!==56320)throw new Error("invalid utf-8 string");const h=65536+((n&1023)<<10)+(o&1023);r.push(h>>18|240),r.push(h>>12&63|128),r.push(h>>6&63|128),r.push(h&63|128);}else r.push(n>>12|224),r.push(n>>6&63|128),r.push(n&63|128);}return Ot$1(r)}function T0(e){if(e.length%4!==0)throw new Error("bad data");let t=[];for(let r=0;r<e.length;r+=4)t.push(parseInt(e.substring(r,r+4),16));return t}function Si(e,t){t||(t=function(n){return [parseInt(n,16)]});let r=0,i={};return e.split(",").forEach(n=>{let o=n.split(":");r+=parseInt(o[0],16),i[r]=t(o[1]);}),i}function $n(e){let t=0;return e.split(",").map(r=>{let i=r.split("-");i.length===1?i[1]="0":i[1]===""&&(i[1]="1");let n=t+parseInt(i[0],16);return t=parseInt(i[1],16),{l:n,h:t}})}$n("221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d"),"ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff".split(",").map(e=>parseInt(e,16)),Si("b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3"),Si("179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7"),Si("df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D",T0),$n("80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001");function U0(e){e=atob(e);const t=[];for(let r=0;r<e.length;r++)t.push(e.charCodeAt(r));return Ot$1(t)}function ef(e,t){t==null&&(t=1);const r=[],i=r.forEach,n=function(o,h){i.call(o,function(p){h>0&&Array.isArray(p)?n(p,h-1):r.push(p);});};return n(e,t),r}function k0(e){const t={};for(let r=0;r<e.length;r++){const i=e[r];t[i[0]]=i[1];}return t}function q0(e){let t=0;function r(){return e[t++]<<8|e[t++]}let i=r(),n=1,o=[0,1];for(let H=1;H<i;H++)o.push(n+=r());let h=r(),p=t;t+=h;let b=0,m=0;function w(){return b==0&&(m=m<<8|e[t++],b=8),m>>--b&1}const y=31,S=Math.pow(2,y),I=S>>>1,N=I>>1,C=S-1;let F=0;for(let H=0;H<y;H++)F=F<<1|w();let U=[],J=0,Bt=S;for(;;){let H=Math.floor(((F-J+1)*n-1)/Bt),z=0,Pt=i;for(;Pt-z>1;){let Yt=z+Pt>>>1;H<o[Yt]?Pt=Yt:z=Yt;}if(z==0)break;U.push(z);let W=J+Math.floor(Bt*o[z]/n),Rt=J+Math.floor(Bt*o[z+1]/n)-1;for(;!((W^Rt)&I);)F=F<<1&C|w(),W=W<<1&C,Rt=Rt<<1&C|1;for(;W&~Rt&N;)F=F&I|F<<1&C>>>1|w(),W=W<<1^I,Rt=(Rt^I)<<1|I|1;J=W,Bt=1+Rt-W;}let G=i-4;return U.map(H=>{switch(H-G){case 3:return G+65792+(e[p++]<<16|e[p++]<<8|e[p++]);case 2:return G+256+(e[p++]<<8|e[p++]);case 1:return G+e[p++];default:return H-1}})}function K0(e){let t=0;return ()=>e[t++]}function H0(e){return K0(q0(e))}function z0(e){return e&1?~e>>1:e>>1}function L0(e,t){let r=Array(e);for(let i=0;i<e;i++)r[i]=1+t();return r}function rf(e,t){let r=Array(e);for(let i=0,n=-1;i<e;i++)r[i]=n+=1+t();return r}function j0(e,t){let r=Array(e);for(let i=0,n=0;i<e;i++)r[i]=n+=z0(t());return r}function Pr$1(e,t){let r=rf(e(),e),i=e(),n=rf(i,e),o=L0(i,e);for(let h=0;h<i;h++)for(let p=0;p<o[h];p++)r.push(n[h]+p);return t?r.map(h=>t[h]):r}function Q0(e){let t=[];for(;;){let r=e();if(r==0)break;t.push(G0(r,e));}for(;;){let r=e()-1;if(r<0)break;t.push(Y0(r,e));}return k0(ef(t))}function J0(e){let t=[];for(;;){let r=e();if(r==0)break;t.push(r);}return t}function nf(e,t,r){let i=Array(e).fill(void 0).map(()=>[]);for(let n=0;n<t;n++)j0(e,r).forEach((o,h)=>i[h].push(o));return i}function G0(e,t){let r=1+t(),i=t(),n=J0(t),o=nf(n.length,1+e,t);return ef(o.map((h,p)=>{const b=h[0],m=h.slice(1);return Array(n[p]).fill(void 0).map((w,y)=>{let S=y*i;return [b+y*r,m.map(I=>I+S)]})}))}function Y0(e,t){let r=1+t();return nf(r,1+e,t).map(n=>[n[0],n.slice(1)])}function V0(e){let t=Pr$1(e).sort((i,n)=>i-n);return r();function r(){let i=[];for(;;){let m=Pr$1(e,t);if(m.length==0)break;i.push({set:new Set(m),node:r()});}i.sort((m,w)=>w.set.size-m.set.size);let n=e(),o=n%3;n=n/3|0;let h=!!(n&1);n>>=1;let p=n==1,b=n==2;return {branches:i,valid:o,fe0f:h,save:p,check:b}}}function W0(){return H0(U0("AEQF2AO2DEsA2wIrAGsBRABxAN8AZwCcAEwAqgA0AGwAUgByADcATAAVAFYAIQAyACEAKAAYAFgAGwAjABQAMAAmADIAFAAfABQAKwATACoADgAbAA8AHQAYABoAGQAxADgALAAoADwAEwA9ABMAGgARAA4ADwAWABMAFgAIAA8AHgQXBYMA5BHJAS8JtAYoAe4AExozi0UAH21tAaMnBT8CrnIyhrMDhRgDygIBUAEHcoFHUPe8AXBjAewCjgDQR8IICIcEcQLwATXCDgzvHwBmBoHNAqsBdBcUAykgDhAMShskMgo8AY8jqAQfAUAfHw8BDw87MioGlCIPBwZCa4ELatMAAMspJVgsDl8AIhckSg8XAHdvTwBcIQEiDT4OPhUqbyECAEoAS34Aej8Ybx83JgT/Xw8gHxZ/7w8RICxPHA9vBw+Pfw8PHwAPFv+fAsAvCc8vEr8ivwD/EQ8Bol8OEBa/A78hrwAPCU8vESNvvwWfHwNfAVoDHr+ZAAED34YaAdJPAK7PLwSEgDLHAGo1Pz8Pvx9fUwMrpb8O/58VTzAPIBoXIyQJNF8hpwIVAT8YGAUADDNBaX3RAMomJCg9EhUeA29MABsZBTMNJipjOhc19gcIDR8bBwQHEggCWi6DIgLuAQYA+BAFCha3A5XiAEsqM7UFFgFLhAMjFTMYE1Klnw74nRVBG/ASCm0BYRN/BrsU3VoWy+S0vV8LQx+vN8gF2AC2AK5EAWwApgYDKmAAroQ0NDQ0AT+OCg7wAAIHRAbpNgVcBV0APTA5BfbPFgMLzcYL/QqqA82eBALKCjQCjqYCht0/k2+OAsXQAoP3ASTKDgDw6ACKAUYCMpIKJpRaAE4A5womABzZvs0REEKiACIQAd5QdAECAj4Ywg/wGqY2AVgAYADYvAoCGAEubA0gvAY2ALAAbpbvqpyEAGAEpgQAJgAG7gAgAEACmghUFwCqAMpAINQIwC4DthRAAPcycKgApoIdABwBfCisABoATwBqASIAvhnSBP8aH/ECeAKXAq40NjgDBTwFYQU6AXs3oABgAD4XNgmcCY1eCl5tIFZeUqGgyoNHABgAEQAaABNwWQAmABMATPMa3T34ADldyprmM1M2XociUQgLzvwAXT3xABgAEQAaABNwIGFAnADD8AAgAD4BBJWzaCcIAIEBFMAWwKoAAdq9BWAF5wLQpALEtQAKUSGkahR4GnJM+gsAwCgeFAiUAECQ0BQuL8AAIAAAADKeIheclvFqQAAETr4iAMxIARMgAMIoHhQIAn0E0pDQFC4HhznoAAAAIAI2C0/4lvFqQAAETgBJJwYCAy4ABgYAFAA8MBKYEH4eRhTkAjYeFcgACAYAeABsOqyQ5gRwDayqugEgaIIAtgoACgDmEABmBAWGme5OBJJA2m4cDeoAmITWAXwrMgOgAGwBCh6CBXYF1Tzg1wKAAFdiuABRAFwAXQBsAG8AdgBrAHYAbwCEAHEwfxQBVE5TEQADVFhTBwBDANILAqcCzgLTApQCrQL6vAAMAL8APLhNBKkE6glGKTAU4Dr4N2EYEwBCkABKk8rHAbYBmwIoAiU4Ajf/Aq4CowCAANIChzgaNBsCsTgeODcFXrgClQKdAqQBiQGYAqsCsjTsNHsfNPA0ixsAWTWiOAMFPDQSNCk2BDZHNow2TTZUNhk28Jk9VzI3QkEoAoICoQKwAqcAQAAxBV4FXbS9BW47YkIXP1ciUqs05DS/FwABUwJW11e6nHuYZmSh/RAYA8oMKvZ8KASoUAJYWAJ6ILAsAZSoqjpgA0ocBIhmDgDWAAawRDQoAAcuAj5iAHABZiR2AIgiHgCaAU68ACxuHAG0ygM8MiZIAlgBdF4GagJqAPZOHAMuBgoATkYAsABiAHgAMLoGDPj0HpKEBAAOJgAuALggTAHWAeAMEDbd20Uege0ADwAWADkAQgA9OHd+2MUQZBBhBgNNDkxxPxUQArEPqwvqERoM1irQ090ANK4H8ANYB/ADWANYB/AH8ANYB/ADWANYA1gDWBwP8B/YxRBkD00EcgWTBZAE2wiIJk4RhgctCNdUEnQjHEwDSgEBIypJITuYMxAlR0wRTQgIATZHbKx9PQNMMbBU+pCnA9AyVDlxBgMedhKlAC8PeCE1uk6DekxxpQpQT7NX9wBFBgASqwAS5gBJDSgAUCwGPQBI4zTYABNGAE2bAE3KAExdGABKaAbgAFBXAFCOAFBJABI2SWdObALDOq0//QomCZhvwHdTBkIQHCemEPgMNAG2ATwN7kvZBPIGPATKH34ZGg/OlZ0Ipi3eDO4m5C6igFsj9iqEBe5L9TzeC05RaQ9aC2YJ5DpkgU8DIgEOIowK3g06CG4Q9ArKbA3mEUYHOgPWSZsApgcCCxIdNhW2JhFirQsKOXgG/Br3C5AmsBMqev0F1BoiBk4BKhsAANAu6IWxWjJcHU9gBgQLJiPIFKlQIQ0mQLh4SRocBxYlqgKSQ3FKiFE3HpQh9zw+DWcuFFF9B/Y8BhlQC4I8n0asRQ8R0z6OPUkiSkwtBDaALDAnjAnQD4YMunxzAVoJIgmyDHITMhEYN8YIOgcaLpclJxYIIkaWYJsE+KAD9BPSAwwFQAlCBxQDthwuEy8VKgUOgSXYAvQ21i60ApBWgQEYBcwPJh/gEFFH4Q7qCJwCZgOEJewALhUiABginAhEZABgj9lTBi7MCMhqbSN1A2gU6GIRdAeSDlgHqBw0FcAc4nDJXgyGCSiksAlcAXYJmgFgBOQICjVcjKEgQmdUi1kYnCBiQUBd/QIyDGYVoES+h3kCjA9sEhwBNgF0BzoNAgJ4Ee4RbBCWCOyGBTW2M/k6JgRQIYQgEgooA1BszwsoJvoM+WoBpBJjAw00PnfvZ6xgtyUX/gcaMsZBYSHyC5NPzgydGsIYQ1QvGeUHwAP0GvQn60FYBgADpAQUOk4z7wS+C2oIjAlAAEoOpBgH2BhrCnKM0QEyjAG4mgNYkoQCcJAGOAcMAGgMiAV65gAeAqgIpAAGANADWAA6Aq4HngAaAIZCAT4DKDABIuYCkAOUCDLMAZYwAfQqBBzEDBYA+DhuSwLDsgKAa2ajBd5ZAo8CSjYBTiYEBk9IUgOwcuIA3ABMBhTgSAEWrEvMG+REAeBwLADIAPwABjYHBkIBzgH0bgC4AWALMgmjtLYBTuoqAIQAFmwB2AKKAN4ANgCA8gFUAE4FWvoF1AJQSgESMhksWGIBvAMgATQBDgB6BsyOpsoIIARuB9QCEBwV4gLvLwe2AgMi4BPOQsYCvd9WADIXUu5eZwqoCqdeaAC0YTQHMnM9UQAPH6k+yAdy/BZIiQImSwBQ5gBQQzSaNTFWSTYBpwGqKQK38AFtqwBI/wK37gK3rQK3sAK6280C0gK33AK3zxAAUEIAUD9SklKDArekArw5AEQAzAHCO147WTteO1k7XjtZO147WTteO1kDmChYI03AVU0oJqkKbV9GYewMpw3VRMk6ShPcYFJgMxPJLbgUwhXPJVcZPhq9JwYl5VUKDwUt1GYxCC00dhe9AEApaYNCY4ceMQpMHOhTklT5LRwAskujM7ANrRsWREEFSHXuYisWDwojAmSCAmJDXE6wXDchAqH4AmiZAmYKAp+FOBwMAmY8AmYnBG8EgAN/FAN+kzkHOXgYOYM6JCQCbB4CMjc4CwJtyAJtr/CLADRoRiwBaADfAOIASwYHmQyOAP8MwwAOtgJ3MAJ2o0ACeUxEAni7Hl3cRa9G9AJ8QAJ6yQJ9CgJ88UgBSH5kJQAsFklZSlwWGErNAtECAtDNSygDiFADh+dExpEzAvKiXQQDA69Lz0wuJgTQTU1NsAKLQAKK2cIcCB5EaAa4Ao44Ao5dQZiCAo7aAo5deVG1UzYLUtVUhgKT/AKTDQDqAB1VH1WwVdEHLBwplocy4nhnRTw6ApegAu+zWCKpAFomApaQApZ9nQCqWa1aCoJOADwClrYClk9cRVzSApnMApllXMtdCBoCnJw5wzqeApwXAp+cAp65iwAeEDIrEAKd8gKekwC2PmE1YfACntQCoG8BqgKeoCACnk+mY8lkKCYsAiewAiZ/AqD8AqBN2AKmMAKlzwKoAAB+AqfzaH1osgAESmodatICrOQCrK8CrWgCrQMCVx4CVd0CseLYAx9PbJgCsr4OArLpGGzhbWRtSWADJc4Ctl08QG6RAylGArhfArlIFgK5K3hwN3DiAr0aAy2zAzISAr6JcgMDM3ICvhtzI3NQAsPMAsMFc4N0TDZGdOEDPKgDPJsDPcACxX0CxkgCxhGKAshqUgLIRQLJUALJLwJkngLd03h6YniveSZL0QMYpGcDAmH1GfSVJXsMXpNevBICz2wCz20wTFTT9BSgAMeuAs90ASrrA04TfkwGAtwoAtuLAtJQA1JdA1NgAQIDVY2AikABzBfuYUZ2AILPg44C2sgC2d+EEYRKpz0DhqYAMANkD4ZyWvoAVgLfZgLeuXR4AuIw7RUB8zEoAfScAfLTiALr9ALpcXoAAur6AurlAPpIAboC7ooC652Wq5cEAu5AA4XhmHpw4XGiAvMEAGoDjheZlAL3FAORbwOSiAL3mQL52gL4Z5odmqy8OJsfA52EAv77ARwAOp8dn7QDBY4DpmsDptoA0sYDBmuhiaIGCgMMSgFgASACtgNGAJwEgLpoBgC8BGzAEowcggCEDC6kdjoAJAM0C5IKRoABZCgiAIzw3AYBLACkfng9ogigkgNmWAN6AEQCvrkEVqTGAwCsBRbAA+4iQkMCHR072jI2PTbUNsk2RjY5NvA23TZKNiU3EDcZN5I+RTxDRTBCJkK5VBYKFhZfwQCWygU3AJBRHpu+OytgNxa61A40GMsYjsn7BVwFXQVcBV0FaAVdBVwFXQVcBV0FXAVdBVwFXUsaCNyKAK4AAQUHBwKU7oICoW1e7jAEzgPxA+YDwgCkBFDAwADABKzAAOxFLhitA1UFTDeyPkM+bj51QkRCuwTQWWQ8X+0AWBYzsACNA8xwzAGm7EZ/QisoCTAbLDs6fnLfb8H2GccsbgFw13M1HAVkBW/Jxsm9CNRO8E8FDD0FBQw9FkcClOYCoMFegpDfADgcMiA2AJQACB8AsigKAIzIEAJKeBIApY5yPZQIAKQiHb4fvj5BKSRPQrZCOz0oXyxgOywfKAnGbgMClQaCAkILXgdeCD9IIGUgQj5fPoY+dT52Ao5CM0dAX9BTVG9SDzFwWTQAbxBzJF/lOEIQQglCCkKJIAls5AcClQICoKPMODEFxhi6KSAbiyfIRrMjtCgdWCAkPlFBIitCsEJRzAbMAV/OEyQzDg0OAQQEJ36i328/Mk9AybDJsQlq3tDRApUKAkFzXf1d/j9uALYP6hCoFgCTGD8kPsFKQiobrm0+zj0KSD8kPnVCRBwMDyJRTHFgMTJa5rwXQiQ2YfI/JD7BMEJEHGINTw4TOFlIRzwJO0icMQpyPyQ+wzJCRBv6DVgnKB01NgUKj2bwYzMqCoBkznBgEF+zYDIocwRIX+NgHj4HICNfh2C4CwdwFWpTG/lgUhYGAwRfv2Ts8mAaXzVgml/XYIJfuWC4HI1gUF9pYJZgMR6ilQHMAOwLAlDRefC0in4AXAEJA6PjCwc0IamOANMMCAECRQDFNRTZBgd+CwQlRA+r6+gLBDEFBnwUBXgKATIArwAGRAAHA3cDdAN2A3kDdwN9A3oDdQN7A30DfAN4A3oDfQAYEAAlAtYASwMAUAFsAHcKAHcAmgB3AHUAdQB2AHVu8UgAygDAAHcAdQB1AHYAdQALCgB3AAsAmgB3AAsCOwB3AAtu8UgAygDAAHgKAJoAdwB3AHUAdQB2AHUAeAB1AHUAdgB1bvFIAMoAwAALCgCaAHcACwB3AAsCOwB3AAtu8UgAygDAAH4ACwGgALcBpwC6AahdAu0COwLtbvFIAMoAwAALCgCaAu0ACwLtAAsCOwLtAAtu8UgAygDAA24ACwNvAAu0VsQAAzsAABCkjUIpAAsAUIusOggWcgMeBxVsGwL67U/2HlzmWOEeOgALASvuAAseAfpKUpnpGgYJDCIZM6YyARUE9ThqAD5iXQgnAJYJPnOzw0ZAEZxEKsIAkA4DhAHnTAIDxxUDK0lxCQlPYgIvIQVYJQBVqE1GakUAKGYiDToSBA1EtAYAXQJYAIF8GgMHRyAAIAjOe9YncekRAA0KACUrjwE7Ayc6AAYWAqaiKG4McEcqANoN3+Mg9TwCBhIkuCny+JwUQ29L008JluRxu3K+oAdqiHOqFH0AG5SUIfUJ5SxCGfxdipRzqTmT4V5Zb+r1Uo4Vm+NqSSEl2mNvR2JhIa8SpYO6ntdwFXHCWTCK8f2+Hxo7uiG3drDycAuKIMP5bhi06ACnqArH1rz4Rqg//lm6SgJGEVbF9xJHISaR6HxqxSnkw6shDnelHKNEfGUXSJRJ1GcsmtJw25xrZMDK9gXSm1/YMkdX4/6NKYOdtk/NQ3/NnDASjTc3fPjIjW/5sVfVObX2oTDWkr1dF9f3kxBsD3/3aQO8hPfRz+e0uEiJqt1161griu7gz8hDDwtpy+F+BWtefnKHZPAxcZoWbnznhJpy0e842j36bcNzGnIEusgGX0a8ZxsnjcSsPDZ09yZ36fCQbriHeQ72JRMILNl6ePPf2HWoVwgWAm1fb3V2sAY0+B6rAXqSwPBgseVmoqsBTSrm91+XasMYYySI8eeRxH3ZvHkMz3BQ5aJ3iUVbYPNM3/7emRtjlsMgv/9VyTsyt/mK+8fgWeT6SoFaclXqn42dAIsvAarF5vNNWHzKSkKQ/8Hfk5ZWK7r9yliOsooyBjRhfkHP4Q2DkWXQi6FG/9r/IwbmkV5T7JSopHKn1pJwm9tb5Ot0oyN1Z2mPpKXHTxx2nlK08fKk1hEYA8WgVVWL5lgx0iTv+KdojJeU23ZDjmiubXOxVXJKKi2Wjuh2HLZOFLiSC7Tls5SMh4f+Pj6xUSrNjFqLGehRNB8lC0QSLNmkJJx/wSG3MnjE9T1CkPwJI0wH2lfzwETIiVqUxg0dfu5q39Gt+hwdcxkhhNvQ4TyrBceof3Mhs/IxFci1HmHr4FMZgXEEczPiGCx0HRwzAqDq2j9AVm1kwN0mRVLWLylgtoPNapF5cY4Y1wJh/e0BBwZj44YgZrDNqvD/9Hv7GFYdUQeDJuQ3EWI4HaKqavU1XjC/n41kT4L79kqGq0kLhdTZvgP3TA3fS0ozVz+5piZsoOtIvBUFoMKbNcmBL6YxxaUAusHB38XrS8dQMnQwJfUUkpRoGr5AUeWicvBTzyK9g77+yCkf5PAysL7r/JjcZgrbvRpMW9iyaxZvKO6ceZN2EwIxKwVFPuvFuiEPGCoagbMo+SpydLrXqBzNCDGFCrO/rkcwa2xhokQZ5CdZ0AsU3JfSqJ6n5I14YA+P/uAgfhPU84Tlw7cEFfp7AEE8ey4sP12PTt4Cods1GRgDOB5xvyiR5m+Bx8O5nBCNctU8BevfV5A08x6RHd5jcwPTMDSZJOedIZ1cGQ704lxbAzqZOP05ZxaOghzSdvFBHYqomATARyAADK4elP8Ly3IrUZKfWh23Xy20uBUmLS4Pfagu9+oyVa2iPgqRP3F2CTUsvJ7+RYnN8fFZbU/HVvxvcFFDKkiTqV5UBZ3Gz54JAKByi9hkKMZJvuGgcSYXFmw08UyoQyVdfTD1/dMkCHXcTGAKeROgArsvmRrQTLUOXioOHGK2QkjHuoYFgXciZoTJd6Fs5q1QX1G+p/e26hYsEf7QZD1nnIyl/SFkNtYYmmBhpBrxl9WbY0YpHWRuw2Ll/tj9mD8P4snVzJl4F9J+1arVeTb9E5r2ILH04qStjxQNwn3m4YNqxmaNbLAqW2TN6LidwuJRqS+NXbtqxoeDXpxeGWmxzSkWxjkyCkX4NQRme6q5SAcC+M7+9ETfA/EwrzQajKakCwYyeunP6ZFlxU2oMEn1Pz31zeStW74G406ZJFCl1wAXIoUKkWotYEpOuXB1uVNxJ63dpJEqfxBeptwIHNrPz8BllZoIcBoXwgfJ+8VAUnVPvRvexnw0Ma/WiGYuJO5y8QTvEYBigFmhUxY5RqzE8OcywN/8m4UYrlaniJO75XQ6KSo9+tWHlu+hMi0UVdiKQp7NelnoZUzNaIyBPVeOwK6GNp+FfHuPOoyhaWuNvTYFkvxscMQWDh+zeFCFkgwbXftiV23ywJ4+uwRqmg9k3KzwIQpzppt8DBBOMbrqwQM5Gb05sEwdKzMiAqOloaA/lr0KA+1pr0/+HiWoiIjHA/wir2nIuS3PeU/ji3O6ZwoxcR1SZ9FhtLC5S0FIzFhbBWcGVP/KpxOPSiUoAdWUpqKH++6Scz507iCcxYI6rdMBICPJZea7OcmeFw5mObJSiqpjg2UoWNIs+cFhyDSt6geV5qgi3FunmwwDoGSMgerFOZGX1m0dMCYo5XOruxO063dwENK9DbnVM9wYFREzh4vyU1WYYJ/LRRp6oxgjqP/X5a8/4Af6p6NWkQferzBmXme0zY/4nwMJm/wd1tIqSwGz+E3xPEAOoZlJit3XddD7/BT1pllzOx+8bmQtANQ/S6fZexc6qi3W+Q2xcmXTUhuS5mpHQRvcxZUN0S5+PL9lXWUAaRZhEH8hTdAcuNMMCuVNKTEGtSUKNi3O6KhSaTzck8csZ2vWRZ+d7mW8c4IKwXIYd25S/zIftPkwPzufjEvOHWVD1m+FjpDVUTV0DGDuHj6QnaEwLu/dEgdLQOg9E1Sro9XHJ8ykLAwtPu+pxqKDuFexqON1sKQm7rwbE1E68UCfA/erovrTCG+DBSNg0l4goDQvZN6uNlbyLpcZAwj2UclycvLpIZMgv4yRlpb3YuMftozorbcGVHt/VeDV3+Fdf1TP0iuaCsPi2G4XeGhsyF1ubVDxkoJhmniQ0/jSg/eYML9KLfnCFgISWkp91eauR3IQvED0nAPXK+6hPCYs+n3+hCZbiskmVMG2da+0EsZPonUeIY8EbfusQXjsK/eFDaosbPjEfQS0RKG7yj5GG69M7MeO1HmiUYocgygJHL6M1qzUDDwUSmr99V7Sdr2F3JjQAJY+F0yH33Iv3+C9M38eML7gTgmNu/r2bUMiPvpYbZ6v1/IaESirBHNa7mPKn4dEmYg7v/+HQgPN1G79jBQ1+soydfDC2r+h2Bl/KIc5KjMK7OH6nb1jLsNf0EHVe2KBiE51ox636uyG6Lho0t3J34L5QY/ilE3mikaF4HKXG1mG1rCevT1Vv6GavltxoQe/bMrpZvRggnBxSEPEeEzkEdOxTnPXHVjUYdw8JYvjB/o7Eegc3Ma+NUxLLnsK0kJlinPmUHzHGtrk5+CAbVzFOBqpyy3QVUnzTDfC/0XD94/okH+OB+i7g9lolhWIjSnfIb+Eq43ZXOWmwvjyV/qqD+t0e+7mTEM74qP/Ozt8nmC7mRpyu63OB4KnUzFc074SqoyPUAgM+/TJGFo6T44EHnQU4X4z6qannVqgw/U7zCpwcmXV1AubIrvOmkKHazJAR55ePjp5tLBsN8vAqs3NAHdcEHOR2xQ0lsNAFzSUuxFQCFYvXLZJdOj9p4fNq6p0HBGUik2YzaI4xySy91KzhQ0+q1hjxvImRwPRf76tChlRkhRCi74NXZ9qUNeIwP+s5p+3m5nwPdNOHgSLD79n7O9m1n1uDHiMntq4nkYwV5OZ1ENbXxFd4PgrlvavZsyUO4MqYlqqn1O8W/I1dEZq5dXhrbETLaZIbC2Kj/Aa/QM+fqUOHdf0tXAQ1huZ3cmWECWSXy/43j35+Mvq9xws7JKseriZ1pEWKc8qlzNrGPUGcVgOa9cPJYIJsGnJTAUsEcDOEVULO5x0rXBijc1lgXEzQQKhROf8zIV82w8eswc78YX11KYLWQRcgHNJElBxfXr72lS2RBSl07qTKorO2uUDZr3sFhYsvnhLZn0A94KRzJ/7DEGIAhW5ZWFpL8gEwu1aLA9MuWZzNwl8Oze9Y+bX+v9gywRVnoB5I/8kXTXU3141yRLYrIOOz6SOnyHNy4SieqzkBXharjfjqq1q6tklaEbA8Qfm2DaIPs7OTq/nvJBjKfO2H9bH2cCMh1+5gspfycu8f/cuuRmtDjyqZ7uCIMyjdV3a+p3fqmXsRx4C8lujezIFHnQiVTXLXuI1XrwN3+siYYj2HHTvESUx8DlOTXpak9qFRK+L3mgJ1WsD7F4cu1aJoFoYQnu+wGDMOjJM3kiBQWHCcvhJ/HRdxodOQp45YZaOTA22Nb4XKCVxqkbwMYFhzYQYIAnCW8FW14uf98jhUG2zrKhQQ0q0CEq0t5nXyvUyvR8DvD69LU+g3i+HFWQMQ8PqZuHD+sNKAV0+M6EJC0szq7rEr7B5bQ8BcNHzvDMc9eqB5ZCQdTf80Obn4uzjwpYU7SISdtV0QGa9D3Wrh2BDQtpBKxaNFV+/Cy2P/Sv+8s7Ud0Fd74X4+o/TNztWgETUapy+majNQ68Lq3ee0ZO48VEbTZYiH1Co4OlfWef82RWeyUXo7woM03PyapGfikTnQinoNq5z5veLpeMV3HCAMTaZmA1oGLAn7XS3XYsz+XK7VMQsc4XKrmDXOLU/pSXVNUq8dIqTba///3x6LiLS6xs1xuCAYSfcQ3+rQgmu7uvf3THKt5Ooo97TqcbRqxx7EASizaQCBQllG/rYxVapMLgtLbZS64w1MDBMXX+PQpBKNwqUKOf2DDRDUXQf9EhOS0Qj4nTmlA8dzSLz/G1d+Ud8MTy/6ghhdiLpeerGY/UlDOfiuqFsMUU5/UYlP+BAmgRLuNpvrUaLlVkrqDievNVEAwF+4CoM1MZTmjxjJMsKJq+u8Zd7tNCUFy6LiyYXRJQ4VyvEQFFaCGKsxIwQkk7EzZ6LTJq2hUuPhvAW+gQnSG6J+MszC+7QCRHcnqDdyNRJ6T9xyS87A6MDutbzKGvGktpbXqtzWtXb9HsfK2cBMomjN9a4y+TaJLnXxAeX/HWzmf4cR4vALt/P4w4qgKY04ml4ZdLOinFYS6cup3G/1ie4+t1eOnpBNlqGqs75ilzkT4+DsZQxNvaSKJ//6zIbbk/M7LOhFmRc/1R+kBtz7JFGdZm/COotIdvQoXpTqP/1uqEUmCb/QWoGLMwO5ANcHzxdY48IGP5+J+zKOTBFZ4Pid+GTM+Wq12MV/H86xEJptBa6T+p3kgpwLedManBHC2GgNrFpoN2xnrMz9WFWX/8/ygSBkavq2Uv7FdCsLEYLu9LLIvAU0bNRDtzYl+/vXmjpIvuJFYjmI0im6QEYqnIeMsNjXG4vIutIGHijeAG/9EDBozKV5cldkHbLxHh25vT+ZEzbhXlqvpzKJwcEgfNwLAKFeo0/pvEE10XDB+EXRTXtSzJozQKFFAJhMxYkVaCW+E9AL7tMeU8acxidHqzb6lX4691UsDpy/LLRmT+epgW56+5Cw8tB4kMUv6s9lh3eRKbyGs+H/4mQMaYzPTf2OOdokEn+zzgvoD3FqNKk8QqGAXVsqcGdXrT62fSPkR2vROFi68A6se86UxRUk4cajfPyCC4G5wDhD+zNq4jodQ4u4n/m37Lr36n4LIAAsVr02dFi9AiwA81MYs2rm4eDlDNmdMRvEKRHfBwW5DdMNp0jPFZMeARqF/wL4XBfd+EMLBfMzpH5GH6NaW+1vrvMdg+VxDzatk3MXgO3ro3P/DpcC6+Mo4MySJhKJhSR01SGGGp5hPWmrrUgrv3lDnP+HhcI3nt3YqBoVAVTBAQT5iuhTg8nvPtd8ZeYj6w1x6RqGUBrSku7+N1+BaasZvjTk64RoIDlL8brpEcJx3OmY7jLoZsswdtmhfC/G21llXhITOwmvRDDeTTPbyASOa16cF5/A1fZAidJpqju3wYAy9avPR1ya6eNp9K8XYrrtuxlqi+bDKwlfrYdR0RRiKRVTLOH85+ZY7XSmzRpfZBJjaTa81VDcJHpZnZnSQLASGYW9l51ZV/h7eVzTi3Hv6hUsgc/51AqJRTkpbFVLXXszoBL8nBX0u/0jBLT8nH+fJePbrwURT58OY+UieRjd1vs04w0VG5VN2U6MoGZkQzKN/ptz0Q366dxoTGmj7i1NQGHi9GgnquXFYdrCfZBmeb7s0T6yrdlZH5cZuwHFyIJ/kAtGsTg0xH5taAAq44BAk1CPk9KVVbqQzrCUiFdF/6gtlPQ8bHHc1G1W92MXGZ5HEHftyLYs8mbD/9xYRUWkHmlM0zC2ilJlnNgV4bfALpQghxOUoZL7VTqtCHIaQSXm+YUMnpkXybnV+A6xlm2CVy8fn0Xlm2XRa0+zzOa21JWWmixfiPMSCZ7qA4rS93VN3pkpF1s5TonQjisHf7iU9ZGvUPOAKZcR1pbeVf/Ul7OhepGCaId9wOtqo7pJ7yLcBZ0pFkOF28y4zEI/kcUNmutBHaQpBdNM8vjCS6HZRokkeo88TBAjGyG7SR+6vUgTcyK9Imalj0kuxz0wmK+byQU11AiJFk/ya5dNduRClcnU64yGu/ieWSeOos1t3ep+RPIWQ2pyTYVbZltTbsb7NiwSi3AV+8KLWk7LxCnfZUetEM8ThnsSoGH38/nyAwFguJp8FjvlHtcWZuU4hPva0rHfr0UhOOJ/F6vS62FW7KzkmRll2HEc7oUq4fyi5T70Vl7YVIfsPHUCdHesf9Lk7WNVWO75JDkYbMI8TOW8JKVtLY9d6UJRITO8oKo0xS+o99Yy04iniGHAaGj88kEWgwv0OrHdY/nr76DOGNS59hXCGXzTKUvDl9iKpLSWYN1lxIeyywdNpTkhay74w2jFT6NS8qkjo5CxA1yfSYwp6AJIZNKIeEK5PJAW7ORgWgwp0VgzYpqovMrWxbu+DGZ6Lhie1RAqpzm8VUzKJOH3mCzWuTOLsN3VT/dv2eeYe9UjbR8YTBsLz7q60VN1sU51k+um1f8JxD5pPhbhSC8rRaB454tmh6YUWrJI3+GWY0qeWioj/tbkYITOkJaeuGt4JrJvHA+l0Gu7kY7XOaa05alMnRWVCXqFgLIwSY4uF59Ue5SU4QKuc/HamDxbr0x6csCetXGoP7Qn1Bk/J9DsynO/UD6iZ1Hyrz+jit0hDCwi/E9OjgKTbB3ZQKQ/0ZOvevfNHG0NK4Aj3Cp7NpRk07RT1i/S0EL93Ag8GRgKI9CfpajKyK6+Jj/PI1KO5/85VAwz2AwzP8FTBb075IxCXv6T9RVvWT2tUaqxDS92zrGUbWzUYk9mSs82pECH+fkqsDt93VW++4YsR/dHCYcQSYTO/KaBMDj9LSD/J/+z20Kq8XvZUAIHtm9hRPP3ItbuAu2Hm5lkPs92pd7kCxgRs0xOVBnZ13ccdA0aunrwv9SdqElJRC3g+oCu+nXyCgmXUs9yMjTMAIHfxZV+aPKcZeUBWt057Xo85Ks1Ir5gzEHCWqZEhrLZMuF11ziGtFQUds/EESajhagzcKsxamcSZxGth4UII+adPhQkUnx2WyN+4YWR+r3f8MnkyGFuR4zjzxJS8WsQYR5PTyRaD9ixa6Mh741nBHbzfjXHskGDq179xaRNrCIB1z1xRfWfjqw2pHc1zk9xlPpL8sQWAIuETZZhbnmL54rceXVNRvUiKrrqIkeogsl0XXb17ylNb0f4GA9Wd44vffEG8FSZGHEL2fbaTGRcSiCeA8PmA/f6Hz8HCS76fXUHwgwkzSwlI71ekZ7Fapmlk/KC+Hs8hUcw3N2LN5LhkVYyizYFl/uPeVP5lsoJHhhfWvvSWruCUW1ZcJOeuTbrDgywJ/qG07gZJplnTvLcYdNaH0KMYOYMGX+rB4NGPFmQsNaIwlWrfCezxre8zXBrsMT+edVLbLqN1BqB76JH4BvZTqUIMfGwPGEn+EnmTV86fPBaYbFL3DFEhjB45CewkXEAtJxk4/Ms2pPXnaRqdky0HOYdcUcE2zcXq4vaIvW2/v0nHFJH2XXe22ueDmq/18XGtELSq85j9X8q0tcNSSKJIX8FTuJF/Pf8j5PhqG2u+osvsLxYrvvfeVJL+4tkcXcr9JV7v0ERmj/X6fM3NC4j6dS1+9Umr2oPavqiAydTZPLMNRGY23LO9zAVDly7jD+70G5TPPLdhRIl4WxcYjLnM+SNcJ26FOrkrISUtPObIz5Zb3AG612krnpy15RMW+1cQjlnWFI6538qky9axd2oJmHIHP08KyP0ubGO+TQNOYuv2uh17yCIvR8VcStw7o1g0NM60sk+8Tq7YfIBJrtp53GkvzXH7OA0p8/n/u1satf/VJhtR1l8Wa6Gmaug7haSpaCaYQax6ta0mkutlb+eAOSG1aobM81D9A4iS1RRlzBBoVX6tU1S6WE2N9ORY6DfeLRC4l9Rvr5h95XDWB2mR1d4WFudpsgVYwiTwT31ljskD8ZyDOlm5DkGh9N/UB/0AI5Xvb8ZBmai2hQ4BWMqFwYnzxwB26YHSOv9WgY3JXnvoN+2R4rqGVh/LLDMtpFP+SpMGJNWvbIl5SOodbCczW2RKleksPoUeGEzrjtKHVdtZA+kfqO+rVx/iclCqwoopepvJpSTDjT+b9GWylGRF8EDbGlw6eUzmJM95Ovoz+kwLX3c2fTjFeYEsE7vUZm3mqdGJuKh2w9/QGSaqRHs99aScGOdDqkFcACoqdbBoQqqjamhH6Q9ng39JCg3lrGJwd50Qk9ovnqBTr8MME7Ps2wiVfygUmPoUBJJfJWX5Nda0nuncbFkA=="))}const Dr$1=W0();new Set(Pr$1(Dr$1)),new Set(Pr$1(Dr$1)),Q0(Dr$1),V0(Dr$1);const X0=new Uint8Array(32);X0.fill(0);const Z0=`Ethereum Signed Message:
`;function ff(e){return typeof e=="string"&&(e=Ei(e)),yi(E0([Ei(Z0),Ei(String(e.length)),e]))}const ts$2="address/5.7.0",Ar$1=new L$1(ts$2);function of(e){Qt(e,20)||Ar$1.throwArgumentError("invalid address","address",e),e=e.toLowerCase();const t=e.substring(2).split(""),r=new Uint8Array(40);for(let n=0;n<40;n++)r[n]=t[n].charCodeAt(0);const i=Ot$1(yi(r));for(let n=0;n<40;n+=2)i[n>>1]>>4>=8&&(t[n]=t[n].toUpperCase()),(i[n>>1]&15)>=8&&(t[n+1]=t[n+1].toUpperCase());return "0x"+t.join("")}const es$2=9007199254740991;function rs$2(e){return Math.log10?Math.log10(e):Math.log(e)/Math.LN10}const Ni={};for(let e=0;e<10;e++)Ni[String(e)]=String(e);for(let e=0;e<26;e++)Ni[String.fromCharCode(65+e)]=String(10+e);const sf=Math.floor(rs$2(es$2));function is$2(e){e=e.toUpperCase(),e=e.substring(4)+e.substring(0,2)+"00";let t=e.split("").map(i=>Ni[i]).join("");for(;t.length>=sf;){let i=t.substring(0,sf);t=parseInt(i,10)%97+t.substring(i.length);}let r=String(98-parseInt(t,10)%97);for(;r.length<2;)r="0"+r;return r}function ns$2(e){let t=null;if(typeof e!="string"&&Ar$1.throwArgumentError("invalid address","address",e),e.match(/^(0x)?[0-9a-fA-F]{40}$/))e.substring(0,2)!=="0x"&&(e="0x"+e),t=of(e),e.match(/([A-F].*[a-f])|([a-f].*[A-F])/)&&t!==e&&Ar$1.throwArgumentError("bad address checksum","address",e);else if(e.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)){for(e.substring(2,4)!==is$2(e)&&Ar$1.throwArgumentError("bad icap checksum","address",e),t=R0(e.substring(4));t.length<40;)t="0"+t;t=of("0x"+t);}else Ar$1.throwArgumentError("invalid address","address",e);return t}function br(e,t,r){Object.defineProperty(e,t,{enumerable:!0,value:r,writable:!1});}const os$1=new Uint8Array(32);os$1.fill(0),V$1.from(-1);const ss$2=V$1.from(0),as$1=V$1.from(1);V$1.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),oe$1(as$1.toHexString(),32),oe$1(ss$2.toHexString(),32);var se={},Q$1={},yr$1=af;function af(e,t){if(!e)throw new Error(t||"Assertion failed")}af.equal=function(t,r,i){if(t!=r)throw new Error(i||"Assertion failed: "+t+" != "+r)};var Ii={exports:{}};typeof Object.create=="function"?Ii.exports=function(t,r){r&&(t.super_=r,t.prototype=Object.create(r.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}));}:Ii.exports=function(t,r){if(r){t.super_=r;var i=function(){};i.prototype=r.prototype,t.prototype=new i,t.prototype.constructor=t;}};var us$1=yr$1,hs$1=Ii.exports;Q$1.inherits=hs$1;function cs$1(e,t){return (e.charCodeAt(t)&64512)!==55296||t<0||t+1>=e.length?!1:(e.charCodeAt(t+1)&64512)===56320}function ls$1(e,t){if(Array.isArray(e))return e.slice();if(!e)return [];var r=[];if(typeof e=="string")if(t){if(t==="hex")for(e=e.replace(/[^a-z0-9]+/ig,""),e.length%2!==0&&(e="0"+e),n=0;n<e.length;n+=2)r.push(parseInt(e[n]+e[n+1],16));}else for(var i=0,n=0;n<e.length;n++){var o=e.charCodeAt(n);o<128?r[i++]=o:o<2048?(r[i++]=o>>6|192,r[i++]=o&63|128):cs$1(e,n)?(o=65536+((o&1023)<<10)+(e.charCodeAt(++n)&1023),r[i++]=o>>18|240,r[i++]=o>>12&63|128,r[i++]=o>>6&63|128,r[i++]=o&63|128):(r[i++]=o>>12|224,r[i++]=o>>6&63|128,r[i++]=o&63|128);}else for(n=0;n<e.length;n++)r[n]=e[n]|0;return r}Q$1.toArray=ls$1;function ds$1(e){for(var t="",r=0;r<e.length;r++)t+=hf(e[r].toString(16));return t}Q$1.toHex=ds$1;function uf(e){var t=e>>>24|e>>>8&65280|e<<8&16711680|(e&255)<<24;return t>>>0}Q$1.htonl=uf;function ps$1(e,t){for(var r="",i=0;i<e.length;i++){var n=e[i];t==="little"&&(n=uf(n)),r+=cf(n.toString(16));}return r}Q$1.toHex32=ps$1;function hf(e){return e.length===1?"0"+e:e}Q$1.zero2=hf;function cf(e){return e.length===7?"0"+e:e.length===6?"00"+e:e.length===5?"000"+e:e.length===4?"0000"+e:e.length===3?"00000"+e:e.length===2?"000000"+e:e.length===1?"0000000"+e:e}Q$1.zero8=cf;function vs$1(e,t,r,i){var n=r-t;us$1(n%4===0);for(var o=new Array(n/4),h=0,p=t;h<o.length;h++,p+=4){var b;i==="big"?b=e[p]<<24|e[p+1]<<16|e[p+2]<<8|e[p+3]:b=e[p+3]<<24|e[p+2]<<16|e[p+1]<<8|e[p],o[h]=b>>>0;}return o}Q$1.join32=vs$1;function ms$1(e,t){for(var r=new Array(e.length*4),i=0,n=0;i<e.length;i++,n+=4){var o=e[i];t==="big"?(r[n]=o>>>24,r[n+1]=o>>>16&255,r[n+2]=o>>>8&255,r[n+3]=o&255):(r[n+3]=o>>>24,r[n+2]=o>>>16&255,r[n+1]=o>>>8&255,r[n]=o&255);}return r}Q$1.split32=ms$1;function gs$1(e,t){return e>>>t|e<<32-t}Q$1.rotr32=gs$1;function As$1(e,t){return e<<t|e>>>32-t}Q$1.rotl32=As$1;function bs$1(e,t){return e+t>>>0}Q$1.sum32=bs$1;function ys$1(e,t,r){return e+t+r>>>0}Q$1.sum32_3=ys$1;function ws$1(e,t,r,i){return e+t+r+i>>>0}Q$1.sum32_4=ws$1;function xs$1(e,t,r,i,n){return e+t+r+i+n>>>0}Q$1.sum32_5=xs$1;function Ms$1(e,t,r,i){var n=e[t],o=e[t+1],h=i+o>>>0,p=(h<i?1:0)+r+n;e[t]=p>>>0,e[t+1]=h;}Q$1.sum64=Ms$1;function Es$1(e,t,r,i){var n=t+i>>>0,o=(n<t?1:0)+e+r;return o>>>0}Q$1.sum64_hi=Es$1;function Ss$1(e,t,r,i){var n=t+i;return n>>>0}Q$1.sum64_lo=Ss$1;function Ns$1(e,t,r,i,n,o,h,p){var b=0,m=t;m=m+i>>>0,b+=m<t?1:0,m=m+o>>>0,b+=m<o?1:0,m=m+p>>>0,b+=m<p?1:0;var w=e+r+n+h+b;return w>>>0}Q$1.sum64_4_hi=Ns$1;function Is$1(e,t,r,i,n,o,h,p){var b=t+i+o+p;return b>>>0}Q$1.sum64_4_lo=Is$1;function _s$1(e,t,r,i,n,o,h,p,b,m){var w=0,y=t;y=y+i>>>0,w+=y<t?1:0,y=y+o>>>0,w+=y<o?1:0,y=y+p>>>0,w+=y<p?1:0,y=y+m>>>0,w+=y<m?1:0;var S=e+r+n+h+b+w;return S>>>0}Q$1.sum64_5_hi=_s$1;function Bs$1(e,t,r,i,n,o,h,p,b,m){var w=t+i+o+p+m;return w>>>0}Q$1.sum64_5_lo=Bs$1;function Cs$1(e,t,r){var i=t<<32-r|e>>>r;return i>>>0}Q$1.rotr64_hi=Cs$1;function Rs$1(e,t,r){var i=e<<32-r|t>>>r;return i>>>0}Q$1.rotr64_lo=Rs$1;function Os$1(e,t,r){return e>>>r}Q$1.shr64_hi=Os$1;function Ps$1(e,t,r){var i=e<<32-r|t>>>r;return i>>>0}Q$1.shr64_lo=Ps$1;var fr={},lf=Q$1,Ds$1=yr$1;function Fr$1(){this.pending=null,this.pendingTotal=0,this.blockSize=this.constructor.blockSize,this.outSize=this.constructor.outSize,this.hmacStrength=this.constructor.hmacStrength,this.padLength=this.constructor.padLength/8,this.endian="big",this._delta8=this.blockSize/8,this._delta32=this.blockSize/32;}fr.BlockHash=Fr$1,Fr$1.prototype.update=function(t,r){if(t=lf.toArray(t,r),this.pending?this.pending=this.pending.concat(t):this.pending=t,this.pendingTotal+=t.length,this.pending.length>=this._delta8){t=this.pending;var i=t.length%this._delta8;this.pending=t.slice(t.length-i,t.length),this.pending.length===0&&(this.pending=null),t=lf.join32(t,0,t.length-i,this.endian);for(var n=0;n<t.length;n+=this._delta32)this._update(t,n,n+this._delta32);}return this},Fr$1.prototype.digest=function(t){return this.update(this._pad()),Ds$1(this.pending===null),this._digest(t)},Fr$1.prototype._pad=function(){var t=this.pendingTotal,r=this._delta8,i=r-(t+this.padLength)%r,n=new Array(i+this.padLength);n[0]=128;for(var o=1;o<i;o++)n[o]=0;if(t<<=3,this.endian==="big"){for(var h=8;h<this.padLength;h++)n[o++]=0;n[o++]=0,n[o++]=0,n[o++]=0,n[o++]=0,n[o++]=t>>>24&255,n[o++]=t>>>16&255,n[o++]=t>>>8&255,n[o++]=t&255;}else for(n[o++]=t&255,n[o++]=t>>>8&255,n[o++]=t>>>16&255,n[o++]=t>>>24&255,n[o++]=0,n[o++]=0,n[o++]=0,n[o++]=0,h=8;h<this.padLength;h++)n[o++]=0;return n};var or$1={},ae={},Fs$1=Q$1,ue$1=Fs$1.rotr32;function Ts$1(e,t,r,i){if(e===0)return df(t,r,i);if(e===1||e===3)return vf(t,r,i);if(e===2)return pf(t,r,i)}ae.ft_1=Ts$1;function df(e,t,r){return e&t^~e&r}ae.ch32=df;function pf(e,t,r){return e&t^e&r^t&r}ae.maj32=pf;function vf(e,t,r){return e^t^r}ae.p32=vf;function Us$1(e){return ue$1(e,2)^ue$1(e,13)^ue$1(e,22)}ae.s0_256=Us$1;function ks$1(e){return ue$1(e,6)^ue$1(e,11)^ue$1(e,25)}ae.s1_256=ks$1;function qs$1(e){return ue$1(e,7)^ue$1(e,18)^e>>>3}ae.g0_256=qs$1;function Ks$1(e){return ue$1(e,17)^ue$1(e,19)^e>>>10}ae.g1_256=Ks$1;var sr$1=Q$1,Hs$1=fr,zs$1=ae,_i=sr$1.rotl32,wr$1=sr$1.sum32,Ls$1=sr$1.sum32_5,js$1=zs$1.ft_1,mf=Hs$1.BlockHash,Qs$1=[1518500249,1859775393,2400959708,3395469782];function he(){if(!(this instanceof he))return new he;mf.call(this),this.h=[1732584193,4023233417,2562383102,271733878,3285377520],this.W=new Array(80);}sr$1.inherits(he,mf);var Js$1=he;he.blockSize=512,he.outSize=160,he.hmacStrength=80,he.padLength=64,he.prototype._update=function(t,r){for(var i=this.W,n=0;n<16;n++)i[n]=t[r+n];for(;n<i.length;n++)i[n]=_i(i[n-3]^i[n-8]^i[n-14]^i[n-16],1);var o=this.h[0],h=this.h[1],p=this.h[2],b=this.h[3],m=this.h[4];for(n=0;n<i.length;n++){var w=~~(n/20),y=Ls$1(_i(o,5),js$1(w,h,p,b),m,i[n],Qs$1[w]);m=b,b=p,p=_i(h,30),h=o,o=y;}this.h[0]=wr$1(this.h[0],o),this.h[1]=wr$1(this.h[1],h),this.h[2]=wr$1(this.h[2],p),this.h[3]=wr$1(this.h[3],b),this.h[4]=wr$1(this.h[4],m);},he.prototype._digest=function(t){return t==="hex"?sr$1.toHex32(this.h,"big"):sr$1.split32(this.h,"big")};var ar$1=Q$1,Gs$1=fr,ur$1=ae,Ys$1=yr$1,ie$1=ar$1.sum32,Vs$1=ar$1.sum32_4,Ws$1=ar$1.sum32_5,Xs$1=ur$1.ch32,Zs$1=ur$1.maj32,$s$1=ur$1.s0_256,ta=ur$1.s1_256,ea=ur$1.g0_256,ra=ur$1.g1_256,gf=Gs$1.BlockHash,ia=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];function ce(){if(!(this instanceof ce))return new ce;gf.call(this),this.h=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],this.k=ia,this.W=new Array(64);}ar$1.inherits(ce,gf);var Af=ce;ce.blockSize=512,ce.outSize=256,ce.hmacStrength=192,ce.padLength=64,ce.prototype._update=function(t,r){for(var i=this.W,n=0;n<16;n++)i[n]=t[r+n];for(;n<i.length;n++)i[n]=Vs$1(ra(i[n-2]),i[n-7],ea(i[n-15]),i[n-16]);var o=this.h[0],h=this.h[1],p=this.h[2],b=this.h[3],m=this.h[4],w=this.h[5],y=this.h[6],S=this.h[7];for(Ys$1(this.k.length===i.length),n=0;n<i.length;n++){var I=Ws$1(S,ta(m),Xs$1(m,w,y),this.k[n],i[n]),N=ie$1($s$1(o),Zs$1(o,h,p));S=y,y=w,w=m,m=ie$1(b,I),b=p,p=h,h=o,o=ie$1(I,N);}this.h[0]=ie$1(this.h[0],o),this.h[1]=ie$1(this.h[1],h),this.h[2]=ie$1(this.h[2],p),this.h[3]=ie$1(this.h[3],b),this.h[4]=ie$1(this.h[4],m),this.h[5]=ie$1(this.h[5],w),this.h[6]=ie$1(this.h[6],y),this.h[7]=ie$1(this.h[7],S);},ce.prototype._digest=function(t){return t==="hex"?ar$1.toHex32(this.h,"big"):ar$1.split32(this.h,"big")};var Bi=Q$1,bf=Af;function ye$1(){if(!(this instanceof ye$1))return new ye$1;bf.call(this),this.h=[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428];}Bi.inherits(ye$1,bf);var na=ye$1;ye$1.blockSize=512,ye$1.outSize=224,ye$1.hmacStrength=192,ye$1.padLength=64,ye$1.prototype._digest=function(t){return t==="hex"?Bi.toHex32(this.h.slice(0,7),"big"):Bi.split32(this.h.slice(0,7),"big")};var jt$1=Q$1,fa=fr,oa=yr$1,le=jt$1.rotr64_hi,de$1=jt$1.rotr64_lo,yf=jt$1.shr64_hi,wf=jt$1.shr64_lo,Be$2=jt$1.sum64,Ci=jt$1.sum64_hi,Ri=jt$1.sum64_lo,sa=jt$1.sum64_4_hi,aa=jt$1.sum64_4_lo,ua=jt$1.sum64_5_hi,ha=jt$1.sum64_5_lo,xf=fa.BlockHash,ca=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591];function ne$1(){if(!(this instanceof ne$1))return new ne$1;xf.call(this),this.h=[1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209],this.k=ca,this.W=new Array(160);}jt$1.inherits(ne$1,xf);var Mf=ne$1;ne$1.blockSize=1024,ne$1.outSize=512,ne$1.hmacStrength=192,ne$1.padLength=128,ne$1.prototype._prepareBlock=function(t,r){for(var i=this.W,n=0;n<32;n++)i[n]=t[r+n];for(;n<i.length;n+=2){var o=xa(i[n-4],i[n-3]),h=Ma(i[n-4],i[n-3]),p=i[n-14],b=i[n-13],m=ya(i[n-30],i[n-29]),w=wa(i[n-30],i[n-29]),y=i[n-32],S=i[n-31];i[n]=sa(o,h,p,b,m,w,y,S),i[n+1]=aa(o,h,p,b,m,w,y,S);}},ne$1.prototype._update=function(t,r){this._prepareBlock(t,r);var i=this.W,n=this.h[0],o=this.h[1],h=this.h[2],p=this.h[3],b=this.h[4],m=this.h[5],w=this.h[6],y=this.h[7],S=this.h[8],I=this.h[9],N=this.h[10],C=this.h[11],F=this.h[12],U=this.h[13],J=this.h[14],Bt=this.h[15];oa(this.k.length===i.length);for(var G=0;G<i.length;G+=2){var H=J,z=Bt,Pt=Aa(S,I),W=ba(S,I),Rt=la(S,I,N,C,F),Yt=da(S,I,N,C,F,U),Y=this.k[G],Vt=this.k[G+1],A=i[G],f=i[G+1],a=ua(H,z,Pt,W,Rt,Yt,Y,Vt,A,f),c=ha(H,z,Pt,W,Rt,Yt,Y,Vt,A,f);H=ma(n,o),z=ga(n,o),Pt=pa(n,o,h,p,b),W=va(n,o,h,p,b,m);var d=Ci(H,z,Pt,W),g=Ri(H,z,Pt,W);J=F,Bt=U,F=N,U=C,N=S,C=I,S=Ci(w,y,a,c),I=Ri(y,y,a,c),w=b,y=m,b=h,m=p,h=n,p=o,n=Ci(a,c,d,g),o=Ri(a,c,d,g);}Be$2(this.h,0,n,o),Be$2(this.h,2,h,p),Be$2(this.h,4,b,m),Be$2(this.h,6,w,y),Be$2(this.h,8,S,I),Be$2(this.h,10,N,C),Be$2(this.h,12,F,U),Be$2(this.h,14,J,Bt);},ne$1.prototype._digest=function(t){return t==="hex"?jt$1.toHex32(this.h,"big"):jt$1.split32(this.h,"big")};function la(e,t,r,i,n){var o=e&r^~e&n;return o<0&&(o+=4294967296),o}function da(e,t,r,i,n,o){var h=t&i^~t&o;return h<0&&(h+=4294967296),h}function pa(e,t,r,i,n){var o=e&r^e&n^r&n;return o<0&&(o+=4294967296),o}function va(e,t,r,i,n,o){var h=t&i^t&o^i&o;return h<0&&(h+=4294967296),h}function ma(e,t){var r=le(e,t,28),i=le(t,e,2),n=le(t,e,7),o=r^i^n;return o<0&&(o+=4294967296),o}function ga(e,t){var r=de$1(e,t,28),i=de$1(t,e,2),n=de$1(t,e,7),o=r^i^n;return o<0&&(o+=4294967296),o}function Aa(e,t){var r=le(e,t,14),i=le(e,t,18),n=le(t,e,9),o=r^i^n;return o<0&&(o+=4294967296),o}function ba(e,t){var r=de$1(e,t,14),i=de$1(e,t,18),n=de$1(t,e,9),o=r^i^n;return o<0&&(o+=4294967296),o}function ya(e,t){var r=le(e,t,1),i=le(e,t,8),n=yf(e,t,7),o=r^i^n;return o<0&&(o+=4294967296),o}function wa(e,t){var r=de$1(e,t,1),i=de$1(e,t,8),n=wf(e,t,7),o=r^i^n;return o<0&&(o+=4294967296),o}function xa(e,t){var r=le(e,t,19),i=le(t,e,29),n=yf(e,t,6),o=r^i^n;return o<0&&(o+=4294967296),o}function Ma(e,t){var r=de$1(e,t,19),i=de$1(t,e,29),n=wf(e,t,6),o=r^i^n;return o<0&&(o+=4294967296),o}var Oi=Q$1,Ef=Mf;function we(){if(!(this instanceof we))return new we;Ef.call(this),this.h=[3418070365,3238371032,1654270250,914150663,2438529370,812702999,355462360,4144912697,1731405415,4290775857,2394180231,1750603025,3675008525,1694076839,1203062813,3204075428];}Oi.inherits(we,Ef);var Ea=we;we.blockSize=1024,we.outSize=384,we.hmacStrength=192,we.padLength=128,we.prototype._digest=function(t){return t==="hex"?Oi.toHex32(this.h.slice(0,12),"big"):Oi.split32(this.h.slice(0,12),"big")},or$1.sha1=Js$1,or$1.sha224=na,or$1.sha256=Af,or$1.sha384=Ea,or$1.sha512=Mf;var Sf={},Xe$2=Q$1,Sa=fr,Tr$1=Xe$2.rotl32,Nf=Xe$2.sum32,xr$1=Xe$2.sum32_3,If=Xe$2.sum32_4,_f=Sa.BlockHash;function pe$1(){if(!(this instanceof pe$1))return new pe$1;_f.call(this),this.h=[1732584193,4023233417,2562383102,271733878,3285377520],this.endian="little";}Xe$2.inherits(pe$1,_f),Sf.ripemd160=pe$1,pe$1.blockSize=512,pe$1.outSize=160,pe$1.hmacStrength=192,pe$1.padLength=64,pe$1.prototype._update=function(t,r){for(var i=this.h[0],n=this.h[1],o=this.h[2],h=this.h[3],p=this.h[4],b=i,m=n,w=o,y=h,S=p,I=0;I<80;I++){var N=Nf(Tr$1(If(i,Bf(I,n,o,h),t[_a[I]+r],Na(I)),Ca[I]),p);i=p,p=h,h=Tr$1(o,10),o=n,n=N,N=Nf(Tr$1(If(b,Bf(79-I,m,w,y),t[Ba[I]+r],Ia(I)),Ra[I]),S),b=S,S=y,y=Tr$1(w,10),w=m,m=N;}N=xr$1(this.h[1],o,y),this.h[1]=xr$1(this.h[2],h,S),this.h[2]=xr$1(this.h[3],p,b),this.h[3]=xr$1(this.h[4],i,m),this.h[4]=xr$1(this.h[0],n,w),this.h[0]=N;},pe$1.prototype._digest=function(t){return t==="hex"?Xe$2.toHex32(this.h,"little"):Xe$2.split32(this.h,"little")};function Bf(e,t,r,i){return e<=15?t^r^i:e<=31?t&r|~t&i:e<=47?(t|~r)^i:e<=63?t&i|r&~i:t^(r|~i)}function Na(e){return e<=15?0:e<=31?1518500249:e<=47?1859775393:e<=63?2400959708:2840853838}function Ia(e){return e<=15?1352829926:e<=31?1548603684:e<=47?1836072691:e<=63?2053994217:0}var _a=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13],Ba=[5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11],Ca=[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6],Ra=[8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11],Oa=Q$1,Pa=yr$1;function hr$1(e,t,r){if(!(this instanceof hr$1))return new hr$1(e,t,r);this.Hash=e,this.blockSize=e.blockSize/8,this.outSize=e.outSize/8,this.inner=null,this.outer=null,this._init(Oa.toArray(t,r));}var Da=hr$1;hr$1.prototype._init=function(t){t.length>this.blockSize&&(t=new this.Hash().update(t).digest()),Pa(t.length<=this.blockSize);for(var r=t.length;r<this.blockSize;r++)t.push(0);for(r=0;r<t.length;r++)t[r]^=54;for(this.inner=new this.Hash().update(t),r=0;r<t.length;r++)t[r]^=106;this.outer=new this.Hash().update(t);},hr$1.prototype.update=function(t,r){return this.inner.update(t,r),this},hr$1.prototype.digest=function(t){return this.outer.update(this.inner.digest()),this.outer.digest(t)},function(e){var t=e;t.utils=Q$1,t.common=fr,t.sha=or$1,t.ripemd=Sf,t.hmac=Da,t.sha1=t.sha.sha1,t.sha256=t.sha.sha256,t.sha224=t.sha.sha224,t.sha384=t.sha.sha384,t.sha512=t.sha.sha512,t.ripemd160=t.ripemd.ripemd160;}(se);function cr$1(e,t,r){return r={path:t,exports:{},require:function(i,n){return Fa(i,n??r.path)}},e(r,r.exports),r.exports}function Fa(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var Pi=Cf;function Cf(e,t){if(!e)throw new Error(t||"Assertion failed")}Cf.equal=function(t,r,i){if(t!=r)throw new Error(i||"Assertion failed: "+t+" != "+r)};var fe$1=cr$1(function(e,t){var r=t;function i(h,p){if(Array.isArray(h))return h.slice();if(!h)return [];var b=[];if(typeof h!="string"){for(var m=0;m<h.length;m++)b[m]=h[m]|0;return b}if(p==="hex"){h=h.replace(/[^a-z0-9]+/ig,""),h.length%2!==0&&(h="0"+h);for(var m=0;m<h.length;m+=2)b.push(parseInt(h[m]+h[m+1],16));}else for(var m=0;m<h.length;m++){var w=h.charCodeAt(m),y=w>>8,S=w&255;y?b.push(y,S):b.push(S);}return b}r.toArray=i;function n(h){return h.length===1?"0"+h:h}r.zero2=n;function o(h){for(var p="",b=0;b<h.length;b++)p+=n(h[b].toString(16));return p}r.toHex=o,r.encode=function(p,b){return b==="hex"?o(p):p};}),Jt$2=cr$1(function(e,t){var r=t;r.assert=Pi,r.toArray=fe$1.toArray,r.zero2=fe$1.zero2,r.toHex=fe$1.toHex,r.encode=fe$1.encode;function i(b,m,w){var y=new Array(Math.max(b.bitLength(),w)+1);y.fill(0);for(var S=1<<m+1,I=b.clone(),N=0;N<y.length;N++){var C,F=I.andln(S-1);I.isOdd()?(F>(S>>1)-1?C=(S>>1)-F:C=F,I.isubn(C)):C=0,y[N]=C,I.iushrn(1);}return y}r.getNAF=i;function n(b,m){var w=[[],[]];b=b.clone(),m=m.clone();for(var y=0,S=0,I;b.cmpn(-y)>0||m.cmpn(-S)>0;){var N=b.andln(3)+y&3,C=m.andln(3)+S&3;N===3&&(N=-1),C===3&&(C=-1);var F;N&1?(I=b.andln(7)+y&7,(I===3||I===5)&&C===2?F=-N:F=N):F=0,w[0].push(F);var U;C&1?(I=m.andln(7)+S&7,(I===3||I===5)&&N===2?U=-C:U=C):U=0,w[1].push(U),2*y===F+1&&(y=1-y),2*S===U+1&&(S=1-S),b.iushrn(1),m.iushrn(1);}return w}r.getJSF=n;function o(b,m,w){var y="_"+m;b.prototype[m]=function(){return this[y]!==void 0?this[y]:this[y]=w.call(this)};}r.cachedProperty=o;function h(b){return typeof b=="string"?r.toArray(b,"hex"):b}r.parseBytes=h;function p(b){return new K$1(b,"hex","le")}r.intFromLE=p;}),Ur$1=Jt$2.getNAF,Ta=Jt$2.getJSF,kr=Jt$2.assert;function Ce(e,t){this.type=e,this.p=new K$1(t.p,16),this.red=t.prime?K$1.red(t.prime):K$1.mont(this.p),this.zero=new K$1(0).toRed(this.red),this.one=new K$1(1).toRed(this.red),this.two=new K$1(2).toRed(this.red),this.n=t.n&&new K$1(t.n,16),this.g=t.g&&this.pointFromJSON(t.g,t.gRed),this._wnafT1=new Array(4),this._wnafT2=new Array(4),this._wnafT3=new Array(4),this._wnafT4=new Array(4),this._bitLength=this.n?this.n.bitLength():0;var r=this.n&&this.p.div(this.n);!r||r.cmpn(100)>0?this.redN=null:(this._maxwellTrick=!0,this.redN=this.n.toRed(this.red));}var Ze$2=Ce;Ce.prototype.point=function(){throw new Error("Not implemented")},Ce.prototype.validate=function(){throw new Error("Not implemented")},Ce.prototype._fixedNafMul=function(t,r){kr(t.precomputed);var i=t._getDoubles(),n=Ur$1(r,1,this._bitLength),o=(1<<i.step+1)-(i.step%2===0?2:1);o/=3;var h=[],p,b;for(p=0;p<n.length;p+=i.step){b=0;for(var m=p+i.step-1;m>=p;m--)b=(b<<1)+n[m];h.push(b);}for(var w=this.jpoint(null,null,null),y=this.jpoint(null,null,null),S=o;S>0;S--){for(p=0;p<h.length;p++)b=h[p],b===S?y=y.mixedAdd(i.points[p]):b===-S&&(y=y.mixedAdd(i.points[p].neg()));w=w.add(y);}return w.toP()},Ce.prototype._wnafMul=function(t,r){var i=4,n=t._getNAFPoints(i);i=n.wnd;for(var o=n.points,h=Ur$1(r,i,this._bitLength),p=this.jpoint(null,null,null),b=h.length-1;b>=0;b--){for(var m=0;b>=0&&h[b]===0;b--)m++;if(b>=0&&m++,p=p.dblp(m),b<0)break;var w=h[b];kr(w!==0),t.type==="affine"?w>0?p=p.mixedAdd(o[w-1>>1]):p=p.mixedAdd(o[-w-1>>1].neg()):w>0?p=p.add(o[w-1>>1]):p=p.add(o[-w-1>>1].neg());}return t.type==="affine"?p.toP():p},Ce.prototype._wnafMulAdd=function(t,r,i,n,o){var h=this._wnafT1,p=this._wnafT2,b=this._wnafT3,m=0,w,y,S;for(w=0;w<n;w++){S=r[w];var I=S._getNAFPoints(t);h[w]=I.wnd,p[w]=I.points;}for(w=n-1;w>=1;w-=2){var N=w-1,C=w;if(h[N]!==1||h[C]!==1){b[N]=Ur$1(i[N],h[N],this._bitLength),b[C]=Ur$1(i[C],h[C],this._bitLength),m=Math.max(b[N].length,m),m=Math.max(b[C].length,m);continue}var F=[r[N],null,null,r[C]];r[N].y.cmp(r[C].y)===0?(F[1]=r[N].add(r[C]),F[2]=r[N].toJ().mixedAdd(r[C].neg())):r[N].y.cmp(r[C].y.redNeg())===0?(F[1]=r[N].toJ().mixedAdd(r[C]),F[2]=r[N].add(r[C].neg())):(F[1]=r[N].toJ().mixedAdd(r[C]),F[2]=r[N].toJ().mixedAdd(r[C].neg()));var U=[-3,-1,-5,-7,0,7,5,1,3],J=Ta(i[N],i[C]);for(m=Math.max(J[0].length,m),b[N]=new Array(m),b[C]=new Array(m),y=0;y<m;y++){var Bt=J[0][y]|0,G=J[1][y]|0;b[N][y]=U[(Bt+1)*3+(G+1)],b[C][y]=0,p[N]=F;}}var H=this.jpoint(null,null,null),z=this._wnafT4;for(w=m;w>=0;w--){for(var Pt=0;w>=0;){var W=!0;for(y=0;y<n;y++)z[y]=b[y][w]|0,z[y]!==0&&(W=!1);if(!W)break;Pt++,w--;}if(w>=0&&Pt++,H=H.dblp(Pt),w<0)break;for(y=0;y<n;y++){var Rt=z[y];Rt!==0&&(Rt>0?S=p[y][Rt-1>>1]:Rt<0&&(S=p[y][-Rt-1>>1].neg()),S.type==="affine"?H=H.mixedAdd(S):H=H.add(S));}}for(w=0;w<n;w++)p[w]=null;return o?H:H.toP()};function Xt$1(e,t){this.curve=e,this.type=t,this.precomputed=null;}Ce.BasePoint=Xt$1,Xt$1.prototype.eq=function(){throw new Error("Not implemented")},Xt$1.prototype.validate=function(){return this.curve.validate(this)},Ce.prototype.decodePoint=function(t,r){t=Jt$2.toArray(t,r);var i=this.p.byteLength();if((t[0]===4||t[0]===6||t[0]===7)&&t.length-1===2*i){t[0]===6?kr(t[t.length-1]%2===0):t[0]===7&&kr(t[t.length-1]%2===1);var n=this.point(t.slice(1,1+i),t.slice(1+i,1+2*i));return n}else if((t[0]===2||t[0]===3)&&t.length-1===i)return this.pointFromX(t.slice(1,1+i),t[0]===3);throw new Error("Unknown point format")},Xt$1.prototype.encodeCompressed=function(t){return this.encode(t,!0)},Xt$1.prototype._encode=function(t){var r=this.curve.p.byteLength(),i=this.getX().toArray("be",r);return t?[this.getY().isEven()?2:3].concat(i):[4].concat(i,this.getY().toArray("be",r))},Xt$1.prototype.encode=function(t,r){return Jt$2.encode(this._encode(r),t)},Xt$1.prototype.precompute=function(t){if(this.precomputed)return this;var r={doubles:null,naf:null,beta:null};return r.naf=this._getNAFPoints(8),r.doubles=this._getDoubles(4,t),r.beta=this._getBeta(),this.precomputed=r,this},Xt$1.prototype._hasDoubles=function(t){if(!this.precomputed)return !1;var r=this.precomputed.doubles;return r?r.points.length>=Math.ceil((t.bitLength()+1)/r.step):!1},Xt$1.prototype._getDoubles=function(t,r){if(this.precomputed&&this.precomputed.doubles)return this.precomputed.doubles;for(var i=[this],n=this,o=0;o<r;o+=t){for(var h=0;h<t;h++)n=n.dbl();i.push(n);}return {step:t,points:i}},Xt$1.prototype._getNAFPoints=function(t){if(this.precomputed&&this.precomputed.naf)return this.precomputed.naf;for(var r=[this],i=(1<<t)-1,n=i===1?null:this.dbl(),o=1;o<i;o++)r[o]=r[o-1].add(n);return {wnd:t,points:r}},Xt$1.prototype._getBeta=function(){return null},Xt$1.prototype.dblp=function(t){for(var r=this,i=0;i<t;i++)r=r.dbl();return r};var Di=cr$1(function(e){typeof Object.create=="function"?e.exports=function(r,i){i&&(r.super_=i,r.prototype=Object.create(i.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}));}:e.exports=function(r,i){if(i){r.super_=i;var n=function(){};n.prototype=i.prototype,r.prototype=new n,r.prototype.constructor=r;}};}),Ua=Jt$2.assert;function Zt$1(e){Ze$2.call(this,"short",e),this.a=new K$1(e.a,16).toRed(this.red),this.b=new K$1(e.b,16).toRed(this.red),this.tinv=this.two.redInvm(),this.zeroA=this.a.fromRed().cmpn(0)===0,this.threeA=this.a.fromRed().sub(this.p).cmpn(-3)===0,this.endo=this._getEndomorphism(e),this._endoWnafT1=new Array(4),this._endoWnafT2=new Array(4);}Di(Zt$1,Ze$2);var ka=Zt$1;Zt$1.prototype._getEndomorphism=function(t){if(!(!this.zeroA||!this.g||!this.n||this.p.modn(3)!==1)){var r,i;if(t.beta)r=new K$1(t.beta,16).toRed(this.red);else {var n=this._getEndoRoots(this.p);r=n[0].cmp(n[1])<0?n[0]:n[1],r=r.toRed(this.red);}if(t.lambda)i=new K$1(t.lambda,16);else {var o=this._getEndoRoots(this.n);this.g.mul(o[0]).x.cmp(this.g.x.redMul(r))===0?i=o[0]:(i=o[1],Ua(this.g.mul(i).x.cmp(this.g.x.redMul(r))===0));}var h;return t.basis?h=t.basis.map(function(p){return {a:new K$1(p.a,16),b:new K$1(p.b,16)}}):h=this._getEndoBasis(i),{beta:r,lambda:i,basis:h}}},Zt$1.prototype._getEndoRoots=function(t){var r=t===this.p?this.red:K$1.mont(t),i=new K$1(2).toRed(r).redInvm(),n=i.redNeg(),o=new K$1(3).toRed(r).redNeg().redSqrt().redMul(i),h=n.redAdd(o).fromRed(),p=n.redSub(o).fromRed();return [h,p]},Zt$1.prototype._getEndoBasis=function(t){for(var r=this.n.ushrn(Math.floor(this.n.bitLength()/2)),i=t,n=this.n.clone(),o=new K$1(1),h=new K$1(0),p=new K$1(0),b=new K$1(1),m,w,y,S,I,N,C,F=0,U,J;i.cmpn(0)!==0;){var Bt=n.div(i);U=n.sub(Bt.mul(i)),J=p.sub(Bt.mul(o));var G=b.sub(Bt.mul(h));if(!y&&U.cmp(r)<0)m=C.neg(),w=o,y=U.neg(),S=J;else if(y&&++F===2)break;C=U,n=i,i=U,p=o,o=J,b=h,h=G;}I=U.neg(),N=J;var H=y.sqr().add(S.sqr()),z=I.sqr().add(N.sqr());return z.cmp(H)>=0&&(I=m,N=w),y.negative&&(y=y.neg(),S=S.neg()),I.negative&&(I=I.neg(),N=N.neg()),[{a:y,b:S},{a:I,b:N}]},Zt$1.prototype._endoSplit=function(t){var r=this.endo.basis,i=r[0],n=r[1],o=n.b.mul(t).divRound(this.n),h=i.b.neg().mul(t).divRound(this.n),p=o.mul(i.a),b=h.mul(n.a),m=o.mul(i.b),w=h.mul(n.b),y=t.sub(p).sub(b),S=m.add(w).neg();return {k1:y,k2:S}},Zt$1.prototype.pointFromX=function(t,r){t=new K$1(t,16),t.red||(t=t.toRed(this.red));var i=t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b),n=i.redSqrt();if(n.redSqr().redSub(i).cmp(this.zero)!==0)throw new Error("invalid point");var o=n.fromRed().isOdd();return (r&&!o||!r&&o)&&(n=n.redNeg()),this.point(t,n)},Zt$1.prototype.validate=function(t){if(t.inf)return !0;var r=t.x,i=t.y,n=this.a.redMul(r),o=r.redSqr().redMul(r).redIAdd(n).redIAdd(this.b);return i.redSqr().redISub(o).cmpn(0)===0},Zt$1.prototype._endoWnafMulAdd=function(t,r,i){for(var n=this._endoWnafT1,o=this._endoWnafT2,h=0;h<t.length;h++){var p=this._endoSplit(r[h]),b=t[h],m=b._getBeta();p.k1.negative&&(p.k1.ineg(),b=b.neg(!0)),p.k2.negative&&(p.k2.ineg(),m=m.neg(!0)),n[h*2]=b,n[h*2+1]=m,o[h*2]=p.k1,o[h*2+1]=p.k2;}for(var w=this._wnafMulAdd(1,n,o,h*2,i),y=0;y<h*2;y++)n[y]=null,o[y]=null;return w};function Ft$1(e,t,r,i){Ze$2.BasePoint.call(this,e,"affine"),t===null&&r===null?(this.x=null,this.y=null,this.inf=!0):(this.x=new K$1(t,16),this.y=new K$1(r,16),i&&(this.x.forceRed(this.curve.red),this.y.forceRed(this.curve.red)),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.inf=!1);}Di(Ft$1,Ze$2.BasePoint),Zt$1.prototype.point=function(t,r,i){return new Ft$1(this,t,r,i)},Zt$1.prototype.pointFromJSON=function(t,r){return Ft$1.fromJSON(this,t,r)},Ft$1.prototype._getBeta=function(){if(this.curve.endo){var t=this.precomputed;if(t&&t.beta)return t.beta;var r=this.curve.point(this.x.redMul(this.curve.endo.beta),this.y);if(t){var i=this.curve,n=function(o){return i.point(o.x.redMul(i.endo.beta),o.y)};t.beta=r,r.precomputed={beta:null,naf:t.naf&&{wnd:t.naf.wnd,points:t.naf.points.map(n)},doubles:t.doubles&&{step:t.doubles.step,points:t.doubles.points.map(n)}};}return r}},Ft$1.prototype.toJSON=function(){return this.precomputed?[this.x,this.y,this.precomputed&&{doubles:this.precomputed.doubles&&{step:this.precomputed.doubles.step,points:this.precomputed.doubles.points.slice(1)},naf:this.precomputed.naf&&{wnd:this.precomputed.naf.wnd,points:this.precomputed.naf.points.slice(1)}}]:[this.x,this.y]},Ft$1.fromJSON=function(t,r,i){typeof r=="string"&&(r=JSON.parse(r));var n=t.point(r[0],r[1],i);if(!r[2])return n;function o(p){return t.point(p[0],p[1],i)}var h=r[2];return n.precomputed={beta:null,doubles:h.doubles&&{step:h.doubles.step,points:[n].concat(h.doubles.points.map(o))},naf:h.naf&&{wnd:h.naf.wnd,points:[n].concat(h.naf.points.map(o))}},n},Ft$1.prototype.inspect=function(){return this.isInfinity()?"<EC Point Infinity>":"<EC Point x: "+this.x.fromRed().toString(16,2)+" y: "+this.y.fromRed().toString(16,2)+">"},Ft$1.prototype.isInfinity=function(){return this.inf},Ft$1.prototype.add=function(t){if(this.inf)return t;if(t.inf)return this;if(this.eq(t))return this.dbl();if(this.neg().eq(t))return this.curve.point(null,null);if(this.x.cmp(t.x)===0)return this.curve.point(null,null);var r=this.y.redSub(t.y);r.cmpn(0)!==0&&(r=r.redMul(this.x.redSub(t.x).redInvm()));var i=r.redSqr().redISub(this.x).redISub(t.x),n=r.redMul(this.x.redSub(i)).redISub(this.y);return this.curve.point(i,n)},Ft$1.prototype.dbl=function(){if(this.inf)return this;var t=this.y.redAdd(this.y);if(t.cmpn(0)===0)return this.curve.point(null,null);var r=this.curve.a,i=this.x.redSqr(),n=t.redInvm(),o=i.redAdd(i).redIAdd(i).redIAdd(r).redMul(n),h=o.redSqr().redISub(this.x.redAdd(this.x)),p=o.redMul(this.x.redSub(h)).redISub(this.y);return this.curve.point(h,p)},Ft$1.prototype.getX=function(){return this.x.fromRed()},Ft$1.prototype.getY=function(){return this.y.fromRed()},Ft$1.prototype.mul=function(t){return t=new K$1(t,16),this.isInfinity()?this:this._hasDoubles(t)?this.curve._fixedNafMul(this,t):this.curve.endo?this.curve._endoWnafMulAdd([this],[t]):this.curve._wnafMul(this,t)},Ft$1.prototype.mulAdd=function(t,r,i){var n=[this,r],o=[t,i];return this.curve.endo?this.curve._endoWnafMulAdd(n,o):this.curve._wnafMulAdd(1,n,o,2)},Ft$1.prototype.jmulAdd=function(t,r,i){var n=[this,r],o=[t,i];return this.curve.endo?this.curve._endoWnafMulAdd(n,o,!0):this.curve._wnafMulAdd(1,n,o,2,!0)},Ft$1.prototype.eq=function(t){return this===t||this.inf===t.inf&&(this.inf||this.x.cmp(t.x)===0&&this.y.cmp(t.y)===0)},Ft$1.prototype.neg=function(t){if(this.inf)return this;var r=this.curve.point(this.x,this.y.redNeg());if(t&&this.precomputed){var i=this.precomputed,n=function(o){return o.neg()};r.precomputed={naf:i.naf&&{wnd:i.naf.wnd,points:i.naf.points.map(n)},doubles:i.doubles&&{step:i.doubles.step,points:i.doubles.points.map(n)}};}return r},Ft$1.prototype.toJ=function(){if(this.inf)return this.curve.jpoint(null,null,null);var t=this.curve.jpoint(this.x,this.y,this.curve.one);return t};function Tt$1(e,t,r,i){Ze$2.BasePoint.call(this,e,"jacobian"),t===null&&r===null&&i===null?(this.x=this.curve.one,this.y=this.curve.one,this.z=new K$1(0)):(this.x=new K$1(t,16),this.y=new K$1(r,16),this.z=new K$1(i,16)),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.z.red||(this.z=this.z.toRed(this.curve.red)),this.zOne=this.z===this.curve.one;}Di(Tt$1,Ze$2.BasePoint),Zt$1.prototype.jpoint=function(t,r,i){return new Tt$1(this,t,r,i)},Tt$1.prototype.toP=function(){if(this.isInfinity())return this.curve.point(null,null);var t=this.z.redInvm(),r=t.redSqr(),i=this.x.redMul(r),n=this.y.redMul(r).redMul(t);return this.curve.point(i,n)},Tt$1.prototype.neg=function(){return this.curve.jpoint(this.x,this.y.redNeg(),this.z)},Tt$1.prototype.add=function(t){if(this.isInfinity())return t;if(t.isInfinity())return this;var r=t.z.redSqr(),i=this.z.redSqr(),n=this.x.redMul(r),o=t.x.redMul(i),h=this.y.redMul(r.redMul(t.z)),p=t.y.redMul(i.redMul(this.z)),b=n.redSub(o),m=h.redSub(p);if(b.cmpn(0)===0)return m.cmpn(0)!==0?this.curve.jpoint(null,null,null):this.dbl();var w=b.redSqr(),y=w.redMul(b),S=n.redMul(w),I=m.redSqr().redIAdd(y).redISub(S).redISub(S),N=m.redMul(S.redISub(I)).redISub(h.redMul(y)),C=this.z.redMul(t.z).redMul(b);return this.curve.jpoint(I,N,C)},Tt$1.prototype.mixedAdd=function(t){if(this.isInfinity())return t.toJ();if(t.isInfinity())return this;var r=this.z.redSqr(),i=this.x,n=t.x.redMul(r),o=this.y,h=t.y.redMul(r).redMul(this.z),p=i.redSub(n),b=o.redSub(h);if(p.cmpn(0)===0)return b.cmpn(0)!==0?this.curve.jpoint(null,null,null):this.dbl();var m=p.redSqr(),w=m.redMul(p),y=i.redMul(m),S=b.redSqr().redIAdd(w).redISub(y).redISub(y),I=b.redMul(y.redISub(S)).redISub(o.redMul(w)),N=this.z.redMul(p);return this.curve.jpoint(S,I,N)},Tt$1.prototype.dblp=function(t){if(t===0)return this;if(this.isInfinity())return this;if(!t)return this.dbl();var r;if(this.curve.zeroA||this.curve.threeA){var i=this;for(r=0;r<t;r++)i=i.dbl();return i}var n=this.curve.a,o=this.curve.tinv,h=this.x,p=this.y,b=this.z,m=b.redSqr().redSqr(),w=p.redAdd(p);for(r=0;r<t;r++){var y=h.redSqr(),S=w.redSqr(),I=S.redSqr(),N=y.redAdd(y).redIAdd(y).redIAdd(n.redMul(m)),C=h.redMul(S),F=N.redSqr().redISub(C.redAdd(C)),U=C.redISub(F),J=N.redMul(U);J=J.redIAdd(J).redISub(I);var Bt=w.redMul(b);r+1<t&&(m=m.redMul(I)),h=F,b=Bt,w=J;}return this.curve.jpoint(h,w.redMul(o),b)},Tt$1.prototype.dbl=function(){return this.isInfinity()?this:this.curve.zeroA?this._zeroDbl():this.curve.threeA?this._threeDbl():this._dbl()},Tt$1.prototype._zeroDbl=function(){var t,r,i;if(this.zOne){var n=this.x.redSqr(),o=this.y.redSqr(),h=o.redSqr(),p=this.x.redAdd(o).redSqr().redISub(n).redISub(h);p=p.redIAdd(p);var b=n.redAdd(n).redIAdd(n),m=b.redSqr().redISub(p).redISub(p),w=h.redIAdd(h);w=w.redIAdd(w),w=w.redIAdd(w),t=m,r=b.redMul(p.redISub(m)).redISub(w),i=this.y.redAdd(this.y);}else {var y=this.x.redSqr(),S=this.y.redSqr(),I=S.redSqr(),N=this.x.redAdd(S).redSqr().redISub(y).redISub(I);N=N.redIAdd(N);var C=y.redAdd(y).redIAdd(y),F=C.redSqr(),U=I.redIAdd(I);U=U.redIAdd(U),U=U.redIAdd(U),t=F.redISub(N).redISub(N),r=C.redMul(N.redISub(t)).redISub(U),i=this.y.redMul(this.z),i=i.redIAdd(i);}return this.curve.jpoint(t,r,i)},Tt$1.prototype._threeDbl=function(){var t,r,i;if(this.zOne){var n=this.x.redSqr(),o=this.y.redSqr(),h=o.redSqr(),p=this.x.redAdd(o).redSqr().redISub(n).redISub(h);p=p.redIAdd(p);var b=n.redAdd(n).redIAdd(n).redIAdd(this.curve.a),m=b.redSqr().redISub(p).redISub(p);t=m;var w=h.redIAdd(h);w=w.redIAdd(w),w=w.redIAdd(w),r=b.redMul(p.redISub(m)).redISub(w),i=this.y.redAdd(this.y);}else {var y=this.z.redSqr(),S=this.y.redSqr(),I=this.x.redMul(S),N=this.x.redSub(y).redMul(this.x.redAdd(y));N=N.redAdd(N).redIAdd(N);var C=I.redIAdd(I);C=C.redIAdd(C);var F=C.redAdd(C);t=N.redSqr().redISub(F),i=this.y.redAdd(this.z).redSqr().redISub(S).redISub(y);var U=S.redSqr();U=U.redIAdd(U),U=U.redIAdd(U),U=U.redIAdd(U),r=N.redMul(C.redISub(t)).redISub(U);}return this.curve.jpoint(t,r,i)},Tt$1.prototype._dbl=function(){var t=this.curve.a,r=this.x,i=this.y,n=this.z,o=n.redSqr().redSqr(),h=r.redSqr(),p=i.redSqr(),b=h.redAdd(h).redIAdd(h).redIAdd(t.redMul(o)),m=r.redAdd(r);m=m.redIAdd(m);var w=m.redMul(p),y=b.redSqr().redISub(w.redAdd(w)),S=w.redISub(y),I=p.redSqr();I=I.redIAdd(I),I=I.redIAdd(I),I=I.redIAdd(I);var N=b.redMul(S).redISub(I),C=i.redAdd(i).redMul(n);return this.curve.jpoint(y,N,C)},Tt$1.prototype.trpl=function(){if(!this.curve.zeroA)return this.dbl().add(this);var t=this.x.redSqr(),r=this.y.redSqr(),i=this.z.redSqr(),n=r.redSqr(),o=t.redAdd(t).redIAdd(t),h=o.redSqr(),p=this.x.redAdd(r).redSqr().redISub(t).redISub(n);p=p.redIAdd(p),p=p.redAdd(p).redIAdd(p),p=p.redISub(h);var b=p.redSqr(),m=n.redIAdd(n);m=m.redIAdd(m),m=m.redIAdd(m),m=m.redIAdd(m);var w=o.redIAdd(p).redSqr().redISub(h).redISub(b).redISub(m),y=r.redMul(w);y=y.redIAdd(y),y=y.redIAdd(y);var S=this.x.redMul(b).redISub(y);S=S.redIAdd(S),S=S.redIAdd(S);var I=this.y.redMul(w.redMul(m.redISub(w)).redISub(p.redMul(b)));I=I.redIAdd(I),I=I.redIAdd(I),I=I.redIAdd(I);var N=this.z.redAdd(p).redSqr().redISub(i).redISub(b);return this.curve.jpoint(S,I,N)},Tt$1.prototype.mul=function(t,r){return t=new K$1(t,r),this.curve._wnafMul(this,t)},Tt$1.prototype.eq=function(t){if(t.type==="affine")return this.eq(t.toJ());if(this===t)return !0;var r=this.z.redSqr(),i=t.z.redSqr();if(this.x.redMul(i).redISub(t.x.redMul(r)).cmpn(0)!==0)return !1;var n=r.redMul(this.z),o=i.redMul(t.z);return this.y.redMul(o).redISub(t.y.redMul(n)).cmpn(0)===0},Tt$1.prototype.eqXToP=function(t){var r=this.z.redSqr(),i=t.toRed(this.curve.red).redMul(r);if(this.x.cmp(i)===0)return !0;for(var n=t.clone(),o=this.curve.redN.redMul(r);;){if(n.iadd(this.curve.n),n.cmp(this.curve.p)>=0)return !1;if(i.redIAdd(o),this.x.cmp(i)===0)return !0}},Tt$1.prototype.inspect=function(){return this.isInfinity()?"<EC JPoint Infinity>":"<EC JPoint x: "+this.x.toString(16,2)+" y: "+this.y.toString(16,2)+" z: "+this.z.toString(16,2)+">"},Tt$1.prototype.isInfinity=function(){return this.z.cmpn(0)===0};var qr=cr$1(function(e,t){var r=t;r.base=Ze$2,r.short=ka,r.mont=null,r.edwards=null;}),Kr=cr$1(function(e,t){var r=t,i=Jt$2.assert;function n(p){p.type==="short"?this.curve=new qr.short(p):p.type==="edwards"?this.curve=new qr.edwards(p):this.curve=new qr.mont(p),this.g=this.curve.g,this.n=this.curve.n,this.hash=p.hash,i(this.g.validate(),"Invalid curve"),i(this.g.mul(this.n).isInfinity(),"Invalid curve, G*N != O");}r.PresetCurve=n;function o(p,b){Object.defineProperty(r,p,{configurable:!0,enumerable:!0,get:function(){var m=new n(b);return Object.defineProperty(r,p,{configurable:!0,enumerable:!0,value:m}),m}});}o("p192",{type:"short",prime:"p192",p:"ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",a:"ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",b:"64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",n:"ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",hash:se.sha256,gRed:!1,g:["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012","07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]}),o("p224",{type:"short",prime:"p224",p:"ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",a:"ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",b:"b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",n:"ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",hash:se.sha256,gRed:!1,g:["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21","bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]}),o("p256",{type:"short",prime:null,p:"ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",a:"ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",b:"5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",n:"ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",hash:se.sha256,gRed:!1,g:["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296","4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]}),o("p384",{type:"short",prime:null,p:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",a:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",b:"b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",n:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",hash:se.sha384,gRed:!1,g:["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7","3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]}),o("p521",{type:"short",prime:null,p:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",a:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",b:"00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",n:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",hash:se.sha512,gRed:!1,g:["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66","00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]}),o("curve25519",{type:"mont",prime:"p25519",p:"7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",a:"76d06",b:"1",n:"1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",hash:se.sha256,gRed:!1,g:["9"]}),o("ed25519",{type:"edwards",prime:"p25519",p:"7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",a:"-1",c:"1",d:"52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",n:"1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",hash:se.sha256,gRed:!1,g:["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a","6666666666666666666666666666666666666666666666666666666666666658"]});var h;try{h=null.crash();}catch{h=void 0;}o("secp256k1",{type:"short",prime:"k256",p:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",a:"0",b:"7",n:"ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",h:"1",hash:se.sha256,beta:"7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",lambda:"5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",basis:[{a:"3086d221a7d46bcde86c90e49284eb15",b:"-e4437ed6010e88286f547fa90abfe4c3"},{a:"114ca50f7a8e2f3f657c1108d9d44cfd8",b:"3086d221a7d46bcde86c90e49284eb15"}],gRed:!1,g:["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798","483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",h]});});function Re(e){if(!(this instanceof Re))return new Re(e);this.hash=e.hash,this.predResist=!!e.predResist,this.outLen=this.hash.outSize,this.minEntropy=e.minEntropy||this.hash.hmacStrength,this._reseed=null,this.reseedInterval=null,this.K=null,this.V=null;var t=fe$1.toArray(e.entropy,e.entropyEnc||"hex"),r=fe$1.toArray(e.nonce,e.nonceEnc||"hex"),i=fe$1.toArray(e.pers,e.persEnc||"hex");Pi(t.length>=this.minEntropy/8,"Not enough entropy. Minimum is: "+this.minEntropy+" bits"),this._init(t,r,i);}var Rf=Re;Re.prototype._init=function(t,r,i){var n=t.concat(r).concat(i);this.K=new Array(this.outLen/8),this.V=new Array(this.outLen/8);for(var o=0;o<this.V.length;o++)this.K[o]=0,this.V[o]=1;this._update(n),this._reseed=1,this.reseedInterval=281474976710656;},Re.prototype._hmac=function(){return new se.hmac(this.hash,this.K)},Re.prototype._update=function(t){var r=this._hmac().update(this.V).update([0]);t&&(r=r.update(t)),this.K=r.digest(),this.V=this._hmac().update(this.V).digest(),t&&(this.K=this._hmac().update(this.V).update([1]).update(t).digest(),this.V=this._hmac().update(this.V).digest());},Re.prototype.reseed=function(t,r,i,n){typeof r!="string"&&(n=i,i=r,r=null),t=fe$1.toArray(t,r),i=fe$1.toArray(i,n),Pi(t.length>=this.minEntropy/8,"Not enough entropy. Minimum is: "+this.minEntropy+" bits"),this._update(t.concat(i||[])),this._reseed=1;},Re.prototype.generate=function(t,r,i,n){if(this._reseed>this.reseedInterval)throw new Error("Reseed is required");typeof r!="string"&&(n=i,i=r,r=null),i&&(i=fe$1.toArray(i,n||"hex"),this._update(i));for(var o=[];o.length<t;)this.V=this._hmac().update(this.V).digest(),o=o.concat(this.V);var h=o.slice(0,t);return this._update(i),this._reseed++,fe$1.encode(h,r)};var Fi=Jt$2.assert;function kt$1(e,t){this.ec=e,this.priv=null,this.pub=null,t.priv&&this._importPrivate(t.priv,t.privEnc),t.pub&&this._importPublic(t.pub,t.pubEnc);}var Ti=kt$1;kt$1.fromPublic=function(t,r,i){return r instanceof kt$1?r:new kt$1(t,{pub:r,pubEnc:i})},kt$1.fromPrivate=function(t,r,i){return r instanceof kt$1?r:new kt$1(t,{priv:r,privEnc:i})},kt$1.prototype.validate=function(){var t=this.getPublic();return t.isInfinity()?{result:!1,reason:"Invalid public key"}:t.validate()?t.mul(this.ec.curve.n).isInfinity()?{result:!0,reason:null}:{result:!1,reason:"Public key * N != O"}:{result:!1,reason:"Public key is not a point"}},kt$1.prototype.getPublic=function(t,r){return typeof t=="string"&&(r=t,t=null),this.pub||(this.pub=this.ec.g.mul(this.priv)),r?this.pub.encode(r,t):this.pub},kt$1.prototype.getPrivate=function(t){return t==="hex"?this.priv.toString(16,2):this.priv},kt$1.prototype._importPrivate=function(t,r){this.priv=new K$1(t,r||16),this.priv=this.priv.umod(this.ec.curve.n);},kt$1.prototype._importPublic=function(t,r){if(t.x||t.y){this.ec.curve.type==="mont"?Fi(t.x,"Need x coordinate"):(this.ec.curve.type==="short"||this.ec.curve.type==="edwards")&&Fi(t.x&&t.y,"Need both x and y coordinate"),this.pub=this.ec.curve.point(t.x,t.y);return}this.pub=this.ec.curve.decodePoint(t,r);},kt$1.prototype.derive=function(t){return t.validate()||Fi(t.validate(),"public point not validated"),t.mul(this.priv).getX()},kt$1.prototype.sign=function(t,r,i){return this.ec.sign(t,this,r,i)},kt$1.prototype.verify=function(t,r){return this.ec.verify(t,r,this)},kt$1.prototype.inspect=function(){return "<Key priv: "+(this.priv&&this.priv.toString(16,2))+" pub: "+(this.pub&&this.pub.inspect())+" >"};var qa=Jt$2.assert;function Hr(e,t){if(e instanceof Hr)return e;this._importDER(e,t)||(qa(e.r&&e.s,"Signature without r or s"),this.r=new K$1(e.r,16),this.s=new K$1(e.s,16),e.recoveryParam===void 0?this.recoveryParam=null:this.recoveryParam=e.recoveryParam);}var zr$1=Hr;function Ka(){this.place=0;}function Ui(e,t){var r=e[t.place++];if(!(r&128))return r;var i=r&15;if(i===0||i>4)return !1;for(var n=0,o=0,h=t.place;o<i;o++,h++)n<<=8,n|=e[h],n>>>=0;return n<=127?!1:(t.place=h,n)}function Of(e){for(var t=0,r=e.length-1;!e[t]&&!(e[t+1]&128)&&t<r;)t++;return t===0?e:e.slice(t)}Hr.prototype._importDER=function(t,r){t=Jt$2.toArray(t,r);var i=new Ka;if(t[i.place++]!==48)return !1;var n=Ui(t,i);if(n===!1||n+i.place!==t.length||t[i.place++]!==2)return !1;var o=Ui(t,i);if(o===!1)return !1;var h=t.slice(i.place,o+i.place);if(i.place+=o,t[i.place++]!==2)return !1;var p=Ui(t,i);if(p===!1||t.length!==p+i.place)return !1;var b=t.slice(i.place,p+i.place);if(h[0]===0)if(h[1]&128)h=h.slice(1);else return !1;if(b[0]===0)if(b[1]&128)b=b.slice(1);else return !1;return this.r=new K$1(h),this.s=new K$1(b),this.recoveryParam=null,!0};function ki(e,t){if(t<128){e.push(t);return}var r=1+(Math.log(t)/Math.LN2>>>3);for(e.push(r|128);--r;)e.push(t>>>(r<<3)&255);e.push(t);}Hr.prototype.toDER=function(t){var r=this.r.toArray(),i=this.s.toArray();for(r[0]&128&&(r=[0].concat(r)),i[0]&128&&(i=[0].concat(i)),r=Of(r),i=Of(i);!i[0]&&!(i[1]&128);)i=i.slice(1);var n=[2];ki(n,r.length),n=n.concat(r),n.push(2),ki(n,i.length);var o=n.concat(i),h=[48];return ki(h,o.length),h=h.concat(o),Jt$2.encode(h,t)};var Ha=function(){throw new Error("unsupported")},Pf=Jt$2.assert;function $t$1(e){if(!(this instanceof $t$1))return new $t$1(e);typeof e=="string"&&(Pf(Object.prototype.hasOwnProperty.call(Kr,e),"Unknown curve "+e),e=Kr[e]),e instanceof Kr.PresetCurve&&(e={curve:e}),this.curve=e.curve.curve,this.n=this.curve.n,this.nh=this.n.ushrn(1),this.g=this.curve.g,this.g=e.curve.g,this.g.precompute(e.curve.n.bitLength()+1),this.hash=e.hash||e.curve.hash;}var za=$t$1;$t$1.prototype.keyPair=function(t){return new Ti(this,t)},$t$1.prototype.keyFromPrivate=function(t,r){return Ti.fromPrivate(this,t,r)},$t$1.prototype.keyFromPublic=function(t,r){return Ti.fromPublic(this,t,r)},$t$1.prototype.genKeyPair=function(t){t||(t={});for(var r=new Rf({hash:this.hash,pers:t.pers,persEnc:t.persEnc||"utf8",entropy:t.entropy||Ha(this.hash.hmacStrength),entropyEnc:t.entropy&&t.entropyEnc||"utf8",nonce:this.n.toArray()}),i=this.n.byteLength(),n=this.n.sub(new K$1(2));;){var o=new K$1(r.generate(i));if(!(o.cmp(n)>0))return o.iaddn(1),this.keyFromPrivate(o)}},$t$1.prototype._truncateToN=function(t,r){var i=t.byteLength()*8-this.n.bitLength();return i>0&&(t=t.ushrn(i)),!r&&t.cmp(this.n)>=0?t.sub(this.n):t},$t$1.prototype.sign=function(t,r,i,n){typeof i=="object"&&(n=i,i=null),n||(n={}),r=this.keyFromPrivate(r,i),t=this._truncateToN(new K$1(t,16));for(var o=this.n.byteLength(),h=r.getPrivate().toArray("be",o),p=t.toArray("be",o),b=new Rf({hash:this.hash,entropy:h,nonce:p,pers:n.pers,persEnc:n.persEnc||"utf8"}),m=this.n.sub(new K$1(1)),w=0;;w++){var y=n.k?n.k(w):new K$1(b.generate(this.n.byteLength()));if(y=this._truncateToN(y,!0),!(y.cmpn(1)<=0||y.cmp(m)>=0)){var S=this.g.mul(y);if(!S.isInfinity()){var I=S.getX(),N=I.umod(this.n);if(N.cmpn(0)!==0){var C=y.invm(this.n).mul(N.mul(r.getPrivate()).iadd(t));if(C=C.umod(this.n),C.cmpn(0)!==0){var F=(S.getY().isOdd()?1:0)|(I.cmp(N)!==0?2:0);return n.canonical&&C.cmp(this.nh)>0&&(C=this.n.sub(C),F^=1),new zr$1({r:N,s:C,recoveryParam:F})}}}}}},$t$1.prototype.verify=function(t,r,i,n){t=this._truncateToN(new K$1(t,16)),i=this.keyFromPublic(i,n),r=new zr$1(r,"hex");var o=r.r,h=r.s;if(o.cmpn(1)<0||o.cmp(this.n)>=0||h.cmpn(1)<0||h.cmp(this.n)>=0)return !1;var p=h.invm(this.n),b=p.mul(t).umod(this.n),m=p.mul(o).umod(this.n),w;return this.curve._maxwellTrick?(w=this.g.jmulAdd(b,i.getPublic(),m),w.isInfinity()?!1:w.eqXToP(o)):(w=this.g.mulAdd(b,i.getPublic(),m),w.isInfinity()?!1:w.getX().umod(this.n).cmp(o)===0)},$t$1.prototype.recoverPubKey=function(e,t,r,i){Pf((3&r)===r,"The recovery param is more than two bits"),t=new zr$1(t,i);var n=this.n,o=new K$1(e),h=t.r,p=t.s,b=r&1,m=r>>1;if(h.cmp(this.curve.p.umod(this.curve.n))>=0&&m)throw new Error("Unable to find sencond key candinate");m?h=this.curve.pointFromX(h.add(this.curve.n),b):h=this.curve.pointFromX(h,b);var w=t.r.invm(n),y=n.sub(o).mul(w).umod(n),S=p.mul(w).umod(n);return this.g.mulAdd(y,h,S)},$t$1.prototype.getKeyRecoveryParam=function(e,t,r,i){if(t=new zr$1(t,i),t.recoveryParam!==null)return t.recoveryParam;for(var n=0;n<4;n++){var o;try{o=this.recoverPubKey(e,t,n);}catch{continue}if(o.eq(r))return n}throw new Error("Unable to find valid recovery factor")};var La=cr$1(function(e,t){var r=t;r.version="6.5.4",r.utils=Jt$2,r.rand=function(){throw new Error("unsupported")},r.curve=qr,r.curves=Kr,r.ec=za,r.eddsa=null;}),ja=La.ec;const Qa="signing-key/5.7.0",qi=new L$1(Qa);let Ki=null;function ve(){return Ki||(Ki=new ja("secp256k1")),Ki}class Ja{constructor(t){br(this,"curve","secp256k1"),br(this,"privateKey",Kt$1(t)),N0(this.privateKey)!==32&&qi.throwArgumentError("invalid private key","privateKey","[[ REDACTED ]]");const r=ve().keyFromPrivate(Ot$1(this.privateKey));br(this,"publicKey","0x"+r.getPublic(!1,"hex")),br(this,"compressedPublicKey","0x"+r.getPublic(!0,"hex")),br(this,"_isSigningKey",!0);}_addPoint(t){const r=ve().keyFromPublic(Ot$1(this.publicKey)),i=ve().keyFromPublic(Ot$1(t));return "0x"+r.pub.add(i.pub).encodeCompressed("hex")}signDigest(t){const r=ve().keyFromPrivate(Ot$1(this.privateKey)),i=Ot$1(t);i.length!==32&&qi.throwArgumentError("bad digest length","digest",t);const n=r.sign(i,{canonical:!0});return zn({recoveryParam:n.recoveryParam,r:oe$1("0x"+n.r.toString(16),32),s:oe$1("0x"+n.s.toString(16),32)})}computeSharedSecret(t){const r=ve().keyFromPrivate(Ot$1(this.privateKey)),i=ve().keyFromPublic(Ot$1(Df(t)));return oe$1("0x"+r.derive(i.getPublic()).toString(16),32)}static isSigningKey(t){return !!(t&&t._isSigningKey)}}function Ga(e,t){const r=zn(t),i={r:Ot$1(r.r),s:Ot$1(r.s)};return "0x"+ve().recoverPubKey(Ot$1(e),i,r.recoveryParam).encode("hex",!1)}function Df(e,t){const r=Ot$1(e);if(r.length===32){const i=new Ja(r);return i.publicKey}else {if(r.length===33)return "0x"+ve().keyFromPublic(r).getPublic(!1,"hex");if(r.length===65)return Kt$1(r)}return qi.throwArgumentError("invalid public or private key","key","[REDACTED]")}var Ff;(function(e){e[e.legacy=0]="legacy",e[e.eip2930=1]="eip2930",e[e.eip1559=2]="eip1559";})(Ff||(Ff={}));function Va(e){const t=Df(e);return ns$2(Hn(yi(Hn(t,1)),12))}function Wa(e,t){return Va(Ga(Ot$1(e),t))}const Xa="https://rpc.walletconnect.com/v1";async function Tf(e,t,r,i,n,o){switch(r.t){case"eip191":return Uf(e,t,r.s);case"eip1271":return await kf(e,t,r.s,i,n,o);default:throw new Error(`verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${r.t}`)}}function Uf(e,t,r){return Wa(ff(t),r).toLowerCase()===e.toLowerCase()}async function kf(e,t,r,i,n,o){try{const h="0x1626ba7e",p="0000000000000000000000000000000000000000000000000000000000000040",b="0000000000000000000000000000000000000000000000000000000000000041",m=r.substring(2),w=ff(t).substring(2),y=h+w+p+b+m,S=await fetch(`${o||Xa}/?chainId=${i}&projectId=${n}`,{method:"POST",body:JSON.stringify({id:Za(),jsonrpc:"2.0",method:"eth_call",params:[{to:e,data:y},"latest"]})}),{result:I}=await S.json();return I?I.slice(0,h.length).toLowerCase()===h.toLowerCase():!1}catch(h){return console.error("isValidEip1271Signature: ",h),!1}}function Za(){return Date.now()+Math.floor(Math.random()*1e3)}var $a=Object.defineProperty,tu=Object.defineProperties,eu=Object.getOwnPropertyDescriptors,qf=Object.getOwnPropertySymbols,ru=Object.prototype.hasOwnProperty,iu=Object.prototype.propertyIsEnumerable,Kf=(e,t,r)=>t in e?$a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Hi$1=(e,t)=>{for(var r in t||(t={}))ru.call(t,r)&&Kf(e,r,t[r]);if(qf)for(var r of qf(t))iu.call(t,r)&&Kf(e,r,t[r]);return e},Hf=(e,t)=>tu(e,eu(t));const nu="did:pkh:",Lr$1=e=>e?.split(":"),zi=e=>{const t=e&&Lr$1(e);if(t)return e.includes(nu)?t[3]:t[1]},fu=e=>{const t=e&&Lr$1(e);if(t)return t[2]+":"+t[3]},Li=e=>{const t=e&&Lr$1(e);if(t)return t.pop()};async function ou(e){const{cacao:t,projectId:r}=e,{s:i,p:n}=t,o=zf(n,n.iss),h=Li(n.iss);return await Tf(h,o,i,zi(n.iss),r)}const zf=(e,t)=>{const r=`${e.domain} wants you to sign in with your Ethereum account:`,i=Li(t);if(!e.aud&&!e.uri)throw new Error("Either `aud` or `uri` is required to construct the message");let n=e.statement||void 0;const o=`URI: ${e.aud||e.uri}`,h=`Version: ${e.version}`,p=`Chain ID: ${zi(t)}`,b=`Nonce: ${e.nonce}`,m=`Issued At: ${e.iat}`,w=e.exp?`Expiration Time: ${e.exp}`:void 0,y=e.nbf?`Not Before: ${e.nbf}`:void 0,S=e.requestId?`Request ID: ${e.requestId}`:void 0,I=e.resources?`Resources:${e.resources.map(C=>`
- ${C}`).join("")}`:void 0,N=Qr(e.resources);if(N){const C=Oe(N);n=Ji$1(n,C);}return [r,i,"",n,"",o,h,p,b,m,w,y,S,I].filter(C=>C!=null).join(`
`)};function Jf(e){return Buffer$1.from(JSON.stringify(e)).toString("base64")}function Gf(e){return JSON.parse(Buffer$1.from(e,"base64").toString("utf-8"))}function me$1(e){if(!e)throw new Error("No recap provided, value is undefined");if(!e.att)throw new Error("No `att` property found");const t=Object.keys(e.att);if(!(t!=null&&t.length))throw new Error("No resources found in `att` property");t.forEach(r=>{const i=e.att[r];if(Array.isArray(i))throw new Error(`Resource must be an object: ${r}`);if(typeof i!="object")throw new Error(`Resource must be an object: ${r}`);if(!Object.keys(i).length)throw new Error(`Resource object is empty: ${r}`);Object.keys(i).forEach(n=>{const o=i[n];if(!Array.isArray(o))throw new Error(`Ability limits ${n} must be an array of objects, found: ${o}`);if(!o.length)throw new Error(`Value of ${n} is empty array, must be an array with objects`);o.forEach(h=>{if(typeof h!="object")throw new Error(`Ability limits (${n}) must be an array of objects, found: ${h}`)});});});}function Yf(e,t,r,i={}){return r?.sort((n,o)=>n.localeCompare(o)),{att:{[e]:ji$1(t,r,i)}}}function ji$1(e,t,r={}){t=t?.sort((n,o)=>n.localeCompare(o));const i=t.map(n=>({[`${e}/${n}`]:[r]}));return Object.assign({},...i)}function jr(e){return me$1(e),`urn:recap:${Jf(e).replace(/=/g,"")}`}function Oe(e){const t=Gf(e.replace("urn:recap:",""));return me$1(t),t}function cu(e,t,r){const i=Yf(e,t,r);return jr(i)}function Qi$1(e){return e&&e.includes("urn:recap:")}function lu(e,t){const r=Oe(e),i=Oe(t),n=Wf(r,i);return jr(n)}function Wf(e,t){me$1(e),me$1(t);const r=Object.keys(e.att).concat(Object.keys(t.att)).sort((n,o)=>n.localeCompare(o)),i={att:{}};return r.forEach(n=>{var o,h;Object.keys(((o=e.att)==null?void 0:o[n])||{}).concat(Object.keys(((h=t.att)==null?void 0:h[n])||{})).sort((p,b)=>p.localeCompare(b)).forEach(p=>{var b,m;i.att[n]=Hf(Hi$1({},i.att[n]),{[p]:((b=e.att[n])==null?void 0:b[p])||((m=t.att[n])==null?void 0:m[p])});});}),i}function Ji$1(e="",t){me$1(t);const r="I further authorize the stated URI to perform the following actions on my behalf: ";if(e.includes(r))return e;const i=[];let n=0;Object.keys(t.att).forEach(p=>{const b=Object.keys(t.att[p]).map(y=>({ability:y.split("/")[0],action:y.split("/")[1]}));b.sort((y,S)=>y.action.localeCompare(S.action));const m={};b.forEach(y=>{m[y.ability]||(m[y.ability]=[]),m[y.ability].push(y.action);});const w=Object.keys(m).map(y=>(n++,`(${n}) '${y}': '${m[y].join("', '")}' for '${p}'.`));i.push(w.join(", ").replace(".,","."));});const o=i.join(" "),h=`${r}${o}`;return `${e?e+" ":""}${h}`}function du(e){var t;const r=Oe(e);me$1(r);const i=(t=r.att)==null?void 0:t.eip155;return i?Object.keys(i).map(n=>n.split("/")[1]):[]}function pu(e){const t=Oe(e);me$1(t);const r=[];return Object.values(t.att).forEach(i=>{Object.values(i).forEach(n=>{var o;(o=n?.[0])!=null&&o.chains&&r.push(n[0].chains);});}),[...new Set(r.flat())]}function Qr(e){if(!e)return;const t=e?.[e.length-1];return Qi$1(t)?t:void 0}const Gi$1="base10",zt$1="base16",Jr="base64pad",Gr="utf8",Yi$1=0,lr$1=1,vu=0,Zf=1,Vi=12,Wi$1=32;function mu(){const e=x25519.generateKeyPair();return {privateKey:toString$1(e.secretKey,zt$1),publicKey:toString$1(e.publicKey,zt$1)}}function gu(){const e=random.randomBytes(Wi$1);return toString$1(e,zt$1)}function Au(e,t){const r=x25519.sharedKey(fromString$1(e,zt$1),fromString$1(t,zt$1),!0),i=new HKDF_1(sha256.SHA256,r).expand(Wi$1);return toString$1(i,zt$1)}function bu(e){const t=sha256.hash(fromString$1(e,zt$1));return toString$1(t,zt$1)}function yu(e){const t=sha256.hash(fromString$1(e,Gr));return toString$1(t,zt$1)}function $f(e){return fromString$1(`${e}`,Gi$1)}function Mr$1(e){return Number(toString$1(e,Gi$1))}function wu(e){const t=$f(typeof e.type<"u"?e.type:Yi$1);if(Mr$1(t)===lr$1&&typeof e.senderPublicKey>"u")throw new Error("Missing sender public key for type 1 envelope");const r=typeof e.senderPublicKey<"u"?fromString$1(e.senderPublicKey,zt$1):void 0,i=typeof e.iv<"u"?fromString$1(e.iv,zt$1):random.randomBytes(Vi),n=new chacha20poly1305.ChaCha20Poly1305(fromString$1(e.symKey,zt$1)).seal(i,fromString$1(e.message,Gr));return to({type:t,sealed:n,iv:i,senderPublicKey:r})}function xu(e){const t=new chacha20poly1305.ChaCha20Poly1305(fromString$1(e.symKey,zt$1)),{sealed:r,iv:i}=Xi$1(e.encoded),n=t.open(i,r);if(n===null)throw new Error("Failed to decrypt");return toString$1(n,Gr)}function to(e){if(Mr$1(e.type)===lr$1){if(typeof e.senderPublicKey>"u")throw new Error("Missing sender public key for type 1 envelope");return toString$1(concat([e.type,e.senderPublicKey,e.iv,e.sealed]),Jr)}return toString$1(concat([e.type,e.iv,e.sealed]),Jr)}function Xi$1(e){const t=fromString$1(e,Jr),r=t.slice(vu,Zf),i=Zf;if(Mr$1(r)===lr$1){const p=i+Wi$1,b=p+Vi,m=t.slice(i,p),w=t.slice(p,b),y=t.slice(b);return {type:r,sealed:y,iv:w,senderPublicKey:m}}const n=i+Vi,o=t.slice(i,n),h=t.slice(n);return {type:r,sealed:h,iv:o}}function Mu(e,t){const r=Xi$1(e);return eo({type:Mr$1(r.type),senderPublicKey:typeof r.senderPublicKey<"u"?toString$1(r.senderPublicKey,zt$1):void 0,receiverPublicKey:t?.receiverPublicKey})}function eo(e){const t=e?.type||Yi$1;if(t===lr$1){if(typeof e?.senderPublicKey>"u")throw new Error("missing sender public key");if(typeof e?.receiverPublicKey>"u")throw new Error("missing receiver public key")}return {type:t,senderPublicKey:e?.senderPublicKey,receiverPublicKey:e?.receiverPublicKey}}function Eu(e){return e.type===lr$1&&typeof e.senderPublicKey=="string"&&typeof e.receiverPublicKey=="string"}const ro="irn";function Su(e){return e?.relay||{protocol:ro}}function Nu(e){const t=C$1[e];if(typeof t>"u")throw new Error(`Relay Protocol not supported: ${e}`);return t}var Iu=Object.defineProperty,_u=Object.defineProperties,Bu=Object.getOwnPropertyDescriptors,io=Object.getOwnPropertySymbols,Cu=Object.prototype.hasOwnProperty,Ru=Object.prototype.propertyIsEnumerable,no=(e,t,r)=>t in e?Iu(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,fo=(e,t)=>{for(var r in t||(t={}))Cu.call(t,r)&&no(e,r,t[r]);if(io)for(var r of io(t))Ru.call(t,r)&&no(e,r,t[r]);return e},Ou=(e,t)=>_u(e,Bu(t));function oo(e,t="-"){const r={},i="relay"+t;return Object.keys(e).forEach(n=>{if(n.startsWith(i)){const o=n.replace(i,""),h=e[n];r[o]=h;}}),r}function Pu(e){e=e.includes("wc://")?e.replace("wc://",""):e,e=e.includes("wc:")?e.replace("wc:",""):e;const t=e.indexOf(":"),r=e.indexOf("?")!==-1?e.indexOf("?"):void 0,i=e.substring(0,t),n=e.substring(t+1,r).split("@"),o=typeof r<"u"?e.substring(r):"",h=queryString.parse(o),p=typeof h.methods=="string"?h.methods.split(","):void 0;return {protocol:i,topic:so(n[0]),version:parseInt(n[1],10),symKey:h.symKey,relay:oo(h),methods:p,expiryTimestamp:h.expiryTimestamp?parseInt(h.expiryTimestamp,10):void 0}}function so(e){return e.startsWith("//")?e.substring(2):e}function ao(e,t="-"){const r="relay",i={};return Object.keys(e).forEach(n=>{const o=r+t+n;e[n]&&(i[o]=e[n]);}),i}function Du(e){return `${e.protocol}:${e.topic}@${e.version}?`+queryString.stringify(fo(Ou(fo({symKey:e.symKey},ao(e.relay)),{expiryTimestamp:e.expiryTimestamp}),e.methods?{methods:e.methods.join(",")}:{}))}function $e$1(e){const t=[];return e.forEach(r=>{const[i,n]=r.split(":");t.push(`${i}:${n}`);}),t}function co(e){const t=[];return Object.values(e).forEach(r=>{t.push(...$e$1(r.accounts));}),t}function lo(e,t){const r=[];return Object.values(e).forEach(i=>{$e$1(i.accounts).includes(t)&&r.push(...i.methods);}),r}function po(e,t){const r=[];return Object.values(e).forEach(i=>{$e$1(i.accounts).includes(t)&&r.push(...i.events);}),r}function mo(e){const t={};return e?.forEach(r=>{const[i,n]=r.split(":");t[i]||(t[i]={accounts:[],chains:[],events:[]}),t[i].accounts.push(r),t[i].chains.push(`${i}:${n}`);}),t}function ju(e,t){t=t.map(i=>i.replace("did:pkh:",""));const r=mo(t);for(const[i,n]of Object.entries(r))n.methods?n.methods=ge$1(n.methods,e):n.methods=e,n.events=["chainChanged","accountsChanged"];return r}const go={INVALID_METHOD:{message:"Invalid method.",code:1001},INVALID_EVENT:{message:"Invalid event.",code:1002},INVALID_UPDATE_REQUEST:{message:"Invalid update request.",code:1003},INVALID_EXTEND_REQUEST:{message:"Invalid extend request.",code:1004},INVALID_SESSION_SETTLE_REQUEST:{message:"Invalid session settle request.",code:1005},UNAUTHORIZED_METHOD:{message:"Unauthorized method.",code:3001},UNAUTHORIZED_EVENT:{message:"Unauthorized event.",code:3002},UNAUTHORIZED_UPDATE_REQUEST:{message:"Unauthorized update request.",code:3003},UNAUTHORIZED_EXTEND_REQUEST:{message:"Unauthorized extend request.",code:3004},USER_REJECTED:{message:"User rejected.",code:5e3},USER_REJECTED_CHAINS:{message:"User rejected chains.",code:5001},USER_REJECTED_METHODS:{message:"User rejected methods.",code:5002},USER_REJECTED_EVENTS:{message:"User rejected events.",code:5003},UNSUPPORTED_CHAINS:{message:"Unsupported chains.",code:5100},UNSUPPORTED_METHODS:{message:"Unsupported methods.",code:5101},UNSUPPORTED_EVENTS:{message:"Unsupported events.",code:5102},UNSUPPORTED_ACCOUNTS:{message:"Unsupported accounts.",code:5103},UNSUPPORTED_NAMESPACE_KEY:{message:"Unsupported namespace key.",code:5104},USER_DISCONNECTED:{message:"User disconnected.",code:6e3},SESSION_SETTLEMENT_FAILED:{message:"Session settlement failed.",code:7e3},WC_METHOD_UNSUPPORTED:{message:"Unsupported wc_ method.",code:10001}},Ao={NOT_INITIALIZED:{message:"Not initialized.",code:1},NO_MATCHING_KEY:{message:"No matching key.",code:2},RESTORE_WILL_OVERRIDE:{message:"Restore will override.",code:3},RESUBSCRIBED:{message:"Resubscribed.",code:4},MISSING_OR_INVALID:{message:"Missing or invalid.",code:5},EXPIRED:{message:"Expired.",code:6},UNKNOWN_TYPE:{message:"Unknown type.",code:7},MISMATCHED_TOPIC:{message:"Mismatched topic.",code:8},NON_CONFORMING_NAMESPACES:{message:"Non conforming namespaces.",code:9}};function xe(e,t){const{message:r,code:i}=Ao[e];return {message:t?`${r} ${t}`:r,code:i}}function tr$1(e,t){const{message:r,code:i}=go[e];return {message:t?`${r} ${t}`:r,code:i}}function Er(e,t){return Array.isArray(e)?!0:!1}function Yr(e){return Object.getPrototypeOf(e)===Object.prototype&&Object.keys(e).length}function Pe(e){return typeof e>"u"}function Gt$1(e,t){return t&&Pe(e)?!0:typeof e=="string"&&!!e.trim().length}function Vr(e,t){return typeof e=="number"&&!isNaN(e)}function Qu(e,t){const{requiredNamespaces:r}=t,i=Object.keys(e.namespaces),n=Object.keys(r);let o=!0;return _e$1(n,i)?(i.forEach(h=>{const{accounts:p,methods:b,events:m}=e.namespaces[h],w=$e$1(p),y=r[h];(!_e$1(_r$1(h,y),w)||!_e$1(y.methods,b)||!_e$1(y.events,m))&&(o=!1);}),o):!1}function Sr$1(e){return Gt$1(e,!1)&&e.includes(":")?e.split(":").length===2:!1}function bo(e){if(Gt$1(e,!1)&&e.includes(":")){const t=e.split(":");if(t.length===3){const r=t[0]+":"+t[1];return !!t[2]&&Sr$1(r)}}return !1}function Ju(e){if(Gt$1(e,!1))try{return typeof new URL(e)<"u"}catch{return !1}return !1}function Gu(e){var t;return (t=e?.proposer)==null?void 0:t.publicKey}function Yu(e){return e?.topic}function Vu(e,t){let r=null;return Gt$1(e?.publicKey,!1)||(r=xe("MISSING_OR_INVALID",`${t} controller public key should be a string`)),r}function tn(e){let t=!0;return Er(e)?e.length&&(t=e.every(r=>Gt$1(r,!1))):t=!1,t}function yo(e,t,r){let i=null;return Er(t)&&t.length?t.forEach(n=>{i||Sr$1(n)||(i=tr$1("UNSUPPORTED_CHAINS",`${r}, chain ${n} should be a string and conform to "namespace:chainId" format`));}):Sr$1(e)||(i=tr$1("UNSUPPORTED_CHAINS",`${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)),i}function wo(e,t,r){let i=null;return Object.entries(e).forEach(([n,o])=>{if(i)return;const h=yo(n,_r$1(n,o),`${t} ${r}`);h&&(i=h);}),i}function xo(e,t){let r=null;return Er(e)?e.forEach(i=>{r||bo(i)||(r=tr$1("UNSUPPORTED_ACCOUNTS",`${t}, account ${i} should be a string and conform to "namespace:chainId:address" format`));}):r=tr$1("UNSUPPORTED_ACCOUNTS",`${t}, accounts should be an array of strings conforming to "namespace:chainId:address" format`),r}function Mo(e,t){let r=null;return Object.values(e).forEach(i=>{if(r)return;const n=xo(i?.accounts,`${t} namespace`);n&&(r=n);}),r}function Eo(e,t){let r=null;return tn(e?.methods)?tn(e?.events)||(r=tr$1("UNSUPPORTED_EVENTS",`${t}, events should be an array of strings or empty array for no events`)):r=tr$1("UNSUPPORTED_METHODS",`${t}, methods should be an array of strings or empty array for no methods`),r}function en(e,t){let r=null;return Object.values(e).forEach(i=>{if(r)return;const n=Eo(i,`${t}, namespace`);n&&(r=n);}),r}function Wu(e,t,r){let i=null;if(e&&Yr(e)){const n=en(e,t);n&&(i=n);const o=wo(e,t,r);o&&(i=o);}else i=xe("MISSING_OR_INVALID",`${t}, ${r} should be an object with data`);return i}function So(e,t){let r=null;if(e&&Yr(e)){const i=en(e,t);i&&(r=i);const n=Mo(e,t);n&&(r=n);}else r=xe("MISSING_OR_INVALID",`${t}, namespaces should be an object with data`);return r}function No(e){return Gt$1(e.protocol,!0)}function Xu(e,t){let r=!1;return !e?r=!0:e&&Er(e)&&e.length&&e.forEach(i=>{r=No(i);}),r}function Zu(e){return typeof e=="number"}function $u(e){return typeof e<"u"&&typeof e!==null}function th(e){return !(!e||typeof e!="object"||!e.code||!Vr(e.code)||!e.message||!Gt$1(e.message,!1))}function eh(e){return !(Pe(e)||!Gt$1(e.method,!1))}function rh(e){return !(Pe(e)||Pe(e.result)&&Pe(e.error)||!Vr(e.id)||!Gt$1(e.jsonrpc,!1))}function ih(e){return !(Pe(e)||!Gt$1(e.name,!1))}function nh(e,t){return !(!Sr$1(t)||!co(e).includes(t))}function fh(e,t,r){return Gt$1(r,!1)?lo(e,t).includes(r):!1}function oh(e,t,r){return Gt$1(r,!1)?po(e,t).includes(r):!1}function Io(e,t,r){let i=null;const n=sh(e),o=ah(t),h=Object.keys(n),p=Object.keys(o),b=_o(Object.keys(e)),m=_o(Object.keys(t)),w=b.filter(y=>!m.includes(y));return w.length&&(i=xe("NON_CONFORMING_NAMESPACES",`${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${w.toString()}
      Received: ${Object.keys(t).toString()}`)),_e$1(h,p)||(i=xe("NON_CONFORMING_NAMESPACES",`${r} namespaces chains don't satisfy required namespaces.
      Required: ${h.toString()}
      Approved: ${p.toString()}`)),Object.keys(t).forEach(y=>{if(!y.includes(":")||i)return;const S=$e$1(t[y].accounts);S.includes(y)||(i=xe("NON_CONFORMING_NAMESPACES",`${r} namespaces accounts don't satisfy namespace accounts for ${y}
        Required: ${y}
        Approved: ${S.toString()}`));}),h.forEach(y=>{i||(_e$1(n[y].methods,o[y].methods)?_e$1(n[y].events,o[y].events)||(i=xe("NON_CONFORMING_NAMESPACES",`${r} namespaces events don't satisfy namespace events for ${y}`)):i=xe("NON_CONFORMING_NAMESPACES",`${r} namespaces methods don't satisfy namespace methods for ${y}`));}),i}function sh(e){const t={};return Object.keys(e).forEach(r=>{var i;r.includes(":")?t[r]=e[r]:(i=e[r].chains)==null||i.forEach(n=>{t[n]={methods:e[r].methods,events:e[r].events};});}),t}function _o(e){return [...new Set(e.map(t=>t.includes(":")?t.split(":")[0]:t))]}function ah(e){const t={};return Object.keys(e).forEach(r=>{if(r.includes(":"))t[r]=e[r];else {const i=$e$1(e[r].accounts);i?.forEach(n=>{t[n]={accounts:e[r].accounts.filter(o=>o.includes(`${n}:`)),methods:e[r].methods,events:e[r].events};});}}),t}function uh(e,t){return Vr(e)&&e<=t.max&&e>=t.min}function hh(){const e=We$2();return new Promise(t=>{switch(e){case qt$1.browser:t(Bo());break;case qt$1.reactNative:t(Co());break;case qt$1.node:t(Ro());break;default:t(!0);}})}function Bo(){return pr$1()&&navigator?.onLine}async function Co(){if(er$1()&&typeof global$1<"u"&&global$1!=null&&global$1.NetInfo){const e=await(global$1==null?void 0:global$1.NetInfo.fetch());return e?.isConnected}return !0}function Ro(){return !0}function ch(e){switch(We$2()){case qt$1.browser:Oo(e);break;case qt$1.reactNative:Po(e);break;}}function Oo(e){!er$1()&&pr$1()&&(window.addEventListener("online",()=>e(!0)),window.addEventListener("offline",()=>e(!1)));}function Po(e){er$1()&&typeof global$1<"u"&&global$1!=null&&global$1.NetInfo&&global$1?.NetInfo.addEventListener(t=>e(t?.isConnected));}const rn={};class lh{static get(t){return rn[t]}static set(t,r){rn[t]=r;}static delete(t){delete rn[t];}}

const PARSE_ERROR = "PARSE_ERROR";
const INVALID_REQUEST = "INVALID_REQUEST";
const METHOD_NOT_FOUND = "METHOD_NOT_FOUND";
const INVALID_PARAMS = "INVALID_PARAMS";
const INTERNAL_ERROR = "INTERNAL_ERROR";
const SERVER_ERROR = "SERVER_ERROR";
const RESERVED_ERROR_CODES = [-32700, -32600, -32601, -32602, -32603];
const STANDARD_ERROR_MAP = {
    [PARSE_ERROR]: { code: -32700, message: "Parse error" },
    [INVALID_REQUEST]: { code: -32600, message: "Invalid Request" },
    [METHOD_NOT_FOUND]: { code: -32601, message: "Method not found" },
    [INVALID_PARAMS]: { code: -32602, message: "Invalid params" },
    [INTERNAL_ERROR]: { code: -32603, message: "Internal error" },
    [SERVER_ERROR]: { code: -32000, message: "Server error" },
};
const DEFAULT_ERROR = SERVER_ERROR;

function isReservedErrorCode(code) {
    return RESERVED_ERROR_CODES.includes(code);
}
function getError(type) {
    if (!Object.keys(STANDARD_ERROR_MAP).includes(type)) {
        return STANDARD_ERROR_MAP[DEFAULT_ERROR];
    }
    return STANDARD_ERROR_MAP[type];
}
function getErrorByCode(code) {
    const match = Object.values(STANDARD_ERROR_MAP).find(e => e.code === code);
    if (!match) {
        return STANDARD_ERROR_MAP[DEFAULT_ERROR];
    }
    return match;
}
function parseConnectionError(e, url, type) {
    return e.message.includes("getaddrinfo ENOTFOUND") || e.message.includes("connect ECONNREFUSED")
        ? new Error(`Unavailable ${type} RPC url at ${url}`)
        : e;
}

var cjs = {};

var crypto$1 = {};

var hasRequiredCrypto;

function requireCrypto () {
	if (hasRequiredCrypto) return crypto$1;
	hasRequiredCrypto = 1;
	Object.defineProperty(crypto$1, "__esModule", { value: true });
	crypto$1.isBrowserCryptoAvailable = crypto$1.getSubtleCrypto = crypto$1.getBrowerCrypto = void 0;
	function getBrowerCrypto() {
	    return (commonjsGlobal === null || commonjsGlobal === void 0 ? void 0 : commonjsGlobal.crypto) || (commonjsGlobal === null || commonjsGlobal === void 0 ? void 0 : commonjsGlobal.msCrypto) || {};
	}
	crypto$1.getBrowerCrypto = getBrowerCrypto;
	function getSubtleCrypto() {
	    const browserCrypto = getBrowerCrypto();
	    return browserCrypto.subtle || browserCrypto.webkitSubtle;
	}
	crypto$1.getSubtleCrypto = getSubtleCrypto;
	function isBrowserCryptoAvailable() {
	    return !!getBrowerCrypto() && !!getSubtleCrypto();
	}
	crypto$1.isBrowserCryptoAvailable = isBrowserCryptoAvailable;
	
	return crypto$1;
}

var env = {};

var hasRequiredEnv;

function requireEnv () {
	if (hasRequiredEnv) return env;
	hasRequiredEnv = 1;
	Object.defineProperty(env, "__esModule", { value: true });
	env.isBrowser = env.isNode = env.isReactNative = void 0;
	function isReactNative() {
	    return (typeof document === "undefined" &&
	        typeof navigator !== "undefined" &&
	        navigator.product === "ReactNative");
	}
	env.isReactNative = isReactNative;
	function isNode() {
	    return (typeof browser$1$1 !== "undefined" &&
	        typeof browser$1$1.versions !== "undefined" &&
	        typeof browser$1$1.versions.node !== "undefined");
	}
	env.isNode = isNode;
	function isBrowser() {
	    return !isReactNative() && !isNode();
	}
	env.isBrowser = isBrowser;
	
	return env;
}

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = require$$0$1;
	tslib_1.__exportStar(requireCrypto(), exports);
	tslib_1.__exportStar(requireEnv(), exports);
	
} (cjs));

function payloadId(entropy = 3) {
    const date = Date.now() * Math.pow(10, entropy);
    const extra = Math.floor(Math.random() * Math.pow(10, entropy));
    return date + extra;
}
function getBigIntRpcId(entropy = 6) {
    return BigInt(payloadId(entropy));
}
function formatJsonRpcRequest(method, params, id) {
    return {
        id: id || payloadId(),
        jsonrpc: "2.0",
        method,
        params,
    };
}
function formatJsonRpcResult(id, result) {
    return {
        id,
        jsonrpc: "2.0",
        result,
    };
}
function formatJsonRpcError(id, error, data) {
    return {
        id,
        jsonrpc: "2.0",
        error: formatErrorMessage(error),
    };
}
function formatErrorMessage(error, data) {
    if (typeof error === "undefined") {
        return getError(INTERNAL_ERROR);
    }
    if (typeof error === "string") {
        error = Object.assign(Object.assign({}, getError(SERVER_ERROR)), { message: error });
    }
    if (isReservedErrorCode(error.code)) {
        error = getErrorByCode(error.code);
    }
    return error;
}

class e{}class n extends e{constructor(){super();}}class r extends n{constructor(c){super();}}

const WS_REGEX = "^wss?:";
function getUrlProtocol(url) {
    const matches = url.match(new RegExp(/^\w+:/, "gi"));
    if (!matches || !matches.length)
        return;
    return matches[0];
}
function matchRegexProtocol(url, regex) {
    const protocol = getUrlProtocol(url);
    if (typeof protocol === "undefined")
        return false;
    return new RegExp(regex).test(protocol);
}
function isWsUrl(url) {
    return matchRegexProtocol(url, WS_REGEX);
}
function isLocalhostUrl(url) {
    return new RegExp("wss?://localhost(:d{2,5})?").test(url);
}

function isJsonRpcPayload(payload) {
    return (typeof payload === "object" &&
        "id" in payload &&
        "jsonrpc" in payload &&
        payload.jsonrpc === "2.0");
}
function isJsonRpcRequest(payload) {
    return isJsonRpcPayload(payload) && "method" in payload;
}
function isJsonRpcResponse(payload) {
    return isJsonRpcPayload(payload) && (isJsonRpcResult(payload) || isJsonRpcError(payload));
}
function isJsonRpcResult(payload) {
    return "result" in payload;
}
function isJsonRpcError(payload) {
    return "error" in payload;
}

class o extends r{constructor(t){super(t),this.events=new EventEmitter,this.hasRegisteredEventListeners=!1,this.connection=this.setConnection(t),this.connection.connected&&this.registerEventListeners();}async connect(t=this.connection){await this.open(t);}async disconnect(){await this.close();}on(t,e){this.events.on(t,e);}once(t,e){this.events.once(t,e);}off(t,e){this.events.off(t,e);}removeListener(t,e){this.events.removeListener(t,e);}async request(t,e){return this.requestStrict(formatJsonRpcRequest(t.method,t.params||[],t.id||getBigIntRpcId().toString()),e)}async requestStrict(t,e){return new Promise(async(i,s)=>{if(!this.connection.connected)try{await this.open();}catch(n){s(n);}this.events.on(`${t.id}`,n=>{isJsonRpcError(n)?s(n.error):i(n.result);});try{await this.connection.send(t,e);}catch(n){s(n);}})}setConnection(t=this.connection){return t}onPayload(t){this.events.emit("payload",t),isJsonRpcResponse(t)?this.events.emit(`${t.id}`,t):this.events.emit("message",{type:t.method,data:t.params});}onClose(t){t&&t.code===3e3&&this.events.emit("error",new Error(`WebSocket connection closed abnormally with code: ${t.code} ${t.reason?`(${t.reason})`:""}`)),this.events.emit("disconnect");}async open(t=this.connection){this.connection===t&&this.connection.connected||(this.connection.connected&&this.close(),typeof t=="string"&&(await this.connection.open(t),t=this.connection),this.connection=this.setConnection(t),await this.connection.open(),this.registerEventListeners(),this.events.emit("connect"));}async close(){await this.connection.close();}registerEventListeners(){this.hasRegisteredEventListeners||(this.connection.on("payload",t=>this.onPayload(t)),this.connection.on("close",t=>this.onClose(t)),this.connection.on("error",t=>this.events.emit("error",t)),this.connection.on("register_error",t=>this.onClose()),this.hasRegisteredEventListeners=!0);}}

const w=()=>typeof WebSocket<"u"?WebSocket:typeof global$1<"u"&&typeof global$1.WebSocket<"u"?global$1.WebSocket:typeof window<"u"&&typeof window.WebSocket<"u"?window.WebSocket:typeof self<"u"&&typeof self.WebSocket<"u"?self.WebSocket:require("ws"),b=()=>typeof WebSocket<"u"||typeof global$1<"u"&&typeof global$1.WebSocket<"u"||typeof window<"u"&&typeof window.WebSocket<"u"||typeof self<"u"&&typeof self.WebSocket<"u",a=c=>c.split("?")[0],h=10,S$1=w();let f$1 = class f{constructor(e){if(this.url=e,this.events=new EventEmitter,this.registering=!1,!isWsUrl(e))throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);this.url=e;}get connected(){return typeof this.socket<"u"}get connecting(){return this.registering}on(e,t){this.events.on(e,t);}once(e,t){this.events.once(e,t);}off(e,t){this.events.off(e,t);}removeListener(e,t){this.events.removeListener(e,t);}async open(e=this.url){await this.register(e);}async close(){return new Promise((e,t)=>{if(typeof this.socket>"u"){t(new Error("Connection already closed"));return}this.socket.onclose=n=>{this.onClose(n),e();},this.socket.close();})}async send(e){typeof this.socket>"u"&&(this.socket=await this.register());try{this.socket.send(safeJsonStringify(e));}catch(t){this.onError(e.id,t);}}register(e=this.url){if(!isWsUrl(e))throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);if(this.registering){const t=this.events.getMaxListeners();return (this.events.listenerCount("register_error")>=t||this.events.listenerCount("open")>=t)&&this.events.setMaxListeners(t+1),new Promise((n,o)=>{this.events.once("register_error",s=>{this.resetMaxListeners(),o(s);}),this.events.once("open",()=>{if(this.resetMaxListeners(),typeof this.socket>"u")return o(new Error("WebSocket connection is missing or invalid"));n(this.socket);});})}return this.url=e,this.registering=!0,new Promise((t,n)=>{const o=new URLSearchParams(e).get("origin"),s=cjs.isReactNative()?{headers:{origin:o}}:{rejectUnauthorized:!isLocalhostUrl(e)},i=new S$1(e,[],s);b()?i.onerror=r=>{const l=r;n(this.emitError(l.error));}:i.on("error",r=>{n(this.emitError(r));}),i.onopen=()=>{this.onOpen(i),t(i);};})}onOpen(e){e.onmessage=t=>this.onPayload(t),e.onclose=t=>this.onClose(t),this.socket=e,this.registering=!1,this.events.emit("open");}onClose(e){this.socket=void 0,this.registering=!1,this.events.emit("close",e);}onPayload(e){if(typeof e.data>"u")return;const t=typeof e.data=="string"?safeJsonParse(e.data):e.data;this.events.emit("payload",t);}onError(e,t){const n=this.parseError(t),o=n.message||n.toString(),s=formatJsonRpcError(e,o);this.events.emit("payload",s);}parseError(e,t=this.url){return parseConnectionError(e,a(t),"WS")}resetMaxListeners(){this.events.getMaxListeners()>h&&this.events.setMaxListeners(h);}emitError(e){const t=this.parseError(new Error(e?.message||`WebSocket connection failed for host: ${a(this.url)}`));return this.events.emit("register_error",t),t}};

var lodash_isequal = {exports: {}};

/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
lodash_isequal.exports;

(function (module, exports) {
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    asyncTag = '[object AsyncFunction]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    nullTag = '[object Null]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    proxyTag = '[object Proxy]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]',
	    undefinedTag = '[object Undefined]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	/** Detect free variable `exports`. */
	var freeExports = exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());

	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function arrayFilter(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      resIndex = 0,
	      result = [];

	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	/** Used for built-in method references. */
	var arrayProto = Array.prototype,
	    funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined,
	    Symbol = root.Symbol,
	    Uint8Array = root.Uint8Array,
	    propertyIsEnumerable = objectProto.propertyIsEnumerable,
	    splice = arrayProto.splice,
	    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols,
	    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
	    nativeKeys = overArg(Object.keys, Object);

	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView'),
	    Map = getNative(root, 'Map'),
	    Promise = getNative(root, 'Promise'),
	    Set = getNative(root, 'Set'),
	    WeakMap = getNative(root, 'WeakMap'),
	    nativeCreate = getNative(Object, 'create');

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	  this.size = 0;
	}

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
	}

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;

	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values == null ? 0 : values.length;

	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}

	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}

	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  var data = this.__data__ = new ListCache(entries);
	  this.size = data.size;
	}

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	  this.size = 0;
	}

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);

	  this.size = data.size;
	  return result;
	}

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__;
	  if (data instanceof ListCache) {
	    var pairs = data.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;

	  for (var key in value) {
	    if ((hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}

	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike(value) && baseGetTag(value) == argsTag;
	}

	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Unordered comparison
	 *  2 - Partial comparison
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, bitmask, customizer, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
	}

	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = objIsArr ? arrayTag : getTag(object),
	      othTag = othIsArr ? arrayTag : getTag(other);

	  objTag = objTag == argsTag ? objectTag : objTag;
	  othTag = othTag == argsTag ? objectTag : othTag;

	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;

	  if (isSameTag && isBuffer(object)) {
	    if (!isBuffer(other)) {
	      return false;
	    }
	    objIsArr = true;
	    objIsObj = false;
	  }
	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack);
	    return (objIsArr || isTypedArray(object))
	      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
	      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
	  }
	  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;

	      stack || (stack = new Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
	}

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	}

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

	  stack.set(array, other);
	  stack.set(other, array);

	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function(othValue, othIndex) {
	            if (!cacheHas(seen, othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
	              return seen.push(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, bitmask, customizer, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}

	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;

	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;

	    case boolTag:
	    case dateTag:
	    case numberTag:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq(+object, +other);

	    case errorTag:
	      return object.name == other.name && object.message == other.message;

	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');

	    case mapTag:
	      var convert = mapToArray;

	    case setTag:
	      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
	      convert || (convert = setToArray);

	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= COMPARE_UNORDERED_FLAG;

	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
	      stack['delete'](object);
	      return result;

	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}

	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      objProps = getAllKeys(object),
	      objLength = objProps.length,
	      othProps = getAllKeys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);

	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}

	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return baseGetAllKeys(object, keys, getSymbols);
	}

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	/**
	 * Creates an array of the own enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
	  if (object == null) {
	    return [];
	  }
	  object = Object(object);
	  return arrayFilter(nativeGetSymbols(object), function(symbol) {
	    return propertyIsEnumerable.call(object, symbol);
	  });
	};

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;

	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = baseGetTag(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : '';

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;

	/**
	 * Performs a deep comparison between two values to determine if they are
	 * equivalent.
	 *
	 * **Note:** This method supports comparing arrays, array buffers, booleans,
	 * date objects, error objects, maps, numbers, `Object` objects, regexes,
	 * sets, strings, symbols, and typed arrays. `Object` objects are compared
	 * by their own, not inherited, enumerable properties. Functions and DOM
	 * nodes are compared by strict equality, i.e. `===`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.isEqual(object, other);
	 * // => true
	 *
	 * object === other;
	 * // => false
	 */
	function isEqual(value, other) {
	  return baseIsEqual(value, other);
	}

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	module.exports = isEqual; 
} (lodash_isequal, lodash_isequal.exports));

var lodash_isequalExports = lodash_isequal.exports;
var ji = /*@__PURE__*/getDefaultExportFromCjs(lodash_isequalExports);

function unfetch_module(e,n){return n=n||{},new Promise(function(t,r){var s=new XMLHttpRequest,o=[],u=[],i={},a=function(){return {ok:2==(s.status/100|0),statusText:s.statusText,status:s.status,url:s.responseURL,text:function(){return Promise.resolve(s.responseText)},json:function(){return Promise.resolve(s.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([s.response]))},clone:a,headers:{keys:function(){return o},entries:function(){return u},get:function(e){return i[e.toLowerCase()]},has:function(e){return e.toLowerCase()in i}}}};for(var l in s.open(n.method||"get",e,!0),s.onload=function(){s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,n,t){o.push(n=n.toLowerCase()),u.push([n,t]),i[n]=i[n]?i[n]+","+t:t;}),t(a());},s.onerror=r,s.withCredentials="include"==n.credentials,n.headers)s.setRequestHeader(l,n.headers[l]);s.send(n.body||null);})}

var unfetch_module$1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	default: unfetch_module
});

var require$$0 = /*@__PURE__*/getAugmentedNamespace(unfetch_module$1);

var browser = self.fetch || (self.fetch = require$$0.default || require$$0);

var Gi = /*@__PURE__*/getDefaultExportFromCjs(browser);

function Hi(n,e){if(n.length>=255)throw new TypeError("Alphabet too long");for(var t=new Uint8Array(256),i=0;i<t.length;i++)t[i]=255;for(var s=0;s<n.length;s++){var r=n.charAt(s),o=r.charCodeAt(0);if(t[o]!==255)throw new TypeError(r+" is ambiguous");t[o]=s;}var a=n.length,h=n.charAt(0),l=Math.log(a)/Math.log(256),d=Math.log(256)/Math.log(a);function g(u){if(u instanceof Uint8Array||(ArrayBuffer.isView(u)?u=new Uint8Array(u.buffer,u.byteOffset,u.byteLength):Array.isArray(u)&&(u=Uint8Array.from(u))),!(u instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(u.length===0)return "";for(var p=0,T=0,D=0,P=u.length;D!==P&&u[D]===0;)D++,p++;for(var x=(P-D)*d+1>>>0,w=new Uint8Array(x);D!==P;){for(var O=u[D],N=0,_=x-1;(O!==0||N<T)&&_!==-1;_--,N++)O+=256*w[_]>>>0,w[_]=O%a>>>0,O=O/a>>>0;if(O!==0)throw new Error("Non-zero carry");T=N,D++;}for(var A=x-T;A!==x&&w[A]===0;)A++;for(var G=h.repeat(p);A<x;++A)G+=n.charAt(w[A]);return G}function m(u){if(typeof u!="string")throw new TypeError("Expected String");if(u.length===0)return new Uint8Array;var p=0;if(u[p]!==" "){for(var T=0,D=0;u[p]===h;)T++,p++;for(var P=(u.length-p)*l+1>>>0,x=new Uint8Array(P);u[p];){var w=t[u.charCodeAt(p)];if(w===255)return;for(var O=0,N=P-1;(w!==0||O<D)&&N!==-1;N--,O++)w+=a*x[N]>>>0,x[N]=w%256>>>0,w=w/256>>>0;if(w!==0)throw new Error("Non-zero carry");D=O,p++;}if(u[p]!==" "){for(var _=P-D;_!==P&&x[_]===0;)_++;for(var A=new Uint8Array(T+(P-_)),G=T;_!==P;)A[G++]=x[_++];return A}}}function L(u){var p=m(u);if(p)return p;throw new Error(`Non-${e} character`)}return {encode:g,decodeUnsafe:m,decode:L}}var Yi=Hi,Ji=Yi;const Ne=n=>{if(n instanceof Uint8Array&&n.constructor.name==="Uint8Array")return n;if(n instanceof ArrayBuffer)return new Uint8Array(n);if(ArrayBuffer.isView(n))return new Uint8Array(n.buffer,n.byteOffset,n.byteLength);throw new Error("Unknown type, must be binary type")},Xi=n=>new TextEncoder().encode(n),Wi=n=>new TextDecoder().decode(n);class Qi{constructor(e,t,i){this.name=e,this.prefix=t,this.baseEncode=i;}encode(e){if(e instanceof Uint8Array)return `${this.prefix}${this.baseEncode(e)}`;throw Error("Unknown type, must be binary type")}}class Zi{constructor(e,t,i){if(this.name=e,this.prefix=t,t.codePointAt(0)===void 0)throw new Error("Invalid prefix character");this.prefixCodePoint=t.codePointAt(0),this.baseDecode=i;}decode(e){if(typeof e=="string"){if(e.codePointAt(0)!==this.prefixCodePoint)throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);return this.baseDecode(e.slice(this.prefix.length))}else throw Error("Can only multibase decode strings")}or(e){return Le(this,e)}}let es$1 = class es{constructor(e){this.decoders=e;}or(e){return Le(this,e)}decode(e){const t=e[0],i=this.decoders[t];if(i)return i.decode(e);throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}};const Le=(n,e)=>new es$1({...n.decoders||{[n.prefix]:n},...e.decoders||{[e.prefix]:e}});let ts$1 = class ts{constructor(e,t,i,s){this.name=e,this.prefix=t,this.baseEncode=i,this.baseDecode=s,this.encoder=new Qi(e,t,i),this.decoder=new Zi(e,t,s);}encode(e){return this.encoder.encode(e)}decode(e){return this.decoder.decode(e)}};const W=({name:n,prefix:e,encode:t,decode:i})=>new ts$1(n,e,t,i),K=({prefix:n,name:e,alphabet:t})=>{const{encode:i,decode:s}=Ji(t,e);return W({prefix:n,name:e,encode:i,decode:r=>Ne(s(r))})},is$1=(n,e,t,i)=>{const s={};for(let d=0;d<e.length;++d)s[e[d]]=d;let r=n.length;for(;n[r-1]==="=";)--r;const o=new Uint8Array(r*t/8|0);let a=0,h=0,l=0;for(let d=0;d<r;++d){const g=s[n[d]];if(g===void 0)throw new SyntaxError(`Non-${i} character`);h=h<<t|g,a+=t,a>=8&&(a-=8,o[l++]=255&h>>a);}if(a>=t||255&h<<8-a)throw new SyntaxError("Unexpected end of data");return o},ss$1=(n,e,t)=>{const i=e[e.length-1]==="=",s=(1<<t)-1;let r="",o=0,a=0;for(let h=0;h<n.length;++h)for(a=a<<8|n[h],o+=8;o>t;)o-=t,r+=e[s&a>>o];if(o&&(r+=e[s&a<<t-o]),i)for(;r.length*t&7;)r+="=";return r},y=({name:n,prefix:e,bitsPerChar:t,alphabet:i})=>W({prefix:e,name:n,encode(s){return ss$1(s,i,t)},decode(s){return is$1(s,i,t,n)}}),rs$1=W({prefix:"\0",name:"identity",encode:n=>Wi(n),decode:n=>Xi(n)});var ns$1=Object.freeze({__proto__:null,identity:rs$1});const os=y({prefix:"0",name:"base2",alphabet:"01",bitsPerChar:1});var as=Object.freeze({__proto__:null,base2:os});const hs=y({prefix:"7",name:"base8",alphabet:"01234567",bitsPerChar:3});var cs=Object.freeze({__proto__:null,base8:hs});const ls=K({prefix:"9",name:"base10",alphabet:"0123456789"});var us=Object.freeze({__proto__:null,base10:ls});const ds=y({prefix:"f",name:"base16",alphabet:"0123456789abcdef",bitsPerChar:4}),gs=y({prefix:"F",name:"base16upper",alphabet:"0123456789ABCDEF",bitsPerChar:4});var ps=Object.freeze({__proto__:null,base16:ds,base16upper:gs});const Ds=y({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5}),ys=y({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),ms=y({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),bs=y({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),fs=y({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),Es=y({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),ws=y({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),vs=y({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),Is=y({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5});var Cs=Object.freeze({__proto__:null,base32:Ds,base32upper:ys,base32pad:ms,base32padupper:bs,base32hex:fs,base32hexupper:Es,base32hexpad:ws,base32hexpadupper:vs,base32z:Is});const Ts=K({prefix:"k",name:"base36",alphabet:"0123456789abcdefghijklmnopqrstuvwxyz"}),_s=K({prefix:"K",name:"base36upper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"});var Rs=Object.freeze({__proto__:null,base36:Ts,base36upper:_s});const Ss=K({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}),Ps=K({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"});var xs=Object.freeze({__proto__:null,base58btc:Ss,base58flickr:Ps});const Os=y({prefix:"m",name:"base64",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bitsPerChar:6}),As=y({prefix:"M",name:"base64pad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bitsPerChar:6}),zs=y({prefix:"u",name:"base64url",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bitsPerChar:6}),Ns=y({prefix:"U",name:"base64urlpad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",bitsPerChar:6});var Ls=Object.freeze({__proto__:null,base64:Os,base64pad:As,base64url:zs,base64urlpad:Ns});const Ue$1=Array.from("\u{1F680}\u{1FA90}\u2604\u{1F6F0}\u{1F30C}\u{1F311}\u{1F312}\u{1F313}\u{1F314}\u{1F315}\u{1F316}\u{1F317}\u{1F318}\u{1F30D}\u{1F30F}\u{1F30E}\u{1F409}\u2600\u{1F4BB}\u{1F5A5}\u{1F4BE}\u{1F4BF}\u{1F602}\u2764\u{1F60D}\u{1F923}\u{1F60A}\u{1F64F}\u{1F495}\u{1F62D}\u{1F618}\u{1F44D}\u{1F605}\u{1F44F}\u{1F601}\u{1F525}\u{1F970}\u{1F494}\u{1F496}\u{1F499}\u{1F622}\u{1F914}\u{1F606}\u{1F644}\u{1F4AA}\u{1F609}\u263A\u{1F44C}\u{1F917}\u{1F49C}\u{1F614}\u{1F60E}\u{1F607}\u{1F339}\u{1F926}\u{1F389}\u{1F49E}\u270C\u2728\u{1F937}\u{1F631}\u{1F60C}\u{1F338}\u{1F64C}\u{1F60B}\u{1F497}\u{1F49A}\u{1F60F}\u{1F49B}\u{1F642}\u{1F493}\u{1F929}\u{1F604}\u{1F600}\u{1F5A4}\u{1F603}\u{1F4AF}\u{1F648}\u{1F447}\u{1F3B6}\u{1F612}\u{1F92D}\u2763\u{1F61C}\u{1F48B}\u{1F440}\u{1F62A}\u{1F611}\u{1F4A5}\u{1F64B}\u{1F61E}\u{1F629}\u{1F621}\u{1F92A}\u{1F44A}\u{1F973}\u{1F625}\u{1F924}\u{1F449}\u{1F483}\u{1F633}\u270B\u{1F61A}\u{1F61D}\u{1F634}\u{1F31F}\u{1F62C}\u{1F643}\u{1F340}\u{1F337}\u{1F63B}\u{1F613}\u2B50\u2705\u{1F97A}\u{1F308}\u{1F608}\u{1F918}\u{1F4A6}\u2714\u{1F623}\u{1F3C3}\u{1F490}\u2639\u{1F38A}\u{1F498}\u{1F620}\u261D\u{1F615}\u{1F33A}\u{1F382}\u{1F33B}\u{1F610}\u{1F595}\u{1F49D}\u{1F64A}\u{1F639}\u{1F5E3}\u{1F4AB}\u{1F480}\u{1F451}\u{1F3B5}\u{1F91E}\u{1F61B}\u{1F534}\u{1F624}\u{1F33C}\u{1F62B}\u26BD\u{1F919}\u2615\u{1F3C6}\u{1F92B}\u{1F448}\u{1F62E}\u{1F646}\u{1F37B}\u{1F343}\u{1F436}\u{1F481}\u{1F632}\u{1F33F}\u{1F9E1}\u{1F381}\u26A1\u{1F31E}\u{1F388}\u274C\u270A\u{1F44B}\u{1F630}\u{1F928}\u{1F636}\u{1F91D}\u{1F6B6}\u{1F4B0}\u{1F353}\u{1F4A2}\u{1F91F}\u{1F641}\u{1F6A8}\u{1F4A8}\u{1F92C}\u2708\u{1F380}\u{1F37A}\u{1F913}\u{1F619}\u{1F49F}\u{1F331}\u{1F616}\u{1F476}\u{1F974}\u25B6\u27A1\u2753\u{1F48E}\u{1F4B8}\u2B07\u{1F628}\u{1F31A}\u{1F98B}\u{1F637}\u{1F57A}\u26A0\u{1F645}\u{1F61F}\u{1F635}\u{1F44E}\u{1F932}\u{1F920}\u{1F927}\u{1F4CC}\u{1F535}\u{1F485}\u{1F9D0}\u{1F43E}\u{1F352}\u{1F617}\u{1F911}\u{1F30A}\u{1F92F}\u{1F437}\u260E\u{1F4A7}\u{1F62F}\u{1F486}\u{1F446}\u{1F3A4}\u{1F647}\u{1F351}\u2744\u{1F334}\u{1F4A3}\u{1F438}\u{1F48C}\u{1F4CD}\u{1F940}\u{1F922}\u{1F445}\u{1F4A1}\u{1F4A9}\u{1F450}\u{1F4F8}\u{1F47B}\u{1F910}\u{1F92E}\u{1F3BC}\u{1F975}\u{1F6A9}\u{1F34E}\u{1F34A}\u{1F47C}\u{1F48D}\u{1F4E3}\u{1F942}"),Us=Ue$1.reduce((n,e,t)=>(n[t]=e,n),[]),Fs=Ue$1.reduce((n,e,t)=>(n[e.codePointAt(0)]=t,n),[]);function $s(n){return n.reduce((e,t)=>(e+=Us[t],e),"")}function Ms(n){const e=[];for(const t of n){const i=Fs[t.codePointAt(0)];if(i===void 0)throw new Error(`Non-base256emoji character: ${t}`);e.push(i);}return new Uint8Array(e)}const Bs=W({prefix:"\u{1F680}",name:"base256emoji",encode:$s,decode:Ms});var ks=Object.freeze({__proto__:null,base256emoji:Bs}),Ks=$e,Fe$1=128,qs=127,Vs=~qs,js=Math.pow(2,31);function $e(n,e,t){e=e||[],t=t||0;for(var i=t;n>=js;)e[t++]=n&255|Fe$1,n/=128;for(;n&Vs;)e[t++]=n&255|Fe$1,n>>>=7;return e[t]=n|0,$e.bytes=t-i+1,e}var Gs=ue,Hs=128,Me=127;function ue(n,i){var t=0,i=i||0,s=0,r=i,o,a=n.length;do{if(r>=a)throw ue.bytes=0,new RangeError("Could not decode varint");o=n[r++],t+=s<28?(o&Me)<<s:(o&Me)*Math.pow(2,s),s+=7;}while(o>=Hs);return ue.bytes=r-i,t}var Ys=Math.pow(2,7),Js=Math.pow(2,14),Xs=Math.pow(2,21),Ws=Math.pow(2,28),Qs=Math.pow(2,35),Zs=Math.pow(2,42),er=Math.pow(2,49),tr=Math.pow(2,56),ir=Math.pow(2,63),sr=function(n){return n<Ys?1:n<Js?2:n<Xs?3:n<Ws?4:n<Qs?5:n<Zs?6:n<er?7:n<tr?8:n<ir?9:10},rr={encode:Ks,decode:Gs,encodingLength:sr},Be$1=rr;const ke$1=(n,e,t=0)=>(Be$1.encode(n,e,t),e),Ke=n=>Be$1.encodingLength(n),de=(n,e)=>{const t=e.byteLength,i=Ke(n),s=i+Ke(t),r=new Uint8Array(s+t);return ke$1(n,r,0),ke$1(t,r,i),r.set(e,s),new nr(n,t,e,r)};class nr{constructor(e,t,i,s){this.code=e,this.size=t,this.digest=i,this.bytes=s;}}const qe=({name:n,code:e,encode:t})=>new or(n,e,t);class or{constructor(e,t,i){this.name=e,this.code=t,this.encode=i;}digest(e){if(e instanceof Uint8Array){const t=this.encode(e);return t instanceof Uint8Array?de(this.code,t):t.then(i=>de(this.code,i))}else throw Error("Unknown type, must be binary type")}}const Ve=n=>async e=>new Uint8Array(await crypto.subtle.digest(n,e)),ar=qe({name:"sha2-256",code:18,encode:Ve("SHA-256")}),hr=qe({name:"sha2-512",code:19,encode:Ve("SHA-512")});var cr=Object.freeze({__proto__:null,sha256:ar,sha512:hr});const je$1=0,lr="identity",Ge$1=Ne,ur=n=>de(je$1,Ge$1(n)),dr={code:je$1,name:lr,encode:Ge$1,digest:ur};var gr=Object.freeze({__proto__:null,identity:dr});new TextEncoder,new TextDecoder;const He$1={...ns$1,...as,...cs,...us,...ps,...Cs,...Rs,...xs,...Ls,...ks};({...cr,...gr});function pr(n=0){return globalThis.Buffer!=null&&globalThis.Buffer.allocUnsafe!=null?globalThis.Buffer.allocUnsafe(n):new Uint8Array(n)}function Ye$1(n,e,t,i){return {name:n,prefix:e,encoder:{name:n,prefix:e,encode:t},decoder:{decode:i}}}const Je$1=Ye$1("utf8","u",n=>"u"+new TextDecoder("utf8").decode(n),n=>new TextEncoder().encode(n.substring(1))),ge=Ye$1("ascii","a",n=>{let e="a";for(let t=0;t<n.length;t++)e+=String.fromCharCode(n[t]);return e},n=>{n=n.substring(1);const e=pr(n.length);for(let t=0;t<n.length;t++)e[t]=n.charCodeAt(t);return e}),Dr={utf8:Je$1,"utf-8":Je$1,hex:He$1.base16,latin1:ge,ascii:ge,binary:ge,...He$1};function yr(n,e="utf8"){const t=Dr[e];if(!t)throw new Error(`Unsupported encoding "${e}"`);return (e==="utf8"||e==="utf-8")&&globalThis.Buffer!=null&&globalThis.Buffer.from!=null?globalThis.Buffer.from(n,"utf8"):t.decoder.decode(`${t.prefix}${n}`)}const pe="wc",Xe$1=2,Q="core",z=`${pe}@2:${Q}:`,We$1={name:Q,logger:"error"},Qe$1={database:":memory:"},Ze$1="crypto",De="client_ed25519_seed",et=cjs$3.ONE_DAY,tt="keychain",it="0.3",st="messages",rt="0.3",nt=cjs$3.SIX_HOURS,ot="publisher",at="irn",ht="error",ye="wss://relay.walletconnect.org",ct="relayer",f={message:"relayer_message",message_ack:"relayer_message_ack",connect:"relayer_connect",disconnect:"relayer_disconnect",error:"relayer_error",connection_stalled:"relayer_connection_stalled",transport_closed:"relayer_transport_closed",publish:"relayer_publish"},lt="_subscription",E={payload:"payload",connect:"connect",disconnect:"disconnect",error:"error"},ut=.1,dt="2.14.0",gt=1e4,pt="0.3",Dt="WALLETCONNECT_CLIENT_ID",S={created:"subscription_created",deleted:"subscription_deleted",expired:"subscription_expired",disabled:"subscription_disabled",sync:"subscription_sync",resubscribed:"subscription_resubscribed"},yt="subscription",mt="0.3",bt=cjs$3.FIVE_SECONDS*1e3,ft="pairing",Et="0.3",M={wc_pairingDelete:{req:{ttl:cjs$3.ONE_DAY,prompt:!1,tag:1e3},res:{ttl:cjs$3.ONE_DAY,prompt:!1,tag:1001}},wc_pairingPing:{req:{ttl:cjs$3.THIRTY_SECONDS,prompt:!1,tag:1002},res:{ttl:cjs$3.THIRTY_SECONDS,prompt:!1,tag:1003}},unregistered_method:{req:{ttl:cjs$3.ONE_DAY,prompt:!1,tag:0},res:{ttl:cjs$3.ONE_DAY,prompt:!1,tag:0}}},q={create:"pairing_create",expire:"pairing_expire",delete:"pairing_delete",ping:"pairing_ping"},I={created:"history_created",updated:"history_updated",deleted:"history_deleted",sync:"history_sync"},wt="history",vt="0.3",It="expirer",C={created:"expirer_created",deleted:"expirer_deleted",expired:"expirer_expired",sync:"expirer_sync"},Ct="0.3",Z="verify-api",wr="https://verify.walletconnect.com",Tt="https://verify.walletconnect.org",V=Tt,_t=[wr,Tt],Rt="echo",St="https://echo.walletconnect.com";class Pt{constructor(e,t){this.core=e,this.logger=t,this.keychain=new Map,this.name=tt,this.version=it,this.initialized=!1,this.storagePrefix=z,this.init=async()=>{if(!this.initialized){const i=await this.getKeyChain();typeof i<"u"&&(this.keychain=i),this.initialized=!0;}},this.has=i=>(this.isInitialized(),this.keychain.has(i)),this.set=async(i,s)=>{this.isInitialized(),this.keychain.set(i,s),await this.persist();},this.get=i=>{this.isInitialized();const s=this.keychain.get(i);if(typeof s>"u"){const{message:r}=xe("NO_MATCHING_KEY",`${this.name}: ${i}`);throw new Error(r)}return s},this.del=async i=>{this.isInitialized(),this.keychain.delete(i),await this.persist();},this.core=e,this.logger=E$2(t,this.name);}get context(){return y$2(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name}async setKeyChain(e){await this.core.storage.setItem(this.storageKey,i0(e));}async getKeyChain(){const e=await this.core.storage.getItem(this.storageKey);return typeof e<"u"?n0(e):void 0}async persist(){await this.setKeyChain(this.keychain);}isInitialized(){if(!this.initialized){const{message:e}=xe("NOT_INITIALIZED",this.name);throw new Error(e)}}}class xt{constructor(e,t,i){this.core=e,this.logger=t,this.name=Ze$1,this.randomSessionIdentifier=gu(),this.initialized=!1,this.init=async()=>{this.initialized||(await this.keychain.init(),this.initialized=!0);},this.hasKeys=s=>(this.isInitialized(),this.keychain.has(s)),this.getClientId=async()=>{this.isInitialized();const s=await this.getClientSeed(),r=generateKeyPair(s);return encodeIss(r.publicKey)},this.generateKeyPair=()=>{this.isInitialized();const s=mu();return this.setPrivateKey(s.publicKey,s.privateKey)},this.signJWT=async s=>{this.isInitialized();const r=await this.getClientSeed(),o=generateKeyPair(r),a=this.randomSessionIdentifier,h=et;return await signJWT(a,s,h,o)},this.generateSharedKey=(s,r,o)=>{this.isInitialized();const a=this.getPrivateKey(s),h=Au(a,r);return this.setSymKey(h,o)},this.setSymKey=async(s,r)=>{this.isInitialized();const o=r||bu(s);return await this.keychain.set(o,s),o},this.deleteKeyPair=async s=>{this.isInitialized(),await this.keychain.del(s);},this.deleteSymKey=async s=>{this.isInitialized(),await this.keychain.del(s);},this.encode=async(s,r,o)=>{this.isInitialized();const a=eo(o),h=safeJsonStringify(r);if(Eu(a)){const m=a.senderPublicKey,L=a.receiverPublicKey;s=await this.generateSharedKey(m,L);}const l=this.getSymKey(s),{type:d,senderPublicKey:g}=a;return wu({type:d,symKey:l,message:h,senderPublicKey:g})},this.decode=async(s,r,o)=>{this.isInitialized();const a=Mu(r,o);if(Eu(a)){const h=a.receiverPublicKey,l=a.senderPublicKey;s=await this.generateSharedKey(h,l);}try{const h=this.getSymKey(s),l=xu({symKey:h,encoded:r});return safeJsonParse(l)}catch(h){this.logger.error(`Failed to decode message from topic: '${s}', clientId: '${await this.getClientId()}'`),this.logger.error(h);}},this.getPayloadType=s=>{const r=Xi$1(s);return Mr$1(r.type)},this.getPayloadSenderPublicKey=s=>{const r=Xi$1(s);return r.senderPublicKey?toString$1(r.senderPublicKey,zt$1):void 0},this.core=e,this.logger=E$2(t,this.name),this.keychain=i||new Pt(this.core,this.logger);}get context(){return y$2(this.logger)}async setPrivateKey(e,t){return await this.keychain.set(e,t),e}getPrivateKey(e){return this.keychain.get(e)}async getClientSeed(){let e="";try{e=this.keychain.get(De);}catch{e=gu(),await this.keychain.set(De,e);}return yr(e,"base16")}getSymKey(e){return this.keychain.get(e)}isInitialized(){if(!this.initialized){const{message:e}=xe("NOT_INITIALIZED",this.name);throw new Error(e)}}}class Ot extends a$1{constructor(e,t){super(e,t),this.logger=e,this.core=t,this.messages=new Map,this.name=st,this.version=rt,this.initialized=!1,this.storagePrefix=z,this.init=async()=>{if(!this.initialized){this.logger.trace("Initialized");try{const i=await this.getRelayerMessages();typeof i<"u"&&(this.messages=i),this.logger.debug(`Successfully Restored records for ${this.name}`),this.logger.trace({type:"method",method:"restore",size:this.messages.size});}catch(i){this.logger.debug(`Failed to Restore records for ${this.name}`),this.logger.error(i);}finally{this.initialized=!0;}}},this.set=async(i,s)=>{this.isInitialized();const r=yu(s);let o=this.messages.get(i);return typeof o>"u"&&(o={}),typeof o[r]<"u"||(o[r]=s,this.messages.set(i,o),await this.persist()),r},this.get=i=>{this.isInitialized();let s=this.messages.get(i);return typeof s>"u"&&(s={}),s},this.has=(i,s)=>{this.isInitialized();const r=this.get(i),o=yu(s);return typeof r[o]<"u"},this.del=async i=>{this.isInitialized(),this.messages.delete(i),await this.persist();},this.logger=E$2(e,this.name),this.core=t;}get context(){return y$2(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name}async setRelayerMessages(e){await this.core.storage.setItem(this.storageKey,i0(e));}async getRelayerMessages(){const e=await this.core.storage.getItem(this.storageKey);return typeof e<"u"?n0(e):void 0}async persist(){await this.setRelayerMessages(this.messages);}isInitialized(){if(!this.initialized){const{message:e}=xe("NOT_INITIALIZED",this.name);throw new Error(e)}}}class vr extends u{constructor(e,t){super(e,t),this.relayer=e,this.logger=t,this.events=new EventEmitter,this.name=ot,this.queue=new Map,this.publishTimeout=cjs$3.toMiliseconds(cjs$3.ONE_MINUTE),this.failedPublishTimeout=cjs$3.toMiliseconds(cjs$3.ONE_SECOND),this.needsTransportRestart=!1,this.publish=async(i,s,r)=>{var o;this.logger.debug("Publishing Payload"),this.logger.trace({type:"method",method:"publish",params:{topic:i,message:s,opts:r}});const a=r?.ttl||nt,h=Su(r),l=r?.prompt||!1,d=r?.tag||0,g=r?.id||getBigIntRpcId().toString(),m={topic:i,message:s,opts:{ttl:a,relay:h,prompt:l,tag:d,id:g}},L=`Failed to publish payload, please try again. id:${g} tag:${d}`,u=Date.now();let p,T=1;try{for(;p===void 0;){if(Date.now()-u>this.publishTimeout)throw new Error(L);this.logger.trace({id:g,attempts:T},`publisher.publish - attempt ${T}`),p=await await u0(this.rpcPublish(i,s,a,h,l,d,g).catch(D=>this.logger.warn(D)),this.publishTimeout,L),T++,p||await new Promise(D=>setTimeout(D,this.failedPublishTimeout));}this.relayer.events.emit(f.publish,m),this.logger.debug("Successfully Published Payload"),this.logger.trace({type:"method",method:"publish",params:{id:g,topic:i,message:s,opts:r}});}catch(D){if(this.logger.debug("Failed to Publish Payload"),this.logger.error(D),(o=r?.internal)!=null&&o.throwOnFailedPublish)throw D;this.queue.set(g,m);}},this.on=(i,s)=>{this.events.on(i,s);},this.once=(i,s)=>{this.events.once(i,s);},this.off=(i,s)=>{this.events.off(i,s);},this.removeListener=(i,s)=>{this.events.removeListener(i,s);},this.relayer=e,this.logger=E$2(t,this.name),this.registerEventListeners();}get context(){return y$2(this.logger)}rpcPublish(e,t,i,s,r,o,a){var h,l,d,g;const m={method:Nu(s.protocol).publish,params:{topic:e,message:t,ttl:i,prompt:r,tag:o},id:a};return Pe((h=m.params)==null?void 0:h.prompt)&&((l=m.params)==null||delete l.prompt),Pe((d=m.params)==null?void 0:d.tag)&&((g=m.params)==null||delete g.tag),this.logger.debug("Outgoing Relay Payload"),this.logger.trace({type:"message",direction:"outgoing",request:m}),this.relayer.request(m)}removeRequestFromQueue(e){this.queue.delete(e);}checkQueue(){this.queue.forEach(async e=>{const{topic:t,message:i,opts:s}=e;await this.publish(t,i,s);});}registerEventListeners(){this.relayer.core.heartbeat.on(r$1.pulse,()=>{if(this.needsTransportRestart){this.needsTransportRestart=!1,this.relayer.events.emit(f.connection_stalled);return}this.checkQueue();}),this.relayer.on(f.message_ack,e=>{this.removeRequestFromQueue(e.id.toString());});}}class Ir{constructor(){this.map=new Map,this.set=(e,t)=>{const i=this.get(e);this.exists(e,t)||this.map.set(e,[...i,t]);},this.get=e=>this.map.get(e)||[],this.exists=(e,t)=>this.get(e).includes(t),this.delete=(e,t)=>{if(typeof t>"u"){this.map.delete(e);return}if(!this.map.has(e))return;const i=this.get(e);if(!this.exists(e,t))return;const s=i.filter(r=>r!==t);if(!s.length){this.map.delete(e);return}this.map.set(e,s);},this.clear=()=>{this.map.clear();};}get topics(){return Array.from(this.map.keys())}}var Cr=Object.defineProperty,Tr=Object.defineProperties,_r=Object.getOwnPropertyDescriptors,At=Object.getOwnPropertySymbols,Rr=Object.prototype.hasOwnProperty,Sr=Object.prototype.propertyIsEnumerable,zt=(n,e,t)=>e in n?Cr(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,j=(n,e)=>{for(var t in e||(e={}))Rr.call(e,t)&&zt(n,t,e[t]);if(At)for(var t of At(e))Sr.call(e,t)&&zt(n,t,e[t]);return n},me=(n,e)=>Tr(n,_r(e));class Nt extends d{constructor(e,t){super(e,t),this.relayer=e,this.logger=t,this.subscriptions=new Map,this.topicMap=new Ir,this.events=new EventEmitter,this.name=yt,this.version=mt,this.pending=new Map,this.cached=[],this.initialized=!1,this.pendingSubscriptionWatchLabel="pending_sub_watch_label",this.pollingInterval=20,this.storagePrefix=z,this.subscribeTimeout=cjs$3.toMiliseconds(cjs$3.ONE_MINUTE),this.restartInProgress=!1,this.batchSubscribeTopicsLimit=500,this.pendingBatchMessages=[],this.init=async()=>{this.initialized||(this.logger.trace("Initialized"),this.registerEventListeners(),this.clientId=await this.relayer.core.crypto.getClientId());},this.subscribe=async(i,s)=>{await this.restartToComplete(),this.isInitialized(),this.logger.debug("Subscribing Topic"),this.logger.trace({type:"method",method:"subscribe",params:{topic:i,opts:s}});try{const r=Su(s),o={topic:i,relay:r};this.pending.set(i,o);const a=await this.rpcSubscribe(i,r);return typeof a=="string"&&(this.onSubscribe(a,o),this.logger.debug("Successfully Subscribed Topic"),this.logger.trace({type:"method",method:"subscribe",params:{topic:i,opts:s}})),a}catch(r){throw this.logger.debug("Failed to Subscribe Topic"),this.logger.error(r),r}},this.unsubscribe=async(i,s)=>{await this.restartToComplete(),this.isInitialized(),typeof s?.id<"u"?await this.unsubscribeById(i,s.id,s):await this.unsubscribeByTopic(i,s);},this.isSubscribed=async i=>{if(this.topics.includes(i))return !0;const s=`${this.pendingSubscriptionWatchLabel}_${i}`;return await new Promise((r,o)=>{const a=new cjs$3.Watch;a.start(s);const h=setInterval(()=>{!this.pending.has(i)&&this.topics.includes(i)&&(clearInterval(h),a.stop(s),r(!0)),a.elapsed(s)>=bt&&(clearInterval(h),a.stop(s),o(new Error("Subscription resolution timeout")));},this.pollingInterval);}).catch(()=>!1)},this.on=(i,s)=>{this.events.on(i,s);},this.once=(i,s)=>{this.events.once(i,s);},this.off=(i,s)=>{this.events.off(i,s);},this.removeListener=(i,s)=>{this.events.removeListener(i,s);},this.start=async()=>{await this.onConnect();},this.stop=async()=>{await this.onDisconnect();},this.restart=async()=>{this.restartInProgress=!0,await this.restore(),await this.reset(),this.restartInProgress=!1;},this.relayer=e,this.logger=E$2(t,this.name),this.clientId="";}get context(){return y$2(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.relayer.core.customStoragePrefix+"//"+this.name}get length(){return this.subscriptions.size}get ids(){return Array.from(this.subscriptions.keys())}get values(){return Array.from(this.subscriptions.values())}get topics(){return this.topicMap.topics}hasSubscription(e,t){let i=!1;try{i=this.getSubscription(e).topic===t;}catch{}return i}onEnable(){this.cached=[],this.initialized=!0;}onDisable(){this.cached=this.values,this.subscriptions.clear(),this.topicMap.clear();}async unsubscribeByTopic(e,t){const i=this.topicMap.get(e);await Promise.all(i.map(async s=>await this.unsubscribeById(e,s,t)));}async unsubscribeById(e,t,i){this.logger.debug("Unsubscribing Topic"),this.logger.trace({type:"method",method:"unsubscribe",params:{topic:e,id:t,opts:i}});try{const s=Su(i);await this.rpcUnsubscribe(e,t,s);const r=tr$1("USER_DISCONNECTED",`${this.name}, ${e}`);await this.onUnsubscribe(e,t,r),this.logger.debug("Successfully Unsubscribed Topic"),this.logger.trace({type:"method",method:"unsubscribe",params:{topic:e,id:t,opts:i}});}catch(s){throw this.logger.debug("Failed to Unsubscribe Topic"),this.logger.error(s),s}}async rpcSubscribe(e,t){const i={method:Nu(t.protocol).subscribe,params:{topic:e}};this.logger.debug("Outgoing Relay Payload"),this.logger.trace({type:"payload",direction:"outgoing",request:i});try{return await await u0(this.relayer.request(i).catch(s=>this.logger.warn(s)),this.subscribeTimeout)?yu(e+this.clientId):null}catch{this.logger.debug("Outgoing Relay Subscribe Payload stalled"),this.relayer.events.emit(f.connection_stalled);}return null}async rpcBatchSubscribe(e){if(!e.length)return;const t=e[0].relay,i={method:Nu(t.protocol).batchSubscribe,params:{topics:e.map(s=>s.topic)}};this.logger.debug("Outgoing Relay Payload"),this.logger.trace({type:"payload",direction:"outgoing",request:i});try{return await await u0(this.relayer.request(i).catch(s=>this.logger.warn(s)),this.subscribeTimeout)}catch{this.relayer.events.emit(f.connection_stalled);}}async rpcBatchFetchMessages(e){if(!e.length)return;const t=e[0].relay,i={method:Nu(t.protocol).batchFetchMessages,params:{topics:e.map(r=>r.topic)}};this.logger.debug("Outgoing Relay Payload"),this.logger.trace({type:"payload",direction:"outgoing",request:i});let s;try{s=await await u0(this.relayer.request(i).catch(r=>this.logger.warn(r)),this.subscribeTimeout);}catch{this.relayer.events.emit(f.connection_stalled);}return s}rpcUnsubscribe(e,t,i){const s={method:Nu(i.protocol).unsubscribe,params:{topic:e,id:t}};return this.logger.debug("Outgoing Relay Payload"),this.logger.trace({type:"payload",direction:"outgoing",request:s}),this.relayer.request(s)}onSubscribe(e,t){this.setSubscription(e,me(j({},t),{id:e})),this.pending.delete(t.topic);}onBatchSubscribe(e){e.length&&e.forEach(t=>{this.setSubscription(t.id,j({},t)),this.pending.delete(t.topic);});}async onUnsubscribe(e,t,i){this.events.removeAllListeners(t),this.hasSubscription(t,e)&&this.deleteSubscription(t,i),await this.relayer.messages.del(e);}async setRelayerSubscriptions(e){await this.relayer.core.storage.setItem(this.storageKey,e);}async getRelayerSubscriptions(){return await this.relayer.core.storage.getItem(this.storageKey)}setSubscription(e,t){this.logger.debug("Setting subscription"),this.logger.trace({type:"method",method:"setSubscription",id:e,subscription:t}),this.addSubscription(e,t);}addSubscription(e,t){this.subscriptions.set(e,j({},t)),this.topicMap.set(t.topic,e),this.events.emit(S.created,t);}getSubscription(e){this.logger.debug("Getting subscription"),this.logger.trace({type:"method",method:"getSubscription",id:e});const t=this.subscriptions.get(e);if(!t){const{message:i}=xe("NO_MATCHING_KEY",`${this.name}: ${e}`);throw new Error(i)}return t}deleteSubscription(e,t){this.logger.debug("Deleting subscription"),this.logger.trace({type:"method",method:"deleteSubscription",id:e,reason:t});const i=this.getSubscription(e);this.subscriptions.delete(e),this.topicMap.delete(i.topic,e),this.events.emit(S.deleted,me(j({},i),{reason:t}));}async persist(){await this.setRelayerSubscriptions(this.values),this.events.emit(S.sync);}async reset(){if(this.cached.length){const e=Math.ceil(this.cached.length/this.batchSubscribeTopicsLimit);for(let t=0;t<e;t++){const i=this.cached.splice(0,this.batchSubscribeTopicsLimit);await this.batchFetchMessages(i),await this.batchSubscribe(i);}}this.events.emit(S.resubscribed);}async restore(){try{const e=await this.getRelayerSubscriptions();if(typeof e>"u"||!e.length)return;if(this.subscriptions.size){const{message:t}=xe("RESTORE_WILL_OVERRIDE",this.name);throw this.logger.error(t),this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`),new Error(t)}this.cached=e,this.logger.debug(`Successfully Restored subscriptions for ${this.name}`),this.logger.trace({type:"method",method:"restore",subscriptions:this.values});}catch(e){this.logger.debug(`Failed to Restore subscriptions for ${this.name}`),this.logger.error(e);}}async batchSubscribe(e){if(!e.length)return;const t=await this.rpcBatchSubscribe(e);Er(t)&&this.onBatchSubscribe(t.map((i,s)=>me(j({},e[s]),{id:i})));}async batchFetchMessages(e){if(!e.length)return;this.logger.trace(`Fetching batch messages for ${e.length} subscriptions`);const t=await this.rpcBatchFetchMessages(e);t&&t.messages&&(this.pendingBatchMessages=this.pendingBatchMessages.concat(t.messages));}async onConnect(){await this.restart(),this.onEnable();}onDisconnect(){this.onDisable();}async checkPending(){if(!this.initialized||!this.relayer.connected)return;const e=[];this.pending.forEach(t=>{e.push(t);}),await this.batchSubscribe(e),this.pendingBatchMessages.length&&(await this.relayer.handleBatchMessageEvents(this.pendingBatchMessages),this.pendingBatchMessages=[]);}registerEventListeners(){this.relayer.core.heartbeat.on(r$1.pulse,async()=>{await this.checkPending();}),this.events.on(S.created,async e=>{const t=S.created;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,data:e}),await this.persist();}),this.events.on(S.deleted,async e=>{const t=S.deleted;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,data:e}),await this.persist();});}isInitialized(){if(!this.initialized){const{message:e}=xe("NOT_INITIALIZED",this.name);throw new Error(e)}}async restartToComplete(){this.restartInProgress&&await new Promise(e=>{const t=setInterval(()=>{this.restartInProgress||(clearInterval(t),e());},this.pollingInterval);});}}var Pr=Object.defineProperty,Lt=Object.getOwnPropertySymbols,xr=Object.prototype.hasOwnProperty,Or=Object.prototype.propertyIsEnumerable,Ut=(n,e,t)=>e in n?Pr(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Ar=(n,e)=>{for(var t in e||(e={}))xr.call(e,t)&&Ut(n,t,e[t]);if(Lt)for(var t of Lt(e))Or.call(e,t)&&Ut(n,t,e[t]);return n};class Ft extends g{constructor(e){super(e),this.protocol="wc",this.version=2,this.events=new EventEmitter,this.name=ct,this.transportExplicitlyClosed=!1,this.initialized=!1,this.connectionAttemptInProgress=!1,this.connectionStatusPollingInterval=20,this.staleConnectionErrors=["socket hang up","stalled","interrupted"],this.hasExperiencedNetworkDisruption=!1,this.requestsInFlight=new Map,this.heartBeatTimeout=cjs$3.toMiliseconds(cjs$3.THIRTY_SECONDS+cjs$3.ONE_SECOND),this.request=async t=>{var i,s;this.logger.debug("Publishing Request Payload");const r=t.id||getBigIntRpcId().toString();await this.toEstablishConnection();try{const o=this.provider.request(t);this.requestsInFlight.set(r,{promise:o,request:t}),this.logger.trace({id:r,method:t.method,topic:(i=t.params)==null?void 0:i.topic},"relayer.request - attempt to publish...");const a=await new Promise(async(h,l)=>{const d=()=>{l(new Error(`relayer.request - publish interrupted, id: ${r}`));};this.provider.on(E.disconnect,d);const g=await o;this.provider.off(E.disconnect,d),h(g);});return this.logger.trace({id:r,method:t.method,topic:(s=t.params)==null?void 0:s.topic},"relayer.request - published"),a}catch(o){throw this.logger.debug(`Failed to Publish Request: ${r}`),o}finally{this.requestsInFlight.delete(r);}},this.resetPingTimeout=()=>{if(pi())try{clearTimeout(this.pingTimeout),this.pingTimeout=setTimeout(()=>{var t,i,s;(s=(i=(t=this.provider)==null?void 0:t.connection)==null?void 0:i.socket)==null||s.terminate();},this.heartBeatTimeout);}catch(t){this.logger.warn(t);}},this.onPayloadHandler=t=>{this.onProviderPayload(t),this.resetPingTimeout();},this.onConnectHandler=()=>{this.logger.trace("relayer connected"),this.startPingTimeout(),this.events.emit(f.connect);},this.onDisconnectHandler=()=>{this.logger.trace("relayer disconnected"),this.onProviderDisconnect();},this.onProviderErrorHandler=t=>{this.logger.error(t),this.events.emit(f.error,t),this.logger.info("Fatal socket error received, closing transport"),this.transportClose();},this.registerProviderListeners=()=>{this.provider.on(E.payload,this.onPayloadHandler),this.provider.on(E.connect,this.onConnectHandler),this.provider.on(E.disconnect,this.onDisconnectHandler),this.provider.on(E.error,this.onProviderErrorHandler);},this.core=e.core,this.logger=typeof e.logger<"u"&&typeof e.logger!="string"?E$2(e.logger,this.name):ot$1(k({level:e.logger||ht})),this.messages=new Ot(this.logger,e.core),this.subscriber=new Nt(this,this.logger),this.publisher=new vr(this,this.logger),this.relayUrl=e?.relayUrl||ye,this.projectId=e.projectId,this.bundleId=Wo(),this.provider={};}async init(){this.logger.trace("Initialized"),this.registerEventListeners(),await Promise.all([this.messages.init(),this.subscriber.init()]),await this.transportOpen(),this.initialized=!0,setTimeout(async()=>{this.subscriber.topics.length===0&&this.subscriber.pending.size===0&&(this.logger.info("No topics subscribed to after init, closing transport"),await this.transportClose(),this.transportExplicitlyClosed=!1);},gt);}get context(){return y$2(this.logger)}get connected(){var e,t,i;return ((i=(t=(e=this.provider)==null?void 0:e.connection)==null?void 0:t.socket)==null?void 0:i.readyState)===1}get connecting(){var e,t,i;return ((i=(t=(e=this.provider)==null?void 0:e.connection)==null?void 0:t.socket)==null?void 0:i.readyState)===0}async publish(e,t,i){this.isInitialized(),await this.publisher.publish(e,t,i),await this.recordMessageEvent({topic:e,message:t,publishedAt:Date.now()});}async subscribe(e,t){var i;this.isInitialized();let s=((i=this.subscriber.topicMap.get(e))==null?void 0:i[0])||"",r;const o=a=>{a.topic===e&&(this.subscriber.off(S.created,o),r());};return await Promise.all([new Promise(a=>{r=a,this.subscriber.on(S.created,o);}),new Promise(async a=>{s=await this.subscriber.subscribe(e,t)||s,a();})]),s}async unsubscribe(e,t){this.isInitialized(),await this.subscriber.unsubscribe(e,t);}on(e,t){this.events.on(e,t);}once(e,t){this.events.once(e,t);}off(e,t){this.events.off(e,t);}removeListener(e,t){this.events.removeListener(e,t);}async transportDisconnect(){if(!this.hasExperiencedNetworkDisruption&&this.connected&&this.requestsInFlight.size>0)try{await Promise.all(Array.from(this.requestsInFlight.values()).map(e=>e.promise));}catch(e){this.logger.warn(e);}this.hasExperiencedNetworkDisruption||this.connected?await u0(this.provider.disconnect(),2e3,"provider.disconnect()").catch(()=>this.onProviderDisconnect()):this.onProviderDisconnect();}async transportClose(){this.transportExplicitlyClosed=!0,await this.transportDisconnect();}async transportOpen(e){await this.confirmOnlineStateOrThrow(),e&&e!==this.relayUrl&&(this.relayUrl=e,await this.transportDisconnect()),await this.createProvider(),this.connectionAttemptInProgress=!0,this.transportExplicitlyClosed=!1;try{await new Promise(async(t,i)=>{const s=()=>{this.provider.off(E.disconnect,s),i(new Error("Connection interrupted while trying to subscribe"));};this.provider.on(E.disconnect,s),await u0(this.provider.connect(),cjs$3.toMiliseconds(cjs$3.ONE_MINUTE),`Socket stalled when trying to connect to ${this.relayUrl}`).catch(r=>{i(r);}),this.subscriber.start().catch(r=>{this.logger.error(r),this.onDisconnectHandler();}),this.hasExperiencedNetworkDisruption=!1,t();});}catch(t){this.logger.error(t);const i=t;if(this.hasExperiencedNetworkDisruption=!0,!this.isConnectionStalled(i.message))throw t}finally{this.connectionAttemptInProgress=!1;}}async restartTransport(e){this.connectionAttemptInProgress||(this.relayUrl=e||this.relayUrl,await this.confirmOnlineStateOrThrow(),await this.transportClose(),await this.transportOpen());}async confirmOnlineStateOrThrow(){if(!await hh())throw new Error("No internet connection detected. Please restart your network and try again.")}async handleBatchMessageEvents(e){if(e?.length===0){this.logger.trace("Batch message events is empty. Ignoring...");return}const t=e.sort((i,s)=>i.publishedAt-s.publishedAt);this.logger.trace(`Batch of ${t.length} message events sorted`);for(const i of t)try{await this.onMessageEvent(i);}catch(s){this.logger.warn(s);}this.logger.trace(`Batch of ${t.length} message events processed`);}startPingTimeout(){var e,t,i,s,r;if(pi())try{(t=(e=this.provider)==null?void 0:e.connection)!=null&&t.socket&&((r=(s=(i=this.provider)==null?void 0:i.connection)==null?void 0:s.socket)==null||r.once("ping",()=>{this.resetPingTimeout();})),this.resetPingTimeout();}catch(o){this.logger.warn(o);}}isConnectionStalled(e){return this.staleConnectionErrors.some(t=>e.includes(t))}async createProvider(){this.provider.connection&&this.unregisterProviderListeners();const e=await this.core.crypto.signJWT(this.relayUrl);this.provider=new o(new f$1($o({sdkVersion:dt,protocol:this.protocol,version:this.version,relayUrl:this.relayUrl,projectId:this.projectId,auth:e,useOnCloseEvent:!0,bundleId:this.bundleId}))),this.registerProviderListeners();}async recordMessageEvent(e){const{topic:t,message:i}=e;await this.messages.set(t,i);}async shouldIgnoreMessageEvent(e){const{topic:t,message:i}=e;if(!i||i.length===0)return this.logger.debug(`Ignoring invalid/empty message: ${i}`),!0;if(!await this.subscriber.isSubscribed(t))return this.logger.debug(`Ignoring message for non-subscribed topic ${t}`),!0;const s=this.messages.has(t,i);return s&&this.logger.debug(`Ignoring duplicate message: ${i}`),s}async onProviderPayload(e){if(this.logger.debug("Incoming Relay Payload"),this.logger.trace({type:"payload",direction:"incoming",payload:e}),isJsonRpcRequest(e)){if(!e.method.endsWith(lt))return;const t=e.params,{topic:i,message:s,publishedAt:r}=t.data,o={topic:i,message:s,publishedAt:r};this.logger.debug("Emitting Relayer Payload"),this.logger.trace(Ar({type:"event",event:t.id},o)),this.events.emit(t.id,o),await this.acknowledgePayload(e),await this.onMessageEvent(o);}else isJsonRpcResponse(e)&&this.events.emit(f.message_ack,e);}async onMessageEvent(e){await this.shouldIgnoreMessageEvent(e)||(this.events.emit(f.message,e),await this.recordMessageEvent(e));}async acknowledgePayload(e){const t=formatJsonRpcResult(e.id,!0);await this.provider.connection.send(t);}unregisterProviderListeners(){this.provider.off(E.payload,this.onPayloadHandler),this.provider.off(E.connect,this.onConnectHandler),this.provider.off(E.disconnect,this.onDisconnectHandler),this.provider.off(E.error,this.onProviderErrorHandler),clearTimeout(this.pingTimeout);}async registerEventListeners(){let e=await hh();ch(async t=>{e!==t&&(e=t,t?await this.restartTransport().catch(i=>this.logger.error(i)):(this.hasExperiencedNetworkDisruption=!0,await this.transportDisconnect(),this.transportExplicitlyClosed=!1));});}async onProviderDisconnect(){await this.subscriber.stop(),this.requestsInFlight.clear(),clearTimeout(this.pingTimeout),this.events.emit(f.disconnect),this.connectionAttemptInProgress=!1,!this.transportExplicitlyClosed&&setTimeout(async()=>{await this.transportOpen().catch(e=>this.logger.error(e));},cjs$3.toMiliseconds(ut));}isInitialized(){if(!this.initialized){const{message:e}=xe("NOT_INITIALIZED",this.name);throw new Error(e)}}async toEstablishConnection(){await this.confirmOnlineStateOrThrow(),!this.connected&&(this.connectionAttemptInProgress&&await new Promise(e=>{const t=setInterval(()=>{this.connected&&(clearInterval(t),e());},this.connectionStatusPollingInterval);}),await this.transportOpen());}}var zr=Object.defineProperty,$t=Object.getOwnPropertySymbols,Nr=Object.prototype.hasOwnProperty,Lr=Object.prototype.propertyIsEnumerable,Mt=(n,e,t)=>e in n?zr(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Bt$1=(n,e)=>{for(var t in e||(e={}))Nr.call(e,t)&&Mt(n,t,e[t]);if($t)for(var t of $t(e))Lr.call(e,t)&&Mt(n,t,e[t]);return n};class kt extends p{constructor(e,t,i,s=z,r=void 0){super(e,t,i,s),this.core=e,this.logger=t,this.name=i,this.map=new Map,this.version=pt,this.cached=[],this.initialized=!1,this.storagePrefix=z,this.recentlyDeleted=[],this.recentlyDeletedLimit=200,this.init=async()=>{this.initialized||(this.logger.trace("Initialized"),await this.restore(),this.cached.forEach(o=>{this.getKey&&o!==null&&!Pe(o)?this.map.set(this.getKey(o),o):Gu(o)?this.map.set(o.id,o):Yu(o)&&this.map.set(o.topic,o);}),this.cached=[],this.initialized=!0);},this.set=async(o,a)=>{this.isInitialized(),this.map.has(o)?await this.update(o,a):(this.logger.debug("Setting value"),this.logger.trace({type:"method",method:"set",key:o,value:a}),this.map.set(o,a),await this.persist());},this.get=o=>(this.isInitialized(),this.logger.debug("Getting value"),this.logger.trace({type:"method",method:"get",key:o}),this.getData(o)),this.getAll=o=>(this.isInitialized(),o?this.values.filter(a=>Object.keys(o).every(h=>ji(a[h],o[h]))):this.values),this.update=async(o,a)=>{this.isInitialized(),this.logger.debug("Updating value"),this.logger.trace({type:"method",method:"update",key:o,update:a});const h=Bt$1(Bt$1({},this.getData(o)),a);this.map.set(o,h),await this.persist();},this.delete=async(o,a)=>{this.isInitialized(),this.map.has(o)&&(this.logger.debug("Deleting value"),this.logger.trace({type:"method",method:"delete",key:o,reason:a}),this.map.delete(o),this.addToRecentlyDeleted(o),await this.persist());},this.logger=E$2(t,this.name),this.storagePrefix=s,this.getKey=r;}get context(){return y$2(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name}get length(){return this.map.size}get keys(){return Array.from(this.map.keys())}get values(){return Array.from(this.map.values())}addToRecentlyDeleted(e){this.recentlyDeleted.push(e),this.recentlyDeleted.length>=this.recentlyDeletedLimit&&this.recentlyDeleted.splice(0,this.recentlyDeletedLimit/2);}async setDataStore(e){await this.core.storage.setItem(this.storageKey,e);}async getDataStore(){return await this.core.storage.getItem(this.storageKey)}getData(e){const t=this.map.get(e);if(!t){if(this.recentlyDeleted.includes(e)){const{message:s}=xe("MISSING_OR_INVALID",`Record was recently deleted - ${this.name}: ${e}`);throw this.logger.error(s),new Error(s)}const{message:i}=xe("NO_MATCHING_KEY",`${this.name}: ${e}`);throw this.logger.error(i),new Error(i)}return t}async persist(){await this.setDataStore(this.values);}async restore(){try{const e=await this.getDataStore();if(typeof e>"u"||!e.length)return;if(this.map.size){const{message:t}=xe("RESTORE_WILL_OVERRIDE",this.name);throw this.logger.error(t),new Error(t)}this.cached=e,this.logger.debug(`Successfully Restored value for ${this.name}`),this.logger.trace({type:"method",method:"restore",value:this.values});}catch(e){this.logger.debug(`Failed to Restore value for ${this.name}`),this.logger.error(e);}}isInitialized(){if(!this.initialized){const{message:e}=xe("NOT_INITIALIZED",this.name);throw new Error(e)}}}class Kt{constructor(e,t){this.core=e,this.logger=t,this.name=ft,this.version=Et,this.events=new EventEmitter,this.initialized=!1,this.storagePrefix=z,this.ignoredPayloadTypes=[lr$1],this.registeredMethods=[],this.init=async()=>{this.initialized||(await this.pairings.init(),await this.cleanup(),this.registerRelayerEvents(),this.registerExpirerEvents(),this.initialized=!0,this.logger.trace("Initialized"));},this.register=({methods:i})=>{this.isInitialized(),this.registeredMethods=[...new Set([...this.registeredMethods,...i])];},this.create=async i=>{this.isInitialized();const s=gu(),r=await this.core.crypto.setSymKey(s),o=d0(cjs$3.FIVE_MINUTES),a={protocol:at},h={topic:r,expiry:o,relay:a,active:!1},l=Du({protocol:this.core.protocol,version:this.core.version,topic:r,symKey:s,relay:a,expiryTimestamp:o,methods:i?.methods});return this.core.expirer.set(r,o),await this.pairings.set(r,h),await this.core.relayer.subscribe(r),{topic:r,uri:l}},this.pair=async i=>{this.isInitialized(),this.isValidPair(i);const{topic:s,symKey:r,relay:o,expiryTimestamp:a,methods:h}=Pu(i.uri);let l;if(this.pairings.keys.includes(s)&&(l=this.pairings.get(s),l.active))throw new Error(`Pairing already exists: ${s}. Please try again with a new connection URI.`);const d=a||d0(cjs$3.FIVE_MINUTES),g={topic:s,relay:o,expiry:d,active:!1,methods:h};return this.core.expirer.set(s,d),await this.pairings.set(s,g),i.activatePairing&&await this.activate({topic:s}),this.events.emit(q.create,g),this.core.crypto.keychain.has(s)||await this.core.crypto.setSymKey(r,s),await this.core.relayer.subscribe(s,{relay:o}),g},this.activate=async({topic:i})=>{this.isInitialized();const s=d0(cjs$3.THIRTY_DAYS);this.core.expirer.set(i,s),await this.pairings.update(i,{active:!0,expiry:s});},this.ping=async i=>{this.isInitialized(),await this.isValidPing(i);const{topic:s}=i;if(this.pairings.keys.includes(s)){const r=await this.sendRequest(s,"wc_pairingPing",{}),{done:o,resolve:a,reject:h}=a0();this.events.once(v0("pairing_ping",r),({error:l})=>{l?h(l):a();}),await o();}},this.updateExpiry=async({topic:i,expiry:s})=>{this.isInitialized(),await this.pairings.update(i,{expiry:s});},this.updateMetadata=async({topic:i,metadata:s})=>{this.isInitialized(),await this.pairings.update(i,{peerMetadata:s});},this.getPairings=()=>(this.isInitialized(),this.pairings.values),this.disconnect=async i=>{this.isInitialized(),await this.isValidDisconnect(i);const{topic:s}=i;this.pairings.keys.includes(s)&&(await this.sendRequest(s,"wc_pairingDelete",tr$1("USER_DISCONNECTED")),await this.deletePairing(s));},this.sendRequest=async(i,s,r)=>{const o=formatJsonRpcRequest(s,r),a=await this.core.crypto.encode(i,o),h=M[s].req;return this.core.history.set(i,o),this.core.relayer.publish(i,a,h),o.id},this.sendResult=async(i,s,r)=>{const o=formatJsonRpcResult(i,r),a=await this.core.crypto.encode(s,o),h=await this.core.history.get(s,i),l=M[h.request.method].res;await this.core.relayer.publish(s,a,l),await this.core.history.resolve(o);},this.sendError=async(i,s,r)=>{const o=formatJsonRpcError(i,r),a=await this.core.crypto.encode(s,o),h=await this.core.history.get(s,i),l=M[h.request.method]?M[h.request.method].res:M.unregistered_method.res;await this.core.relayer.publish(s,a,l),await this.core.history.resolve(o);},this.deletePairing=async(i,s)=>{await this.core.relayer.unsubscribe(i),await Promise.all([this.pairings.delete(i,tr$1("USER_DISCONNECTED")),this.core.crypto.deleteSymKey(i),s?Promise.resolve():this.core.expirer.del(i)]);},this.cleanup=async()=>{const i=this.pairings.getAll().filter(s=>p0(s.expiry));await Promise.all(i.map(s=>this.deletePairing(s.topic)));},this.onRelayEventRequest=i=>{const{topic:s,payload:r}=i;switch(r.method){case"wc_pairingPing":return this.onPairingPingRequest(s,r);case"wc_pairingDelete":return this.onPairingDeleteRequest(s,r);default:return this.onUnknownRpcMethodRequest(s,r)}},this.onRelayEventResponse=async i=>{const{topic:s,payload:r}=i,o=(await this.core.history.get(s,r.id)).request.method;switch(o){case"wc_pairingPing":return this.onPairingPingResponse(s,r);default:return this.onUnknownRpcMethodResponse(o)}},this.onPairingPingRequest=async(i,s)=>{const{id:r}=s;try{this.isValidPing({topic:i}),await this.sendResult(r,i,!0),this.events.emit(q.ping,{id:r,topic:i});}catch(o){await this.sendError(r,i,o),this.logger.error(o);}},this.onPairingPingResponse=(i,s)=>{const{id:r}=s;setTimeout(()=>{isJsonRpcResult(s)?this.events.emit(v0("pairing_ping",r),{}):isJsonRpcError(s)&&this.events.emit(v0("pairing_ping",r),{error:s.error});},500);},this.onPairingDeleteRequest=async(i,s)=>{const{id:r}=s;try{this.isValidDisconnect({topic:i}),await this.deletePairing(i),this.events.emit(q.delete,{id:r,topic:i});}catch(o){await this.sendError(r,i,o),this.logger.error(o);}},this.onUnknownRpcMethodRequest=async(i,s)=>{const{id:r,method:o}=s;try{if(this.registeredMethods.includes(o))return;const a=tr$1("WC_METHOD_UNSUPPORTED",o);await this.sendError(r,i,a),this.logger.error(a);}catch(a){await this.sendError(r,i,a),this.logger.error(a);}},this.onUnknownRpcMethodResponse=i=>{this.registeredMethods.includes(i)||this.logger.error(tr$1("WC_METHOD_UNSUPPORTED",i));},this.isValidPair=i=>{var s;if(!$u(i)){const{message:o}=xe("MISSING_OR_INVALID",`pair() params: ${i}`);throw new Error(o)}if(!Ju(i.uri)){const{message:o}=xe("MISSING_OR_INVALID",`pair() uri: ${i.uri}`);throw new Error(o)}const r=Pu(i.uri);if(!((s=r?.relay)!=null&&s.protocol)){const{message:o}=xe("MISSING_OR_INVALID","pair() uri#relay-protocol");throw new Error(o)}if(!(r!=null&&r.symKey)){const{message:o}=xe("MISSING_OR_INVALID","pair() uri#symKey");throw new Error(o)}if(r!=null&&r.expiryTimestamp&&cjs$3.toMiliseconds(r?.expiryTimestamp)<Date.now()){const{message:o}=xe("EXPIRED","pair() URI has expired. Please try again with a new connection URI.");throw new Error(o)}},this.isValidPing=async i=>{if(!$u(i)){const{message:r}=xe("MISSING_OR_INVALID",`ping() params: ${i}`);throw new Error(r)}const{topic:s}=i;await this.isValidPairingTopic(s);},this.isValidDisconnect=async i=>{if(!$u(i)){const{message:r}=xe("MISSING_OR_INVALID",`disconnect() params: ${i}`);throw new Error(r)}const{topic:s}=i;await this.isValidPairingTopic(s);},this.isValidPairingTopic=async i=>{if(!Gt$1(i,!1)){const{message:s}=xe("MISSING_OR_INVALID",`pairing topic should be a string: ${i}`);throw new Error(s)}if(!this.pairings.keys.includes(i)){const{message:s}=xe("NO_MATCHING_KEY",`pairing topic doesn't exist: ${i}`);throw new Error(s)}if(p0(this.pairings.get(i).expiry)){await this.deletePairing(i);const{message:s}=xe("EXPIRED",`pairing topic: ${i}`);throw new Error(s)}},this.core=e,this.logger=E$2(t,this.name),this.pairings=new kt(this.core,this.logger,this.name,this.storagePrefix);}get context(){return y$2(this.logger)}isInitialized(){if(!this.initialized){const{message:e}=xe("NOT_INITIALIZED",this.name);throw new Error(e)}}registerRelayerEvents(){this.core.relayer.on(f.message,async e=>{const{topic:t,message:i}=e;if(!this.pairings.keys.includes(t)||this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(i)))return;const s=await this.core.crypto.decode(t,i);try{isJsonRpcRequest(s)?(this.core.history.set(t,s),this.onRelayEventRequest({topic:t,payload:s})):isJsonRpcResponse(s)&&(await this.core.history.resolve(s),await this.onRelayEventResponse({topic:t,payload:s}),this.core.history.delete(t,s.id));}catch(r){this.logger.error(r);}});}registerExpirerEvents(){this.core.expirer.on(C.expired,async e=>{const{topic:t}=l0(e.target);t&&this.pairings.keys.includes(t)&&(await this.deletePairing(t,!0),this.events.emit(q.expire,{topic:t}));});}}class qt extends h$1{constructor(e,t){super(e,t),this.core=e,this.logger=t,this.records=new Map,this.events=new EventEmitter,this.name=wt,this.version=vt,this.cached=[],this.initialized=!1,this.storagePrefix=z,this.init=async()=>{this.initialized||(this.logger.trace("Initialized"),await this.restore(),this.cached.forEach(i=>this.records.set(i.id,i)),this.cached=[],this.registerEventListeners(),this.initialized=!0);},this.set=(i,s,r)=>{if(this.isInitialized(),this.logger.debug("Setting JSON-RPC request history record"),this.logger.trace({type:"method",method:"set",topic:i,request:s,chainId:r}),this.records.has(s.id))return;const o={id:s.id,topic:i,request:{method:s.method,params:s.params||null},chainId:r,expiry:d0(cjs$3.THIRTY_DAYS)};this.records.set(o.id,o),this.persist(),this.events.emit(I.created,o);},this.resolve=async i=>{if(this.isInitialized(),this.logger.debug("Updating JSON-RPC response history record"),this.logger.trace({type:"method",method:"update",response:i}),!this.records.has(i.id))return;const s=await this.getRecord(i.id);typeof s.response>"u"&&(s.response=isJsonRpcError(i)?{error:i.error}:{result:i.result},this.records.set(s.id,s),this.persist(),this.events.emit(I.updated,s));},this.get=async(i,s)=>(this.isInitialized(),this.logger.debug("Getting record"),this.logger.trace({type:"method",method:"get",topic:i,id:s}),await this.getRecord(s)),this.delete=(i,s)=>{this.isInitialized(),this.logger.debug("Deleting record"),this.logger.trace({type:"method",method:"delete",id:s}),this.values.forEach(r=>{if(r.topic===i){if(typeof s<"u"&&r.id!==s)return;this.records.delete(r.id),this.events.emit(I.deleted,r);}}),this.persist();},this.exists=async(i,s)=>(this.isInitialized(),this.records.has(s)?(await this.getRecord(s)).topic===i:!1),this.on=(i,s)=>{this.events.on(i,s);},this.once=(i,s)=>{this.events.once(i,s);},this.off=(i,s)=>{this.events.off(i,s);},this.removeListener=(i,s)=>{this.events.removeListener(i,s);},this.logger=E$2(t,this.name);}get context(){return y$2(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name}get size(){return this.records.size}get keys(){return Array.from(this.records.keys())}get values(){return Array.from(this.records.values())}get pending(){const e=[];return this.values.forEach(t=>{if(typeof t.response<"u")return;const i={topic:t.topic,request:formatJsonRpcRequest(t.request.method,t.request.params,t.id),chainId:t.chainId};return e.push(i)}),e}async setJsonRpcRecords(e){await this.core.storage.setItem(this.storageKey,e);}async getJsonRpcRecords(){return await this.core.storage.getItem(this.storageKey)}getRecord(e){this.isInitialized();const t=this.records.get(e);if(!t){const{message:i}=xe("NO_MATCHING_KEY",`${this.name}: ${e}`);throw new Error(i)}return t}async persist(){await this.setJsonRpcRecords(this.values),this.events.emit(I.sync);}async restore(){try{const e=await this.getJsonRpcRecords();if(typeof e>"u"||!e.length)return;if(this.records.size){const{message:t}=xe("RESTORE_WILL_OVERRIDE",this.name);throw this.logger.error(t),new Error(t)}this.cached=e,this.logger.debug(`Successfully Restored records for ${this.name}`),this.logger.trace({type:"method",method:"restore",records:this.values});}catch(e){this.logger.debug(`Failed to Restore records for ${this.name}`),this.logger.error(e);}}registerEventListeners(){this.events.on(I.created,e=>{const t=I.created;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,record:e});}),this.events.on(I.updated,e=>{const t=I.updated;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,record:e});}),this.events.on(I.deleted,e=>{const t=I.deleted;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,record:e});}),this.core.heartbeat.on(r$1.pulse,()=>{this.cleanup();});}cleanup(){try{this.isInitialized();let e=!1;this.records.forEach(t=>{cjs$3.toMiliseconds(t.expiry||0)-Date.now()<=0&&(this.logger.info(`Deleting expired history log: ${t.id}`),this.records.delete(t.id),this.events.emit(I.deleted,t,!1),e=!0);}),e&&this.persist();}catch(e){this.logger.warn(e);}}isInitialized(){if(!this.initialized){const{message:e}=xe("NOT_INITIALIZED",this.name);throw new Error(e)}}}class Vt extends E$1{constructor(e,t){super(e,t),this.core=e,this.logger=t,this.expirations=new Map,this.events=new EventEmitter,this.name=It,this.version=Ct,this.cached=[],this.initialized=!1,this.storagePrefix=z,this.init=async()=>{this.initialized||(this.logger.trace("Initialized"),await this.restore(),this.cached.forEach(i=>this.expirations.set(i.target,i)),this.cached=[],this.registerEventListeners(),this.initialized=!0);},this.has=i=>{try{const s=this.formatTarget(i);return typeof this.getExpiration(s)<"u"}catch{return !1}},this.set=(i,s)=>{this.isInitialized();const r=this.formatTarget(i),o={target:r,expiry:s};this.expirations.set(r,o),this.checkExpiry(r,o),this.events.emit(C.created,{target:r,expiration:o});},this.get=i=>{this.isInitialized();const s=this.formatTarget(i);return this.getExpiration(s)},this.del=i=>{if(this.isInitialized(),this.has(i)){const s=this.formatTarget(i),r=this.getExpiration(s);this.expirations.delete(s),this.events.emit(C.deleted,{target:s,expiration:r});}},this.on=(i,s)=>{this.events.on(i,s);},this.once=(i,s)=>{this.events.once(i,s);},this.off=(i,s)=>{this.events.off(i,s);},this.removeListener=(i,s)=>{this.events.removeListener(i,s);},this.logger=E$2(t,this.name);}get context(){return y$2(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name}get length(){return this.expirations.size}get keys(){return Array.from(this.expirations.keys())}get values(){return Array.from(this.expirations.values())}formatTarget(e){if(typeof e=="string")return h0(e);if(typeof e=="number")return c0(e);const{message:t}=xe("UNKNOWN_TYPE",`Target type: ${typeof e}`);throw new Error(t)}async setExpirations(e){await this.core.storage.setItem(this.storageKey,e);}async getExpirations(){return await this.core.storage.getItem(this.storageKey)}async persist(){await this.setExpirations(this.values),this.events.emit(C.sync);}async restore(){try{const e=await this.getExpirations();if(typeof e>"u"||!e.length)return;if(this.expirations.size){const{message:t}=xe("RESTORE_WILL_OVERRIDE",this.name);throw this.logger.error(t),new Error(t)}this.cached=e,this.logger.debug(`Successfully Restored expirations for ${this.name}`),this.logger.trace({type:"method",method:"restore",expirations:this.values});}catch(e){this.logger.debug(`Failed to Restore expirations for ${this.name}`),this.logger.error(e);}}getExpiration(e){const t=this.expirations.get(e);if(!t){const{message:i}=xe("NO_MATCHING_KEY",`${this.name}: ${e}`);throw this.logger.warn(i),new Error(i)}return t}checkExpiry(e,t){const{expiry:i}=t;cjs$3.toMiliseconds(i)-Date.now()<=0&&this.expire(e,t);}expire(e,t){this.expirations.delete(e),this.events.emit(C.expired,{target:e,expiration:t});}checkExpirations(){this.core.relayer.connected&&this.expirations.forEach((e,t)=>this.checkExpiry(t,e));}registerEventListeners(){this.core.heartbeat.on(r$1.pulse,()=>this.checkExpirations()),this.events.on(C.created,e=>{const t=C.created;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,data:e}),this.persist();}),this.events.on(C.expired,e=>{const t=C.expired;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,data:e}),this.persist();}),this.events.on(C.deleted,e=>{const t=C.deleted;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,data:e}),this.persist();});}isInitialized(){if(!this.initialized){const{message:e}=xe("NOT_INITIALIZED",this.name);throw new Error(e)}}}class jt extends y$1{constructor(e,t){super(e,t),this.projectId=e,this.logger=t,this.name=Z,this.initialized=!1,this.queue=[],this.verifyDisabled=!1,this.init=async i=>{if(this.verifyDisabled||er$1()||!pr$1())return;const s=this.getVerifyUrl(i?.verifyUrl);this.verifyUrl!==s&&this.removeIframe(),this.verifyUrl=s;try{await this.createIframe();}catch(r){this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`),this.logger.info(r),this.verifyDisabled=!0;}},this.register=async i=>{this.initialized?this.sendPost(i.attestationId):(this.addToQueue(i.attestationId),await this.init());},this.resolve=async i=>{if(this.isDevEnv)return "";const s=this.getVerifyUrl(i?.verifyUrl);return this.fetchAttestation(i.attestationId,s)},this.fetchAttestation=async(i,s)=>{this.logger.info(`resolving attestation: ${i} from url: ${s}`);const r=this.startAbortTimer(cjs$3.ONE_SECOND*5),o=await fetch(`${s}/attestation/${i}`,{signal:this.abortController.signal});return clearTimeout(r),o.status===200?await o.json():void 0},this.addToQueue=i=>{this.queue.push(i);},this.processQueue=()=>{this.queue.length!==0&&(this.queue.forEach(i=>this.sendPost(i)),this.queue=[]);},this.sendPost=i=>{var s;try{if(!this.iframe)return;(s=this.iframe.contentWindow)==null||s.postMessage(i,"*"),this.logger.info(`postMessage sent: ${i} ${this.verifyUrl}`);}catch{}},this.createIframe=async()=>{let i;const s=r=>{r.data==="verify_ready"&&(this.onInit(),window.removeEventListener("message",s),i());};await Promise.race([new Promise(r=>{const o=document.getElementById(Z);if(o)return this.iframe=o,this.onInit(),r();window.addEventListener("message",s);const a=document.createElement("iframe");a.id=Z,a.src=`${this.verifyUrl}/${this.projectId}`,a.style.display="none",document.body.append(a),this.iframe=a,i=r;}),new Promise((r,o)=>setTimeout(()=>{window.removeEventListener("message",s),o("verify iframe load timeout");},cjs$3.toMiliseconds(cjs$3.FIVE_SECONDS)))]);},this.onInit=()=>{this.initialized=!0,this.processQueue();},this.removeIframe=()=>{this.iframe&&(this.iframe.remove(),this.iframe=void 0,this.initialized=!1);},this.getVerifyUrl=i=>{let s=i||V;return _t.includes(s)||(this.logger.info(`verify url: ${s}, not included in trusted list, assigning default: ${V}`),s=V),s},this.logger=E$2(t,this.name),this.verifyUrl=V,this.abortController=new AbortController,this.isDevEnv=pi()&&browser$1$1.env.IS_VITEST;}get context(){return y$2(this.logger)}startAbortTimer(e){return this.abortController=new AbortController,setTimeout(()=>this.abortController.abort(),cjs$3.toMiliseconds(e))}}class Gt extends v{constructor(e,t){super(e,t),this.projectId=e,this.logger=t,this.context=Rt,this.registerDeviceToken=async i=>{const{clientId:s,token:r,notificationType:o,enableEncrypted:a=!1}=i,h=`${St}/${this.projectId}/clients`;await Gi(h,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({client_id:s,type:o,token:r,always_raw:a})});},this.logger=E$2(t,this.context);}}var Ur=Object.defineProperty,Ht=Object.getOwnPropertySymbols,Fr=Object.prototype.hasOwnProperty,$r=Object.prototype.propertyIsEnumerable,Yt$1=(n,e,t)=>e in n?Ur(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Jt$1=(n,e)=>{for(var t in e||(e={}))Fr.call(e,t)&&Yt$1(n,t,e[t]);if(Ht)for(var t of Ht(e))$r.call(e,t)&&Yt$1(n,t,e[t]);return n};class ee extends n$1{constructor(e){var t;super(e),this.protocol=pe,this.version=Xe$1,this.name=Q,this.events=new EventEmitter,this.initialized=!1,this.on=(o,a)=>this.events.on(o,a),this.once=(o,a)=>this.events.once(o,a),this.off=(o,a)=>this.events.off(o,a),this.removeListener=(o,a)=>this.events.removeListener(o,a),this.projectId=e?.projectId,this.relayUrl=e?.relayUrl||ye,this.customStoragePrefix=e!=null&&e.customStoragePrefix?`:${e.customStoragePrefix}`:"";const i=k({level:typeof e?.logger=="string"&&e.logger?e.logger:We$1.logger}),{logger:s,chunkLoggerController:r}=A({opts:i,maxSizeInBytes:e?.maxLogBlobSizeInBytes,loggerOverride:e?.logger});this.logChunkController=r,(t=this.logChunkController)!=null&&t.downloadLogsBlobInBrowser&&(window.downloadLogsBlobInBrowser=async()=>{var o,a;(o=this.logChunkController)!=null&&o.downloadLogsBlobInBrowser&&((a=this.logChunkController)==null||a.downloadLogsBlobInBrowser({clientId:await this.crypto.getClientId()}));}),this.logger=E$2(s,this.name),this.heartbeat=new i$1,this.crypto=new xt(this,this.logger,e?.keychain),this.history=new qt(this,this.logger),this.expirer=new Vt(this,this.logger),this.storage=e!=null&&e.storage?e.storage:new h$2(Jt$1(Jt$1({},Qe$1),e?.storageOptions)),this.relayer=new Ft({core:this,logger:this.logger,relayUrl:this.relayUrl,projectId:this.projectId}),this.pairing=new Kt(this,this.logger),this.verify=new jt(this.projectId||"",this.logger),this.echoClient=new Gt(this.projectId||"",this.logger);}static async init(e){const t=new ee(e);await t.initialize();const i=await t.crypto.getClientId();return await t.storage.setItem(Dt,i),t}get context(){return y$2(this.logger)}async start(){this.initialized||await this.initialize();}async getLogsBlob(){var e;return (e=this.logChunkController)==null?void 0:e.logsToBlob({clientId:await this.crypto.getClientId()})}async initialize(){this.logger.trace("Initialized");try{await this.crypto.init(),await this.history.init(),await this.expirer.init(),await this.relayer.init(),await this.heartbeat.init(),await this.pairing.init(),this.initialized=!0,this.logger.info("Core Initialization Success");}catch(e){throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`,e),this.logger.error(e.message),e}}}const Mr=ee;

const Ee="wc",Se=2,_e="client",ie=`${Ee}@${Se}:${_e}:`,re={name:_e,logger:"error",controller:!1,relayUrl:"wss://relay.walletconnect.com"},fe="WALLETCONNECT_DEEPLINK_CHOICE",Ue="proposal",Ge="Proposal expired",ke="session",$=cjs$3.SEVEN_DAYS,je="engine",R={wc_sessionPropose:{req:{ttl:cjs$3.FIVE_MINUTES,prompt:!0,tag:1100},res:{ttl:cjs$3.FIVE_MINUTES,prompt:!1,tag:1101},reject:{ttl:cjs$3.FIVE_MINUTES,prompt:!1,tag:1120},autoReject:{ttl:cjs$3.FIVE_MINUTES,prompt:!1,tag:1121}},wc_sessionSettle:{req:{ttl:cjs$3.FIVE_MINUTES,prompt:!1,tag:1102},res:{ttl:cjs$3.FIVE_MINUTES,prompt:!1,tag:1103}},wc_sessionUpdate:{req:{ttl:cjs$3.ONE_DAY,prompt:!1,tag:1104},res:{ttl:cjs$3.ONE_DAY,prompt:!1,tag:1105}},wc_sessionExtend:{req:{ttl:cjs$3.ONE_DAY,prompt:!1,tag:1106},res:{ttl:cjs$3.ONE_DAY,prompt:!1,tag:1107}},wc_sessionRequest:{req:{ttl:cjs$3.FIVE_MINUTES,prompt:!0,tag:1108},res:{ttl:cjs$3.FIVE_MINUTES,prompt:!1,tag:1109}},wc_sessionEvent:{req:{ttl:cjs$3.FIVE_MINUTES,prompt:!0,tag:1110},res:{ttl:cjs$3.FIVE_MINUTES,prompt:!1,tag:1111}},wc_sessionDelete:{req:{ttl:cjs$3.ONE_DAY,prompt:!1,tag:1112},res:{ttl:cjs$3.ONE_DAY,prompt:!1,tag:1113}},wc_sessionPing:{req:{ttl:cjs$3.ONE_DAY,prompt:!1,tag:1114},res:{ttl:cjs$3.ONE_DAY,prompt:!1,tag:1115}},wc_sessionAuthenticate:{req:{ttl:cjs$3.ONE_HOUR,prompt:!0,tag:1116},res:{ttl:cjs$3.ONE_HOUR,prompt:!1,tag:1117},reject:{ttl:cjs$3.FIVE_MINUTES,prompt:!1,tag:1118},autoReject:{ttl:cjs$3.FIVE_MINUTES,prompt:!1,tag:1119}}},ne={min:cjs$3.FIVE_MINUTES,max:cjs$3.SEVEN_DAYS},D={idle:"IDLE",active:"ACTIVE"},Fe="request",Qe=["wc_sessionPropose","wc_sessionRequest","wc_authRequest","wc_sessionAuthenticate"],ze="wc",He="auth",Ye="authKeys",Xe="pairingTopics",Je="requests",J=`${ze}@${1.5}:${He}:`,B=`${J}:PUB_KEY`;var Yt=Object.defineProperty,Xt=Object.defineProperties,Jt=Object.getOwnPropertyDescriptors,Be=Object.getOwnPropertySymbols,Bt=Object.prototype.hasOwnProperty,Wt=Object.prototype.propertyIsEnumerable,We=(E,n,t)=>n in E?Yt(E,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):E[n]=t,m=(E,n)=>{for(var t in n||(n={}))Bt.call(n,t)&&We(E,t,n[t]);if(Be)for(var t of Be(n))Wt.call(n,t)&&We(E,t,n[t]);return E},L=(E,n)=>Xt(E,Jt(n));class Zt extends w$1{constructor(n){super(n),this.name=je,this.events=new EventEmitter,this.initialized=!1,this.requestQueue={state:D.idle,queue:[]},this.sessionRequestQueue={state:D.idle,queue:[]},this.requestQueueDelay=cjs$3.ONE_SECOND,this.expectedPairingMethodMap=new Map,this.recentlyDeletedMap=new Map,this.recentlyDeletedLimit=200,this.relayMessageCache=[],this.init=async()=>{this.initialized||(await this.cleanup(),this.registerRelayerEvents(),this.registerExpirerEvents(),this.registerPairingEvents(),this.client.core.pairing.register({methods:Object.keys(R)}),this.initialized=!0,setTimeout(()=>{this.sessionRequestQueue.queue=this.getPendingSessionRequests(),this.processSessionRequestQueue();},cjs$3.toMiliseconds(this.requestQueueDelay)));},this.connect=async t=>{await this.isInitialized();const e=L(m({},t),{requiredNamespaces:t.requiredNamespaces||{},optionalNamespaces:t.optionalNamespaces||{}});await this.isValidConnect(e);const{pairingTopic:s,requiredNamespaces:i,optionalNamespaces:r,sessionProperties:o,relays:a}=e;let c=s,h,d=!1;try{c&&(d=this.client.core.pairing.pairings.get(c).active);}catch(v){throw this.client.logger.error(`connect() -> pairing.get(${c}) failed`),v}if(!c||!d){const{topic:v,uri:O}=await this.client.core.pairing.create();c=v,h=O;}if(!c){const{message:v}=xe("NO_MATCHING_KEY",`connect() pairing topic: ${c}`);throw new Error(v)}const u=await this.client.core.crypto.generateKeyPair(),p=R.wc_sessionPropose.req.ttl||cjs$3.FIVE_MINUTES,w=d0(p),y=m({requiredNamespaces:i,optionalNamespaces:r,relays:a??[{protocol:at}],proposer:{publicKey:u,metadata:this.client.metadata},expiryTimestamp:w,pairingTopic:c},o&&{sessionProperties:o}),{reject:S,resolve:T,done:_}=a0(p,Ge);this.events.once(v0("session_connect"),async({error:v,session:O})=>{if(v)S(v);else if(O){O.self.publicKey=u;const Q=L(m({},O),{pairingTopic:y.pairingTopic,requiredNamespaces:y.requiredNamespaces,optionalNamespaces:y.optionalNamespaces});await this.client.session.set(O.topic,Q),await this.setExpiry(O.topic,O.expiry),c&&await this.client.core.pairing.updateMetadata({topic:c,metadata:O.peer.metadata}),this.cleanupDuplicatePairings(Q),T(Q);}});const P=await this.sendRequest({topic:c,method:"wc_sessionPropose",params:y,throwOnFailedPublish:!0});return await this.setProposal(P,m({id:P},y)),{uri:h,approval:_}},this.pair=async t=>{await this.isInitialized();try{return await this.client.core.pairing.pair(t)}catch(e){throw this.client.logger.error("pair() failed"),e}},this.approve=async t=>{await this.isInitialized();try{await this.isValidApprove(t);}catch(_){throw this.client.logger.error("approve() -> isValidApprove() failed"),_}const{id:e,relayProtocol:s,namespaces:i,sessionProperties:r,sessionConfig:o}=t;let a;try{a=this.client.proposal.get(e);}catch(_){throw this.client.logger.error(`approve() -> proposal.get(${e}) failed`),_}const{pairingTopic:c,proposer:h,requiredNamespaces:d,optionalNamespaces:u}=a,p=await this.client.core.crypto.generateKeyPair(),w=h.publicKey,y=await this.client.core.crypto.generateSharedKey(p,w),S=m(m({relay:{protocol:s??"irn"},namespaces:i,controller:{publicKey:p,metadata:this.client.metadata},expiry:d0($)},r&&{sessionProperties:r}),o&&{sessionConfig:o});await this.client.core.relayer.subscribe(y);const T=L(m({},S),{topic:y,requiredNamespaces:d,optionalNamespaces:u,pairingTopic:c,acknowledged:!1,self:S.controller,peer:{publicKey:h.publicKey,metadata:h.metadata},controller:p});await this.client.session.set(y,T);try{await this.sendResult({id:e,topic:c,result:{relay:{protocol:s??"irn"},responderPublicKey:p},throwOnFailedPublish:!0}),await this.sendRequest({topic:y,method:"wc_sessionSettle",params:S,throwOnFailedPublish:!0});}catch(_){throw this.client.logger.error(_),this.client.session.delete(y,tr$1("USER_DISCONNECTED")),await this.client.core.relayer.unsubscribe(y),_}return await this.client.core.pairing.updateMetadata({topic:c,metadata:h.metadata}),await this.client.proposal.delete(e,tr$1("USER_DISCONNECTED")),await this.client.core.pairing.activate({topic:c}),await this.setExpiry(y,d0($)),{topic:y,acknowledged:()=>new Promise(_=>setTimeout(()=>_(this.client.session.get(y)),500))}},this.reject=async t=>{await this.isInitialized();try{await this.isValidReject(t);}catch(r){throw this.client.logger.error("reject() -> isValidReject() failed"),r}const{id:e,reason:s}=t;let i;try{i=this.client.proposal.get(e).pairingTopic;}catch(r){throw this.client.logger.error(`reject() -> proposal.get(${e}) failed`),r}i&&(await this.sendError({id:e,topic:i,error:s,rpcOpts:R.wc_sessionPropose.reject}),await this.client.proposal.delete(e,tr$1("USER_DISCONNECTED")));},this.update=async t=>{await this.isInitialized();try{await this.isValidUpdate(t);}catch(d){throw this.client.logger.error("update() -> isValidUpdate() failed"),d}const{topic:e,namespaces:s}=t,{done:i,resolve:r,reject:o}=a0(),a=payloadId(),c=getBigIntRpcId().toString(),h=this.client.session.get(e).namespaces;return this.events.once(v0("session_update",a),({error:d})=>{d?o(d):r();}),await this.client.session.update(e,{namespaces:s}),await this.sendRequest({topic:e,method:"wc_sessionUpdate",params:{namespaces:s},throwOnFailedPublish:!0,clientRpcId:a,relayRpcId:c}).catch(d=>{this.client.logger.error(d),this.client.session.update(e,{namespaces:h}),o(d);}),{acknowledged:i}},this.extend=async t=>{await this.isInitialized();try{await this.isValidExtend(t);}catch(a){throw this.client.logger.error("extend() -> isValidExtend() failed"),a}const{topic:e}=t,s=payloadId(),{done:i,resolve:r,reject:o}=a0();return this.events.once(v0("session_extend",s),({error:a})=>{a?o(a):r();}),await this.setExpiry(e,d0($)),this.sendRequest({topic:e,method:"wc_sessionExtend",params:{},clientRpcId:s,throwOnFailedPublish:!0}).catch(a=>{o(a);}),{acknowledged:i}},this.request=async t=>{await this.isInitialized();try{await this.isValidRequest(t);}catch(p){throw this.client.logger.error("request() -> isValidRequest() failed"),p}const{chainId:e,request:s,topic:i,expiry:r=R.wc_sessionRequest.req.ttl}=t,o=this.client.session.get(i),a=payloadId(),c=getBigIntRpcId().toString(),{done:h,resolve:d,reject:u}=a0(r,"Request expired. Please try again.");return this.events.once(v0("session_request",a),({error:p,result:w})=>{p?u(p):d(w);}),await Promise.all([new Promise(async p=>{await this.sendRequest({clientRpcId:a,relayRpcId:c,topic:i,method:"wc_sessionRequest",params:{request:L(m({},s),{expiryTimestamp:d0(r)}),chainId:e},expiry:r,throwOnFailedPublish:!0}).catch(w=>u(w)),this.client.events.emit("session_request_sent",{topic:i,request:s,chainId:e,id:a}),p();}),new Promise(async p=>{var w;if(!((w=o.sessionConfig)!=null&&w.disableDeepLink)){const y=await g0(this.client.core.storage,fe);m0({id:a,topic:i,wcDeepLink:y});}p();}),h()]).then(p=>p[2])},this.respond=async t=>{await this.isInitialized(),await this.isValidRespond(t);const{topic:e,response:s}=t,{id:i}=s;isJsonRpcResult(s)?await this.sendResult({id:i,topic:e,result:s.result,throwOnFailedPublish:!0}):isJsonRpcError(s)&&await this.sendError({id:i,topic:e,error:s.error}),this.cleanupAfterResponse(t);},this.ping=async t=>{await this.isInitialized();try{await this.isValidPing(t);}catch(s){throw this.client.logger.error("ping() -> isValidPing() failed"),s}const{topic:e}=t;if(this.client.session.keys.includes(e)){const s=payloadId(),i=getBigIntRpcId().toString(),{done:r,resolve:o,reject:a}=a0();this.events.once(v0("session_ping",s),({error:c})=>{c?a(c):o();}),await Promise.all([this.sendRequest({topic:e,method:"wc_sessionPing",params:{},throwOnFailedPublish:!0,clientRpcId:s,relayRpcId:i}),r()]);}else this.client.core.pairing.pairings.keys.includes(e)&&await this.client.core.pairing.ping({topic:e});},this.emit=async t=>{await this.isInitialized(),await this.isValidEmit(t);const{topic:e,event:s,chainId:i}=t,r=getBigIntRpcId().toString();await this.sendRequest({topic:e,method:"wc_sessionEvent",params:{event:s,chainId:i},throwOnFailedPublish:!0,relayRpcId:r});},this.disconnect=async t=>{await this.isInitialized(),await this.isValidDisconnect(t);const{topic:e}=t;if(this.client.session.keys.includes(e))await this.sendRequest({topic:e,method:"wc_sessionDelete",params:tr$1("USER_DISCONNECTED"),throwOnFailedPublish:!0}),await this.deleteSession({topic:e,emitEvent:!1});else if(this.client.core.pairing.pairings.keys.includes(e))await this.client.core.pairing.disconnect({topic:e});else {const{message:s}=xe("MISMATCHED_TOPIC",`Session or pairing topic not found: ${e}`);throw new Error(s)}},this.find=t=>(this.isInitialized(),this.client.session.getAll().filter(e=>Qu(e,t))),this.getPendingSessionRequests=()=>this.client.pendingRequest.getAll(),this.authenticate=async t=>{this.isInitialized(),this.isValidAuthenticate(t);const{chains:e,statement:s="",uri:i,domain:r,nonce:o,type:a,exp:c,nbf:h,methods:d=[],expiry:u}=t,p=[...t.resources||[]],{topic:w,uri:y}=await this.client.core.pairing.create({methods:["wc_sessionAuthenticate"]});this.client.logger.info({message:"Generated new pairing",pairing:{topic:w,uri:y}});const S=await this.client.core.crypto.generateKeyPair(),T=bu(S);if(await Promise.all([this.client.auth.authKeys.set(B,{responseTopic:T,publicKey:S}),this.client.auth.pairingTopics.set(T,{topic:T,pairingTopic:w})]),await this.client.core.relayer.subscribe(T),this.client.logger.info(`sending request to new pairing topic: ${w}`),d.length>0){const{namespace:A}=dn(e[0]);let f=cu(A,"request",d);Qr(p)&&(f=lu(f,p.pop())),p.push(f);}const _=u&&u>R.wc_sessionAuthenticate.req.ttl?u:R.wc_sessionAuthenticate.req.ttl,P={authPayload:{type:a??"caip122",chains:e,statement:s,aud:i,domain:r,version:"1",nonce:o,iat:new Date().toISOString(),exp:c,nbf:h,resources:p},requester:{publicKey:S,metadata:this.client.metadata},expiryTimestamp:d0(_)},v={eip155:{chains:e,methods:[...new Set(["personal_sign",...d])],events:["chainChanged","accountsChanged"]}},O={requiredNamespaces:{},optionalNamespaces:v,relays:[{protocol:"irn"}],pairingTopic:w,proposer:{publicKey:S,metadata:this.client.metadata},expiryTimestamp:d0(R.wc_sessionPropose.req.ttl)},{done:Q,resolve:Ie,reject:ae}=a0(_,"Request expired"),W=async({error:A,session:f})=>{if(this.events.off(v0("session_request",K),ce),A)ae(A);else if(f){f.self.publicKey=S,await this.client.session.set(f.topic,f),await this.setExpiry(f.topic,f.expiry),w&&await this.client.core.pairing.updateMetadata({topic:w,metadata:f.peer.metadata});const U=this.client.session.get(f.topic);await this.deleteProposal(z),Ie({session:U});}},ce=async A=>{if(await this.deletePendingAuthRequest(K,{message:"fulfilled",code:0}),A.error){const H=tr$1("WC_METHOD_UNSUPPORTED","wc_sessionAuthenticate");return A.error.code===H.code?void 0:(this.events.off(v0("session_connect"),W),ae(A.error.message))}await this.deleteProposal(z),this.events.off(v0("session_connect"),W);const{cacaos:f,responder:U}=A.result,le=[],qe=[];for(const H of f){await ou({cacao:H,projectId:this.client.core.projectId})||(this.client.logger.error(H,"Signature verification failed"),ae(tr$1("SESSION_SETTLEMENT_FAILED","Signature verification failed")));const{p:he}=H,pe=Qr(he.resources),Ne=[fu(he.iss)],et=Li(he.iss);if(pe){const de=du(pe),tt=pu(pe);le.push(...de),Ne.push(...tt);}for(const de of Ne)qe.push(`${de}:${et}`);}const Z=await this.client.core.crypto.generateSharedKey(S,U.publicKey);let ee;le.length>0&&(ee={topic:Z,acknowledged:!0,self:{publicKey:S,metadata:this.client.metadata},peer:U,controller:U.publicKey,expiry:d0($),requiredNamespaces:{},optionalNamespaces:{},relay:{protocol:"irn"},pairingTopic:w,namespaces:ju([...new Set(le)],[...new Set(qe)])},await this.client.core.relayer.subscribe(Z),await this.client.session.set(Z,ee),w&&await this.client.core.pairing.updateMetadata({topic:w,metadata:U.metadata}),ee=this.client.session.get(Z)),Ie({auths:f,session:ee});},K=payloadId(),z=payloadId();this.events.once(v0("session_connect"),W),this.events.once(v0("session_request",K),ce);try{await Promise.all([this.sendRequest({topic:w,method:"wc_sessionAuthenticate",params:P,expiry:t.expiry,throwOnFailedPublish:!0,clientRpcId:K}),this.sendRequest({topic:w,method:"wc_sessionPropose",params:O,expiry:R.wc_sessionPropose.req.ttl,throwOnFailedPublish:!0,clientRpcId:z})]);}catch(A){throw this.events.off(v0("session_connect"),W),this.events.off(v0("session_request",K),ce),A}return await this.setProposal(z,m({id:z},O)),await this.setAuthRequest(K,{request:L(m({},P),{verifyContext:{}}),pairingTopic:w}),{uri:y,response:Q}},this.approveSessionAuthenticate=async t=>{this.isInitialized();const{id:e,auths:s}=t,i=this.getPendingAuthRequest(e);if(!i)throw new Error(`Could not find pending auth request with id ${e}`);const r=i.requester.publicKey,o=await this.client.core.crypto.generateKeyPair(),a=bu(r),c={type:lr$1,receiverPublicKey:r,senderPublicKey:o},h=[],d=[];for(const w of s){if(!await ou({cacao:w,projectId:this.client.core.projectId})){const P=tr$1("SESSION_SETTLEMENT_FAILED","Signature verification failed");throw await this.sendError({id:e,topic:a,error:P,encodeOpts:c}),new Error(P.message)}const{p:y}=w,S=Qr(y.resources),T=[fu(y.iss)],_=Li(y.iss);if(S){const P=du(S),v=pu(S);h.push(...P),T.push(...v);}for(const P of T)d.push(`${P}:${_}`);}const u=await this.client.core.crypto.generateSharedKey(o,r);let p;return h?.length>0&&(p={topic:u,acknowledged:!0,self:{publicKey:o,metadata:this.client.metadata},peer:{publicKey:r,metadata:i.requester.metadata},controller:r,expiry:d0($),authentication:s,requiredNamespaces:{},optionalNamespaces:{},relay:{protocol:"irn"},pairingTopic:i.pairingTopic,namespaces:ju([...new Set(h)],[...new Set(d)])},await this.client.core.relayer.subscribe(u),await this.client.session.set(u,p),await this.client.core.pairing.updateMetadata({topic:i.pairingTopic,metadata:i.requester.metadata})),await this.sendResult({topic:a,id:e,result:{cacaos:s,responder:{publicKey:o,metadata:this.client.metadata}},encodeOpts:c,throwOnFailedPublish:!0}),await this.client.auth.requests.delete(e,{message:"fulfilled",code:0}),await this.client.core.pairing.activate({topic:i.pairingTopic}),{session:p}},this.rejectSessionAuthenticate=async t=>{await this.isInitialized();const{id:e,reason:s}=t,i=this.getPendingAuthRequest(e);if(!i)throw new Error(`Could not find pending auth request with id ${e}`);const r=i.requester.publicKey,o=await this.client.core.crypto.generateKeyPair(),a=bu(r),c={type:lr$1,receiverPublicKey:r,senderPublicKey:o};await this.sendError({id:e,topic:a,error:s,encodeOpts:c,rpcOpts:R.wc_sessionAuthenticate.reject}),await this.client.auth.requests.delete(e,{message:"rejected",code:0}),await this.client.proposal.delete(e,tr$1("USER_DISCONNECTED"));},this.formatAuthMessage=t=>{this.isInitialized();const{request:e,iss:s}=t;return zf(e,s)},this.processRelayMessageCache=()=>{setTimeout(async()=>{if(this.relayMessageCache.length!==0)for(;this.relayMessageCache.length>0;)try{const t=this.relayMessageCache.shift();t&&await this.onRelayMessage(t);}catch(t){this.client.logger.error(t);}},50);},this.cleanupDuplicatePairings=async t=>{if(t.pairingTopic)try{const e=this.client.core.pairing.pairings.get(t.pairingTopic),s=this.client.core.pairing.pairings.getAll().filter(i=>{var r,o;return ((r=i.peerMetadata)==null?void 0:r.url)&&((o=i.peerMetadata)==null?void 0:o.url)===t.peer.metadata.url&&i.topic&&i.topic!==e.topic});if(s.length===0)return;this.client.logger.info(`Cleaning up ${s.length} duplicate pairing(s)`),await Promise.all(s.map(i=>this.client.core.pairing.disconnect({topic:i.topic}))),this.client.logger.info("Duplicate pairings clean up finished");}catch(e){this.client.logger.error(e);}},this.deleteSession=async t=>{var e;const{topic:s,expirerHasDeleted:i=!1,emitEvent:r=!0,id:o=0}=t,{self:a}=this.client.session.get(s);await this.client.core.relayer.unsubscribe(s),await this.client.session.delete(s,tr$1("USER_DISCONNECTED")),this.addToRecentlyDeleted(s,"session"),this.client.core.crypto.keychain.has(a.publicKey)&&await this.client.core.crypto.deleteKeyPair(a.publicKey),this.client.core.crypto.keychain.has(s)&&await this.client.core.crypto.deleteSymKey(s),i||this.client.core.expirer.del(s),this.client.core.storage.removeItem(fe).catch(c=>this.client.logger.warn(c)),this.getPendingSessionRequests().forEach(c=>{c.topic===s&&this.deletePendingSessionRequest(c.id,tr$1("USER_DISCONNECTED"));}),s===((e=this.sessionRequestQueue.queue[0])==null?void 0:e.topic)&&(this.sessionRequestQueue.state=D.idle),r&&this.client.events.emit("session_delete",{id:o,topic:s});},this.deleteProposal=async(t,e)=>{await Promise.all([this.client.proposal.delete(t,tr$1("USER_DISCONNECTED")),e?Promise.resolve():this.client.core.expirer.del(t)]),this.addToRecentlyDeleted(t,"proposal");},this.deletePendingSessionRequest=async(t,e,s=!1)=>{await Promise.all([this.client.pendingRequest.delete(t,e),s?Promise.resolve():this.client.core.expirer.del(t)]),this.addToRecentlyDeleted(t,"request"),this.sessionRequestQueue.queue=this.sessionRequestQueue.queue.filter(i=>i.id!==t),s&&(this.sessionRequestQueue.state=D.idle,this.client.events.emit("session_request_expire",{id:t}));},this.deletePendingAuthRequest=async(t,e,s=!1)=>{await Promise.all([this.client.auth.requests.delete(t,e),s?Promise.resolve():this.client.core.expirer.del(t)]);},this.setExpiry=async(t,e)=>{this.client.session.keys.includes(t)&&(this.client.core.expirer.set(t,e),await this.client.session.update(t,{expiry:e}));},this.setProposal=async(t,e)=>{this.client.core.expirer.set(t,d0(R.wc_sessionPropose.req.ttl)),await this.client.proposal.set(t,e);},this.setAuthRequest=async(t,e)=>{const{request:s,pairingTopic:i}=e;this.client.core.expirer.set(t,s.expiryTimestamp),await this.client.auth.requests.set(t,{authPayload:s.authPayload,requester:s.requester,expiryTimestamp:s.expiryTimestamp,id:t,pairingTopic:i,verifyContext:s.verifyContext});},this.setPendingSessionRequest=async t=>{const{id:e,topic:s,params:i,verifyContext:r}=t,o=i.request.expiryTimestamp||d0(R.wc_sessionRequest.req.ttl);this.client.core.expirer.set(e,o),await this.client.pendingRequest.set(e,{id:e,topic:s,params:i,verifyContext:r});},this.sendRequest=async t=>{const{topic:e,method:s,params:i,expiry:r,relayRpcId:o,clientRpcId:a,throwOnFailedPublish:c}=t,h=formatJsonRpcRequest(s,i,a);if(pr$1()&&Qe.includes(s)){const p=yu(JSON.stringify(h));this.client.core.verify.register({attestationId:p});}let d;try{d=await this.client.core.crypto.encode(e,h);}catch(p){throw await this.cleanup(),this.client.logger.error(`sendRequest() -> core.crypto.encode() for topic ${e} failed`),p}const u=R[s].req;return r&&(u.ttl=r),o&&(u.id=o),this.client.core.history.set(e,h),c?(u.internal=L(m({},u.internal),{throwOnFailedPublish:!0}),await this.client.core.relayer.publish(e,d,u)):this.client.core.relayer.publish(e,d,u).catch(p=>this.client.logger.error(p)),h.id},this.sendResult=async t=>{const{id:e,topic:s,result:i,throwOnFailedPublish:r,encodeOpts:o}=t,a=formatJsonRpcResult(e,i);let c;try{c=await this.client.core.crypto.encode(s,a,o);}catch(u){throw await this.cleanup(),this.client.logger.error(`sendResult() -> core.crypto.encode() for topic ${s} failed`),u}let h;try{h=await this.client.core.history.get(s,e);}catch(u){throw this.client.logger.error(`sendResult() -> history.get(${s}, ${e}) failed`),u}const d=R[h.request.method].res;r?(d.internal=L(m({},d.internal),{throwOnFailedPublish:!0}),await this.client.core.relayer.publish(s,c,d)):this.client.core.relayer.publish(s,c,d).catch(u=>this.client.logger.error(u)),await this.client.core.history.resolve(a);},this.sendError=async t=>{const{id:e,topic:s,error:i,encodeOpts:r,rpcOpts:o}=t,a=formatJsonRpcError(e,i);let c;try{c=await this.client.core.crypto.encode(s,a,r);}catch(u){throw await this.cleanup(),this.client.logger.error(`sendError() -> core.crypto.encode() for topic ${s} failed`),u}let h;try{h=await this.client.core.history.get(s,e);}catch(u){throw this.client.logger.error(`sendError() -> history.get(${s}, ${e}) failed`),u}const d=o||R[h.request.method].res;this.client.core.relayer.publish(s,c,d),await this.client.core.history.resolve(a);},this.cleanup=async()=>{const t=[],e=[];this.client.session.getAll().forEach(s=>{let i=!1;p0(s.expiry)&&(i=!0),this.client.core.crypto.keychain.has(s.topic)||(i=!0),i&&t.push(s.topic);}),this.client.proposal.getAll().forEach(s=>{p0(s.expiryTimestamp)&&e.push(s.id);}),await Promise.all([...t.map(s=>this.deleteSession({topic:s})),...e.map(s=>this.deleteProposal(s))]);},this.onRelayEventRequest=async t=>{this.requestQueue.queue.push(t),await this.processRequestsQueue();},this.processRequestsQueue=async()=>{if(this.requestQueue.state===D.active){this.client.logger.info("Request queue already active, skipping...");return}for(this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`);this.requestQueue.queue.length>0;){this.requestQueue.state=D.active;const t=this.requestQueue.queue.shift();if(t)try{await this.processRequest(t);}catch(e){this.client.logger.warn(e);}}this.requestQueue.state=D.idle;},this.processRequest=async t=>{const{topic:e,payload:s}=t,i=s.method;if(!this.shouldIgnorePairingRequest({topic:e,requestMethod:i}))switch(i){case"wc_sessionPropose":return await this.onSessionProposeRequest(e,s);case"wc_sessionSettle":return await this.onSessionSettleRequest(e,s);case"wc_sessionUpdate":return await this.onSessionUpdateRequest(e,s);case"wc_sessionExtend":return await this.onSessionExtendRequest(e,s);case"wc_sessionPing":return await this.onSessionPingRequest(e,s);case"wc_sessionDelete":return await this.onSessionDeleteRequest(e,s);case"wc_sessionRequest":return await this.onSessionRequest(e,s);case"wc_sessionEvent":return await this.onSessionEventRequest(e,s);case"wc_sessionAuthenticate":return await this.onSessionAuthenticateRequest(e,s);default:return this.client.logger.info(`Unsupported request method ${i}`)}},this.onRelayEventResponse=async t=>{const{topic:e,payload:s}=t,i=(await this.client.core.history.get(e,s.id)).request.method;switch(i){case"wc_sessionPropose":return this.onSessionProposeResponse(e,s);case"wc_sessionSettle":return this.onSessionSettleResponse(e,s);case"wc_sessionUpdate":return this.onSessionUpdateResponse(e,s);case"wc_sessionExtend":return this.onSessionExtendResponse(e,s);case"wc_sessionPing":return this.onSessionPingResponse(e,s);case"wc_sessionRequest":return this.onSessionRequestResponse(e,s);case"wc_sessionAuthenticate":return this.onSessionAuthenticateResponse(e,s);default:return this.client.logger.info(`Unsupported response method ${i}`)}},this.onRelayEventUnknownPayload=t=>{const{topic:e}=t,{message:s}=xe("MISSING_OR_INVALID",`Decoded payload on topic ${e} is not identifiable as a JSON-RPC request or a response.`);throw new Error(s)},this.shouldIgnorePairingRequest=t=>{const{topic:e,requestMethod:s}=t,i=this.expectedPairingMethodMap.get(e);return !i||i.includes(s)?!1:!!(i.includes("wc_sessionAuthenticate")&&this.client.events.listenerCount("session_authenticate")>0)},this.onSessionProposeRequest=async(t,e)=>{const{params:s,id:i}=e;try{this.isValidConnect(m({},e.params));const r=s.expiryTimestamp||d0(R.wc_sessionPropose.req.ttl),o=m({id:i,pairingTopic:t,expiryTimestamp:r},s);await this.setProposal(i,o);const a=yu(JSON.stringify(e)),c=await this.getVerifyContext(a,o.proposer.metadata);this.client.events.emit("session_proposal",{id:i,params:o,verifyContext:c});}catch(r){await this.sendError({id:i,topic:t,error:r,rpcOpts:R.wc_sessionPropose.autoReject}),this.client.logger.error(r);}},this.onSessionProposeResponse=async(t,e)=>{const{id:s}=e;if(isJsonRpcResult(e)){const{result:i}=e;this.client.logger.trace({type:"method",method:"onSessionProposeResponse",result:i});const r=this.client.proposal.get(s);this.client.logger.trace({type:"method",method:"onSessionProposeResponse",proposal:r});const o=r.proposer.publicKey;this.client.logger.trace({type:"method",method:"onSessionProposeResponse",selfPublicKey:o});const a=i.responderPublicKey;this.client.logger.trace({type:"method",method:"onSessionProposeResponse",peerPublicKey:a});const c=await this.client.core.crypto.generateSharedKey(o,a);this.client.logger.trace({type:"method",method:"onSessionProposeResponse",sessionTopic:c});const h=await this.client.core.relayer.subscribe(c);this.client.logger.trace({type:"method",method:"onSessionProposeResponse",subscriptionId:h}),await this.client.core.pairing.activate({topic:t});}else if(isJsonRpcError(e)){await this.client.proposal.delete(s,tr$1("USER_DISCONNECTED"));const i=v0("session_connect");if(this.events.listenerCount(i)===0)throw new Error(`emitting ${i} without any listeners, 954`);this.events.emit(v0("session_connect"),{error:e.error});}},this.onSessionSettleRequest=async(t,e)=>{const{id:s,params:i}=e;try{this.isValidSessionSettleRequest(i);const{relay:r,controller:o,expiry:a,namespaces:c,sessionProperties:h,sessionConfig:d}=e.params,u=m(m({topic:t,relay:r,expiry:a,namespaces:c,acknowledged:!0,pairingTopic:"",requiredNamespaces:{},optionalNamespaces:{},controller:o.publicKey,self:{publicKey:"",metadata:this.client.metadata},peer:{publicKey:o.publicKey,metadata:o.metadata}},h&&{sessionProperties:h}),d&&{sessionConfig:d});await this.sendResult({id:e.id,topic:t,result:!0,throwOnFailedPublish:!0});const p=v0("session_connect");if(this.events.listenerCount(p)===0)throw new Error(`emitting ${p} without any listeners 997`);this.events.emit(v0("session_connect"),{session:u});}catch(r){await this.sendError({id:s,topic:t,error:r}),this.client.logger.error(r);}},this.onSessionSettleResponse=async(t,e)=>{const{id:s}=e;isJsonRpcResult(e)?(await this.client.session.update(t,{acknowledged:!0}),this.events.emit(v0("session_approve",s),{})):isJsonRpcError(e)&&(await this.client.session.delete(t,tr$1("USER_DISCONNECTED")),this.events.emit(v0("session_approve",s),{error:e.error}));},this.onSessionUpdateRequest=async(t,e)=>{const{params:s,id:i}=e;try{const r=`${t}_session_update`,o=lh.get(r);if(o&&this.isRequestOutOfSync(o,i)){this.client.logger.info(`Discarding out of sync request - ${i}`),this.sendError({id:i,topic:t,error:tr$1("INVALID_UPDATE_REQUEST")});return}this.isValidUpdate(m({topic:t},s));try{lh.set(r,i),await this.client.session.update(t,{namespaces:s.namespaces}),await this.sendResult({id:i,topic:t,result:!0,throwOnFailedPublish:!0});}catch(a){throw lh.delete(r),a}this.client.events.emit("session_update",{id:i,topic:t,params:s});}catch(r){await this.sendError({id:i,topic:t,error:r}),this.client.logger.error(r);}},this.isRequestOutOfSync=(t,e)=>parseInt(e.toString().slice(0,-3))<=parseInt(t.toString().slice(0,-3)),this.onSessionUpdateResponse=(t,e)=>{const{id:s}=e,i=v0("session_update",s);if(this.events.listenerCount(i)===0)throw new Error(`emitting ${i} without any listeners`);isJsonRpcResult(e)?this.events.emit(v0("session_update",s),{}):isJsonRpcError(e)&&this.events.emit(v0("session_update",s),{error:e.error});},this.onSessionExtendRequest=async(t,e)=>{const{id:s}=e;try{this.isValidExtend({topic:t}),await this.setExpiry(t,d0($)),await this.sendResult({id:s,topic:t,result:!0,throwOnFailedPublish:!0}),this.client.events.emit("session_extend",{id:s,topic:t});}catch(i){await this.sendError({id:s,topic:t,error:i}),this.client.logger.error(i);}},this.onSessionExtendResponse=(t,e)=>{const{id:s}=e,i=v0("session_extend",s);if(this.events.listenerCount(i)===0)throw new Error(`emitting ${i} without any listeners`);isJsonRpcResult(e)?this.events.emit(v0("session_extend",s),{}):isJsonRpcError(e)&&this.events.emit(v0("session_extend",s),{error:e.error});},this.onSessionPingRequest=async(t,e)=>{const{id:s}=e;try{this.isValidPing({topic:t}),await this.sendResult({id:s,topic:t,result:!0,throwOnFailedPublish:!0}),this.client.events.emit("session_ping",{id:s,topic:t});}catch(i){await this.sendError({id:s,topic:t,error:i}),this.client.logger.error(i);}},this.onSessionPingResponse=(t,e)=>{const{id:s}=e,i=v0("session_ping",s);if(this.events.listenerCount(i)===0)throw new Error(`emitting ${i} without any listeners`);setTimeout(()=>{isJsonRpcResult(e)?this.events.emit(v0("session_ping",s),{}):isJsonRpcError(e)&&this.events.emit(v0("session_ping",s),{error:e.error});},500);},this.onSessionDeleteRequest=async(t,e)=>{const{id:s}=e;try{this.isValidDisconnect({topic:t,reason:e.params}),await Promise.all([new Promise(i=>{this.client.core.relayer.once(f.publish,async()=>{i(await this.deleteSession({topic:t,id:s}));});}),this.sendResult({id:s,topic:t,result:!0,throwOnFailedPublish:!0}),this.cleanupPendingSentRequestsForTopic({topic:t,error:tr$1("USER_DISCONNECTED")})]);}catch(i){this.client.logger.error(i);}},this.onSessionRequest=async(t,e)=>{var s;const{id:i,params:r}=e;try{await this.isValidRequest(m({topic:t},r));const o=yu(JSON.stringify(formatJsonRpcRequest("wc_sessionRequest",r,i))),a=this.client.session.get(t),c=await this.getVerifyContext(o,a.peer.metadata),h={id:i,topic:t,params:r,verifyContext:c};await this.setPendingSessionRequest(h),(s=this.client.signConfig)!=null&&s.disableRequestQueue?this.emitSessionRequest(h):(this.addSessionRequestToSessionRequestQueue(h),this.processSessionRequestQueue());}catch(o){await this.sendError({id:i,topic:t,error:o}),this.client.logger.error(o);}},this.onSessionRequestResponse=(t,e)=>{const{id:s}=e,i=v0("session_request",s);if(this.events.listenerCount(i)===0)throw new Error(`emitting ${i} without any listeners`);isJsonRpcResult(e)?this.events.emit(v0("session_request",s),{result:e.result}):isJsonRpcError(e)&&this.events.emit(v0("session_request",s),{error:e.error});},this.onSessionEventRequest=async(t,e)=>{const{id:s,params:i}=e;try{const r=`${t}_session_event_${i.event.name}`,o=lh.get(r);if(o&&this.isRequestOutOfSync(o,s)){this.client.logger.info(`Discarding out of sync request - ${s}`);return}this.isValidEmit(m({topic:t},i)),this.client.events.emit("session_event",{id:s,topic:t,params:i}),lh.set(r,s);}catch(r){await this.sendError({id:s,topic:t,error:r}),this.client.logger.error(r);}},this.onSessionAuthenticateResponse=(t,e)=>{const{id:s}=e;this.client.logger.trace({type:"method",method:"onSessionAuthenticateResponse",topic:t,payload:e}),isJsonRpcResult(e)?this.events.emit(v0("session_request",s),{result:e.result}):isJsonRpcError(e)&&this.events.emit(v0("session_request",s),{error:e.error});},this.onSessionAuthenticateRequest=async(t,e)=>{try{const{requester:s,authPayload:i,expiryTimestamp:r}=e.params,o=yu(JSON.stringify(e)),a=await this.getVerifyContext(o,this.client.metadata),c={requester:s,pairingTopic:t,id:e.id,authPayload:i,verifyContext:a,expiryTimestamp:r};await this.setAuthRequest(e.id,{request:c,pairingTopic:t}),this.client.events.emit("session_authenticate",{topic:t,params:e.params,id:e.id,verifyContext:a});}catch(s){this.client.logger.error(s);const i=e.params.requester.publicKey,r=await this.client.core.crypto.generateKeyPair(),o={type:lr$1,receiverPublicKey:i,senderPublicKey:r};await this.sendError({id:e.id,topic:t,error:s,encodeOpts:o,rpcOpts:R.wc_sessionAuthenticate.autoReject});}},this.addSessionRequestToSessionRequestQueue=t=>{this.sessionRequestQueue.queue.push(t);},this.cleanupAfterResponse=t=>{this.deletePendingSessionRequest(t.response.id,{message:"fulfilled",code:0}),setTimeout(()=>{this.sessionRequestQueue.state=D.idle,this.processSessionRequestQueue();},cjs$3.toMiliseconds(this.requestQueueDelay));},this.cleanupPendingSentRequestsForTopic=({topic:t,error:e})=>{const s=this.client.core.history.pending;s.length>0&&s.filter(i=>i.topic===t&&i.request.method==="wc_sessionRequest").forEach(i=>{const r=i.request.id,o=v0("session_request",r);if(this.events.listenerCount(o)===0)throw new Error(`emitting ${o} without any listeners`);this.events.emit(v0("session_request",i.request.id),{error:e});});},this.processSessionRequestQueue=()=>{if(this.sessionRequestQueue.state===D.active){this.client.logger.info("session request queue is already active.");return}const t=this.sessionRequestQueue.queue[0];if(!t){this.client.logger.info("session request queue is empty.");return}try{this.sessionRequestQueue.state=D.active,this.emitSessionRequest(t);}catch(e){this.client.logger.error(e);}},this.emitSessionRequest=t=>{this.client.events.emit("session_request",t);},this.onPairingCreated=t=>{if(t.methods&&this.expectedPairingMethodMap.set(t.topic,t.methods),t.active)return;const e=this.client.proposal.getAll().find(s=>s.pairingTopic===t.topic);e&&this.onSessionProposeRequest(t.topic,formatJsonRpcRequest("wc_sessionPropose",{requiredNamespaces:e.requiredNamespaces,optionalNamespaces:e.optionalNamespaces,relays:e.relays,proposer:e.proposer,sessionProperties:e.sessionProperties},e.id));},this.isValidConnect=async t=>{if(!$u(t)){const{message:a}=xe("MISSING_OR_INVALID",`connect() params: ${JSON.stringify(t)}`);throw new Error(a)}const{pairingTopic:e,requiredNamespaces:s,optionalNamespaces:i,sessionProperties:r,relays:o}=t;if(Pe(e)||await this.isValidPairingTopic(e),!Xu(o)){const{message:a}=xe("MISSING_OR_INVALID",`connect() relays: ${o}`);throw new Error(a)}!Pe(s)&&Yr(s)!==0&&this.validateNamespaces(s,"requiredNamespaces"),!Pe(i)&&Yr(i)!==0&&this.validateNamespaces(i,"optionalNamespaces"),Pe(r)||this.validateSessionProps(r,"sessionProperties");},this.validateNamespaces=(t,e)=>{const s=Wu(t,"connect()",e);if(s)throw new Error(s.message)},this.isValidApprove=async t=>{if(!$u(t))throw new Error(xe("MISSING_OR_INVALID",`approve() params: ${t}`).message);const{id:e,namespaces:s,relayProtocol:i,sessionProperties:r}=t;this.checkRecentlyDeleted(e),await this.isValidProposalId(e);const o=this.client.proposal.get(e),a=So(s,"approve()");if(a)throw new Error(a.message);const c=Io(o.requiredNamespaces,s,"approve()");if(c)throw new Error(c.message);if(!Gt$1(i,!0)){const{message:h}=xe("MISSING_OR_INVALID",`approve() relayProtocol: ${i}`);throw new Error(h)}Pe(r)||this.validateSessionProps(r,"sessionProperties");},this.isValidReject=async t=>{if(!$u(t)){const{message:i}=xe("MISSING_OR_INVALID",`reject() params: ${t}`);throw new Error(i)}const{id:e,reason:s}=t;if(this.checkRecentlyDeleted(e),await this.isValidProposalId(e),!th(s)){const{message:i}=xe("MISSING_OR_INVALID",`reject() reason: ${JSON.stringify(s)}`);throw new Error(i)}},this.isValidSessionSettleRequest=t=>{if(!$u(t)){const{message:c}=xe("MISSING_OR_INVALID",`onSessionSettleRequest() params: ${t}`);throw new Error(c)}const{relay:e,controller:s,namespaces:i,expiry:r}=t;if(!No(e)){const{message:c}=xe("MISSING_OR_INVALID","onSessionSettleRequest() relay protocol should be a string");throw new Error(c)}const o=Vu(s,"onSessionSettleRequest()");if(o)throw new Error(o.message);const a=So(i,"onSessionSettleRequest()");if(a)throw new Error(a.message);if(p0(r)){const{message:c}=xe("EXPIRED","onSessionSettleRequest()");throw new Error(c)}},this.isValidUpdate=async t=>{if(!$u(t)){const{message:a}=xe("MISSING_OR_INVALID",`update() params: ${t}`);throw new Error(a)}const{topic:e,namespaces:s}=t;this.checkRecentlyDeleted(e),await this.isValidSessionTopic(e);const i=this.client.session.get(e),r=So(s,"update()");if(r)throw new Error(r.message);const o=Io(i.requiredNamespaces,s,"update()");if(o)throw new Error(o.message)},this.isValidExtend=async t=>{if(!$u(t)){const{message:s}=xe("MISSING_OR_INVALID",`extend() params: ${t}`);throw new Error(s)}const{topic:e}=t;this.checkRecentlyDeleted(e),await this.isValidSessionTopic(e);},this.isValidRequest=async t=>{if(!$u(t)){const{message:a}=xe("MISSING_OR_INVALID",`request() params: ${t}`);throw new Error(a)}const{topic:e,request:s,chainId:i,expiry:r}=t;this.checkRecentlyDeleted(e),await this.isValidSessionTopic(e);const{namespaces:o}=this.client.session.get(e);if(!nh(o,i)){const{message:a}=xe("MISSING_OR_INVALID",`request() chainId: ${i}`);throw new Error(a)}if(!eh(s)){const{message:a}=xe("MISSING_OR_INVALID",`request() ${JSON.stringify(s)}`);throw new Error(a)}if(!fh(o,i,s.method)){const{message:a}=xe("MISSING_OR_INVALID",`request() method: ${s.method}`);throw new Error(a)}if(r&&!uh(r,ne)){const{message:a}=xe("MISSING_OR_INVALID",`request() expiry: ${r}. Expiry must be a number (in seconds) between ${ne.min} and ${ne.max}`);throw new Error(a)}},this.isValidRespond=async t=>{var e;if(!$u(t)){const{message:r}=xe("MISSING_OR_INVALID",`respond() params: ${t}`);throw new Error(r)}const{topic:s,response:i}=t;try{await this.isValidSessionTopic(s);}catch(r){throw (e=t?.response)!=null&&e.id&&this.cleanupAfterResponse(t),r}if(!rh(i)){const{message:r}=xe("MISSING_OR_INVALID",`respond() response: ${JSON.stringify(i)}`);throw new Error(r)}},this.isValidPing=async t=>{if(!$u(t)){const{message:s}=xe("MISSING_OR_INVALID",`ping() params: ${t}`);throw new Error(s)}const{topic:e}=t;await this.isValidSessionOrPairingTopic(e);},this.isValidEmit=async t=>{if(!$u(t)){const{message:o}=xe("MISSING_OR_INVALID",`emit() params: ${t}`);throw new Error(o)}const{topic:e,event:s,chainId:i}=t;await this.isValidSessionTopic(e);const{namespaces:r}=this.client.session.get(e);if(!nh(r,i)){const{message:o}=xe("MISSING_OR_INVALID",`emit() chainId: ${i}`);throw new Error(o)}if(!ih(s)){const{message:o}=xe("MISSING_OR_INVALID",`emit() event: ${JSON.stringify(s)}`);throw new Error(o)}if(!oh(r,i,s.name)){const{message:o}=xe("MISSING_OR_INVALID",`emit() event: ${JSON.stringify(s)}`);throw new Error(o)}},this.isValidDisconnect=async t=>{if(!$u(t)){const{message:s}=xe("MISSING_OR_INVALID",`disconnect() params: ${t}`);throw new Error(s)}const{topic:e}=t;await this.isValidSessionOrPairingTopic(e);},this.isValidAuthenticate=t=>{const{chains:e,uri:s,domain:i,nonce:r}=t;if(!Array.isArray(e)||e.length===0)throw new Error("chains is required and must be a non-empty array");if(!Gt$1(s,!1))throw new Error("uri is required parameter");if(!Gt$1(i,!1))throw new Error("domain is required parameter");if(!Gt$1(r,!1))throw new Error("nonce is required parameter");if([...new Set(e.map(a=>dn(a).namespace))].length>1)throw new Error("Multi-namespace requests are not supported. Please request single namespace only.");const{namespace:o}=dn(e[0]);if(o!=="eip155")throw new Error("Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains.")},this.getVerifyContext=async(t,e)=>{const s={verified:{verifyUrl:e.verifyUrl||V,validation:"UNKNOWN",origin:e.url||""}};try{const i=await this.client.core.verify.resolve({attestationId:t,verifyUrl:e.verifyUrl});i&&(s.verified.origin=i.origin,s.verified.isScam=i.isScam,s.verified.validation=i.origin===new URL(e.url).origin?"VALID":"INVALID");}catch(i){this.client.logger.info(i);}return this.client.logger.info(`Verify context: ${JSON.stringify(s)}`),s},this.validateSessionProps=(t,e)=>{Object.values(t).forEach(s=>{if(!Gt$1(s,!1)){const{message:i}=xe("MISSING_OR_INVALID",`${e} must be in Record<string, string> format. Received: ${JSON.stringify(s)}`);throw new Error(i)}});},this.getPendingAuthRequest=t=>{const e=this.client.auth.requests.get(t);return typeof e=="object"?e:void 0},this.addToRecentlyDeleted=(t,e)=>{if(this.recentlyDeletedMap.set(t,e),this.recentlyDeletedMap.size>=this.recentlyDeletedLimit){let s=0;const i=this.recentlyDeletedLimit/2;for(const r of this.recentlyDeletedMap.keys()){if(s++>=i)break;this.recentlyDeletedMap.delete(r);}}},this.checkRecentlyDeleted=t=>{const e=this.recentlyDeletedMap.get(t);if(e){const{message:s}=xe("MISSING_OR_INVALID",`Record was recently deleted - ${e}: ${t}`);throw new Error(s)}};}async isInitialized(){if(!this.initialized){const{message:n}=xe("NOT_INITIALIZED",this.name);throw new Error(n)}await this.client.core.relayer.confirmOnlineStateOrThrow();}registerRelayerEvents(){this.client.core.relayer.on(f.message,n=>{!this.initialized||this.relayMessageCache.length>0?this.relayMessageCache.push(n):this.onRelayMessage(n);});}async onRelayMessage(n){const{topic:t,message:e}=n,{publicKey:s}=this.client.auth.authKeys.keys.includes(B)?this.client.auth.authKeys.get(B):{responseTopic:void 0,publicKey:void 0},i=await this.client.core.crypto.decode(t,e,{receiverPublicKey:s});try{isJsonRpcRequest(i)?(this.client.core.history.set(t,i),this.onRelayEventRequest({topic:t,payload:i})):isJsonRpcResponse(i)?(await this.client.core.history.resolve(i),await this.onRelayEventResponse({topic:t,payload:i}),this.client.core.history.delete(t,i.id)):this.onRelayEventUnknownPayload({topic:t,payload:i});}catch(r){this.client.logger.error(r);}}registerExpirerEvents(){this.client.core.expirer.on(C.expired,async n=>{const{topic:t,id:e}=l0(n.target);if(e&&this.client.pendingRequest.keys.includes(e))return await this.deletePendingSessionRequest(e,xe("EXPIRED"),!0);if(e&&this.client.auth.requests.keys.includes(e))return await this.deletePendingAuthRequest(e,xe("EXPIRED"),!0);t?this.client.session.keys.includes(t)&&(await this.deleteSession({topic:t,expirerHasDeleted:!0}),this.client.events.emit("session_expire",{topic:t})):e&&(await this.deleteProposal(e,!0),this.client.events.emit("proposal_expire",{id:e}));});}registerPairingEvents(){this.client.core.pairing.events.on(q.create,n=>this.onPairingCreated(n)),this.client.core.pairing.events.on(q.delete,n=>{this.addToRecentlyDeleted(n.topic,"pairing");});}isValidPairingTopic(n){if(!Gt$1(n,!1)){const{message:t}=xe("MISSING_OR_INVALID",`pairing topic should be a string: ${n}`);throw new Error(t)}if(!this.client.core.pairing.pairings.keys.includes(n)){const{message:t}=xe("NO_MATCHING_KEY",`pairing topic doesn't exist: ${n}`);throw new Error(t)}if(p0(this.client.core.pairing.pairings.get(n).expiry)){const{message:t}=xe("EXPIRED",`pairing topic: ${n}`);throw new Error(t)}}async isValidSessionTopic(n){if(!Gt$1(n,!1)){const{message:t}=xe("MISSING_OR_INVALID",`session topic should be a string: ${n}`);throw new Error(t)}if(this.checkRecentlyDeleted(n),!this.client.session.keys.includes(n)){const{message:t}=xe("NO_MATCHING_KEY",`session topic doesn't exist: ${n}`);throw new Error(t)}if(p0(this.client.session.get(n).expiry)){await this.deleteSession({topic:n});const{message:t}=xe("EXPIRED",`session topic: ${n}`);throw new Error(t)}if(!this.client.core.crypto.keychain.has(n)){const{message:t}=xe("MISSING_OR_INVALID",`session topic does not exist in keychain: ${n}`);throw await this.deleteSession({topic:n}),new Error(t)}}async isValidSessionOrPairingTopic(n){if(this.checkRecentlyDeleted(n),this.client.session.keys.includes(n))await this.isValidSessionTopic(n);else if(this.client.core.pairing.pairings.keys.includes(n))this.isValidPairingTopic(n);else if(Gt$1(n,!1)){const{message:t}=xe("NO_MATCHING_KEY",`session or pairing topic doesn't exist: ${n}`);throw new Error(t)}else {const{message:t}=xe("MISSING_OR_INVALID",`session or pairing topic should be a string: ${n}`);throw new Error(t)}}async isValidProposalId(n){if(!Zu(n)){const{message:t}=xe("MISSING_OR_INVALID",`proposal id should be a number: ${n}`);throw new Error(t)}if(!this.client.proposal.keys.includes(n)){const{message:t}=xe("NO_MATCHING_KEY",`proposal id doesn't exist: ${n}`);throw new Error(t)}if(p0(this.client.proposal.get(n).expiryTimestamp)){await this.deleteProposal(n);const{message:t}=xe("EXPIRED",`proposal id: ${n}`);throw new Error(t)}}}class es extends kt{constructor(n,t){super(n,t,Ue,ie),this.core=n,this.logger=t;}}class Ze extends kt{constructor(n,t){super(n,t,ke,ie),this.core=n,this.logger=t;}}class ts extends kt{constructor(n,t){super(n,t,Fe,ie,e=>e.id),this.core=n,this.logger=t;}}class ss extends kt{constructor(n,t){super(n,t,Ye,J,()=>B),this.core=n,this.logger=t;}}class is extends kt{constructor(n,t){super(n,t,Xe,J),this.core=n,this.logger=t;}}class rs extends kt{constructor(n,t){super(n,t,Je,J,e=>e.id),this.core=n,this.logger=t;}}class ns{constructor(n,t){this.core=n,this.logger=t,this.authKeys=new ss(this.core,this.logger),this.pairingTopics=new is(this.core,this.logger),this.requests=new rs(this.core,this.logger);}async init(){await this.authKeys.init(),await this.pairingTopics.init(),await this.requests.init();}}class oe extends b$1{constructor(n){super(n),this.protocol=Ee,this.version=Se,this.name=re.name,this.events=new EventEmitter,this.on=(e,s)=>this.events.on(e,s),this.once=(e,s)=>this.events.once(e,s),this.off=(e,s)=>this.events.off(e,s),this.removeListener=(e,s)=>this.events.removeListener(e,s),this.removeAllListeners=e=>this.events.removeAllListeners(e),this.connect=async e=>{try{return await this.engine.connect(e)}catch(s){throw this.logger.error(s.message),s}},this.pair=async e=>{try{return await this.engine.pair(e)}catch(s){throw this.logger.error(s.message),s}},this.approve=async e=>{try{return await this.engine.approve(e)}catch(s){throw this.logger.error(s.message),s}},this.reject=async e=>{try{return await this.engine.reject(e)}catch(s){throw this.logger.error(s.message),s}},this.update=async e=>{try{return await this.engine.update(e)}catch(s){throw this.logger.error(s.message),s}},this.extend=async e=>{try{return await this.engine.extend(e)}catch(s){throw this.logger.error(s.message),s}},this.request=async e=>{try{return await this.engine.request(e)}catch(s){throw this.logger.error(s.message),s}},this.respond=async e=>{try{return await this.engine.respond(e)}catch(s){throw this.logger.error(s.message),s}},this.ping=async e=>{try{return await this.engine.ping(e)}catch(s){throw this.logger.error(s.message),s}},this.emit=async e=>{try{return await this.engine.emit(e)}catch(s){throw this.logger.error(s.message),s}},this.disconnect=async e=>{try{return await this.engine.disconnect(e)}catch(s){throw this.logger.error(s.message),s}},this.find=e=>{try{return this.engine.find(e)}catch(s){throw this.logger.error(s.message),s}},this.getPendingSessionRequests=()=>{try{return this.engine.getPendingSessionRequests()}catch(e){throw this.logger.error(e.message),e}},this.authenticate=async e=>{try{return await this.engine.authenticate(e)}catch(s){throw this.logger.error(s.message),s}},this.formatAuthMessage=e=>{try{return this.engine.formatAuthMessage(e)}catch(s){throw this.logger.error(s.message),s}},this.approveSessionAuthenticate=async e=>{try{return await this.engine.approveSessionAuthenticate(e)}catch(s){throw this.logger.error(s.message),s}},this.rejectSessionAuthenticate=async e=>{try{return await this.engine.rejectSessionAuthenticate(e)}catch(s){throw this.logger.error(s.message),s}},this.name=n?.name||re.name,this.metadata=n?.metadata||Xo(),this.signConfig=n?.signConfig;const t=typeof n?.logger<"u"&&typeof n?.logger!="string"?n.logger:ot$1(k({level:n?.logger||re.logger}));this.core=n?.core||new Mr(n),this.logger=E$2(t,this.name),this.session=new Ze(this.core,this.logger),this.proposal=new es(this.core,this.logger),this.pendingRequest=new ts(this.core,this.logger),this.engine=new Zt(this),this.auth=new ns(this.core,this.logger);}static async init(n){const t=new oe(n);return await t.initialize(),t}get context(){return y$2(this.logger)}get pairing(){return this.core.pairing.pairings}async initialize(){this.logger.trace("Initialized");try{await this.core.start(),await this.session.init(),await this.proposal.init(),await this.pendingRequest.init(),await this.engine.init(),await this.auth.init(),this.core.verify.init({verifyUrl:this.metadata.verifyUrl}),this.logger.info("SignClient Initialization Success"),this.engine.processRelayMessageCache();}catch(n){throw this.logger.info("SignClient Initialization Failure"),this.logger.error(n.message),n}}}

class WalletConnectModalSign {
    #options;
    #modal;
    #initSignClientPromise = undefined;
    #signClient;
    #chainId = 1;
    get chainId() {
        return this.#chainId;
    }
    constructor(options) {
        this.#options = options;
    }
    async connect(args) {
        const { requiredNamespaces, optionalNamespaces } = args;
        return new Promise(async (resolve, reject) => {
            await this.#initSignClient();
            const unsubscribeModal = this.#modal.subscribeModal((state) => {
                if (!state.open) {
                    unsubscribeModal();
                    reject(new Error('Modal closed'));
                }
            });
            const { uri, approval } = await this.#signClient.connect(args);
            if (uri) {
                const namespaceChains = new Set();
                if (requiredNamespaces) {
                    Object.values(requiredNamespaces).forEach(({ chains }) => {
                        if (chains) {
                            chains.forEach((chain) => namespaceChains.add(chain));
                        }
                    });
                }
                if (optionalNamespaces) {
                    Object.values(optionalNamespaces).forEach(({ chains }) => {
                        if (chains) {
                            chains.forEach((chain) => namespaceChains.add(chain));
                        }
                    });
                }
                await this.#modal.openModal({ uri, chains: Array.from(namespaceChains) });
            }
            try {
                const session = await approval();
                resolve(session);
            }
            catch (err) {
                reject(err);
            }
            finally {
                unsubscribeModal();
                this.#modal.closeModal();
            }
        });
    }
    async disconnect(args) {
        await this.#initSignClient();
        await this.#signClient.disconnect(args);
    }
    sign(tx) {
        this.request({ method: 'personal_sign', params: tx });
    }
    async request(args) {
        await this.#initSignClient();
        const session = await this.getSession();
        const result = await this.#signClient?.request({
            request: args,
            chainId: `eip155:${this.#chainId}`,
            topic: session.topic
        });
        return result;
    }
    async getSessions() {
        await this.#initSignClient();
        return this.#signClient.session.getAll();
    }
    async getSession() {
        await this.#initSignClient();
        return this.#signClient.session.getAll().at(-1);
    }
    async getAccounts() {
        const session = await this.getSession();
        const accounts = session?.namespaces.eip155.accounts.reduce((accounts, account) => {
            if (account.includes(`eip155:${this.#chainId}`)) {
                accounts.push(account.replace(`eip155:${this.#chainId}:`, ''));
            }
            return accounts;
        }, []);
        return accounts;
    }
    async onSessionEvent(callback) {
        await this.#initSignClient();
        this.#signClient?.on('session_event', callback);
    }
    async offSessionEvent(callback) {
        await this.#initSignClient();
        this.#signClient?.off('session_event', callback);
    }
    async onSessionUpdate(callback) {
        await this.#initSignClient();
        this.#signClient?.on('session_update', callback);
    }
    async offSessionUpdate(callback) {
        await this.#initSignClient();
        this.#signClient?.off('session_update', callback);
    }
    async onSessionDelete(callback) {
        await this.#initSignClient();
        this.#signClient?.on('session_delete', callback);
    }
    async offSessionDelete(callback) {
        await this.#initSignClient();
        this.#signClient?.off('session_delete', callback);
    }
    async onSessionExpire(callback) {
        await this.#initSignClient();
        this.#signClient?.on('session_expire', callback);
    }
    async offSessionExpire(callback) {
        await this.#initSignClient();
        this.#signClient?.off('session_expire', callback);
    }
    async #initSignClient() {
        if (this.#signClient) {
            return true;
        }
        if (!this.#initSignClientPromise && typeof window !== 'undefined') {
            this.#initSignClientPromise = this.#createSignClient();
        }
        return this.#initSignClientPromise;
    }
    async #createSignClient() {
        this.#signClient = await oe['init']({
            metadata: this.#options.metadata,
            projectId: this.#options.projectId,
            relayUrl: this.#options.relayUrl
        });
        const clientId = await this.#signClient?.core.crypto.getClientId();
        if (!clientId)
            globalThis.dispatchEvent(new CustomEvent('connect-wallet-error', { detail: 'wallet-connect failure' }));
        else {
            try {
                localStorage.setItem('WCM_WALLETCONNECT_CLIENT_ID', clientId);
            }
            catch {
                console.info('Unable to set client id');
            }
        }
    }
}

export { WalletConnectModalSign };
