import React from 'react';
import './about.styles.sass';
export default function AboutIntro() {
	return (
		<article id="about">
			Desde pequeno, sempre fui apaixonado por tecnologia. Meu primeiro contato
			foi com videogames, quando vi meu primo jogando no Phantom System (um
			clone do Nintendo dos anos 90). Circus Charlie com aquela tela colorida
			foi inesquecível. Eu sabia que um dia trabalharia com tecnologia assim que
			vi o personagem se mexer de acordo com meus comandos. Hoje sou estudante
			de desenvolvimento na Trybe, quase formado. Antes disso, tive muitas
			experiências profissionais e aprendizados. Para saber mais sobre minha
			história e carreira profissional (Se você for um recrutador, é altamente
			recomendavel clicar hehe).
			<br />
			<br />
			<div id="projects-link">
				<a href="/projects">{'clique aqui:~$ cd /Sobre Mim'}</a>
			</div>
		</article>
	);
}
