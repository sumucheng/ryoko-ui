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
})({"iM1m":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//
//
//
//
//
//
//
//
//
//
//
var _default = {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "middle",
      validator: function validator(value) {
        return value === "large" || value === "middle" || value === "small";
      }
    },
    type: {
      type: String,
      default: "default",
      validator: function validator(value) {
        return value === "default" || value === "primary" || value === "danger" || value === "success";
      }
    }
  }
};
exports.default = _default;
        var $ae748a = exports.default || module.exports;
      
      if (typeof $ae748a === 'function') {
        $ae748a = $ae748a.options;
      }
    
        /* template */
        Object.assign($ae748a, (function () {
          var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"r-button",class:[_vm.type,_vm.size,_vm.plain&&'plain'],attrs:{"disabled":_vm.disabled},on:{"click":function($event){return _vm.$emit('click')}}},[_vm._t("default")],2)}
var staticRenderFns = []

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: "data-v-ae748a",
            functional: undefined
          };
        })());
      
},{}],"pSDu":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//
//
//
//
//
//
var _default = {
  props: {
    gutter: {
      type: Number,
      default: 0
    }
  },
  computed: {
    rowStyle: function rowStyle() {
      return {
        marginLeft: -this.gutter / 2 + "px",
        marginRight: -this.gutter / 2 + "px"
      };
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$children.forEach(function (vm) {
      vm.gutter = _this.gutter;
    });
  }
};
exports.default = _default;
        var $172dfc = exports.default || module.exports;
      
      if (typeof $172dfc === 'function') {
        $172dfc = $172dfc.options;
      }
    
        /* template */
        Object.assign($172dfc, (function () {
          var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row",style:(_vm.rowStyle)},[_vm._t("default")],2)}
var staticRenderFns = []

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: "data-v-172dfc",
            functional: undefined
          };
        })());
      
},{}],"THLH":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//
//
//
//
//
//
var _default = {
  props: {
    span: {
      type: Number,
      default: 24
    },
    offset: {
      type: Number,
      default: 0
    },
    phone: {
      type: Number | Object
    },
    pad: {
      type: Number | Object
    },
    pc: {
      type: Number | Object
    }
  },
  data: function data() {
    return {
      gutter: {
        type: Number,
        default: 0
      }
    };
  },
  computed: {
    colClassList: function colClassList() {
      function getClass(name, value) {
        if (typeof value === "number") classList.push("col-".concat(name, "-").concat(value));else {
          value.span !== undefined && classList.push("col-".concat(name, "-").concat(value.span));
          value.offset !== undefined && classList.push("offset-".concat(name, "-").concat(value.offset));
        }
      }

      var classList = ["col-".concat(this.span), "offset-".concat(this.offset)];
      this.phone && getClass("phone", this.phone);
      this.pad && getClass("pad", this.pad);
      this.pc && getClass("pc", this.pc);
      return classList;
    },
    colStyle: function colStyle() {
      return {
        paddingLeft: this.gutter / 2 + "px",
        paddingRight: this.gutter / 2 + "px"
      };
    }
  }
};
exports.default = _default;
        var $efb8d3 = exports.default || module.exports;
      
      if (typeof $efb8d3 === 'function') {
        $efb8d3 = $efb8d3.options;
      }
    
        /* template */
        Object.assign($efb8d3, (function () {
          var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col",class:_vm.colClassList,style:(_vm.colStyle)},[_vm._t("default")],2)}
var staticRenderFns = []

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: "data-v-efb8d3",
            functional: undefined
          };
        })());
      
},{}],"UJ3J":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//
//
//
//
//
//
var _default = {
  props: {},
  data: function data() {
    return {
      classList: []
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$children.forEach(function (vm) {
      if (vm.$options.name === "sider") _this.classList.push("hasSider");
    });
  }
};
exports.default = _default;
        var $cbf2a1 = exports.default || module.exports;
      
      if (typeof $cbf2a1 === 'function') {
        $cbf2a1 = $cbf2a1.options;
      }
    
        /* template */
        Object.assign($cbf2a1, (function () {
          var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"layout",class:_vm.classList},[_vm._t("default")],2)}
var staticRenderFns = []

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: "data-v-cbf2a1",
            functional: undefined
          };
        })());
      
},{}],"y1OT":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//
//
//
//
//
//
var _default = {
  props: {
    height: {
      type: String,
      default: "60px"
    }
  }
};
exports.default = _default;
        var $b60513 = exports.default || module.exports;
      
      if (typeof $b60513 === 'function') {
        $b60513 = $b60513.options;
      }
    
        /* template */
        Object.assign($b60513, (function () {
          var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"header",style:(("height:" + _vm.height))},[_vm._t("default")],2)}
var staticRenderFns = []

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: "data-v-b60513",
            functional: undefined
          };
        })());
      
},{}],"gIMi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//
//
//
//
//
//
var _default = {
  props: {
    height: {
      type: String,
      default: "60px"
    }
  }
};
exports.default = _default;
        var $282387 = exports.default || module.exports;
      
      if (typeof $282387 === 'function') {
        $282387 = $282387.options;
      }
    
        /* template */
        Object.assign($282387, (function () {
          var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"footer",style:(("height:" + _vm.height))},[_vm._t("default")],2)}
var staticRenderFns = []

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: "data-v-282387",
            functional: undefined
          };
        })());
      
},{}],"f1ho":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//
//
//
//
//
//
var _default = {
  name: "sider",
  props: {
    width: {
      type: String,
      default: "300px"
    }
  }
};
exports.default = _default;
        var $053624 = exports.default || module.exports;
      
      if (typeof $053624 === 'function') {
        $053624 = $053624.options;
      }
    
        /* template */
        Object.assign($053624, (function () {
          var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sider",style:(("width:" + _vm.width))},[_vm._t("default")],2)}
var staticRenderFns = []

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: "data-v-053624",
            functional: undefined
          };
        })());
      
},{}],"tIa7":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//
//
//
//
//
//
var _default = {
  props: {}
};
exports.default = _default;
        var $7e3736 = exports.default || module.exports;
      
      if (typeof $7e3736 === 'function') {
        $7e3736 = $7e3736.options;
      }
    
        /* template */
        Object.assign($7e3736, (function () {
          var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content"},[_vm._t("default")],2)}
var staticRenderFns = []

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: "data-v-7e3736",
            functional: undefined
          };
        })());
      
},{}],"wFXB":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

//
//
//
//
//
//
var importAll = function importAll(requireContext) {
  console.log(requireContext);
  requireContext.keys().forEach(requireContext);
};

try {
  importAll(require.context("./icons", true, /\.svg$/));
} catch (error) {
  console.log(error);
}

var _default = {
  name: "Icon",
  props: {
    name: {
      type: String
    }
  }
};
exports.default = _default;
        var $6d9288 = exports.default || module.exports;
      
      if (typeof $6d9288 === 'function') {
        $6d9288 = $6d9288.options;
      }
    
        /* template */
        Object.assign($6d9288, (function () {
          var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"icon"},[_c('use',{staticClass:"use",attrs:{"xlink:href":'#'+_vm.name}})])}
var staticRenderFns = []

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: "data-v-6d9288",
            functional: undefined
          };
        })());
      
},{}],"z0dm":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _icon = _interopRequireDefault(require("./icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
var _default = {
  name: "toast",
  components: {
    Icon: _icon.default
  },
  props: {
    text: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "default"
    },
    duration: {
      type: Number,
      default: 2
    },
    showClose: {
      type: Boolean,
      default: false
    },
    onClose: {
      type: Function
    }
  },
  methods: {
    close: function close() {
      this.onClose && this.onClose();
      this.$el.remove();
      this.$destroy();
    }
  },
  mounted: function mounted() {
    var _this = this;

    if (this.duration !== 0) {
      setTimeout(function () {
        _this.close();
      }, this.duration * 1000);
    }
  }
};
exports.default = _default;
        var $1ed31a = exports.default || module.exports;
      
      if (typeof $1ed31a === 'function') {
        $1ed31a = $1ed31a.options;
      }
    
        /* template */
        Object.assign($1ed31a, (function () {
          var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"toast",class:_vm.type},[_c('Icon',{attrs:{"name":_vm.type}},[_c('div',{staticClass:"text"},[_vm._v(_vm._s(_vm.text))]),_vm._v(" "),(_vm.showClose)?_c('div',{staticClass:"close",on:{"click":_vm.close}},[_vm._v("×")]):_vm._e()])],1)}
var staticRenderFns = []

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: "data-v-1ed31a",
            functional: undefined
          };
        })());
      
},{"./icon":"wFXB"}],"pPSF":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toast = _interopRequireDefault(require("./toast"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  install: function install(Vue) {
    Vue.prototype.$toast = function (obj) {
      var Constructor = Vue.extend(_toast.default);
      var toast = new Constructor({
        propsData: obj
      });
      toast.$mount();
      document.body.appendChild(toast.$el);
    };
  }
};
exports.default = _default;
},{"./toast":"z0dm"}],"Focm":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function () {
    return _button.default;
  }
});
Object.defineProperty(exports, "Row", {
  enumerable: true,
  get: function () {
    return _row.default;
  }
});
Object.defineProperty(exports, "Col", {
  enumerable: true,
  get: function () {
    return _col.default;
  }
});
Object.defineProperty(exports, "Layout", {
  enumerable: true,
  get: function () {
    return _layout.default;
  }
});
Object.defineProperty(exports, "Header", {
  enumerable: true,
  get: function () {
    return _header.default;
  }
});
Object.defineProperty(exports, "Footer", {
  enumerable: true,
  get: function () {
    return _footer.default;
  }
});
Object.defineProperty(exports, "Sider", {
  enumerable: true,
  get: function () {
    return _sider.default;
  }
});
Object.defineProperty(exports, "Content", {
  enumerable: true,
  get: function () {
    return _content.default;
  }
});
Object.defineProperty(exports, "Toast", {
  enumerable: true,
  get: function () {
    return _toast.default;
  }
});
Object.defineProperty(exports, "plugin", {
  enumerable: true,
  get: function () {
    return _plugin.default;
  }
});

var _button = _interopRequireDefault(require("./src/button"));

var _row = _interopRequireDefault(require("./src/row"));

var _col = _interopRequireDefault(require("./src/col"));

var _layout = _interopRequireDefault(require("./src/layout"));

var _header = _interopRequireDefault(require("./src/header"));

var _footer = _interopRequireDefault(require("./src/footer"));

var _sider = _interopRequireDefault(require("./src/sider"));

var _content = _interopRequireDefault(require("./src/content"));

var _toast = _interopRequireDefault(require("./src/toast"));

var _plugin = _interopRequireDefault(require("./src/plugin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./src/button":"iM1m","./src/row":"pSDu","./src/col":"THLH","./src/layout":"UJ3J","./src/header":"y1OT","./src/footer":"gIMi","./src/sider":"f1ho","./src/content":"tIa7","./src/toast":"z0dm","./src/plugin":"pPSF"}]},{},["Focm"], null)
//# sourceMappingURL=/index.js.map