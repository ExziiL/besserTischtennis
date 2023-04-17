import React, { FC } from 'react';

import Announcement from '../../components/sections/Announcement/Announcement';
import AboutMe from '../../components/sections/DasBinIch/AboutMe';
import Erstgespräch from '../../components/sections/Erstgespräch/Erstgespräch';
import FAQ from '../../components/sections/FAQ/FAQ';
import Footer from '../../components/sections/Footer/Footer';
import Hero from '../../components/sections/Hero/Hero';
import ProductShowcase from '../../components/sections/ProductShowcase/ProductShowcase';
import Reviews from '../../components/sections/Reviews/Reviews';
import Service from '../../components/sections/Service/Service';

export interface ILandingPage {}

const LandingPage: FC<ILandingPage> = () => {
	return (
		<div className="">
			<Hero idName="heroSection" />
			<Announcement idName="announcementSection" />
			{/* <ProductShowcase idName="productShowcase" /> */}
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
