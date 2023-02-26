import styles from './portfolio.module.css';
import Card from '../../components/Card';

export default function Project({ project }) {
  return (
    <div className={styles.portfolio__project} data-aos="fade-up">
      <Card key={project.id} className="portfolio__project">
        <div className={styles['portfolio__project-image']}>
          <img src={project.image} alt="Portfolio Project Image" />
        </div>
        <h5>{project.title}</h5>
        <p>{project.desc}</p>
        <div className={styles['portfolio__project-cta']}>
          <a
            href={project.demo}
            className={`btn sm ${styles['btn']}  ${styles['sm']}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
          <a
            href={project.github}
            className={`btn sm primary ${styles['btn']}  ${styles['sm']} ${styles['primary']}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
      </Card>
    </div>
  );
}
