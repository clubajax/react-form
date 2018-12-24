import React from 'react';
import classnames from 'classnames';
import on from '@clubajax/on';
import uid from './lib/uid';

const ARIA_ITEM_PREFIX = 'ca-item-';

// TODO: search key

export default class List extends React.Component {

    constructor (props) {
        super();
        this.uncontrolled = props.defaultValue !== undefined;
        let focusIndex = null;
        let value = null;
        const active = true;
        if (props.value && props.options && props.options.length) {
            value = props.value;
            focusIndex = props.options.findIndex(item => item.value === value);
        }
        this.state = {
            listId: uid('list'),
            active,
            focusIndex,
            value
        };

        this.onClick = this.onClick.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onNode = this.onNode.bind(this);

        if (!this.uncontrolled && !props.onChange) {
            console.error('A controlled List will need an `onChange` event')
        }
    }

    componentDidMount () {
        this.connect();
    }

    componentWillUnmount () {
        this.disconnect();
    }

    componentDidUpdate(prevProps) {
        if (!this.uncontrolled && this.props.value !== prevProps.value) {
            this.afterSelect();
        }
      }

    onFocus () {
        this.connect();
    }

    onBlur () {
        this.disconnect();
        if (this.props.isMenu) {
            this.setState({
                active: false,
                focusValue: null,
                value: null
            })
        }
    }

    onClick (e) {
        const node = e.target.closest('[role="option"]');
        if (node.hasAttribute('disabled')) {
            e.preventDefault();
            return false;
        }
        // const value = node.getAttribute('value');
        // const index = this.props.options.findIndex(item => `${item.value}` === value);
        this.focus(node);
        this.onChange(e);
    }

    onChange (e) {
        const node = e.target.closest('[role="option"]');
        const value = node.getAttribute('value');
        // const index = this.props.options.findIndex(item => `${item.value}` === value);
        this.select(value);
    }

    select (value) {
        const item = this.props.options.find(item => item.value === value);
        if (this.props.onChange) {
            this.props.onChange(item ? item.value : null);
        }
        if (item && item.onSelect) {
            item.onSelect(item || null);
        }
        if (this.uncontrolled) {
            this.setState({
                value: item ? item.value : null
            }, () => {
                this.afterSelect();
            });
        }
    }

    afterSelect () {
        const selected = this.node.querySelector('.ca-list-item.focused');
        if (selected) {
            selected.focus();
        }
    }

    focus (node) {
        this.setState({
            focusValue: node ? node.getAttribute('value') : null
        }, () => {
            const focused = this.node.querySelector('.ca-list-item.focused');
            if (focused) {
                focused.focus();
            }
        });
    }

    connect () {
        const { options } = this.props;
        if (!options || !options.length) {
            return;
        }

        this.disconnect();

        const getNode = (index) => {
            const nodes = this.node.querySelectorAll('li');
            if (index < 0 || index > nodes.length - 1) {
                return null;
            }
            if (!nodeIsNavAble(nodes[index])) {
                return null;
            }
            return nodes[index];
        };

        const nodeIsNavAble = (node) => {
            return !node.hasAttribute('disabled') && !node.classList.contains('label') && !node.classList.contains('group');
        };

        const getPrevNode = (index) => {
            index = index - 1;
            let node = getNode(index);
            while (!node) {
                index = index - 1;
                if (index < 0) {
                    index = options.length - 1;
                }
                node = getNode(index);
            }
            return node;
        };

        const getNextNode = (index) => {
            index = index + 1;
            let node = getNode(index);
            while (!node) {
                index = index + 1;
                if (index > options.length - 1) {
                    index = 0;
                }
                node = getNode(index);
            }
            return node;
        };

        this.keyHandle = on(this.node, 'keyup', (e) => {
            const { focusValue } = this.state;
            let node;
            let index = focusValue === null ?  -1 : this.props.options.findIndex(item => item.value === focusValue);
            const focused = this.node.querySelector('.ca-list-item.focused, [aria-selected="true"]');
            if (index === -1 && focused) {
                const v = focused.getAttribute('value');
                index = this.props.options.findIndex(item => item.value === v);
            }
            switch (e.key) {
                case 'Enter': // TODO: disable Enter if in Form
                case 'Space':
                case ' ':
                    this.select(focusValue);
                    return;
                case 'ArrowUp':
                    node = getPrevNode(index);
                    break;
                case 'ArrowDown':
                    node = getNextNode(index);
                    break;
                default:
                    return;
            }
            this.focus(node);
        });
    }

    disconnect () {
        if (this.keyHandle) {
            this.keyHandle.remove();
        }
    }

    onNode (node) {
        if (node) {
            this.node = node;
        }
    }

    render () {
        const { options = [] } = this.props;
        const { listId, focusValue } = this.state;

        const value = this.uncontrolled ? this.state.value : this.props.value;

        const selectedItem = options.find(item => item.value === value) || {};
        const selectedId = selectedItem.value ? `${ARIA_ITEM_PREFIX}-${listId}-${selectedItem.value}` : null;
        const rootTabIndex = selectedId ? -1 : 0;
        const classname = classnames({
            'ca-list': true
        });
        return (
            <ul
                aria-activedescendant={selectedId}
                className={classname}
                role="listbox"
                tabIndex={rootTabIndex}
                onFocus={this.onFocus}
                onBlur={this.onBlur}
                ref={this.onNode}
            >
                {options.map((item, i) => {
                    const sel = value === item.value ? 'true' : 'false';
                    const foc = item.value === focusValue ? 'true' : 'false';
                    const id = `${ARIA_ITEM_PREFIX}${item.value}`;
                    const tabIndex = foc === 'true' ? 0 : -1;
                    let cls = classnames({
                        'ca-list-item': true,
                        label: item.type === 'label',
                        group: item.type === 'group',
                        'focused': foc === 'true' // not actually styled used for querying
                    });
                    if (item.class) {
                        cls = `${cls} ${item.class}`;
                    }
                    if (item.type === 'label' || item.type === 'group') {
                        return (
                            <li
                                role="presentation"
                                aria-label={item.label}
                                className={cls}
                                key={item.label}
                            >{item.label}</li>
                        );
                    }
                    return (
                        <li
                            role="option"
                            aria-selected={sel}
                            aria-label={item.label}
                            id={id}
                            className={cls}
                            key={item.value}
                            value={item.value}
                            tabIndex={tabIndex}
                            onClick={this.onClick}
                            disabled={item.disabled}
                        >{item.label}</li>
                    );
                })}
            </ul>
        );
    }
}