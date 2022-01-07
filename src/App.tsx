import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import AboutMe from './pages/AboutMe';

import NavBar from './components/sections/NavBar/NavBar';
import Footer from './components/sections/Footer/Footer';
import NavProvider from './context/NavContext';

function App() {
	return (
		<div className="max-w-[1280px] mx-auto 2xl:px-0 scroll-smooth">
			<NavProvider>
				<NavBar />
				<Router>
					<Routes>
						<Route path="/" element={<LandingPage />} />
						<Route path="/about" element={<AboutMe />} />
					</Routes>
				</Router>
				<Footer />
			</NavProvider>
		</div>
	);
}

export default App;
