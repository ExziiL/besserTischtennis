import React, { FC } from 'react';
import NavLink from './NavLink';
import { navLinks } from './navLinks';
import './Navigation.scss';

import FullPageWidthWrapper from '../../../utils/FullPageWidthWrapper';
import Image from '../../../atoms/Image/Image';
import logo from '../../../../css/pictures/logo.png';

export interface INavigation {
	navLinkId?: string;
	scrollToId?: string;
}

const Navigation: FC<INavigation> = () => {
	return (
		<FullPageWidthWrapper className="relative">
			<nav className="flex items-center justify-center h-20 px-6 shadow-md">
				<div className="w-[1280px] flex justify-between items-center xl:px-4">
					{/* <h1 className="text-3xl">besserTischtennis</h1> */}
					<div className="h-20">
						<Image src={logo} className="h-full py-2" />
					</div>
					<ul className="flex items-center justify-end h-full pt-1 space-x-6 font-medium">
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
