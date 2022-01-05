import React from 'react';

import Header from '../../components/sections/Header/Header';
import DasBinIch from '../../components/sections/DasBinIch/DasBinIch';
import Service from '../../components/sections/Service/Service';
import Erstgespräch from '../../components/sections/Erstgespräch/Erstgespräch';
import Reviews from '../../components/sections/Reviews/Reviews';
import FAQ from '../../components/sections/FAQ/FAQ';

const LandingPage = () => {
	return (
		<div>
			<Header />
			<DasBinIch />
			<Service />
			<Erstgespräch />
			<Reviews />
			<FAQ />
		</div>
	);
};

export default LandingPage;
