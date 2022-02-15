import { __rest } from "tslib";
import cloneDeep from 'lodash/cloneDeep';
import React from 'react';
import { connectField, filterDOMProps, joinName, useField, } from 'uniforms';
function ListAdd(_a) {
    var { disabled, initialCount, name, readOnly, value } = _a, props = __rest(_a, ["disabled", "initialCount", "name", "readOnly", "value"]);
    const nameParts = joinName(null, name);
    const parentName = joinName(nameParts.slice(0, -1));
    const parent = useField(parentName, { initialCount }, { absoluteName: true })[0];
    const limitNotReached = !disabled && !(parent.maxCount <= parent.value.length);
    function onAction(event) {
        if (limitNotReached &&
            !readOnly &&
            (!('key' in event) || event.key === 'Enter')) {
            parent.onChange(parent.value.concat([cloneDeep(value)]));
        }
    }
    return (
    // @ts-ignore
    React.createElement("button", Object.assign({ className: "icon ok" }, filterDOMProps(props), { onClick: onAction }), "+"));
}
export default connectField(ListAdd, {
    initialValue: false,
    kind: 'leaf',
});
