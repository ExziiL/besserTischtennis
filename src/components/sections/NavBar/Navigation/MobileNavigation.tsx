import React, { FC, useState } from 'react';

import Svg from '../../../atoms/Svg/Svg';
import hamburgerSVG from '../../../../css/icons/menu-burger.svg';
import cross from '../../../../css/icons/cross.svg';

import NavLink from './NavLink';
import { navLinks } from './navLinks';
import './Navigation.scss';

export interface IMobileNavigation {
	navLinkId?: string;
	scrollToId?: string;
}

const MobileNavigation: FC<IMobileNavigation> = () => {
	const [isOpen, setIsOpen] = useState(false);

	let menu = (
		<ul className="">
			<div className="p-10 text-xl bg-gray-200">
				{navLinks.map(({ navLinkId, scrollToId }, index) => (
					<NavLink key={index} navLinkId={navLinkId} scrollToId={scrollToId} />
				))}
			</div>
		</ul>
	);

	return (
		<div className="fixed bottom-0 z-50 w-full">
			<div className="w-80">{isOpen ? menu : null}</div>
			<div className="flex items-center w-full h-16 p-6 bg-slate-400">
				<Svg className="cursor-pointer" icon={!isOpen ? hamburgerSVG : cross} width={2} onClick={() => setIsOpen(!isOpen)} />
			</div>
		</div>
	);
};

export default MobileNavigation;
