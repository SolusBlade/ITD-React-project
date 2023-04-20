import { createSlice } from '@reduxjs/toolkit';
import {
  getCategory,
  getPresaving,
  getTransaction,
} from './expensesOperations';

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
      .addCase(getTransaction.fulfilled, (state, { payload }) => {
        state.presaving.dailyLimit -= payload.sum;
      })
      .addCase(getTransaction.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});

export const expensesReducer = expensesSlice.reducer;
