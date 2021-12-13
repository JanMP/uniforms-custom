"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var uniforms_1 = require("uniforms");
function Num(_a) {
    var decimal = _a.decimal, disabled = _a.disabled, id = _a.id, inputRef = _a.inputRef, label = _a.label, max = _a.max, min = _a.min, name = _a.name, onChange = _a.onChange, placeholder = _a.placeholder, readOnly = _a.readOnly, step = _a.step, value = _a.value, props = tslib_1.__rest(_a, ["decimal", "disabled", "id", "inputRef", "label", "max", "min", "name", "onChange", "placeholder", "readOnly", "step", "value"]);
    return (react_1.default.createElement("div", tslib_1.__assign({}, uniforms_1.filterDOMProps(props)),
        label && react_1.default.createElement("label", { htmlFor: id }, label),
        react_1.default.createElement("input", { disabled: disabled, id: id, max: max, min: min, name: name, onChange: function (event) {
                var parse = decimal ? parseFloat : parseInt;
                var value = parse(event.target.value);
                onChange(isNaN(value) ? undefined : value);
            }, placeholder: placeholder, readOnly: readOnly, ref: inputRef, step: step || (decimal ? 0.01 : 1), type: "number", value: value !== null && value !== void 0 ? value : '' })));
}
exports.default = uniforms_1.connectField(Num, { kind: 'leaf' });
