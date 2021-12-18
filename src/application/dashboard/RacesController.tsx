import React, { Dispatch, SetStateAction, useContext } from 'react';
import { RacesContext } from '@/context/races-manager/races-context';
import { useTranslation } from 'react-i18next';

export interface IRacesController {
    isFiltered: boolean;
    setFiltered: Dispatch<SetStateAction<boolean>>
}

const RacesController: React.FC<IRacesController> = ({ setFiltered, isFiltered }) => {
	const { bets } = useContext(RacesContext);
	const { t } = useTranslation();

	return (
		<div className="race-controller">
			{Object.keys(bets).length ? <p> Your bets: {Object.keys(bets).length}</p> : null}
			<a className="link" onClick={()=>setFiltered(i=>!i)}>
				<span className={`material-icons-outlined ${isFiltered ? 'visibility' : 'visibility_off'}`}/>
				<span>{isFiltered ? t('Show inactive') : t('Hide inactive')}</span>
			</a>
		</div>

	);
};

export default RacesController;