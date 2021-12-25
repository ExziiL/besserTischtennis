import React, { FC } from 'react';

import PrimaryButton from '../../atoms/Button/PrimaryButton';
import Image from '../../atoms/Image/Image';

import tpms from '../../../css/pictures/TischtennisplatteMitSchlaeger.jpeg';

export interface IHeader {}

const Header: FC<IHeader> = () => {
	return (
		<div className="m-4 sm:flex">
			<div>
				<div className="text-4xl font-medium leading-9 ">
					<h1>Hi. Wir sind</h1>
					<h1>besserTischtennis</h1>
				</div>
				<div className="pt-4">Wir sind dein Ansprechpartner, wenn du besser im Tischtennis werden möchtest. Dies erreichen wir durch Individual- oder Gruppentrainings.</div>
				<div className="my-8 ">
					<PrimaryButton name="Mehr Informationen" className="text-sm font-bold" />
				</div>
			</div>
			<div className="">
				<Image src={tpms} className="" />
			</div>
		</div>
	);
};

export default Header;
