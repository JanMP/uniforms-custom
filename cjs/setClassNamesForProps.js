"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const classnames_1 = tslib_1.__importDefault(require("classnames"));
const setClassNamesForProps = (props) => {
    // @ts-ignore
    const showError = props.error != null;
    // @ts-ignore
    const hasFloatingLabel = props.hasFloatingLabel;
    return classnames_1.default({
        'u-show-error': showError,
        'hasFloatingLabel': hasFloatingLabel
    });
};
exports.default = setClassNamesForProps;
