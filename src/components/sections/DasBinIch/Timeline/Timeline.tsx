import React, { FC } from 'react';

import TimelineYear from './TimelineYear';

import { FiExternalLink } from 'react-icons/fi';
import ShopButton from '../../../atoms/Button/ShopButton';

export interface ITimeline {
	className?: string;
}

const Timeline: FC<ITimeline> = ({ className }) => {
	const handleClick = () => {
		window.open('http://shop-bessertischtennis.de');
	};

	return (
		<div className={`${className}`}>
			<div className="">
				<TimelineYear
					year={2007}
					headline="Erstes Training"
					paragraph="Im Alter von 7 Jahren besuchte ich mein erstes Training im Sportverein"
				/>
				<TimelineYear
					year={2014}
					headline="Trainer im Heimatverein"
					paragraph="Ich begann meinem Verein im Jugendtraining zu unterstützen"
				/>
				<TimelineYear
					year={2019}
					headline="Erste Trainerstelle in einem anderen Verein"
					paragraph="Aufgrund meines Studiums suchte ich mir einen weiteren Verein, den ich unterstützen durfte"
				/>
				<TimelineYear
					year={2020}
					headline="Erster Lehrgang im Aktiven-Bereich"
					paragraph="Aufgrund des positiven Feedbacks war ich motiviert weiter zu machen"
				/>
				<TimelineYear
					year={2020}
					headline="Gründung von BesserTischtennis"
					paragraph="Gemeinsam mit meinem Bruder gründete ich BesserTischtennis, um noch mehr Spieler zu unterstützen"
				/>
				<TimelineYear
					year={2022}
					headline="BesserTischtennis Shop"
					paragraph="2022 eröffneten wir unseren eigenen Online-Shop"
					isLast={true}
				/>
				<ShopButton
					name="Hier geht's zum Shop"
					onClick={handleClick}
					className="text-center md:text-left"
					icon={<FiExternalLink />}
				/>
			</div>
		</div>
	);
};

export default Timeline;
