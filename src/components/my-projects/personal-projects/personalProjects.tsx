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
import { TbBrandReactNative } from 'react-icons/tb';
import './personalProjects.styles.sass';
import ProjectDescription from '../project-description/projectDescription';
import projects from '../../../data/projects';
import {
	SiExpo,
	SiJest,
	SiRedux,
	SiStyledcomponents,
	SiTestinglibrary,
} from 'react-icons/si';
import { GiHook } from 'react-icons/gi';

export default function PersonalProjects() {
	return (
		<details id="project-list">
			<summary id="module-summary-subtitle">{'../Projetos Pessoais'}</summary>
			<div className="project-details">
				<details>
					<summary id="summary-subtitle">
						<React.Fragment>
							../App de Gorjetas
							<FaRocket />
						</React.Fragment>
					</summary>
					<div className="project-icons">
						<Icons name="HTML" iconId="html-icon" icon={<FaHtml5 />} />
						<Icons name="CSS" iconId="css-icon" icon={<FaCss3Alt />} />
						<Icons
							name="Styled-Components"
							iconId="sass-icon"
							icon={<SiStyledcomponents />}
						/>
						<Icons
							name="React Native"
							iconId="react-icon"
							icon={<TbBrandReactNative />}
						/>
						<Icons name="Expo" iconId="expo-icon" icon={<SiExpo />} />
						<Icons name="GIT/GitHub" iconId="git-icon" icon={<FaGitAlt />} />
					</div>
					<ProjectDescription
						description={projects.gorjetaApp}
						projectLink="https://github.com/GPA1992/gorjeta-app-react-native"
						projectName="App de Gorjetas"
					/>
				</details>
			</div>
			<div className="project-details">
				<details>
					<summary id="summary-subtitle">{'../React-TS Boirlerplate'}</summary>
					<div className="project-icons">
						<Icons name="HTML" iconId="html-icon" icon={<FaHtml5 />} />
						<Icons name="CSS" iconId="css-icon" icon={<FaCss3Alt />} />
						<Icons name="JavaScript" iconId="js-icon" icon={<FaJsSquare />} />
						<Icons name="React" iconId="react-icon" icon={<FaReact />} />
						<Icons name="Redux" iconId="redux-icon" icon={<SiRedux />} />
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
						description={projects.reactTsBoilerplate}
						projectLink="https://github.com/GPA1992/gorjeta-app-react-native"
						projectName="React-TS-Boilerplate"
					/>
				</details>
			</div>
		</details>
	);
}
