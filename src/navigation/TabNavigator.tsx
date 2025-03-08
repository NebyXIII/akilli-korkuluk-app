import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import WeatherScreen from '../screens/WeatherScreen';
import CameraScreen from '../screens/CameraScreen';
import SettingStack from './SettingStack'; // 🔥 Burada Settings için Stack kullandık!
import TabBar from '../components/TabBar/TabBar';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Weather" component={WeatherScreen} />
      <Tab.Screen name="Camera" component={CameraScreen} />
      <Tab.Screen name="Settings" component={SettingStack} /> {/* 🔥 Burada doğrudan Stack çağırdık */}
    </Tab.Navigator>
  );
};

export default TabNavigator;
