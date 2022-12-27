import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Main from './views/main';
import GlobalContextProvider from './contexts/GlobalContextProvider';

export default function MainRoutes() {
	return (
		<GlobalContextProvider>
			<HashRouter>
				{/* <Routes> */}
				<Route path="/portfolio" element={<h1>Portfólio</h1>} />
				<Route path="/portfolio/main" element={<Main />} />
				<Route path="*" element={<h1> 404 - Not found </h1>} />
				{/* </Routes> */}
			</HashRouter>
		</GlobalContextProvider>
	);
}
