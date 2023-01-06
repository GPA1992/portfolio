import React from 'react';
import './subtitle.styles.sass';
import type { PropSubtitle } from '../../../types/Types';

export default function Subtitle({ subtitle }: PropSubtitle) {
	return (
		<div id="subtitle">
			<p>{subtitle}</p>
		</div>
	);
}
