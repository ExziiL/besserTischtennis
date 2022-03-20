import React, { FC } from 'react';

import { useViewport } from '../../../hooks/useViewport';

import Img from '../../atoms/Image/Image';
import Button from '../../atoms/Button/PrimaryButton';
import ErstgesprächDesktop from './ErstgesprächDesktop';
import ErstgesprächMobile from './ErstgesprächMobile';

export interface IErstgespräch {
	idName: string;
}

const Erstgespräch: FC<IErstgespräch> = ({ idName }) => {
	const { width } = useViewport();
	const breakpoint = 640;

	return <div>{width > breakpoint ? <ErstgesprächDesktop idName={idName} /> : <ErstgesprächMobile idName={idName} />}</div>;
};

export default Erstgespräch;
