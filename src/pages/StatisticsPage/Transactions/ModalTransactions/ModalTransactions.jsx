import { createPortal } from 'react-dom';
import s from '../Transactions.module.scss';
import Icon from 'components/Icon/Icon';
import Select, { components } from 'react-select';
import { useSelector } from 'react-redux';
import { categorySelect } from 'redux/Expenses/expensesSelectors';
const modalRoot = document.querySelector('#modal-root');

const ModalTransaction = ({ closeModal, onChange, value }) => {
  const { Option } = components;
  const IconOption = props => (
    <Option {...props}>
      <Icon
        name={props.data.value}
        width={18}
        height={18}
        secondaryClassName={s.categoryIcon}
      />
      {props.data.label}
    </Option>
  );
  const category = useSelector(categorySelect);
  const transformCategory = category.map(({ name: value, title: label }) => ({
    value,
    label,
  }));

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
              placeholder="Other"
              className="select-container"
              classNamePrefix="select"
              options={transformCategory}
              name="category"
              components={{ Option: IconOption }}
            />

            <div className={s.options}></div>
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
            sum
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
