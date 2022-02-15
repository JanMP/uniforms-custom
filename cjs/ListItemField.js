"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const uniforms_1 = require("uniforms");
const AutoField_1 = tslib_1.__importDefault(require("./AutoField"));
const ListDelField_1 = tslib_1.__importDefault(require("./ListDelField"));
function ListItem({ children = react_1.default.createElement(AutoField_1.default, { label: null, name: "" }), }) {
    return (react_1.default.createElement("div", { className: "u-list-item-field" },
        react_1.default.createElement("div", { className: "u-list-item-child-container" }, children),
        react_1.default.createElement("div", null,
            react_1.default.createElement(ListDelField_1.default, { name: "" }))));
}
exports.default = uniforms_1.connectField(ListItem, {
    initialValue: false,
});
