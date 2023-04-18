// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// import { getCurrentUserApi, logOutApi, loginApi, registerApi } from 'services/connectoinsApi';

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = ``;
//   },
// };

// export const registerUser = createAsyncThunk(
//   'auth/register',
//   async (newUser, thunkApi) => {
//     try {
//       const user = await registerApi(newUser);
//       token.set(user.token);
//       return user;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );
// export const loginUser = createAsyncThunk(
//   'auth/login',
//   async (newUser, thunkApi) => {
//     try {
//       const user = await loginApi(newUser);
//       token.set(user.token);
//       return user;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );
// export const logOutUser = createAsyncThunk(
//   'auth/logOut',
//   async (_, thunkApi) => {
//     try {
//       const user = await logOutApi();
//       token.unset();
//       return user;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );
// export const getCurrentUser = createAsyncThunk(
//   'auth/getCurrentUser',
//   async (token, thunkApi) => {
//     try {
//       const user = await getCurrentUserApi(token);
//       return user;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );
