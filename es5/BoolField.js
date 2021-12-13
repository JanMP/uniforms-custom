"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var uniforms_1 = require("uniforms");
function Bool(_a) {
    var disabled = _a.disabled, id = _a.id, inputRef = _a.inputRef, label = _a.label, name = _a.name, onChange = _a.onChange, readOnly = _a.readOnly, value = _a.value, props = tslib_1.__rest(_a, ["disabled", "id", "inputRef", "label", "name", "onChange", "readOnly", "value"]);
    return (react_1.default.createElement("div", tslib_1.__assign({}, uniforms_1.filterDOMProps(props)),
        react_1.default.createElement("input", { checked: value || false, disabled: disabled, id: id, name: name, onChange: function () { return !disabled && !readOnly && onChange(!value); }, ref: inputRef, type: "checkbox" }),
        label && react_1.default.createElement("label", { htmlFor: id }, label)));
}
exports.default = uniforms_1.connectField(Bool, { kind: 'leaf' });
