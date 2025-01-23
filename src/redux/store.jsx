// src/redux/store.js
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { reducerLang } from './reducers/lang';
import { reducerNotification } from './reducers/notification';
import { reducerChat } from './reducers/chat';

const rootReducer = combineReducers({
    lang : reducerLang,
    notification : reducerNotification,
    chat : reducerChat
    // Add other reducers here
});

const store = createStore(rootReducer);

export default store;