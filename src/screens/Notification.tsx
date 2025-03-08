import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import  Icon  from 'react-native-iconify';
import { COLORS } from '../styles/colors'; // Renkleri dışarıdan çekiyoruz

const notifications = [
  { id: '1', type: 'danger', title: '🔥 Acil Durum!', message: 'Toprak sıcaklığı çok yüksek!', icon: 'ic:baseline-warning' },
  { id: '2', type: 'sensorWarning', title: '⚠️ Sensör Uyarısı', message: 'Rüzgar hızı 20 km/s üzerine çıktı.', icon: 'ic:baseline-air' },
  { id: '3', type: 'info', title: '📡 Sensör Verisi', message: 'Toprak nem seviyesi %30’un altına düştü.', icon: 'ic:baseline-thermostat' },
  { id: '4', type: 'warning', title: '⚠️ Hata!', message: 'Hoparlör bağlantısı kesildi.', icon: 'ic:baseline-error' },
  { id: '5', type: 'success', title: '✅ Sistem Çalışıyor', message: 'Cihaz normal şekilde çalışıyor.', icon: 'ic:baseline-check-circle' },
];

const getColor = (type: string) => {
  switch (type) {
    case 'danger': return COLORS.danger; // 🔥 Acil Durum (Kırmızı)
    case 'sensorWarning': return COLORS.sensorWarning; // ⚠️ Sensör Uyarıları (Turuncu)
    case 'info': return COLORS.sensorInfo; // 📡 Sensör Verileri (Mavi)
    case 'warning': return COLORS.warning; // ⚠️ Genel Hata (Turuncu)
    case 'success': return COLORS.systemOK; // ✅ Cihaz Normal (Yeşil)
    default: return COLORS.accent;
  }
};

const Notifications = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>📢 Cihaz Bildirimleri</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.card, { borderLeftColor: getColor(item.type) }]}>
            <Icon icon={item.icon} size={28} color={getColor(item.type)} style={styles.icon} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.message}>{item.message}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 10,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.cardBackground,
    padding: 16,
    marginVertical: 8,
    borderRadius: 12,
    borderLeftWidth: 6, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, 
  },
  icon: {
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  message: {
    fontSize: 14,
    color: COLORS.text,
    marginTop: 4,
  },
});
