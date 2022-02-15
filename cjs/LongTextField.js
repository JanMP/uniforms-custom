"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const uniforms_1 = require("uniforms");
const setClassNamesForProps_1 = tslib_1.__importDefault(require("./setClassNamesForProps"));
function LongText(_a) {
    var { disabled, id, inputRef, label, name, onChange, placeholder, readOnly, value } = _a, props = tslib_1.__rest(_a, ["disabled", "id", "inputRef", "label", "name", "onChange", "placeholder", "readOnly", "value"]);
    return (react_1.default.createElement("div", Object.assign({ className: setClassNamesForProps_1.default(props) }, uniforms_1.filterDOMProps(props)),
        label && !props.hasFloatingLabel && react_1.default.createElement("label", { htmlFor: id }, label),
        react_1.default.createElement("textarea", { disabled: disabled, id: id, name: name, onChange: event => onChange(event.target.value), placeholder: placeholder, readOnly: readOnly, ref: inputRef, value: value !== null && value !== void 0 ? value : '' }),
        label && props.hasFloatingLabel && react_1.default.createElement("label", { htmlFor: id }, label)));
}
exports.default = uniforms_1.connectField(LongText, { kind: 'leaf' });
