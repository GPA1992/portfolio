import React from 'react';
import Subtitle from '../../generic-components/subtitle/subtitle';
import Title from '../../generic-components/title/title';
import './info.styles.sass';

export default function Info() {
	return (
		<div id="info">
			<Title title={'Gabriel Proença de Araujo'} />
			<Subtitle subtitle={'Full Stack Developer Student'} />
			<span id="resume">
				Estudante de desenvolvimento na Trybe, buscando uma oportunidade no
				mercado DEV
			</span>
		</div>
	);
}
