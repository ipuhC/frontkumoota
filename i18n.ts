
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationGlobalES from './src/translations/es/global.json';
import traslationRecoveryES from './src/translations/es/recovery.json';
import traslationRegisterES from './src/translations/es/register.json';
import traslationNavBarES from './src/translations/es/navBar.json';

import traslationGlobalEN from './src/translations/en/global.json';
import traslationRecoveryEN from './src/translations/en/recovery.json';
import traslationRegisterEN from './src/translations/en/register.json';
import traslationNavBarEN from './src/translations/en/navBar.json';



i18n.use(initReactI18next).init({
  resources: {
    en: {
      global:traslationGlobalEN ,
      recovery:traslationRecoveryEN,
      register:traslationRegisterEN,
      navBar:traslationNavBarEN
    },
    es: {
      global:translationGlobalES ,
      recovery:traslationRecoveryES,
      register:traslationRegisterES,
      navBar:traslationNavBarES
    }
  }, 
  lng: 'en',
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;