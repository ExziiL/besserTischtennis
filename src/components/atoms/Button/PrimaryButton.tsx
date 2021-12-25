import React, { FC } from 'react';

export interface IPrimaryButton {
	name?: string;
	disabled?: boolean;
	className?: any;
}

const PrimaryButton: FC<IPrimaryButton> = ({ name, disabled, className }) => {
	return (
		<button className={`px-8 py-3 bg-[#0433df] text-white rounded-xl ${className} hover:bg-[#0429b1]`} disabled={disabled} type="button">
			{/* <button className={`px-8 py-3 bg-[#38b6ff] text-white rounded-xl ${className}`} disabled={disabled} type="button"> */}
			{name}
		</button>
	);
};

export default PrimaryButton;
