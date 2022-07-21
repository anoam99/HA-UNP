import { AutocompleteRenderInputParams, TextFieldProps } from "@mui/material";
import { Component, FC, FormEvent } from "react";
import { CreateCheckoutLinkDto } from "../../services";

export interface CreateLinkFormProps {
    handleSubmit: (event: FormEvent, formData: CreateCheckoutLinkDto) => void
}

export type FormField =  {
    id: 'description' | 'firstName' | 'currency' | 'amount'   ;
    label: string;
    required?: boolean;
    helperText?: string | Array<string | JSX.Element >;
    options?: string[];
    xs: number;
    Component: FC<any>;
    type?: string;
    renderInput?: (params: AutocompleteRenderInputParams) => JSX.Element
} 