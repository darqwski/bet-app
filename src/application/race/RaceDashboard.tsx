import React, { useContext } from 'react';
import { RacesContext } from '@/context/races-manager/races-context';
import ParticipantRow from '@/application/race/ParticipantRow';
import FormDataManager from '@/context/form-data-manager';
import { useFormDataContext } from '@/context/form-data-manager/context';
import FormInput from '@/components/forms/form-input';
import { TBet } from '@/types/bets';
import { TRace, TRaceWithParticipants } from '@/types/races';
import Loading from '@/components/loading/Loading';
import { useHistory } from 'react-router-dom';
import './race-dashboard.less';
import { useTranslation } from 'react-i18next';

export interface IRaceDashboard {
	match: {
		params: {
			raceId: string
		}
	}
}

const RaceDashboard: React.FC<{ currentRace?: TRaceWithParticipants }> = ({ currentRace }) => {
	const { placeBet } = useContext(RacesContext);
	const { t } = useTranslation()
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
		<div className="race-dashboard">
			<h4 className="race-dashboard__race-name">{currentRace.name}</h4>
			<p className="race-dashboard__step">
				1. {t("Select participants")}
			</p>
			<table className="race-dashboard__races">
				<thead>
					<tr>
						<th>{t("Participant name")}</th>
						<th>{t("Winner")}</th>
						<th>{t("Second place")}</th>
						<th>{t("Third place")}</th>
					</tr>
				</thead>
				<tbody>
					{currentRace.participants.map((participant)=>(
						<ParticipantRow participant={participant} key={`ParticipantRow-${participant.id}`} />
					))}
				</tbody>
			</table>

			{isBetAmountEnabled && (
				<>
					<p className="race-dashboard__step">
						2. {t("Put bet amount")}
					</p>

					<div className={`race-dashboard__bet-amount`}>
						<FormInput disabled={isBetAmountEnabled ? undefined : true} name="betAmount" type="number" label="Place your bet" />
					</div>
				</>
			)}

			{isPlacingBetEnabled && (
				<>
					<p className="race-dashboard__step">
						3. {t("Place bet")}
					</p>
					<div className={`race-dashboard__submit`}>
						<a className='link' onClick={submitBet}> {t(" Place a bet")} </a>
					</div>
				</>
			)}
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