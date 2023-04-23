import Container from 'components/Container/Container';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategory, getPresaving } from 'redux/expenses/expensesOperations';
import s from './ExpensesPage.module.scss';
import { selectorIsLoggedIn } from 'redux/auth/authSelectors';
import TransactionDataList from 'components/TransactionDataList/TransactionDataList';

const ExpensesPage = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectorIsLoggedIn);
  useEffect(() => {
    isLoggedIn && dispatch(getCategory());
    isLoggedIn && dispatch(getPresaving());
  }, [dispatch, isLoggedIn]);

  return (
    <section className={s.vectorImg}>
      <Container>
        <TransactionDataList />
      </Container>
    </section>
  );
};

export default ExpensesPage;
