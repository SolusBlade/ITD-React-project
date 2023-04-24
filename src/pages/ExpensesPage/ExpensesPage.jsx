import Container from 'components/Container/Container';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategory, getPresaving } from 'redux/Expenses/expensesOperations';
import { selectorIsLoggedIn } from 'redux/auth/authSelectors';
import TransactionDataList from 'components/TransactionDataList/TransactionDataList';
import Section from 'components/Section/Section';

const ExpensesPage = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectorIsLoggedIn);
  useEffect(() => {
    isLoggedIn && dispatch(getCategory());
    isLoggedIn && dispatch(getPresaving());
  }, [dispatch, isLoggedIn]);

  return (
    <Section>
      <Container>
        <TransactionDataList />
      </Container>
    </Section>
  );
};

export default ExpensesPage;
