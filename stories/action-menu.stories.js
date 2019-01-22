import React from 'react';
import { storiesOf } from '@storybook/react';
import ActionMenu from '../src/ActionMenu';

// console.clear();

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

function onAction (value) {
    console.log('value', value);
}

storiesOf('Action Menu', module)
    .add('default', () => (
        <section>
            <ActionMenu options={items} onAction={onAction}>Action Menu</ActionMenu>
        </section>
    ));