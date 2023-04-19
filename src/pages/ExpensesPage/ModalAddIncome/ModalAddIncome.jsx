import Icon from 'components/Icon/Icon';
import s from './MoadlAddIncome.module.scss';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

const MoadlAddIncome = ({ closeModal, text }) => {
  return createPortal(
    <div className={s.overlayAddIncome}>
      <div className={s.modalWrapper}>
        <form className={s.modalAddIncome}>
          <input
            className={s.modalInput}
            type="text"
            name="addSum"
            placeholder={text}
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

export default MoadlAddIncome;
