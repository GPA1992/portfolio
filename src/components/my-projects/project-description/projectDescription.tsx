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

{
	/* <div id="about-project">
	<p>
		O projeto Lessons Learned foi um projeto que utilizei as linguagens HTML,
		CSS, Git e GitHub. O objetivo do projeto era criar uma página web simles.
		Para isso, usei o HTML para estruturar o conteúdo da página e o CSS para dar
		estilo e formatação. O Git foi utilizado para controlar as alterações no
		código e o GitHub foi utilizado como plataforma para armazenar e
		compartilhar o projeto com outras pessoas. O projeto foi um sucesso e
		aprendi muito durante o seu desenvolvimento.
	</p>
	<div>
		<Icons name="JavaScript" iconId="js-icon" icon={<FaJsSquare />} />
		<Icons name="JavaScript" iconId="js-icon" icon={<FaJsSquare />} />
	</div>
	<div id="projects-link">
		<a href="https://github.com/GPA1992/lessons-learned-trybe">
			{'repo-GitHub:~$ cd /lessons-learned'}
		</a>
	</div>
</div>; */
}
