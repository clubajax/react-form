import React from 'react';
import { storiesOf } from '@storybook/react';
import Dropdown from '../src/Dropdown';

const items = [
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
]
storiesOf('Dropdown', module)
  .add('Simple', () => (
      <Dropdown items={items} placeholder="Choose your kata..." />
  ));