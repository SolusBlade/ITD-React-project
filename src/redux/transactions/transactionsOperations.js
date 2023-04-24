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
  async ({ id, values }, thunkAPI) => {
    try {
      const response = await updateCashflowTransactionApi(id, values);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeTransaction = createAsyncThunk(
  'statistic/removeTransaction',
  async (transactionId, { rejectWithValue }) => {
    try {
      const data = await removeCashflowTransactionApi(transactionId);
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
