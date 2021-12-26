import React from 'react';

import NavBar from './components/sections/NavBar/NavBar';
import Header from './components/sections/Header/Header';
import DasBinIch from './components/sections/DasBinIch/DasBinIch';
import Service from './components/sections/Service/Service';
import Erstgespräch from './components/sections/Erstgespräch/Erstgespräch';
import Reviews from './components/sections/Reviews/Reviews';
import FAQ from './components/sections/FAQ/FAQ';
import Footer from './components/sections/Footer/Footer';

import { useViewport } from './hooks/useViewport';

function App() {
	const { width } = useViewport();
	const breakpoint = 640;

	return (
		<div className="max-w-[1280px] mx-auto 2xl:px-0">
			<NavBar navPoints={[]} />
			<Header />
			<DasBinIch />
			<Service />
			<Erstgespräch />
			<Reviews />
			<FAQ />
			<Footer />
		</div>
	);
}

export default App;
