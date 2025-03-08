import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { wScale, hScale } from '../utils/scaling';

const CameraScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AI Kamera</Text>
      <Text style={styles.text}>Kamera görüntüsü burada olacak.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: wScale(20),
  },
  title: {
    fontSize: wScale(24),
    marginBottom: hScale(20),
  },
  text: {
    fontSize: wScale(16),
  },
});

export default CameraScreen;