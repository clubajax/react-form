import React from 'react';

export default class Popup extends React.Component {
    constructor () {
        super();
        this.state = {
            selected: ''
        }
    }
    render () {
        const { label } = this.props;
        const { selected } = this.state;
        return (
            <ul className="react-popup">
                <li>Uno Item</li>
                <li>Dos Item</li>
                <li>Tre Item</li>
            </ul>
        );
    }
}