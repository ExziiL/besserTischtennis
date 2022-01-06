import React from 'react';

import Header from '../../components/sections/Hero/Hero';
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
			<div className="xl:shadow-2xl">
				<Service />
				<Erstgespräch />
				<Reviews />
				<FAQ />
			</div>
		</div>
	);
};

export default LandingPage;
