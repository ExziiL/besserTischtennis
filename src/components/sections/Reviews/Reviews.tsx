import React, { FC } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SwiperCore, { Pagination, Navigation } from 'swiper';
SwiperCore.use([Pagination, Navigation]);

import { useViewport } from '../../../hooks/useViewport';
import { useNavigation } from '../../../hooks/useNavigation';

import Svg from '../../atoms/Svg/Svg';
import arrowRight from '../../../css/icons/arrow-right.svg';

import ReviewCard from './ReviewCard';

export interface IReviews {
	idName: string;
	// name: string;
	// text: string;
	// punkte: number;
}

// const Reviews: FC<IReviews> = ({ idName, name, text, punkte }) => {
const Reviews: FC<IReviews> = ({ idName }) => {
	const { width } = useViewport();
	const breakpoint = 700;
	const reviewsRef = useNavigation(idName);
	const reviews = [
		{ name: 'Luca', text: 'Sehr sehr guter Lehrgang gewesen. Man konnte viele neue und hilfreiche Sachen mitnehmen. Empfehlenswert für alle die besser im Tischtennis werden möchten.', punkte: 1600 },
		{ name: 'Patrik', text: 'Es ist ein klasse Lehrgang um seine Tischtennis-Fähigkeiten auf das nächste Level zu heben. Sehr gut organisiert und für jede Leistungsstärke geeignet.', punkte: 1450 },
		{ name: 'Joshua', text: 'Durch die lockere und positive Art der Trainer war immer gute Stimmung und der Lehrgang somit ein voller Erfolg. Sollte wieder einmal ein Lehrgang von Bessertischtennis stattfinden bin ich sicher wieder am Start!', punkte: 1450 },
		{
			name: 'Roman',
			text: 'Dies war bereits mein zweiter Lehrgang von Bessertischtennis und ich war wieder sehr zufrieden. Beide Tage waren sehr gut und abwechslungsreich strukturiert.',
			punkte: 1400,
		},
		{ name: 'Oliver', text: 'Die Trainer sind individuell auf jeden einzelnen Teilnehmer eingegangen, konnten dadurch Fehler sehr gut analysieren und beheben.', punkte: 1300 },
	];

	const checkSlidesPerView = () => (width > breakpoint ? 2 : 1);

	const handleClick = () => {
		window.open('https://de.trustpilot.com/review/bessertischtennis.de');
	};

	return (
		<div ref={reviewsRef} className="bg-[#F2F2F2] pt-12 scroll-mt-6" id={idName}>
			<h1 className="pb-4 text-2xl font-semibold text-center md:pb-8 md:pt-10 sm:text-3xl ">Das sagen unsere Kunden über uns:</h1>
			<div className="flex max-w-5xl pb-10 m-auto">
				<Swiper slidesPerView={checkSlidesPerView()} pagination={{ dynamicBullets: false }} navigation={{ prevEl: '.prev', nextEl: '.next' }}>
					{/* <Swiper slidesPerView={checkSlidesPerView()}> */}
					{reviews.map((review, index) => (
						<SwiperSlide>
							<ReviewCard name={review.name} text={review.text} punkte={review.punkte} />
						</SwiperSlide>
					))}

					<div className="prev">Prev</div>
					<div className="next">Next</div>
				</Swiper>
			</div>
			<div className="flex justify-end">
				<div className="flex items-center px-4 pb-2 space-x-3 cursor-pointer hover:underline" onClick={handleClick}>
					<div className="">weitere Reviews</div>
					<Svg icon={arrowRight} width={17} className="" />
				</div>
			</div>
		</div>
	);
};

export default Reviews;
