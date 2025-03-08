import { StyleSheet } from 'react-native';
import { wScale, hScale } from '../../utils/scaling';
import { COLORS } from '../../styles/colors';

export const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    marginBottom: hScale(16),
    backgroundColor: COLORS.cardBackground,
    borderRadius: wScale(10),
    overflow: 'hidden',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: wScale(16),
    backgroundColor: COLORS.background,
    borderRadius: wScale(10),
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  iconContainer: {
    marginRight: wScale(16),
  },
  title: {
    fontSize: wScale(14),
    color: COLORS.text,
    fontWeight: '500',
  },
  value: {
    fontSize: wScale(18),
    color: COLORS.primary,
    fontWeight: 'bold',
    marginLeft: 'auto',
  },
  detailsContainer: {
    backgroundColor: COLORS.cardBackground,
    paddingHorizontal: wScale(16),
    paddingVertical: hScale(10),
  },
  detailsText: {
    fontSize: wScale(14),
    color: COLORS.text,
  },
});
