import React from 'react';
import profilePicture from '../../../assets/profile.png';
import './styles.sass';

export default function ProfilePicture() {
	return (
		<div>
			<img id="picture" src={profilePicture} alt="" />
		</div>
	);
}
