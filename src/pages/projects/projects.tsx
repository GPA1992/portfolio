import React from 'react';
import Header from '../../components/header/header';
import './projects.styles.sass';
import MyProjects from '../../components/my-projects/myProjects';

export default function Projects() {
	return (
		<div>
			<Header />
			<main id="projects">
				<MyProjects />
			</main>
		</div>
	);
}
