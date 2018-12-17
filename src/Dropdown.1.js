import React from 'react';
import on from '@clubajax/on';
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
            open: false,
            focusIndex: null
        };
        this.onChange = this.onChange.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount () {

    }

    componentWillUnmount () {

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

    onFocus () {
        console.log('focus..');
        this.keyHandle = on(document, 'keyup', (e) => {
            console.log('key', e.key);
            switch (e.key) {
                case 'Escape':
                    this.close();
                    break;
                //case 'Enter':
                case 'ArrowDown':
                    this.open();
                    break;
            }
        });
    }

    onBlur () {
        console.log('blur');
        if (this.keyHandle) {
            this.keyHandle.remove();
        }
        this.close();
    }

    onClick (e) {
        if (!this.state.open) {
            this.open();
        }
    }

    open () {
        if (this.state.open) {
            return;
        }
        console.log('open...');
        this.setState({ open: true });
        setTimeout(()=> {
            this.clickHandle = on(document, 'click', (e) => {
                console.log('doc.close', e);
                this.close();
            });
        }, 1);

    }

    close () {
        if (!this.state.open) {
            return;
        }
        console.log('close...');
        this.setState({ open: false });
        if (this.clickHandle) {
            this.clickHandle.remove();
        }
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
        console.log('open', open);
        return (
            <div className={className} role="select">
                {label && <label id={labelId} htmlFor={buttonId} key="label">{label}</label>}
                <button
                    id={buttonId}
                    key="button"
                    aria-haspopup="true"
                    aria-expanded={expanded}
                    aria-labelledby={btnAria}
                    aria-activedescendant={id}
                    onClick={this.onClick}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}

                >
                    <span>{content}</span>
                    {this.getIcon()}
                </button>
                <Popup
                    key="popup"
                    onChange={this.onChange}
                    items={items}
                    selected={selected}
                    aria-labelledby={popAria}
                    open={open}
                    buttonId={buttonId}
                />
            </div>
        );
    }
}