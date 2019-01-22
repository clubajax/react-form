import { configure } from '@storybook/react';

import '../src/styles/main.scss';
import { func } from 'prop-types';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
    sort(req.keys()).forEach(filename => req(filename));
}

configure(loadStories, module);


function sort (keys) {
    const first = 'example';
    const index = keys.findIndex((k) => {
        return k.indexOf(first) > -1;
    });
    console.log('index', index);
    if (index > -1) {
        const key = keys.splice(index, 1);
        keys.unshift(key);
    }
    console.log('keys', keys);
    return keys;
}