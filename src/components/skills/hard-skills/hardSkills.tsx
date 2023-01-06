import React from 'react';
import Subtitle from '../../generic-components/subtitle/subtitle';
import Title from '../../generic-components/title/title';
import './hardSkills.styles.sass';
import StackIcons from './stack-Icons/stackIcons';

export default function HardSkills() {
	return (
		<article id="hard-skills">
			<Title title={'Hard Skills() {'} />

			<div id="about-skills">
				<Subtitle subtitle={'../Tecnologias que Conheço'} />
				<p id="disclaimer">
					Durante o curso da Trybe até o momento passei por três módulos, onde
					em cada um deles eu tive contato com essas tecnologias.
				</p>
				<StackIcons />
				<div className="modules">
					<Subtitle subtitle={'<Fundamentos />'} />
					<div className="modules-text">
						<p>
							Nesse bloco tive contato com as ferramentas essenciais para quem
							deseja se tornar uma pessoa programadora,
							<span id="text-git"> Git & GitHub</span>,
							<span id="text-html"> Html</span>,
							<span id="text-js"> JavaScript</span> e Testes Unitários com
							<span id="text-jest">{' jest'}</span>.
						</p>
					</div>
				</div>
				<div className="modules">
					<Subtitle subtitle={'<Front-End />'} />
					<div className="modules-text">
						<p>
							No módulo de front-end, aprendi sobre o{' '}
							<span id="text-react">React</span> e seu conceito de componentes,
							que visa tornar o desenvolvimento de aplicativos mais fácil. Além
							disso, estudei ferramentas da biblioteca como o{' '}
							<span id="text-redux">Redux</span>, React Router,
							<span id="testing-library">React Testing Library</span>, Context
							API e React Hooks, para tornar a utilização do React mais
							eficiente.
						</p>
					</div>
				</div>
				<div className="modules">
					<Subtitle subtitle={'<Back-End />'} />
					<div className="modules-text">
						<p>
							No back-end, aprendi sobre o <span id="text-docker">Docker</span>{' '}
							e seu poderoso gerenciamento de containers. Também aprendi sobre{' '}
							<span id="text-mysql">mySql</span>,{' '}
							<span id="text-nodejs">NodeJs</span>, arquitetura de software e
							ORM com <span id="sequelize">Sequelize</span> e JWT, utilizando o
							modelo MSC. Com essas ferramentas, produzi diversas API para
							estudar o conceito de cada uma.
						</p>
					</div>
				</div>
				<div className="modules">
					<Subtitle subtitle={'../Meus Projetos'} />
					<div className="modules-text">
						<p>
							Até agora, completei 27 projetos do curso da Trybe, além de alguns
							outros que fiz para meu estudo pessoal. Para ter uma melhor noção
							de meu conhecimento das ferramentas mencionadas acima, criei uma
							página com todos os projetos que fiz e o link do repositório de
							cada um deles, no link a seguir.
						</p>
					</div>
				</div>
				<div id="projects-link">
					<a href="/projects">{'clique aqui:~$ cd /Meus Projetos'}</a>
				</div>
			</div>
			<div id="skills-title-end">
				<p>{'}'}</p>
			</div>
		</article>
	);
}
