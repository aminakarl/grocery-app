import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<React.StrictMode>
		<App 
			products={[
				{ name: "Oranges", votes: 0 },
				{ name: "Bananas", votes: 0 }
			]}
		/>
	</React.StrictMode>,
	document.getElementById('root')
);

serviceWorker.unregister();
