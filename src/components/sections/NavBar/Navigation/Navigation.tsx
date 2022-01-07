import React, { FC } from 'react';
import NavLink from './NavLink';
import { navLinks } from './navLinks';
import './Navigation.scss';

import FullPageWidthWrapper from '../../../utils/FullPageWidthWrapper';

export interface INavigation {
	navLinkId?: string;
	scrollToId?: string;
}

const Navigation: FC<INavigation> = () => {
	return (
		<FullPageWidthWrapper className="relative">
			<nav className="flex items-center justify-center h-20 px-4 shadow-md">
				<div className="w-[1280px] flex justify-between items-center">
					<h1 className="text-3xl">besserTischtennis</h1>
					<ul className="flex items-center justify-end h-full pt-2 space-x-6 font-medium">
						{navLinks.map(({ navLinkId, scrollToId }, index) => (
							<NavLink key={index} navLinkId={navLinkId} scrollToId={scrollToId} />
						))}
					</ul>
				</div>
			</nav>
		</FullPageWidthWrapper>
	);
};

export default Navigation;
