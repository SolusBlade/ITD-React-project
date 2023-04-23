import { Field } from 'formik';
import s from './TransactionDataList.module.scss';

const Input = ({ name, title, placeholder, disabled }) => {
  return (
    <label htmlFor={name} className={s.lable}>
      <p className={s.inputTitle}>{title}</p>
      <Field
        className={s.input}
        type="text"
        name={name}
        placeholder={placeholder}
        disabled={disabled}
      />
    </label>
  );
};

export default Input;
