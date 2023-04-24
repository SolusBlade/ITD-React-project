import s from './Modal.module.scss';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({children}) => {

  const navigate = useNavigate();
  const location = useLocation();
  
const handleGoBackBtnClick = () => {
    const prevPageLoacation = location.state;
    navigate(prevPageLoacation);
  };

  const closeModalByEscape = e => {
    if (e.code === 'Escape') {
      handleGoBackBtnClick();
    }
  };

  const closeModalOnBackdrop = e => {
    if (e.target === e.currentTarget) {
      handleGoBackBtnClick();
    }
  };
  
useEffect (()=>{
  window.addEventListener('keydown', closeModalByEscape);

  return () => {
    window.removeEventListener('keydown', closeModalByEscape);
  };
  // eslint-disable-next-line
}, [])
  
    return createPortal(
      <>
        <div className={s.backdrop} onClick={closeModalOnBackdrop}>
        <div className={s.modalContainer}>
          {children}
        </div>
      </div>
      </>,
      modalRoot
    );
   };

export default Modal;