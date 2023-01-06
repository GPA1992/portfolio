import React from 'react';
import './title.styles.sass';
import type { PropTitle } from '../../../types/Types';

export default function Title({ title }: PropTitle) {
	return (
		<div id="title">
			<p>{title}</p>
		</div>
	);
}
