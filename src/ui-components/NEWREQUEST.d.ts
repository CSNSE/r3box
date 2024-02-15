/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, IconProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NEWREQUESTOverridesProps = {
    NEWREQUEST?: PrimitiveOverrideProps<ViewProps>;
    "Group 38181"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 26"?: PrimitiveOverrideProps<ViewProps>;
    TextField40441212?: PrimitiveOverrideProps<TextFieldProps>;
    TextField40441221?: PrimitiveOverrideProps<TextFieldProps>;
    TextField40441243?: PrimitiveOverrideProps<TextFieldProps>;
    "MyIcon/type36"?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    "Request a Recipe"?: PrimitiveOverrideProps<TextProps>;
    "Recipe Name"?: PrimitiveOverrideProps<TextProps>;
    Description?: PrimitiveOverrideProps<TextProps>;
    "Who is this request for?"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type NEWREQUESTProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: NEWREQUESTOverridesProps | undefined | null;
}>;
export default function NEWREQUEST(props: NEWREQUESTProps): React.ReactElement;
