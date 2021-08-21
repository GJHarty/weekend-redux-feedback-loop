import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// Organize our response data so it can be easily formatted on the review page
const responseReducer = (state = {  
                                    feeling: 0, 
                                    understanding: 0, 
                                    supported: 0, 
                                    comment: ''
                                }, action) => {
    if (action.type === 'ADD_FEELING_ANSWER') {
        return {...state, feeling: Number(action.payload.value)};
    } else if (action.type === 'ADD_UNDERSTANDING_ANSWER') {
        return {...state, understanding: Number(action.payload.value)};
    } else if (action.type === 'ADD_SUPPORTED_ANSWER') {
        return {...state, supported: Number(action.payload.value)};
    } else if (action.type === 'ADD_COMMENT') {
        return {...state, comment: action.payload};
    };
    return state;
};

// store responses in an array so we can iterate through and display on the admin screen
const resultReducer = (state = [], action) => {
    return state;
};

// This makes it possible to seperate out the table component and still retrieve values
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
