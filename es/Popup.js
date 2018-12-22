function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import classnames from 'classnames';
import on from '@clubajax/on';
import List from './List';

var ARIA_ITEM_PREFIX = 'ca-item-';

var Popup = function (_React$Component) {
    _inherits(Popup, _React$Component);

    function Popup() {
        _classCallCheck(this, Popup);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this));

        _this.state = {
            open: false
        };
        _this.onNode = _this.onNode.bind(_this);
        return _this;
    }

    Popup.prototype.componentDidMount = function componentDidMount() {
        var _this2 = this;

        var buttonId = this.props.buttonId;

        if (!buttonId) {
            return;
        }

        this.keyHandle = on(document, 'keyup', function (e) {
            switch (e.key) {
                case 'Escape':
                    _this2.close();
                    break;
                default:
                    _this2.detectBlur(e);
            }
        });
        this.keyHandle.pause();

        this.clickHandle = on(document, 'click', function () {
            _this2.delayedClose();
        });
        this.clickHandle.pause();

        this.keyMainHandle = on(document, 'keyup', function (e) {
            switch (e.key) {
                case 'Enter':
                case 'ArrowDown':
                    _this2.open();
                    break;
            }
        });
        this.clickMainHandle = on(buttonId, 'click', function () {
            var open = _this2.state.open;

            if (open) {
                _this2.close();
            } else {
                _this2.open();
            }
        });
    };

    Popup.prototype.componentWillUnmount = function componentWillUnmount() {
        this.keyHandle.remove();
        this.clickHandle.remove();
        this.clickMainHandle.remove();
        this.keyMainHandle.remove();
    };

    Popup.prototype.open = function open() {
        var _this3 = this;

        if (this.state.open) {
            return;
        }
        this.setState({ open: true }, function () {
            _this3.node.firstElementChild.focus();
        });
        setTimeout(function () {
            _this3.keyHandle.resume();
            _this3.clickHandle.resume();
        }, 400);
        if (this.props.onOpen) {
            this.props.onOpen();
        }
    };

    Popup.prototype.close = function close() {
        if (!this.state.open) {
            return;
        }
        this.setState({ open: false });
        this.keyHandle.pause();
        this.clickHandle.pause();
        if (this.props.onClose) {
            this.props.onClose();
        }
    };

    Popup.prototype.delayedClose = function delayedClose() {
        var _this4 = this;

        setTimeout(function () {
            _this4.close();
        }, 200);
    };

    Popup.prototype.detectBlur = function detectBlur(e) {
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
    };

    Popup.prototype.onNode = function onNode(node) {
        if (node) {
            var btn = document.getElementById(this.props.buttonId);
            this.node = node;
            this.parent = this.node;
            while (!this.parent.contains(this.node) || !this.parent.contains(btn)) {
                this.parent = this.parent.parentNode;
            }
        }
    };

    Popup.prototype.render = function render() {
        var open = this.state.open,
            children = this.props.children;

        var classname = classnames({
            'react-popup': true,
            open: open
        });
        return React.createElement(
            'div',
            { className: classname, ref: this.onNode },
            children
        );
    };

    return Popup;
}(React.Component);

export { Popup as default };