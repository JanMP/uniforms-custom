/// <reference types="react" />
export { AutoFieldProps } from 'uniforms';
declare const AutoField: ((rawProps: import("uniforms").AutoFieldProps) => import("react").ReactElement<any, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)> | null) | (new (props: any) => import("react").Component<any, any, any>)>) & {
    componentDetectorContext: import("react").Context<import("uniforms").ComponentDetector>;
    defaultComponentDetector: import("uniforms").ComponentDetector;
};
export default AutoField;
