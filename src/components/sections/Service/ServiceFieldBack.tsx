import React, { FC } from 'react';

import Svg from '../../atoms/Svg/Svg';

export interface IServiceFieldBack {
	className?: any;
}

const ServiceFieldBack: FC<IServiceFieldBack> = ({ className }) => {
	return (
		<div className={`${className} flex flex-col p-2 h-48 space-y-3 bg-white shadow-md sm:h-60`}>
			<h1 className="text-sm font-medium leading-4">Das Beste, um Impulse für dein wöchentliches Training zu erhalten</h1>
			<div>
				<ul className="text-xs leading-6">
					<li>Mehrere intensive Trainingseinheiten</li>
					<li>Individuelles Balleimertraining</li>
					<li>Workshops über ganzheitliche Themen im Tennis</li>
					<li>Inklusive Mittagessen, Snachs und Getränke</li>
					<li>Für Vereine: Exklusive Lehrgänge nach Euren Wünschen</li>
				</ul>
			</div>
		</div>
	);
};

export default ServiceFieldBack;
