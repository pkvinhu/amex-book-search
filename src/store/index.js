import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const reducer = combineReducers({})

const store = createStore(reducer, applyMiddleware(thunk));
export default store;