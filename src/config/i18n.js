import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from '../assets/locales/en.json';
import kmTranslation from '../assets/locales/km.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: enTranslation,
      km: kmTranslation,
    },
    lng: 'en', // default starter language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safe from xss
    },
  });

export default i18n;