import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// SETUP REDUX
import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducers } from './redux/rootReducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
