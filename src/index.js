import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const responseReducer = (state = [], action) => {
    return state;
};

const resultReducer = (state = [], action) => {
    return state;
};

const storeInstance = createStore(
    combineReducers({
        responseReducer,
        resultReducer,
    }),
    applyMiddleware(logger),
);

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
