import { __rest } from "tslib";
import React from 'react';
import { connectField, filterDOMProps } from 'uniforms';
const DateConstructor = (typeof global === 'object' ? global : window).Date;
const dateFormat = (value) => value === null || value === void 0 ? void 0 : value.toISOString().slice(0, -8);
function Date(_a) {
    var _b;
    var { disabled, id, inputRef, label, max, min, name, onChange, placeholder, value } = _a, props = __rest(_a, ["disabled", "id", "inputRef", "label", "max", "min", "name", "onChange", "placeholder", "value"]);
    return (React.createElement("div", Object.assign({}, filterDOMProps(props)),
        label && React.createElement("label", { htmlFor: id }, label),
        React.createElement("input", { disabled: disabled, id: id, max: dateFormat(max), min: dateFormat(min), name: name, onChange: event => {
                const date = new DateConstructor(event.target.valueAsNumber);
                if (date.getFullYear() < 10000) {
                    onChange(date);
                }
                else if (isNaN(event.target.valueAsNumber)) {
                    onChange(undefined);
                }
            }, placeholder: placeholder, ref: inputRef, type: "datetime-local", value: (_b = dateFormat(value)) !== null && _b !== void 0 ? _b : '' })));
}
export default connectField(Date, { kind: 'leaf' });
