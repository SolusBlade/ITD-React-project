import { createPortal } from 'react-dom';
import s from '../Transactions/Transactions.module.scss';
import Icon from 'components/Icon/Icon';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import c from '../../../../components/ModalAddIncome/MoadlAddIncome.module.scss';
import { useCallback, useEffect, useState } from 'react';
import { categorySelect } from 'redux/Expenses/expensesSelectors';
import { updateTransaction } from 'redux/transactions/transactionsOperations';
import { IconOption } from 'components/TransactionSelect/iconsForSelectCategory';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { getCategory } from 'redux/Expenses/expensesOperations';


const modalRoot = document.querySelector('#modal-root');

const ModalTransaction = ({ closeModal, transactionData }) => {
  const { id, sum, comment, category: newCategory, date: newDate } = transactionData;

  const [currentCategory, setCurrentCategory] = useState(newCategory);
  const [currentSum] = useState(sum);
  const [currentComent] = useState(comment);

  const category = useSelector(categorySelect);
  const dispatch = useDispatch();


  const closeModalByEscape = useCallback(
    e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    },
    [closeModal]
  );

  const closeModalOnBackdrop = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', closeModalByEscape);

    return () => {
      window.removeEventListener('keydown', closeModalByEscape);
    };
  }, [closeModalByEscape]);

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  const transformCategory = category.map(({ name: value, title: label }) => ({
    value,
    label,
  }));

  const getValue = () => {
    return currentCategory
      ? transformCategory.find(c => c.value === currentCategory)
      : '';
  };

  const onChange = newValue => {
    setCurrentCategory(newValue.value);
  };

  return createPortal(
    <div className={s.overlayAddIncome} onClick={closeModalOnBackdrop}>
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
            const date = new Date(newDate);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            dispatch(
              updateTransaction({
                id,
                values: { ...values, category: currentCategory },
                date: { year, month },
              })
            );

            closeModal();
            setSubmitting(false);
          }}
        >
          {({ errors, touched, values }) => (
            <Form className={s.formWrapper}>
              <label className={s.labelForSelector}>
                <p className={s.labelText}>Per category</p>
                <Select
                  onChange={onChange}
                  value={getValue()}
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
                    placeholder="Enter comment"
                  />
                  {touched.comment && errors.comment && (
                    <div className={s.error}>{errors.comment}</div>
                  )}
                </label>

                <label
                  className={s.formLabel}
                  style={{
                    outline: `${
                      touched.sum && errors.sum ? '1px solid red' : 'none'
                    }`,
                  }}
                >
                  Sum
                  <Field
                    className={s.formInput}
                    type="text"
                    name="sum"
                    placeholder="00.00"
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
                  onClick={() => closeModal()}
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
