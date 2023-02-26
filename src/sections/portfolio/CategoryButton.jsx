import styles from './portfolio.module.css';

const CategoryButton = ({ category, className, changeCategoryOnClick }) => {
  return (
    <button
      onClick={() => changeCategoryOnClick(category)}
      className={`btn ${styles['cat__btn']}  ${styles['btn']} ${styles[className]}`}
    >
      {category}
    </button>
  );
};
export default CategoryButton;
