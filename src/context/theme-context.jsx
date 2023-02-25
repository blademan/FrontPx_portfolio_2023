import { createContext, useContext, useReducer, useEffect } from 'react';
import themeReducer from './themeReducer';

export const ThemeContext = createContext();

const initialState = JSON.parse(localStorage.getItem('themeSettings')) || {
  primary: 'color-1',
  background: 'bg-1',
};

export function ThemeProvider({ children }) {
  console.log(JSON.parse(localStorage.getItem('themeSettings')));

  const [themeState, dispatchTheme] = useReducer(themeReducer, initialState);

  const themeHandler = (buttonClassName) => {
    dispatchTheme({ type: buttonClassName });
  };

  useEffect(() => {
    localStorage.setItem('themeSettings', JSON.stringify(themeState));
  }, [themeState.primary, themeState.background]);

  return (
    <ThemeContext.Provider value={{ themeState, themeHandler }}>{children}</ThemeContext.Provider>
  );
}

// custom hook useContext
export const useThemeContext = () => {
  return useContext(ThemeContext);
};
