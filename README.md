# React Form

Basic form elements for use in React.

Currently the main component is a Dropdown, with useable sub-components: Popup and List

## Install

    yarn add @clubajax/react-form

    npm install @clubajax/react-form

## Demo

[See React Form in action on clubajax.io](https://clubajax.github.io/dist/react-form/index.html)

## Accessibility

React Form aims to achieve ADA AA 2.0 - Americans with Disabilities Act, version 2.0, "Double A" compliance (not triple A)

Components have been tested for use without a mouse and with a screen reader.

## TypeScript Safe

React Form comes with a `tsconfig.json` file for typings.

## Style
React Form is styled with SCSS, so a stylesheet will need to be imported:

    @import 'node_modules/@clubajax/react-form/lib/react-form.css';

React Form is very lightly styled, using grays and moderate padding and margins, so it will be easy to override to suit the application's needs.

### Dropdown/ActionMenu Style
The Dropdown is an "inline" style, meaning that its popup is a descendant of the dropdown element tree, not an absolutely
positioned DOMNode floating over the document. There are pros and cons to each style.

Inline Pros:

 * Can be "stretchy" to the same size of the Dropdown button
 * Can have custom positioning, left/right/center
 * It is easy to inspect the DOM and debug
 * It's easier to conditionally style the popup, since it is a descendant of the Dropdown and whatever className is used on it.
 * Less complexity in the positioning, which leads to less code to maintain and relatively fewer bugs

Inline Cons:

 * Certain page layouts cannot be used. Specifically anything with `position: absolute` (rare) or `overflow: hidden` (more common).
 * The width of the popup is based on the component width, not the window width.

Absolute Positioned Pros and Cons are the inverse of the lists above.

### Controlled vs Uncontrolled

You can choose whether to use the components as [controlled or uncontrolled](https://reactjs.org/docs/uncontrolled-components.html).

Controlled, which does not maintain its own state and expects the `value` to change via props, is the default. Use the `value` props as usual.

For uncontrolled, use `defaultValue`. This will maintain state internally. If you do not want to set an initial value but still wish
to use it uncontrolled, pass: `defaultValue={null}`.

## Usage

```jsx harmony
import { Dropdown } from '@clubajax/react-form';

const options = [
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
];

<Dropdown options={options} value="a" placeholder="Choose your kata..." label="Forms" />
```

## Properties

### Checkbox

 * **value** *[boolean, optional]*: (Controlled) If provided, sets the value of the Checkbox, `true` checks the Checkbox
 * **defaultValue** *[boolean, optional]*: (Uncontrolled) If provided, sets the value of the Checkbox, `true` checks the Checkbox
 * **label** *[string, optional]*: If provided, creates a label element above the Dropdown
 * **checkAfter** *[boolean, optional]*: If true, the check will be rendered after the label
 * **name** *[string, optional]*: The name of the component (as used in forms). Will change the event (see below)
 * **onChange** *[function, optional]*: The callback event when an item is selected (see Events below)

### Radios
 * **options** *[array, required]*: The items that will be used to create the radio buttons
   * **value** *[string|integer, required]*: The unique identifier of the option
   * **label** *[string|DomNode, required]*: The text that will display next to the radio button
   * **class** *[string, optional]*: A className that will be appended to that radio button
   * **disabled** *[boolean, optional]*: Will make that radio button non-selectable
 * **value** *[boolean, optional]*: (Controlled) If provided, selects the radio with the matching value
 * **defaultValue** *[boolean, optional]*: (Uncontrolled) If provided, selects the radio with teh matching value
 * **label** *[string, optional]*: If provided, creates a label element above the radio buttons
 * **checkAfter** *[boolean, optional]*: If true, the radio buttons will be rendered after the label
 * **name** *[string, optional]*: The name of the component (as used in forms). Will change the event (see below)
 * **onChange** *[function, optional]*: The callback event when an item is selected (see Events below)

### Dropdown

 * **options** *[array, required]*: The items that will be used to create the drop-down list
   * **value** *[string|integer, required]*: The unique identifier of the option
   * **label** *[string|DomNode, required]*: The text that will display in the drop-down list
   * **class** *[string, optional]*: A className that will be appended to the option in the drop-down list
   * **alias** *[string, optional]*: The alternative text that will display in the in the button, not the drop-down list
   * **disabled** *[boolean, optional]*: Will make that option non-selectable
 * **value** *[string|integer, optional]*: (Controlled) If provided, sets the value of the Dropdown, and the display to the `label` of the `option` of that value
 * **defaultValue** *[string|integer, optional]*: (Uncontrolled) If provided, sets the value of the Dropdown, and the display to the `label` of the `option` of that value
 * **label** *[string, optional]*: If provided, creates a label element above the Dropdown
 * **name** *[string, optional]*: The name of the component (as used in forms). Will change the event (see below)
 * **placeholder** *[string, optional]*: The button display if no item is selected (defaults to "Select one...")
 * **onChange** *[function, optional]*: The callback event when an item is selected (see Events below)

## ActionMenu

ActionMenu is a button that opens a drop-down list. When an item is selected in the menu, an `onAction` event is called. The `onAction` event will
fire, passing teh value from the list item.

 * **options** *[array, required]*: The items that will be used to create the menu
   * **value** *[string|integer, required]*: The unique identifier of the option
   * **label** *[string|DomNode, required]*: The text that will display in the menu
   * **class** *[string, optional]*: A className that will be appended to the option in the menu
   * **disabled** *[boolean, optional]*: Will make that option non-selectable
 * **label** *[string, optional]*: If provided, creates a label element above the Dropdown
 * **children** *[string | ReactNode, optional]* Alternative to label: `<ActionMenu>Label Here</ActionMenu>`
 * **onAction** *[function, optional]*: The callback event when an item is selected (see Events below)

## Popup

The Popup will show/hide its contents, positioning itself relative to its parent/owner component. It will display whatever
children are created in the JSX markup.

 * **buttonId** *[string|integer, required]*: Popup will listen to the click event or Enter key of this DomNode ID.
 * **onOpen** *[function, optional]*: The callback event when the Popup opens.
 * **onClose** *[function, optional]*: The callback event when the Popup closes.
 * **isMenu** *[boolean, optional]*: Causes a slightly different behavior, closing the popup more slowly so the selected item can be seen.

## List

The List is a sub-component of the Dropdown, so it will look and work in a similar fashion.

 * **options** *[array, required]*: The items that will be used to create the list
   * **value** *[string|integer, required]*: The unique identifier of the option
   * **label** *[string|DomNode, required]*: The text that will display in the list
   * **class** *[string, optional]*: A className that will be appended to the option in the list
   * **disabled** *[boolean, optional]*: Will make that option non-selectable
 * **value** *[string|integer, optional]*: (Controlled) If provided, sets the value of the List, and the display to the `label` of the `option` of that value
 * **defaultValue** *[string|integer, optional]*: (Uncontrolled) If provided, sets the value of the List, and the display to the `label` of the `option` of that value
 * **onChange** *[function, optional]*: The callback event when an item is selected. It will pass the options item.
 * **isMenu** *[boolean, optional]*: Will clear selection on close.

### Events for Dropdown, Radios, and Checkbox

If the `name` prop is not used, the `onChange` event simply passes the `value`.

If the name prop **is** used, the event has the following shape:

```jsx harmony
{
    value: value,
    name: props.name
    [props.name]: value,
    target: <DomNode> {
        ...
        value: value,
        name: props.name
    }
}
```

 ## License

 [Free as in beer](./LICENSE).