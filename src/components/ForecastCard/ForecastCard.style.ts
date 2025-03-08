import { StyleSheet, Dimensions } from 'react-native';
import { wScale, hScale } from '../../utils/scaling';
import { COLORS } from '../../styles/colors';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  backgroundImage: {
    width: width, // Ekran genişliği
    height: height, // Ekran yüksekliği
     // Resmi ekrana sığdır, taşma yapmasın
   
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Hafif karartma efekti
    justifyContent: 'center',
    alignItems: 'center',
    padding: wScale(20),
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  temperature: {
    fontSize: wScale(60),
    fontWeight: 'bold',
    color: '#FFF',
    marginVertical: hScale(10),
  },
  weatherCondition: {
    fontSize: wScale(22),
    color: '#FFF',
    fontWeight: '600',
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: hScale(20),
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailText: {
    fontSize: wScale(18),
    color: '#FFF',
    marginLeft: wScale(6),
  },
  errorText: {
    fontSize: wScale(18),
    color: COLORS.warning,
    textAlign: 'center',
  },
});
