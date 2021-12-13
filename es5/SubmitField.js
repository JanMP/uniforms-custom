"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var uniforms_1 = require("uniforms");
function SubmitField(_a) {
    var disabled = _a.disabled, inputRef = _a.inputRef, value = _a.value, _b = _a.className, className = _b === void 0 ? '' : _b, props = tslib_1.__rest(_a, ["disabled", "inputRef", "value", "className"]);
    var _c = uniforms_1.useForm(), error = _c.error, state = _c.state;
    return (react_1.default.createElement("input", tslib_1.__assign({ className: className, disabled: disabled === undefined ? !!(error || state.disabled) : disabled, ref: inputRef, type: "submit" }, (value ? { value: value } : {}), uniforms_1.filterDOMProps(props))));
}
exports.default = SubmitField;
