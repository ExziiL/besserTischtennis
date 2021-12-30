import React, { FC } from 'react';
import './Navigation.scss';

export interface INavigation {
	navPoints: string[];
}

const Navigation: FC<INavigation> = ({ navPoints }) => {
	return (
		<div className="flex items-center justify-between h-20 px-4">
			<h1 className="text-3xl">besserTischtennis</h1>
			<ul className="flex items-center justify-end h-full space-x-6 font-medium">
				{navPoints.map((stickpunkt, index) => (
					<li key={index} className="">
						<a href="#" className="">
							{stickpunkt}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Navigation;
