import TransactionsItem from '../TransactionsItem/TransactionsItem';
import css from './Transactions.module.scss';
import ModalTransaction from '../ModalTransactions/ModalTransactions';
import { removeTransaction } from 'redux/transactions/transactionsOperations';
import { selectedTransactions } from 'redux/transactions/transactionsSelector';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

const Transactions = () => {
  const transactions = useSelector(selectedTransactions);
  const [transactionData, setTransactionData] = useState(null);
  const dispatch = useDispatch();

  const openModal = (data) => {
    setTransactionData(data);
  };

  const closeModal = () => setTransactionData(null);

  const handleRemoveTransaction = (id, newDate) => {
    const date = new Date(newDate);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    dispatch(removeTransaction({id, date: { year, month }}));
  };

  return (
    <>
      {transactions?.length === 0 ? (
        <div className={css.noTransactionWrapper}>
          <p className={css.noTransactionText}>You have no transactions</p>
        </div>
      ) : (
        <ul className={css.transactionList}>
          {transactions &&
            transactions.map(({ _id: id, sum, comment, category, date }) => (
              <TransactionsItem
                key={id}
                openModal={openModal}
                id={id}
                sum={sum}
                comment={comment}
                category={category}
                date={date}
                handleRemoveTransaction={handleRemoveTransaction}
              />
            ))}
        </ul>
      )}
      {transactionData && (
        <ModalTransaction
          closeModal={closeModal}
          transactionData={transactionData}
        />
      )}
    </>
  );
};

export default Transactions;
