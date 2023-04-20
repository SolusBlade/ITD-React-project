import Container from 'components/Container/Container';
import TransactionDataList from './TransactionDataList/TransactionDataList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCategory, getPresaving } from 'redux/Expenses/expensesOperations';

const ExpensesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory());
    dispatch(getPresaving());
  }, [dispatch]);

  return (
    <Container>
      <TransactionDataList />
    </Container>
  );
};

export default ExpensesPage;
