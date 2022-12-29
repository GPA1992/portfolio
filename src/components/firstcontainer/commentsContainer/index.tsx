import React from 'react';
import Comment from './comments';
import './styles.sass';

export default function Comments() {
	return (
		<div className="lastVisitors">
			<div id="lastComments">
				<Comment />
			</div>
			<form id="commentForm" action=""></form>
		</div>
	);
}
