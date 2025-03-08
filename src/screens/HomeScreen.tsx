import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, Text, Animated } from 'react-native';
import { wScale, hScale } from '../utils/scaling';
import SensorCard from '../components/SensorCard/SensorCard';
import { COLORS } from '../styles/colors';

const HomeScreen = () => {
  const [expanded, setExpanded] = useState(false);
  const animation = new Animated.Value(expanded ? 1 : 0);

  const toggleExpand = () => {
    setExpanded(!expanded);
    Animated.timing(animation, {
      toValue: expanded ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const heightInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, hScale(350)], // Açılınca tüm kartları kapsayacak yükseklik
  });

  return (
    <ScrollView style={styles.container}>
      {/* Tüm bilgileri aç/kapat butonu */}
      <TouchableOpacity onPress={toggleExpand} style={styles.toggleButton}>
        <Text style={styles.toggleButtonText}>
          {expanded ? 'Değerleri Gizle' : 'Değerleri Göster'}
        </Text>
      </TouchableOpacity>

      {/* Sensör Kartlarının Tamamı Açılır-Kapanır */}
      <Animated.View style={[styles.cardsContainer, { height: heightInterpolation }]}>
        <SensorCard title="Hava Nemi" value="65%" icon="mdi:water" details="Hava nemi yüksekse bitkiler daha az su kaybeder." expanded={expanded} />
        <SensorCard title="Sıcaklık" value="24°C" icon="mdi:thermometer" details="Optimum sıcaklık: 18-26°C" expanded={expanded} />
        <SensorCard title="Toprak Nemi" value="45%" icon="mdi:leaf" details="Toprak nem seviyesi ideal aralıkta." expanded={expanded} />
        <SensorCard title="Toprak Sıcaklığı" value="18°C" icon="mdi:fire" details="Toprak sıcaklığı, bitki büyümesini doğrudan etkiler." expanded={expanded} />
        <SensorCard title="Rüzgar Hızı" value="10 km/s" icon="mdi:weather-windy" details="Rüzgar hızı düşük seviyede, bitkilere zarar vermez." expanded={expanded} />
      </Animated.View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: wScale(20),
  },
  toggleButton: {
    backgroundColor: COLORS.primary,
    padding: hScale(12),
    borderRadius: wScale(8),
    alignItems: 'center',
    marginBottom: hScale(16),
  },
  toggleButtonText: {
    color: COLORS.background,
    fontSize: wScale(16),
    fontWeight: 'bold',
  },
  cardsContainer: {
    overflow: 'hidden', // Animasyon sırasında düzgün açılmasını sağlıyor
  },
});

export default HomeScreen;
