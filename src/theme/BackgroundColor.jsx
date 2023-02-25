import styles from './theme.module.css';
import { useThemeContext } from '../context/theme-context';

export default function BackgroundColor({ className }) {
  const { themeHandler } = useThemeContext();
  return <button onClick={() => themeHandler(className)} className={styles[className]}></button>;
}
