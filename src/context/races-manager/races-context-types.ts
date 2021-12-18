import { TRace, TRaceWithParticipants } from '@/types/races';
import { TParticipants } from '@/types/participants';

export type IRacesContext = {
    isLoading: boolean;
    races?: TRace[];
    participants?: TParticipants[];
    racesWithParticipants?: TRaceWithParticipants[];
}