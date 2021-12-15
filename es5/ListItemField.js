"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var uniforms_1 = require("uniforms");
var AutoField_1 = tslib_1.__importDefault(require("./AutoField"));
var ListDelField_1 = tslib_1.__importDefault(require("./ListDelField"));
function ListItem(_a) {
    var _b = _a.children, children = _b === void 0 ? react_1.default.createElement(AutoField_1.default, { label: null, name: "" }) : _b;
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(ListDelField_1.default, { name: "" }),
        children));
}
exports.default = uniforms_1.connectField(ListItem, { initialValue: false });
