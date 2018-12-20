import React from 'react';
import classnames from 'classnames';
import on from '@clubajax/on';
import uid from './lib/uid';

const ARIA_ITEM_PREFIX = 'react-item-';

// TODO: search key

export default class List extends React.Component {

    constructor (props) {
        super();
        this.uncontrolled = props.defaultValue !== undefined;
        let selectedIndex = null;
        let focusIndex = null;
        let value = null;
        const active = true;
        if (props.value && props.options && props.options.length) {
            value = props.value;
            selectedIndex = props.options.findIndex(item => item.value === value);
            focusIndex = selectedIndex;
        }
        this.state = {
            listId: uid('list'),
            selectedIndex,
            active,
            focusIndex,
            value
        };
        this.onClick = this.onClick.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onNode = this.onNode.bind(this);
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
                selectedIndex: null,
                active: false,
                focusIndex: null,
                value: null
            })
        }
    }

    onClick (e) {
        const node = e.target.closest('[role="option"]');
        const value = node.getAttribute('value');
        const index = this.props.options.findIndex(item => `${item.value}` === value);
        this.focus(index);
        this.onChange(e);
    }

    onChange (e) {
        const node = e.target.closest('[role="option"]');
        const value = node.getAttribute('value');
        const index = this.props.options.findIndex(item => `${item.value}` === value);
        this.select(index);
    }

    select (index) {
        const item = this.props.options[index];
        if (this.props.onChange) {
            this.props.onChange(item ? item.value : null);
        }
        if (item && item.onSelect) {
            item.onSelect(item || null);
        }
        if (!this.uncontrolled) {
                return;
        }
        this.setState({
            selectedIndex: index,
            value: index === -1 ? null : this.props.options[index].value
        }, () => {
            this.afterSelect();
        });
    }

    afterSelect () {
        const selected = this.node.querySelector('.react-list-item.focused');
        if (selected) {
            selected.focus();
        }
    }

    focus (index) {
        this.setState({
            focusIndex: index
        }, () => {
            const focused = this.node.querySelector('.react-list-item.focused');
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
        this.keyHandle = on(this.node, 'keyup', (e) => {
            const { focusIndex } = this.state;
            let index = focusIndex !== null ? focusIndex : -1;
            const focused = this.node.querySelector('.react-list-item.focused, [aria-selected="true"]');
            console.log('index', index);
            console.log('focused', focused);
            if (index === -1 && focused) {
                const v = focused.getAttribute('value');
                index = this.props.options.findIndex(item => item.value === v);
            }
            console.log('index', index);
            switch (e.key) {
                case 'Enter': // TODO: disable Enter if in Form
                case 'Space':
                case ' ':
                    this.select(index);
                    return;
                case 'ArrowUp':
                    index = index - 1;
                    if (index < 0) {
                        index = options.length - 1;
                    }
                    break;
                case 'ArrowDown':
                    index = index + 1;
                    if (index > options.length - 1) {
                        index = 0;
                    }
                    break;
                default:
                    return;
            }
            this.focus(index);
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
        const { label, options, onChange, open } = this.props;
        const { listId, focusIndex, selectedIndex } = this.state;

        const value = this.uncontrolled ? this.state.value : this.props.value;

        const selectedItem = options.find(item => item.value === value) || {};
        const selectedId = selectedItem.value ? `${ARIA_ITEM_PREFIX}-${listId}-${selectedItem.value}` : null;
        const rootTabIndex = selectedId ? -1 : 0;
        const classname = classnames({
            'react-list': true
        })
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
                    const foc = i === focusIndex ? 'true' : 'false';
                    const id = `${ARIA_ITEM_PREFIX}${item.value}`;
                    const tabIndex = foc === 'true' ? 0 : -1;
                    const cls = classnames({
                        'react-list-item': true,
                        'focused': foc === 'true'
                    })
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
                        >{item.label}</li>
                    );
                })}
            </ul>
        );
    }
}