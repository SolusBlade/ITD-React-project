import UserForm from 'components/UserForm/UserForm';
import Modal from 'components/Modal/Modal';
import { loginUser } from 'redux/auth/authOperations';
import { useSelector } from 'react-redux';
import { selectorError } from 'redux/auth/authSelectors';
import { useEffect, useRef } from 'react';
import Toast, { notifyError } from 'components/Toast/Toast';


const ModalLogin = closeModal => {
  const error = useSelector(selectorError);
  const firstUpdate = useRef(true);

  const createErrorMessage = error => {
    if (error.includes('401')) {
      return "Email doesn't exist or Password is wrong";
    }
    if (error.includes('404')) {
      return 'User is not found. Please Register first.';
    }
    if (error.includes('500')) {
      return 'Wrong data entered. Please check email/password and try again.';
    }

    return error;
  };

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    if (error) {
      notifyError(createErrorMessage(error));
    }
  }, [error]);
  return (
    <Modal onClose={closeModal}>
      <UserForm onSubmit={loginUser} btnSubmit="Log In" />
      <Toast />
    </Modal>
  );
};

export default ModalLogin;
