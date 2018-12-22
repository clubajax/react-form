function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import classnames from 'classnames';
import Popup from './Popup';
import List from './List';
import uid from './lib/uid';

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
            labelId: props.label ? uid('label') : null,
            buttonId: uid('button'),
            open: false,
            focusIndex: null,
            expanded: 'false'
        };

        if (!_this.uncontrolled && !props.onChange) {
            console.error('A controlled List will need an `onChange` event');
        }
        _this.id = uid('dropdown');
        _this.onClose = _this.onClose.bind(_this);
        _this.onOpen = _this.onOpen.bind(_this);
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    Dropdown.prototype.getIcon = function getIcon() {
        if (this.props.getIcon) {
            return this.props.getIcon();
        }
        return React.createElement(
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
        var className = classnames({
            'react-dropdown': true,
            'has-placeholder': value === null || value === undefined
        });
        return React.createElement(
            'div',
            { className: className },
            label && React.createElement(
                'label',
                { id: labelId, htmlFor: buttonId, key: 'label' },
                label
            ),
            React.createElement(
                'div',
                { className: 'react-popup-container' },
                React.createElement(
                    'button',
                    { id: this.id, 'aria-expanded': expanded },
                    React.createElement(
                        'span',
                        null,
                        content
                    ),
                    this.getIcon()
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
                        onChange: this.onChange,
                        value: value
                    })
                )
            )
        );
    };

    return Dropdown;
}(React.Component);

export { Dropdown as default };