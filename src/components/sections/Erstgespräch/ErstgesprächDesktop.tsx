import React, { FC } from 'react';

import Img from '../../atoms/Image/Image';
import Button from '../../atoms/Button/PrimaryButton';

export interface IErstgesprächDesktop {}

const ErstgesprächDesktop: FC<IErstgesprächDesktop> = ({}) => {
	return (
		<div className="relative h-64">
			<div className="absolute bg-[#FF6433] h-full sm:w-[400px] p-4 sm:ml-16 md:ml-36 lg:ml-64">
				<h1 className="mb-8 text-4xl font-semibold text-white">Buche jetzt ein kostenloses Erstgespräch</h1>
				<Button name="Zum Erstgespräch" />
			</div>
			<div className="flex h-full">
				<Img src="https://www.fineart-panorama.de/332518/panoramabild-polarlicht-troms-norwegen-grotfjord.jpg" alt="Panoramabild" className="object-cover w-1/3 h-full" />
				<Img src="https://i.auto-bild.de/ir_img/1/7/6/3/5/7/9/Alle-Auto-Neuheiten-2019-1200x800-bbcf8a2e46bd3f1f.jpg" alt="Panoramabild" className="object-cover w-2/3 h-full" />
			</div>
		</div>
	);
};

export default ErstgesprächDesktop;
