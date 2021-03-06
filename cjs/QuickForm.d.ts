/// <reference types="react" />
declare const _default: {
    new <Model, Props extends import("uniforms").QuickFormProps<Model> = import("uniforms").QuickFormProps<Model>, State extends import("uniforms").QuickFormState<Model> = import("uniforms").QuickFormState<Model>>(props: Props): {
        getNativeFormProps(): Record<string, any>;
        getAutoField(): import("react").ComponentType<{
            name: string;
        }>;
        getErrorsField(): import("react").ComponentType<{}>;
        getSubmitField(): import("react").ComponentType<{}>;
        componentDidMount(): void;
        componentDidUpdate(prevProps: Props, prevState: State, snapshot: never): void;
        componentWillUnmount(): void;
        delayId?: any;
        mounted: boolean;
        reset: () => void;
        change: (key: string, value: any) => void;
        submit: (event?: import("react").SyntheticEvent<Element, Event> | undefined) => Promise<any>;
        randomId: () => string;
        getContext(): import("uniforms").Context<Model>;
        getContextName(): string[];
        getContextError(): any;
        getContextModel(): import("uniforms").DeepPartial<Model>;
        getContextState(): {
            disabled: boolean;
            label: boolean;
            placeholder: boolean;
            readOnly: boolean;
            showInlineError: boolean;
        };
        getContextSchema(): import("uniforms").Bridge;
        getContextOnChange(): (key: string, value: any) => void;
        getContextOnSubmit(): (event?: import("react").SyntheticEvent<Element, Event> | undefined) => any;
        getModel(mode?: import("uniforms").ModelTransformMode | undefined, model?: import("uniforms").DeepPartial<Model> | undefined): import("uniforms").DeepPartial<Model>;
        onChange(key: string, value: any): void;
        __reset(state: State): Partial<State>;
        onReset(): void;
        onSubmit(event?: import("react").SyntheticEvent<Element, Event> | undefined): Promise<any>;
        render(): JSX.Element;
        context: any;
        setState<K extends keyof State>(state: State | Pick<State, K> | ((prevState: Readonly<State>, props: Readonly<Props>) => State | Pick<State, K> | null) | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Props> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<State>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Props>, prevState: Readonly<State>): any;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Props>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Props>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): void;
    };
    Quick: typeof import("uniforms").Quick;
    displayName: string;
    defaultProps: {
        autosave: boolean;
        autosaveDelay: number;
        error: null;
        label: boolean;
        model: any;
        noValidate: boolean;
        onSubmit(): void;
    };
    contextType?: import("react").Context<any> | undefined;
} & typeof import("uniforms").BaseForm;
export default _default;
