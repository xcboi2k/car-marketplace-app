import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
    user: userReducer,
    // ...other reducers if you have more
});

const stores = createStore(rootReducer, applyMiddleware(thunk));

export default stores;
