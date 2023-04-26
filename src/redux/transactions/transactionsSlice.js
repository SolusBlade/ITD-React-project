import { createSlice } from '@reduxjs/toolkit';
import {
  getTransaction,
  updateTransaction,
  removeTransaction,
  getCategoriesStat,
} from './transactionsOperations';

const fulfilledOperation = (state, payload, stateField) => {
   if (payload === 'no transactions for this period') {
     state[stateField] = [];
     state.isLoading = false;
     state.error = payload;
     return;
   }
   state[stateField] = payload;
   state.isLoading = false;
};

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
        fulfilledOperation(state, payload, 'transactions');
      })
      .addCase(removeTransaction.fulfilled, (state, { payload }) => {
        fulfilledOperation(state, payload, 'transactions');
      })
      .addCase(updateTransaction.fulfilled, (state, {payload}) => {
        fulfilledOperation(state, payload, 'transactions');
      })
      .addCase(getCategoriesStat.fulfilled, (state, { payload }) => {
        fulfilledOperation(state, payload, 'categoriesStat');
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
