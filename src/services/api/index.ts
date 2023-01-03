import axios from 'axios';
import { VisitorToSend } from '../../types/UserType';

const expirationDate = new Date();
expirationDate.setDate(expirationDate.getDate() + 7);

axios.defaults.headers.common['Expires'] = expirationDate.toUTCString();

export async function fetchVisitors() {
	try {
		const response = await axios.get('https://api.gpa-portfolio.com/visitors');
		return response.data;
	} catch (error) {
		console.log(error);
	}
}

export async function sendPostRequest(newVisitor: VisitorToSend) {
	try {
		await axios.post('https://api.gpa-portfolio.com/visitors', newVisitor, {
			headers: {
				'content-Type': 'application/json',
			},
		});
	} catch (error) {
		console.log(error);
	}
}
