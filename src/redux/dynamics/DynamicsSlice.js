import { createSlice } from "@reduxjs/toolkit";
import { getDynamics, postImage } from "./dynamicsOperations";
import { logOutUser } from 'redux/auth/authOperations';

const initialState = {
  isLoading: false,
  error: null,
  statByYear: [
    {
      expense: 0,
      income: 0,
      month: '0',
    },
  ],
  year: null,
  month: null,
  accumulatedProc: null,
  accumulatedUah: null,
  squareМeters: null,
  accumToOneMoreMeters: null,
  flatImage: null,
};

export const dynamicsSlice = createSlice({
  name: 'dynamics',
  initialState,
  extraReducers: {
    [getDynamics.pending](state, action) {
      state.isLoading = true;
      console.log('pending');
    },
    [getDynamics.fulfilled](state, { payload }) {
      // state.isLoading = false;
      // state.error = null;
      // state.statByYear = action.payload;
      console.log('fulfilled', payload);
      return {
        ...state,
        ...payload,
        isLoading: false,
        error: null,
        flatImage: state.flatImage,
      };
      // return {...state, ...payload, isLoading: false, error: null, flatImage: payload.flatImage = null}
    },
    [getDynamics.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
      console.log('rejected', action.payload);
    },
    [postImage.fulfilled](state, action) {
      console.log('image fulfilled', action);
      state.flatImage = action.payload.image;
    },
    [logOutUser.fulfilled](state, action) {
      return initialState;
    },
  },
});

export const dynamicsReducer = dynamicsSlice.reducer;

// export const imageSlice = createSlice({

// })