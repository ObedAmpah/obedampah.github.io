import {combineReducers  } from 'redux';

import APIreducer from './reducer';

const rootReducer = combineReducers({
  apiReducer: APIreducer
});
