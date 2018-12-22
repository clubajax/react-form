'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseComponent = require('@clubajax/base-component');
var dom = require('@clubajax/dom');
var on = require('@clubajax/on');
var keys = require('@clubajax/key-nav');
var _emitEvent = require('../../lib/emitEvent');
var autoId = require('../../lib/autoId');
var bindAll = require('../../lib/bindAll');

// TODO: ARIA, reset (w placeholder)

var PopupList = function (_BaseComponent) {
	_inherits(PopupList, _BaseComponent);

	function PopupList() {
		_classCallCheck(this, PopupList);

		var _this = _possibleConstructorReturn(this, _BaseComponent.call(this));

		_this.open = false;
		_this.selfOpen = true;
		_this.emitItem = false;
		bindAll(_this, 'toggle');
		return _this;
	}

	PopupList.prototype.attributeChanged = function attributeChanged(prop, value) {
		if (prop === 'value') {
			this.value = value;
		}
	};

	PopupList.prototype.setLazyValue = function setLazyValue(value) {
		var data = this.lazyDataFN();
		var item = data.find(function (m) {
			return m.value === value;
		});
		// console.log('setLazyValue', value, item, data);
		if (!item) {
			return;
		}
		this.button.innerHTML = item.label;
		this.emitEvent(value);
	};

	PopupList.prototype.setData = function setData(value) {
		if (!Array.isArray(value)) {
			value = [value];
		}
		if (value.length && _typeof(value[0]) !== 'object') {
			value = value.map(function (item) {
				return { label: item, value: item };
			});
		}
		if (!this.lazyDataFN) {
			this.__value = undefined;
		}
		this.selectedNode = null;
		this.update();
		this.items = value;
		if (this.DOMSTATE === 'domready' || this.DOMSTATE === 'connected') {
			this.setItemsFromData();
		}
	};

	PopupList.prototype.onDisabled = function onDisabled(value) {
		if (this.button) {
			this.button.disabled = !!value;
		}
		if (value) {
			this.removeAttribute('tabindex');
		} else {
			this.setAttribute('tabindex', '0');
		}
	};

	PopupList.prototype.onPlaceholder = function onPlaceholder(value) {
		if (!this.value) {
			this.button.innerHTML = value;
		}
	};

	PopupList.prototype.connected = function connected() {
		if (this.lazyDataFN) {
			this.update();
		}
		if (!this.items) {
			return;
		}
		this.setItemsFromDom = function () {};
		this.setItemsFromData(true);
	};

	PopupList.prototype.domReady = function domReady() {
		if (this.items || this.lazyDataFN) {
			return;
		}
		this.setItemsFromDom();
	};

	PopupList.prototype.setItemsFromDom = function setItemsFromDom() {
		var testId = void 0;
		var postValue = void 0;
		var hasChildren = false;
		var parentValue = this.value;
		if (this.button) {
			var _testId = this.button.getAttribute('data-test-id');
			this.removeChild(this.button);
		}
		testId = testId ? testId + '-popup' : autoId('popup');
		// TODO: in React, the UL may be set
		this.popup = dom('ul', { 'data-test-id': testId });

		while (this.children.length) {
			hasChildren = true;
			if (this.children[0].localName !== 'li') {
				console.warn("drop-down children should use LI's");
			}
			if (this.children[0].hasAttribute('selected') || this.children[0].getAttribute('value') === parentValue) {
				this.selectedNode = this.children[0];
				this.orgSelected = this.children[0];
				if (!parentValue) {
					postValue = this.children[0].getAttribute('value');
				}
			}
			this.popup.appendChild(this.children[0]);
		}

		this.update();
		if (this.button) {
			this.appendChild(this.button);
		}
		this.appendChild(this.popup);
		this.connect();

		this.disabled = this.hasAttribute('disabled');

		if (postValue || parentValue) {
			this.select(postValue || parentValue);
		}
	};

	PopupList.prototype.setItemsFromData = function setItemsFromData(silent) {
		var testId = void 0;
		if (!this.popup) {
			this.popup = dom('ul', { 'data-test-id': testId });
		}

		var postValue = void 0;
		var parentValue = this.value;
		var popup = this.popup;
		var self = this;
		var node = void 0;
		popup.innerHTML = '';
		this.items.forEach(function (item) {
			var label = item.alias ? item.alias + ': ' + item.label : item.label;
			if (item.value === undefined) {
				node = dom('div', { class: 'label', html: label }, popup);
				node.unselectable = true;
				return;
			}
			var options = { html: label, value: item.value };
			var isSelected = item.selected || item.value === parentValue;
			if (isSelected) {
				options.selected = true;
			}
			if (item.class) {
				options.class = item.class;
			}
			if (item.disabled) {
				options.disabled = true;
			}
			node = dom('li', options, popup);
			if (isSelected) {
				if (self.selectedNode) {
					self.selectedNode.removeAttribute('selected');
				}
				self.selectedNode = node;
				self.orgSelected = node;
				if (!parentValue) {
					self.__value = item.value;
				}
			}
		});
		this.appendChild(this.popup);
		this.update();
		this.connect();
	};

	PopupList.prototype.getItem = function getItem(value) {
		if (this.items) {
			for (var i = 0; i < this.items.length; i++) {
				if (this.items[i].value === value || this.items[i].label === value) {
					return this.items[i];
				}
			}
		}
		return null;
	};

	PopupList.prototype.select = function select(value, silent) {
		if (this.__value === value) {
			return;
		}
		var selected = this.selectedNode || dom.query(this.popup, '[selected]');
		if (selected) {
			selected.removeAttribute('selected');
		}
		this.selectedNode = dom.query(this.popup, '[value="' + value + '"]');
		if (this.selectedNode) {
			this.selectedNode.setAttribute('selected', 'true');
		} else {
			value = null;
		}
		this.lastValue = this.__value;
		this.__value = value;
		this.update();
		if (!silent) {
			this.emitEvent(value);
		}
	};

	PopupList.prototype.unselect = function unselect() {
		if (this.selectedNode) {
			this.selectedNode.removeAttribute('selected');
		}
	};

	PopupList.prototype.updateAfterListChange = function updateAfterListChange() {
		// TODO: doc this
		var parentValue = getValue(this);
		this.select(parentValue, true);
		this.hide();
	};

	PopupList.prototype.emitEvent = function emitEvent() {
		var value = void 0;
		if (this.emitItem) {
			value = this.getItem(this.value);
			if (value === null && this['allow-new']) {
				value = {
					label: this.value,
					value: this.value,
					isNew: true
				};
			}
		} else {
			value = this.value;
		}

		_emitEvent(this, value);
	};

	PopupList.prototype.isValid = function isValid() {
		return true;
	};

	PopupList.prototype.isValidSelection = function isValidSelection() {
		// override me
		return true;
	};

	PopupList.prototype.update = function update() {
		// override me
	};

	PopupList.prototype.reset = function reset() {
		var value = this.orgSelected ? this.orgSelected : dom.normalize(this.getAttribute('value'));
		this.select(value);
	};

	PopupList.prototype.undo = function undo() {
		if (this.lastValue !== undefined) {
			this.select(this.lastValue, true);
		}
	};

	PopupList.prototype.toggle = function toggle() {
		if (this.open) {
			this.hide();
		} else {
			this.show();
		}
	};

	PopupList.prototype.show = function show() {
		var _this2 = this;

		// console.log('show', this.items);
		// FIXME: was hiding drop if no items
		if (this.disabled) {
			// || !this.items || !this.items.length) {
			return;
		}
		if (this.lazyDataFN) {
			this.setData(this.lazyDataFN());
			this.connectList();
		}
		dom.style(this.popup, 'min-width', dom.box(this).w);
		this.open = true;
		this.classList.add('show');
		position.call(this);
		setTimeout(function () {
			// there is not a controller if a lazy list is unpopulated
			if (_this2.controller) {
				_this2.controller.resume();
				_this2.winHandle.resume();
			}
			_this2.fire('open');
		}, 30);
	};

	PopupList.prototype.hide = function hide() {
		var _this3 = this;

		var timer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

		if (window.keepPopupsOpen) {
			return;
		}

		setTimeout(function () {
			if (_this3.open) {
				_this3.open = false;
				_this3.classList.remove('show');
				if (_this3.controller) {
					_this3.winHandle.pause();
					_this3.controller.pause();
				}
				clearHighlights(_this3);
				_this3.fire('close');
			}
		}, timer);
	};

	PopupList.prototype.connect = function connect() {
		var _this4 = this;

		if (!this.button) {
			console.warn('no button to connect to', this._uid);
			return;
		}
		if (this.lazyDataFN) {
			this.on(this.button, 'click', function () {
				_this4.toggle();
			});
			this.on(this, 'keydown', function (e) {
				if (!_this4.open && (e.key === 'Enter' || e.key === 'ArrowDown')) {
					e.preventDefault();
					_this4.show();
				}
			});
		} else {
			this.connectBtn();
			this.connectList();
		}
		this.connect = function () {};
	};

	PopupList.prototype.connectBtn = function connectBtn() {
		var _this5 = this;

		if (this.selfOpen) {
			this.on(this.button, 'click', function () {
				_this5.toggle();
			});
			this.on(this, 'keydown', function (e) {
				if (!_this5.open && (e.key === 'Enter' || e.key === 'ArrowDown')) {
					e.preventDefault();
					_this5.show();
				}
			});
		}
	};

	PopupList.prototype.connectList = function connectList() {
		var _this6 = this;

		if (this.popup.children.length) {

			if (this.popHandle) {
				this.popHandle.remove();
			}
			if (this.winHandle) {
				this.winHandle.remove();
				this.controller.remove();
			}

			this.winHandle = on.makeMultiHandle([on(window, 'mouseup', function (e) {
				if (on.closest(e.target, _this6.localName, document.body) === _this6) {
					return true;
				}
				_this6.hide();
			}), on(window, 'keyup', function (e) {
				if (e.key === 'Escape') {
					_this6.hide();
				}
			}), on(this, 'blur', function () {
				_this6.hide();
			})]);
			var isInput = this.button.localName === 'input';
			this.controller = keys(this.popup, { roles: true, inputMode: isInput, noDefault: isInput });
			this.controller.pause();

			// listen here AFTER initializing keys, to prevent initial event
			this.popHandle = this.on(this.popup, 'key-select', function (e) {
				var node = e.detail.value;
				if (node && !node.hasAttribute('disabled')) {
					var value = getValue(node);
					_this6.select(value);
					_this6.hide();
				}
			});
			clearTimeout(this.warnTimer);
		} else {
			this.warnTimer = setTimeout(function () {
				console.log('nothing to connect', _this6._uid, _this6.button, _this6.items, _this6.popup.children.length);
			}, 150);
		}
	};

	PopupList.prototype.destroy = function destroy() {
		_BaseComponent.prototype.destroy.call(this);
	};

	_createClass(PopupList, [{
		key: 'value',
		set: function set(value) {
			var _this7 = this;

			this.onConnected(function () {
				if (_this7.popup) {
					_this7.select(value);
				} else if (_this7.lazyDataFN) {
					_this7.setLazyValue(value);
				}
				_this7.__value = value;
			});
		},
		get: function get() {
			return this.__value !== undefined ? this.__value : dom.normalize(this.getAttribute('value'));
		}
	}, {
		key: 'data',
		set: function set(value) {
			var _this8 = this;

			if (typeof value === 'function') {
				this.lazyDataFN = value;
				this.onConnected(function () {
					_this8.connect();
				});
				return;
			}
			this.setData(value);
		},
		get: function get() {
			return this.items;
		}
	}]);

	return PopupList;
}(BaseComponent);

function position() {
	this.popup.classList.remove('right-aligned');
	this.popup.classList.remove('top-aligned');
	this.popup.classList.remove('center-aligned');
	dom.style(this.popup, {
		height: '',
		left: '',
		width: ''
	});
	var win = {
		w: window.innerWidth,
		h: window.innerHeight
	};
	var pop = dom.box(this.popup);
	var btn = dom.box(this.button);

	var leftAligned = btn.x + pop.w;
	var rightAligned = btn.x + btn.w - pop.w;

	var topSpace = btn.top;
	var botSpace = win.h - (btn.top + btn.h);

	if (this.align === 'right' || leftAligned > win.w && rightAligned > 0) {
		this.popup.classList.add('right-aligned');
	} else if (leftAligned < win.w) {
		this.popup.classList.remove('right-aligned');
	} else {
		this.popup.classList.add('center-aligned');
		var pad = dom.style(document.body, 'padding');
		var left = void 0,
		    wpad = void 0;
		// FIXME
		// works for smart-ar - but what about right-aligned buttons?
		if (pad) {
			left = btn.x * -1 + pad;
			wpad = pad * 2;
		} else {
			left = btn.x * -1 + 10;
			wpad = 20;
		}
		dom.style(this.popup, {
			left: left,
			width: win.w - wpad
		});
	}

	if (pop.h > botSpace && pop.h < topSpace) {
		this.popup.classList.add('top-aligned');
	} else if (pop.h < botSpace) {
		this.popup.classList.remove('top-aligned');
	} else if (botSpace > topSpace) {
		// bottom, and scroll
		this.popup.classList.remove('top-aligned');
		dom.style(this.popup, 'height', botSpace - 100);
	} else {
		// top and scroll
		this.popup.classList.add('top-aligned');
		dom.style(this.popup, 'height', topSpace - 20);
	}
}

function clearHighlights(node) {
	dom.queryAll(node, 'li').forEach(function (li) {
		li.removeAttribute('highlighted');
	});
}

function getValue(node) {
	return attr(node, 'value', 'defaultValue');
}

function attr() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	var node = args[0];
	var value = void 0;
	var i = void 0;
	for (i = 1; i < args.length; i++) {
		value = dom.normalize(node.getAttribute(args[i]));
		if (value !== null && value !== '') {
			return value;
		}
	}
	return null;
}

module.exports = BaseComponent.define('popup-list', PopupList, {
	props: ['placeholder', 'label', 'limit', 'name', 'event-name', 'align', 'btn-class'],
	bools: ['disabled', 'open-when-blank', 'allow-new', 'required', 'case-sensitive', 'autofocus', 'busy'],
	attrs: ['value']
});