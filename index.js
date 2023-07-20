/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import enTranslation from './locales/en.json';
import frTranslation from './locales/fr.json';
import arTranslation from './locales/ar.json';

i18n.use(initReactI18next).init({
    resources: {
      en: { translation: enTranslation, },
  
      fr: { translation: frTranslation, },

      ar: { translation: arTranslation, },
    },
  
    lng: "en",
    // Set the default language
  
    fallbackLng: "en",
    // Set the fallback language if a translation is missing
  });

AppRegistry.registerComponent(appName, () => App);
