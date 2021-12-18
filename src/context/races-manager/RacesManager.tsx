import React, { useMemo, useState } from 'react';
import useAppRequest from '@/hooks/use-app-request';
import { TRace } from '@/types/races';
import { TParticipant } from '@/types/participants';
import { RacesContext } from '@/context/races-manager/races-context';
import { getRacesWithParticipants } from '@/context/races-manager/racesManagerUtils';
import { TBet } from '@/types/bets';


const RacesManager: React.FC = ({ children }) => {
	const [bets, setBets] = useState<Record<number, TBet>>({});

	const { data: races, loading: isRacesLoading } = useAppRequest<TRace[]>({
		url: 'https://my-json-server.typicode.com/hdjfye/bet-api/races',
	});
	const { data: participants, loading: isParticipantsLoading } = useAppRequest<TParticipant[]>({
		url: 'https://my-json-server.typicode.com/hdjfye/bet-api/participants',
	});

	const racesWithParticipants = useMemo(()=>getRacesWithParticipants(races, participants), [races, participants]);

	const placeBet = (bet: TBet)=> {
		setBets((prevState => ({ ...prevState, [bet.raceId]: bet })));
	};

	return <RacesContext.Provider value={{
		races, participants, racesWithParticipants, isLoading: isRacesLoading && isParticipantsLoading, placeBet, bets
	}}>{children}</RacesContext.Provider>;
};

export default RacesManager;