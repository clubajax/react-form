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
        <section key="1"><input /></section>,
        <Checkbox key="2" label="My Checkbox" onChange={onChange} defaultValue={null}/>,
        <section key="3"><input /></section>
    ]))
    .add('Controlled', () => ([
        <section key="1"><input /></section>,
        <Container value key="2"/>,
        <section key="3"><input /></section>
    ]))
    .add('Check after', () => (
        <Checkbox label="My Checkbox" checkAfter onChange={onChange} defaultValue={null}/>
    ))
    .add('Default Checked', () => (
        <Checkbox label="My Checkbox Checked" onChange={onChange} defaultValue={true}/>
    ))
    .add('Disabled', () => (
        <Checkbox label="My Checkbox Checked" onChange={onChange} defaultValue={true} disabled/>
    ));