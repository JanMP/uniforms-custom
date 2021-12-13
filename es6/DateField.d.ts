import React, { Ref } from 'react';
import { HTMLFieldProps } from 'uniforms';
export declare type DateFieldProps = HTMLFieldProps<Date, HTMLDivElement, {
    inputRef?: Ref<HTMLInputElement>;
    max?: Date;
    min?: Date;
}>;
declare const _default: React.FunctionComponent<import("uniforms").Override<import("uniforms").Override<React.HTMLProps<HTMLDivElement>, import("uniforms").GuaranteedProps<Date> & {
    inputRef?: ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null | undefined;
    max?: Date | undefined;
    min?: Date | undefined;
}>, import("uniforms").Override<Partial<import("uniforms").GuaranteedProps<Date | undefined>>, {
    label?: React.ReactNode;
    name: string;
    placeholder?: string | boolean | null | undefined;
}>>> & {
    Component: React.ComponentType<import("uniforms").Override<React.HTMLProps<HTMLDivElement>, import("uniforms").GuaranteedProps<Date> & {
        inputRef?: ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null | undefined;
        max?: Date | undefined;
        min?: Date | undefined;
    }>>;
    options: {
        initialValue?: boolean | undefined;
        kind?: "leaf" | "node" | undefined;
    } | undefined;
};
export default _default;
