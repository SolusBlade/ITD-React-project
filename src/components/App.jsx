import { Navigate, Route, Routes } from 'react-router-dom';
// eslint-disable-next-line
import { useDispatch, useSelector } from 'react-redux';

import HomePage from 'pages/HomePage/HomePage';
import Header from './Header/Header';
import { selectorIsLoggedIn } from 'redux/auth/authSelectors';
import DynamicsPage from 'pages/DynamicsPage/DynamicsPage';
import OwnPlanPage from 'pages/OwnPlanPage/OwnPlanPage';
import StatisticsPage from 'pages/StatisticsPage/StatisticsPage';
import ExpensesPage from 'pages/ExpensesPage/ExpensesPage';

const PrivateRoute = ({
  component,
  redirectTo = '/login',
}) => {
  const isLoggedIn = useSelector(selectorIsLoggedIn);
  return isLoggedIn ? component : <Navigate to={redirectTo} />;
};

// eslint-disable-next-line
const PublicRoute = ({
  component,
  redirectTo = '/contacts',
}) => {
  const isLoggedIn = useSelector(selectorIsLoggedIn);
  return !isLoggedIn ? component : <Navigate to={redirectTo} />;
};

const App = () => {


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}>
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
          element={<PrivateRoute component={<ExpensesPage />} />}
        />
        <Route
          path="/dynamics"
          element={<PrivateRoute component={<DynamicsPage />} />}
        />
        <Route path="/statistics" element={<StatisticsPage />}>
          {/* <Route
            path="/transactions"
            element={<PublicRoute component={<ModalLogin />} />}
          />
          <Route
            path="/categories"
            element={<PublicRoute component={<ModalRegister />} />}
          /> */}
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
