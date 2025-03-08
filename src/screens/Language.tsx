import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import i18next, { changeLanguage } from '../localization/i18n';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Language = () => {
  const { t } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18next.language);

  useEffect(() => {
    const loadLanguage = async () => {
      const storedLang = await AsyncStorage.getItem('appLanguage');
      if (storedLang) {
        setCurrentLang(storedLang);
      }
    };
    loadLanguage();
  }, []);

  const handleLanguageChange = async (lang: string) => {
    await changeLanguage(lang);
    await AsyncStorage.setItem('appLanguage', lang);
    setCurrentLang(lang);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('choose_language')}</Text>

      <TouchableOpacity
        style={[styles.button, currentLang === 'tr' && styles.activeButton]}
        onPress={() => handleLanguageChange('tr')}
      >
        <Text style={styles.buttonText}>{t('turkish')}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, currentLang === 'en' && styles.activeButton]}
        onPress={() => handleLanguageChange('en')}
      >
        <Text style={styles.buttonText}>{t('english')}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Language;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F4F4',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
  activeButton: {
    backgroundColor: '#146551',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
});
