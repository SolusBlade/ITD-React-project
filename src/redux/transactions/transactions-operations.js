import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCashflowTransactionsApi, statisticsAPI } from '../../services/connectoinsApi';
const period = JSON.parse(localStorage.getItem('selectedPeriod'));

export const categoryTypeStatistic = createAsyncThunk(
  'statistic/category',
  async (_, thunkAPI) => {
    try {
      const { data } = await statisticsAPI.categoryTypeStatistic();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const expenseStatistic = createAsyncThunk(
  'statistic/getExpense',
  async (period, thunkAPI) => {
    try {
      console.log(period)
      const data = await getCashflowTransactionsApi(period);
      console.log("data:", data)
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const categoryStatistic = createAsyncThunk(
  'statistic/categories',
  async (period, thunkAPI) => {
    try {
      const { data } = await statisticsAPI.categoriesStatistic(period);

      return data.calculatedResult;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateTransaction = createAsyncThunk(
  'statistic/update',
  async (credention, thunkAPI) => {
    try {
      const response = await statisticsAPI.updateTransaction(
        credention.idTransaction,
        credention.data
      );
      thunkAPI.dispatch(expenseStatistic(period));
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeExpense = createAsyncThunk(
  'statistic/delete',
  async (transactionId, thunkAPI) => {
    try {
      await statisticsAPI.removeExpense(transactionId);
      thunkAPI.dispatch(expenseStatistic(period));
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const statisticsOperations = {
  categoryTypeStatistic,
  expenseStatistic,
  categoryStatistic,
  removeExpense,
  updateTransaction,
};
export default statisticsOperations;
