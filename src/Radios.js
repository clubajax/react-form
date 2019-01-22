import React from 'react';
import classnames from 'classnames';
import uid from './lib/uid';
import labelHelper from './lib/labelHelper';

export function Radio (props) {

    const { checkAfter, checked, label, value, disabled, className, onClick, onKey, id } = props;
    const { labelNode, labelId, inputId } = labelHelper(props, 'radio');

    const chk = checked ? 'true' : null;
    const tabIndex = disabled ? -1 : 0;
    const classname = classnames({
        'react-radio': true,
        'check-after': checkAfter
    }, className);

    const checkNode = (
        <span
            id={inputId}
            aria-labelledby={labelId}
            aria-checked={chk}
            role="radio"
            tabIndex={tabIndex}
            className="react-radio-button"
            onKeyUp={onKey}
        />
    );

    return (
        <div className={classname} onClick={onClick} value={value} disabled={disabled} checked>
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
        this.helper = labelHelper(props, 'radiogroup');

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
        const { labelNode } = this.helper;
        const classname = classnames('react-radios', this.props.class, this.props.className);

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
 