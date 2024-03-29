import React, { FC } from 'react';

export interface IPrimaryButton {
	name?: string;
	disabled?: boolean;
	className?: any;
	onClick?: any;
	ref?: any;
	id?: any;
	icon?: any;
}

const PrimaryButton: FC<IPrimaryButton> = ({ name, disabled, onClick, className, ref, id, icon }) => {
	return (
		<div
			className={`${className}`}
			ref={ref}
			id={id}
		>
			{/* <button className={`px-8 py-3 bg-[#0433df] text-white rounded-lg hover:bg-[#0429b1]`} disabled={disabled} type="button"> */}
			<button
				onClick={onClick}
				className={`px-8 py-3 bg-[#1E1B1B] text-white rounded-lg hover:bg-[#332e2e] flex flex-row items-center justify-center`}
				disabled={disabled}
				type="button"
			>
				{/* <button className={`px-8 py-3 bg-[#38b6ff] text-white rounded-xl ${className}`} disabled={disabled} type="button"> */}
				{name}
				{icon && <span className="pl-2">{icon}</span>}
			</button>
		</div>
	);
};

export default PrimaryButton;
