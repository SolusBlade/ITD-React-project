import { createSlice } from '@reduxjs/toolkit';
import statisticsOperations, {
  expenseStatistic,
} from './transactions-operations';

const initialState = {
  transactions: null,
  isLoading: false,
  error: null,
  categories: null,
};

const transactionsSlice = createSlice({
  name: 'statistic',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(expenseStatistic.fulfilled, (state, { payload }) => {
        state.transactions = payload;
        state.isLoading = false;
      })
      .addCase(
        statisticsOperations.categoryStatistic.fulfilled,
        (state, action) => {
          state.categories = action.payload.result;
          state.isLoading = false;
        }
      )
      .addCase(
        statisticsOperations.removeExpense.fulfilled,
        (state, action) => {
          state.isLoading = false;
        }
      )
      .addCase(
        statisticsOperations.updateTransaction.fulfilled,
        (state, action) => {
          state.isLoading = false;
        }
      )
      .addCase(statisticsOperations.categoryTypeStatistic.fulfilled, state => {
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

export default transactionsSlice.reducer;
