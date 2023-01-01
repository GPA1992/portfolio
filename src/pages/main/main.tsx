import React from 'react';
import FirstContainer from '../../components/firstContainer/firstContainer';
import NavBar from '../../components/header/header';
import SecondContainer from '../../components/secondContainer/secondContainer';
import './styles.sass';

function Main() {
	return (
		<div className="main">
			<NavBar />
			<FirstContainer />
			<SecondContainer />
		</div>
	);
}

export default Main;
