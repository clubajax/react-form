import React from 'react';
import uid from './uid';

const labelHelper = (props, type) => {

    const labelId = props.label ? uid('label') : null;
    const inputId = props.label ? (props.id || uid(type)) : null;
    const labelNode = !props.label ? null : (
        <label
            id={labelId}
            htmlFor={inputId}
            className="react-label"
            key="label"
        >{props.label}</label>
    );

    return {
        labelId,
        labelNode,
        inputId  
    };
};

export default labelHelper;