// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend) // Load translations from JSON files
  .use(LanguageDetector) // Detect the user's language
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    fallbackLng: 'en', // Fallback language
    supportedLngs: ['en', 'am'], // Supported languages
    backend: {
        // for all available options read the backend's repository readme file
        loadPath: '/locales/{{lng}}/translation.json'
      },
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
