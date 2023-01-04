import { useState } from 'react';

export default function useGlobalContextProvider() {
	const [count, setCount] = useState(0);
	const [visitors, setVisitors] = useState([]);
	const [avatar, setAvatar] = useState(
		'https://avatars.dicebear.com/api/bottts/happy.jpg'
	);
	const [fullComment, setFullComment] = useState({
		name: '',
		position: '',
		comment: '',
		avatar: '',
	});
	const [validateForm, setValidateForm] = useState(true);
	return {
		count,
		setCount,
		visitors,
		setVisitors,
		avatar,
		setAvatar,
		fullComment,
		setFullComment,
		validateForm,
		setValidateForm,
	};
}
