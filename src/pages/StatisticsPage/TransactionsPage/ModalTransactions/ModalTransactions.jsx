import { createPortal } from 'react-dom';
import s from '../Transactions/Transactions.module.scss';
import Icon from 'components/Icon/Icon';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import c from '../../../../components/ModalAddIncome/MoadlAddIncome.module.scss';
import { useEffect, useState } from 'react';
import { categorySelect } from 'redux/expenses/expensesSelectors';
import { updateTransaction } from 'redux/transactions/transactionsOperations';
import { IconOption } from 'components/TransactionSelect/iconsForSelectCategory';
import { getCategory } from 'redux/expenses/expensesOperations';
import moment from 'moment';

const modalRoot = document.querySelector('#modal-root');

const ModalTransaction = ({ closeModal, value, id, date }) => {
  const [currentCategory, setCurrentCategory] = useState('Other');
  const [currentSum, setCurrentSum] = useState(0);
  const [currentComent, setCurrentComent] = useState('');
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
  const changeSum = e => {
    setCurrentSum(e.currentTarget.value);
  };
  const changeComent = e => {
    setCurrentComent(e.currentTarget.value);
  };

  const onSubmitForm = e => {
    e.preventDefault();
    const data = {
      type: 'expense',
      category: currentCategory,
      comment: currentComent,
      sum: Number(currentSum),
    };
    console.log(id);
    console.log(data);
    console.log(currentCategory);
    console.log(currentComent);
    dispatch(updateTransaction(id, data));
  };

  return createPortal(
    <div className={s.overlayAddIncome}>
      <div className={s.modalWrapper}>
        <form className={s.formWrapper} onSubmit={onSubmitForm}>
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
                value={value}
                onChange={changeComent}
              />
            </label>

            <label className={s.formLabel}>
              Sum
              <input
                className={s.formInput}
                type="text"
                name="sum"
                onChange={changeSum}
              />
            </label>

            <div>
              <button className={s.buttonEdit} type="submit">
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
