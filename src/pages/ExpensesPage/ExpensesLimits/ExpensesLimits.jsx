import { useSelector } from 'react-redux';
import s from './ExpensesLimits.module.scss';
import { presavingSelect } from 'redux/Expenses/expensesSelectors';

const ExpensesLimits = ({ openModal }) => {
  const { dailyLimit, monthLimit } = useSelector(presavingSelect);

  return (
    <div className={s.expenses}>
      <div className={s.expensesWrapper}>
        <ul className={s.list}>
          <li className={s.item}>
            <p className={s.sum}>{Math.round(dailyLimit)} ₴</p>

            <p className={s.text}>Daily limit</p>
          </li>
          <li className={s.item}>
            <p className={s.sum}>{Math.round(monthLimit)} ₴</p>

            <p className={s.text}>Monthly limit</p>
          </li>
        </ul>
        <div className={s.buttonWrapper}>
          <button className={s.buttonReady} type="submit">
            Ready
          </button>
          <button className={s.btnModal} type="button" onClick={openModal}>
            Add income
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpensesLimits;
