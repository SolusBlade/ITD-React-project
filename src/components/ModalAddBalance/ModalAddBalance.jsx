import Icon from 'components/Icon/Icon';
import s from './ModalAddBalance.module.scss';
import { createPortal } from 'react-dom';
import { useState } from 'react';

const modalRoot = document.querySelector('#modal-root');

const ModalAddBalance = ({ closeModal, text, onSubmit }) => {
  const [form, setForm] = useState({
    balance: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(p => ({ ...p, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(form);
    closeModal();
  };

  return createPortal(
    <div className={s.overlayAddIncome}>
      <div className={s.modalWrapper}>
        <form className={s.modalAddIncome} onSubmit={handleSubmit}>
          <input
            required
            className={s.modalInput}
            autoComplete="off"
            type="text"
            name="balance"
            placeholder={text}
            value={form.balance}
            onChange={handleChange}
            pattern="[0-9]*"
          />

          <div className={s.btnContainer}>
            <button className={s.btnAdd} type="submit">
              Add
            </button>
            <button className={s.btnClose} type="button" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </form>
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

export default ModalAddBalance;
