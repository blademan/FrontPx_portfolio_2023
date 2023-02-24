import styles from './card.module.css';

export default function Card({ children, className, onClick, theme = '' }) {
  return (
    <article
      className={`${styles.card} ${styles[className]} ${theme && styles[theme]}`}
      onClick={onClick}
    >
      {children}
    </article>
  );
}
