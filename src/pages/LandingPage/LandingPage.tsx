import React, { FC } from 'react';

import Hero from '../../components/sections/Hero/Hero';
import AboutMe from '../../components/sections/DasBinIch/AboutMe';
import Service from '../../components/sections/Service/Service';
import Erstgespräch from '../../components/sections/Erstgespräch/Erstgespräch';
import Reviews from '../../components/sections/Reviews/Reviews';
import FAQ from '../../components/sections/FAQ/FAQ';

export interface ILandingPage {}

const LandingPage: FC<ILandingPage> = () => {
	return (
		<div className="">
			<Hero idName="heroSection" />
			<AboutMe idName="aboutMeSection" />
			<div className="xl:shadow-2xl">
				<Service idName="servicesSection" />
				<Erstgespräch idName="erstgespraechSection" />
				<Reviews idName="reviewSection" />
				<FAQ idName="faqSection" />
			</div>
		</div>
	);
};

export default LandingPage;
