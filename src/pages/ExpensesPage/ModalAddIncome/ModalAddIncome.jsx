import Icon from 'components/Icon/Icon';
import s from './MoadlAddIncome.module.scss';
import { createPortal } from 'react-dom';
import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { addUserBalance } from 'redux/auth/authOperations';

const modalRoot = document.querySelector('#modal-root');

const MoadlAddIncome = ({ closeModal, text }) => {
  const dispatch = useDispatch();
  const initialValue = {
    addSum: '',
  };
  const handleSubmit = (values, actions) => {
    dispatch(addUserBalance(values));
    actions.resetForm();
    closeModal();
  };
  return createPortal(
    <div className={s.overlayAddIncome}>
      <div className={s.modalWrapper}>
        <Formik onSubmit={handleSubmit} initialValues={initialValue}>
          <Form className={s.modalAddIncome}>
            <Field
              className={s.modalInput}
              type="text"
              name="addSum"
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
            className={s.iconClose}
          />
        </button>
      </div>
    </div>,
    modalRoot
  );
};

export default MoadlAddIncome;
