import React, { FC, useState } from 'react';

import Navigation from './Navigation/Navigation';
import MobileNavigation from './Navigation/MobileNavigation';

import { useViewport } from '../../../hooks/useViewport';

export interface INavBar {
	navPoints: string[];
}

const NavBar: FC<INavBar> = () => {
	const navPoints = ['Startseite', 'Über mich', 'Lehrgänge', 'Blog', 'Kontakt'];

	const { width } = useViewport();
	const breakpoint = 640;

	return <nav className="">{width < breakpoint ? <MobileNavigation navPoints={navPoints} /> : <Navigation />}</nav>;
};

export default NavBar;
