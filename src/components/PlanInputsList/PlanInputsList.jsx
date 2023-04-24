import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectorIsPlan,
  selectorPlanIsLoading,
  selectorStatePlan,
} from 'redux/plan/planSelectors';
import {
  calcPersonalPlan,
  preCalcPersonalPlan,
  updatePersonalPlan,
} from 'redux/plan/planOperations';
import optionsDefault from 'data/optionsDefault';
import InputForm from 'components/InputForm/InputForm';
import ResultForm from 'components/ResultForm/ResultForm';
import ModalAddBalance from 'components/ModalAddBalance/ModalAddBalance';
import { addUserBalance } from 'redux/auth/authOperations';
import { selectorIsLoggedIn } from 'redux/auth/authSelectors';
import validateObject from 'services/validateObject';
import s from './PlanInputsList.module.scss';
import Loader from 'components/Loader/Loader';

const PlanInputsList = () => {
  const dispatch = useDispatch();
  const formData = useSelector(selectorStatePlan);
  const isLoggedIn = useSelector(selectorIsLoggedIn);
  const isLoading = useSelector(selectorPlanIsLoading);
  const [inputs, setInputs] = useState(formData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBlurDirty, setIsBlurDirty] = useState(false);
  const [isFitsDirty, setIsFitsDirty] = useState(false);
  const [error, setError] = useState([]);
  const isPlan = useSelector(selectorIsPlan);

  useEffect(() => {
    isLoggedIn && setInputs(formData);
  }, [formData, isLoggedIn]);

  const handleChange = e => {
    const { name, value } = e.target;
    setInputs(values => {
      const newInputs = { ...values, [name]: value };
      setIsBlurDirty(true);
      setIsFitsDirty(true);
      return newInputs;
    });
  };

  const isValidObjFunc = () => {
    const { isValid, errors } = validateObject(inputs);
    return { isValid, errors };
  };

  const handlerBlur = () => {
    const isComplete = Object.values(inputs).every(value => value !== '');

    const { isValid, errors } = isValidObjFunc();
    isComplete && setError(errors);

    if (isComplete && isValid && isBlurDirty) {
      for (let key in inputs) {
        if (typeof inputs[key] === 'string') {
          inputs[key] = Number(inputs[key]);
        }
      }

      dispatch(preCalcPersonalPlan(inputs));
      setIsBlurDirty(false);
    }
  };

  const handleAddBalance = dataForm => {
    const pBalance = { balance: Number(dataForm.balance) };
    dispatch(addUserBalance(pBalance));
  };

  const handleFits = () => {
    const { isValid } = isValidObjFunc();

    if (isValid && !isPlan) {
      dispatch(calcPersonalPlan(inputs));
    } else if (isValid && isFitsDirty) {
      dispatch(updatePersonalPlan(inputs));
      setIsFitsDirty(false);
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {isLoading && <Loader />}
      <form className={s.form}>
        <InputForm
          onChange={handleChange}
          options={optionsDefault}
          values={inputs}
          onBlur={handlerBlur}
          errors={error}
        />
      </form>

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
