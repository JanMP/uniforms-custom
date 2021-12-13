"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var uniforms_1 = require("uniforms");
function HiddenField(_a) {
    var _b;
    var value = _a.value, rawProps = tslib_1.__rest(_a, ["value"]);
    var props = uniforms_1.useField(rawProps.name, rawProps, { initialValue: false })[0];
    react_1.useEffect(function () {
        if (value !== undefined && value !== props.value) {
            props.onChange(value);
        }
    });
    return props.noDOM ? null : (react_1.default.createElement("input", tslib_1.__assign({ disabled: props.disabled, name: props.name, ref: props.inputRef, type: "hidden", value: (_b = value !== null && value !== void 0 ? value : props.value) !== null && _b !== void 0 ? _b : '' }, uniforms_1.filterDOMProps(props))));
}
exports.default = HiddenField;