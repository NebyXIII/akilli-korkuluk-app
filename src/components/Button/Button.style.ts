import { StyleSheet } from 'react-native';
import { wScale, hScale } from '../../utils/scaling';
import { COLORS, SPACING } from '../../styles/style';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    padding: SPACING.medium,
    borderRadius: wScale(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabled: {
    backgroundColor: '#CCCCCC', // Devre dışı bırakıldığında gri renk
  },
  text: {
    color: COLORS.background,
    fontSize: SPACING.medium,
    fontWeight: 'bold',
  },
  icon: {
    marginRight: SPACING.small, // İkon ile metin arası boşluk
  },
});