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
            <div className="react-popup"></div>
        );
    }
}