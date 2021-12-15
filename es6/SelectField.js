import { __rest } from "tslib";
import xor from 'lodash/xor';
import React from 'react';
import { connectField, filterDOMProps } from 'uniforms';
const base64 = typeof btoa !== 'undefined' ? btoa : x => Buffer.from(x).toString('base64');
const escape = (x) => base64(encodeURIComponent(x)).replace(/=+$/, '');
function Select(_a) {
    var { allowedValues, checkboxes, disabled, fieldType, id, inputRef, label, name, onChange, placeholder, required, disableItem, transform, value } = _a, props = __rest(_a, ["allowedValues", "checkboxes", "disabled", "fieldType", "id", "inputRef", "label", "name", "onChange", "placeholder", "required", "disableItem", "transform", "value"]);
    return (React.createElement("div", Object.assign({}, filterDOMProps(props)),
        label && React.createElement("label", { htmlFor: id }, label),
        checkboxes || fieldType === Array ? (allowedValues.map(item => {
            var _a;
            return (React.createElement("div", { key: item },
                React.createElement("input", { checked: fieldType === Array ? value.includes(item) : value === item, disabled: (_a = disableItem === null || disableItem === void 0 ? void 0 : disableItem(item)) !== null && _a !== void 0 ? _a : disabled, id: `${id}-${escape(item)}`, name: name, onChange: () => {
                        onChange(fieldType === Array ? xor([item], value) : item);
                    }, type: "checkbox" }),
                React.createElement("label", { htmlFor: `${id}-${escape(item)}` }, transform ? transform(item) : item)));
        })) : (React.createElement("select", { disabled: disabled, id: id, name: name, onChange: event => {
                onChange(event.target.value !== '' ? event.target.value : undefined);
            }, ref: inputRef, value: value !== null && value !== void 0 ? value : '' },
            (!!placeholder || !required || value === undefined) && (React.createElement("option", { value: "", disabled: required, hidden: required }, placeholder || label)),
            allowedValues.map(value => (React.createElement("option", { disabled: disableItem === null || disableItem === void 0 ? void 0 : disableItem(value), key: value, value: value }, transform ? transform(value) : value)))))));
}
export default connectField(Select, { kind: 'leaf' });
