import AboutImage from '../../assets/about.jpg';
import CV from '../../assets/cv.pdf';
import { HiDownload } from 'react-icons/hi';
import styles from './about.module.css';
import data from './data';
import Card from '../../components/Card';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={`container ${styles.about__container}`}>
        <div className={styles.about__left}>
          <div className={styles.about__portrait}>
            <img src={AboutImage} alt="About Image" />
          </div>
        </div>
        <div className={styles.about__right}>
          <h2>About Me</h2>
          <div className={styles.about__cards}>
            {data.map(({ id, title, desc, icon }) => (
              <Card
                key={id}
                title={title}
                desc={desc}
                className="about__card"
                Icon={icon}
                iconStyle="about__card-icon"
              />
            ))}
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur sunt voluptatum
            commodi laudantium? Saepe amet perspiciatis ut tempora dolore.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur sunt voluptatum
            commodi laudantium? Saepe amet perspiciatis ut tempora dolore. Quaerat, maxime aperiam
            expedita minus laboriosam possimus fuga ex eligendi natus!
          </p>
          <a href={CV} download className={`btn primary ${styles.btn__cv}`}>
            Dowbload CV <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
}
