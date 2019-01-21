import React from 'react';
import classnames from 'classnames';
import uid from './lib/uid';
import { func } from 'prop-types';

export function Radio (props) {

    const { checkAfter, checked, label, value, disabled, className, onClick, onKey, id } = props;
    const chk = checked ? 'true' : null;
        const chkId = label ? (id || uid('radio')) : null;
        const lblId = label ? (id || uid('label')) : null;
        const tabIndex = disabled ? -1 : 0;
        let classname = classnames({
            'react-radio': true,
            'check-after': checkAfter,
            disabled
        });
        if (className) {
            classname = `${classname} ${className}`;
        }

        const checkNode = (
            <span
                aria-labelledby={lblId}
                aria-checked={chk}
                role="radio"
                tabIndex={tabIndex}
                className="react-radio-button"
                onKeyUp={onKey}
            />
        );
        const labelNode = (
            <label
                id={lblId}
                htmlFor={chkId}
                className="react-radio-label"
            >{label}</label>
        );
        return (
            <div className={classname} onClick={onClick} value={value} checked>
                {checkAfter && labelNode}
                {checkAfter && checkNode}
                {!checkAfter && checkNode}
                {!checkAfter && labelNode}
            </div>
        )
}

export default class Radios extends React.Component {
    constructor (props) {
        super();
        this.uncontrolled = props.defaultValue !== undefined;
        if (!this.uncontrolled && !props.onChange) {
            console.error('Controlled Radios will need an `onChange` event')
        }
        this.state = {
            value: this.uncontrolled ? props.defaultValue : props.value
        };
        this.id = props.id || uid('radiogroup');
        this.labelId = props.label ? uid('label') : null;

        this.onClick = this.onClick.bind(this);
        this.onKey = this.onKey.bind(this);
        this.onNode = this.onNode.bind(this);
    }

    getValue () {
        return this.props.disabled ? false : this.uncontrolled ? this.state.value : this.props.value;
    }

    select (value) {
        if (this.uncontrolled) {
            this.setState({ value });
            return;
        }
        this.props.onChange( value );
    }

    onClick (e) {
        if (this.props.disabled) {
            return;
        }
        const node = e.target.closest('.react-radio');
        this.select(node.getAttribute('value'));    
    }

    onKey (e) {
        if (this.props.disabled) {
            return;
        }
        if (e.key === ' ' || e.key === 'Enter') {
            const node = e.target.closest('.react-radio');
            this.select(node.getAttribute('value'));  
        }
    }

    onNode (node) {
        this.node = this.node || node;
    }

    render() { 
        const { options = [], label, name, disabled } = this.props;
        const value = this.getValue();
        const labelNode = !label ? null : <label id={this.labelId} className="react-radios-label">{label}</label>
        let classname = 'react-radios';
        if (this.props.class || this.props.className) {
            classname = `${classname} ${this.props.class || this.props.className}`;
        }

        return ( 
            <div 
                className={classname}
                ref={this.onNode}
                role="radiogroup"
                name={name}
                aria-labelledby={this.labelId}
                disabled={disabled}
                >
                {labelNode}
                {options.map((item) => {
                    return <Radio 
                        checked={value === item.value}
                        className={item.class || item.className}
                        label={item.label}
                        value={item.value}
                        key={item.value}
                        onClick={this.onClick}
                        onKey={this.onKey}
                        disabled={item.disabled || disabled}
                    />
                })}
            </div>
        );
    }
}
 