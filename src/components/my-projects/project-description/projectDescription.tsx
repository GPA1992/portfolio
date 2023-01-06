import React from 'react';
import './projectDescription.styles.sass';

type PropProjectDescription = {
	description: string;
	projectLink: string;
	projectName: string;
};
export default function ProjectDescription({
	description,
	projectLink,
	projectName,
}: PropProjectDescription) {
	return (
		<div id="about-project">
			<p>{description}</p>
			<div id="projects-link">
				<a href={projectLink}>{`repo-GitHub:~$ cd /${projectName}`}</a>
			</div>
		</div>
	);
}
