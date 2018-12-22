function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import classnames from 'classnames';
import on from '@clubajax/on';
import uid from './lib/uid';

var ARIA_ITEM_PREFIX = 'ca-item-';

// TODO: search key

var List = function (_React$Component) {
    _inherits(List, _React$Component);

    function List(props) {
        _classCallCheck(this, List);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this));

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
            listId: uid('list'),
            active: active,
            focusIndex: focusIndex,
            value: value
        };

        _this.onClick = _this.onClick.bind(_this);
        _this.onChange = _this.onChange.bind(_this);
        _this.onFocus = _this.onFocus.bind(_this);
        _this.onBlur = _this.onBlur.bind(_this);
        _this.onNode = _this.onNode.bind(_this);

        if (!_this.uncontrolled && !props.onChange) {
            console.error('A controlled List will need an `onChange` event');
        }
        return _this;
    }

    List.prototype.componentDidMount = function componentDidMount() {
        this.connect();
    };

    List.prototype.componentWillUnmount = function componentWillUnmount() {
        this.disconnect();
    };

    List.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
        if (!this.uncontrolled && this.props.value !== prevProps.value) {
            this.afterSelect();
        }
    };

    List.prototype.onFocus = function onFocus() {
        this.connect();
    };

    List.prototype.onBlur = function onBlur() {
        this.disconnect();
        if (this.props.isMenu) {
            this.setState({
                active: false,
                focusIndex: null,
                value: null
            });
        }
    };

    List.prototype.onClick = function onClick(e) {
        var node = e.target.closest('[role="option"]');
        if (node.hasAttribute('disabled')) {
            console.log('DISABLED');
            e.preventDefault();
            return false;
        }
        var value = node.getAttribute('value');
        var index = this.props.options.findIndex(function (item) {
            return '' + item.value === value;
        });
        this.focus(index);
        this.onChange(e);
    };

    List.prototype.onChange = function onChange(e) {
        var node = e.target.closest('[role="option"]');
        var value = node.getAttribute('value');
        var index = this.props.options.findIndex(function (item) {
            return '' + item.value === value;
        });
        this.select(index);
    };

    List.prototype.select = function select(index) {
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
    };

    List.prototype.afterSelect = function afterSelect() {
        var selected = this.node.querySelector('.ca-list-item.focused');
        if (selected) {
            selected.focus();
        }
    };

    List.prototype.focus = function focus(index) {
        var _this3 = this;

        this.setState({
            focusIndex: index
        }, function () {
            var focused = _this3.node.querySelector('.ca-list-item.focused');
            if (focused) {
                focused.focus();
            }
        });
    };

    List.prototype.connect = function connect() {
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
            return !node.hasAttribute('disabled');
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

        this.keyHandle = on(this.node, 'keyup', function (e) {
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
    };

    List.prototype.disconnect = function disconnect() {
        if (this.keyHandle) {
            this.keyHandle.remove();
        }
    };

    List.prototype.onNode = function onNode(node) {
        if (node) {
            this.node = node;
        }
    };

    List.prototype.render = function render() {
        var _this5 = this;

        var _props$options = this.props.options,
            options = _props$options === undefined ? [] : _props$options;
        var _state = this.state,
            listId = _state.listId,
            focusIndex = _state.focusIndex;


        var value = this.uncontrolled ? this.state.value : this.props.value;

        var selectedItem = options.find(function (item) {
            return item.value === value;
        }) || {};
        var selectedId = selectedItem.value ? ARIA_ITEM_PREFIX + '-' + listId + '-' + selectedItem.value : null;
        var rootTabIndex = selectedId ? -1 : 0;
        var classname = classnames({
            'ca-list': true
        });
        return React.createElement(
            'ul',
            {
                'aria-activedescendant': selectedId,
                className: classname,
                role: 'listbox',
                tabIndex: rootTabIndex,
                onFocus: this.onFocus,
                onBlur: this.onBlur,
                ref: this.onNode
            },
            options.map(function (item, i) {
                var sel = value === item.value ? 'true' : 'false';
                var foc = i === focusIndex ? 'true' : 'false';
                var id = '' + ARIA_ITEM_PREFIX + item.value;
                var tabIndex = foc === 'true' ? 0 : -1;
                var cls = classnames({
                    'ca-list-item': true,
                    'focused': foc === 'true' // not actually styled used for querying
                });
                return React.createElement(
                    'li',
                    {
                        role: 'option',
                        'aria-selected': sel,
                        'aria-label': item.label,
                        id: id,
                        className: cls,
                        key: item.value,
                        value: item.value,
                        tabIndex: tabIndex,
                        onClick: _this5.onClick,
                        disabled: item.disabled
                    },
                    item.label
                );
            })
        );
    };

    return List;
}(React.Component);

export { List as default };