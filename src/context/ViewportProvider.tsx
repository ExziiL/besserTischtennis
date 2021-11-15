import React, { useState, useContext, useEffect, FC } from 'react';

export const viewportContext = React.createContext({});

interface IViewportProvider {
	children: any;
}

export const ViewportProvider: FC<IViewportProvider> = ({ children }) => {
	const [width, setWidth] = useState(window.innerWidth);
	const [height, setHeight] = useState(window.innerHeight);

	const handleWindowResize = () => {
		setWidth(window.innerWidth);
		setHeight(window.innerHeight);
	};

	useEffect(() => {
		window.addEventListener('resize', handleWindowResize);
		return () => window.removeEventListener('resize', handleWindowResize);
	}, []);

	return <viewportContext.Provider value={{ width, height }}>{children}</viewportContext.Provider>;
};
