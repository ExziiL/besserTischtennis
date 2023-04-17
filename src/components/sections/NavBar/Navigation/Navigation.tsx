import React, { FC, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import NavLink from './NavLink';
import './Navigation.scss';
import { navLinks } from './navLinks';

import logo from '../../../../css/pictures/LogoNeu.jpg';
import Image from '../../../atoms/Image/Image';
import FullPageWidthWrapper from '../../../utils/FullPageWidthWrapper';

import ShopButton from '../../../atoms/Button/ShopButton';
import Announcementbanner from './Announcementbanner';

export interface INavigation {
	navLinkId?: string;
	scrollToId?: string;
}

const Navigation: FC<INavigation> = () => {
	const handleClick = () => {
		window.open('http://shop-bessertischtennis.de');
	};

	const location = useLocation();
	let navigate = useNavigate();
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

	const selectedNavLinks = () => {
		if (location.pathname === '/') {
			return navLinks.map(({ navLinkId, scrollToId }, index) => (
				<NavLink
					key={index}
					navLinkId={navLinkId}
					scrollToId={scrollToId}
				/>
			));
		} else {
			return (
				<span
					className=""
					onClick={() => navigate('/')}
				>
					<div>Startseite</div>
				</span>
			);
		}
	};
	// ! Announcementbanner stickt nicht an Header
	return (
		<FullPageWidthWrapper className="fixed z-30">
			<nav className="fixed top-0 flex items-center justify-center w-screen h-20 px-4 shadow-md">
				<div className="w-[1280px] flex justify-between items-center">
					<div className="h-20">
						<Image
							src={logo}
							className="h-full py-2 cursor-pointer"
							onClick={handleClickOnIcon}
						/>
					</div>
					<ul className="flex items-center justify-end h-full pt-1 space-x-6 font-medium">{selectedNavLinks()}</ul>
					<div>
						<ShopButton
							name="Zum Shop"
							className=""
							onClick={handleClick}
						/>
					</div>
				</div>
			</nav>
			<Announcementbanner />
		</FullPageWidthWrapper>
	);
};

export default Navigation;
