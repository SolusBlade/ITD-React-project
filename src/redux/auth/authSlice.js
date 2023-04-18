import { createSlice } from '@reduxjs/toolkit';

// import { getCurrentUser, logOutUser, loginUser, registerUser } from './authOperations';

const authSlice = createSlice({
  name: 'auth',

  initialState: {
    user: { name: null, email: null },
    token: null,
    balance: null,
    isLoggedIn: false,
  }
});

export default authSlice.reducer;
