/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Sponsor } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SponsorUpdateFormInputValues = {
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
    RedBagLadyPickUp?: string;
};
export declare type SponsorUpdateFormValidationValues = {
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
    RedBagLadyPickUp?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SponsorUpdateFormOverridesProps = {
    SponsorUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    FirstName?: PrimitiveOverrideProps<TextFieldProps>;
    LastName?: PrimitiveOverrideProps<TextFieldProps>;
    Email?: PrimitiveOverrideProps<TextFieldProps>;
    PhoneNumber?: PrimitiveOverrideProps<TextFieldProps>;
    Address?: PrimitiveOverrideProps<TextFieldProps>;
    Address2?: PrimitiveOverrideProps<TextFieldProps>;
    City?: PrimitiveOverrideProps<TextFieldProps>;
    State?: PrimitiveOverrideProps<TextFieldProps>;
    Zipcode?: PrimitiveOverrideProps<TextFieldProps>;
    ReturningSponsor?: PrimitiveOverrideProps<SwitchFieldProps>;
    InfoChanged?: PrimitiveOverrideProps<SwitchFieldProps>;
    RedBagLadyPickUp?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SponsorUpdateFormProps = React.PropsWithChildren<{
    overrides?: SponsorUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    sponsor?: Sponsor;
    onSubmit?: (fields: SponsorUpdateFormInputValues) => SponsorUpdateFormInputValues;
    onSuccess?: (fields: SponsorUpdateFormInputValues) => void;
    onError?: (fields: SponsorUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SponsorUpdateFormInputValues) => SponsorUpdateFormInputValues;
    onValidate?: SponsorUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SponsorUpdateForm(props: SponsorUpdateFormProps): React.ReactElement;
