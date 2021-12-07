import React, { FC } from 'react';

import Img from '../../atoms/Image/Image';
import Button from '../../atoms/Button/PrimaryButton';

export interface IErstgespräch {}

const Erstgespräch: FC<IErstgespräch> = ({}) => {
	return (
		<div className="relative h-64">
			<div className="absolute bg-[#FF6433] h-full sm:w-[400px] p-4 sm:ml-16">
				<h1 className="mb-8 text-4xl font-semibold text-white">Buche jetzt ein kostenloses Erstgespräch</h1>
				<Button name="Zum Erstgespräch" />
			</div>
			<Img src="https://www.fineart-panorama.de/332518/panoramabild-polarlicht-troms-norwegen-grotfjord.jpg" alt="Panoramabild" className="object-cover h-full" />
		</div>
	);
};

export default Erstgespräch;
