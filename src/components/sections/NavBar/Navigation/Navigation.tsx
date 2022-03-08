import React, { FC } from 'react';
import NavLink from './NavLink';
import { navLinks } from './navLinks';
import './Navigation.scss';

import FullPageWidthWrapper from '../../../utils/FullPageWidthWrapper';
import Image from '../../../atoms/Image/Image';
import logo from '../../../../css/pictures/LogoNeu.jpg';

import ShopButton from '../../../atoms/Button/ShopButton';

export interface INavigation {
	navLinkId?: string;
	scrollToId?: string;
}

const Navigation: FC<INavigation> = () => {
	const handleClick = () => {
		window.open('http://shop-bessertischtennis.de');
	};

	return (
		<FullPageWidthWrapper className="relative">
			<nav className="flex items-center justify-center h-20 px-6 shadow-md">
				<div className="w-[1280px] flex justify-between items-center xl:px-4">
					<div className="h-20">
						<Image src={logo} className="h-full py-2" />
					</div>
					<ul className="flex items-center justify-end h-full pt-1 space-x-6 font-medium">
						{navLinks.map(({ navLinkId, scrollToId }, index) => (
							<NavLink key={index} navLinkId={navLinkId} scrollToId={scrollToId} />
						))}
					</ul>
					<div>
						<ShopButton name="Zum Shop" className="" onClick={handleClick} />
					</div>
				</div>
			</nav>
		</FullPageWidthWrapper>
	);
};

export default Navigation;
