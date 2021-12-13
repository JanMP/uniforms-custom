"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var uniforms_1 = require("uniforms");
var ListAddField_1 = tslib_1.__importDefault(require("./ListAddField"));
var ListItemField_1 = tslib_1.__importDefault(require("./ListItemField"));
function List(_a) {
    var _b = _a.children, children = _b === void 0 ? react_1.default.createElement(ListItemField_1.default, { name: "$" }) : _b, initialCount = _a.initialCount, itemProps = _a.itemProps, label = _a.label, value = _a.value, props = tslib_1.__rest(_a, ["children", "initialCount", "itemProps", "label", "value"]);
    return (react_1.default.createElement("ul", tslib_1.__assign({}, uniforms_1.filterDOMProps(props)),
        label && (react_1.default.createElement("label", null,
            label,
            react_1.default.createElement(ListAddField_1.default, { initialCount: initialCount, name: "$" }))), value === null || value === void 0 ? void 0 :
        value.map(function (item, itemIndex) {
            return react_1.Children.map(children, function (child, childIndex) {
                var _a;
                return react_1.isValidElement(child)
                    ? react_1.cloneElement(child, tslib_1.__assign({ key: itemIndex + "-" + childIndex, name: (_a = child.props.name) === null || _a === void 0 ? void 0 : _a.replace('$', '' + itemIndex) }, itemProps))
                    : child;
            });
        })));
}
exports.default = uniforms_1.connectField(List);
