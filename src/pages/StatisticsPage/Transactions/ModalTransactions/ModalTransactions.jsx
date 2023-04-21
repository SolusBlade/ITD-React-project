import { createPortal } from 'react-dom';
import s from '../Transactions.module.scss';
import Icon from 'components/Icon/Icon';

import { useSelector } from 'react-redux';
import { categorySelect } from 'redux/Expenses/expensesSelectors';
const modalRoot = document.querySelector('#modal-root');

const ModalTransaction = ({ closeModal }) => {
  const category = useSelector(categorySelect);
  const transformCategory = category.map(({ name: value, title: label }) => ({
    value,
    label,
  }));

  return createPortal(
    <div className={s.overlayAddIncome}>
      <div className={s.modalWrapper}>
        <form className={s.formWrapper}>
          <label htmlFor="category" className={s.formLabel}>
            <div className="container">
              <div className={s.dropdown}>
                <input
                  className={s.formInput}
                  type="text"
                  name="category"
                  readOnly
                  options={transformCategory}
                />

                <div className={s.options}></div>
              </div>
            </div>
          </label>

          <label className={s.formLabel}>
            expenses
            <input
              className={s.formInput}
              type="text"
              name="comment"
              maxLength="80"
            />
          </label>

          <label className={s.formLabel}>
            <input className={s.formInput} type="text" name="sum" />
          </label>

          <div>
            <button className={s.buttonEdit} type="submit">
              {' '}
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
              className={'icon-close'}
            />
          </button>
        </form>
      </div>
    </div>,
    modalRoot
  );
};
export default ModalTransaction;
