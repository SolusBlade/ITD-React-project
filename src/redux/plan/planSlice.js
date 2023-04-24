import { addUserBalance, logOutUser } from 'redux/auth/authOperations';
import {
  calcPersonalPlan,
  getPersonalPlan,
  preCalcPersonalPlan,
  updatePersonalPlan,
} from './planOperations';

const { createSlice } = require('@reduxjs/toolkit');

const ownPlanInitialState = {
  plan: {
    salary: '',
    passiveIncome: '',
    savings: '',
    cost: '',
    footage: '',
    procent: '',
  },
  result: {
    year: 0,
    month: 0,
  },
  isLoading: true,
  error: null,
  isPlan: false,
};

const ownPlanSlice = createSlice({
  name: 'ownPlan',
  initialState: ownPlanInitialState,
  extraReducers: builder => {
    builder
      .addCase(preCalcPersonalPlan.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.plan = payload.plan;
        state.result = payload.result;
      })
      .addCase(calcPersonalPlan.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.isPlan = true;
        state.plan = payload.plan;
        state.result = payload.result;
      })
      .addCase(getPersonalPlan.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.plan = payload.plan;
        state.result = payload.result;
        state.isPlan = true;
      })
      .addCase(addUserBalance.fulfilled, (state, _) => {
        state.isLoading = false;
      })
      .addCase(updatePersonalPlan.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.plan = payload.plan;
        state.result = payload.result;
      })
      .addCase(logOutUser.fulfilled, (state, _) => {
        return {
          plan: {
            salary: '',
            passiveIncome: '',
            savings: '',
            cost: '',
            footage: '',
            procent: '',
          },
          result: {
            year: 0,
            month: 0,
          },
          isLoading: true,
          error: null,
          isPlan: false,
        };
      })
      .addMatcher(
        action =>
          action.type.startsWith('ownPlan') && action.type.endsWith('/pending'),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        action =>
          action.type.startsWith('ownPlan') &&
          action.type.endsWith('/rejected'),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const ownPlanReducer = ownPlanSlice.reducer;
