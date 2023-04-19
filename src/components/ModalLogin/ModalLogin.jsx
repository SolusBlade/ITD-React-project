import UserForm from 'components/UserForm/UserForm';
import Modal from 'components/Modal/Modal';

const ModalLogin = closeModal => {
  return (
    <Modal onClose={closeModal}>
      <UserForm onSubmit={() => 5} btnSubmit="Log In" />
    </Modal>
  );
};

export default ModalLogin;
