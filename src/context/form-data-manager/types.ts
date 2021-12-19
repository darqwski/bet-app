import React, { Dispatch } from 'react';

export type TFormValue = string | number | undefined;

export interface IFormData {
    [name: string]: TFormValue
}

/**
 * @typedef {Object} formDataContext
 * @property {function} setField - function which returns function to setField in formDataContext state
 * @property {Object} formData - state in formDataContext
 * @property {function} setFormData - simple setState in formDataContext
 * @property {function} addError - function to add Error to errors state
 * @property {function} clearErrors - function to reset errors state
 * @property {Array} errorMessages -  errors state
 * @property {function} clearForm -  Clear form, useful after reseting form
 */
export interface IFormDataContext<T = IFormData> {
    setField: (name: string, value: TFormValue) => void;
    formData: T,
    setFormData: Dispatch<React.SetStateAction<IFormData>>;
    addError(error: string):void;
    clearErrors():void;
    errorMessages:string[];
    clearForm(): void;
}

export interface IFormDataManager {
    initialData: IFormData
}
