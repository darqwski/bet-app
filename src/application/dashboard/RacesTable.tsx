import React, { useState } from 'react';
import RacesController from '@/application/dashboard/RacesController';
import { TRace } from '@/types/races';
import SingleRace from '@/application/dashboard/SingleRace';

export interface IRacesTable {
	races?: TRace[]
}

const RacesTable: React.FC<IRacesTable> = ({ races }) => {
	const [isFiltered, setFiltered] = useState(false);

	return (
		<div>
			<RacesController setFiltered={setFiltered} isFiltered={isFiltered} />

			<div>
				{races && races
					.filter(race=> !isFiltered || race.active )
					.map((race)=>(
						<SingleRace race={race} key={`SingleRace-${race.id}`} />
					))}
			</div>
		</div>
	);
};

export default RacesTable;