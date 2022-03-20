import React, { FC } from 'react';

import SecondaryButton from '../../atoms/Button/SecondaryButton';
import Image from '../../atoms/Image/Image';

import tpms from '../../../css/pictures/Tischtennisplatte_mit_Schlaeger.jpeg';
import { useNavigation } from '../../../hooks/useNavigation';

export interface IHero {
	idName: string;
}

const Hero: FC<IHero> = ({ idName }) => {
	const heroRef = useNavigation(idName);

	return (
		<div ref={heroRef} className="p-4 xl:px-0 sm:mx-0 sm:pt-16 md:flex md:items-center scroll-mt-20" id={idName}>
			<div className="sm:pr-12 md:w-1/2">
				<div className="text-4xl font-medium lg:text-5xl">
					<h1>Herzlich Willkommen bei</h1>
					<h1>BesserTischtennis</h1>
				</div>
				<div className="pt-4 lg:pt-10">Unser Ziel ist es ehrgeizigen und ambitionierten Spielern eine Plattform zu bieten, die sie optimal dabei unterstützt, erfolgreicher im Tischtennis zu werden.</div>
				<div className="py-8 md:pt-8 md:pb-0 lg:pt-14">
					{/* //! Das ist der disabled Button */}
					{/* <SecondaryButton name="Mehr Erfahren" className="text-sm font-bold" /> */}
				</div>
			</div>
			<div className="md:w-1/2">
				<Image src={tpms} className="rounded-lg xl:shadow-2xl" />
			</div>
		</div>
	);
};

export default Hero;
