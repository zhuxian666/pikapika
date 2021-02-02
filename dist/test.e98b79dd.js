// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"text.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = ".skin {\n    background: #FFCB00;\n    height: 50vh;\n    position: relative;\n}\n\n.nose {\n    position: absolute;\n    left: 50%;\n    top: 90px;\n    width: 0;\n    height: 0;\n    border: 12px solid transparent;\n    margin-left: -10px;\n    border-width: 12px 10px 0 10px;\n    border-top-color: black;\n    border-radius: 50% 50% 0 0;\n    z-index: 2;\n}\n\n@keyframes wave {\n    0% {\n        transform: rotate(25deg)\n}\n    33% {\n        transform: rotate(0deg)\n}\n    66% {\n        transform: rotate(-25deg)\n}\n    100% {\n        transform: rotate(0deg)\n}\n}\n\n.nose:hover {\n    transform-origin: center bottom;\n    animation: 350ms wave infinite linear;\n}\n\n.eye {\n    position: absolute;\n    left: 50%;\n    top: 60px;\n    width: 54px;\n    height: 54px;\n    background: #2e2e2e;\n    border-radius: 50%;\n    margin-left: -30px;\n    z-index: 2;\n}\n\n.eye::before {\n    content: '';\n    display: block;\n    width: 22px;\n    height: 22px;\n    background: white;\n    border-radius: 50%;\n    position: relative;\n    top: 2px;\n    left: 10px;\n\n}\n\n.eye.left {\n    transform: translateX(-100px);\n}\n\n.eye.right {\n    transform: translateX(100px);\n}\n\n.mouth {\n    position: absolute;\n    left: 50%;\n    top: 100px;\n    width: 200px;\n    height: 200px;\n    margin-left: -100px;\n    position: relative;\n}\n\n.mouth .up {\n    position: relative;\n}\n\n.mouth .up .lip {\n    position: absolute;\n    border: 5px solid black;\n    left: 50%;\n    top: -50px;\n    width: 100px;\n    height: 100px;\n    z-index: 1;\n    background: #FFCB00;\n}\n\n.mouth .up .left {\n    margin-left: -115px;\n    border-color: transparent transparent black black;\n    border-radius: 0 0 0 80px/56px;\n    transform: rotate(-32deg);\n}\n\n.mouth .up .lip:after {\n    display: block;\n    border: 10px solid #FFCB00;\n    width: 10px;\n    height: 50px;\n    position: absolute;\n    content: '';\n    top: -8px;\n\n}\n\n.mouth .up .left:after {\n    left: -8px;\n}\n\n.mouth .up .right {\n    margin-left: 15px;\n    border-color: transparent black black transparent;\n    border-radius: 0 0 80px/56px 0;\n    transform: rotate(32deg);\n}\n\n.mouth .up .right:after {\n    left: 86px;\n}\n\n.mouth .down {\n    position: absolute;\n    left: 50%;\n    top: 10px;\n    width: 160px;\n    height: 260px;\n    margin-left: -80px;\n    overflow: hidden;\n\n}\n\n.mouth .down .yuan1 {\n    position: absolute;\n    left: 50%;\n    margin-left: -78px;\n    width: 156px;\n    height: 400px;\n    border-radius: 50%;\n    background: #CC4143;\n    border: 2px solid #303031;\n    top: -235px;\n    overflow: hidden;\n    position: relative;\n}\n\n.mouth .down .yuan1 .yuan2 {\n    position: absolute;\n    left: 50%;\n    margin-left: -85px;\n    bottom: -70px;\n    width: 170px;\n    height: 200px;\n    border-radius: 50%;\n    background: #DD666A;\n}\n\n.face {\n    position: absolute;\n    background: #FF5140;\n    width: 70px;\n    height: 70px;\n    left: 50%;\n    margin-left: -35px;\n    top: 180px;\n    border-radius: 50%;\n    border: 3px solid black;\n}\n\n.face.left {\n    transform: translateX(-150px);\n}\n\n.face.right {\n    transform: translateX(150px);\n}";
var _default = string;
exports.default = _default;
},{}],"test.js":[function(require,module,exports) {
"use strict";

var _text = _interopRequireDefault(require("./text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  id: undefined,
  n: 0,
  time: 20,
  ui: {
    demo1: document.querySelector('#demo1'),
    demo2: document.querySelector('#demo2')
  },
  init: function init() {
    player.bindevents();
    player.play();
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'btnplay',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  bindevents: function bindevents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  play: function play() {
    player.id = setInterval(function () {
      player.n += 1;

      if (player.n === _text.default.length) {
        clearInterval(player.id);
      }

      player.ui.demo1.innerText = _text.default.substr(0, player.n);
      player.ui.demo2.innerHTML = _text.default.substr(0, player.n);
      player.ui.demo1.scrollTop = player.ui.demo1.scrollHeight;
    }, player.time);
  },
  pause: function pause() {
    clearInterval(player.id);
  },
  btnplay: function btnplay() {
    player.pause();
    player.play();
  },
  slow: function slow() {
    player.pause();
    player.time = 60;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 10;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init(); //
// let n = 0
// let time = 20
// let id
// const paly = () => {
//     id = setInterval(() => {
//         n += 1
//         if (n === string.length) {
//             clearInterval(id)
//         }
//         demo1.innerText = string.substr(0, n)
//         demo2.innerHTML = string.substr(0, n)
//         demo1.scrollTop = demo1.scrollHeight
//     }, time)
// }
// paly()
// const pause = () => {
//     clearInterval(id)
// }
// btnPause.onclick = () => {
//     pause()
// }
// btnPlay.onclick = () => {
//     paly()
// }
// btnSlow.onclick = () => {
//     pause()
//     time = 60
//     paly()
// }
// btnNormal.onclick = () => {
//     pause()
//     time = 10
//     paly()
// }
// btnFast.onclick = () => {
//     pause()
//     time = 0
//     paly()
// }
},{"./text":"text.js"}],"C:/Users/杨程/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49642" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/杨程/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.e98b79dd.js.map