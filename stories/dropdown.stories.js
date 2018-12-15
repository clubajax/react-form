import React from 'react';
import { storiesOf } from '@storybook/react';
import Dropdown from '../src/Dropdown';

storiesOf('Dropdown', module)
  .add('Simple', () => (
      <Dropdown />
  ));