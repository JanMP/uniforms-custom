import React from 'react';
import { HTMLFieldProps } from 'uniforms';
export declare type ListFieldProps = HTMLFieldProps<unknown[], HTMLUListElement, {
    initialCount?: number;
    itemProps?: object;
}>;
declare const _default: React.FunctionComponent<import("uniforms").Override<import("uniforms").Override<React.HTMLProps<HTMLUListElement>, import("uniforms").GuaranteedProps<unknown[]> & {
    initialCount?: number | undefined;
    itemProps?: object | undefined;
}>, import("uniforms").Override<Partial<import("uniforms").GuaranteedProps<unknown[] | undefined>>, {
    label?: React.ReactNode;
    name: string;
    placeholder?: string | boolean | null | undefined;
}>>> & {
    Component: React.ComponentType<import("uniforms").Override<React.HTMLProps<HTMLUListElement>, import("uniforms").GuaranteedProps<unknown[]> & {
        initialCount?: number | undefined;
        itemProps?: object | undefined;
    }>>;
    options: {
        initialValue?: boolean | undefined;
        kind?: "leaf" | "node" | undefined;
    } | undefined;
};
export default _default;
