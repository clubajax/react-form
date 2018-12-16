import React from 'react';
import { storiesOf } from '@storybook/react';
import List from '../src/List';

console.clear();

const items = [
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
]
storiesOf('List', module)
  .add('Simple List', () => ([
      <input key="input" />,
      <List items={items} label="List Items" key="list"/>
    ]));