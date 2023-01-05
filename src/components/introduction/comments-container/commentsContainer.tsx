import React from 'react';
import Comment from './comments/comments';
import Form from './forms/forms';
import './commentsContainer.styles.sass';
import Subtitle from '../../generic-components/subtitle/subtitle';

export default function Comments() {
	return (
		<aside id="comments">
			<div id="title-text">
				<Subtitle subtitle={'Ultimos Visitantes'} />
				<span id="comment-text">
					Olá, essas são as ultimas pessoas que visitaram o meu site, elas
					também deixaram um comentário, se você se sentir confortável eu
					ficaria feliz em receber seu comentário!
				</span>
			</div>
			<Comment />
			<Form />
		</aside>
	);
}
