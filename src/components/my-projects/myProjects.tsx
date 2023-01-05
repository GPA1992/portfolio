import React from 'react';
import Icons from '../generic-components/icons/icons';
import Subtitle from '../generic-components/subtitle/subtitle';
import { FaCss3Alt, FaGitAlt, FaHtml5, FaJsSquare } from 'react-icons/fa';
import Title from '../generic-components/title/title';
import './myProjects.styles.sass';
import ProjectDescription from './project-description/projectDescription';

export default function MyProjects() {
	return (
		<section id="all-projects">
			<div id="project-list">
				<Title title={'Meus Projetos() {'} />
				<div className="project-details">
					<details>
						<summary id="summary-subtitle">{'../Lessons Learned'}</summary>
						<div className="project-icons">
							<Icons name="HTML" iconId="html-icon" icon={<FaHtml5 />} />
							<Icons name="CSS" iconId="css-icon" icon={<FaCss3Alt />} />
							<Icons name="GIT/GitHub" iconId="git-icon" icon={<FaGitAlt />} />
						</div>
						<ProjectDescription
							description="O projeto Lessons Learned foi um projeto que utilizei as linguagens HTML,
							CSS, Git e GitHub. O objetivo do projeto era criar uma página web simples.
							Para isso, usei o HTML para estruturar o conteúdo da página e o CSS para dar
							estilo e formatação. O Git foi utilizado para controlar as alterações no
							código e o GitHub foi utilizado como plataforma para armazenar e
							compartilhar o projeto com outras pessoas."
							projectLink="https://github.com/GPA1992/lessons-learned-trybe"
							projectName="Lessons Learned"
						/>
					</details>
				</div>
				<div className="project-details">
					<details>
						<summary id="summary-subtitle">{'../Playground Function'}</summary>
						<div className="project-icons">
							<Icons name="JavaScript" iconId="js-icon" icon={<FaJsSquare />} />
							<Icons name="GIT/GitHub" iconId="git-icon" icon={<FaGitAlt />} />
						</div>
						<ProjectDescription
							description="Pixel Art é uma aplicação web que permite ao usuário criar desenhos 
							pixelados através de uma grade de pixels. O usuário pode escolher a cor de cada
							pixel individualmente e criar seus próprios desenhos.
							A aplicação foi criada usando HTML, CSS e JavaScript e foi desenvolvida durante o curso da Trybe."
							projectLink="https://github.com/GPA1992/playground-functions-trybe"
							projectName="Playground Functions"
						/>
					</details>
				</div>
				<div className="project-details">
					<details>
						<summary id="summary-subtitle">{'../Pixel Art'}</summary>
						<div className="project-icons">
							<Icons name="HTML" iconId="html-icon" icon={<FaHtml5 />} />
							<Icons name="CSS" iconId="css-icon" icon={<FaCss3Alt />} />
							<Icons name="JavaScript" iconId="js-icon" icon={<FaJsSquare />} />
							<Icons name="GIT/GitHub" iconId="git-icon" icon={<FaGitAlt />} />
						</div>
						<ProjectDescription
							description="Pixel Art é uma aplicação web que permite ao usuário criar desenhos 
							pixelados através de uma grade de pixels. O usuário pode escolher a cor de cada
							pixel individualmente e criar seus próprios desenhos.
							A aplicação foi criada usando HTML, CSS e JavaScript e foi desenvolvida durante o curso da Trybe."
							projectLink="https://github.com/GPA1992/pixels-art-trybe"
							projectName="Pixel Art"
						/>
					</details>
				</div>
				<div className="project-details">
					<details>
						<summary id="summary-subtitle">{'../Mistery Letter'}</summary>
						<div className="project-icons">
							<Icons name="HTML" iconId="html-icon" icon={<FaHtml5 />} />
							<Icons name="CSS" iconId="css-icon" icon={<FaCss3Alt />} />
							<Icons name="JavaScript" iconId="js-icon" icon={<FaJsSquare />} />
							<Icons name="GIT/GitHub" iconId="git-icon" icon={<FaGitAlt />} />
						</div>
						<ProjectDescription
							description="a"
							projectLink="https://github.com/GPA1992/mistery-letter-trybe"
							projectName="Mistery Letter"
						/>
					</details>
				</div>
				<div className="project-details">
					<details>
						<summary id="summary-subtitle">{'../Color Guess'}</summary>
						<div className="project-icons">
							<Icons name="HTML" iconId="html-icon" icon={<FaHtml5 />} />
							<Icons name="CSS" iconId="css-icon" icon={<FaCss3Alt />} />
							<Icons name="JavaScript" iconId="js-icon" icon={<FaJsSquare />} />
							<Icons name="GIT/GitHub" iconId="git-icon" icon={<FaGitAlt />} />
						</div>
						<ProjectDescription
							description="a"
							projectLink="https://github.com/GPA1992/color-guess-trybe"
							projectName="Color Guess"
						/>
					</details>
				</div>
				<div className="project-details">
					<details>
						<summary id="summary-subtitle">{'../Todo List'}</summary>
						<div className="project-icons">
							<Icons name="HTML" iconId="html-icon" icon={<FaHtml5 />} />
							<Icons name="CSS" iconId="css-icon" icon={<FaCss3Alt />} />
							<Icons name="JavaScript" iconId="js-icon" icon={<FaJsSquare />} />
							<Icons name="GIT/GitHub" iconId="git-icon" icon={<FaGitAlt />} />
						</div>
						<ProjectDescription
							description="a"
							projectLink="https://github.com/GPA1992/todo-list-trybe"
							projectName="Todo List"
						/>
					</details>
				</div>
				<div className="project-details">
					<details>
						<summary id="summary-subtitle">{'../Meme Generator'}</summary>
						<div className="project-icons">
							<Icons name="HTML" iconId="html-icon" icon={<FaHtml5 />} />
							<Icons name="CSS" iconId="css-icon" icon={<FaCss3Alt />} />
							<Icons name="JavaScript" iconId="js-icon" icon={<FaJsSquare />} />
							<Icons name="GIT/GitHub" iconId="git-icon" icon={<FaGitAlt />} />
						</div>
						<ProjectDescription
							description="a"
							projectLink="https://github.com/GPA1992/meme-generator-trybe"
							projectName="Meme Generator"
						/>
					</details>
				</div>
				<div className="project-details">
					<details>
						<summary id="summary-subtitle">{'../Trybewarts'}</summary>
						<div className="project-icons">
							<Icons name="HTML" iconId="html-icon" icon={<FaHtml5 />} />
							<Icons name="CSS" iconId="css-icon" icon={<FaCss3Alt />} />
							<Icons name="JavaScript" iconId="js-icon" icon={<FaJsSquare />} />
							<Icons name="GIT/GitHub" iconId="git-icon" icon={<FaGitAlt />} />
						</div>
						<ProjectDescription
							description="a"
							projectLink="https://github.com/GPA1992/trybewarts-trybe"
							projectName="Trybewarts"
						/>
					</details>
				</div>
				<div className="project-details">
					<details>
						<summary id="summary-subtitle">{'../JS Unit Test'}</summary>
						<div className="project-icons">
							<Icons name="HTML" iconId="html-icon" icon={<FaHtml5 />} />
							<Icons name="CSS" iconId="css-icon" icon={<FaCss3Alt />} />
							<Icons name="JavaScript" iconId="js-icon" icon={<FaJsSquare />} />
							<Icons name="GIT/GitHub" iconId="git-icon" icon={<FaGitAlt />} />
						</div>
						<ProjectDescription
							description="a"
							projectLink="https://github.com/GPA1992/js-unit-tests-trybe"
							projectName="JS Unit Test"
						/>
					</details>
				</div>
				<Subtitle subtitle="../Zoo Function" />
				<Subtitle subtitle="../Shopping Cart" />
				<Subtitle subtitle="../Solar System" />
				<Subtitle subtitle="../Tryunfo" />
				<Subtitle subtitle="../Trybetune" />
				<Subtitle subtitle="../Online Store" />
				<Subtitle subtitle="../React Testing Library" />
				<Subtitle subtitle="../Trybewallet" />
				<Subtitle subtitle="../Trivia Redux" />
				<Subtitle subtitle="../Star Wars" />
				<Subtitle subtitle="../Recipes App" />
				<Subtitle subtitle="../Docker Todo List" />
				<Subtitle subtitle="../MySql All For One" />
				<Subtitle subtitle="../MySql One For All" />
				<Subtitle subtitle="../Talker Manager" />
				<Subtitle subtitle="../Store Manager" />
				<Subtitle subtitle="../Blogs Api" />
				<div id="skills-title-end">
					<p>{'}'}</p>
				</div>
			</div>
		</section>
	);
}
