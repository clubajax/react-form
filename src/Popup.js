import React from 'react';
import classnames from 'classnames';
import on from '@clubajax/on';
import List from './List';

const ARIA_ITEM_PREFIX = 'ca-item-';

export default class Popup extends React.Component {
    constructor () {
        super();
        this.state = {
            open: false
        };
        this.onNode = this.onNode.bind(this);
    }

    componentDidMount () {
        const { buttonId } = this.props;
        if (!buttonId) {
            return;
        }
        const button = document.getElementById(buttonId);

        this.keyHandle = on(document, 'keydown', (e) => {
            switch (e.key) {
                case 'Escape':
                    this.close();
                    break;
                case 'Tab':
                    setTimeout(() => {
                        this.detectBlur(e);
                    }, 1);
                    break;
                default:
                    this.detectBlur(e);
            }
        });
        this.keyHandle.pause();

        this.clickHandle = on(document, 'click', () => {
            this.delayedClose();
        });
        this.clickHandle.pause();

        this.keyMainHandle = on(buttonId, 'keydown', (e) => {
            switch (e.key) {
                case 'Enter':
                case 'ArrowDown':
                    e.preventDefault();
                    this.open();
                    break;
            }
        });
        this.clickMainHandle = on(buttonId, 'click', (e) => {
            const { open } = this.state;
            if (open) {
                this.close();
            } else {
                this.open();
            }
            e.preventDefault();
            e.stopPropagation();
            return false;
        });
    }

    componentWillUnmount () {
        this.keyHandle.remove();
        this.clickHandle.remove();
        this.clickMainHandle.remove();
        this.keyMainHandle.remove();
    }

    open () {
        if (this.state.open) {
            return;
        }
        this.setState({ open: true }, () => {
            this.node.firstElementChild.focus();
        });
        setTimeout(() => {
            this.keyHandle.resume();
            this.clickHandle.resume();
        }, 400);
        if (this.props.onOpen) {
            this.props.onOpen();
        }
    }

    close () {
        if (!this.state.open) {
            return;
        }
        this.setState({ open: false });
        this.keyHandle.pause();
        this.clickHandle.pause();
        if (this.props.onClose) {
            this.props.onClose();
        }
    }

    delayedClose () {
        setTimeout(() => {
            this.close();
        }, 200);
    }

    detectBlur (e) {
        // called on key
        if (this.props.isMenu && (e.key === 'Enter' || e.key === ' ')) {
            this.delayedClose();
            return;
        }
        const active = document.activeElement;
        if (!this.parent.contains(active)) {
            this.close();
        }
    }

    onNode (node) {
        if (node) {
            const btn = document.getElementById(this.props.buttonId);
            this.node = node;
            this.parent = this.node;
            while (!this.parent.contains(this.node) || !this.parent.contains(btn)) {
                this.parent = this.parent.parentNode;
            }
        }
    }

    render () {
        const {
            state: {
                open
            },
            props: {
                children
            }
        } = this;
        const classname = classnames({
            'react-popup': true,
            open
        });
        return (
            <div className={classname} ref={this.onNode}>
                {children}
            </div>
        );
    }
}