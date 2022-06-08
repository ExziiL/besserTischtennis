import React, { FC } from 'react';

import Hero from '../../components/sections/Hero/Hero';
import AboutMe from '../../components/sections/DasBinIch/AboutMe';
import Service from '../../components/sections/Service/Service';
import Erstgespräch from '../../components/sections/Erstgespräch/Erstgespräch';
import Reviews from '../../components/sections/Reviews/Reviews';
import FAQ from '../../components/sections/FAQ/FAQ';
import Announcement from '../../components/sections/Announcement/Announcement';
import Footer from '../../components/sections/Footer/Footer';

export interface ILandingPage {}

const LandingPage: FC<ILandingPage> = () => {
	return (
		<div className="">
			<Hero idName="heroSection" />
			<Announcement idName="announcementSection" />
			<AboutMe idName="aboutMeSection" />
			<div className="xl:shadow-2xl">
				<Service idName="servicesSection" />
				<Erstgespräch idName="erstgespraechSection" />
				<Reviews idName="reviewSection" />
				<FAQ idName="faqSection" />
				<Footer />
			</div>
		</div>
	);
};

export default LandingPage;
