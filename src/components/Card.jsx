import styles from './card.module.css';

export default function Card({ children, className, onClick }) {
  return (
    <article className={`${styles.card} ${styles[className]} `} onClick={onClick}>
      {children}
    </article>
  );
}
