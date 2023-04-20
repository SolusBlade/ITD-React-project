import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCategory = createAsyncThunk(
  'get/category',
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
  'get/presaving',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/api/cashflow/presaving');
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getTransaction = createAsyncThunk(
  'get/transaction',
  async (transactionData, thunkAPI) => {
    try {
      const { data } = await axios.post('/api/cashflow', transactionData);

      console.log(data);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
