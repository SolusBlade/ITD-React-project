import UserForm from 'components/UserForm/UserForm';
import Modal from 'components/Modal/Modal';
import { loginUser } from 'redux/auth/authOperations';

const ModalLogin = closeModal => {
  return (
    <Modal onClose={closeModal}>
      <UserForm onSubmit={loginUser} btnSubmit="Log In" />
    </Modal>
  );
};

export default ModalLogin;
