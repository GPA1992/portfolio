import React from 'react';
import ProfilePicture from './profile-picture/profilePicture';
import Comments from './commentsContainer/commentsContainer';
import './firstContainer.styles.sass';

export default function FirstContainer() {
	return (
		<div className="firstContainer">
			<ProfilePicture />
			<div id="info"></div>
			<div id="about"></div>
			<Comments />
		</div>
	);
}
