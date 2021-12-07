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
		<div className="bg-[#F2F2F2]">
			<div className="px-4 text-center">
				<h1 className="px-4 pt-4 text-xl font-medium">Unser Service</h1>
				<h2 className="py-2 text-3xl font-semibold">Wir bieten Ihnen zahlreiche Services an</h2>
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
