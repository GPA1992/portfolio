import React from 'react';
import { DiMysql } from 'react-icons/di';
import {
	SiTypescript,
	SiRedux,
	SiJest,
	SiSequelize,
	SiExpress,
	SiTestinglibrary,
} from 'react-icons/si';
import {
	FaHtml5,
	FaJsSquare,
	FaCss3Alt,
	FaGitAlt,
	FaReact,
	FaSass,
	FaNodeJs,
	FaDocker,
} from 'react-icons/fa';
import './stackIcons.styles.sass';

export default function StackIcons() {
	return (
		<div id="stack-icons">
			<div id="all-icons">
				<div className="icon" id="html-icon">
					<FaHtml5 />
					<span>HTML</span>
				</div>
				<div className="icon" id="js-icon">
					<FaJsSquare />
					<span>JavaScript</span>
				</div>
				<div className="icon" id="ts-icon">
					<SiTypescript />
					<span>TypeScript</span>
				</div>
				<div className="icon" id="css-icon">
					<FaCss3Alt />
					<span>CSS</span>
				</div>
				<div className="icon" id="sass-icon">
					<FaSass />
					<span>SASS</span>
				</div>
				<div className="icon" id="react-icon">
					<FaReact />
					<span>React</span>
				</div>
				<div className="icon" id="redux-icon">
					<SiRedux />
					<span>Redux</span>
				</div>
				<div className="icon" id="testing-library-icon">
					<SiTestinglibrary />
					<span>Testing Library</span>
				</div>
				<div className="icon" id="git-icon">
					<FaGitAlt />
					<span>Git/Github</span>
				</div>
				<div className="icon" id="jest-icon">
					<SiJest />
					<span>Jest</span>
				</div>
				<div className="icon" id="node-icon">
					<FaNodeJs />
					<span>NodeJs</span>
				</div>
				<div className="icon" id="express-icon">
					<SiExpress />
					<span>Express</span>
				</div>
				<div className="icon" id="docker-icon">
					<FaDocker />
					<span>Docker</span>
				</div>
				<div className="icon" id="mysql-icon">
					<DiMysql />
					<span>MySql</span>
				</div>
				<div className="icon" id="sequelize-icon">
					<SiSequelize />
					<span>Sequelize</span>
				</div>
			</div>
		</div>
	);
}
