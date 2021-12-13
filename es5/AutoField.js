"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoFieldProps = void 0;
var tslib_1 = require("tslib");
// @ts-nocheck
var invariant_1 = tslib_1.__importDefault(require("invariant"));
var uniforms_1 = require("uniforms");
var uniforms_2 = require("uniforms");
Object.defineProperty(exports, "AutoFieldProps", { enumerable: true, get: function () { return uniforms_2.AutoFieldProps; } });
var BoolField_1 = tslib_1.__importDefault(require("./BoolField"));
var DateField_1 = tslib_1.__importDefault(require("./DateField"));
var ListField_1 = tslib_1.__importDefault(require("./ListField"));
var NestField_1 = tslib_1.__importDefault(require("./NestField"));
var NumField_1 = tslib_1.__importDefault(require("./NumField"));
var RadioField_1 = tslib_1.__importDefault(require("./RadioField"));
var SelectField_1 = tslib_1.__importDefault(require("./SelectField"));
var TextField_1 = tslib_1.__importDefault(require("./TextField"));
var AutoField = uniforms_1.createAutoField(function (props) {
    if (props.allowedValues) {
        return props.checkboxes && props.fieldType !== Array
            ? RadioField_1.default
            : SelectField_1.default;
    }
    switch (props.fieldType) {
        case Array:
            return ListField_1.default;
        case Boolean:
            return BoolField_1.default;
        case Date:
            return DateField_1.default;
        case Number:
            return NumField_1.default;
        case Object:
            return NestField_1.default;
        case String:
            return TextField_1.default;
    }
    return invariant_1.default(false, 'Unsupported field type: %s', props.fieldType);
});
exports.default = AutoField;
