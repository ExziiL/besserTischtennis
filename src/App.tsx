import React from 'react';

import NavBar from './components/sections/NavBar/NavBar';
import Header from './components/sections/Header/Header';
import DasBinIch from './components/sections/DasBinIch/DasBinIch';

import { useViewport } from './hooks/useViewport';

function App() {
	const { width } = useViewport();
	const breakpoint = 640;

	return (
		<div className="max-w-[1280px] mx-auto">
			<NavBar navPoints={[]} />
			{width > breakpoint ? <Header /> : null}
			<DasBinIch />
		</div>
	);
}

export default App;
