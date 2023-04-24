
import { createAsyncThunk } from "@reduxjs/toolkit";
import { addDynamicsImageApi, getDynamicsApi, getDynamicsByMonthApi } from "services/connectoinsApi";

export const getDynamics = createAsyncThunk(
    'dynamics/getDynamics',

    async (_, thunkAPI) => {
        try{
            const response = await getDynamicsApi();

           return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }    
)

export const getDynamicsByMonth = createAsyncThunk(
  'dynamics/getDynamicsByMonth',

  async ({ year, month }, thunkAPI) => {
    try {
      const response = await getDynamicsByMonthApi(year, month);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const postImage = createAsyncThunk(
    'dynamics/postImage',

    async (data, thunkAPI) => {
        try{
            const response = await addDynamicsImageApi(data);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)