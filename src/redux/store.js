import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import { dynamicsReducer } from './dynamics/DynamicsSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { ownPlanReducer } from './plan/planSlice';
import expensesReducer from './expenses/expensesSlice';
import { transactionsReducer } from './transactions/transactionsSlice';

const persistAuthConfig = {
  key: 'auth',
  storage,
  whitelist: [`token`],
};

const persistDynamicsConfig = {
  key: 'image',
  storage,
  whitelist: [`flatImage`],
};
const persistedDynamicsReducer = persistReducer(
  persistDynamicsConfig,
  dynamicsReducer
);

const persistedAuthReducer = persistReducer(persistAuthConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    ownPlan: ownPlanReducer,
    expenses: expensesReducer,
    dynamics: persistedDynamicsReducer,
    statistics: transactionsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

