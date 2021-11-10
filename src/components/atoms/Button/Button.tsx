import React, { FC } from 'react';

export enum Variant {
	sale = 'sale',
	cta = 'cta',
	primary = 'primary',
	secondary = 'secondary',
}

export interface IButton {
	name?: string;
	disabled?: boolean;
	variant?: Variant;
}

const Button: FC<IButton> = ({ name, disabled, variant }) => {
	return (
		<button className={`button ${variant}`} disabled={disabled} type="button">
			{name}
		</button>
	);
};

export default Button;
