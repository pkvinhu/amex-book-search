import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import byTitleReducer from './bksByTitle';

const reducer = combineReducers({
    byTitle: byTitleReducer
})

const store = createStore(reducer, applyMiddleware(thunk));
export default store;