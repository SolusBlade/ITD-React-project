import Icon from 'components/Icon/Icon';
import s from './ModalHooray.module.scss';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

const ModalHooray = ({ closeModal }) => {
  return createPortal(
    <div className={s.overlay}>
      <div className={s.modalWrap}>
        <button className={s.btnClose} onClick={() => closeModal()}>
          <Icon
            name="icon-close"
            width={24}
            height={24}
            fill={'white'}
          />
        </button>
        <h3 className={s.title}>Hooray! Congratulations!</h3>
        <p className={s.text}>
          You did it! <br />
          We are so proud of you and wish you all the best as you embark on this
          exciting new chapter of your life.
        </p>
        <div className={s.bcgLeft} />
        <div className={s.bcgRight} />
      </div>
    </div>,
    modalRoot
  );
};

export default ModalHooray;

//* для компонента, звідки модалка викликатиметься -->
//
//  const [isModalOpen, setIsModalOpen] = useState(false);
// const openModal = () => setIsModalOpen(true);
// const closeModal = () => setIsModalOpen(false);

//* в розмітку компонента return -->
// {isModalOpen && (
// <ModalHooray closeModal={closeModal} />
// )}
