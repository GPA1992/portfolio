import React from 'react';
import profilePicture from '../../../assets/lensa/hs.jpg';
import LightBg from '../../../assets/black-bg.png';
import './profilePicture.styles.sass';

export default function ProfilePicture() {
	return (
		<div id="foto">
			<div id="code-box">
				<img id="code" src={LightBg} alt="background" />
			</div>
			<div id="profile-box">
				<img id="profile-selfie" src={profilePicture} alt="profile" />
			</div>
		</div>
	);
}
