import { __rest } from "tslib";
import React from 'react';
import { connectField, filterDOMProps } from 'uniforms';
import AutoField from './AutoField';
function Nest(_a) {
    var { children, fields, itemProps, label, name } = _a, props = __rest(_a, ["children", "fields", "itemProps", "label", "name"]);
    return (React.createElement("div", Object.assign({}, filterDOMProps(props)),
        label && React.createElement("label", null, label),
        children ||
            fields.map(field => (React.createElement(AutoField, Object.assign({ key: field, name: field }, itemProps))))));
}
export default connectField(Nest);
