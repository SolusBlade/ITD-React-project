import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectStatePlan } from 'redux/plan/planSelectors';
import {
  calcPersonalPlan,
  getPersonalPlan,
  preCalcPersonalPlan,
  updatePersonalPlan,
} from 'redux/plan/planOperations';
import optionsDefault from 'data/optionsDefault';
import InputForm from 'components/InputForm/InputForm';
import ResultForm from 'components/ResultForm/ResultForm';
import ModalAddBalance from 'components/ModalAddBalance/ModalAddBalance';
import { addUserBalance } from 'redux/auth/authOperations';
import s from './PlanInputsList.module.scss';
import { selectorIsLoggedIn } from 'redux/auth/authSelectors';

const PlanInputsList = () => {
  const dispatch = useDispatch();
  const formData = useSelector(selectStatePlan);
  const isLoggedIn = useSelector(selectorIsLoggedIn);
  const [inputs, setInputs] = useState(formData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  const isPlan = useRef(false);

  // useEffect(() => {
  //   isLoggedIn &&
  //     dispatch(getPersonalPlan())
  //       .then(({ payload }) => {
  //         setInputs(payload.plan);
  //         isPlan.current = true;
  //       })
  //       .catch(error => {
  //         console.error(error);
  //         isPlan.current = false;
  //       });
  // }, [dispatch, isLoggedIn]);

  const handleChange = e => {
    const { name, value } = e.target;
    setInputs(values => {
      const newInputs = { ...values, [name]: value };
      setIsDirty(true);
      return newInputs;
    });
  };

  const handlerBlur = () => {
    const isComplete = Object.values(inputs).every(value => value !== '');

    if (isComplete && isDirty) {
      for (let key in inputs) {
        if (typeof inputs[key] === 'string') {
          inputs[key] = Number(inputs[key]);
        }
      }
      dispatch(preCalcPersonalPlan(inputs));
      setIsDirty(false);
    }
  };

  const handleAddBalance = dataForm => {
    const pBalance = { balance: Number(dataForm.balance) };
    dispatch(addUserBalance(pBalance));
  };

  const handleFits = () => {
    if (!isPlan.current) {
      dispatch(calcPersonalPlan(inputs)).then(() => {
        isPlan.current = true;
      });
    } else {
      dispatch(updatePersonalPlan(inputs));
    }
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

      <ResultForm openModal={openModal} onClick={handleFits} />

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
