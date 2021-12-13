import { __rest } from "tslib";
import React from 'react';
import { connectField, filterDOMProps } from 'uniforms';
import setErrorClass from './setErrorClass';
function Bool(_a) {
    var { disabled, id, inputRef, label, 
    // @ts-ignore
    labelLinkTo, name, onChange, value } = _a, props = __rest(_a, ["disabled", "id", "inputRef", "label", "labelLinkTo", "name", "onChange", "value"]);
    return (React.createElement("div", Object.assign({}, filterDOMProps(props)),
        React.createElement("input", { className: setErrorClass(props), checked: value || false, disabled: disabled, id: id, name: name, onChange: disabled
                ? undefined
                : () => {
                    onChange(!value);
                }, ref: inputRef, type: "checkbox" }),
        label && React.createElement("label", { htmlFor: id }, labelLinkTo ? React.createElement("a", { href: labelLinkTo }, label) : label)));
}
export default connectField(Bool, { kind: 'leaf' });
