import CategoryButton from './CategoryButton';
import styles from './portfolio.module.css';
import { useState } from 'react';

const ProjectsCategories = ({ categories, filterProjectsHandler }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  function onChangeCategory(active) {
    filterProjectsHandler(active);
    setActiveCategory(active);
  }

  return (
    <div className={styles.portfolio__categories}>
      {categories.map((category) => {
        return (
          <CategoryButton
            changeCategoryOnClick={onChangeCategory}
            key={[category]}
            category={category}
            className={category === activeCategory ? 'primary' : 'white'}
          />
        );
      })}
    </div>
  );
};
export default ProjectsCategories;
