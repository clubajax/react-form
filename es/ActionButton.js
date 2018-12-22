function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import Popup from './Popup';
import List from './List';
import uid from './lib/uid';

var ActionButton = function (_React$Component) {
    _inherits(ActionButton, _React$Component);

    function ActionButton() {
        _classCallCheck(this, ActionButton);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this));

        _this.state = { expanded: 'false' };
        _this.id = uid('action-button');
        _this.onClose = _this.onClose.bind(_this);
        _this.onOpen = _this.onOpen.bind(_this);
        return _this;
    }

    ActionButton.prototype.onOpen = function onOpen() {
        this.setState({ expanded: 'true' });
    };

    ActionButton.prototype.onClose = function onClose() {
        this.setState({ expanded: 'false' });
        // document.getElementById(this.id).focus();
    };

    ActionButton.prototype.render = function render() {
        var _props = this.props,
            options = _props.options,
            label = _props.label,
            children = _props.children;
        var expanded = this.state.expanded;

        var btnContent = label || children;
        return React.createElement(
            'div',
            { className: 'react-actionbutton react-popup-container' },
            React.createElement(
                'button',
                { id: this.id, className: 'ca-button', 'aria-expanded': expanded },
                btnContent
            ),
            React.createElement(
                Popup,
                {
                    buttonId: this.id,
                    onOpen: this.onOpen,
                    onClose: this.onClose,
                    isMenu: true
                },
                React.createElement(List, {
                    options: options,
                    defaultValue: null,
                    isMenu: true
                })
            )
        );
    };

    return ActionButton;
}(React.Component);

export { ActionButton as default };