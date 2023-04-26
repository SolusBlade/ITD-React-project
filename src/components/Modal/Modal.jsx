import s from './Modal.module.scss';
import { createPortal } from 'react-dom';
import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children }) => {
  const navigate = useNavigate();

  const handleCloseModal = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const closeModalByEscape = useCallback(
    e => {
      if (e.code === 'Escape') {
        handleCloseModal();
      }
    },
    [handleCloseModal]
  );

  const closeModalOnBackdrop = e => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', closeModalByEscape);

    return () => {
      window.removeEventListener('keydown', closeModalByEscape);
    };
  }, [closeModalByEscape]);

  return createPortal(
    <>
      <div className={s.backdrop} onClick={closeModalOnBackdrop}>
        <div className={s.modalContainer}>{children}</div>
      </div>
    </>,
    modalRoot
  );
};

export default Modal;