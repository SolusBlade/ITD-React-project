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
            value={values[el.name] || ''}
            onChange={onChange}
            placeholder={el.placeholder}
          />
        </label>
      ))}
    </>
  );
};

export default InputForm;
