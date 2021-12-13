import React from 'react';
import { HTMLFieldProps } from 'uniforms';
export declare type NestFieldProps = HTMLFieldProps<object, HTMLDivElement, {
    itemProps?: object;
}>;
declare const _default: React.FunctionComponent<import("uniforms").Override<import("uniforms").Override<React.HTMLProps<HTMLDivElement>, import("uniforms").GuaranteedProps<object> & {
    itemProps?: object | undefined;
}>, import("uniforms").Override<Partial<import("uniforms").GuaranteedProps<object | undefined>>, {
    label?: React.ReactNode;
    name: string;
    placeholder?: string | boolean | null | undefined;
}>>> & {
    Component: React.ComponentType<import("uniforms").Override<React.HTMLProps<HTMLDivElement>, import("uniforms").GuaranteedProps<object> & {
        itemProps?: object | undefined;
    }>>;
    options: {
        initialValue?: boolean | undefined;
        kind?: "leaf" | "node" | undefined;
    } | undefined;
};
export default _default;
