import { createSlice } from '@reduxjs/toolkit';
import statisticsOperations from './transactions-operations';

const initialState = {
  transactions: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
  categories: null,
};

const transactionsSlice = createSlice({
  name: 'statistic',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(statisticsOperations.expenseStatistic.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(
        statisticsOperations.expenseStatistic.fulfilled,
        (state, action) => {
          state.transactions = action.payload.transactions;
          state.isLoggedIn = true;
          state.isLoading = false;
        }
      )
      .addCase(
        statisticsOperations.expenseStatistic.rejected,
        (state, action) => {
          state.error = action.payload;
          state.isLoading = false;
        }
      )
      .addCase(statisticsOperations.categoryStatistic.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(
        statisticsOperations.categoryStatistic.fulfilled,
        (state, action) => {
          state.categories = action.payload.result;
          state.isLoggedIn = true;
          state.isLoading = false;
        }
      )
      .addCase(
        statisticsOperations.categoryStatistic.rejected,
        (state, action) => {
          state.error = action.payload;
          state.isLoading = false;
        }
      )
      .addCase(statisticsOperations.removeExpense.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(
        statisticsOperations.removeExpense.fulfilled,
        (state, action) => {
          state.isLoggedIn = true;
          state.isLoading = false;
        }
      )
      .addCase(statisticsOperations.removeExpense.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(statisticsOperations.updateTransaction.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(
        statisticsOperations.updateTransaction.fulfilled,
        (state, action) => {
          state.isLoggedIn = true;
          state.isLoading = false;
        }
      )
      .addCase(
        statisticsOperations.updateTransaction.rejected,
        (state, action) => {
          state.error = action.payload;
          state.isLoading = false;
        }
      )
      .addCase(statisticsOperations.categoryTypeStatistic.pending, state => {
        state.isLoading = true;
      })
      .addCase(statisticsOperations.categoryTypeStatistic.fulfilled, state => {
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(
        statisticsOperations.categoryTypeStatistic.rejected,
        (state, action) => {
          state.error = action.payload;
          state.isLoading = false;
        }
      );
  },
});

export const transactionsReducer = transactionsSlice.reducer;
