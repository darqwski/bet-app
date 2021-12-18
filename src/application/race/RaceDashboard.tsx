import React, { useContext } from 'react';
import { RacesContext } from '@/context/races-manager/races-context';
import ParticipantRow from '@/application/race/ParticipantRow';
import FormDataManager from '@/context/form-data-manager';
import { useFormDataContext } from '@/context/form-data-manager/context';
import { FormInput } from '@/components/forms';
import { TBet } from '@/types/bets';
import { TRace, TRaceWithParticipants } from '@/types/races';
import Loading from '@/components/loading/Loading';
import { useHistory } from 'react-router-dom';

export interface IRaceDashboard {
	match: {
		params: {
			raceId: string
		}
	}
}

const RaceDashboard: React.FC<{ currentRace?: TRaceWithParticipants }> = ({ currentRace }) => {
	const { placeBet } = useContext(RacesContext);
	const history = useHistory();
	const { formData: { firstPlace, secondPlace, thirdPlace, betAmount } } = useFormDataContext();
	const isBetAmountEnabled = firstPlace !== undefined && secondPlace !== undefined && thirdPlace !== undefined;
	const isPlacingBetEnabled = isBetAmountEnabled && betAmount !== undefined;

	const submitBet = () => {
		if(!firstPlace || !isPlacingBetEnabled){
			return;
		}

		const bet = { firstPlace, secondPlace, thirdPlace, betAmount, raceId: currentRace?.id } as TBet;

		placeBet(bet);

		history.push("../../")

	};

	return currentRace ? (
		<div>
			<div>
				<div>{currentRace.name}</div>
				<table>
					<thead>
						<tr>
							<th>Participant name</th>
							<th>Winner</th>
							<th>2nd place</th>
							<th>3rd place</th>
						</tr>
					</thead>
					<tbody>
						{currentRace.participants.map((participant)=>(
							<ParticipantRow participant={participant} key={`ParticipantRow-${participant.id}`} />
						))}
					</tbody>
				</table>
				{isBetAmountEnabled && <FormInput name="betAmount" type="number" label="Place your bet" />}
				{isPlacingBetEnabled && <button onClick={submitBet} > Place a bet </button>}
			</div>
		</div>
	): (
		<div>Race does not exist</div>
	) ;
};

const RaceDashboardWithForm = (props: IRaceDashboard)=> {
	const { bets, racesWithParticipants } = useContext(RacesContext)
	const { match: { params: { raceId } } } = props;
	const currentRace = racesWithParticipants && racesWithParticipants.find(({ id })=>raceId === `${id}`);

	return (
		<FormDataManager initialData={currentRace && bets[currentRace?.id] || {}}>
			{racesWithParticipants?.length ? <RaceDashboard currentRace={currentRace} /> : <Loading />}
		</FormDataManager>
	);
}

export default RaceDashboardWithForm;