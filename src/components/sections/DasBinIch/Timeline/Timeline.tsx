import React, { FC } from 'react';

import TimelineYear from './TimelineYear';
import Button from '../../../atoms/Button/PrimaryButton';

export interface ITimeline {
	className?: string;
}

const Timeline: FC<ITimeline> = ({ className }) => {
	return (
		<div className={`${className}`}>
			<div className="my-8">
				<TimelineYear year={2007} headline="Erstes Training" paragraph="Im Alter von 7 Jahren besuchte ich mein erstes Training im Sportverein" />
				<TimelineYear year={2014} headline="Trainer im Heimatverein" paragraph="Ich begann meinem Verein im Jugendtraining zu unterstützen" />
				<TimelineYear year={2019} headline="Erste Trainerstelle in einem anderen Verein" paragraph="Aufgrund meines Studiums suchte ich mir einen weiteren Verein, den ich unterstützen durfte" />
				<TimelineYear year={2020} headline="Erster Lehrgang im Aktiven-Bereich" paragraph="Aufgrund des Feedbacks war ich motiviert weiter zu machen" />
				<TimelineYear year={2020} headline="Gründung von BesserTischtennis" paragraph="Gemeinsam mit meinem Bruder gründete ich BesserTischtennis, um noch mehr Spieler zu unterstützen" isLast={true} />
			</div>
			<Button name="Mehr erfahren" className="" />
		</div>
	);
};

export default Timeline;