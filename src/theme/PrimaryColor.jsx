import styles from './theme.module.css';

export default function PrimaryColor({ className }) {
  return <button className={styles[className]}></button>;
}
