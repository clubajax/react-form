import React from 'react';
import classnames from 'classnames';
import uid from './lib/uid';
import { func } from 'prop-types';

export function Radio (props) {

    const { checkAfter, checked, label, value, disabled, className, onClick, onKey, id } = props;
    const chk = checked ? 'true' : null;
        const chkId = label ? (id || uid('radio')) : null;
        const lblId = label ? (id || uid('label')) : null;
        const classname = classnames({
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
                tabIndex="0"
                className="react-radio-check"
                onKeyUp={onKey}
            />
        );
        const labelNode = (
            <label
                id={lblId}
                htmlFor={chkId}
                className="react-checkbox-label"
            >{label}</label>
        );
        return (
            <div role="radio" className={classname} onClick={onClick} value={value} checked>
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
        console.log('props.defaultValue', props.defaultValue);
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
        this.props.onChange({ value });
    }

    onClick (e) {
        const node = e.target.closest('[role="radio"]');
        this.select(node.getAttribute('value'));    
    }

    onKey (e) {
        if (e.key === ' ' || e.key === 'Enter') {
            const node = e.target.closest('[role="radio"]');
            this.select(node.getAttribute('value'));  
        }
    }

    onNode (node) {
        this.node = this.node || node;
    }

    render() { 
        const { list = [], label } = this.props;
        const value = this.getValue();
        const labelNode = !label ? node : <label id={this.labelId} className="react-radios-label">{label}</label>
        
        return ( 
            <div className="react-radios" ref={this.onNode} role="radiogroup" aria-labelledby={this.labelId}>
                {labelNode}
                {list.map((item) => {
                    return <Radio 
                        checked={value === item.value}
                        label={item.label}
                        value={item.value}
                        key={item.value}
                        onClick={this.onClick}
                        onKey={this.onKey}
                    />
                })}
            </div>
        );
    }
}
 