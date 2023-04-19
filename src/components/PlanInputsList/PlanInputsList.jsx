import InputForm from 'components/InputForm/InputForm';
// import { useDispatch } from "react-redux";

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

  const handleSubmit = form => console.log(form);

  return (
    <InputForm
      cbOnSubmit={handleSubmit}
      options={registerFormOptions}
      initialValues={dataForm}
    />
  );
};

export default PlanInputsList;
