import React from 'react';
import classnames from 'classnames';
import uid from './lib/uid';
import labelHelper from './lib/labelHelper';

export default class Checkbox extends React.Component {

    constructor (props) {
        super();
        this.uncontrolled = props.defaultValue !== undefined;
        if (!this.uncontrolled && !props.onChange) {
            console.error('A controlled Checkbox will need an `onChange` event')
        }
        this.state = {
            value: this.uncontrolled ? props.defaultValue : props.value
        };

        this.helper = labelHelper(props, 'checkbox');

        this.id = props.id || uid('checkbox');

        this.onClick = this.onClick.bind(this);
        this.onKey = this.onKey.bind(this);
        this.onNode = this.onNode.bind(this);
    }

    getValue () {
        return this.props.disabled ? false : this.uncontrolled ? this.state.value : this.props.value;
    }

    getIcon () {
        if (!this.getValue()) {
            return null;
        }
        if (this.props.getIcon) {
            return this.props.getIcon();
        }
        return <i className="material-icons react-icon aria-hidden">check</i>
    }

    toggle () {
        let value = !this.getValue();
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
        this.toggle();
    }

    onKey (e) {
        if (e.key === ' ' || e.key === 'Enter') {
            this.toggle();
        }
    }

    onNode (node) {
        this.node = this.node || node;
    }

    render () {
        const { checkAfter, disabled, className } = this.props;
        const { labelNode, labelId, inputId } = this.helper;
        const checked = this.getValue();

        let classname = classnames({
            'react-checkbox': true,
            'check-after': checkAfter
        }, className);
        // if (className) {
        //     classname = `${classname} ${className}`;
        // }

        const checkNode = (
            <span
                id={inputId}
                role="checkbox"
                aria-labelledby={labelId}
                aria-checked={checked}
                tabIndex="0"
                className="react-checkbox-check"
                onKeyPress={this.onKey}
            >{this.getIcon()}</span>
        );

        return (
            <div className={classname} onClick={this.onClick} disabled={disabled} ref={this.onNode}>
                {checkAfter && labelNode}
                {checkAfter && checkNode}
                {!checkAfter && checkNode}
                {!checkAfter && labelNode}
            </div>
        )
    }
}