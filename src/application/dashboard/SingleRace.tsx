import React from 'react';
import { TRace } from '@/types/races';

export interface ISingleRace {
	race: TRace
}

const SingleRace: React.FC<ISingleRace> = ({ race }) => {
	return (
		<a href={`races/${race.id}/`}>
			<div className="card">
				<p>{race.name}</p>
				<p>{race.active ? 'Active' : 'Not Active'}</p>
			</div>
		</a>
	);
};

export default SingleRace;