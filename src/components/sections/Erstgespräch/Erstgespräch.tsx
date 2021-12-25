import React, { FC } from 'react';

import { useViewport } from '../../../hooks/useViewport';

import Img from '../../atoms/Image/Image';
import Button from '../../atoms/Button/PrimaryButton';
import ErstgesprächDesktop from './ErstgesprächDesktop';
import ErstgesprächMobile from './ErstgesprächMobile';

export interface IErstgespräch {}

const Erstgespräch: FC<IErstgespräch> = ({}) => {
	const { width } = useViewport();
	const breakpoint = 640;

	return <div>{width > breakpoint ? <ErstgesprächDesktop /> : <ErstgesprächMobile />}</div>;
};

export default Erstgespräch;
