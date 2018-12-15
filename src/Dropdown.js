import React from 'react';
import classnames from 'classnames';
import Popup from './Popup';
import uid from './lib/uid';

const ARIA_ITEM_PREFIX = 'react-item-';

export default class Dropdown extends React.Component {
    constructor (props) {
        super();
        this.state = {
            selected: '',
            buttonLabel: '',
            labelId: props.label ? uid('label') : null,
            buttonId: uid('button'),
            open: false
        }
        this.onChange = this.onChange.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    getIcon () {
        if (this.props.getIcon) {
            return this.props.getIcon();
        }
        return <i className="material-icons react-icon">expand_more</i>
    }

    onChange (value) {
        const buttonLabel = (this.props.items.find(item => item.value === value) || {}).label || '';
        this.setState({
            selected: value,
            buttonLabel,
            open: false
        });
    }

    toggle () {
        const open = !this.state.open;
        this.setState({ open });
    }

    render () {
        const { items = [], label, placeholder = 'Select One...' } = this.props;
        const { buttonLabel, selected, open, labelId, buttonId } = this.state;
        const content = buttonLabel || placeholder;
        const className = classnames({
            'react-dropdown': true,
            'has-placeholder': !selected
        });

        const id = `${ARIA_ITEM_PREFIX}${selected}`;
        const expanded = open ? 'true' : 'false';
        const btnAria = `${labelId ? labelId : ''}${buttonId}`;
        const popAria = labelId || null;
        console.log('expanded', expanded);
        return (
            <div className={className} role="select">
                {label && <label id={labelId} htmlFor={buttonId}>{label}</label>}
                <button
                    id={buttonId}
                    aria-haspopup="true"
                    aria-expanded={expanded}
                    onClick={this.toggle}
                    aria-labelledby={btnAria}
                    aria-activedescendant={id}
                >
                    <span>{content}</span>
                    {this.getIcon()}
                </button>
                <Popup onChange={this.onChange} items={items} selected={selected} aria-labelledby={popAria} open={open}/>
            </div>
        );
    }
}