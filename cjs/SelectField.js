"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const isEqual_1 = tslib_1.__importDefault(require("lodash/isEqual"));
const xor_1 = tslib_1.__importDefault(require("lodash/xor"));
const react_1 = tslib_1.__importStar(require("react"));
const react_select_1 = tslib_1.__importDefault(require("react-select"));
const uniforms_1 = require("uniforms");
const setErrorClass_1 = tslib_1.__importDefault(require("./setErrorClass"));
const base64 = typeof btoa === 'undefined'
    ? /* istanbul ignore next */ /* istanbul ignore next */ x => Buffer.from(x).toString('base64')
    : btoa;
const escape = (x) => base64(encodeURIComponent(x)).replace(/=+$/, '');
function Select(_a) {
    var { allowedValues, checkboxes, disabled, fieldType, id, inputRef, label, name, onChange, placeholder, readOnly, required, disableItem, transform, value } = _a, props = tslib_1.__rest(_a, ["allowedValues", "checkboxes", "disabled", "fieldType", "id", "inputRef", "label", "name", "onChange", "placeholder", "readOnly", "required", "disableItem", "transform", "value"]);
    const multiple = fieldType === Array;
    const selectRef = react_1.useRef(null);
    const [oldValue, setOldValue] = react_1.useState(null);
    const optionFromValue = react_1.useCallback(value => {
        return {
            key: value,
            value,
            label: transform ? transform(value) : value,
        };
    }, [transform]);
    const onOptionChange = (value) => {
        console.log('onOptionChange', value);
        const result = multiple
            ? value.map((v) => v.value)
            : value.value;
        onChange(result);
    };
    react_1.useEffect(() => {
        var _a;
        console.log('value Changed', value);
        // @ts-ignore
        setOldValue(value);
        if (isEqual_1.default(value, oldValue)) {
            return;
        }
        // @ts-ignore
        (_a = selectRef.current) === null || _a === void 0 ? void 0 : _a.setValue(
        // @ts-ignore
        multiple ? value.map(optionFromValue) : optionFromValue(value));
    }, [value]);
    return (react_1.default.createElement("div", Object.assign({}, uniforms_1.filterDOMProps(props), { className: (checkboxes && setErrorClass_1.default(props)) || '' }),
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
        })) : (react_1.default.createElement(react_select_1.default, { ref: selectRef, isDisabled: disabled, isMulti: multiple, 
            // @ts-ignore
            onChange: onOptionChange, options: allowedValues === null || allowedValues === void 0 ? void 0 : allowedValues.map(optionFromValue) }))));
}
exports.default = uniforms_1.connectField(Select, { kind: 'leaf' });
