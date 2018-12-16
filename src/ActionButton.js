import React from 'react';
import Popup from './Popup';
import List from './List';
import uid from './lib/uid';

export default class ActionButton extends React.Component {
    constructor () {
        super();
        this.id = uid('action-button');
    }
    render () {
        const { items, label, children } = this.props;
        const btnContent = label || children;
        return (
            <div className="react-actionbutton react-popup-container">
                <button id={this.id} className="ca-button">{btnContent}</button>
                <Popup buttonId={this.id} isMenu>
                    <List
                        items={items}
                        isMenu
                    />
                </Popup>
            </div>
        );
    }
}