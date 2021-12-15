"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var uniforms_1 = require("uniforms");
var base64 = typeof btoa !== 'undefined'
    ? btoa
    : function (x) { return Buffer.from(x).toString('base64'); };
var escape = function (x) { return base64(encodeURIComponent(x)).replace(/=+$/, ''); };
function Radio(_a) {
    var allowedValues = _a.allowedValues, checkboxes = _a.checkboxes, // eslint-disable-line no-unused-vars
    disabled = _a.disabled, id = _a.id, label = _a.label, name = _a.name, onChange = _a.onChange, transform = _a.transform, value = _a.value, props = tslib_1.__rest(_a, ["allowedValues", "checkboxes", "disabled", "id", "label", "name", "onChange", "transform", "value"]);
    return (react_1.default.createElement("div", tslib_1.__assign({}, uniforms_1.filterDOMProps(props)),
        label && react_1.default.createElement("label", null, label), allowedValues === null || allowedValues === void 0 ? void 0 :
        allowedValues.map(function (item) { return (react_1.default.createElement("div", { key: item },
            react_1.default.createElement("input", { checked: item === value, disabled: disabled, id: id + "-" + escape(item), name: name, onChange: function () { return onChange(item); }, type: "radio" }),
            react_1.default.createElement("label", { htmlFor: id + "-" + escape(item) }, transform ? transform(item) : item))); })));
}
exports.default = uniforms_1.connectField(Radio, { kind: 'leaf' });
