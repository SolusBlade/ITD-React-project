import { Navigate, Route, Routes } from 'react-router-dom';
// eslint-disable-next-line
import { useDispatch, useSelector } from 'react-redux';

import HomePage from 'pages/HomePage/HomePage';
import Header from './Header/Header';
import { selectorIsLoggedIn, selectorToken } from 'redux/auth/authSelectors';
import DynamicsPage from 'pages/DynamicsPage/DynamicsPage';
import OwnPlanPage from 'pages/OwnPlanPage/OwnPlanPage';
import StatisticsPage from 'pages/StatisticsPage/StatisticsPage';
import ExpensesPage from 'pages/ExpensesPage/ExpensesPage';
import ModalRegister from './ModalRegister/ModalRegister';
import ModalLogin from './ModalLogin/ModalLogin';
import { getCurrentUserInfo } from 'redux/auth/authOperations';
import { useEffect } from 'react';
import Categories from 'pages/StatisticsPage/Categories/Categories';

// eslint-disable-next-line
const PrivateRoute = ({ component, redirectTo = '/login' }) => {
  const isLoggedIn = useSelector(selectorIsLoggedIn);
  return isLoggedIn ? component : <Navigate to={redirectTo} />;
};

// eslint-disable-next-line
const PublicRoute = ({ component, redirectTo = '/contacts' }) => {
  const isLoggedIn = useSelector(selectorIsLoggedIn);
  return !isLoggedIn ? component : <Navigate to={redirectTo} />;
};


const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectorToken);

  useEffect(() => {
    if (token) {
      dispatch(getCurrentUserInfo(token));
    }
  }, [token, dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/register" element={<ModalRegister />} />
          <Route path="/login" element={<ModalLogin />} />

          {/* <Route
            path="/login"
            element={<PublicRoute component={<ModalLogin />} />}
          />
          <Route
            path="/register"
            element={<PublicRoute component={<ModalRegister />} />}
          /> */}
        </Route>

        <Route
          path="/plan"
          element={<OwnPlanPage />}
          // element={<PrivateRoute component={<OwnPlanPage />} />}
        />
        <Route
          path="/cash-flow"
          // element={<PrivateRoute component={<ExpensesPage />} />}
          element={<ExpensesPage />}
        />
        <Route
          path="/dynamics"
          element={<DynamicsPage />}
          // element={<PublicRoute component={<DynamicsPage />} />}
        />
        <Route path="/statistics" element={<StatisticsPage />}>
         {/* <Route
            path="/transactions"
            element={</>}
            // element={<PublicRoute component={<ModalLogin />} />}
          /> */}
          <Route
            path="categories"
            element={<Categories/>}
            // element={<PublicRoute component={<ModalRegister />} />}
          />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
