import s from './ExpensesLimits.module.scss';
const ExpensesLimits = ({ openModal }) => {
  return (
    <section className={s.expenses}>
      <div className={s.expensesWrapper}>
        <ul className={s.list}>
          <li className={s.item}>
            <p className={s.sum}>-600 $</p>
            <p className={s.text}>Daily limit</p>
          </li>
          <li className={s.item}>
            <p className={s.sum}>-5000 $</p>
            <p className={s.text}>Monthly limit</p>
          </li>
        </ul>
        <div className={s.buttonWrapper}>
          <button className={s.buttonReady} type="button">
            Ready
          </button>
          <button className={s.btnModal} type="button" onClick={openModal}>
            Add income
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExpensesLimits;
