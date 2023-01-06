import React from 'react';
import Icons from '../../generic-components/icons/icons';
import {
	FaCss3Alt,
	FaGitAlt,
	FaHtml5,
	FaJsSquare,
	FaRocket,
} from 'react-icons/fa';
import './fundamentals.styles.sass';
import ProjectDescription from '../project-description/projectDescription';
import projects from '../../../data/projects';
import { SiJest } from 'react-icons/si';

export default function Fundamentals() {
	return (
		<details id="project-list">
			<summary id="module-summary-subtitle">{'../Fundamentos'}</summary>
			<div className="project-details">
				<details>
					<summary id="summary-subtitle">{'../Lessons Learned'}</summary>
					<div className="project-icons">
						<Icons name="HTML" iconId="html-icon" icon={<FaHtml5 />} />
						<Icons name="CSS" iconId="css-icon" icon={<FaCss3Alt />} />
						<Icons name="GIT/GitHub" iconId="git-icon" icon={<FaGitAlt />} />
					</div>
					<ProjectDescription
						description={projects.lessonsLearned}
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
						description={projects.playgroundFunction}
						projectLink="https://github.com/GPA1992/playground-functions-trybe"
						projectName="Playground Functions"
					/>
				</details>
			</div>
			<div className="project-details">
				<details>
					<summary id="summary-subtitle">
						<React.Fragment>
							../Pixel Art
							<FaRocket />
						</React.Fragment>
					</summary>
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
						description={projects.misteryLetter}
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
						description={projects.colorGuess}
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
						description={projects.todoList}
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
						description={projects.memeGenerator}
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
						description={projects.trybeWarts}
						projectLink="https://github.com/GPA1992/trybewarts-trybe"
						projectName="Trybewarts"
					/>
				</details>
			</div>
			<div className="project-details">
				<details>
					<summary id="summary-subtitle">{'../JS Unit Test'}</summary>
					<div className="project-icons">
						<Icons name="JavaScript" iconId="js-icon" icon={<FaJsSquare />} />
						<Icons name="Jest" iconId="jest-icon" icon={<SiJest />} />
						<Icons name="GIT/GitHub" iconId="git-icon" icon={<FaGitAlt />} />
					</div>
					<ProjectDescription
						description={projects.jsUnitTests}
						projectLink="https://github.com/GPA1992/js-unit-tests-trybe"
						projectName="JS Unit Test"
					/>
				</details>
			</div>
			<div className="project-details">
				<details>
					<summary id="summary-subtitle">
						<React.Fragment>
							../Zoo Function
							<FaRocket />
						</React.Fragment>
					</summary>
					<div className="project-icons">
						<Icons name="JavaScript" iconId="js-icon" icon={<FaJsSquare />} />
						<Icons name="Jest" iconId="jest-icon" icon={<SiJest />} />
						<Icons name="GIT/GitHub" iconId="git-icon" icon={<FaGitAlt />} />
					</div>
					<ProjectDescription
						description={projects.zooFunctions}
						projectLink="https://github.com/GPA1992/zoo-functions-trybe"
						projectName="Zoo Function"
					/>
				</details>
			</div>
		</details>
	);
}
