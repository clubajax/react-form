'use strict';

exports.__esModule = true;
exports.default = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

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

function getLabel(value, options) {
    var item = options.find(function (item) {
        return item.value === value;
    });
    if (!item) {
        return null;
    }
    return item.alias || item.label;
}

var Dropdown = function (_React$Component) {
    _inherits(Dropdown, _React$Component);

    Dropdown.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
        if (props.defaultValue === undefined && props.value !== state.value) {
            return {
                value: props.value,
                buttonLabel: getLabel(props.value, props.options)
            };
        }
        return null;
    };

    function Dropdown(props) {
        _classCallCheck(this, Dropdown);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this));

        _this.uncontrolled = props.defaultValue !== undefined;
        _this.state = {
            value: null,
            buttonLabel: '',
            labelId: props.label ? (0, _uid2.default)('label') : null,
            buttonId: (0, _uid2.default)('button'),
            open: false,
            focusIndex: null,
            expanded: 'false'
        };

        if (!_this.uncontrolled && !props.onChange) {
            console.error('A controlled List will need an `onChange` event');
        }
        _this.id = (0, _uid2.default)('dropdown');
        _this.onClose = _this.onClose.bind(_this);
        _this.onOpen = _this.onOpen.bind(_this);
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    Dropdown.prototype.getIcon = function getIcon() {
        if (this.props.getIcon) {
            return this.props.getIcon();
        }
        return _react2.default.createElement(
            'i',
            { className: 'material-icons react-icon' },
            'expand_more'
        );
    };

    Dropdown.prototype.onOpen = function onOpen() {
        this.setState({ expanded: 'true' });
    };

    Dropdown.prototype.onClose = function onClose() {
        this.setState({ expanded: 'false' });
    };

    Dropdown.prototype.onChange = function onChange(value) {
        if (this.uncontrolled) {
            this.setState({
                buttonLabel: getLabel(value, this.props.options),
                value: value
            });
        }
        if (this.props.onChange) {
            this.props.onChange(value);
        }
    };

    Dropdown.prototype.render = function render() {
        var _props = this.props,
            _props$options = _props.options,
            options = _props$options === undefined ? [] : _props$options,
            label = _props.label,
            _props$placeholder = _props.placeholder,
            placeholder = _props$placeholder === undefined ? 'Select One...' : _props$placeholder;
        var _state = this.state,
            buttonLabel = _state.buttonLabel,
            value = _state.value,
            open = _state.open,
            labelId = _state.labelId,
            buttonId = _state.buttonId,
            expanded = _state.expanded;

        var content = buttonLabel || placeholder;
        var className = (0, _classnames2.default)({
            'react-dropdown': true,
            'has-placeholder': value === null || value === undefined
        });
        return _react2.default.createElement(
            'div',
            { className: className },
            label && _react2.default.createElement(
                'label',
                { id: labelId, htmlFor: buttonId, key: 'label' },
                label
            ),
            _react2.default.createElement(
                'div',
                { className: 'react-popup-container' },
                _react2.default.createElement(
                    'button',
                    { id: this.id, 'aria-expanded': expanded },
                    _react2.default.createElement(
                        'span',
                        null,
                        content
                    ),
                    this.getIcon()
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
                        onChange: this.onChange,
                        value: value
                    })
                )
            )
        );
    };

    return Dropdown;
}(_react2.default.Component);

exports.default = Dropdown;
module.exports = exports['default'];