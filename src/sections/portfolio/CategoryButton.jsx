import styles from './portfolio.module.css';

export default function CategoryButton({ category, className, changeCategoryOnClick }) {
  return (
    <button
      onClick={() => changeCategoryOnClick(category)}
      className={`btn ${styles['cat__btn']}  ${styles['btn']} ${styles[className]}`}
    >
      {category}
    </button>
  );
}
