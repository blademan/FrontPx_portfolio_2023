import Card from './Card';
import styles from './modal.module.css';
import ReactDOM from 'react-dom';
import { useModalContext } from '../context/modal-context';

export default function Modal({ children, cardClassName }) {
  const { showModal, hideModalHandler } = useModalContext();
  return (
    <>
      {showModal &&
        ReactDOM.createPortal(
          <>
            <section
              onClick={hideModalHandler}
              role="dialog"
              id="backdrop"
              className={styles.backdrop}
            ></section>
            <Card className={cardClassName}>{children}</Card>
          </>,
          document.querySelector('#overlays'),
        )}
    </>
  );
}
