import { __rest } from "tslib";
import React from 'react';
import { connectField, filterDOMProps } from 'uniforms';
import setErrorClass from './setErrorClass';
const base64 = typeof btoa !== 'undefined'
    ? btoa
    : (x) => Buffer.from(x).toString('base64');
const escape = (x) => base64(encodeURIComponent(x)).replace(/=+$/, '');
function Radio(_a) {
    var { allowedValues, checkboxes, // eslint-disable-line no-unused-vars
    disabled, id, label, name, onChange, transform, value } = _a, props = __rest(_a, ["allowedValues", "checkboxes", "disabled", "id", "label", "name", "onChange", "transform", "value"]);
    return (React.createElement("div", Object.assign({}, filterDOMProps(props)),
        label && React.createElement("label", null, label), allowedValues === null || allowedValues === void 0 ? void 0 :
        allowedValues.map(item => (React.createElement("div", { key: item },
            React.createElement("input", { className: setErrorClass(props), checked: item === value, disabled: disabled, id: `${id}-${escape(item)}`, name: name, onChange: () => onChange(item), type: "radio" }),
            React.createElement("label", { htmlFor: `${id}-${escape(item)}` }, transform ? transform(item) : item))))));
}
export default connectField(Radio, { kind: 'leaf' });
