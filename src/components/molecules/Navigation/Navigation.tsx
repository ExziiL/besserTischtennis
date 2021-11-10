import React, { FC } from 'react';

export interface INavigation {}

const Navigation: FC<INavigation> = () => {
	return (
		<nav className="flex">
			<ul className="flex">
				<li>Startseite</li>
				<li>Über Mich</li>
				<li>Lehrgänge</li>
				<li>Blog</li>
				<li>Kontakt</li>
			</ul>
		</nav>
	);
};

export default Navigation;
