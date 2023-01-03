import React from 'react';
import './header.styles.sass';

export default function NavBar() {
	return (
		<header className="header">
			<span className="logo">{'</GPA>'}</span>
			<nav id="navbar">
				<a className="navbar" id="homeHeader" href="/">
					Home
				</a>
				<a className="navbar" id="aboutHeader" href="/about">
					About
				</a>
				<a href="/projects" className="navbar">
					Projects
				</a>
				<a href="/contact" className="navbar">
					Contact
				</a>
			</nav>
		</header>
	);
}
