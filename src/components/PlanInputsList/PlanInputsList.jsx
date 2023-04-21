import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectStatePlan } from 'redux/plan/planSelectors';
import { preCalcPersonalPlan } from 'redux/plan/planOperations';
import optionsDefault from 'data/optionsDefault';
import InputForm from 'components/InputForm/InputForm';
import ResultForm from 'components/ResultForm/ResultForm';
import ModalAddBalance from 'components/ModalAddBalance/ModalAddBalance';
import s from './PlanInputsList.module.scss';

const PlanInputsList = () => {
  const formData = useSelector(selectStatePlan);
  const [inputs, setInputs] = useState(formData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    console.log("handleChange  handleChange:", value)
    setInputs(values => ({ ...values, [name]: value }));
  };

  useEffect(() => {
    const isComplete = Object.values(inputs).every(
      value => value.trim() !== ''
    );

    if (isComplete) {
      dispatch(preCalcPersonalPlan(inputs));
    }
  }, [dispatch, inputs]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <form className={s.form}>
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
