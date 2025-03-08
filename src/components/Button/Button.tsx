import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-iconify';
import { styles } from './Button.style';
import { COLORS, SPACING } from '../../styles/style';

interface ButtonProps {
  title: string;
  onPress: () => void;
  icon?: string; // İsteğe bağlı ikon
  disabled?: boolean; // İsteğe bağlı devre dışı bırakma
}

const Button = ({ title, onPress, icon, disabled = false }: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, disabled && styles.disabled]}
      disabled={disabled}
    >
      {icon && <Icon icon={icon} size={SPACING.medium} color={COLORS.background} style={styles.icon} />}
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;