import React from 'react';
import { useColorScheme } from '../utils/useColorScheme';

const DarkModeToggle: React.FC = () => {
  const { isDark, setIsDark } = useColorScheme();

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="dark-mode-toggle"
      aria-label="Toggle dark mode"
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? '🌙' : '☀️'}
    </button>
  );
};

export default DarkModeToggle;
