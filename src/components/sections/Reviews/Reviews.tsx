import React, { FC } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import 'swiper/css/pagination';
import SwiperCore, { Pagination } from 'swiper';
SwiperCore.use([Pagination]);

import { useViewport } from '../../../hooks/useViewport';

import ReviewCard from './ReviewCard';

export interface IReviews {}

const Reviews: FC<IReviews> = ({}) => {
	const { width } = useViewport();
	const breakpoint = 640;

	const checkSlidesPerView = () => (width > breakpoint ? 2 : 1);

	return (
		<div className="bg-[#F2F2F2] py-12 xl:shadow-2xl">
			<h1 className="pb-2 text-xl font-semibold text-center ">Our Customers say the nicest things about our service</h1>

			{/* <Swiper slidesPerView={checkSlidesPerView()} pagination={{ dynamicBullets: false }}> */}
			<Swiper slidesPerView={checkSlidesPerView()}>
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
			</Swiper>
		</div>
	);
};

export default Reviews;
