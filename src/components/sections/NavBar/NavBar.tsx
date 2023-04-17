import React, { FC, useState } from 'react';

import MobileNavigation from './Navigation/MobileNavigation';
import Navigation from './Navigation/Navigation';

import Announcementbanner from './Navigation/Announcementbanner';

import { useViewport } from '../../../hooks/useViewport';

export interface INavBar {}

const NavBar: FC<INavBar> = () => {
	const { width } = useViewport();
	const breakpoint = 850;

	return <div className="relative mt-20">{width < breakpoint ? <MobileNavigation /> : <Navigation />}</div>;
};

export default NavBar;
