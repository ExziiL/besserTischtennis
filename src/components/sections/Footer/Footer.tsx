import React, { FC } from 'react';
import { useNavigate } from 'react-router';

import { AiOutlineInstagram } from 'react-icons/ai';
import { FaTiktok } from 'react-icons/fa';
import { SiTrustpilot } from 'react-icons/si';

import FullPageWidthWrapper from '../../utils/FullPageWidthWrapper';

import facebook from '../../../css/icons/facebook-brands.svg';
import instagram from '../../../css/icons/instagram-brands.svg';
import linkedin from '../../../css/icons/linkedin-brands.svg';
import trustpilot from '../../../css/icons/trustpilot-svgrepo-com.svg';
import twitter from '../../../css/icons/twitter-brands.svg';
import Svg from '../../atoms/Svg/Svg';

export interface IFooter {}

const Footer: FC<IFooter> = () => {
	const handleClickTrustPilot = () => {
		window.open('https://de.trustpilot.com/review/bessertischtennis.de');
	};
	const handleClickInstagram = () => {
		window.open('https://instagram.com/bessertischtennis/');
	};
	const handleClickTikTok = () => {
		window.open('https://www.tiktok.com/@besser.tischtennis');
	};
	let navigate = useNavigate();

	function handleClickDatenschutz() {
		navigate('/datenschutz');
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	}

	const handleClickImpressum = () => {
		navigate('/impressum');
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	};

	return (
		// <FullPageWidthWrapper className="relative">
		// <div className="w-screen text-white">
		// oben drüber ist die FullPageWidthWrapper Version des Footers (mit dem w-screen)
		<div className="text-white shadow-2xl">
			{/* ------------------  Linke Seite ------------------ */}
			<div className="sm:flex sm:space-x-20 md:space-x-24 lg:space-x-40 justify-center bg-[#1E1B1B] py-12 px-4 md:px-8 shadow-2xl">
				<div>
					<div className="text-2xl">Besuch uns doch gerne auf Social Media</div>
					<div className="pt-2">
						<ul className="flex space-x-5">
							<li
								onClick={handleClickInstagram}
								className="cursor-pointer"
								title="Instagram"
							>
								<div className="w-8">
									<AiOutlineInstagram size="2.5rem" />
								</div>
							</li>
							<li
								onClick={handleClickTrustPilot}
								className="cursor-pointer"
								title="TrustPilot"
							>
								<SiTrustpilot size="2.25rem" />
							</li>
							<li
								onClick={handleClickTikTok}
								className="cursor-pointer"
								title="TikTok"
							>
								<FaTiktok size="2.25rem" />
							</li>
						</ul>
					</div>
				</div>
				{/* ------------------  Rechte Seite ------------------ */}
				<div className="pt-12 space-y-4 text-sm sm:pt-0">
					{/* ------------------ Tel. Nr. ------------------ */}
					<div>
						<div className="text-xs text-[#909090]">Tel. Nr.</div>
						<div>0152 59388544</div>
					</div>
					{/* ------------------ Anschrift ------------------ */}
					<div>
						<div className="text-xs text-[#909090]">Adresse</div>
						<div>Hermannstr. 13</div>
						<div>74354 Besigheim</div>
					</div>
					{/* ------------------ Trainingszeiten ------------------ */}
					<div>
						<div className="text-xs text-[#909090]">E-Mail</div>
						<div>info@bessertischtennis.de</div>
					</div>
				</div>
				{/* ------------------  Unterseite ------------------ */}
			</div>
			<div className="bg-[#181313] py-6 px-8 text-xs ">
				<ul className="flex justify-center space-x-8 items-center m-auto text-[#ffffffb9] max-w-sm">
					<li
						className="cursor-pointer hover:underline"
						onClick={handleClickImpressum}
					>
						Impressum
					</li>
					<li
						className="cursor-pointer hover:underline"
						onClick={handleClickDatenschutz}
					>
						Datenschutz
					</li>
				</ul>
			</div>
		</div>
		// </FullPageWidthWrapper>
	);
};

export default Footer;
