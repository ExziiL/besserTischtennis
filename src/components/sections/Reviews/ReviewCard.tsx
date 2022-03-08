import React, { FC } from 'react';

import Img from '../../atoms/Image/Image';

export interface IReviewCard {
	name: string;
	text: string;
	punkte: number;
}

import bild1 from '../../../css/pictures/PB.png';

const ReviewCard: FC<IReviewCard> = ({ name, text, punkte }) => {
	return (
		<div className="p-4">
			<div className="h-56 max-w-md p-6 m-auto bg-white rounded-md shadow-md sm:py-8 sm:p-12 lg:py-12 sm:h-64">
				{/* Name Section */}
				<div className="flex items-center pb-5 space-x-4">
					<Img src={bild1} alt="review" className="w-12 h-12 rounded-full" />
					<div className="leading-5">
						<h1 className="font-semibold">{name}</h1>
						<h2 className="pt-[2px] text-xs text-gray-500 ">ca. {punkte} TTR Punkte</h2>
					</div>
				</div>

				{/* Text Section */}
				<div>
					<p className="font-medium leading-5">{text}</p>
				</div>
			</div>
		</div>
	);
};

export default ReviewCard;
