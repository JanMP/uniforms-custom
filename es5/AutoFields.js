"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var uniforms_1 = require("uniforms");
var AutoField_1 = tslib_1.__importDefault(require("./AutoField"));
function AutoFields(_a) {
    var _b = _a.autoField, autoField = _b === void 0 ? AutoField_1.default : _b, _c = _a.element, element = _c === void 0 ? 'div' : _c, fields = _a.fields, _d = _a.omitFields, omitFields = _d === void 0 ? [] : _d, props = tslib_1.__rest(_a, ["autoField", "element", "fields", "omitFields"]);
    var schema = uniforms_1.useForm().schema;
    return react_1.createElement(element, props, (fields !== null && fields !== void 0 ? fields : schema.getSubfields())
        .filter(function (field) { return !omitFields.includes(field); })
        .map(function (field) { return react_1.createElement(autoField, { key: field, name: field }); }));
}
exports.default = AutoFields;