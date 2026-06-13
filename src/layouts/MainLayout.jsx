import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
// 1. Import your new utility functions using relative paths
import { getCurrentLanguage, changeLanguage } from '../utils/changeLanguage';
import { getCurrentTheme, toggleTheme } from '../utils/theme';

export default function MainLayout() {
  // 2. Fetch the active language to keep the select dropdown synced
  const currentLang = getCurrentLanguage();
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    setTheme(getCurrentTheme());
  }, []);

  const handleThemeToggle = () => {
    const newTheme = toggleTheme();
    setTheme(newTheme);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans">
      <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        {/* Adjusted to a flex container to push dropdown nicely to the right side */}
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            My Premium Store
          </h1>

          {/* 3. Premium Tailwind Language Dropdown Selection */}
          <div className="flex items-center space-x-2">
            <label htmlFor="lang-select" className="text-sm font-medium text-slate-500">
              Language:
            </label>
            <button
              onClick={handleThemeToggle}
              className="p-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800 shadow-sm transition duration-150 text-sm font-semibold"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
            </button>
            <select
              id="lang-select"
              value={currentLang}
              // Call the utility function directly on change!
              onChange={(e) => changeLanguage(e.target.value)}
              className="block rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-semibold text-slate-700 shadow-sm outline-none transition duration-150 ease-in-out hover:border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 cursor-pointer"
            >
              <option value="en">🇺🇸 English</option>
              <option value="km">🇰🇭 ភាសាខ្មែរ</option>
              <option value="zh">🇨🇳 中文</option>
            </select>
          </div>
        </div>
      </header>

      {/* Premium Sticky Navigation */}
      <Navbar />
      
      {/* Dynamic Route Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Outlet />
      </main>
    </div>
  );
}