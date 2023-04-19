import InputForm from 'components/InputForm/InputForm';
import { useState } from 'react';
// import { useDispatch } from "react-redux";
import s from './PlanInputsList.module.scss';

const registerFormOptions = [
  {
    title: 'Name',
    name: 'name',
    type: 'text',
    placeholder: 'Input name',
  },
  {
    title: 'Email',
    name: 'email',
    type: 'text',
    placeholder: 'Input email',
  },
  {
    title: 'Password',
    name: 'password',
    type: 'text',
    placeholder: 'Input password',
  },
  {
    title: 'Name',
    name: 'name',
    type: 'text',
    placeholder: 'Input name',
  },
  {
    title: 'Email',
    name: 'email',
    type: 'text',
    placeholder: 'Input email',
  },
  {
    title: 'Password',
    name: 'password',
    type: 'text',
    placeholder: 'Input password',
  },
];

const dataForm = {
  name: '',
  email: '',
  password: '',
};

const PlanInputsList = () => {
  // const dispatch = useDispatch();

  const [inputs, setInputs] = useState(dataForm);

  const handleChange = e => {
    const { name, value } = e.target;
    setInputs(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(inputs);
    //  dispatch(addContact(inputs));
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <InputForm
        onChange={handleChange}
        options={registerFormOptions}
        values={inputs}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PlanInputsList;
