import React from 'react';
import Icons from '../generic-components/icons/icons';
import {
	FaCss3Alt,
	FaGitAlt,
	FaHtml5,
	FaJsSquare,
	FaNodeJs,
	FaReact,
} from 'react-icons/fa';
import Title from '../generic-components/title/title';
import './myProjects.styles.sass';
import ProjectDescription from './project-description/projectDescription';
import projects from '../../data/projects';
import {
	SiDocker,
	SiExpress,
	SiJest,
	SiRedux,
	SiTestinglibrary,
	SiTypescript,
} from 'react-icons/si';
import { GiHook } from 'react-icons/gi';
import { DiMysql } from 'react-icons/di';

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
						<summary id="summary-subtitle">{'../Zoo Function'}</summary>
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
				<div className="project-details">
					<details>
						<summary id="summary-subtitle">{'../Shopping Cart'}</summary>
						<div className="project-icons">
							<Icons name="HTML" iconId="html-icon" icon={<FaHtml5 />} />
							<Icons name="CSS" iconId="css-icon" icon={<FaCss3Alt />} />
							<Icons name="JavaScript" iconId="js-icon" icon={<FaJsSquare />} />
							<Icons name="Jest" iconId="jest-icon" icon={<SiJest />} />
							<Icons name="GIT/GitHub" iconId="git-icon" icon={<FaGitAlt />} />
						</div>
						<ProjectDescription
							description="fazer"
							projectLink="https://github.com/GPA1992/shopping-cart-trybe"
							projectName="Shopping Cart"
						/>
					</details>
				</div>
				<div className="project-details">
					<details>
						<summary id="summary-subtitle">{'../Solar System'}</summary>
						<div className="project-icons">
							<Icons name="HTML" iconId="html-icon" icon={<FaHtml5 />} />
							<Icons name="CSS" iconId="css-icon" icon={<FaCss3Alt />} />
							<Icons name="JavaScript" iconId="js-icon" icon={<FaJsSquare />} />
							<Icons name="React" iconId="react-icon" icon={<FaReact />} />
							<Icons name="GIT/GitHub" iconId="git-icon" icon={<FaGitAlt />} />
						</div>
						<ProjectDescription
							description="fazer"
							projectLink="https://github.com/GPA1992/solar-system-trybe"
							projectName="Solar System"
						/>
					</details>
				</div>
				<div className="project-details">
					<details>
						<summary id="summary-subtitle">{'../Tryunfo'}</summary>
						<div className="project-icons">
							<Icons name="HTML" iconId="html-icon" icon={<FaHtml5 />} />
							<Icons name="CSS" iconId="css-icon" icon={<FaCss3Alt />} />
							<Icons name="JavaScript" iconId="js-icon" icon={<FaJsSquare />} />
							<Icons name="React" iconId="react-icon" icon={<FaReact />} />
							<Icons name="GIT/GitHub" iconId="git-icon" icon={<FaGitAlt />} />
						</div>
						<ProjectDescription
							description="fazer"
							projectLink="https://github.com/GPA1992/tryunfo-trybe"
							projectName="Tryunfo"
						/>
					</details>
				</div>
				<div className="project-details">
					<details>
						<summary id="summary-subtitle">{'../Trybetunes'}</summary>
						<div className="project-icons">
							<Icons name="HTML" iconId="html-icon" icon={<FaHtml5 />} />
							<Icons name="CSS" iconId="css-icon" icon={<FaCss3Alt />} />
							<Icons name="JavaScript" iconId="js-icon" icon={<FaJsSquare />} />
							<Icons name="React" iconId="react-icon" icon={<FaReact />} />
							<Icons name="GIT/GitHub" iconId="git-icon" icon={<FaGitAlt />} />
						</div>
						<ProjectDescription
							description="fazer"
							projectLink="https://github.com/GPA1992/trybetunes-trybe"
							projectName="Trybetunes"
						/>
					</details>
				</div>
				<div className="project-details">
					<details>
						<summary id="summary-subtitle">{'../Online Store'}</summary>
						<div className="project-icons">
							<Icons name="HTML" iconId="html-icon" icon={<FaHtml5 />} />
							<Icons name="CSS" iconId="css-icon" icon={<FaCss3Alt />} />
							<Icons name="JavaScript" iconId="js-icon" icon={<FaJsSquare />} />
							<Icons name="React" iconId="react-icon" icon={<FaReact />} />
							<Icons name="GIT/GitHub" iconId="git-icon" icon={<FaGitAlt />} />
						</div>
						<ProjectDescription
							description="fazer"
							projectLink="https://github.com/GPA1992/online-store-trybe"
							projectName="Online Store"
						/>
					</details>
				</div>
				<div className="project-details">
					<details>
						<summary id="summary-subtitle">
							{'../React Testing Library'}
						</summary>
						<div className="project-icons">
							<Icons name="HTML" iconId="html-icon" icon={<FaHtml5 />} />
							<Icons name="CSS" iconId="css-icon" icon={<FaCss3Alt />} />
							<Icons name="JavaScript" iconId="js-icon" icon={<FaJsSquare />} />
							<Icons name="React" iconId="react-icon" icon={<FaReact />} />
							<Icons name="Jest" iconId="jest-icon" icon={<SiJest />} />
							<Icons
								name="RTL"
								iconId="testing-library-icon"
								icon={<SiTestinglibrary />}
							/>
							<Icons name="GIT/GitHub" iconId="git-icon" icon={<FaGitAlt />} />
						</div>
						<ProjectDescription
							description="fazer"
							projectLink="https://github.com/GPA1992/react-testing-library-trybe"
							projectName="React Testing Library"
						/>
					</details>
				</div>
				<div className="project-details">
					<details>
						<summary id="summary-subtitle">{'../Trybewallet'}</summary>
						<div className="project-icons">
							<Icons name="HTML" iconId="html-icon" icon={<FaHtml5 />} />
							<Icons name="CSS" iconId="css-icon" icon={<FaCss3Alt />} />
							<Icons name="JavaScript" iconId="js-icon" icon={<FaJsSquare />} />
							<Icons name="React" iconId="react-icon" icon={<FaReact />} />
							<Icons name="Redux" iconId="redux-icon" icon={<SiRedux />} />
							<Icons name="Jest" iconId="jest-icon" icon={<SiJest />} />
							<Icons
								name="RTL"
								iconId="testing-library-icon"
								icon={<SiTestinglibrary />}
							/>
							<Icons name="GIT/GitHub" iconId="git-icon" icon={<FaGitAlt />} />
						</div>
						<ProjectDescription
							description="fazer"
							projectLink="https://github.com/GPA1992/trybewallet-trybe"
							projectName="Trybewallet"
						/>
					</details>
				</div>
				<div className="project-details">
					<details>
						<summary id="summary-subtitle">{'../Trivia Redux'}</summary>
						<div className="project-icons">
							<Icons name="HTML" iconId="html-icon" icon={<FaHtml5 />} />
							<Icons name="CSS" iconId="css-icon" icon={<FaCss3Alt />} />
							<Icons name="JavaScript" iconId="js-icon" icon={<FaJsSquare />} />
							<Icons name="React" iconId="react-icon" icon={<FaReact />} />
							<Icons name="Redux" iconId="redux-icon" icon={<SiRedux />} />
							<Icons name="Jest" iconId="jest-icon" icon={<SiJest />} />
							<Icons
								name="RTL"
								iconId="testing-library-icon"
								icon={<SiTestinglibrary />}
							/>
							<Icons name="GIT/GitHub" iconId="git-icon" icon={<FaGitAlt />} />
						</div>
						<ProjectDescription
							description="fazer"
							projectLink="https://github.com/GPA1992/trivia-redux-trybe"
							projectName="Trivia Redux"
						/>
					</details>
				</div>
				<div className="project-details">
					<details>
						<summary id="summary-subtitle">{'../Star Wars'}</summary>
						<div className="project-icons">
							<Icons name="HTML" iconId="html-icon" icon={<FaHtml5 />} />
							<Icons name="CSS" iconId="css-icon" icon={<FaCss3Alt />} />
							<Icons name="JavaScript" iconId="js-icon" icon={<FaJsSquare />} />
							<Icons name="React" iconId="react-icon" icon={<FaReact />} />
							<Icons name="React Hooks" iconId="redux-icon" icon={<GiHook />} />
							<Icons name="Jest" iconId="jest-icon" icon={<SiJest />} />
							<Icons
								name="RTL"
								iconId="testing-library-icon"
								icon={<SiTestinglibrary />}
							/>
							<Icons name="GIT/GitHub" iconId="git-icon" icon={<FaGitAlt />} />
						</div>
						<ProjectDescription
							description="fazer"
							projectLink="https://github.com/GPA1992/star-wars-planets-trybe"
							projectName="Star Wars"
						/>
					</details>
				</div>
				<div className="project-details">
					<details>
						<summary id="summary-subtitle">{'../Recipes App'}</summary>
						<div className="project-icons">
							<Icons name="HTML" iconId="html-icon" icon={<FaHtml5 />} />
							<Icons name="CSS" iconId="css-icon" icon={<FaCss3Alt />} />
							<Icons name="JavaScript" iconId="js-icon" icon={<FaJsSquare />} />
							<Icons name="React" iconId="react-icon" icon={<FaReact />} />
							<Icons name="React Hooks" iconId="redux-icon" icon={<GiHook />} />
							<Icons name="Jest" iconId="jest-icon" icon={<SiJest />} />
							<Icons
								name="RTL"
								iconId="testing-library-icon"
								icon={<SiTestinglibrary />}
							/>
							<Icons name="GIT/GitHub" iconId="git-icon" icon={<FaGitAlt />} />
						</div>
						<ProjectDescription
							description="fazer"
							projectLink="https://github.com/GPA1992/app-receitas-trybe"
							projectName="Recipes App"
						/>
					</details>
				</div>
				<div className="project-details">
					<details>
						<summary id="summary-subtitle">{'../Docker Todo List'}</summary>
						<div className="project-icons">
							<Icons name="Docker" iconId="docker-icon" icon={<SiDocker />} />
							<Icons name="GIT/GitHub" iconId="git-icon" icon={<FaGitAlt />} />
						</div>
						<ProjectDescription
							description="fazer"
							projectLink="https://github.com/GPA1992/docker-todo-list-trybe"
							projectName="Docker Todo List"
						/>
					</details>
				</div>
				<div className="project-details">
					<details>
						<summary id="summary-subtitle">{'../MySql All For One'}</summary>
						<div className="project-icons">
							<Icons name="MySql" iconId="mysql-icon" icon={<DiMysql />} />
							<Icons name="Docker" iconId="docker-icon" icon={<SiDocker />} />
							<Icons name="GIT/GitHub" iconId="git-icon" icon={<FaGitAlt />} />
						</div>
						<ProjectDescription
							description="fazer"
							projectLink="https://github.com/GPA1992/mysql-all-for-one-trybe"
							projectName="MySql All For One"
						/>
					</details>
				</div>
				<div className="project-details">
					<details>
						<summary id="summary-subtitle">{'../MySql One For All'}</summary>
						<div className="project-icons">
							<Icons name="MySql" iconId="mysql-icon" icon={<DiMysql />} />
							<Icons name="Docker" iconId="docker-icon" icon={<SiDocker />} />
							<Icons name="GIT/GitHub" iconId="git-icon" icon={<FaGitAlt />} />
						</div>
						<ProjectDescription
							description="fazer"
							projectLink="https://github.com/GPA1992/mysql-one-for-all-trybe"
							projectName="MySql One For All"
						/>
					</details>
				</div>
				<div className="project-details">
					<details>
						<summary id="summary-subtitle">{'../Talker Manager'}</summary>
						<div className="project-icons">
							<Icons name="JavaScript" iconId="js-icon" icon={<FaJsSquare />} />
							<Icons name="NodeJs" iconId="node-icon" icon={<FaNodeJs />} />
							<Icons
								name="Express"
								iconId="express-icon"
								icon={<SiExpress />}
							/>
							<Icons name="MySql" iconId="mysql-icon" icon={<DiMysql />} />
							<Icons name="Docker" iconId="docker-icon" icon={<SiDocker />} />
							<Icons name="GIT/GitHub" iconId="git-icon" icon={<FaGitAlt />} />
						</div>
						<ProjectDescription
							description="fazer"
							projectLink="https://github.com/GPA1992/talker-manager-trybe"
							projectName="Talker Manager"
						/>
					</details>
				</div>
				<div className="project-details">
					<details>
						<summary id="summary-subtitle">{'../Store Manager'}</summary>
						<div className="project-icons">
							<Icons name="JavaScript" iconId="js-icon" icon={<FaJsSquare />} />
							<Icons name="NodeJs" iconId="node-icon" icon={<FaNodeJs />} />
							<Icons
								name="Express"
								iconId="express-icon"
								icon={<SiExpress />}
							/>
							<Icons name="MySql" iconId="mysql-icon" icon={<DiMysql />} />
							<Icons name="Docker" iconId="docker-icon" icon={<SiDocker />} />
							<Icons name="GIT/GitHub" iconId="git-icon" icon={<FaGitAlt />} />
						</div>
						<ProjectDescription
							description="fazer"
							projectLink="https://github.com/GPA1992/store-manager-trybe"
							projectName="Store Manager"
						/>
					</details>
				</div>
				<div className="project-details">
					<details>
						<summary id="summary-subtitle">{'../Blogs Api'}</summary>
						<div className="project-icons">
							<Icons
								name="TypeScript"
								iconId="ts-icon"
								icon={<SiTypescript />}
							/>
							<Icons name="NodeJs" iconId="node-icon" icon={<FaNodeJs />} />
							<Icons
								name="Express"
								iconId="express-icon"
								icon={<SiExpress />}
							/>
							<Icons name="MySql" iconId="mysql-icon" icon={<DiMysql />} />
							<Icons name="Docker" iconId="docker-icon" icon={<SiDocker />} />
							<Icons name="GIT/GitHub" iconId="git-icon" icon={<FaGitAlt />} />
						</div>
						<ProjectDescription
							description="fazer"
							projectLink="https://github.com/GPA1992/blogs-api-trybe"
							projectName="Blogs Api"
						/>
					</details>
				</div>
				<br />
				<div id="skills-title-end">
					<p>{'}'}</p>
				</div>
			</div>
		</section>
	);
}
