import React, { FC } from 'react';

import Img from '../../atoms/Image/Image';
import Button from '../../atoms/Button/PrimaryButton';

import { useNavigation } from '../../../hooks/useNavigation';
import bild1 from '../../../css/pictures/Schläger_Ball_auf_Tisch_Vorne.jpeg';
import bild2 from '../../../css/pictures/Schlaeger_gegen_Netz.jpeg';
import bild from '../../../css/pictures/TischTennisPlatteSchläger_bearbeitet.jpg';

export interface IErstgesprächDesktop {
	idName?: string;
}

const ErstgesprächDesktop: FC<IErstgesprächDesktop> = ({ idName }) => {
	const erstgespraechRef = useNavigation(idName);

	const handleClick = () => {
		window.open('https://calendly.com/bessertischtennis_erstgespraech');
	};

	return (
		<div className="relative h-64 md:h-80 scroll-mt-28" id={idName} ref={erstgespraechRef}>
			<div className="absolute flex flex-col justify-center bg-[#FF6433] h-full sm:w-[400px] lg:w-[500px] p-12 sm:ml-52 md:ml-80  lg:ml-[32rem]">
				<h1 className="mb-8 text-3xl font-medium text-white ">Buche jetzt ein kostenloses Erstgespräch</h1>
				<Button onClick={handleClick} name="Zum Erstgespräch" />
			</div>
			<div className="h-full">
				<Img src={bild} alt="Schläger liegt auf Ball" className="object-cover w-full h-full" />
			</div>
		</div>
	);
};

export default ErstgesprächDesktop;
