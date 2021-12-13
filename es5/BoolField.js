"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var uniforms_1 = require("uniforms");
var setErrorClass_1 = tslib_1.__importDefault(require("./setErrorClass"));
function Bool(_a) {
    var disabled = _a.disabled, id = _a.id, inputRef = _a.inputRef, label = _a.label, 
    // @ts-ignore
    labelLinkTo = _a.labelLinkTo, name = _a.name, onChange = _a.onChange, value = _a.value, props = tslib_1.__rest(_a, ["disabled", "id", "inputRef", "label", "labelLinkTo", "name", "onChange", "value"]);
    return (react_1.default.createElement("div", tslib_1.__assign({}, uniforms_1.filterDOMProps(props)),
        react_1.default.createElement("input", { className: setErrorClass_1.default(props), checked: value || false, disabled: disabled, id: id, name: name, onChange: disabled
                ? undefined
                : function () {
                    onChange(!value);
                }, ref: inputRef, type: "checkbox" }),
        label && react_1.default.createElement("label", { htmlFor: id }, labelLinkTo ? react_1.default.createElement("a", { href: labelLinkTo }, label) : label)));
}
exports.default = uniforms_1.connectField(Bool, { kind: 'leaf' });
