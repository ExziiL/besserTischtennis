import React, { FC } from 'react';

export interface IImage {
	className?: string;
	alt?: string;
	src?: string;
}

const Image: FC<IImage> = ({ className, alt, src }) => {
	return <img className={className} alt={alt} src={src} />;
};

export default Image;
