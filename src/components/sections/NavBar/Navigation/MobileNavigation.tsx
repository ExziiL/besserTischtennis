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

	return (
		<div className="fixed bottom-0 z-50 w-full">
			<div className={`ease-out duration-200 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
				{isOpen ? (
					<ul className="">
						<div className="p-10 text-xl bg-white border-2 shadow-t-2xl">
							{/* {navPoints.map((navPoint, index) => (
							<p key={index} className="p-10 text-xl bg-gray-300 ">
								<a href="#" className="">
									{navPoint}
								</a>
							</p>
						))} */}
							{navLinks.map(({ navLinkId, scrollToId }, index) => (
								<NavLink key={index} navLinkId={navLinkId} scrollToId={scrollToId} />
							))}
						</div>
					</ul>
				) : null}
			</div>
			<div className="flex flex-row-reverse items-center w-full h-16 p-6 bg-white shadow-2xl">
				<Svg icon={!isOpen ? hamburgerSVG : cross} width={2} onClick={() => setIsOpen(!isOpen)} />
			</div>
		</div>
	);
};

export default MobileNavigation;
