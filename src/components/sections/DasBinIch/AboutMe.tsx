import React, { FC } from 'react';

import Timeline from './Timeline/Timeline';
import Button from '../../atoms/Button/PrimaryButton';
import Image from '../../atoms/Image/Image';
import GioeleBild from '../../../css/pictures/Gioele_Bild.jpeg';
import GioeleBild3 from '../../../css/pictures/Gioele_Bild_3.jpg';

import { useNavigation } from '../../../hooks/useNavigation';

export interface IAboutMe {
	idName?: string;
}

const AboutMe: FC<IAboutMe> = ({ idName }) => {
	const aboutMeRef = useNavigation(idName);

	return (
		<section ref={aboutMeRef} className="p-4 mt-12 mb-12 xl:px-0 md:mt-40 md:mb-20 sm:mx-0 scroll-mt-20" id={idName}>
			<h2 className="mb-8 text-4xl font-semibold text-center md:mb-16 md:text-5xl">Das sind wir</h2>
			<div className="flex flex-col md:items-start md:justify-between md:flex-row">
				<div className="flex flex-col max-w-md pb-12 md:items-start md:pb-4 md:w-1/2 ">
					{/* <div className="pb-4 text-4xl font-semibold md:text-5xl">
						<h1>Gioele Vulcano</h1>
					</div> */}
					<div className="w-60">
						<Image src={GioeleBild3} className="rounded-2xl" />
						<p className="pt-2 text-xl font-semibold">Gioele Vulcano</p>
						<p className="font-semibold text-gray-500">Co-Gründer und Head-Coach von BesserTischtennis</p>
					</div>
					<p className="font-semibold text-gray-500 pt-14 md:pr-8 md:text-left">
						Wir sind ein junges Team, dass sich zum Ziel gesetzt hat die Begeisterung für unser Hobby Tischtennis zu teilen und jedem eine professionelle Unterstützung zu bieten, der auch seine Leidenschaft in diesem Sport gefunden hat. Seit uns in der Kindheit das erste Mal einen Schläger in die
						Hand gelegt wurde, ist unsere riesige Begeisterung für den Sport nie verloren gegangen. Seitdem sind wir als aktive Spieler und erfahrene Trainer im Großraum Stuttgart tätig. Über die Jahre konnten wir viele Eindrücke und Impulse in verschiedenen Fortbildungen, Lehrgängen und im
						Austausch mit anderen Trainern sammeln. Um diese Erfahrungen zu bündeln und weiterzugeben, haben wir 2020 das Unternehmen BesserTischtennis gegründet. Heute vereinen wir auf unserer Plattform professionelles Tischtennistraining mit innovativen Ideen und Blickwinkeln, um unseren Sport in
						seiner Entwicklung voranzubringen.
					</p>
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
