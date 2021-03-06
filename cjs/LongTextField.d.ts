import { Ref } from 'react';
import { HTMLFieldProps } from 'uniforms';
export declare type LongTextFieldProps = HTMLFieldProps<string, HTMLDivElement, {
    inputRef?: Ref<HTMLTextAreaElement>;
    hasFloatingLabel?: boolean;
}>;
declare const _default: import("uniforms").ConnectedField<LongTextFieldProps, string | undefined>;
export default _default;
