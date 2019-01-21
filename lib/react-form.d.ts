
declare module '@clubajax/react-form' {
    import * as React from "react";

    export interface IActionButtonOption {
        value: string;
        label: string;
        key?: string;
        className?: string;
    }

    export interface IActionButtonProps {
        label?: string;
        name?: string;
        className?: string;
        children?: any;
        onAction?: () => {};
        options?: IActionButtonOption[];
    }

    export class ActionButton extends React.Component<IActionButtonProps> {}

    export interface ICheckboxProps {
        value?: boolean;
        defaultValue?: boolean;
        checkAfter?: boolean;
        label?: string;
        name?: string;
        onChange?: () => {};
    }

    export class Checkbox extends React.Component<ICheckboxProps> {}

    export interface IDropdownOption {
        value: string;
        label: string;
        alias?: string;
        key?: string;
        className?: string;
        disabled?: boolean;
    }

    export interface IDropdownProps {
        value?: string | null;
        defaultValue?: string | null;
        label?: string;
        name?: string;
        disabled?: boolean;
        placeholder?: string;
        id?: string;
        className?: string;
        onChange?: any;
        options?: IDropdownOption[];
    }

    export class Dropdown extends React.Component<IDropdownProps> {}

    export interface IRadioOption {
        value: string;
        label: string;
        key?: string;
        className?: string;
        disabled?: boolean;
    }

    export interface IRadiosProps {
        value?: string | null;
        defaultValue?: string | null;
        label?: string;
        name?: string;
        disabled?: boolean;
        id?: string;
        className?: string;
        onChange?: any;
        options?: IRadioOption[];
    }

    export class Radios extends React.Component<IRadiosProps> {}
}