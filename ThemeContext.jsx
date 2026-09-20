import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const ThemeContext = createContext(null);
const STORAGE_KEY = 'aps-theme';

function resolveIsDark(mode) {
  if (mode === 'dark') return true;
  if (mode === 'light') return false;
  // 'system'
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState(() => localStorage.getItem(STORAGE_KEY) || 'light');

  useEffect(() => {
    const isDark = resolveIsDark(mode);
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem(STORAGE_KEY, mode);
  }, [mode]);

  useEffect(() => {
    if (mode !== 'system') return undefined;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const listener = () => document.documentElement.classList.toggle('dark', mq.matches);
    mq.addEventListener('change', listener);
    return () => mq.removeEventListener('change', listener);
  }, [mode]);

  const value = useMemo(() => ({ mode, setMode, isDark: resolveIsDark(mode) }), [mode]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider');
  return ctx;
}
