import React from 'react';
import { connectField } from 'uniforms';
import AutoField from './AutoField';
import ListDelField from './ListDelField';
function ListItem({ children = React.createElement(AutoField, { label: null, name: "" }), }) {
    return (React.createElement("div", { className: "u-list-item-field" },
        React.createElement("div", { className: "u-list-item-child-container" }, children),
        React.createElement("div", null,
            React.createElement(ListDelField, { name: "" }))));
}
export default connectField(ListItem, {
    initialValue: false,
});
