import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getCashflowCategoriesPercentageApi,
  getCashflowTransactionsApi,
  removeCashflowTransactionApi,
  updateCashflowTransactionApi,
} from '../../services/connectoinsApi';

export const getTransaction = createAsyncThunk(
  'statistic/getTransaction',
  async (period, { rejectWithValue }) => {
    try {
      const data = await getCashflowTransactionsApi(period);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateTransaction = createAsyncThunk(
  'statistic/updateTransaction',
  async ({ id, values, date }, thunkAPI) => {
    try {
      await updateCashflowTransactionApi(id, values);
      const response = await getCashflowTransactionsApi(date);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeTransaction = createAsyncThunk(
  'statistic/removeTransaction',
  async ({id, date}, { rejectWithValue }) => {
    try {
      await removeCashflowTransactionApi(id);
      const data = await getCashflowTransactionsApi(date);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCategoriesStat = createAsyncThunk(
  'statistic/getCategoriesStat',
  async (period, { rejectWithValue }) => {
    try {
      const data = await getCashflowCategoriesPercentageApi(period);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
