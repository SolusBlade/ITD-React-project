import { useEffect, lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Header from './Header/Header';
import ModalRegister from './ModalRegister/ModalRegister';
import ModalLogin from './ModalLogin/ModalLogin';
import Loader from './Loader/Loader';
import { getCurrentUserInfo } from 'redux/auth/authOperations';
import { selectorIsLoggedIn, selectorToken } from 'redux/auth/authSelectors';
import { getPersonalPlan } from 'redux/plan/planOperations';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const DynamicsPage = lazy(() => import('pages/DynamicsPage/DynamicsPage'));
const OwnPlanPage = lazy(() => import('pages/OwnPlanPage/OwnPlanPage'));
const StatisticsPage = lazy(() =>
  import('pages/StatisticsPage/StatisticsPage')
);
const ExpensesPage = lazy(() => import('pages/ExpensesPage/ExpensesPage'));
const Transactions = lazy(() =>
  import('pages/StatisticsPage/TransactionsPage/Transactions/Transactions')
);
const Categories = lazy(() =>
  import('pages/StatisticsPage/Categories/Categories')
);

// eslint-disable-next-line
const PrivateRoute = ({ component, redirectTo = '/login' }) => {
  const isLoggedIn = useSelector(selectorIsLoggedIn);
  return isLoggedIn ? component : <Navigate to={redirectTo} />;
};

const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectorToken);
  const isLoggedIn = useSelector(selectorIsLoggedIn);

  useEffect(() => {
    if (token) {
      dispatch(getCurrentUserInfo(token));
    }
    isLoggedIn && dispatch(getPersonalPlan());
  }, [token, dispatch, isLoggedIn]);

  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
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
            <Route path="transactions" element={<Transactions />} />
            <Route
              path="categories"
              element={<Categories />}
              // element={<PublicRoute component={<ModalRegister />} />}
            />
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
