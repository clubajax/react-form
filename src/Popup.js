import React from 'react';
import classnames from 'classnames';

export default class Popup extends React.Component {
    constructor () {
        super();
        this.state = {
            selected: ''
        }
    }

    render () {
        const { label, items, onChange, selected } = this.props;
        return (
            <ul className="react-popup">
                {items.map((item) => {
                    const classname = classnames({
                        'react-popup-item': true,
                        selected: item.value === selected
                    });
                    return (
                        <li className={classname} key={item.value} value={item.value} onClick={() => {
                            onChange(item.value);
                        }}>{item.label}</li>
                    );
                })}
            </ul>
        );
    }
}