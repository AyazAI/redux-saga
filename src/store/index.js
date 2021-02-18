import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from '../reducers';

import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/index';

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(sagaMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
                window.__REDUX_DEVTOOLS_EXTENSION__(),
        ),
    );
    sagaMiddleware.run(rootSaga);

    // order of dispatching does matter
    store.dispatch({ type: 'DANG' });
    // store.dispatch({ type: 'LOGIN' });
    // store.dispatch({ type: 'LOGOUT' });
    // store.dispatch({ type: 'LOGIN' });
    // store.dispatch({ type: 'LOGIN' });
    // store.dispatch({ type: 'HELLO' });
    // store.dispatch({ type: 'HELLO' });
    return store;
};

export default configureStore;
