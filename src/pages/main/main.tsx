import React from 'react';
import FirstContainer from '../../components/firstcontainer/firstContainer';
import NavBar from '../../components/header/header';
import './styles.sass';

function Main() {
	return (
		<div className="main">
			<NavBar />
			<FirstContainer />
		</div>
	);
}

export default Main;
