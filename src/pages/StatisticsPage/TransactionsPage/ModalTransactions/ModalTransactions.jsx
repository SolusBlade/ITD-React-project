import { createPortal } from 'react-dom';
import s from '../Transactions/Transactions.module.scss';
import Icon from 'components/Icon/Icon';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import c from '../../../../components/ModalAddIncome/MoadlAddIncome.module.scss';
import { useEffect, useState } from 'react';
import { categorySelect } from 'redux/expenses/expensesSelectors';
import { updateTransaction } from 'redux/transactions/transactionsOperations';
import { IconOption } from 'components/TransactionSelect/iconsForSelectCategory';
import { getCategory } from 'redux/expenses/expensesOperations';
// import moment, { invalid } from 'moment';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const modalRoot = document.querySelector('#modal-root');

const ModalTransaction = ({ closeModal, value, id }) => {
  const [currentCategory, setCurrentCategory] = useState('Other');
  const [currentSum] = useState(0);
  const [currentComent] = useState('');
  const category = useSelector(categorySelect);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  const transformCategory = category.map(({ name: value, title: label }) => ({
    value,
    label,
  }));

  const onChange = newValue => {
    setCurrentCategory(newValue.value);
  };
  // const changeSum = e => {
  //   setCurrentSum(e.currentTarget.value);
  // };
  // const changeComent = e => {
  //   setCurrentComent(e.currentTarget.value);
  // };

  // const onSubmitForm = e => {
  //   e.preventDefault();
  //   const data = {
  //     type: 'expense',
  //     category: currentCategory,
  //     comment: !currentComent ? 'no comment' : currentComent,
  //     sum: Number(currentSum),
  //   };

  //   dispatch(updateTransaction({ id, data }));
  //   closeModal();
  // };

  return createPortal(
    <div className={s.overlayAddIncome}>
      <div className={s.modalWrapper}>
        <Formik
          initialValues={{
            type: 'expense',
            category: currentCategory,
            comment: !currentComent ? 'no comment' : currentComent,
            sum: Number(currentSum),
          }}
          validationSchema={Yup.object({
            category: Yup.string().required('Required'),
            comment: Yup.string()
              .required('Required')
              .min(4, 'Must be 4 characters or more')
              .max(80, 'Must be 80 characters or less'),
            sum: Yup.number().required('Required'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);

            // const data = {
            //   type: 'expense',
            //   category: currentCategory,
            //   comment: !currentComent ? 'no comment' : currentComent,
            //   sum: Number(currentSum),
            // };

            dispatch(updateTransaction({ id, values }));
            closeModal();
            setSubmitting(false);
          }}
        >
          {({ errors, touched, values }) => (
            <Form className={s.formWrapper}>
              {/* <form className={s.formWrapper} onSubmit={onSubmitForm}> */}
              <label className={s.labelForSelector}>
                <p className={s.labelText}>Per category</p>
                <Select
                  onChange={onChange}
                  value={value}
                  isSearchable={false}
                  placeholder={currentCategory}
                  className="select-container"
                  classNamePrefix="select"
                  options={transformCategory}
                  name="category"
                  components={{ Option: IconOption }}
                />
                <div className={s.options}></div>
              </label>
              <div className={s.flex}>
                <label
                  className={s.formLabel}
                  style={{
                    outline: `${
                      touched.comment && errors.comment
                        ? '1px solid red'
                        : 'none'
                    }`,
                  }}
                >
                  Expense comment
                  <Field
                    className={s.formInput}
                    type="text"
                    name="comment"
                    // required
                    // maxLength="80"
                    placeholder="Enter comment"
                    // value={value}
                    // onChange={changeComent}
                  />
                  {touched.comment && errors.comment && (
                    <div className={s.error}>{errors.comment}</div>
                  )}
                </label>

                <label
                  className={s.formLabel}
                  style={{
                    outline: `${
                      touched.sum && errors.sum
                        ? '1px solid red'
                        : 'none'
                    }`,
                  }}
                >
                  Sum
                  <Field
                    className={s.formInput}
                    type="text"
                    name="sum"
                    // onChange={changeSum}
                    placeholder="00.00"
                    // required
                  />
                  {touched.sum && errors.sum && (
                    <div className={s.error}>{errors.sum}</div>
                  )}
                </label>

                <div>
                  <button className={s.buttonEdit} type="submit">
                    Edit
                  </button>
                </div>
                <button
                  className={s.buttonCloseModal}
                  type="button"
                  onClick={closeModal}
                >
                  <Icon
                    name="icon-close"
                    width={24}
                    height={24}
                    secondaryClassName={c.iconClose}
                  />
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>,
    modalRoot
  );
};
export default ModalTransaction;
