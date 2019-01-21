import React from 'react';
import { storiesOf } from '@storybook/react';
import Radios, { Radio } from '../src/Radios';

console.clear();

const options = [
    { value: 'a', label: 'Radios AA'},
    { value: 'b', label: 'Radios BB'},
    { value: 'c', label: 'Radios CC'}
];

const withDisabled = [
    { value: 'a', label: 'Radios AA'},
    { value: 'b', label: 'Radios BB', disabled: true },
    { value: 'c', label: 'Radios CC'}
];

const withClass = [
    { value: 'a', label: 'Radios AA', class: 'orange'},
    { value: 'b', label: 'Radios BB', disabled: true, class: 'green' },
    { value: 'c', label: 'Radios CC', class: 'blue' }
];

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
            <Radios options={options} value={value} onChange={(e) => { this.setState({ value: e })}} />
        )
    }
}

function onChange (e) {
    console.log('onChange', e);
}

storiesOf('Radios', module)
    .add('Controlled', () => (
        <section>
            <Container value="c" />
        </section>
    ))
    .add('Uncontrolled', () => (
        <section>
            <Radios options={options} defaultValue="b" />
        </section>
    ))
    .add('Style', () => (
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
    .add('With Label', () => (
        <section>
            <Radios options={options} label="All my Radio" defaultValue="b" />
        </section>
    ))
    .add('All Disabled', () => (
        <section>
            <Radios options={options} label="All my Radio" defaultValue="b" disabled />
        </section>
    ))
    .add('One Disabled', () => (
        <section>
            <Radios options={withDisabled} label="All my Radio" defaultValue="b" />
        </section>
    ))
    .add('With Class', () => (
        <section>
            <Radios options={withClass} label="All my Radio" defaultValue="b" className="bordered" />
        </section>
    ));