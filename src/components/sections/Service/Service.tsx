import React, { FC } from 'react';

import PrimaryButton from '../../atoms/Button/PrimaryButton';
import Image from '../../atoms/Image/Image';

export interface IService {}

const Service: FC<IService> = () => {
	return (
		<div className="m-4">
			<div className="text-4xl font-bold leading-9 ">
				<h1>BesserTischtennis</h1>
				<h1>- Join the club!</h1>
			</div>
			<div className="my-10 ">
				<PrimaryButton name="Lehrgang buchen" />
			</div>
			<div>
				<Image src={'https://media.os.fressnapf.com/cms/2020/05/Ratgeber-Katze-Gesundheit_Revier__1200x527.jpg?t=cmsimg_920'} />
			</div>
		</div>
	);
};

export default Service;
