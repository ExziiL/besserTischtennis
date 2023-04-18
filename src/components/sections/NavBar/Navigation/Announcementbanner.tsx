import React, { FC } from 'react';

import { FiDownload } from 'react-icons/fi';
import flyer from '../../../../css/BesserTischtennis_Sommercamp_23_Einladung.pdf';
import { useNavigation } from '../../../../hooks/useNavigation';

export interface IAnnouncementbanner {}

const Announcementbanner: FC<IAnnouncementbanner> = () => {
	return (
		<a
			href={flyer}
			download
			className="pt-4"
		>
			<div className="w-full md:h-14 h-12 bg-[#d91b3e] cursor-pointer text-gray-50 text-center flex flex-col justify-center font-light">
				Hier gehts zum Trainingscamp!{' '}
				<div className="pt-0.5 text-xs hover:underline flex flex-row justify-center items-center font-light">
					Flyer herunterladen{' '}
					<span className="pl-1">
						<FiDownload />
					</span>
				</div>
			</div>
		</a>
	);
};

export default Announcementbanner;
