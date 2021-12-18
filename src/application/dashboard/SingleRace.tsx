import React from 'react';
import { TRace } from '@/types/races';
import { Link } from 'react-router-dom';

export interface ISingleRace {
	race: TRace
}

const SingleRace: React.FC<ISingleRace> = ({ race }) => {
	return (
		<Link to={`races/${race.id}/`}>
			<div className="card">
				<p>{race.name}</p>
				<p>{race.active ? 'Active' : 'Not Active'}</p>
			</div>
		</Link>
	);
};

export default SingleRace;