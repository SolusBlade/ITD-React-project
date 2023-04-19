import UserForm from 'components/UserForm/UserForm';
import Modal from 'components/Modal/Modal';

const ModalRegister = () => {
  return (
    <Modal>
      <UserForm btnSubmit="Register" />
    </Modal>
  );
};

export default ModalRegister;
