import s from './ResultForm.module.scss';

const ResultForm = ({ openModal }) => {
  return (
    <div className={s.box}>
      <h2 className={s.title}>You will have an apartment in:</h2>
      <ul className={s.list}>
        <li className={s.item}>
          <p className={s.text}>Number of years</p>
          <p className={s.res}>0 years</p>
        </li>
        <li className={s.item}>
          <p className={s.text}>Number of months</p>
          <p className={s.res}>0 months</p>
        </li>
        <li className={s.item}>
          <button className={s.buttonFits} type="button">
            Fits
          </button>
          <button className={s.buttonBalance} type="button" onClick={openModal}>
            Add Balance
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ResultForm;
