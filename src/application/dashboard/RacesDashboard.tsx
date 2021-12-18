import React, { useContext } from 'react';
import RacesTable from '@/application/dashboard/RacesTable';
import Loading from '@/components/loading/Loading';
import { RacesContext } from '@/context/races-manager/races-context';
import './dashboard.less';

const RacesDashboard: React.FC = () => {
	const { races, isLoading } = useContext(RacesContext);

	return (
		<div>
			<h3 className="header">Small web-based race betting</h3>
			{isLoading ? <Loading /> : <RacesTable races={races} />}
		</div>
	);
};

export default RacesDashboard;
