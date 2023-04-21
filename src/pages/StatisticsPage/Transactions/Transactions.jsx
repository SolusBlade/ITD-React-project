import TransactionsItem from './TransactionsItem/TransactionsItem';
import css from './Transactions.module.scss';
import ModalTransaction from './ModalTransactions/ModalTransactions';
import { useState } from 'react';
import statisticsOperations from 'redux/transactions/transactions-operations';
import { selectTransactions } from 'redux/transactions/transactions-selector';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
const Transactions = () => {
  const transaction = useSelector(selectTransactions);

  const dispatch = useDispatch();
  useEffect(() => {
    // setTransactions(selectTransactions);
    const period = JSON.parse(localStorage.getItem('selectedPeriod'));
    const data = { ...period };
    dispatch(statisticsOperations.expenseStatistic(data));
  }, [dispatch]);
  const removeTransaction = id => {
    dispatch(statisticsOperations.removeExpense(id));
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      {transaction === 0 && (
        <div className={css.noTransactionWrapper}>
          <p className={css.noTransactionText}>You have no transactions</p>
        </div>
      )}
      <ul className={css.transactionList}>
        {transaction &&
          transaction.map(({ _id: id, sum, comment, category, date }) => (
            <TransactionsItem
              openModal={openModal}
              key={id}
              sum={sum}
              comment={comment}
              category={category}
              date={date}
              removeTransaction={() => removeTransaction('id')}
            />
          ))}
      </ul>

      {isModalOpen && <ModalTransaction closeModal={closeModal} />}
    </>
  );
};

export default Transactions;
