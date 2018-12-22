'use strict';

exports.__esModule = true;
exports.default = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Popup = require('./Popup');

var _Popup2 = _interopRequireDefault(_Popup);

var _List = require('./List');

var _List2 = _interopRequireDefault(_List);

var _uid = require('./lib/uid');

var _uid2 = _interopRequireDefault(_uid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ActionButton = function (_React$Component) {
    _inherits(ActionButton, _React$Component);

    function ActionButton() {
        _classCallCheck(this, ActionButton);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this));

        _this.state = { expanded: 'false' };
        _this.id = (0, _uid2.default)('action-button');
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
        return _react2.default.createElement(
            'div',
            { className: 'react-actionbutton react-popup-container' },
            _react2.default.createElement(
                'button',
                { id: this.id, className: 'ca-button', 'aria-expanded': expanded },
                btnContent
            ),
            _react2.default.createElement(
                _Popup2.default,
                {
                    buttonId: this.id,
                    onOpen: this.onOpen,
                    onClose: this.onClose,
                    isMenu: true
                },
                _react2.default.createElement(_List2.default, {
                    options: options,
                    defaultValue: null,
                    isMenu: true
                })
            )
        );
    };

    return ActionButton;
}(_react2.default.Component);

exports.default = ActionButton;
module.exports = exports['default'];