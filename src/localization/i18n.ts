import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Desteklenen Diller
const LANGUAGES = {
  en: { translation: require('./locales/en.json') },
  tr: { translation: require('./locales/tr.json') },
};

// Kullanıcının sistem dilini al
const getDeviceLanguage = () => {
  const locales = RNLocalize.getLocales();
  return locales[0]?.languageCode || 'en'; // Varsayılan İngilizce
};

const loadLanguage = async () => {
  const storedLanguage = await AsyncStorage.getItem('appLanguage');
  return storedLanguage || getDeviceLanguage();
};

loadLanguage().then((lang) => {
  i18next.use(initReactI18next).init({
    resources: LANGUAGES,
    lng: lang,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });
});

export const changeLanguage = async (lang: string) => {
  await AsyncStorage.setItem('appLanguage', lang);
  i18next.changeLanguage(lang);
};

export default i18next;
