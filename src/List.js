import React from 'react';
import classnames from 'classnames';
import on from '@clubajax/on';
import uid from './lib/uid';

const ARIA_ITEM_PREFIX = 'react-item-';

export default class List extends React.Component {
    constructor (props) {
        super();
        let selectedIndex = null;
        let focusIndex = null;
        let value = null;
        const active = true;
        if (props.value && props.items && props.items.length) {
            console.log('INIT!!');
            value = props.value;
            selectedIndex = props.items.findIndex(item => item.value === value);
            focusIndex = selectedIndex;
        }
        this.state = {
            listId: uid('list'),
            selectedIndex,
            active,
            focusIndex,
            value
        };
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

    onChange (e) {
        const value = e.target.getAttribute('value');
        this.select(this.props.items.findIndex(item => `${item.value}` === value));
    }

    select (index) {
        this.setState({
            selectedIndex: index,
            value: index === -1 ? null : this.props.items[index].value
        }, () => {
            const selected = this.node.querySelector('.react-list-item.focused');
            if (selected) {
                selected.focus();
                if(this.props.isMenu) {

                }
            }
        });
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
        const { items } = this.props;
        if (!items || !items.length) {
            return;
        }
        const { focusIndex } = this.state;
        let index = focusIndex !== null ? focusIndex : -1;
        this.disconnect();
        this.keyHandle = on(this.node, 'keyup', (e) => {
            console.log('key', e.key);
            switch (e.key) {
                case 'Enter': // TODO: disable Enter if in Form
                case 'Space':
                case ' ':
                    this.select(index);
                    return;
                case 'ArrowUp':
                    console.log('UP');
                    index = index - 1;
                    if (index < 0) {
                        index = items.length - 1;
                    }
                    break;
                case 'ArrowDown':
                    console.log('DOWN');
                    index = index + 1;
                    if (index > items.length - 1) {
                        index = 0;
                    }
                    break;
                default:
                    return;
            }
            console.log('focus.index', index);
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
        const { label, items, onChange, open } = this.props;
        const { listId, focusIndex, selectedIndex, value } = this.state;

        const selectedItem = items.find(item => item.value === value) || {};
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
                {items.map((item, i) => {
                    const sel = i === selectedIndex ? 'true' : 'false';
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
                            onClick={this.onChange}
                        >{item.label}</li>
                    );
                })}
            </ul>
        );
    }
}