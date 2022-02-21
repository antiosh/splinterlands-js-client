import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en/index';

export const resources = {
  en,
} as const;

i18n.use(initReactI18next).init({
  lng: 'en',
  ns: Object.keys(en),
  interpolation: {
    escapeValue: false,
  },
  resources,
});
