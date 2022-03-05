// src: https://bvgsoftware.com/blog/how-to-build-a-flip-card-component-with-react/

import React, { FC, useState } from 'react';
import cn from 'classnames';

export interface IFlipCard {
	card: any;
	className?: any;
}

const FlipCard: FC<IFlipCard> = ({ card, className }) => {
	const [showBack, setShowBack] = useState(false);

	const handleClick = () => {
		if (card.variant === 'click') {
			setShowBack(!showBack);
		}
	};

	const handleFocus = () => {
		if (card.variant === 'focus') {
			setShowBack(true);
		}
	};

	const handleBlur = () => {
		if (card.variant === 'focus') {
			setShowBack(false);
		}
	};

	return (
		<div
			tabIndex={card.id}
			className={`${cn('flip-card-outer', {
				'focus-trigger': card.variant === 'focus',
			})} ${className}`}
			onClick={handleClick}
			onFocus={handleFocus}
			onBlur={handleBlur}
		>
			<div
				className={cn('flip-card-inner', {
					showBack,
					'hover-trigger': card.variant === 'hover',
				})}
			>
				<div className="card front">
					<div className="card-body d-flex justify-content-center align-items-center">
						<p className="card-text fs-1 fw-bold">{card.front}</p>
					</div>
				</div>
				<div className="card back">
					<div className="card-body d-flex justify-content-center align-items-center">
						<p className="card-text fs-1 fw-bold">{card.back}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FlipCard;
