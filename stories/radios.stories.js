import React from 'react';
import { storiesOf } from '@storybook/react';
import Radios, { Radio } from '../src/Radios';

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

const list = [
    { value: 'a', label: 'Radios AA'},
    { value: 'b', label: 'Radios BB'},
    { value: 'c', label: 'Radios CC'}
];

function onChange (e) {
    console.log('onChange', e);
}

storiesOf('Radios', module)
    .add('Radio style', () => (
        <div>
            <section>
                <Radio key="1" label="Radio AA" onChange={onChange} checked />
                <Radio key="2" label="Radio BB" onChange={onChange} />
            </section>
            <section>
                <Radio key="3" label="Radio CC" checkAfter onChange={onChange} checked />
                <Radio key="4" label="Radio DD" checkAfter onChange={onChange} />
            </section>
        </div>
    ))
    .add('Radios', () => (
        <section>
            <Radios list={list} defaultValue="b" />
        </section>
    ))
    .add('Radios with Label', () => (
        <section>
            <Radios list={list} label="All my Radio" defaultValue="b" />
        </section>
    ));