import { StyleSheet } from 'react-native';
import { wScale, hScale } from '../utils/scaling';
import { styles } from '../components/SensorCard/SensorCard.style';

// Renk paleti
export const COLORS = {
  primary: '#4CAF50',       // Yeşil (tarım teması)
  background: '#FFFFFF',
  text: '#333333',
  card: '#F5F5F5',
  error: '#FF5252',
};

// Yazı boyutları
export const FONTS = {
  small: wScale(12),
  medium: wScale(16),
  large: wScale(20),
  xLarge: wScale(24),
};

// Spacing (boşluklar)
export const SPACING = {
  small: wScale(8),
  medium: wScale(16),
  large: wScale(24),
};

// Global stiller
export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SPACING.medium,
  },
  title: {
    fontSize: FONTS.xLarge,
    color: COLORS.text,
    fontWeight: 'bold',
    marginBottom: SPACING.medium,
  },
  card: {
    backgroundColor: COLORS.card,
    borderRadius: wScale(8),
    padding: SPACING.medium,
    marginBottom: SPACING.medium,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: SPACING.medium,
    borderRadius: wScale(8),
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.background,
    fontSize: FONTS.medium,
    fontWeight: 'bold',
  },
});

export default styles;