"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var xor_1 = tslib_1.__importDefault(require("lodash/xor"));
var react_1 = tslib_1.__importDefault(require("react"));
var uniforms_1 = require("uniforms");
var base64 = typeof btoa !== 'undefined' ? btoa : function (x) { return Buffer.from(x).toString('base64'); };
var escape = function (x) { return base64(encodeURIComponent(x)).replace(/=+$/, ''); };
function Select(_a) {
    var allowedValues = _a.allowedValues, checkboxes = _a.checkboxes, disabled = _a.disabled, fieldType = _a.fieldType, id = _a.id, inputRef = _a.inputRef, label = _a.label, name = _a.name, onChange = _a.onChange, placeholder = _a.placeholder, required = _a.required, disableItem = _a.disableItem, transform = _a.transform, value = _a.value, props = tslib_1.__rest(_a, ["allowedValues", "checkboxes", "disabled", "fieldType", "id", "inputRef", "label", "name", "onChange", "placeholder", "required", "disableItem", "transform", "value"]);
    return (react_1.default.createElement("div", tslib_1.__assign({}, uniforms_1.filterDOMProps(props)),
        label && react_1.default.createElement("label", { htmlFor: id }, label),
        checkboxes || fieldType === Array ? (allowedValues.map(function (item) {
            var _a;
            return (react_1.default.createElement("div", { key: item },
                react_1.default.createElement("input", { checked: fieldType === Array ? value.includes(item) : value === item, disabled: (_a = disableItem === null || disableItem === void 0 ? void 0 : disableItem(item)) !== null && _a !== void 0 ? _a : disabled, id: id + "-" + escape(item), name: name, onChange: function () {
                        onChange(fieldType === Array ? xor_1.default([item], value) : item);
                    }, type: "checkbox" }),
                react_1.default.createElement("label", { htmlFor: id + "-" + escape(item) }, transform ? transform(item) : item)));
        })) : (react_1.default.createElement("select", { disabled: disabled, id: id, name: name, onChange: function (event) {
                onChange(event.target.value !== '' ? event.target.value : undefined);
            }, ref: inputRef, value: value !== null && value !== void 0 ? value : '' },
            (!!placeholder || !required || value === undefined) && (react_1.default.createElement("option", { value: "", disabled: required, hidden: required }, placeholder || label)),
            allowedValues.map(function (value) { return (react_1.default.createElement("option", { disabled: disableItem === null || disableItem === void 0 ? void 0 : disableItem(value), key: value, value: value }, transform ? transform(value) : value)); })))));
}
exports.default = uniforms_1.connectField(Select, { kind: 'leaf' });
