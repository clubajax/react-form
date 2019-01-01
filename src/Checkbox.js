import React from 'react';
import classnames from 'classnames';
import on from '@clubajax/on';
import uid from './lib/uid';

export default class Checkbox extends React.Component {

    constructor (props) {
        super();
        console.log('props.defaultValue', props.defaultValue);
        this.uncontrolled = props.defaultValue !== undefined;
        if (!this.uncontrolled && !props.onChange) {
            console.error('A controlled Checkbox will need an `onChange` event')
        }
        this.state = {
            value: this.uncontrolled ? props.defaultValue : props.value,
            labelId: props.label ? uid('label') : null
        };
        this.id = props.id || uid('checkbox');
        this.onClick = this.onClick.bind(this);
        this.onKey = this.onKey.bind(this);
        this.onNode = this.onNode.bind(this);
    }

    getValue () {
        return this.uncontrolled ? !this.state.value : !this.props.value;
    }

    getIcon () {
        if (this.getValue()) {
            return null;
        }
        if (this.props.getIcon) {
            return this.props.getIcon();
        }
        return <i className="material-icons react-icon aria-hidden">check</i>
    }

    toggle () {
        let value = this.getValue();
        if (this.uncontrolled) {
            this.setState({ value });
        }
        if (this.props.onChange) {
            if (this.props.name) {
                this.node.value = value;
                this.node.name = this.props.name;
                value = {
                    [this.props.name]: value,
                    name: this.props.name,
                    value,
                    target: this.node
                 };
            }
            this.props.onChange(value);
        }
    }

    onClick (e) {
        console.log('click', e);
        this.toggle();
    }

    onKey (e) {
        console.log('key', e);
        if (e.key === ' ' || e.key === 'Enter') {
            this.toggle();
        }
    }

    onNode (node) {
        this.node = this.node || node;
    }

    render () {
        const checked = this.uncontrolled ? this.state.value : this.props.value;
        const { checkAfter, label } = this.props;
        const chkId = label ? (this.id || uid('checkbox')) : null;
        const lblId = label ? (this.id || uid('label')) : null;
        const cls = classnames({
            'react-checkbox': true,
            'check-after': checkAfter
        });
        const checkNode = (
            <span
                role="checkbox"
                aria-labelledby={lblId}
                aria-checked={checked}
                tabindex="0"
                className="react-checkbox-check"
                onKeyPress={this.onKey}
            >{this.getIcon()}</span>
        );
        const labelNode = (
            <label
                id={lblId}
                htmlFor={chkId}
                className="react-checkbox-label"
            >{label}</label>
        );
        return (
            <div className={cls} onClick={this.onClick} ref={this.onNode}>
                {checkAfter && labelNode}
                {checkAfter && checkNode}
                {!checkAfter && checkNode}
                {!checkAfter && labelNode}
            </div>
        )
    }
}