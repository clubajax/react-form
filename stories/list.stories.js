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
      <section key="1"><input key="input" /></section>,
      <section key="2"><List items={items} label="List Items" key="list" /></section>,
      <section key="3"><List items={items} value="b" label="List Items" key="list" /></section>
    ]));