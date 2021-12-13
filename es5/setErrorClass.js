"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var setErrorClass = function (props) {
    // @ts-ignore
    var showError = props.error != null;
    return classnames_1.default({
        'u-show-error': showError,
    });
};
exports.default = setErrorClass;
