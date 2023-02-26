import styles from './portfolio.module.css';
import Project from './Project';

const Projects = ({ projects }) => {
  return (
    <div className={styles.portfolio__projects}>
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};
export default Projects;
