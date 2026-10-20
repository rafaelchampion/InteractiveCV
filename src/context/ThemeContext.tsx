'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Theme } from '@/types';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  toggleTheme: () => {},
  setTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('theme') as Theme;
      if (savedTheme === 'light' || savedTheme === 'dark') {
        applyTheme(savedTheme);
      } else {
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        applyTheme(prefersDark ? 'dark' : 'light');
      }
    } catch {
      applyTheme('dark');
    }
    setMounted(true);
  }, []);

  const applyTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    try {
      if (typeof document !== 'undefined') {
        document.documentElement.setAttribute('data-theme', newTheme);
        if (newTheme === 'dark') {
          document.body.classList.add('dark-mode');
        } else {
          document.body.classList.remove('dark-mode');
        }
        localStorage.setItem('theme', newTheme);
      }
    } catch {
      // ignore
    }
  };

  const toggleTheme = () => {
    applyTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const setTheme = (newTheme: Theme) => {
    applyTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
