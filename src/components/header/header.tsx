import React from 'react';
import './header.styles.sass';

export default function NavBar() {
	return (
		<header className="header">
			<span className="logo">{'</GPA>'}</span>
			<nav id="navbar">
				<span className="navbar" id="homeHeader">
					Home
				</span>
				<span className="navbar" id="aboutHeader">
					About
				</span>
				<span className="navbar">Skills</span>
				<span className="navbar">Projects</span>
				<span className="navbar">Contact</span>
			</nav>
		</header>
	);
}
