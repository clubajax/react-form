import React from 'react';
import classnames from 'classnames';
import Popup from './Popup';

export default class Dropdown extends React.Component {
    constructor () {
        super();
        this.state = {
            selected: ''
        }
        this.onChange = this.onChange.bind(this);
    }

    getIcon () {
        if (this.props.getIcon) {
            return this.props.getIcon();
        }
        return <i class="material-icons react-icon">expand_more</i>
    }

    onChange () {

    }

    render () {
        const { label, placeholder = 'Select One...' } = this.props;
        const { selected } = this.state;
        const content = selected || placeholder;

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
                <Popup onChange={this.onChange}/>
            </div>
        );
    }
}