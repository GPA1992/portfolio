import React from 'react';
import './styles.sass';
import useGlobalContext from '../../../hooks/useGlobalContext';

export default function Counter() {
	const { count, setCount } = useGlobalContext();
	return (
		<div className="container">
			<h1>Context API</h1>
			<br />
			<h1>{count}</h1>
			<br />
			<button onClick={() => setCount(count + 1)}>Incrementar</button>
			<button onClick={() => setCount(count - 1)}>Decrementar</button>
		</div>
	);
}
