import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  calcPersonalPlanApi,
  preCalcPersonalPlanApi,
} from 'services/connectoinsApi';

export const preCalcPersonalPlan = createAsyncThunk(
  'ownPlan/preCalc',
  async (inputs, { rejectWithValue }) => {
    try {
      const {
        salary,
        passiveIncome,
        savings,
        cost,
        footage,
        procent,
        year,
        month,
      } = await preCalcPersonalPlanApi(inputs);

      const plan = { salary, passiveIncome, savings, cost, footage, procent };
      const result = { year, month };

      return { plan, result };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const calcPersonalPlan = createAsyncThunk(
  'ownPlan/calcPlan',
  async (inputs, { rejectWithValue }) => {
    try {
      const {
        salary,
        passiveIncome,
        savings,
        cost,
        footage,
        procent,
        year,
        month,
      } = await calcPersonalPlanApi(inputs);
      const plan = { salary, passiveIncome, savings, cost, footage, procent };
      const result = { year, month };
      return { plan, result };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
