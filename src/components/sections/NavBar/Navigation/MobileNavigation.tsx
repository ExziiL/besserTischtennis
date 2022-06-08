import React, { FC, useState } from 'react';
import { useNavigate, useLocation } from 'react-router';

import { useTransition, animated } from 'react-spring';

import Svg from '../../../atoms/Svg/Svg';
import hamburgerSVG from '../../../../css/icons/menu-burger.svg';
import cross from '../../../../css/icons/cross.svg';
import Image from '../../../atoms/Image/Image';
import logo from '../../../../css/pictures/LogoNeu.jpg';
import ShopButton from '../../../atoms/Button/ShopButton';

import { Twirl as Hamburger } from 'hamburger-react';

import NavLink from './NavLink';
import { navLinks } from './navLinks';
import './Navigation.scss';
import css from './MobileNavigation.module.scss';
import Announcementbanner from './Announcementbanner';

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
			return navLinks.map(({ navLinkId, scrollToId }, index) => <NavLink key={index} navLinkId={navLinkId} scrollToId={scrollToId} className="pl-2 cursor-pointer hover:bg-gray-100 hover:rounded-md" onClickProp={closeNavBar} />);
		} else {
			return (
				<span
					className="hover:opacity-60"
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

	const menuTransition = useTransition(isOpen, {
		from: { opacity: 0, transform: 'translateX(-100%)' },
		enter: { opacity: 1, transform: 'translateX(0%)' },
		leave: { opacity: 0, transform: 'translateX(-100%)' },
	});

	const handleClick = () => {
		window.open('http://shop-bessertischtennis.de');
	};

	if (isOpen) {
		menu = menuTransition(
			(styles, item) =>
				item && (
					<div className={`${css.menuAnimation} fixed top-0 z-50 w-4/5 h-full bg-white shadow-md sm:w-3/5`}>
						<animated.div style={styles} className="flex flex-col justify-between h-full px-8 py-4 pb-14">
							<div className="">
								<Image src={logo} className="h-16 cursor-pointer" />
							</div>
							{/* <Image src={logo} className="h-16 py-2 cursor-pointer" onClick={handleClickOnIcon} /> */}
							<div className="flex flex-col ">
								<div className="flex flex-col text-3xl leading-loose divide-y">{selectedNavLinks()}</div>
							</div>
							<div className="">
								<ShopButton name="Zum Shop" onClick={handleClick} />
							</div>
						</animated.div>
					</div>
				)
		);

		menuMask = <div className={`${css.maskBackground} fixed left-0 z-40 w-full h-full`} onClick={() => setIsOpen(false)}></div>;
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
		<div className={`${css.root} fixed top-0 z-30 w-full`}>
			<div className="flex flex-row-reverse items-center justify-between h-16 p-6 pl-4 bg-white border-b shadow">
				<Hamburger toggle={() => setIsOpen(!isOpen)} toggled={isOpen} rounded label="Show menu" direction="right" duration={0.6} />
				<Image src={logo} className="h-16 py-2 cursor-pointer" onClick={handleClickOnIcon} />
			</div>
			<div className="">
				{menuMask}
				{menu}
			</div>
			<Announcementbanner />
		</div>
	);
};

export default MobileNavigation;
