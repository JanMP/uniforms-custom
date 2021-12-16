import { ComponentType } from 'react';
export declare type AutoFieldsProps = {
    autoField?: ComponentType<{
        name: string;
    }>;
    element?: ComponentType | string;
    fields?: string[];
    omitFields?: string[];
};
export default function AutoFields({ autoField, element, fields, omitFields, ...props }: AutoFieldsProps): import("react").ReactElement<{}, string | import("react").JSXElementConstructor<any>>;
