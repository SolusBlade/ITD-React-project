import { useState, memo } from 'react';
// import { useDispatch } from 'react-redux';
import s from './UserForm.module.scss';

const UserForm = ({ btnSubmit }) => {
  const initialForm = {
    name: '',
    email: '',
    password: '',
  };
  const [form, setForm] = useState(initialForm);
  const { name, email, password } = form;

  // const dispatch = useDispatch();

  const handleInputChange = evt => {
    const { name, value } = evt.target;

    setForm(data => ({ ...data, [name]: value }));
  };

  const resetForm = () => {
    setForm(initialForm);
  };

  const handleSubmitForm = evt => {
    evt.preventDefault();
    // dispatch(onSubmit(form));
    resetForm();
  };

  return (
    <form className={s.form} onSubmit={handleSubmitForm}>
      <h3 className={s.title}>{btnSubmit}</h3>
      {btnSubmit === 'Register' && (
        <>
          {' '}
          <label className={s.inputLabel} htmlFor="nameInput">
            Name
          </label>
          <input className={s.inputField}
            type="text"
            name="name"
            id="namelInput"
            placeholder="Enter your name"
            value={name}
            onChange={handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </>
      )}
      <label className={s.inputLabel} htmlFor="emailInput">
        Email
      </label>
      <input className={s.inputField}
        type="email"
        name="email"
        id="emailInput"
        placeholder="Enter Email"
        value={email}
        onChange={handleInputChange}
        pattern="^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$"
        title="Email may contain only letters and numbers. For example user99@mail.com"
        required
      />

      <label className={s.inputLabel} htmlFor="passwordInput">
        Password
      </label>
      <input className={s.inputField}
        type="password"
        id="passwordInput"
        placeholder="Enter Password"
        name="password"
        pattern="^[a-z0-9_-]{6,18}$"
        title="Password must be 6 to 18 letters, digits and can contain - or _ "
        required
        value={password}
        onChange={handleInputChange}
      />
      <button className={s.button} type="submit">{btnSubmit}</button>
    </form>
  );
};

export default memo(UserForm);
