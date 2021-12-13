import { __rest } from "tslib";
import React from 'react';
import { connectField, filterDOMProps } from 'uniforms';
import setErrorClass from './setErrorClass';
function Text(_a) {
    var { autoComplete, disabled, id, inputRef, label, name, onChange, placeholder, type, value } = _a, props = __rest(_a, ["autoComplete", "disabled", "id", "inputRef", "label", "name", "onChange", "placeholder", "type", "value"]);
    return (React.createElement("div", Object.assign({}, filterDOMProps(props)),
        label && React.createElement("label", { htmlFor: id }, label),
        React.createElement("input", { className: setErrorClass(props), autoComplete: autoComplete, disabled: disabled, id: id, name: name, onChange: event => onChange(event.target.value), placeholder: placeholder, ref: inputRef, type: type, value: value !== null && value !== void 0 ? value : '' })));
}
Text.defaultProps = { type: 'text' };
export default connectField(Text, { kind: 'leaf' });
