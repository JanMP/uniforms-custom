import { __rest } from "tslib";
import React from 'react';
import { connectField, filterDOMProps, joinName, useField, } from 'uniforms';
function ListDel(_a) {
    var { disabled, name } = _a, props = __rest(_a, ["disabled", "name"]);
    const nameParts = joinName(null, name);
    const nameIndex = +nameParts[nameParts.length - 1];
    const parentName = joinName(nameParts.slice(0, -1));
    const parent = useField(parentName, {}, { absoluteName: true })[0];
    const limitNotReached = !disabled && !(parent.minCount >= parent.value.length);
    return (React.createElement("span", Object.assign({}, filterDOMProps(props), { onClick: () => {
            if (limitNotReached) {
                const value = parent.value.slice();
                value.splice(nameIndex, 1);
                parent.onChange(value);
            }
        } }), "-"));
}
export default connectField(ListDel, { initialValue: false, kind: 'leaf' });
