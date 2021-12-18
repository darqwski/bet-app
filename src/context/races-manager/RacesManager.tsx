import React from 'react';
import useAppRequest from '@/hooks/use-app-request';
import { TRace } from '@/types/races';
import { TParticipants } from '@/types/participants';
import { RacesContext } from '@/context/races-manager/races-context';


const RacesManager: React.FC = ({ children }) => {
	const { data: races, loading: isRacesLoading } = useAppRequest<TRace[]>({
		url: 'https://my-json-server.typicode.com/hdjfye/bet-api/races',
	});
	const { data: participants, loading: isParticipantsLoading } = useAppRequest<TParticipants[]>({
		url: 'https://my-json-server.typicode.com/hdjfye/bet-api/participants',
	});

	return <RacesContext.Provider value={{
		races, participants, isLoading: isRacesLoading && isParticipantsLoading
	}}>{children}</RacesContext.Provider>;
};

export default RacesManager;