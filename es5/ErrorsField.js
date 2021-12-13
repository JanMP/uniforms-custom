"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var uniforms_1 = require("uniforms");
function ErrorsField(props) {
    var _a = uniforms_1.useForm(), error = _a.error, schema = _a.schema;
    return !error && !props.children ? null : (react_1.default.createElement("div", tslib_1.__assign({}, uniforms_1.filterDOMProps(props)),
        props.children,
        react_1.default.createElement("ul", null, schema.getErrorMessages(error).map(function (message, index) { return (react_1.default.createElement("li", { key: index }, message)); }))));
}
exports.default = ErrorsField;
