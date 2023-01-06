import React, { useEffect } from 'react';
import './forms.styles.sass';
import useGlobalContext from '../../../../hooks/useGlobalContext';
import avatars from '../../../../data/avatarList';
import { VisitorToSend } from '../../../../types/Types';
import { sendPostRequest } from '../../../../services/api/index';

export default function forms() {
	const {
		avatar,
		setAvatar,
		fullComment,
		setFullComment,
		validateForm,
		setValidateForm,
	} = useGlobalContext();

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
		formVerify();
	}, []);

	const getFormInfo = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		const { name, value } = event.target;
		setFullComment({ ...fullComment, [name]: value } as VisitorToSend);
		formVerify();
	};

	const getFormInfoTextArea = (
		event: React.ChangeEvent<HTMLTextAreaElement>
	) => {
		event.preventDefault();
		const { name, value } = event.target;
		setFullComment({
			...fullComment,
			[name]: value,
		} as VisitorToSend);
		formVerify();
	};

	const formVerify = () => {
		const { name, position, comment } = fullComment;
		const errors = [!name.length, !position.length, !comment.length];
		const runErrors = errors.some((erro) => erro === true);
		setValidateForm(!runErrors);
	};

	const clearForm = () => {
		setFullComment({
			name: '',
			position: '',
			comment: '',
			avatar,
		} as VisitorToSend);
		setValidateForm(false);
	};

	const runForm = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		await sendPostRequest(fullComment);
		clearForm();
	};

	return (
		<form onSubmit={runForm} id="form-box">
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
					value={fullComment.comment}
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
					value={fullComment.name}
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
					value={fullComment.position}
					maxLength={25}
				/>
			</div>
			<div id="submit">
				<button
					disabled={!validateForm}
					id="submit-btn"
					type="submit"
					name="submit-button"
				>
					Comentar
				</button>
				{!validateForm && (
					<div id="warning">
						<p>
							<span id="symbol">*</span>
							<span> Preencha todos os campos</span>
						</p>
					</div>
				)}
			</div>
		</form>
	);
}
