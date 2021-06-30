import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import store from './store/store';
import {Provider} from 'react-redux';

ReactDOM.render(
	<Provider store={store}>
		<h1>Henry</h1>
	</Provider>,
	document.querySelector('#root')
);