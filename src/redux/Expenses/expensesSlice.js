import { createSlice } from '@reduxjs/toolkit';
import {
  getCategory,
  getPresaving,
  postTransaction,
} from './expensesOperations';
import { logOutUser } from 'redux/auth/authOperations';

const initialState = {
  category: [],
  presaving: { monthLimit: 0, dailyLimit: 0, totalByDay: 0, totalByMounth: 0 },
  error: null,
  isLoading: true,
};

const expensesSlice = createSlice({
  name: 'cashFlow',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getCategory.fulfilled, (state, { payload }) => {
        state.category = payload;
        state.isLoading = false;
      })
      .addCase(getPresaving.fulfilled, (state, { payload }) => {
        state.presaving = {
          ...payload,
          totalByDay: +payload.totalByDay,
          totalByMounth: +payload.totalByMounth,
        };
        state.isLoading = false;
      })
      .addCase(postTransaction.fulfilled, (state, { payload }) => {
        if (payload.type === 'expense') {
          state.presaving.totalByDay += payload.sum;
          state.presaving.totalByMounth += payload.sum;
        } else {
          state.presaving.totalByDay -= payload.sum;
          state.presaving.totalByMounth -= payload.sum;
        }
        state.isLoading = false;
      })
      .addCase(logOutUser.fulfilled, (state, {_}) => {
        return initialState;
      })
      .addMatcher(
        action =>
          action.type.startsWith('cashFlow') &&
          action.type.endsWith('/pending'),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        action =>
          action.type.startsWith('cashFlow') &&
          action.type.endsWith('/rejected'),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export default expensesSlice.reducer;
