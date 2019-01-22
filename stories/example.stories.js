import React from 'react';
import { storiesOf } from '@storybook/react';
import ActionMenu from '../src/ActionMenu';
import Dropdown from '../src/Dropdown';
import List from '../src/List';
import Checkbox from '../src/Checkbox';
import Radios from '../src/Radios';

console.clear();

const items = [
    {
        value: 'a',
        label: 'Superman'
    }, {
        value: 'b',
        label: 'Supermarket'
    }, {
        value: 'c',
        label: 'Superfluous'
    }
];

const skillLevels = [
    { value: 'basic', label: 'Basic' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' },
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
const radioOptions = [
    { value: 'a', label: 'Radios AA'},
    { value: 'b', label: 'Radios BB'},
    { value: 'c', label: 'Radios CC'}
];
function onChange (value) {
    console.log('change', value);
}

storiesOf('Example', module)
    .add('default', () => (
        <section>
            <h2>Choose Your Curriculum</h2>
            <Dropdown name="level" label="Skill Level" options={skillLevels} defaultValue={null} />
            <Checkbox label="My Checkbox Checked" onChange={onChange} defaultValue={true}/>
            <Radios options={radioOptions} defaultValue="b" />
            <ActionMenu options={items} onChange={onChange}>Action Menu</ActionMenu>
            <List name="katas" label="Choose Your Kata" options={groups} defaultValue={null}/> 
        </section>
    ));