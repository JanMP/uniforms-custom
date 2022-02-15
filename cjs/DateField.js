"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const uniforms_1 = require("uniforms");
const setClassNamesForProps_1 = tslib_1.__importDefault(require("./setClassNamesForProps"));
/* istanbul ignore next */
const DateConstructor = (typeof global === 'object' ? global : window).Date;
const dateFormat = (value) => value === null || value === void 0 ? void 0 : value.toISOString().slice(0, -8);
function Date(_a) {
    var _b;
    var { disabled, id, inputRef, label, max, min, name, onChange, placeholder, readOnly, value } = _a, props = tslib_1.__rest(_a, ["disabled", "id", "inputRef", "label", "max", "min", "name", "onChange", "placeholder", "readOnly", "value"]);
    return (react_1.default.createElement("div", Object.assign({ className: setClassNamesForProps_1.default(props) }, uniforms_1.filterDOMProps(props)),
        label && !props.hasFloatingLabel && react_1.default.createElement("label", { htmlFor: id }, label),
        react_1.default.createElement("input", { disabled: disabled, id: id, max: dateFormat(max), min: dateFormat(min), name: name, onChange: event => {
                const date = new DateConstructor(event.target.valueAsNumber);
                if (date.getFullYear() < 10000) {
                    onChange(date);
                }
                else if (isNaN(event.target.valueAsNumber)) {
                    onChange(undefined);
                }
            }, placeholder: placeholder, readOnly: readOnly, ref: inputRef, type: "datetime-local", value: (_b = dateFormat(value)) !== null && _b !== void 0 ? _b : '' }),
        label && props.hasFloatingLabel && react_1.default.createElement("label", { htmlFor: id }, label)));
}
exports.default = uniforms_1.connectField(Date, { kind: 'leaf' });
