import React, { FC } from 'react';

export interface SecondaryButton {
	name?: string;
	disabled?: boolean;
	className?: any;
	onClick?: any;
	ref?: any;
	id?: any;
}

const SecondaryButton: FC<SecondaryButton> = ({ name, disabled, className, ref, id, onClick }) => {
	return (
		<div className={`${className}`} ref={ref} id={id}>
			{/* <button className={`px-8 py-3 bg-[#0433df] text-white rounded-lg hover:bg-[#0429b1]`} disabled={disabled} type="button"> */}
			<button onClick={onClick} className={`px-4 font-semibold py-2 bg-[#FF6433] text-white rounded-lg hover:bg-[#f36235]`} disabled={disabled} type="button">
				{/* <button className={`px-8 py-3 bg-[#38b6ff] text-white rounded-xl ${className}`} disabled={disabled} type="button"> */}
				{name}
			</button>
		</div>
	);
};

export default SecondaryButton;
