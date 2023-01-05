import React from 'react';
import ProfilePicture from './profile-picture/profilePicture';
import Comments from './comments-container/commentsContainer';
import Info from './info/info';
import About from './about-Intro/aboutIntro';
import './introducion.styles.sass';

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
