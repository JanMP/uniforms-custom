"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var uniforms_1 = require("uniforms");
function ListDel(_a) {
    var disabled = _a.disabled, name = _a.name, readOnly = _a.readOnly, props = tslib_1.__rest(_a, ["disabled", "name", "readOnly"]);
    var nameParts = uniforms_1.joinName(null, name);
    var nameIndex = +nameParts[nameParts.length - 1];
    var parentName = uniforms_1.joinName(nameParts.slice(0, -1));
    var parent = uniforms_1.useField(parentName, {}, { absoluteName: true })[0];
    var limitNotReached = !disabled && !(parent.minCount >= parent.value.length);
    function onAction(event) {
        if (limitNotReached &&
            !readOnly &&
            (!('key' in event) || event.key === 'Enter')) {
            var value = parent.value.slice();
            value.splice(nameIndex, 1);
            parent.onChange(value);
        }
    }
    return (react_1.default.createElement("span", tslib_1.__assign({}, uniforms_1.filterDOMProps(props), { onClick: onAction, onKeyDown: onAction, role: "button", tabIndex: 0 }), "-"));
}
exports.default = uniforms_1.connectField(ListDel, {
    initialValue: false,
    kind: 'leaf',
});
