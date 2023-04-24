import { useSelector } from 'react-redux';
import { selectorStateResult } from 'redux/plan/planSelectors';
import { selectorIsBalance } from 'redux/auth/authSelectors';
import s from './ResultForm.module.scss';

const ResultForm = ({ openModal, onClick }) => {
  const result = useSelector(selectorStateResult);
  const isBalance = useSelector(selectorIsBalance);

  return (
    <div className={s.box}>
      <h2 className={s.title}>You will have an apartment in:</h2>
      <ul className={s.list}>
        <li className={s.item}>
          <p className={s.text}>Number of years</p>
          <p className={s.res}>{result.year} years</p>
        </li>
        <li className={s.item}>
          <p className={s.text}>Number of months</p>
          <p className={s.res}>{result.month} months</p>
        </li>
        <li className={s.item}>
          <button className={s.buttonFits} type="button" onClick={onClick}>
            Fits
          </button>
          {!isBalance && (
            <button
              className={s.buttonBalance}
              type="button"
              onClick={openModal}
            >
              Add Balance
            </button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default ResultForm;
