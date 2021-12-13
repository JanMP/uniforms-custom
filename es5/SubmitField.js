"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var uniforms_1 = require("uniforms");
function SubmitField(_a) {
    var disabled = _a.disabled, inputRef = _a.inputRef, readOnly = _a.readOnly, value = _a.value, props = tslib_1.__rest(_a, ["disabled", "inputRef", "readOnly", "value"]);
    var _b = uniforms_1.useForm(), error = _b.error, state = _b.state;
    return (react_1.default.createElement("input", tslib_1.__assign({ disabled: disabled === undefined ? !!(error || state.disabled) : disabled, readOnly: readOnly, ref: inputRef, type: "submit" }, (value ? { value: value } : {}), uniforms_1.filterDOMProps(props))));
}
exports.default = SubmitField;
