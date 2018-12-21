import React from 'react';
import Popup from './Popup';
import List from './List';
import uid from './lib/uid';

export default class ActionButton extends React.Component {
    constructor () {
        super();
        this.state = { expanded: 'false' };
        this.id = uid('action-button');
        this.onClose = this.onClose.bind(this);
        this.onOpen = this.onOpen.bind(this);
    }

    onOpen () {
        this.setState({ expanded: 'true' });
    }

    onClose () {
        this.setState({ expanded: 'false' });
        // document.getElementById(this.id).focus();
    }

    render () {
        const { options, label, children } = this.props;
        const { expanded } = this.state;
        const btnContent = label || children;
        return (
            <div className="react-actionbutton react-popup-container">
                <button id={this.id} className="ca-button" aria-expanded={expanded}>
                    {btnContent}
                </button>
                <Popup
                    buttonId={this.id}
                    onOpen={this.onOpen}
                    onClose={this.onClose}
                    isMenu
                >
                    <List
                        options={options}
                        defaultValue={null}
                        isMenu
                    />
                </Popup>
            </div>
        );
    }
}