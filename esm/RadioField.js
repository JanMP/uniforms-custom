import { __rest } from "tslib";
import omit from 'lodash/omit';
import React from 'react';
import { connectField, filterDOMProps } from 'uniforms';
const base64 = typeof btoa === 'undefined'
    ? /* istanbul ignore next */ /* istanbul ignore next */ x => Buffer.from(x).toString('base64')
    : btoa;
const escape = (x) => base64(encodeURIComponent(x)).replace(/=+$/, '');
function Radio(_a) {
    var { allowedValues, disabled, id, label, name, onChange, readOnly, transform, value } = _a, props = __rest(_a, ["allowedValues", "disabled", "id", "label", "name", "onChange", "readOnly", "transform", "value"]);
    return (React.createElement("div", Object.assign({}, omit(filterDOMProps(props), ['checkboxes'])),
        label && React.createElement("label", null, label), allowedValues === null || allowedValues === void 0 ? void 0 :
        allowedValues.map(item => (React.createElement("div", { key: item },
            React.createElement("input", { checked: item === value, disabled: disabled, id: `${id}-${escape(item)}`, name: name, onChange: () => {
                    if (!readOnly) {
                        onChange(item);
                    }
                }, type: "radio" }),
            React.createElement("label", { htmlFor: `${id}-${escape(item)}` }, transform ? transform(item) : item))))));
}
export default connectField(Radio, { kind: 'leaf' });
