import { TParticipant } from '@/types/participants';

export type TRaceBasic = {
    id: number,
    name: string,
    active: boolean,
}

export type TRace = TRaceBasic & {
    participants: number[]
}

export type TRaceWithParticipants = TRaceBasic &  {
    participants: TParticipant[]
}