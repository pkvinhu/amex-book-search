import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import booksReducer from './bks';

const reducer = combineReducers({
    booksFound: booksReducer
})

const store = createStore(reducer, applyMiddleware(thunk));
export default store;