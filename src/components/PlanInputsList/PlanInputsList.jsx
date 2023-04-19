import InputForm from 'components/InputForm/InputForm';
import { useState } from 'react';
// import { useDispatch } from "react-redux";
import s from './PlanInputsList.module.scss';
import optionsDefault from 'data/optionsDefault';
import ResultForm from 'components/ResultForm/ResultForm';

const dataForm = {
  salary: '',
  passiveIncome: '',
  savings: '',
  cost: '',
  footage: '',
  procent: '',
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
    <>
      <form className={s.form} onSubmit={handleSubmit}>
        <InputForm
          onChange={handleChange}
          options={optionsDefault}
          values={inputs}
        />
      </form>

      <p></p>
      <p className={s.p}>
        Specify the percentage that you would like to accumulate per month from
        the total amount of income and you will see when you reach the goal
      </p>

      <ResultForm />
    </>
  );
};

export default PlanInputsList;
