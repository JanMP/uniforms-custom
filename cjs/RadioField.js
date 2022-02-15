"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const omit_1 = tslib_1.__importDefault(require("lodash/omit"));
const react_1 = tslib_1.__importDefault(require("react"));
const uniforms_1 = require("uniforms");
const base64 = typeof btoa === 'undefined'
    ? /* istanbul ignore next */ /* istanbul ignore next */ x => Buffer.from(x).toString('base64')
    : btoa;
const escape = (x) => base64(encodeURIComponent(x)).replace(/=+$/, '');
function Radio(_a) {
    var { allowedValues, disabled, id, label, name, onChange, readOnly, transform, value } = _a, props = tslib_1.__rest(_a, ["allowedValues", "disabled", "id", "label", "name", "onChange", "readOnly", "transform", "value"]);
    return (react_1.default.createElement("div", Object.assign({}, omit_1.default(uniforms_1.filterDOMProps(props), ['checkboxes'])),
        label && react_1.default.createElement("label", null, label), allowedValues === null || allowedValues === void 0 ? void 0 :
        allowedValues.map(item => (react_1.default.createElement("div", { key: item },
            react_1.default.createElement("input", { checked: item === value, disabled: disabled, id: `${id}-${escape(item)}`, name: name, onChange: () => {
                    if (!readOnly) {
                        onChange(item);
                    }
                }, type: "radio" }),
            react_1.default.createElement("label", { htmlFor: `${id}-${escape(item)}` }, transform ? transform(item) : item))))));
}
exports.default = uniforms_1.connectField(Radio, { kind: 'leaf' });
