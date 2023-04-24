import { createSlice } from "@reduxjs/toolkit";
import { getDynamics, getDynamicsByMonth, postImage } from "./dynamicsOperations";
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
  statByMonth: {
    income: null,
    expense: null,
    accumulated: null,
    plan: null,
    planInProcent: null,
  },
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
    [getDynamicsByMonth.fulfilled](state, { payload }) {
      console.log('payload:', payload);
      state.statByMonth = payload;
    },
    [logOutUser.fulfilled](state, action) {
      return initialState;
    },
  },
});

export const dynamicsReducer = dynamicsSlice.reducer;

// export const imageSlice = createSlice({

// })