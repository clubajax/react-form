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

const withClass = [
    {
        value: 'a',
        label: 'Tosan',
        class: 'orange'
    }, {
        value: 'b',
        label: 'Heyan 4',
        class: 'green'
    }, {
        value: 'c',
        label: 'Waurang',
        class: 'blue'
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

const labeled = [
    {
        type: 'label',
        label: 'Under belts'
    },
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
        label: 'Tekki'
    }, {
        type: 'label',
        label: 'Brown belts'
    }, {
        value: 'e',
        label: 'Chung mu'
    }, {
        value: 'f',
        label: 'Swishi no cone'
    }
];

const groups = [
    {
        type: 'group',
        label: 'Under belts'
    },
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
        label: 'Tekki'
    }, {
        type: 'group',
        label: 'Brown belts'
    }, {
        value: 'e',
        label: 'Chung mu'
    }, {
        value: 'f',
        label: 'Swishi no cone'
    }, {
        type: 'group',
        label: 'Black belts'
    }, {
        value: 'g',
        label: 'Kama Kata'
    }, {
        value: 'h',
        label: 'Tonfa Kata'
    }
];

function onChange (e) {
    console.log('story.change', e);
}
storiesOf('List', module)
    .add('Simple List', () => ([
        <section key="1"><input key="input" /></section>,
        <section key="2"><List options={options} label="List options" defaultValue={null} key="list" /></section>,
        <section key="3"><List options={options} defaultValue="b" label="List options" key="list" /></section>
    ]))
    .add('With Class', () => (
        <section key="3"><List options={withClass} label="Katas" defaultValue="b" label="List options" key="list" /></section>
    ))
    .add('Controlled', () => (
        <section><Container /></section>
    ))
    .add('Complex DOM', () => (
        <section><List options={complex} label="List options" defaultValue={null} key="list" /></section>
    ))
    .add('Disabled Items', () => (
        <section key="3"><List options={withDisabled} defaultValue="b" label="List options" onChange={onChange} /></section>
    ))
    .add('Labels', () => (
        <section><List options={labeled} label="List options" defaultValue={null} key="list" /></section>
    ))
    .add('Groups', () => (
        <section><List options={groups} label="Grouped options" defaultValue={null} key="list" /></section>
    ));