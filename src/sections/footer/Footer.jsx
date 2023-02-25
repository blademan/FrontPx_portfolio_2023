import styles from './footer.module.css';
import data from './data';

export default function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <ul className={styles.nav__menu}>
          {data.links.map(({ id, link, title }) => (
            <li key={id}>
              <a href={link}>{title}</a>
            </li>
          ))}
        </ul>
        <div className={styles.footer__socials}>
          {data.socials.map(({ id, link, icon: Icon }) => (
            <a key={id} href={link}>
              {<Icon />}
            </a>
          ))}
        </div>
      </div>
      <div className={styles.footer__copyright}>
        <small>{new Date().getFullYear()} FrontPX TUTORIALS © All Rights Reserved</small>
      </div>
    </footer>
  );
}
