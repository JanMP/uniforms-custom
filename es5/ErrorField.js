"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var uniforms_1 = require("uniforms");
function Error(_a) {
    var children = _a.children, error = _a.error, errorMessage = _a.errorMessage, props = tslib_1.__rest(_a, ["children", "error", "errorMessage"]);
    return !error ? null : (react_1.default.createElement("div", tslib_1.__assign({}, uniforms_1.filterDOMProps(props)), children || errorMessage));
}
exports.default = uniforms_1.connectField(Error, {
    initialValue: false,
    kind: 'leaf',
});
