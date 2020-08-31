import { createStore } from 'redux';
import rootReducer from './modules/user/reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}

const persisteReducers = persistReducer(persistConfig, rootReducer);

const store = createStore(persisteReducers);
const persistor = persistStore(store);

export  { store, persistor };