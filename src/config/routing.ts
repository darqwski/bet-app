import RacesDashboard from '../application/dashboard/RacesDashboard';
import RaceDashboard from '@/application/race/RaceDashboard';

export default [
	{
		path: '/',
		component: RacesDashboard,
	},
	{
		path: '/races/:raceId',
		component: RaceDashboard,
	}
];
