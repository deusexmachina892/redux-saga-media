import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';


const configureStore = () => {
    const sagaMiddleWare  = createSagaMiddleware();
    return {
        ...createStore(rootReducer,
            applyMiddleware(sagaMiddleWare)),
            runSaga: sagaMiddleWare.run(rootSaga)
    }
}

export default configureStore;