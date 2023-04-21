import { Formik, Form } from 'formik';
import s from './TransactionDataList.module.scss';
import Input from '../Input';
import ExpensesLimits from '../ExpensesLimits/ExpensesLimits';
import { useState } from 'react';
import ModalAddIncome from '../ModalAddIncome/ModalAddIncome';
import { useDispatch, useSelector } from 'react-redux';
import { selectorBalance } from 'redux/auth/authSelectors';
import { categorySelect } from 'redux/Expenses/expensesSelectors';
import { getTransaction } from 'redux/Expenses/expensesOperations';
import TransactionSelect from '../TransactionSelect/TransactionSelect';

const TransactionDataList = () => {
  const [currentCategory, setCurrentCategory] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const initialValues = {
    comment: '',
    sum: '',
    category: '',
  };

  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = (values, actions) => {
    dispatch(
      getTransaction({ ...values, category: currentCategory, type: 'expense' })
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

  return (
    <section className={s.transaction}>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form autoComplete="off">
          <div className={s.form}>
            <Input
              name="balance"
              title="From account"
              placeholder={`Account balance: UAH ${balance}`}
              disabled={true}
            />

            <TransactionSelect
              onChange={onChange}
              value={getValue()}
              transformCategory={transformCategory}
            />

            <Input
              name="comment"
              title="Expense comment"
              placeholder="Comment"
            />

            <Input name="sum" title="Sum" placeholder="00.00" />
          </div>

          <ExpensesLimits openModal={openModal} />
        </Form>
      </Formik>
      {isModalOpen && (
        <ModalAddIncome text="Enter income" closeModal={closeModal} />
      )}
    </section>
  );
};

export default TransactionDataList;
