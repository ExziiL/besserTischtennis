import React, { FC } from 'react';

export interface ITimelineYear {
	year?: number;
	headline?: string;
	paragraph?: string;
}

const TimelineYear: FC<ITimelineYear> = ({ year, headline, paragraph }) => {
	return (
		<div className="flex">
			<div>{year}</div>
			<div>
				<h1>{headline}</h1>
				<p>{paragraph}</p>
			</div>
		</div>
	);
};

export default TimelineYear;
