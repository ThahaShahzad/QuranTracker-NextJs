import { useEffect, useState } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';
import { useTheme } from 'next-themes';

const FloatingButton: React.FC = ({ children }) => {
  return <button className='p-4 rounded-full bg-primary fixed bottom-0 right-0'>{children}</button>;
};

const ThemeToggleFloatingButton = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === 'dark';
  if (mounted) {
    return (
      <button
        className='p-4 rounded-full bg-primary fixed bottom-5 right-5'
        onClick={() => setTheme(`${isDarkMode ? 'light' : 'dark'}`)}
      >
        {isDarkMode ? <BsSun /> : <BsMoon />}
      </button>
    );
  } else {
    return null;
  }
};

export { FloatingButton, ThemeToggleFloatingButton };
