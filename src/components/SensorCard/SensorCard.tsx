import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-iconify';
import { styles } from './SensorCard.style';
import { wScale } from '../../utils/scaling';
import { COLORS } from '../../styles/colors';

interface SensorCardProps {
  title: string;
  value: string;
  icon: string;
  details?: string;
  expanded: boolean; // Tüm bilgiler açılınca görünecek
}

const SensorCard = ({ title, value, icon, details, expanded }: SensorCardProps) => {
  if (!expanded) return null; // Eğer expanded değilse hiç göstermiyoruz
  
  return (
    <View style={styles.cardContainer}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Icon icon={icon} size={wScale(24)} color={COLORS.primary} />
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsText}>{details}</Text>
      </View>
    </View>
  );
};

export default SensorCard;
