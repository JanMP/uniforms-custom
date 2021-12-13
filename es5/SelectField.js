"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
// @ts-nocheck
var xor_1 = tslib_1.__importDefault(require("lodash/xor"));
var react_1 = tslib_1.__importStar(require("react"));
var uniforms_1 = require("uniforms");
var setErrorClass_1 = tslib_1.__importDefault(require("./setErrorClass"));
var react_select_1 = tslib_1.__importDefault(require("react-select"));
var isEqual_1 = tslib_1.__importDefault(require("lodash/isEqual"));
var base64 = typeof btoa !== 'undefined' ? btoa : function (x) { return Buffer.from(x).toString('base64'); };
var escape = function (x) { return base64(encodeURIComponent(x)).replace(/=+$/, ''); };
function Select(_a) {
    var allowedValues = _a.allowedValues, checkboxes = _a.checkboxes, disabled = _a.disabled, fieldType = _a.fieldType, id = _a.id, inputRef = _a.inputRef, label = _a.label, name = _a.name, onChange = _a.onChange, placeholder = _a.placeholder, readOnly = _a.readOnly, disableItem = _a.disableItem, transform = _a.transform, value = _a.value, props = tslib_1.__rest(_a, ["allowedValues", "checkboxes", "disabled", "fieldType", "id", "inputRef", "label", "name", "onChange", "placeholder", "readOnly", "disableItem", "transform", "value"]);
    var multiple = fieldType === Array;
    var selectRef = react_1.useRef(null);
    var _b = react_1.useState(null), oldValue = _b[0], setOldValue = _b[1];
    var optionFromValue = react_1.useCallback(function (value) {
        return {
            key: value,
            value: value,
            label: transform ? transform(value) : value
        };
    });
    var onOptionChange = react_1.useCallback(function (value) {
        var result = (multiple ? value.map(function (v) { return v.value; }) : value.value);
        onChange(result);
    }, [multiple]);
    react_1.useEffect(function () {
        var _a;
        if (isEqual_1.default(value, oldValue)) {
            return;
        }
        setOldValue(value);
        (_a = selectRef.current) === null || _a === void 0 ? void 0 : _a.setValue(multiple ? value.map(optionFromValue) : optionFromValue(value));
    }, [value]);
    return (react_1.default.createElement("div", tslib_1.__assign({}, uniforms_1.filterDOMProps(props), { className: (checkboxes && setErrorClass_1.default(props)) || "" }),
        label && react_1.default.createElement("label", { htmlFor: id }, label),
        checkboxes ? (allowedValues.map(function (item) {
            var _a;
            return (react_1.default.createElement("div", { key: item },
                react_1.default.createElement("input", { checked: fieldType === Array ? value.includes(item) : value === item, disabled: (_a = disableItem === null || disableItem === void 0 ? void 0 : disableItem(item)) !== null && _a !== void 0 ? _a : disabled, id: id + "-" + escape(item), name: name, onChange: function () {
                        if (!readOnly) {
                            onChange(fieldType === Array ? xor_1.default([item], value) : item);
                        }
                    }, type: "checkbox" }),
                react_1.default.createElement("label", { htmlFor: id + "-" + escape(item) }, transform ? transform(item) : item)));
        })) : (react_1.default.createElement(react_select_1.default, { ref: selectRef, disabled: disabled, isMulti: multiple, isInvalid: props.error != null, onOptionChange: onOptionChange, options: allowedValues === null || allowedValues === void 0 ? void 0 : allowedValues.map(optionFromValue), themeConfig: { control: { padding: "0 0.75rem", minHeight: '32px' } } }))));
}
exports.default = uniforms_1.connectField(Select, { kind: 'leaf' });
