import React from 'react';
import { storiesOf } from '@storybook/react';
import List from '../src/List';

console.clear();

class Container extends React.Component {
    // for testing controlled component
    constructor () {
        super();
        this.state = {
            value: null
        }
    }

    render () {
        return (
            <List options={options} value={this.state.value} onChange={(e) => { this.setState({ value: e })}} />
        )
    }
}

const options = [
    {
        value: 'a',
        label: 'Tosan'
    }, {
        value: 'b',
        label: 'Heyan 4'
    }, {
        value: 'c',
        label: 'Waurang'
    }
];

const complex = [
    {
        value: 'a',
        label: <div className="complex"><strong>A</strong><em> is for apple</em></div>
    }, {
        value: 'b',
        label: <div className="complex"><strong>B</strong><em> is for banana</em></div>
    }, {
        value: 'c',
        label: <div className="complex"><strong>C</strong><em> is for cherry</em></div>
    }
];

const withDisabled = [
    {
        value: 'a',
        label: 'H Form 1'
    }, {
        value: 'b',
        label: 'H Form 2'
    }, {
        value: 'c',
        label: 'H Form 3'
    }, {
        value: 'd',
        label: 'Tekki',
        disabled: true
    }, {
        value: 'e',
        label: 'Chung mu',
        disabled: true
    }
];

storiesOf('List', module)
    .add('Simple List', () => ([
        <section key="1"><input key="input" /></section>,
        <section key="2"><List options={options} label="List options" key="list" /></section>,
        <section key="3"><List options={options} value="b" label="List options" key="list" /></section>
    ]))
    .add('Controlled', () => (
        <section><Container /></section>
    ))
    .add('Complex DOM', () => (
        <section><List options={complex} label="List options" key="list" /></section>
    ))
    .add('Disabled Items', () => (
        <section key="3"><List options={withDisabled} value="b" label="List options" key="list" /></section>
    ));