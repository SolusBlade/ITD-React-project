import TransactionsItem from '../TransactionsItem/TransactionsItem';
import css from './Transactions.module.scss';
import ModalTransaction from '../ModalTransactions/ModalTransactions';
import { getTransaction } from 'redux/transactions/transactionsOperations';
import { selectedTransactions } from 'redux/transactions/transactionsSelector';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectorIsLoggedIn } from 'redux/auth/authSelectors';
const Transactions = () => {
  const transaction = useSelector(selectedTransactions);
  const isLoggedIn = useSelector(selectorIsLoggedIn);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const date = {
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
    };
    isLoggedIn && dispatch(getTransaction(date));
  }, [dispatch, isLoggedIn]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  // console.log(transaction);
  return (
    <>
      {transaction?.length === 0 && (
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
              id={id}
              sum={sum}
              comment={comment}
              category={category}
              date={date}
            />
          ))}
      </ul>
      {isModalOpen &&
        transaction.map(({ _id: id }) => (
          <ModalTransaction closeModal={closeModal} id={id} />
        ))}
    </>
  );
};

export default Transactions;
