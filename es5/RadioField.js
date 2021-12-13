"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var omit_1 = tslib_1.__importDefault(require("lodash/omit"));
var react_1 = tslib_1.__importDefault(require("react"));
var uniforms_1 = require("uniforms");
var base64 = typeof btoa === 'undefined'
    ? /* istanbul ignore next */ function (/* istanbul ignore next */ x) { return Buffer.from(x).toString('base64'); }
    : btoa;
var escape = function (x) { return base64(encodeURIComponent(x)).replace(/=+$/, ''); };
function Radio(_a) {
    var allowedValues = _a.allowedValues, disabled = _a.disabled, id = _a.id, label = _a.label, name = _a.name, onChange = _a.onChange, readOnly = _a.readOnly, transform = _a.transform, value = _a.value, props = tslib_1.__rest(_a, ["allowedValues", "disabled", "id", "label", "name", "onChange", "readOnly", "transform", "value"]);
    return (react_1.default.createElement("div", tslib_1.__assign({}, omit_1.default(uniforms_1.filterDOMProps(props), ['checkboxes'])),
        label && react_1.default.createElement("label", null, label), allowedValues === null || allowedValues === void 0 ? void 0 :
        allowedValues.map(function (item) { return (react_1.default.createElement("div", { key: item },
            react_1.default.createElement("input", { checked: item === value, disabled: disabled, id: id + "-" + escape(item), name: name, onChange: function () {
                    if (!readOnly) {
                        onChange(item);
                    }
                }, type: "radio" }),
            react_1.default.createElement("label", { htmlFor: id + "-" + escape(item) }, transform ? transform(item) : item))); })));
}
exports.default = uniforms_1.connectField(Radio, { kind: 'leaf' });
