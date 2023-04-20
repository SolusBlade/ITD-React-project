import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { token } from '../auth/authOperations';

export const getCategory = createAsyncThunk('category', async (_, thunkAPI) => {
  token.set(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2ZiYWJhZWVjNjVmZTc0MDkxODhmMSIsImlhdCI6MTY4MTg5ODQwNn0.WQjeYnUkfw3r3rvJgCkUaIORoEt-gFW8iZEz8b9EdEU'
  );
  try {
    const { data } = await axios.get('/api/cashflow/category');
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const getPresaving = createAsyncThunk(
  'presaving',
  async (_, thunkAPI) => {
    token.set(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2ZiYWJhZWVjNjVmZTc0MDkxODhmMSIsImlhdCI6MTY4MTg5ODQwNn0.WQjeYnUkfw3r3rvJgCkUaIORoEt-gFW8iZEz8b9EdEU'
    );
    try {
      const { data } = await axios.get('/api/cashflow/presaving');
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getTransaction = createAsyncThunk(
  'transaction',
  async (transactionData, thunkAPI) => {
    token.set(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2ZiYWJhZWVjNjVmZTc0MDkxODhmMSIsImlhdCI6MTY4MTg5ODQwNn0.WQjeYnUkfw3r3rvJgCkUaIORoEt-gFW8iZEz8b9EdEU'
    );
    try {
      const { data } = await axios.post('/api/cashflow', transactionData);
      // token.set(data.token);
      console.log(data);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
