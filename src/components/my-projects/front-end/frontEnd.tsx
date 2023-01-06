import React from 'react';
import Icons from '../../generic-components/icons/icons';
import {
	FaCss3Alt,
	FaGitAlt,
	FaHtml5,
	FaJsSquare,
	FaReact,
	FaRocket,
} from 'react-icons/fa';
import './frontEnd.styles.sass';
import ProjectDescription from './../project-description/projectDescription';
import { SiJest, SiRedux, SiTestinglibrary } from 'react-icons/si';
import { GiHook } from 'react-icons/gi';

export default function FrontEnd() {
	return (
		<details id="project-list">
			<summary id="module-summary-subtitle">{'../Front End'}</summary>
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
					<summary id="summary-subtitle">
						<React.Fragment>
							../Tryunfo
							<FaRocket />
						</React.Fragment>
					</summary>
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
						<React.Fragment>
							../React Testing Library
							<FaRocket />
						</React.Fragment>
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
					<summary id="summary-subtitle">
						<React.Fragment>
							../Trivia Redux
							<FaRocket />
						</React.Fragment>
					</summary>
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
					<summary id="summary-subtitle">
						<React.Fragment>
							../Recipes App
							<FaRocket />
						</React.Fragment>
					</summary>
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
		</details>
	);
}
