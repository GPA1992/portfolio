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

	return (
		<div className="lastVisitors">
			<div className="full-comment">
				<div id="avtr-box">
					<div id="div-avtr">
						<img
							id="avatar-picture"
							src="https://classic.exame.com/wp-content/uploads/2021/04/Elon-Musk.jpg?quality=70&strip=info&w=1024"
							alt=""
						/>
					</div>
				</div>
				<div id="cmt-box">
					<span>
						Eu nunca vi portfólio tão incrivel assim, você deveria ser o novo
						CEO do twitter!
					</span>
				</div>
				<div id="np-box"></div>
				<div id="dt-box"></div>
			</div>
		</div>
	);
}
