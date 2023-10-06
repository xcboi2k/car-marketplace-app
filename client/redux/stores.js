import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import userReducer from './reducers/userReducer';
import loaderReducer from './reducers/loaderReducer';
import listingReducer from './reducers/listingReducer';
import reviewReducer from './reducers/reviewReducer';

const rootReducer = combineReducers({
    user: userReducer,
    loader: loaderReducer,
    listing: listingReducer,
    review: reviewReducer,
    // ...other reducers if you have more
});

const stores = createStore(rootReducer, applyMiddleware(thunk));

export default stores;
