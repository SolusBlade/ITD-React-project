import { createPortal } from 'react-dom';
import s from '../Transactions/Transactions.module.scss';
import Icon from 'components/Icon/Icon';
import Select, { components } from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import c from '../../../../components/ModalAddIncome/MoadlAddIncome.module.scss';
import { useState } from 'react';
import { categorySelect } from 'redux/expenses/expensesSelectors';
import { updateTransaction } from 'redux/transactions/transactionsOperations';

const modalRoot = document.querySelector('#modal-root');

const ModalTransaction = ({ closeModal, value, id }) => {
  const [currentCategory, setCurrentCategory] = useState('Other');
  const { Option } = components;

  const IconOption = props => (
    <Option {...props}>
      <Icon
        name={props.data.value}
        width={18}
        height={18}
        secondaryClassName={c.categoryIcon}
      />
      {props.data.label}
    </Option>
  );

  const category = useSelector(categorySelect);
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
              onClick={useDispatch(updateTransaction(id))}
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
        </form>
      </div>
    </div>,
    modalRoot
  );
};
export default ModalTransaction;
