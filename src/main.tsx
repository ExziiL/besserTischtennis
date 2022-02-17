import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ViewportProvider } from './context/ViewportProvider';

// import WebFont from 'webfontloader';

// WebFont.load({
// 	google: {
// 		families: ['Lato:300,400,500,600,700', 'sans-serif'],
// 	},
// });

ReactDOM.render(
	<React.StrictMode>
		<ViewportProvider>
			<App />
		</ViewportProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
