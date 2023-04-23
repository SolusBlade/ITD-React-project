import { createPortal } from 'react-dom';
import s from '../Transactions/Transactions.module.scss';
import Icon from 'components/Icon/Icon';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import c from '../../../../components/ModalAddIncome/MoadlAddIncome.module.scss';
import { useEffect, useState } from 'react';
import { categorySelect } from 'redux/Expenses/expensesSelectors';
import { updateTransaction } from 'redux/transactions/transactionsOperations';
import { IconOption } from 'components/TransactionSelect/iconsForSelectCategory';
import { getCategory } from 'redux/Expenses/expensesOperations';

const modalRoot = document.querySelector('#modal-root');

const ModalTransaction = ({ closeModal, value, id }) => {
  const [currentCategory, setCurrentCategory] = useState('Other');
  const category = useSelector(categorySelect);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  const transformCategory = category.map(({ name: value, title: label }) => ({
    value,
    label,
  }));

  const onChange = newValue => {
    setCurrentCategory(newValue.value);
  };

  return createPortal(
    <div className={s.overlayAddIncome}>
      <div className={s.modalWrapper}>
        <form className={s.formWrapper}>
          <label className={s.labelForSelector}>
            <p className={s.labelText}>Per category</p>
            <Select
              onChange={onChange}
              value={value}
              isSearchable={false}
              placeholder={currentCategory}
              className="select-container"
              classNamePrefix="select"
              options={transformCategory}
              name="category"
              components={{ Option: IconOption }}
            />

            <div className={s.options}></div>
          </label>
          <div className={s.flex}>
            <label className={s.formLabel}>
              Expense comment
              <input
                className={s.formInput}
                type="text"
                name="comment"
                maxLength="80"
              />
            </label>

            <label className={s.formLabel}>
              Sum
              <input className={s.formInput} type="text" name="sum" />
            </label>

            <div>
              <button
                className={s.buttonEdit}
                type="submit"
                onClick={() => dispatch(updateTransaction(id))}
              >
                Edit
              </button>
            </div>
            <button
              className={s.buttonCloseModal}
              type="button"
              onClick={closeModal}
            >
              <Icon
                name="icon-close"
                width={24}
                height={24}
                secondaryClassName={c.iconClose}
              />
            </button>
          </div>
        </form>
      </div>
    </div>,
    modalRoot
  );
};
export default ModalTransaction;
