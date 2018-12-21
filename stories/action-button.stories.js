import React from 'react';
import { storiesOf } from '@storybook/react';
import ActionButton from '../src/ActionButton';

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
]
storiesOf('ActionButton', module)
  .add('Simple', () => (
      <section key="2"><ActionButton options={items} key="list">Super Button</ActionButton></section>
    ));