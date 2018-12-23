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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/styles/main.scss
var main = __webpack_require__(4);

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





var ARIA_ITEM_PREFIX = 'ca-item-'; // TODO: search key

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
      this.connect();
    }
  }, {
    key: "onBlur",
    value: function onBlur() {
      this.disconnect();

      if (this.props.isMenu) {
        this.setState({
          active: false,
          focusIndex: null,
          value: null
        });
      }
    }
  }, {
    key: "onClick",
    value: function onClick(e) {
      var node = e.target.closest('[role="option"]');

      if (node.hasAttribute('disabled')) {
        console.log('DISABLED');
        e.preventDefault();
        return false;
      }

      var value = node.getAttribute('value');
      var index = this.props.options.findIndex(function (item) {
        return "".concat(item.value) === value;
      });
      this.focus(index);
      this.onChange(e);
    }
  }, {
    key: "onChange",
    value: function onChange(e) {
      var node = e.target.closest('[role="option"]');
      var value = node.getAttribute('value');
      var index = this.props.options.findIndex(function (item) {
        return "".concat(item.value) === value;
      });
      this.select(index);
    }
  }, {
    key: "select",
    value: function select(index) {
      var _this2 = this;

      var item = this.props.options[index];

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
          _this2.afterSelect();
        });
      }
    }
  }, {
    key: "afterSelect",
    value: function afterSelect() {
      var selected = this.node.querySelector('.ca-list-item.focused');

      if (selected) {
        selected.focus();
      }
    }
  }, {
    key: "focus",
    value: function focus(index) {
      var _this3 = this;

      this.setState({
        focusIndex: index
      }, function () {
        var focused = _this3.node.querySelector('.ca-list-item.focused');

        if (focused) {
          focused.focus();
        }
      });
    }
  }, {
    key: "connect",
    value: function connect() {
      var _this4 = this;

      var options = this.props.options;

      if (!options || !options.length) {
        return;
      }

      this.disconnect();

      var getNode = function getNode(index) {
        var nodes = _this4.node.querySelectorAll('li');

        if (index < 0 || index > nodes.length - 1) {
          return null;
        }

        if (!nodeIsNavAble(nodes[index])) {
          return null;
        }

        return nodes[index];
      };

      var nodeIsNavAble = function nodeIsNavAble(node) {
        return !node.hasAttribute('disabled') && !node.classList.contains('label');
      };

      var getPrevNodeIndex = function getPrevNodeIndex(index) {
        index = index - 1;
        var node = getNode(index);

        while (!node) {
          index = index - 1;

          if (index < 0) {
            index = options.length - 1;
          }

          node = getNode(index);
        }

        return index;
      };

      var getNextNodeIndex = function getNextNodeIndex(index) {
        index = index + 1;
        var node = getNode(index);

        while (!node) {
          index = index + 1;

          if (index > options.length - 1) {
            index = 0;
          }

          node = getNode(index);
        }

        return index;
      };

      this.keyHandle = on_default()(this.node, 'keyup', function (e) {
        var focusIndex = _this4.state.focusIndex;
        var index = focusIndex !== null ? focusIndex : -1;

        var focused = _this4.node.querySelector('.ca-list-item.focused, [aria-selected="true"]');

        if (index === -1 && focused) {
          var v = focused.getAttribute('value');
          index = _this4.props.options.findIndex(function (item) {
            return item.value === v;
          });
        }

        switch (e.key) {
          case 'Enter': // TODO: disable Enter if in Form

          case 'Space':
          case ' ':
            _this4.select(index);

            return;

          case 'ArrowUp':
            index = getPrevNodeIndex(index);
            break;

          case 'ArrowDown':
            index = getNextNodeIndex(index);
            break;

          default:
            return;
        }

        _this4.focus(index);
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
      var _this5 = this;

      var _this$props$options = this.props.options,
          options = _this$props$options === void 0 ? [] : _this$props$options;
      var _this$state = this.state,
          listId = _this$state.listId,
          focusIndex = _this$state.focusIndex;
      var value = this.uncontrolled ? this.state.value : this.props.value;
      var selectedItem = options.find(function (item) {
        return item.value === value;
      }) || {};
      var selectedId = selectedItem.value ? "".concat(ARIA_ITEM_PREFIX, "-").concat(listId, "-").concat(selectedItem.value) : null;
      var rootTabIndex = selectedId ? -1 : 0;
      var classname = external_classnames_default()({
        'ca-list': true
      });
      return external_react_default.a.createElement("ul", {
        "aria-activedescendant": selectedId,
        className: classname,
        role: "listbox",
        tabIndex: rootTabIndex,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        ref: this.onNode
      }, options.map(function (item, i) {
        var sel = value === item.value ? 'true' : 'false';
        var foc = i === focusIndex ? 'true' : 'false';
        var id = "".concat(ARIA_ITEM_PREFIX).concat(item.value);
        var tabIndex = foc === 'true' ? 0 : -1;
        var cls = external_classnames_default()({
          'ca-list-item': true,
          label: item.type === 'label',
          'focused': foc === 'true' // not actually styled used for querying

        });

        if (item.type === 'label') {
          return external_react_default.a.createElement("li", {
            role: "presentation",
            "aria-label": item.label,
            className: cls,
            key: item.label
          }, item.label);
        }

        return external_react_default.a.createElement("li", {
          role: "option",
          "aria-selected": sel,
          "aria-label": item.label,
          id: id,
          className: cls,
          key: item.value,
          value: item.value,
          tabIndex: tabIndex,
          onClick: _this5.onClick,
          disabled: item.disabled
        }, item.label);
      }));
    }
  }]);

  return List;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./src/Popup.js
function Popup_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Popup_typeof = function _typeof(obj) { return typeof obj; }; } else { Popup_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Popup_typeof(obj); }

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
      open: false
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
      this.keyHandle = on_default()(document, 'keyup', function (e) {
        switch (e.key) {
          case 'Escape':
            _this2.close();

            break;

          case 'Tab':
            var focused = document.activeElement;

            if (!button.contains(focused) && !_this2.node.contains(focused)) {
              _this2.close();
            }

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
      this.keyMainHandle = on_default()(document, 'keyup', function (e) {
        switch (e.key) {
          case 'Enter':
          case 'ArrowDown':
            _this2.open();

            break;
        }
      });
      this.clickMainHandle = on_default()(buttonId, 'click', function () {
        var open = _this2.state.open;

        if (open) {
          _this2.close();
        } else {
          _this2.open();
        }
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
        open: true
      }, function () {
        _this3.node.firstElementChild.focus();
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
      }, 200);
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
        // console.log('active', active);
        // console.log('parent', this.parent);
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
      var open = this.state.open,
          children = this.props.children;
      var classname = external_classnames_default()({
        'react-popup': true,
        open: open
      });
      return external_react_default.a.createElement("div", {
        className: classname,
        ref: this.onNode
      }, children);
    }
  }]);

  return Popup;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./src/Dropdown.js
function Dropdown_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Dropdown_typeof = function _typeof(obj) { return typeof obj; }; } else { Dropdown_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Dropdown_typeof(obj); }

function Dropdown_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Dropdown_possibleConstructorReturn(self, call) { if (call && (Dropdown_typeof(call) === "object" || typeof call === "function")) { return call; } return Dropdown_assertThisInitialized(self); }

function Dropdown_getPrototypeOf(o) { Dropdown_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Dropdown_getPrototypeOf(o); }

function Dropdown_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Dropdown_createClass(Constructor, protoProps, staticProps) { if (protoProps) Dropdown_defineProperties(Constructor.prototype, protoProps); if (staticProps) Dropdown_defineProperties(Constructor, staticProps); return Constructor; }

function Dropdown_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Dropdown_setPrototypeOf(subClass, superClass); }

function Dropdown_setPrototypeOf(o, p) { Dropdown_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Dropdown_setPrototypeOf(o, p); }

function Dropdown_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







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
      if (props.defaultValue === undefined && props.value !== state.value) {
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
      labelId: props.label ? uid_default()('label') : null,
      buttonId: uid_default()('button'),
      open: false,
      focusIndex: null,
      expanded: 'false'
    };

    if (!_this.uncontrolled && !props.onChange) {
      console.error('A controlled List will need an `onChange` event');
    }

    _this.id = uid_default()('dropdown');
    _this.onClose = _this.onClose.bind(Dropdown_assertThisInitialized(Dropdown_assertThisInitialized(_this)));
    _this.onOpen = _this.onOpen.bind(Dropdown_assertThisInitialized(Dropdown_assertThisInitialized(_this)));
    _this.onChange = _this.onChange.bind(Dropdown_assertThisInitialized(Dropdown_assertThisInitialized(_this)));
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
        this.props.onChange(value);
      }
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
          disabled = _this$props.disabled;
      var _this$state = this.state,
          buttonLabel = _this$state.buttonLabel,
          value = _this$state.value,
          open = _this$state.open,
          labelId = _this$state.labelId,
          buttonId = _this$state.buttonId,
          expanded = _this$state.expanded;
      var content = buttonLabel || placeholder;
      var className = external_classnames_default()({
        'react-dropdown': true,
        'has-placeholder': value === null || value === undefined,
        disabled: disabled
      });
      return external_react_default.a.createElement("div", {
        className: className
      }, label && external_react_default.a.createElement("label", {
        id: labelId,
        htmlFor: buttonId,
        key: "label"
      }, label), external_react_default.a.createElement("div", {
        className: "react-popup-container"
      }, external_react_default.a.createElement("button", {
        id: this.id,
        "aria-expanded": expanded,
        disabled: disabled
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


// CONCATENATED MODULE: ./src/ActionButton.js
function ActionButton_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ActionButton_typeof = function _typeof(obj) { return typeof obj; }; } else { ActionButton_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ActionButton_typeof(obj); }

function ActionButton_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ActionButton_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ActionButton_createClass(Constructor, protoProps, staticProps) { if (protoProps) ActionButton_defineProperties(Constructor.prototype, protoProps); if (staticProps) ActionButton_defineProperties(Constructor, staticProps); return Constructor; }

function ActionButton_possibleConstructorReturn(self, call) { if (call && (ActionButton_typeof(call) === "object" || typeof call === "function")) { return call; } return ActionButton_assertThisInitialized(self); }

function ActionButton_getPrototypeOf(o) { ActionButton_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ActionButton_getPrototypeOf(o); }

function ActionButton_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ActionButton_setPrototypeOf(subClass, superClass); }

function ActionButton_setPrototypeOf(o, p) { ActionButton_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ActionButton_setPrototypeOf(o, p); }

function ActionButton_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var ActionButton_ActionButton =
/*#__PURE__*/
function (_React$Component) {
  ActionButton_inherits(ActionButton, _React$Component);

  function ActionButton() {
    var _this;

    ActionButton_classCallCheck(this, ActionButton);

    _this = ActionButton_possibleConstructorReturn(this, ActionButton_getPrototypeOf(ActionButton).call(this));
    _this.state = {
      expanded: 'false'
    };
    _this.id = uid_default()('action-button');
    _this.onClose = _this.onClose.bind(ActionButton_assertThisInitialized(ActionButton_assertThisInitialized(_this)));
    _this.onOpen = _this.onOpen.bind(ActionButton_assertThisInitialized(ActionButton_assertThisInitialized(_this)));
    return _this;
  }

  ActionButton_createClass(ActionButton, [{
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
      }); // document.getElementById(this.id).focus();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          options = _this$props.options,
          label = _this$props.label,
          children = _this$props.children;
      var expanded = this.state.expanded;
      var btnContent = label || children;
      return external_react_default.a.createElement("div", {
        className: "react-actionbutton react-popup-container"
      }, external_react_default.a.createElement("button", {
        id: this.id,
        className: "ca-button",
        "aria-expanded": expanded
      }, btnContent), external_react_default.a.createElement(Popup_Popup, {
        buttonId: this.id,
        onOpen: this.onOpen,
        onClose: this.onClose,
        isMenu: true
      }, external_react_default.a.createElement(List_List, {
        options: options,
        defaultValue: null,
        isMenu: true
      })));
    }
  }]);

  return ActionButton;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./src/index.js
/* concated harmony reexport Dropdown */__webpack_require__.d(__webpack_exports__, "Dropdown", function() { return Dropdown_Dropdown; });
/* concated harmony reexport ActionButton */__webpack_require__.d(__webpack_exports__, "ActionButton", function() { return ActionButton_ActionButton; });
/* concated harmony reexport Popup */__webpack_require__.d(__webpack_exports__, "Popup", function() { return Popup_Popup; });
/* concated harmony reexport List */__webpack_require__.d(__webpack_exports__, "List", function() { return List_List; });







/***/ })
/******/ ])));