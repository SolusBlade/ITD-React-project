import Icon from 'components/Icon/Icon';
import s from './ModalAddBalance.module.scss';
import { createPortal } from 'react-dom';
import { useCallback, useEffect, useState } from 'react';

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
