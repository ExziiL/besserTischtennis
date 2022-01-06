import React, { FC } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SwiperCore, { Pagination, Navigation } from 'swiper';
SwiperCore.use([Pagination, Navigation]);

import { useViewport } from '../../../hooks/useViewport';

import ReviewCard from './ReviewCard';

export interface IReviews {}

const Reviews: FC<IReviews> = ({}) => {
	const { width } = useViewport();
	const breakpoint = 640;

	const checkSlidesPerView = () => (width > breakpoint ? 2 : 1);

	return (
		<div className="bg-[#F2F2F2] py-12">
			<h1 className="pb-2 text-xl font-semibold text-center ">Our Customers say the nicest things about our service</h1>
			<div className="flex max-w-5xl m-auto">
				<Swiper slidesPerView={checkSlidesPerView()} pagination={{ dynamicBullets: false }} navigation={{ prevEl: '.prev', nextEl: '.next' }}>
					{/* <Swiper slidesPerView={checkSlidesPerView()}> */}
					<SwiperSlide>
						<ReviewCard />
					</SwiperSlide>
					<SwiperSlide>
						<ReviewCard />
					</SwiperSlide>
					<SwiperSlide>
						<ReviewCard />
					</SwiperSlide>
					<SwiperSlide>
						<ReviewCard />
					</SwiperSlide>
					<div className="prev">Prev</div>
					<div className="next">Next</div>
				</Swiper>
			</div>
		</div>
	);
};

export default Reviews;
