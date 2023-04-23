import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCategory = createAsyncThunk(
  'cashFlow/getCategory',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/api/cashflow/category');
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getPresaving = createAsyncThunk(
  'cashFlow/getPresaving',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/api/cashflow/presaving');
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const postTransaction = createAsyncThunk(
  'cashFlow/postTransaction',
  async (transactionData, thunkAPI) => {
    try {
      const { data } = await axios.post('/api/cashflow', transactionData);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
