import React from 'react';
import { storiesOf } from '@storybook/react';
import ActionMenu from '../src/ActionMenu';
import Dropdown from '../src/Dropdown';
import List from '../src/List';
import Checkbox from '../src/Checkbox';
import Radios from '../src/Radios';
import logo from '../src/styles/ca_star.svg';
import { func } from 'prop-types';

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

storiesOf('Accessibility', module)
    .add('Page', () => (
        <div className="page">
            <a className="skip-nav" tabIndex={ 0 } href="/?selectedKind=Accessibility&selectedStory=Page&full=0&addons=1&stories=1&panelRight=0#main">Skip Navigation</a>
            <header role="banner">
                <h1 tabIndex={ -1 }>
                    <a href="https://github.com/clubajax/react-form">
                        <img src={ logo } alt="Club AJAX logo, link to repository" />
                    </a>
                    <span>React Page Accessibility Example</span>
                </h1>
            </header>
            <nav role="navigation">
                <ul>
                    <li><a href="#">Fitness</a></li>
                    <li><a href="#">Nutrition</a></li>
                    <li><a href="#">Fighting</a></li>
                </ul>
            </nav>
            <article>
                <main role="main" id="main">
                    <h2>About the Club AJAX Self Defense System</h2>
                    <p>
                        The Club AJAX Self Defense System is a military self-defense and fighting system designed for developers
                        that consists of a combination of techniques sourced from Boxing, Wrestling, Aikido, Judo, and Karate, along with
                        realistic fight training. Club AJAX is also considered to be an early concept of MMA (Mixed Martial Arts)
                        since it included both wrestling and striking elements.
                    </p>
                    <div role="presentation">
                        <code>div</code> is still read by screen reader, even though <code>role="presentation"</code>
                    </div>
                    <div aria-hidden="true">
                        This <code>div</code> is not read by screen reader, because <code>aria-hidden="true"</code>
                    </div>
                    <p>
                        It is known for its focus on real-world situations, its extreme efficiency, and brutal
                        counter-attacks. It was derived from the street-fighting experience of martial artist Mike Wilcox, who made use of his
                        training as a boxer and wrestler as a means of defending front end developers against fascist Java and DOT NET groups.
                    </p>
                </main>
                <aside role="complementary">
                    Click nowhere to learn more about the Club AJAX Self Defense System
                </aside>
            </article>
            <footer role="contentinfo">
                <p>
                    &copy; Copyright Club AJAX
                </p>
            </footer>
        </div>
    ))
    .add('Form', () => (
        <div className="page">
            <h1 tabIndex={ -1 }>
                <a href="https://github.com/clubajax/react-form">
                    <img src={ logo } alt="Club AJAX logo, link to repository" />
                </a>
                <span>React Form Accessibility Example</span>
            </h1>
            <h2>Choose Your Self Defense Curriculum</h2>
            <div className="label-wrapper">
                <label>
                    <span>Forge your name here for eternity:</span>
                    <input />
                </label>
            </div>
            <div className="label-wrapper">
                <label htmlFor="reason">Name all those who wronged you (comma delineated):</label>
                <input id="reason" />
            </div>
            <div className="wrap">
                <Dropdown name="level" label="Skill Level You Wish to Attain:" options={ skillLevels } defaultValue={ null } />
            </div>
            <div className="wrap">
                <Checkbox label="I accept the danger level" onChange={ onChange } defaultValue={ true } />
            </div>
            <div className="wrap">
                <Radios label="Your current skillz:" options={ radioOptions } defaultValue="b" />
            </div>
            <div className="wrap">
                <ActionMenu options={ items } onChange={ onChange }>Perform Action:</ActionMenu>
            </div>
            <div className="wrap">
                <List name="katas" label="Choose Your Style" options={ groups } defaultValue={ null } />
            </div>
        </div>
    ));


let current;
function onUrlChange() { 
    const node = document.querySelector('#root h1');
    if (node) {
        node.focus();
    }
}

function checkUrl() { 
    const url = document.location.search;
    if (url !== current) {
        current = url;
        onUrlChange();
    }
}

setInterval(checkUrl, 500);

setTimeout(() => {
    const nav = document.querySelector('nav');
    if (nav) {
        [ ...nav.querySelectorAll('a') ].forEach((a) => { 
            a.addEventListener('click', function (e) {
                e.preventDefault();
            });
        })
        
    }
});
