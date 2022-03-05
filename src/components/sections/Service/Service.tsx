import React, { FC } from 'react';

import { useNavigation } from '../../../hooks/useNavigation';

import ServiceField from './ServiceField';
import tTSchläger from '../../../css/icons/table-tennis-solid.svg';
import user from '../../../css/icons/user-solid.svg';
import users from '../../../css/icons/users-solid.svg';
import food from '../../../css/icons/utensils-solid.svg';
import dumbbell from '../../../css/icons/dumbbell-solid.svg';
import chalkboardTeacher from '../../../css/icons/chalkboard-teacher-solid.svg';

import FlipCard from './FlipCard';
import './FlipCard.scss';

export interface IService {
	idName?: string;
}

const Service: FC<IService> = ({ idName }) => {
	const serviceRef = useNavigation(idName);

	const lehrgängeFront = <ServiceField header="Lehrgänge und Vereinstraining" icon={users} />;
	const einzeltrainingFront = <ServiceField header="Einzeltraining" icon={user} />;
	const trainingsplanFront = <ServiceField header="Individuelle Trainingspläne" icon={tTSchläger} />;
	const ernährungsplanFront = <ServiceField className="sm:col-span-3" header="Fitness- und Ernährungspläne" icon={food} />;

	const cards = [
		{
			id: '1',
			variant: 'click',
			front: lehrgängeFront,
			back: 'Back',
		},
		{
			id: '2',
			variant: 'click',
			front: einzeltrainingFront,
			back: 'Back',
		},
		{
			id: '3',
			variant: 'click',
			front: trainingsplanFront,
			back: 'Back',
		},
		{
			id: '4',
			variant: 'click',
			front: ernährungsplanFront,
			back: 'Back',
		},
	];

	return (
		<div ref={serviceRef} className="bg-[#F2F2F2] py-12 lg:py-20 px-0 md:px-10 lg:px-24 xl:px-36 scroll-mt-6" id={idName}>
			<div className="flex flex-col items-center justify-center w-full px-4 text-center">
				<h1 className="px-4 text-xl font-medium">Unser Service</h1>
				<h2 className="pt-4 pb-6 sm:pb-10 text-5xl font-semibold md:w-[600px]">Wir bieten Ihnen zahlreiche Services an</h2>
			</div>
			<section className="grid grid-cols-2 gap-2 p-4 sm:grid-cols-8">
				<FlipCard key={cards[0].id} card={cards[0]} className="sm:col-span-3 sm:col-start-2" />
				<FlipCard key={cards[1].id} card={cards[1]} className="sm:col-span-3" />
				<FlipCard key={cards[2].id} card={cards[2]} className="sm:col-span-3 sm:col-start-2" />
				<FlipCard key={cards[3].id} card={cards[3]} className="sm:col-span-3" />
			</section>
		</div>
	);
};

export default Service;
