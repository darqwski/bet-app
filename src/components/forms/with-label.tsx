import React from 'react';
import { IWithLabel } from '@/components/forms/types';

const WithLabel: React.FC<IWithLabel> = ({ children, label, white = false, id }) => (
	<div>
		{label && <label className={white ? 'white-text' : ''} htmlFor={id}>{label}</label>}
		{children}
	</div>
);

export default WithLabel;
