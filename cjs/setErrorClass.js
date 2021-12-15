"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const classnames_1 = tslib_1.__importDefault(require("classnames"));
const setErrorClass = (props) => {
    // @ts-ignore
    const showError = props.error != null;
    return classnames_1.default({
        'u-show-error': showError
    });
};
exports.default = setErrorClass;
