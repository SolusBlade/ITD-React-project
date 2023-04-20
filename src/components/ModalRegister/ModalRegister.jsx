import UserForm from 'components/UserForm/UserForm';
import Modal from 'components/Modal/Modal';
import { registerUser } from 'redux/auth/authOperations';

const ModalRegister = () => {
  return (
    <Modal>
      <UserForm onSubmit={registerUser} btnSubmit="Register" />
    </Modal>
  );
};

export default ModalRegister;
