import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';

import Input from './TransactionInput';
import ExpensesLimits from '../ExpensesLimits/ExpensesLimits';
import ModalAddIncome from '../ModalAddIncome/ModalAddIncome';
import { selectorBalance } from 'redux/auth/authSelectors';

import { postTransaction } from 'redux/Expenses/expensesOperations';
import TransactionSelect from '../TransactionSelect/TransactionSelect';
import s from './TransactionDataList.module.scss';

import {
  categorySelect,
  selectorIsCashflowLoading,
} from 'redux/Expenses/expensesSelectors';
import Loader from 'components/Loader/Loader';

const initialValues = {
  comment: '',
  sum: '',
  category: '',
};

const schema = yup.object().shape({
  comment: yup.string().max(80),
  sum: yup
    .number()
    .positive('enter only a positive number')
    .required('This field is required'),
  category: yup.string(),
});

const TransactionDataList = () => {
  const [currentCategory, setCurrentCategory] = useState('other');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isLoading = useSelector(selectorIsCashflowLoading);
  const category = useSelector(categorySelect);
  const balance = useSelector(selectorBalance);
  const dispatch = useDispatch();

  const transformCategory = category.map(({ name: value, title: label }) => ({
    value,
    label,
  }));

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = (values, actions) => {
    dispatch(
      postTransaction({
        ...values,
        comment: !values.comment ? 'no comment' : values.comment,
        sum: Number(values.sum),
        category: currentCategory,
        type: 'expense',
      })
    );

    actions.resetForm();
  };

  const getValue = () => {
    return currentCategory
      ? transformCategory.find(c => c.value === currentCategory)
      : '';
  };

  const onChange = newValue => {
    setCurrentCategory(newValue.value);
  };

  const numberWithSpaces = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  return (
    <div>
      {isLoading && <Loader />}
      <Formik
        onSubmit={handleSubmit}
        validationSchema={schema}
        initialValues={initialValues}
      >
        <Form autoComplete="off">
          <div className={s.form}>
            <div className={s.inputWrapper}>
              <Input
                name="balance"
                title="From account"
                placeholder={`Account balance: ₴ ${numberWithSpaces(
                  Math.round(balance)
                )} `}
                disabled={true}
              />
            </div>

            <div className={s.inputWrapper}>
              <TransactionSelect
                onChange={onChange}
                value={getValue()}
                transformCategory={transformCategory}
              />
            </div>

            <div className={s.inputWrapper}>
              <Input
                name="comment"
                title="Expense comment"
                placeholder="Enter comment"
              />
              <ErrorMessage name="comment">
                {msg => <span className={s.errorSpan}>{msg}</span>}
              </ErrorMessage>
            </div>

            <div className={s.inputWrapper}>
              <Input name="sum" title="Sum" placeholder="00.00" />
              <ErrorMessage name="sum">
                {msg => <span className={s.errorSpan}>{msg}</span>}
              </ErrorMessage>
            </div>
          </div>

          <ExpensesLimits openModal={openModal} />
        </Form>
      </Formik>
      {isModalOpen && (
        <ModalAddIncome text="Enter income" closeModal={closeModal} />
      )}
    </div>
  );
};

export default TransactionDataList;
