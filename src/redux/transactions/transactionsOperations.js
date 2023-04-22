import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getCashflowTransactionsApi,
  removeCashflowTransactionApi,
  updateCashflowTransactionApi,
} from '../../services/connectoinsApi';
const period = JSON.parse(localStorage.getItem('selectedPeriod'));

export const getTransaction = createAsyncThunk(
  'statistic/getTransaction',
  async (period, thunkAPI) => {
    try {
      console.log(period);
      const data = await getCashflowTransactionsApi(period);
      console.log('data:', data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateTransaction = createAsyncThunk(
  'statistic/updateTransaction',
  async (credention, thunkAPI) => {
    try {
      const response = await updateCashflowTransactionApi(
        credention.idTransaction,
        credention.data
      );
      thunkAPI.dispatch(getCashflowTransactionsApi(period));
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeTransaction = createAsyncThunk(
  'statistic/deleteTransaction',
  async (transactionId, thunkAPI) => {
    try {
      await removeCashflowTransactionApi(transactionId);
      thunkAPI.dispatch(getCashflowTransactionsApi(period));
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
