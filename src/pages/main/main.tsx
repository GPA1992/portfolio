import React from 'react';
import NavBar from '../../components/header/header';
import Introduction from '../../components/introduction/introducion';
import SecondContainer from '../../components/skills/skills';
import './main.styles.sass';

function Main() {
	return (
		<div>
			<NavBar />
			<main className="main">
				<Introduction />
				<SecondContainer />
			</main>
		</div>
	);
}

export default Main;
