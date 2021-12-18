import React from 'react';
import { TRace } from '@/types/races';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export interface ISingleRace {
	race: TRace
}

const SingleRace: React.FC<ISingleRace> = ({ race }) => {
	const { t } = useTranslation();

	return (
		<div className={`card clickable race ${race.active ? '' : 'race__inactive'}`}>
			<Link to={`races/${race.id}/`}>
				<div>
					<p>{race.name} {race.active ? '' : ' - Not Active'}</p>
					<p>{race.participants.length} {t('participants')}</p>
				</div>
			</Link>
		</div>
	);
};

export default SingleRace;