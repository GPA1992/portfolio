import React from 'react';
import './hardSkills.styles.sass';
import StackIcons from './stackIcons/stackIcons';

export default function HardSkills() {
	return (
		<div id="hard-skills">
			<div id="skills-title">
				<span>Hard Skills</span>
			</div>
			<div id="skills-subtitle">
				<span>Tecnologias que Conheço</span>
			</div>
			<StackIcons />
			<div id="about-skills">
				<span id="disclaimer">
					Durante o curso da Trybe até o momento passei por três módulos, onde
					em cada um deles eu tive contato com essas tecnologias.
				</span>
				<p className="modulos">Fundamentos</p>
				<p className="modulos">Front-End</p>
				<p className="modulos">Back-End</p>
			</div>
		</div>
	);
}
