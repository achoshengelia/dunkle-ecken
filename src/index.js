import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Theme from './themes';
import './i18n';

ReactDOM.render(
	<React.StrictMode>
		<Theme>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Theme>
	</React.StrictMode>,
	document.getElementById('root')
);
