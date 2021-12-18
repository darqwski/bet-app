import React, { Dispatch, SetStateAction } from 'react';

export interface IRacesController {
    isFiltered: boolean;
    setFiltered: Dispatch<SetStateAction<boolean>>
}

const RacesController: React.FC<IRacesController> = ({ setFiltered, isFiltered }) => {

	return (
		<div className="race-controller">
			<a className="link" onClick={()=>setFiltered(i=>!i)}>
				<span className={`material-icons-outlined ${isFiltered ? 'visibility' : 'visibility_off'}`}/>
				<span>{isFiltered ? 'Show inactive' : 'Hide inactive'}</span>
			</a>
		</div>

	);
};

export default RacesController;