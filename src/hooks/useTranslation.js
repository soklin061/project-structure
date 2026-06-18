// src/hooks/useTranslation.js
import { getCurrentLanguage } from '../utils/acceptLanguage';
import en from '../assets/locales/en.json';
import km from '../assets/locales/km.json';

const translations = { en, km };

export function useTranslation() {
  const locale = getCurrentLanguage();
  const dict = translations[locale] || translations['en'];

  // Deep key lookup helper function (e.g., t('products.title'))
  const t = (key) => {
    return key.split('.').reduce((obj, i) => (obj ? obj[i] : null), dict) || key;
  };

  return { t, locale };
}