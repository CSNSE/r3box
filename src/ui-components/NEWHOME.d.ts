/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type NEWHOMEOverridesProps = {
    NEWHOME?: PrimitiveOverrideProps<ViewProps>;
    "DALL\u00B7E 2023-12-19 09.58 1"?: PrimitiveOverrideProps<ImageProps>;
    "DALL\u00B7E 2023-12-19 09.57 1"?: PrimitiveOverrideProps<ImageProps>;
    "Rectangle 21"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 25"?: PrimitiveOverrideProps<ViewProps>;
    "Controls / Buttons: Icon"?: PrimitiveOverrideProps<ViewProps>;
    "11/12/23"?: PrimitiveOverrideProps<TextProps>;
    "DALL\u00B7E 2023-12-19 10.00 1"?: PrimitiveOverrideProps<ImageProps>;
    "Welcome,"?: PrimitiveOverrideProps<TextProps>;
    Megan?: PrimitiveOverrideProps<TextProps>;
    "Pending Requests"?: PrimitiveOverrideProps<TextProps>;
    Button40031113?: PrimitiveOverrideProps<ButtonProps>;
    Button40031117?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type NEWHOMEProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: NEWHOMEOverridesProps | undefined | null;
}>;
export default function NEWHOME(props: NEWHOMEProps): React.ReactElement;
