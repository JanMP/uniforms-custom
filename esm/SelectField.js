import { __rest } from "tslib";
import xor from 'lodash/xor';
import React from 'react';
import { connectField, filterDOMProps } from 'uniforms';
const base64 = typeof btoa === 'undefined'
    ? /* istanbul ignore next */ /* istanbul ignore next */ x => Buffer.from(x).toString('base64')
    : btoa;
const escape = (x) => base64(encodeURIComponent(x)).replace(/=+$/, '');
function Select(_a) {
    var { allowedValues, checkboxes, disabled, fieldType, id, inputRef, label, name, onChange, placeholder, readOnly, required, disableItem, transform, value } = _a, props = __rest(_a, ["allowedValues", "checkboxes", "disabled", "fieldType", "id", "inputRef", "label", "name", "onChange", "placeholder", "readOnly", "required", "disableItem", "transform", "value"]);
    const multiple = fieldType === Array;
    return (React.createElement("div", Object.assign({}, filterDOMProps(props)),
        label && React.createElement("label", { htmlFor: id }, label),
        checkboxes ? (allowedValues.map(item => {
            var _a;
            return (React.createElement("div", { key: item },
                React.createElement("input", { checked: fieldType === Array ? value.includes(item) : value === item, disabled: (_a = disableItem === null || disableItem === void 0 ? void 0 : disableItem(item)) !== null && _a !== void 0 ? _a : disabled, id: `${id}-${escape(item)}`, name: name, onChange: () => {
                        if (!readOnly) {
                            onChange(fieldType === Array ? xor([item], value) : item);
                        }
                    }, type: "checkbox" }),
                React.createElement("label", { htmlFor: `${id}-${escape(item)}` }, transform ? transform(item) : item)));
        })) : (React.createElement("select", { disabled: disabled, id: id, multiple: multiple, name: name, onChange: event => {
                if (!readOnly) {
                    const item = event.target.value;
                    if (multiple) {
                        const clear = event.target.selectedIndex === -1;
                        onChange(clear ? [] : xor([item], value));
                    }
                    else {
                        onChange(item !== '' ? item : undefined);
                    }
                }
            }, ref: inputRef, value: value !== null && value !== void 0 ? value : '' },
            (!!placeholder || !required || value === undefined) && !multiple && (React.createElement("option", { value: "", disabled: required, hidden: required }, placeholder || label)), allowedValues === null || allowedValues === void 0 ? void 0 :
            allowedValues.map(value => (React.createElement("option", { disabled: disableItem === null || disableItem === void 0 ? void 0 : disableItem(value), key: value, value: value }, transform ? transform(value) : value)))))));
}
export default connectField(Select, { kind: 'leaf' });
