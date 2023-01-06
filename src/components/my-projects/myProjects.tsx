import React from 'react';
import Title from '../generic-components/title/title';
import './myProjects.styles.sass';
import Fundamentals from './fundamentals/fundamentals';
import FrontEnd from './front-end/frontEnd';
import BackEnd from './back-end/backEnd';
import PersonalProjects from './personal-projects/personalProjects';

export default function MyProjects() {
	return (
		<section id="all-projects">
			<Title title={'Meus Projetos() {'} />
			<div id="projects-intro">
				<p>
					Até agora, eu realizei vários projetos. A maioria foi durante o meu
					curso na Trybe, alguns foram para estudos pessoais e um foi para um
					processo seletivo. Estes projetos demonstram minha evolução na área de
					programação, como são muitos projetos, vou marcar os que considero
					mais importantes com um foguete.{' '}
				</p>
			</div>
			<Fundamentals />
			<FrontEnd />
			<BackEnd />
			<PersonalProjects />
			<br />
			<div id="skills-title-end-projects">
				<p>{'}'}</p>
			</div>
		</section>
	);
}
