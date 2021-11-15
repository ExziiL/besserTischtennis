import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ViewportProvider } from './context/ViewportProvider';

ReactDOM.render(
	<React.StrictMode>
		<ViewportProvider>
			<App />
		</ViewportProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
