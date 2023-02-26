import styles from './footer.module.css';
import data from './data';

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
          {socials.map(({ id, link, icon: Icon }) => (
            <a key={id} href={link} target="_blank" rel="noopener noreferrer">
              {<Icon />}
            </a>
          ))}
        </div>
      </nav>
      <div className={styles.footer__copyright}>
        <small>{new Date().getFullYear()} FrontPX Portfolio © All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
