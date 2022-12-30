import axios from 'axios';

export default async function fetchVisitors() {
	try {
		const response = await axios.get('http://15.228.60.254:3000/visitors');
		return response.data;
	} catch (error) {
		console.log(error);
	}
}
