import React, { FC } from 'react';

export interface INavigation {}

const Navigation: FC<INavigation> = () => {
	return (
		<div className="">
			<ul className="flex space-x-6">
				<li>
					<a href="#">Startseite</a>
				</li>
				<li>
					<a href="#">Über Mich</a>
				</li>
				<li>
					<a href="#">Lehrgänge</a>
				</li>
				<li>
					<a href="#">Blog</a>
				</li>
				<li>
					<a href="#">Kontakt</a>
				</li>
			</ul>
		</div>
	);
};

export default Navigation;
