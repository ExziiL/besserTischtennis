import React, { FC } from 'react';

import ServiceField from './ServiceField';
import tTSchläger from '../../../css/icons/table-tennis-solid.svg';
import user from '../../../css/icons/user-solid.svg';
import users from '../../../css/icons/users-solid.svg';
import food from '../../../css/icons/utensils-solid.svg';
import dumbbell from '../../../css/icons/dumbbell-solid.svg';
import chalkboardTeacher from '../../../css/icons/chalkboard-teacher-solid.svg';
import chartLine from '../../../css/icons/chart-line-solid.svg';

export interface IService {}

const Service: FC<IService> = () => {
	return (
		<div className="bg-[#F2F2F2] py-12 lg:py-20 px-0 md:px-10 lg:px-24 xl:px-36 xl:shadow-2xl">
			<div className="flex flex-col items-center justify-center w-full px-4 text-center">
				<h1 className="px-4 text-xl font-medium">Unser Service</h1>
				<h2 className="pt-4 pb-6 sm:pb-12 text-5xl font-semibold md:w-[600px]">Wir bieten Ihnen zahlreiche Services an</h2>
			</div>
			<section className="grid grid-cols-2 gap-2 p-4 sm:grid-cols-3">
				<ServiceField header="Einzeltraining" icon={user} />
				<ServiceField header="Gruppentraining" icon={users} />
				<ServiceField header="Vereinslehrgänge" icon={chalkboardTeacher} />
				<ServiceField header="Individuelle Trainingspläne" icon={dumbbell} />
				<ServiceField header="Fitness- und Ernährungspläne" icon={food} />
				{/* Den Punkt unter dem Kommentar habe ich raus genommen um auf eine gerade Anzahl zu kommen und da es eigentlich das selbe aussagt wie Vereinslehrgänge? oder nicht?  */}
				{/* <ServiceField header="BesserTischtennis Lehrgänge" icon={chartLine} /> */}
				<ServiceField header="Materialberatung" icon={tTSchläger} />
			</section>
		</div>
	);
};

export default Service;
