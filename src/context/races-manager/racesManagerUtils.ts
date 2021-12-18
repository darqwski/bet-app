import { TRace, TRaceWithParticipants } from '@/types/races';
import { TParticipant } from '@/types/participants';

export const getRacesWithParticipants = (races: TRace[] | undefined, participants: TParticipant[] | undefined): TRaceWithParticipants[] => {
    if(!races || !participants){
        return []
    }

    const participantsMap = participants.reduce((memo, participant)=>({...memo, [participant.id]: participant}), {} as Record<number, TParticipant>);

    return races.map((race)=>({
        ...race,
        participants: race.participants.map(participantId=>participantsMap[participantId])
    })) as TRaceWithParticipants[]
}