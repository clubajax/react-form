import React from 'react';
import { storiesOf } from '@storybook/react';
import Dropdown from '../src/Dropdown';

console.clear();

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
      [
    <label htmlFor="sel" key="label">Alphabet</label>,
    <select id="alphabet" key="select">
          <option value="a" key="a">AAA</option>
          <option value="b" key="b">BBB</option>
          <option value="c" key="c">CCC</option>
          <option value="d" key="d">DDD</option>
      </select>,
      <Dropdown items={items} placeholder="Choose your kata..." label="Forms" key="drop" />]
  ));