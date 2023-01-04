import React from 'react';
import ProfilePicture from './profile-picture/profilePicture';
import Comments from './commentsContainer/commentsContainer';
import Info from './info/info';
import About from './aboutIntro/aboutIntro';
import './firstContainer.styles.sass';

export default function FirstContainer() {
	return (
		<section id="first-container">
			<ProfilePicture />
			<Info />
			<About />
			<Comments />
		</section>
	);
}
