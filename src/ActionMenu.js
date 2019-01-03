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
        this.onChange = this.onChange.bind(this);
    }

    onOpen () {
        this.setState({ expanded: 'true' });
    }

    onClose () {
        this.setState({ expanded: 'false' });
    }

    onChange (e) {
        if (this.props.onAction) {
            this.props.onAction(e);
        }
    }

    render () {
        const { options, label, children, className } = this.props;
        const { expanded } = this.state;
        const btnContent = label || children;
        let classname = 'react-actionbutton react-popup-container';
        if (className) {
            classname = `${classname} ${className}`;
        }
        return (
            <div className={classname}>
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
                        onChange={this.onChange}
                        isMenu
                    />
                </Popup>
            </div>
        );
    }
}