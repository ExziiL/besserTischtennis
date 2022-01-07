import React, { FC } from 'react';

import Img from '../../atoms/Image/Image';
import Button from '../../atoms/Button/PrimaryButton';

import { useNavigation } from '../../../hooks/useNavigation';
import bild1 from '../../../css/pictures/Schläger_Ball_auf_Tisch_Vorne.jpeg';
import bild2 from '../../../css/pictures/Gioele_mit_Tisch.jpeg';

export interface IErstgesprächDesktop {
	idName?: string;
}

const ErstgesprächDesktop: FC<IErstgesprächDesktop> = ({ idName }) => {
	const erstgesprächRef = useNavigation(idName);

	return (
		<div className="relative h-64 scroll-mt-28" id={idName} ref={erstgesprächRef}>
			<div className="absolute bg-[#FF6433] h-full sm:w-[400px] p-4 sm:ml-16 md:ml-36 lg:ml-64">
				<h1 className="mb-8 text-4xl font-semibold text-white">Buche jetzt ein kostenloses Erstgespräch</h1>
				<Button name="Zum Erstgespräch" />
			</div>
			<div className="flex h-full">
				<Img src={bild1} alt="Panoramabild" className="object-cover w-1/3 h-full " />
				<Img src={bild2} alt="Panoramabild" className="object-cover w-2/3 h-full " />
			</div>
		</div>
	);
};

export default ErstgesprächDesktop;
