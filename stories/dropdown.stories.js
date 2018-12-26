import React from 'react';
import { storiesOf } from '@storybook/react';
import Dropdown from '../src/Dropdown';

console.clear();

class Container extends React.Component {
    // for testing controlled component
    constructor (props) {
        super();
        this.state = {
            value: props.value || null,
            options: props.delay ? [] : props.options || []
        };
    }

    componentDidMount () {
        const { delay, options } = this.props;
        if (delay) {
            setTimeout(() => {
                this.setState({ options });
            }, 100);
        }
    }

    render () {
        const { options, value } = this.state;
        return (
            <Dropdown options={options} value={value} onChange={(e) => { this.setState({ value: e })}} placeholder="Choose your kata..." label="Forms" key="drop" />
        )
    }
}

const options = [
    {
        value: 'a',
        label: 'H Form 1'
    }, {
        value: 'b',
        label: 'H Form 2'
    }, {
        value: 'c',
        label: 'H Form 3'
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

const aliases = [
    {
        value: 'a',
        alias: 'Uno',
        label: <div className="styled-item"><div>Uno</div><div>This is the first item in the list</div><div>To be used only under the most dire circumstances</div></div>
    }, {
        value: 'b',
        alias: 'Dos',
        label: <div className="styled-item"><div>Dos</div><div>This is the second item in the list</div><div>To be used only under the most dire circumstances</div></div>
    }, {
        value: 'c',
        alias: 'Tre',
        label: <div className="styled-item"><div>Tre</div><div>This is the third item in the list</div><div>To be used only under the most dire circumstances</div></div>
    }
];

const domOptions = aliases.map(({ value, label }) => ({ value, label }));

function onChange (e) {
    console.log('onChange.target', e.target.name, e.target.value);
    console.log('onChange.value', e.value);
    console.log('onChange.keyValue', e);

}

storiesOf('Dropdown', module)
    .add('Uncontrolled', () => ([
        <label htmlFor="sel" key="label">Alphabet</label>,
        <select id="alphabet" key="select">
            <option value="a" key="a">AAA</option>
            <option value="b" key="b">BBB</option>
            <option value="c" key="c">CCC</option>
            <option value="d" key="d">DDD</option>
        </select>,
        <Dropdown options={options} placeholder="Choose your kata..." defaultValue={null} label="Forms" key="drop" />,
        <input key="input"/>
    ]))
    .add('Uncontrolled Multiple', () => (
        <div>
            <Dropdown options={options} placeholder="Choose your kata..." defaultValue={null} label="Forms" key="1" />
            <Dropdown options={aliases} placeholder="Choose your number..." defaultValue={null} label="Numbers" key="2" />
            <Dropdown options={withClass} placeholder="Choose your belt..." defaultValue={null} label="Katas" key="3" />
        </div>
    ))
    .add('Form', () => (
        <form>
            <Dropdown options={options} defaultValue={null} label="Forms" key="drop" />
        </form>
    ))
    .add('KeyValue', () => (
        <Dropdown options={options} placeholder="Choose your kata..." defaultValue={null} name="shazbut" label="Forms" key="drop" onChange={onChange} />
    ))
    .add('Controlled', () => (
        <Container options={options} />
    ))
    .add('Controlled Delayed Load', () => (
        <Container options={options} delay value="b"/>
    ))
    .add('Alias', () => (
        <Dropdown options={aliases} placeholder="Choose your number..." defaultValue={null} label="Numbers" key="drop" />
    ))
    .add('Dom Options', () => (
        <Dropdown options={domOptions} placeholder="Choose your number..." defaultValue={null} label="Numbers" key="drop" />
    ))
    .add('With Class', () => (
        <Dropdown options={withClass} placeholder="Choose your belt..." defaultValue={null} label="Katas" key="drop" />
    ))
    .add('Disabled', () => (
        <Dropdown disabled options={withDisabled} placeholder="Choose your kata..." defaultValue="b" label="More Forms" key="drop" />
    ))
    .add('Disabled Options', () => (
        <Dropdown options={withDisabled} placeholder="Choose your kata..." defaultValue="b" label="More Forms" key="drop" />
    ));