// src/redux/store.js
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { reducerLang } from './reducers/lang';

const rootReducer = combineReducers({
    lang: reducerLang,
    // Add other reducers here
});

const store = createStore(rootReducer);

export default store;