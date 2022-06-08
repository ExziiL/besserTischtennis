import React, { FC } from 'react';

import PrimaryButton from '../../atoms/Button/PrimaryButton';
import { useNavigation } from '../../../hooks/useNavigation';
import css from './Announcement.module.scss';

export interface IAboutMe {
	idName?: string;
}

const AboutMe: FC<IAboutMe> = ({ idName }) => {
	const announcementRef = useNavigation(idName);

	const handleClick = () => {
		window.open('https://calendly.com/bessertischtennis_erstgespraech');
	};

	return (
		<div ref={announcementRef} id={idName} className={`${css.root}`}>
			<div className="h-58 sm:h-[325px] flex flex-col justify-center my-6 lg:my-12 p-4 xl:px-0 items-center">
				<div className={`${css.gradient} py-8 px-2 flex flex-col items-center shadow-2xl justify-center w-full text-center bg-red-200 rounded-3xl h-full`}>
					<h1 className="text-3xl font-medium">BesserTischtennis-Wochenend Camp</h1>
					<h3 className="text-2xl">Hier kann man einen Text eintragen</h3>
					<p className="py-6">Hier kann ein längerer Text stehenHier kann ein längerer Text stehen..Hier kann ein längerer Text stehen.</p>
					<PrimaryButton name="Mehr Erfahren" onClick={handleClick} className="pt-4 text-sm font-bold" />
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
