import { createContext, useContext } from 'react';
import { IFormDataContext } from './types';

export const FormDataContext =createContext<IFormDataContext>({
	setField: ()  =>  {
		throw 'FormDataContext missing';
	},
	addError(): void {
		throw 'FormDataContext missing';
	},
	clearErrors(): void {
		throw 'FormDataContext missing';
	},
	errorMessages: [],formData: {},
	setFormData:()=> {
		throw 'FormDataContext missing';
	},
	clearForm(): void {
		throw 'FormDataContext missing';
	}
});

export const useFormDataContext = (): IFormDataContext => useContext(FormDataContext);
