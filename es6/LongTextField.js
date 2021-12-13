import { __rest } from "tslib";
import React from 'react';
import { connectField, filterDOMProps } from 'uniforms';
function LongText(_a) {
    var { disabled, id, inputRef, label, name, onChange, placeholder, value } = _a, props = __rest(_a, ["disabled", "id", "inputRef", "label", "name", "onChange", "placeholder", "value"]);
    return (React.createElement("div", Object.assign({}, filterDOMProps(props)),
        label && React.createElement("label", { htmlFor: id }, label),
        React.createElement("textarea", { disabled: disabled, id: id, name: name, onChange: event => onChange(event.target.value), placeholder: placeholder, ref: inputRef, value: value !== null && value !== void 0 ? value : '' })));
}
export default connectField(LongText, { kind: 'leaf' });
