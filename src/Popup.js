import React from 'react';
import classnames from 'classnames';

const ARIA_ITEM_PREFIX = 'react-item-';

export default class Popup extends React.Component {
    constructor () {
        super();
        this.state = {
            selected: ''
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