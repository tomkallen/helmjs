(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("h", [], factory);
	else if(typeof exports === 'object')
		exports["h"] = factory();
	else
		root["h"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = h;

var _mixer = __webpack_require__(1);

var _css = __webpack_require__(2);

var _visibility = __webpack_require__(3);

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DOM__PROTO = function DOM__PROTO() {
    _classCallCheck(this, DOM__PROTO);
};

;

var DOM = function (_mix$with) {
    _inherits(DOM, _mix$with);

    function DOM(el) {
        _classCallCheck(this, DOM);

        var _this = _possibleConstructorReturn(this, (DOM.__proto__ || Object.getPrototypeOf(DOM)).call(this));

        _this.el = Array.from(document.querySelectorAll(el));
        return _this;
    }

    _createClass(DOM, [{
        key: 'html',
        value: function html(val, el) {
            if (val) {
                this._getNodeList(el).forEach(function (e) {
                    return e.innerHTML = val;
                });
                return this;
            } else {
                return this._getNodeList(el).map(function (e) {
                    return e.innerHTML;
                });
            }
        }
    }, {
        key: 'text',
        value: function text(val) {
            if (val) {
                this.el.forEach(function (e) {
                    return e.textContent = val;
                });
                return this;
            } else {
                return this.el.map(function (e) {
                    return e.textContent;
                });
            }
        }
    }, {
        key: 'on',
        value: function on(event, cb) {
            var _this2 = this;

            return this.el.forEach(function (el) {
                return el.addEventListener(event, function () {
                    return cb(_this2);
                });
            }), this;
        }
    }, {
        key: 'wait',
        value: function wait(time, cb) {
            var _this3 = this;

            // firing callback with this instead of event to support 'inner chaining'
            // i.e.: h("mydiv").wait(1000, el => el.kill("otherdiv")).hide();
            return setTimeout(function () {
                return cb(_this3);
            }, time), this;
        }
    }, {
        key: '_isNode',
        value: function _isNode(el) {
            return el && (el.nodeType === 1 || el.nodeType === 11);
        }
    }, {
        key: '_getNodeList',
        value: function _getNodeList(args) {
            // if elk instance is passed as an argument then return its elements
            if (args instanceof DOM) {
                return args.el;
            }
            // otherwise query select nodes
            if (typeof args === "string" && args.length) {
                return Array.from(document.querySelectorAll(args));
            }
            // or return self elements if no argument is provided
            return this.el;
        }
    }]);

    return DOM;
}((0, _mixer.mix)(DOM__PROTO).with(_css.css, _visibility.visibility));

function h() {
    var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "body";

    return new DOM(el);
}
module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mix = exports.mix = function mix(superclass) {
    return new MixinBuilder(superclass);
};

var MixinBuilder = function () {
    function MixinBuilder(superclass) {
        _classCallCheck(this, MixinBuilder);

        this.superclass = superclass;
    }

    _createClass(MixinBuilder, [{
        key: "with",
        value: function _with() {
            for (var _len = arguments.length, mixins = Array(_len), _key = 0; _key < _len; _key++) {
                mixins[_key] = arguments[_key];
            }

            return mixins.reduce(function (c, mixin) {
                return mixin(c);
            }, this.superclass);
        }
    }]);

    return MixinBuilder;
}();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var css = exports.css = function css(superclass) {
    return function (_superclass) {
        _inherits(_class, _superclass);

        function _class() {
            _classCallCheck(this, _class);

            return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
        }

        _createClass(_class, [{
            key: "hasClass",
            value: function hasClass(cl, el) {
                _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), "hasClass", this) && _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), "hasClass", this).call(this);
                if (cl instanceof DOM) {
                    // parameters shift in case when only an element is passed
                    el = cl;
                    cl = null;
                }
                return cl ? Boolean(this._getNodeList(el).filter(function (e) {
                    return e.classList.contains(cl);
                }).length) : Boolean(this._getNodeList(el).filter(function (e) {
                    return e.className;
                }).length);
            }
        }, {
            key: "setClass",
            value: function setClass(cl, el) {
                _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), "setClass", this) && _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), "setClass", this).call(this);
                cl && this._getNodeList(el).forEach(function (e) {
                    return e.className = cl;
                });
                return this;
            }
        }, {
            key: "toggleClass",
            value: function toggleClass(cl, el) {
                _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), "toggleClass", this) && _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), "toggleClass", this).call(this);
                return this._getNodeList(el).forEach(function (e) {
                    return e.classList.toggle(cl);
                }), this;
            }
        }, {
            key: "getClass",
            value: function getClass(el) {
                _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), "getClass", this) && _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), "getClass", this).call(this);
                var list = this._getNodeList(el);
                return list.map(function (e) {
                    return e.className;
                });
            }
        }, {
            key: "addClass",
            value: function addClass(cl, el) {
                _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), "addClass", this) && _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), "addClass", this).call(this);
                return this._getNodeList(el).forEach(function (el) {
                    return el.classList.add(cl);
                }), this;
            }
        }, {
            key: "removeClass",
            value: function removeClass(cl, el) {
                _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), "removeClass", this) && _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), "removeClass", this).call(this);
                if (cl) {
                    this._getNodeList(el).forEach(function (el) {
                        return el.classList.remove(cl);
                    });
                } else {
                    this._getNodeList(el).forEach(function (el) {
                        return el.className = "";
                    });
                }
                return this;
            }
        }]);

        return _class;
    }(superclass);
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var visibility = exports.visibility = function visibility(superclass) {
    return function (_superclass) {
        _inherits(_class, _superclass);

        function _class() {
            _classCallCheck(this, _class);

            return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
        }

        _createClass(_class, [{
            key: "hide",
            value: function hide(el) {
                this._getNodeList(el).forEach(function (e) {
                    if (!e.getAttribute("elk-oldVis")) {
                        var style = (window.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle).display;
                        e.setAttribute("elk-oldVis", style);
                        e.style.display = 'none';
                    }
                });
                return this;
            }
        }, {
            key: "show",
            value: function show(el) {
                this._getNodeList(el).forEach(function (e) {
                    e.style.display = e.getAttribute("elk-oldVisibilty") || "block";
                });

                return this;
            }
        }, {
            key: "toggle",
            value: function toggle(el) {
                var list = this._getNodeList(el);
                var attr = "elk-vis";

                list.forEach(function (e) {
                    var style = (window.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle).display;
                    if (style == 'none') {
                        e.style.display = e.getAttribute(attr) || "block";
                    } else {
                        if (!e.getAttribute(attr)) {
                            var _style = (window.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle).display;
                            e.setAttribute(attr, _style);
                            e.style.display = 'none';
                        }
                    };
                });
                return this;
            }
        }, {
            key: "kill",
            value: function kill(el) {
                this._getNodeList(el).forEach(function (el) {
                    return el.remove();
                });
                return this;
            }
        }]);

        return _class;
    }(superclass);
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=helm.js.map