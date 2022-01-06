import React, { useState, FC } from 'react';

export const NavContext = React.createContext({});

interface Props {
	children: React.ReactNode[];
}

const NavProvider: FC<Props> = ({ children }) => {
	const [activeNavLinkId, setActiveNavLinkId] = useState('');

	const providerValue = {
		activeNavLinkId,
		setActiveNavLinkId,
	};

	return <NavContext.Provider value={providerValue}>{children}</NavContext.Provider>;
};

export default NavProvider;
