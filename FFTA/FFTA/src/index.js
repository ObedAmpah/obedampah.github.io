import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

import rootReducer from './rootReducer';

// Logger to follow redux in the console
const logger = createLogger({
  collapsed: true
});


// Creates our store (State DB used in applicaton)
const store = createStore( rootReducer,
  applyMiddleware(
    thunk,
    promise,
    logger
  ));

// Wrap our APP in the Provider to attach our store to it
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
