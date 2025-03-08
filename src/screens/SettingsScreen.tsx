import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-iconify';
import { wScale, hScale } from '../utils/scaling';
import { COLORS } from '../styles/colors';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';



// Stack Navigasyon parametreleri
type SettingStackParamList = {
  SettingsMain: undefined;
  Profile: undefined;
  Language: undefined;
  Notifications: undefined;
};

// Navigation prop'unun tipini belirle
type SettingsScreenNavigationProp = NativeStackNavigationProp<SettingStackParamList, 'SettingsMain'>;

interface SettingsProps {
  navigation: SettingsScreenNavigationProp;
}

const SettingsScreen: React.FC<SettingsProps> = ({ navigation }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>⚙️ Ayarlar</Text>

      {/* Profil Ayarları */}
      <TouchableOpacity style={styles.settingItem} onPress={() => navigation.navigate('Profile')}>
        <Icon icon="mdi:account-circle" size={28} color={COLORS.text} />
        <Text style={styles.settingText}>Profilim</Text>
        <Icon icon="mdi:chevron-right" size={24} color={COLORS.text} />
      </TouchableOpacity>

      {/* Tema Ayarı */}
      <View style={styles.settingItem}>
        <Icon icon="mdi:theme-light-dark" size={28} color={COLORS.text} />
        <Text style={styles.settingText}>Koyu Mod</Text>
        <Switch 
          value={darkMode} 
          onValueChange={() => setDarkMode(!darkMode)} 
          thumbColor={darkMode ? COLORS.accent : "#FFF"}
          trackColor={{ false: "#DDD", true: COLORS.accent }}
        />
      </View>

      {/* Bildirim Ayarları */}
      <TouchableOpacity style={styles.settingItem} onPress={() => navigation.navigate('Notifications')}>
        <Icon icon="mdi:bell-outline" size={28} color={COLORS.text} />
        <Text style={styles.settingText}>Bildirimler</Text>
        <Icon icon="mdi:chevron-right" size={24} color={COLORS.text} />
      </TouchableOpacity>

      {/* Dil Seçimi */}
      <TouchableOpacity style={styles.settingItem} onPress={() => navigation.navigate('Language')}>
        <Icon icon="mdi:translate" size={28} color={COLORS.text} />
        <Text style={styles.settingText}>Dil Seçimi</Text>
        <Icon icon="mdi:chevron-right" size={24} color={COLORS.text} />
      </TouchableOpacity>

      {/* Çıkış Yap Butonu */}
      <TouchableOpacity style={styles.logoutButton}>
        <Icon icon="mdi:logout" size={28} color="#FFF" />
        <Text style={styles.logoutText}>Çıkış Yap</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: wScale(16),
  },
  header: {
    fontSize: wScale(26),
    fontWeight: 'bold',
    marginBottom: hScale(16),
    textAlign: 'center',
    color: COLORS.text,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.cardBackground,
    padding: wScale(14),
    borderRadius: wScale(10),
    marginBottom: hScale(12),
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  settingText: {
    fontSize: wScale(18),
    color: COLORS.text,
    flex: 1,
    marginLeft: wScale(10),
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.warning,
    padding: wScale(14),
    borderRadius: wScale(10),
    marginTop: hScale(20),
  },
  logoutText: {
    fontSize: wScale(18),
    color: '#FFF',
    marginLeft: wScale(10),
  },
});

export default SettingsScreen;
