import React from 'react';
import './header.styles.sass';

export default function NavBar() {
	return (
		<header className="header">
			<span className="logo">{'</GPA>'}</span>
			<nav id="navbar">
				<span className="navbar" id="homeHeader">
					home
				</span>
				<span className="navbar" id="aboutHeader">
					about
				</span>
				<span className="navbar">skills</span>
				<span className="navbar">projects</span>
				<span className="navbar">contact</span>
			</nav>
		</header>
	);
}
