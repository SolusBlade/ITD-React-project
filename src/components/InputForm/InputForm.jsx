import { useState } from 'react';
import s from './InputForm.module.scss';

const InputForm = ({ cbOnSubmit, options, initialValues }) => {
  const [inputs, setInputs] = useState(initialValues);

  const handleChange = e => {
    const { name, value } = e.target;
    setInputs(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    cbOnSubmit(inputs);
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      {options.map((el, index) => (
        <label className={s.label} key={el.name}>
          <span className={s.span}>
            {index + 1 + '. '}
            {el.title}
          </span>

          <input
            className={s.input}
            type={el.type}
            name={el.name}
            value={inputs[el.name] || ''}
            onChange={handleChange}
            placeholder={el.placeholder}
          />
        </label>
      ))}
    </form>
  );
};

export default InputForm;
