import React, { FC, useState } from 'react';

import Navigation from './Navigation/Navigation';
import MobileNavigation from './Navigation/MobileNavigation';

import { useViewport } from '../../../hooks/useViewport';

export interface INavBar {}

const NavBar: FC<INavBar> = () => {
	const { width } = useViewport();
	const breakpoint = 850;

	return width < breakpoint ? <MobileNavigation /> : <Navigation />;
};

export default NavBar;
