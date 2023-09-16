import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import userReducer from './reducers/userReducer';
import loaderReducer from './reducers/loaderReducer';

const rootReducer = combineReducers({
    user: userReducer,
    loader: loaderReducer,
    // ...other reducers if you have more
});

const stores = createStore(rootReducer, applyMiddleware(thunk));

export default stores;
