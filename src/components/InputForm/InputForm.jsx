import s from './InputForm.module.scss';

const InputForm = ({
  onChange,
  options,
  values,
  onBlur,
  isPlan,
  errors = [],
}) => {
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
            autoComplete="off"
            className={s.input}
            type={el.type}
            name={el.name}
            value={values[el?.name] || ''}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={el.placeholder}
            disabled={el.name === 'savings' && isPlan ? true : false}
          />
          {errors.includes(el.name) && (
            <span className={s.error}> invalid value </span>
          )}
        </label>
      ))}
    </>
  );
};

export default InputForm;
