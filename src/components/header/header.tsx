import React from 'react';
import './header.styles.sass';

export default function NavBar() {
	return (
		<header>
			<div id="header">
				<span id="logo">{'</GPA>'}</span>
				<nav id="navbar">
					<a className="navbar" id="homeHeader" href="/">
						Inicio
					</a>
					<a className="navbar" id="aboutHeader" href="/about">
						Sobre
					</a>
					<a href="/projects" className="navbar">
						Projetos
					</a>
					<a href="/contact" className="navbar">
						Contato
					</a>
				</nav>
			</div>
		</header>
	);
}
