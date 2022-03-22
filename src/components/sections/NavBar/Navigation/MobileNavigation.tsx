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

	let menu;
	let menuMask;

	const closeNavBar = () => {
		// setTimeout(() => {
		setIsOpen(false);
		// }, 150);
	};

	if (isOpen) {
		menu = (
			<div className="fixed top-0 z-50 flex flex-col justify-center w-4/5 h-full bg-white shadow-md sm:w-3/5">
				<div className="">
					<div className="flex flex-col px-8 py-4 text-3xl leading-loose divide-y">
						{navLinks.map(({ navLinkId, scrollToId }, index) => (
							<NavLink key={index} navLinkId={navLinkId} scrollToId={scrollToId} className="cursor-pointer" onClickProp={closeNavBar} />
						))}
					</div>
				</div>
			</div>
		);

		menuMask = <div className="fixed left-0 z-40 w-full h-full bg-black opacity-60" onClick={() => setIsOpen(false)}></div>;
	}

	return (
		<div className="fixed top-0 z-30 w-full">
			<div className="flex flex-row-reverse items-center h-16 p-6 bg-white border-b shadow">
				<Svg className="cursor-pointer" icon={!isOpen ? hamburgerSVG : cross} width={2} onClick={() => setIsOpen(!isOpen)} />
			</div>
			<div className="">
				{menuMask}
				{menu}
			</div>
		</div>
	);
};

export default MobileNavigation;
