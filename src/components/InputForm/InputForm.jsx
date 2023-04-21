import debounce from 'lodash.debounce';
import s from './InputForm.module.scss';

const InputForm = ({ onChange, options, values }) => {
  return (
    <>
      {options.map((el, index) => (
        <label className={s.label} key={el.name}>
          <span className={s.span}>
            {index + 1 + '. '}
            {el.title}
          </span>

          <input
            required
            className={s.input}
            type={el.type}
            name={el.name}
            value={values[el.name]}
            onChange={debounce(onChange, 300)}
            placeholder={el.placeholder}
          />
        </label>
      ))}
    </>
  );
};

export default InputForm;
