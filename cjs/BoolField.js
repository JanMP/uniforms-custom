"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const uniforms_1 = require("uniforms");
const setClassNamesForProps_1 = tslib_1.__importDefault(require("./setClassNamesForProps"));
function Bool(_a) {
    var { disabled, id, inputRef, label, name, onChange, readOnly, value } = _a, props = tslib_1.__rest(_a, ["disabled", "id", "inputRef", "label", "name", "onChange", "readOnly", "value"]);
    return (react_1.default.createElement("div", Object.assign({ className: setClassNamesForProps_1.default(props) }, uniforms_1.filterDOMProps(props)),
        react_1.default.createElement("input", { checked: value || false, disabled: disabled, id: id, name: name, onChange: () => !disabled && !readOnly && onChange(!value), ref: inputRef, type: "checkbox" }),
        label && react_1.default.createElement("label", { htmlFor: id }, label)));
}
exports.default = uniforms_1.connectField(Bool, { kind: 'leaf' });
