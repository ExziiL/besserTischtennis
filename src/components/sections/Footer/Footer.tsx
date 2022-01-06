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
			<div className="sm:flex justify-between bg-[#1E1B1B] py-12 px-8">
				<div>
					<div className="text-3xl">Get in touch with us for your service</div>
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
				<div className="pt-12 space-y-4 ">
					{/* ------------------ Tel. Nr. ------------------ */}
					<div>
						<div className="text-sm text-[#909090]">Tel. Nr.</div>
						<div>123 456 789</div>
					</div>
					{/* ------------------ Anschrift ------------------ */}
					<div>
						<div className="text-sm text-[#909090]">Adresse</div>
						<div>NH 234 Public Square San Francisco 65368</div>
					</div>
					{/* ------------------ Trainingszeiten ------------------ */}
					<div>
						<div className="text-sm text-[#909090]">Unsere Trainingszeiten</div>
						<div>123 456 789</div>
					</div>
				</div>
				{/* ------------------  Unterseite ------------------ */}
			</div>
			<div className="bg-[#181313] py-6 px-8 text-xs">
				<ul className="flex justify-between text-[#ffffffb9]">
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
