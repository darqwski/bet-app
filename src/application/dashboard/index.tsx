import React, { useContext } from 'react';
import useAppRequest from '@/hooks/use-app-request';
import RacesTable from '@/application/dashboard/RacesTable';
import { TRace } from '@/types/races';
import Loading from '@/components/loading/Loading';
import { RacesContext } from '@/context/races-manager/races-context';

const Dashboard: React.FC = () => {
	const { races, isLoading} = useContext(RacesContext);
	return (
		<div>
			<h3>Small web-based race betting</h3>
			{isLoading ? <Loading /> : <RacesTable races={races} />}
		</div>
	);
};

export default Dashboard;
