import React, { Ref } from 'react';
import { HTMLFieldProps } from 'uniforms';
export declare type TextFieldProps = HTMLFieldProps<string, HTMLDivElement, {
    inputRef?: Ref<HTMLInputElement>;
}>;
declare const _default: React.FunctionComponent<import("uniforms").Override<import("uniforms").Override<React.HTMLProps<HTMLDivElement>, import("uniforms").GuaranteedProps<string> & {
    inputRef?: ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null | undefined;
}>, import("uniforms").Override<Partial<import("uniforms").GuaranteedProps<string | undefined>>, {
    label?: React.ReactNode;
    name: string;
    placeholder?: string | boolean | null | undefined;
}>>> & {
    Component: React.ComponentType<import("uniforms").Override<React.HTMLProps<HTMLDivElement>, import("uniforms").GuaranteedProps<string> & {
        inputRef?: ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null | undefined;
    }>>;
    options: {
        initialValue?: boolean | undefined;
        kind?: "leaf" | "node" | undefined;
    } | undefined;
};
export default _default;
