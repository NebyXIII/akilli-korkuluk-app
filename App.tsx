import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import WeatherScreen from './src/screens/WeatherScreen';
import CameraScreen from './src/screens/CameraScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import LanguageScreen from './src/screens/Language';
import TabBar from './src/components/TabBar/TabBar';
import Profile from './src/screens/ProfileScreen';
import Notification from './src/screens/Notification';

// Stack ve Tab Navigators
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// **📌 1️⃣ TAB NAVIGATOR - ALT MENÜLER**
const TabNavigator = () => {
  return (
    <Tab.Navigator 
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <TabBar {...props} />} // **Özel TabBar burada entegre ediliyor!**
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Weather" component={WeatherScreen} />
      <Tab.Screen name="Camera" component={CameraScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

// **📌 2️⃣ STACK NAVIGATOR - TÜM UYGULAMA NAVİGASYONU**
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainTabs">
        <Stack.Screen name="MainTabs" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Language" component={LanguageScreen} options={{ title: 'Dil Seçimi' }} />
        <Stack.Screen name="Profile" component={Profile} options={{title:'Profile'}}/>
        <Stack.Screen name="Notifications" component={Notification} options={{title:'Notification',headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
