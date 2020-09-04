import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSagas';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user']
}

const persisteReducers = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
const enhancer = applyMiddleware(sagaMiddleware);

const store = createStore(persisteReducers, enhancer);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export  { store, persistor };