import React from 'react';
import type { PropSingleIcon } from '../../../types/Types';
import './icons.styles.sass';

export default function Icons({ name, iconId, icon }: PropSingleIcon) {
	return (
		<div className="single-icon" id={iconId}>
			{icon}
			<span>{name}</span>
		</div>
	);
}
