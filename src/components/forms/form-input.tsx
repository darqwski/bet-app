import React from 'react';
import WithLabel from './with-label';
import { useFormDataContext } from '@/context/form-data-manager/context';
import { IFormInput } from '@/components/forms/types';

const FormInput: React.FC<IFormInput> = ({ label, name, white, ...rest }) => {
	const { setField, formData: { [name]: value = '' } } = useFormDataContext();

	return (
		<WithLabel label={label} white={white} id={`input-${name}`}>
			<input id={`input-${name}`} name={name} onChange={(event)=>setField(name,event.target.value)} value={value} {...rest} />
		</WithLabel>
	);
};

export default FormInput;
