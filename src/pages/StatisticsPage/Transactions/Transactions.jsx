import TransactionsItem from './TransactionsItem/TransactionsItem';
import css from './Transactions.module.scss';
import ModalTransaction from './ModalTransactions/ModalTransactions';
import { useState } from 'react';

const Transactions = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <ul className={css.transactionList}>
        {/* {transaction &&
          transaction.map(({ _id: id, sum, comment, category, date }) => ( */}
        <TransactionsItem
          openModal={openModal}
          //   key={id}
          //   sum={sum}
          //   comment={comment}
          //   category={category}
          //   date={date}
          //   removeTransaction={() => removeTransaction(id)}
          //   updateTransaction={() => updateTransaction(id)}
        />
        {/* ))} */}
      </ul>

      {isModalOpen && <ModalTransaction closeModal={closeModal} />}
    </>
  );
};

export default Transactions;
