import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-iconify';
import { styles } from './TabBar.style';
import { wScale } from '../../utils/scaling';

interface TabBarProps {
  state: any;
  descriptors: any;
  navigation: any;
}

// Geçerli route isimleri (Ekran isimleri)
type RouteName = 'Home' | 'Weather' | 'Camera' | 'Settings';

const TabBar: React.FC<TabBarProps> = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label = options.title || route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        // Route isimlerine uygun ikon ataması
        const icon = {
          Home: 'mdi:home',
          Weather: 'mdi:weather-cloudy',
          Camera: 'mdi:camera',
          Settings: 'mdi:cog',
        }[route.name as RouteName] || 'mdi:alert';

        return (
          <TouchableOpacity key={route.key} onPress={onPress} style={styles.tab}>
            <Icon icon={icon} size={wScale(28)} color={isFocused ? '#4CAF50' : '#333'} />
            <Text style={[styles.label, { color: isFocused ? '#4CAF50' : '#333' }]}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;
