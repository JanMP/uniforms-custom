import { HTMLFieldProps } from 'uniforms';
export declare type ListFieldProps = HTMLFieldProps<unknown[], HTMLUListElement, {
    initialCount?: number;
    itemProps?: object;
}>;
declare const _default: import("uniforms").ConnectedField<ListFieldProps, unknown[] | undefined>;
export default _default;
