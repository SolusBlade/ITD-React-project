import UserForm from 'components/UserForm/UserForm';
import Modal from 'components/Modal/Modal';
import { registerUser } from 'redux/auth/authOperations';
import { useSelector } from 'react-redux';
import { selectorError} from 'redux/auth/authSelectors';
import { useEffect, useRef } from 'react';
import { notifyError } from 'components/Toast/Toast';
import  Toast  from 'components/Toast/Toast';

const ModalRegister = () => {
  const error = useSelector(selectorError);
  const firstUpdate = useRef(true);

  const createErrorMessage= (error)=>{
    if(error.includes('409')){
      return 'User is already registered with this email'
    }
    if(error.includes('400')){
      return 'You entered wrong email'
    } 
    if(error.includes('500')){
      return 'Wrong data entered. Please check email/password and try again.'
    }
    return error
  }

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
    <Modal>
      <UserForm onSubmit={registerUser} btnSubmit="Register" />
      <Toast/>
    </Modal>
  );
};

export default ModalRegister;
