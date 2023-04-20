import InputForm from 'components/InputForm/InputForm';
import { useState } from 'react';
// import { useDispatch } from "react-redux";
import s from './PlanInputsList.module.scss';
import optionsDefault from 'data/optionsDefault';
import ResultForm from 'components/ResultForm/ResultForm';
import ModalAddBalance from 'components/ModalAddBalance/ModalAddBalance';

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setInputs(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(inputs);
    //  dispatch(addContact(inputs));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

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

      <ResultForm openModal={openModal} />

      {isModalOpen && (
        <ModalAddBalance text="Enter balance" closeModal={closeModal} />
      )}
    </>
  );
};

export default PlanInputsList;
