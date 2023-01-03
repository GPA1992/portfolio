import React from 'react';
import './hardSkills.styles.sass';
import StackIcons from './stackIcons/stackIcons';

export default function HardSkills() {
	return (
		<div id="hard-skills">
			<div id="skills-title">
				<p>Hard Skills</p>
			</div>
			<div id="skills-subtitle">
				<p>Tecnologias que Conheço</p>
			</div>
			<StackIcons />
			<div id="about-skills">
				<p id="disclaimer">
					Durante o curso da Trybe até o momento passei por três módulos, onde
					em cada um deles eu tive contato com essas tecnologias.
				</p>
				<p className="modulos">Fundamentos</p>
				<div id="fundamentos-text">
					<p>
						Nesse bloco tive contato com as ferramentas essenciais para quem
						deseja se tornar uma pessoa programadora,
						<span id="text-git"> Git & GitHub</span>,
						<span id="text-html"> Html</span>,
						<span id="text-js"> JavaScript</span> e Testes Unitários com
						<span id="text-jest">{' jest'}</span>.
					</p>
				</div>
				<p className="modulos">Front-End</p>
				<div id="front-end-text">
					<p>
						No módulo de front-end, aprendi sobre o{' '}
						<span id="text-react">React</span> e seu conceito de componentes,
						que visa tornar o desenvolvimento de aplicativos mais fácil. Além
						disso, estudei ferramentas da biblioteca como o{' '}
						<span id="text-redux">Redux</span>, React Router,
						<span id="testing-library">React Testing Library</span>, Context API
						e React Hooks, para tornar a utilização do React mais eficiente.
					</p>
				</div>
				<p className="modulos">Back-End</p>
				<div id="back-end-text">
					<p>
						No back-end, aprendi sobre o <span id="text-docker">Docker</span> e
						seu poderoso gerenciamento de containers. Também aprendi sobre{' '}
						<span id="text-mysql">mySql</span>,{' '}
						<span id="text-nodejs">NodeJs</span>, arquitetura de software e ORM
						com <span id="sequelize">Sequelize</span> e JWT, utilizando o modelo
						MSC. Com essas ferramentas, produzi diversas API para estudar o
						conceito de cada uma.
					</p>
				</div>
				<p id="projects">Meus Projetos</p>
				<p id="about-projects">
					Até agora, completei 27 projetos do curso da Trybe, além de alguns
					outros que fiz para meu estudo pessoal. Para ter uma melhor noção de
					meu conhecimento das ferramentas mencionadas acima, criei uma página
					com todos os projetos que fiz e o link do repositório de cada um
					deles.
				</p>
				<a id="projects-link" href="/projects">
					Meus projetos...
				</a>
			</div>
		</div>
	);
}
