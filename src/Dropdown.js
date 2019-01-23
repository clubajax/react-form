import React from 'react';
import classnames from 'classnames';
import Popup from './Popup';
import List from './List';
import equal from './lib/equal';
import labelHelper from './lib/labelHelper';

// TODO: combobox: https://dequelabs.github.io/combobo/demo/

function getLabel (value, options = []) {
    const item = options.find(item => item.value === value);
    if (!item) {
        return null;
    }
    return item.alias || item.label
}
export default class Dropdown extends React.Component {

    static getDerivedStateFromProps(props, state) {
        if (props.defaultValue === undefined && (props.value !== state.value || !equal(props.options, state.options))) {
            return {
                value: props.value,
                buttonLabel: getLabel(props.value, props.options)
            }
        }
        return null;
    }

    constructor (props) {
        super();
        this.uncontrolled = props.defaultValue !== undefined;
        this.state = {
            value: null,
            buttonLabel: '',
            isInvalid: props.isInvalid,
            open: false,
            expanded: 'false'
        };

        if (!this.uncontrolled && !props.onChange) {
            console.error('A controlled Dropdown will need an `onChange` event')
        }

        this.helper = labelHelper(props, 'dropdown');
        this.onClose = this.onClose.bind(this);
        this.onOpen = this.onOpen.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onNode = this.onNode.bind(this);
        this.getSelectedId = this.getSelectedId.bind(this);
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
    }

    onChange (value) {
        if (this.uncontrolled) {
            this.setState({
                buttonLabel: getLabel(value, this.props.options),
                value
            });
        }
        if (this.props.onChange) {
            if (this.props.name) {
                this.node.value = value;
                this.node.name = this.props.name;
                const keyValue = {
                    [this.props.name]: value,
                    name: this.props.name,
                    value,
                    target: this.node
                 };
                this.props.onChange(keyValue);
                return;
            }
            this.props.onChange(value);
        }
    }

    getSelectedId () {
        if (!this.node) {
            return null;
        }
        const { value } = this.state;
        const node = this.node.querySelector(`[value="${value}"]`);
        return node ? node.id : null;
    }

    onNode (node) {
        this.node = this.node || node;
    }

    render () {
        const { options = [], placeholder = 'Select One...', disabled, className } = this.props;
        const { buttonLabel, value, errorId, isInvalid, expanded } = this.state;
        const { labelNode, labelId, inputId } = this.helper;

        const content = buttonLabel || placeholder;
        let classname = classnames({
            'react-dropdown': true,
            'has-placeholder': value === null || value === undefined
        }, className);
        
        return (
            <div className={classname} disabled={disabled}>
                {labelNode}
                <div className="react-popup-container" value={value} ref={this.onNode}>
                    <button
                        id={inputId}
                        aria-labelledby={labelId}
                        aria-expanded={expanded}
                        aria-invalid={isInvalid}
                        aria-describedby={errorId}
                        aria-activedescendant={this.getSelectedId()}
                        disabled={disabled}
                        type="button"
                        className="react-dropdown-button"
                        >
                        <span>{content}</span>
                        {this.getIcon()}
                    </button>
                    <Popup
                        buttonId={inputId}
                        onOpen={this.onOpen}
                        onClose={this.onClose}
                        isMenu
                    >
                        <List
                            options={options}
                            onChange={this.onChange}
                            value={value}

                        />
                    </Popup>
                </div>
            </div>
        );
    }
}