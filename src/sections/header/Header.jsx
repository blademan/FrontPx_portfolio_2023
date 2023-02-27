import { useEffect } from 'react';
import HeaderImage from '../../assets/header.jpg';
import data from './data';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './header.module.css';
import SocialLink from '../../components/SocialLink';
import React from 'react';

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <header id="header">
      <div className={`container  ${styles.header__container}`}>
        <div className={styles.header__profile} data-aos="fade-up">
          <img src={HeaderImage} alt="Portrait" />
        </div>
        <h3 data-aos="fade-up">Eduards Leimanis</h3>
        <p data-aos="fade-up">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente corrupti vero beatae
          quam soluta, suscipit placeat iusto officiis nihil unde praesentium sit mollitia facilis!
          Dolor eius dolores error praesentium corporis.
        </p>
        <div data-aos="fade-up" className={styles.header__cta}>
          <a href="#contact" className="btn primary">
            Let's Talk
          </a>
          <a href="#portfolio" className="btn light">
            My Work
          </a>
        </div>
        <div className={styles.header__socials}>
          {data.map((item) => (
            <SocialLink key={item.id} item={item} />
          ))}
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);
