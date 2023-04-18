import Container from 'components/Container/Container';
import TransactionDataList from './TransactionDataList/TransactionDataList';
import ExpensesLimits from './ExpensesLimits/ExpensesLimits';
import ModalAddIncome from './ModalAddIncome/ModalAddIncome';
import { useState } from 'react';

const ExpensesPage = () => {
  const [modalData, setModalData] = useState(false);
  const openModal = () => {
    setModalData(true);
  };
  const closeModal = () => setModalData(false);
  return (
    <Container>
      <TransactionDataList />
      <ExpensesLimits openModal={openModal} />
      {modalData && <ModalAddIncome closeModal={closeModal} />}
    </Container>
  );
};

export default ExpensesPage;
