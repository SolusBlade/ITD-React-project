import axios from 'axios';

axios.defaults.baseURL = 'https://flat-backend.p.goit.global';

// Запросы для работы с юзером

export const loginApi = user => {
  return axios.post('/api/user/login', user).then(r => r.data);
};

export const registerApi = user => {
  return axios.post('/api/user/register', user).then(r => r.data);
};

export const logOutApi = () => {
  return axios.get('/api/user/logout').then(r => r.data);
};

export const getCurrentUserInfoApi = () => {
  return axios.get('/api/user/info').then(r => r.data);
};

export const addUserBalanceApi = balance => {
  return axios.put('/api/user/addBalance', balance).then(r => r.data);
};

// Запросы для персонального плана

export const preCalcPersonalPlanApi = planData => {
  return axios.post('/api/personal-plan/pre', planData).then(r => r.data);
};

export const calcPersonalPlanApi = planData => {
  return axios.post('/api/personal-plan', planData).then(r => r.data);
};

export const getPersonalPlanApi = () => {
  return axios.get('/api/personal-plan').then(r => r.data);
};

export const updatePersonalPlanApi = planData => {
  return axios.put('/api/personal-plan', planData).then(r => r.data);
};

// *Хз нужно или нет
export const getPersonalPlanLimitsApi = data => {
  return axios.get('/api/personal-plan/daily-limit', data).then(r => r.data);
};

// Запросы для транзакций

export const getCashflowCategoriesApi = () => {
  return axios.get('/api/cashflow/category').then(r => r.data);
};

export const getCashflowPresavingsApi = () => {
  return axios.get('/api/cashflow/presaving').then(r => r.data);
};

export const addCashflowTransactionApi = transaction => {
  return axios.post('/api/cashflow/', transaction).then(r => r.data);
};

export const getCashflowTransactionsApi = ({year, month}) => {
  return axios
    .get('/api/cashflow/', {
      params: {
        year,
        month,
      },
    })
    .then(r => r.data);
};

export const removeCashflowTransactionApi = id => {
  return axios.delete(`/api/cashflow/${id}`).then(r => r.data);
};

export const updateCashflowTransactionApi = (id, newTransaction) => {
  return axios.put(`/api/cashflow/${id}`, newTransaction).then(r => r.data);
};

export const getCashflowCategoriesPercentageApi = (year, month) => {
  return axios
    .get('/api/cashflow/stat', {
      params: {
        year,
        month,
      },
    })
    .then(r => r.data);
};

// Запросы для статистики

export const getDynamicsApi = () => {
  // console.log('token', localStorage.getItem("persist:auth"))
  return axios.get('/api/dynamics/').then(r => r.data);
  // const data = axios.get(`/api/dynamics/,${JSON.parse(localStorage.getItem("persist:auth"))}`);
  // console.log(data)
};

export const getDynamicsByMonthApi = (year, month) => {
  return axios
    .get('/api/dynamics/by-month', {
      params: {
        year,
        month,
      },
    })
    .then(r => r.data);
};

// Тут нужно будет подумать, пока не готово
export const addDynamicsImageApi = () => {
  return axios.patch('/api/dynamics/flatImage').then(r => r.data);
};
const categoryTypeStatistic = async () => {
  return await axios.get('/statistic/by-category');
};

const expenseStatistic = async period => {
  const { year, month } = period;
  return await axios.get(`/statistic/by-expense?year=${year}&month=${month}`);
};

const categoriesStatistic = async period => {
  return await axios.get(
    `/statistic/by-category?year=${period.year}&month=${period.month}`
  );
};

const removeExpense = async transactionId => {
  return await axios.delete(`/transaction/${transactionId}`);
};

const updateTransaction = async (idTransaction, data) => {
  return await axios.patch(`/transaction/${idTransaction}`, data);
};

export const statisticsAPI = {
  categoryTypeStatistic,
  expenseStatistic,
  categoriesStatistic,
  removeExpense,
  updateTransaction,
};
