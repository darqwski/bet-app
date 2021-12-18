import { ChangeEvent } from 'react';

type TSelectData = {value:string, text:string}[]

export interface IFormSelect {
    data: TSelectData
    label: string;
    name: string;
}
export interface ISelect {
    data: TSelectData,
    name: string
    dataName?:string,
    selected?:string;
    onChange:(event:  ChangeEvent<HTMLSelectElement>) => void
}

export interface IWithLabel {
    label: string;
    white?: boolean;
    id: string
}
export interface IFormInput {
    label: string;
    name: string;
    white?: boolean;
    type: string;
    disabled?: boolean;
}
export interface IFormRadio {
    label: string;
    name: string;
    value: number | string;
    white?: boolean;
}
