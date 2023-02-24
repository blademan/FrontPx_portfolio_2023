import styles from './card.module.css';

export default function CardAbout({ children, className, onClick }) {
  return (
    <article className={`${styles.card} ${styles[className]}`} onClick={onClick}>
      {children}
    </article>
  );
}
