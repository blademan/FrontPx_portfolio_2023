import styles from './theme.module.css';
import { useThemeContext } from '../context/theme-context';

const BackgroundColor = ({ className }) => {
  const { themeHandler } = useThemeContext();
  return <button onClick={() => themeHandler(className)} className={styles[className]}></button>;
};
export default BackgroundColor;
