import s from './MoadlAddIncome.module.scss';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

const MoadlAddIncome = ({ closeModal }) => {
  return createPortal(
    <div className={s.overlayAddIncome}>
      <div className={s.modalWrapper}>
        <form className={s.modalAddIncome}>
          <lable>
            <input
              className={s.modalInput}
              type="text"
              name="addSum"
              placeholder="Enter income"
            />
          </lable>
          <div className={s.btnContainer}>
            <button className={s.btnAdd} type="submit">
              Add
            </button>
            <button className={s.btnClose} type="button" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>,
    modalRoot
  );
};

export default MoadlAddIncome;
