import React, { useContext, FC } from 'react';
// import { NavContext } from '../../../../context/NavContext';

export interface INavLink {
	navLinkId: string;
	scrollToId: string;
	activeNavLinkId?: string;
	setActiveNavLinkId?: any;
}

const NavLink: FC<INavLink> = ({ navLinkId, scrollToId }) => {
	// const { activeNavLinkId, setActiveNavLinkId } = useContext(NavContext);

	const handleClick = () => {
		// setActiveNavLinkId(navLinkId);
		document.getElementById(scrollToId)!.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		// <span id={navLinkId} className={activeNavLinkId === navLinkId ? 'activeClass' : ''} onClick={handleClick}>
		<span id={navLinkId} onClick={handleClick}>
			{navLinkId}
		</span>
	);
};

export default NavLink;
