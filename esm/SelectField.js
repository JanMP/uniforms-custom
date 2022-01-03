import { __rest } from "tslib";
import isEqual from 'lodash/isEqual';
import xor from 'lodash/xor';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import ReactSelect from 'react-select';
import { connectField, filterDOMProps } from 'uniforms';
import setErrorClass from './setErrorClass';
const base64 = typeof btoa === 'undefined'
    ? /* istanbul ignore next */ /* istanbul ignore next */ x => Buffer.from(x).toString('base64')
    : btoa;
const escape = (x) => base64(encodeURIComponent(x)).replace(/=+$/, '');
function Select(_a) {
    var { allowedValues, checkboxes, disabled, fieldType, id, inputRef, label, name, onChange, placeholder, readOnly, required, disableItem, transform, value, components } = _a, props = __rest(_a, ["allowedValues", "checkboxes", "disabled", "fieldType", "id", "inputRef", "label", "name", "onChange", "placeholder", "readOnly", "required", "disableItem", "transform", "value", "components"]);
    const multiple = fieldType === Array;
    const selectRef = useRef(null);
    const [oldValue, setOldValue] = useState(null);
    const optionFromValue = useCallback(value => {
        return {
            key: value,
            value,
            label: transform ? transform(value) : value,
        };
    }, [transform]);
    const onOptionChange = (value) => {
        console.log('onOptionChange', value);
        const result = multiple
            ? value.map((v) => v.value)
            : value.value;
        onChange(result);
    };
    useEffect(() => {
        var _a;
        console.log('value Changed', value);
        // @ts-ignore
        setOldValue(value);
        if (isEqual(value, oldValue)) {
            return;
        }
        // @ts-ignore
        (_a = selectRef.current) === null || _a === void 0 ? void 0 : _a.setValue(
        // @ts-ignore
        multiple ? value.map(optionFromValue) : optionFromValue(value));
    }, [value]);
    return (React.createElement("div", Object.assign({}, filterDOMProps(props), { className: (checkboxes && setErrorClass(props)) || '' }),
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
        })) : (React.createElement(ReactSelect, { ref: selectRef, isDisabled: disabled, isMulti: multiple, components: components, 
            // @ts-ignore
            onChange: onOptionChange, options: allowedValues === null || allowedValues === void 0 ? void 0 : allowedValues.map(optionFromValue) }))));
}
export default connectField(Select, { kind: 'leaf' });
