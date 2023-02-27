import React from 'react';
import Logo from '../../assets/logo.jpg';
import data from './data';
import { IoIosColorPalette } from 'react-icons/io';
import { useModalContext } from '../../context/modal-context';
import styles from './navbar.module.css';

const Navbar = () => {
  const { showModalHandler } = useModalContext();

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.nav_container}`}>
        <a href="index.html" className={styles.nav__logo}>
          <img src={Logo} alt="Logo" />
        </a>
        <ul className={styles.nav__menu}>
          {data.map(({ id, link, title }) => (
            <li key={id}>
              <a href={link}>{title}</a>
            </li>
          ))}
        </ul>
        <button onClick={() => showModalHandler()} id={styles.theme__icon}>
          <IoIosColorPalette />
        </button>
      </div>
    </nav>
  );
};

export default React.memo(Navbar);
