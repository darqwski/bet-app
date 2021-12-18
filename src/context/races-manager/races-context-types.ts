import { TRace, TRaceWithParticipants } from '@/types/races';
import { TParticipant } from '@/types/participants';
import { TBet } from '@/types/bets';

export type IRacesContext = {
    isLoading: boolean;
    races?: TRace[];
    participants?: TParticipant[];
    racesWithParticipants?: TRaceWithParticipants[];
    bets: Record<number, TBet>;
    placeBet: (bet: TBet) => void;
}