import styles from './theme.module.css';

export default function BackgroundColor({ className }) {
  return <button className={styles[className]}></button>;
}
