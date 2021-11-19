import React, { FC } from 'react';

export interface IPrimaryButton {
	name?: string;
	disabled?: boolean;
	className?: any;
}

const PrimaryButton: FC<IPrimaryButton> = ({ name, disabled, className }) => {
	return (
		<button className={`px-8 py-3 bg-[#1C46DD] text-white rounded-xl ${className}`} disabled={disabled} type="button">
			{name}
		</button>
	);
};

export default PrimaryButton;
