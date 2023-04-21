/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SponsorCreateFormInputValues = {
    FirstName?: string;
    LastName?: string;
    Email?: string;
    PhoneNumber?: string;
    Address?: string;
    Address2?: string;
    City?: string;
    State?: string;
    Zipcode?: string;
    ReturningSponsor?: boolean;
    InfoChanged?: boolean;
};
export declare type SponsorCreateFormValidationValues = {
    FirstName?: ValidationFunction<string>;
    LastName?: ValidationFunction<string>;
    Email?: ValidationFunction<string>;
    PhoneNumber?: ValidationFunction<string>;
    Address?: ValidationFunction<string>;
    Address2?: ValidationFunction<string>;
    City?: ValidationFunction<string>;
    State?: ValidationFunction<string>;
    Zipcode?: ValidationFunction<string>;
    ReturningSponsor?: ValidationFunction<boolean>;
    InfoChanged?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SponsorCreateFormOverridesProps = {
    SponsorCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    FirstName?: PrimitiveOverrideProps<TextFieldProps>;
    LastName?: PrimitiveOverrideProps<TextFieldProps>;
    Email?: PrimitiveOverrideProps<TextFieldProps>;
    PhoneNumber?: PrimitiveOverrideProps<TextFieldProps>;
    Address?: PrimitiveOverrideProps<TextFieldProps>;
    Address2?: PrimitiveOverrideProps<TextFieldProps>;
    City?: PrimitiveOverrideProps<TextFieldProps>;
    State?: PrimitiveOverrideProps<SelectFieldProps>;
    Zipcode?: PrimitiveOverrideProps<TextFieldProps>;
    ReturningSponsor?: PrimitiveOverrideProps<SwitchFieldProps>;
    InfoChanged?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type SponsorCreateFormProps = React.PropsWithChildren<{
    overrides?: SponsorCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SponsorCreateFormInputValues) => SponsorCreateFormInputValues;
    onSuccess?: (fields: SponsorCreateFormInputValues) => void;
    onError?: (fields: SponsorCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SponsorCreateFormInputValues) => SponsorCreateFormInputValues;
    onValidate?: SponsorCreateFormValidationValues;
} & React.CSSProperties>;
export default function SponsorCreateForm(props: SponsorCreateFormProps): React.ReactElement;
