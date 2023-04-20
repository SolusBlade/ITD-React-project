import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDynamicsApi, getDynamicsByMonthApi } from "services/connectoinsApi";

export const getDynamics = createAsyncThunk(
    'dynamics/getDynamics',

    async (_, thunkAPI) => {
        try{
            const response = await getDynamicsApi();
            console.log('getDynamics');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }    
)

export const getDynamicsByMonth = createAsyncThunk(
    'dynamics/getDynamicsByMonth',

    async (data, thunkAPI) => {
        try {
            const response = await getDynamicsByMonthApi(data.year, data.month);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)