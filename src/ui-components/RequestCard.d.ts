/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
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
export declare type RequestCardOverridesProps = {
    RequestCard?: PrimitiveOverrideProps<FlexProps>;
    RequestCard40711326?: PrimitiveOverrideProps<ViewProps>;
    "Text Group"?: PrimitiveOverrideProps<FlexProps>;
    "Steak Salad"?: PrimitiveOverrideProps<TextProps>;
    "Request to:"?: PrimitiveOverrideProps<TextProps>;
    Mom?: PrimitiveOverrideProps<TextProps>;
    "The one with Thai Basil"?: PrimitiveOverrideProps<TextProps>;
    CardFooterFrame?: PrimitiveOverrideProps<ViewProps>;
    trash?: PrimitiveOverrideProps<ViewProps>;
    MyIcon40711334?: MyIconProps;
    pencil?: PrimitiveOverrideProps<ViewProps>;
    MyIcon40711336?: MyIconProps;
} & EscapeHatchProps;
export declare type RequestCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    Request?: String;
    request?: any;
} & {
    overrides?: RequestCardOverridesProps | undefined | null;
}>;
export default function RequestCard(props: RequestCardProps): React.ReactElement;
