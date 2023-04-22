import { createSlice } from '@reduxjs/toolkit';
import {
  getCategory,
  getPresaving,
  postTransaction,
} from './expensesOperations';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
const initialState = {
  category: [],
  presaving: { monthLimit: 0, dailyLimit: 0, totalByMounth: 0, totalByDay: 0 },
  transaction: {
    type: null,
    category: null,
    comment: null,
    sum: 0,
    date: null,
  },
  error: null,
};

const expensesSlice = createSlice({
  name: 'cashFlow',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getCategory.fulfilled, (state, { payload }) => {
        state.category = payload;
      })
      .addCase(getCategory.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(getPresaving.fulfilled, (state, { payload }) => {
        state.presaving = payload;
      })
      .addCase(getPresaving.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(postTransaction.fulfilled, (state, { payload }) => {
        if (payload.type === 'expense') {
          state.presaving.dailyLimit -= payload.sum;
        } else {
          return state;
        }
      })
      .addCase(postTransaction.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});

const persistExpensesConfig = {
  key: 'limits',
  storage,
  whitelist: ['dailyLimit', 'monthLimit'],
};

export const persistedExpensesReduser = persistReducer(
  persistExpensesConfig,
  expensesSlice.reducer
);

// export const expensesReducer = expensesSlice.reducer;
