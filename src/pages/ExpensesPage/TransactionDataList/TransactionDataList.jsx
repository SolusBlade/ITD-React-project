import { Formik, Form, Field } from 'formik';
import { options } from '../options';
import s from './TransactionDataList.module.scss';
import Input from '../Input';
import ExpensesLimits from '../ExpensesLimits/ExpensesLimits';
import { useState } from 'react';
import ModalAddIncome from '../ModalAddIncome/ModalAddIncome';

const initialValues = {
  balance: `Account balance: UAH 80,000`,
  comment: '',
  summ: '',
};

const TransactionDataList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <section className={s.transaction}>
      <Formik initialValues={initialValues}>
        <Form autoComplete="off">
          <div className={s.form}>
            <Input
              name="balance"
              title="From account"
              placeholder=""
              disabled={true}
            />

            <label htmlFor="category" className={s.lable}>
              <p className={s.inputTitle}>Per category</p>
              <Field
                className={s.input}
                as="select"
                children={options.map(({ name, value }, i) => (
                  <option key={i} className={s.option} value={value}>
                    {name}
                  </option>
                ))}
                name="category"
                placeholder="Per Category"
              ></Field>
            </label>

            <Input
              name="comment"
              title="Expense comment"
              placeholder="Concert tickets"
            />

            <Input name="summ" title="Summ" placeholder="00.00" />
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
