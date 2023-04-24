import { useEffect, lazy, Suspense } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header/Header';
import ModalRegister from './ModalRegister/ModalRegister';
import ModalLogin from './ModalLogin/ModalLogin';
import { getCurrentUserInfo } from 'redux/auth/authOperations';
import { getPersonalPlan } from 'redux/plan/planOperations';
import { selectorIsPlan, selectorPlanIsLoading } from 'redux/plan/planSelectors';
import Loader from './Loader/Loader';
import {
  selectorIsAuthLoading,
  selectorIsLoggedIn,
  selectorIsUserExist,
} from 'redux/auth/authSelectors';

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

const PrivateRoute = ({ component, redirectTo = '/login' }) => {
  const isLoggedIn = useSelector(selectorIsLoggedIn);
  const isPlanLoading = useSelector(selectorPlanIsLoading);
  const isPlan = useSelector(selectorIsPlan);
  const location = useLocation();
  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  if (!isPlan && !isPlanLoading && location.pathname !== '/plan') {
    toast.error('Please choose a plan', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
    return <Navigate to="/plan" />;
  }


  return component;
};

const PublicRoute = ({ component, redirectTo = '/plan' }) => {
  const isLoggedIn = useSelector(selectorIsLoggedIn);
  return !isLoggedIn ? component : <Navigate to={redirectTo} />;
};

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectorIsAuthLoading);
  const isLoggedIn = useSelector(selectorIsLoggedIn);
  const isUserExist = useSelector(selectorIsUserExist);

  useEffect(() => {
    dispatch(getCurrentUserInfo());
  }, [dispatch, isLoggedIn]);

  useEffect(() => {
    isUserExist && dispatch(getPersonalPlan());
  }, [dispatch, isUserExist]);

  return (
    <>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route
              path="/"
              element={<PublicRoute restricted component={<HomePage />} />}
            >
              <Route path="/login" element={<ModalLogin />} />
              <Route path="/register" element={<ModalRegister />} />
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
              <Route path="transactions" exact element={<Transactions />} />
              <Route path="categories" exact element={<Categories />} />
            </Route>

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
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
