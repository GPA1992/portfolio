import React from 'react';
import profilePicture from '../../../assets/profile.png';
import './profilePicture.styles.sass';

export default function ProfilePicture() {
	return (
		<div id="foto">
			<img id="picture" src={profilePicture} alt="" />
		</div>
	);
}
