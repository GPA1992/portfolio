import React from 'react';
import FirstContainer from '../../components/introduction/introducion';
import NavBar from '../../components/header/header';
import SecondContainer from '../../components/skills/skills';
import './main.styles.sass';

function Main() {
	return (
		<div>
			<NavBar />
			<main className="main">
				<FirstContainer />
				<SecondContainer />
			</main>
		</div>
	);
}

export default Main;
