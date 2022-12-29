import React from 'react';
import ProfilePicture from './ profile-picture';
import Comments from './commentsContainer';
import './styles.sass';

export default function FirstContainer() {
	return (
		<div className="firstContainer">
			<div id="foto">
				<ProfilePicture />
			</div>
			<div id="info"></div>
			<div id="about"></div>
			<div id="comments">
				<span id="comments-title">ultimos visitantes</span>
				<p>
					Olá, essas são as ultimas pessoas que visitaram o meu site, elas
					também deixaram um comentário, se você se sentir confortável eu
					ficaria feliz em receber seu comentário!
				</p>
				<Comments />
			</div>
		</div>
	);
}
