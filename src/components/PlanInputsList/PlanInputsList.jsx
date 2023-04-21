import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectStatePlan } from 'redux/plan/planSelectors';
import { preCalcPersonalPlan } from 'redux/plan/planOperations';
import optionsDefault from 'data/optionsDefault';
import InputForm from 'components/InputForm/InputForm';
import ResultForm from 'components/ResultForm/ResultForm';
import ModalAddBalance from 'components/ModalAddBalance/ModalAddBalance';
import { addUserBalance } from 'redux/auth/authOperations';
import s from './PlanInputsList.module.scss';

const PlanInputsList = () => {
  const dispatch = useDispatch();
  const formData = useSelector(selectStatePlan);
  const [inputs, setInputs] = useState(formData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const inputsRef = useRef(inputs);

  const handleChange = e => {
    const { name, value } = e.target;
    console.log("handleChange  handleChange:", value)
    setInputs(values => ({ ...values, [name]: value }));
    inputsRef.current = inputs;
  };

  const handlerBlur = () => {
    const isComplete = Object.values(inputs).every(value => value !== '');

    if (isComplete && inputsRef.current !== inputs) {
      for (let key in inputs) {
        inputs[key] = parseInt(inputs[key]);
      }
      dispatch(preCalcPersonalPlan(inputs));
    }
  };

  const handleAddBalance = dataForm => {
    const pBalance = { balance: Number(dataForm.balance) };
    // console.log('dataForm', { balance: Number(dataForm.balance) });
    dispatch(addUserBalance(pBalance));
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <form className={s.form}>
        <InputForm
          onChange={handleChange}
          options={optionsDefault}
          values={inputs}
          onBlur={handlerBlur}
        />
      </form>

      <p></p>
      <p className={s.p}>
        Specify the percentage that you would like to accumulate per month from
        the total amount of income and you will see when you reach the goal
      </p>

      <ResultForm openModal={openModal} />

      {isModalOpen && (
        <ModalAddBalance
          text="Enter balance"
          closeModal={closeModal}
          onSubmit={handleAddBalance}
        />
      )}
    </>
  );
};

export default PlanInputsList;
