import { primaryColors, backgroundColors } from './data';
import Modal from '../components/Modal';
import PrimaryColor from './PrimaryColor';
import BackgroundColor from './BackgroundColor';
import styles from './theme.module.css';

export default function Theme() {
  return (
    <Modal cardClassName="theme__modal">
      <h3>Customize You Theme</h3>
      <small>Change the primary and background color to your preference</small>
      <div className={styles['theme__primary-wrapper']}>
        <h5>Primary Color</h5>
        <div className={styles['theme__primary-colors']}>
          {primaryColors.map((pColor) => (
            <PrimaryColor key={pColor.className} className={pColor.className} />
          ))}
        </div>
      </div>
      <div className={styles['theme__background-wrapper']}>
        <h5>Background Color</h5>
        <div className={styles['theme__background-colors']}>
          {backgroundColors.map((bColor) => (
            <BackgroundColor key={bColor.className} className={bColor.className} />
          ))}
        </div>
      </div>
    </Modal>
  );
}
