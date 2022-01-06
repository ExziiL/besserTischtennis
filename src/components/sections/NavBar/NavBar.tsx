import React, { FC, useState } from 'react';

import Navigation from './Navigation/Navigation';
import MobileNavigation from './Navigation/MobileNavigation';

import { useViewport } from '../../../hooks/useViewport';

export interface INavBar {
	navPoints: string[];
}

const NavBar: FC<INavBar> = () => {
	const navPoints = ['Startseite', 'Über mich', 'Service', 'Erstgespräch', 'Bewertungen', 'FAQ'];

	const { width } = useViewport();
	const breakpoint = 768;

	return <nav className="">{width < breakpoint ? <MobileNavigation navPoints={navPoints} /> : <Navigation navPoints={navPoints} />}</nav>;
};

export default NavBar;
