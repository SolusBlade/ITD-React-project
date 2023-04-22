import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  calcPersonalPlanApi,
  getPersonalPlanApi,
  preCalcPersonalPlanApi,
  updatePersonalPlanApi,
} from 'services/connectoinsApi';

async function destructureFunc(data) {
  const {
    salary,
    passiveIncome,
    savings,
    cost,
    footage,
    procent,
    year,
    month,
  } = await data;
  const plan = { salary, passiveIncome, savings, cost, footage, procent };
  const result = { year, month };
  return { plan, result };
}

export const preCalcPersonalPlan = createAsyncThunk(
  'ownPlan/preCalcPlan',
  async (inputs, { rejectWithValue }) => {
    try {
      const response = destructureFunc(preCalcPersonalPlanApi(inputs));
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const calcPersonalPlan = createAsyncThunk(
  'ownPlan/calcPlan',
  async (inputs, { rejectWithValue }) => {
    try {
      const response = destructureFunc(calcPersonalPlanApi(inputs));
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getPersonalPlan = createAsyncThunk(
  'ownPlan/getPlan',
  async (_, { rejectWithValue }) => {
    try {
      const response = destructureFunc(getPersonalPlanApi());
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updatePersonalPlan = createAsyncThunk(
  'ownPlan/updatePlan',
  async (planData, { rejectWithValue }) => {
    try {
      const response = destructureFunc(updatePersonalPlanApi(planData));
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
