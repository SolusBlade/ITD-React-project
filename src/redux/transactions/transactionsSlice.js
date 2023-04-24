import { createSlice } from '@reduxjs/toolkit';
import {
  getTransaction,
  updateTransaction,
  removeTransaction,
  getCategoriesStat,
} from './transactionsOperations';

const initialState = {
  transactions: [],
  categoriesStat: [],
  isLoading: false,
  error: null,
};

const transactionsSlice = createSlice({
  name: 'statistic',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(getTransaction.fulfilled, (state, { payload }) => {
        if (payload === 'no transactions for this period') {
          state.transactions = [];
          state.isLoading = false;
          state.error = payload;
          return;
        }
        state.transactions = payload;
        state.isLoading = false;
      })
      .addCase(removeTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(updateTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(getCategoriesStat.fulfilled, (state, { payload }) => {
        if (payload === 'no transactions for this period') {
          state.categoriesStat = [];
          state.isLoading = false;
          state.error = payload;
          return;
        }
        state.categoriesStat = payload;
        state.isLoading = false;
      })
      .addMatcher(
        action =>
          action.type.startsWith('statistic') &&
          action.type.endsWith('/pending') &&
          !action.type.endsWith('/removeTransaction/pending'),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        action =>
          action.type.startsWith('statistic') &&
          action.type.endsWith('/rejected'),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const transactionsReducer = transactionsSlice.reducer;
