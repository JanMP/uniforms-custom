"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var uniforms_1 = require("uniforms");
function Text(_a) {
    var autoComplete = _a.autoComplete, disabled = _a.disabled, id = _a.id, inputRef = _a.inputRef, label = _a.label, name = _a.name, onChange = _a.onChange, placeholder = _a.placeholder, readOnly = _a.readOnly, type = _a.type, value = _a.value, props = tslib_1.__rest(_a, ["autoComplete", "disabled", "id", "inputRef", "label", "name", "onChange", "placeholder", "readOnly", "type", "value"]);
    return (react_1.default.createElement("div", tslib_1.__assign({}, uniforms_1.filterDOMProps(props)),
        label && react_1.default.createElement("label", { htmlFor: id }, label),
        react_1.default.createElement("input", { autoComplete: autoComplete, disabled: disabled, id: id, name: name, onChange: function (event) { return onChange(event.target.value); }, placeholder: placeholder, readOnly: readOnly, ref: inputRef, type: type, value: value !== null && value !== void 0 ? value : '' })));
}
Text.defaultProps = { type: 'text' };
exports.default = uniforms_1.connectField(Text, { kind: 'leaf' });
