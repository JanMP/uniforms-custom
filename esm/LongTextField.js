import { __rest } from "tslib";
import React from 'react';
import { connectField, filterDOMProps } from 'uniforms';
import setClassNamesForProps from './setClassNamesForProps';
function LongText(_a) {
    var { disabled, id, inputRef, label, name, onChange, placeholder, readOnly, value } = _a, props = __rest(_a, ["disabled", "id", "inputRef", "label", "name", "onChange", "placeholder", "readOnly", "value"]);
    return (React.createElement("div", Object.assign({ className: setClassNamesForProps(props) }, filterDOMProps(props)),
        label && !props.hasFloatingLabel && React.createElement("label", { htmlFor: id }, label),
        React.createElement("textarea", { disabled: disabled, id: id, name: name, onChange: event => onChange(event.target.value), placeholder: placeholder, readOnly: readOnly, ref: inputRef, value: value !== null && value !== void 0 ? value : '' }),
        label && props.hasFloatingLabel && React.createElement("label", { htmlFor: id }, label)));
}
export default connectField(LongText, { kind: 'leaf' });
