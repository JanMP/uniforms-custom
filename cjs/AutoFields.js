"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = require("react");
const uniforms_1 = require("uniforms");
const AutoField_1 = tslib_1.__importDefault(require("./AutoField"));
function AutoFields(_a) {
    var { autoField = AutoField_1.default, element = 'div', fields, omitFields = [] } = _a, props = tslib_1.__rest(_a, ["autoField", "element", "fields", "omitFields"]);
    const { schema } = uniforms_1.useForm();
    return react_1.createElement(element, props, (fields !== null && fields !== void 0 ? fields : schema.getSubfields())
        .filter(field => !omitFields.includes(field))
        .map(field => react_1.createElement(autoField, { key: field, name: field })));
}
exports.default = AutoFields;
