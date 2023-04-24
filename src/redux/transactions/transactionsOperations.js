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
      // console.log(period);
      const data = await getCashflowTransactionsApi(period);
      // console.log('data:', data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateTransaction = createAsyncThunk(
  'statistic/updateTransaction',
  async ({ id, data }, thunkAPI) => {
    try {
      const response = await updateCashflowTransactionApi(id, data);
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
      await removeCashflowTransactionApi(transactionId);

      // const data = await getCashflowTransactionsApi();

      // const data = await getCashflowTransactionsApi(period);
      // return data;
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