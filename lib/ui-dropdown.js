'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var dom = require('@clubajax/dom');
var on = require('@clubajax/on');
var PopupList = require('./ui-popup-list');
var autoId = require('../../lib/autoId');

var DEFAULT_PLACEHOLDER = 'Select One...';

var DropDown = function (_PopupList) {
	_inherits(DropDown, _PopupList);

	function DropDown() {
		_classCallCheck(this, DropDown);

		return _possibleConstructorReturn(this, _PopupList.call(this));
	}

	DropDown.prototype.connected = function connected() {
		this.setAttribute('role', 'select');
		// important that the container has focus, because nothing can't lose focus
		// while selecting, or the blur will trigger a change event in React
		this.setAttribute('tabindex', '0');

		var testId = this.getAttribute('data-test-id') || autoId(this);
		this.setAttribute('data-test-id', testId);
		this.button = dom('div', { class: 'drop-btn', 'data-test-id': testId + '-button' }, this);
		_PopupList.prototype.connected.call(this);

		if (this.label) {
			this.labelNode = dom('label', { html: this.label });
			this.insertBefore(this.labelNode, this.button);
		}
		this.connected = function () {};
	};

	DropDown.prototype.update = function update() {
		var _this2 = this;

		// console.log('update', this.value, this.__value);
		if (this.button) {
			var html = void 0;
			var placeholder = this.placeholder || DEFAULT_PLACEHOLDER;

			if (this.lazyDataFN) {
				var data = this.lazyDataFN();
				var item = data.find(function (m) {
					return _this2.value !== null ? m.value === _this2.value : m.selected;
				});
				if (!item) {
					html = placeholder;
				} else {
					this.__value = item.value;
					html = item.alias ? item.alias : item.label;
				}
			} else if (!this.selectedNode) {
				html = placeholder;
			} else {
				var _item = this.getItem(dom.normalize(this.selectedNode.getAttribute('value')));
				html = _item.alias ? _item.alias : _item.label;
			}

			if (typeof html === 'string') {
				this.button.innerHTML = html;
			} else {
				this.button.innerHTML = '';
				this.button.appendChild(html);
			}
			dom.classList.toggle(this.button, 'has-placeholder', html === placeholder);
		}
	};

	DropDown.prototype.destroy = function destroy() {
		_PopupList.prototype.destroy.call(this);
	};

	return DropDown;
}(PopupList);

customElements.define('drop-down', DropDown);

module.exports = DropDown;