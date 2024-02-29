/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RequestUpdateFormInputValues = {
    name?: string;
    description?: string;
    recipient?: string;
};
export declare type RequestUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    recipient?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RequestUpdateFormOverridesProps = {
    RequestUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    recipient?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RequestUpdateFormProps = React.PropsWithChildren<{
    overrides?: RequestUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    request?: any;
    onSubmit?: (fields: RequestUpdateFormInputValues) => RequestUpdateFormInputValues;
    onSuccess?: (fields: RequestUpdateFormInputValues) => void;
    onError?: (fields: RequestUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RequestUpdateFormInputValues) => RequestUpdateFormInputValues;
    onValidate?: RequestUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RequestUpdateForm(props: RequestUpdateFormProps): React.ReactElement;
