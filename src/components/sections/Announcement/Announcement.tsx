import React, { FC } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import PrimaryButton from '../../atoms/Button/PrimaryButton';
import { useNavigation } from '../../../hooks/useNavigation';
import css from './Announcement.module.scss';

import flyer from '../../../css/Einladung_BesserTischtennis_Wochenendcamp_13_und_14_August_2022.png';

export interface IAboutMe {
	idName?: string;
}

const AboutMe: FC<IAboutMe> = ({ idName }) => {
	const announcementRef = useNavigation(idName);

	return (
		<div ref={announcementRef} id={idName} className={`${css.root}`}>
			<div className="h-58 sm:h-[325px] flex flex-col justify-center my-6 lg:my-12 p-4 xl:px-0 items-center">
				<div className={`${css.gradient} py-8 px-2 flex flex-col items-center shadow-2xl shadow-gray-300 justify-center w-full text-center bg-[#e7e7e7] rounded-2xl h-full`}>
					<h1 className="text-3xl font-medium">BesserTischtennis Wochenend-Camp</h1>
					<h3 className="mt-2 text-2xl">13. und 14. August in Besigheim</h3>
					<p className="py-6">Der optimale Trainingsstart für deine erfolgreiche Saison!</p>
					<a href={flyer} download className="pt-4">
						<PrimaryButton name="Flyer runterladen" className="text-sm font-bold" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
