import React from 'react';
import { TRace } from '@/types/races';
import { Link } from 'react-router-dom';

export interface ISingleRace {
	race: TRace
}

const SingleRace: React.FC<ISingleRace> = ({ race }) => {
	return (

		<div className={`card clickable race ${race.active ? '' : 'race__inactive'}`}>
			<Link to={`races/${race.id}/`}>
				<p>{race.name} {race.active ? '' : 'Not Active'}</p>
				<p>{race.participants.length} participants</p>
			</Link>
		</div>
	);
};

export default SingleRace;