
declare module '@clubajax/react-form' {
    import * as React from "react";

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
        value: string,
        label: string,
        alias?: string,
        key?: string
    }

    export interface IDropdownProps {
        value?: string;
        defaultValue?: string;
        label?: string;
        name?: string;
        disabled?: boolean;
        placeholder?: string;
        id?: string;
        onChange?: any;
        options?: IDropdownOption[]
    }

    export class Dropdown extends React.Component<any> {}

}