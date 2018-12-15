import React from 'react';
import classnames from 'classnames';
import Popup from './Popup';

export default class Dropdown extends React.Component {
    constructor () {
        super();
        this.state = {
            selected: '',
            label: ''
        }
        this.onChange = this.onChange.bind(this);
    }

    getIcon () {
        if (this.props.getIcon) {
            return this.props.getIcon();
        }
        return <i className="material-icons react-icon">expand_more</i>
    }

    onChange (value) {
        const label = (this.props.items.find(item => item.value === value) || {}).label || '';
        this.setState({
            selected: value,
            label
        });
    }

    render () {
        const { items = [], placeholder = 'Select One...' } = this.props;
        const { label, selected } = this.state;
        const content = label || placeholder;

        const className = classnames({
            'react-dropdown': true,
            'has-placeholder': !selected
        });
        return (
            <div className={className}>
                <button>
                    <span>{content}</span>
                    {this.getIcon()}
                </button>
                <Popup onChange={this.onChange} items={items} selected={selected} />
            </div>
        );
    }
}