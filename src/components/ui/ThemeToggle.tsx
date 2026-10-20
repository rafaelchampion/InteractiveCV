'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { FaCircleHalfStroke } from 'react-icons/fa6';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Dark/Light Theme"
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="flex items-center justify-center w-9 h-9 rounded-full bg-bg-elevated border border-border-subtle text-text-secondary hover:text-text-primary hover:border-border-focus hover:bg-bg-surface transition-all hover:scale-105 active:scale-95"
    >
      <FaCircleHalfStroke className="w-4 h-4" />
    </button>
  );
};
