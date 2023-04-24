import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import {
  addUserBalanceApi,
  getCurrentUserInfoApi,
  logOutApi,
  loginApi,
  registerApi,
} from 'services/connectoinsApi';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

export const registerUser = createAsyncThunk(
  'auth/register',
  async (newUser, thunkApi) => {
    const { name, email, password } = newUser;
    try {
      await registerApi({ name, email, password });
      const userToken = await loginApi({ email, password });
      token.set(userToken);
      return { newUser, ...userToken };
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (newUser, thunkApi) => {
    const { email, password } = newUser;
    try {
      const userToken = await loginApi({ email, password });
      token.set(userToken);
      return userToken;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getCurrentUserInfo = createAsyncThunk(
  'auth/getCurrentUserInfo',
  async (_, { rejectWithValue, getState }) => {
    try {
      const {
        auth: { token: newToken },
      } = getState();
      token.set(newToken);
      const user = await getCurrentUserInfoApi();
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const {
        auth: { token },
      } = getState();
      return Boolean(token);
    },
  }
);

export const logOutUser = createAsyncThunk(
  'auth/logOut',
  async (_, thunkApi) => {
    try {
      const user = await logOutApi();
      token.unset();
      return user;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addUserBalance = createAsyncThunk(
  'auth/addBalance',
  async (balance, thunkApi) => {
    try {
      const newBalance = await addUserBalanceApi(balance);
      return newBalance;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
