import React, { FC } from 'react';

import FullPageWidthWrapper from '../../utils/FullPageWidthWrapper';

import Svg from '../../atoms/Svg/Svg';
import facebook from '../../../css/icons/facebook-brands.svg';
import twitter from '../../../css/icons/twitter-brands.svg';
import instagram from '../../../css/icons/instagram-brands.svg';
import linkedin from '../../../css/icons/linkedin-brands.svg';

export interface IFooter {}

const Footer: FC<IFooter> = () => {
	return (
		// <FullPageWidthWrapper className="relative">
		// <div className="w-screen text-white">
		// oben drüber ist die FullPageWidthWrapper Version des Footers (mit dem w-screen)
		<div className="text-white xl:shadow-2xl">
			{/* ------------------  Linke Seite ------------------ */}
			<div className="sm:flex sm:space-x-20 md:space-x-24 lg:space-x-40 justify-center bg-[#1E1B1B] py-12 px-8">
				<div>
					<div className="text-3xl">Besuch uns doch gerne auf Social Media</div>
					<div className="pt-6">
						<ul className="flex space-x-3">
							<li>
								<Svg icon={facebook} width={20} className="stroke-white" />
							</li>
							<li>
								<Svg icon={twitter} width={20} />
							</li>
							<li>
								<Svg icon={instagram} width={20} />
							</li>
							<li>
								<Svg icon={linkedin} width={20} />
							</li>
						</ul>
					</div>
				</div>
				{/* ------------------  Rechte Seite ------------------ */}
				<div className="pt-12 space-y-4 sm:pt-0 ">
					{/* ------------------ Tel. Nr. ------------------ */}
					<div>
						<div className="text-sm text-[#909090]">Tel. Nr.</div>
						<div>123 456 789</div>
					</div>
					{/* ------------------ Anschrift ------------------ */}
					<div>
						<div className="text-sm text-[#909090]">Adresse</div>
						<div>012345 Stuttgart, Stuttgarterstr. 40</div>
					</div>
					{/* ------------------ Trainingszeiten ------------------ */}
					<div>
						<div className="text-sm text-[#909090]">Unsere Trainingszeiten</div>
						<div>12-14 Uhr</div>
					</div>
				</div>
				{/* ------------------  Unterseite ------------------ */}
			</div>
			<div className="bg-[#181313] py-6 px-8 text-xs ">
				<ul className="flex justify-between items-center m-auto text-[#ffffffb9] max-w-sm">
					<li>Home</li>
					<li>About us</li>
					<li>Services</li>
					<li>Blog</li>
					<li>Contact us</li>
				</ul>
			</div>
		</div>
		// </FullPageWidthWrapper>
	);
};

export default Footer;
