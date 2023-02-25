import styles from './theme.module.css';
import { useThemeContext } from '../context/theme-context';

export default function PrimaryColor({ className }) {
  const { themeHandler } = useThemeContext();

  return <button className={styles[className]} onClick={() => themeHandler(className)}></button>;
}
