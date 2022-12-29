import React from 'react';
import FirstContainer from '../../components/firstcontainer';
import NavBar from '../../components/header';
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
