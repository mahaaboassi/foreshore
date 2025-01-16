// src/redux/store.js
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { reducerLang } from './reducers/lang';
import { reducerNotification } from './reducers/notification';

const rootReducer = combineReducers({
    lang : reducerLang,
    notification : reducerNotification
    // Add other reducers here
});

const store = createStore(rootReducer);

export default store;