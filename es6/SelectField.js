import { __rest } from "tslib";
// @ts-nocheck
import xor from 'lodash/xor';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { connectField, filterDOMProps } from 'uniforms';
import setErrorClass from './setErrorClass';
import ReactSelect from 'react-select';
import isEqual from 'lodash/isEqual';
const base64 = typeof btoa !== 'undefined' ? btoa : x => Buffer.from(x).toString('base64');
const escape = (x) => base64(encodeURIComponent(x)).replace(/=+$/, '');
function Select(_a) {
    var { allowedValues, checkboxes, disabled, fieldType, id, inputRef, label, name, onChange, placeholder, readOnly, disableItem, transform, value } = _a, props = __rest(_a, ["allowedValues", "checkboxes", "disabled", "fieldType", "id", "inputRef", "label", "name", "onChange", "placeholder", "readOnly", "disableItem", "transform", "value"]);
    const multiple = fieldType === Array;
    const selectRef = useRef(null);
    const [oldValue, setOldValue] = useState(null);
    const optionFromValue = useCallback((value) => {
        return {
            key: value,
            value: value,
            label: transform ? transform(value) : value
        };
    });
    const onOptionChange = useCallback((value) => {
        const result = (multiple ? value.map(v => v.value) : value.value);
        onChange(result);
    }, [multiple]);
    useEffect(() => {
        var _a;
        if (isEqual(value, oldValue)) {
            return;
        }
        setOldValue(value);
        (_a = selectRef.current) === null || _a === void 0 ? void 0 : _a.setValue(multiple ? value.map(optionFromValue) : optionFromValue(value));
    }, [value]);
    return (React.createElement("div", Object.assign({}, filterDOMProps(props), { className: (checkboxes && setErrorClass(props)) || "" }),
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
        })) : (React.createElement(ReactSelect, { ref: selectRef, disabled: disabled, isMulti: multiple, isInvalid: props.error != null, onOptionChange: onOptionChange, options: allowedValues === null || allowedValues === void 0 ? void 0 : allowedValues.map(optionFromValue), themeConfig: { control: { padding: "0 0.75rem", minHeight: '32px' } } }))));
}
export default connectField(Select, { kind: 'leaf' });
