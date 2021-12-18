import React from 'react';
import { TParticipant } from '@/types/participants';
import { useFormDataContext } from '@/context/form-data-manager/context';

export interface IRaceRow {
	participant: TParticipant
}

const ParticipantRow: React.FC<IRaceRow> = ({ participant }) => {
	const { formData: { firstPlace, secondPlace, thirdPlace }, setField } = useFormDataContext();

	const onRadioChange = (name: string) => {
		if(name !== 'firstPlace' && (firstPlace === participant.id )) {
			setField('firstPlace')({ target: { value: undefined } });
		}
		if(name !== 'secondPlace' && (secondPlace === participant.id)) {
			setField('secondPlace')({ target: { value: undefined } });
		}
		if(name !== 'thirdPlace' && ( thirdPlace === participant.id)) {
			setField('thirdPlace')({ target: { value: undefined } });
		}

		setField(name)({ target: { value: participant.id } });
	};

	return( 
		<tr>
			<td>
				{participant.body}
			</td>
			<td>
				<input
					name="firstPlace"
					type="radio"
					checked={firstPlace=== participant.id}
					onChange={()=>onRadioChange('firstPlace')}
				/>
			</td>
			<td>
				<input
					name="secondPlace"
					type="radio"
					checked={secondPlace=== participant.id}
					onChange={()=>onRadioChange('secondPlace')}
				/>
			</td>
			<td>
				<input
					name="thirdPlace"
					type="radio"
					checked={thirdPlace=== participant.id}
					onChange={()=>onRadioChange('thirdPlace')}
				/>
			</td>
		</tr>
	);
};

export default ParticipantRow;