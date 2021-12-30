import React, { FC } from 'react';

export interface ITimelineYear {
	year?: number;
	headline?: string;
	paragraph?: string;
	isLast?: boolean;
}

const TimelineYear: FC<ITimelineYear> = ({ year, headline, paragraph, isLast }) => {
	return (
		<div className="flex">
			<div>
				{/* Kreise mit den Jahreszahlen */}
				<div className="inline-flex items-center justify-center flex-shrink-0 w-14 h-14 sm:w-[72px] sm:h-[72px] rounded-full text-neutral-600 bg-[#661CE7]">
					<div className="flex justify-center text-xl text-white sm:text-2xl">{year}</div>
					<div className="absolute w-[42px] h-[42px] rounded-full bg-white mt-[68px] sm:mt-[74px] opacity-25"></div>
				</div>

				{/* Dotted Line */}
				<div className="flex justify-center pt-4 pb-6 divide-x-2">
					<hr className={`h-10 ${isLast ? null : 'border'} border-[#FF6433] border-2 border-dashed `} />
				</div>
			</div>

			{/* Überschrift und Text */}
			<div className="pt-[15px] pl-4">
				<h1 className="text-xl font-semibold">{headline}</h1>
				<p className="font-semibold text-gray-500">{paragraph}</p>
			</div>
		</div>
	);
};

export default TimelineYear;
