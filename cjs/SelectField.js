"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const xor_1 = tslib_1.__importDefault(require("lodash/xor"));
const react_1 = tslib_1.__importDefault(require("react"));
const uniforms_1 = require("uniforms");
const base64 = typeof btoa === 'undefined'
    ? /* istanbul ignore next */ /* istanbul ignore next */ x => Buffer.from(x).toString('base64')
    : btoa;
const escape = (x) => base64(encodeURIComponent(x)).replace(/=+$/, '');
function Select(_a) {
    var { allowedValues, checkboxes, disabled, fieldType, id, inputRef, label, name, onChange, placeholder, readOnly, required, disableItem, transform, value } = _a, props = tslib_1.__rest(_a, ["allowedValues", "checkboxes", "disabled", "fieldType", "id", "inputRef", "label", "name", "onChange", "placeholder", "readOnly", "required", "disableItem", "transform", "value"]);
    const multiple = fieldType === Array;
    return (react_1.default.createElement("div", Object.assign({}, uniforms_1.filterDOMProps(props)),
        label && react_1.default.createElement("label", { htmlFor: id }, label),
        checkboxes ? (allowedValues.map(item => {
            var _a;
            return (react_1.default.createElement("div", { key: item },
                react_1.default.createElement("input", { checked: fieldType === Array ? value.includes(item) : value === item, disabled: (_a = disableItem === null || disableItem === void 0 ? void 0 : disableItem(item)) !== null && _a !== void 0 ? _a : disabled, id: `${id}-${escape(item)}`, name: name, onChange: () => {
                        if (!readOnly) {
                            onChange(fieldType === Array ? xor_1.default([item], value) : item);
                        }
                    }, type: "checkbox" }),
                react_1.default.createElement("label", { htmlFor: `${id}-${escape(item)}` }, transform ? transform(item) : item)));
        })) : (react_1.default.createElement("select", { disabled: disabled, id: id, multiple: multiple, name: name, onChange: event => {
                if (!readOnly) {
                    const item = event.target.value;
                    if (multiple) {
                        const clear = event.target.selectedIndex === -1;
                        onChange(clear ? [] : xor_1.default([item], value));
                    }
                    else {
                        onChange(item !== '' ? item : undefined);
                    }
                }
            }, ref: inputRef, value: value !== null && value !== void 0 ? value : '' },
            (!!placeholder || !required || value === undefined) && !multiple && (react_1.default.createElement("option", { value: "", disabled: required, hidden: required }, placeholder || label)), allowedValues === null || allowedValues === void 0 ? void 0 :
            allowedValues.map(value => (react_1.default.createElement("option", { disabled: disableItem === null || disableItem === void 0 ? void 0 : disableItem(value), key: value, value: value }, transform ? transform(value) : value)))))));
}
exports.default = uniforms_1.connectField(Select, { kind: 'leaf' });
