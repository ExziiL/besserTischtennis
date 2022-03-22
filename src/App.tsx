import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import AboutMe from './pages/AboutMe';
import Datenschutz from './pages/Datenschutz';
import Impressum from './pages/Impressum';

import NavBar from './components/sections/NavBar/NavBar';
import Footer from './components/sections/Footer/Footer';
import NavProvider from './context/NavContext';

function App() {
	return (
		<div className="max-w-[1280px] mx-auto 2xl:px-0 scroll-smooth">
			<Router>
				<NavProvider>
					<NavBar />
					<Routes>
						<Route path="/" element={<LandingPage />} />
						<Route path="/about" element={<AboutMe />} />
						<Route path="/datenschutz" element={<Datenschutz />} />
						<Route path="/impressum" element={<Impressum />} />
					</Routes>
					<Footer />
				</NavProvider>
			</Router>
		</div>
	);
}

export default App;
