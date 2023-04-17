import React, { FC } from 'react';

import { FiExternalLink } from 'react-icons/fi';

export interface SecondaryButton {
	name?: string;
	disabled?: boolean;
	className?: any;
	onClick?: any;
	ref?: any;
	id?: any;
	icon?: any;
}

const SecondaryButton: FC<SecondaryButton> = ({ name, disabled, onClick, className, ref, id, icon }) => {
	return (
		<div
			className={`${className}`}
			ref={ref}
			id={id}
		>
			<button
				onClick={onClick}
				className={`px-8 py-3 bg-[#FF6433] text-white rounded-lg hover:bg-[#f36235] flex flex-row items-center justify-center shadow-[0_4px_14px_0_rgba(255,100,51,0.39)] hover:shadow-[0_5px_18px_0_rgba(255,100,51,0.45)]`}
				// style={{ boxShadow: '0 4px 14px 0 rgba(255, 102, 0, 0.39)' }}
				disabled={disabled}
				type="button"
			>
				{name}
				{icon && <span className="pl-2">{icon}</span>}
			</button>
		</div>
	);
};

export default SecondaryButton;
