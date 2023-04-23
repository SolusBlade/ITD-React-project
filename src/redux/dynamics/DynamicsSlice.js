import { createSlice } from "@reduxjs/toolkit";
import { getDynamics } from "./dynamicsOperations";

export const dynamicsSlice = createSlice({
    name: 'dynamics',
    initialState: {
      isLoading: false,
      error: null,
      statByYear: [
        {
          expense: 0,
          income: 0,
          month: "0"
        }
      ],
      year: null,
      month: null,
      accumulatedProc: null,
      accumulatedUah: null,
      squareМeters: null,
      accumToOneMoreMeters: null
    },
    extraReducers:{
      [getDynamics.pending](state, action){
        state.isLoading = true;
        console.log('pending')
      },
      [getDynamics.fulfilled](state, action) {
        // state.isLoading = false;
        // state.error = null;
        // state.statByYear = action.payload;
        console.log('fulfilled', action);
        return {...state, ...action.payload, isLoading: false, error: null}
      },
      [getDynamics.rejected](state, action) {
        state.isLoading = false;
        state.error = action.payload;
        console.log('rejected', action.payload)
      }
    }
});

export const dynamicsReducer = dynamicsSlice.reducer;