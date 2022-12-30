import React, { useEffect } from 'react';
import useGlobalContext from '../../../../hooks/useGlobalContext';
import fetchVisitors from '../../../../services/api';
import './comments.styles.sass';

export default function Comment() {
	const { visitors, setVisitors } = useGlobalContext();

	useEffect(() => {
		async function getVisitors() {
			const result = await fetchVisitors();
			setVisitors(await result);
		}
		getVisitors();
	}, []);
	console.log(visitors);
	const dateFormat = (dateStr: Date) => {
		const year = String(dateStr).slice(0, 4);
		const mont = String(dateStr).slice(4, 8);
		const day = String(dateStr).slice(8, 10);
		return `${day}${mont}${year}`;
	};
	return (
		<div className="lastVisitors">
			{visitors.slice(-5).map((visitor) => (
				<div key={visitor.id} className="full-comment">
					<div id="avtr-box">
						<div id="div-avtr">
							<img id="avatar-picture" src={visitor.avatar} alt="" />
						</div>
					</div>
					<div id="cmt-box">{visitor.comment}</div>
					<div id="np-box">
						<span id="n-box">{visitor.name}</span>/
						<span id="p-box">{visitor.position}</span>
					</div>
					<div id="dt-box">{dateFormat(visitor.createdAt)}</div>
				</div>
			))}
		</div>
	);
}
