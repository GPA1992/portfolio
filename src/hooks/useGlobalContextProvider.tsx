import { useState } from 'react';

export default function useGlobalContextProvider() {
	const [count, setCount] = useState(0);
	const [visitors, setVisitors] = useState([]);
	return {
		count,
		setCount,
		visitors,
		setVisitors,
	};
}
