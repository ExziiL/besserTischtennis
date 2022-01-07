import React, { FC } from 'react';

import Img from '../../atoms/Image/Image';

export interface IReviewCard {}

const ReviewCard: FC<IReviewCard> = ({}) => {
	return (
		<div className="p-4">
			<div className="p-12 bg-white rounded-md shadow-md">
				{/* Name Section */}
				<div className="flex items-center pb-5 space-x-4">
					<Img src="https://via.placeholder.com/25" alt="review" className="w-10 h-10 rounded-full" />
					<div className="leading-5">
						<h1 className="font-semibold">Jonathan Vallen</h1>
						<h2 className="pt-[2px] text-xs text-gray-500 ">Stuttgart</h2>
					</div>
				</div>

				{/* Text Section */}
				<div>
					<p className="font-medium leading-5">I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car in a short comprehensive look on all the working</p>
				</div>
			</div>
		</div>
	);
};

export default ReviewCard;
