import { IRacesContext } from '@/context/races-manager/races-context-types';
import React from 'react';

export const RacesContext = React.createContext<IRacesContext>({
	isLoading: true,
	bets: {},
	placeBet(){
		throw 'RacesContext is missing';
	}
});