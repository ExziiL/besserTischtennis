import React, { FC } from 'react';

import { useNavigation } from '../../../hooks/useNavigation';

import ServiceFieldFront from './ServiceFieldFront';
import ServiceFieldBack from './ServiceFieldBack';
import tTSchläger from '../../../css/icons/table-tennis-solid.svg';
import user from '../../../css/icons/user-solid.svg';
import users from '../../../css/icons/users-solid.svg';
import food from '../../../css/icons/utensils-solid.svg';
import dumbbell from '../../../css/icons/dumbbell-solid.svg';
import chalkboardTeacher from '../../../css/icons/chalkboard-teacher-solid.svg';
import css from './Service.module.scss';

import FlipCard from './FlipCard';
import './FlipCard.scss';

export interface IService {
	idName?: string;
}

const Service: FC<IService> = ({ idName }) => {
	const serviceRef = useNavigation(idName);

	const rueckseitenDaten = [
		{
			title: 'Das Beste, um Impulse für dein wöchentliches Training zu erhalten',
			listItems: ['Mehrere intensive Trainingseinheiten', 'Individuelles Balleimertraining', 'Workshops über ganzheitliche Themen im Tennis', 'Inklusive Mittagessen, Snacks und Getränke', 'Für Vereine: Exklusive Lehrgänge nach eueren Wünschen'],
		},
		{
			title: 'Das intensivste Programm, um deine Ziele zu erreichen',
			listItems: ['Dauerhafte und persönliche 1 zu 1 Betreuung mit einem unserer Trainer', 'Unterstützung in allen Fachbereichen, die du benötigst!', 'Im Hallen- und Onlinebetrieb möglich', 'Gemeinsame Videoanalyse für eine detailierte Verbesserung deiner Technik'],
		},
		{
			title: 'Professionelle Trainingsplanung für kleines Geld',
			listItems: ['Monatliche und individuelle Trainingspläne', 'Inklusive Vorbesprechung für individuelle Trainingsziele', 'Trainingsspezifische Tipps für deine Übungen', 'Erweiterbar mit Inhalten aus den Bereichen Taktik, Mentalstärke, Fitness und Ernährung'],
		},
		{
			title: 'Profitiere von dem, was deine Gegner unterschätzen',
			listItems: ['Auf dich und deine Ziele angepasste FItnesspläne', 'Ernährungspläne für mehr Konzentration und Kraft im Sport', 'Inklusive Vor- und Nachbesprechung', 'Kontinuierliche Unterstützung bei Fragen und Unklarheiten'],
		},
	];

	const lehrgaengeFront = <ServiceFieldFront header="Lehrgänge und Vereinstraining" icon={users} />;
	const lehrgaengeBack = <ServiceFieldBack className="md:col-span-3" title={rueckseitenDaten[0].title} listItems={rueckseitenDaten[0].listItems} />;

	const einzeltrainingFront = <ServiceFieldFront header="Einzeltraining" icon={user} />;
	const EinzeltrainingBack = <ServiceFieldBack className="md:col-span-3" title={rueckseitenDaten[1].title} listItems={rueckseitenDaten[1].listItems} />;

	const trainingsplanFront = <ServiceFieldFront header="Individuelle Trainingspläne" icon={tTSchläger} />;
	const trainingsplanBack = <ServiceFieldBack className="md:col-span-3" title={rueckseitenDaten[2].title} listItems={rueckseitenDaten[2].listItems} />;

	const ernaehrungsplanFront = <ServiceFieldFront className="sm:col-span-3" header="Fitness- und Ernährungspläne" icon={food} />;
	const ernaehrungsplanBack = <ServiceFieldBack className="md:col-span-3" title={rueckseitenDaten[3].title} listItems={rueckseitenDaten[3].listItems} />;

	const cards = [
		{
			id: '1',
			variant: 'click',
			front: lehrgaengeFront,
			back: lehrgaengeBack,
		},
		{
			id: '2',
			variant: 'click',
			front: einzeltrainingFront,
			back: EinzeltrainingBack,
		},
		{
			id: '3',
			variant: 'click',
			front: trainingsplanFront,
			back: trainingsplanBack,
		},
		{
			id: '4',
			variant: 'click',
			front: ernaehrungsplanFront,
			back: ernaehrungsplanBack,
		},
	];

	return (
		<div ref={serviceRef} className={`${css.root} bg-[#F2F2F2] py-12 lg:py-20 px-0 md:px-10 lg:px-24 xl:px-36 scroll-mt-6`} id={idName}>
			<div className="flex flex-col items-center justify-center w-full px-4 text-center">
				<h1 className="px-4 text-xl font-medium">Unser Service</h1>
				<h2 className="pt-4 pb-6 sm:pb-10 text-5xl font-semibold md:w-[600px]">Wir bieten Ihnen zahlreiche Services an</h2>
			</div>
			<section className={`${css.serviceCard} grid grid-cols-1 gap-2 p-4 md:grid-cols-8`}>
				<FlipCard key={cards[0].id} card={cards[0]} className="md:col-span-3 md:col-start-2" />
				<FlipCard key={cards[1].id} card={cards[1]} className="md:col-span-3" />
				<FlipCard key={cards[2].id} card={cards[2]} className="md:col-span-3 md:col-start-2" />
				<FlipCard key={cards[3].id} card={cards[3]} className="md:col-span-3" />
			</section>
		</div>
	);
};

export default Service;
