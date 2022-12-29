import React, { useEffect } from 'react';
import useGlobalContext from '../../../../hooks/useGlobalContext';
import fetchVisitors from '../../../../services/api';
import './styles.sass';

export default function Comment() {
	const { visitors, setVisitors } = useGlobalContext();

	useEffect(() => {
		async function getVisitors() {
			const result = await fetchVisitors();
			setVisitors(await result);
		}
		getVisitors();
	}, []);

	return (
		<div className="comentarios">
			<div>
				{visitors.map((visitors) => (
					<div key={visitors.id}>
						<span>{visitors.comment}</span>
						<br />
						<span>{visitors.name}</span>
						<br />
						<span>{visitors.position}</span>
					</div>
				))}
			</div>
		</div>
	);
}
