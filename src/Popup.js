import React from 'react';
import classnames from 'classnames';
import on from '@clubajax/on';

const ARIA_ITEM_PREFIX = 'react-item-';

export default class Popup extends React.Component {
    constructor () {
        super();
        this.state = {
            selected: '',
            open: false,
            focusIndex: null
        }
    }

    componentDidMount () {

    }

    componentDidUpdate () {
        const { items } = this.props;
        if (!items || !items.length) {
            return;
        }
        console.log('IS.OPEN', this.props.open);
        const { focusIndex } = this.state;
        const index = focusIndex !== null ? focusIndex : 0;
        if (this.props.open) {
            this.keyHandle = on(document, 'keyup', (e) => {
                switch (e.key) {
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
                this.setState({ focusIndex: index });
            });
        } else if(this.keyHandle) {
            this.keyHandle.remove();
        }
    }

    render () {
        const { label, items, onChange, selected, open } = this.props;
        const classname = classnames({
            'react-popup': true,
            open
        })
        return (
            <ul className={classname} role="listbox">
                {items.map((item) => {
                    const sel = item.value === selected ? 'true' : 'false';
                    const id = `${ARIA_ITEM_PREFIX}${item.value}`;
                    return (
                        <li
                            role="option"
                            aria-selected={sel}
                            aria-activedescendant={id}
                            aria-label={item.label}
                            id={id}
                            className="react-popup-item"
                            key={item.value}
                            value={item.value}
                            tabIndex={-1}
                            onClick={() => {
                                onChange(item.value);
                            }}
                        >{item.label}</li>
                    );
                })}
            </ul>
        );
    }
}