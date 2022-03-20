import React, { FC } from 'react';

import Timeline from './Timeline/Timeline';
import Button from '../../atoms/Button/PrimaryButton';
import Image from '../../atoms/Image/Image';
import GioeleBild from '../../../css/pictures/Gioele_Bild.jpeg';

import { useNavigation } from '../../../hooks/useNavigation';

export interface IAboutMe {
	idName?: string;
}

const AboutMe: FC<IAboutMe> = ({ idName }) => {
	const aboutMeRef = useNavigation(idName);

	return (
		<section ref={aboutMeRef} className="p-4 mt-12 mb-12 xl:px-0 md:mt-40 md:mb-20 sm:mx-0 scroll-mt-20" id={idName}>
			<h2 className="mb-8 text-5xl font-semibold text-center md:mb-16 md:text-5xl">Das bin ich</h2>
			<div className="flex flex-col items-center md:items-start md:justify-between md:flex-row">
				<div className="flex flex-col items-center max-w-md pb-12 md:items-start md:pb-4 md:w-1/2 ">
					<div className="pb-4 text-4xl font-semibold md:text-5xl">
						<h1>Gioele Vulcano</h1>
					</div>
					<div className="w-60">
						<Image src={GioeleBild} className="rounded-2xl" />
					</div>
					<p className="pt-4 font-semibold text-center text-gray-500 md:pr-8 md:text-left">Ich bin 20 Jahre jung und komme aus Besigheim, das liegt ca. 25 km entfernt von Stuttgart.</p>
					{/* <Button name="Mehr erfahren" className="pt-8 lg:pt-12" /> */}
				</div>
				<div className="md:w-1/2">
					<Timeline />
				</div>
			</div>
		</section>
	);
};

export default AboutMe;
