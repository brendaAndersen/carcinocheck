import { useTheme } from './../app/hooks/useTheme';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="rounded-lg"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
};