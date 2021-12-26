import React, { FC } from 'react';

import PrimaryButton from '../../atoms/Button/PrimaryButton';
import Image from '../../atoms/Image/Image';

import tpms from '../../../css/pictures/TischtennisplatteMitSchlaeger.jpeg';

export interface IHeader {}

const Header: FC<IHeader> = () => {
	return (
		<div className="p-4 sm:mx-0 sm:pt-16 md:flex md:items-center">
			<div className="sm:pr-8 md:w-1/2">
				<div className="text-4xl font-medium leading-9">
					<h1>Hi. Wir sind</h1>
					<h1>besserTischtennis</h1>
				</div>
				<div className="pt-4 lg:pt-6">Wir sind dein Ansprechpartner, wenn du besser im Tischtennis werden möchtest. Dies erreichen wir durch Individual- oder Gruppentrainings.</div>
				<div className="py-8 md:py-6 lg:py-12">
					<PrimaryButton name="Mehr Informationen" className="text-sm font-bold" />
				</div>
			</div>
			<div className="md:w-1/2">
				<Image src={tpms} className="" />
			</div>
		</div>
	);
};

export default Header;
