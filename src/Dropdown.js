import React from 'react';
import classnames from 'classnames';
import Popup from './Popup';
import List from './List';
import uid from './lib/uid';

export default class Dropdown extends React.Component {
    constructor (props) {
        super();
        this.state = {
            value: null,
            buttonLabel: '',
            labelId: props.label ? uid('label') : null,
            buttonId: uid('button'),
            open: false,
            focusIndex: null,
            expanded: 'false'
        }
        this.id = uid('dropdown');
        this.onClose = this.onClose.bind(this);
        this.onOpen = this.onOpen.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    getIcon () {
        if (this.props.getIcon) {
            return this.props.getIcon();
        }
        return <i className="material-icons react-icon">expand_more</i>
    }

    onOpen () {
        this.setState({ expanded: 'true' });
    }

    onClose () {
        this.setState({ expanded: 'false' });
        // document.getElementById(this.id).focus();
    }

    onChange (value) {
        console.log('CHANGE', value);
        const item = this.props.items.find(item => item.value === value);
        this.setState({
            buttonLabel: item ? item.label : null,
            value
        });
        if (this.props.onChange) {
            this.props.onChange(value);
        }
    }

    render () {
        const { items = [], label, placeholder = 'Select One...' } = this.props;
        const { buttonLabel, value, open, labelId, buttonId, expanded } = this.state;
        const content = buttonLabel || placeholder;

        const className = classnames({
            'react-dropdown': true,
            'has-placeholder': value === null || value === undefined
        });

        return (
            <div className={className}>
                {label && <label id={labelId} htmlFor={buttonId} key="label">{label}</label>}
                <div className="react-popup-container">
                    <button id={this.id} aria-expanded={expanded}>
                        <span>{content}</span>
                        {this.getIcon()}
                    </button>
                    <Popup
                        buttonId={this.id}
                        onOpen={this.onOpen}
                        onClose={this.onClose}
                        isMenu
                    >
                        <List
                            items={items}
                            onChange={this.onChange}
                        />
                    </Popup>
                </div>
            </div>
        );
    }
}