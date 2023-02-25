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
            {data.map(({ id, title, desc, icon: Icon }) => (
              <Card key={id} className="about__card">
                <span className={styles['about__card-icon']}>{<Icon />}</span>
                <h5>{title}</h5>
                <small>{desc}</small>
              </Card>
            ))}
          </div>
          <p>
            Building projects my clients love have always been my passion. Being in the web
            development industry for over 3 years and serving more than 70 happy clients worldwide,
            I'm always motivated to do more!
          </p>
          <p>
            Hi, my name is Eduards from Latvia. I'm a web developer with a Bachelors degree in
            Computer Science. My top priority is to get your business online the right way, giving
            you industry-standard design and all the functionality you need to operate smoothly
            online. Get in touch today with the details of your project let's get started! Check out
            my resume below!
          </p>
          <a href={CV} download className={`btn primary ${styles.btn}`}>
            Dowbload CV <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
}
