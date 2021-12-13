"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var uniforms_1 = require("uniforms");
function LongText(_a) {
    var disabled = _a.disabled, id = _a.id, inputRef = _a.inputRef, label = _a.label, name = _a.name, onChange = _a.onChange, placeholder = _a.placeholder, value = _a.value, props = tslib_1.__rest(_a, ["disabled", "id", "inputRef", "label", "name", "onChange", "placeholder", "value"]);
    return (react_1.default.createElement("div", tslib_1.__assign({}, uniforms_1.filterDOMProps(props)),
        label && react_1.default.createElement("label", { htmlFor: id }, label),
        react_1.default.createElement("textarea", { disabled: disabled, id: id, name: name, onChange: function (event) { return onChange(event.target.value); }, placeholder: placeholder, ref: inputRef, value: value !== null && value !== void 0 ? value : '' })));
}
exports.default = uniforms_1.connectField(LongText, { kind: 'leaf' });