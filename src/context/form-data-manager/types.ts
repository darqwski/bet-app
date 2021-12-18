import React, { Dispatch } from 'react';

export interface IFormData {
    [name: string]: string | number | undefined
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
    setField(name: string): (event: {target: { value : string | number | undefined }}) => void;
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
