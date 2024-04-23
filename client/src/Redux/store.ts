import {configureStore, combineReducers} from '@reduxjs/toolkit';
import UserSlice from './UserSlice';
import NoteSlice from './NoteSlice';

import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    user: UserSlice,
    note:NoteSlice,
  });
  const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>
export default store
export {persistor};