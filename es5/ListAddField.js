"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var cloneDeep_1 = tslib_1.__importDefault(require("lodash/cloneDeep"));
var react_1 = tslib_1.__importDefault(require("react"));
var uniforms_1 = require("uniforms");
function ListAdd(_a) {
    var disabled = _a.disabled, initialCount = _a.initialCount, name = _a.name, readOnly = _a.readOnly, value = _a.value, props = tslib_1.__rest(_a, ["disabled", "initialCount", "name", "readOnly", "value"]);
    var nameParts = uniforms_1.joinName(null, name);
    var parentName = uniforms_1.joinName(nameParts.slice(0, -1));
    var parent = uniforms_1.useField(parentName, { initialCount: initialCount }, { absoluteName: true })[0];
    var limitNotReached = !disabled && !(parent.maxCount <= parent.value.length);
    function onAction(event) {
        if (limitNotReached &&
            !readOnly &&
            (!('key' in event) || event.key === 'Enter')) {
            parent.onChange(parent.value.concat([cloneDeep_1.default(value)]));
        }
    }
    return (react_1.default.createElement("span", tslib_1.__assign({}, uniforms_1.filterDOMProps(props), { onClick: onAction, onKeyDown: onAction, role: "button", tabIndex: 0 }), "+"));
}
exports.default = uniforms_1.connectField(ListAdd, {
    initialValue: false,
    kind: 'leaf',
});
