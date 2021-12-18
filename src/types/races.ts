import { TParticipants } from '@/types/participants';

export type TRace = {
    id: number,
    name: string,
    active: boolean,
    participants: number
}

export type TRaceWithParticipants = TRace & {
    participants: TParticipants[]
}