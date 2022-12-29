import React from 'react';
import Comment from './comments/comments';
import './commentsContainer.styles.sass';

export default function Comments() {
	return (
		<div id="comments">
			<div id="title-text">
				<span id="comments-title">ultimos visitantes</span>
				<span id="comment-text">
					Olá, essas são as ultimas pessoas que visitaram o meu site, elas
					também deixaram um comentário, se você se sentir confortável eu
					ficaria feliz em receber seu comentário!
				</span>
			</div>
			<Comment />
		</div>
	);
}
