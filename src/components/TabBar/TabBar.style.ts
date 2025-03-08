import { StyleSheet } from 'react-native';
import { wScale, hScale } from '../../utils/scaling';
import { COLORS } from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: hScale(65),
    backgroundColor: COLORS.background, // Arka plan rengi
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    shadowColor: COLORS.text,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    position: 'relative', // Absolute olursa görünmeyebilir, relative yaptım
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hScale(10),
  },
  label: {
    fontSize: wScale(12),
    marginTop: hScale(4),
    fontWeight: '500',
    color: COLORS.text,
  },
});
