import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
// eslint-disable-next-line
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import HomePage from 'pages/HomePage/HomePage';
import Header from './Header/Header';
import {
  selectorIsAuthLoading,
  selectorIsLoggedIn,
  selectorToken,
} from 'redux/auth/authSelectors';
import DynamicsPage from 'pages/DynamicsPage/DynamicsPage';
import OwnPlanPage from 'pages/OwnPlanPage/OwnPlanPage';
import StatisticsPage from 'pages/StatisticsPage/StatisticsPage';
import ExpensesPage from 'pages/ExpensesPage/ExpensesPage';
import ModalRegister from './ModalRegister/ModalRegister';
import ModalLogin from './ModalLogin/ModalLogin';
import { getCurrentUserInfo } from 'redux/auth/authOperations';
import { useEffect } from 'react';

import Transactions from 'pages/StatisticsPage/TransactionsPage/Transactions/Transactions';
import Categories from 'pages/StatisticsPage/Categories/Categories';
import { getPersonalPlan } from 'redux/plan/planOperations';
import { selectorIsPlan } from 'redux/plan/planSelectors';
import Loader from './Loader/Loader';
import { toast } from 'react-toastify';
// eslint-disable-next-line
const PrivateRoute = ({ component, redirectTo = '/login' }) => {
  const isLoggedIn = useSelector(selectorIsLoggedIn);
  const isPlan = useSelector(selectorIsPlan);
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  if (!isPlan && location.pathname !== '/plan') {
    toast.error("Please choose a plan", {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
    return <Navigate to={redirectTo} />;
  }

  return component;
};

// eslint-disable-next-line
const PublicRoute = ({ component, redirectTo = '/plan' }) => {
  const isLoggedIn = useSelector(selectorIsLoggedIn);
  return !isLoggedIn ? component : <Navigate to={redirectTo} />;
};

const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectorToken);
  const isLoading = useSelector(selectorIsAuthLoading);
  const isLoggedIn = useSelector(selectorIsLoggedIn);

  useEffect(() => {
    if (token) {
      !isLoggedIn && dispatch(getCurrentUserInfo(token));
      isLoggedIn && dispatch(getPersonalPlan());
    }
  }, [token, dispatch, isLoggedIn]);

  return (
    <>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<PublicRoute restricted component={<HomePage />} />}>
            <Route
              path="/login"
              element={<PublicRoute component={<ModalLogin />} />}
            />
            <Route
              path="/register"
              element={<PublicRoute component={<ModalRegister />} />}
            />
          </Route>

          <Route
            path="/plan"
            element={<PrivateRoute component={<OwnPlanPage />} />}
          />
          <Route
            path="/cash-flow"
            element={<PrivateRoute component={<ExpensesPage />} />}
          />
          <Route
            path="/dynamics"
            element={<PrivateRoute component={<DynamicsPage />} />}
          />
          <Route
            path="/statistics"
            element={<PrivateRoute component={<StatisticsPage />} />}
          >
            <Route
              path="transactions"
              exact
              element={<PrivateRoute component={<Transactions />} />}
            />
            <Route
              path="categories"
              exact
              element={<PrivateRoute component={<Categories />} />}
            />
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
      <ToastContainer
        position="center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{
          width: '700px',
          height: '200px',
          fontSize: '24px',
          lineHeight: '36px',
        }}
      />
    </>
  );
};

export default App;
