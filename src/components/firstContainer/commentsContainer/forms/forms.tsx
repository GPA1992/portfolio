import React, { useEffect } from 'react';
import './forms.styles.sass';
import useGlobalContext from '../../../../hooks/useGlobalContext';
import avatars from '../../../../data/avatarList';
import { VisitorToSend } from '../../../../types/UserType';
import { sendPostRequest } from '../../../../services/api/index';

export default function forms() {
	const { avatar, setAvatar, fullComment, setFullComment } = useGlobalContext();

	const randomAvatar = () => {
		const anyAvatar = avatars[Math.floor(Math.random() * avatars.length)];
		const avt = `https://avatars.dicebear.com/api/${anyAvatar}/happy.jpg`;
		setAvatar(avt);
		setFullComment({
			...fullComment,
			avatar: avt,
		} as VisitorToSend);
	};

	useEffect(() => {
		randomAvatar();
	}, []);

	const getFormInfo = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setFullComment({ ...fullComment, [name]: value } as VisitorToSend);
	};

	const getFormInfoTextArea = (
		event: React.ChangeEvent<HTMLTextAreaElement>
	) => {
		const { name, value } = event.target;
		setFullComment({
			...fullComment,
			[name]: value,
		} as VisitorToSend);
	};

	const runForm = async () => {
		await sendPostRequest(fullComment);
	};
	return (
		<form id="form-box">
			<div id="avatar-form">
				<div id="set-avatar">
					<img id="random-avatar" src={avatar} alt="" />
				</div>
				<button
					name="avatar"
					type="button"
					id="randon-avt-btn"
					onClick={randomAvatar}
				>
					Random Avatar
				</button>
			</div>
			<div id="comment-form">
				<span>Escreva seu comentario</span>
				<textarea
					onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
						getFormInfoTextArea(event)
					}
					name="comment"
					id="text-area"
					maxLength={115}
				></textarea>
			</div>
			<div id="name-form">
				<span>Nome</span>
				<input
					onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
						getFormInfo(event)
					}
					name="name"
					id="name-input"
					type="text"
					maxLength={25}
				/>
			</div>
			<div id="position-form">
				<span>Profissão</span>
				<input
					onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
						getFormInfo(event)
					}
					name="position"
					id="position-input"
					type="text"
					maxLength={25}
				/>
			</div>
			<div id="submit">
				<button id="submit-btn" type="submit" onClick={runForm}>
					Comentar
				</button>
			</div>
		</form>
	);
}
