import React, { FC } from 'react';

import Navigation from '../../../components/molecules/Navigation/Navigation';

export interface INavBar {
	// data: any;
}

const NavBar: FC<INavBar> = () => {
	return (
		<div className="flex">
			<div className="">LOGO</div>
			<Navigation />
		</div>
	);
};

export default NavBar;
