import React from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from '../src/Checkbox';

console.clear();

class Container extends React.Component {
    // for testing controlled component
    constructor (props) {
        super();
        this.state = {
            value: props.value || null
        };
    }

    render () {
        const { value } = this.state;
        return (
            <Checkbox value={value} onChange={(e) => { this.setState({ value: e })}} label="Is you is or is you not" />
        )
    }
}

function onChange (e) {
    console.log('onChange', e);
}

storiesOf('Checkbox', module)
    .add('Uncontrolled', () => ([
        <section><input /></section>,
        <Checkbox label="My Checkbox" onChange={onChange} defaultValue={null}/>,
        <section><input /></section>
    ]))
    .add('Controlled', () => ([
        <section><input /></section>,
        <Container value />,
        <section><input /></section>
    ]));