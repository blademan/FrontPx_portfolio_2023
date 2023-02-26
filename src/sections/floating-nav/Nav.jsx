import styles from './floating-nav.module.css';

const Nav = ({ className, item }) => {
  const { link, icon: Icon } = item;
  return (
    <li className={styles[className]}>
      <a href={link}>{<Icon />}</a>
    </li>
  );
};
export default Nav;
