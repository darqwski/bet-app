import React, { Dispatch, SetStateAction } from 'react';

export interface IRacesController {
    isFiltered: boolean;
    setFiltered: Dispatch<SetStateAction<boolean>>
}

const RacesController: React.FC<IRacesController> = ({ setFiltered, isFiltered }) => {

	return (
		<button className="btn" onClick={()=>setFiltered(i=>!i)}>
			{isFiltered ? 'Show inactive' : 'Hide inactice'}
		</button>
	);
};

export default RacesController;