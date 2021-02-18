import { combineReducers } from 'redux';

import imageReducer from './ImageReducer';
import loadingReducer from './loadingReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    images: imageReducer,
    errorReducer: errorReducer,
});

export default rootReducer;
