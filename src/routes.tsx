import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/main/main';
import Example from './pages/example';
import GlobalContextProvider from './contexts/GlobalContextProvider';
import About from './pages/about/about';
import Projects from './pages/projects/projects';
import Contact from './pages/contact/contact';

export default function MainRoutes() {
	return (
		<GlobalContextProvider>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/example" element={<Example />} />
				<Route path="*" element={<h1> 404 - Not found </h1>} />
			</Routes>
		</GlobalContextProvider>
	);
}
