import { __rest } from "tslib";
import cloneDeep from 'lodash/cloneDeep';
import React from 'react';
import { connectField, filterDOMProps, joinName, useField, } from 'uniforms';
function ListAdd(_a) {
    var { disabled, name, value } = _a, props = __rest(_a, ["disabled", "name", "value"]);
    const nameParts = joinName(null, name);
    const parentName = joinName(nameParts.slice(0, -1));
    const parent = useField(parentName, {}, { absoluteName: true })[0];
    const limitNotReached = !disabled && !(parent.maxCount <= parent.value.length);
    return (React.createElement("span", Object.assign({}, filterDOMProps(props), { onClick: () => {
            if (limitNotReached) {
                parent.onChange(parent.value.concat([cloneDeep(value)]));
            }
        } }), "+"));
}
export default connectField(ListAdd, { initialValue: false, kind: 'leaf' });
