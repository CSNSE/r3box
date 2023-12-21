/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type RecipeCardOverridesProps = {
    RecipeCard?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    "Text Group"?: PrimitiveOverrideProps<FlexProps>;
    "Chocolate Chip Cookies"?: PrimitiveOverrideProps<TextProps>;
    "1. Mix the Flour and Sugar"?: PrimitiveOverrideProps<TextProps>;
    CardFooterFrame?: PrimitiveOverrideProps<ViewProps>;
    trash?: PrimitiveOverrideProps<ViewProps>;
    MyIcon38746010?: MyIconProps;
    pencil?: PrimitiveOverrideProps<ViewProps>;
    MyIcon38745890?: MyIconProps;
} & EscapeHatchProps;
export declare type RecipeCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    cardR?: any;
} & {
    overrides?: RecipeCardOverridesProps | undefined | null;
}>;
export default function RecipeCard(props: RecipeCardProps): React.ReactElement;
