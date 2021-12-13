"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var uniforms_1 = require("uniforms");
var AutoField_1 = tslib_1.__importDefault(require("./AutoField"));
function Nest(_a) {
    var children = _a.children, fields = _a.fields, itemProps = _a.itemProps, label = _a.label, props = tslib_1.__rest(_a, ["children", "fields", "itemProps", "label"]);
    return (react_1.default.createElement("div", tslib_1.__assign({}, uniforms_1.filterDOMProps(props)),
        label && react_1.default.createElement("label", null, label),
        children ||
            fields.map(function (field) { return (react_1.default.createElement(AutoField_1.default, tslib_1.__assign({ key: field, name: field }, itemProps))); })));
}
exports.default = uniforms_1.connectField(Nest);
