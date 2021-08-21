import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const responseReducer = (state = {  
                                    feeling: 0, 
                                    understanding: 0, 
                                    supported: 0, 
                                    comment: ''
                                }, action) => {
    if (action.type === 'ADD_FEELING_ANSWER') {
        return {...state, feeling: Number(action.payload.value)};
    }
    return state;
};

const resultReducer = (state = [], action) => {
    return state;
};

const tableAnswerReducer = (state = 0, action) => {
    if (action.type === 'SUBMIT_TABLE_VALUE') {
        return state = action.payload;
    } else if (action.type === 'RESET_TABLE_VALUE') {
        return state = 0;
    };
    return state;
};

const storeInstance = createStore(
    combineReducers({
        responseReducer,
        resultReducer,
        tableAnswerReducer,
    }),
    applyMiddleware(logger),
);

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
