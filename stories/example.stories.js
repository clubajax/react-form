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
        label: 'Punch!'
    }, {
        value: 'b',
        label: 'Kick!'
    }, {
        value: 'c',
        label: 'Elbow Smash!'
    }
];

const skillLevels = [
    { value: 'basic', label: 'Thwart attackers' },
    { value: 'intermediate', label: 'Annihilate my enemies' },
    { value: 'advanced', label: 'Strike fear into the hearts of all those around me' },
];

const groups = [
    {
        type: 'group',
        label: 'Under belts'
    },{
        value: 'a',
        label: 'Palm Heel to the Nose'
    }, {
        value: 'b',
        label: 'Elbow to the Temple'
    }, {
        value: 'c',
        label: 'Punch to the Solar Plexis'
    }, {
        type: 'group',
        label: 'Brown belts'
    }, {
        value: 'e',
        label: 'Eye Gouge'
    }, {
        value: 'f',
        label: 'Rip out the Larynx'
    }, {
        type: 'group',
        label: 'Black belts'
    }, {
        value: 'g',
        label: 'Yank out the Spinal Cord'
    }, {
        value: 'h',
        label: 'Remove the Heart while still beating'
    }
];
const radioOptions = [
    { value: 'a', label: 'No Experience' },
    { value: 'b', label: 'Some Experience' },
    { value: 'c', label: 'Very Experienced' },
    { value: 'd', label: 'Mad Ninja Skillz' }
];
function onChange(value) {
    console.log('change', value);
}

storiesOf('Example', module)
    .add('default', () => (
        <section>
            <h2>Choose Your Self Defense Curriculum</h2>
            <section className="label-wrapper">
                <label>
                    <span>Forge your name here for eternity:</span>
                    <input />
                </label>
            </section>
            <section className="label-wrapper">
                <label htmlFor="reason">Name all those who wronged you (comma delineated):</label>
                <input id="reason" />
            </section>
            <section>
                <Dropdown name="level" label="Skill Level You Wish to Attain:" options={ skillLevels } defaultValue={ null } />
            </section>
            <section>
                <Checkbox label="I accept the danger level" onChange={ onChange } defaultValue={ true } />
            </section>
            <section>
                <Radios label="Your current skillz:" options={ radioOptions } defaultValue="b" />
            </section>
            <section>
                <ActionMenu options={ items } onChange={ onChange }>Perform Action:</ActionMenu>
            </section>
            <section>
                <List name="katas" label="Choose Your Style" options={ groups } defaultValue={ null } />
            </section>
        </section>
    ));