(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var uidMap = {};

function uid() {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'uid';
  uidMap[prefix] = uidMap[prefix] || 0;
  uidMap[prefix]++;
  return "".concat(prefix, "-").concat(uidMap[prefix]);
}

module.exports = uid;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@clubajax/on");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return equal; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function equal(a, b) {
  var typeA = getType(a);
  var typeB = getType(b);

  if (typeA !== typeB) {
    return false;
  }

  var type = typeA;

  if (/number|string|boolean/.test(type)) {
    return a === b;
  }

  if (type === 'date') {
    return a.getTime() === b.getTime();
  }

  if (type === 'nan') {
    return true;
  }

  if (type === 'array') {
    return a.length === b.length && a.every(function (item, i) {
      return equal(item, b[i]);
    });
  }

  if (type === 'object' || type === 'map' || type === 'set') {
    return Object.keys(a).every(function (key) {
      return equal(a[key], b[key]);
    });
  }

  return a === b;
}

function getType(item) {
  if (item === null) {
    return 'null';
  }

  if (_typeof(item) === 'object') {
    if (Array.isArray(item)) {
      return 'array';
    }

    if (item instanceof Date) {
      return 'date';
    }

    if (item instanceof Promise) {
      return 'promise';
    }

    if (item instanceof Error) {
      return 'error';
    }

    if (item instanceof Map) {
      return 'map';
    }

    if (item instanceof WeakMap) {
      return 'weakmap';
    }

    if (item instanceof Set) {
      return 'set';
    }

    if (item instanceof WeakSet) {
      return 'weakset';
    }

    if (item === global) {
      if ((typeof window === "undefined" ? "undefined" : _typeof(window)) !== undefined) {
        return 'window';
      }

      return 'global';
    }

    if (item.documentElement || item.innerHTML !== undefined) {
      return 'html';
    }

    if (item.length !== undefined && item.callee) {
      return 'arguments';
    }
  }

  if (typeof item === 'number' && isNaN(item)) {
    return 'nan';
  }

  return _typeof(item);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/styles/main.scss
var main = __webpack_require__(5);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(2);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@clubajax/on"
var on_ = __webpack_require__(3);
var on_default = /*#__PURE__*/__webpack_require__.n(on_);

// EXTERNAL MODULE: ./src/lib/uid.js
var uid = __webpack_require__(1);
var uid_default = /*#__PURE__*/__webpack_require__.n(uid);

// CONCATENATED MODULE: ./src/List.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var ARIA_ITEM_PREFIX = 'react-item-'; // TODO: search key

var List_List =
/*#__PURE__*/
function (_React$Component) {
  _inherits(List, _React$Component);

  function List(props) {
    var _this;

    _classCallCheck(this, List);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(List).call(this));
    _this.uncontrolled = props.defaultValue !== undefined;
    var focusIndex = null;
    var value = null;
    var active = true;

    if (props.value && props.options && props.options.length) {
      value = props.value;
      focusIndex = props.options.findIndex(function (item) {
        return item.value === value;
      });
    }

    _this.state = {
      listId: uid_default()('list'),
      active: active,
      focusIndex: focusIndex,
      value: value
    };
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onFocus = _this.onFocus.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onNode = _this.onNode.bind(_assertThisInitialized(_assertThisInitialized(_this)));

    if (!_this.uncontrolled && !props.onChange) {
      console.error('A controlled List will need an `onChange` event');
    }

    return _this;
  }

  _createClass(List, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.connect();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.disconnect();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!this.uncontrolled && this.props.value !== prevProps.value) {
        this.afterSelect();
      }
    }
  }, {
    key: "onFocus",
    value: function onFocus() {
      this.isFocused = true;
      this.connect();
    }
  }, {
    key: "onBlur",
    value: function onBlur() {
      var _this2 = this;

      this.isFocused = false;
      this.disconnect();
      setTimeout(function () {
        if (!_this2.isFocused && _this2.props.isMenu) {
          _this2.setState({
            active: false,
            focusValue: null,
            value: null
          });
        }
      }, 60);
    }
  }, {
    key: "onClick",
    value: function onClick(e) {
      var node = e.target.closest('[role="option"]');

      if (node.hasAttribute('disabled')) {
        e.preventDefault();
        return false;
      } // const value = node.getAttribute('value');
      // const index = this.props.options.findIndex(item => `${item.value}` === value);


      this.focus(node);
      this.onChange(e);
    }
  }, {
    key: "onChange",
    value: function onChange(e) {
      var node = e.target.closest('[role="option"]');
      var value = node.getAttribute('value'); // const index = this.props.options.findIndex(item => `${item.value}` === value);

      this.select(value);
    }
  }, {
    key: "select",
    value: function select(value) {
      var _this3 = this;

      var item = this.props.options.find(function (item) {
        return item.value === value;
      });

      if (this.props.onChange) {
        this.props.onChange(item ? item.value : null);
      }

      if (item && item.onSelect) {
        item.onSelect(item || null);
      }

      if (this.uncontrolled) {
        this.setState({
          value: item ? item.value : null
        }, function () {
          _this3.afterSelect();
        });
      }
    }
  }, {
    key: "afterSelect",
    value: function afterSelect() {
      var selected = this.node.querySelector('.react-list-item.focused');

      if (selected) {
        selected.focus();
      }
    }
  }, {
    key: "focus",
    value: function focus(node) {
      var _this4 = this;

      this.setState({
        focusValue: node ? node.getAttribute('value') : null
      }, function () {
        var focused = _this4.node.querySelector('.react-list-item.focused');

        if (focused) {
          focused.focus();
        }
      });
    }
  }, {
    key: "connect",
    value: function connect() {
      var _this5 = this;

      var options = this.props.options;

      if (!options || !options.length) {
        return;
      }

      this.disconnect();

      var nodeIsNavAble = function nodeIsNavAble(node) {
        return !node.hasAttribute('disabled') && !node.classList.contains('label') && !node.classList.contains('group');
      };

      var getNode = function getNode(index) {
        var nodes = _this5.node.querySelectorAll('li');

        if (index < 0 || index > nodes.length - 1) {
          return null;
        }

        if (!nodeIsNavAble(nodes[index])) {
          return null;
        }

        return nodes[index];
      };

      var getPrevNode = function getPrevNode(index) {
        index = index - 1;
        var node = getNode(index);

        while (!node) {
          index = index - 1;

          if (index < 0) {
            index = options.length - 1;
          }

          node = getNode(index);
        }

        return node;
      };

      var getNextNode = function getNextNode(index) {
        index = index + 1;
        var node = getNode(index);

        while (!node) {
          index = index + 1;

          if (index > options.length - 1) {
            index = 0;
          }

          node = getNode(index);
        }

        return node;
      };

      this.keyHandle = on_default()(this.node, 'keydown', function (e) {
        var focusValue = _this5.state.focusValue;
        var node;
        var index = focusValue === null ? 0 : _this5.props.options.findIndex(function (item) {
          return item.value === focusValue;
        });

        var focused = _this5.node.querySelector('.react-list-item.focused, [aria-selected="true"]');

        if (index === -1 && focused) {
          var v = focused.getAttribute('value');
          index = _this5.props.options.findIndex(function (item) {
            return item.value === v;
          });
        }

        switch (e.key) {
          case 'Enter': // TODO: disable Enter if in Form

          case 'Space':
          case ' ':
            _this5.select(focusValue);

            return;

          case 'ArrowUp':
            e.preventDefault();
            node = getPrevNode(index);
            break;

          case 'ArrowDown':
            e.preventDefault();
            node = getNextNode(index);
            break;

          default:
            return;
        }

        _this5.focus(node);
      });
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      if (this.keyHandle) {
        this.keyHandle.remove();
      }
    }
  }, {
    key: "onNode",
    value: function onNode(node) {
      if (node) {
        this.node = node;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      var _this$props$options = this.props.options,
          options = _this$props$options === void 0 ? [] : _this$props$options;
      var _this$state = this.state,
          listId = _this$state.listId,
          focusValue = _this$state.focusValue,
          className = _this$state.className;
      var value = this.uncontrolled ? this.state.value : this.props.value;
      var selectedItem = options.find(function (item) {
        return item.value === value;
      }) || {};
      var selectedId = selectedItem.value ? "".concat(ARIA_ITEM_PREFIX, "-").concat(listId, "-").concat(selectedItem.value) : null;
      var rootTabIndex = selectedId ? -1 : 0;
      var classname = external_classnames_default()({
        'react-list': true
      });

      if (className) {
        classname = "".concat(classname, " ").concat(className);
      }

      return external_react_default.a.createElement("ul", {
        "aria-activedescendant": selectedId,
        className: classname,
        role: "listbox",
        tabIndex: rootTabIndex,
        onBlur: this.onBlur,
        onFocus: this.onFocus,
        ref: this.onNode
      }, options.map(function (item, i) {
        var propLabel = _typeof(item.label) !== 'object' ? item.label : item.alias || item.key || item.id || i;
        var sel = value === item.value ? 'true' : 'false';
        var foc = item.value === focusValue ? 'true' : 'false';
        var id = "".concat(ARIA_ITEM_PREFIX).concat(item.value);
        var tabIndex = foc === 'true' ? 0 : -1;
        var cls = external_classnames_default()({
          'react-list-item': true,
          label: item.type === 'label',
          group: item.type === 'group',
          'focused': foc === 'true' // used for querying

        });

        if (item.class) {
          cls = "".concat(cls, " ").concat(item.class);
        }

        if (item.type === 'label' || item.type === 'group') {
          return external_react_default.a.createElement("li", {
            role: "presentation",
            "aria-label": propLabel,
            className: cls,
            key: propLabel
          }, item.label);
        }

        return external_react_default.a.createElement("li", {
          role: "option",
          "aria-selected": sel,
          "aria-label": propLabel,
          id: id,
          className: cls,
          key: propLabel,
          value: item.value,
          tabIndex: tabIndex,
          onClick: _this6.onClick,
          disabled: item.disabled
        }, item.label);
      }));
    }
  }]);

  return List;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./src/Popup.js
function Popup_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Popup_typeof = function _typeof(obj) { return typeof obj; }; } else { Popup_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Popup_typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Popup_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Popup_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Popup_createClass(Constructor, protoProps, staticProps) { if (protoProps) Popup_defineProperties(Constructor.prototype, protoProps); if (staticProps) Popup_defineProperties(Constructor, staticProps); return Constructor; }

function Popup_possibleConstructorReturn(self, call) { if (call && (Popup_typeof(call) === "object" || typeof call === "function")) { return call; } return Popup_assertThisInitialized(self); }

function Popup_getPrototypeOf(o) { Popup_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Popup_getPrototypeOf(o); }

function Popup_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Popup_setPrototypeOf(subClass, superClass); }

function Popup_setPrototypeOf(o, p) { Popup_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Popup_setPrototypeOf(o, p); }

function Popup_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var Popup_ARIA_ITEM_PREFIX = 'ca-item-';

var Popup_Popup =
/*#__PURE__*/
function (_React$Component) {
  Popup_inherits(Popup, _React$Component);

  function Popup() {
    var _this;

    Popup_classCallCheck(this, Popup);

    _this = Popup_possibleConstructorReturn(this, Popup_getPrototypeOf(Popup).call(this));
    _this.state = {
      open: false,
      vert: 'down',
      horz: 'left'
    };
    _this.onNode = _this.onNode.bind(Popup_assertThisInitialized(Popup_assertThisInitialized(_this)));
    return _this;
  }

  Popup_createClass(Popup, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var buttonId = this.props.buttonId;

      if (!buttonId) {
        return;
      }

      var button = document.getElementById(buttonId);
      this.keyHandle = on_default()(document, 'keydown', function (e) {
        switch (e.key) {
          case 'Escape':
            _this2.close();

            break;

          case 'Tab':
            setTimeout(function () {
              _this2.detectBlur(e);
            }, 1);
            break;

          default:
            _this2.detectBlur(e);

        }
      });
      this.keyHandle.pause();
      this.clickHandle = on_default()(document, 'click', function () {
        _this2.delayedClose();
      });
      this.clickHandle.pause();
      this.keyMainHandle = on_default()(buttonId, 'keydown', function (e) {
        switch (e.key) {
          case 'Enter':
          case 'ArrowDown':
            e.preventDefault();

            _this2.open();

            break;
        }
      });
      this.clickMainHandle = on_default()(buttonId, 'click', function (e) {
        var open = _this2.state.open;

        if (open) {
          _this2.close();
        } else {
          _this2.open();
        }

        return false;
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.keyHandle.remove();
      this.clickHandle.remove();
      this.clickMainHandle.remove();
      this.keyMainHandle.remove();
    }
  }, {
    key: "open",
    value: function open() {
      var _this3 = this;

      if (this.state.open) {
        return;
      }

      this.setState({
        open: true,
        vert: 'down',
        horz: 'left'
      }, function () {
        var win = box(window);
        var pop = box(_this3.node);
        var vert = 'down';
        var horz = 'left';

        if (pop.y + pop.h > win.h) {
          vert = 'up';
        }

        if (pop.x + pop.w > win.w) {
          horz = 'right';
        }

        _this3.setState({
          vert: vert,
          horz: horz
        }, function () {
          _this3.node.firstElementChild.focus();
        });
      });
      setTimeout(function () {
        _this3.keyHandle.resume();

        _this3.clickHandle.resume();
      }, 400);

      if (this.props.onOpen) {
        this.props.onOpen();
      }
    }
  }, {
    key: "close",
    value: function close() {
      if (!this.state.open) {
        return;
      }

      this.setState({
        open: false
      });
      this.keyHandle.pause();
      this.clickHandle.pause();

      if (this.props.onClose) {
        this.props.onClose();
      }
    }
  }, {
    key: "delayedClose",
    value: function delayedClose() {
      var _this4 = this;

      setTimeout(function () {
        _this4.close();
      }, 100);
    }
  }, {
    key: "detectBlur",
    value: function detectBlur(e) {
      // called on key
      if (this.props.isMenu && (e.key === 'Enter' || e.key === ' ')) {
        this.delayedClose();
        return;
      }

      var active = document.activeElement;

      if (!this.parent.contains(active)) {
        this.close();
      }
    }
  }, {
    key: "onNode",
    value: function onNode(node) {
      if (node) {
        var btn = document.getElementById(this.props.buttonId);
        this.node = node;
        this.parent = this.node;

        while (!this.parent.contains(this.node) || !this.parent.contains(btn)) {
          this.parent = this.parent.parentNode;
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classnames;

      var _this$state = this.state,
          open = _this$state.open,
          vert = _this$state.vert,
          horz = _this$state.horz,
          children = this.props.children;
      var classname = external_classnames_default()((_classnames = {
        'react-popup': true
      }, _defineProperty(_classnames, vert, true), _defineProperty(_classnames, horz, true), _defineProperty(_classnames, "open", open), _classnames));
      return external_react_default.a.createElement("div", {
        className: classname,
        ref: this.onNode
      }, children);
    }
  }]);

  return Popup;
}(external_react_default.a.Component);



function box(node) {
  if (node === window) {
    node = document.documentElement;
  }

  var d = node.getBoundingClientRect();
  return {
    top: d.top,
    right: d.right,
    bottom: d.bottom,
    left: d.left,
    height: d.height,
    h: d.height,
    width: d.width,
    w: d.width,
    scrollY: window.scrollY,
    scrollX: window.scrollX,
    x: d.left + window.pageXOffset,
    y: d.top + window.pageYOffset
  };
}
// EXTERNAL MODULE: ./src/lib/equal.js
var equal = __webpack_require__(4);

// CONCATENATED MODULE: ./src/Dropdown.js
function Dropdown_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Dropdown_typeof = function _typeof(obj) { return typeof obj; }; } else { Dropdown_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Dropdown_typeof(obj); }

function Dropdown_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Dropdown_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Dropdown_possibleConstructorReturn(self, call) { if (call && (Dropdown_typeof(call) === "object" || typeof call === "function")) { return call; } return Dropdown_assertThisInitialized(self); }

function Dropdown_getPrototypeOf(o) { Dropdown_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Dropdown_getPrototypeOf(o); }

function Dropdown_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Dropdown_createClass(Constructor, protoProps, staticProps) { if (protoProps) Dropdown_defineProperties(Constructor.prototype, protoProps); if (staticProps) Dropdown_defineProperties(Constructor, staticProps); return Constructor; }

function Dropdown_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Dropdown_setPrototypeOf(subClass, superClass); }

function Dropdown_setPrototypeOf(o, p) { Dropdown_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Dropdown_setPrototypeOf(o, p); }

function Dropdown_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






 // TODO: combobox: https://dequelabs.github.io/combobo/demo/

function getLabel(value) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var item = options.find(function (item) {
    return item.value === value;
  });

  if (!item) {
    return null;
  }

  return item.alias || item.label;
}

var Dropdown_Dropdown =
/*#__PURE__*/
function (_React$Component) {
  Dropdown_inherits(Dropdown, _React$Component);

  Dropdown_createClass(Dropdown, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (props.defaultValue === undefined && (props.value !== state.value || !Object(equal["a" /* default */])(props.options, state.options))) {
        return {
          value: props.value,
          buttonLabel: getLabel(props.value, props.options)
        };
      }

      return null;
    }
  }]);

  function Dropdown(props) {
    var _this;

    Dropdown_classCallCheck(this, Dropdown);

    _this = Dropdown_possibleConstructorReturn(this, Dropdown_getPrototypeOf(Dropdown).call(this));
    _this.uncontrolled = props.defaultValue !== undefined;
    _this.state = {
      value: null,
      buttonLabel: '',
      labelId: props.labelId ? props.labelId : props.label ? uid_default()('label') : null,
      isInvalid: props.isInvalid,
      buttonId: uid_default()('button'),
      open: false,
      focusIndex: null,
      expanded: 'false'
    };

    if (!_this.uncontrolled && !props.onChange) {
      console.error('A controlled Dropdown will need an `onChange` event');
    }

    _this.id = props.id || uid_default()('dropdown');
    _this.onClose = _this.onClose.bind(Dropdown_assertThisInitialized(Dropdown_assertThisInitialized(_this)));
    _this.onOpen = _this.onOpen.bind(Dropdown_assertThisInitialized(Dropdown_assertThisInitialized(_this)));
    _this.onChange = _this.onChange.bind(Dropdown_assertThisInitialized(Dropdown_assertThisInitialized(_this)));
    _this.onNode = _this.onNode.bind(Dropdown_assertThisInitialized(Dropdown_assertThisInitialized(_this)));
    _this.getSelectedId = _this.getSelectedId.bind(Dropdown_assertThisInitialized(Dropdown_assertThisInitialized(_this)));
    return _this;
  }

  Dropdown_createClass(Dropdown, [{
    key: "getIcon",
    value: function getIcon() {
      if (this.props.getIcon) {
        return this.props.getIcon();
      }

      return external_react_default.a.createElement("i", {
        className: "material-icons react-icon"
      }, "expand_more");
    }
  }, {
    key: "onOpen",
    value: function onOpen() {
      this.setState({
        expanded: 'true'
      });
    }
  }, {
    key: "onClose",
    value: function onClose() {
      this.setState({
        expanded: 'false'
      });
    }
  }, {
    key: "onChange",
    value: function onChange(value) {
      if (this.uncontrolled) {
        this.setState({
          buttonLabel: getLabel(value, this.props.options),
          value: value
        });
      }

      if (this.props.onChange) {
        if (this.props.name) {
          var _keyValue;

          this.node.value = value;
          this.node.name = this.props.name;
          var keyValue = (_keyValue = {}, Dropdown_defineProperty(_keyValue, this.props.name, value), Dropdown_defineProperty(_keyValue, "name", this.props.name), Dropdown_defineProperty(_keyValue, "value", value), Dropdown_defineProperty(_keyValue, "target", this.node), _keyValue);
          this.props.onChange(keyValue);
          return;
        }

        this.props.onChange(value);
      }
    }
  }, {
    key: "getSelectedId",
    value: function getSelectedId() {
      if (!this.node) {
        return null;
      }

      var value = this.state.value;
      var node = this.node.querySelector("[value=\"".concat(value, "\"]"));
      return node ? node.id : null;
    }
  }, {
    key: "onNode",
    value: function onNode(node) {
      this.node = this.node || node;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$options = _this$props.options,
          options = _this$props$options === void 0 ? [] : _this$props$options,
          label = _this$props.label,
          _this$props$placehold = _this$props.placeholder,
          placeholder = _this$props$placehold === void 0 ? 'Select One...' : _this$props$placehold,
          disabled = _this$props.disabled,
          className = _this$props.className;
      var _this$state = this.state,
          buttonLabel = _this$state.buttonLabel,
          value = _this$state.value,
          labelId = _this$state.labelId,
          errorId = _this$state.errorId,
          isInvalid = _this$state.isInvalid,
          expanded = _this$state.expanded;
      var content = buttonLabel || placeholder;
      var classname = external_classnames_default()({
        'react-dropdown': true,
        'has-placeholder': value === null || value === undefined,
        disabled: disabled
      });

      if (className) {
        classname = "".concat(classname, " ").concat(className);
      }

      return external_react_default.a.createElement("div", {
        className: classname
      }, label && external_react_default.a.createElement("label", {
        id: labelId,
        htmlFor: this.id,
        key: "label"
      }, label), external_react_default.a.createElement("div", {
        className: "react-popup-container",
        value: value,
        ref: this.onNode
      }, external_react_default.a.createElement("button", {
        id: this.id,
        "aria-labelledby": labelId,
        "aria-expanded": expanded,
        "aria-invalid": isInvalid,
        "aria-describedby": errorId,
        "aria-activedescendant": this.getSelectedId(),
        disabled: disabled,
        type: "button",
        className: "react-dropdown-button"
      }, external_react_default.a.createElement("span", null, content), this.getIcon()), external_react_default.a.createElement(Popup_Popup, {
        buttonId: this.id,
        onOpen: this.onOpen,
        onClose: this.onClose,
        isMenu: true
      }, external_react_default.a.createElement(List_List, {
        options: options,
        onChange: this.onChange,
        value: value
      }))));
    }
  }]);

  return Dropdown;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./src/Checkbox.js
function Checkbox_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Checkbox_typeof = function _typeof(obj) { return typeof obj; }; } else { Checkbox_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Checkbox_typeof(obj); }

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

function Checkbox_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Checkbox_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Checkbox_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Checkbox_createClass(Constructor, protoProps, staticProps) { if (protoProps) Checkbox_defineProperties(Constructor.prototype, protoProps); if (staticProps) Checkbox_defineProperties(Constructor, staticProps); return Constructor; }

function Checkbox_possibleConstructorReturn(self, call) { if (call && (Checkbox_typeof(call) === "object" || typeof call === "function")) { return call; } return Checkbox_assertThisInitialized(self); }

function Checkbox_getPrototypeOf(o) { Checkbox_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Checkbox_getPrototypeOf(o); }

function Checkbox_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Checkbox_setPrototypeOf(subClass, superClass); }

function Checkbox_setPrototypeOf(o, p) { Checkbox_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Checkbox_setPrototypeOf(o, p); }

function Checkbox_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var Checkbox_Checkbox =
/*#__PURE__*/
function (_React$Component) {
  Checkbox_inherits(Checkbox, _React$Component);

  function Checkbox(props) {
    var _this;

    Checkbox_classCallCheck(this, Checkbox);

    _this = Checkbox_possibleConstructorReturn(this, Checkbox_getPrototypeOf(Checkbox).call(this));
    console.log('props.defaultValue', props.defaultValue);
    _this.uncontrolled = props.defaultValue !== undefined;

    if (!_this.uncontrolled && !props.onChange) {
      console.error('A controlled Checkbox will need an `onChange` event');
    }

    _this.state = {
      value: _this.uncontrolled ? props.defaultValue : props.value,
      labelId: props.label ? uid_default()('label') : null
    };
    _this.id = props.id || uid_default()('checkbox');
    _this.onClick = _this.onClick.bind(Checkbox_assertThisInitialized(Checkbox_assertThisInitialized(_this)));
    _this.onKey = _this.onKey.bind(Checkbox_assertThisInitialized(Checkbox_assertThisInitialized(_this)));
    _this.onNode = _this.onNode.bind(Checkbox_assertThisInitialized(Checkbox_assertThisInitialized(_this)));
    return _this;
  }

  Checkbox_createClass(Checkbox, [{
    key: "getValue",
    value: function getValue() {
      return this.props.disabled ? false : this.uncontrolled ? this.state.value : this.props.value;
    }
  }, {
    key: "getIcon",
    value: function getIcon() {
      if (!this.getValue()) {
        return null;
      }

      if (this.props.getIcon) {
        return this.props.getIcon();
      }

      return external_react_default.a.createElement("i", {
        className: "material-icons react-icon aria-hidden"
      }, "check");
    }
  }, {
    key: "toggle",
    value: function toggle() {
      var value = !this.getValue();

      if (this.uncontrolled) {
        this.setState({
          value: value
        });
      }

      if (this.props.onChange) {
        if (this.props.name) {
          var _value;

          this.node.value = value;
          this.node.name = this.props.name;
          value = (_value = {}, Checkbox_defineProperty(_value, this.props.name, value), Checkbox_defineProperty(_value, "name", this.props.name), Checkbox_defineProperty(_value, "value", value), Checkbox_defineProperty(_value, "target", this.node), _value);
        }

        this.props.onChange(value);
      }
    }
  }, {
    key: "onClick",
    value: function onClick(e) {
      this.toggle();
    }
  }, {
    key: "onKey",
    value: function onKey(e) {
      if (e.key === ' ' || e.key === 'Enter') {
        this.toggle();
      }
    }
  }, {
    key: "onNode",
    value: function onNode(node) {
      this.node = this.node || node;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          checkAfter = _this$props.checkAfter,
          label = _this$props.label,
          disabled = _this$props.disabled,
          className = _this$props.className;
      var checked = this.getValue();
      console.log('checked', checked);
      var chkId = label ? this.id || uid_default()('checkbox') : null;
      var lblId = label ? this.id || uid_default()('label') : null;
      var classname = external_classnames_default()({
        'react-checkbox': true,
        'check-after': checkAfter,
        disabled: disabled
      });

      if (className) {
        classname = (_readOnlyError("classname"), "".concat(classname, " ").concat(className));
      }

      var checkNode = external_react_default.a.createElement("span", {
        role: "checkbox",
        "aria-labelledby": lblId,
        "aria-checked": checked,
        tabIndex: "0",
        className: "react-checkbox-check",
        onKeyPress: this.onKey
      }, this.getIcon());
      var labelNode = external_react_default.a.createElement("label", {
        id: lblId,
        htmlFor: chkId,
        className: "react-checkbox-label"
      }, label);
      return external_react_default.a.createElement("div", {
        className: classname,
        onClick: this.onClick,
        ref: this.onNode
      }, checkAfter && labelNode, checkAfter && checkNode, !checkAfter && checkNode, !checkAfter && labelNode);
    }
  }]);

  return Checkbox;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./src/ActionMenu.js
function ActionMenu_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ActionMenu_typeof = function _typeof(obj) { return typeof obj; }; } else { ActionMenu_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ActionMenu_typeof(obj); }

function ActionMenu_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ActionMenu_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ActionMenu_createClass(Constructor, protoProps, staticProps) { if (protoProps) ActionMenu_defineProperties(Constructor.prototype, protoProps); if (staticProps) ActionMenu_defineProperties(Constructor, staticProps); return Constructor; }

function ActionMenu_possibleConstructorReturn(self, call) { if (call && (ActionMenu_typeof(call) === "object" || typeof call === "function")) { return call; } return ActionMenu_assertThisInitialized(self); }

function ActionMenu_getPrototypeOf(o) { ActionMenu_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ActionMenu_getPrototypeOf(o); }

function ActionMenu_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ActionMenu_setPrototypeOf(subClass, superClass); }

function ActionMenu_setPrototypeOf(o, p) { ActionMenu_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ActionMenu_setPrototypeOf(o, p); }

function ActionMenu_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var ActionMenu_ActionButton =
/*#__PURE__*/
function (_React$Component) {
  ActionMenu_inherits(ActionButton, _React$Component);

  function ActionButton() {
    var _this;

    ActionMenu_classCallCheck(this, ActionButton);

    _this = ActionMenu_possibleConstructorReturn(this, ActionMenu_getPrototypeOf(ActionButton).call(this));
    _this.state = {
      expanded: 'false'
    };
    _this.id = uid_default()('action-button');
    _this.onClose = _this.onClose.bind(ActionMenu_assertThisInitialized(ActionMenu_assertThisInitialized(_this)));
    _this.onOpen = _this.onOpen.bind(ActionMenu_assertThisInitialized(ActionMenu_assertThisInitialized(_this)));
    _this.onChange = _this.onChange.bind(ActionMenu_assertThisInitialized(ActionMenu_assertThisInitialized(_this)));
    return _this;
  }

  ActionMenu_createClass(ActionButton, [{
    key: "onOpen",
    value: function onOpen() {
      this.setState({
        expanded: 'true'
      });
    }
  }, {
    key: "onClose",
    value: function onClose() {
      this.setState({
        expanded: 'false'
      });
    }
  }, {
    key: "onChange",
    value: function onChange(e) {
      if (this.props.onAction) {
        this.props.onAction(e);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          options = _this$props.options,
          label = _this$props.label,
          children = _this$props.children,
          className = _this$props.className;
      var expanded = this.state.expanded;
      var btnContent = label || children;
      var classname = 'react-actionbutton react-popup-container';

      if (className) {
        classname = "".concat(classname, " ").concat(className);
      }

      return external_react_default.a.createElement("div", {
        className: classname
      }, external_react_default.a.createElement("button", {
        id: this.id,
        className: "react-button",
        "aria-expanded": expanded
      }, btnContent), external_react_default.a.createElement(Popup_Popup, {
        buttonId: this.id,
        onOpen: this.onOpen,
        onClose: this.onClose,
        isMenu: true
      }, external_react_default.a.createElement(List_List, {
        options: options,
        defaultValue: null,
        onChange: this.onChange,
        isMenu: true
      })));
    }
  }]);

  return ActionButton;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./src/index.js
/* concated harmony reexport Checkbox */__webpack_require__.d(__webpack_exports__, "Checkbox", function() { return Checkbox_Checkbox; });
/* concated harmony reexport Dropdown */__webpack_require__.d(__webpack_exports__, "Dropdown", function() { return Dropdown_Dropdown; });
/* concated harmony reexport ActionMenu */__webpack_require__.d(__webpack_exports__, "ActionMenu", function() { return ActionMenu_ActionButton; });
/* concated harmony reexport Popup */__webpack_require__.d(__webpack_exports__, "Popup", function() { return Popup_Popup; });
/* concated harmony reexport List */__webpack_require__.d(__webpack_exports__, "List", function() { return List_List; });
/* concated harmony reexport equal */__webpack_require__.d(__webpack_exports__, "equal", function() { return equal["a" /* default */]; });









/***/ })
/******/ ])));