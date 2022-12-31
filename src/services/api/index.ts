import axios from 'axios';

export default async function fetchVisitors() {
	try {
		const response = await axios.get('https://api.gpa-portfolio.com/visitors');
		return response.data;
	} catch (error) {
		console.log(error);
	}
}
