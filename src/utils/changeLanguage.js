// src/utils/changeLanguage.js

// 1. Get the current active language from storage or browser fallback
export function getCurrentLanguage() {
  return localStorage.getItem('language') || navigator.language.split('-')[0] || 'en';
}

// 2. Function to update the language and reload the page for headers
export function changeLanguage(selectedLanguage) {
  localStorage.setItem('language', selectedLanguage);
  
  // Instantly reloads the page so apiClient.js locks in the new Accept-Language header
  window.location.reload();
}