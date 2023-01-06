import React from 'react';
import Icons from '../../generic-components/icons/icons';
import { FaGitAlt, FaJsSquare, FaNodeJs, FaRocket } from 'react-icons/fa';
import './backEnd.styles.sass';
import ProjectDescription from './../project-description/projectDescription';
import projects from '../../../data/projects';
import { SiDocker, SiExpress, SiTypescript } from 'react-icons/si';
import { DiMysql } from 'react-icons/di';

export default function BackEnd() {
	return (
		<details id="project-list">
			<summary id="module-summary-subtitle">{'../Back End'}</summary>
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
					<summary id="summary-subtitle">
						<React.Fragment>
							../Talker Manager
							<FaRocket />
						</React.Fragment>
					</summary>
					<div className="project-icons">
						<Icons name="JavaScript" iconId="js-icon" icon={<FaJsSquare />} />
						<Icons name="NodeJs" iconId="node-icon" icon={<FaNodeJs />} />
						<Icons name="Express" iconId="express-icon" icon={<SiExpress />} />
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
						<Icons name="Express" iconId="express-icon" icon={<SiExpress />} />
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
					<summary id="summary-subtitle">
						<React.Fragment>
							../Blogs Api
							<FaRocket />
						</React.Fragment>
					</summary>
					<div className="project-icons">
						<Icons name="TypeScript" iconId="ts-icon" icon={<SiTypescript />} />
						<Icons name="NodeJs" iconId="node-icon" icon={<FaNodeJs />} />
						<Icons name="Express" iconId="express-icon" icon={<SiExpress />} />
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
		</details>
	);
}
