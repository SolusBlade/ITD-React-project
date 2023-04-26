import Icon from 'components/Icon/Icon';
import s from './MoadlAddIncome.module.scss';
import { createPortal } from 'react-dom';
import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { postTransaction } from 'redux/Expenses/expensesOperations';
import { useCallback, useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

const MoadlAddIncome = ({ closeModal, text }) => {
  const dispatch = useDispatch();
  const initialValue = {
    sum: '',
  };
  const handleSubmit = (values, actions) => {
    dispatch(postTransaction({ sum: values.sum, type: 'income' }));
    actions.resetForm();
    closeModal();
  };

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

  return createPortal(
    <div className={s.overlayAddIncome} onClick={closeModalOnBackdrop}>
      <div className={s.modalWrapper}>
        <Formik onSubmit={handleSubmit} initialValues={initialValue}>
          <Form className={s.modalAddIncome}>
            <Field
              className={s.modalInput}
              type="text"
              name="sum"
              placeholder={text}
            />

            <div className={s.btnContainer}>
              <button className={s.btnAdd} type="submit">
                Add
              </button>
              <button className={s.btnClose} type="button" onClick={closeModal}>
                Cancel
              </button>
            </div>
          </Form>
        </Formik>
        <button className={s.btnSvg} onClick={closeModal}>
          <Icon
            name="icon-close"
            width={24}
            height={24}
            secondaryClassName={s.iconClose}
          />
        </button>
      </div>
    </div>,
    modalRoot
  );
};

export default MoadlAddIncome;
