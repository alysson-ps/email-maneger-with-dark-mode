import React, { createContext, useState, FC } from 'react';

const ThemeContext = createContext<IThemeContext>({
  theme: '',
  setTheme: () => console.log('initial'),
});

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<string>('light');
  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeContext;
