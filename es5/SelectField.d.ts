import React, { Ref } from 'react';
import { HTMLFieldProps } from 'uniforms';
export declare type SelectFieldProps = HTMLFieldProps<string | string[], HTMLDivElement, {
    allowedValues?: string[];
    checkboxes?: boolean;
    disableItem?: (value: string) => boolean;
    inputRef?: Ref<HTMLSelectElement>;
    transform?: (value: string) => string;
}>;
declare const _default: React.FunctionComponent<import("uniforms").Override<import("uniforms").Override<React.HTMLProps<HTMLDivElement>, import("uniforms").GuaranteedProps<string | string[]> & {
    allowedValues?: string[] | undefined;
    checkboxes?: boolean | undefined;
    disableItem?: ((value: string) => boolean) | undefined;
    inputRef?: ((instance: HTMLSelectElement | null) => void) | React.RefObject<HTMLSelectElement> | null | undefined;
    transform?: ((value: string) => string) | undefined;
}>, import("uniforms").Override<Partial<import("uniforms").GuaranteedProps<string | string[] | undefined>>, {
    label?: React.ReactNode;
    name: string;
    placeholder?: string | boolean | null | undefined;
}>>> & {
    Component: React.ComponentType<import("uniforms").Override<React.HTMLProps<HTMLDivElement>, import("uniforms").GuaranteedProps<string | string[]> & {
        allowedValues?: string[] | undefined;
        checkboxes?: boolean | undefined;
        disableItem?: ((value: string) => boolean) | undefined;
        inputRef?: ((instance: HTMLSelectElement | null) => void) | React.RefObject<HTMLSelectElement> | null | undefined;
        transform?: ((value: string) => string) | undefined;
    }>>;
    options: {
        initialValue?: boolean | undefined;
        kind?: "leaf" | "node" | undefined;
    } | undefined;
};
export default _default;
