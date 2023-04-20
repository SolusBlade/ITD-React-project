import UserForm from 'components/UserForm/UserForm';
import Modal from 'components/Modal/Modal';
import { loginUser } from 'redux/auth/authOperations';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { selectorError } from 'redux/auth/authSelectors';
import { toast } from 'react-toastify';
import { useEffect, useRef } from 'react';

const notifyError = message =>
  toast.error(message, {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });

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
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{
          width: '700px',
          height: '200px',
          fontSize: '24px',
          lineHeight: '36px',
        }}
      />
    </Modal>
  );
};

export default ModalLogin;
