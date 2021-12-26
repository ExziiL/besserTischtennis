import React, { FC } from 'react';
import './Navigation.scss';

export interface INavigation {}

const Navigation: FC<INavigation> = () => {
	const stickpunkte = ['Startseite', 'Über Mich', 'Lehrgänge', 'Blog', 'Kontakt'];

	return (
		<div className="flex items-center justify-between h-20 px-4">
			<h1 className="text-3xl">besserTischtennis</h1>
			<ul className="flex items-center justify-end h-full space-x-6 font-medium">
				{stickpunkte.map((stickpunkt, index) => (
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
