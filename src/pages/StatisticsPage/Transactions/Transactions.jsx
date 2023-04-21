import ExpensesListItem from '../ExpensesListItem/ExpensesListItem';

import css from './ExpensesList.module.scss';

const ExpensesList = () => {
  return (
    <>
      {transaction?.length === 0 && (
        <div className={css.noTransactionWrapper}>
          <p className={css.noTransactionText}>{t('expenses.noTransaction')}</p>
        </div>
      )}

      <ul className={css.transactionList}>
        {/* {transaction &&
          transaction.map(({ _id: id, sum, comment, category, date }) => ( */}
        <ExpensesListItem
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

      {/* {open && (
        <ModalNormal closeModal={closeModal}>
          <form className={css.formWrapper} onSubmit={handleSubmit}>
            <label htmlFor="category" className={css.formLabel}>
              {t('expenses.perCategory')}

              <div className="container">
                <div className={css.dropdown} onClick={handlerToggler}>
                  <input
                    className={css.formInput}
                    type="text"
                    value={categoryItem}
                    name="category"
                    onChange={handleChange}
                    readOnly
                  />

                  <div className={css.options}>
                    {allCategory.map((item, idx) => (
                      <div key={idx} onClick={handlerCategory}>
                        {icons[idx]}
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </label>

            <label className={css.formLabel}>
              {t('expenses.expenseComment')}
              <input
                className={css.formInput}
                type="text"
                name="comment"
                maxLength="80"
                value={comment}
                onChange={handleChange}
              />
            </label>

            <label className={css.formLabel}>
              {t('expenses.sum')}
              <input
                className={css.formInput}
                type="text"
                name="sum"
                value={sum}
                onChange={handleChange}
              />
            </label>

            <div>
              <button className={css.buttonEdit} type="submit">
                {t('expenses.buttonEdit')}
              </button>
            </div>
            <button
              className={css.buttonCloseModal}
              type="button"
              onClick={closeModal}
            >
              <CloseModal />
            </button>
          </form>
        </ModalNormal> */}
      {/* )} */}
    </>
  );
};

// export default ExpensesList;
