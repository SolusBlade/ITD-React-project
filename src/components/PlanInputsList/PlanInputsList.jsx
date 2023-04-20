import InputForm from 'components/InputForm/InputForm';
import { useEffect, useState } from 'react';
// import { useDispatch } from "react-redux";
import s from './PlanInputsList.module.scss';
import optionsDefault from 'data/optionsDefault';
import ResultForm from 'components/ResultForm/ResultForm';
import ModalAddBalance from 'components/ModalAddBalance/ModalAddBalance';
import { selectStatePlan } from 'redux/plan/planSelectors';
import { useSelector } from 'react-redux';

const PlanInputsList = () => {
  const formData = useSelector(selectStatePlan);
  const [inputs, setInputs] = useState(formData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormComplete, setIsFormComplete] = useState(false);
  // const dispatch = useDispatch();

  console.log('splan', formData);

  const handleChange = e => {
    // console.log('event', e);
    const { name, value } = e.target;
    setInputs(values => ({ ...values, [name]: value }));
  };

  console.log('inputs', inputs);

  const handleSubmit = e => {
    e.preventDefault();
    console.log('submit-inputs', inputs);
    // dispatch(prePlan(inputs));
  };

  useEffect(() => {
    const isComplete = Object.values(inputs).every(
      value => value.trim() !== ''
    );
    setIsFormComplete(isComplete);
  }, [inputs]);

  console.log('isFormComplete', isFormComplete);

  const openModal = () => setIsModalOpen(true);
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
