import Container from 'components/Container/Container';
import TransactionDataList from './TransactionDataList/TransactionDataList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategory, getPresaving } from 'redux/Expenses/expensesOperations';
import s from '../ExpensesPage/TransactionDataList/TransactionDataList.module.scss';
import { selectorIsLoggedIn } from 'redux/auth/authSelectors';

const ExpensesPage = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectorIsLoggedIn);
  useEffect(() => {
    isLoggedIn && dispatch(getCategory());
    isLoggedIn && dispatch(getPresaving());
  }, [dispatch, isLoggedIn]);

  return (
    <div className={s.vectorImg}>
      <Container>
        <TransactionDataList />
      </Container>
    </div>
  );
};

export default ExpensesPage;
