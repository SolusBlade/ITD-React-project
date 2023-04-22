import { createSlice } from '@reduxjs/toolkit';
import {
  getTransaction,
  updateTransaction,
  removeTransaction,
} from './transactionsOperations';

const initialState = {
  transactions: [],
  isLoading: false,
  error: null,
};

const transactionsSlice = createSlice({
  name: 'statistic',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(getTransaction.fulfilled, (state, { payload }) => {
        state.transactions = payload;
        state.isLoading = false;
      })
      .addCase(removeTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(updateTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
      })

      .addMatcher(
        action =>
          action.type.startsWith('statistic') &&
          action.type.endsWith('/pending'),
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
