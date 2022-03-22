import React, { FC, useState } from 'react';
import { useNavigate, useLocation } from 'react-router';

import Svg from '../../../atoms/Svg/Svg';
import hamburgerSVG from '../../../../css/icons/menu-burger.svg';
import cross from '../../../../css/icons/cross.svg';
import Image from '../../../atoms/Image/Image';
import logo from '../../../../css/pictures/LogoNeu.jpg';

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

	const location = useLocation();
	let navigate = useNavigate();

	const selectedNavLinks = () => {
		if (location.pathname == '/') {
			return navLinks.map(({ navLinkId, scrollToId }, index) => <NavLink key={index} navLinkId={navLinkId} scrollToId={scrollToId} className="cursor-pointer" onClickProp={closeNavBar} />);
		} else {
			return (
				<span
					className="text-center"
					onClick={() => {
						closeNavBar();
						navigate('/');
					}}
				>
					<div>Zur Startseite</div>
				</span>
			);
		}
	};

	if (isOpen) {
		menu = (
			<div className="fixed top-0 z-50 flex flex-col justify-center w-4/5 h-full bg-white shadow-md sm:w-3/5">
				<div className="">
					<div className="flex flex-col px-8 py-4 text-3xl leading-loose divide-y">{selectedNavLinks()}</div>
				</div>
			</div>
		);

		menuMask = <div className="fixed left-0 z-40 w-full h-full bg-black opacity-60" onClick={() => setIsOpen(false)}></div>;
	}

	const handleClickOnIcon = () => {
		if (location.pathname !== '/') {
			navigate('/');
			window.scrollTo({
				top: 0,
				left: 0,
				// behavior: 'smooth',
			});
		} else {
			document.getElementById('heroSection')!.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<div className="fixed top-0 z-30 w-full">
			<div className="flex flex-row-reverse items-center justify-between h-16 p-6 pl-4 bg-white border-b shadow">
				<Svg className="cursor-pointer" icon={!isOpen ? hamburgerSVG : cross} width={2} onClick={() => setIsOpen(!isOpen)} />
				<Image src={logo} className="h-16 py-2 cursor-pointer" onClick={handleClickOnIcon} />
			</div>
			<div className="">
				{menuMask}
				{menu}
			</div>
		</div>
	);
};

export default MobileNavigation;
