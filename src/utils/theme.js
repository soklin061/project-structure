// src/utils/theme.js

// 1. Check current active theme
export function getCurrentTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) return savedTheme;
  
  // System preferences fallback (returns 'dark' or 'light')
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// 2. Apply theme directly to the HTML document element
export function initTheme() {
  const theme = getCurrentTheme();
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

// 3. Toggle between dark and light modes
export function toggleTheme() {
  const current = getCurrentTheme();
  const nextTheme = current === 'dark' ? 'light' : 'dark';
  
  localStorage.setItem('theme', nextTheme);
  
  if (nextTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  
  return nextTheme;
}