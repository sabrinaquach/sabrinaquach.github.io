import { useEffect, useState } from 'react';

const STORAGE_KEY = 'theme';

// public/index.html sets data-theme before first paint, so start from whatever
// it chose rather than re-deriving it here.
const getInitialTheme = () =>
  document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';

const useTheme = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      // Storage can be blocked (private mode); the toggle still works per visit.
    }
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  return { theme, toggleTheme };
};

export default useTheme;
