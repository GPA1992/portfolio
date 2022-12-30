import React from 'react';
import ProfilePicture from './profile-picture/profilePicture';
import Comments from './commentsContainer/commentsContainer';
import Info from './info/info';
import About from './about/about';
import './firstContainer.styles.sass';

export default function FirstContainer() {
	return (
		<div className="firstContainer">
			<ProfilePicture />
			<Info />
			<About />
			<Comments />
		</div>
	);
}
