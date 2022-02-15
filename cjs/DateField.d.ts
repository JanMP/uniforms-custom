import { Ref } from 'react';
import { HTMLFieldProps } from 'uniforms';
export declare type DateFieldProps = HTMLFieldProps<Date, HTMLDivElement, {
    inputRef?: Ref<HTMLInputElement>;
    max?: Date;
    min?: Date;
    hasFloatingLabel?: boolean;
}>;
declare const _default: import("uniforms").ConnectedField<DateFieldProps, Date | undefined>;
export default _default;
