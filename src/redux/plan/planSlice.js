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
    year: '',
    month: '',
  },
  isLoading: false,
  error: null,
};

const ownPlanSlice = createSlice({
  name: 'ownPlan',
  initialState: ownPlanInitialState,
  //   extraReducers: builder => {
  //     builder.addCase();
  //   },
});

export const ownPlanReducer = ownPlanSlice.reducer;
