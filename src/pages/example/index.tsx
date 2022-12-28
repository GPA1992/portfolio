import React from 'react';
import Counter from '../../components/example/counter';
import CounterWhitRedux from '../../components/example/counterWhitRedux';
import GetPokemonWhitRedux from '../../components/example/getPokemonWhitRedux';
import styles from './styles.module.scss';

function Main() {
	return (
		<div className={styles.container}>
			<Counter />
			<hr />
			<CounterWhitRedux />
			<hr />
			<GetPokemonWhitRedux />
		</div>
	);
}

export default Main;
