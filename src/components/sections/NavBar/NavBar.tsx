import React, { FC } from 'react';

import Navigation from './Navigation/Navigation';

export interface INavBar {
	// data: any;
}

const NavBar: FC<INavBar> = () => {
	return (
		<div className="flex justify-between">
			<div className="">LOGO</div>
			<Navigation />
		</div>
	);
};

export default NavBar;
