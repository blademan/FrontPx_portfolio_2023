import styles from './card.module.css';

export default function Card({ iconStyle, title, desc, className, Icon, onClick }) {
  return (
    <article className={`${styles.card} ${styles[className]}`} onClick={onClick}>
      <span className={styles[iconStyle]}>{<Icon />}</span>
      {iconStyle === 'service__icon' ? (
        <div className="service__details">
          <h4>{title}</h4>
          <p>{desc}</p>
        </div>
      ) : (
        <>
          <h5>{title}</h5>
          <small>{desc}</small>
        </>
      )}
    </article>
  );
}
