"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var uniforms_1 = require("uniforms");
/* istanbul ignore next */
var DateConstructor = (typeof global === 'object' ? global : window).Date;
var dateFormat = function (value) { return value === null || value === void 0 ? void 0 : value.toISOString().slice(0, -8); };
function Date(_a) {
    var _b;
    var disabled = _a.disabled, id = _a.id, inputRef = _a.inputRef, label = _a.label, max = _a.max, min = _a.min, name = _a.name, onChange = _a.onChange, placeholder = _a.placeholder, readOnly = _a.readOnly, value = _a.value, props = tslib_1.__rest(_a, ["disabled", "id", "inputRef", "label", "max", "min", "name", "onChange", "placeholder", "readOnly", "value"]);
    return (react_1.default.createElement("div", tslib_1.__assign({}, uniforms_1.filterDOMProps(props)),
        label && react_1.default.createElement("label", { htmlFor: id }, label),
        react_1.default.createElement("input", { disabled: disabled, id: id, max: dateFormat(max), min: dateFormat(min), name: name, onChange: function (event) {
                var date = new DateConstructor(event.target.valueAsNumber);
                if (date.getFullYear() < 10000) {
                    onChange(date);
                }
                else if (isNaN(event.target.valueAsNumber)) {
                    onChange(undefined);
                }
            }, placeholder: placeholder, readOnly: readOnly, ref: inputRef, type: "datetime-local", value: (_b = dateFormat(value)) !== null && _b !== void 0 ? _b : '' })));
}
exports.default = uniforms_1.connectField(Date, { kind: 'leaf' });
