import React from 'react';
import styles from './footer.module.css';
import data from './data';
import SocialLink from '../../components/SocialLink';

const thisYear = new Date().getFullYear();

const Footer = () => {
  const { links, socials } = data;
  return (
    <footer id="footer">
      <nav className="container">
        <ul className={styles.nav__menu}>
          {links.map(({ id, link, title }) => (
            <li key={id}>
              <a href={link}>{title}</a>
            </li>
          ))}
        </ul>
        <div className={styles.footer__socials}>
          {socials.map((item) => (
            <SocialLink key={item.id} item={item} />
          ))}
        </div>
      </nav>
      <div className={styles.footer__copyright}>
        <small>{thisYear} FrontPX Portfolio © All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
