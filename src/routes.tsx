import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './views/main';
import Example from './views/example';
import GlobalContextProvider from './contexts/GlobalContextProvider';

export default function MainRoutes() {
	return (
		<GlobalContextProvider>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/example" element={<Example />} />
				<Route path="*" element={<h1> 404 - Not found </h1>} />
			</Routes>
		</GlobalContextProvider>
	);
}
