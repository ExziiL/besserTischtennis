import React, { FC } from 'react';

import Timeline from './Timeline/Timeline';
import Button from '../../atoms/Button/PrimaryButton';

import { useNavigation } from '../../../hooks/useNavigation';

export interface IAboutMe {
	idName?: string;
}

const AboutMe: FC<IAboutMe> = ({ idName }) => {
	const aboutMeRef = useNavigation(idName);

	return (
		<section ref={aboutMeRef} className="flex flex-col p-4 mt-12 mb-12 lg:flex-row lg:mt-40 lg:mb-20 sm:mx-0" id={idName}>
			<div className="flex flex-col justify-center pb-10 lg:pb-52">
				<div className="text-5xl font-semibold">
					<h1>Das bin ich:</h1>
					<h1>Giole Vulcano</h1>
				</div>
				<p className="pt-8 font-semibold text-gray-500 lg:pt-20 lg:mr-8">Ich bin 20 Jahre jung und komme aus Besigheim, das liegt ca. 25 km entfernt von Stuttgart.</p>
				<Button name="Mehr erfahren" className="pt-8" />
			</div>
			<Timeline />
		</section>
	);
};

export default AboutMe;
