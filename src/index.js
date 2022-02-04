import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Theme from './themes';
import { BrowserRouter } from 'react-router-dom';
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
